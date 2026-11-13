import { randomUUID } from 'node:crypto';
import path from 'node:path';
import { createServer as createHttpServer } from 'node:http';

import { clerkClient, clerkMiddleware, getAuth } from '@clerk/express';
import { publishableKeyFromHost } from '@clerk/shared/keys';
import type { NextFunction, Request, RequestHandler, Response } from 'express';
import express from 'express';
import { Pool, type PoolClient } from 'pg';
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
const SEO_MODULES = new Set([
  'category',
  'product',
  'collection',
  'project',
  'showroom',
  'blog',
  'brand',
  'sitemap',
  'robots',
  'schema',
]);
const SEO_PAGE_MODULES = ['category', 'product', 'collection', 'project', 'showroom', 'blog', 'brand'];
const SEO_SITE_ORIGIN = (process.env.SOFA2_SITE_ORIGIN || 'https://luxesofa.vn').replace(/\/+$/, '');
const SEO_SITEMAP_ROUTES = [
  { file: 'sitemap-pages.xml', module: 'brand' },
  { file: 'sitemap-categories.xml', module: 'category' },
  { file: 'sitemap-products.xml', module: 'product' },
  { file: 'sitemap-collections.xml', module: 'collection' },
  { file: 'sitemap-projects.xml', module: 'project' },
  { file: 'sitemap-showrooms.xml', module: 'showroom' },
  { file: 'sitemap-blog.xml', module: 'blog' },
] as const;
const CMS_MODULES = new Set([
  'home',
  'about',
  'contact',
  'policy',
  'terms',
  'faq',
  'static-pages',
  'menu',
  'banner',
  'slider',
  'cooperation',
  'distributors',
  'wholesalers',
  'registration',
  'project-quotes',
  'oem',
  'contractors',
  'policies',
]);
const CMS_PUBLISHED_STATUSES = new Set(['Đã xuất bản', 'Đang chạy']);
const ACCESS_MODULES = new Set(['users', 'roles', 'permissions', 'audit-log']);
const ADMIN_PERMISSION_MODULE_BY_GROUP: Record<string, string> = {
  cms: 'CMS',
  catalog: 'Sản phẩm',
  warehouse: 'Kho hàng',
  orders: 'Đơn hàng',
  crm: 'CRM',
  marketing: 'Marketing',
  analytics: 'Analytics',
  seo: 'SEO',
  access: 'Phân quyền',
  b2b: 'Đại lý B2B',
  dealer: 'Đại lý',
  shopping: 'Mua hàng',
  shop: 'Giỏ hàng & Khách hàng',
  customer: 'Khách hàng',
  support: 'Hỗ trợ',
  hr: 'Tuyển dụng',
};

// Cổng đại lý và lưu SEO cần PostgreSQL; khi chưa cấu hình DATABASE_URL,
// ứng dụng vẫn khởi động và trả lỗi 503 cho các API cần cơ sở dữ liệu.
const DB_ENABLED = Boolean(process.env.DATABASE_URL);
if (!DB_ENABLED) {
  console.warn('DATABASE_URL is not configured — dealer portal and SEO persistence run in degraded mode.');
}

const pool = (
  DB_ENABLED
    ? new Pool({ connectionString: process.env.DATABASE_URL })
    : {
        query: async () => {
          throw new Error('SOFA2_DB_UNAVAILABLE');
        },
        connect: async () => {
          throw new Error('SOFA2_DB_UNAVAILABLE');
        },
      }
) as Pool;
const app = express();
const httpServer = createHttpServer(app);

type Identity =
  | { role: 'admin'; userId: string; email: string }
  | {
      role: 'staff';
      userId: string;
      email: string;
      name: string;
      roles: string[];
      permissions: string[];
      canApprove: boolean;
      canExport: boolean;
    }
  | {
      role: 'dealer';
      userId: string;
      email: string;
      dealerId: string;
      profile: Record<string, unknown>;
    };

type DealerRequest = Request & { dealerIdentity?: Identity };

