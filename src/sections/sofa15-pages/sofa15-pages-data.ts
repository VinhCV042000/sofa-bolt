// SOFA15 PAGES — data for all sub-pages scoped under /sofa15/
// Brand: ART DECO GATSBY — opulent gold, deep black, emerald, 1920s geometric luxury
// ----------------------------------------------------------------------

import { SOFA15_IMAGES, SOFA15_COLORS } from '../sofa15/sofa15-data';
import { varAlpha } from 'src/theme/styles';

export { varAlpha };

export function sofa15FormatPrice(value: number) {
  return `${value.toLocaleString('vi-VN')}₫`;
}

export const SOFA15_PAGE_IMAGES = {
  ...SOFA15_IMAGES,
  aboutHero: 'https://images.pexels.com/photos/19786290/pexels-photo-19786290.jpeg?auto=compress&cs=tinysrgb&w=1920',
  historyHero: 'https://images.pexels.com/photos/9307288/pexels-photo-9307288.jpeg?auto=compress&cs=tinysrgb&w=1920',
  workshop: 'https://images.pexels.com/photos/9307288/pexels-photo-9307288.jpeg?auto=compress&cs=tinysrgb&w=1200',
  factory: 'https://images.pexels.com/photos/6312016/pexels-photo-6312016.jpeg?auto=compress&cs=tinysrgb&w=1200',
  technology: 'https://images.pexels.com/photos/4846097/pexels-photo-4846097.jpeg?auto=compress&cs=tinysrgb&w=1200',
  team: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200',
  product7: 'https://images.pexels.com/photos/13169776/pexels-photo-13169776.jpeg?auto=compress&cs=tinysrgb&w=600',
  product8: 'https://images.pexels.com/photos/14011664/pexels-photo-14011664.jpeg?auto=compress&cs=tinysrgb&w=600',
  product9: 'https://images.pexels.com/photos/12127447/pexels-photo-12127447.jpeg?auto=compress&cs=tinysrgb&w=600',
  product10: 'https://images.pexels.com/photos/20576695/pexels-photo-20576695.jpeg?auto=compress&cs=tinysrgb&w=600',
  project1: 'https://images.pexels.com/photos/19786290/pexels-photo-19786290.jpeg?auto=compress&cs=tinysrgb&w=800',
  project2: 'https://images.pexels.com/photos/13169786/pexels-photo-13169786.jpeg?auto=compress&cs=tinysrgb&w=800',
  project3: 'https://images.pexels.com/photos/30666576/pexels-photo-30666576.jpeg?auto=compress&cs=tinysrgb&w=800',
  project4: 'https://images.pexels.com/photos/6312016/pexels-photo-6312016.jpeg?auto=compress&cs=tinysrgb&w=800',
  project5: 'https://images.pexels.com/photos/4846097/pexels-photo-4846097.jpeg?auto=compress&cs=tinysrgb&w=800',
  project6: 'https://images.pexels.com/photos/14011664/pexels-photo-14011664.jpeg?auto=compress&cs=tinysrgb&w=800',
  blog1: 'https://images.pexels.com/photos/19786290/pexels-photo-19786290.jpeg?auto=compress&cs=tinysrgb&w=800',
  blog2: 'https://images.pexels.com/photos/9307288/pexels-photo-9307288.jpeg?auto=compress&cs=tinysrgb&w=800',
  blog3: 'https://images.pexels.com/photos/13169786/pexels-photo-13169786.jpeg?auto=compress&cs=tinysrgb&w=800',
  blog4: 'https://images.pexels.com/photos/6312016/pexels-photo-6312016.jpeg?auto=compress&cs=tinysrgb&w=800',
  blog5: 'https://images.pexels.com/photos/4846097/pexels-photo-4846097.jpeg?auto=compress&cs=tinysrgb&w=800',
  blog6: 'https://images.pexels.com/photos/14011664/pexels-photo-14011664.jpeg?auto=compress&cs=tinysrgb&w=800',
  showroom1: 'https://images.pexels.com/photos/19786290/pexels-photo-19786290.jpeg?auto=compress&cs=tinysrgb&w=600',
  showroom2: 'https://images.pexels.com/photos/13169786/pexels-photo-13169786.jpeg?auto=compress&cs=tinysrgb&w=600',
  showroom3: 'https://images.pexels.com/photos/30666576/pexels-photo-30666576.jpeg?auto=compress&cs=tinysrgb&w=600',
  showroom4: 'https://images.pexels.com/photos/6312016/pexels-photo-6312016.jpeg?auto=compress&cs=tinysrgb&w=600',
  service1: 'https://images.pexels.com/photos/9307288/pexels-photo-9307288.jpeg?auto=compress&cs=tinysrgb&w=800',
  service2: 'https://images.pexels.com/photos/6312016/pexels-photo-6312016.jpeg?auto=compress&cs=tinysrgb&w=800',
  careers: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920',
  b2b: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920',
  contact: 'https://images.pexels.com/photos/19786290/pexels-photo-19786290.jpeg?auto=compress&cs=tinysrgb&w=1920',
};

