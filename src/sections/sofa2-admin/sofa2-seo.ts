// SOFA2 ADMIN — Lược đồ chi tiết cho module SEO
// Mỗi trang SEO được mô tả bằng: đường dẫn client, nhãn bản ghi,
// nhóm trường (nội dung / SEO / kỹ thuật) và loại biểu đồ.
// ----------------------------------------------------------------------

import type { Sofa2CmsField, Sofa2CmsSchema } from './sofa2-cms';

export type Sofa2SeoChartType = 'bar' | 'horizontal-bar' | 'donut' | 'gauge';

export type Sofa2SeoKind = 'page' | 'sitemap' | 'robots' | 'schema';

export type Sofa2SeoSchema = Sofa2CmsSchema & {
  /** Loại công cụ SEO: trang nội dung, sitemap, robots, schema */
  kind?: Sofa2SeoKind;
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
const SITEMAP_STATUS = ['Hợp lệ', 'Cảnh báo', 'Lỗi URL', 'Tạm tắt'];
const ROBOTS_STATUS = ['Hoạt động', 'Tạm tắt', 'Lỗi cú pháp'];
const SCHEMA_STATUS = ['Hợp lệ', 'Chưa kiểm tra', 'Cảnh báo', 'Lỗi'];
const SCHEMA_TYPES = [
  'Product',
  'CollectionPage',
  'Article',
  'LocalBusiness',
  'FurnitureStore',
  'Organization',
  'Brand',
  'WebPage',
  'WebSite',
  'BreadcrumbList',
  'FAQPage',
  'CreativeWork',
];

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
  clientPath: string,
  extra: Sofa2CmsField[] = []
): Sofa2SeoSchema => ({
  kind: 'page',
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
  chartCategories: [],
  chartSeries: [{ name: 'Thứ hạng Google', data: [] }],
  fields: [
    f('url', 'URL', 'text', 'content', { required: true, placeholder: `${clientPath}/...` }),
    f('title', 'Meta title', 'text', 'content', { required: true, maxLength: 60, helper: 'Tối đa 60 ký tự.' }),
    f('description', 'Meta description', 'textarea', 'content', { multiline: 3, maxLength: 160 }),
    f('keyword', 'Từ khoá chính', 'text', 'content', { required: true }),
    f('keyword2', 'Từ khoá phụ', 'text', 'content'),
    f('h1', 'Heading H1', 'text', 'seo', {
      helper: 'Thay nội dung H1 đầu tiên trên trang khách khi bản ghi được xuất bản.',
    }),
    f('canonical', 'Canonical URL', 'url', 'seo', { placeholder: 'https://luxesofa.vn/sofa2/...' }),
    f('ogImage', 'Ảnh chia sẻ (OG)', 'url', 'seo', { placeholder: 'https://...' }),
    f('ogTitle', 'Open Graph title', 'text', 'seo', { maxLength: 90 }),
    f('ogDescription', 'Open Graph description', 'textarea', 'seo', { multiline: 2, maxLength: 200 }),
    f('internalLinks', 'Liên kết nội bộ', 'number', 'seo', { helper: 'Số internal link trên trang.' }),
    f('position', 'Thứ hạng Google', 'number', 'technical', {
      helper: 'Nhập từ Google Search Console; chưa tự đồng bộ.',
    }),
    f('impressions', 'Lượt hiển thị (tháng)', 'number', 'technical', {
      helper: 'Nhập từ Google Search Console; chưa tự đồng bộ.',
    }),
    f('clicks', 'Lượt click (tháng)', 'number', 'technical', {
      helper: 'Nhập từ Google Search Console; chưa tự đồng bộ.',
    }),
    f('ctr', 'CTR', 'text', 'technical', {
      placeholder: '3.2%',
      helper: 'Nhập từ Google Search Console; chưa tự đồng bộ.',
    }),
    f('indexable', 'Cho phép index', 'switch', 'technical'),
    f('follow', 'Cho phép follow liên kết', 'switch', 'technical'),
    f('inSitemap', 'Đưa vào sitemap', 'switch', 'technical'),
    f('redirect', 'URL chuyển hướng dự kiến', 'text', 'technical', {
      placeholder: '/sofa2/duong-dan-moi',
      helper: 'Đường dẫn nội bộ; chuyển hướng thật cần được triển khai ở máy chủ.',
    }),
    ...extra,
    f('status', 'Đánh giá SEO', 'select', 'display', { required: true, options: SEO_STATUS }),
    f('updated', 'Cập nhật', 'date', 'display'),
    f('author', 'Người phụ trách', 'text', 'display'),
  ],
});