const asyncRoute =
  (handler: (req: DealerRequest, res: Response, next: NextFunction) => Promise<void>): RequestHandler =>
  (req, res, next) => {
    void handler(req as DealerRequest, res, next).catch(next);
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

function validateDealerProfileRows(rows: Record<string, unknown>[]) {
  const names = new Set<string>();
  const emails = new Set<string>();
  for (const row of rows) {
    const name = asText(row.dealer, 180).toLowerCase();
    const email = asText(row.email, 254).toLowerCase();
    if (!name) return 'Tên đại lý không được để trống.';
    if (names.has(name)) return 'Tên đại lý bị trùng.';
    names.add(name);
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Email đại lý không hợp lệ.';
    if (email && emails.has(email)) return 'Email đã được gán cho đại lý khác.';
    if (email) emails.add(email);
    if (isEnabled(row.portalAccess) && !email) {
      return 'Cần email đăng nhập trước khi bật quyền cổng đại lý.';
    }
  }
  return null;
}

async function readSeoModule(module: string): Promise<Record<string, unknown>[] | null> {
  try {
    const result = await pool.query('SELECT rows FROM sofa2_seo_modules WHERE module = $1', [module]);
    if (!result.rows.length) return null;
    return validRows(result.rows[0].rows) ?? [];
  } catch (error) {
    if (error instanceof Error && error.message === 'SOFA2_DB_UNAVAILABLE') return null;
    throw error;
  }
}

async function readCmsModule(module: string): Promise<Record<string, unknown>[] | null> {
  return readStoredModule('sofa2_cms_modules', module);
}

async function readStoredModule(
  table: 'sofa2_cms_modules' | 'sofa2_access_modules',
  module: string
): Promise<Record<string, unknown>[] | null> {
  try {
    const result = await pool.query(`SELECT rows FROM ${table} WHERE module = $1`, [module]);
    if (!result.rows.length) return null;
    return validRows(result.rows[0].rows) ?? [];
  } catch (error) {
    if (error instanceof Error && error.message === 'SOFA2_DB_UNAVAILABLE') return null;
    throw error;
  }
}

function splitAccessList(value: unknown) {
  return asText(value, 2000)
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function roleHasModuleScope(role: Record<string, unknown>, module: string) {
  const scopes = splitAccessList(role.scope).map((scope) => scope.toLowerCase());
  return scopes.some((scope) =>
    ['toàn quyền', 'toàn hệ thống', module.toLowerCase()].includes(scope)
  );
}

function buildStaffPermissions(
  roles: Record<string, unknown>[],
  permissionRows: Record<string, unknown>[]
) {
  const roleNames = new Set(roles.map((role) => asText(role.role, 80)));
  const allowed = new Set<string>();
  permissionRows.forEach((permission) => {
    const module = asText(permission.module, 80);
    const action = asText(permission.action, 80);
    const status = asText(permission.status, 40);
    if (!module || !action || ['Tắt', 'Cần phê duyệt'].includes(status)) return;
    const assigned = splitAccessList(permission.roles);
    const grantedRoles = roles.filter((role) => {
      const roleName = asText(role.role, 80);
      if (!roleNames.has(roleName) || !assigned.includes(roleName) || !roleHasModuleScope(role, module)) {
        return false;
      }
      if (status === 'Nhạy cảm' && !isEnabled(role.canApprove)) return false;
      if (action === 'Xuất dữ liệu' && !isEnabled(role.canExport)) return false;
      return true;
    });
    if (grantedRoles.length) allowed.add(`${module}:${action}`);
  });
  return [...allowed];
}

async function readAdminAuditRows() {
  const result = await pool.query(
    `SELECT id, actor_email, actor_name, event_type, module, action, target, details, ip,
            user_agent, outcome, created_at
       FROM sofa2_admin_audit_log
      ORDER BY created_at DESC, id DESC
      LIMIT 500`
  );
  return result.rows.map((row) => ({
    id: String(row.id),
    time: row.created_at instanceof Date ? row.created_at.toISOString() : String(row.created_at),
    user: row.actor_name || row.actor_email,
    email: row.actor_email,
    type: row.event_type,
    module: row.module,
    action: row.action,
    target: row.target,
    detail: typeof row.details === 'string' ? row.details : JSON.stringify(row.details ?? {}),
    ip: row.ip,
    device: row.user_agent,
    location: '',
    handled: 'Không',
    status: row.outcome,
  })) as Record<string, unknown>[];
}

async function recordAdminAudit(
  req: Request,
  identity: Identity,
  event: {
    type: string;
    module: string;
    action: string;
    target?: string;
    details?: Record<string, unknown>;
    outcome?: string;
  }
) {
  if (identity.role === 'dealer') return;
  const actorName = identity.role === 'staff' ? identity.name : 'Quản trị viên';
  await pool.query(
    `INSERT INTO sofa2_admin_audit_log
      (actor_user_id, actor_email, actor_name, event_type, module, action, target, details, ip, user_agent, outcome)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8::jsonb, $9, $10, $11)`,
    [
      identity.userId,
      identity.email,
      actorName,
      event.type,
      event.module,
      event.action,
      asText(event.target, 300),
      JSON.stringify(event.details ?? {}),
      asText(req.ip, 80),
      asText(req.get('user-agent'), 500),
      event.outcome ?? 'Thành công',
    ]
  );
}

function rowFingerprint(row: Record<string, unknown>) {
  return JSON.stringify(Object.keys(row).sort().map((key) => [key, row[key]]));
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function validJsonLd(value: unknown) {
  if (!value || typeof value !== 'object') return false;
  const data = value as Record<string, unknown>;
  const nodes = Array.isArray(value)
    ? value
    : Array.isArray(data['@graph'])
      ? data['@graph'] as unknown[]
      : [value];
  if (!nodes.length) return false;
  const hasContext = !!data['@context'] || nodes.every(
    (node) => !!node && typeof node === 'object' && !!(node as Record<string, unknown>)['@context']
  );
  return hasContext && nodes.every(
    (node) => !!node && typeof node === 'object' && !!(node as Record<string, unknown>)['@type']
  );
}

function seoPath(value: unknown) {
  const raw = asText(value, 2048);
  if (!raw) return '';
  try {
    const url = new URL(raw, SEO_SITE_ORIGIN);
    if (url.origin !== SEO_SITE_ORIGIN || !(url.pathname === '/sofa2' || url.pathname.startsWith('/sofa2/'))) return '';
    return `${url.pathname}${url.search}`;
  } catch {
    return '';
  }
}

function normalizedSeoPath(value: unknown) {
  const pathname = seoPath(value).split('?')[0];
  return pathname.replace(/\/+$/, '') || '/';
}

const isSeoPublished = (row: Record<string, unknown>) =>
  row.published === undefined ? row.status === 'Tốt' : isEnabled(row.published);

function publishedSeoRows(rows: Record<string, unknown>[]) {
  return rows.filter(isSeoPublished);
}

let seoRedirectRowsCache: Record<string, unknown>[] = [];
let seoRedirectCacheExpiresAt = 0;

async function getSeoRedirectRows() {
  if (Date.now() < seoRedirectCacheExpiresAt) return seoRedirectRowsCache;
  try {
    const result = await pool.query(
      'SELECT rows FROM sofa2_seo_modules WHERE module = ANY($1::text[])',
      [SEO_PAGE_MODULES]
    );
    seoRedirectRowsCache = result.rows.flatMap((record) => validRows(record.rows) ?? []);
  } catch (error) {
    if (!(error instanceof Error && error.message === 'SOFA2_DB_UNAVAILABLE')) throw error;
    seoRedirectRowsCache = [];
  }
  seoRedirectCacheExpiresAt = Date.now() + 5000;
  return seoRedirectRowsCache;
}

async function buildSeoSitemap(module: string) {
  const rows = (await readSeoModule(module)) ?? [];
  const urls = publishedSeoRows(rows)
    .filter(
      (row) =>
        isEnabled(row.indexable) &&
        isEnabled(row.inSitemap) &&
        !asText(row.redirect, 2048)
    )
    .map((row) => {
      const pathname = seoPath(row.url);
      if (!pathname || pathname.includes('?')) return '';
      const canonical = asText(row.canonical, 2048);
      const loc = canonical ? seoPath(canonical) : pathname;
      if (!loc || loc.includes('?')) return '';
      const parsed = new URL(loc, SEO_SITE_ORIGIN);
      const updated = asText(row.updated, 40);
      const isoDate = /^\d{4}-\d{2}-\d{2}$/.test(updated)
        ? updated
        : updated.match(/^(\d{2})\/(\d{2})\/(\d{4})$/)
          ? `${updated.slice(6)}-${updated.slice(3, 5)}-${updated.slice(0, 2)}`
          : '';
      const lastmod = isoDate ? `\n    <lastmod>${isoDate}</lastmod>` : '';
      return `  <url>\n    <loc>${escapeXml(parsed.href)}</loc>${lastmod}\n  </url>`;
    })
    .filter(Boolean);

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    '</urlset>',
  ].join('\n');
}

async function buildSeoSitemapIndex() {
  const configured = await readSeoModule('sitemap');
  const enabledFiles = configured
    ? new Set(
        configured
          .filter((row) => row.status !== 'Lỗi URL' && row.status !== 'Tạm tắt')
          .map((row) => asText(row.file, 100))
      )
    : new Set(SEO_SITEMAP_ROUTES.map(({ file }) => file));
  const items = SEO_SITEMAP_ROUTES.filter(({ file }) => enabledFiles.has(file)).map(
    ({ file }) => `  <sitemap>\n    <loc>${escapeXml(`${SEO_SITE_ORIGIN}/${file}`)}</loc>\n  </sitemap>`
  );

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...items,
    '</sitemapindex>',
  ].join('\n');
}

async function buildSeoRobotsTxt() {
  const rows = (await readSeoModule('robots')) ?? [];
  const active = rows.filter((row) => row.status === 'Hoạt động');
  const byAgent = new Map<string, Record<string, unknown>[]>();
  active.forEach((row) => {
    const agent = asText(row.agent, 120) || '*';
    byAgent.set(agent, [...(byAgent.get(agent) ?? []), row]);
  });
  const blocks = [...byAgent.entries()].map(([agent, rules]) => {
    const safeAgent = /^[A-Za-z0-9_*.-]{1,120}$/.test(agent) ? agent : '*';
    const lines = [`User-agent: ${safeAgent}`];
    rules.forEach((row) => {
      const rule = ['Allow', 'Disallow'].includes(asText(row.rule, 20)) ? asText(row.rule, 20) : 'Disallow';
      const path = asText(row.path, 500).replace(/[\r\n]/g, '');
      const comment = asText(row.comment, 500).replace(/[\r\n]/g, ' ');
      if (comment) lines.push(`# ${comment}`);
      if (path.startsWith('/')) lines.push(`${rule}: ${path}`);
    });
    const delay = Math.max(0, ...rules.map((row) => Number(row.crawlDelay) || 0));
    if (delay) lines.push(`Crawl-delay: ${delay}`);
    return lines.join('\n');
  });
  const safeDefault = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /sofa2/admin',
    'Disallow: /sofa2/account',
    'Disallow: /sofa2/cart',
    'Disallow: /sofa2/checkout',
  ];
  return [...(blocks.length ? blocks : [safeDefault.join('\n')]), `Sitemap: ${SEO_SITE_ORIGIN}/sitemap.xml`].join('\n\n');
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

  const accessUsers = (await readStoredModule('sofa2_access_modules', 'users')) ?? [];
  const staffUser = accessUsers.find(
    (row) => asText(row.email, 254).toLowerCase() === email
  );
  if (staffUser) {
    if (asText(staffUser.status, 40) !== 'Hoạt động') {
      res.status(403).json({ error: 'Tài khoản quản trị đang chờ kích hoạt hoặc đã bị khoá.' });
      return null;
    }
    const expiresAt = asText(staffUser.expiresAt, 40);
    if (expiresAt && Number.isFinite(Date.parse(`${expiresAt}T23:59:59.999Z`)) &&
        Date.parse(`${expiresAt}T23:59:59.999Z`) < Date.now()) {
      res.status(403).json({ error: 'Quyền truy cập quản trị của tài khoản này đã hết hạn.' });
      return null;
    }
    const boundUserId = asText(staffUser.clerkUserId, 160);
    if (boundUserId && boundUserId !== userId) {
      res.status(403).json({ error: 'Tài khoản quản trị đã được liên kết với một hồ sơ đăng nhập khác.' });
      return null;
    }
    if (!boundUserId) {
      await pool.query(
        `UPDATE sofa2_access_modules
            SET rows = (
              SELECT COALESCE(
                jsonb_agg(
                  CASE
                    WHEN LOWER(entry.value->>'email') = $2
                    THEN jsonb_set(entry.value, '{clerkUserId}', to_jsonb($1::text), TRUE)
                    ELSE entry.value
                  END
                ),
                '[]'::jsonb
              )
                FROM jsonb_array_elements(rows) AS entry(value)
            ),
            updated_at = NOW()
          WHERE module = 'users'`,
        [userId, email]
      );
    }

    const assignedNames = new Set([
      asText(staffUser.role, 80),
      ...splitAccessList(staffUser.extraRoles),
    ].filter(Boolean));
    if (assignedNames.has('Quản trị hệ thống')) {
      res.status(403).json({ error: 'Vai trò quản trị gốc chỉ được cấp bằng tài khoản quản trị chính.' });
      return null;
    }
    const allRoles = (await readStoredModule('sofa2_access_modules', 'roles')) ?? [];
    const activeRoles = allRoles.filter(
      (role) =>
        assignedNames.has(asText(role.role, 80)) &&
        asText(role.status, 40) !== 'Ngưng dùng'
    );
    if (!activeRoles.length) {
      res.status(403).json({ error: 'Tài khoản chưa được gán vai trò đang hoạt động.' });
      return null;
    }
    const permissionRows = (await readStoredModule('sofa2_access_modules', 'permissions')) ?? [];
    return {
      role: 'staff',
      userId,
      email,
      name: asText(staffUser.name, 100) || email,
      roles: activeRoles.map((role) => asText(role.role, 80)),
      permissions: buildStaffPermissions(activeRoles, permissionRows),
      canApprove: activeRoles.some((role) => isEnabled(role.canApprove)),
      canExport: activeRoles.some((role) => isEnabled(role.canExport)),
    };
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

async function requireAdmin(req: Request, res: Response) {
  const identity = await resolveIdentity(req, res);
  if (!identity) return false;
  if (identity.role !== 'admin') {
    res.status(403).json({ error: 'Chỉ quản trị viên mới được cập nhật dữ liệu quản trị.' });
    return false;
  }
  return true;
}

async function requireAdminModulePermissions(
  req: Request,
  res: Response,
  moduleName: string,
  actions: string[]
) {
  const identity = await resolveIdentity(req, res);
  if (!identity) return null;
  if (identity.role === 'admin') return identity;
  const granted =
    identity.role === 'staff' &&
    actions.every((action) => identity.permissions.includes(`${moduleName}:${action}`));
  if (granted) return identity;

  await recordAdminAudit(req, identity, {
    type: 'Truy cập từ chối',
    module: moduleName,
    action: `Từ chối quyền: ${actions.join(', ')}`,
    outcome: 'Từ chối',
  });
  res.status(403).json({
    error: `Bạn chưa được cấp đủ quyền trong module ${moduleName} (${actions.join(', ')}).`,
  });
  return null;
}

async function requireSeoPermission(req: Request, res: Response, action: string) {
  return requireSeoPermissions(req, res, [action]);
}

async function requireSeoPermissions(req: Request, res: Response, actions: string[]) {
  return requireAdminModulePermissions(req, res, 'SEO', actions);
}

function seoRowAccessKey(row: Record<string, unknown>) {
  for (const key of ['id', 'url', 'pagePath', 'page_path', 'path', 'slug', 'canonicalUrl', 'canonical_url', 'code']) {
    const value = asText(row[key], 500);
    if (value) return `${key}:${value}`;
  }
  return '';
}

function seoMutationActions(previous: Record<string, unknown>[], next: Record<string, unknown>[]) {
  const actions = new Set<string>();
  const isPublished = (row: Record<string, unknown>) =>
    CMS_PUBLISHED_STATUSES.has(asText(row.status, 40)) || isEnabled(row.published);
  const previousByKey = new Map(
    previous.map((row, index) => [seoRowAccessKey(row) || `index:${index}`, row])
  );
  const nextByKey = new Map(
    next.map((row, index) => [seoRowAccessKey(row) || `index:${index}`, row])
  );
  previousByKey.forEach((row, key) => {
    const changed = nextByKey.get(key);
    if (!changed) {
      actions.add('Xoá');
      return;
    }
    if (rowFingerprint(row) !== rowFingerprint(changed)) {
      actions.add('Sửa');
      if (isPublished(row) !== isPublished(changed)) actions.add('Xuất bản');
    }
  });
  nextByKey.forEach((_row, key) => {
    if (!previousByKey.has(key)) {
      actions.add('Tạo mới');
      if (isPublished(_row)) actions.add('Xuất bản');
    }
  });
  return [...actions];
}

function adminRowsMutationActions(
  previous: Record<string, unknown>[],
  next: Record<string, unknown>[]
) {
  const accessKey = (row: Record<string, unknown>) => {
    for (const key of [
      'id',
      'recordId',
      'dealerId',
      'customerId',
      'applicationId',
      'jobId',
      'orderId',
      'ticketId',
      'sku',
      'code',
      'email',
      'slug',
      'url',
      'name',
      'dealer',
      'title',
    ]) {
      const value = asText(row[key], 500);
      if (value) return `${key}:${value.toLowerCase()}`;
    }
    return '';
  };
  const previousByKey = new Map(
    previous.map((row, index) => [accessKey(row) || `index:${index}`, row])
  );
  const nextByKey = new Map(next.map((row, index) => [accessKey(row) || `index:${index}`, row]));
  const actions = new Set<string>();
  previousByKey.forEach((row, key) => {
    const changed = nextByKey.get(key);
    if (!changed) actions.add('Xoá');
    else if (rowFingerprint(row) !== rowFingerprint(changed)) {
      actions.add('Sửa');
      if (
        CMS_PUBLISHED_STATUSES.has(asText(row.status, 40)) !==
        CMS_PUBLISHED_STATUSES.has(asText(changed.status, 40))
      ) {
        actions.add('Xuất bản');
      }
    }
  });
  nextByKey.forEach((_row, key) => {
    if (!previousByKey.has(key)) {
      actions.add('Tạo mới');
      if (CMS_PUBLISHED_STATUSES.has(asText(_row.status, 40))) actions.add('Xuất bản');
    }
  });
  return [...actions];
}

function normalizeAccessRows(module: string, rows: Record<string, unknown>[], current: Record<string, unknown>[]) {
  if (module === 'users') {
    const currentByEmail = new Map(
      current.map((row) => [asText(row.email, 254).toLowerCase(), row])
    );
    return rows.map((row) => {
      const email = asText(row.email, 254).toLowerCase();
      const existing = currentByEmail.get(email);
      return {
        ...row,
        email,
        ...(existing?.clerkUserId ? { clerkUserId: existing.clerkUserId } : {}),
      };
    });
  }
  if (module === 'roles') {
    return rows.map((row) => ({
      ...row,
      code: slugify(asText(row.code, 80) || asText(row.role, 80)),
    }));
  }
  if (module === 'permissions') {
    return rows.map((row) => ({
      ...row,
      code:
        asText(row.code, 100) ||
        `${slugify(asText(row.module, 80))}.${slugify(asText(row.action, 80))}`,
    }));
  }
  return rows;
}

function publicAccessRows(module: string, rows: Record<string, unknown>[]) {
  if (module !== 'users') return rows;
  return rows.map((row) =>
    Object.fromEntries(Object.entries(row).filter(([key]) => key !== 'clerkUserId'))
  );
}

function validateAccessRows(
  module: string,
  rows: Record<string, unknown>[],
  current: Record<string, unknown>[],
  roles: Record<string, unknown>[],
  users: Record<string, unknown>[] = [],
  permissions: Record<string, unknown>[] = []
) {
  if (module === 'users') {
    const emails = new Set<string>();
    const availableRoles = new Set(
      roles
        .filter((role) => asText(role.status, 40) !== 'Ngưng dùng')
        .map((role) => asText(role.role, 80))
    );
    const currentByEmail = new Map(
      current.map((row) => [asText(row.email, 254).toLowerCase(), row])
    );
    for (const row of rows) {
      const email = asText(row.email, 254).toLowerCase();
      const role = asText(row.role, 80);
      if (!asText(row.name, 100)) return 'Cần nhập họ tên người dùng.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Email đăng nhập không hợp lệ.';
      if (ADMIN_EMAIL && email === ADMIN_EMAIL) {
        return 'Tài khoản quản trị gốc được cấu hình riêng, không thêm vào danh sách nhân viên.';
      }
      if (emails.has(email)) return 'Email người dùng bị trùng.';
      emails.add(email);
      if (!role || !availableRoles.has(role)) return `Vai trò “${role || 'chưa chọn'}” không tồn tại hoặc đã ngưng dùng.`;
      const extraRoles = splitAccessList(row.extraRoles);
      const unknownExtraRole = extraRoles.find((name) => !availableRoles.has(name));
      if (unknownExtraRole) return `Vai trò phụ “${unknownExtraRole}” không tồn tại hoặc đã ngưng dùng.`;
      if (role === 'Quản trị hệ thống' || extraRoles.includes('Quản trị hệ thống')) {
        return 'Không thể cấp vai trò quản trị gốc cho tài khoản nhân viên.';
      }
      if (!['Hoạt động', 'Chờ kích hoạt', 'Bị khoá'].includes(asText(row.status, 40))) {
        return 'Trạng thái người dùng không hợp lệ.';
      }
      const previous = currentByEmail.get(email);
      if (previous?.clerkUserId && asText(previous.clerkUserId, 160) !== asText(row.clerkUserId, 160)) {
        return 'Không thể thay đổi email đã liên kết với tài khoản Clerk.';
      }
      if (row.expiresAt && !Number.isFinite(Date.parse(`${asText(row.expiresAt, 40)}T23:59:59.999Z`))) {
        return 'Ngày hết hạn truy cập không hợp lệ.';
      }
    }
  }

  if (module === 'roles') {
    const names = new Set<string>();
    const codes = new Set<string>();
    for (const row of rows) {
      const name = asText(row.role, 80);
      const code = asText(row.code, 80).toLowerCase();
      if (!name || !code) return 'Tên và mã vai trò là bắt buộc.';
      if (names.has(name.toLowerCase()) || codes.has(code)) return 'Tên hoặc mã vai trò bị trùng.';
      names.add(name.toLowerCase());
      codes.add(code);
      if (!['Hệ thống', 'Tuỳ chỉnh', 'Ngưng dùng'].includes(asText(row.status, 40))) {
        return 'Trạng thái vai trò không hợp lệ.';
      }
    }
    const currentSystemRoles = current.filter((role) => asText(role.status, 40) === 'Hệ thống');
    for (const role of current) {
      if (asText(role.status, 40) === 'Hệ thống') {
        const keptRole = rows.find((item) => asText(item.code, 80) === asText(role.code, 80));
        if (!keptRole || asText(keptRole.status, 40) !== 'Hệ thống') {
          return `Không thể xoá hoặc đổi trạng thái vai trò hệ thống “${asText(role.role, 80)}”.`;
        }
      }
    }
    for (const role of rows) {
      if (asText(role.status, 40) !== 'Hệ thống') continue;
      const previousSystemRole = currentSystemRoles.find(
        (item) => asText(item.code, 80) === asText(role.code, 80)
      );
      if (!previousSystemRole || asText(previousSystemRole.role, 80) !== asText(role.role, 80)) {
        return 'Không thể tạo mới hoặc đổi tên vai trò hệ thống.';
      }
    }
    for (const role of current) {
      const code = asText(role.code, 80);
      const name = asText(role.role, 80);
      const assigned = users.some(
        (user) =>
          [asText(user.role, 80), ...splitAccessList(user.extraRoles)].includes(name)
      );
      const referencedByPermission = permissions.some((permission) =>
        splitAccessList(permission.roles).includes(name)
      );
      const nextRole = rows.find((item) => asText(item.code, 80) === code);
      if (assigned && (!nextRole || asText(nextRole.status, 40) === 'Ngưng dùng')) {
        return `Không thể xoá hoặc ngưng dùng vai trò đang được gán cho người dùng: “${name}”.`;
      }
      if ((assigned || referencedByPermission) && nextRole && asText(nextRole.role, 80) !== name) {
        return `Không thể đổi tên vai trò “${name}” khi đang được gán hoặc cấp quyền.`;
      }
      if (referencedByPermission && !nextRole) {
        return `Không thể xoá vai trò “${name}” khi vai trò này còn được cấp quyền.`;
      }
    }
  }

  if (module === 'permissions') {
    const codes = new Set<string>();
    const pairs = new Set<string>();
    const roleNames = new Set(roles.map((role) => asText(role.role, 80)));
    for (const row of rows) {
      const moduleName = asText(row.module, 80);
      const action = asText(row.action, 80);
      const code = asText(row.code, 100).toLowerCase();
      if (!moduleName || !action || !code) return 'Module, hành động và mã quyền là bắt buộc.';
      if (codes.has(code) || pairs.has(`${moduleName}:${action}`)) return 'Mã quyền hoặc cặp module/hành động bị trùng.';
      codes.add(code);
      pairs.add(`${moduleName}:${action}`);
      if (!['Bình thường', 'Nhạy cảm', 'Cần phê duyệt', 'Tắt'].includes(asText(row.status, 40))) {
        return 'Mức độ quyền không hợp lệ.';
      }
      const unknownRole = splitAccessList(row.roles).find((name) => !roleNames.has(name));
      if (unknownRole) return `Không tìm thấy vai trò “${unknownRole}”.`;
    }
  }
  return null;
}

async function findDealerId(name: string, client: Pool | PoolClient = pool): Promise<string | null> {
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
             isEnabled(row.portalAccess) &&
               Boolean(email) &&
               !['Tạm ngưng', 'Đã chấm dứt'].includes(asText(row.status, 100)),
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
    publishableKey: (() => {
      const host = getClerkProxyHost(req) ?? '';
      const hostname = host.split(',')[0]?.trim().replace(/:\d+$/, '').toLowerCase() ?? '';
      const configuredKey = process.env.CLERK_PUBLISHABLE_KEY;
      return hostname.endsWith('.lovable.app')
        ? configuredKey || publishableKeyFromHost(hostname)
        : publishableKeyFromHost(hostname, configuredKey);
    })(),
  }))
);

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.get(
  '/api/seo/public',
  asyncRoute(async (_req, res) => {
    let result: { rows: { module: string; rows: unknown }[] };
    try {
      result = await pool.query(
        'SELECT module, rows FROM sofa2_seo_modules WHERE module = ANY($1::text[])',
        [[...SEO_MODULES]]
      );
    } catch (error) {
      if (!(error instanceof Error && error.message === 'SOFA2_DB_UNAVAILABLE')) throw error;
      result = { rows: [] };
    }
    const modules = new Map<string, Record<string, unknown>[]>();
    result.rows.forEach((record) => {
      modules.set(record.module, validRows(record.rows) ?? []);
    });
    const pages = SEO_PAGE_MODULES.flatMap((module) =>
      publishedSeoRows(modules.get(module) ?? [])
        .map((row) => {
          const url = seoPath(row.url);
          if (!url) return null;
          return {
            url,
            title: asText(row.title, 200),
            description: asText(row.description, 500),
            keyword: asText(row.keyword, 200),
            keyword2: asText(row.keyword2, 200),
            h1: asText(row.h1, 200),
            canonical: seoPath(row.canonical) || '',
            ogImage: asText(row.ogImage, 2048),
            ogTitle: asText(row.ogTitle, 200),
            ogDescription: asText(row.ogDescription, 500),
            indexable: row.indexable,
            follow: row.follow,
            schemaType: asText(row.schemaType, 100),
          };
        })
        .filter((row): row is NonNullable<typeof row> => !!row)
    );
    const schemas = (modules.get('schema') ?? [])
      .filter(
        (row) =>
          row.status === 'Hợp lệ' &&
          row.validation === 'Hợp lệ' &&
          (Number(row.errors) || 0) === 0 &&
          asText(row.jsonld, 12000)
      )
      .map((row) => {
        const jsonld = asText(row.jsonld, 12000);
        try {
          const data = JSON.parse(jsonld);
          if (!validJsonLd(data)) return null;
          return {
            scope: asText(row.scope, 120),
            url: seoPath(row.url),
            jsonld: data,
          };
        } catch {
          return null;
        }
      })
      .filter((row): row is NonNullable<typeof row> => !!row);

    res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    res.json({ pages, schemas });
  })
);

