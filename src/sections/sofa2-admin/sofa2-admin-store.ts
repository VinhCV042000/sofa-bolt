import { useCallback, useEffect, useState, useSyncExternalStore } from 'react';

import { SOFA2_ADMIN_GROUPS } from './sofa2-admin-data';

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
    Object.assign(store, JSON.parse(saved) as Store);
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
  const shouldLoad = isSeoModule && options.load !== false;
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
    loadSofa2SeoRows(moduleSlug, store[k] ?? [])
      .catch((loadError: unknown) => {
        if (active) {
          setError(
            loadError instanceof Error ? loadError.message : 'Không tải được dữ liệu SEO.'
          );
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [shouldLoad, k, moduleSlug, reloadToken]);

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
    },
    [k, persistSeoRows]
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
    },
    [k, persistSeoRows]
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
    },
    [k, persistSeoRows]
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
    },
    [k, persistSeoRows]
  );

  const resetRows = useCallback(
    (initial: AdminRow[]) => {
      const previousRows = (store[k] ?? []).map((row) => ({ ...row }));
      store[k] = initial.map((row) => ({ ...row }));
      emit();
      persistSeoRows(store[k], previousRows);
    },
    [k, persistSeoRows]
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
