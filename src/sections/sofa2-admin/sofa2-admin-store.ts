import { useCallback, useEffect, useState, useSyncExternalStore } from 'react';

import type { SupabaseClient } from '@supabase/supabase-js';
import { supabase } from 'src/lib/supabase';

import { SOFA2_ADMIN_GROUPS } from './sofa2-admin-data';
import { sofa2Slugify } from './sofa2-cms';

const untypedSupabase = supabase as unknown as SupabaseClient;

// ----------------------------------------------------------------------
// Kho dữ liệu CRUD tại chỗ (in-memory) cho khu quản trị sofa2.
// Dữ liệu khởi tạo từ SOFA2_ADMIN_GROUPS và giữ nguyên khi chuyển trang.
// ----------------------------------------------------------------------

export type AdminRow = Record<string, string | number>;

type Store = Record<string, AdminRow[]>;

const key = (group: string, module: string) => {
  if (group === 'hr' && ['job-detail', 'recruitment-tracking'].includes(module)) {
    return 'hr/recruitment';
  }
  if (group === 'shopping') {
    if (['account', 'profile'].includes(module)) return 'customer/profiles';
    if (module === 'my-orders') return 'customer/customer-orders';
    if (module === 'warranty') return 'customer/warranties';
    if (module === 'tracking') return 'shop/tracking';
  }
  return `${group}/${module}`;
};

const store: Store = {};
const savedSeoRows = new Map<string, AdminRow[]>();
const seoWriteQueues = new Map<string, Promise<AdminRow[]>>();
const seoWriteRevisions = new Map<string, number>();

const STORAGE_KEY = 'sofa2-admin-rows-v1';

SOFA2_ADMIN_GROUPS.forEach((group) => {
  group.modules.forEach((module) => {
    if (group.slug === 'hr' && ['job-detail', 'recruitment-tracking'].includes(module.slug)) return;
    if (
      group.slug === 'shopping' &&
      ['account', 'profile', 'my-orders', 'warranty', 'tracking'].includes(module.slug)
    ) {
      return;
    }
    store[key(group.slug, module.slug)] = module.rows.map((row) => ({ ...row }));
  });
});

// Khôi phục dữ liệu đã lưu (giữ thay đổi sau khi tải lại trang, dùng chung với trang khách)
try {
  const saved = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;
  if (saved) {
    const savedRows = JSON.parse(saved) as Store;
    Object.entries(savedRows).forEach(([storeKey, rows]) => {
      if (!storeKey.startsWith('access/')) store[storeKey] = rows;
    });
  } else {
    const addressesKey = key('shopping', 'addresses');
    const wishlistKey = key('shop', 'wishlist');
    const transactionsKey = key('shopping', 'transactions');
    const customerId = 'KH-1001';
    const customer = 'Nguyễn Minh Anh';

    if (
      !(store[addressesKey] ?? []).some(
        (row) =>
          String(row.customerId ?? '') === customerId ||
          String(row.customer ?? '') === customer
      )
    ) {
      store[addressesKey] = [
        {
          addressId: 'ADDR-KH-1001-1',
          customerId,
          customer,
          label: 'Nhà',
          recipient: customer,
          phone: '0901 234 567',
          address: '123 Nguyễn Trãi',
          ward: 'Thanh Xuân',
          district: 'Thanh Xuân',
          city: 'Hà Nội',
          zipCode: '',
          deliveryType: 'Giao tận nhà',
          deliveryNote: '',
          isDefault: 'true',
          status: 'Mặc định',
        },
        ...(store[addressesKey] ?? []),
      ];
    }

    if (
      !(store[wishlistKey] ?? []).some(
        (row) =>
          String(row.customerId ?? '') === customerId ||
          String(row.customer ?? '') === customer
      )
    ) {
      store[wishlistKey] = [
        ...['Sofa Oslo 3 Chỗ', 'Sofa Berlin Góc', 'Sofa Copenhagen', 'Sofa Tokyo Đơn'].map(
          (product, index) => ({
            customerId,
            customer,
            product,
            added: `2026-10-${String(20 - index).padStart(2, '0')}`,
            notify: 'Có',
            status: 'Đang lưu',
          })
        ),
        ...(store[wishlistKey] ?? []),
      ];
    }

    if (
      !(store[transactionsKey] ?? []).some(
        (row) =>
          String(row.customerId ?? '') === customerId ||
          String(row.customer ?? '') === customer
      )
    ) {
      store[transactionsKey] = [
        {
          txnId: 'GD-KH1001-01',
          customerId,
          customer,
          order: 'LX-26091502',
          method: 'VNPay QR',
          amount: 25900000,
          date: '2026-09-15',
          status: 'Thành công',
        },
        {
          txnId: 'GD-KH1001-02',
          customerId,
          customer,
          order: 'LX-26091011',
          method: 'Chuyển khoản',
          amount: 11550000,
          date: '2026-09-10',
          status: 'Thành công',
        },
        ...(store[transactionsKey] ?? []),
      ];
    }
  }
} catch {
  /* bỏ qua */
}

const defaultRecruitmentRows =
  SOFA2_ADMIN_GROUPS.find((group) => group.slug === 'hr')?.modules.find((module) => module.slug === 'recruitment')?.rows ?? [];