// ----------------------------------------------------------------------

const sitemapSchema: Sofa2SeoSchema = {
  kind: 'sitemap',
  clientPath: '/sofa2',
  entity: 'tệp sitemap',
  titleKey: 'file',
  statusKey: 'status',
  statusOptions: SITEMAP_STATUS,
  defaultStatus: 'Tạm tắt',
  hideClientLink: true,
  chartType: 'bar',
  chartTitle: 'URL đủ điều kiện đưa vào sitemap theo nhóm',
  chartSubtitle: 'Đếm từ các trang đã bật index và sitemap; không giả lập số liệu Search Console',
  chartCategories: ['pages', 'categories', 'products', 'collections', 'projects', 'showrooms', 'blog'],
  chartSeries: [
    { name: 'Trang được quản lý', data: [0, 0, 0, 0, 0, 0, 0] },
    { name: 'Đưa vào sitemap', data: [0, 0, 0, 0, 0, 0, 0] },
  ],
  fields: [
    f('file', 'Tệp sitemap', 'select', 'content', {
      required: true,
      options: [
        'sitemap-pages.xml',
        'sitemap-categories.xml',
        'sitemap-products.xml',
        'sitemap-collections.xml',
        'sitemap-projects.xml',
        'sitemap-showrooms.xml',
        'sitemap-blog.xml',
      ],
    }),
    f('status', 'Trạng thái', 'select', 'display', { required: true, options: SITEMAP_STATUS }),
    f('updated', 'Cập nhật', 'date', 'display'),
  ],
};

// ----------------------------------------------------------------------

const robotsSchema: Sofa2SeoSchema = {
  kind: 'robots',
  clientPath: '/sofa2',
  entity: 'quy tắc robots',
  titleKey: 'path',
  statusKey: 'status',
  statusOptions: ROBOTS_STATUS,
  defaultStatus: 'Tạm tắt',
  hideClientLink: true,
  chartType: 'donut',
  chartTitle: 'Phân bổ quy tắc robots.txt',
  chartSubtitle: 'Tỷ lệ Allow / Disallow theo user-agent',
  chartLabels: ['Allow', 'Disallow'],
  chartDonutData: [0, 0],
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
  kind: 'schema',
  clientPath: '/sofa2',
  entity: 'loại schema',
  titleKey: 'type',
  statusKey: 'status',
  statusOptions: SCHEMA_STATUS,
  defaultStatus: 'Chưa kiểm tra',
  hideClientLink: true,
  chartType: 'horizontal-bar',
  chartTitle: 'Số URL áp dụng theo loại schema',
  chartSubtitle: 'Phạm vi phủ sóng dữ liệu có cấu trúc',
  chartCategories: [],
  chartSeries: [{ name: 'URL áp dụng', data: [] }],
  fields: [
    f('type', 'Loại schema', 'select', 'content', { required: true, options: SCHEMA_TYPES }),
    f('scope', 'Áp dụng cho', 'select', 'content', {
      required: true,
      options: [
        'Toàn site',
        'Trang sản phẩm',
        'Trang danh mục',
        'Trang bộ sưu tập',
        'Trang dự án',
        'Showroom',
        'Blog',
        'Trang FAQ',
        'Trang chủ',
        'Trang thương hiệu',
      ],
    }),
    f('url', 'URL cụ thể (không bắt buộc)', 'text', 'content', { placeholder: '/sofa2/products/1' }),
    f('urls', 'Số URL khai báo', 'number', 'content', {
      required: true,
      helper: 'Số tham khảo do quản trị viên nhập; chưa đồng bộ Search Console.',
    }),
    f('jsonld', 'Mẫu JSON-LD', 'textarea', 'technical', {
      required: true,
      multiline: 6,
      helper: 'Dán JSON-LD mẫu cho loại schema này.',
      placeholder: '{ "@context": "https://schema.org", "@type": "Product", ... }',
    }),
    f('validation', 'Kết quả kiểm tra', 'select', 'technical', {
      required: true,
      options: ['Hợp lệ', 'Cảnh báo', 'Lỗi', 'Chưa kiểm tra'],
    }),
    f('warnings', 'Số cảnh báo', 'number', 'technical'),
    f('errors', 'Số lỗi', 'number', 'technical'),
    f('status', 'Trạng thái', 'select', 'display', { required: true, options: SCHEMA_STATUS }),
    f('updated', 'Cập nhật', 'date', 'display'),
  ],
};

