// SOFA2 ADMIN — Lược đồ chi tiết cho module Mua hàng (luồng mua hàng phía khách)
// Danh sách SP → Tìm kiếm → So sánh → Wishlist → Giỏ hàng → Thanh toán → Thành công → Theo dõi đơn
// Dùng chung Sofa2AdminCmsView — form thêm/sửa/xoá, tab trạng thái, thao tác hàng loạt, CSV.
// ----------------------------------------------------------------------

import type { Sofa2CmsField, Sofa2CmsSchema, Sofa2CmsFieldType } from './sofa2-cms';

const f = (
  key: string,
  label: string,
  type: Sofa2CmsFieldType,
  group: Sofa2CmsField['group'],
  extra: Partial<Sofa2CmsField> = {}
): Sofa2CmsField => ({ key, label, type, group, ...extra });

const ACTIVE = ['Đang áp dụng', 'Bản nháp', 'Tạm tắt'];
const SORTS = ['Mới nhất', 'Bán chạy', 'Giá tăng dần', 'Giá giảm dần', 'Đánh giá cao', 'Ưu tiên thủ công'];
const CATEGORIES = ['Tất cả', 'Sofa góc', 'Sofa văng', 'Sofa đơn', 'Sofa giường', 'Phụ kiện'];
const PAYMENTS = ['COD', 'Chuyển khoản', 'Thẻ quốc tế', 'Ví MoMo', 'VNPay', 'Trả góp 0%'];
const CARRIERS = ['Đội xe LUXE', 'GHN', 'Viettel Post', 'Ahamove'];
const CHANNELS = ['Website', 'Mobile', 'Showroom', 'Zalo'];