app.get(
  '/robots.txt',
  asyncRoute(async (_req, res) => {
    res.type('text/plain; charset=utf-8').send(await buildSeoRobotsTxt());
  })
);

app.get(
  '/sitemap.xml',
  asyncRoute(async (_req, res) => {
    res.type('application/xml; charset=utf-8').send(await buildSeoSitemapIndex());
  })
);

SEO_SITEMAP_ROUTES.forEach(({ file, module }) => {
  app.get(
    `/${file}`,
    asyncRoute(async (_req, res) => {
      res.type('application/xml; charset=utf-8').send(await buildSeoSitemap(module));
    })
  );
});

app.get(
  '/api/admin/seo/:module',
  asyncRoute(async (req, res) => {
    if (!(await requireSeoPermission(req, res, 'Xem'))) return;
    const module = asText(req.params.module, 40);
    if (!SEO_MODULES.has(module)) {
      res.status(404).json({ error: 'Không tìm thấy module SEO.' });
      return;
    }
    const rows = await readSeoModule(module);
    res.json({ rows: publicAccessRows(module, rows ?? []), initialized: rows !== null });
  })
);

app.post(
  '/api/admin/seo/:module/seed',
  asyncRoute(async (req, res) => {
    const identity = await requireSeoPermission(req, res, 'Tạo mới');
    if (!identity) return;
    const module = asText(req.params.module, 40);
    const rows = validRows(req.body?.rows);
    if (!SEO_MODULES.has(module) || !rows) {
      res.status(400).json({ error: 'Dữ liệu khởi tạo SEO không hợp lệ.' });
      return;
    }
    await pool.query(
      `INSERT INTO sofa2_seo_modules (module, rows)
       VALUES ($1, $2::jsonb)
       ON CONFLICT (module) DO NOTHING`,
      [module, JSON.stringify(rows)]
    );
    if (SEO_PAGE_MODULES.includes(module)) seoRedirectCacheExpiresAt = 0;
    await recordAdminAudit(req, identity, {
      type: 'Tạo mới',
      module: 'SEO',
      action: 'Khởi tạo dữ liệu SEO',
      target: module,
      details: { records: rows.length },
    });
    res.json({ rows: (await readSeoModule(module)) ?? [], initialized: true });
  })
);