export const SOFA15_PAGE_PRODUCTS = [
  { id: '1', name: 'Gatsby Gold Sofa', slug: 'gatsby-gold-sofa', category: 'sofa-da', style: 'tan-co-dien', price: 45000000, oldPrice: 52000000, image: SOFA15_PAGE_IMAGES.prod1, images: [SOFA15_PAGE_IMAGES.prod1, SOFA15_PAGE_IMAGES.gallery1], material: 'Da nhập khẩu · Khung gỗ sồi', size: '240x95cm', colors: [SOFA15_COLORS.gold, SOFA15_COLORS.emerald, SOFA15_COLORS.burgundy], colorNames: ['Gold', 'Emerald', 'Burgundy'], rating: 5.0, reviews: 28, badge: 'bestseller', description: 'Gatsby Gold Sofa — da thật phủ vàng, họa tiết Art Deco.' },
  { id: '2', name: 'Emerald Deco Sofa', slug: 'emerald-deco-sofa', category: 'sofa-velvet', style: 'tan-co-dien', price: 38000000, image: SOFA15_PAGE_IMAGES.prod2, images: [SOFA15_PAGE_IMAGES.prod2, SOFA15_PAGE_IMAGES.gallery3], material: 'Velvet emerald · Khung gỗ', size: '220x90cm', colors: [SOFA15_COLORS.emerald, SOFA15_COLORS.gold, SOFA15_COLORS.black], colorNames: ['Emerald', 'Gold', 'Black'], rating: 4.9, reviews: 42, badge: 'new', description: 'Emerald Deco Sofa — velvet xanh ngọc, sang trọng 1920s.' },
  { id: '3', name: 'Black Pearl Sofa', slug: 'black-pearl-sofa', category: 'sofa-da', style: 'luxury', price: 55000000, image: SOFA15_PAGE_IMAGES.prod3, images: [SOFA15_PAGE_IMAGES.prod3, SOFA15_PAGE_IMAGES.gallery5], material: 'Da đen · Khung inox mạ vàng', size: '260x100cm', colors: [SOFA15_COLORS.black, SOFA15_COLORS.gold], colorNames: ['Black', 'Gold'], rating: 5.0, reviews: 15, description: 'Black Pearl Sofa — da đen, viền vàng, đỉnh cao Art Deco.' },
  { id: '4', name: 'Ivory Silk Sofa', slug: 'ivory-silk-sofa', category: 'sofa-vai', style: 'tan-co-dien', price: 32000000, oldPrice: 38000000, image: SOFA15_PAGE_IMAGES.prod4, images: [SOFA15_PAGE_IMAGES.prod4], material: 'Lụa ivory · Khung gỗ', size: '210x88cm', colors: [SOFA15_COLORS.ivory, SOFA15_COLORS.gold, SOFA15_COLORS.emerald], colorNames: ['Ivory', 'Gold', 'Emerald'], rating: 4.8, reviews: 33, description: 'Ivory Silk Sofa — lụa ngà, thanh lịch Gatsby.' },
  { id: '5', name: 'Burgundy Velvet Sofa', slug: 'burgundy-velvet-sofa', category: 'sofa-velvet', style: 'luxury', price: 42000000, image: SOFA15_PAGE_IMAGES.prod5, images: [SOFA15_PAGE_IMAGES.prod5], material: 'Velvet burgundy · Khung gỗ', size: '230x92cm', colors: [SOFA15_COLORS.burgundy, SOFA15_COLORS.gold], colorNames: ['Burgundy', 'Gold'], rating: 4.9, reviews: 21, badge: 'limited', description: 'Burgundy Velvet Sofa — velvet rượu vang, quyền lực.' },
  { id: '6', name: 'Deco Gold Accent Chair', slug: 'deco-gold-accent-chair', category: 'sofa-don', style: 'tan-co-dien', price: 18000000, image: SOFA15_PAGE_IMAGES.prod6, images: [SOFA15_PAGE_IMAGES.prod6], material: 'Da · Khung inox mạ vàng', size: '90x85cm', colors: [SOFA15_COLORS.gold, SOFA15_COLORS.black], colorNames: ['Gold', 'Black'], rating: 4.9, reviews: 17, badge: 'bestseller', description: 'Ghế đơn Deco — da vàng, chân inox mạ. Tuyệt tác Art Deco.' },
  { id: '7', name: 'Gatsby L-Shape Gold', slug: 'gatsby-l-shape-gold', category: 'sofa-goc-chu-l', style: 'tan-co-dien', price: 68000000, image: SOFA15_PAGE_IMAGES.product7, images: [SOFA15_PAGE_IMAGES.product7], material: 'Da · Module góc', size: '300x200cm', colors: [SOFA15_COLORS.gold, SOFA15_COLORS.black, SOFA15_COLORS.emerald], colorNames: ['Gold', 'Black', 'Emerald'], rating: 5.0, reviews: 8, badge: 'new', description: 'Sofa góc Gatsby — da phủ vàng, module Art Deco.' },
  { id: '8', name: 'Pearl Recliner Deco', slug: 'pearl-recliner-deco', category: 'sofa-recliner', style: 'luxury', price: 35000000, image: SOFA15_PAGE_IMAGES.product8, images: [SOFA15_PAGE_IMAGES.product8], material: 'Da pearl · Cơ chế recliner', size: '210x95cm', colors: [SOFA15_COLORS.pearl, SOFA15_COLORS.gold], colorNames: ['Pearl', 'Gold'], rating: 4.8, reviews: 12, description: 'Recliner Pearl — da ngọc trai, ngả điện, viền vàng.' },
  { id: '9', name: 'Deco Sofa Bed Gold', slug: 'deco-sofa-bed-gold', category: 'sofa-giuong', style: 'tan-co-dien', price: 28000000, image: SOFA15_PAGE_IMAGES.product9, images: [SOFA15_PAGE_IMAGES.product9], material: 'Da · Gỗ', size: '200x90cm (giường 200x140cm)', colors: [SOFA15_COLORS.black, SOFA15_COLORS.gold], colorNames: ['Black', 'Gold'], rating: 4.7, reviews: 19, description: 'Sofa giường Deco — 2 chức năng, viền vàng Art Deco.' },
  { id: '10', name: 'Deco Accent Stool', slug: 'deco-accent-stool', category: 'sofa-don', style: 'tan-co-dien', price: 8500000, oldPrice: 11000000, image: SOFA15_PAGE_IMAGES.product10, images: [SOFA15_PAGE_IMAGES.product10], material: 'Da · Inox mạ vàng', size: '45x45cm', colors: [SOFA15_COLORS.gold, SOFA15_COLORS.black, SOFA15_COLORS.emerald], colorNames: ['Gold', 'Black', 'Emerald'], rating: 4.9, reviews: 26, badge: 'bestseller', description: 'Ghế puff Deco — da vàng, chân inox mạ. Chi tiết Art Deco.' },
];

