import { useSyncExternalStore } from 'react';

// ----------------------------------------------------------------------
// Kho dữ liệu nhóm "Sản phẩm" cho khu quản trị sofa2.
// Các thực thể liên kết với nhau: danh mục → sản phẩm → biến thể → tồn kho / giá bán.
// Lưu trong localStorage để giữ nguyên khi tải lại trang.
// ----------------------------------------------------------------------

const STORAGE_KEY = 'sofa2-catalog-v1';

export type CatalogRecord = Record<string, string | number | boolean> & { id: string };

export type CatalogEntity = 'categories' | 'products' | 'attributes' | 'variants' | 'inventory' | 'pricing';

export type StockMove = {
  id: string;
  inventoryId: string;
  sku: string;
  delta: number;
  reason: string;
  at: string;
};

export type CatalogState = Record<CatalogEntity, CatalogRecord[]> & { moves: StockMove[] };

export const uid = () => Math.random().toString(36).slice(2, 10);

export const nowText = () =>
  new Date().toLocaleString('vi-VN', { hour12: false }).replace(',', '');

export const slugify = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

function seed(): CatalogState {
  const categories: CatalogRecord[] = [
    { id: 'c1', name: 'Phong cách', slug: 'phong-cach', parent: '', order: 1, image: '', description: 'Nhóm theo phong cách thiết kế', status: 'published', showMenu: true },
    { id: 'c2', name: 'Scandinavian', slug: 'scandinavian', parent: 'c1', order: 1, image: '', description: 'Tối giản Bắc Âu', status: 'published', showMenu: true },
    { id: 'c3', name: 'Industrial Loft', slug: 'industrial-loft', parent: 'c1', order: 2, image: '', description: 'Gỗ, thép, da thô', status: 'published', showMenu: true },
    { id: 'c4', name: 'Theo kiểu dáng', slug: 'kieu-dang', parent: '', order: 2, image: '', description: '', status: 'published', showMenu: true },
    { id: 'c5', name: 'Sofa góc', slug: 'sofa-goc', parent: 'c4', order: 1, image: '', description: 'Sofa chữ L, chữ U', status: 'published', showMenu: true },
    { id: 'c6', name: 'Sofa đơn', slug: 'sofa-don', parent: 'c4', order: 2, image: '', description: '', status: 'hidden', showMenu: false },
  ];
  const products: CatalogRecord[] = [
    { id: 'p1', name: 'Sofa Oslo 3 chỗ', sku: 'LX-OSLO-3', slug: 'sofa-oslo-3-cho', category: 'c2', brand: 'LUXE', basePrice: 28900000, salePrice: 25900000, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400', material: 'Vải bouclé, gỗ sồi', dimensions: '220 x 95 x 82 cm', warranty: '5 năm', description: 'Sofa tối giản Bắc Âu, đệm lông vũ.', status: 'published', featured: true, seoTitle: 'Sofa Oslo 3 chỗ | LUXE Sofa', seoDescription: 'Sofa vải bouclé phong cách Scandinavian.' },
    { id: 'p2', name: 'Sofa góc Brooklyn', sku: 'LX-BRK-L', slug: 'sofa-goc-brooklyn', category: 'c5', brand: 'LUXE', basePrice: 46500000, salePrice: 0, image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400', material: 'Da bò Ý, chân thép', dimensions: '300 x 180 x 80 cm', warranty: '7 năm', description: 'Sofa góc chữ L phong cách loft.', status: 'published', featured: true, seoTitle: '', seoDescription: '' },
    { id: 'p3', name: 'Armchair Mila', sku: 'LX-MILA-1', slug: 'armchair-mila', category: 'c6', brand: 'LUXE Atelier', basePrice: 12800000, salePrice: 11500000, image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400', material: 'Nhung, gỗ óc chó', dimensions: '80 x 85 x 90 cm', warranty: '3 năm', description: '', status: 'draft', featured: false, seoTitle: '', seoDescription: '' },
  ];
  const attributes: CatalogRecord[] = [
    { id: 'a1', name: 'Màu sắc', code: 'color', type: 'Màu', values: 'Kem, Xám tro, Xanh rêu, Nâu cognac', forVariant: true, filterable: true },
    { id: 'a2', name: 'Chất liệu', code: 'material', type: 'Danh sách', values: 'Vải bouclé, Da bò Ý, Nhung', forVariant: true, filterable: true },
    { id: 'a3', name: 'Kích thước', code: 'size', type: 'Danh sách', values: '2 chỗ, 3 chỗ, Góc L', forVariant: true, filterable: false },
  ];
  const variants: CatalogRecord[] = [
    { id: 'v1', product: 'p1', sku: 'LX-OSLO-3-KEM', options: 'Kem / Vải bouclé / 3 chỗ', priceDelta: 0, weight: 65, barcode: '893600000001', status: 'published' },
    { id: 'v2', product: 'p1', sku: 'LX-OSLO-3-XAM', options: 'Xám tro / Vải bouclé / 3 chỗ', priceDelta: 0, weight: 65, barcode: '893600000002', status: 'published' },
    { id: 'v3', product: 'p2', sku: 'LX-BRK-L-COG', options: 'Nâu cognac / Da bò Ý / Góc L', priceDelta: 3500000, weight: 120, barcode: '893600000003', status: 'published' },
  ];
  const inventory: CatalogRecord[] = [
    { id: 'i1', sku: 'LX-OSLO-3-KEM', warehouse: 'Kho Hà Nội', onHand: 14, reserved: 3, minStock: 5, location: 'A1-02' },
    { id: 'i2', sku: 'LX-OSLO-3-XAM', warehouse: 'Kho TP.HCM', onHand: 4, reserved: 2, minStock: 5, location: 'B2-07' },
    { id: 'i3', sku: 'LX-BRK-L-COG', warehouse: 'Kho Hà Nội', onHand: 6, reserved: 1, minStock: 2, location: 'C1-01' },
  ];
  const pricing: CatalogRecord[] = [
    { id: 'r1', product: 'p1', priceList: 'Bán lẻ', price: 28900000, salePrice: 25900000, startDate: '2026-10-01', endDate: '2026-10-31', minQty: 1, status: 'published' },
    { id: 'r2', product: 'p1', priceList: 'Đại lý', price: 24500000, salePrice: 0, startDate: '', endDate: '', minQty: 5, status: 'published' },
    { id: 'r3', product: 'p2', priceList: 'B2B dự án', price: 41000000, salePrice: 0, startDate: '', endDate: '', minQty: 10, status: 'draft' },
  ];
  return { categories, products, attributes, variants, inventory, pricing, moves: [] };
}

function load(): CatalogState {
  try {
    const raw = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    if (raw) return { ...seed(), ...JSON.parse(raw) };
  } catch {
    /* bỏ qua */
  }
  return seed();
}

let state: CatalogState = load();
const listeners = new Set<() => void>();

function commit(next: CatalogState) {
  state = next;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* bỏ qua */
  }
  listeners.forEach((l) => l());
}

const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => {
    listeners.delete(l);
  };
};

export const catalogApi = {
  create(entity: CatalogEntity, values: Omit<CatalogRecord, 'id'>) {
    commit({ ...state, [entity]: [{ ...values, id: uid() }, ...state[entity]] });
  },
  createMany(entity: CatalogEntity, list: Omit<CatalogRecord, 'id'>[]) {
    commit({ ...state, [entity]: [...list.map((v) => ({ ...v, id: uid() })), ...state[entity]] });
  },
  update(entity: CatalogEntity, id: string, values: Partial<CatalogRecord>) {
    commit({
      ...state,
      [entity]: state[entity].map((r) => (r.id === id ? { ...r, ...values, id } : r)),
    });
  },
  updateMany(entity: CatalogEntity, ids: string[], fn: (r: CatalogRecord) => Partial<CatalogRecord>) {
    commit({
      ...state,
      [entity]: state[entity].map((r) => (ids.includes(r.id) ? { ...r, ...fn(r), id: r.id } : r)),
    });
  },
  remove(entity: CatalogEntity, ids: string[]) {
    commit({ ...state, [entity]: state[entity].filter((r) => !ids.includes(r.id)) });
  },
  adjustStock(inventoryId: string, delta: number, reason: string) {
    const row = state.inventory.find((r) => r.id === inventoryId);
    if (!row) return;
    const onHand = Math.max(0, Number(row.onHand) + delta);
    commit({
      ...state,
      inventory: state.inventory.map((r) => (r.id === inventoryId ? { ...r, onHand } : r)),
      moves: [
        { id: uid(), inventoryId, sku: String(row.sku), delta, reason, at: nowText() },
        ...state.moves,
      ].slice(0, 200),
    });
  },
  reset() {
    commit(seed());
  },
};

export function useSofa2Catalog() {
  return useSyncExternalStore(subscribe, () => state, () => state);
}
