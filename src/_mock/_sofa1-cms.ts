// SOFA1 CMS — nguồn dữ liệu thống nhất cho các khối nội dung/CMS
// ----------------------------------------------------------------------
// Cùng nguyên tắc với src/_mock/_sofa1.ts: đây là nơi lưu dữ liệu THẬT cho
// các module CMS (trang tĩnh, FAQ, menu, banner, slider, SEO, trang phụ).
// Trang quản trị độc lập (src/sections/sofa1-admin/*, khu /sofa1/admin)
// đọc và có thể thêm/sửa/xoá (CRUD) ngay trên dữ liệu này trong phiên xem
// hiện tại; trang xem công khai (src/sections/sofa1-pages/*) đọc cùng
// nguồn để hiển thị — ví dụ FAQ hiển thị ở /sofa1/faq lấy trực tiếp từ
// `_sofa1Faqs` bên dưới (chỉ lấy các câu đã "published").
// ----------------------------------------------------------------------

import { _mock } from './_mock';

// ----------------------------------------------------------------------
// Options dùng chung
// ----------------------------------------------------------------------

export const SOFA1_CMS_STATUS_OPTIONS = [
  { value: 'published', label: 'Đã xuất bản' },
  { value: 'draft', label: 'Bản nháp' },
  { value: 'hidden', label: 'Tạm ẩn' },
];

export const SOFA1_CMS_BLOCK_TYPE_OPTIONS = [
  { value: 'banner', label: 'Banner' },
  { value: 'rich-text', label: 'Rich text' },
  { value: 'product-list', label: 'Danh sách SP' },
  { value: 'slider', label: 'Slider' },
  { value: 'video', label: 'Video' },
];

export const SOFA1_MENU_POSITION_OPTIONS = [
  { value: 'header', label: 'Header' },
  { value: 'footer', label: 'Footer' },
  { value: 'mobile', label: 'Mobile' },
];

export const SOFA1_SLIDER_PAGE_OPTIONS = [
  { value: 'home', label: 'Trang chủ' },
  { value: 'collection', label: 'Bộ sưu tập' },
  { value: 'showroom', label: 'Showroom' },
];

export const SOFA1_SEO_STATUS_OPTIONS = [
  { value: 'good', label: 'Tốt' },
  { value: 'missing-meta', label: 'Thiếu meta' },
  { value: 'needs-review', label: 'Cần xem lại' },
];

// ----------------------------------------------------------------------
// Khối nội dung theo từng trang tĩnh (home / about / contact / policy / terms)
// ----------------------------------------------------------------------

export type ISofa1CmsBlock = {
  id: string;
  page: 'home' | 'about' | 'contact' | 'policy' | 'terms';
  block: string;
  type: string;
  status: string;
  author: string;
  createdAt: string;
};

export const _sofa1CmsBlocks: ISofa1CmsBlock[] = [
  { id: 'blk-1', page: 'home', block: 'Hero banner', type: 'banner', status: 'published', author: 'Ngọc Anh', createdAt: _mock.time(1) },
  { id: 'blk-2', page: 'home', block: 'Giới thiệu ngắn', type: 'rich-text', status: 'published', author: 'Minh Quân', createdAt: _mock.time(3) },
  { id: 'blk-3', page: 'home', block: 'Bộ sưu tập nổi bật', type: 'product-list', status: 'draft', author: 'Thu Hà', createdAt: _mock.time(4) },
  { id: 'blk-4', page: 'home', block: 'Đánh giá khách hàng', type: 'slider', status: 'published', author: 'Ngọc Anh', createdAt: _mock.time(10) },
  { id: 'blk-5', page: 'home', block: 'CTA cuối trang', type: 'banner', status: 'hidden', author: 'Minh Quân', createdAt: _mock.time(15) },
  { id: 'blk-6', page: 'about', block: 'Câu chuyện thương hiệu', type: 'rich-text', status: 'published', author: 'Thu Hà', createdAt: _mock.time(2) },
  { id: 'blk-7', page: 'about', block: 'Xưởng chế tác', type: 'rich-text', status: 'published', author: 'Ngọc Anh', createdAt: _mock.time(6) },
  { id: 'blk-8', page: 'about', block: 'Đội ngũ nghệ nhân', type: 'product-list', status: 'draft', author: 'Minh Quân', createdAt: _mock.time(9) },
  { id: 'blk-9', page: 'contact', block: 'Thông tin liên hệ', type: 'rich-text', status: 'published', author: 'Thu Hà', createdAt: _mock.time(1) },
  { id: 'blk-10', page: 'contact', block: 'Bản đồ showroom', type: 'rich-text', status: 'published', author: 'Ngọc Anh', createdAt: _mock.time(5) },
  { id: 'blk-11', page: 'contact', block: 'Form gửi yêu cầu', type: 'rich-text', status: 'published', author: 'Minh Quân', createdAt: _mock.time(8) },
  { id: 'blk-12', page: 'policy', block: 'Chính sách bảo hành', type: 'rich-text', status: 'published', author: 'Thu Hà', createdAt: _mock.time(2) },
  { id: 'blk-13', page: 'policy', block: 'Chính sách đổi trả', type: 'rich-text', status: 'published', author: 'Ngọc Anh', createdAt: _mock.time(7) },
  { id: 'blk-14', page: 'policy', block: 'Chính sách giao hàng', type: 'rich-text', status: 'draft', author: 'Minh Quân', createdAt: _mock.time(11) },
  { id: 'blk-15', page: 'terms', block: 'Điều khoản sử dụng', type: 'rich-text', status: 'published', author: 'Thu Hà', createdAt: _mock.time(3) },
  { id: 'blk-16', page: 'terms', block: 'Điều khoản thanh toán', type: 'rich-text', status: 'published', author: 'Ngọc Anh', createdAt: _mock.time(12) },
];

