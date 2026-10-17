import { randomUUID } from 'node:crypto';
import path from 'node:path';
import { createServer as createHttpServer } from 'node:http';

import { clerkClient, clerkMiddleware, getAuth } from '@clerk/express';
import { publishableKeyFromHost } from '@clerk/shared/keys';
import type { Request, RequestHandler, Response } from 'express';
import express from 'express';
import { Pool } from 'pg';
import { createServer as createViteServer } from 'vite';

import { clerkProxyMiddleware, CLERK_PROXY_PATH, getClerkProxyHost } from './middlewares/clerkProxyMiddleware';

const PORT = Number(process.env.PORT || 8080);
const ADMIN_EMAIL = process.env.SOFA2_ADMIN_EMAIL?.trim().toLowerCase() ?? '';
const DEALER_MODULES = new Set([
  'dashboard',
  'price-policy',
  'quotes',
  'dealer-orders',
  'debts',
  'sales-docs',
]);
const RECORD_MODULES = new Set(['price-policy', 'quotes', 'dealer-orders', 'debts', 'sales-docs']);

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is required for the dealer portal API.');
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const app = express();
const httpServer = createHttpServer(app);

type Identity =
  | { role: 'admin'; userId: string; email: string }
  | {
      role: 'dealer';
      userId: string;
      email: string;
      dealerId: string;
      profile: Record<string, unknown>;
    };

type DealerRequest = Request & { dealerIdentity?: Identity };

const asyncRoute =
  (handler: (req: DealerRequest, res: Response) => Promise<void>): RequestHandler =>
  (req, res, next) => {
    void handler(req as DealerRequest, res).catch(next);
  };

const asText = (value: unknown, limit = 2000) => String(value ?? '').trim().slice(0, limit);
const asMoney = (value: unknown) => Math.max(0, Number(String(value ?? '').replace(/[^\d.-]/g, '')) || 0);
const isEnabled = (value: unknown) => value === true || ['có', 'yes', 'true', '1'].includes(asText(value, 20).toLowerCase());

function slugify(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '') || randomUUID();
}

function validRows(value: unknown): Record<string, unknown>[] | null {
  if (!Array.isArray(value) || value.length > 1000) return null;
  if (!value.every((row) => row && typeof row === 'object' && !Array.isArray(row))) return null;
  return value as Record<string, unknown>[];
}

async function resolveIdentity(req: Request, res: Response): Promise<Identity | null> {
  const { userId } = getAuth(req);
  if (!userId) {
    res.status(401).json({ error: 'Đăng nhập để tiếp tục.' });
    return null;
  }

  const user = await clerkClient.users.getUser(userId);
  const primaryAddress = user.primaryEmailAddress;
  const email = primaryAddress?.emailAddress?.trim().toLowerCase() ?? '';
  if (primaryAddress?.verification?.status !== 'verified') {
    res.status(403).json({ error: 'Hãy xác minh email trước khi truy cập cổng đại lý.' });
    return null;
  }
  if (!email) {
    res.status(403).json({ error: 'Tài khoản cần có email chính đã xác minh.' });
    return null;
  }

  if (ADMIN_EMAIL && email === ADMIN_EMAIL) {
    return { role: 'admin', userId, email };
  }

  const result = await pool.query(
    `SELECT id, profile
       FROM sofa2_dealer_profiles
      WHERE LOWER(email) = $1 AND portal_access = TRUE
      LIMIT 1`,
    [email]
  );
  const dealer = result.rows[0];
  if (!dealer) {
    res.status(403).json({ error: 'Tài khoản chưa được cấp quyền vào cổng đại lý.' });
    return null;
  }

  await pool.query(
    `UPDATE sofa2_dealer_profiles
        SET clerk_user_id = $1, updated_at = NOW()
      WHERE id = $2`,
    [userId, dealer.id]
  );
  return {
    role: 'dealer',
    userId,
    email,
    dealerId: dealer.id,
    profile: dealer.profile,
  };
}

async function findDealerId(name: string, client = pool): Promise<string | null> {
  if (!name) return null;
  const result = await client.query(
    `SELECT id FROM sofa2_dealer_profiles WHERE name = $1 LIMIT 1`,
    [name]
  );
  return result.rows[0]?.id ?? null;
}

