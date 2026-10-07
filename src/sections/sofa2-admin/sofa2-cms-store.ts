import { useCallback, useSyncExternalStore } from 'react';

// ----------------------------------------------------------------------
// Kho dữ liệu CMS cho khu quản trị sofa2.
// Lưu trong localStorage để nội dung giữ nguyên khi tải lại trang.
// ----------------------------------------------------------------------

const STORAGE_KEY = 'sofa2-cms-v1';

export type CmsStatus = 'published' | 'draft' | 'hidden';

export type CmsBlock = {
  id: string;
  type: string;
  title: string;
  subtitle: string;
  body: string;
  image: string;
  ctaLabel: string;
  ctaHref: string;
  status: CmsStatus;
};

export type CmsSeo = {
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
  canonical: string;
  noindex: boolean;
};

export type CmsPage = {
  id: string;
  name: string;
  path: string;
  template: string;
  status: CmsStatus;
  updated: string;
  author: string;
  blocks: CmsBlock[];
  seo: CmsSeo;
};

export type CmsItem = Record<string, string | number | boolean>;

export type CmsState = {
  /** khoá = slug module CMS dạng trang (home, about, contact, policy, terms, faq) */
  pages: Record<string, CmsPage>;
  /** khoá = slug module dạng bộ sưu tập (blog, menu, banner, slider, seo, static) */
  collections: Record<string, CmsItem[]>;
};

export const CMS_BLOCK_TYPES = [
  'Hero',
  'Rich text',
  'Danh sách sản phẩm',
  'Bộ sưu tập',
  'Slider',
  'Banner',
  'Đánh giá',
  'FAQ',
  'Form liên hệ',
  'Bản đồ',
  'CTA',
];

export const CMS_STATUS_LABEL: Record<CmsStatus, string> = {
  published: 'Đã xuất bản',
  draft: 'Bản nháp',
  hidden: 'Tạm ẩn',
};

const uid = () => Math.random().toString(36).slice(2, 10);

const block = (
  type: string,
  title: string,
  body: string,
  status: CmsStatus = 'published',
  extra: Partial<CmsBlock> = {}
): CmsBlock => ({
  id: uid(),
  type,
  title,
  subtitle: '',
  body,
  image: '',
  ctaLabel: '',
  ctaHref: '',
  status,
  ...extra,
});

const page = (
  id: string,
  name: string,
  path: string,
  template: string,
  blocks: CmsBlock[],
  seo: Partial<CmsSeo> = {},
  status: CmsStatus = 'published'
): CmsPage => ({
  id,
  name,
  path,
  template,
  status,
  updated: '14/09/2026',
  author: 'Minh Anh',
  blocks,
  seo: {
    title: seo.title ?? `${name} | LUXE Sofa`,
    description: seo.description ?? `${name} của LUXE Sofa – nội thất sofa cao cấp thiết kế riêng.`,
    keywords: seo.keywords ?? 'sofa cao cấp, nội thất, LUXE Sofa',
    ogImage: seo.ogImage ?? '/assets/background/overlay.svg',
    canonical: seo.canonical ?? `https://luxesofa.vn${path}`,
    noindex: seo.noindex ?? false,
  },
});