app.put(
  '/api/admin/seo/:module',
  asyncRoute(async (req, res) => {
    if (!(await requireSeoPermission(req, res, 'Xem'))) return;
    const module = asText(req.params.module, 40);
    const rows = validRows(req.body?.rows);
    if (!SEO_MODULES.has(module) || !rows) {
      res.status(400).json({ error: 'Danh sách dữ liệu SEO không hợp lệ.' });
      return;
    }
    const previous = (await readSeoModule(module)) ?? [];
    const actions = seoMutationActions(previous, rows);
    const identity = await requireSeoPermissions(req, res, actions);
    if (!identity) return;
    await pool.query(
      `INSERT INTO sofa2_seo_modules (module, rows, updated_at)
       VALUES ($1, $2::jsonb, NOW())
       ON CONFLICT (module) DO UPDATE
         SET rows = EXCLUDED.rows, updated_at = NOW()`,
      [module, JSON.stringify(rows)]
    );
    if (SEO_PAGE_MODULES.includes(module)) seoRedirectCacheExpiresAt = 0;
    if (actions.length) {
      await recordAdminAudit(req, identity, {
        type: actions.includes('Xuất bản') ? 'Xuất bản' : 'Cập nhật',
        module: 'SEO',
        action: actions.join(', '),
        target: module,
        details: { before: previous.length, after: rows.length },
      });
    }
    res.json({ rows: (await readSeoModule(module)) ?? [] });
  })
);

