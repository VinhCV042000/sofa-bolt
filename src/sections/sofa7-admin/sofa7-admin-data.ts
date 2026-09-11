// SOFA7 Admin — Urban Street / Industrial Loft theme
// Colors match sofa7: concrete dark, electric yellow, cyan accents

export const SOFA7_ADMIN_ROOT = '/sofa7/admin';

export const SOFA7_ADMIN_THEME = {
  BG: '#111111',
  SURFACE: '#1C1C1C',
  ACCENT: '#FFD600',
  ACCENT2: '#00E5FF',
  TEXT: '#E0E0E0',
};

// ----------------------------------------------------------------------
// Types

export type Sofa7AdminColumn = {
  field: string;
  label: string;
  type?: 'text' | 'status' | 'money' | 'number' | 'date' | 'badge';
};

export type Sofa7AdminModule = {
  slug: string;
  label: string;
  icon: string;
  description: string;
  columns: Sofa7AdminColumn[];
  rows: Record<string, unknown>[];
  stats?: { label: string; value: string | number }[];
  actions?: string[];
};

export type Sofa7AdminGroup = {
  slug: string;
  label: string;
  icon: string;
  modules: Sofa7AdminModule[];
};

// ----------------------------------------------------------------------
// Helpers

function makeRows(n: number, template: () => Record<string, unknown>) {
  return Array.from({ length: n }, (_, i) => ({ id: i + 1, ...template() }));
}

const statuses = ['Hoạt động', 'Nháp', 'Ẩn', 'Chờ duyệt'];
const randomStatus = () => statuses[Math.floor(Math.random() * statuses.length)];
const randomMoney = (min = 5000000, max = 50000000) =>
  Math.floor(min + Math.random() * (max - min));
const randomInt = (min: number, max: number) =>
  Math.floor(min + Math.random() * (max - min));
const orderStatuses = ['Chờ xử lý', 'Đang xử lý', 'Đang giao', 'Hoàn thành', 'Huỷ'];
const randomOrderStatus = () => orderStatuses[Math.floor(Math.random() * orderStatuses.length)];

// ----------------------------------------------------------------------
// CMS Group

