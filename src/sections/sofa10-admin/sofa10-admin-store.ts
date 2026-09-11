import { useCallback, useSyncExternalStore } from 'react';

import { SOFA10_ADMIN_GROUPS } from './sofa10-admin-config';

// In-memory CRUD store for sofa10 admin — persists across page navigation

export type AdminRow = (string | number)[];

type Store = Record<string, AdminRow[]>;

const key = (group: string, section: string) => `${group}/${section}`;

const store: Store = {};

SOFA10_ADMIN_GROUPS.forEach((group) => {
  group.sections.forEach((section) => {
    store[key(group.slug, section.slug)] = section.rows.map((row) => [...row]);
  });
});

const listeners = new Set<() => void>();

const emit = () => listeners.forEach((l) => l());

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

export function useSofa10AdminRows(groupSlug: string, sectionSlug: string) {
  const k = key(groupSlug, sectionSlug);

  const rows = useSyncExternalStore(
    subscribe,
    () => store[k] ?? EMPTY,
    () => store[k] ?? EMPTY
  );

  const createRow = useCallback(
    (row: AdminRow) => {
      store[k] = [[...row], ...(store[k] ?? [])];
      emit();
    },
    [k]
  );

  const updateRow = useCallback(
    (index: number, row: AdminRow) => {
      const next = [...(store[k] ?? [])];
      next[index] = [...row];
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
      store[k] = initial.map((row) => [...row]);
      emit();
    },
    [k]
  );

  return { rows, createRow, updateRow, deleteRow, deleteRows, resetRows };
}

const EMPTY: AdminRow[] = [];