function seedState(): CmsState {
  return {
    pages: {
      home: page('home', 'Trang chủ', '/sofa2', 'Landing editorial', [
        block('Hero', 'Sofa thủ công cho không gian hiện đại', 'Mỗi bộ sofa được may đo theo tỷ lệ căn phòng của bạn.', 'published', {
          ctaLabel: 'Khám phá bộ sưu tập',
          ctaHref: '/sofa2/collections',
        }),
        block('Bộ sưu tập', 'Bộ sưu tập Scandinavian', 'Tối giản, ấm áp, gỗ sồi tự nhiên.'),
        block('Danh sách sản phẩm', 'Sản phẩm bán chạy', 'Top 8 mẫu sofa được đặt nhiều nhất quý này.'),
        block('Đánh giá', 'Khách hàng nói gì', 'Hơn 2.400 gia đình đã chọn LUXE Sofa.'),
        block('CTA', 'Đặt lịch trải nghiệm tại showroom', 'Tư vấn 1-1 cùng nhà thiết kế.', 'published', {
          ctaLabel: 'Đặt lịch',
          ctaHref: '/sofa2/showrooms/visit',
        }),
      ]),
      about: page('about', 'Trang giới thiệu', '/sofa2/about', 'Trang nội dung dài', [
        block('Hero', 'Câu chuyện LUXE Sofa', '15 năm làm nghề mộc và bọc nệm thủ công.'),
        block('Rich text', 'Triết lý thiết kế', 'Chúng tôi tin vào vật liệu thật và đường may bền.'),
        block('Rich text', 'Xưởng sản xuất', 'Xưởng 4.000m² tại Bình Dương, 120 nghệ nhân.'),
      ]),
      contact: page('contact', 'Trang liên hệ', '/sofa2/contact', 'Trang form', [
        block('Form liên hệ', 'Gửi yêu cầu tư vấn', 'Phản hồi trong vòng 2 giờ làm việc.'),
        block('Bản đồ', 'Hệ thống showroom', '5 showroom tại Hà Nội, TP.HCM, Đà Nẵng.'),
      ]),
      policy: page('policy', 'Trang chính sách', '/sofa2/support', 'Trang văn bản', [
        block('Rich text', 'Chính sách bảo hành', 'Bảo hành khung 10 năm, nệm 3 năm.'),
        block('Rich text', 'Chính sách đổi trả', 'Đổi trả trong 7 ngày với sản phẩm còn nguyên trạng.'),
        block('Rich text', 'Chính sách giao lắp', 'Miễn phí giao lắp nội thành.'),
      ]),
      terms: page('terms', 'Trang điều khoản', '/sofa2/support', 'Trang văn bản', [
        block('Rich text', 'Điều khoản sử dụng', 'Quy định khi sử dụng website và dịch vụ.'),
        block('Rich text', 'Điều khoản thanh toán', 'Đặt cọc 30%, thanh toán phần còn lại khi giao hàng.'),
      ]),
      faq: page('faq', 'Trang FAQ', '/sofa2/support', 'Trang hỏi đáp', [
        block('FAQ', 'Thời gian đặt may bao lâu?', '21–35 ngày tuỳ mẫu và chất liệu.'),
        block('FAQ', 'Có được chọn vải riêng không?', 'Có, hơn 240 mã vải và da để chọn.'),
        block('FAQ', 'Chi phí giao lắp?', 'Miễn phí nội thành, ngoại thành tính theo km.'),
      ]),
    },
    collections: {
      blog: [
        { title: 'Scandinavian: tối giản mà ấm áp', slug: 'scandinavian-toi-gian', category: 'Triết lý', author: 'Minh Anh', status: 'published', publishAt: '13/09/2026', views: 18620, excerpt: 'Vì sao phong cách Bắc Âu hợp với nhà Việt.' },
        { title: 'Chọn sofa cho căn hộ nhỏ', slug: 'chon-sofa-can-ho-nho', category: 'Tư vấn', author: 'Thu Hà', status: 'published', publishAt: '05/09/2026', views: 9840, excerpt: '5 nguyên tắc chọn kích thước sofa.' },
        { title: 'Xu hướng nội thất 2026', slug: 'xu-huong-2026', category: 'Xu hướng', author: 'Đức Anh', status: 'draft', publishAt: '14/09/2026', views: 0, excerpt: 'Màu đất, vải bouclé và đường cong.' },
      ],
      menu: [
        { label: 'Trang chủ', url: '/sofa2', position: 'Header', parent: '', order: 1, status: 'published' },
        { label: 'Sản phẩm', url: '/sofa2/products', position: 'Header', parent: '', order: 2, status: 'published' },
        { label: 'Bộ sưu tập', url: '/sofa2/collections', position: 'Header', parent: '', order: 3, status: 'published' },
        { label: 'Dự án', url: '/sofa2/projects', position: 'Header', parent: '', order: 4, status: 'published' },
        { label: 'Showroom', url: '/sofa2/showrooms', position: 'Header', parent: '', order: 5, status: 'published' },
        { label: 'Blog', url: '/sofa2/blog', position: 'Header', parent: '', order: 6, status: 'published' },
        { label: 'Liên hệ', url: '/sofa2/contact', position: 'Footer', parent: '', order: 7, status: 'published' },
        { label: 'Chính sách', url: '/sofa2/support', position: 'Footer', parent: '', order: 8, status: 'published' },
      ],
      banner: [
        { name: 'Mùa thu – giảm 25%', position: 'Top bar', image: '/assets/background/overlay.svg', link: '/sofa2/promotions', start: '01/09/2026', end: '30/09/2026', status: 'published' },
        { name: 'Miễn phí giao lắp toàn quốc', position: 'Trang chủ', image: '/assets/background/overlay.svg', link: '/sofa2/services', start: '01/01/2026', end: '31/12/2026', status: 'published' },
        { name: 'Trả góp 0%', position: 'Chi tiết sản phẩm', image: '/assets/background/overlay.svg', link: '/sofa2/payment', start: '01/08/2026', end: '31/08/2026', status: 'hidden' },
      ],
      slider: [
        { name: 'Hero trang chủ', page: '/sofa2', slides: 6, interval: 5, status: 'published' },
        { name: 'Bộ sưu tập mùa thu', page: '/sofa2/collections', slides: 5, interval: 6, status: 'published' },
        { name: 'Showroom 360°', page: '/sofa2/showrooms', slides: 4, interval: 7, status: 'draft' },
      ],
      seo: [
        { page: 'Trang chủ', path: '/sofa2', metaTitle: 'LUXE Sofa | Sofa thủ công cao cấp', metaDescription: 'Sofa may đo, giao lắp toàn quốc.', keywords: 'sofa cao cấp', status: 'published' },
        { page: 'Sản phẩm', path: '/sofa2/products', metaTitle: 'Tất cả sofa | LUXE Sofa', metaDescription: 'Hơn 120 mẫu sofa đặt may.', keywords: 'mua sofa', status: 'published' },
        { page: 'Blog', path: '/sofa2/blog', metaTitle: 'Cảm hứng nội thất | LUXE Sofa', metaDescription: 'Bài viết về thiết kế và bảo dưỡng.', keywords: 'blog nội thất', status: 'draft' },
      ],
      static: [
        { name: 'Hướng dẫn bảo quản', path: '/sofa2/support', template: 'Trang văn bản', status: 'published', updated: '11/09/2026' },
        { name: 'Câu hỏi vận chuyển', path: '/sofa2/support', template: 'Trang văn bản', status: 'draft', updated: '08/09/2026' },
      ],
    },
  };
}