store[key('hr', 'recruitment')] = (store[key('hr', 'recruitment')] ?? []).map((row, index) => ({
  ...(defaultRecruitmentRows[index] ?? {}),
  ...row,
  jobId: String(row.jobId || defaultRecruitmentRows[index]?.jobId || `JOB-IMPORT-${index + 1}`),
  legacyId: String(row.legacyId || defaultRecruitmentRows[index]?.legacyId || index + 1),
}));

(['submit-cv', 'applicant-profile'] as const).forEach((module) => {
  const defaultRows =
    SOFA2_ADMIN_GROUPS.find((group) => group.slug === 'hr')?.modules.find((item) => item.slug === module)?.rows ?? [];
  const rowKey = key('hr', module);
  store[rowKey] = (store[rowKey] ?? []).map((row, index) => {
    const name = String(module === 'submit-cv' ? row.applicant : row.name).trim().toLowerCase();
    const seed = defaultRows.find((candidate) =>
      String(module === 'submit-cv' ? candidate.applicant : candidate.name).trim().toLowerCase() === name
    );
    return {
      ...(seed ?? {}),
      ...row,
      applicationId: String(row.applicationId || seed?.applicationId || `APP-IMPORT-${index + 1}`),
    };
  });
});

function adjustRecruitmentApplicants(application: AdminRow, change: number) {
  const jobId = String(application.jobId ?? '');
  const jobTitle = String(application.job ?? application.appliedJob ?? '');
  const jobsKey = key('hr', 'recruitment');
  store[jobsKey] = (store[jobsKey] ?? []).map((job) => {
    const matches = jobId
      ? String(job.jobId ?? '') === jobId
      : String(job.title ?? '') === jobTitle;
    return matches ? { ...job, applicants: Math.max(0, Number(job.applicants || 0) + change) } : job;
  });
}

function removeLinkedApplications(sourceModule: 'submit-cv' | 'applicant-profile', removed: AdminRow[]) {
  const targetModule = sourceModule === 'submit-cv' ? 'applicant-profile' : 'submit-cv';
  const targetKey = key('hr', targetModule);
  const ids = new Set(removed.map((row) => String(row.applicationId ?? '')).filter(Boolean));
  const targetRows = store[targetKey] ?? [];
  if (sourceModule === 'submit-cv') {
    removed.forEach((row) => adjustRecruitmentApplicants(row, -1));
  } else {
    targetRows.filter((row) => ids.has(String(row.applicationId ?? ''))).forEach((row) => adjustRecruitmentApplicants(row, -1));
  }
  store[targetKey] = targetRows.filter((row) => !ids.has(String(row.applicationId ?? '')));
}

const listeners = new Set<() => void>();

if (typeof window !== 'undefined') {
  window.addEventListener('storage', (event) => {
    if (event.key !== STORAGE_KEY || !event.newValue) return;
    try {
      Object.assign(store, JSON.parse(event.newValue) as Store);
      listeners.forEach((listener) => listener());
    } catch {
      /* ignore invalid data from another tab */
    }
  });
}

const emit = () => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch {
    /* bỏ qua */
  }
  listeners.forEach((l) => l());
};

/** Đọc nhanh dữ liệu một module (không cần hook) */
export const getSofa2AdminRows = (groupSlug: string, moduleSlug: string) =>
  store[key(groupSlug, moduleSlug)] ?? [];

export async function loadSofa2SeoRows(moduleSlug: string, defaults: AdminRow[]) {
  const k = key('seo', moduleSlug);
  const response = await fetch(`/api/admin/seo/${encodeURIComponent(moduleSlug)}`, {
    credentials: 'include',
  });
  if (!response.ok) throw new Error('Không tải được dữ liệu SEO. Hãy đăng nhập bằng tài khoản quản trị.');

  let payload = (await response.json()) as { rows?: AdminRow[]; initialized?: boolean };
  if (!payload.initialized) {
    const seeded = await fetch(`/api/admin/seo/${encodeURIComponent(moduleSlug)}/seed`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rows: store[k] ?? defaults }),
    });
    if (!seeded.ok) throw new Error('Không khởi tạo được dữ liệu SEO trên máy chủ.');
    payload = (await seeded.json()) as { rows?: AdminRow[]; initialized?: boolean };
  }

  const nextRows = (payload.rows ?? []).map((row) => ({ ...row }));
  store[k] = nextRows;
  savedSeoRows.set(k, nextRows.map((row) => ({ ...row })));
  emit();
  return nextRows;
}

export async function syncSofa2SeoRows(moduleSlug: string, rows: AdminRow[]) {
  const k = key('seo', moduleSlug);
  const previous = seoWriteQueues.get(k) ?? Promise.resolve([]);
  const next = previous
    .catch(() => [])
    .then(async () => {
      const response = await fetch(`/api/admin/seo/${encodeURIComponent(moduleSlug)}`, {
        method: 'PUT',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rows }),
      });
      if (!response.ok) {
        const payload = (await response.json().catch(() => ({}))) as { error?: string };
        throw new Error(payload.error || 'Không lưu được dữ liệu SEO trên máy chủ.');
      }
      const payload = (await response.json()) as { rows?: AdminRow[] };
      return (payload.rows ?? rows).map((row) => ({ ...row }));
    });

  seoWriteQueues.set(k, next);
  try {
    return await next;
  } finally {
    if (seoWriteQueues.get(k) === next) seoWriteQueues.delete(k);
  }
}