// ----------------------------------------------------------------------

const typeField = (def: string) =>
  f('schemaType', 'Loại schema áp dụng', 'select', 'seo', { options: SCHEMA_TYPES, helper: `Đề xuất: ${def}` });

export const SOFA2_SEO_SCHEMAS: Record<string, Sofa2SeoSchema> = {
  category: seoPageSchema('category', 'Trang danh mục', '/sofa2/products', [
    typeField('CollectionPage'),
    f('productCount', 'Số sản phẩm trong danh mục', 'number', 'seo'),
    f('breadcrumb', 'Breadcrumb', 'text', 'seo', { placeholder: 'Trang chủ > Sofa > Sofa góc' }),
  ]),
  product: seoPageSchema('product', 'Trang sản phẩm', '/sofa2/products', [
    typeField('Product'),
    f('sku', 'SKU', 'text', 'seo'),
    f('price', 'Giá hiển thị (đ)', 'number', 'seo'),
    f('availability', 'Tình trạng hàng', 'select', 'seo', { options: ['InStock', 'OutOfStock', 'PreOrder'] }),
    f('imageAlt', 'Alt ảnh chính', 'text', 'seo'),
  ]),
  collection: seoPageSchema('collection', 'Trang bộ sưu tập', '/sofa2/collections', [
    typeField('CollectionPage'),
    f('season', 'Mùa / năm', 'text', 'seo', { placeholder: 'Thu Đông 2026' }),
  ]),
  project: seoPageSchema('project', 'Trang dự án', '/sofa2/projects', [
    typeField('Article'),
    f('location', 'Địa điểm dự án', 'text', 'seo'),
    f('gallery', 'Số ảnh có alt', 'number', 'seo'),
  ]),
  showroom: seoPageSchema('showroom', 'Trang showroom', '/sofa2/showrooms', [
    typeField('LocalBusiness'),
    f('address', 'Địa chỉ (NAP)', 'text', 'seo'),
    f('phone', 'Số điện thoại', 'text', 'seo'),
    f('hours', 'Giờ mở cửa', 'text', 'seo', { placeholder: 'Mo-Su 09:00-21:00' }),
    f('mapUrl', 'Google Maps URL', 'url', 'seo'),
  ]),
  blog: seoPageSchema('blog', 'Trang blog', '/sofa2/blog', [
    typeField('Article'),
    f('postAuthor', 'Tác giả bài viết', 'text', 'seo'),
    f('published', 'Ngày xuất bản', 'date', 'seo'),
    f('readTime', 'Thời gian đọc (phút)', 'number', 'seo'),
  ]),
  brand: seoPageSchema('brand', 'Trang thương hiệu', '/sofa2/about', [
    typeField('Organization'),
    f('logo', 'Logo URL', 'url', 'seo'),
    f('sameAs', 'Mạng xã hội (sameAs)', 'textarea', 'seo', { multiline: 2, helper: 'Mỗi dòng một URL.' }),
  ]),
  sitemap: sitemapSchema,
  robots: robotsSchema,
  schema: schemaMarkupSchema,
};

export function getSofa2SeoSchema(moduleSlug?: string): Sofa2SeoSchema | undefined {
  return moduleSlug ? SOFA2_SEO_SCHEMAS[moduleSlug] : undefined;
}