// ----------------------------------------------------------------------
// FAQ — nguồn thật cho /sofa1/faq
// ----------------------------------------------------------------------

export type ISofa1Faq = {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
  status: string;
  createdAt: string;
};

export const _sofa1Faqs: ISofa1Faq[] = [
  { id: 'faq-1', question: 'Sofa có đóng theo kích thước riêng không?', answer: 'Có. Chúng tôi nhận đóng sofa theo kích thước, màu sắc và chất liệu theo yêu cầu. Thời gian hoàn thành 7-14 ngày làm việc.', category: 'Sản phẩm', order: 1, status: 'published', createdAt: _mock.time(1) },
  { id: 'faq-2', question: 'Da bò thật và da công nghiệp khác nhau thế nào?', answer: 'Da bò thật có vân tự nhiên, mềm mại, thoáng khí và bền đẹp theo năm tháng. Da công nghiệp đồng nhất nhưng kém bền và không thoáng.', category: 'Chất liệu', order: 2, status: 'published', createdAt: _mock.time(2) },
  { id: 'faq-3', question: 'Có thể đổi trả nếu không ưng ý?', answer: 'Bạn có 30 ngày đổi trả với sản phẩm tiêu chuẩn. Sofa đóng theo yêu cầu không áp dụng đổi trả trừ lỗi sản xuất.', category: 'Đổi trả', order: 3, status: 'published', createdAt: _mock.time(3) },
  { id: 'faq-4', question: 'Bảo hành bao gồm những gì?', answer: 'Bảo hành 7 năm cho khung gỗ và cơ cấu, 5 năm cho đệm và bọc. Bảo trì làm mới bọc trọn đời với chi phí ưu đãi.', category: 'Bảo hành', order: 4, status: 'published', createdAt: _mock.time(4) },
  { id: 'faq-5', question: 'Giao hàng mất bao lâu?', answer: 'Sản phẩm có sẵn: 2-5 ngày. Sofa đóng theo yêu cầu: 7-14 ngày. Miễn phí giao hàng lắp đặt nội thành, ngoại thành tính phí theo khoảng cách.', category: 'Giao hàng', order: 5, status: 'published', createdAt: _mock.time(5) },
  { id: 'faq-6', question: 'Có trả góp không?', answer: 'Có. Hỗ trợ trả góp 0% qua thẻ tín dụng trong 6 tháng, hoặc trả góp qua ngân hàng 12-24 tháng.', category: 'Thanh toán', order: 6, status: 'published', createdAt: _mock.time(6) },
  { id: 'faq-7', question: 'Sofa da có bị nứt sau vài năm sử dụng không?', answer: 'Nếu được bảo dưỡng đúng cách (dưỡng da 6 tháng/lần), da bò thật hầu như không nứt và càng dùng càng lên màu đẹp.', category: 'Chất liệu', order: 7, status: 'draft', createdAt: _mock.time(14) },
];

// ----------------------------------------------------------------------
// Menu (header / footer / mobile)
// ----------------------------------------------------------------------

export type ISofa1MenuItem = {
  id: string;
  name: string;
  position: string;
  itemsCount: number;
  status: string;
  createdAt: string;
};

