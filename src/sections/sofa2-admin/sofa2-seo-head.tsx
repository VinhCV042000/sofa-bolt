import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { SOFA2_PRODUCTS } from 'src/sections/sofa2/sofa2-pages-data';

import { useSofa2AdminRows } from './sofa2-admin-store';
import { SOFA2_SITE_ORIGIN } from './sofa2-seo-generator';

// ----------------------------------------------------------------------
// Áp dụng dữ liệu module SEO (/sofa2/admin/seo/*) lên trang khách sofa2:
// meta title/description/keywords, canonical, OG, robots noindex và JSON-LD.
// ----------------------------------------------------------------------

const PAGE_MODULES = ['category', 'product', 'collection', 'project', 'showroom', 'blog', 'brand'];

const norm = (u: string) =>
  String(u || '')
    .replace(/^https?:\/\/[^/]+/, '')
    .replace(/[?#].*$/, '')
    .replace(/\/$/, '') || '/';

function setMeta(attr: 'name' | 'property', k: string, v?: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${k}"][data-sofa2-seo]`);
  if (!v) {
    el?.remove();
    return;
  }
  if (!el) {
    document.head.querySelectorAll(`meta[${attr}="${k}"]`).forEach((m) => m.remove());
    el = document.createElement('meta');
    el.setAttribute(attr, k);
    el.setAttribute('data-sofa2-seo', '');
    document.head.appendChild(el);
  }
  el.content = v;
}

function setLink(rel: string, href?: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"][data-sofa2-seo]`);
  if (!href) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    el.setAttribute('data-sofa2-seo', '');
    document.head.appendChild(el);
  }
  el.href = href;
}

function setJsonLd(data?: object) {
  document.head.querySelector('script[data-sofa2-seo]')?.remove();
  if (!data) return;
  const s = document.createElement('script');
  s.type = 'application/ld+json';
  s.setAttribute('data-sofa2-seo', '');
  s.text = JSON.stringify(data);
  document.head.appendChild(s);
}

function clearAll() {
  document.head.querySelectorAll('[data-sofa2-seo]').forEach((el) => el.remove());
}

// ----------------------------------------------------------------------

export function Sofa2SeoHead() {
  const { pathname } = useLocation();
  const path = norm(pathname);
  const active = path.startsWith('/sofa2') && !path.startsWith('/sofa2/admin');

  // Đăng ký theo dõi để áp dụng ngay khi admin sửa
  const r0 = useSofa2AdminRows('seo', 'category');
  const r1 = useSofa2AdminRows('seo', 'product');
  const r2 = useSofa2AdminRows('seo', 'collection');
  const r3 = useSofa2AdminRows('seo', 'project');
  const r4 = useSofa2AdminRows('seo', 'showroom');
  const r5 = useSofa2AdminRows('seo', 'blog');
  const r6 = useSofa2AdminRows('seo', 'brand');

  useEffect(() => {
    if (!active) {
      clearAll();
      return undefined;
    }
    const all = [r0, r1, r2, r3, r4, r5, r6].flatMap((rows, i) =>
      rows.map((row) => ({ row, module: PAGE_MODULES[i] }))
    );
    const hit = all.find(({ row }) => norm(String(row.url)) === path)?.row;

    const apply = () => {
      if (hit) {
        if (hit.title) document.title = String(hit.title);
        setMeta('name', 'description', String(hit.description || '') || undefined);
        setMeta('name', 'keywords', [hit.keyword, hit.keyword2].filter(Boolean).join(', ') || undefined);
        setMeta('property', 'og:title', String(hit.title || '') || undefined);
        setMeta('property', 'og:description', String(hit.description || '') || undefined);
        setMeta('property', 'og:image', String(hit.ogImage || '') || undefined);
        setMeta('name', 'robots', hit.indexable === 'Không' ? 'noindex, nofollow' : undefined);
        setLink('canonical', String(hit.canonical || '') || `${SOFA2_SITE_ORIGIN}${path}`);
      } else {
        ['description', 'keywords', 'robots'].forEach((k) => setMeta('name', k));
        ['og:title', 'og:description', 'og:image'].forEach((k) => setMeta('property', k));
        setLink('canonical', `${SOFA2_SITE_ORIGIN}${path}`);
      }

      // JSON-LD tự động theo loại trang
      const productMatch = path.match(/^\/sofa2\/products\/([^/]+)$/);
      const product = productMatch && SOFA2_PRODUCTS.find((p) => p.id === productMatch[1]);
      if (product) {
        setJsonLd({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.name,
          image: product.images,
          description: product.description,
          sku: `LUXE-${product.id}`,
          brand: { '@type': 'Brand', name: 'LUXE Sofa' },
          aggregateRating: { '@type': 'AggregateRating', ratingValue: product.rating, reviewCount: product.reviews },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'VND',
            price: product.price,
            availability: 'https://schema.org/InStock',
            url: `${SOFA2_SITE_ORIGIN}${path}`,
          },
        });
      } else {
        const parts = path.split('/').filter(Boolean);
        setJsonLd({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: parts.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: p,
            item: `${SOFA2_SITE_ORIGIN}/${parts.slice(0, i + 1).join('/')}`,
          })),
        });
      }
    };

    // Chạy sau khi trang (và Helmet của trang) đã render để ghi đè đúng
    const t1 = window.setTimeout(apply, 50);
    const t2 = window.setTimeout(apply, 600);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [active, path, r0, r1, r2, r3, r4, r5, r6]);

  return null;
}
