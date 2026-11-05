// SOFA2 ADMIN — Module Sản phẩm: kho dữ liệu dùng chung (admin + trang khách)
// Lưu trong localStorage (key 'sofa2-catalog-v1'), khởi tạo từ dữ liệu trang khách
// (SOFA2_PRODUCTS / SOFA2_PRODUCT_CATEGORIES) nên nội dung ban đầu trùng khớp website.
// ----------------------------------------------------------------------

import { useSyncExternalStore } from 'react';

import {
  SOFA2_PRODUCTS,
  SOFA2_PRODUCT_CATEGORIES,
} from 'src/sections/sofa2/sofa2-pages-data';

// ----------------------------------------------------------------------

export const SOFA2_CATALOG_STATUSES = ['Đang bán', 'Hết hàng', 'Bản nháp', 'Ngừng bán'] as const;
export const SOFA2_CATALOG_CATEGORY_STATUSES = ['Hiển thị', 'Ẩn'] as const;
export const SOFA2_CATALOG_ATTRIBUTE_STATUSES = ['Hoạt động', 'Tạm ẩn'] as const;
export const SOFA2_CATALOG_VARIANT_STATUSES = ['Đang bán', 'Hết hàng', 'Ngừng bán'] as const;
export const SOFA2_CATALOG_PRICE_LISTS = ['Bán lẻ', 'Đại lý cấp 1', 'Đại lý cấp 2', 'Dự án', 'Flash sale'] as const;
export const SOFA2_CATALOG_PRICE_STATUSES = ['Đang giảm', 'Giá gốc', 'Hết hiệu lực'] as const;
export const SOFA2_CATALOG_WAREHOUSES = ['Kho TP.HCM', 'Kho Hà Nội', 'Kho Bình Dương', 'Showroom Q.1', 'Showroom Tây Hồ'] as const;
export const SOFA2_CATALOG_MOVE_TYPES = ['Nhập', 'Xuất', 'Kiểm kê'] as const;

export type Sofa2CatalogCategory = {
  id: string;
  name: string;
  slug: string;
  parent: string;
  description: string;
  image: string;
  status: string;
  order: number;
  showInMenu: boolean;
  showInFilter: boolean;
};

export type Sofa2CatalogProduct = {
  id: string;
  sku: string;
  name: string;
  slug: string;
  category: string; // slug danh mục
  style: string; // slug phong cách
  material: string;
  size: string;
  description: string;
  shortDescription: string;
  image: string;
  images: string[];
  colors: string[];
  price: number;
  oldPrice: number;
  stock: number;
  rating: number;
  reviews: number;
  badge: string;
  status: string;
  featured: boolean;
  isNew: boolean;
};

export type Sofa2CatalogAttribute = {
  id: string;
  name: string;
  code: string;
  displayType: string;
  values: string[];
  usage: string;
  status: string;
  required: boolean;
};

export type Sofa2CatalogVariant = {
  id: string;
  productId: string;
  sku: string;
  option: string;
  price: number;
  stock: number;
  status: string;
  isDefault: boolean;
};

export type Sofa2CatalogStockRow = {
  id: string;
  sku: string;
  warehouse: string;
  location: string;
  stock: number;
  reserved: number;
  minStock: number;
  updated: string;
};

export type Sofa2CatalogStockMove = {
  id: string;
  at: string;
  sku: string;
  warehouse: string;
  type: string; // Nhập | Xuất | Kiểm kê
  qty: number;
  reason: string;
  by: string;
};

export type Sofa2CatalogPriceRow = {
  id: string;
  sku: string;
  product: string;
  priceList: string;
  list: number;
  sale: number;
  dealer: number;
  startDate: string;
  endDate: string;
  status: string;
  showBadge: boolean;
  note: string;
};

export type Sofa2CatalogPriceRule = {
  id: string;
  name: string;
  percent: number; // dương = giảm giá
  startDate: string;
  endDate: string;
  priceList: string;
  status: string;
  appliedAt: string;
};