export const SOFA15_PAGE_COLLECTIONS = [
  { id: 'new', name: 'Bộ sưu tập mới', slug: 'new', description: 'Tuyệt tác Art Deco mới nhất 2025', image: SOFA15_PAGE_IMAGES.prod1, count: '10 mẫu', accent: SOFA15_COLORS.gold },
  { id: 'featured', name: 'Bộ sưu tập nổi bật', slug: 'featured', description: 'Tác phẩm Gatsby được yêu thích nhất', image: SOFA15_PAGE_IMAGES.prod2, count: '8 mẫu', accent: SOFA15_COLORS.emerald },
  { id: 'seasonal', name: 'Bộ sưu tập theo mùa', slug: 'seasonal', description: 'Sofa phù hợp từng mùa — tone Gatsby', image: SOFA15_PAGE_IMAGES.prod3, count: '6 mẫu', accent: SOFA15_COLORS.burgundy },
  { id: 'luxury', name: 'Bộ sưu tập Luxury', slug: 'luxury', description: 'Da thật và velvet cao cấp nhất', image: SOFA15_PAGE_IMAGES.prod5, count: '7 mẫu', accent: SOFA15_COLORS.gold },
  { id: 'bestseller', name: 'Bộ sưu tập Bestseller', slug: 'bestseller', description: 'Những mẫu sofa bán chạy nhất', image: SOFA15_PAGE_IMAGES.prod6, count: '9 mẫu', accent: SOFA15_COLORS.emerald },
];