// ----------------------------------------------------------------------
// CMS — đồng bộ với 7 bảng Supabase (sofa2_cms_pages, sofa2_cms_posts, ...)
// Admin schema dùng giá trị tiếng Việt; DB dùng tiếng Anh snake_case.
// ----------------------------------------------------------------------

const CMS_TABLE_MAP: Record<string, string> = {
  home: 'sofa2_cms_pages',
  about: 'sofa2_cms_pages',
  contact: 'sofa2_cms_pages',
  policy: 'sofa2_cms_pages',
  terms: 'sofa2_cms_pages',
  faq: 'sofa2_cms_pages',
  blog: 'sofa2_cms_posts',
  menu: 'sofa2_cms_menus',
  banner: 'sofa2_cms_banners',
  slider: 'sofa2_cms_sliders',
  seo: 'sofa2_cms_seo',
  'static-pages': 'sofa2_cms_static_pages',
};

const STATUS_VN_TO_EN: Record<string, string> = {
  'Đã xuất bản': 'published',
  'Đang chạy': 'published',
  'Bản nháp': 'draft',
  'Tạm ẩn': 'hidden',
  'Hết hạn': 'expired',
  'Chờ duyệt': 'pending',
  'Tốt': 'published',
  'Cần cải thiện': 'draft',
  'Thiếu meta': 'draft',
};

const STATUS_EN_TO_VN: Record<string, string> = {
  published: 'Đã xuất bản',
  draft: 'Bản nháp',
  hidden: 'Tạm ẩn',
  expired: 'Hết hạn',
  pending: 'Chờ duyệt',
  active: 'Đang chạy',
};

const dateToVn = (raw: unknown): string => {
  if (!raw) return '';
  const d = new Date(String(raw));
  if (Number.isNaN(d.getTime())) return String(raw);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
};

const vnDateToIso = (raw: unknown): string | null => {
  const s = String(raw ?? '').trim();
  const m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (m) return `${m[3]}-${m[2].padStart(2, '0')}-${m[1].padStart(2, '0')}`;
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) return s;
  return null;
};

const PAGE_MODULES = ['home', 'about', 'contact', 'policy', 'terms', 'faq'];

/** Chuyển một hàng DB (snake_case, status tiếng Anh) sang admin row (camelCase, status tiếng Việt) */
function cmsDbToAdminRow(moduleSlug: string, row: Record<string, unknown>): AdminRow {
  if (moduleSlug === 'blog') {
    return {
      id: String(row.id ?? ''),
      title: String(row.title ?? ''),
      slug: String(row.slug ?? ''),
      category: String(row.category ?? ''),
      excerpt: String(row.excerpt ?? ''),
      content: String(row.content ?? ''),
      cover: String(row.cover ?? ''),
      tags: Array.isArray(row.tags) ? (row.tags as string[]).join(', ') : String(row.tags ?? ''),
      status: STATUS_EN_TO_VN[String(row.status ?? 'draft')] ?? 'Bản nháp',
      views: Number(row.views ?? 0),
      updated: dateToVn(row.published_at),
      author: String(row.author ?? ''),
      metaTitle: String(row.meta_title ?? ''),
      metaDescription: String(row.meta_description ?? ''),
      ogImage: String(row.og_image ?? ''),
      indexable: row.indexable === false ? 'Không' : 'Có',
    };
  }
  if (PAGE_MODULES.includes(moduleSlug)) {
    return {
      id: String(row.id ?? ''),
      block: String(row.block ?? ''),
      type: String(row.type ?? 'Rich text'),
      heading: String(row.heading ?? ''),
      content: String(row.content ?? ''),
      image: String(row.image ?? ''),
      ctaLabel: String(row.cta_label ?? ''),
      ctaLink: String(row.cta_link ?? ''),
      status: STATUS_EN_TO_VN[String(row.status ?? 'draft')] ?? 'Bản nháp',
      order: Number(row.sort_order ?? 0),
      updated: dateToVn(row.updated_at ?? row.created_at),
      author: String(row.author ?? ''),
      metaTitle: String(row.meta_title ?? ''),
      metaDescription: String(row.meta_description ?? ''),
      ogImage: String(row.og_image ?? ''),
      indexable: row.indexable === false ? 'Không' : 'Có',
    };
  }
  if (moduleSlug === 'menu') {
    return {
      id: String(row.id ?? ''),
      menu: String(row.menu ?? row.name ?? ''),
      position: String(row.position ?? ''),
      items: Number(row.items ?? 0),
      structure: String(row.structure ?? ''),
      depth: Number(row.depth ?? 3),
      status: STATUS_EN_TO_VN[String(row.status ?? 'draft')] ?? 'Bản nháp',
      order: Number(row.sort_order ?? 0),
      updated: dateToVn(row.updated_at ?? row.created_at),
      author: String(row.author ?? ''),
    };
  }
  if (moduleSlug === 'banner') {
    return {
      id: String(row.id ?? ''),
      name: String(row.name ?? ''),
      position: String(row.position ?? ''),
      image: String(row.image_desktop ?? ''),
      imageMobile: String(row.image_mobile ?? ''),
      headline: String(row.headline ?? ''),
      ctaLink: String(row.cta_link ?? ''),
      schedule: String(row.schedule ?? ''),
      status: STATUS_EN_TO_VN[String(row.status ?? 'draft')] ?? 'Bản nháp',
      order: Number(row.sort_order ?? 0),
      updated: dateToVn(row.updated_at ?? row.created_at),
    };
  }
  if (moduleSlug === 'slider') {
    return {
      id: String(row.id ?? ''),
      name: String(row.name ?? ''),
      page: String(row.page ?? 'Trang chủ'),
      slides: Number(row.slides ?? 0),
      slidesData: String(row.slides_data ?? ''),
      interval: Number(row.interval ?? 5),
      autoplay: row.autoplay === false ? 'Không' : 'Có',
      status: STATUS_EN_TO_VN[String(row.status ?? 'draft')] ?? 'Bản nháp',
      order: Number(row.sort_order ?? 0),
      updated: dateToVn(row.updated_at ?? row.created_at),
      author: String(row.author ?? ''),
    };
  }
  if (moduleSlug === 'seo') {
    const title = String(row.meta_title ?? '');
    return {
      id: String(row.id ?? ''),
      page: String(row.page_path ?? ''),
      title,
      description: String(row.meta_description ?? ''),
      keywords: String(row.keywords ?? ''),
      canonical: String(row.canonical ?? ''),
      ogImage: String(row.og_image ?? ''),
      length: title.length,
      status: title ? 'Tốt' : 'Thiếu meta',
      indexable: row.indexable === false ? 'Không' : 'Có',
    };
  }
  // static-pages
  return {
    id: String(row.id ?? ''),
    title: String(row.title ?? ''),
    slug: String(row.slug ?? ''),
    template: String(row.template ?? 'Một cột'),
    content: String(row.content ?? ''),
    cover: String(row.cover ?? ''),
    status: STATUS_EN_TO_VN[String(row.status ?? 'draft')] ?? 'Bản nháp',
    order: Number(row.sort_order ?? 0),
    updated: dateToVn(row.updated_at ?? row.created_at),
    author: String(row.author ?? ''),
    metaTitle: String(row.meta_title ?? ''),
    metaDescription: String(row.meta_description ?? ''),
    ogImage: String(row.og_image ?? ''),
    indexable: row.indexable === false ? 'Không' : 'Có',
  };
}