async function readModuleRows(module: string): Promise<Record<string, unknown>[]> {
  if (module === 'dashboard') {
    const result = await pool.query(
      `SELECT id AS "dealerId", profile
         FROM sofa2_dealer_profiles
        ORDER BY created_at`
    );
    return result.rows.map((row) => ({ ...row.profile, dealerId: row.dealerId }));
  }
  const result = await pool.query(
    `SELECT id AS "recordId", data
       FROM sofa2_dealer_records
      WHERE module = $1
      ORDER BY created_at DESC`,
    [module]
  );
  return result.rows.map((row) => ({ ...row.data, recordId: row.recordId }));
}

async function replaceModuleRows(
  module: string,
  rows: Record<string, unknown>[],
  onlyIfEmpty = false
): Promise<Record<string, unknown>[]> {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    if (module === 'dashboard') {
      if (onlyIfEmpty) {
        const existing = await client.query('SELECT COUNT(*)::int AS count FROM sofa2_dealer_profiles');
        if (existing.rows[0].count > 0) {
          await client.query('COMMIT');
          return readModuleRows(module);
        }
      }

      await client.query('UPDATE sofa2_dealer_profiles SET portal_access = FALSE, updated_at = NOW()');
      for (const row of rows) {
        const name = asText(row.dealer, 180);
        if (!name) continue;
        const id = asText(row.dealerId, 120) || slugify(name);
        const email = asText(row.email, 254).toLowerCase() || null;
        const profile = { ...row, dealer: name, dealerId: id };
        await client.query(
          `INSERT INTO sofa2_dealer_profiles
             (id, name, email, portal_access, level, region, status, profile, updated_at)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8::jsonb, NOW())
           ON CONFLICT (id) DO UPDATE SET
             name = EXCLUDED.name,
             email = EXCLUDED.email,
             portal_access = EXCLUDED.portal_access,
             level = EXCLUDED.level,
             region = EXCLUDED.region,
             status = EXCLUDED.status,
             profile = EXCLUDED.profile,
             updated_at = NOW()`,
          [
            id,
            name,
            email,
            isEnabled(row.portalAccess) && Boolean(email),
            asText(row.level, 80),
            asText(row.region, 100),
            asText(row.status, 100),
            JSON.stringify(profile),
          ]
        );
      }
      const retainedIds = rows
        .filter((row) => asText(row.dealer, 180))
        .map((row) => asText(row.dealerId, 120) || slugify(asText(row.dealer, 180)))
        .filter(Boolean);
      await client.query(
        'DELETE FROM sofa2_dealer_profiles WHERE NOT (id = ANY($1::text[]))',
        [retainedIds]
      );
    } else {
      if (!RECORD_MODULES.has(module)) throw new Error('Unsupported dealer module.');
      if (onlyIfEmpty) {
        const existing = await client.query(
          'SELECT COUNT(*)::int AS count FROM sofa2_dealer_records WHERE module = $1',
          [module]
        );
        if (existing.rows[0].count > 0) {
          await client.query('COMMIT');
          return readModuleRows(module);
        }
      }
      await client.query('DELETE FROM sofa2_dealer_records WHERE module = $1', [module]);
      for (const row of rows) {
        const data = { ...row };
        delete data.recordId;
        const dealerId = await findDealerId(asText(row.dealer, 180), client);
        await client.query(
          `INSERT INTO sofa2_dealer_records (module, dealer_id, data)
           VALUES ($1, $2, $3::jsonb)`,
          [module, dealerId, JSON.stringify(data)]
        );
      }
    }
    await client.query('COMMIT');
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
  return readModuleRows(module);
}

app.disable('x-powered-by');
app.use(CLERK_PROXY_PATH, clerkProxyMiddleware());
app.use(express.json({ limit: '1mb' }));
app.use(
  clerkMiddleware((req) => ({
    publishableKey: publishableKeyFromHost(
      getClerkProxyHost(req) ?? '',
      process.env.CLERK_PUBLISHABLE_KEY
    ),
  }))
);

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.get(
  '/api/dealer/session',
  asyncRoute(async (req, res) => {
    const identity = await resolveIdentity(req, res);
    if (!identity) return;
    res.json(identity);
  })
);

