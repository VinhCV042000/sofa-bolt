import { useCallback, useSyncExternalStore } from 'react';

import { SOFA2_ADMIN_GROUPS } from './sofa2-admin-data';

// ----------------------------------------------------------------------
// Kho dữ liệu CRUD tại chỗ (in-memory) cho khu quản trị sofa2.
// Dữ liệu khởi tạo từ SOFA2_ADMIN_GROUPS và giữ nguyên khi chuyển trang.
// ----------------------------------------------------------------------

export type AdminRow = Record<string, string | number>;

type Store = Record<string, AdminRow[]>;

const canonicalModule = (group: string, module: string) =>
  group === 'hr' && ['job-detail', 'recruitment-tracking'].includes(module) ? 'recruitment' : module;
const key = (group: string, module: string) => `${group}/${canonicalModule(group, module)}`;

const store: Store = {};

const STORAGE_KEY = 'sofa2-admin-rows-v1';

SOFA2_ADMIN_GROUPS.forEach((group) => {
  group.modules.forEach((module) => {
    if (group.slug === 'hr' && ['job-detail', 'recruitment-tracking'].includes(module.slug)) return;
    store[key(group.slug, module.slug)] = module.rows.map((row) => ({ ...row }));
  });
});

// Khôi phục dữ liệu đã lưu (giữ thay đổi sau khi tải lại trang, dùng chung với trang khách)
try {
  const saved = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;
  if (saved) Object.assign(store, JSON.parse(saved) as Store);
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

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

export function useSofa2AdminRows(groupSlug: string, moduleSlug: string) {
  const k = key(groupSlug, moduleSlug);

  const rows = useSyncExternalStore(
    subscribe,
    () => store[k] ?? EMPTY,
    () => store[k] ?? EMPTY
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
      store[k] = [nextRow, ...(store[k] ?? [])];
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
    },
    [k]
  );

  const updateRow = useCallback(
    (index: number, row: AdminRow) => {
      const next = [...(store[k] ?? [])];
      const previous = next[index];
      next[index] = { ...row };
      store[k] = next;
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
              ? { ...candidate, ...shared, name: row.applicant, appliedJob: row.job, cvUrl: row.cvUrl }
              : { ...candidate, ...shared, applicant: row.name, job: row.appliedJob, cvUrl: row.cvUrl };
          });
        }
      }
      emit();
    },
    [k]
  );

  const deleteRow = useCallback(
    (index: number) => {
      store[k] = (store[k] ?? []).filter((_, i) => i !== index);
      emit();
    },
    [k]
  );

  const deleteRows = useCallback(
    (indexes: number[]) => {
      const set = new Set(indexes);
      store[k] = (store[k] ?? []).filter((_, i) => !set.has(i));
      emit();
    },
    [k]
  );

  const resetRows = useCallback(
    (initial: AdminRow[]) => {
      store[k] = initial.map((row) => ({ ...row }));
      emit();
    },
    [k]
  );

  return { rows, createRow, updateRow, deleteRow, deleteRows, resetRows };
}

const EMPTY: AdminRow[] = [];
