// SOFA2 ADMIN — Lược đồ chi tiết cho module Giỏ hàng & Mua hàng
// Mỗi module được mô tả: đường dẫn client, nhãn bản ghi, nhóm trường
// (nội dung / hiển thị / kỹ thuật) và loại biểu đồ.
// ----------------------------------------------------------------------

import type { Sofa2CmsField, Sofa2CmsSchema } from './sofa2-cms';

export type Sofa2CartChartType = 'bar' | 'horizontal-bar' | 'donut' | 'area' | 'line';

export type Sofa2CartSchema = Sofa2CmsSchema & {
  chartType: Sofa2CartChartType;
  chartTitle: string;
  chartSubtitle?: string;
  chartCategories?: string[];
  chartSeries?: { name: string; data: number[] }[];
  chartLabels?: string[];
  chartDonutData?: number[];
};

// ----------------------------------------------------------------------

const CART_STATUS = ['Đang mua', 'Bỏ dở', 'Đã đặt hàng'];
const CHECKOUT_STATUS = ['Đang bật', 'Bản nháp', 'Tạm tắt'];
const SUCCESS_STATUS = ['Đang áp dụng', 'Bản nháp', 'Tạm tắt'];
const TRACKING_STATUS = ['Đã xác nhận', 'Đang sản xuất', 'Đang giao', 'Đã giao', 'Đã huỷ'];
const ACCOUNT_STATUS = ['Hoạt động', 'Tạm khoá', 'Chưa kích hoạt'];
const PROFILE_STATUS = ['Đã xác thực', 'Chưa xác thực'];
const ADDRESS_STATUS = ['Mặc định', 'Phụ', 'Tạm ẩn'];
const ORDER_STATUS = ['Đang sản xuất', 'Đang giao', 'Đã giao', 'Đã huỷ', 'Chờ xác nhận'];
const TXN_STATUS = ['Thành công', 'Thất bại', 'Hoàn tiền', 'Đang xử lý'];
const WARRANTY_STATUS = ['Còn hiệu lực', 'Đang xử lý', 'Sắp hết hạn', 'Đã hết hạn', 'Đã hoàn tất'];

const f = (
  key: string,
  label: string,
  type: Sofa2CmsField['type'],
  group: Sofa2CmsField['group'] | 'technical',
  extra: Partial<Sofa2CmsField> = {}
): Sofa2CmsField => ({ key, label, type, group: group as Sofa2CmsField['group'], ...extra });

// ----------------------------------------------------------------------

const cartSchema: Sofa2CartSchema = {
  clientPath: '/sofa2/cart',
  entity: 'giỏ hàng',
  titleKey: 'code',
  statusKey: 'status',
  statusOptions: CART_STATUS,
  defaultStatus: 'Đang mua',
  chartType: 'donut',
  chartTitle: 'Phân bổ trạng thái giỏ hàng',
  chartSubtitle: 'Tỷ lệ giỏ đang mua / bỏ dở / đã đặt',
  chartLabels: ['Đang mua', 'Bỏ dở', 'Đã đặt hàng'],
  chartDonutData: [128, 96, 86],
  fields: [
    f('code', 'Mã giỏ', 'text', 'content', { required: true, placeholder: 'CART-...' }),
    f('customer', 'Khách hàng', 'text', 'content', { required: true }),
    f('phone', 'SĐT', 'text', 'content'),
    f('email', 'Email', 'text', 'content'),
    f('items', 'Sản phẩm trong giỏ', 'textarea', 'content', { multiline: 3, placeholder: 'LX-OSL-3S x 1, LX-HEL-2S x 2' }),
    f('qty', 'Tổng số lượng', 'number', 'content'),
    f('value', 'Giá trị giỏ (₫)', 'number', 'content', { required: true }),
    f('coupon', 'Mã giảm giá', 'text', 'content'),
    f('channel', 'Kênh', 'select', 'content', { options: ['Website', 'Mobile', 'Showroom'] }),
    f('updated', 'Cập nhật cuối', 'text', 'technical'),
    f('abandonedAt', 'Thời gian bỏ dở', 'text', 'technical'),
    f('recoverySent', 'Đã gửi email khôi phục', 'switch', 'technical'),
    f('status', 'Trạng thái', 'select', 'display', { required: true, options: CART_STATUS }),
    f('author', 'Người phụ trách', 'text', 'display'),
  ],
};

// ----------------------------------------------------------------------