export type Sofa2CatalogState = {
  categories: Sofa2CatalogCategory[];
  products: Sofa2CatalogProduct[];
  attributes: Sofa2CatalogAttribute[];
  variants: Sofa2CatalogVariant[];
  stock: Sofa2CatalogStockRow[];
  moves: Sofa2CatalogStockMove[];
  prices: Sofa2CatalogPriceRow[];
  rules: Sofa2CatalogPriceRule[];
};

export type Sofa2ClientProduct = {
  id: string;
  name: string;
  slug: string;
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
};

// ---------------------------------------------------------------------- Seeding

const PARENT_GROUPS = ['Phong cách', 'Theo kiểu dáng', 'Không gian', 'Kích thước', 'Khoảng giá'];

const slugifySofa2 = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/gi, 'd')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

function seedCategories(): Sofa2CatalogCategory[] {
  const rows: Sofa2CatalogCategory[] = [];
  const groups: [string, { slug: string; label: string }[]][] = [
    ['Theo kiểu dáng', SOFA2_PRODUCT_CATEGORIES.types],
    ['Phong cách', SOFA2_PRODUCT_CATEGORIES.styles],
    ['Không gian', SOFA2_PRODUCT_CATEGORIES.spaces],
    ['Kích thước', SOFA2_PRODUCT_CATEGORIES.sizes],
    ['Khoảng giá', SOFA2_PRODUCT_CATEGORIES.prices],
  ];
  groups.forEach(([parent, list], groupIndex) => {
    list.forEach((item, index) => {
      rows.push({
        id: `cat-${item.slug}`,
        name: item.label,
        slug: item.slug,
        parent,
        description: `Danh mục ${item.label.toLowerCase()} thuộc nhóm ${parent.toLowerCase()}.`,
        image: '',
        status: 'Hiển thị',
        order: groupIndex * 100 + index,
        showInMenu: groupIndex < 2,
        showInFilter: true,
      });
    });
  });
  return rows;
}

function seedProducts(): Sofa2CatalogProduct[] {
  return SOFA2_PRODUCTS.map((p, index) => ({
    id: p.id,
    sku: `LX-${String(index + 1).padStart(3, '0')}`,
    name: p.name,
    slug: p.slug,
    category: p.category,
    style: p.style,
    material: p.material,
    size: p.size,
    description: p.description,
    shortDescription: p.description.slice(0, 120),
    image: p.image,
    images: p.images ?? [p.image],
    colors: p.colors ?? [],
    price: p.price,
    oldPrice: p.oldPrice ?? 0,
    stock: 18 - index * 2,
    rating: p.rating,
    reviews: p.reviews,
    badge: p.badge ?? '',
    status: 'Đang bán',
    featured: index < 3,
    isNew: (p.badge ?? '') === 'Mới',
  }));
}

function seedAttributes(products: Sofa2CatalogProduct[]): Sofa2CatalogAttribute[] {
  const colorValues = Array.from(new Set(products.flatMap((p) => p.colors))).filter(Boolean);
  return [
    {
      id: 'attr-color',
      name: 'Màu sắc',
      code: 'color',
      displayType: 'Ô màu',
      values: colorValues.length ? colorValues : ['Be', 'Xám', 'Nâu', 'Đen'],
      usage: 'Biến thể + Bộ lọc',
      status: 'Hoạt động',
      required: true,
    },
    {
      id: 'attr-size',
      name: 'Kích thước',
      code: 'size',
      displayType: 'Nút chọn',
      values: ['1 chỗ', '2 chỗ', '3 chỗ', 'Góc chữ L'],
      usage: 'Biến thể + Bộ lọc',
      status: 'Hoạt động',
      required: true,
    },
    {
      id: 'attr-material',
      name: 'Chất liệu bọc',
      code: 'material',
      displayType: 'Danh sách thả',
      values: ['Vải linen', 'Da bò', 'Da PU', 'Vải cotton', 'Vải velvet', 'Vải technical'],
      usage: 'Bộ lọc',
      status: 'Hoạt động',
      required: false,
    },
  ];
}

