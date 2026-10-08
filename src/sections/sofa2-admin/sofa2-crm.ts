// SOFA2 ADMIN — Lược đồ chi tiết cho module Khách hàng (CRM)
// 7 trang (Dashboard, Hồ sơ, Đơn hàng khách, Phiếu bảo hành, Điểm tích lũy, Voucher, Khiếu nại)
// dùng chung Sofa2AdminCmsView — form thêm/sửa/xóa đầy đủ, tab trạng thái, bulk actions.
// ----------------------------------------------------------------------

import type { Sofa2CmsField, Sofa2CmsSchema, Sofa2CmsFieldType } from './sofa2-cms';

const f = (
  key: string,
  label: string,
  type: Sofa2CmsFieldType,
  group: Sofa2CmsField['group'],
  extra: Partial<Sofa2CmsField> = {}
): Sofa2CmsField => ({ key, label, type, group, ...extra });

const CUSTOMER_TIERS = ['Thường', 'Bạc', 'Vàng', 'Bạch Kim', 'Đại lý'];
const CUSTOMER_TYPES = ['Cá nhân', 'Doanh nghiệp', 'Đại lý', 'Nhà phân phối'];
const LEAD_SOURCES = ['Facebook Ads', 'Google Ads', 'Showroom HCM', 'Showroom HN', 'Zalo OA', 'TikTok', 'Website form', 'Hotline', 'Giới thiệu', 'Shopee', 'Khác'];
const LEAD_INTERESTS = ['Sofa Scandinavian', 'Sofa góc', 'Sofa da', 'Sofa Mid-Century', 'Bộ sưu tập Oslo', 'Sofa recliner', 'Sofa thông minh', 'Sofa thiết kế riêng', 'Dự án B2B'];
const LEAD_STATUSES = ['Mới', 'Đã liên hệ', 'Đang tư vấn', 'Lead nóng', 'Đã chốt', 'Thất bại', 'Không phản hồi'];
const AGENTS = ['Minh Anh', 'Đức Anh', 'Thu Hà', 'Hoàng Long', 'Quốc Bảo', 'Chưa gán'];
const TICKET_TOPICS = ['Hoàn tiền đơn huỷ', 'Đặt lịch giao lắp', 'Bảo hành khung gỗ', 'Đổi trả sản phẩm', 'Khiếu nại chất lượng', 'Tư vấn sản phẩm', 'Góp ý dịch vụ', 'Khác'];
const TICKET_CHANNELS = ['Hotline', 'Zalo', 'Email', 'Website form', 'Showroom', 'Fanpage'];
const TICKET_PRIORITIES = ['Thấp', 'Trung bình', 'Cao', 'Khẩn cấp'];
const ORDER_STATUSES = ['Hoàn tất', 'Đang giao', 'Đang sản xuất', 'Chờ xác nhận', 'Đã huỷ'];
const SATISFACTION = ['Rất hài lòng', 'Hài lòng', 'Bình thường', 'Không hài lòng', 'Rất không hài lòng'];
const CITIES = ['TP.HCM', 'Hà Nội', 'Đà Nẵng', 'Bình Dương', 'Hải Phòng', 'Cần Thơ', 'Nha Trang', 'Đà Lạt', 'Huế', 'Quy Nhơn'];

const CUSTOMERS = [
  'Hoàng Thị Mai',
  'Lê Đức Anh',
  'Nội thất Việt',
  'Trần Việt Cường',
  'Phạm Thu Hà',
  'Nguyễn Vinh',
  'Lê Khánh',
  'Trần My',
  'Đặng Quốc Bảo',
  'Vũ Thị Lan',
  'Bùi Thị An',
  'Nguyễn Hoàng',
  'Lê Thị Bình',
  'Trần Cường',
  'Phan Đạt',
];

// ----------------------------------------------------------------------