export const SOFA15_PAGE_PROJECTS = [
  { id: '1', name: 'The Grand Hotel', type: 'khach-san', typeLabel: 'Dự án khách sạn', location: 'Hà Nội', image: SOFA15_PAGE_IMAGES.project1, year: '2024', description: 'Sofa Gatsby Gold cho khách sạn The Grand. Sang trọng 1920s.' },
  { id: '2', name: 'Emerald Mansion', type: 'biet-thu', typeLabel: 'Dự án biệt thự', location: 'Đà Nẵng', image: SOFA15_PAGE_IMAGES.project2, year: '2024', description: 'Sofa Emerald Deco cho biệt thự Emerald. Quyền lực và sang trọng.' },
  { id: '3', name: 'Black Pearl Resort', type: 'resort', typeLabel: 'Dự án resort', location: 'Phú Quốc', image: SOFA15_PAGE_IMAGES.project3, year: '2023', description: 'Sofa Black Pearl cho resort 5 sao. Đỉnh cao Art Deco.' },
  { id: '4', name: 'Ivory Tower Office', type: 'van-phong', typeLabel: 'Dự án văn phòng', location: 'Hà Nội', image: SOFA15_PAGE_IMAGES.project4, year: '2024', description: 'Sofa Ivory Silk cho văn phòng Ivory Tower. Thanh lịch Gatsby.' },
  { id: '5', name: 'Burgundy Restaurant', type: 'nha-hang', typeLabel: 'Dự án nhà hàng', location: 'TP.HCM', image: SOFA15_PAGE_IMAGES.project5, year: '2023', description: 'Sofa Burgundy Velvet cho nhà hàng fine dining. Quyền lực.' },
  { id: '6', name: 'Gatsby Showroom', type: 'showroom', typeLabel: 'Dự án showroom', location: 'TP.HCM', image: SOFA15_PAGE_IMAGES.project6, year: '2025', description: 'Sofa Gatsby Gold cho showroom cao cấp. Tuyệt tác Art Deco.' },
];

export const SOFA15_PAGE_PROJECT_TYPES = [
  { slug: 'can-ho', label: 'Dự án căn hộ' },
  { slug: 'biet-thu', label: 'Dự án biệt thự' },
  { slug: 'khach-san', label: 'Dự án khách sạn' },
  { slug: 'resort', label: 'Dự án resort' },
  { slug: 'van-phong', label: 'Dự án văn phòng' },
  { slug: 'showroom', label: 'Dự án showroom' },
];

