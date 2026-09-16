// SOFA2 ADMIN — Lược đồ chi tiết cho module CMS
// Mỗi trang CMS được mô tả bằng: đường dẫn client tương ứng, nhãn bản ghi,
// nhóm trường dữ liệu (nội dung / hiển thị / SEO) để sinh form thêm-sửa đầy đủ.
// ----------------------------------------------------------------------

export type Sofa2CmsFieldType =
  | 'text'
  | 'textarea'
  | 'select'
  | 'number'
  | 'date'
  | 'url'
  | 'switch';

export type Sofa2CmsField = {
  key: string;
  label: string;
  type: Sofa2CmsFieldType;
  group: 'content' | 'display' | 'seo';
  options?: string[];
  helper?: string;
  required?: boolean;
  maxLength?: number;
  multiline?: number;
  placeholder?: string;
};

export type Sofa2CmsSchema = {
  /** Đường dẫn trang tương ứng trên website khách hàng */
  clientPath: string;
  /** Tên gọi một bản ghi, dùng cho tiêu đề dialog và thông báo */
  entity: string;
  /** Khoá hiển thị làm tiêu đề bản ghi */
  titleKey: string;
  /** Khoá trạng thái xuất bản */
  statusKey: string;
  /** Các trạng thái hợp lệ (giá trị đầu tiên = đã xuất bản) */
  statusOptions: string[];
  fields: Sofa2CmsField[];
};

// ----------------------------------------------------------------------

const PUBLISH_STATES = ['Đã xuất bản', 'Bản nháp', 'Tạm ẩn'];

const f = (
  key: string,
  label: string,
  type: Sofa2CmsFieldType,
  group: Sofa2CmsField['group'],
  extra: Partial<Sofa2CmsField> = {}
): Sofa2CmsField => ({ key, label, type, group, ...extra });

/** Bộ trường SEO dùng chung cho mọi trang CMS */
const seoFields: Sofa2CmsField[] = [
  f('metaTitle', 'Meta title', 'text', 'seo', {
    maxLength: 60,
    helper: 'Tối đa 60 ký tự để hiển thị đủ trên Google.',
  }),
  f('metaDescription', 'Meta description', 'textarea', 'seo', {
    maxLength: 160,
    multiline: 3,
    helper: 'Tối đa 160 ký tự, chứa từ khoá chính.',
  }),
  f('ogImage', 'Ảnh chia sẻ (OG image)', 'url', 'seo', {
    placeholder: 'https://...',
  }),
  f('indexable', 'Cho phép Google lập chỉ mục', 'switch', 'seo'),
];

/** Bộ trường hiển thị dùng chung */
const displayFields = (statusOptions = PUBLISH_STATES): Sofa2CmsField[] => [
  f('status', 'Trạng thái', 'select', 'display', { options: statusOptions, required: true }),
  f('order', 'Thứ tự hiển thị', 'number', 'display', { helper: 'Số nhỏ hiển thị trước.' }),
  f('updated', 'Cập nhật', 'date', 'display'),
  f('author', 'Người phụ trách', 'text', 'display'),
];

/** Lược đồ cho các trang nội dung dạng khối (trang chủ, giới thiệu, liên hệ...) */
const pageSchema = (clientPath: string): Sofa2CmsSchema => ({
  clientPath,
  entity: 'khối nội dung',
  titleKey: 'block',
  statusKey: 'status',
  statusOptions: PUBLISH_STATES,
  fields: [
    f('block', 'Tên khối nội dung', 'text', 'content', { required: true }),
    f('type', 'Loại khối', 'select', 'content', {
      required: true,
      options: [
        'Banner',
        'Rich text',
        'Danh sách SP',
        'Slider',
        'Bộ sưu tập',
        'Form liên hệ',
        'Bản đồ',
        'Câu hỏi thường gặp',
        'Video',
      ],
    }),
    f('heading', 'Tiêu đề hiển thị', 'text', 'content'),
    f('content', 'Nội dung', 'textarea', 'content', { multiline: 5 }),
    f('image', 'Ảnh minh hoạ', 'url', 'content', { placeholder: 'https://...' }),
    f('ctaLabel', 'Nhãn nút hành động', 'text', 'content'),
    f('ctaLink', 'Liên kết nút', 'url', 'content', { placeholder: `${clientPath}` }),
    ...displayFields(),
    ...seoFields,
  ],
});

