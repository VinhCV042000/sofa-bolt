import { useCallback, useSyncExternalStore } from 'react';

import { SOFA2_ADMIN_GROUPS } from './sofa2-admin-data';

// ----------------------------------------------------------------------
// Kho dữ liệu CRUD tại chỗ (in-memory) cho khu quản trị sofa2.
// Dữ liệu khởi tạo từ SOFA2_ADMIN_GROUPS và giữ nguyên khi chuyển trang.
// ----------------------------------------------------------------------

export type AdminRow = Record<string, string | number>;

type Store = Record<string, AdminRow[]>;

const key = (group: string, module: string) => `${group}/${module}`;

const store: Store = {};

const STORAGE_KEY = 'sofa2-admin-rows-v1';

SOFA2_ADMIN_GROUPS.forEach((group) => {
  group.modules.forEach((module) => {
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

const listeners = new Set<() => void>();

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
      store[k] = [{ ...row }, ...(store[k] ?? [])];
      emit();
    },
    [k]
  );

  const updateRow = useCallback(
    (index: number, row: AdminRow) => {
      const next = [...(store[k] ?? [])];
      next[index] = { ...row };
      store[k] = next;
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