app.get(
  '/api/cms/public',
  asyncRoute(async (_req, res) => {
    let result: { rows: { module: string; rows: unknown }[] };
    try {
      result = await pool.query('SELECT module, rows FROM sofa2_cms_modules');
    } catch (error) {
      if (!(error instanceof Error && error.message === 'SOFA2_DB_UNAVAILABLE')) throw error;
      result = { rows: [] };
    }
    const modules: Record<string, Record<string, unknown>[]> = {};
    result.rows.forEach((record) => {
      if (!CMS_MODULES.has(record.module)) return;
      modules[record.module] = (validRows(record.rows) ?? []).filter((row) =>
        CMS_PUBLISHED_STATUSES.has(String(row.status))
      );
    });
    res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    res.json({ modules });
  })
);

app.get(
  '/api/admin/cms/:module',
  asyncRoute(async (req, res) => {
    const module = asText(req.params.module, 40);
    if (!CMS_MODULES.has(module)) {
      res.status(404).json({ error: 'Không tìm thấy module CMS.' });
      return;
    }
    if (!(await requireAdminModulePermissions(req, res, ADMIN_PERMISSION_MODULE_BY_GROUP.cms, ['Xem']))) {
      return;
    }
    const rows = await readCmsModule(module);
    res.json({ rows: rows ?? [], initialized: rows !== null });
  })
);