export const SOFA15_PAGE_BLOG_POSTS = [
  { id: '1', title: 'Art Deco: Lối sống thượng lưu 1920s', slug: 'art-deco-loi-song-thuong-luu-1920s', category: 'xu-huong-noi-that', categoryLabel: 'Xu hướng nội thất', excerpt: 'Art Deco — vàng, đen, ngọc lục bảo, 1920s.', content: 'Art Deco là phong cách thiết kế thịnh hành năm 1920s...', image: SOFA15_PAGE_IMAGES.blog1, author: 'Nghiêm Tuấn', date: '15/01/2025', readTime: '5 phút' },
  { id: '2', title: 'Chọn da thật: Hướng dẫn', slug: 'chon-da-that-huong-dan', category: 'kinh-nghiem-chon-sofa', categoryLabel: 'Kinh nghiệm chọn sofa', excerpt: 'Da thật — cách chọn da cao cấp.', content: 'Da thật là vật liệu chủ đạo của Sofa15...', image: SOFA15_PAGE_IMAGES.blog2, author: 'Lê Hà', date: '10/01/2025', readTime: '4 phút' },
  { id: '3', title: 'Bảo quản da vàng', slug: 'bao-quan-da-vang', category: 'huong-dan-bao-quan', categoryLabel: 'Hướng dẫn bảo quản', excerpt: 'Da vàng — cách chăm sóc đẳng cấp.', content: 'Da vàng cần chăm sóc đặc biệt...', image: SOFA15_PAGE_IMAGES.blog3, author: 'Minh Khôi', date: '05/01/2025', readTime: '4 phút' },
  { id: '4', title: 'Phong thủy phòng khách Art Deco', slug: 'phong-thuy-phong-khach-art-deco', category: 'phong-thuy-noi-that', categoryLabel: 'Phong thủy nội thất', excerpt: 'Art Deco và phong thủy — có hợp không?', content: 'Art Deco thuộc kim và thổ...', image: SOFA15_PAGE_IMAGES.blog4, author: 'Nghiêm Tuấn', date: '28/12/2024', readTime: '6 phút' },
  { id: '5', title: 'Velvet emerald: Vật liệu quyền lực', slug: 'velvet-emerald-vat-lieu-quyen-luc', category: 'kien-thuc-vat-lieu', categoryLabel: 'Kiến thức vật liệu', excerpt: 'Velvet emerald — cảm giác Gatsby.', content: 'Velvet emerald mang cảm giác quyền lực...', image: SOFA15_PAGE_IMAGES.blog5, author: 'Lê Hà', date: '20/12/2024', readTime: '5 phút' },
  { id: '6', title: 'Thiết kế phòng khách Art Deco', slug: 'thiet-ke-phong-khach-art-deco', category: 'thiet-ke-phong-khach', categoryLabel: 'Thiết kế phòng khách', excerpt: 'Bí quyết tạo không gian 1920s.', content: 'Art Deco, vàng, đen, ngọc lục bảo...', image: SOFA15_PAGE_IMAGES.blog6, author: 'Minh Khôi', date: '15/12/2024', readTime: '5 phút' },
];

export const SOFA15_PAGE_BLOG_CATEGORIES = [
  { slug: 'tin-cong-ty', label: 'Tin công ty' },
  { slug: 'tin-khuyen-mai', label: 'Tin khuyến mãi' },
  { slug: 'kinh-nghiem-chon-sofa', label: 'Kinh nghiệm chọn sofa' },
  { slug: 'xu-huong-noi-that', label: 'Xu hướng nội thất' },
  { slug: 'kien-thuc-vat-lieu', label: 'Kiến thức vật liệu' },
  { slug: 'phong-thuy-noi-that', label: 'Phong thủy nội thất' },
  { slug: 'huong-dan-ve-sinh-sofa', label: 'Hướng dẫn vệ sinh sofa' },
  { slug: 'huong-dan-bao-quan', label: 'Hướng dẫn bảo quản' },
  { slug: 'thiet-ke-phong-khach', label: 'Thiết kế phòng khách' },
];

