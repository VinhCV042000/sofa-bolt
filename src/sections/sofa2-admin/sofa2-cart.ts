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
const TRACKING_STATUS = ['Chờ xác nhận', 'Đã xác nhận', 'Đang xử lý', 'Đang sản xuất', 'Đang giao', 'Đã giao', 'Đã huỷ'];
const PROFILE_STATUS = ['Đầy đủ', 'Thiếu thông tin'];
const ADDRESS_STATUS = ['Mặc định', 'Phụ', 'Tạm ẩn'];
const ORDER_STATUS = ['Đang sản xuất', 'Đang giao', 'Đã giao', 'Đã huỷ', 'Chờ xác nhận'];
const TXN_STATUS = ['Thành công', 'Thất bại', 'Hoàn tiền', 'Đang xử lý'];
const WARRANTY_STATUS = ['Còn hiệu lực', 'Đang sửa chữa', 'Đang xử lý', 'Sắp hết hạn', 'Hết hạn', 'Đã hết hạn', 'Đã hoàn tất'];

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
  statusToggle: false,
  chartType: 'donut',
  chartTitle: 'Phân bổ trạng thái giỏ hàng',
  chartSubtitle: 'Tỷ lệ giỏ đang mua / bỏ dở / đã đặt',
  chartLabels: ['Đang mua', 'Bỏ dở', 'Đã đặt hàng'],
  chartDonutData: [128, 96, 86],
  fields: [
    f('code', 'Mã giỏ', 'text', 'content', { required: true, placeholder: 'CART-...' }),
    f('customerId', 'Mã khách hàng', 'text', 'content', { placeholder: 'KH-1001' }),
    f('customer', 'Khách hàng', 'text', 'content', { required: true }),
    f('phone', 'SĐT', 'text', 'content'),
    f('email', 'Email', 'text', 'content'),
    f('items', 'Chi tiết sản phẩm (JSON)', 'textarea', 'content', {
      multiline: 5,
      required: true,
      placeholder: '[{"id":"1","name":"Sofa Oslo 3 Chỗ","price":14500000,"image":"...","material":"Vải linen","qty":1}]',
      helper: 'Giữ đúng cấu trúc JSON để trang Giỏ hàng đọc được các sản phẩm.',
    }),
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
       options: ['Tiền mặt', 'Chuyển khoản', 'Cổng thanh toán', 'Trả góp', 'Ví điện tử', 'Phí giao hàng'],
    }),
    f('fee', 'Phí giao dịch (%)', 'number', 'content', { helper: '0 = miễn phí.' }),
    f('deposit', 'Đặt cọc (%)', 'number', 'content'),
    f('minOrder', 'Đơn tối thiểu (₫)', 'number', 'content'),
    f('maxOrder', 'Đơn tối đa (₫)', 'number', 'content'),
    f('guestCheckout', 'Cho phép khách vãng lai', 'switch', 'content'),
    f('requireInvoice', 'Yêu cầu xuất hoá đơn', 'switch', 'content'),
    f('order', 'Thứ tự hiển thị', 'number', 'display', { required: true }),
    f('icon', 'Icon (class)', 'text', 'technical', { placeholder: 'solar:card-bold-duotone' }),
    f('configNote', 'Ghi chú cấu hình', 'textarea', 'technical', { multiline: 3, helper: 'Không lưu API key, mật khẩu hoặc secret trong dữ liệu quản trị.' }),
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
  titleKey: 'code',
  statusKey: 'status',
  statusOptions: TRACKING_STATUS,
  defaultStatus: 'Đã xác nhận',
  statusToggle: false,
  chartType: 'line',
  chartTitle: 'Số đơn đang giao theo ngày',
  chartSubtitle: '7 ngày gần nhất',
  chartCategories: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
  chartSeries: [{ name: 'Đang giao', data: [12, 18, 22, 16, 28, 24, 14] }],
  fields: [
    f('code', 'Mã đơn', 'text', 'content', { required: true }),
    f('customer', 'Khách hàng', 'text', 'content', { required: true }),
    f('phone', 'SĐT', 'text', 'content'),
    f('address', 'Địa chỉ giao hàng', 'textarea', 'content', { multiline: 2 }),
    f('items', 'Sản phẩm', 'textarea', 'content', { multiline: 2 }),
    f('total', 'Tổng tiền (₫)', 'number', 'content'),
    f('carrier', 'Đơn vị vận chuyển', 'select', 'content', {
      required: true,
      options: ['Đội xe LUXE', 'GHN', 'GHTK', 'Viettel Post', 'J&T Express'],
    }),
    f('trackingNo', 'Mã vận đơn', 'text', 'content'),
    f('eta', 'Ngày giao dự kiến', 'date', 'content'),
    f('step', 'Bước hiện tại', 'select', 'display', {
      required: true,
      options: ['Đặt hàng', 'Xác nhận', 'Sản xuất', 'Giao hàng', 'Hoàn tất'],
    }),
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
  statusOptions: PROFILE_STATUS,
  defaultStatus: 'Đầy đủ',
  chartType: 'donut',
  chartTitle: 'Phân bổ cấp bậc thành viên',
  chartSubtitle: 'Tỷ lệ theo hạng VIP',
  chartLabels: ['Đồng', 'Bạc', 'Vàng', 'Bạch Kim', 'Kim Cương'],
  chartDonutData: [3200, 2800, 1600, 840, 202],
  fields: [
    f('customerId', 'Mã khách hàng', 'text', 'content', { required: true, placeholder: 'KH-1001' }),
    f('name', 'Họ tên', 'text', 'content', { required: true }),
    f('email', 'Email', 'text', 'content', { required: true }),
    f('phone', 'SĐT', 'text', 'content'),
    f('tier', 'Cấp bậc', 'select', 'content', {
      required: true,
      options: ['Đồng', 'Bạc', 'Vàng', 'Bạch Kim', 'Kim Cương'],
    }),
    f('points', 'Điểm tích lũy', 'number', 'content'),
    f('orders', 'Tổng đơn hàng', 'number', 'content'),
    f('spent', 'Tổng chi tiêu (₫)', 'number', 'content'),
    f('birthday', 'Ngày sinh', 'date', 'content'),
    f('gender', 'Giới tính', 'select', 'content', { options: ['Nam', 'Nữ', 'Khác'] }),
    f('address', 'Địa chỉ giao hàng', 'textarea', 'content'),
    f('city', 'Tỉnh/thành', 'text', 'content'),
    f('style', 'Phong cách yêu thích', 'text', 'display'),
    f('emailOptIn', 'Nhận email khuyến mãi', 'switch', 'display'),
    f('smsOptIn', 'Nhận SMS/Zalo', 'switch', 'display'),
    f('status', 'Trạng thái hồ sơ', 'select', 'display', { required: true, options: PROFILE_STATUS }),
  ],
};