function seedVariants(products: Sofa2CatalogProduct[]): Sofa2CatalogVariant[] {
  const rows: Sofa2CatalogVariant[] = [];
  products.forEach((product) => {
    const options = product.colors.length ? product.colors : ['Chuẩn'];
    options.forEach((color, index) => {
      rows.push({
        id: `var-${product.id}-${index}`,
        productId: product.id,
        sku: `${product.sku}-${index + 1}`,
        option: color,
        price: product.price,
        stock: Math.max(2, product.stock - index * 3),
        status: 'Đang bán',
        isDefault: index === 0,
      });
    });
  });
  return rows;
}

function seedStock(products: Sofa2CatalogProduct[], variants: Sofa2CatalogVariant[]): Sofa2CatalogStockRow[] {
  const rows: Sofa2CatalogStockRow[] = [];
  const byProduct = new Map<string, Sofa2CatalogVariant[]>();
  variants.forEach((v) => {
    const list = byProduct.get(v.productId) ?? [];
    list.push(v);
    byProduct.set(v.productId, list);
  });
  products.forEach((product) => {
    const list = byProduct.get(product.id) ?? [];
    const rowsPerSku: { sku: string; stock: number }[] = list.length
      ? list.map((v) => ({ sku: v.sku, stock: v.stock }))
      : [{ sku: product.sku, stock: product.stock }];
    rowsPerSku.forEach((entry, index) => {
      (['Kho TP.HCM', 'Kho Hà Nội'] as const).forEach((warehouse, whIndex) => {
        rows.push({
          id: `stk-${entry.sku}-${whIndex}`,
          sku: entry.sku,
          warehouse,
          location: `${String.fromCharCode(65 + index)}-0${index + 1}-${whIndex + 1}`,
          stock: whIndex === 0 ? entry.stock : Math.floor(entry.stock / 2),
          reserved: index % 3,
          minStock: 5,
          updated: '2026-10-28',
        });
      });
    });
  });
  return rows;
}

function seedPrices(products: Sofa2CatalogProduct[]): Sofa2CatalogPriceRow[] {
  return products.map((product) => ({
    id: `price-${product.id}`,
    sku: product.sku,
    product: product.name,
    priceList: 'Bán lẻ',
    list: product.oldPrice || Math.round(product.price * 1.2),
    sale: product.price,
    dealer: Math.round(product.price * 0.82),
    startDate: '2026-01-01',
    endDate: '2026-12-31',
    status: product.oldPrice ? 'Đang giảm' : 'Giá gốc',
    showBadge: Boolean(product.oldPrice),
    note: '',
  }));
}

function seedState(): Sofa2CatalogState {
  const products = seedProducts();
  const variants = seedVariants(products);
  return {
    categories: seedCategories(),
    products,
    attributes: seedAttributes(products),
    variants,
    stock: seedStock(products, variants),
    moves: [
      {
        id: 'mv-seed-1',
        at: '2026-10-28 09:15',
        sku: products[0]?.sku ?? 'LX-001',
        warehouse: 'Kho TP.HCM',
        type: 'Nhập',
        qty: 10,
        reason: 'Nhập lô sản xuất tháng 10',
        by: 'Phòng kho',
      },
      {
        id: 'mv-seed-2',
        at: '2026-10-30 14:40',
        sku: products[1]?.sku ?? 'LX-002',
        warehouse: 'Kho Hà Nội',
        type: 'Xuất',
        qty: 2,
        reason: 'Xuất cho đơn LX-20261030-A1',
        by: 'Phòng kho',
      },
    ],
    prices: seedPrices(products),
    rules: [
      {
        id: 'rule-flash-weekend',
        name: 'Flash sale cuối tháng',
        percent: 10,
        startDate: '2026-11-27',
        endDate: '2026-11-30',
        priceList: 'Bán lẻ',
        status: 'Chờ áp dụng',
        appliedAt: '',
      },
    ],
  };
}

// ---------------------------------------------------------------------- Store

const STORAGE_KEY = 'sofa2-catalog-v1';

let state: Sofa2CatalogState = seedState();
let restored = false;

