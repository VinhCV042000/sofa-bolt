// SOFA2 ADMIN — Lược đồ chi tiết cho module Khách hàng
// Tương thích khu tài khoản khách trên website (/sofa2/account).
// ----------------------------------------------------------------------

import type { Sofa2CmsField, Sofa2CmsSchema, Sofa2CmsFieldType } from './sofa2-cms';

const f = (
  key: string,
  label: string,
  type: Sofa2CmsFieldType,
  group: Sofa2CmsField['group'],
  extra: Partial<Sofa2CmsField> = {}
): Sofa2CmsField => ({ key, label, type, group, ...extra });

const TIERS = ['Kim cương', 'Vàng', 'Bạc', 'Thường'];
const CUSTOMERS = ['Phạm Quỳnh Như', 'Hoàng Thị Mai', 'Lê Đức Anh', 'Trần Việt Cường'];
const STAFF = ['Minh Anh', 'Thu Hà', 'Đức Anh'];
const ACCOUNT = '/sofa2/account';

const schema = (
  entity: string,
  titleKey: string,
  statusOptions: string[],
  fields: Sofa2CmsField[]
): Sofa2CmsSchema => ({
  clientPath: ACCOUNT,
  entity,
  titleKey,
  statusKey: 'status',
  statusOptions,
  fields: [
    ...fields,
    f('status', 'Trạng thái', 'select', 'display', { required: true, options: statusOptions }),
  ],
});