app.put(
  '/api/admin/cms/:module',
  asyncRoute(async (req, res) => {
    const module = asText(req.params.module, 40);
    const rows = validRows(req.body?.rows);
    if (!CMS_MODULES.has(module) || !rows) {
      res.status(400).json({ error: 'Dữ liệu CMS không hợp lệ.' });
      return;
    }
    const viewer = await requireAdminModulePermissions(
      req,
      res,
      ADMIN_PERMISSION_MODULE_BY_GROUP.cms,
      ['Xem']
    );
    if (!viewer) return;
    const previous = (await readCmsModule(module)) ?? [];
    const actions = adminRowsMutationActions(previous, rows);
    const actor =
      actions.length > 0
        ? await requireAdminModulePermissions(
            req,
            res,
            ADMIN_PERMISSION_MODULE_BY_GROUP.cms,
            ['Xem', ...actions]
          )
        : viewer;
    if (!actor) return;
    await pool.query(
      `INSERT INTO sofa2_cms_modules (module, rows, updated_at)
       VALUES ($1, $2::jsonb, NOW())
       ON CONFLICT (module) DO UPDATE
         SET rows = EXCLUDED.rows, updated_at = NOW()`,
      [module, JSON.stringify(rows)]
    );
    if (actions.length) {
      await recordAdminAudit(req, actor, {
        type: actions.includes('Xuất bản') ? 'Xuất bản' : 'Cập nhật',
        module: 'CMS',
        action: actions.join(', '),
        target: module,
        details: { before: previous.length, after: rows.length },
      });
    }
    res.json({ rows: (await readCmsModule(module)) ?? [] });
  })
);

