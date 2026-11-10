import type { SupabaseClient } from '@supabase/supabase-js';
import { supabase } from 'src/integrations/supabase/client';
import { SOFA2_BLOG_POSTS, SOFA2_PAGE_IMAGES } from './sofa2-pages-data';

const untypedSupabase = supabase as unknown as SupabaseClient;

export type Sofa2CmsBlogPost = {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  cover: string;
  tags: string[];
  status: string;
  views: number;
  author: string;
  publishedAt: string;
  metaTitle: string;
  metaDescription: string;
};

export type Sofa2CmsPageBlock = {
  id: string;
  slug: string;
  title: string;
  block: string;
  type: string;
  heading: string;
  content: string;
  image: string;
  ctaLabel: string;
  ctaLink: string;
  status: string;
  sortOrder: number;
};

export type Sofa2CmsBanner = {
  id: string;
  name: string;
  position: string;
  imageDesktop: string;
  imageMobile: string;
  headline: string;
  ctaLink: string;
  status: string;
  sortOrder: number;
};

const DB_BLOG_TO_POST = (row: Record<string, unknown>): Sofa2CmsBlogPost => ({
  id: String(row.id ?? ''),
  title: String(row.title ?? ''),
  slug: String(row.slug ?? ''),
  category: String(row.category ?? 'Tin công ty'),
  excerpt: String(row.excerpt ?? ''),
  content: String(row.content ?? ''),
  cover: String(row.cover ?? ''),
  tags: Array.isArray(row.tags) ? (row.tags as string[]) : [],
  status: String(row.status ?? 'draft'),
  views: Number(row.views ?? 0),
  author: String(row.author ?? ''),
  publishedAt: row.publishedAt ? String(row.publishedAt) : '',
  metaTitle: String(row.meta_title ?? ''),
  metaDescription: String(row.meta_description ?? ''),
});

const DB_PAGE_TO_BLOCK = (row: Record<string, unknown>): Sofa2CmsPageBlock => ({
  id: String(row.id ?? ''),
  slug: String(row.slug ?? ''),
  title: String(row.title ?? ''),
  block: String(row.block ?? ''),
  type: String(row.type ?? 'Rich text'),
  heading: String(row.heading ?? ''),
  content: String(row.content ?? ''),
  image: String(row.image ?? ''),
  ctaLabel: String(row.cta_label ?? ''),
  ctaLink: String(row.cta_link ?? ''),
  status: String(row.status ?? 'draft'),
  sortOrder: Number(row.sort_order ?? 0),
});

const DB_BANNER_TO_BANNER = (row: Record<string, unknown>): Sofa2CmsBanner => ({
  id: String(row.id ?? ''),
  name: String(row.name ?? ''),
  position: String(row.position ?? ''),
  imageDesktop: String(row.image_desktop ?? ''),
  imageMobile: String(row.image_mobile ?? ''),
  headline: String(row.headline ?? ''),
  ctaLink: String(row.cta_link ?? ''),
  status: String(row.status ?? 'draft'),
  sortOrder: Number(row.sort_order ?? 0),
});

export async function fetchPublishedBlogPosts(): Promise<Sofa2CmsBlogPost[]> {
  const { data, error } = await untypedSupabase
    .from('sofa2_cms_posts')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false });
  if (error || !data) return [];
  return data.map((row) => DB_BLOG_TO_POST(row as unknown as Record<string, unknown>));
}

export async function fetchBlogPostBySlug(slug: string): Promise<Sofa2CmsBlogPost | null> {
  const { data, error } = await untypedSupabase
    .from('sofa2_cms_posts')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .maybeSingle();
  if (error || !data) return null;
  return DB_BLOG_TO_POST(data as unknown as Record<string, unknown>);
}

export async function fetchPublishedPageBlocks(slug: string): Promise<Sofa2CmsPageBlock[]> {
  const { data, error } = await untypedSupabase
    .from('sofa2_cms_pages')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .order('sort_order', { ascending: true });
  if (error || !data) return [];
  return data.map((row) => DB_PAGE_TO_BLOCK(row as unknown as Record<string, unknown>));
}

export async function fetchPublishedBanners(position?: string): Promise<Sofa2CmsBanner[]> {
  let query = untypedSupabase.from('sofa2_cms_banners').select('*').eq('status', 'published');
  if (position) query = query.eq('position', position);
  const { data, error } = await query.order('sort_order', { ascending: true });
  if (error || !data) return [];
  return data.map((row) => DB_BANNER_TO_BANNER(row as unknown as Record<string, unknown>));
}

export async function fetchPublishedSeo(pagePath: string) {
  const { data, error } = await untypedSupabase
    .from('sofa2_cms_seo')
    .select('*')
    .eq('page_path', pagePath)
    .maybeSingle();
  if (error || !data) return null;
  return {
    metaTitle: String(data.meta_title ?? ''),
    metaDescription: String(data.meta_description ?? ''),
    keywords: String(data.keywords ?? ''),
    canonical: String(data.canonical ?? ''),
    ogImage: String(data.og_image ?? ''),
    indexable: Boolean(data.indexable),
  };
}

const BLOG_IMAGE_FALLBACKS = [
  SOFA2_PAGE_IMAGES.blog1,
  SOFA2_PAGE_IMAGES.blog2,
  SOFA2_PAGE_IMAGES.blog3,
  SOFA2_PAGE_IMAGES.blog4,
  SOFA2_PAGE_IMAGES.blog5,
  SOFA2_PAGE_IMAGES.blog6,
];

export function cmsBlogPostToUi(post: Sofa2CmsBlogPost, index: number) {
  return {
    id: post.slug || post.id,
    title: post.title,
    slug: post.slug,
    category: post.slug,
    categoryLabel: post.category,
    excerpt: post.excerpt,
    content: post.content,
    image: post.cover || BLOG_IMAGE_FALLBACKS[index % BLOG_IMAGE_FALLBACKS.length],
    author: post.author || 'LUXE Sofa',
    date: post.publishedAt || '',
    readTime: `${Math.max(3, Math.ceil(post.content.length / 600))} phút`,
  };
}

export function useFallbackBlogPosts() {
  return SOFA2_BLOG_POSTS;
}

// ----- CMS page blocks hook -----

import { useEffect, useState } from 'react';

export function useCmsPageBlocks(slug: string) {
  const [blocks, setBlocks] = useState<Sofa2CmsPageBlock[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    fetchPublishedPageBlocks(slug)
      .then((data) => {
        if (active) setBlocks(data);
      })
      .catch(() => {})
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [slug]);

  return { blocks, loading };
}

// ----- CMS banners hook -----

export function useCmsBanners(position?: string) {
  const [banners, setBanners] = useState<Sofa2CmsBanner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    fetchPublishedBanners(position)
      .then((data) => {
        if (active) setBanners(data);
      })
      .catch(() => {})
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [position]);

  return { banners, loading };
}

// ----- CMS SEO hook -----

type CmsSeoData = {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  canonical: string;
  ogImage: string;
  indexable: boolean;
} | null;

export function useCmsSeo(pagePath: string) {
  const [seo, setSeo] = useState<CmsSeoData>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    fetchPublishedSeo(pagePath)
      .then((data) => {
        if (active) setSeo(data as CmsSeoData);
      })
      .catch(() => {})
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [pagePath]);

  return { seo, loading };
}