/** Chuyển một admin row sang payload DB (snake_case, status tiếng Anh) */
function cmsAdminToDbRow(moduleSlug: string, row: AdminRow): Record<string, unknown> {
  const statusEn = STATUS_VN_TO_EN[String(row.status ?? '')] ?? 'draft';
  const order = Number(row.order ?? 0);
  const updated = vnDateToIso(row.updated) ?? new Date().toISOString().slice(0, 10);
  const indexable = row.indexable !== 'Không';

  if (moduleSlug === 'blog') {
    return {
      title: String(row.title ?? ''),
      slug: String(row.slug ?? sofa2Slugify(String(row.title ?? ''))),
      category: String(row.category ?? ''),
      excerpt: String(row.excerpt ?? ''),
      content: String(row.content ?? ''),
      cover: String(row.cover ?? ''),
      tags: String(row.tags ?? '').split(',').map((t) => t.trim()).filter(Boolean),
      status: statusEn,
      views: Number(row.views ?? 0),
      author: String(row.author ?? ''),
      published_at: statusEn === 'published' ? updated : null,
      meta_title: String(row.metaTitle ?? ''),
      meta_description: String(row.metaDescription ?? ''),
      og_image: String(row.ogImage ?? ''),
      indexable,
    };
  }
  if (PAGE_MODULES.includes(moduleSlug)) {
    return {
      slug: moduleSlug,
      block: String(row.block ?? ''),
      type: String(row.type ?? 'Rich text'),
      heading: String(row.heading ?? ''),
      content: String(row.content ?? ''),
      image: String(row.image ?? ''),
      cta_label: String(row.ctaLabel ?? ''),
      cta_link: String(row.ctaLink ?? ''),
      status: statusEn,
      sort_order: order,
      author: String(row.author ?? ''),
      meta_title: String(row.metaTitle ?? ''),
      meta_description: String(row.metaDescription ?? ''),
      og_image: String(row.ogImage ?? ''),
      indexable,
    };
  }
  if (moduleSlug === 'menu') {
    return {
      menu: String(row.menu ?? ''),
      position: String(row.position ?? 'Header'),
      items: Number(row.items ?? 0),
      structure: String(row.structure ?? ''),
      depth: Number(row.depth ?? 3),
      status: statusEn,
      sort_order: order,
      author: String(row.author ?? ''),
    };
  }
  if (moduleSlug === 'banner') {
    return {
      name: String(row.name ?? ''),
      position: String(row.position ?? ''),
      image_desktop: String(row.image ?? ''),
      image_mobile: String(row.imageMobile ?? ''),
      headline: String(row.headline ?? ''),
      cta_link: String(row.ctaLink ?? ''),
      schedule: String(row.schedule ?? ''),
      status: statusEn,
      sort_order: order,
    };
  }
  if (moduleSlug === 'slider') {
    return {
      name: String(row.name ?? ''),
      page: String(row.page ?? 'Trang chủ'),
      slides: Number(row.slides ?? 0),
      slides_data: String(row.slidesData ?? ''),
      interval: Number(row.interval ?? 5),
      autoplay: row.autoplay !== 'Không',
      status: statusEn,
      sort_order: order,
      author: String(row.author ?? ''),
    };
  }
  if (moduleSlug === 'seo') {
    const title = String(row.title ?? '');
    return {
      page_path: String(row.page ?? ''),
      meta_title: title,
      meta_description: String(row.description ?? ''),
      keywords: String(row.keywords ?? ''),
      canonical: String(row.canonical ?? ''),
      og_image: String(row.ogImage ?? ''),
      indexable,
    };
  }
  // static-pages
  return {
    title: String(row.title ?? ''),
    slug: String(row.slug ?? sofa2Slugify(String(row.title ?? ''))),
    template: String(row.template ?? 'Một cột'),
    content: String(row.content ?? ''),
    cover: String(row.cover ?? ''),
    status: statusEn,
    sort_order: order,
    author: String(row.author ?? ''),
    meta_title: String(row.metaTitle ?? ''),
    meta_description: String(row.metaDescription ?? ''),
    og_image: String(row.ogImage ?? ''),
    indexable,
  };
}

