// SOFA2 ADMIN — Lược đồ chi tiết cho module SEO
// Mỗi trang SEO được mô tả bằng: đường dẫn client, nhãn bản ghi,
// nhóm trường (nội dung / SEO / kỹ thuật) và loại biểu đồ.
// ----------------------------------------------------------------------

import type { Sofa2CmsField, Sofa2CmsSchema } from './sofa2-cms';

export type Sofa2SeoChartType = 'bar' | 'horizontal-bar' | 'donut' | 'gauge';

export type Sofa2SeoSchema = Sofa2CmsSchema & {
  chartType: Sofa2SeoChartType;
  chartTitle: string;
  chartSubtitle?: string;
  /** Nhãn cho trục X / danh mục */
  chartCategories?: string[];
  /** Series cho bar / horizontal-bar */
  chartSeries?: { name: string; data: number[] }[];
  /** Nhãn cho donut */
  chartLabels?: string[];
  /** Series cho donut */
  chartDonutData?: number[];
  /** Giá trị gauge (0-100) */
  chartGaugeValue?: number;
  /** Nhãn gauge */
  chartGaugeLabel?: string;
};

// ----------------------------------------------------------------------

const SEO_STATUS = ['Tốt', 'Cần cải thiện', 'Thiếu meta', 'Lỗi'];
const SITEMAP_STATUS = ['Hợp lệ', 'Cảnh báo', 'Lỗi URL'];
const ROBOTS_STATUS = ['Hoạt động', 'Tạm tắt', 'Lỗi cú pháp'];
const SCHEMA_STATUS = ['Hợp lệ', 'Cảnh báo', 'Lỗi'];

const f = (
  key: string,
  label: string,
  type: Sofa2CmsField['type'],
  group: Sofa2CmsField['group'] | 'technical',
  extra: Partial<Sofa2CmsField> = {}
): Sofa2CmsField => ({ key, label, type, group: group as Sofa2CmsField['group'], ...extra });

// ----------------------------------------------------------------------

/** Lược đồ dùng chung cho các trang SEO theo loại trang (danh mục, SP, BST...) */
const seoPageSchema = (
  slug: string,
  pageName: string,
  clientPath: string
): Sofa2SeoSchema => ({
  clientPath,
  entity: 'URL theo dõi',
  titleKey: 'url',
  statusKey: 'status',
  statusOptions: SEO_STATUS,
  defaultStatus: 'Cần cải thiện',
  hideClientLink: true,
  chartType: 'horizontal-bar',
  chartTitle: `Thứ hạng từ khoá — ${pageName}`,
  chartSubtitle: 'Vị trí trung bình trên Google (thấp hơn = tốt hơn)',
  chartCategories: ['sofa scandinavian', 'sofa oslo', 'sofa góc', 'sofa linen', 'sofaIndustrial', 'sofa 3 chỗ'],
  chartSeries: [{ name: 'Thứ hạng', data: [4, 7, 16, 11, 23, 6] }],
  fields: [
    f('url', 'URL', 'text', 'content', { required: true, placeholder: `${clientPath}/...` }),
    f('title', 'Meta title', 'text', 'content', { required: true, maxLength: 60, helper: 'Tối đa 60 ký tự.' }),
    f('description', 'Meta description', 'textarea', 'content', { multiline: 3, maxLength: 160 }),
    f('keyword', 'Từ khoá chính', 'text', 'content', { required: true }),
    f('keyword2', 'Từ khoá phụ', 'text', 'content'),
    f('h1', 'Heading H1', 'text', 'seo'),
    f('canonical', 'Canonical URL', 'url', 'seo', { placeholder: 'https://luxe.vn/...' }),
    f('ogImage', 'Ảnh chia sẻ (OG)', 'url', 'seo', { placeholder: 'https://...' }),
    f('internalLinks', 'Liên kết nội bộ', 'number', 'seo', { helper: 'Số internal link trên trang.' }),
    f('position', 'Thứ hạng Google', 'number', 'technical', { helper: '1 = top 1.' }),
    f('impressions', 'Lượt hiển thị (tháng)', 'number', 'technical'),
    f('clicks', 'Lượt click (tháng)', 'number', 'technical'),
    f('ctr', 'CTR', 'text', 'technical', { placeholder: '3.2%' }),
    f('indexable', 'Cho phép index', 'switch', 'technical'),
    f('status', 'Đánh giá SEO', 'select', 'display', { required: true, options: SEO_STATUS }),
    f('updated', 'Cập nhật', 'date', 'display'),
    f('author', 'Người phụ trách', 'text', 'display'),
  ],
});

// ----------------------------------------------------------------------

const sitemapSchema: Sofa2SeoSchema = {
  clientPath: '/sofa2',
  entity: 'tệp sitemap',
  titleKey: 'file',
  statusKey: 'status',
  statusOptions: SITEMAP_STATUS,
  defaultStatus: 'Hợp lệ',
  hideClientLink: true,
  chartType: 'bar',
  chartTitle: 'Tỷ lệ index theo tệp sitemap',
  chartSubtitle: 'So sánh tổng URL và URL đã được index',
  chartCategories: ['products', 'categories', 'blog', 'pages', 'images'],
  chartSeries: [
    { name: 'Tổng URL', data: [428, 24, 142, 48, 786] },
    { name: 'Đã index', data: [418, 24, 136, 44, 742] },
  ],
  fields: [
    f('file', 'Tệp sitemap', 'text', 'content', { required: true, placeholder: 'sitemap-products.xml' }),
    f('type', 'Loại', 'select', 'content', {
      required: true,
      options: ['URL', 'Images', 'Video', 'News', 'Sitemap index'],
    }),
    f('urls', 'Tổng số URL', 'number', 'content', { required: true }),
    f('indexed', 'Đã index', 'number', 'technical'),
    f('errors', 'URL lỗi', 'number', 'technical'),
    f('lastPing', 'Lần gửi GSC cuối', 'date', 'technical'),
    f('priority', 'Mức độ ưu tiên', 'select', 'technical', {
      options: ['1.0', '0.9', '0.8', '0.7', '0.6', '0.5'],
    }),
    f('changeFreq', 'Tần suất thay đổi', 'select', 'technical', {
      options: ['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'],
    }),
    f('status', 'Trạng thái', 'select', 'display', { required: true, options: SITEMAP_STATUS }),
    f('updated', 'Cập nhật', 'date', 'display'),
  ],
};