// ----------------------------------------------------------------------

export const SOFA2_CMS_SCHEMAS: Record<string, Sofa2CmsSchema> = {
  home: pageSchema('/sofa2'),
  about: pageSchema('/sofa2/about'),
  contact: pageSchema('/sofa2/contact'),
  policy: pageSchema('/sofa2/policy'),
  terms: pageSchema('/sofa2/policy/terms'),
  faq: pageSchema('/sofa2/faq'),

  blog: {
    clientPath: '/sofa2/blog',
    entity: 'bài viết',
    titleKey: 'title',
    statusKey: 'status',
    statusOptions: ['Đã xuất bản', 'Chờ duyệt', 'Bản nháp', 'Tạm ẩn'],
    fields: [
      f('title', 'Tiêu đề bài viết', 'text', 'content', { required: true }),
      f('slug', 'Đường dẫn', 'text', 'content', { placeholder: '/sofa2/blog/ten-bai-viet' }),
      f('category', 'Chuyên mục', 'select', 'content', {
        required: true,
        options: ['Triết lý', 'Tư vấn', 'Xu hướng', 'Bảo dưỡng', 'Dự án', 'Tin công ty'],
      }),
      f('excerpt', 'Mô tả ngắn', 'textarea', 'content', { multiline: 3, maxLength: 200 }),
      f('content', 'Nội dung bài viết', 'textarea', 'content', { multiline: 6 }),
      f('cover', 'Ảnh bìa', 'url', 'content'),
      f('tags', 'Thẻ (cách nhau dấu phẩy)', 'text', 'content'),
      f('status', 'Trạng thái', 'select', 'display', {
        required: true,
        options: ['Đã xuất bản', 'Chờ duyệt', 'Bản nháp', 'Tạm ẩn'],
      }),
      f('views', 'Lượt đọc', 'number', 'display'),
      f('updated', 'Ngày đăng', 'date', 'display'),
      f('author', 'Tác giả', 'text', 'display'),
      ...seoFields,
    ],
  },

  menu: {
    clientPath: '/sofa2',
    entity: 'menu',
    titleKey: 'menu',
    statusKey: 'status',
    statusOptions: PUBLISH_STATES,
    fields: [
      f('menu', 'Tên menu', 'text', 'content', { required: true }),
      f('position', 'Vị trí', 'select', 'content', {
        required: true,
        options: ['Header', 'Footer', 'Mobile', 'Sidebar', 'Mega menu'],
      }),
      f('items', 'Số mục', 'number', 'content'),
      f('structure', 'Danh sách mục (mỗi dòng: Tên | đường dẫn)', 'textarea', 'content', {
        multiline: 6,
        placeholder: 'Trang chủ | /sofa2\nSản phẩm | /sofa2/products',
      }),
      f('depth', 'Số cấp tối đa', 'number', 'display'),
      ...displayFields(),
    ],
  },

  banner: {
    clientPath: '/sofa2',
    entity: 'banner',
    titleKey: 'name',
    statusKey: 'status',
    statusOptions: ['Đang chạy', 'Bản nháp', 'Tạm ẩn', 'Hết hạn'],
    fields: [
      f('name', 'Tên banner', 'text', 'content', { required: true }),
      f('position', 'Vị trí hiển thị', 'select', 'content', {
        required: true,
        options: ['Top bar', 'Trang chủ', 'Danh mục', 'Chi tiết SP', 'Giỏ hàng', 'Popup'],
      }),
      f('image', 'Ảnh banner (desktop)', 'url', 'content'),
      f('imageMobile', 'Ảnh banner (mobile)', 'url', 'content'),
      f('headline', 'Dòng tiêu đề', 'text', 'content'),
      f('ctaLink', 'Liên kết khi bấm', 'url', 'content', { placeholder: '/sofa2/promotions' }),
      f('schedule', 'Lịch chạy', 'text', 'content', { placeholder: '01/09 – 30/09' }),
      f('status', 'Trạng thái', 'select', 'display', {
        required: true,
        options: ['Đang chạy', 'Bản nháp', 'Tạm ẩn', 'Hết hạn'],
      }),
      f('order', 'Thứ tự hiển thị', 'number', 'display'),
      f('updated', 'Cập nhật', 'date', 'display'),
    ],
  },

  slider: {
    clientPath: '/sofa2',
    entity: 'slider',
    titleKey: 'name',
    statusKey: 'status',
    statusOptions: PUBLISH_STATES,
    fields: [
      f('name', 'Tên slider', 'text', 'content', { required: true }),
      f('page', 'Trang áp dụng', 'select', 'content', {
        required: true,
        options: ['Trang chủ', 'Bộ sưu tập', 'Showroom', 'Danh mục', 'Dự án'],
      }),
      f('slides', 'Số slide', 'number', 'content'),
      f('slidesData', 'Danh sách slide (mỗi dòng: Tiêu đề | ảnh | liên kết)', 'textarea', 'content', {
        multiline: 5,
      }),
      f('interval', 'Thời gian chuyển (giây)', 'number', 'display'),
      f('autoplay', 'Tự động chạy', 'switch', 'display'),
      ...displayFields(),
    ],
  },

  seo: {
    clientPath: '/sofa2',
    entity: 'cấu hình SEO',
    titleKey: 'page',
    statusKey: 'status',
    statusOptions: ['Tốt', 'Cần cải thiện', 'Thiếu meta'],
    fields: [
      f('page', 'Đường dẫn trang', 'text', 'content', { required: true, placeholder: '/sofa2/about' }),
      f('title', 'Meta title', 'text', 'content', { required: true, maxLength: 60 }),
      f('description', 'Meta description', 'textarea', 'content', { multiline: 3, maxLength: 160 }),
      f('keywords', 'Từ khoá mục tiêu', 'text', 'content'),
      f('canonical', 'Canonical URL', 'url', 'content'),
      f('ogImage', 'Ảnh chia sẻ', 'url', 'content'),
      f('length', 'Độ dài title', 'number', 'display'),
      f('status', 'Đánh giá', 'select', 'display', {
        required: true,
        options: ['Tốt', 'Cần cải thiện', 'Thiếu meta'],
      }),
      f('indexable', 'Cho phép lập chỉ mục', 'switch', 'display'),
    ],
  },

  'static-pages': {
    clientPath: '/sofa2',
    entity: 'trang tĩnh',
    titleKey: 'title',
    statusKey: 'status',
    statusOptions: PUBLISH_STATES,
    fields: [
      f('title', 'Tiêu đề trang', 'text', 'content', { required: true }),
      f('slug', 'Đường dẫn', 'text', 'content', {
        required: true,
        placeholder: '/sofa2/huong-dan-do',
      }),
      f('template', 'Bố cục', 'select', 'content', {
        options: ['Một cột', 'Có mục lục', 'Landing page', 'Câu hỏi thường gặp'],
      }),
      f('content', 'Nội dung', 'textarea', 'content', { multiline: 6 }),
      f('cover', 'Ảnh đại diện', 'url', 'content'),
      ...displayFields(),
      ...seoFields,
    ],
  },
};

// ----------------------------------------------------------------------

export function getSofa2CmsSchema(moduleSlug?: string): Sofa2CmsSchema | undefined {
  return moduleSlug ? SOFA2_CMS_SCHEMAS[moduleSlug] : undefined;
}

/** Tạo slug thân thiện URL từ tiêu đề tiếng Việt */
export function sofa2Slugify(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Ngày hôm nay theo định dạng dd/mm/yyyy dùng trong dữ liệu mẫu */
export function sofa2Today() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
}