const cmsWriteQueues = new Map<string, Promise<AdminRow[]>>();
const cmsWriteRevisions = new Map<string, number>();
const savedCmsRows = new Map<string, AdminRow[]>();

export async function loadSofa2CmsRows(moduleSlug: string, defaults: AdminRow[]): Promise<AdminRow[]> {
  const k = key('cms', moduleSlug);
  const table = CMS_TABLE_MAP[moduleSlug];
  if (!table) return store[k] ?? defaults;

  let query = untypedSupabase.from(table).select('*');
  if (PAGE_MODULES.includes(moduleSlug)) {
    query = query.eq('slug', moduleSlug);
  }
  if (moduleSlug === 'seo') {
    query = query.order('page_path', { ascending: true });
  } else {
    query = query.order('sort_order', { ascending: true });
  }

  const { data, error } = await query;
  if (error || !data || data.length === 0) {
    // Giữ dữ liệu mẫu trong store nếu DB trống
    if (!store[k] || store[k].length === 0) {
      store[k] = defaults.map((row) => ({ ...row }));
      emit();
    }
    return store[k] ?? [];
  }

  const rows = data.map((row) => cmsDbToAdminRow(moduleSlug, row as unknown as Record<string, unknown>));
  store[k] = rows;
  savedCmsRows.set(k, rows.map((row) => ({ ...row })));
  emit();
  return rows;
}

export async function syncSofa2CmsRow(
  moduleSlug: string,
  mode: 'create' | 'update' | 'delete',
  row: AdminRow,
  index: number
): Promise<AdminRow[]> {
  const k = key('cms', moduleSlug);
  const table = CMS_TABLE_MAP[moduleSlug];
  if (!table) return store[k] ?? [];

  const previous = cmsWriteQueues.get(k) ?? Promise.resolve([]);
  const next = previous
    .catch(() => [])
    .then(async () => {
      if (mode === 'delete') {
        const id = String(row.id ?? '');
        if (id) {
          const { error: delError } = await untypedSupabase.from(table).delete().eq('id', id);
          if (delError) throw new Error(delError.message);
        }
        return store[k] ?? [];
      }

      const payload = cmsAdminToDbRow(moduleSlug, row);
      if (mode === 'update') {
        const id = String(row.id ?? '');
        if (id) {
          const { data: updated, error: updError } = await untypedSupabase
            .from(table)
            .update(payload)
            .eq('id', id)
            .select('*')
            .maybeSingle();
          if (updError) throw new Error(updError.message);
          if (updated) {
            return (store[k] ?? []).map((r, i) =>
              i === index ? cmsDbToAdminRow(moduleSlug, updated as unknown as Record<string, unknown>) : r
            );
          }
        }
        // Không có id — rơi về create
      }

      // Create
      const { data: created, error: insError } = await untypedSupabase
        .from(table)
        .insert(payload)
        .select('*')
        .maybeSingle();
      if (insError) throw new Error(insError.message);
      if (created) {
        const newRow = cmsDbToAdminRow(moduleSlug, created as unknown as Record<string, unknown>);
        return [newRow, ...(store[k] ?? [])];
      }
      return store[k] ?? [];
    });

  cmsWriteQueues.set(k, next);
  try {
    const result = await next;
    if (result) {
      store[k] = result;
      savedCmsRows.set(k, result.map((r) => ({ ...r })));
      emit();
    }
    return store[k] ?? [];
  } finally {
    if (cmsWriteQueues.get(k) === next) cmsWriteQueues.delete(k);
  }
}