if (typeof window !== 'undefined') {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) state = { ...seedState(), ...(JSON.parse(raw) as Sofa2CatalogState) };
  } catch {
    /* dữ liệu hỏng thì dùng mặc định */
  }
  restored = true;

  window.addEventListener('storage', (event) => {
    if (event.key !== STORAGE_KEY || !event.newValue) return;
    try {
      state = { ...seedState(), ...(JSON.parse(event.newValue) as Sofa2CatalogState) };
      listeners.forEach((listener) => listener());
    } catch {
      /* ignore */
    }
  });
}

const listeners = new Set<() => void>();

const emit = () => {
  if (typeof window !== 'undefined' && restored) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignore */
    }
  }
  listeners.forEach((listener) => listener());
};

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

const getSnapshot = () => state;

function update(patch: Partial<Sofa2CatalogState>) {
  state = { ...state, ...patch };
  emit();
}

/** Hook đọc toàn bộ dữ liệu module Sản phẩm */
export function useSofa2Catalog(): Sofa2CatalogState {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}

// ---------------------------------------------------------------------- Actions

const newId = (prefix: string) => `${prefix}-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;

export function saveSofa2CatalogCategory(row: Sofa2CatalogCategory) {
  const exists = state.categories.some((c) => c.id === row.id);
  update({
    categories: exists
      ? state.categories.map((c) => (c.id === row.id ? row : c))
      : [...state.categories, row],
  });
}

export function removeSofa2CatalogCategory(id: string): string {
  const category = state.categories.find((c) => c.id === id);
  if (!category) return 'Không tìm thấy danh mục.';
  const inUse = state.products.some((p) => p.category === category.slug);
  if (inUse) return `Không thể xoá "${category.name}" vì vẫn còn sản phẩm thuộc danh mục này.`;
  update({ categories: state.categories.filter((c) => c.id !== id) });
  return '';
}

export function saveSofa2CatalogProduct(row: Sofa2CatalogProduct) {
  const exists = state.products.some((p) => p.id === row.id);
  update({
    products: exists
      ? state.products.map((p) => (p.id === row.id ? row : p))
      : [...state.products, row],
    // đồng bộ tên sản phẩm trên bảng giá
    prices: state.prices.map((price) =>
      price.sku === row.sku ? { ...price, product: row.name } : price
    ),
  });
}

export function duplicateSofa2CatalogProduct(id: string): string {
  const source = state.products.find((p) => p.id === id);
  if (!source) return 'Không tìm thấy sản phẩm.';
  const copy: Sofa2CatalogProduct = {
    ...source,
    id: newId('prod'),
    sku: `${source.sku}-C`,
    name: `${source.name} (bản sao)`,
    slug: `${source.slug}-ban-sao`,
    status: 'Bản nháp',
    featured: false,
  };
  update({ products: [...state.products, copy] });
  return copy.id;
}

export function removeSofa2CatalogProducts(ids: string[]) {
  update({
    products: state.products.filter((p) => !ids.includes(p.id)),
    variants: state.variants.filter((v) => !ids.includes(v.productId)),
    prices: state.prices.filter((price) => !ids.some((id) => state.products.find((p) => p.id === id)?.sku === price.sku)),
  });
}

export function setSofa2CatalogProductsStatus(ids: string[], status: string) {
  update({ products: state.products.map((p) => (ids.includes(p.id) ? { ...p, status } : p)) });
}

export function saveSofa2CatalogAttribute(row: Sofa2CatalogAttribute) {
  const exists = state.attributes.some((a) => a.id === row.id);
  update({
    attributes: exists
      ? state.attributes.map((a) => (a.id === row.id ? row : a))
      : [...state.attributes, row],
  });
}

export function removeSofa2CatalogAttribute(id: string) {
  update({ attributes: state.attributes.filter((a) => a.id !== id) });
}

/** Sinh tổ hợp biến thể từ các giá trị đã chọn của từng thuộc tính */
export function generateSofa2CatalogVariants(
  productId: string,
  selections: Record<string, string[]> // attributeId -> values
): number {
  const product = state.products.find((p) => p.id === productId);
  if (!product) return 0;
  const valueGroups = Object.values(selections)
    .map((values) => values.filter(Boolean))
    .filter((values) => values.length > 0);
  if (!valueGroups.length) return 0;

  const combos = valueGroups.reduce<string[][]>(
    (acc, group) => acc.flatMap((prefix) => group.map((value) => [...prefix, value])),
    [[]]
  );

  const existingOptions = new Set(
    state.variants.filter((v) => v.productId === productId).map((v) => v.option)
  );

  const created: Sofa2CatalogVariant[] = [];
  let index = state.variants.filter((v) => v.productId === productId).length;
  combos.forEach((combo) => {
    const option = combo.join(' / ');
    if (existingOptions.has(option)) return;
    index += 1;
    created.push({
      id: newId('var'),
      productId,
      sku: `${product.sku}-${index}`,
      option,
      price: product.price,
      stock: 5,
      status: 'Đang bán',
      isDefault: false,
    });
  });

  if (created.length) {
    update({ variants: [...state.variants, ...created] });
  }
  return created.length;
}

export function saveSofa2CatalogVariant(row: Sofa2CatalogVariant) {
  const exists = state.variants.some((v) => v.id === row.id);
  const next = exists
    ? state.variants.map((v) => (v.id === row.id ? row : v))
    : [...state.variants, row];
  // chỉ một biến thể mặc định cho mỗi sản phẩm
  const cleaned = row.isDefault
    ? next.map((v) => (v.productId === row.productId && v.id !== row.id ? { ...v, isDefault: false } : v))
    : next;
  update({ variants: cleaned });
}

export function removeSofa2CatalogVariant(id: string) {
  const removed = state.variants.find((v) => v.id === id);
  update({
    variants: state.variants.filter((v) => v.id !== id),
    stock: removed ? state.stock.filter((s) => s.sku !== removed.sku) : state.stock,
  });
}

/** Nhập / xuất / kiểm kê — cập nhật tồn và ghi lịch sử */
export function adjustSofa2CatalogStock(params: {
  stockId: string;
  type: string;
  qty: number;
  reason: string;
  by: string;
}): string {
  const row = state.stock.find((s) => s.id === params.stockId);
  if (!row) return 'Không tìm thấy dòng tồn kho.';
  if (params.type !== 'Kiểm kê' && params.qty <= 0) return 'Số lượng phải lớn hơn 0.';
  let nextStock = row.stock;
  if (params.type === 'Nhập') nextStock = row.stock + params.qty;
  if (params.type === 'Xuất') {
    if (params.qty > row.stock) return `Chỉ còn ${row.stock} trong kho, không đủ để xuất ${params.qty}.`;
    nextStock = row.stock - params.qty;
  }
  if (params.type === 'Kiểm kê') nextStock = params.qty;
  const now = new Date();
  const move: Sofa2CatalogStockMove = {
    id: newId('mv'),
    at: now.toISOString().slice(0, 16).replace('T', ' '),
    sku: row.sku,
    warehouse: row.warehouse,
    type: params.type,
    qty: params.type === 'Kiểm kê' ? params.qty - row.stock : params.qty,
    reason: params.reason || '—',
    by: params.by || 'Quản trị',
  };
  update({
    stock: state.stock.map((s) =>
      s.id === row.id ? { ...s, stock: Math.max(0, nextStock), updated: now.toISOString().slice(0, 10) } : s
    ),
    moves: [move, ...state.moves].slice(0, 200),
  });
  return '';
}

export function saveSofa2CatalogPriceRow(row: Sofa2CatalogPriceRow) {
  const exists = state.prices.some((p) => p.id === row.id);
  update({
    prices: exists
      ? state.prices.map((p) => (p.id === row.id ? row : p))
      : [...state.prices, row],
  });
}

export function removeSofa2CatalogPriceRow(id: string) {
  update({ prices: state.prices.filter((p) => p.id !== id) });
}

/** Tăng/giảm giá hàng loạt theo % cho các dòng đã chọn (percent âm = giảm) */
export function bulkChangeSofa2CatalogPrices(ids: string[], percent: number): number {
  const factor = 1 + percent / 100;
  let touched = 0;
  const next = state.prices.map((row) => {
    if (!ids.includes(row.id)) return row;
    touched += 1;
    const sale = Math.max(0, Math.round((row.sale * factor) / 1000) * 1000);
    return {
      ...row,
      sale,
      status: percent < 0 ? 'Đang giảm' : row.status,
    };
  });
  if (touched) update({ prices: next });
  return touched;
}

export function saveSofa2CatalogPriceRule(row: Sofa2CatalogPriceRule) {
  const exists = state.rules.some((r) => r.id === row.id);
  update({
    rules: exists ? state.rules.map((r) => (r.id === row.id ? row : r)) : [...state.rules, row],
  });
}

export function removeSofa2CatalogPriceRule(id: string) {
  update({ rules: state.rules.filter((r) => r.id !== id) });
}

/** Áp dụng quy tắc giá: giảm % các dòng cùng bảng giá, trong thời gian hiệu lực */
export function applySofa2CatalogPriceRule(id: string): string {
  const rule = state.rules.find((r) => r.id === id);
  if (!rule) return 'Không tìm thấy quy tắc.';
  const now = new Date().toISOString().slice(0, 10);
  if (now < rule.startDate) return 'Quy tắc chưa đến ngày bắt đầu.';
  if (now > rule.endDate) return 'Quy tắc đã hết hiệu lực.';
  const factor = 1 - rule.percent / 100;
  update({
    prices: state.prices.map((row) =>
      row.priceList === rule.priceList
        ? {
            ...row,
            sale: Math.max(0, Math.round((row.list * factor) / 1000) * 1000),
            status: 'Đang giảm',
            showBadge: true,
            note: `Theo quy tắc "${rule.name}"`,
          }
        : row
    ),
    rules: state.rules.map((r) =>
      r.id === id ? { ...r, status: 'Đang chạy', appliedAt: now } : r
    ),
  });
  return '';
}

// ---------------------------------------------------------------------- Selectors

export function sofa2CatalogStockStatus(row: Sofa2CatalogStockRow): string {
  if (row.stock - row.reserved <= 0) return 'Hết hàng';
  if (row.stock - row.reserved <= row.minStock) return 'Sắp hết';
  return 'Đủ hàng';
}

export function sofa2CatalogProductStock(stateSnapshot: Sofa2CatalogState, productId: string): number {
  const product = stateSnapshot.products.find((p) => p.id === productId);
  if (!product) return 0;
  const variants = stateSnapshot.variants.filter((v) => v.productId === productId);
  if (variants.length) return variants.reduce((sum, v) => sum + v.stock, 0);
  return product.stock;
}

export function sofa2CatalogCategoryName(stateSnapshot: Sofa2CatalogState, slug: string): string {
  return stateSnapshot.categories.find((c) => c.slug === slug)?.name ?? slug;
}

/** Dữ liệu sản phẩm cho trang khách — chỉ còn hàng đang bán */
export function sofa2CatalogClientProducts(
  stateSnapshot: Sofa2CatalogState
): Sofa2ClientProduct[] {
  return stateSnapshot.products
    .filter((p) => p.status === 'Đang bán')
    .map((p) => ({
      id: p.id,
      name: p.name,
      slug: p.slug,
      category: p.category,
      style: p.style,
      price: p.price,
      oldPrice: p.oldPrice || undefined,
      image: p.image,
      images: p.images.length ? p.images : [p.image],
      material: p.material,
      size: p.size,
      colors: p.colors,
      rating: p.rating,
      reviews: p.reviews,
      badge: p.badge || undefined,
      description: p.description,
    }));
}

/** Hook cho trang khách: danh sách sản phẩm đang bán */
export function useSofa2CatalogProducts(): Sofa2ClientProduct[] {
  const catalog = useSofa2Catalog();
  return sofa2CatalogClientProducts(catalog);
}

/** Hook cho trang khách: một sản phẩm theo id */
export function useSofa2CatalogProduct(id: string): Sofa2ClientProduct | undefined {
  const catalog = useSofa2Catalog();
  return sofa2CatalogClientProducts(catalog).find((p) => p.id === id);
}

export { slugifySofa2 };
