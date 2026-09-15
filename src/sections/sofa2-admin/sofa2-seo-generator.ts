// ----------------------------------------------------------------------
// SOFA2 ADMIN — Tự sinh sitemap.xml, robots.txt và schema JSON-LD
// Dữ liệu lấy trực tiếp từ nội dung website sofa2 (sản phẩm, danh mục,
// bộ sưu tập, dự án, showroom, blog) nên luôn khớp với các trang thực tế.
// ----------------------------------------------------------------------

import {
  SOFA2_BLOG_POSTS,
  SOFA2_PROJECTS,
  SOFA2_PRODUCTS,
  SOFA2_SHOWROOMS,
  SOFA2_COLLECTIONS,
  SOFA2_COMPANY_INFO,
  SOFA2_PRODUCT_CATEGORIES,
} from 'src/sections/sofa2/sofa2-pages-data';

// ----------------------------------------------------------------------

export const SOFA2_SITE_ORIGIN = 'https://luxesofa.vn';

export type Sofa2SeoScope =
  | 'product'
  | 'category'
  | 'collection'
  | 'project'
  | 'showroom'
  | 'blog'
  | 'brand'
  | 'all';

export type Sofa2SeoEntry = {
  loc: string;
  title: string;
  changefreq: 'daily' | 'weekly' | 'monthly';
  priority: string;
};

const abs = (path: string) => `${SOFA2_SITE_ORIGIN}${path}`;

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

// ----------------------------------------------------------------------
// URL theo từng nhóm trang
// ----------------------------------------------------------------------

const productEntries = (): Sofa2SeoEntry[] =>
  SOFA2_PRODUCTS.map((item) => ({
    loc: `/sofa2/products/${item.slug}`,
    title: item.name,
    changefreq: 'weekly' as const,
    priority: '0.9',
  }));

const categoryEntries = (): Sofa2SeoEntry[] => {
  const groups: { key: keyof typeof SOFA2_PRODUCT_CATEGORIES; label: string }[] = [
    { key: 'types', label: 'Kiểu dáng' },
    { key: 'styles', label: 'Phong cách' },
    { key: 'spaces', label: 'Không gian' },
    { key: 'sizes', label: 'Kích thước' },
    { key: 'prices', label: 'Mức giá' },
  ];

  return groups.flatMap(({ key, label }) =>
    SOFA2_PRODUCT_CATEGORIES[key].map((cat) => ({
      loc: `/sofa2/products/category/${cat.slug}`,
      title: `${cat.label} – ${label}`,
      changefreq: 'weekly' as const,
      priority: '0.8',
    }))
  );
};

const collectionEntries = (): Sofa2SeoEntry[] =>
  SOFA2_COLLECTIONS.map((item) => ({
    loc: `/sofa2/collections/${item.slug}`,
    title: item.name,
    changefreq: 'weekly' as const,
    priority: '0.7',
  }));

const projectEntries = (): Sofa2SeoEntry[] =>
  SOFA2_PROJECTS.map((item) => ({
    loc: `/sofa2/projects/${item.id}`,
    title: item.name,
    changefreq: 'monthly' as const,
    priority: '0.7',
  }));

const showroomEntries = (): Sofa2SeoEntry[] =>
  SOFA2_SHOWROOMS.map((item: any) => ({
    loc: `/sofa2/showrooms/${item.slug ?? item.id}`,
    title: item.name ?? item.city ?? 'Showroom',
    changefreq: 'monthly' as const,
    priority: '0.6',
  }));

const blogEntries = (): Sofa2SeoEntry[] =>
  SOFA2_BLOG_POSTS.map((item) => ({
    loc: `/sofa2/blog/${item.slug}`,
    title: item.title,
    changefreq: 'monthly' as const,
    priority: '0.6',
  }));

const brandEntries = (): Sofa2SeoEntry[] => [
  { loc: '/sofa2', title: 'Trang chủ', changefreq: 'daily', priority: '1.0' },
  { loc: '/sofa2/about', title: 'Giới thiệu', changefreq: 'monthly', priority: '0.7' },
  { loc: '/sofa2/services', title: 'Dịch vụ', changefreq: 'monthly', priority: '0.6' },
  { loc: '/sofa2/promotions', title: 'Khuyến mãi', changefreq: 'weekly', priority: '0.6' },
  { loc: '/sofa2/contact', title: 'Liên hệ', changefreq: 'monthly', priority: '0.5' },
];

export function getSofa2SeoEntries(scope: Sofa2SeoScope): Sofa2SeoEntry[] {
  switch (scope) {
    case 'product':
      return productEntries();
    case 'category':
      return categoryEntries();
    case 'collection':
      return collectionEntries();
    case 'project':
      return projectEntries();
    case 'showroom':
      return showroomEntries();
    case 'blog':
      return blogEntries();
    case 'brand':
      return brandEntries();
    default:
      return [
        ...brandEntries(),
        ...categoryEntries(),
        ...productEntries(),
        ...collectionEntries(),
        ...projectEntries(),
        ...showroomEntries(),
        ...blogEntries(),
      ];
  }
}

// ----------------------------------------------------------------------
// Sitemap
// ----------------------------------------------------------------------

export function buildSofa2Sitemap(scope: Sofa2SeoScope): string {
  const entries = getSofa2SeoEntries(scope);

  const urls = entries
    .map(
      (entry) =>
        [
          '  <url>',
          `    <loc>${escapeXml(abs(entry.loc))}</loc>`,
          `    <changefreq>${entry.changefreq}</changefreq>`,
          `    <priority>${entry.priority}</priority>`,
          '  </url>',
        ].join('\n')
    )
    .join('\n');

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    '</urlset>',
  ].join('\n');
}