// ----------------------------------------------------------------------

const profileSchema: Sofa2CartSchema = {
  clientPath: '/sofa2/profile',
  entity: 'hồ sơ cá nhân',
  titleKey: 'name',
  statusKey: 'status',
  statusOptions: PROFILE_STATUS,
  defaultStatus: 'Thiếu thông tin',
  chartType: 'bar',
  chartTitle: 'Tỷ lệ hồ sơ đã xác thực',
  chartSubtitle: 'Xác thực SĐT và email',
  chartCategories: ['Xác thực SĐT', 'Xác thực email', 'Có ảnh', 'Có ngày sinh'],
  chartSeries: [{ name: 'Tỷ lệ %', data: [92, 78, 64, 58] }],
  fields: [
    f('customerId', 'Mã khách hàng', 'text', 'content', { required: true, placeholder: 'KH-1001' }),
    f('name', 'Họ tên', 'text', 'content', { required: true }),
    f('phone', 'SĐT', 'text', 'content', { required: true }),
    f('email', 'Email', 'text', 'content', { required: true }),
    f('birthday', 'Ngày sinh', 'date', 'content'),
    f('gender', 'Giới tính', 'select', 'content', { options: ['Nam', 'Nữ', 'Khác'] }),
    f('avatar', 'Ảnh đại diện', 'url', 'content'),
    f('address', 'Địa chỉ giao hàng', 'textarea', 'content'),
    f('city', 'Tỉnh/thành', 'text', 'content'),
    f('style', 'Phong cách yêu thích', 'text', 'display'),
    f('emailOptIn', 'Nhận email khuyến mãi', 'switch', 'display'),
    f('smsOptIn', 'Nhận SMS/Zalo', 'switch', 'display'),
    f('status', 'Trạng thái hồ sơ', 'select', 'display', { required: true, options: PROFILE_STATUS }),
  ],
};

// ----------------------------------------------------------------------