const checkoutSchema: Sofa2CartSchema = {
  clientPath: '/sofa2/checkout',
  entity: 'phương thức thanh toán',
  titleKey: 'label',
  statusKey: 'status',
  statusOptions: CHECKOUT_STATUS,
  defaultStatus: 'Đang bật',
  chartType: 'horizontal-bar',
  chartTitle: 'Tỷ lệ chọn phương thức thanh toán',
  chartSubtitle: 'Phân bổ theo cổng thanh toán',
  chartCategories: ['COD', 'Chuyển khoản', 'VNPay QR', 'Trả góp 0%', 'MoMo', 'ZaloPay'],
  chartSeries: [{ name: 'Tỷ lệ %', data: [38, 22, 24, 8, 6, 2] }],
  fields: [
    f('method', 'Mã phương thức', 'text', 'content', { required: true, placeholder: 'COD, VNPay...' }),
    f('label', 'Tên hiển thị', 'text', 'content', { required: true }),
    f('type', 'Loại', 'select', 'content', {
      required: true,
      options: ['Tiền mặt', 'Chuyển khoản', 'Cổng thanh toán', 'Trả góp', 'Ví điện tử'],
    }),
    f('fee', 'Phí giao dịch (%)', 'number', 'content', { helper: '0 = miễn phí.' }),
    f('deposit', 'Đặt cọc (%)', 'number', 'content'),
    f('minOrder', 'Đơn tối thiểu (₫)', 'number', 'content'),
    f('maxOrder', 'Đơn tối đa (₫)', 'number', 'content'),
    f('guestCheckout', 'Cho phép khách vãng lai', 'switch', 'content'),
    f('requireInvoice', 'Yêu cầu xuất hoá đơn', 'switch', 'content'),
    f('order', 'Thứ tự hiển thị', 'number', 'display', { required: true }),
    f('icon', 'Icon (class)', 'text', 'technical', { placeholder: 'solar:card-bold-duotone' }),
    f('apiConfig', 'Cấu hình API', 'textarea', 'technical', { multiline: 3, helper: 'Merchant ID, secret key...' }),
    f('status', 'Trạng thái', 'select', 'display', { required: true, options: CHECKOUT_STATUS }),
  ],
};

// ----------------------------------------------------------------------

const successSchema: Sofa2CartSchema = {
  clientPath: '/sofa2/checkout/success',
  entity: 'mẫu trang cảm ơn',
  titleKey: 'name',
  statusKey: 'status',
  statusOptions: SUCCESS_STATUS,
  defaultStatus: 'Đang áp dụng',
  chartType: 'bar',
  chartTitle: 'Hiệu quả upsell trên trang thành công',
  chartSubtitle: 'Tỷ lệ nhấp gợi ý mua thêm theo mẫu',
  chartCategories: ['Mặc định', 'Chuyển khoản', 'COD', 'Trả góp'],
  chartSeries: [{ name: 'Nhấp (%)', data: [8.6, 4.2, 6.8, 11.2] }],
  fields: [
    f('name', 'Tên mẫu', 'text', 'content', { required: true }),
    f('appliesTo', 'Áp dụng cho', 'select', 'content', {
      required: true,
      options: ['Tất cả', 'COD', 'Chuyển khoản', 'VNPay', 'Trả góp'],
    }),
    f('heading', 'Tiêu đề trang', 'text', 'content', { required: true }),
    f('body', 'Nội dung cảm ơn', 'textarea', 'content', { multiline: 4 }),
    f('ctaLabel', 'Nhãn nút CTA', 'text', 'content'),
    f('ctaLink', 'Liên kết CTA', 'url', 'content', { placeholder: '/sofa2/orders/tracking' }),
    f('upsell', 'Hiển thị gợi ý mua thêm', 'switch', 'content'),
    f('upsellTitle', 'Tiêu đề upsell', 'text', 'content'),
    f('sendEmail', 'Gửi email xác nhận', 'switch', 'content'),
    f('sendSms', 'Gửi SMS xác nhận', 'switch', 'content'),
    f('nextSteps', 'Hướng dẫn bước tiếp theo', 'textarea', 'technical', { multiline: 3 }),
    f('status', 'Trạng thái', 'select', 'display', { required: true, options: SUCCESS_STATUS }),
    f('updated', 'Cập nhật', 'date', 'display'),
  ],
};

// ----------------------------------------------------------------------

