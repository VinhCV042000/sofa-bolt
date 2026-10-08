// SOFA2 ADMIN — Lược đồ chi tiết cho module Marketing
// Mỗi trang marketing được mô tả bằng: nhãn bản ghi, nhóm trường dữ liệu
// (nội dung / đối tượng / lịch trình / hiệu quả) để sinh form thêm-sửa đầy đủ.
// ----------------------------------------------------------------------

import type { Sofa2CmsField, Sofa2CmsSchema } from './sofa2-cms';

export type Sofa2MarketingSchema = Sofa2CmsSchema;

// ----------------------------------------------------------------------

const f = (
  key: string,
  label: string,
  type: Sofa2CmsField['type'],
  group: Sofa2CmsField['group'] | 'audience' | 'schedule' | 'performance',
  extra: Partial<Sofa2CmsField> = {}
): Sofa2CmsField => ({ key, label, type, group: group as Sofa2CmsField['group'], ...extra });

const CAMPAIGN_STATUS = ['Đang chạy', 'Lên lịch', 'Đã gửi', 'Tạm dừng', 'Hết hạn'];

const scheduleFields: Sofa2CmsField[] = [
  f('startDate', 'Ngày bắt đầu', 'date', 'schedule'),
  f('endDate', 'Ngày kết thúc', 'date', 'schedule'),
  f('status', 'Trạng thái', 'select', 'schedule', {
    required: true,
    options: CAMPAIGN_STATUS,
  }),
];

const perfFields: Sofa2CmsField[] = [
  f('sent', 'Số lượng gửi', 'number', 'performance'),
  f('openRate', 'Tỷ lệ mở', 'text', 'performance', { placeholder: '40%' }),
  f('clickRate', 'Tỷ lệ click', 'text', 'performance', { placeholder: '6.4%' }),
  f('revenue', 'Doanh thu quy đổi (₫)', 'number', 'performance'),
];

// ----------------------------------------------------------------------

const emailSchema: Sofa2MarketingSchema = {
  clientPath: '/sofa2',
  entity: 'chiến dịch email',
  titleKey: 'campaign',
  statusKey: 'status',
  statusOptions: CAMPAIGN_STATUS,
  defaultStatus: 'Lên lịch',
  hideClientLink: true,
  fields: [
    f('campaign', 'Tên chiến dịch', 'text', 'content', { required: true }),
    f('subject', 'Tiêu đề email', 'text', 'content', { required: true, maxLength: 90 }),
    f('preheader', 'Dòng xem trước', 'text', 'content', { maxLength: 120 }),
    f('template', 'Mẫu giao diện', 'select', 'content', {
      options: ['Newsletter', 'Khuyến mãi', 'Chào mừng', 'Nhắc giỏ hàng', 'Sinh nhật', 'Tin sản phẩm'],
    }),
    f('content', 'Nội dung email', 'textarea', 'content', { multiline: 6 }),
    f('segment', 'Tệp người nhận', 'select', 'audience', {
      required: true,
      options: [
        'Toàn bộ khách',
        'Khách VIP',
        'Khách mới 30 ngày',
        'Quan tâm sofa vải',
        'Quan tâm sofa da',
        'Giỏ hàng bỏ quên',
        'Tự động (kịch bản)',
      ],
    }),
    f('recipients', 'Số người nhận dự kiến', 'number', 'audience'),
    ...scheduleFields,
    ...perfFields,
  ],
};

const smsSchema: Sofa2MarketingSchema = {
  clientPath: '/sofa2',
  entity: 'chiến dịch SMS',
  titleKey: 'campaign',
  statusKey: 'status',
  statusOptions: CAMPAIGN_STATUS,
  defaultStatus: 'Lên lịch',
  hideClientLink: true,
  fields: [
    f('campaign', 'Tên chiến dịch', 'text', 'content', { required: true }),
    f('message', 'Nội dung tin nhắn', 'textarea', 'content', {
      required: true,
      multiline: 3,
      maxLength: 160,
      helper: 'Tối đa 160 ký tự cho SMS chuẩn.',
    }),
    f('brandname', 'Brandname', 'select', 'content', {
      options: ['LUXE', 'LUXESOFA', 'LUXEFURN'],
    }),
    f('segment', 'Tệp gửi', 'select', 'audience', {
      required: true,
      options: [
        'Khách HCM + HN',
        'Khách toàn quốc',
        'Khách VIP',
        'Khách mua 6 tháng gần nhất',
        'Tự động (kịch bản)',
      ],
    }),
    f('recipients', 'Số người nhận dự kiến', 'number', 'audience'),
    f('cost', 'Chi phí dự kiến (₫)', 'number', 'audience'),
    ...scheduleFields,
    ...perfFields,
  ],
};

