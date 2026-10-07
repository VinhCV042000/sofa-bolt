// SOFA2 ADMIN — Lược đồ chi tiết cho module Đơn hàng
// 7 trang (Đơn hàng, Hoá đơn, Thanh toán, Vận chuyển, Hoàn tiền, Đổi trả, Huỷ đơn)
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
const PRODUCT_STYLES = Array.from(new Set(SOFA2_PRODUCTS.map((p) => p.style)));

const CHANNELS = ['Website', 'Showroom HCM', 'Showroom HN', 'Đại lý B2B', 'Zalo OA', 'Shopee', 'TikTok Shop'];
const PAYMENT_METHODS = [
  'VNPay',
  'Chuyển khoản',
  'COD',
  'Momo',
  'Thẻ quốc tế',
  'Trả góp 0% — FE Credit',
  'Trả góp 0% — Home Credit',
  'Công nợ 30 ngày',
];
const CARRIERS = ['Đội xe nội bộ', 'GHTK', 'Viettel Post', 'J&T Express', 'Ninja Van'];
const CITIES = ['TP.HCM', 'Hà Nội', 'Đà Nẵng', 'Bình Dương', 'Hải Phòng', 'Cần Thơ', 'Nha Trang'];
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
];
const INVOICE_TYPES = ['HĐ điện tử', 'HĐ giấy'];
const REFUND_METHODS = ['Chuyển khoản', 'Hoàn thẻ', 'Tín dụng ví', 'Tiền mặt'];
const RETURN_TYPES = ['Đổi màu', 'Đổi size', 'Trả hàng', 'Bảo hành'];
const RETURN_CONDITIONS = ['Mới 100%', 'Đã dùng nhẹ', 'Đã kiểm định — lỗi xưởng', 'Đang bảo hành'];

const customerFields = (entity: string): Sofa2CmsField[] => [
  f('customer', 'Khách hàng', 'select', 'content', { required: true, options: CUSTOMERS }),
  f('phone', 'Điện thoại', 'text', 'content', {
    required: true,
    placeholder: '09xx xxx xxx',
    helper: 'Số điện thoại liên hệ chính.',
  }),
];

// ----------------------------------------------------------------------