export const SOFA2_CUSTOMER_SCHEMAS: Record<string, Sofa2CmsSchema> = {
  dashboard: schema('khách hàng', 'name', ['Hoạt động', 'Ngưng tương tác', 'Bị khoá'], [
    f('name', 'Họ tên', 'text', 'content', { required: true }),
    f('phone', 'Điện thoại', 'text', 'content'),
    f('note', 'Ghi chú chăm sóc', 'textarea', 'content', { multiline: 3 }),
    f('tier', 'Hạng thành viên', 'select', 'display', { required: true, options: TIERS }),
    f('orders', 'Số đơn', 'number', 'display'),
    f('spent', 'Tổng chi tiêu (₫)', 'number', 'display'),
    f('lastOrder', 'Đơn gần nhất', 'date', 'display'),
    f('owner', 'Nhân viên chăm sóc', 'select', 'display', { options: STAFF }),
  ]),

  profiles: schema('hồ sơ', 'name', ['Đã xác minh', 'Chưa xác minh', 'Bị khoá'], [
    f('name', 'Họ tên', 'text', 'content', { required: true }),
    f('phone', 'Điện thoại', 'text', 'content', { required: true }),
    f('email', 'Email', 'text', 'content', { required: true }),
    f('birthday', 'Ngày sinh', 'date', 'content'),
    f('gender', 'Giới tính', 'select', 'content', { options: ['Nữ', 'Nam', 'Khác'] }),
    f('address', 'Địa chỉ giao hàng mặc định', 'textarea', 'content', { multiline: 2 }),
    f('city', 'Tỉnh/Thành', 'select', 'content', {
      options: ['TP.HCM', 'Hà Nội', 'Đà Nẵng', 'Cần Thơ', 'Hải Phòng', 'Khác'],
    }),
    f('style', 'Phong cách yêu thích', 'select', 'content', {
      options: ['Scandinavian', 'Industrial Loft', 'Mid-Century', 'Hiện đại', 'Cổ điển'],
    }),
    f('newsletter', 'Nhận email khuyến mãi', 'switch', 'display'),
    f('sms', 'Nhận SMS/Zalo', 'switch', 'display'),
  ]),

  'customer-orders': schema(
    'đơn hàng',
    'code',
    ['Chờ xác nhận', 'Đang giao', 'Đã giao', 'Đã huỷ', 'Trả hàng'],
    [
      f('code', 'Mã đơn', 'text', 'content', { required: true, placeholder: 'LX-00000000' }),
      f('customer', 'Khách hàng', 'select', 'content', { required: true, options: CUSTOMERS }),
      f('products', 'Sản phẩm (SKU x SL)', 'textarea', 'content', { multiline: 3 }),
      f('shippingAddress', 'Địa chỉ giao', 'textarea', 'content', { multiline: 2 }),
      f('total', 'Tổng tiền (₫)', 'number', 'display', { required: true }),
      f('payment', 'Thanh toán', 'select', 'display', {
        options: ['COD', 'Chuyển khoản', 'Thẻ', 'Trả góp 0%', 'Ví điện tử'],
      }),
      f('orderDate', 'Ngày đặt', 'date', 'display'),
      f('pointsEarned', 'Điểm cộng', 'number', 'display'),
      f('voucher', 'Voucher áp dụng', 'text', 'display'),
    ]
  ),

  warranties: schema(
    'phiếu bảo hành',
    'code',
    ['Còn hạn', 'Đang xử lý', 'Hết hạn', 'Từ chối'],
    [
      f('code', 'Mã phiếu', 'text', 'content', { required: true, placeholder: 'BH-XXX-00000' }),
      f('customer', 'Khách hàng', 'select', 'content', { required: true, options: CUSTOMERS }),
      f('product', 'Sản phẩm', 'text', 'content', { required: true }),
      f('serial', 'Số serial', 'text', 'content'),
      f('orderCode', 'Mã đơn mua', 'text', 'content'),
      f('issue', 'Mô tả lỗi / yêu cầu', 'textarea', 'content', { multiline: 3 }),
      f('purchaseDate', 'Ngày mua', 'date', 'display'),
      f('expires', 'Hết hạn bảo hành', 'date', 'display'),
      f('technician', 'Kỹ thuật viên', 'text', 'display'),
      f('visitDate', 'Lịch hẹn kỹ thuật', 'date', 'display'),
    ]
  ),

  points: schema('tài khoản điểm', 'customer', ['Hoạt động', 'Tạm khoá'], [
    f('customer', 'Khách hàng', 'select', 'content', { required: true, options: CUSTOMERS }),
    f('reason', 'Lý do điều chỉnh gần nhất', 'textarea', 'content', { multiline: 2 }),
    f('tier', 'Hạng', 'select', 'display', { required: true, options: TIERS }),
    f('balance', 'Số dư điểm', 'number', 'display', { required: true }),
    f('earned', 'Tích luỹ trong năm', 'number', 'display'),
    f('redeemed', 'Đã đổi', 'number', 'display'),
    f('expires', 'Hết hạn điểm', 'date', 'display'),
  ]),

  vouchers: schema('voucher', 'code', ['Chưa dùng', 'Đã dùng', 'Hết hạn', 'Thu hồi'], [
    f('code', 'Mã voucher', 'text', 'content', { required: true }),
    f('customer', 'Khách hàng', 'select', 'content', { required: true, options: CUSTOMERS }),
    f('campaign', 'Chiến dịch', 'select', 'content', {
      options: ['Chào mừng', 'Sinh nhật', 'VIP', 'Quay lại', 'Đổi điểm', 'Bồi thường'],
    }),
    f('conditions', 'Điều kiện áp dụng', 'textarea', 'content', { multiline: 2 }),
    f('value', 'Giá trị (số tiền hoặc %)', 'text', 'display', { required: true }),
    f('minOrder', 'Đơn tối thiểu (₫)', 'number', 'display'),
    f('expires', 'Hết hạn', 'date', 'display'),
    f('pointsCost', 'Đổi bằng điểm', 'number', 'display'),
  ]),

  complaints: schema(
    'khiếu nại',
    'code',
    ['Mới', 'Đang xử lý', 'Đã giải quyết', 'Đã đóng'],
    [
      f('code', 'Mã khiếu nại', 'text', 'content', { required: true, placeholder: 'KN-000000' }),
      f('customer', 'Khách hàng', 'select', 'content', { required: true, options: CUSTOMERS }),
      f('topic', 'Vấn đề', 'select', 'content', {
        required: true,
        options: ['Giao hàng trễ', 'Lệch màu vải', 'Lỗi sản phẩm', 'Lắp đặt chưa đạt', 'Hoàn tiền voucher', 'Thái độ phục vụ', 'Khác'],
      }),
      f('orderCode', 'Mã đơn liên quan', 'text', 'content'),
      f('detail', 'Nội dung khiếu nại', 'textarea', 'content', { multiline: 4 }),
      f('resolution', 'Hướng xử lý / phản hồi khách', 'textarea', 'content', { multiline: 3 }),
      f('priority', 'Ưu tiên', 'select', 'display', { required: true, options: ['Cao', 'Trung bình', 'Thấp'] }),
      f('owner', 'Phụ trách', 'select', 'display', { options: STAFF }),
      f('slaDate', 'Hạn xử lý (SLA)', 'date', 'display'),
      f('compensation', 'Bồi thường bằng voucher', 'switch', 'display'),
    ]
  ),
};

export function getSofa2CustomerSchema(moduleSlug?: string) {
  return moduleSlug ? SOFA2_CUSTOMER_SCHEMAS[moduleSlug] : undefined;
}