app.get(
  '/api/admin/access/session',
  asyncRoute(async (req, res) => {
    const identity = await resolveIdentity(req, res);
    if (!identity) return;
    if (identity.role === 'dealer') {
      res.status(403).json({ error: 'Chỉ tài khoản nhân viên được vào khu quản trị.' });
      return;
    }
    if (identity.role === 'staff') {
      await pool.query(
        `UPDATE sofa2_access_modules
            SET rows = (
              SELECT COALESCE(
                jsonb_agg(
                  CASE
                    WHEN LOWER(entry.value->>'email') = $1
                    THEN jsonb_set(
                      entry.value,
                      '{last}',
                      to_jsonb(to_char(NOW() AT TIME ZONE 'UTC', 'YYYY-MM-DD HH24:MI')),
                      TRUE
                    )
                    ELSE entry.value
                  END
                ),
                '[]'::jsonb
              )
                FROM jsonb_array_elements(rows) AS entry(value)
            ),
            updated_at = NOW()
          WHERE module = 'users'`,
        [identity.email]
      );
      const recentLogin = await pool.query(
        `SELECT 1 FROM sofa2_admin_audit_log
          WHERE actor_user_id = $1 AND event_type = 'Đăng nhập'
            AND created_at > NOW() - INTERVAL '30 minutes'
          LIMIT 1`,
        [identity.userId]
      );
      if (!recentLogin.rows.length) {
        await recordAdminAudit(req, identity, {
          type: 'Đăng nhập',
          module: 'Phân quyền',
          action: 'Đăng nhập khu quản trị',
        });
      }
    } else {
      const recentLogin = await pool.query(
        `SELECT 1 FROM sofa2_admin_audit_log
          WHERE actor_user_id = $1 AND event_type = 'Đăng nhập'
            AND created_at > NOW() - INTERVAL '30 minutes'
          LIMIT 1`,
        [identity.userId]
      );
      if (!recentLogin.rows.length) {
        await recordAdminAudit(req, identity, {
          type: 'Đăng nhập',
          module: 'Phân quyền',
          action: 'Đăng nhập khu quản trị',
        });
      }
    }
    res.json(
      identity.role === 'admin'
        ? { role: 'admin', email: identity.email, permissions: ['*'], roles: ['Quản trị hệ thống'] }
        : {
            role: 'staff',
            email: identity.email,
            name: identity.name,
            roles: identity.roles,
            permissions: identity.permissions,
            canApprove: identity.canApprove,
            canExport: identity.canExport,
          }
    );
  })
);

app.get(
  '/api/admin/access/:module',
  asyncRoute(async (req, res) => {
    if (!(await requireAdmin(req, res))) return;
    const module = asText(req.params.module, 40);
    if (!ACCESS_MODULES.has(module)) {
      res.status(404).json({ error: 'Không tìm thấy module phân quyền.' });
      return;
    }
    if (module === 'audit-log') {
      res.json({ rows: await readAdminAuditRows(), initialized: true });
      return;
    }
    const rows = await readStoredModule('sofa2_access_modules', module);
    if (module === 'roles' && rows) {
      const users = (await readStoredModule('sofa2_access_modules', 'users')) ?? [];
      const withCounts = rows.map((role) => ({
        ...role,
        users: users.filter(
          (user) =>
            [asText(user.role, 80), ...splitAccessList(user.extraRoles)].includes(
              asText(role.role, 80)
            )
        ).length,
      }));
      res.json({ rows: withCounts, initialized: true });
      return;
    }
    res.json({ rows: rows ?? [], initialized: rows !== null });
  })
);

app.post(
  '/api/admin/access/:module/seed',
  asyncRoute(async (req, res) => {
    if (!(await requireAdmin(req, res))) return;
    const module = asText(req.params.module, 40);
    const rows = validRows(req.body?.rows);
    if (!ACCESS_MODULES.has(module) || module === 'audit-log' || !rows) {
      res.status(400).json({ error: 'Dữ liệu khởi tạo phân quyền không hợp lệ.' });
      return;
    }
    await pool.query(
      `INSERT INTO sofa2_access_modules (module, rows)
       VALUES ($1, $2::jsonb)
       ON CONFLICT (module) DO NOTHING`,
      [module, JSON.stringify(rows)]
    );
    res.json({
      rows: (await readStoredModule('sofa2_access_modules', module)) ?? [],
      initialized: true,
    });
  })
);

