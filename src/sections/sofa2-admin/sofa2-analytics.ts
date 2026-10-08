// SOFA2 ADMIN — Lược đồ chi tiết cho module Analytics
// Mỗi trang analytics được mô tả bằng: nhãn bản ghi, nhóm trường dữ liệu
// (dữ liệu / phân khúc / đánh giá) và loại biểu đồ để sinh form + chart đầy đủ.
// ----------------------------------------------------------------------

import type { Sofa2CmsField, Sofa2CmsSchema } from './sofa2-cms';

export type Sofa2AnalyticsChartType = 'line' | 'bar' | 'horizontal-bar' | 'donut' | 'area' | 'funnel';

export type Sofa2AnalyticsSchema = Sofa2CmsSchema & {
  /** Loại biểu đồ hiển thị phía trên bảng dữ liệu */
  chartType: Sofa2AnalyticsChartType;
  /** Tiêu đề biểu đồ */
  chartTitle: string;
  /** Mô tả phụ cho biểu đồ */
  chartSubtitle?: string;
  /** Nhãn cho trục X / danh mục */
  chartCategories?: string[];
  /** Series dữ liệu biểu đồ: [{ name, data }] */
  chartSeries: { name: string; data: number[] }[];
  /** Nhãn cho donut chart */
  chartLabels?: string[];
};

// ----------------------------------------------------------------------

const f = (
  key: string,
  label: string,
  type: Sofa2CmsField['type'],
  group: Sofa2CmsField['group'] | 'audience' | 'performance',
  extra: Partial<Sofa2CmsField> = {}
): Sofa2CmsField => ({ key, label, type, group: group as Sofa2CmsField['group'], ...extra });

const ANALYTICS_STATUS = ['Đang theo dõi', 'Cần cải thiện', 'Tạm dừng', 'Ngừng theo dõi'];

// ----------------------------------------------------------------------

const revenueSchema: Sofa2AnalyticsSchema = {
  clientPath: '/sofa2',
  entity: 'kênh doanh thu',
  titleKey: 'channel',
  statusKey: 'status',
  statusOptions: ANALYTICS_STATUS,
  defaultStatus: 'Đang theo dõi',
  hideClientLink: true,
  chartType: 'line',
  chartTitle: 'Doanh thu theo tháng',
  chartSubtitle: 'Doanh thu thực tế so với mục tiêu (tỷ đồng)',
  chartCategories: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
  chartSeries: [
    { name: 'Doanh thu (tỷ)', data: [3.2, 3.6, 4.0, 4.2, 4.6, 4.8, 5.4, 5.8, 6.2, 5.6, 6.0, 6.8] },
    { name: 'Mục tiêu (tỷ)', data: [3.4, 3.8, 4.2, 4.4, 4.8, 5.0, 5.4, 5.8, 6.2, 6.6, 7.0, 7.4] },
  ],
  fields: [
    f('channel', 'Kênh bán', 'text', 'content', { required: true }),
    f('channelType', 'Loại kênh', 'select', 'content', {
      options: ['Website', 'Showroom', 'Đại lý B2B', 'Sàn TMĐT', 'Mạng xã hội', 'Telegram'],
    }),
    f('orders', 'Số đơn hàng', 'number', 'content', { required: true }),
    f('revenue', 'Doanh thu (₫)', 'number', 'content', { required: true }),
    f('share', 'Tỷ trọng (%)', 'text', 'performance', { placeholder: '43%' }),
    f('growth', 'Tăng trưởng', 'text', 'performance', { placeholder: '+16%' }),
    f('aov', 'AOV (₫)', 'number', 'performance'),
    f('status', 'Trạng thái', 'select', 'display', {
      required: true,
      options: ANALYTICS_STATUS,
    }),
    f('updated', 'Cập nhật', 'date', 'display'),
  ],
};

const bestSellersSchema: Sofa2AnalyticsSchema = {
  clientPath: '/sofa2',
  entity: 'sản phẩm bán chạy',
  titleKey: 'product',
  statusKey: 'status',
  statusOptions: ANALYTICS_STATUS,
  defaultStatus: 'Đang theo dõi',
  hideClientLink: true,
  chartType: 'horizontal-bar',
  chartTitle: 'Top sản phẩm theo số lượng bán',
  chartSubtitle: 'Số lượng bán trong 90 ngày gần nhất',
  chartCategories: ['Sofa Oslo 3S', 'Sofa Berlin Góc', 'Sofa Copenhagen', 'Sofa Munich 2C', 'Sofa Helsinki', 'Sofa Tokyo Đơn'],
  chartSeries: [{ name: 'Đã bán', data: [86, 72, 48, 44, 32, 28] }],
  fields: [
    f('product', 'Tên sản phẩm', 'text', 'content', { required: true }),
    f('sku', 'Mã SKU', 'text', 'content'),
    f('category', 'Danh mục', 'select', 'content', {
      options: ['Scandinavian', 'Industrial Loft', 'Mid-Century', 'Sofa góc', 'Sofa đơn'],
    }),
    f('sold', 'Số lượng đã bán', 'number', 'content', { required: true }),
    f('revenue', 'Doanh thu (₫)', 'number', 'content', { required: true }),
    f('stock', 'Tồn kho', 'number', 'performance'),
    f('turnover', 'Vòng quay tồn', 'text', 'performance', { placeholder: '4.2' }),
    f('status', 'Trạng thái', 'select', 'display', {
      required: true,
      options: ANALYTICS_STATUS,
    }),
    f('updated', 'Cập nhật', 'date', 'display'),
  ],
};