const trackingSchema: Sofa2CartSchema = {
  clientPath: '/sofa2/orders/tracking',
  entity: 'vận đơn',
  titleKey: 'order',
  statusKey: 'status',
  statusOptions: TRACKING_STATUS,
  defaultStatus: 'Đã xác nhận',
  chartType: 'line',
  chartTitle: 'Số đơn đang giao theo ngày',
  chartSubtitle: '7 ngày gần nhất',
  chartCategories: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
  chartSeries: [{ name: 'Đang giao', data: [12, 18, 22, 16, 28, 24, 14] }],
  fields: [
    f('order', 'Mã đơn', 'text', 'content', { required: true }),
    f('customer', 'Khách hàng', 'text', 'content', { required: true }),
    f('phone', 'SĐT', 'text', 'content'),
    f('carrier', 'Đơn vị vận chuyển', 'select', 'content', {
      required: true,
      options: ['Đội xe LUXE', 'GHN', 'GHTK', 'Viettel Post', 'J&T Express'],
    }),
    f('trackingNo', 'Mã vận đơn', 'text', 'content'),
    f('eta', 'Ngày giao dự kiến', 'date', 'content'),
    f('installer', 'Đội lắp đặt', 'text', 'content'),
    f('timeline', 'Hành trình giao hàng', 'textarea', 'technical', {
      multiline: 5,
      placeholder: '15/09 09:20 – Đã xác nhận\n16/09 08:00 – Đang sản xuất',
    }),
    f('weight', 'Khối lượng (kg)', 'number', 'technical'),
    f('volume', 'Thể tích (m³)', 'number', 'technical'),
    f('shippingFee', 'Phí vận chuyển (₫)', 'number', 'technical'),
    f('status', 'Trạng thái', 'select', 'display', { required: true, options: TRACKING_STATUS }),
    f('updated', 'Cập nhật', 'date', 'display'),
  ],
};

// ----------------------------------------------------------------------

const accountSchema: Sofa2CartSchema = {
  clientPath: '/sofa2/account',
  entity: 'tài khoản khách',
  titleKey: 'name',
  statusKey: 'status',
  statusOptions: ACCOUNT_STATUS,
  defaultStatus: 'Hoạt động',
  chartType: 'donut',
  chartTitle: 'Phân bổ cấp bậc thành viên',
  chartSubtitle: 'Tỷ lệ theo hạng VIP',
  chartLabels: ['Đồng', 'Bạc', 'Vàng', 'Bạch Kim', 'Kim Cương'],
  chartDonutData: [3200, 2800, 1600, 840, 202],
  fields: [
    f('name', 'Họ tên', 'text', 'content', { required: true }),
    f('email', 'Email', 'text', 'content', { required: true }),
    f('phone', 'SĐT', 'text', 'content'),
    f('password', 'Mật khẩu (reset)', 'text', 'technical', { helper: 'Để trống nếu không đổi.' }),
    f('tier', 'Cấp bậc', 'select', 'content', {
      required: true,
      options: ['Đồng', 'Bạc', 'Vàng', 'Bạch Kim', 'Kim Cương'],
    }),
    f('points', 'Điểm tích lũy', 'number', 'content'),
    f('orders', 'Tổng đơn hàng', 'number', 'content'),
    f('totalSpent', 'Tổng chi tiêu (₫)', 'number', 'content'),
    f('birthday', 'Ngày sinh', 'date', 'content'),
    f('gender', 'Giới tính', 'select', 'content', { options: ['Nam', 'Nữ', 'Khác'] }),
    f('avatar', 'Ảnh đại diện', 'url', 'content'),
    f('registeredAt', 'Ngày đăng ký', 'date', 'technical'),
    f('lastLogin', 'Đăng nhập cuối', 'text', 'technical'),
    f('note', 'Ghi chú CRM', 'textarea', 'technical', { multiline: 2 }),
    f('status', 'Trạng thái', 'select', 'display', { required: true, options: ACCOUNT_STATUS }),
  ],
};

// ----------------------------------------------------------------------

const profileSchema: Sofa2CartSchema = {
  clientPath: '/sofa2/account/profile',
  entity: 'hồ sơ cá nhân',
  titleKey: 'name',
  statusKey: 'status',
  statusOptions: PROFILE_STATUS,
  defaultStatus: 'Chưa xác thực',
  chartType: 'bar',
  chartTitle: 'Tỷ lệ hồ sơ đã xác thực',
  chartSubtitle: 'Xác thực SĐT và email',
  chartCategories: ['Xác thực SĐT', 'Xác thực email', 'Có ảnh', 'Có ngày sinh'],
  chartSeries: [{ name: 'Tỷ lệ %', data: [92, 78, 64, 58] }],
  fields: [
    f('name', 'Họ tên', 'text', 'content', { required: true }),
    f('phone', 'SĐT', 'text', 'content', { required: true }),
    f('email', 'Email', 'text', 'content'),
    f('birthday', 'Ngày sinh', 'date', 'content'),
    f('gender', 'Giới tính', 'select', 'content', { options: ['Nam', 'Nữ', 'Khác'] }),
    f('avatar', 'Ảnh đại diện', 'url', 'content'),
    f('address', 'Địa chỉ', 'textarea', 'content', { multiline: 2 }),
    f('company', 'Công ty', 'text', 'content'),
    f('taxCode', 'Mã số thuế', 'text', 'content'),
    f('verifiedPhone', 'Đã xác thực SĐT', 'switch', 'technical'),
    f('verifiedEmail', 'Đã xác thực email', 'switch', 'technical'),
    f('status', 'Trạng thái xác thực', 'select', 'display', { required: true, options: PROFILE_STATUS }),
    f('updated', 'Cập nhật', 'date', 'display'),
  ],
};

