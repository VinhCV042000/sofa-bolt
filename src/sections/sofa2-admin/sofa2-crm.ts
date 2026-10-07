// SOFA2 ADMIN — Lược đồ chi tiết cho module CRM
// 4 trang (Khách hàng, Leads, Lịch sử mua hàng, Chăm sóc khách hàng)
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

  // ---- Leads -----------------------------------------------------------
  leads: {
    clientPath: '/sofa2',
    entity: 'lead',
    titleKey: 'name',
    statusKey: 'status',
    statusOptions: LEAD_STATUSES,
    publishLabel: 'Chốt lead',
    defaultStatus: 'Mới',
    hideClientLink: true,
    fields: [
      f('name', 'Tên lead', 'text', 'content', { required: true }),
      f('phone', 'Điện thoại', 'text', 'content', { required: true, placeholder: '09xx xxx xxx' }),
      f('email', 'Email', 'text', 'content'),
      f('source', 'Nguồn lead', 'select', 'content', { required: true, options: LEAD_SOURCES }),
      f('interest', 'Sản phẩm quan tâm', 'select', 'content', { options: LEAD_INTERESTS }),
      f('budget', 'Ngân sách dự kiến (₫)', 'number', 'content', { helper: 'Khoảng giá khách đề cập.' }),
      f('city', 'Tỉnh/TP', 'select', 'content', { options: CITIES }),
      f('note', 'Ghi chú tư vấn', 'textarea', 'content', { multiline: 3 }),
      f('owner', 'Nhân viên phụ trách', 'select', 'display', { required: true, options: AGENTS }),
      f('status', 'Trạng thái lead', 'select', 'display', {
        required: true,
        options: LEAD_STATUSES,
      }),
      f('contactedDate', 'Ngày liên hệ đầu', 'date', 'display'),
      f('lastContact', 'Lần liên hệ cuối', 'date', 'display'),
      f('nextAction', 'Hành động tiếp theo', 'text', 'display', { placeholder: 'Gọi lại 15/10 — gửi báo giá' }),
      f('nextActionDate', 'Ngày hành động tiếp', 'date', 'display'),
      f('convertedTo', 'Đã chuyển thành khách', 'switch', 'display', { helper: 'Bật khi lead chốt thành khách hàng.' }),
      f('convertedDate', 'Ngày chốt', 'date', 'display'),
    ],
  },

  // ---- Lịch sử mua hàng ------------------------------------------------
  'purchase-history': {
    clientPath: '/sofa2',
    entity: 'giao dịch',
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

  // ---- Chăm sóc khách hàng ---------------------------------------------
  care: {
    clientPath: '/sofa2',
    entity: 'ticket chăm sóc',
    titleKey: 'ticket',
    statusKey: 'status',
    statusOptions: ['Đang xử lý', 'Chờ khách phản hồi', 'Đã đóng', 'Đã huỷ'],
    publishLabel: 'Mở lại',
    defaultStatus: 'Đang xử lý',
    hideClientLink: true,
    fields: [
      f('ticket', 'Mã ticket', 'text', 'content', { required: true, placeholder: 'TK-####' }),
      f('customer', 'Khách hàng', 'select', 'content', { required: true, options: CUSTOMERS }),
      f('phone', 'Điện thoại khách', 'text', 'content'),
      f('channel', 'Kênh tiếp nhận', 'select', 'content', { required: true, options: TICKET_CHANNELS }),
      f('topic', 'Chủ đề', 'select', 'content', { required: true, options: TICKET_TOPICS }),
      f('subject', 'Tiêu đề ticket', 'text', 'content', { required: true }),
      f('description', 'Mô tả chi tiết', 'textarea', 'content', { multiline: 5 }),
      f('orderRef', 'Mã đơn liên quan', 'text', 'content', { placeholder: 'LX-YYMMDD## (nếu có)' }),
      f('productRef', 'Sản phẩm liên quan', 'text', 'content'),
      f('priority', 'Mức độ ưu tiên', 'select', 'content', { required: true, options: TICKET_PRIORITIES }),
      f('note', 'Ghi chú nội bộ', 'textarea', 'content', { multiline: 2 }),
      f('agent', 'Nhân viên xử lý', 'select', 'display', { required: true, options: AGENTS }),
      f('created', 'Ngày tạo ticket', 'date', 'display', { required: true }),
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
