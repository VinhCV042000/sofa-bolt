import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { SOFA2_PRODUCTS } from 'src/sections/sofa2/sofa2-pages-data';

import { SOFA2_SITE_ORIGIN } from './sofa2-seo-generator';

// ----------------------------------------------------------------------
// Áp dụng dữ liệu module SEO (/sofa2/admin/seo/*) lên trang khách sofa2:
// meta title/description/keywords, canonical, OG, robots noindex và JSON-LD.
// ----------------------------------------------------------------------

const EMPTY_SEO_DATA: PublicSeoData = { pages: [], schemas: [] };

type PublicSeoPage = {
  url: string;
  title: string;
  description: string;
  keyword: string;
  keyword2: string;
  h1: string;
  canonical: string;
  ogImage: string;
  ogTitle?: string;
  ogDescription?: string;
  indexable?: string | boolean;
  follow?: string | boolean;
  schemaType: string;
};

type PublicSeoSchema = { scope: string; url: string; jsonld: object };
type PublicSeoData = { pages: PublicSeoPage[]; schemas: PublicSeoSchema[] };

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
  s.text = JSON.stringify(data).replace(/</g, '\\u003c');
  document.head.appendChild(s);
}

function setH1(text?: string) {
  const previous = document.querySelector<HTMLElement>('h1[data-sofa2-seo-heading]');
  if (previous) {
    previous.textContent = previous.dataset.sofa2SeoOriginal ?? previous.textContent ?? '';
    delete previous.dataset.sofa2SeoHeading;
    delete previous.dataset.sofa2SeoOriginal;
  }
  if (!text) return;

  const heading = document.querySelector<HTMLElement>('main h1, h1');
  if (!heading) return;
  heading.dataset.sofa2SeoHeading = 'true';
  heading.dataset.sofa2SeoOriginal = heading.textContent ?? '';
  heading.textContent = text;
}

function clearAll() {
  setH1();
  document.head.querySelectorAll('[data-sofa2-seo]').forEach((el) => el.remove());
}

// ----------------------------------------------------------------------

export function Sofa2SeoHead() {
  const { pathname } = useLocation();
  const path = norm(pathname);
  const active = path.startsWith('/sofa2') && !path.startsWith('/sofa2/admin');

  const [seoData, setSeoData] = useState<PublicSeoData>(EMPTY_SEO_DATA);

  useEffect(() => {
    if (!active) {
      clearAll();
      return undefined;
    }

    let current = true;
    fetch('/api/seo/public', { cache: 'no-store' })
      .then(async (response) => {
        if (!response.ok) throw new Error('Không tải được dữ liệu SEO công khai.');
        return (await response.json()) as PublicSeoData;
      })
      .then((data) => {
        if (current) {
          setSeoData({
            pages: Array.isArray(data.pages) ? data.pages : [],
            schemas: Array.isArray(data.schemas) ? data.schemas : [],
          });
        }
      })
      .catch(() => {
        if (current) setSeoData(EMPTY_SEO_DATA);
      });

    return () => {
      current = false;
    };
  }, [active, path]);

  useEffect(() => {
    if (!active) {
      clearAll();
      return undefined;
    }
    const hit = seoData.pages.find((row) => norm(String(row.url)) === path);
    const pageType = (() => {
      if (/^\/sofa2\/products\/category\//.test(path)) return 'Trang danh mục';
      if (/^\/sofa2\/products\/[^/]+$/.test(path)) return 'Trang sản phẩm';
      if (/^\/sofa2\/collections\/[^/]+$/.test(path)) return 'Trang bộ sưu tập';
      if (/^\/sofa2\/projects\/[^/]+$/.test(path)) return 'Trang dự án';
      if (/^\/sofa2\/showrooms\/[^/]+$/.test(path)) return 'Showroom';
      if (/^\/sofa2\/blog\//.test(path)) return 'Blog';
      if (/^\/sofa2\/(faq|faqs|support)(\/|$)/i.test(path)) return 'Trang FAQ';
      if (path === '/sofa2' || path === '/sofa2/') return 'Trang chủ';
      if (/^\/sofa2\/about(\/|$)/.test(path)) return 'Trang thương hiệu';
      return 'Trang nội dung';
    })();
    const customSchema =
      seoData.schemas.find((entry) => entry.url && norm(entry.url) === path)?.jsonld ??
      seoData.schemas.find((entry) => !entry.url && entry.scope === pageType)?.jsonld ??
      seoData.schemas.find((entry) => !entry.url && entry.scope === 'Toàn site')?.jsonld;

    const apply = () => {
      if (hit) {
        if (hit.title) document.title = String(hit.title);
        setH1(String(hit.h1 || '') || undefined);
        setMeta('name', 'description', String(hit.description || '') || undefined);
        setMeta('name', 'keywords', [hit.keyword, hit.keyword2].filter(Boolean).join(', ') || undefined);
        setMeta('property', 'og:title', String(hit.ogTitle || hit.title || '') || undefined);
        setMeta(
          'property',
          'og:description',
          String(hit.ogDescription || hit.description || '') || undefined
        );
        setMeta('property', 'og:image', String(hit.ogImage || '') || undefined);
        const noindex = String(hit.indexable ?? 'Có').toLowerCase() === 'không';
        const nofollow = String(hit.follow ?? 'Có').toLowerCase() === 'không';
        setMeta(
          'name',
          'robots',
          noindex || nofollow
            ? `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`
            : undefined
        );
        const canonicalPath = norm(String(hit.canonical || ''));
        setLink('canonical', canonicalPath ? `${SOFA2_SITE_ORIGIN}${canonicalPath}` : `${SOFA2_SITE_ORIGIN}${path}`);
      } else {
        setH1();
        ['description', 'keywords', 'robots'].forEach((k) => setMeta('name', k));
        ['og:title', 'og:description', 'og:image'].forEach((k) => setMeta('property', k));
        setLink('canonical', `${SOFA2_SITE_ORIGIN}${path}`);
      }

      // JSON-LD tự động theo loại trang
      const productMatch = path.match(/^\/sofa2\/products\/([^/]+)$/);
      const product = productMatch && SOFA2_PRODUCTS.find((p) => p.id === productMatch[1]);
      if (customSchema) {
        setJsonLd(customSchema);
      } else if (product && (!hit?.schemaType || hit.schemaType === 'Product')) {
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
      } else if (hit?.schemaType) {
        setJsonLd({
          '@context': 'https://schema.org',
          '@type': hit.schemaType,
          name: hit.h1 || hit.title || document.title,
          description: hit.description,
          url: `${SOFA2_SITE_ORIGIN}${norm(String(hit.canonical || path))}`,
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
  }, [active, path, seoData]);

  return null;
}
