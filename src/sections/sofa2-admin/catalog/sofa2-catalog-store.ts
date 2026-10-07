import { useCallback, useSyncExternalStore } from 'react';

import { SOFA2_PRODUCTS, SOFA2_PRODUCT_CATEGORIES } from 'src/sections/sofa2/sofa2-pages-data';

// ----------------------------------------------------------------------
// Kho dữ liệu module Sản phẩm sofa2 — lưu localStorage, dùng chung admin + trang khách
// ----------------------------------------------------------------------

export const CATALOG_STATUSES = ['Đang bán', 'Bản nháp', 'Tạm ẩn', 'Ngừng bán'] as const;
export type CatalogStatus = (typeof CATALOG_STATUSES)[number];

export type CategoryGroup = keyof typeof SOFA2_PRODUCT_CATEGORIES;

export const CATEGORY_GROUP_LABELS: Record<CategoryGroup, string> = {
  types: 'Kiểu dáng',
  styles: 'Phong cách',
  spaces: 'Không gian',
  sizes: 'Kích thước',
  prices: 'Khoảng giá',
} as Record<CategoryGroup, string>;

export type CatalogCategory = {
  id: string;
  slug: string;
  label: string;
  group: CategoryGroup;
  description: string;
  order: number;
  visible: boolean;
};

export type CatalogProduct = {
  id: string;
  name: string;
  slug: string;
  sku: string;
  category: string;
  style: string;
  price: number;
  oldPrice?: number;
  image: string;
  images: string[];
  material: string;
  size: string;
  colors: string[];
  rating: number;
  reviews: number;
  badge?: string;
  description: string;
  status: CatalogStatus;
  featured: boolean;
};

export type CatalogAttribute = {
  id: string;
  name: string;
  code: string;
  type: 'Chọn một' | 'Màu sắc' | 'Văn bản';
  values: string[];
  useForVariant: boolean;
};

export type CatalogVariant = {
  id: string;
  productId: string;
  sku: string;
  options: Record<string, string>;
  price: number;
  stock: number;
  reorderPoint: number;
  warehouse: string;
  active: boolean;
};

export type StockMove = {
  id: string;
  variantId: string;
  delta: number;
  reason: string;
  at: string;
};

export type PriceRule = {
  id: string;
  name: string;
  scope: 'Tất cả' | 'Danh mục' | 'Sản phẩm';
  target: string;
  percent: number;
  start: string;
  end: string;
  active: boolean;
};

export type Sofa2CatalogState = {
  categories: CatalogCategory[];
  products: CatalogProduct[];
  attributes: CatalogAttribute[];
  variants: CatalogVariant[];
  moves: StockMove[];
  priceRules: PriceRule[];
};

export const WAREHOUSES = ['Kho Hà Nội', 'Kho TP.HCM', 'Kho Đà Nẵng'];

export const catalogId = () => Math.random().toString(36).slice(2, 10);

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

// ----------------------------------------------------------------------

function buildDefaults(): Sofa2CatalogState {
  const categories: CatalogCategory[] = [];
  (Object.keys(SOFA2_PRODUCT_CATEGORIES) as CategoryGroup[]).forEach((group) => {
    SOFA2_PRODUCT_CATEGORIES[group].forEach((c, i) =>
      categories.push({
        id: `${group}-${c.slug}`,
        slug: c.slug,
        label: c.label,
        group,
        description: '',
        order: i + 1,
        visible: true,
      })
    );
  });

  const products: CatalogProduct[] = SOFA2_PRODUCTS.map((p) => ({
    ...(p as Omit<CatalogProduct, 'sku' | 'status' | 'featured'>),
    sku: `LUXE-${p.id.padStart(3, '0')}`,
    status: 'Đang bán',
    featured: (p as { badge?: string }).badge === 'Bestseller',
  }));

  const attributes: CatalogAttribute[] = [
    { id: 'color', name: 'Màu sắc', code: 'color', type: 'Màu sắc', values: ['Be', 'Xám', 'Nâu', 'Đen', 'Trắng', 'Xám đậm', 'Nâu đậm', 'Xanh navy'], useForVariant: true },
    { id: 'size', name: 'Kích thước', code: 'size', type: 'Chọn một', values: ['1 chỗ', '2 chỗ', '3 chỗ', 'Góc L'], useForVariant: true },
    { id: 'material', name: 'Chất liệu', code: 'material', type: 'Chọn một', values: ['Vải linen', 'Da PU', 'Da bò thật', 'Velvet', 'Cotton'], useForVariant: false },
    { id: 'warranty', name: 'Bảo hành', code: 'warranty', type: 'Văn bản', values: ['12 tháng', '24 tháng', '60 tháng khung'], useForVariant: false },
  ];

  const variants: CatalogVariant[] = [];
  products.forEach((p, pi) =>
    p.colors.forEach((color, ci) =>
      variants.push({
        id: `${p.id}-${ci}`,
        productId: p.id,
        sku: `${p.sku}-${slugify(color).toUpperCase()}`,
        options: { color },
        price: p.price,
        stock: ((pi * 7 + ci * 5) % 18) + (ci === 2 ? 0 : 2),
        reorderPoint: 3,
        warehouse: WAREHOUSES[(pi + ci) % WAREHOUSES.length],
        active: true,
      })
    )
  );

  return {
    categories,
    products,
    attributes,
    variants,
    moves: [],
    priceRules: [
      { id: 'r1', name: 'Flash sale cuối tuần', scope: 'Danh mục', target: 'sofa-don', percent: -10, start: '2026-10-10', end: '2026-10-12', active: false },
      { id: 'r2', name: 'Tăng giá da bò nhập', scope: 'Sản phẩm', target: '5', percent: 5, start: '2026-11-01', end: '2026-12-31', active: false },
    ],
  };
}

