import {
  SOFA2_PRODUCTS,
  SOFA2_PROJECTS,
  SOFA2_BLOG_POSTS,
  SOFA2_COLLECTIONS,
  SOFA2_COMPANY_INFO,
  SOFA2_PROJECT_TYPES,
  SOFA2_PRODUCT_CATEGORIES,
} from 'src/sections/sofa2/sofa2-pages-data';

// ----------------------------------------------------------------------
// Bộ sinh sitemap / robots.txt / JSON-LD schema cho website sofa2.
// Dữ liệu lấy trực tiếp từ danh sách sản phẩm, danh mục, dự án, blog.
// ----------------------------------------------------------------------

export type SeoScope = 'static' | 'category' | 'product' | 'collection' | 'project' | 'blog';

export type SeoUrl = {
  loc: string;
  scope: SeoScope;
  changefreq: 'daily' | 'weekly' | 'monthly';
  priority: string;
  title: string;
};

export const SEO_SCOPE_LABELS: Record<SeoScope, string> = {
  static: 'Trang tĩnh',
  category: 'Danh mục sản phẩm',
  product: 'Trang sản phẩm',
  collection: 'Bộ sưu tập',
  project: 'Dự án',
  blog: 'Bài viết blog',
};

const STATIC_PATHS: { path: string; title: string }[] = [
  { path: '/sofa2', title: 'Trang chủ' },
  { path: '/sofa2/about', title: 'Giới thiệu' },
  { path: '/sofa2/products', title: 'Tất cả sản phẩm' },
  { path: '/sofa2/collections', title: 'Bộ sưu tập' },
  { path: '/sofa2/projects', title: 'Dự án' },
  { path: '/sofa2/showrooms', title: 'Showroom' },
  { path: '/sofa2/services', title: 'Dịch vụ' },
  { path: '/sofa2/blog', title: 'Blog' },
  { path: '/sofa2/promotions', title: 'Khuyến mãi' },
  { path: '/sofa2/careers', title: 'Tuyển dụng' },
  { path: '/sofa2/contact', title: 'Liên hệ' },
  { path: '/sofa2/b2b', title: 'Đại lý B2B' },
  { path: '/sofa2/support', title: 'Hỗ trợ' },
];

/** Danh sách URL công khai, gom theo nhóm nội dung. */
export function buildSofa2SeoUrls(): SeoUrl[] {
  const urls: SeoUrl[] = [];

  STATIC_PATHS.forEach((item) =>
    urls.push({
      loc: item.path,
      scope: 'static',
      changefreq: 'monthly',
      priority: item.path === '/sofa2' ? '1.0' : '0.6',
      title: item.title,
    })
  );

  const categoryGroups = [
    SOFA2_PRODUCT_CATEGORIES.types,
    SOFA2_PRODUCT_CATEGORIES.styles,
    SOFA2_PRODUCT_CATEGORIES.spaces,
    SOFA2_PRODUCT_CATEGORIES.sizes,
    SOFA2_PRODUCT_CATEGORIES.prices,
  ].flat();

  categoryGroups.forEach((cat) =>
    urls.push({
      loc: `/sofa2/products/category/${cat.slug}`,
      scope: 'category',
      changefreq: 'weekly',
      priority: '0.8',
      title: cat.label,
    })
  );

  SOFA2_PRODUCTS.forEach((p) =>
    urls.push({
      loc: `/sofa2/products/${p.id}`,
      scope: 'product',
      changefreq: 'weekly',
      priority: '0.9',
      title: p.name,
    })
  );

  SOFA2_COLLECTIONS.forEach((c) =>
    urls.push({
      loc: `/sofa2/collections/${c.slug}`,
      scope: 'collection',
      changefreq: 'weekly',
      priority: '0.7',
      title: c.name,
    })
  );

  SOFA2_PROJECT_TYPES.forEach((t) =>
    urls.push({
      loc: `/sofa2/projects?type=${t.slug}`,
      scope: 'project',
      changefreq: 'monthly',
      priority: '0.6',
      title: t.label,
    })
  );

  SOFA2_PROJECTS.forEach((p) =>
    urls.push({
      loc: `/sofa2/projects/${p.id}`,
      scope: 'project',
      changefreq: 'monthly',
      priority: '0.7',
      title: p.name,
    })
  );

  SOFA2_BLOG_POSTS.forEach((b) =>
    urls.push({
      loc: `/sofa2/blog/${b.id}`,
      scope: 'blog',
      changefreq: 'monthly',
      priority: '0.6',
      title: b.title,
    })
  );

  return urls;
}