// ----------------------------------------------------------------------

const addressesSchema: Sofa2CartSchema = {
  clientPath: '/sofa2/account/addresses',
  entity: 'địa chỉ giao hàng',
  titleKey: 'recipient',
  statusKey: 'status',
  statusOptions: ADDRESS_STATUS,
  defaultStatus: 'Phụ',
  chartType: 'horizontal-bar',
  chartTitle: 'Địa chỉ theo khu vực',
  chartSubtitle: 'Phân bổ theo tỉnh/thành',
  chartCategories: ['TP.HCM', 'Hà Nội', 'Đà Nẵng', 'Bình Dương', 'Hải Phòng', 'Cần Thơ'],
  chartSeries: [{ name: 'Số địa chỉ', data: [4200, 3200, 860, 640, 420, 280] }],
  fields: [
    f('customer', 'Khách hàng', 'text', 'content', { required: true }),
    f('recipient', 'Người nhận', 'text', 'content', { required: true }),
    f('phone', 'SĐT người nhận', 'text', 'content', { required: true }),
    f('address', 'Địa chỉ chi tiết', 'textarea', 'content', { multiline: 2, required: true }),
    f('district', 'Quận/Huyện', 'text', 'content'),
    f('city', 'Tỉnh/Thành', 'text', 'content', { required: true }),
    f('ward', 'Phường/Xã', 'text', 'content'),
    f('zipCode', 'Mã bưu chính', 'text', 'content'),
    f('deliveryType', 'Loại giao', 'select', 'content', {
      options: ['Giao tận nhà', 'Giao + Lắp đặt', 'Nhận tại showroom'],
    }),
    f('isDefault', 'Địa chỉ mặc định', 'switch', 'content'),
    f('deliveryNote', 'Ghi chú giao hàng', 'textarea', 'technical', { multiline: 2 }),
    f('status', 'Trạng thái', 'select', 'display', { required: true, options: ADDRESS_STATUS }),
  ],
};

// ----------------------------------------------------------------------

const myOrdersSchema: Sofa2CartSchema = {
  clientPath: '/sofa2/account/orders',
  entity: 'đơn hàng',
  titleKey: 'order',
  statusKey: 'status',
  statusOptions: ORDER_STATUS,
  defaultStatus: 'Chờ xác nhận',
  chartType: 'line',
  chartTitle: 'Đơn hàng theo tháng',
  chartSubtitle: '12 tháng gần nhất',
  chartCategories: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
  chartSeries: [{ name: 'Đơn hàng', data: [420, 480, 520, 560, 620, 680, 740, 820, 860, 780, 840, 920] }],
  fields: [
    f('order', 'Mã đơn', 'text', 'content', { required: true }),
    f('customer', 'Khách hàng', 'text', 'content', { required: true }),
    f('date', 'Ngày đặt', 'date', 'content', { required: true }),
    f('items', 'Sản phẩm', 'textarea', 'content', { multiline: 3 }),
    f('total', 'Tổng tiền (₫)', 'number', 'content', { required: true }),
    f('payment', 'Phương thức thanh toán', 'select', 'content', {
      options: ['COD', 'Chuyển khoản', 'VNPay QR', 'Trả góp 0%'],
    }),
    f('shippingAddress', 'Địa chỉ giao', 'textarea', 'content', { multiline: 2 }),
    f('coupon', 'Mã giảm giá', 'text', 'content'),
    f('note', 'Ghi chú đơn hàng', 'textarea', 'technical', { multiline: 2 }),
    f('staffNote', 'Ghi chú nội bộ', 'textarea', 'technical', { multiline: 2 }),
    f('status', 'Trạng thái', 'select', 'display', { required: true, options: ORDER_STATUS }),
    f('updated', 'Cập nhật', 'date', 'display'),
  ],
};

// ----------------------------------------------------------------------

