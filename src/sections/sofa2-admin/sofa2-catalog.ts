// SOFA2 ADMIN — Lược đồ chi tiết cho module Sản phẩm
// Mỗi trang (Danh mục, Sản phẩm, Thuộc tính, Biến thể, Kho hàng, Giá bán) gắn với
// trang tương ứng trên website khách hàng /sofa2/products và dùng chung form CMS.
// ----------------------------------------------------------------------

import { SOFA2_PRODUCT_CATEGORIES } from 'src/sections/sofa2/sofa2-pages-data';

import type { Sofa2CmsField, Sofa2CmsSchema, Sofa2CmsFieldType } from './sofa2-cms';

const f = (
  key: string,
  label: string,
  type: Sofa2CmsFieldType,
  group: Sofa2CmsField['group'],
  extra: Partial<Sofa2CmsField> = {}
): Sofa2CmsField => ({ key, label, type, group, ...extra });

const labels = (list: { label: string }[] = []) => list.map((x) => x.label);

const CATEGORY_NAMES = Array.from(
  new Set([
    'Scandinavian',
    'Industrial Loft',
    'Mid-Century',
    ...labels((SOFA2_PRODUCT_CATEGORIES as any)?.styles),
    ...labels((SOFA2_PRODUCT_CATEGORIES as any)?.types),
    ...labels((SOFA2_PRODUCT_CATEGORIES as any)?.spaces),
  ])
);

const WAREHOUSES = ['Kho TP.HCM', 'Kho Hà Nội', 'Kho Bình Dương', 'Showroom Q.1', 'Showroom Tây Hồ'];

const seo = (path: string): Sofa2CmsField[] => [
  f('slug', 'Đường dẫn', 'text', 'seo', { placeholder: `${path}/ten-trang`, helper: 'Để trống sẽ tự sinh từ tên.' }),
  f('metaTitle', 'Meta title', 'text', 'seo', { maxLength: 60 }),
  f('metaDescription', 'Meta description', 'textarea', 'seo', { maxLength: 160, multiline: 3 }),
  f('indexable', 'Cho phép Google lập chỉ mục', 'switch', 'seo'),
];

