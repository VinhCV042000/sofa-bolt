// SOFA2 ADMIN — Lược đồ chi tiết cho module Đại lý
// Gắn với cổng đại lý trên website khách hàng (/sofa2/b2b, /policy, /quote).
// ----------------------------------------------------------------------

import type { Sofa2CmsField, Sofa2CmsSchema, Sofa2CmsFieldType } from './sofa2-cms';

const f = (
  key: string,
  label: string,
  type: Sofa2CmsFieldType,
  group: Sofa2CmsField['group'],
  extra: Partial<Sofa2CmsField> = {}
): Sofa2CmsField => ({ key, label, type, group, ...extra });

const LEVELS = ['Kim cương', 'Vàng', 'Bạc', 'Đồng'];
const REGIONS = ['Miền Bắc', 'Miền Trung', 'Miền Nam', 'Tây Nam Bộ', 'Tây Nguyên'];
const DEALERS = [
  'Nội thất Việt',
  'Decor Home HCM',
  'Living Space ĐN',
  'Home Mart Hà Nội',
  'Sofa Plus Cần Thơ',
];

const status = (options: string[]) =>
  f('status', 'Trạng thái', 'select', 'display', { required: true, options });

const schema = (
  clientPath: string,
  entity: string,
  titleKey: string,
  statusOptions: string[],
  fields: Sofa2CmsField[]
): Sofa2CmsSchema => ({
  clientPath,
  entity,
  titleKey,
  statusKey: 'status',
  statusOptions,
  fields: [...fields, status(statusOptions)],
});