app.get(
  '/api/dealer/public/policies',
  asyncRoute(async (_req, res) => {
    const result = await pool.query(
      `SELECT data FROM sofa2_dealer_records WHERE module = 'price-policy' ORDER BY created_at DESC`
    );
    const policies = result.rows
      .map((row) => row.data as Record<string, unknown>)
      .filter(
        (row) =>
          row.status === 'Đang áp dụng' &&
          row.showOnPortal !== 'Không' &&
          row.access !== 'Nội bộ'
      );
    res.json({ policies });
  })
);

app.get(
  '/api/dealer/portal',
  asyncRoute(async (req, res) => {
    const identity = await resolveIdentity(req, res);
    if (!identity) return;
    if (identity.role !== 'dealer') {
      res.status(403).json({ error: 'Chỉ tài khoản đại lý mới truy cập được dữ liệu này.' });
      return;
    }

    const [policiesResult, quotesResult, ordersResult, debtsResult, documentsResult] =
      await Promise.all([
        pool.query(
          `SELECT data FROM sofa2_dealer_records
            WHERE module = 'price-policy' ORDER BY created_at DESC`
        ),
        pool.query(
          `SELECT data FROM sofa2_dealer_records
            WHERE module = 'quotes' AND dealer_id = $1 ORDER BY created_at DESC`,
          [identity.dealerId]
        ),
        pool.query(
          `SELECT data FROM sofa2_dealer_records
            WHERE module = 'dealer-orders' AND dealer_id = $1 ORDER BY created_at DESC`,
          [identity.dealerId]
        ),
        pool.query(
          `SELECT data FROM sofa2_dealer_records
            WHERE module = 'debts' AND dealer_id = $1 ORDER BY created_at DESC`,
          [identity.dealerId]
        ),
        pool.query(
          `SELECT data FROM sofa2_dealer_records
            WHERE module = 'sales-docs' ORDER BY created_at DESC`
        ),
      ]);

    const level = asText(identity.profile.level, 80);
    const rank: Record<string, number> = { Đồng: 0, Bạc: 1, Vàng: 2, 'Kim cương': 3 };
    const policies = policiesResult.rows
      .map((row) => row.data as Record<string, unknown>)
      .filter(
        (row) =>
          row.status === 'Đang áp dụng' &&
          row.showOnPortal !== 'Không' &&
          (row.level === 'Tất cả' || row.level === level)
      );
    const documents = documentsResult.rows
      .map((row) => row.data as Record<string, unknown>)
      .filter((row) => {
        if (row.status !== 'Đã xuất bản') return false;
        const access = asText(row.access, 80);
        if (access === 'Tất cả đại lý') return true;
        if (access === 'Vàng trở lên') return (rank[level] ?? -1) >= rank.Vàng;
        if (access === 'Chỉ Kim cương') return level === 'Kim cương';
        return false;
      });

    res.json({
      role: 'dealer',
      profile: identity.profile,
      policies,
      quotes: quotesResult.rows.map((row) => row.data),
      orders: ordersResult.rows.map((row) => row.data),
      debts: debtsResult.rows.map((row) => row.data),
      documents,
    });
  })
);

app.post(
  '/api/dealer/quotes',
  asyncRoute(async (req, res) => {
    const body = req.body as Record<string, unknown>;
    const contactName = asText(body.contactName, 120);
    const email = asText(body.email, 254).toLowerCase();
    const phone = asText(body.phone, 40);
    const project = asText(body.project, 180);
    const products = asText(body.products, 2000);
    if (!contactName || !email.includes('@') || !phone || !project) {
      res.status(400).json({ error: 'Vui lòng nhập họ tên, email, số điện thoại và tên dự án.' });
      return;
    }
    const dealerResult = await pool.query(
      `SELECT id, name FROM sofa2_dealer_profiles WHERE LOWER(email) = $1 AND portal_access = TRUE LIMIT 1`,
      [email]
    );
    const dealer = dealerResult.rows[0];
    const quote = {
      code: `BG-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${randomUUID().slice(0, 6).toUpperCase()}`,
      dealer: dealer?.name ?? 'Yêu cầu dự án',
      contactName,
      email,
      phone,
      project,
      address: asText(body.address, 300),
      projectType: asText(body.projectType, 80),
      items: Math.max(0, Number(body.items) || 0),
      budget: asText(body.budget, 80),
      delivery: asText(body.delivery, 120),
      products,
      note: asText(body.note, 2000),
      status: 'Chờ xử lý',
      submittedAt: new Date().toISOString(),
      value: asMoney(body.value),
    };
    await pool.query(
      `INSERT INTO sofa2_dealer_records (module, dealer_id, data)
       VALUES ('quotes', $1, $2::jsonb)`,
      [dealer?.id ?? null, JSON.stringify(quote)]
    );
    res.status(201).json({ ok: true, quote: { code: quote.code, status: quote.status } });
  })
);