export async function loadSofa2DealerRows(moduleSlug: string, defaults: AdminRow[]) {
  if (moduleSlug !== 'dashboard') {
    const dashboard = SOFA2_ADMIN_GROUPS.find((group) => group.slug === 'dealer')
      ?.modules.find((module) => module.slug === 'dashboard');
    if (dashboard) await loadSofa2DealerRows('dashboard', dashboard.rows);
  }

  const encodedModule = encodeURIComponent(moduleSlug);
  const response = await fetch(`/api/admin/dealer/${encodedModule}`, { credentials: 'include' });
  if (!response.ok) throw new Error('Không tải được dữ liệu đại lý từ máy chủ.');

  let payload = (await response.json()) as { rows?: AdminRow[] };
  if ((!payload.rows || payload.rows.length === 0) && defaults.length > 0) {
    const seeded = await fetch(`/api/admin/dealer/${encodedModule}/seed`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rows: defaults }),
    });
    if (!seeded.ok) throw new Error('Không khởi tạo được dữ liệu đại lý.');
    payload = (await seeded.json()) as { rows?: AdminRow[] };
  }

  store[key('dealer', moduleSlug)] = (payload.rows ?? []).map((row) => ({ ...row }));
  emit();
}

export async function syncSofa2DealerRows(moduleSlug: string, rows: AdminRow[]) {
  const response = await fetch(`/api/admin/dealer/${encodeURIComponent(moduleSlug)}`, {
    method: 'PUT',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ rows }),
  });
  if (!response.ok) throw new Error('Không đồng bộ được dữ liệu đại lý với máy chủ.');

  const payload = (await response.json()) as { rows?: AdminRow[] };
  if (payload.rows) {
    store[key('dealer', moduleSlug)] = payload.rows.map((row) => ({ ...row }));
    emit();
  }
}

export async function loadSofa2AccessRows(moduleSlug: string) {
  const readModule = async (slug: string) => {
    const response = await fetch(`/api/admin/access/${encodeURIComponent(slug)}`, {
      credentials: 'include',
    });
    if (!response.ok) throw new Error('Không tải được dữ liệu phân quyền từ máy chủ.');
    return (await response.json()) as { rows?: AdminRow[]; initialized?: boolean };
  };
  const seedModule = async (slug: string, rows: AdminRow[]) => {
    const response = await fetch(`/api/admin/access/${encodeURIComponent(slug)}/seed`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rows }),
    });
    if (!response.ok) throw new Error('Không khởi tạo được cấu hình phân quyền mặc định.');
    return (await response.json()) as { rows?: AdminRow[] };
  };
  const getDefaults = (slug: string) =>
    SOFA2_ADMIN_GROUPS.find((group) => group.slug === 'access')?.modules.find(
      (module) => module.slug === slug
    )?.rows ?? [];

  if (moduleSlug !== 'roles' && moduleSlug !== 'audit-log') {
    const roles = await readModule('roles');
    if (!roles.initialized) await seedModule('roles', getDefaults('roles'));
  }

  let payload = await readModule(moduleSlug);
  if (!payload.initialized && moduleSlug !== 'audit-log') {
    payload = await seedModule(moduleSlug, getDefaults(moduleSlug));
  }
  store[key('access', moduleSlug)] = (payload.rows ?? []).map((row) => ({ ...row }));
  emit();
}

export async function syncSofa2AccessRows(moduleSlug: string, rows: AdminRow[]) {
  const response = await fetch(`/api/admin/access/${encodeURIComponent(moduleSlug)}`, {
    method: 'PUT',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ rows }),
  });
  if (!response.ok) {
    const payload = (await response.json().catch(() => ({}))) as { error?: string };
    throw new Error(payload.error || 'Không lưu được dữ liệu phân quyền.');
  }
  const payload = (await response.json()) as { rows?: AdminRow[] };
  store[key('access', moduleSlug)] = (payload.rows ?? []).map((row) => ({ ...row }));
  emit();
}

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