const cmsModules: Sofa7AdminModule[] = [
  {
    slug: 'home',
    label: 'Trang chủ',
    icon: 'solar:home-2-bold-duotone',
    description: 'Quản lý nội dung trang chủ: hero, banner, section nổi bật.',
    columns: [
      { field: 'section', label: 'Section', type: 'text' },
      { field: 'title', label: 'Tiêu đề', type: 'text' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
      { field: 'updated', label: 'Cập nhật', type: 'date' },
    ],
    rows: [
      { id: 1, section: 'Hero', title: 'SOFA LOFT — Urban Living', status: 'Hoạt động', updated: '2026-09-01' },
      { id: 2, section: 'Marquee', title: 'URBAN LOFT · INDUSTRIAL VIBE · STREET STYLE', status: 'Hoạt động', updated: '2026-09-01' },
      { id: 3, section: 'Collections', title: 'Bốn phong cách Urban', status: 'Hoạt động', updated: '2026-08-28' },
      { id: 4, section: 'Products', title: 'Sofa cho tâm hồn phố', status: 'Hoạt động', updated: '2026-08-28' },
      { id: 5, section: 'Story', title: 'Câu chuyện thương hiệu', status: 'Hoạt động', updated: '2026-08-20' },
      { id: 6, section: 'Stats', title: '50k+ Urban Dwellers', status: 'Hoạt động', updated: '2026-08-20' },
      { id: 7, section: 'Gallery', title: 'Không gian loft thực tế', status: 'Hoạt động', updated: '2026-09-02' },
      { id: 8, section: 'Testimonials', title: 'Khách hàng nói gì', status: 'Hoạt động', updated: '2026-09-02' },
      { id: 9, section: 'FAQs', title: 'Câu hỏi thường gặp', status: 'Hoạt động', updated: '2026-08-15' },
      { id: 10, section: 'CTA', title: 'Book showroom', status: 'Hoạt động', updated: '2026-08-15' },
    ],
    stats: [{ label: 'Sections', value: 10 }, { label: 'Đang hoạt động', value: 10 }],
  },
  {
    slug: 'about',
    label: 'Giới thiệu',
    icon: 'solar:info-circle-bold-duotone',
    description: 'Quản lý trang giới thiệu công ty, lịch sử, đội ngũ.',
    columns: [
      { field: 'block', label: 'Block', type: 'text' },
      { field: 'content', label: 'Nội dung (tóm tắt)', type: 'text' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: [
      { id: 1, block: 'Lịch sử', content: 'Thành lập 2015 tại TP.HCM', status: 'Hoạt động' },
      { id: 2, block: 'Sứ mệnh', content: 'Mang street style vào nội thất', status: 'Hoạt động' },
      { id: 3, block: 'Đội ngũ', content: '120 thành viên creative', status: 'Hoạt động' },
      { id: 4, block: 'Showroom', content: '8 showroom toàn quốc', status: 'Hoạt động' },
    ],
    stats: [{ label: 'Blocks', value: 4 }],
  },
  {
    slug: 'contact',
    label: 'Liên hệ',
    icon: 'solar:phone-bold-duotone',
    description: 'Cấu hình thông tin liên hệ, bản đồ, form.',
    columns: [
      { field: 'field', label: 'Trường thông tin', type: 'text' },
      { field: 'value', label: 'Giá trị', type: 'text' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: [
      { id: 1, field: 'Hotline', value: '1900 9999', status: 'Hoạt động' },
      { id: 2, field: 'Email', value: 'hello@sofaloft.vn', status: 'Hoạt động' },
      { id: 3, field: 'Địa chỉ HQ', value: '12 Lê Văn Lương, Q7, TP.HCM', status: 'Hoạt động' },
      { id: 4, field: 'Zalo', value: '0909 888 777', status: 'Hoạt động' },
    ],
    stats: [{ label: 'Trường', value: 4 }],
  },
  {
    slug: 'policy',
    label: 'Chính sách',
    icon: 'solar:document-text-bold-duotone',
    description: 'Trang chính sách bảo mật, giao hàng, đổi trả.',
    columns: [
      { field: 'name', label: 'Tên trang', type: 'text' },
      { field: 'slug', label: 'Slug', type: 'text' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
      { field: 'updated', label: 'Cập nhật', type: 'date' },
    ],
    rows: [
      { id: 1, name: 'Chính sách bảo mật', slug: 'privacy-policy', status: 'Hoạt động', updated: '2026-07-01' },
      { id: 2, name: 'Chính sách giao hàng', slug: 'shipping-policy', status: 'Hoạt động', updated: '2026-07-01' },
      { id: 3, name: 'Chính sách đổi trả', slug: 'return-policy', status: 'Hoạt động', updated: '2026-07-15' },
      { id: 4, name: 'Chính sách bảo hành', slug: 'warranty-policy', status: 'Hoạt động', updated: '2026-07-15' },
    ],
    stats: [{ label: 'Trang', value: 4 }],
  },
  {
    slug: 'terms',
    label: 'Điều khoản',
    icon: 'solar:clipboard-list-bold-duotone',
    description: 'Điều khoản dịch vụ, điều khoản sử dụng.',
    columns: [
      { field: 'name', label: 'Tên', type: 'text' },
      { field: 'version', label: 'Phiên bản', type: 'text' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: [
      { id: 1, name: 'Điều khoản sử dụng', version: 'v3.1', status: 'Hoạt động' },
      { id: 2, name: 'Điều khoản dịch vụ', version: 'v2.0', status: 'Hoạt động' },
    ],
    stats: [{ label: 'Tài liệu', value: 2 }],
  },
  {
    slug: 'faq',
    label: 'FAQ',
    icon: 'solar:question-circle-bold-duotone',
    description: 'Quản lý câu hỏi thường gặp.',
    columns: [
      { field: 'question', label: 'Câu hỏi', type: 'text' },
      { field: 'category', label: 'Chủ đề', type: 'text' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: makeRows(8, () => ({
      question: ['Sofa có hợp căn hộ nhỏ không?', 'Da vs velvet khác nhau thế nào?', 'Giao hàng bao lâu?', 'Bảo hành mấy năm?', 'Có màu tùy chọn không?', 'Khung thép có rỉ không?', 'Phí vận chuyển HN?', 'Có trả góp không?'][Math.floor(Math.random() * 8)],
      category: ['Sản phẩm', 'Giao hàng', 'Bảo hành', 'Thanh toán'][Math.floor(Math.random() * 4)],
      status: randomStatus(),
    })),
    stats: [{ label: 'FAQs', value: 8 }],
  },
  {
    slug: 'blog',
    label: 'Blog',
    icon: 'solar:pen-bold-duotone',
    description: 'Quản lý bài viết, danh mục blog.',
    columns: [
      { field: 'title', label: 'Tiêu đề', type: 'text' },
      { field: 'category', label: 'Danh mục', type: 'text' },
      { field: 'author', label: 'Tác giả', type: 'text' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
      { field: 'views', label: 'Lượt xem', type: 'number' },
    ],
    rows: makeRows(12, () => ({
      title: ['Top 5 mẫu sofa industrial 2026', 'Loft nhỏ nhưng có võ', 'Da thật vs da PU: đâu là lựa chọn tốt?', 'Thiết kế phòng khách street style'][Math.floor(Math.random() * 4)],
      category: ['Xu hướng', 'Thiết kế', 'Vật liệu', 'Tips'][Math.floor(Math.random() * 4)],
      author: ['Minh Tú', 'Hải Đăng', 'Kim Ngân'][Math.floor(Math.random() * 3)],
      status: randomStatus(),
      views: randomInt(200, 15000),
    })),
    stats: [{ label: 'Bài viết', value: 12 }, { label: 'Lượt xem/tháng', value: '48.2k' }],
  },
  {
    slug: 'menu',
    label: 'Menu',
    icon: 'solar:list-bold-duotone',
    description: 'Quản lý menu điều hướng trang web.',
    columns: [
      { field: 'label', label: 'Nhãn', type: 'text' },
      { field: 'path', label: 'Đường dẫn', type: 'text' },
      { field: 'position', label: 'Vị trí', type: 'text' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: [
      { id: 1, label: 'Trang chủ', path: '/sofa7', position: 'Header', status: 'Hoạt động' },
      { id: 2, label: 'Sản phẩm', path: '/sofa7/products', position: 'Header', status: 'Hoạt động' },
      { id: 3, label: 'Bộ sưu tập', path: '/sofa7/collections', position: 'Header', status: 'Hoạt động' },
      { id: 4, label: 'Dự án', path: '/sofa7/projects', position: 'Header', status: 'Hoạt động' },
      { id: 5, label: 'Blog', path: '/sofa7/blog', position: 'Header', status: 'Hoạt động' },
      { id: 6, label: 'Liên hệ', path: '/sofa7/contact', position: 'Header & Footer', status: 'Hoạt động' },
    ],
    stats: [{ label: 'Menu items', value: 6 }],
  },
  {
    slug: 'banner',
    label: 'Banner',
    icon: 'solar:gallery-bold-duotone',
    description: 'Quản lý banner quảng cáo trang chủ và trang con.',
    columns: [
      { field: 'name', label: 'Tên banner', type: 'text' },
      { field: 'placement', label: 'Vị trí', type: 'text' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
      { field: 'clicks', label: 'Lượt click', type: 'number' },
    ],
    rows: makeRows(6, () => ({
      name: ['Summer Sale Banner', 'Industrial Collection', 'B2B Banner', 'Flash Deal', 'New Arrival'][Math.floor(Math.random() * 5)],
      placement: ['Trang chủ Hero', 'Sidebar', 'Popup', 'Footer'][Math.floor(Math.random() * 4)],
      status: randomStatus(),
      clicks: randomInt(100, 5000),
    })),
    stats: [{ label: 'Banners', value: 6 }],
  },
  {
    slug: 'slider',
    label: 'Slider',
    icon: 'solar:play-circle-bold-duotone',
    description: 'Cấu hình slider ảnh, carousel nổi bật.',
    columns: [
      { field: 'name', label: 'Tên slider', type: 'text' },
      { field: 'slides', label: 'Số slides', type: 'number' },
      { field: 'placement', label: 'Vị trí', type: 'text' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: [
      { id: 1, name: 'Hero Slider', slides: 5, placement: 'Trang chủ', status: 'Hoạt động' },
      { id: 2, name: 'Product Gallery', slides: 8, placement: 'Trang sản phẩm', status: 'Hoạt động' },
      { id: 3, name: 'Brand Slider', slides: 6, placement: 'Trang giới thiệu', status: 'Nháp' },
    ],
    stats: [{ label: 'Sliders', value: 3 }],
  },
  {
    slug: 'seo',
    label: 'SEO',
    icon: 'solar:magnifer-bold-duotone',
    description: 'Meta title, description, OG tags toàn site.',
    columns: [
      { field: 'page', label: 'Trang', type: 'text' },
      { field: 'title', label: 'Meta Title', type: 'text' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: [
      { id: 1, page: 'Trang chủ', title: 'SOFA LOFT — Urban Industrial Sofa', status: 'Hoạt động' },
      { id: 2, page: 'Sản phẩm', title: 'Sofa Industrial | SOFA LOFT', status: 'Hoạt động' },
      { id: 3, page: 'Bộ sưu tập', title: 'Collections Urban | SOFA LOFT', status: 'Hoạt động' },
    ],
    stats: [{ label: 'Pages', value: 3 }],
  },
  {
    slug: 'static-pages',
    label: 'Trang tĩnh',
    icon: 'solar:document-bold-duotone',
    description: 'Quản lý các trang tĩnh tùy chỉnh.',
    columns: [
      { field: 'name', label: 'Tên trang', type: 'text' },
      { field: 'slug', label: 'Slug', type: 'text' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: [
      { id: 1, name: 'Tuyển dụng', slug: 'careers', status: 'Hoạt động' },
      { id: 2, name: 'Nhà phân phối', slug: 'distributors', status: 'Hoạt động' },
      { id: 3, name: 'Showroom', slug: 'showrooms', status: 'Hoạt động' },
    ],
    stats: [{ label: 'Trang tĩnh', value: 3 }],
  },
];

// ----------------------------------------------------------------------
// Catalog Group

const catalogModules: Sofa7AdminModule[] = [
  {
    slug: 'categories',
    label: 'Danh mục',
    icon: 'solar:widget-bold-duotone',
    description: 'Quản lý danh mục sản phẩm (Raw Concrete, Street Pop, Neon Lounge…).',
    columns: [
      { field: 'name', label: 'Tên danh mục', type: 'text' },
      { field: 'slug', label: 'Slug', type: 'text' },
      { field: 'products', label: 'Sản phẩm', type: 'number' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: [
      { id: 1, name: 'Raw Concrete', slug: 'raw-concrete', products: 14, status: 'Hoạt động' },
      { id: 2, name: 'Street Pop', slug: 'street-pop', products: 11, status: 'Hoạt động' },
      { id: 3, name: 'Neon Lounge', slug: 'neon-lounge', products: 8, status: 'Hoạt động' },
      { id: 4, name: 'Blue Graffiti', slug: 'blue-graffiti', products: 9, status: 'Hoạt động' },
    ],
    stats: [{ label: 'Danh mục', value: 4 }, { label: 'Tổng sản phẩm', value: 42 }],
  },
  {
    slug: 'products',
    label: 'Sản phẩm',
    icon: 'solar:armchair-bold-duotone',
    description: 'Danh sách toàn bộ sản phẩm sofa.',
    columns: [
      { field: 'name', label: 'Tên sản phẩm', type: 'text' },
      { field: 'category', label: 'Danh mục', type: 'text' },
      { field: 'price', label: 'Giá', type: 'money' },
      { field: 'stock', label: 'Tồn kho', type: 'number' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: [
      { id: 1, name: 'Sofa Brick Leather', category: 'Raw Concrete', price: 22500000, stock: 8, status: 'Hoạt động' },
      { id: 2, name: 'Sofa Street Red', category: 'Street Pop', price: 13900000, stock: 15, status: 'Hoạt động' },
      { id: 3, name: 'Sofa Neon Orange', category: 'Neon Lounge', price: 16500000, stock: 6, status: 'Hoạt động' },
      { id: 4, name: 'Sofa Blue Graffiti', category: 'Blue Graffiti', price: 14900000, stock: 11, status: 'Hoạt động' },
      { id: 5, name: 'Sofa Green Velvet', category: 'Street Pop', price: 17500000, stock: 4, status: 'Hoạt động' },
      { id: 6, name: 'Sofa Purple Hype', category: 'Neon Lounge', price: 18900000, stock: 3, status: 'Hoạt động' },
      ...makeRows(6, () => ({
        name: ['Sofa Concrete XL', 'Sofa Urban Bench', 'Sofa Loft Corner', 'Sofa Electric Chair', 'Sofa Acid Wash', 'Sofa Punk Revival'][Math.floor(Math.random() * 6)],
        category: ['Raw Concrete', 'Street Pop', 'Neon Lounge', 'Blue Graffiti'][Math.floor(Math.random() * 4)],
        price: randomMoney(10000000, 30000000),
        stock: randomInt(0, 20),
        status: randomStatus(),
      })),
    ],
    stats: [{ label: 'Sản phẩm', value: 42 }, { label: 'Đang bán', value: 36 }, { label: 'Hết hàng', value: 3 }],
  },
  {
    slug: 'attributes',
    label: 'Thuộc tính',
    icon: 'solar:settings-bold-duotone',
    description: 'Quản lý thuộc tính sản phẩm: màu sắc, chất liệu, kích thước.',
    columns: [
      { field: 'name', label: 'Thuộc tính', type: 'text' },
      { field: 'values', label: 'Giá trị', type: 'number' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: [
      { id: 1, name: 'Màu sắc', values: 12, status: 'Hoạt động' },
      { id: 2, name: 'Chất liệu', values: 5, status: 'Hoạt động' },
      { id: 3, name: 'Kích thước', values: 4, status: 'Hoạt động' },
      { id: 4, name: 'Loại chân ghế', values: 3, status: 'Hoạt động' },
    ],
    stats: [{ label: 'Thuộc tính', value: 4 }],
  },
  {
    slug: 'variants',
    label: 'Biến thể',
    icon: 'solar:copy-bold-duotone',
    description: 'Quản lý biến thể sản phẩm theo màu sắc, chất liệu.',
    columns: [
      { field: 'product', label: 'Sản phẩm', type: 'text' },
      { field: 'variant', label: 'Biến thể', type: 'text' },
      { field: 'price', label: 'Giá', type: 'money' },
      { field: 'stock', label: 'Tồn', type: 'number' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: makeRows(12, () => ({
      product: ['Sofa Brick Leather', 'Sofa Street Red', 'Sofa Neon Orange'][Math.floor(Math.random() * 3)],
      variant: ['Đen / Da thật', 'Đỏ / Velvet', 'Cam / Nhung', 'Xanh / Cotton'][Math.floor(Math.random() * 4)],
      price: randomMoney(12000000, 28000000),
      stock: randomInt(0, 15),
      status: randomStatus(),
    })),
    stats: [{ label: 'Biến thể', value: 12 }],
  },
  {
    slug: 'inventory',
    label: 'Kho hàng',
    icon: 'solar:box-bold-duotone',
    description: 'Theo dõi tồn kho theo SKU.',
    columns: [
      { field: 'sku', label: 'SKU', type: 'text' },
      { field: 'product', label: 'Sản phẩm', type: 'text' },
      { field: 'stock', label: 'Tồn kho', type: 'number' },
      { field: 'reserved', label: 'Đang giữ', type: 'number' },
      { field: 'available', label: 'Có thể bán', type: 'number' },
    ],
    rows: makeRows(10, () => {
      const stock = randomInt(0, 20);
      const reserved = Math.min(randomInt(0, 5), stock);
      return {
        sku: `SL7-${String(randomInt(1000, 9999))}`,
        product: ['Sofa Brick Leather', 'Sofa Street Red', 'Sofa Neon Orange', 'Sofa Blue Graffiti'][Math.floor(Math.random() * 4)],
        stock,
        reserved,
        available: stock - reserved,
      };
    }),
    stats: [{ label: 'Tổng SKU', value: 10 }, { label: 'Tổng tồn', value: 82 }],
  },
  {
    slug: 'pricing',
    label: 'Giá bán',
    icon: 'solar:tag-price-bold-duotone',
    description: 'Quản lý bảng giá, giá nhóm, giá theo kênh.',
    columns: [
      { field: 'product', label: 'Sản phẩm', type: 'text' },
      { field: 'channel', label: 'Kênh', type: 'text' },
      { field: 'price', label: 'Giá', type: 'money' },
      { field: 'discount', label: 'Giảm (%)', type: 'number' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: makeRows(8, () => ({
      product: ['Sofa Brick Leather', 'Sofa Street Red', 'Sofa Neon Orange'][Math.floor(Math.random() * 3)],
      channel: ['Retail', 'B2B', 'Online', 'Showroom'][Math.floor(Math.random() * 4)],
      price: randomMoney(10000000, 28000000),
      discount: randomInt(0, 30),
      status: randomStatus(),
    })),
    stats: [{ label: 'Bảng giá', value: 8 }],
  },
];

// ----------------------------------------------------------------------
// Warehouse Group

const warehouseModules: Sofa7AdminModule[] = [
  {
    slug: 'overview',
    label: 'Tổng quan kho',
    icon: 'solar:chart-bold-duotone',
    description: 'Tổng quan tình trạng kho hàng, cảnh báo hết hàng.',
    columns: [
      { field: 'location', label: 'Kho', type: 'text' },
      { field: 'total_skus', label: 'Tổng SKUs', type: 'number' },
      { field: 'total_value', label: 'Giá trị', type: 'money' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: [
      { id: 1, location: 'Kho TP.HCM', total_skus: 180, total_value: 2800000000, status: 'Hoạt động' },
      { id: 2, location: 'Kho Hà Nội', total_skus: 120, total_value: 1900000000, status: 'Hoạt động' },
      { id: 3, location: 'Kho Đà Nẵng', total_skus: 60, total_value: 850000000, status: 'Hoạt động' },
    ],
    stats: [{ label: 'Kho', value: 3 }, { label: 'Tổng SKUs', value: 360 }, { label: 'Giá trị tồn', value: '5.5 tỷ' }],
  },
  {
    slug: 'receipts',
    label: 'Nhập kho',
    icon: 'solar:box-minimalistic-bold-duotone',
    description: 'Lịch sử và quản lý phiếu nhập kho.',
    columns: [
      { field: 'code', label: 'Mã phiếu', type: 'text' },
      { field: 'supplier', label: 'Nhà cung cấp', type: 'text' },
      { field: 'items', label: 'Số lượng', type: 'number' },
      { field: 'total', label: 'Giá trị', type: 'money' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: makeRows(10, () => ({
      code: `PN-${randomInt(10000, 99999)}`,
      supplier: ['Da Premium Co.', 'Steel Frame Ltd.', 'Velvet Textile'][Math.floor(Math.random() * 3)],
      items: randomInt(5, 50),
      total: randomMoney(50000000, 500000000),
      status: ['Hoàn thành', 'Chờ duyệt', 'Đang xử lý'][Math.floor(Math.random() * 3)],
    })),
    stats: [{ label: 'Phiếu tháng này', value: 10 }],
  },
  {
    slug: 'transfers',
    label: 'Chuyển kho',
    icon: 'solar:transfer-horizontal-bold-duotone',
    description: 'Quản lý phiếu chuyển hàng giữa các kho.',
    columns: [
      { field: 'code', label: 'Mã phiếu', type: 'text' },
      { field: 'from', label: 'Từ kho', type: 'text' },
      { field: 'to', label: 'Đến kho', type: 'text' },
      { field: 'items', label: 'SL', type: 'number' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: makeRows(8, () => ({
      code: `CK-${randomInt(10000, 99999)}`,
      from: ['Kho TP.HCM', 'Kho Hà Nội', 'Kho Đà Nẵng'][Math.floor(Math.random() * 3)],
      to: ['Kho TP.HCM', 'Kho Hà Nội', 'Kho Đà Nẵng'][Math.floor(Math.random() * 3)],
      items: randomInt(1, 20),
      status: ['Hoàn thành', 'Đang vận chuyển', 'Chờ xác nhận'][Math.floor(Math.random() * 3)],
    })),
    stats: [{ label: 'Phiếu tháng này', value: 8 }],
  },
];

// ----------------------------------------------------------------------
// Orders Group

const orderModules: Sofa7AdminModule[] = [
  {
    slug: 'orders',
    label: 'Đơn hàng',
    icon: 'solar:bag-check-bold-duotone',
    description: 'Quản lý toàn bộ đơn hàng.',
    columns: [
      { field: 'code', label: 'Mã đơn', type: 'text' },
      { field: 'customer', label: 'Khách hàng', type: 'text' },
      { field: 'total', label: 'Tổng tiền', type: 'money' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: makeRows(20, () => ({
      code: `SL7-${randomInt(100000, 999999)}`,
      customer: ['Nguyễn Văn A', 'Trần Thị B', 'Lê Hoàng C', 'Phạm Minh D', 'Đặng Thị E'][Math.floor(Math.random() * 5)],
      total: randomMoney(8000000, 45000000),
      status: randomOrderStatus(),
    })),
    stats: [{ label: 'Đơn tháng này', value: 20 }, { label: 'Chờ xử lý', value: 5 }, { label: 'Hoàn thành', value: 12 }],
  },
  {
    slug: 'payments',
    label: 'Thanh toán',
    icon: 'solar:wallet-bold-duotone',
    description: 'Theo dõi giao dịch thanh toán.',
    columns: [
      { field: 'tx_id', label: 'Mã GD', type: 'text' },
      { field: 'order', label: 'Đơn hàng', type: 'text' },
      { field: 'method', label: 'Phương thức', type: 'text' },
      { field: 'amount', label: 'Số tiền', type: 'money' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: makeRows(15, () => ({
      tx_id: `TXN-${randomInt(1000000, 9999999)}`,
      order: `SL7-${randomInt(100000, 999999)}`,
      method: ['VNPay', 'Momo', 'Thẻ tín dụng', 'Chuyển khoản', 'COD'][Math.floor(Math.random() * 5)],
      amount: randomMoney(8000000, 45000000),
      status: ['Thành công', 'Chờ thanh toán', 'Thất bại', 'Hoàn tiền'][Math.floor(Math.random() * 4)],
    })),
    stats: [{ label: 'GD tháng này', value: 15 }, { label: 'Doanh thu', value: '285 tr' }],
  },
  {
    slug: 'shipping',
    label: 'Vận chuyển',
    icon: 'solar:delivery-bold-duotone',
    description: 'Theo dõi trạng thái giao hàng.',
    columns: [
      { field: 'tracking', label: 'Mã vận đơn', type: 'text' },
      { field: 'order', label: 'Đơn hàng', type: 'text' },
      { field: 'carrier', label: 'Đơn vị VC', type: 'text' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: makeRows(15, () => ({
      tracking: `GHN${randomInt(100000000, 999999999)}`,
      order: `SL7-${randomInt(100000, 999999)}`,
      carrier: ['GHN', 'GHTK', 'ViettelPost', 'J&T Express'][Math.floor(Math.random() * 4)],
      status: ['Đang lấy hàng', 'Đang giao', 'Đã giao', 'Giao thất bại'][Math.floor(Math.random() * 4)],
    })),
    stats: [{ label: 'Đang vận chuyển', value: 8 }, { label: 'Đã giao', value: 12 }],
  },
  {
    slug: 'refunds',
    label: 'Hoàn tiền',
    icon: 'solar:arrow-left-down-bold-duotone',
    description: 'Quản lý yêu cầu hoàn tiền.',
    columns: [
      { field: 'code', label: 'Mã yêu cầu', type: 'text' },
      { field: 'order', label: 'Đơn hàng', type: 'text' },
      { field: 'amount', label: 'Số tiền', type: 'money' },
      { field: 'reason', label: 'Lý do', type: 'text' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: makeRows(5, () => ({
      code: `RF-${randomInt(10000, 99999)}`,
      order: `SL7-${randomInt(100000, 999999)}`,
      amount: randomMoney(5000000, 25000000),
      reason: ['Sản phẩm lỗi', 'Sai màu', 'Không đúng size', 'Không hài lòng'][Math.floor(Math.random() * 4)],
      status: ['Chờ duyệt', 'Đã hoàn', 'Từ chối'][Math.floor(Math.random() * 3)],
    })),
    stats: [{ label: 'Yêu cầu tháng này', value: 5 }],
  },
  {
    slug: 'returns',
    label: 'Đổi trả',
    icon: 'solar:refresh-circle-bold-duotone',
    description: 'Quản lý hàng đổi trả.',
    columns: [
      { field: 'code', label: 'Mã đổi trả', type: 'text' },
      { field: 'order', label: 'Đơn hàng', type: 'text' },
      { field: 'product', label: 'Sản phẩm', type: 'text' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: makeRows(6, () => ({
      code: `DT-${randomInt(10000, 99999)}`,
      order: `SL7-${randomInt(100000, 999999)}`,
      product: ['Sofa Brick Leather', 'Sofa Street Red', 'Sofa Neon Orange'][Math.floor(Math.random() * 3)],
      status: ['Đang xử lý', 'Đã đổi', 'Từ chối'][Math.floor(Math.random() * 3)],
    })),
    stats: [{ label: 'Đổi trả tháng này', value: 6 }],
  },
];

// ----------------------------------------------------------------------
// CRM Group

const crmModules: Sofa7AdminModule[] = [
  {
    slug: 'customers',
    label: 'Khách hàng',
    icon: 'solar:users-group-rounded-bold-duotone',
    description: 'Danh sách và hồ sơ khách hàng.',
    columns: [
      { field: 'name', label: 'Tên', type: 'text' },
      { field: 'email', label: 'Email', type: 'text' },
      { field: 'phone', label: 'SĐT', type: 'text' },
      { field: 'orders', label: 'Đơn hàng', type: 'number' },
      { field: 'ltv', label: 'LTV', type: 'money' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: makeRows(20, () => ({
      name: ['Nguyễn Văn An', 'Trần Thị Bảo', 'Lê Hoàng', 'Phạm Minh Tuấn', 'Đặng Thị Mai'][Math.floor(Math.random() * 5)],
      email: ['user@gmail.com', 'contact@co.vn', 'hello@mail.com'][Math.floor(Math.random() * 3)],
      phone: `09${randomInt(10000000, 99999999)}`,
      orders: randomInt(1, 12),
      ltv: randomMoney(8000000, 120000000),
      status: ['VIP', 'Thường', 'Mới'][Math.floor(Math.random() * 3)],
    })),
    stats: [{ label: 'Tổng KH', value: 4820 }, { label: 'VIP', value: 380 }, { label: 'Mới tháng này', value: 92 }],
  },
  {
    slug: 'leads',
    label: 'Leads',
    icon: 'solar:user-speak-bold-duotone',
    description: 'Quản lý khách hàng tiềm năng.',
    columns: [
      { field: 'name', label: 'Tên', type: 'text' },
      { field: 'source', label: 'Nguồn', type: 'text' },
      { field: 'interest', label: 'Quan tâm', type: 'text' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: makeRows(15, () => ({
      name: ['Nguyễn Văn X', 'Trần Thị Y', 'Lê Z'][Math.floor(Math.random() * 3)],
      source: ['Facebook Ads', 'Google Ads', 'Referral', 'Showroom', 'Instagram'][Math.floor(Math.random() * 5)],
      interest: ['Raw Concrete', 'Street Pop', 'Neon Lounge', 'Tư vấn nội thất'][Math.floor(Math.random() * 4)],
      status: ['Mới', 'Đang chăm sóc', 'Chốt đơn', 'Không tiềm năng'][Math.floor(Math.random() * 4)],
    })),
    stats: [{ label: 'Leads tháng này', value: 148 }, { label: 'Tỷ lệ chốt', value: '24%' }],
  },
  {
    slug: 'purchase-history',
    label: 'Lịch sử mua',
    icon: 'solar:history-bold-duotone',
    description: 'Lịch sử giao dịch theo khách hàng.',
    columns: [
      { field: 'customer', label: 'Khách hàng', type: 'text' },
      { field: 'order', label: 'Đơn hàng', type: 'text' },
      { field: 'total', label: 'Tổng tiền', type: 'money' },
      { field: 'date', label: 'Ngày mua', type: 'date' },
    ],
    rows: makeRows(20, () => ({
      customer: ['Nguyễn Văn An', 'Trần Thị Bảo', 'Lê Hoàng'][Math.floor(Math.random() * 3)],
      order: `SL7-${randomInt(100000, 999999)}`,
      total: randomMoney(8000000, 45000000),
      date: `2026-0${randomInt(1, 9)}-${String(randomInt(1, 28)).padStart(2, '0')}`,
    })),
    stats: [{ label: 'Giao dịch', value: 20 }],
  },
  {
    slug: 'care',
    label: 'Chăm sóc KH',
    icon: 'solar:heart-bold-duotone',
    description: 'Tickets hỗ trợ, chat, phản hồi khách hàng.',
    columns: [
      { field: 'ticket', label: 'Ticket', type: 'text' },
      { field: 'customer', label: 'Khách hàng', type: 'text' },
      { field: 'issue', label: 'Vấn đề', type: 'text' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: makeRows(12, () => ({
      ticket: `TK-${randomInt(10000, 99999)}`,
      customer: ['Nguyễn Văn An', 'Trần Thị Bảo', 'Lê Hoàng'][Math.floor(Math.random() * 3)],
      issue: ['Giao hàng chậm', 'Sản phẩm lỗi', 'Hỏi về bảo hành', 'Đổi màu sắc'][Math.floor(Math.random() * 4)],
      status: ['Mở', 'Đang xử lý', 'Đã giải quyết'][Math.floor(Math.random() * 3)],
    })),
    stats: [{ label: 'Tickets mở', value: 8 }, { label: 'Đã giải quyết', value: 24 }],
  },
];

// ----------------------------------------------------------------------
// Marketing Group

const marketingModules: Sofa7AdminModule[] = [
  {
    slug: 'email',
    label: 'Email Marketing',
    icon: 'solar:letter-bold-duotone',
    description: 'Chiến dịch email, newsletter, automation.',
    columns: [
      { field: 'name', label: 'Chiến dịch', type: 'text' },
      { field: 'sent', label: 'Đã gửi', type: 'number' },
      { field: 'open_rate', label: 'Open rate', type: 'text' },
      { field: 'click_rate', label: 'Click rate', type: 'text' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: makeRows(8, () => ({
      name: ['Street Pop Flash Sale', 'New Arrival Alert', 'VIP Early Access', 'Concrete Collection Launch'][Math.floor(Math.random() * 4)],
      sent: randomInt(1000, 15000),
      open_rate: `${randomInt(18, 45)}%`,
      click_rate: `${randomInt(3, 18)}%`,
      status: ['Đã gửi', 'Đang gửi', 'Nháp', 'Lên lịch'][Math.floor(Math.random() * 4)],
    })),
    stats: [{ label: 'Subscribers', value: '18.4k' }, { label: 'Open rate TB', value: '32%' }],
  },
  {
    slug: 'sms',
    label: 'SMS Marketing',
    icon: 'solar:chat-round-dots-bold-duotone',
    description: 'Chiến dịch SMS, OTP, thông báo đơn hàng.',
    columns: [
      { field: 'name', label: 'Chiến dịch', type: 'text' },
      { field: 'sent', label: 'Đã gửi', type: 'number' },
      { field: 'delivered', label: 'Delivered', type: 'number' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: makeRows(6, () => ({
      name: ['Flash Deal 24h', 'Nhắc nhở giỏ hàng', 'Chương trình VIP'][Math.floor(Math.random() * 3)],
      sent: randomInt(500, 8000),
      delivered: randomInt(400, 7800),
      status: ['Đã gửi', 'Đang gửi', 'Nháp'][Math.floor(Math.random() * 3)],
    })),
    stats: [{ label: 'SMS tháng này', value: '24.2k' }],
  },
  {
    slug: 'push',
    label: 'Push Notification',
    icon: 'solar:bell-bold-duotone',
    description: 'Web push và app push notifications.',
    columns: [
      { field: 'title', label: 'Tiêu đề', type: 'text' },
      { field: 'sent', label: 'Đã gửi', type: 'number' },
      { field: 'clicked', label: 'Click', type: 'number' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: makeRows(6, () => ({
      title: ['Sofa mới về!', 'Flash sale 2 giờ', 'Đơn hàng đã giao'][Math.floor(Math.random() * 3)],
      sent: randomInt(2000, 20000),
      clicked: randomInt(100, 2000),
      status: randomStatus(),
    })),
    stats: [{ label: 'Subscribers', value: '9.8k' }],
  },
  {
    slug: 'coupon',
    label: 'Coupon',
    icon: 'solar:ticket-sale-bold-duotone',
    description: 'Mã giảm giá, flash sale, voucher.',
    columns: [
      { field: 'code', label: 'Mã', type: 'text' },
      { field: 'discount', label: 'Giảm', type: 'text' },
      { field: 'used', label: 'Đã dùng', type: 'number' },
      { field: 'limit', label: 'Giới hạn', type: 'number' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: [
      { id: 1, code: 'URBAN10', discount: '10%', used: 142, limit: 500, status: 'Hoạt động' },
      { id: 2, code: 'LOFT20', discount: '20%', used: 88, limit: 200, status: 'Hoạt động' },
      { id: 3, code: 'STREET30', discount: '30%', used: 200, limit: 200, status: 'Hết lượt' },
      { id: 4, code: 'NEON5M', discount: '5.000.000đ', used: 12, limit: 100, status: 'Hoạt động' },
      { id: 5, code: 'VIP2026', discount: '15%', used: 55, limit: 300, status: 'Hoạt động' },
    ],
    stats: [{ label: 'Mã đang chạy', value: 4 }, { label: 'Dùng tháng này', value: 497 }],
  },
  {
    slug: 'affiliate',
    label: 'Affiliate',
    icon: 'solar:share-bold-duotone',
    description: 'Quản lý đối tác affiliate, hoa hồng.',
    columns: [
      { field: 'name', label: 'Đối tác', type: 'text' },
      { field: 'code', label: 'Mã ref', type: 'text' },
      { field: 'clicks', label: 'Clicks', type: 'number' },
      { field: 'orders', label: 'Đơn', type: 'number' },
      { field: 'commission', label: 'Hoa hồng', type: 'money' },
    ],
    rows: makeRows(8, () => ({
      name: ['Blogger A', 'KOL B', 'Review Site C', 'Interior Designer D'][Math.floor(Math.random() * 4)],
      code: `AFF${randomInt(1000, 9999)}`,
      clicks: randomInt(200, 5000),
      orders: randomInt(5, 80),
      commission: randomMoney(500000, 15000000),
    })),
    stats: [{ label: 'Đối tác', value: 8 }, { label: 'Hoa hồng tháng', value: '48 tr' }],
  },
];

// ----------------------------------------------------------------------
// Analytics Group

const analyticsModules: Sofa7AdminModule[] = [
  {
    slug: 'revenue',
    label: 'Doanh thu',
    icon: 'solar:chart-2-bold-duotone',
    description: 'Báo cáo doanh thu theo ngày, tuần, tháng, kênh.',
    columns: [
      { field: 'period', label: 'Kỳ', type: 'text' },
      { field: 'orders', label: 'Đơn hàng', type: 'number' },
      { field: 'revenue', label: 'Doanh thu', type: 'money' },
      { field: 'growth', label: 'Tăng trưởng', type: 'text' },
    ],
    rows: [
      { id: 1, period: 'Tháng 9/2026', orders: 284, revenue: 4820000000, growth: '+18%' },
      { id: 2, period: 'Tháng 8/2026', orders: 241, revenue: 4080000000, growth: '+12%' },
      { id: 3, period: 'Tháng 7/2026', orders: 215, revenue: 3640000000, growth: '+8%' },
      { id: 4, period: 'Tháng 6/2026', orders: 199, revenue: 3370000000, growth: '+5%' },
      { id: 5, period: 'Tháng 5/2026', orders: 189, revenue: 3200000000, growth: '+3%' },
    ],
    stats: [{ label: 'Doanh thu tháng', value: '4.8 tỷ' }, { label: 'Tăng trưởng', value: '+18%' }],
  },
  {
    slug: 'best-sellers',
    label: 'Bán chạy',
    icon: 'solar:star-bold-duotone',
    description: 'Sản phẩm bán chạy theo doanh số và lượt mua.',
    columns: [
      { field: 'rank', label: '#', type: 'number' },
      { field: 'product', label: 'Sản phẩm', type: 'text' },
      { field: 'sold', label: 'Đã bán', type: 'number' },
      { field: 'revenue', label: 'Doanh thu', type: 'money' },
    ],
    rows: [
      { id: 1, rank: 1, product: 'Sofa Street Red', sold: 312, revenue: 4340000000 },
      { id: 2, rank: 2, product: 'Sofa Brick Leather', sold: 268, revenue: 6030000000 },
      { id: 3, rank: 3, product: 'Sofa Neon Orange', sold: 224, revenue: 3696000000 },
      { id: 4, rank: 4, product: 'Sofa Blue Graffiti', sold: 198, revenue: 2950000000 },
      { id: 5, rank: 5, product: 'Sofa Green Velvet', sold: 156, revenue: 2730000000 },
    ],
    stats: [{ label: 'SP bán chạy nhất', value: 'Sofa Street Red' }],
  },
  {
    slug: 'traffic',
    label: 'Nguồn truy cập',
    icon: 'solar:global-bold-duotone',
    description: 'Phân tích nguồn traffic: organic, paid, social.',
    columns: [
      { field: 'source', label: 'Nguồn', type: 'text' },
      { field: 'sessions', label: 'Phiên', type: 'number' },
      { field: 'users', label: 'Người dùng', type: 'number' },
      { field: 'conversion', label: 'Chuyển đổi', type: 'text' },
    ],
    rows: [
      { id: 1, source: 'Google Organic', sessions: 38200, users: 29400, conversion: '2.8%' },
      { id: 2, source: 'Facebook Ads', sessions: 24800, users: 21200, conversion: '3.4%' },
      { id: 3, source: 'Instagram', sessions: 18600, users: 15800, conversion: '2.1%' },
      { id: 4, source: 'Direct', sessions: 12400, users: 9800, conversion: '4.2%' },
      { id: 5, source: 'TikTok', sessions: 8200, users: 7100, conversion: '1.8%' },
    ],
    stats: [{ label: 'Tổng sessions/tháng', value: '102.2k' }],
  },
  {
    slug: 'behavior',
    label: 'Hành vi KH',
    icon: 'solar:eye-bold-duotone',
    description: 'Phân tích hành vi duyệt web, trang được xem nhiều.',
    columns: [
      { field: 'page', label: 'Trang', type: 'text' },
      { field: 'views', label: 'Lượt xem', type: 'number' },
      { field: 'avg_time', label: 'Thời gian TB', type: 'text' },
      { field: 'bounce', label: 'Bounce rate', type: 'text' },
    ],
    rows: [
      { id: 1, page: '/sofa7', views: 48200, avg_time: '3m 24s', bounce: '38%' },
      { id: 2, page: '/sofa7/products', views: 32100, avg_time: '4m 12s', bounce: '28%' },
      { id: 3, page: '/sofa7/collections', views: 24800, avg_time: '2m 55s', bounce: '42%' },
      { id: 4, page: '/sofa7/product/brick-leather', views: 18400, avg_time: '5m 08s', bounce: '22%' },
    ],
    stats: [{ label: 'Trang/session TB', value: 4.2 }],
  },
  {
    slug: 'conversion',
    label: 'Chuyển đổi',
    icon: 'solar:graph-new-up-bold-duotone',
    description: 'Phễu chuyển đổi từ visit đến purchase.',
    columns: [
      { field: 'stage', label: 'Giai đoạn', type: 'text' },
      { field: 'users', label: 'Người dùng', type: 'number' },
      { field: 'rate', label: 'Tỷ lệ', type: 'text' },
    ],
    rows: [
      { id: 1, stage: 'Truy cập trang', users: 102200, rate: '100%' },
      { id: 2, stage: 'Xem sản phẩm', users: 68400, rate: '66.9%' },
      { id: 3, stage: 'Thêm giỏ hàng', users: 18200, rate: '17.8%' },
      { id: 4, stage: 'Thanh toán', users: 7800, rate: '7.6%' },
      { id: 5, stage: 'Hoàn thành đơn', users: 6200, rate: '6.1%' },
    ],
    stats: [{ label: 'Tỷ lệ chuyển đổi', value: '6.1%' }, { label: 'AOV', value: '15.8 tr' }],
  },
];

// ----------------------------------------------------------------------
// SEO Group

const seoModules: Sofa7AdminModule[] = [
  {
    slug: 'category',
    label: 'Trang danh mục',
    icon: 'solar:folder-bold-duotone',
    description: 'SEO cho các trang danh mục sản phẩm.',
    columns: [
      { field: 'page', label: 'Trang', type: 'text' },
      { field: 'title', label: 'Meta Title', type: 'text' },
      { field: 'score', label: 'SEO Score', type: 'number' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: [
      { id: 1, page: 'Raw Concrete', title: 'Sofa Bê Tông Industrial | SOFA LOFT', score: 88, status: 'Hoạt động' },
      { id: 2, page: 'Street Pop', title: 'Sofa Street Pop Màu Nổi | SOFA LOFT', score: 85, status: 'Hoạt động' },
      { id: 3, page: 'Neon Lounge', title: 'Sofa Neon Lounge Urban | SOFA LOFT', score: 82, status: 'Hoạt động' },
      { id: 4, page: 'Blue Graffiti', title: 'Sofa Blue Graffiti | SOFA LOFT', score: 79, status: 'Hoạt động' },
    ],
    stats: [{ label: 'Trang danh mục', value: 4 }, { label: 'Score TB', value: 84 }],
  },
  {
    slug: 'product',
    label: 'Trang sản phẩm',
    icon: 'solar:armchair-bold-duotone',
    description: 'SEO từng trang sản phẩm.',
    columns: [
      { field: 'product', label: 'Sản phẩm', type: 'text' },
      { field: 'title', label: 'Meta Title', type: 'text' },
      { field: 'score', label: 'Score', type: 'number' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: makeRows(8, () => ({
      product: ['Sofa Brick Leather', 'Sofa Street Red', 'Sofa Neon Orange', 'Sofa Blue Graffiti'][Math.floor(Math.random() * 4)],
      title: 'Sofa Industrial Urban | SOFA LOFT',
      score: randomInt(70, 95),
      status: randomStatus(),
    })),
    stats: [{ label: 'Trang SP', value: 42 }, { label: 'Score TB', value: 83 }],
  },
  {
    slug: 'collection',
    label: 'Trang bộ sưu tập',
    icon: 'solar:widget-bold-duotone',
    description: 'SEO cho trang bộ sưu tập.',
    columns: [
      { field: 'collection', label: 'BST', type: 'text' },
      { field: 'title', label: 'Meta Title', type: 'text' },
      { field: 'score', label: 'Score', type: 'number' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: [
      { id: 1, collection: 'Urban Industrial 2026', title: 'BST Urban Industrial 2026 | SOFA LOFT', score: 91, status: 'Hoạt động' },
      { id: 2, collection: 'Street Art Edition', title: 'Street Art Sofa Collection | SOFA LOFT', score: 87, status: 'Hoạt động' },
    ],
    stats: [{ label: 'BST', value: 2 }],
  },
  {
    slug: 'project',
    label: 'Trang dự án',
    icon: 'solar:buildings-bold-duotone',
    description: 'SEO trang dự án nội thất.',
    columns: [
      { field: 'project', label: 'Dự án', type: 'text' },
      { field: 'title', label: 'Meta Title', type: 'text' },
      { field: 'score', label: 'Score', type: 'number' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: makeRows(5, () => ({
      project: ['Loft Q7', 'Brick Studio', 'Urban Café', 'Creative Office'][Math.floor(Math.random() * 4)],
      title: 'Dự án Nội Thất Loft | SOFA LOFT',
      score: randomInt(72, 90),
      status: randomStatus(),
    })),
    stats: [{ label: 'Dự án', value: 5 }],
  },
  {
    slug: 'showroom',
    label: 'Trang showroom',
    icon: 'solar:map-point-bold-duotone',
    description: 'SEO trang showroom, local SEO.',
    columns: [
      { field: 'showroom', label: 'Showroom', type: 'text' },
      { field: 'title', label: 'Meta Title', type: 'text' },
      { field: 'score', label: 'Score', type: 'number' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: [
      { id: 1, showroom: 'TP.HCM — Q7', title: 'Sofa Showroom Q7 TP.HCM | SOFA LOFT', score: 89, status: 'Hoạt động' },
      { id: 2, showroom: 'Hà Nội — Cầu Giấy', title: 'Sofa Showroom Cầu Giấy HN | SOFA LOFT', score: 85, status: 'Hoạt động' },
    ],
    stats: [{ label: 'Showrooms', value: 8 }],
  },
  {
    slug: 'blog',
    label: 'Trang blog',
    icon: 'solar:pen-bold-duotone',
    description: 'SEO từng bài blog.',
    columns: [
      { field: 'post', label: 'Bài viết', type: 'text' },
      { field: 'keywords', label: 'Từ khóa chính', type: 'text' },
      { field: 'score', label: 'Score', type: 'number' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: makeRows(6, () => ({
      post: ['Top sofa industrial', 'Loft design tips', 'Da thật vs velvet'][Math.floor(Math.random() * 3)],
      keywords: ['sofa industrial', 'sofa loft', 'nội thất urban'][Math.floor(Math.random() * 3)],
      score: randomInt(68, 92),
      status: randomStatus(),
    })),
    stats: [{ label: 'Bài blog', value: 12 }],
  },
  {
    slug: 'brand',
    label: 'Trang thương hiệu',
    icon: 'solar:star-bold-duotone',
    description: 'SEO trang thương hiệu đối tác, nhà cung cấp.',
    columns: [
      { field: 'brand', label: 'Thương hiệu', type: 'text' },
      { field: 'title', label: 'Meta Title', type: 'text' },
      { field: 'score', label: 'Score', type: 'number' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: [
      { id: 1, brand: 'SOFA LOFT', title: 'SOFA LOFT — Urban Industrial Furniture Brand', score: 94, status: 'Hoạt động' },
      { id: 2, brand: 'Steel Frame Co.', title: 'Steel Frame Industrial Furniture', score: 78, status: 'Hoạt động' },
    ],
    stats: [{ label: 'Thương hiệu', value: 2 }],
  },
  {
    slug: 'sitemap',
    label: 'Sitemap',
    icon: 'solar:map-bold-duotone',
    description: 'Quản lý sitemap XML, cập nhật tự động.',
    columns: [
      { field: 'type', label: 'Loại', type: 'text' },
      { field: 'urls', label: 'Số URLs', type: 'number' },
      { field: 'updated', label: 'Cập nhật', type: 'date' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: [
      { id: 1, type: 'Sản phẩm', urls: 42, updated: '2026-09-10', status: 'Hoạt động' },
      { id: 2, type: 'Danh mục', urls: 8, updated: '2026-09-10', status: 'Hoạt động' },
      { id: 3, type: 'Blog', urls: 12, updated: '2026-09-09', status: 'Hoạt động' },
      { id: 4, type: 'Dự án', urls: 18, updated: '2026-09-08', status: 'Hoạt động' },
    ],
    stats: [{ label: 'Tổng URLs', value: 80 }],
  },
  {
    slug: 'robots',
    label: 'Robots.txt',
    icon: 'solar:robot-bold-duotone',
    description: 'Cấu hình robots.txt, quy tắc crawl.',
    columns: [
      { field: 'directive', label: 'Directive', type: 'text' },
      { field: 'path', label: 'Path', type: 'text' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: [
      { id: 1, directive: 'Allow', path: '/', status: 'Hoạt động' },
      { id: 2, directive: 'Disallow', path: '/admin', status: 'Hoạt động' },
      { id: 3, directive: 'Disallow', path: '/checkout', status: 'Hoạt động' },
      { id: 4, directive: 'Sitemap', path: '/sitemap.xml', status: 'Hoạt động' },
    ],
    stats: [{ label: 'Rules', value: 4 }],
  },
  {
    slug: 'schema',
    label: 'Schema',
    icon: 'solar:code-bold-duotone',
    description: 'Structured data / Schema.org cho rich snippets.',
    columns: [
      { field: 'type', label: 'Schema Type', type: 'text' },
      { field: 'applied_to', label: 'Áp dụng cho', type: 'text' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: [
      { id: 1, type: 'Product', applied_to: 'Tất cả sản phẩm', status: 'Hoạt động' },
      { id: 2, type: 'Organization', applied_to: 'Trang chủ', status: 'Hoạt động' },
      { id: 3, type: 'BreadcrumbList', applied_to: 'Toàn site', status: 'Hoạt động' },
      { id: 4, type: 'LocalBusiness', applied_to: 'Trang showroom', status: 'Hoạt động' },
      { id: 5, type: 'FAQPage', applied_to: 'Trang FAQ', status: 'Hoạt động' },
    ],
    stats: [{ label: 'Schema types', value: 5 }],
  },
];

// ----------------------------------------------------------------------
// Access Group

const accessModules: Sofa7AdminModule[] = [
  {
    slug: 'users',
    label: 'Người dùng',
    icon: 'solar:user-bold-duotone',
    description: 'Danh sách tài khoản quản trị.',
    columns: [
      { field: 'name', label: 'Tên', type: 'text' },
      { field: 'email', label: 'Email', type: 'text' },
      { field: 'role', label: 'Vai trò', type: 'text' },
      { field: 'last_login', label: 'Đăng nhập cuối', type: 'date' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: [
      { id: 1, name: 'Admin Chính', email: 'admin@sofaloft.vn', role: 'Super Admin', last_login: '2026-09-11', status: 'Hoạt động' },
      { id: 2, name: 'Minh Tú', email: 'mintu@sofaloft.vn', role: 'Marketing', last_login: '2026-09-10', status: 'Hoạt động' },
      { id: 3, name: 'Hải Đăng', email: 'haidang@sofaloft.vn', role: 'Content', last_login: '2026-09-09', status: 'Hoạt động' },
      { id: 4, name: 'Kim Ngân', email: 'kimng@sofaloft.vn', role: 'Order Manager', last_login: '2026-09-11', status: 'Hoạt động' },
      { id: 5, name: 'Hoàng Long', email: 'hlong@sofaloft.vn', role: 'Warehouse', last_login: '2026-09-08', status: 'Hoạt động' },
    ],
    stats: [{ label: 'Tổng users', value: 5 }, { label: 'Đang hoạt động', value: 5 }],
  },
  {
    slug: 'roles',
    label: 'Vai trò',
    icon: 'solar:user-id-bold-duotone',
    description: 'Quản lý các vai trò và quyền hạn.',
    columns: [
      { field: 'name', label: 'Vai trò', type: 'text' },
      { field: 'users', label: 'Người dùng', type: 'number' },
      { field: 'permissions', label: 'Số quyền', type: 'number' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: [
      { id: 1, name: 'Super Admin', users: 1, permissions: 120, status: 'Hoạt động' },
      { id: 2, name: 'Marketing', users: 2, permissions: 35, status: 'Hoạt động' },
      { id: 3, name: 'Content', users: 1, permissions: 28, status: 'Hoạt động' },
      { id: 4, name: 'Order Manager', users: 1, permissions: 40, status: 'Hoạt động' },
      { id: 5, name: 'Warehouse', users: 2, permissions: 25, status: 'Hoạt động' },
    ],
    stats: [{ label: 'Vai trò', value: 5 }],
  },
  {
    slug: 'permissions',
    label: 'Quyền hạn',
    icon: 'solar:key-bold-duotone',
    description: 'Danh sách quyền theo module.',
    columns: [
      { field: 'module', label: 'Module', type: 'text' },
      { field: 'action', label: 'Hành động', type: 'text' },
      { field: 'roles', label: 'Vai trò có quyền', type: 'text' },
      { field: 'status', label: 'Trạng thái', type: 'status' },
    ],
    rows: [
      { id: 1, module: 'Sản phẩm', action: 'Xem', roles: 'Tất cả', status: 'Hoạt động' },
      { id: 2, module: 'Sản phẩm', action: 'Thêm/Sửa', roles: 'Super Admin, Order Manager', status: 'Hoạt động' },
      { id: 3, module: 'Đơn hàng', action: 'Xem', roles: 'Super Admin, Order Manager', status: 'Hoạt động' },
      { id: 4, module: 'Đơn hàng', action: 'Cập nhật', roles: 'Super Admin, Order Manager', status: 'Hoạt động' },
      { id: 5, module: 'Marketing', action: 'Toàn quyền', roles: 'Super Admin, Marketing', status: 'Hoạt động' },
      { id: 6, module: 'Kho hàng', action: 'Toàn quyền', roles: 'Super Admin, Warehouse', status: 'Hoạt động' },
    ],
    stats: [{ label: 'Quyền hạn', value: 6 }],
  },
  {
    slug: 'audit-log',
    label: 'Nhật ký hệ thống',
    icon: 'solar:clipboard-list-bold-duotone',
    description: 'Lịch sử hành động của người dùng quản trị.',
    columns: [
      { field: 'user', label: 'Người dùng', type: 'text' },
      { field: 'action', label: 'Hành động', type: 'text' },
      { field: 'module', label: 'Module', type: 'text' },
      { field: 'time', label: 'Thời gian', type: 'date' },
    ],
    rows: makeRows(20, () => ({
      user: ['Admin Chính', 'Minh Tú', 'Kim Ngân', 'Hoàng Long'][Math.floor(Math.random() * 4)],
      action: ['Thêm sản phẩm', 'Cập nhật đơn hàng', 'Xoá banner', 'Gửi email campaign', 'Đổi trạng thái kho'][Math.floor(Math.random() * 5)],
      module: ['Catalog', 'Orders', 'CMS', 'Marketing', 'Warehouse'][Math.floor(Math.random() * 5)],
      time: `2026-09-${String(randomInt(1, 11)).padStart(2, '0')} ${String(randomInt(7, 22)).padStart(2, '0')}:${String(randomInt(0, 59)).padStart(2, '0')}`,
    })),
    stats: [{ label: 'Logs hôm nay', value: 48 }],
  },
];

// ----------------------------------------------------------------------
// All Groups

export const SOFA7_ADMIN_GROUPS: Sofa7AdminGroup[] = [
  { slug: 'cms',        label: 'CMS',           icon: 'solar:file-text-bold-duotone',         modules: cmsModules },
  { slug: 'catalog',    label: 'Sản phẩm',      icon: 'solar:armchair-bold-duotone',          modules: catalogModules },
  { slug: 'warehouse',  label: 'Kho hàng',       icon: 'solar:box-bold-duotone',               modules: warehouseModules },
  { slug: 'orders',     label: 'Đơn hàng',       icon: 'solar:bag-check-bold-duotone',         modules: orderModules },
  { slug: 'crm',        label: 'CRM',            icon: 'solar:users-group-rounded-bold-duotone', modules: crmModules },
  { slug: 'marketing',  label: 'Marketing',      icon: 'solar:rocket-bold-duotone',            modules: marketingModules },
  { slug: 'analytics',  label: 'Analytics',      icon: 'solar:chart-2-bold-duotone',           modules: analyticsModules },
  { slug: 'seo',        label: 'SEO',            icon: 'solar:magnifer-bold-duotone',          modules: seoModules },
  { slug: 'access',     label: 'Phân quyền',     icon: 'solar:shield-user-bold-duotone',       modules: accessModules },
];

export function findSofa7AdminModule(
  groupSlug: string,
  moduleSlug: string
): { group: Sofa7AdminGroup; module: Sofa7AdminModule } | null {
  const group = SOFA7_ADMIN_GROUPS.find((g) => g.slug === groupSlug);
  if (!group) return null;
  const module = group.modules.find((m) => m.slug === moduleSlug);
  if (!module) return null;
  return { group, module };
}

// ----------------------------------------------------------------------
// Dashboard KPIs

export const SOFA7_ADMIN_KPIS = [
  { label: 'Doanh thu tháng', value: '4.82 tỷ', change: '+18%', positive: true, icon: 'solar:dollar-minimalistic-bold-duotone' },
  { label: 'Đơn hàng tháng', value: '284', change: '+12%', positive: true, icon: 'solar:bag-check-bold-duotone' },
  { label: 'Khách hàng mới', value: '92', change: '+8%', positive: true, icon: 'solar:user-plus-bold-duotone' },
  { label: 'Tỷ lệ hủy đơn', value: '1.8%', change: '-0.4%', positive: true, icon: 'solar:close-circle-bold-duotone' },
];

// ----------------------------------------------------------------------
// Activity feed

export const SOFA7_ADMIN_ACTIVITIES = [
  { user: 'Kim Ngân', action: 'cập nhật trạng thái', target: 'đơn SL7-492847', time: '5 phút trước' },
  { user: 'Minh Tú', action: 'tạo chiến dịch email', target: 'Street Pop Flash Sale', time: '22 phút trước' },
  { user: 'Hoàng Long', action: 'nhập kho', target: '25 units Sofa Brick Leather', time: '1 giờ trước' },
  { user: 'Hải Đăng', action: 'xuất bản bài viết', target: 'Top 5 sofa industrial 2026', time: '2 giờ trước' },
  { user: 'Admin Chính', action: 'thêm mã coupon', target: 'URBAN10', time: '3 giờ trước' },
  { user: 'Kim Ngân', action: 'xác nhận hoàn tiền', target: 'RF-28841', time: '4 giờ trước' },
];

// ----------------------------------------------------------------------
// Chart data

export const SOFA7_ADMIN_CHART_MONTHS = ['T1','T2','T3','T4','T5','T6','T7','T8','T9','T10','T11','T12'];
export const SOFA7_ADMIN_REVENUE_SERIES = [2200,2650,2900,3100,3200,3400,3640,4080,4820,0,0,0];
export const SOFA7_ADMIN_REVENUE_TARGET = [3000,3000,3200,3200,3500,3500,3800,4200,4500,4800,5000,5200];
export const SOFA7_ADMIN_ORDER_SERIES   = [142,168,185,198,189,201,215,241,284,0,0,0];
export const SOFA7_ADMIN_CHANNEL_CHART  = [
  { label: 'Google Organic', value: 37 },
  { label: 'Facebook Ads',   value: 24 },
  { label: 'Instagram',      value: 18 },
  { label: 'Direct',         value: 12 },
  { label: 'TikTok',         value: 9  },
];
export const SOFA7_ADMIN_TOP_PRODUCTS = [
  { label: 'Street Red',      value: 312 },
  { label: 'Brick Leather',   value: 268 },
  { label: 'Neon Orange',     value: 224 },
  { label: 'Blue Graffiti',   value: 198 },
  { label: 'Green Velvet',    value: 156 },
];

// ----------------------------------------------------------------------
// Dữ liệu biểu đồ (demo)
// ----------------------------------------------------------------------

export const SOFA7_ADMIN_CHART_MONTHS = [
  'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12',
];

export const SOFA7_ADMIN_REVENUE_SERIES = [
  { name: 'Doanh thu (tỷ)', data: [3.2, 3.8, 4.1, 4.6, 5.0, 5.4, 6.1, 6.8, 6.2, 6.9, 7.4, 8.1] },
  { name: 'Mục tiêu (tỷ)', data: [3.5, 3.9, 4.3, 4.7, 5.2, 5.6, 6.0, 6.5, 6.8, 7.2, 7.6, 8.0] },
];

export const SOFA7_ADMIN_ORDER_SERIES = [
  { name: 'Đơn hàng', data: [210, 245, 268, 289, 310, 330, 402, 486, 448, 470, 512, 560] },
];

export const SOFA7_ADMIN_CHANNEL_CHART = {
  labels: ['Website', 'Showroom', 'Đại lý B2B', 'Sàn TMĐT', 'Mạng xã hội'],
  series: [38, 27, 18, 11, 6],
};

export const SOFA7_ADMIN_TOP_PRODUCTS = {
  labels: ['Sofa Terra 3S', 'Sofa Sage L', 'Armchair Clay', 'Sofa Bed Sand', 'Daybed Forest'],
  series: [186, 154, 132, 98, 76],
};