export const SOFA2_CATALOG_SCHEMAS: Record<string, Sofa2CmsSchema> = {
  categories: {
    clientPath: '/sofa2/products/category',
    entity: 'danh mục',
    titleKey: 'name',
    statusKey: 'status',
    statusOptions: ['Hiển thị', 'Ẩn'],
    fields: [
      f('name', 'Tên danh mục', 'text', 'content', { required: true }),
      f('parent', 'Danh mục cha', 'select', 'content', {
        required: true,
        options: ['Phong cách', 'Theo kiểu dáng', 'Không gian', 'Kích thước', 'Khoảng giá'],
      }),
      f('description', 'Mô tả danh mục', 'textarea', 'content', { multiline: 4 }),
      f('image', 'Ảnh đại diện', 'url', 'content', { placeholder: 'https://...' }),
      f('products', 'Số sản phẩm', 'number', 'display'),
      f('status', 'Trạng thái', 'select', 'display', { required: true, options: ['Hiển thị', 'Ẩn'] }),
      f('order', 'Thứ tự hiển thị', 'number', 'display'),
      f('showInMenu', 'Hiện trên menu', 'switch', 'display'),
      f('showInFilter', 'Dùng làm bộ lọc', 'switch', 'display'),
      ...seo('/sofa2/products/category'),
    ],
  },

  products: {
    clientPath: '/sofa2/products',
    entity: 'sản phẩm',
    titleKey: 'name',
    statusKey: 'status',
    statusOptions: ['Đang bán', 'Hết hàng', 'Bản nháp', 'Ngừng bán'],
    fields: [
      f('name', 'Tên sản phẩm', 'text', 'content', { required: true }),
      f('sku', 'Mã SKU', 'text', 'content', { required: true, placeholder: 'LX-XXX-00' }),
      f('category', 'Danh mục', 'select', 'content', { required: true, options: CATEGORY_NAMES }),
      f('material', 'Chất liệu', 'select', 'content', {
        options: ['Vải linen', 'Da thật', 'Da công nghiệp', 'Nỉ', 'Nhung', 'Bố canvas'],
      }),
      f('dimensions', 'Kích thước (D x R x C cm)', 'text', 'content', { placeholder: '220 x 90 x 80' }),
      f('shortDescription', 'Mô tả ngắn', 'textarea', 'content', { multiline: 2, maxLength: 200 }),
      f('description', 'Mô tả chi tiết', 'textarea', 'content', { multiline: 6 }),
      f('image', 'Ảnh chính', 'url', 'content', { placeholder: 'https://...' }),
      f('gallery', 'Thư viện ảnh (cách nhau dấu phẩy)', 'textarea', 'content', { multiline: 2 }),
      f('price', 'Giá bán (₫)', 'number', 'display', { required: true }),
      f('compareAt', 'Giá niêm yết (₫)', 'number', 'display'),
      f('warranty', 'Bảo hành (tháng)', 'number', 'display'),
      f('status', 'Trạng thái', 'select', 'display', {
        required: true,
        options: ['Đang bán', 'Hết hàng', 'Bản nháp', 'Ngừng bán'],
      }),
      f('featured', 'Sản phẩm nổi bật', 'switch', 'display'),
      f('isNew', 'Gắn nhãn "Mới"', 'switch', 'display'),
      f('launchDate', 'Ngày mở bán', 'date', 'display'),
      ...seo('/sofa2/products'),
    ],
  },

  attributes: {
    clientPath: '/sofa2/products',
    entity: 'thuộc tính',
    titleKey: 'name',
    statusKey: 'status',
    statusOptions: ['Hoạt động', 'Tạm ẩn'],
    fields: [
      f('name', 'Tên thuộc tính', 'text', 'content', { required: true }),
      f('code', 'Mã thuộc tính', 'text', 'content', { placeholder: 'color' }),
      f('displayType', 'Kiểu hiển thị', 'select', 'content', {
        options: ['Ô màu', 'Nút chọn', 'Danh sách thả', 'Ảnh minh hoạ'],
      }),
      f('valueList', 'Danh sách giá trị (cách nhau dấu phẩy)', 'textarea', 'content', {
        multiline: 3,
        placeholder: 'Beige, Grey, Brown',
      }),
      f('values', 'Số giá trị', 'number', 'display'),
      f('usage', 'Áp dụng', 'select', 'display', {
        required: true,
        options: ['Biến thể + Bộ lọc', 'Biến thể', 'Bộ lọc', 'Tuỳ chọn'],
      }),
      f('status', 'Trạng thái', 'select', 'display', { required: true, options: ['Hoạt động', 'Tạm ẩn'] }),
      f('required', 'Bắt buộc chọn khi mua', 'switch', 'display'),
    ],
  },

  variants: {
    clientPath: '/sofa2/products',
    entity: 'biến thể',
    titleKey: 'sku',
    statusKey: 'status',
    statusOptions: ['Đang bán', 'Hết hàng', 'Ngừng bán'],
    fields: [
      f('sku', 'SKU biến thể', 'text', 'content', { required: true }),
      f('product', 'Sản phẩm gốc', 'text', 'content', { required: true }),
      f('option', 'Tuỳ chọn (Chất liệu / Màu / Kích thước)', 'text', 'content', {
        required: true,
        placeholder: 'Linen / Beige / 3 chỗ',
      }),
      f('image', 'Ảnh biến thể', 'url', 'content'),
      f('barcode', 'Mã vạch', 'text', 'content'),
      f('stock', 'Tồn kho', 'number', 'display', { required: true }),
      f('price', 'Giá (₫)', 'number', 'display', { required: true }),
      f('weight', 'Khối lượng (kg)', 'number', 'display'),
      f('status', 'Trạng thái', 'select', 'display', {
        required: true,
        options: ['Đang bán', 'Hết hàng', 'Ngừng bán'],
      }),
      f('isDefault', 'Biến thể mặc định', 'switch', 'display'),
    ],
  },

  inventory: {
    clientPath: '/sofa2/products',
    entity: 'dòng tồn kho',
    titleKey: 'sku',
    statusKey: 'status',
    statusOptions: ['Đủ hàng', 'Sắp hết', 'Hết hàng'],
    fields: [
      f('sku', 'SKU', 'text', 'content', { required: true }),
      f('warehouse', 'Kho', 'select', 'content', { required: true, options: WAREHOUSES }),
      f('location', 'Vị trí kệ', 'text', 'content', { placeholder: 'A-03-2' }),
      f('note', 'Ghi chú nhập/xuất', 'textarea', 'content', { multiline: 3 }),
      f('stock', 'Tồn thực tế', 'number', 'display', { required: true }),
      f('reserved', 'Đang giữ cho đơn', 'number', 'display'),
      f('minStock', 'Ngưỡng cảnh báo', 'number', 'display', { helper: 'Dưới mức này chuyển "Sắp hết".' }),
      f('status', 'Trạng thái', 'select', 'display', {
        required: true,
        options: ['Đủ hàng', 'Sắp hết', 'Hết hàng'],
      }),
      f('updated', 'Kiểm kê lần cuối', 'date', 'display'),
    ],
  },

  pricing: {
    clientPath: '/sofa2/promotions',
    entity: 'bảng giá',
    titleKey: 'sku',
    statusKey: 'status',
    statusOptions: ['Đang giảm', 'Giá gốc', 'Hết hiệu lực'],
    fields: [
      f('sku', 'SKU', 'text', 'content', { required: true }),
      f('priceList', 'Bảng giá', 'select', 'content', {
        options: ['Bán lẻ', 'Đại lý cấp 1', 'Đại lý cấp 2', 'Dự án', 'Flash sale'],
      }),
      f('note', 'Ghi chú', 'textarea', 'content', { multiline: 2 }),
      f('list', 'Giá niêm yết (₫)', 'number', 'display', { required: true }),
      f('sale', 'Giá bán (₫)', 'number', 'display', { required: true }),
      f('dealer', 'Giá đại lý (₫)', 'number', 'display'),
      f('startDate', 'Bắt đầu', 'date', 'display'),
      f('endDate', 'Kết thúc', 'date', 'display'),
      f('status', 'Trạng thái', 'select', 'display', {
        required: true,
        options: ['Đang giảm', 'Giá gốc', 'Hết hiệu lực'],
      }),
      f('showBadge', 'Hiện nhãn % giảm trên web', 'switch', 'display'),
    ],
  },
};

export function getSofa2CatalogSchema(moduleSlug?: string) {
  return moduleSlug ? SOFA2_CATALOG_SCHEMAS[moduleSlug] : undefined;
}