export const SOFA2_CRM_SCHEMAS: Record<string, Sofa2CmsSchema> = {
  // ---- Khách hàng ------------------------------------------------------
  customers: {
    clientPath: '/sofa2',
    entity: 'khách hàng',
    titleKey: 'name',
    statusKey: 'status',
    statusOptions: ['Hoạt động', 'Ngưng tương tác', 'Đã khoá'],
    publishLabel: 'Kích hoạt',
    defaultStatus: 'Hoạt động',
    hideClientLink: true,
    fields: [
      f('name', 'Tên khách hàng', 'text', 'content', { required: true }),
      f('type', 'Loại khách', 'select', 'content', { required: true, options: CUSTOMER_TYPES }),
      f('phone', 'Điện thoại', 'text', 'content', { required: true, placeholder: '09xx xxx xxx' }),
      f('email', 'Email', 'text', 'content', { placeholder: 'email@example.com' }),
      f('gender', 'Giới tính', 'select', 'content', { options: ['Nam', 'Nữ', 'Khác'] }),
      f('birthday', 'Ngày sinh', 'date', 'content', { helper: 'Dùng cho ưu đãi sinh nhật.' }),
      f('city', 'Tỉnh/TP', 'select', 'content', { options: CITIES }),
      f('address', 'Địa chỉ', 'textarea', 'content', { multiline: 2 }),
      f('taxCode', 'Mã số thuế', 'text', 'content', { helper: 'Cho khách doanh nghiệp / đại lý.' }),
      f('companyName', 'Tên công ty', 'text', 'content', { helper: 'Cho khách doanh nghiệp.' }),
      f('note', 'Ghi chú', 'textarea', 'content', { multiline: 3 }),
      f('tier', 'Hạng khách', 'select', 'display', { required: true, options: CUSTOMER_TIERS }),
      f('spent', 'Chi tiêu luỹ kế (₫)', 'number', 'display'),
      f('orders', 'Tổng đơn hàng', 'number', 'display'),
      f('avgOrder', 'Giá trị TB/đơn (₫)', 'number', 'display'),
      f('lastPurchase', 'Lần mua cuối', 'date', 'display'),
      f('joinedDate', 'Ngày đăng ký', 'date', 'display'),
      f('tags', 'Nhãn (cách nhau dấu phẩy)', 'text', 'display', { placeholder: 'VIP, quan tâm sofa da' }),
      f('assignedTo', 'Nhân viên phụ trách', 'select', 'display', { options: AGENTS }),
      f('status', 'Trạng thái', 'select', 'display', {
        required: true,
        options: ['Hoạt động', 'Ngưng tương tác', 'Đã khoá'],
      }),
    ],
  },

  // ---- Dashboard khách hàng -------------------------------------------
  'customer-dashboard': {
    clientPath: '/sofa2',
    entity: 'phân khúc',
    titleKey: 'segment',
    statusKey: 'status',
    statusOptions: ['Hoạt động', 'Ngưng tương tác', 'Chờ liên hệ'],
    publishLabel: 'Kích hoạt',
    defaultStatus: 'Hoạt động',
    hideClientLink: true,
    fields: [
      f('segment', 'Phân khúc', 'text', 'content', { required: true }),
      f('count', 'Số lượng khách', 'number', 'content', { required: true }),
      f('ltv', 'LTV trung bình (₫)', 'number', 'display'),
      f('repurchase', 'Tỷ lệ mua lại', 'text', 'display', { placeholder: '42%' }),
      f('churn', 'Tỷ lệ rời bỏ', 'text', 'display', { placeholder: '5.2%' }),
      f('note', 'Ghi chú', 'textarea', 'content', { multiline: 2 }),
      f('status', 'Trạng thái', 'select', 'display', {
        required: true,
        options: ['Hoạt động', 'Ngưng tương tác', 'Chờ liên hệ'],
      }),
    ],
  },

  // ---- Đơn hàng khách hàng --------------------------------------------
  'customer-orders': {
    clientPath: '/sofa2',
    entity: 'đơn hàng',
    titleKey: 'order',
    statusKey: 'status',
    statusOptions: ORDER_STATUSES,
    publishLabel: 'Xác nhận',
    defaultStatus: 'Chờ xác nhận',
    hideClientLink: true,
    fields: [
      f('order', 'Mã đơn hàng', 'text', 'content', { required: true, placeholder: 'LX-YYMMDD##' }),
      f('customer', 'Khách hàng', 'select', 'content', { required: true, options: CUSTOMERS }),
      f('channel', 'Kênh mua', 'select', 'content', {
        options: ['Website', 'Showroom HCM', 'Showroom HN', 'Đại lý B2B', 'Zalo OA', 'Shopee', 'TikTok Shop'],
      }),
      f('productList', 'Sản phẩm đã mua', 'textarea', 'content', {
        multiline: 4,
        placeholder: 'Sofa Oslo 3 Chỗ × 1\nSofa Copenhagen × 2',
        helper: 'Mỗi dòng: Tên sản phẩm × số lượng.',
      }),
      f('items', 'Số sản phẩm', 'number', 'content', { required: true }),
      f('note', 'Ghi chú đơn', 'textarea', 'content', { multiline: 2 }),
      f('total', 'Tổng giá trị (₫)', 'number', 'display', { required: true }),
      f('discount', 'Giảm giá (₫)', 'number', 'display'),
      f('paid', 'Đã thanh toán (₫)', 'number', 'display'),
      f('paymentMethod', 'Phương thức thanh toán', 'select', 'display', {
        options: ['VNPay', 'Chuyển khoản', 'COD', 'Momo', 'Thẻ quốc tế', 'Trả góp 0%', 'Công nợ 30 ngày'],
      }),
      f('date', 'Ngày mua', 'date', 'display', { required: true }),
      f('deliveryDate', 'Ngày giao', 'date', 'display'),
      f('salesperson', 'Nhân viên bán', 'select', 'display', { options: AGENTS }),
      f('status', 'Trạng thái đơn', 'select', 'display', {
        required: true,
        options: ORDER_STATUSES,
      }),
    ],
  },

  // ---- Phiếu bảo hành -------------------------------------------------
  warranties: {
    clientPath: '/sofa2',
    entity: 'phiếu bảo hành',
    titleKey: 'warranty',
    statusKey: 'status',
    statusOptions: ['Còn hiệu lực', 'Đang xử lý', 'Đã hoàn tất', 'Sắp hết hạn', 'Hết hiệu lực'],
    publishLabel: 'Kích hoạt',
    defaultStatus: 'Còn hiệu lực',
    hideClientLink: true,
    fields: [
      f('warranty', 'Mã phiếu BH', 'text', 'content', { required: true, placeholder: 'BH-#####' }),
      f('customer', 'Khách hàng', 'select', 'content', { required: true, options: CUSTOMERS }),
      f('product', 'Sản phẩm', 'text', 'content', { required: true }),
      f('order', 'Đơn gốc', 'text', 'content', { placeholder: 'LX-YYMMDD##' }),
      f('issued', 'Ngày phát hành', 'date', 'content', { required: true }),
      f('expires', 'Ngày hết hạn', 'date', 'content', { required: true }),
      f('claim', 'Yêu cầu bảo hành', 'select', 'content', {
        options: ['Chưa', 'Bảo hành khung', 'Thay vải đệm', 'Sửa khung xếp', 'Thay nệm', 'Khác'],
      }),
      f('claimDate', 'Ngày yêu cầu BH', 'date', 'display'),
      f('claimDesc', 'Mô tả yêu cầu', 'textarea', 'display', { multiline: 3 }),
      f('agent', 'Nhân viên xử lý', 'select', 'display', { options: AGENTS }),
      f('note', 'Ghi chú', 'textarea', 'display', { multiline: 2 }),
      f('status', 'Trạng thái', 'select', 'display', {
        required: true,
        options: ['Còn hiệu lực', 'Đang xử lý', 'Đã hoàn tất', 'Sắp hết hạn', 'Hết hiệu lực'],
      }),
    ],
  },

  // ---- Điểm tích lũy --------------------------------------------------
  loyalty: {
    clientPath: '/sofa2',
    entity: 'tài khoản điểm',
    titleKey: 'customer',
    statusKey: 'status',
    statusOptions: ['Hoạt động', 'Ngưng tương tác', 'Đã khoá'],
    publishLabel: 'Kích hoạt',
    defaultStatus: 'Hoạt động',
    hideClientLink: true,
    fields: [
      f('customer', 'Khách hàng', 'select', 'content', { required: true, options: CUSTOMERS }),
      f('tier', 'Hạng', 'select', 'content', { required: true, options: CUSTOMER_TIERS }),
      f('balance', 'Điểm hiện tại', 'number', 'display', { required: true }),
      f('earned', 'Tích lũy tháng', 'number', 'display'),
      f('redeemed', 'Đã dùng', 'number', 'display'),
      f('expires', 'Điểm sắp hết', 'text', 'display', { placeholder: '420 (31/12)' }),
      f('adjustReason', 'Lý do điều chỉnh', 'text', 'display', { placeholder: 'Hoàn đơn, tặng sinh nhật...' }),
      f('lastAdjust', 'Lần điều chỉnh cuối', 'date', 'display'),
      f('note', 'Ghi chú', 'textarea', 'display', { multiline: 2 }),
      f('status', 'Trạng thái', 'select', 'display', {
        required: true,
        options: ['Hoạt động', 'Ngưng tương tác', 'Đã khoá'],
      }),
    ],
  },

  // ---- Voucher khách hàng ---------------------------------------------
  'customer-vouchers': {
    clientPath: '/sofa2',
    entity: 'voucher',
    titleKey: 'code',
    statusKey: 'status',
    statusOptions: ['Chưa dùng', 'Đã dùng', 'Hết hạn', 'Đã huỷ'],
    publishLabel: 'Phát hành',
    defaultStatus: 'Chưa dùng',
    hideClientLink: true,
    fields: [
      f('code', 'Mã voucher', 'text', 'content', { required: true, placeholder: 'VIP3-MAI' }),
      f('customer', 'Khách hàng', 'select', 'content', { required: true, options: CUSTOMERS }),
      f('tier', 'Hạng áp dụng', 'select', 'content', { options: CUSTOMER_TIERS }),
      f('offer', 'Ưu đãi', 'text', 'content', { required: true, placeholder: 'Giảm 3 triệu' }),
      f('condition', 'Điều kiện', 'text', 'content', { placeholder: 'Đơn từ 15 triệu' }),
      f('expires', 'Ngày hết hạn', 'date', 'content', { required: true }),
      f('channel', 'Kênh phát', 'select', 'content', { options: ['Email', 'SMS', 'Zalo', 'App push', 'Showroom'] }),
      f('sentDate', 'Ngày gửi', 'date', 'display'),
      f('usedDate', 'Ngày sử dụng', 'date', 'display'),
      f('orderRef', 'Đơn áp dụng', 'text', 'display', { placeholder: 'LX-YYMMDD##' }),
      f('note', 'Ghi chú', 'textarea', 'display', { multiline: 2 }),
      f('status', 'Trạng thái', 'select', 'display', {
        required: true,
        options: ['Chưa dùng', 'Đã dùng', 'Hết hạn', 'Đã huỷ'],
      }),
    ],
  },

  // ---- Khiếu nại ------------------------------------------------------
  complaints: {
    clientPath: '/sofa2',
    entity: 'khiếu nại',
    titleKey: 'ticket',
    statusKey: 'status',
    statusOptions: ['Đang xử lý', 'Chờ khách phản hồi', 'Đã đóng', 'Đã huỷ'],
    publishLabel: 'Mở lại',
    defaultStatus: 'Đang xử lý',
    hideClientLink: true,
    fields: [
      f('ticket', 'Mã khiếu nại', 'text', 'content', { required: true, placeholder: 'KN-####' }),
      f('customer', 'Khách hàng', 'select', 'content', { required: true, options: CUSTOMERS }),
      f('category', 'Phân loại', 'select', 'content', { required: true, options: ['Hoàn tiền', 'Giao hàng', 'Bảo hành', 'Chất lượng', 'Đổi trả', 'Thanh toán', 'Khác'] }),
      f('priority', 'Mức độ', 'select', 'content', { required: true, options: TICKET_PRIORITIES }),
      f('topic', 'Nội dung', 'text', 'content', { required: true }),
      f('description', 'Mô tả chi tiết', 'textarea', 'content', { multiline: 5 }),
      f('channel', 'Kênh tiếp nhận', 'select', 'content', { options: TICKET_CHANNELS }),
      f('orderRef', 'Mã đơn liên quan', 'text', 'content', { placeholder: 'LX-YYMMDD##' }),
      f('productRef', 'Sản phẩm liên quan', 'text', 'content'),
      f('note', 'Ghi chú nội bộ', 'textarea', 'content', { multiline: 2 }),
      f('agent', 'Nhân viên xử lý', 'select', 'display', { required: true, options: AGENTS }),
      f('created', 'Ngày tạo', 'date', 'display', { required: true }),
      f('firstResponse', 'Phản hồi đầu', 'date', 'display'),
      f('resolvedDate', 'Ngày đóng', 'date', 'display'),
      f('responseTime', 'Thời gian phản hồi (phút)', 'number', 'display'),
      f('satisfaction', 'Mức độ hài lòng', 'select', 'display', { options: SATISFACTION }),
      f('status', 'Trạng thái', 'select', 'display', {
        required: true,
        options: ['Đang xử lý', 'Chờ khách phản hồi', 'Đã đóng', 'Đã huỷ'],
      }),
    ],
  },
};

// ----------------------------------------------------------------------

export function getSofa2CrmSchema(moduleSlug?: string) {
  return moduleSlug ? SOFA2_CRM_SCHEMAS[moduleSlug] : undefined;
}