app.post(
  '/api/dealer/portal/quotes',
  asyncRoute(async (req, res) => {
    const identity = await resolveIdentity(req, res);
    if (!identity) return;
    if (identity.role !== 'dealer') {
      res.status(403).json({ error: 'Chỉ tài khoản đại lý mới gửi được yêu cầu.' });
      return;
    }
    const products = asText(req.body?.products, 2000);
    if (!products) {
      res.status(400).json({ error: 'Vui lòng nhập sản phẩm và số lượng cần báo giá.' });
      return;
    }
    const quote = {
      code: `BG-DL-${randomUUID().slice(0, 8).toUpperCase()}`,
      dealer: asText(identity.profile.dealer, 180),
      products,
      note: asText(req.body?.note, 2000),
      status: 'Chờ xử lý',
      submittedAt: new Date().toISOString(),
      items: products.split(',').filter(Boolean).length,
      value: 0,
      email: identity.email,
    };
    await pool.query(
      `INSERT INTO sofa2_dealer_records (module, dealer_id, data)
       VALUES ('quotes', $1, $2::jsonb)`,
      [identity.dealerId, JSON.stringify(quote)]
    );
    res.status(201).json({ quote });
  })
);

app.get(
  '/api/admin/dealer/:module',
  asyncRoute(async (req, res) => {
    const identity = await resolveIdentity(req, res);
    if (!identity) return;
    if (identity.role !== 'admin') {
      res.status(403).json({ error: 'Chỉ quản trị viên mới truy cập được module này.' });
      return;
    }
    const module = asText(req.params.module, 80);
    if (!DEALER_MODULES.has(module)) {
      res.status(404).json({ error: 'Không tìm thấy module đại lý.' });
      return;
    }
    res.json({ rows: await readModuleRows(module) });
  })
);

app.post(
  '/api/admin/dealer/:module/seed',
  asyncRoute(async (req, res) => {
    const identity = await resolveIdentity(req, res);
    if (!identity) return;
    if (identity.role !== 'admin') {
      res.status(403).json({ error: 'Chỉ quản trị viên mới được khởi tạo dữ liệu.' });
      return;
    }
    const module = asText(req.params.module, 80);
    const rows = validRows(req.body?.rows);
    if (!DEALER_MODULES.has(module) || !rows) {
      res.status(400).json({ error: 'Dữ liệu khởi tạo không hợp lệ.' });
      return;
    }
    res.json({ rows: await replaceModuleRows(module, rows, true) });
  })
);

app.put(
  '/api/admin/dealer/:module',
  asyncRoute(async (req, res) => {
    const identity = await resolveIdentity(req, res);
    if (!identity) return;
    if (identity.role !== 'admin') {
      res.status(403).json({ error: 'Chỉ quản trị viên mới được cập nhật module này.' });
      return;
    }
    const module = asText(req.params.module, 80);
    const rows = validRows(req.body?.rows);
    if (!DEALER_MODULES.has(module) || !rows) {
      res.status(400).json({ error: 'Danh sách dữ liệu không hợp lệ.' });
      return;
    }
    res.json({ rows: await replaceModuleRows(module, rows) });
  })
);

app.use('/api', (_req, res) => res.status(404).json({ error: 'Không tìm thấy API.' }));
app.use((error: unknown, _req: Request, res: Response, next: (error?: unknown) => void) => {
  if (res.headersSent) {
    next(error);
    return;
  }
  console.error('API request failed:', error instanceof Error ? error.message : 'unknown error');
  res.status(500).json({ error: 'Đã xảy ra lỗi máy chủ. Vui lòng thử lại.' });
});

async function start() {
  if (process.env.NODE_ENV === 'production') {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => res.sendFile(path.join(distPath, 'index.html')));
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr: { server: httpServer } },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  httpServer.listen(PORT, '0.0.0.0', () => {
    console.info(`Sofa2 dealer app listening on ${PORT}`);
  });
}

void start().catch((error: unknown) => {
  console.error('Unable to start app:', error instanceof Error ? error.message : 'unknown error');
  process.exit(1);
});
