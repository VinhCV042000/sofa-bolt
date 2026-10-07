// SOFA2 ADMIN — Lược đồ chi tiết cho module Đại lý B2B
// 8 trang (Giới thiệu hợp tác, Đại lý phân phối, Nhà phân phối, Đăng ký đại lý,
// Báo giá dự án, Yêu cầu sản xuất OEM, Đối tác thi công, Chính sách đại lý)
// dùng chung Sofa2AdminCmsView — form thêm/sửa/xóa đầy đủ, tab trạng thái, bulk actions.
// ----------------------------------------------------------------------

import { SOFA2_PRODUCTS } from 'src/sections/sofa2/sofa2-data';

import type { Sofa2CmsField, Sofa2CmsSchema, Sofa2CmsFieldType } from './sofa2-cms';

const f = (
  key: string,
  label: string,
  type: Sofa2CmsFieldType,
  group: Sofa2CmsField['group'],
  extra: Partial<Sofa2CmsField> = {}
): Sofa2CmsField => ({ key, label, type, group, ...extra });

const PRODUCT_NAMES = SOFA2_PRODUCTS.map((p) => p.name);

const REGIONS = ['Miền Bắc', 'Miền Trung', 'Miền Nam', 'Tây Nam Bộ', 'Toàn quốc'];
const DEALER_LEVELS = ['Cấp 1', 'Cấp 2', 'Cấp 3'];
const CITIES = ['TP.HCM', 'Hà Nội', 'Đà Nẵng', 'Bình Dương', 'Hải Phòng', 'Cần Thơ', 'Nha Trang'];
const PROJECT_TYPES = ['Căn hộ', 'Biệt thự', 'Khách sạn', 'Resort', 'Văn phòng', 'Showroom', 'Nhà hàng'];
const POLICY_TYPES = ['Chiết khấu', 'Hoa hồng', 'Hỗ trợ MKT', 'Hậu mãi', 'Khác'];
const OEM_PARTNERS = [
  'Nordic Home SE',
  'Tokyo Living JP',
  'Decor World US',
  'Home Europe FR',
  'Blue Interior KR',
];
const CONTRACTOR_SPECIALTIES = [
  'Căn hộ & Biệt thự',
  'Khách sạn & Resort',
  'Văn phòng & Showroom',
  'Toàn quốc — lắp đặt',
  'Dự án cao cấp',
];

// ----------------------------------------------------------------------