export const SOFA2_ORDER_SCHEMAS: Record<string, Sofa2CmsSchema> = {
  // ---- Đơn hàng --------------------------------------------------------
  orders: {
    clientPath: '/sofa2',
    entity: 'đơn hàng',
    titleKey: 'code',
    statusKey: 'status',
    statusOptions: ['Chờ xác nhận', 'Đang sản xuất', 'Đang giao', 'Hoàn tất', 'Đã huỷ'],
    publishLabel: 'Xác nhận',
    defaultStatus: 'Chờ xác nhận',
    hideClientLink: true,
    fields: [
      f('code', 'Mã đơn', 'text', 'content', {
        required: true,
        placeholder: 'LX-YYMMDD##',
        helper: 'Mã đơn tự sinh theo dạng LX-YYMMDD##.',
      }),
      f('channel', 'Kênh bán', 'select', 'content', { required: true, options: CHANNELS }),
      f('items', 'Số sản phẩm', 'number', 'content', { required: true, helper: 'Tổng số mặt hàng trong đơn.' }),
      f('productList', 'Danh sách sản phẩm', 'textarea', 'content', {
        multiline: 4,
        placeholder: 'Sofa Oslo 3 Chỗ × 1\nSofa Copenhagen × 2',
        helper: 'Mỗi dòng: Tên sản phẩm × số lượng.',
      }),
      f('note', 'Ghi chú nội bộ', 'textarea', 'content', { multiline: 3 }),
      ...customerFields('đơn hàng'),
      f('address', 'Địa chỉ giao hàng', 'textarea', 'content', { multiline: 2 }),
      f('city', 'Tỉnh/TP giao', 'select', 'content', { options: CITIES }),
      f('payment', 'Phương thức thanh toán', 'select', 'display', {
        required: true,
        options: PAYMENT_METHODS,
      }),
      f('total', 'Tổng tiền (₫)', 'number', 'display', { required: true }),
      f('discount', 'Giảm giá (₫)', 'number', 'display', { helper: 'Mã giảm giá / khuyến mãi áp dụng.' }),
      f('shippingFee', 'Phí vận chuyển (₫)', 'number', 'display'),
      f('deposit', 'Tiền đặt cọc (₫)', 'number', 'display', { helper: 'Cho đơn trả góp / B2B.' }),
      f('created', 'Ngày tạo', 'date', 'display', { required: true }),
      f('deliveryDate', 'Ngày giao dự kiến', 'date', 'display'),
      f('salesperson', 'Nhân viên bán', 'text', 'display'),
      f('status', 'Trạng thái', 'select', 'display', {
        required: true,
        options: ['Chờ xác nhận', 'Đang sản xuất', 'Đang giao', 'Hoàn tất', 'Đã huỷ'],
      }),
    ],
  },

  // ---- Hoá đơn --------------------------------------------------------
  invoices: {
    clientPath: '/sofa2',
    entity: 'hoá đơn',
    titleKey: 'invoice',
    statusKey: 'status',
    statusOptions: ['Đã phát hành', 'Chờ phát hành', 'Đã huỷ'],
    publishLabel: 'Phát hành',
    defaultStatus: 'Chờ phát hành',
    hideClientLink: true,
    fields: [
      f('invoice', 'Số hoá đơn', 'text', 'content', { required: true, placeholder: 'HĐ-YYMMDD##' }),
      f('order', 'Mã đơn hàng', 'text', 'content', { required: true, placeholder: 'LX-YYMMDD##' }),
      f('type', 'Loại hoá đơn', 'select', 'content', { required: true, options: INVOICE_TYPES }),
      f('taxCode', 'Mã số thuế (bên mua)', 'text', 'content', { helper: 'Bắt buộc cho hoá đơn doanh nghiệp.' }),
      f('companyName', 'Tên công ty (bên mua)', 'text', 'content'),
      f('companyAddress', 'Địa chỉ công ty', 'textarea', 'content', { multiline: 2 }),
      f('note', 'Ghi chú hoá đơn', 'textarea', 'content', { multiline: 2 }),
      ...customerFields('hoá đơn'),
      f('amount', 'Tổng tiền (₫)', 'number', 'display', { required: true }),
      f('vat', 'Thuế VAT (₫)', 'number', 'display', { helper: '8% trên tổng tiền hàng.' }),
      f('issued', 'Ngày phát hành', 'date', 'display'),
      f('status', 'Trạng thái', 'select', 'display', {
        required: true,
        options: ['Đã phát hành', 'Chờ phát hành', 'Đã huỷ'],
      }),
    ],
  },

  // ---- Thanh toán -----------------------------------------------------
  payments: {
    clientPath: '/sofa2',
    entity: 'giao dịch',
    titleKey: 'txn',
    statusKey: 'status',
    statusOptions: ['Thành công', 'Chờ đối soát', 'Thất bại', 'Đã hoàn'],
    publishLabel: 'Xác nhận',
    defaultStatus: 'Chờ đối soát',
    hideClientLink: true,
    fields: [
      f('txn', 'Mã giao dịch', 'text', 'content', { required: true, placeholder: 'TXN-#####' }),
      f('order', 'Mã đơn hàng', 'text', 'content', { required: true }),
      ...customerFields('giao dịch'),
      f('method', 'Phương thức', 'select', 'content', { required: true, options: PAYMENT_METHODS }),
      f('gatewayRef', 'Mã tham chiếu cổng', 'text', 'content', { helper: 'Mã từ VNPay / ngân hàng.' }),
      f('installmentMonths', 'Số kỳ trả góp', 'number', 'content', { helper: '0 nếu không trả góp.' }),
      f('note', 'Ghi chú', 'textarea', 'content', { multiline: 2 }),
      f('amount', 'Số tiền (₫)', 'number', 'display', { required: true }),
      f('fee', 'Phí giao dịch (₫)', 'number', 'display', { helper: 'Phí cổng thanh toán.' }),
      f('date', 'Ngày giao dịch', 'date', 'display', { required: true }),
      f('status', 'Trạng thái', 'select', 'display', {
        required: true,
        options: ['Thành công', 'Chờ đối soát', 'Thất bại', 'Đã hoàn'],
      }),
    ],
  },

  // ---- Vận chuyển -----------------------------------------------------
  shipping: {
    clientPath: '/sofa2',
    entity: 'vận đơn',
    titleKey: 'code',
    statusKey: 'status',
    statusOptions: ['Đang giao', 'Đã giao', 'Chờ lấy hàng', 'Đang vận chuyển', 'Giao thất bại'],
    publishLabel: 'Xác nhận giao',
    defaultStatus: 'Chờ lấy hàng',
    hideClientLink: true,
    fields: [
      f('code', 'Mã vận đơn', 'text', 'content', { required: true, placeholder: 'VD-#####' }),
      f('order', 'Mã đơn hàng', 'text', 'content', { required: true }),
      ...customerFields('vận đơn'),
      f('address', 'Địa chỉ giao', 'textarea', 'content', { multiline: 2 }),
      f('city', 'Tỉnh/TP', 'select', 'content', { required: true, options: CITIES }),
      f('carrier', 'Đơn vị vận chuyển', 'select', 'content', { required: true, options: CARRIERS }),
      f('trackingUrl', 'Link tracking', 'url', 'content', { placeholder: 'https://...' }),
      f('weight', 'Khối lượng (kg)', 'number', 'content'),
      f('volume', 'Thể tích (m³)', 'number', 'content'),
      f('installTeam', 'Đội lắp đặt', 'text', 'content', { helper: 'VD: Đội A — 4 người.' }),
      f('eta', 'Ngày giao dự kiến', 'date', 'display', { required: true }),
      f('install', 'Lịch lắp đặt', 'text', 'display', { placeholder: '10/10 — Sáng' }),
      f('shippingFee', 'Phí vận chuyển (₫)', 'number', 'display'),
      f('status', 'Trạng thái', 'select', 'display', {
        required: true,
        options: ['Đang giao', 'Đã giao', 'Chờ lấy hàng', 'Đang vận chuyển', 'Giao thất bại'],
      }),
    ],
  },

  // ---- Hoàn tiền ------------------------------------------------------
  refunds: {
    clientPath: '/sofa2',
    entity: 'yêu cầu hoàn tiền',
    titleKey: 'code',
    statusKey: 'status',
    statusOptions: ['Đã hoàn', 'Đang xử lý', 'Chờ duyệt', 'Từ chối'],
    publishLabel: 'Duyệt hoàn',
    defaultStatus: 'Chờ duyệt',
    hideClientLink: true,
    fields: [
      f('code', 'Mã yêu cầu', 'text', 'content', { required: true, placeholder: 'HT-YYMM-##' }),
      f('order', 'Mã đơn hàng', 'text', 'content', { required: true }),
      ...customerFields('yêu cầu'),
      f('reason', 'Lý do hoàn', 'select', 'content', {
        required: true,
        options: ['Khách huỷ đơn', 'Sai màu vải', 'Giao trễ hẹn', 'Sản phẩm lỗi', 'Đổi ý — không nhận', 'Thiếu phụ kiện', 'Khác'],
      }),
      f('reasonDetail', 'Mô tả chi tiết', 'textarea', 'content', { multiline: 3 }),
      f('method', 'Cách hoàn tiền', 'select', 'content', { required: true, options: REFUND_METHODS }),
      f('bankRef', 'Mã giao dịch hoàn', 'text', 'content', { helper: 'Mã chuyển khoản hoàn cho khách.' }),
      f('amount', 'Số tiền hoàn (₫)', 'number', 'display', { required: true }),
      f('requested', 'Ngày yêu cầu', 'date', 'display', { required: true }),
      f('approvedBy', 'Người duyệt', 'text', 'display'),
      f('completedDate', 'Ngày hoàn xong', 'date', 'display'),
      f('status', 'Trạng thái', 'select', 'display', {
        required: true,
        options: ['Đã hoàn', 'Đang xử lý', 'Chờ duyệt', 'Từ chối'],
      }),
    ],
  },

  // ---- Đổi trả --------------------------------------------------------
  returns: {
    clientPath: '/sofa2',
    entity: 'yêu cầu đổi trả',
    titleKey: 'code',
    statusKey: 'status',
    statusOptions: ['Đã đổi xong', 'Đã tái nhập', 'Đang thu hồi', 'Đang xử lý', 'Chờ duyệt', 'Từ chối'],
    publishLabel: 'Duyệt',
    defaultStatus: 'Chờ duyệt',
    hideClientLink: true,
    fields: [
      f('code', 'Mã yêu cầu', 'text', 'content', { required: true, placeholder: 'DT-YYMM-##' }),
      f('order', 'Mã đơn gốc', 'text', 'content', { required: true }),
      ...customerFields('yêu cầu'),
      f('product', 'Sản phẩm', 'select', 'content', { required: true, options: PRODUCT_NAMES }),
      f('type', 'Loại yêu cầu', 'select', 'content', { required: true, options: RETURN_TYPES }),
      f('reason', 'Lý do', 'select', 'content', {
        required: true,
        options: ['Không hợp nội thất', 'Lỗi đường may', 'Không vừa phòng', 'Khách đổi ý', 'Màu thực khác ảnh', 'Khung gỗ tiếng kêu', 'Khác'],
      }),
      f('reasonDetail', 'Mô tả chi tiết', 'textarea', 'content', { multiline: 3 }),
      f('condition', 'Tình trạng hàng', 'select', 'display', {
        required: true,
        options: RETURN_CONDITIONS,
      }),
      f('requested', 'Ngày yêu cầu', 'date', 'display', { required: true }),
      f('pickupDate', 'Ngày thu hồi', 'date', 'display'),
      f('restockWarehouse', 'Kho tái nhập', 'select', 'display', {
        options: ['Kho TP.HCM', 'Kho Hà Nội', 'Kho Bình Dương', 'Chưa xác định'],
      }),
      f('inspector', 'Người kiểm định', 'text', 'display'),
      f('status', 'Trạng thái', 'select', 'display', {
        required: true,
        options: ['Đã đổi xong', 'Đã tái nhập', 'Đang thu hồi', 'Đang xử lý', 'Chờ duyệt', 'Từ chối'],
      }),
    ],
  },

  // ---- Huỷ đơn & Nhật ký ----------------------------------------------
  cancellations: {
    clientPath: '/sofa2',
    entity: 'lịch sử huỷ đơn',
    titleKey: 'order',
    statusKey: 'status',
    statusOptions: ['Đã huỷ', 'Đã khôi phục'],
    publishLabel: 'Khôi phục',
    defaultStatus: 'Đã huỷ',
    hideClientLink: true,
    fields: [
      f('order', 'Mã đơn', 'text', 'content', { required: true }),
      ...customerFields('đơn'),
      f('reason', 'Lý do huỷ', 'select', 'content', {
        required: true,
        options: ['Khách đổi ý', 'Không liên lạc được', 'Thanh toán thất bại', 'Hết hàng — không thể sản xuất', 'Khách phát hiện giá thấp hơn', 'Sai địa chỉ giao', 'Khác'],
      }),
      f('reasonDetail', 'Mô tả chi tiết', 'textarea', 'content', { multiline: 3 }),
      f('cancelledBy', 'Người huỷ', 'select', 'content', {
        required: true,
        options: ['Khách hàng', 'CSKH — Thu Hà', 'Quản lý — Minh Anh', 'Hệ thống', 'Vận chuyển'],
      }),
      f('date', 'Ngày huỷ', 'date', 'display', { required: true }),
      f('restorable', 'Có thể khôi phục', 'switch', 'display', { helper: 'Đơn chưa thanh toán / chưa giao có thể khôi phục.' }),
      f('restoredDate', 'Ngày khôi phục', 'date', 'display'),
      f('status', 'Trạng thái', 'select', 'display', {
        required: true,
        options: ['Đã huỷ', 'Đã khôi phục'],
      }),
    ],
  },
};

// ----------------------------------------------------------------------

export function getSofa2OrderSchema(moduleSlug?: string) {
  return moduleSlug ? SOFA2_ORDER_SCHEMAS[moduleSlug] : undefined;
}