export const SOFA2_DEALER_SCHEMAS: Record<string, Sofa2CmsSchema> = {
  dashboard: schema(
    '/sofa2/b2b',
    'đại lý',
    'dealer',
    ['Vượt chỉ tiêu', 'Đúng tiến độ', 'Chậm tiến độ', 'Tạm ngưng'],
    [
      f('dealer', 'Tên đại lý', 'text', 'content', { required: true }),
      f('taxCode', 'Mã số thuế', 'text', 'content'),
      f('contact', 'Người đại diện', 'text', 'content'),
      f('phone', 'Điện thoại', 'text', 'content'),
      f('email', 'Email', 'text', 'content'),
      f('address', 'Địa chỉ showroom', 'textarea', 'content', { multiline: 2 }),
      f('level', 'Cấp đại lý', 'select', 'display', { required: true, options: LEVELS }),
      f('region', 'Vùng phụ trách', 'select', 'display', { required: true, options: REGIONS }),
      f('target', 'Chỉ tiêu tháng (₫)', 'number', 'display', { required: true }),
      f('achieved', 'Doanh số đã đạt (₫)', 'number', 'display'),
      f('manager', 'Nhân viên quản lý', 'text', 'display'),
      f('portalAccess', 'Cho phép đăng nhập cổng đại lý', 'switch', 'display'),
    ]
  ),

  'price-policy': schema(
    '/sofa2/b2b/policy',
    'chính sách giá',
    'name',
    ['Đang áp dụng', 'Bản nháp', 'Hết hiệu lực'],
    [
      f('name', 'Tên chính sách', 'text', 'content', { required: true }),
      f('level', 'Cấp áp dụng', 'select', 'content', {
        required: true,
        options: [...LEVELS, 'Tất cả'],
      }),
      f('scope', 'Phạm vi sản phẩm', 'select', 'content', {
        options: ['Toàn bộ sản phẩm', 'Theo danh mục', 'Theo bộ sưu tập', 'Sản phẩm chỉ định'],
      }),
      f('terms', 'Điều kiện & ghi chú', 'textarea', 'content', { multiline: 4 }),
      f('discount', 'Chiết khấu (%)', 'number', 'display', { required: true }),
      f('minRevenue', 'Doanh số tối thiểu (₫)', 'number', 'display'),
      f('bonus', 'Thưởng doanh số (%)', 'number', 'display'),
      f('paymentTerm', 'Hạn công nợ (ngày)', 'number', 'display'),
      f('startDate', 'Bắt đầu', 'date', 'display'),
      f('endDate', 'Hết hạn', 'date', 'display'),
      f('showOnPortal', 'Hiển thị trên trang chính sách đại lý', 'switch', 'seo'),
    ]
  ),

  quotes: schema(
    '/sofa2/b2b/quote',
    'báo giá',
    'code',
    ['Chờ xử lý', 'Đã gửi', 'Đã chốt', 'Hết hạn', 'Từ chối'],
    [
      f('code', 'Mã báo giá', 'text', 'content', { required: true, placeholder: 'BG-DL-0000' }),
      f('dealer', 'Đại lý', 'select', 'content', { required: true, options: DEALERS }),
      f('products', 'Danh sách sản phẩm (SKU x SL)', 'textarea', 'content', {
        multiline: 4,
        placeholder: 'LX-OSL-01 x 4, LX-BER-04 x 2',
      }),
      f('note', 'Ghi chú cho đại lý', 'textarea', 'content', { multiline: 3 }),
      f('items', 'Số sản phẩm', 'number', 'display'),
      f('value', 'Giá trị sau chiết khấu (₫)', 'number', 'display', { required: true }),
      f('shipping', 'Phí vận chuyển (₫)', 'number', 'display'),
      f('validUntil', 'Hiệu lực đến', 'date', 'display'),
      f('sales', 'Người phụ trách', 'text', 'display'),
    ]
  ),

  'dealer-orders': schema(
    '/sofa2/b2b',
    'đơn hàng đại lý',
    'code',
    ['Chờ xác nhận', 'Đang giao', 'Hoàn tất', 'Đã huỷ'],
    [
      f('code', 'Mã đơn', 'text', 'content', { required: true, placeholder: 'DH-DL-0000' }),
      f('dealer', 'Đại lý', 'select', 'content', { required: true, options: DEALERS }),
      f('quoteRef', 'Từ báo giá', 'text', 'content', { placeholder: 'BG-DL-0000' }),
      f('products', 'Sản phẩm (SKU x SL)', 'textarea', 'content', { multiline: 3 }),
      f('shippingAddress', 'Địa chỉ giao hàng', 'textarea', 'content', { multiline: 2 }),
      f('total', 'Tổng tiền (₫)', 'number', 'display', { required: true }),
      f('payment', 'Hình thức thanh toán', 'select', 'display', {
        required: true,
        options: ['Chuyển khoản', 'Đặt cọc 30%', 'Công nợ 30 ngày', 'Công nợ 60 ngày'],
      }),
      f('orderDate', 'Ngày đặt', 'date', 'display'),
      f('deliveryDate', 'Ngày giao dự kiến', 'date', 'display'),
      f('carrier', 'Đơn vị vận chuyển', 'text', 'display'),
    ]
  ),

  debts: schema(
    '/sofa2/b2b',
    'công nợ',
    'dealer',
    ['Trong hạn', 'Sắp đến hạn', 'Quá hạn', 'Đã tất toán'],
    [
      f('dealer', 'Đại lý', 'select', 'content', { required: true, options: DEALERS }),
      f('invoices', 'Hoá đơn liên quan', 'text', 'content', { placeholder: 'DH-DL-2210, DH-DL-2205' }),
      f('note', 'Lịch sử nhắc nợ / ghi chú', 'textarea', 'content', { multiline: 3 }),
      f('limit', 'Hạn mức (₫)', 'number', 'display', { required: true }),
      f('balance', 'Dư nợ hiện tại (₫)', 'number', 'display', { required: true }),
      f('paid', 'Đã thanh toán kỳ này (₫)', 'number', 'display'),
      f('dueDate', 'Hạn thanh toán', 'date', 'display'),
      f('autoRemind', 'Tự động gửi nhắc nợ', 'switch', 'display'),
    ]
  ),

  'sales-docs': schema(
    '/sofa2/b2b',
    'tài liệu',
    'title',
    ['Đã xuất bản', 'Bản nháp', 'Tạm ẩn'],
    [
      f('title', 'Tên tài liệu', 'text', 'content', { required: true }),
      f('type', 'Loại', 'select', 'content', {
        required: true,
        options: ['Catalogue PDF', 'Bảng giá', 'Hình ảnh', 'Video', 'Hướng dẫn bán hàng', 'Hợp đồng mẫu'],
      }),
      f('description', 'Mô tả', 'textarea', 'content', { multiline: 3 }),
      f('fileUrl', 'Liên kết tệp', 'url', 'content', { placeholder: 'https://...' }),
      f('access', 'Quyền truy cập', 'select', 'display', {
        required: true,
        options: ['Tất cả đại lý', 'Vàng trở lên', 'Chỉ Kim cương', 'Nội bộ'],
      }),
      f('downloads', 'Lượt tải', 'number', 'display'),
      f('updated', 'Cập nhật', 'date', 'display'),
    ]
  ),
};

export function getSofa2DealerSchema(moduleSlug?: string) {
  return moduleSlug ? SOFA2_DEALER_SCHEMAS[moduleSlug] : undefined;
}