export const SOFA2_SHOPPING_SCHEMAS: Record<string, Sofa2CmsSchema> = {
  // ---- Danh sách sản phẩm (trang listing) -----------------------------
  listing: {
    clientPath: '/sofa2/products',
    entity: 'cấu hình danh sách',
    titleKey: 'name',
    statusKey: 'status',
    statusOptions: ACTIVE,
    publishLabel: 'Áp dụng',
    fields: [
      f('name', 'Tên cấu hình / trang danh mục', 'text', 'content', { required: true, maxLength: 120 }),
      f('path', 'Đường dẫn trang', 'text', 'content', { required: true, placeholder: '/sofa2/products/category/sofa-goc' }),
      f('category', 'Danh mục áp dụng', 'select', 'content', { options: CATEGORIES }),
      f('heading', 'Tiêu đề hiển thị', 'text', 'content', { maxLength: 120 }),
      f('intro', 'Mô tả đầu trang', 'textarea', 'content', { multiline: 3, maxLength: 600 }),
      f('banner', 'Ảnh banner (URL)', 'url', 'content'),
      f('sort', 'Sắp xếp mặc định', 'select', 'display', { required: true, options: SORTS }),
      f('perPage', 'Số SP mỗi trang', 'number', 'display'),
      f('layout', 'Bố cục', 'select', 'display', { options: ['Lưới 3 cột', 'Lưới 4 cột', 'Danh sách'] }),
      f('filters', 'Bộ lọc hiển thị (cách nhau dấu phẩy)', 'text', 'display', { placeholder: 'Giá, Chất liệu, Màu, Kích thước' }),
      f('pinned', 'SKU ghim đầu trang (cách nhau dấu phẩy)', 'text', 'display'),
      f('showOutOfStock', 'Hiển thị SP hết hàng', 'switch', 'display'),
      f('quickView', 'Bật xem nhanh', 'switch', 'display'),
      f('metaTitle', 'Meta title', 'text', 'seo', { maxLength: 60 }),
      f('metaDescription', 'Meta description', 'textarea', 'seo', { multiline: 2, maxLength: 160 }),
      f('status', 'Trạng thái', 'select', 'display', { required: true, options: ACTIVE }),
    ],
  },

  // ---- Tìm kiếm sản phẩm ----------------------------------------------
  search: {
    clientPath: '/sofa2/products',
    entity: 'quy tắc tìm kiếm',
    titleKey: 'keyword',
    statusKey: 'status',
    statusOptions: ACTIVE,
    publishLabel: 'Áp dụng',
    fields: [
      f('keyword', 'Từ khoá', 'text', 'content', { required: true, maxLength: 80 }),
      f('type', 'Loại quy tắc', 'select', 'content', {
        required: true,
        options: ['Từ đồng nghĩa', 'Chuyển hướng', 'Ghim kết quả', 'Từ khoá gợi ý', 'Từ khoá chặn'],
      }),
      f('synonyms', 'Từ đồng nghĩa (cách nhau dấu phẩy)', 'text', 'content', { placeholder: 'ghế dài, sofa văng' }),
      f('redirect', 'Chuyển hướng tới', 'text', 'content', { placeholder: '/sofa2/products/category/sofa-goc' }),
      f('pinned', 'SKU ghim lên đầu', 'text', 'content'),
      f('searches', 'Lượt tìm 30 ngày', 'number', 'display'),
      f('noResult', 'Lượt không có kết quả', 'number', 'display'),
      f('ctr', 'Tỷ lệ nhấp (%)', 'number', 'display'),
      f('trending', 'Hiển thị trong "Tìm kiếm phổ biến"', 'switch', 'display'),
      f('status', 'Trạng thái', 'select', 'display', { required: true, options: ACTIVE }),
    ],
  },

  // ---- So sánh sản phẩm -----------------------------------------------
  compare: {
    clientPath: '/sofa2/products',
    entity: 'tiêu chí so sánh',
    titleKey: 'attribute',
    statusKey: 'status',
    statusOptions: ['Hiển thị', 'Ẩn'],
    publishLabel: 'Hiển thị',
    defaultStatus: 'Hiển thị',
    fields: [
      f('attribute', 'Tiêu chí', 'text', 'content', { required: true, maxLength: 80 }),
      f('source', 'Nguồn dữ liệu', 'select', 'content', {
        options: ['Thuộc tính SP', 'Giá bán', 'Tồn kho', 'Đánh giá', 'Bảo hành', 'Kích thước'],
      }),
      f('unit', 'Đơn vị', 'text', 'content', { maxLength: 20, placeholder: 'cm, kg, năm' }),
      f('appliesTo', 'Danh mục áp dụng', 'select', 'content', { options: CATEGORIES }),
      f('order', 'Thứ tự hiển thị', 'number', 'display'),
      f('highlight', 'Tô sáng giá trị tốt nhất', 'switch', 'display'),
      f('maxItems', 'Số SP so sánh tối đa', 'number', 'display', { helper: 'Khuyến nghị 2–4 sản phẩm.' }),
      f('status', 'Trạng thái', 'select', 'display', { required: true, options: ['Hiển thị', 'Ẩn'] }),
    ],
  },

  // ---- Wishlist --------------------------------------------------------
  wishlist: {
    clientPath: '/sofa2/account',
    entity: 'wishlist',
    titleKey: 'customer',
    statusKey: 'status',
    statusOptions: ['Đang theo dõi', 'Đã nhắc', 'Đã mua'],
    publishLabel: 'Đánh dấu đã mua',
    defaultStatus: 'Đang theo dõi',
    fields: [
      f('customer', 'Khách hàng', 'text', 'content', { required: true, maxLength: 100 }),
      f('email', 'Email', 'text', 'content', { maxLength: 255 }),
      f('product', 'Sản phẩm', 'text', 'content', { required: true, maxLength: 150 }),
      f('sku', 'SKU', 'text', 'content', { maxLength: 40 }),
      f('price', 'Giá lúc thêm (đ)', 'number', 'content'),
      f('added', 'Ngày thêm', 'date', 'content'),
      f('notifyPrice', 'Báo khi giảm giá', 'switch', 'display'),
      f('notifyStock', 'Báo khi có hàng', 'switch', 'display'),
      f('note', 'Ghi chú CSKH', 'textarea', 'display', { multiline: 2, maxLength: 500 }),
      f('status', 'Trạng thái', 'select', 'display', { required: true, options: ['Đang theo dõi', 'Đã nhắc', 'Đã mua'] }),
    ],
  },

  // ---- Giỏ hàng --------------------------------------------------------
  cart: {
    clientPath: '/sofa2/cart',
    entity: 'giỏ hàng',
    titleKey: 'code',
    statusKey: 'status',
    statusOptions: ['Đã đặt hàng', 'Đang mua', 'Bỏ dở', 'Đã nhắc'],
    publishLabel: 'Đánh dấu đã đặt',
    defaultStatus: 'Đang mua',
    fields: [
      f('code', 'Mã giỏ', 'text', 'content', { required: true, maxLength: 30 }),
      f('customer', 'Khách hàng', 'text', 'content', { maxLength: 100, placeholder: 'Khách vãng lai' }),
      f('phone', 'Điện thoại', 'text', 'content', { maxLength: 20 }),
      f('items', 'Sản phẩm (mỗi dòng: SKU x SL)', 'textarea', 'content', { multiline: 3, maxLength: 1000 }),
      f('qty', 'Tổng số lượng', 'number', 'content'),
      f('value', 'Giá trị giỏ (đ)', 'number', 'content'),
      f('coupon', 'Mã giảm giá', 'text', 'content', { maxLength: 30 }),
      f('channel', 'Kênh', 'select', 'display', { options: CHANNELS }),
      f('updated', 'Cập nhật cuối', 'text', 'display'),
      f('recoveryEmail', 'Gửi email khôi phục giỏ', 'switch', 'display'),
      f('status', 'Trạng thái', 'select', 'display', { required: true, options: ['Đã đặt hàng', 'Đang mua', 'Bỏ dở', 'Đã nhắc'] }),
    ],
  },

  // ---- Thanh toán (cấu hình phương thức) -------------------------------
  checkout: {
    clientPath: '/sofa2/checkout',
    entity: 'phương thức thanh toán',
    titleKey: 'method',
    statusKey: 'status',
    statusOptions: ['Đang bật', 'Bản nháp', 'Tắt'],
    publishLabel: 'Bật',
    fields: [
      f('method', 'Phương thức', 'select', 'content', { required: true, options: PAYMENTS }),
      f('label', 'Nhãn hiển thị cho khách', 'text', 'content', { required: true, maxLength: 80 }),
      f('description', 'Hướng dẫn', 'textarea', 'content', { multiline: 3, maxLength: 500 }),
      f('fee', 'Phí (%)', 'number', 'content'),
      f('minOrder', 'Đơn tối thiểu (đ)', 'number', 'content'),
      f('maxOrder', 'Đơn tối đa (đ)', 'number', 'content'),
      f('deposit', 'Đặt cọc (%)', 'number', 'display', { helper: 'Áp dụng cho hàng đặt may theo yêu cầu.' }),
      f('order', 'Thứ tự', 'number', 'display'),
      f('requireInvoice', 'Cho phép xuất hoá đơn VAT', 'switch', 'display'),
      f('guestCheckout', 'Cho phép khách vãng lai', 'switch', 'display'),
      f('status', 'Trạng thái', 'select', 'display', { required: true, options: ['Đang bật', 'Bản nháp', 'Tắt'] }),
    ],
  },

  // ---- Thanh toán thành công ------------------------------------------
  success: {
    clientPath: '/sofa2/checkout/success',
    entity: 'mẫu trang thành công',
    titleKey: 'name',
    statusKey: 'status',
    statusOptions: ACTIVE,
    publishLabel: 'Áp dụng',
    fields: [
      f('name', 'Tên mẫu', 'text', 'content', { required: true, maxLength: 100 }),
      f('appliesTo', 'Áp dụng cho', 'select', 'content', { options: ['Tất cả', ...PAYMENTS] }),
      f('heading', 'Tiêu đề', 'text', 'content', { required: true, maxLength: 120 }),
      f('message', 'Lời cảm ơn', 'textarea', 'content', { multiline: 4, maxLength: 1000 }),
      f('nextSteps', 'Các bước tiếp theo', 'textarea', 'content', { multiline: 3, maxLength: 1000 }),
      f('ctaLabel', 'Nút hành động', 'text', 'display', { maxLength: 40 }),
      f('ctaLink', 'Liên kết nút', 'text', 'display', { placeholder: '/sofa2/orders/tracking' }),
      f('upsell', 'Hiển thị SP gợi ý', 'switch', 'display'),
      f('sendEmail', 'Gửi email xác nhận', 'switch', 'display'),
      f('sendSms', 'Gửi SMS / Zalo xác nhận', 'switch', 'display'),
      f('status', 'Trạng thái', 'select', 'display', { required: true, options: ACTIVE }),
    ],
  },

  // ---- Theo dõi đơn hàng ----------------------------------------------
  tracking: {
    clientPath: '/sofa2/orders/tracking',
    entity: 'vận đơn',
    titleKey: 'order',
    statusKey: 'status',
    statusOptions: ['Đã giao', 'Đang giao', 'Đang sản xuất', 'Chờ xác nhận', 'Giao thất bại'],
    publishLabel: 'Đánh dấu đã giao',
    defaultStatus: 'Chờ xác nhận',
    fields: [
      f('order', 'Mã đơn', 'text', 'content', { required: true, maxLength: 30 }),
      f('customer', 'Khách hàng', 'text', 'content', { required: true, maxLength: 100 }),
      f('phone', 'Điện thoại tra cứu', 'text', 'content', { required: true, maxLength: 20 }),
      f('carrier', 'Đơn vị vận chuyển', 'select', 'content', { options: CARRIERS }),
      f('trackingNo', 'Mã vận đơn', 'text', 'content', { maxLength: 40 }),
      f('eta', 'Dự kiến giao', 'date', 'content'),
      f('timeline', 'Hành trình (mỗi dòng: thời gian – sự kiện)', 'textarea', 'content', { multiline: 4, maxLength: 2000 }),
      f('address', 'Địa chỉ giao', 'textarea', 'display', { multiline: 2, maxLength: 300 }),
      f('installer', 'Thợ lắp đặt', 'text', 'display', { maxLength: 80 }),
      f('notifyCustomer', 'Thông báo khách khi đổi trạng thái', 'switch', 'display'),
      f('status', 'Trạng thái', 'select', 'display', {
        required: true,
        options: ['Đã giao', 'Đang giao', 'Đang sản xuất', 'Chờ xác nhận', 'Giao thất bại'],
      }),
    ],
  },
};

export function getSofa2ShoppingSchema(moduleSlug?: string) {
  return moduleSlug ? SOFA2_SHOPPING_SCHEMAS[moduleSlug] : undefined;
}