const trafficSchema: Sofa2AnalyticsSchema = {
  clientPath: '/sofa2',
  entity: 'nguồn truy cập',
  titleKey: 'source',
  statusKey: 'status',
  statusOptions: ANALYTICS_STATUS,
  defaultStatus: 'Đang theo dõi',
  hideClientLink: true,
  chartType: 'donut',
  chartTitle: 'Tỷ trọng phiên theo nguồn',
  chartSubtitle: 'Phân bổ lưu lượng truy cập (%)',
  chartLabels: ['Organic Search', 'Paid Social', 'Direct', 'Referral', 'Email'],
  chartSeries: [{ name: 'Phiên', data: [128000, 62400, 48800, 24800, 19800] }],
  fields: [
    f('source', 'Nguồn truy cập', 'text', 'content', { required: true }),
    f('sourceType', 'Loại nguồn', 'select', 'content', {
      options: ['Organic Search', 'Paid Search', 'Paid Social', 'Organic Social', 'Direct', 'Referral', 'Email', 'Affiliate'],
    }),
    f('sessions', 'Số phiên', 'number', 'content', { required: true }),
    f('users', 'Người dùng', 'number', 'performance'),
    f('newUsers', 'Người dùng mới', 'number', 'performance'),
    f('bounce', 'Tỷ lệ thoát', 'text', 'performance', { placeholder: '38%' }),
    f('avgTime', 'Thời gian TB', 'text', 'performance', { placeholder: '3:12' }),
    f('conversion', 'Tỷ lệ chuyển đổi', 'text', 'performance', { placeholder: '2.4%' }),
    f('status', 'Trạng thái', 'select', 'display', {
      required: true,
      options: ANALYTICS_STATUS,
    }),
    f('updated', 'Cập nhật', 'date', 'display'),
  ],
};

const behaviorSchema: Sofa2AnalyticsSchema = {
  clientPath: '/sofa2',
  entity: 'bước hành trình',
  titleKey: 'step',
  statusKey: 'status',
  statusOptions: ANALYTICS_STATUS,
  defaultStatus: 'Đang theo dõi',
  hideClientLink: true,
  chartType: 'funnel',
  chartTitle: 'Phễu hành vi khách hàng',
  chartSubtitle: 'Số người dùng qua từng bước hành trình',
  chartCategories: ['Trang chủ', 'Danh mục', 'Chi tiết SP', 'Thêm giỏ', 'Thanh toán'],
  chartSeries: [{ name: 'Người dùng', data: [284000, 221000, 155000, 18600, 5240] }],
  fields: [
    f('step', 'Bước hành trình', 'text', 'content', { required: true }),
    f('stepOrder', 'Thứ tự bước', 'number', 'content', { required: true, helper: '1 = bước đầu tiên.' }),
    f('page', 'Trang tương ứng', 'text', 'content', { placeholder: '/sofa2/products' }),
    f('users', 'Số người dùng', 'number', 'content', { required: true }),
    f('drop', 'Tỷ lệ rời bỏ', 'text', 'performance', { placeholder: '22%' }),
    f('time', 'Thời gian TB', 'text', 'performance', { placeholder: '0:48' }),
    f('pageviews', 'Lượt xem trang', 'number', 'performance'),
    f('status', 'Trạng thái', 'select', 'display', {
      required: true,
      options: ANALYTICS_STATUS,
    }),
    f('updated', 'Cập nhật', 'date', 'display'),
  ],
};

const conversionSchema: Sofa2AnalyticsSchema = {
  clientPath: '/sofa2',
  entity: 'phân khúc chuyển đổi',
  titleKey: 'segment',
  statusKey: 'status',
  statusOptions: ANALYTICS_STATUS,
  defaultStatus: 'Đang theo dõi',
  hideClientLink: true,
  chartType: 'bar',
  chartTitle: 'Tỷ lệ chuyển đổi theo phân khúc',
  chartSubtitle: 'So sánh CR giữa các kênh và thiết bị',
  chartCategories: ['Mobile – Organic', 'Desktop – Organic', 'Email remarketing', 'Tư vấn showroom', 'Paid Social'],
  chartSeries: [{ name: 'CR (%)', data: [1.52, 2.78, 4.8, 11.4, 1.6] }],
  fields: [
    f('segment', 'Phân khúc', 'text', 'content', { required: true }),
    f('device', 'Thiết bị', 'select', 'content', {
      options: ['Mobile', 'Desktop', 'Tablet', 'Tất cả'],
    }),
    f('channel', 'Kênh', 'select', 'content', {
      options: ['Organic', 'Paid', 'Email', 'Showroom', 'Direct', 'Social'],
    }),
    f('sessions', 'Số phiên', 'number', 'content', { required: true }),
    f('orders', 'Số đơn hàng', 'number', 'content', { required: true }),
    f('cr', 'Tỷ lệ chuyển đổi', 'text', 'performance', { placeholder: '1.96%' }),
    f('revenue', 'Doanh thu (₫)', 'number', 'performance'),
    f('cpa', 'Chi phí mỗi đơn (₫)', 'number', 'performance'),
    f('status', 'Trạng thái', 'select', 'display', {
      required: true,
      options: ANALYTICS_STATUS,
    }),
    f('updated', 'Cập nhật', 'date', 'display'),
  ],
};

// ----------------------------------------------------------------------

export const SOFA2_ANALYTICS_SCHEMAS: Record<string, Sofa2AnalyticsSchema> = {
  revenue: revenueSchema,
  'best-sellers': bestSellersSchema,
  traffic: trafficSchema,
  behavior: behaviorSchema,
  conversion: conversionSchema,
};

export function getSofa2AnalyticsSchema(moduleSlug?: string): Sofa2AnalyticsSchema | undefined {
  return moduleSlug ? SOFA2_ANALYTICS_SCHEMAS[moduleSlug] : undefined;
}