app.put(
  '/api/admin/access/:module',
  asyncRoute(async (req, res) => {
    const actor = await resolveIdentity(req, res);
    if (!actor) return;
    if (actor.role !== 'admin') {
      res.status(403).json({ error: 'Chỉ quản trị viên gốc mới được quản lý người dùng và vai trò.' });
      return;
    }
    const module = asText(req.params.module, 40);
    const incomingRows = validRows(req.body?.rows);
    if (module === 'audit-log') {
      res.status(405).json({ error: 'Nhật ký hệ thống chỉ đọc; không thể thêm, sửa hoặc xoá sự kiện.' });
      return;
    }
    if (!ACCESS_MODULES.has(module) || !incomingRows) {
      res.status(400).json({ error: 'Dữ liệu phân quyền không hợp lệ.' });
      return;
    }
    const current = (await readStoredModule('sofa2_access_modules', module)) ?? [];
    const roleRows =
      module === 'roles'
        ? current
        : (await readStoredModule('sofa2_access_modules', 'roles')) ?? [];
    const userRows =
      module === 'roles'
        ? (await readStoredModule('sofa2_access_modules', 'users')) ?? []
        : [];
    const permissionRows =
      module === 'roles'
        ? (await readStoredModule('sofa2_access_modules', 'permissions')) ?? []
        : [];
    const rows = normalizeAccessRows(module, incomingRows, current);
    const validationError = validateAccessRows(
      module,
      rows,
      current,
      roleRows,
      userRows,
      permissionRows
    );
    if (validationError) {
      res.status(400).json({ error: validationError });
      return;
    }
    await pool.query(
      `INSERT INTO sofa2_access_modules (module, rows, updated_at)
       VALUES ($1, $2::jsonb, NOW())
       ON CONFLICT (module) DO UPDATE
         SET rows = EXCLUDED.rows, updated_at = NOW()`,
      [module, JSON.stringify(rows)]
    );
    let saved = (await readStoredModule('sofa2_access_modules', module)) ?? [];
    if (module === 'roles') {
      const users = (await readStoredModule('sofa2_access_modules', 'users')) ?? [];
      saved = saved.map((role) => ({
        ...role,
        users: users.filter(
          (user) =>
            [asText(user.role, 80), ...splitAccessList(user.extraRoles)].includes(
              asText(role.role, 80)
            )
        ).length,
      }));
    }
    await recordAdminAudit(req, actor, {
      type: 'Thay đổi quyền',
      module: 'Phân quyền',
      action: `Cập nhật ${module}`,
      target: module,
      details: { before: current.length, after: saved.length },
    });
    res.json({ rows: publicAccessRows(module, saved) });
  })
);

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
    const module = asText(req.params.module, 80);
    if (!DEALER_MODULES.has(module)) {
      res.status(404).json({ error: 'Không tìm thấy module đại lý.' });
      return;
    }
    if (
      !(await requireAdminModulePermissions(
        req,
        res,
        ADMIN_PERMISSION_MODULE_BY_GROUP.dealer,
        ['Xem']
      ))
    ) {
      return;
    }
    res.json({ rows: await readModuleRows(module) });
  })
);

app.post(
  '/api/admin/dealer/:module/seed',
  asyncRoute(async (req, res) => {
    const module = asText(req.params.module, 80);
    const rows = validRows(req.body?.rows);
    const profileError = module === 'dashboard' && rows ? validateDealerProfileRows(rows) : null;
    if (!DEALER_MODULES.has(module) || !rows || profileError) {
      res.status(400).json({ error: profileError || 'Dữ liệu khởi tạo không hợp lệ.' });
      return;
    }
    const identity = await requireAdminModulePermissions(
      req,
      res,
      ADMIN_PERMISSION_MODULE_BY_GROUP.dealer,
      ['Tạo mới']
    );
    if (!identity) return;
    const saved = await replaceModuleRows(module, rows, true);
    await recordAdminAudit(req, identity, {
      type: 'Khởi tạo dữ liệu',
      module: 'Đại lý',
      action: 'Khởi tạo dữ liệu module đại lý',
      target: module,
      details: { records: saved.length },
    });
    res.json({ rows: saved });
  })
);

app.put(
  '/api/admin/dealer/:module',
  asyncRoute(async (req, res) => {
    const module = asText(req.params.module, 80);
    const rows = validRows(req.body?.rows);
    const profileError = module === 'dashboard' && rows ? validateDealerProfileRows(rows) : null;
    if (!DEALER_MODULES.has(module) || !rows || profileError) {
      res.status(400).json({ error: profileError || 'Danh sách dữ liệu không hợp lệ.' });
      return;
    }
    const viewer = await requireAdminModulePermissions(
      req,
      res,
      ADMIN_PERMISSION_MODULE_BY_GROUP.dealer,
      ['Xem']
    );
    if (!viewer) return;
    const previous = await readModuleRows(module);
    const actions = adminRowsMutationActions(previous, rows);
    const actor =
      actions.length > 0
        ? await requireAdminModulePermissions(
            req,
            res,
            ADMIN_PERMISSION_MODULE_BY_GROUP.dealer,
            ['Xem', ...actions]
          )
        : viewer;
    if (!actor) return;
    const saved = await replaceModuleRows(module, rows);
    if (actions.length) {
      await recordAdminAudit(req, actor, {
        type: 'Cập nhật',
        module: 'Đại lý',
        action: actions.join(', '),
        target: module,
        details: { before: previous.length, after: saved.length },
      });
    }
    res.json({ rows: saved });
  })
);

app.use(
  asyncRoute(async (req, res, next) => {
    if (!['GET', 'HEAD'].includes(req.method)) {
      next();
      return;
    }
    const sourcePath = normalizedSeoPath(req.path);
    if (
      !(sourcePath === '/sofa2' || sourcePath.startsWith('/sofa2/')) ||
      sourcePath === '/sofa2/admin' ||
      sourcePath.startsWith('/sofa2/admin/') ||
      /\.[a-z0-9]{2,}$/i.test(sourcePath)
    ) {
      next();
      return;
    }

    const page = (await getSeoRedirectRows()).find(
      (row) =>
        normalizedSeoPath(row.url) === sourcePath &&
        isSeoPublished(row) &&
        !!asText(row.redirect, 2048)
    );
    if (!page) {
      next();
      return;
    }

    const destination = seoPath(page.redirect);
    if (!destination) {
      next();
      return;
    }
    const target = new URL(destination, SEO_SITE_ORIGIN);
    const targetPath = target.pathname.replace(/\/+$/, '') || '/';
    if (
      targetPath === sourcePath ||
      targetPath === '/sofa2/admin' ||
      targetPath.startsWith('/sofa2/admin/')
    ) {
      next();
      return;
    }
    const statusCode = String(page.redirectStatus) === '302' ? 302 : 301;
    res.redirect(statusCode, `${target.pathname}${target.search}`);
  })
);

app.use('/api', (_req, res) => res.status(404).json({ error: 'Không tìm thấy API.' }));
app.use((error: unknown, _req: Request, res: Response, next: (error?: unknown) => void) => {
  if (res.headersSent) {
    next(error);
    return;
  }
  if (error instanceof Error && error.message === 'SOFA2_DB_UNAVAILABLE') {
    res.status(503).json({ error: 'Cơ sở dữ liệu chưa được kết nối. Vui lòng cấu hình DATABASE_URL.' });
    return;
  }
  console.error('API request failed:', error instanceof Error ? error.message : 'unknown error');
  res.status(500).json({ error: 'Đã xảy ra lỗi máy chủ. Vui lòng thử lại.' });
});

async function start() {
  if (process.env.NODE_ENV === 'production') {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.use((_req, res) => res.sendFile(path.join(distPath, 'index.html')));
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