export const _sofa1Menus: ISofa1MenuItem[] = [
  { id: 'menu-1', name: 'Menu chính', position: 'header', itemsCount: 24, status: 'published', createdAt: _mock.time(1) },
  { id: 'menu-2', name: 'Menu sản phẩm (mega)', position: 'header', itemsCount: 18, status: 'published', createdAt: _mock.time(4) },
  { id: 'menu-3', name: 'Menu footer', position: 'footer', itemsCount: 8, status: 'published', createdAt: _mock.time(8) },
  { id: 'menu-4', name: 'Menu mobile', position: 'mobile', itemsCount: 12, status: 'draft', createdAt: _mock.time(12) },
];

// ----------------------------------------------------------------------
// Banner
// ----------------------------------------------------------------------

export type ISofa1Banner = {
  id: string;
  name: string;
  position: string;
  startDate: string;
  endDate: string;
  status: string;
  createdAt: string;
};

export const _sofa1Banners: ISofa1Banner[] = [
  { id: 'banner-1', name: 'Sale tháng 8 – 30%', position: 'Top bar', startDate: '01/08/2026', endDate: '31/08/2026', status: 'published', createdAt: _mock.time(1) },
  { id: 'banner-2', name: 'Miễn phí giao lắp HN/HCM', position: 'Trang chủ', startDate: '01/01/2026', endDate: '31/12/2026', status: 'published', createdAt: _mock.time(3) },
  { id: 'banner-3', name: 'Bộ sưu tập Linen', position: 'Danh mục', startDate: '05/08/2026', endDate: '20/08/2026', status: 'published', createdAt: _mock.time(6) },
  { id: 'banner-4', name: 'Trả góp 0%', position: 'Chi tiết SP', startDate: '01/07/2026', endDate: '31/07/2026', status: 'hidden', createdAt: _mock.time(20) },
];

// ----------------------------------------------------------------------
// Slider
// ----------------------------------------------------------------------

export type ISofa1Slider = {
  id: string;
  name: string;
  slidesCount: number;
  page: string;
  status: string;
  createdAt: string;
};

export const _sofa1Sliders: ISofa1Slider[] = [
  { id: 'slider-1', name: 'Hero trang chủ', slidesCount: 5, page: 'home', status: 'published', createdAt: _mock.time(1) },
  { id: 'slider-2', name: 'Bộ sưu tập mới', slidesCount: 6, page: 'collection', status: 'published', createdAt: _mock.time(5) },
  { id: 'slider-3', name: 'Showroom 360°', slidesCount: 3, page: 'showroom', status: 'draft', createdAt: _mock.time(10) },
];

// ----------------------------------------------------------------------
// SEO (theo từng trang tĩnh)
// ----------------------------------------------------------------------

export type ISofa1SeoPage = {
  id: string;
  page: string;
  title: string;
  status: string;
  createdAt: string;
};

export const _sofa1SeoPages: ISofa1SeoPage[] = [
  { id: 'seo-1', page: '/sofa1', title: 'SOFA1 – Sofa thủ công cao cấp', status: 'good', createdAt: _mock.time(1) },
  { id: 'seo-2', page: '/sofa1/about', title: 'Về chúng tôi | SOFA1', status: 'good', createdAt: _mock.time(2) },
  { id: 'seo-3', page: '/sofa1/faq', title: '', status: 'missing-meta', createdAt: _mock.time(3) },
  { id: 'seo-4', page: '/sofa1/policy', title: 'Chính sách mua hàng SOFA1', status: 'good', createdAt: _mock.time(4) },
  { id: 'seo-5', page: '/sofa1/contact', title: 'Liên hệ | SOFA1', status: 'good', createdAt: _mock.time(5) },
];

// ----------------------------------------------------------------------
// Trang tĩnh (tự tạo, ngoài cấu trúc mặc định)
// ----------------------------------------------------------------------

export type ISofa1StaticPage = {
  id: string;
  title: string;
  slug: string;
  content: string;
  status: string;
  createdAt: string;
};

export const _sofa1StaticPages: ISofa1StaticPage[] = [
  { id: 'page-1', title: 'Hướng dẫn đo kích thước', slug: '/sofa1/huong-dan-do', content: 'Hướng dẫn cách đo không gian trước khi chọn sofa phù hợp.', status: 'published', createdAt: _mock.time(4) },
  { id: 'page-2', title: 'Cam kết chất liệu', slug: '/sofa1/cam-ket', content: 'Cam kết về nguồn gốc và chất lượng da bò, gỗ sồi sử dụng trong sản phẩm.', status: 'published', createdAt: _mock.time(11) },
  { id: 'page-3', title: 'Tuyển đại lý 2026', slug: '/sofa1/tuyen-dai-ly', content: 'Chính sách hợp tác mở đại lý phân phối Casa Sofa năm 2026.', status: 'draft', createdAt: _mock.time(1) },
];