// ----------------------------------------------------------------------

const robotsSchema: Sofa2SeoSchema = {
  clientPath: '/sofa2',
  entity: 'quy tắc robots',
  titleKey: 'path',
  statusKey: 'status',
  statusOptions: ROBOTS_STATUS,
  defaultStatus: 'Hoạt động',
  hideClientLink: true,
  chartType: 'donut',
  chartTitle: 'Phân bổ quy tắc robots.txt',
  chartSubtitle: 'Tỷ lệ Allow / Disallow theo user-agent',
  chartLabels: ['Allow (*, )', 'Disallow (*, )', 'Allow Googlebot', 'Disallow Googlebot-Image'],
  chartDonutData: [3, 4, 2, 3],
  fields: [
    f('agent', 'User-agent', 'text', 'content', { required: true, placeholder: '*' }),
    f('rule', 'Quy tắc', 'select', 'content', {
      required: true,
      options: ['Allow', 'Disallow'],
    }),
    f('path', 'Đường dẫn', 'text', 'content', { required: true, placeholder: '/' }),
    f('comment', 'Ghi chú', 'textarea', 'content', { multiline: 2 }),
    f('crawlDelay', 'Crawl-delay (giây)', 'number', 'technical', { helper: '0 = không giới hạn.' }),
    f('status', 'Trạng thái', 'select', 'display', { required: true, options: ROBOTS_STATUS }),
    f('updated', 'Cập nhật', 'date', 'display'),
  ],
};

// ----------------------------------------------------------------------

const schemaMarkupSchema: Sofa2SeoSchema = {
  clientPath: '/sofa2',
  entity: 'loại schema',
  titleKey: 'type',
  statusKey: 'status',
  statusOptions: SCHEMA_STATUS,
  defaultStatus: 'Hợp lệ',
  hideClientLink: true,
  chartType: 'horizontal-bar',
  chartTitle: 'Số URL áp dụng theo loại schema',
  chartSubtitle: 'Phạm vi phủ sóng dữ liệu có cấu trúc',
  chartCategories: ['Product', 'BreadcrumbList', 'Article', 'LocalBusiness', 'FAQPage', 'Organization', 'Review', 'CollectionPage'],
  chartSeries: [{ name: 'URL áp dụng', data: [428, 1248, 142, 12, 1, 1, 86, 24] }],
  fields: [
    f('type', 'Loại schema', 'text', 'content', { required: true, placeholder: 'Product' }),
    f('scope', 'Áp dụng cho', 'select', 'content', {
      required: true,
      options: ['Trang sản phẩm', 'Toàn site', 'Blog', 'Showroom', 'Trang FAQ', 'Trang chủ', 'Trang bộ sưu tập', 'Trang danh mục'],
    }),
    f('urls', 'Số URL áp dụng', 'number', 'content', { required: true }),
    f('jsonld', 'Mẫu JSON-LD', 'textarea', 'technical', {
      multiline: 6,
      helper: 'Dán JSON-LD mẫu cho loại schema này.',
      placeholder: '{ "@context": "https://schema.org", "@type": "Product", ... }',
    }),
    f('validation', 'Kết quả kiểm tra', 'select', 'technical', {
      options: ['Hợp lệ', 'Cảnh báo', 'Lỗi', 'Chưa kiểm tra'],
    }),
    f('warnings', 'Số cảnh báo', 'number', 'technical'),
    f('errors', 'Số lỗi', 'number', 'technical'),
    f('status', 'Trạng thái', 'select', 'display', { required: true, options: SCHEMA_STATUS }),
    f('updated', 'Cập nhật', 'date', 'display'),
  ],
};

// ----------------------------------------------------------------------

export const SOFA2_SEO_SCHEMAS: Record<string, Sofa2SeoSchema> = {
  category: seoPageSchema('category', 'Trang danh mục', '/sofa2/products/category'),
  product: seoPageSchema('product', 'Trang sản phẩm', '/sofa2/products'),
  collection: seoPageSchema('collection', 'Trang bộ sưu tập', '/sofa2/collections'),
  project: seoPageSchema('project', 'Trang dự án', '/sofa2/projects'),
  showroom: seoPageSchema('showroom', 'Trang showroom', '/sofa2/showrooms'),
  blog: seoPageSchema('blog', 'Trang blog', '/sofa2/blog'),
  brand: seoPageSchema('brand', 'Trang thương hiệu', '/sofa2/about'),
  sitemap: sitemapSchema,
  robots: robotsSchema,
  schema: schemaMarkupSchema,
};

export function getSofa2SeoSchema(moduleSlug?: string): Sofa2SeoSchema | undefined {
  return moduleSlug ? SOFA2_SEO_SCHEMAS[moduleSlug] : undefined;
}