// ----------------------------------------------------------------------

let state: CmsState = load();

function load(): CmsState {
  if (typeof window === 'undefined') return seedState();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as CmsState;
  } catch {
    /* bỏ qua dữ liệu hỏng */
  }
  return seedState();
}

const listeners = new Set<() => void>();

function commit(next: CmsState) {
  state = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* bỏ qua khi bộ nhớ đầy */
  }
  listeners.forEach((l) => l());
}

const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => {
    listeners.delete(l);
  };
};

const getSnapshot = () => state;

const today = () =>
  new Date().toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });

export function useSofa2Cms() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  const savePage = useCallback((slug: string, next: CmsPage) => {
    commit({
      ...state,
      pages: { ...state.pages, [slug]: { ...next, updated: today() } },
    });
  }, []);

  const addBlock = useCallback((slug: string, b: Omit<CmsBlock, 'id'>) => {
    const p = state.pages[slug];
    if (!p) return;
    savePage(slug, { ...p, blocks: [...p.blocks, { ...b, id: uid() }] });
  }, [savePage]);

  const updateBlock = useCallback((slug: string, id: string, b: Partial<CmsBlock>) => {
    const p = state.pages[slug];
    if (!p) return;
    savePage(slug, {
      ...p,
      blocks: p.blocks.map((item) => (item.id === id ? { ...item, ...b } : item)),
    });
  }, [savePage]);

  const removeBlock = useCallback((slug: string, id: string) => {
    const p = state.pages[slug];
    if (!p) return;
    savePage(slug, { ...p, blocks: p.blocks.filter((item) => item.id !== id) });
  }, [savePage]);

  const moveBlock = useCallback((slug: string, id: string, dir: -1 | 1) => {
    const p = state.pages[slug];
    if (!p) return;
    const index = p.blocks.findIndex((item) => item.id === id);
    const target = index + dir;
    if (index < 0 || target < 0 || target >= p.blocks.length) return;
    const blocks = [...p.blocks];
    [blocks[index], blocks[target]] = [blocks[target], blocks[index]];
    savePage(slug, { ...p, blocks });
  }, [savePage]);

  const createItem = useCallback((slug: string, item: CmsItem) => {
    commit({
      ...state,
      collections: { ...state.collections, [slug]: [item, ...(state.collections[slug] ?? [])] },
    });
  }, []);

  const updateItem = useCallback((slug: string, index: number, item: CmsItem) => {
    const list = [...(state.collections[slug] ?? [])];
    list[index] = item;
    commit({ ...state, collections: { ...state.collections, [slug]: list } });
  }, []);

  const removeItems = useCallback((slug: string, indexes: number[]) => {
    const set = new Set(indexes);
    commit({
      ...state,
      collections: {
        ...state.collections,
        [slug]: (state.collections[slug] ?? []).filter((_, i) => !set.has(i)),
      },
    });
  }, []);

  const resetAll = useCallback(() => commit(seedState()), []);

  return {
    state: snapshot,
    savePage,
    addBlock,
    updateBlock,
    removeBlock,
    moveBlock,
    createItem,
    updateItem,
    removeItems,
    resetAll,
  };
}