const trimBase = (base: string) => base.replace(/\/+$/, '');

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/** Sinh sitemap.xml (không gắn lastmod vì không có mốc chỉnh sửa thật của từng trang). */
export function buildSofa2Sitemap(base: string, urls: SeoUrl[]): string {
  const root = trimBase(base);
  const body = urls
    .map(
      (u) =>
        `  <url>\n    <loc>${escapeXml(root + u.loc)}</loc>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

/** Sinh robots.txt: mở cho bot, chặn khu quản trị và các trang giao dịch riêng tư. */
export function buildSofa2Robots(base: string, withSitemap: boolean): string {
  const root = trimBase(base);
  const lines = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /sofa2/admin',
    'Disallow: /sofa2/cart',
    'Disallow: /sofa2/checkout',
    'Disallow: /sofa2/payment',
    'Disallow: /sofa2/account',
    'Disallow: /sofa2/orders/tracking',
    '',
    'User-agent: Googlebot',
    'Allow: /',
    'Disallow: /sofa2/admin',
    '',
    'User-agent: Bingbot',
    'Allow: /',
    'Disallow: /sofa2/admin',
  ];

  if (withSitemap && root) {
    lines.push('', `Sitemap: ${root}/sitemap.xml`);
  }

  return `${lines.join('\n')}\n`;
}

const money = (value: number) => value.toString();

/** Sinh JSON-LD cho từng nhóm trang: Organization, ItemList danh mục, Product, Project, Article. */
export function buildSofa2Schema(base: string, scopes: SeoScope[]): string {
  const root = trimBase(base);
  const graph: Record<string, unknown>[] = [];

  graph.push({
    '@type': 'Organization',
    '@id': `${root}/sofa2#organization`,
    name: SOFA2_COMPANY_INFO.name,
    url: `${root}/sofa2`,
    telephone: SOFA2_COMPANY_INFO.phone,
    email: SOFA2_COMPANY_INFO.email,
    foundingDate: SOFA2_COMPANY_INFO.founded,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SOFA2_COMPANY_INFO.address,
      addressCountry: 'VN',
    },
  });

  if (scopes.includes('category')) {
    graph.push({
      '@type': 'ItemList',
      '@id': `${root}/sofa2/products#categories`,
      name: 'Danh mục sofa',
      itemListElement: SOFA2_PRODUCT_CATEGORIES.types.map((cat, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: cat.label,
        url: `${root}/sofa2/products/category/${cat.slug}`,
      })),
    });
  }

  if (scopes.includes('product')) {
    SOFA2_PRODUCTS.forEach((p) => {
      graph.push({
        '@type': 'Product',
        '@id': `${root}/sofa2/products/${p.id}#product`,
        name: p.name,
        description: p.description,
        image: p.image,
        sku: `LUXE-${p.id}`,
        material: p.material,
        color: p.colors,
        brand: { '@type': 'Brand', name: SOFA2_COMPANY_INFO.name },
        offers: {
          '@type': 'Offer',
          url: `${root}/sofa2/products/${p.id}`,
          price: money(p.price),
          priceCurrency: 'VND',
          availability: 'https://schema.org/InStock',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: p.rating,
          reviewCount: p.reviews,
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: `${root}/sofa2` },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Sản phẩm',
              item: `${root}/sofa2/products`,
            },
            { '@type': 'ListItem', position: 3, name: p.name },
          ],
        },
      });
    });
  }

  if (scopes.includes('project')) {
    SOFA2_PROJECTS.forEach((p) => {
      graph.push({
        '@type': 'CreativeWork',
        '@id': `${root}/sofa2/projects/${p.id}#project`,
        name: p.name,
        description: p.description,
        image: p.image,
        dateCreated: p.year,
        genre: p.typeLabel,
        contentLocation: { '@type': 'Place', name: p.location },
        creator: { '@type': 'Organization', name: SOFA2_COMPANY_INFO.name },
      });
    });
  }

  if (scopes.includes('blog')) {
    SOFA2_BLOG_POSTS.forEach((b) => {
      graph.push({
        '@type': 'Article',
        '@id': `${root}/sofa2/blog/${b.id}#article`,
        headline: b.title,
        description: b.excerpt,
        image: b.image,
        author: { '@type': 'Person', name: b.author },
        publisher: { '@type': 'Organization', name: SOFA2_COMPANY_INFO.name },
      });
    });
  }

  if (scopes.includes('collection')) {
    graph.push({
      '@type': 'ItemList',
      '@id': `${root}/sofa2/collections#list`,
      name: 'Bộ sưu tập sofa',
      itemListElement: SOFA2_COLLECTIONS.map((c, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: c.name,
        url: `${root}/sofa2/collections/${c.slug}`,
      })),
    });
  }

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2);
}