export const SOFA15_PAGE_SHOWROOMS = [
  { id: '1', name: 'Sofa15 Gatsby Hà Nội', address: '88 Trần Duy Hưng, Cầu Giấy, Hà Nội', phone: '024 3555 8888', hours: '9:00 - 21:00', image: SOFA15_PAGE_IMAGES.showroom1, lat: 21.0137, lng: 105.8258 },
  { id: '2', name: 'Sofa15 Pearl TP.HCM', address: '120 Lý Chính Thắng, Quận 11, TP.HCM', phone: '028 3838 9999', hours: '9:00 - 21:00', image: SOFA15_PAGE_IMAGES.showroom2, lat: 10.7726, lng: 106.7069 },
  { id: '3', name: 'Sofa15 Emerald Đà Nẵng', address: '40 Bạch Đằng, Hải Châu, Đà Nẵng', phone: '0236 3999 222', hours: '9:00 - 20:00', image: SOFA15_PAGE_IMAGES.showroom3, lat: 16.0544, lng: 108.2022 },
  { id: '4', name: 'Sofa15 Gold Cần Thơ', address: '60 Hòa Bình, Ninh Kiều, Cần Thơ', phone: '0292 3888 333', hours: '9:00 - 20:00', image: SOFA15_PAGE_IMAGES.showroom4, lat: 10.0451, lng: 105.7469 },
];

export const SOFA15_PAGE_CAREERS = [
  { id: '1', title: 'Thợ may da cao cấp', location: 'Hà Nội', type: 'Toàn thời gian', salary: '15-25 triệu', description: 'Tìm thợ có kinh nghiệm may da thật cao cấp.', requirements: ['3+ năm kinh nghiệm may da', 'Biết xử lý da thật', 'Tỉ mỉ, cẩn thận'] },
  { id: '2', title: 'Stylist nội thất Art Deco', location: 'TP.HCM', type: 'Toàn thời gian', salary: '12-20 triệu', description: 'Tư vấn khách hàng về sofa Art Deco.', requirements: ['2+ năm kinh nghiệm sales nội thất', 'Am hiểu Art Deco', 'Giao tiếp tốt'] },
  { id: '3', title: 'Thợ bọc velvet', location: 'Đà Nẵng', type: 'Toàn thời gian', salary: '15-25 triệu', description: 'Phụ trách bọc velvet emerald, burgundy.', requirements: ['Kinh nghiệm bọc velvet', 'Am hiểu velvet cao cấp', 'Tỉ mỉ'] },
  { id: '4', title: 'Thiết kế 3D Art Deco', location: 'Hà Nội', type: 'Toàn thời gian', salary: '18-30 triệu', description: 'Thiết kế bản vẽ 3D cho khách đặt sofa Art Deco.', requirements: ['Thành thạo Sketchup, 3ds Max', '3+ năm kinh nghiệm thiết kế', 'Am hiểu Art Deco'] },
];

export const SOFA15_PAGE_PRODUCT_CATEGORIES = {
  types: [
    { slug: 'sofa-goc-chu-l', label: 'Sofa góc chữ L' },
    { slug: 'sofa-chu-u', label: 'Sofa chữ U' },
    { slug: 'sofa-vang', label: 'Sofa văng' },
    { slug: 'sofa-don', label: 'Sofa đơn' },
    { slug: 'sofa-bang-dai', label: 'Sofa băng dài' },
    { slug: 'sofa-giuong', label: 'Sofa giường' },
    { slug: 'sofa-thong-minh', label: 'Sofa thông minh' },
    { slug: 'sofa-thu-gian', label: 'Sofa thư giãn' },
    { slug: 'sofa-recliner', label: 'Sofa recliner' },
    { slug: 'sofa-da', label: 'Sofa da' },
    { slug: 'sofa-ni', label: 'Sofa nỉ' },
    { slug: 'sofa-vai', label: 'Sofa vải' },
    { slug: 'sofa-go', label: 'Sofa gỗ' },
  ],
  styles: [
    { slug: 'hien-dai', label: 'Hiện đại' },
    { slug: 'tan-co-dien', label: 'Tân cổ điển' },
    { slug: 'bac-au', label: 'Bắc Âu' },
    { slug: 'luxury', label: 'Luxury' },
    { slug: 'minimalist', label: 'Minimalist' },
    { slug: 'indochine', label: 'Indochine' },
    { slug: 'chau-au', label: 'Châu Âu' },
  ],
  spaces: [
    { slug: 'can-ho', label: 'Căn hộ' },
    { slug: 'nha-pho', label: 'Nhà phố' },
    { slug: 'biet-thu', label: 'Biệt thự' },
    { slug: 'van-phong', label: 'Văn phòng' },
    { slug: 'khach-san', label: 'Khách sạn' },
    { slug: 'resort', label: 'Resort' },
    { slug: 'nha-hang', label: 'Nhà hàng' },
    { slug: 'cafe', label: 'Cafe' },
  ],
  sizes: [
    { slug: 'sofa-nho', label: 'Sofa nhỏ' },
    { slug: 'sofa-trung', label: 'Sofa trung' },
    { slug: 'sofa-lon', label: 'Sofa lớn' },
  ],
  prices: [
    { slug: 'duoi-10-trieu', label: 'Dưới 10 triệu' },
    { slug: '10-20-trieu', label: '10-20 triệu' },
    { slug: '20-50-trieu', label: '20-50 triệu' },
    { slug: 'tren-50-trieu', label: 'Trên 50 triệu' },
  ],
};