export function useSofa2AdminRows(
  groupSlug: string,
  moduleSlug: string,
  options: { load?: boolean } = {}
) {
  const k = key(groupSlug, moduleSlug);
  const isSeoModule = groupSlug === 'seo';
  const isCmsModule = groupSlug === 'cms';
  const isAccessModule = groupSlug === 'access';
  const shouldLoad = (isSeoModule || isCmsModule || isAccessModule) && options.load !== false;
  const [loading, setLoading] = useState(shouldLoad);
  const [error, setError] = useState('');
  const [pendingWrites, setPendingWrites] = useState(0);
  const [reloadToken, setReloadToken] = useState(0);

  const rows = useSyncExternalStore(
    subscribe,
    () => store[k] ?? EMPTY,
    () => store[k] ?? EMPTY
  );

  useEffect(() => {
    if (!shouldLoad) {
      setLoading(false);
      return undefined;
    }

    let active = true;
    setLoading(true);
    setError('');

    const loader = isCmsModule
      ? loadSofa2CmsRows(moduleSlug, store[k] ?? [])
      : isAccessModule
        ? loadSofa2AccessRows(moduleSlug)
        : loadSofa2SeoRows(moduleSlug, store[k] ?? []);

    loader
      .catch((loadError: unknown) => {
        if (active) {
          setError(
            loadError instanceof Error
              ? loadError.message
              : isCmsModule
                ? 'Không tải được dữ liệu CMS.'
                : isAccessModule
                  ? 'Không tải được dữ liệu phân quyền.'
                  : 'Không tải được dữ liệu SEO.'
          );
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [shouldLoad, isCmsModule, isAccessModule, k, moduleSlug, reloadToken]);

  const persistCmsRow = useCallback(
    (mode: 'create' | 'update' | 'delete', row: AdminRow, index: number, previousRows: AdminRow[]) => {
      if (!isCmsModule) return;
      const revision = (cmsWriteRevisions.get(k) ?? 0) + 1;
      cmsWriteRevisions.set(k, revision);
      setPendingWrites((count) => count + 1);
      setError('');

      syncSofa2CmsRow(moduleSlug, mode, row, index)
        .then((savedRows) => {
          if (cmsWriteRevisions.get(k) === revision) {
            store[k] = savedRows;
            emit();
          }
        })
        .catch((saveError: unknown) => {
          if (cmsWriteRevisions.get(k) === revision) {
            store[k] = (savedCmsRows.get(k) ?? previousRows).map((r) => ({ ...r }));
            emit();
            setError(saveError instanceof Error ? saveError.message : 'Không lưu được dữ liệu CMS.');
          }
        })
        .finally(() => setPendingWrites((count) => Math.max(0, count - 1)));
    },
    [isCmsModule, k, moduleSlug]
  );

  const persistSeoRows = useCallback(
    (nextRows: AdminRow[], previousRows: AdminRow[]) => {
      if (!isSeoModule) return;
      const revision = (seoWriteRevisions.get(k) ?? 0) + 1;
      seoWriteRevisions.set(k, revision);
      setPendingWrites((count) => count + 1);
      setError('');

      syncSofa2SeoRows(moduleSlug, nextRows)
        .then((savedRows) => {
          savedSeoRows.set(k, savedRows.map((row) => ({ ...row })));
          if (seoWriteRevisions.get(k) === revision) {
            store[k] = savedRows;
            emit();
          }
        })
        .catch((saveError: unknown) => {
          if (seoWriteRevisions.get(k) === revision) {
            store[k] = (savedSeoRows.get(k) ?? previousRows).map((row) => ({ ...row }));
            emit();
            setError(saveError instanceof Error ? saveError.message : 'Không lưu được dữ liệu SEO.');
          }
        })
        .finally(() => setPendingWrites((count) => Math.max(0, count - 1)));
    },
    [isSeoModule, k, moduleSlug]
  );

  const persistAccessRows = useCallback(
    (nextRows: AdminRow[], previousRows: AdminRow[]) => {
      if (!isAccessModule) return;
      setPendingWrites((count) => count + 1);
      setError('');

      syncSofa2AccessRows(moduleSlug, nextRows)
        .catch((saveError: unknown) => {
          store[k] = previousRows;
          emit();
          setError(saveError instanceof Error ? saveError.message : 'Không lưu được dữ liệu phân quyền.');
        })
        .finally(() => setPendingWrites((count) => Math.max(0, count - 1)));
    },
    [isAccessModule, k, moduleSlug]
  );

  const createRow = useCallback(
    (row: AdminRow) => {
      const nextRow = { ...row };
      if (k === key('hr', 'recruitment') && !nextRow.jobId) {
        nextRow.jobId = `JOB-${Date.now().toString(36).toUpperCase()}`;
      }
      if (k === key('hr', 'submit-cv') && !nextRow.applicationId) {
        nextRow.applicationId = `APP-${Date.now().toString(36).toUpperCase()}`;
      }
      const previousRows = store[k] ?? [];
      store[k] = [nextRow, ...previousRows];
      if (k === key('hr', 'submit-cv')) {
        const jobId = String(nextRow.jobId ?? '');
        const jobTitle = String(nextRow.job ?? '');
        const jobsKey = key('hr', 'recruitment');
        store[jobsKey] = (store[jobsKey] ?? []).map((job) =>
          String(job.jobId ?? '') === jobId || (!jobId && String(job.title ?? '') === jobTitle)
            ? { ...job, applicants: Number(job.applicants || 0) + 1 }
            : job
        );
        const profilesKey = key('hr', 'applicant-profile');
        const applicationId = String(nextRow.applicationId ?? '');
        if (!(store[profilesKey] ?? []).some((candidate) => String(candidate.applicationId ?? '') === applicationId)) {
          store[profilesKey] = [
            {
              applicationId,
              jobId,
              name: String(nextRow.applicant ?? ''),
              email: String(nextRow.email ?? ''),
              phone: String(nextRow.phone ?? ''),
              appliedJob: jobTitle,
              appliedDate: String(nextRow.submittedDate ?? ''),
              source: String(nextRow.source ?? 'Website'),
              cvUrl: String(nextRow.cvUrl ?? ''),
              cvFileName: String(nextRow.cvFileName ?? ''),
              interviewRound: 'Sàng lọc CV',
              status: String(nextRow.status ?? 'Mới'),
              note: '',
            },
            ...(store[profilesKey] ?? []),
          ];
        }
      }
      emit();
      persistSeoRows(store[k], previousRows);
      persistAccessRows(store[k], previousRows);
      if (isCmsModule) persistCmsRow('create', nextRow, 0, previousRows);
    },
    [k, persistSeoRows, persistAccessRows, isCmsModule, persistCmsRow]
  );

  const updateRow = useCallback(
    (index: number, row: AdminRow) => {
      const next = [...(store[k] ?? [])];
      const previousRows = next.map((item) => ({ ...item }));
      const previous = next[index];
      next[index] = { ...row };
      store[k] = next;
      if (k === key('hr', 'recruitment') && previous) {
        const jobId = String(row.jobId ?? '');
        const title = String(row.title ?? '');
        if (jobId && title !== String(previous.title ?? '')) {
          const applicationsKey = key('hr', 'submit-cv');
          const profilesKey = key('hr', 'applicant-profile');
          store[applicationsKey] = (store[applicationsKey] ?? []).map((application) =>
            String(application.jobId ?? '') === jobId ? { ...application, job: title } : application
          );
          store[profilesKey] = (store[profilesKey] ?? []).map((profile) =>
            String(profile.jobId ?? '') === jobId ? { ...profile, appliedJob: title } : profile
          );
        }
      }
      if (k === key('customer', 'profiles') && previous && String(previous.name) !== String(row.name)) {
        const customerId = String(row.customerId ?? '');
        ['dashboard', 'customer-orders', 'warranties', 'points', 'vouchers', 'complaints'].forEach((module) => {
          const childKey = key('customer', module);
          store[childKey] = (store[childKey] ?? []).map((child) =>
            String(child.customerId ?? '') === customerId ? { ...child, customer: String(row.name ?? '') } : child
          );
        });
      }
      if (
        k === key('hr', 'submit-cv') ||
        k === key('hr', 'applicant-profile')
      ) {
        const applicationId = String(row.applicationId ?? '');
        if (applicationId) {
          const sourceModule = k === key('hr', 'submit-cv') ? 'submit-cv' : 'applicant-profile';
          const targetModule = sourceModule === 'submit-cv' ? 'applicant-profile' : 'submit-cv';
          const targetKey = key('hr', targetModule);
          store[targetKey] = (store[targetKey] ?? []).map((candidate) => {
            if (String(candidate.applicationId ?? '') !== applicationId) return candidate;
            const shared = {
              email: row.email,
              phone: row.phone,
              status: row.status,
            };
            return sourceModule === 'submit-cv'
              ? { ...candidate, ...shared, name: row.applicant, appliedJob: row.job, jobId: row.jobId, cvUrl: row.cvUrl, cvFileName: row.cvFileName }
              : { ...candidate, ...shared, applicant: row.name, job: row.appliedJob, jobId: row.jobId, cvUrl: row.cvUrl, cvFileName: row.cvFileName };
          });
        }
      }
      if (k === key('hr', 'submit-cv') && previous) {
        const oldJobId = String(previous.jobId ?? '');
        const newJobId = String(row.jobId ?? '');
        if (oldJobId !== newJobId) {
          adjustRecruitmentApplicants(previous, -1);
          adjustRecruitmentApplicants(row, 1);
        }
      }
      emit();
      persistSeoRows(next, previousRows);
      persistAccessRows(next, previousRows);
      if (isCmsModule) persistCmsRow('update', row, index, previousRows);
    },
    [k, persistSeoRows, persistAccessRows, isCmsModule, persistCmsRow]
  );

  const deleteRow = useCallback(
    (index: number) => {
      const currentRows = store[k] ?? [];
      const previousRows = currentRows.map((item) => ({ ...item }));
      const removed = currentRows[index];
      store[k] = currentRows.filter((_, i) => i !== index);
      if (removed && (k === key('hr', 'submit-cv') || k === key('hr', 'applicant-profile'))) {
        removeLinkedApplications(k === key('hr', 'submit-cv') ? 'submit-cv' : 'applicant-profile', [removed]);
      }
      emit();
      persistSeoRows(store[k], previousRows);
      persistAccessRows(store[k], previousRows);
      if (isCmsModule && removed) persistCmsRow('delete', removed, index, previousRows);
    },
    [k, persistSeoRows, persistAccessRows, isCmsModule, persistCmsRow]
  );

  const deleteRows = useCallback(
    (indexes: number[]) => {
      const set = new Set(indexes);
      const currentRows = store[k] ?? [];
      const previousRows = currentRows.map((item) => ({ ...item }));
      const removed = currentRows.filter((_, i) => set.has(i));
      store[k] = currentRows.filter((_, i) => !set.has(i));
      if (k === key('hr', 'submit-cv') || k === key('hr', 'applicant-profile')) {
        removeLinkedApplications(k === key('hr', 'submit-cv') ? 'submit-cv' : 'applicant-profile', removed);
      }
      emit();
      persistSeoRows(store[k], previousRows);
      persistAccessRows(store[k], previousRows);
      if (isCmsModule) {
        removed.forEach((r) => persistCmsRow('delete', r, -1, previousRows));
      }
    },
    [k, persistSeoRows, persistAccessRows, isCmsModule, persistCmsRow]
  );

  const resetRows = useCallback(
    (initial: AdminRow[]) => {
      const previousRows = (store[k] ?? []).map((row) => ({ ...row }));
      store[k] = initial.map((row) => ({ ...row }));
      emit();
      persistSeoRows(store[k], previousRows);
      persistAccessRows(store[k], previousRows);
    },
    [k, persistSeoRows, persistAccessRows]
  );

  return {
    rows,
    createRow,
    updateRow,
    deleteRow,
    deleteRows,
    resetRows,
    loading,
    saving: pendingWrites > 0,
    error,
    retry: () => setReloadToken((token) => token + 1),
  };
}

const EMPTY: AdminRow[] = [];