export const SOFA2_B2B_SCHEMAS: Record<string, Sofa2CmsSchema> = {
  // ---- Giới thiệu hợp tác (CMS-style trang nội dung) -------------------
  cooperation: {
    clientPath: '/sofa2/b2b',
    entity: 'khối nội dung',
    titleKey: 'block',
    statusKey: 'status',
    statusOptions: ['Đã xuất bản', 'Bản nháp', 'Tạm ẩn'],
    publishLabel: 'Xuất bản',
    defaultStatus: 'Bản nháp',
    fields: [
      f('block', 'Tên khối nội dung', 'text', 'content', { required: true }),
      f('type', 'Loại khối', 'select', 'content', {
        required: true,
        options: ['Banner', 'Rich text', 'Danh sách bước', 'Form liên hệ', 'Video', 'CTA'],
      }),
      f('heading', 'Tiêu đề hiển thị', 'text', 'content'),
      f('content', 'Nội dung', 'textarea', 'content', { multiline: 6 }),
      f('image', 'Ảnh minh hoạ', 'url', 'content', { placeholder: 'https://...' }),
      f('ctaLabel', 'Nhãn nút hành động', 'text', 'content'),
      f('ctaLink', 'Liên kết nút', 'url', 'content', { placeholder: '/sofa2/b2b/registration' }),
      f('status', 'Trạng thái', 'select', 'display', {
        required: true,
        options: ['Đã xuất bản', 'Bản nháp', 'Tạm ẩn'],
      }),
      f('order', 'Thứ tự hiển thị', 'number', 'display', { helper: 'Số nhỏ hiển thị trước.' }),
      f('updated', 'Cập nhật', 'date', 'display'),
      f('author', 'Người phụ trách', 'text', 'display'),
    ],
  },

  // ---- Đại lý phân phối ------------------------------------------------
  distributors: {
    clientPath: '/sofa2',
    entity: 'đại lý',
    titleKey: 'name',
    statusKey: 'status',
    statusOptions: ['Hoạt động', 'Tạm ngưng', 'Đã chấm dứt'],
    publishLabel: 'Kích hoạt',
    defaultStatus: 'Hoạt động',
    hideClientLink: true,
    fields: [
      f('name', 'Tên đại lý', 'text', 'content', { required: true }),
      f('level', 'Cấp đại lý', 'select', 'content', { required: true, options: DEALER_LEVELS }),
      f('region', 'Vùng phụ trách', 'select', 'content', { required: true, options: REGIONS }),
      f('city', 'Tỉnh/TP', 'select', 'content', { options: CITIES }),
      f('contactPerson', 'Người liên hệ', 'text', 'content'),
      f('phone', 'Điện thoại', 'text', 'content', { required: true, placeholder: '09xx xxx xxx' }),
      f('email', 'Email', 'text', 'content', { placeholder: 'info@daily.vn' }),
      f('address', 'Địa chỉ', 'textarea', 'content', { multiline: 2 }),
      f('taxCode', 'Mã số thuế', 'text', 'content'),
      f('contractCode', 'Mã hợp đồng', 'text', 'content', { placeholder: 'HĐ-DL-2026-##' }),
      f('contractDate', 'Ngày ký hợp đồng', 'date', 'content'),
      f('contractExpires', 'Hết hạn hợp đồng', 'date', 'content'),
      f('note', 'Ghi chú', 'textarea', 'content', { multiline: 3 }),
      f('revenue', 'Doanh số tháng (₫)', 'number', 'display'),
      f('totalRevenue', 'Doanh số luỹ kế (₫)', 'number', 'display'),
      f('discount', 'Chiết khấu (%)', 'number', 'display', { helper: '% chiết khấu áp dụng.' }),
      f('joinedDate', 'Ngày trở thành đại lý', 'date', 'display'),
      f('status', 'Trạng thái', 'select', 'display', {
        required: true,
        options: ['Hoạt động', 'Tạm ngưng', 'Đã chấm dứt'],
      }),
    ],
  },

  // ---- Nhà phân phối ---------------------------------------------------
  wholesalers: {
    clientPath: '/sofa2',
    entity: 'nhà phân phối',
    titleKey: 'name',
    statusKey: 'status',
    statusOptions: ['Đang chạy', 'Sắp hết hạn', 'Đã hết hạn', 'Tạm ngưng'],
    publishLabel: 'Kích hoạt',
    defaultStatus: 'Đang chạy',
    hideClientLink: true,
    fields: [
      f('name', 'Tên nhà phân phối', 'text', 'content', { required: true }),
      f('region', 'Khu vực', 'select', 'content', { required: true, options: REGIONS }),
      f('contactPerson', 'Người liên hệ', 'text', 'content'),
      f('phone', 'Điện thoại', 'text', 'content', { required: true }),
      f('email', 'Email', 'text', 'content'),
      f('taxCode', 'Mã số thuế', 'text', 'content'),
      f('discount', 'Chiết khấu (%)', 'number', 'content', { required: true, helper: '% chiết khấu so với giá bán lẻ.' }),
      f('minOrder', 'Đơn hàng tối thiểu (₫)', 'number', 'content', { helper: 'Giá trị đơn tối thiểu để áp dụng chiết khấu.' }),
      f('paymentTerms', 'Điều khoản thanh toán', 'select', 'content', {
        options: ['Công nợ 30 ngày', 'Công nợ 45 ngày', 'Công nợ 60 ngày', 'Thanh toán trước', '50% cọc + 50% giao'],
      }),
      f('note', 'Ghi chú hợp đồng', 'textarea', 'content', { multiline: 3 }),
      f('contract', 'Mã hợp đồng', 'text', 'display', { required: true, placeholder: 'HD-NPP-2026-##' }),
      f('contractValue', 'Giá trị hợp đồng (₫)', 'number', 'display'),
      f('signedDate', 'Ngày ký', 'date', 'display'),
      f('expires', 'Hết hạn', 'date', 'display', { required: true }),
      f('status', 'Trạng thái', 'select', 'display', {
        required: true,
        options: ['Đang chạy', 'Sắp hết hạn', 'Đã hết hạn', 'Tạm ngưng'],
      }),
    ],
  },

  // ---- Đăng ký đại lý --------------------------------------------------
  registration: {
    clientPath: '/sofa2/b2b',
    entity: 'hồ sơ đăng ký',
    titleKey: 'code',
    statusKey: 'status',
    statusOptions: ['Đã duyệt', 'Chờ duyệt', 'Đang xem xét', 'Từ chối'],
    publishLabel: 'Duyệt',
    defaultStatus: 'Chờ duyệt',
    fields: [
      f('code', 'Mã hồ sơ', 'text', 'content', { required: true, placeholder: 'DK-YYMM-##' }),
      f('company', 'Tên công ty', 'text', 'content', { required: true }),
      f('contact', 'Người liên hệ', 'text', 'content', { required: true }),
      f('phone', 'Điện thoại', 'text', 'content', { required: true, placeholder: '09xx xxx xxx' }),
      f('email', 'Email', 'text', 'content'),
      f('region', 'Khu vực mong muốn', 'select', 'content', { required: true, options: REGIONS }),
      f('city', 'Tỉnh/TP', 'select', 'content', { options: CITIES }),
      f('businessType', 'Loại hình kinh doanh', 'select', 'content', {
        options: ['Cửa hàng nội thất', 'Showroom', 'Nhà phân phối', 'Online / E-commerce', 'Nội thất theo dự án', 'Khác'],
      }),
      f('showroomSize', 'Diện tích showroom (m²)', 'number', 'content'),
      f('existingBrands', 'Thương hiệu đang phân phối', 'textarea', 'content', { multiline: 2 }),
      f('expectedLevel', 'Cấp đại lý mong muốn', 'select', 'content', { options: DEALER_LEVELS }),
      f('note', 'Ghi chú từ đăng ký', 'textarea', 'content', { multiline: 3 }),
      f('submitted', 'Ngày nộp hồ sơ', 'date', 'display', { required: true }),
      f('reviewedBy', 'Người xét duyệt', 'text', 'display'),
      f('approvedDate', 'Ngày duyệt', 'date', 'display'),
      f('rejectionReason', 'Lý do từ chối', 'textarea', 'display', { multiline: 2, helper: 'Chỉ điền khi từ chối.' }),
      f('status', 'Trạng thái', 'select', 'display', {
        required: true,
        options: ['Đã duyệt', 'Chờ duyệt', 'Đang xem xét', 'Từ chối'],
      }),
    ],
  },

  // ---- Báo giá dự án ---------------------------------------------------
  'project-quotes': {
    clientPath: '/sofa2',
    entity: 'báo giá dự án',
    titleKey: 'code',
    statusKey: 'status',
    statusOptions: ['Đã chốt', 'Đã gửi', 'Chờ phản hồi', 'Đang thương lượng', 'Từ chối'],
    publishLabel: 'Xác nhận',
    defaultStatus: 'Đã gửi',
    hideClientLink: true,
    fields: [
      f('code', 'Mã báo giá', 'text', 'content', { required: true, placeholder: 'BQ-YYMM-##' }),
      f('project', 'Tên dự án', 'text', 'content', { required: true }),
      f('projectType', 'Loại dự án', 'select', 'content', { required: true, options: PROJECT_TYPES }),
      f('client', 'Khách hàng / Chủ đầu tư', 'text', 'content', { required: true }),
      f('contactPerson', 'Người liên hệ', 'text', 'content'),
      f('phone', 'Điện thoại', 'text', 'content'),
      f('email', 'Email', 'text', 'content'),
      f('location', 'Địa điểm dự án', 'text', 'content'),
      f('items', 'Số sản phẩm', 'number', 'content', { required: true }),
      f('productList', 'Danh sách sản phẩm', 'textarea', 'content', {
        multiline: 5,
        placeholder: 'Sofa Oslo 3 Chỗ × 10\nSofa Copenhagen × 8',
        helper: 'Mỗi dòng: Tên sản phẩm × số lượng.',
      }),
      f('note', 'Ghi chú báo giá', 'textarea', 'content', { multiline: 3 }),
      f('value', 'Giá trị báo giá (₫)', 'number', 'display', { required: true }),
      f('discount', 'Chiết khấu dự án (%)', 'number', 'display'),
      f('finalValue', 'Giá trị sau chiết khấu (₫)', 'number', 'display'),
      f('validUntil', 'Báo giá có hiệu lực đến', 'date', 'display'),
      f('created', 'Ngày báo giá', 'date', 'display', { required: true }),
      f('salesperson', 'Nhân viên phụ trách', 'text', 'display'),
      f('status', 'Trạng thái', 'select', 'display', {
        required: true,
        options: ['Đã chốt', 'Đã gửi', 'Chờ phản hồi', 'Đang thương lượng', 'Từ chối'],
      }),
    ],
  },

  // ---- Yêu cầu sản xuất OEM -------------------------------------------
  oem: {
    clientPath: '/sofa2',
    entity: 'yêu cầu OEM',
    titleKey: 'code',
    statusKey: 'status',
    statusOptions: ['Hoàn tất', 'Đang sản xuất', 'Chờ duyệt', 'Đang thiết kế', 'Tạm dừng'],
    publishLabel: 'Duyệt',
    defaultStatus: 'Chờ duyệt',
    hideClientLink: true,
    fields: [
      f('code', 'Mã OEM', 'text', 'content', { required: true, placeholder: 'OEM-YYMM-##' }),
      f('partner', 'Đối tác / Thương hiệu', 'select', 'content', { required: true, options: OEM_PARTNERS }),
      f('country', 'Quốc gia đối tác', 'select', 'content', {
        options: ['Thụy Điển', 'Nhật Bản', 'Mỹ', 'Pháp', 'Hàn Quốc', 'Đức', 'Anh', 'Khác'],
      }),
      f('product', 'Tên sản phẩm OEM', 'text', 'content', { required: true }),
      f('baseProduct', 'Sản phẩm gốc LUXE', 'select', 'content', { options: PRODUCT_NAMES, helper: 'Sản phẩm tham chiếu.' }),
      f('spec', 'Thông số kỹ thuật', 'textarea', 'content', { multiline: 4, helper: 'Kích thước, vật liệu, màu sắc yêu cầu.' }),
      f('material', 'Vật liệu chính', 'text', 'content', { placeholder: 'Vải linen, da bò, gỗ sồi...' }),
      f('quantity', 'Số lượng (SP)', 'number', 'content', { required: true }),
      f('unitPrice', 'Đơn giá sản xuất (₫)', 'number', 'content', { required: true }),
      f('totalValue', 'Tổng giá trị (₫)', 'number', 'display'),
      f('deadline', 'Hạn giao hàng', 'date', 'content', { required: true }),
      f('productionStart', 'Ngày bắt đầu sản xuất', 'date', 'display'),
      f('completedDate', 'Ngày hoàn tất', 'date', 'display'),
      f('progress', 'Tiến độ (%)', 'number', 'display', { helper: '0–100%.' }),
      f('qcPassed', 'Đã kiểm tra chất lượng', 'switch', 'display'),
      f('note', 'Ghi chú sản xuất', 'textarea', 'content', { multiline: 3 }),
      f('status', 'Trạng thái', 'select', 'display', {
        required: true,
        options: ['Hoàn tất', 'Đang sản xuất', 'Chờ duyệt', 'Đang thiết kế', 'Tạm dừng'],
      }),
    ],
  },

  // ---- Đối tác thi công ------------------------------------------------
  contractors: {
    clientPath: '/sofa2',
    entity: 'đối tác thi công',
    titleKey: 'name',
    statusKey: 'status',
    statusOptions: ['Đang hợp tác', 'Tạm ngưng', 'Đã chấm dứt'],
    publishLabel: 'Kích hoạt',
    defaultStatus: 'Đang hợp tác',
    hideClientLink: true,
    fields: [
      f('name', 'Tên đối tác', 'text', 'content', { required: true }),
      f('specialty', 'Chuyên môn', 'select', 'content', { required: true, options: CONTRACTOR_SPECIALTIES }),
      f('contactPerson', 'Người liên hệ', 'text', 'content'),
      f('phone', 'Điện thoại', 'text', 'content', { required: true }),
      f('email', 'Email', 'text', 'content'),
      f('teamSize', 'Quy mô đội thi công', 'number', 'content', { helper: 'Số nhân công.' }),
      f('regions', 'Khu vực hoạt động', 'select', 'content', { options: REGIONS }),
      f('license', 'Giấy phép kinh doanh', 'text', 'content'),
      f('note', 'Ghi chú', 'textarea', 'content', { multiline: 3 }),
      f('projects', 'Dự án đang triển khai', 'number', 'display'),
      f('completedProjects', 'Dự án đã hoàn thành', 'number', 'display'),
      f('rating', 'Đánh giá trung bình', 'text', 'display', { placeholder: '4.5/5' }),
      f('joinedDate', 'Ngày bắt đầu hợp tác', 'date', 'display'),
      f('contractExpires', 'Hết hạn hợp đồng', 'date', 'display'),
      f('status', 'Trạng thái', 'select', 'display', {
        required: true,
        options: ['Đang hợp tác', 'Tạm ngưng', 'Đã chấm dứt'],
      }),
    ],
  },

  // ---- Chính sách đại lý ----------------------------------------------
  policies: {
    clientPath: '/sofa2/b2b',
    entity: 'chính sách',
    titleKey: 'title',
    statusKey: 'status',
    statusOptions: ['Đang chạy', 'Bản nháp', 'Tạm ẩn', 'Hết hiệu lực'],
    publishLabel: 'Xuất bản',
    defaultStatus: 'Bản nháp',
    fields: [
      f('title', 'Tên chính sách', 'text', 'content', { required: true }),
      f('type', 'Loại chính sách', 'select', 'content', { required: true, options: POLICY_TYPES }),
      f('applies', 'Áp dụng cho', 'select', 'content', {
        required: true,
        options: ['Tất cả đại lý', 'Đại lý cấp 1', 'Đại lý cấp 2', 'Đại lý mới', 'Nhà phân phối', 'Đối tác thi công'],
      }),
      f('value', 'Giá trị (chiết khấu / hoa hồng)', 'text', 'content', { placeholder: 'VD: 32%, 3%, 500K/đơn' }),
      f('description', 'Mô tả chi tiết', 'textarea', 'content', { multiline: 5 }),
      f('conditions', 'Điều kiện áp dụng', 'textarea', 'content', { multiline: 3 }),
      f('note', 'Ghi chú nội bộ', 'textarea', 'content', { multiline: 2 }),
      f('status', 'Trạng thái', 'select', 'display', {
        required: true,
        options: ['Đang chạy', 'Bản nháp', 'Tạm ẩn', 'Hết hiệu lực'],
      }),
      f('startDate', 'Ngày bắt đầu', 'date', 'display'),
      f('endDate', 'Ngày kết thúc', 'date', 'display', { helper: 'Để trống nếu áp dụng vô thời hạn.' }),
      f('updated', 'Cập nhật', 'date', 'display'),
      f('author', 'Người tạo / sửa', 'text', 'display'),
    ],
  },
};

// ----------------------------------------------------------------------

export function getSofa2B2bSchema(moduleSlug?: string) {
  return moduleSlug ? SOFA2_B2B_SCHEMAS[moduleSlug] : undefined;
}