const transactionsSchema: Sofa2CartSchema = {
  clientPath: '/sofa2/account/transactions',
  entity: 'giao dịch',
  titleKey: 'txnId',
  statusKey: 'status',
  statusOptions: TXN_STATUS,
  defaultStatus: 'Đang xử lý',
  chartType: 'area',
  chartTitle: 'Giá trị giao dịch theo tháng',
  chartSubtitle: 'Tổng số tiền giao dịch (triệu ₫)',
  chartCategories: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9'],
  chartSeries: [{ name: 'Giá trị (tr ₫)', data: [620, 680, 740, 820, 860, 920, 980, 1080, 1120] }],
  fields: [
    f('txnId', 'Mã giao dịch', 'text', 'content', { required: true }),
    f('order', 'Mã đơn liên quan', 'text', 'content', { required: true }),
    f('customer', 'Khách hàng', 'text', 'content'),
    f('method', 'Phương thức', 'select', 'content', {
      required: true,
      options: ['COD', 'Chuyển khoản', 'VNPay QR', 'Trả góp 0%', 'MoMo', 'ZaloPay'],
    }),
    f('amount', 'Số tiền (₫)', 'number', 'content', { required: true }),
    f('fee', 'Phí giao dịch (₫)', 'number', 'content'),
    f('date', 'Ngày giao dịch', 'date', 'content', { required: true }),
    f('ref', 'Mã tham chiếu cổng', 'text', 'technical'),
    f('gateway', 'Cổng thanh toán', 'text', 'technical'),
    f('invoice', 'Mã hoá đơn', 'text', 'technical'),
    f('refundReason', 'Lý do hoàn tiền', 'textarea', 'technical', { multiline: 2 }),
    f('status', 'Trạng thái', 'select', 'display', { required: true, options: TXN_STATUS }),
  ],
};

// ----------------------------------------------------------------------

const warrantySchema: Sofa2CartSchema = {
  clientPath: '/sofa2/account/warranty',
  entity: 'phiếu bảo hành',
  titleKey: 'warranty',
  statusKey: 'status',
  statusOptions: WARRANTY_STATUS,
  defaultStatus: 'Còn hiệu lực',
  chartType: 'donut',
  chartTitle: 'Trạng thái phiếu bảo hành',
  chartSubtitle: 'Tỷ lệ theo tình trạng bảo hành',
  chartLabels: ['Còn hiệu lực', 'Đang xử lý', 'Sắp hết hạn', 'Đã hết hạn', 'Đã hoàn tất'],
  chartDonutData: [6180, 7, 42, 2180, 11],
  fields: [
    f('warranty', 'Mã phiếu bảo hành', 'text', 'content', { required: true }),
    f('customer', 'Khách hàng', 'text', 'content', { required: true }),
    f('product', 'Sản phẩm', 'text', 'content', { required: true }),
    f('sku', 'Mã SKU', 'text', 'content'),
    f('order', 'Đơn hàng gốc', 'text', 'content'),
    f('issued', 'Ngày phát hành', 'date', 'content', { required: true }),
    f('expires', 'Ngày hết hạn', 'date', 'content', { required: true }),
    f('duration', 'Thời hạn (năm)', 'number', 'content', { helper: 'Số năm bảo hành.' }),
    f('claim', 'Yêu cầu bảo hành', 'textarea', 'content', { multiline: 3, placeholder: 'Mô tả lỗi/yêu cầu...' }),
    f('claimDate', 'Ngày yêu cầu BH', 'date', 'technical'),
    f('claimStatus', 'Tiến trình sửa chữa', 'select', 'technical', {
      options: ['Chưa', 'Tiếp nhận', 'Đang sửa', 'Hoàn tất', 'Từ chối'],
    }),
    f('technician', 'Kỹ thuật viên', 'text', 'technical'),
    f('cost', 'Chi phí BH (₫)', 'number', 'technical'),
    f('note', 'Ghi chú', 'textarea', 'technical', { multiline: 2 }),
    f('status', 'Trạng thái', 'select', 'display', { required: true, options: WARRANTY_STATUS }),
  ],
};

// ----------------------------------------------------------------------

export const SOFA2_CART_SCHEMAS: Record<string, Sofa2CartSchema> = {
  cart: cartSchema,
  checkout: checkoutSchema,
  success: successSchema,
  tracking: trackingSchema,
  account: accountSchema,
  profile: profileSchema,
  addresses: addressesSchema,
  'my-orders': myOrdersSchema,
  transactions: transactionsSchema,
  warranty: warrantySchema,
};

export function getSofa2CartSchema(moduleSlug?: string): Sofa2CartSchema | undefined {
  return moduleSlug ? SOFA2_CART_SCHEMAS[moduleSlug] : undefined;
}