const pushSchema: Sofa2MarketingSchema = {
  clientPath: '/sofa2',
  entity: 'thông báo đẩy',
  titleKey: 'title',
  statusKey: 'status',
  statusOptions: CAMPAIGN_STATUS,
  defaultStatus: 'Lên lịch',
  hideClientLink: true,
  fields: [
    f('title', 'Tiêu đề thông báo', 'text', 'content', { required: true, maxLength: 50 }),
    f('body', 'Nội dung thông báo', 'textarea', 'content', {
      required: true,
      multiline: 2,
      maxLength: 120,
    }),
    f('url', 'Liên kết khi bấm', 'url', 'content', { placeholder: '/sofa2/products' }),
    f('icon', 'Icon (URL)', 'url', 'content'),
    f('image', 'Ảnh đính kèm (URL)', 'url', 'content'),
    f('trigger', 'Kích hoạt', 'select', 'audience', {
      required: true,
      options: ['Thủ công', 'Hành vi xem SP', 'Giỏ hàng bỏ quên', 'Vị trí gần showroom', 'Lịch trình'],
    }),
    f('platform', 'Nền tảng', 'select', 'audience', {
      options: ['Tất cả', 'Web', 'iOS', 'Android'],
    }),
    f('reach', 'Số người tiếp cận dự kiến', 'number', 'audience'),
    ...scheduleFields,
    ...perfFields,
  ],
};

const couponSchema: Sofa2MarketingSchema = {
  clientPath: '/sofa2',
  entity: 'mã giảm giá',
  titleKey: 'code',
  statusKey: 'status',
  statusOptions: ['Đang chạy', 'Lên lịch', 'Tạm dừng', 'Hết hạn'],
  defaultStatus: 'Lên lịch',
  hideClientLink: true,
  fields: [
    f('code', 'Mã giảm giá', 'text', 'content', {
      required: true,
      placeholder: 'THU25',
      helper: 'Chỉ chữ hoa, số và dấu gạch ngang.',
    }),
    f('value', 'Giá trị ưu đãi', 'text', 'content', {
      required: true,
      placeholder: 'Giảm 25% / Miễn phí giao lắp / Giảm 3 triệu',
    }),
    f('discountType', 'Loại giảm giá', 'select', 'content', {
      options: ['Phần trăm (%)', 'Số tiền cố định (₫)', 'Miễn phí vận chuyển', 'Quà tặng kèm'],
    }),
    f('discountValue', 'Giá trị số', 'number', 'content', { helper: '25 cho 25%, 3000000 cho 3 triệu.' }),
    f('condition', 'Điều kiện áp dụng', 'text', 'content', { placeholder: 'Đơn từ 15 triệu' }),
    f('minOrder', 'Giá trị đơn tối thiểu (₫)', 'number', 'audience'),
    f('maxUsage', 'Số lượt dùng tối đa', 'number', 'audience', { helper: '0 = không giới hạn.' }),
    f('used', 'Số lượt đã dùng', 'number', 'performance'),
    f('appliesTo', 'Áp dụng cho', 'select', 'audience', {
      options: ['Tất cả sản phẩm', 'Bộ sưu tập Scandinavian', 'Bộ sưu tập Industrial', 'Bộ sưu tập Mid-Century', 'Sản phẩm chọn lọc'],
    }),
    f('customerTier', 'Hạng khách hàng', 'select', 'audience', {
      options: ['Tất cả', 'Vàng', 'Bạc', 'Thường', 'Đại lý'],
    }),
    ...scheduleFields,
  ],
};

const affiliateSchema: Sofa2MarketingSchema = {
  clientPath: '/sofa2',
  entity: 'cộng tác viên',
  titleKey: 'partner',
  statusKey: 'status',
  statusOptions: ['Đang hợp tác', 'Chờ duyệt', 'Tạm ngừng', 'Chờ đối soát', 'Ngừng hợp tác'],
  defaultStatus: 'Chờ duyệt',
  hideClientLink: true,
  fields: [
    f('partner', 'Tên cộng tác viên', 'text', 'content', { required: true }),
    f('channel', 'Kênh phân phối', 'select', 'content', {
      required: true,
      options: ['YouTube', 'TikTok', 'Instagram', 'Blog', 'Facebook', 'Website', 'Email list'],
    }),
    f('refCode', 'Mã giới thiệu', 'text', 'content', { placeholder: 'LUXE-DANIEL' }),
    f('link', 'Link affiliate', 'url', 'content', { placeholder: 'https://...' }),
    f('commissionRate', 'Tỷ lệ hoa hồng (%)', 'number', 'content', { required: true }),
    f('contactName', 'Người liên hệ', 'text', 'audience'),
    f('contactPhone', 'Số điện thoại', 'text', 'audience'),
    f('contactEmail', 'Email', 'text', 'audience'),
    f('orders', 'Số đơn giới thiệu', 'number', 'performance'),
    f('commission', 'Hoa hồng đã trả (₫)', 'number', 'performance'),
    f('revenue', 'Doanh thu mang về (₫)', 'number', 'performance'),
    f('status', 'Trạng thái', 'select', 'schedule', {
      required: true,
      options: ['Đang hợp tác', 'Chờ duyệt', 'Tạm ngừng', 'Chờ đối soát', 'Ngừng hợp tác'],
    }),
    f('joinedDate', 'Ngày tham gia', 'date', 'schedule'),
  ],
};

// ----------------------------------------------------------------------

export const SOFA2_MARKETING_SCHEMAS: Record<string, Sofa2MarketingSchema> = {
  email: emailSchema,
  sms: smsSchema,
  push: pushSchema,
  coupon: couponSchema,
  affiliate: affiliateSchema,
};

export function getSofa2MarketingSchema(moduleSlug?: string): Sofa2MarketingSchema | undefined {
  return moduleSlug ? SOFA2_MARKETING_SCHEMAS[moduleSlug] : undefined;
}