export const SOFA15_PAGE_COMPANY_INFO = {
  name: 'Sofa15',
  tagline: 'ART DECO GATSBY — Opulent gold, deep black, emerald, 1920s geometric luxury.',
  phone: '024 3555 8888',
  email: 'concierge@sofa15.vn',
  address: '88 Trần Duy Hưng, Cầu Giấy, Hà Nội',
  founded: '2015',
  stats: [
    { value: '15', label: 'Bộ sưu tập' },
    { value: '10+', label: 'Năm thủ công' },
    { value: '3200+', label: 'Tác phẩm đã giao' },
    { value: '99%', label: 'Khách hài lòng' },
  ],
};

export const SOFA15_PAGE_PROMOTION_SERVICES = [
  { slug: 'warranty', title: 'Bảo hành', icon: 'solar:shield-check-bold-duotone', description: 'Bảo hành 10 năm cho khung và đệm. Hỗ trợ sửa chữa miễn phí.' },
  { slug: 'maintenance', title: 'Bảo trì', icon: 'solar:settings-bold-duotone', description: 'Thay áo bọc da, làm mới sofa với chi phí ưu đãi.' },
  { slug: 'repair', title: 'Sửa chữa', icon: 'solar:hammer-bold-duotone', description: 'Sửa chữa sofa: thay đệm, bọc lại, sửa khung.' },
  { slug: 'cleaning', title: 'Vệ sinh sofa', icon: 'solar:water-bold-duotone', description: 'Giặt khô, làm sạch sâu da và velvet.' },
  { slug: 'returns', title: 'Đổi trả hàng', icon: 'solar:refresh-circle-bold-duotone', description: '30 ngày đổi trả. Hỗ trợ sửa chữa miễn phí.' },
];

export const SOFA15_PAGE_FAQS = [
  { question: 'Da thật có dễ bẩn không?', answer: 'Da thật của Sofa15 phủ lớp chống thấm, lau sạch trong 30 giây.' },
  { question: 'Velvet emerald có bền không?', answer: 'Velvet emerald độ bền 8-10 năm. Cần chăm sóc định kỳ.' },
  { question: 'Tôi có thể đặt màu riêng?', answer: 'Có. Gold, emerald, burgundy, black — phối theo ý. Render 3D 24h.' },
  { question: 'Sofa Art Deco có hợp không gian nhỏ?', answer: 'Dòng Deco Accent phù hợp không gian nhỏ.' },
  { question: 'Chính sách giao hàng?', answer: 'Giao lắp miễn phí nội thành. Ngoại thành 2-4 ngày.' },
  { question: 'Bảo hành bao lâu?', answer: 'Bảo hành 10 năm khung & đệm. Hỗ trợ sửa chữa miễn phí.' },
];