const STORAGE_KEY = 'sofa2-catalog-v1';

function load(): Sofa2CatalogState {
  const defaults = buildDefaults();
  if (typeof window === 'undefined') return defaults;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? { ...defaults, ...(JSON.parse(raw) as Partial<Sofa2CatalogState>) } : defaults;
  } catch {
    return defaults;
  }
}

let state: Sofa2CatalogState = load();
const listeners = new Set<() => void>();

function commit(next: Sofa2CatalogState) {
  state = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
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
const getSnapshot = () => state;

/** Thay thế/ thêm phần tử theo id */
function upsert<T extends { id: string }>(list: T[], item: T): T[] {
  return list.some((x) => x.id === item.id) ? list.map((x) => (x.id === item.id ? item : x)) : [item, ...list];
}

export function useSofa2Catalog() {
  const catalog = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  const saveCategory = useCallback((c: CatalogCategory) => commit({ ...state, categories: upsert(state.categories, c) }), []);
  const removeCategory = useCallback((id: string) => commit({ ...state, categories: state.categories.filter((c) => c.id !== id) }), []);

  const saveProduct = useCallback((p: CatalogProduct) => commit({ ...state, products: upsert(state.products, p) }), []);
  const removeProducts = useCallback(
    (ids: string[]) =>
      commit({
        ...state,
        products: state.products.filter((p) => !ids.includes(p.id)),
        variants: state.variants.filter((v) => !ids.includes(v.productId)),
      }),
    []
  );

  const saveAttribute = useCallback((a: CatalogAttribute) => commit({ ...state, attributes: upsert(state.attributes, a) }), []);
  const removeAttribute = useCallback((id: string) => commit({ ...state, attributes: state.attributes.filter((a) => a.id !== id) }), []);

  const saveVariant = useCallback((v: CatalogVariant) => commit({ ...state, variants: upsert(state.variants, v) }), []);
  const addVariants = useCallback((list: CatalogVariant[]) => commit({ ...state, variants: [...list, ...state.variants] }), []);
  const removeVariant = useCallback((id: string) => commit({ ...state, variants: state.variants.filter((v) => v.id !== id) }), []);

  const adjustStock = useCallback((variantId: string, delta: number, reason: string) => {
    commit({
      ...state,
      variants: state.variants.map((v) => (v.id === variantId ? { ...v, stock: Math.max(0, v.stock + delta) } : v)),
      moves: [{ id: catalogId(), variantId, delta, reason, at: new Date().toLocaleString('vi-VN') }, ...state.moves].slice(0, 200),
    });
  }, []);

  const savePriceRule = useCallback((r: PriceRule) => commit({ ...state, priceRules: upsert(state.priceRules, r) }), []);
  const removePriceRule = useCallback((id: string) => commit({ ...state, priceRules: state.priceRules.filter((r) => r.id !== id) }), []);

  /** Áp dụng tăng/giảm % giá ngay lập tức cho danh sách sản phẩm (và biến thể) */
  const bulkPrice = useCallback((ids: string[], percent: number, keepOld: boolean) => {
    const round = (n: number) => Math.round((n * (1 + percent / 100)) / 1000) * 1000;
    commit({
      ...state,
      products: state.products.map((p) =>
        ids.includes(p.id)
          ? { ...p, oldPrice: keepOld && percent < 0 ? p.oldPrice ?? p.price : p.oldPrice, price: round(p.price) }
          : p
      ),
      variants: state.variants.map((v) => (ids.includes(v.productId) ? { ...v, price: round(v.price) } : v)),
    });
  }, []);

  const resetCatalog = useCallback(() => commit(buildDefaults()), []);

  return {
    catalog,
    saveCategory,
    removeCategory,
    saveProduct,
    removeProducts,
    saveAttribute,
    removeAttribute,
    saveVariant,
    addVariants,
    removeVariant,
    adjustStock,
    savePriceRule,
    removePriceRule,
    bulkPrice,
    resetCatalog,
  };
}

// ----------------------------------------------------------------------
// Hook cho trang khách
// ----------------------------------------------------------------------

export function productStock(c: Sofa2CatalogState, productId: string) {
  return c.variants.filter((v) => v.productId === productId && v.active).reduce((s, v) => s + v.stock, 0);
}

/** Sản phẩm đang bán (đã áp giá + tồn kho) cho trang khách */
export function useSofa2ShopProducts() {
  const catalog = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  return catalog.products
    .filter((p) => p.status === 'Đang bán')
    .map((p) => ({ ...p, stock: productStock(catalog, p.id) }));
}

/** Danh mục hiển thị, cùng cấu trúc SOFA2_PRODUCT_CATEGORIES */
export function useSofa2ShopCategories() {
  const catalog = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  const out = {} as Record<CategoryGroup, { slug: string; label: string }[]>;
  (Object.keys(SOFA2_PRODUCT_CATEGORIES) as CategoryGroup[]).forEach((g) => {
    out[g] = catalog.categories
      .filter((c) => c.group === g && c.visible)
      .sort((a, b) => a.order - b.order)
      .map(({ slug, label }) => ({ slug, label }));
  });
  return out;
}

export function useSofa2ShopVariants(productId: string) {
  const catalog = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  return catalog.variants.filter((v) => v.productId === productId && v.active);
}
