// ----------------------------------------------------------------------
// Kiểu dữ liệu CMS cho sofa2
// ----------------------------------------------------------------------

export const CMS_STATUSES = ['Đã xuất bản', 'Bản nháp', 'Chờ duyệt', 'Tạm ẩn'] as const;

export type CmsStatus = (typeof CMS_STATUSES)[number];

export type CmsBlock = {
  id: string;
  title: string;
  type: string;
  text: string;
  enabled: boolean;
};

export type CmsSeo = {
  title: string;
  description: string;
  keywords: string;
  image: string;
  canonical: string;
};

export type CmsField = {
  key: string;
  label: string;
  multiline?: boolean;
};

export type CmsPage = {
  key: string;
  name: string;
  path: string;
  status: CmsStatus;
  updated: string;
  author: string;
  blockLabel: string;
  fieldSchema: CmsField[];
  fields: Record<string, string>;
  blocks: CmsBlock[];
  seo: CmsSeo;
  custom?: boolean;
};

export type CmsPost = {
  id: string;
  title: string;
  category: string;
  cover: string;
  excerpt: string;
  content: string;
  status: CmsStatus;
  updated: string;
  author: string;
};

export type CmsMenuItem = { id: string; label: string; path: string };

export type CmsMenu = {
  id: string;
  name: string;
  position: string;
  status: CmsStatus;
  items: CmsMenuItem[];
};

export type CmsMedia = {
  id: string;
  name: string;
  image: string;
  title: string;
  link: string;
  position: string;
  schedule: string;
  status: CmsStatus;
};

export type Sofa2CmsState = {
  pages: CmsPage[];
  posts: CmsPost[];
  menus: CmsMenu[];
  banners: CmsMedia[];
  slides: CmsMedia[];
};

export const cmsId = () => Math.random().toString(36).slice(2, 10);

export const cmsToday = () =>
  new Date().toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