const addressesSchema: Sofa2CartSchema = {
  clientPath: '/sofa2/addresses',
  entity: 'địa chỉ giao hàng',
  titleKey: 'recipient',
  statusKey: 'status',
  statusOptions: ADDRESS_STATUS,
  defaultStatus: 'Phụ',
  statusToggle: false,
  chartType: 'horizontal-bar',
  chartTitle: 'Địa chỉ theo khu vực',
  chartSubtitle: 'Phân bổ theo tỉnh/thành',
  chartCategories: ['TP.HCM', 'Hà Nội', 'Đà Nẵng', 'Bình Dương', 'Hải Phòng', 'Cần Thơ'],
  chartSeries: [{ name: 'Số địa chỉ', data: [4200, 3200, 860, 640, 420, 280] }],
  fields: [
    f('addressId', 'Mã địa chỉ', 'text', 'technical'),
    f('customerId', 'Mã khách hàng', 'text', 'content'),
    f('customer', 'Khách hàng', 'text', 'content', { required: true }),
    f('label', 'Nhãn địa chỉ', 'text', 'content'),
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
  clientPath: '/sofa2/my-orders',
  entity: 'đơn hàng',
  titleKey: 'order',
  statusKey: 'status',
  statusOptions: ORDER_STATUS,
  defaultStatus: 'Chờ xác nhận',
  statusToggle: false,
  chartType: 'line',
  chartTitle: 'Đơn hàng theo tháng',
  chartSubtitle: '12 tháng gần nhất',
  chartCategories: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
  chartSeries: [{ name: 'Đơn hàng', data: [420, 480, 520, 560, 620, 680, 740, 820, 860, 780, 840, 920] }],
  fields: [
    f('code', 'Mã đơn', 'text', 'content', { required: true }),
    f('customerId', 'Mã khách hàng', 'text', 'content', { required: true }),
    f('customer', 'Khách hàng', 'text', 'content', { required: true }),
    f('phone', 'SĐT khách hàng', 'text', 'content'),
    f('email', 'Email khách hàng', 'text', 'content'),
    f('orderDate', 'Ngày đặt', 'date', 'content', { required: true }),
    f('product', 'Sản phẩm', 'textarea', 'content', { multiline: 3 }),
    f('items', 'Chi tiết sản phẩm (JSON)', 'textarea', 'technical', { multiline: 3 }),
    f('total', 'Tổng tiền (₫)', 'number', 'content', { required: true }),
    f('payment', 'Phương thức thanh toán', 'select', 'content', {
      options: ['COD', 'Chuyển khoản', 'VNPay', 'VNPay QR', 'Trả góp 0%', 'MoMo', 'ZaloPay'],
    }),
    f('address', 'Địa chỉ giao', 'textarea', 'content', { multiline: 2 }),
    f('voucher', 'Mã giảm giá', 'text', 'content'),
    f('points', 'Điểm được cộng', 'number', 'display'),
    f('note', 'Ghi chú đơn hàng', 'textarea', 'technical', { multiline: 2 }),
    f('status', 'Trạng thái', 'select', 'display', { required: true, options: ORDER_STATUS }),
  ],
};

// ----------------------------------------------------------------------

const transactionsSchema: Sofa2CartSchema = {
  clientPath: '/sofa2/transactions',
  entity: 'giao dịch',
  titleKey: 'txnId',
  statusKey: 'status',
  statusOptions: TXN_STATUS,
  defaultStatus: 'Đang xử lý',
  statusToggle: false,
  chartType: 'area',
  chartTitle: 'Giá trị giao dịch theo tháng',
  chartSubtitle: 'Tổng số tiền giao dịch (triệu ₫)',
  chartCategories: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9'],
  chartSeries: [{ name: 'Giá trị (tr ₫)', data: [620, 680, 740, 820, 860, 920, 980, 1080, 1120] }],
  fields: [
    f('txnId', 'Mã giao dịch', 'text', 'content', { required: true }),
    f('order', 'Mã đơn liên quan', 'text', 'content', { required: true }),
    f('customerId', 'Mã khách hàng', 'text', 'content'),
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
  clientPath: '/sofa2/warranty',
  entity: 'phiếu bảo hành',
  titleKey: 'code',
  statusKey: 'status',
  statusOptions: WARRANTY_STATUS,
  defaultStatus: 'Còn hiệu lực',
  statusToggle: false,
  chartType: 'donut',
  chartTitle: 'Trạng thái phiếu bảo hành',
  chartSubtitle: 'Tỷ lệ theo tình trạng bảo hành',
  chartLabels: ['Còn hiệu lực', 'Đang sửa chữa', 'Đang xử lý', 'Sắp hết hạn', 'Hết hạn', 'Đã hết hạn', 'Đã hoàn tất'],
  chartDonutData: [0, 0, 0, 0, 0, 0, 0],
  fields: [
    f('code', 'Mã phiếu bảo hành', 'text', 'content', { required: true }),
    f('customerId', 'Mã khách hàng', 'text', 'content', { required: true }),
    f('customer', 'Khách hàng', 'text', 'content', { required: true }),
    f('product', 'Sản phẩm', 'text', 'content', { required: true }),
    f('serial', 'Số serial', 'text', 'content', { required: true }),
    f('orderCode', 'Đơn hàng gốc', 'text', 'content'),
    f('issue', 'Yêu cầu bảo hành', 'textarea', 'content', { multiline: 3, placeholder: 'Mô tả lỗi/yêu cầu...' }),
    f('purchaseDate', 'Ngày mua', 'date', 'content', { required: true }),
    f('expiry', 'Ngày hết hạn', 'date', 'content', { required: true }),
    f('technician', 'Kỹ thuật viên', 'text', 'technical'),
    f('appointment', 'Lịch hẹn', 'date', 'technical'),
    f('status', 'Trạng thái', 'select', 'display', { required: true, options: WARRANTY_STATUS }),
  ],
};

// ----------------------------------------------------------------------

const listingSchema: Sofa2CartSchema = {
  clientPath: '/sofa2/products',
  entity: 'cấu hình listing',
  titleKey: 'name',
  statusKey: 'status',
  statusOptions: ['Đang áp dụng', 'Bản nháp', 'Tạm tắt'],
  defaultStatus: 'Đang áp dụng',
  chartType: 'bar',
  chartTitle: 'Lượt xem trang danh sách',
  chartSubtitle: 'Theo danh mục — 30 ngày',
  chartCategories: ['Tất cả', 'Sofa góc', 'Sofa giường', 'Sofa văng', 'Sofa da', 'Ghế dài'],
  chartSeries: [{ name: 'Lượt xem', data: [12400, 8600, 4200, 3800, 6400, 2200] }],
  fields: [
    f('name', 'Tên cấu hình', 'text', 'content', { required: true }),
    f('path', 'Đường dẫn', 'url', 'content', { required: true, placeholder: '/sofa2/products' }),
    f('category', 'Danh mục áp dụng', 'select', 'content', {
      options: ['Tất cả', 'Sofa góc', 'Sofa giường', 'Sofa văng', 'Sofa da', 'Ghế dài', 'Phụ kiện'],
    }),
    f('sort', 'Sắp xếp mặc định', 'select', 'content', {
      options: ['Bán chạy', 'Mới nhất', 'Giá tăng dần', 'Giá giảm dần', 'Nổi bật'],
    }),
    f('perPage', 'Số SP/trang', 'number', 'content', { required: true, helper: '12, 24, 36, 48...' }),
    f('layout', 'Bố cục', 'select', 'content', {
      options: ['Lưới 4 cột', 'Lưới 3 cột', 'Lưới 2 cột', 'Danh sách'],
    }),
    f('filters', 'Bộ lọc hiển thị', 'textarea', 'content', {
      multiline: 3,
      placeholder: 'Danh mục, giá, chất liệu, màu sắc, kích thước...',
    }),
    f('pinned', 'SP ghim đầu trang', 'textarea', 'content', { multiline: 2, placeholder: 'SKU1, SKU2, SKU3' }),
    f('banner', 'Banner đầu trang', 'url', 'content', { placeholder: 'https://...' }),
    f('showBanner', 'Hiển thị banner', 'switch', 'content'),
    f('seoTitle', 'Tiêu đề SEO', 'text', 'technical'),
    f('seoDesc', 'Mô tả SEO', 'textarea', 'technical', { multiline: 2 }),
    f('status', 'Trạng thái', 'select', 'display', { required: true, options: ['Đang áp dụng', 'Bản nháp', 'Tạm tắt'] }),
    f('updated', 'Cập nhật', 'date', 'display'),
  ],
};

// ----------------------------------------------------------------------

const searchSchema: Sofa2CartSchema = {
  clientPath: '/sofa2/search',
  entity: 'quy tắc tìm kiếm',
  titleKey: 'keyword',
  statusKey: 'status',
  statusOptions: ['Đang áp dụng', 'Bản nháp', 'Tạm tắt'],
  defaultStatus: 'Đang áp dụng',
  chartType: 'horizontal-bar',
  chartTitle: 'Từ khoá tìm kiếm phổ biến',
  chartSubtitle: 'Top 6 — 30 ngày',
  chartCategories: ['sofa góc', 'sofa da bò', 'ghế dài', 'sofa văng', 'sofa giường', 'sofa nhỏ'],
  chartSeries: [{ name: 'Lượt tìm', data: [2140, 1820, 860, 720, 640, 480] }],
  fields: [
    f('keyword', 'Từ khoá', 'text', 'content', { required: true }),
    f('type', 'Loại quy tắc', 'select', 'content', {
      required: true,
      options: ['Ghim kết quả', 'Từ đồng nghĩa', 'Chuyển hướng', 'Tự động gợi ý', 'Ẩn kết quả'],
    }),
    f('synonyms', 'Từ đồng nghĩa', 'textarea', 'content', {
      multiline: 2,
      placeholder: 'sofa văng, sofa băng, ghế dài...',
      helper: 'Mỗi từ cách nhau bằng dấu phẩy.',
    }),
    f('redirect', 'Chuyển hướng đến', 'url', 'content', { placeholder: '/sofa2/products/category/sofa-da' }),
    f('pinnedProducts', 'SP ghim cho từ khoá', 'textarea', 'content', { multiline: 2, placeholder: 'SKU1, SKU2' }),
    f('suggestions', 'Gợi ý tự động', 'textarea', 'content', { multiline: 2, placeholder: 'sofa góc da, sofa góc nhỏ...' }),
    f('searches', 'Lượt tìm 30 ngày', 'number', 'display'),
    f('noResult', 'Lượt không KQ', 'number', 'display'),
    f('ctr', 'CTR (%)', 'number', 'display'),
    f('status', 'Trạng thái', 'select', 'display', { required: true, options: ['Đang áp dụng', 'Bản nháp', 'Tạm tắt'] }),
    f('updated', 'Cập nhật', 'date', 'display'),
  ],
};

// ----------------------------------------------------------------------

const compareSchema: Sofa2CartSchema = {
  clientPath: '/sofa2/compare',
  entity: 'tiêu chí so sánh',
  titleKey: 'attribute',
  statusKey: 'status',
  statusOptions: ['Hiển thị', 'Ẩn'],
  defaultStatus: 'Hiển thị',
  chartType: 'donut',
  chartTitle: 'Tiêu chí so sánh được sử dụng',
  chartSubtitle: 'Tỷ lệ nhấp theo tiêu chí',
  chartLabels: ['Giá bán', 'Kích thước', 'Chất liệu', 'Bảo hành', 'Màu sắc'],
  chartDonutData: [42, 28, 18, 8, 4],
  fields: [
    f('attribute', 'Tên tiêu chí', 'text', 'content', { required: true }),
    f('source', 'Nguồn dữ liệu', 'select', 'content', {
      required: true,
      options: ['Giá bán', 'Thuộc tính SP', 'Kích thước', 'Bảo hành', 'Thương hiệu', 'Tự định nghĩa'],
    }),
    f('unit', 'Đơn vị', 'text', 'content', { placeholder: 'cm, năm, kg...' }),
    f('order', 'Thứ tự hiển thị', 'number', 'content', { required: true }),
    f('highlight', 'Nhấn mạnh', 'select', 'content', { options: ['Có', 'Không'] }),
    f('maxItems', 'SP tối đa', 'number', 'content', { helper: 'Số SP có thể so sánh cùng lúc.' }),
    f('format', 'Định dạng hiển thị', 'select', 'content', {
      options: ['Văn bản', 'Số', 'Tiền tệ', 'Màu sắc', 'Đánh giá sao'],
    }),
    f('status', 'Trạng thái', 'select', 'display', { required: true, options: ['Hiển thị', 'Ẩn'] }),
    f('updated', 'Cập nhật', 'date', 'display'),
  ],
};

// ----------------------------------------------------------------------

export const SOFA2_CART_SCHEMAS: Record<string, Sofa2CartSchema> = {
  listing: listingSchema,
  search: searchSchema,
  compare: compareSchema,
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