export function buildSofa2SitemapIndex(): string {
  const files = [
    'sitemap-pages.xml',
    'sitemap-categories.xml',
    'sitemap-products.xml',
    'sitemap-collections.xml',
    'sitemap-projects.xml',
    'sitemap-showrooms.xml',
    'sitemap-blog.xml',
  ];

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...files.map((file) => `  <sitemap>\n    <loc>${abs(`/${file}`)}</loc>\n  </sitemap>`),
    '</sitemapindex>',
  ].join('\n');
}

// ----------------------------------------------------------------------
// Robots
// ----------------------------------------------------------------------

export function buildSofa2Robots(): string {
  return [
    'User-agent: *',
    'Allow: /',
    'Disallow: /sofa2/admin',
    'Disallow: /sofa2/account',
    'Disallow: /sofa2/cart',
    'Disallow: /sofa2/checkout',
    'Disallow: /sofa2/payment',
    'Disallow: /*?sort=',
    'Disallow: /*?filter=',
    '',
    'User-agent: Googlebot',
    'Allow: /',
    '',
    'User-agent: Bingbot',
    'Allow: /',
    '',
    `Sitemap: ${abs('/sitemap.xml')}`,
  ].join('\n');
}

// ----------------------------------------------------------------------
// Schema JSON-LD
// ----------------------------------------------------------------------

const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'FurnitureStore',
  name: SOFA2_COMPANY_INFO.name,
  slogan: SOFA2_COMPANY_INFO.tagline,
  url: abs('/sofa2'),
  telephone: SOFA2_COMPANY_INFO.phone,
  email: SOFA2_COMPANY_INFO.email,
  foundingDate: SOFA2_COMPANY_INFO.founded,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SOFA2_COMPANY_INFO.address,
    addressCountry: 'VN',
  },
});

const productSchema = (item: (typeof SOFA2_PRODUCTS)[number]) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: item.name,
  sku: item.id,
  description: item.description,
  material: item.material,
  color: item.colors,
  url: abs(`/sofa2/products/${item.slug}`),
  brand: { '@type': 'Brand', name: SOFA2_COMPANY_INFO.name },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: item.rating,
    reviewCount: item.reviews,
  },
  offers: {
    '@type': 'Offer',
    price: item.price,
    priceCurrency: 'VND',
    availability: 'https://schema.org/InStock',
    url: abs(`/sofa2/products/${item.slug}`),
  },
});

const categorySchema = (cat: { slug: string; label: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: cat.label,
  url: abs(`/sofa2/products/category/${cat.slug}`),
  isPartOf: { '@type': 'WebSite', name: SOFA2_COMPANY_INFO.name, url: abs('/sofa2') },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: abs('/sofa2') },
      { '@type': 'ListItem', position: 2, name: 'Sản phẩm', item: abs('/sofa2/products') },
      { '@type': 'ListItem', position: 3, name: cat.label },
    ],
  },
});

const projectSchema = (item: (typeof SOFA2_PROJECTS)[number]) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: item.name,
  description: item.description,
  url: abs(`/sofa2/projects/${item.id}`),
  dateCreated: item.year,
  locationCreated: { '@type': 'Place', name: item.location },
  creator: { '@type': 'Organization', name: SOFA2_COMPANY_INFO.name },
});

const collectionSchema = (item: (typeof SOFA2_COLLECTIONS)[number]) => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: item.name,
  description: item.description,
  url: abs(`/sofa2/collections/${item.slug}`),
});

const articleSchema = (item: (typeof SOFA2_BLOG_POSTS)[number]) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: item.title,
  description: item.excerpt,
  author: { '@type': 'Person', name: item.author },
  publisher: { '@type': 'Organization', name: SOFA2_COMPANY_INFO.name },
  url: abs(`/sofa2/blog/${item.slug}`),
});

const showroomSchema = (item: any) => ({
  '@context': 'https://schema.org',
  '@type': 'FurnitureStore',
  name: item.name ?? 'Showroom LUXE Sofa',
  url: abs(`/sofa2/showrooms/${item.slug ?? item.id}`),
  telephone: item.phone ?? SOFA2_COMPANY_INFO.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: item.address ?? SOFA2_COMPANY_INFO.address,
    addressLocality: item.city ?? '',
    addressCountry: 'VN',
  },
});

export function buildSofa2Schema(scope: Sofa2SeoScope): string {
  let blocks: object[] = [];

  switch (scope) {
    case 'product':
      blocks = SOFA2_PRODUCTS.map(productSchema);
      break;
    case 'category':
      blocks = SOFA2_PRODUCT_CATEGORIES.types.map(categorySchema);
      break;
    case 'collection':
      blocks = SOFA2_COLLECTIONS.map(collectionSchema);
      break;
    case 'project':
      blocks = SOFA2_PROJECTS.map(projectSchema);
      break;
    case 'showroom':
      blocks = (SOFA2_SHOWROOMS as any[]).map(showroomSchema);
      break;
    case 'blog':
      blocks = SOFA2_BLOG_POSTS.map(articleSchema);
      break;
    default:
      blocks = [
        organizationSchema(),
        ...SOFA2_PRODUCT_CATEGORIES.types.map(categorySchema),
        ...SOFA2_PRODUCTS.map(productSchema),
        ...SOFA2_PROJECTS.map(projectSchema),
      ];
  }

  return JSON.stringify(blocks.length === 1 ? blocks[0] : blocks, null, 2);
}

// ----------------------------------------------------------------------

export const SOFA2_SEO_SCOPE_BY_MODULE: Record<string, Sofa2SeoScope> = {
  category: 'category',
  product: 'product',
  collection: 'collection',
  project: 'project',
  showroom: 'showroom',
  blog: 'blog',
  brand: 'brand',
  sitemap: 'all',
  robots: 'all',
  schema: 'all',
};
