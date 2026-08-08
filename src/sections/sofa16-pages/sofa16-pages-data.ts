// SOFA16 PAGES — data for all sub-pages scoped under /sofa16/
// Brand: MEDITERRANEAN RIVIERA — terracotta, cream, olive, sun-drenched Italian coastal luxury
// ----------------------------------------------------------------------

import { SOFA16_IMAGES, SOFA16_COLORS } from '../sofa16/sofa16-data';
import { varAlpha } from 'src/theme/styles';

export { varAlpha };

export function sofa16FormatPrice(value: number) {
  return `${value.toLocaleString('vi-VN')}₫`;
}

export const SOFA16_PAGE_IMAGES = {
  ...SOFA16_IMAGES,
  aboutHero: 'https://images.pexels.com/photos/20121101/pexels-photo-20121101.jpeg?auto=compress&cs=tinysrgb&w=1920',
  historyHero: 'https://images.pexels.com/photos/4870457/pexels-photo-4870457.jpeg?auto=compress&cs=tinysrgb&w=1920',
  workshop: 'https://images.pexels.com/photos/20121101/pexels-photo-20121101.jpeg?auto=compress&cs=tinysrgb&w=1200',
  factory: 'https://images.pexels.com/photos/7404938/pexels-photo-7404938.jpeg?auto=compress&cs=tinysrgb&w=1200',
  technology: 'https://images.pexels.com/photos/10408437/pexels-photo-10408437.jpeg?auto=compress&cs=tinysrgb&w=1200',
  team: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200',
  prod7: 'https://images.pexels.com/photos/35373120/pexels-photo-35373120.jpeg?auto=compress&cs=tinysrgb&w=600',
  prod8: 'https://images.pexels.com/photos/15093231/pexels-photo-15093231.jpeg?auto=compress&cs=tinysrgb&w=600',
  prod9: 'https://images.pexels.com/photos/36366420/pexels-photo-36366420.jpeg?auto=compress&cs=tinysrgb&w=600',
  prod10: 'https://images.pexels.com/photos/13183059/pexels-photo-13183059.jpeg?auto=compress&cs=tinysrgb&w=600',
  project1: 'https://images.pexels.com/photos/12474787/pexels-photo-12474787.jpeg?auto=compress&cs=tinysrgb&w=800',
  project2: 'https://images.pexels.com/photos/30650074/pexels-photo-30650074.jpeg?auto=compress&cs=tinysrgb&w=800',
  project3: 'https://images.pexels.com/photos/7404938/pexels-photo-7404938.jpeg?auto=compress&cs=tinysrgb&w=800',
  project4: 'https://images.pexels.com/photos/10408437/pexels-photo-10408437.jpeg?auto=compress&cs=tinysrgb&w=800',
  project5: 'https://images.pexels.com/photos/4870457/pexels-photo-4870457.jpeg?auto=compress&cs=tinysrgb&w=800',
  project6: 'https://images.pexels.com/photos/20121101/pexels-photo-20121101.jpeg?auto=compress&cs=tinysrgb&w=800',
  blog1: 'https://images.pexels.com/photos/12474787/pexels-photo-12474787.jpeg?auto=compress&cs=tinysrgb&w=800',
  blog2: 'https://images.pexels.com/photos/20121101/pexels-photo-20121101.jpeg?auto=compress&cs=tinysrgb&w=800',
  blog3: 'https://images.pexels.com/photos/30650074/pexels-photo-30650074.jpeg?auto=compress&cs=tinysrgb&w=800',
  blog4: 'https://images.pexels.com/photos/7404938/pexels-photo-7404938.jpeg?auto=compress&cs=tinysrgb&w=800',
  blog5: 'https://images.pexels.com/photos/10408437/pexels-photo-10408437.jpeg?auto=compress&cs=tinysrgb&w=800',
  blog6: 'https://images.pexels.com/photos/4870457/pexels-photo-4870457.jpeg?auto=compress&cs=tinysrgb&w=800',
  showroom1: 'https://images.pexels.com/photos/12474787/pexels-photo-12474787.jpeg?auto=compress&cs=tinysrgb&w=600',
  showroom2: 'https://images.pexels.com/photos/30650074/pexels-photo-30650074.jpeg?auto=compress&cs=tinysrgb&w=600',
  showroom3: 'https://images.pexels.com/photos/7404938/pexels-photo-7404938.jpeg?auto=compress&cs=tinysrgb&w=600',
  showroom4: 'https://images.pexels.com/photos/10408437/pexels-photo-10408437.jpeg?auto=compress&cs=tinysrgb&w=600',
  service1: 'https://images.pexels.com/photos/20121101/pexels-photo-20121101.jpeg?auto=compress&cs=tinysrgb&w=800',
  service2: 'https://images.pexels.com/photos/7404938/pexels-photo-7404938.jpeg?auto=compress&cs=tinysrgb&w=800',
  careers: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920',
  b2b: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920',
  contact: 'https://images.pexels.com/photos/12474787/pexels-photo-12474787.jpeg?auto=compress&cs=tinysrgb&w=1920',
};

export const SOFA16_PAGE_PRODUCTS = [
  { id: '1', name: 'Terracotta Riviera Sofa', slug: 'terracotta-riviera-sofa', category: 'sofa-vai', style: 'hien-dai', price: 32000000, oldPrice: 38000000, image: SOFA16_PAGE_IMAGES.prod1, images: [SOFA16_PAGE_IMAGES.prod1, SOFA16_PAGE_IMAGES.gallery1], material: 'Linen terracotta · Khung gỗ sồi', size: '220x95cm', colors: [SOFA16_COLORS.terracotta, SOFA16_COLORS.olive, SOFA16_COLORS.cream], colorNames: ['Terracotta', 'Olive', 'Cream'], rating: 5.0, reviews: 28, badge: 'bestseller', description: 'Terracotta Riviera Sofa — linen terracotta, cảm hứng Địa Trung Hải.' },
  { id: '2', name: 'Olive Garden Sofa', slug: 'olive-garden-sofa', category: 'sofa-vai', style: 'hien-dai', price: 28000000, image: SOFA16_PAGE_IMAGES.prod2, images: [SOFA16_PAGE_IMAGES.prod2, SOFA16_PAGE_IMAGES.gallery3], material: 'Linen olive · Khung gỗ', size: '210x90cm', colors: [SOFA16_COLORS.olive, SOFA16_COLORS.terracotta, SOFA16_COLORS.cream], colorNames: ['Olive', 'Terracotta', 'Cream'], rating: 4.9, reviews: 42, badge: 'new', description: 'Olive Garden Sofa — linen xanh olive, tươi mát vườn Địa Trung Hải.' },
  { id: '3', name: 'Cream Linen Sofa', slug: 'cream-linen-sofa', category: 'sofa-vai', style: 'minimalist', price: 25000000, image: SOFA16_PAGE_IMAGES.prod3, images: [SOFA16_PAGE_IMAGES.prod3, SOFA16_PAGE_IMAGES.gallery5], material: 'Linen cream · Khung gỗ', size: '200x88cm', colors: [SOFA16_COLORS.cream, SOFA16_COLORS.terracotta, SOFA16_COLORS.olive], colorNames: ['Cream', 'Terracotta', 'Olive'], rating: 4.8, reviews: 33, description: 'Cream Linen Sofa — linen ngà, thanh lịch biển cả.' },
  { id: '4', name: 'Azure Coast Sofa', slug: 'azure-coast-sofa', category: 'sofa-vai', style: 'hien-dai', price: 35000000, oldPrice: 42000000, image: SOFA16_PAGE_IMAGES.prod4, images: [SOFA16_PAGE_IMAGES.prod4], material: 'Linen azure · Khung gỗ', size: '230x95cm', colors: [SOFA16_COLORS.azure, SOFA16_COLORS.terracotta, SOFA16_COLORS.cream], colorNames: ['Azure', 'Terracotta', 'Cream'], rating: 4.9, reviews: 21, badge: 'limited', description: 'Azure Coast Sofa — linen xanh biển, cảm hứng Riviera.' },
  { id: '5', name: 'Sand Dune Sofa', slug: 'sand-dune-sofa', category: 'sofa-vai', style: 'minimalist', price: 22000000, image: SOFA16_PAGE_IMAGES.prod5, images: [SOFA16_PAGE_IMAGES.prod5], material: 'Linen sand · Khung gỗ', size: '200x90cm', colors: [SOFA16_COLORS.sand, SOFA16_COLORS.terracotta, SOFA16_COLORS.olive], colorNames: ['Sand', 'Terracotta', 'Olive'], rating: 4.8, reviews: 17, description: 'Sand Dune Sofa — linen cát, ấm áp bãi biển.' },
  { id: '6', name: 'Riviera Accent Chair', slug: 'riviera-accent-chair', category: 'sofa-don', style: 'hien-dai', price: 12000000, image: SOFA16_PAGE_IMAGES.prod6, images: [SOFA16_PAGE_IMAGES.prod6], material: 'Linen · Khung gỗ', size: '85x80cm', colors: [SOFA16_COLORS.terracotta, SOFA16_COLORS.olive, SOFA16_COLORS.cream], colorNames: ['Terracotta', 'Olive', 'Cream'], rating: 4.9, reviews: 26, badge: 'bestseller', description: 'Ghế đơn Riviera — linen terracotta, thanh lịch Địa Trung Hải.' },
  { id: '7', name: 'Terracotta L-Shape', slug: 'terracotta-l-shape', category: 'sofa-goc-chu-l', style: 'hien-dai', price: 55000000, image: SOFA16_PAGE_IMAGES.prod7, images: [SOFA16_PAGE_IMAGES.prod7], material: 'Linen · Module góc', size: '280x190cm', colors: [SOFA16_COLORS.terracotta, SOFA16_COLORS.olive, SOFA16_COLORS.cream], colorNames: ['Terracotta', 'Olive', 'Cream'], rating: 5.0, reviews: 8, badge: 'new', description: 'Sofa góc Terracotta — linen terracotta, module Địa Trung Hải.' },
  { id: '8', name: 'Olive Recliner Riviera', slug: 'olive-recliner-riviera', category: 'sofa-recliner', style: 'hien-dai', price: 28000000, image: SOFA16_PAGE_IMAGES.prod8, images: [SOFA16_PAGE_IMAGES.prod8], material: 'Linen olive · Cơ chế recliner', size: '200x95cm', colors: [SOFA16_COLORS.olive, SOFA16_COLORS.terracotta], colorNames: ['Olive', 'Terracotta'], rating: 4.8, reviews: 12, description: 'Recliner Olive — linen olive, ngả điện, cảm hứng Riviera.' },
  { id: '9', name: 'Riviera Sofa Bed', slug: 'riviera-sofa-bed', category: 'sofa-giuong', style: 'hien-dai', price: 22000000, image: SOFA16_PAGE_IMAGES.prod9, images: [SOFA16_PAGE_IMAGES.prod9], material: 'Linen · Gỗ', size: '190x90cm (giường 190x140cm)', colors: [SOFA16_COLORS.terracotta, SOFA16_COLORS.cream], colorNames: ['Terracotta', 'Cream'], rating: 4.7, reviews: 19, description: 'Sofa giường Riviera — 2 chức năng, linen Địa Trung Hải.' },
  { id: '10', name: 'Riviera Accent Stool', slug: 'riviera-accent-stool', category: 'sofa-don', style: 'hien-dai', price: 6500000, oldPrice: 8500000, image: SOFA16_PAGE_IMAGES.prod10, images: [SOFA16_PAGE_IMAGES.prod10], material: 'Linen · Gỗ', size: '45x45cm', colors: [SOFA16_COLORS.terracotta, SOFA16_COLORS.olive, SOFA16_COLORS.cream], colorNames: ['Terracotta', 'Olive', 'Cream'], rating: 4.9, reviews: 26, badge: 'bestseller', description: 'Ghế puff Riviera — linen terracotta, chi tiết Địa Trung Hải.' },
];

export const SOFA16_PAGE_COLLECTIONS = [
  { id: 'new', name: 'Bộ sưu tập mới', slug: 'new', description: 'Tuyệt tác Riviera mới nhất 2025', image: SOFA16_PAGE_IMAGES.prod1, count: '10 mẫu', accent: SOFA16_COLORS.terracotta },
  { id: 'featured', name: 'Bộ sưu tập nổi bật', slug: 'featured', description: 'Tác phẩm được yêu thích nhất', image: SOFA16_PAGE_IMAGES.prod2, count: '8 mẫu', accent: SOFA16_COLORS.olive },
  { id: 'seasonal', name: 'Bộ sưu tập theo mùa', slug: 'seasonal', description: 'Sofa phù hợp từng mùa — tone Riviera', image: SOFA16_PAGE_IMAGES.prod3, count: '6 mẫu', accent: SOFA16_COLORS.azure },
  { id: 'luxury', name: 'Bộ sưu tập Luxury', slug: 'luxury', description: 'Linen cao cấp nhất, nhập khẩu Ý', image: SOFA16_PAGE_IMAGES.prod5, count: '7 mẫu', accent: SOFA16_COLORS.terracottaDeep },
  { id: 'bestseller', name: 'Bộ sưu tập Bestseller', slug: 'bestseller', description: 'Những mẫu sofa bán chạy nhất', image: SOFA16_PAGE_IMAGES.prod6, count: '9 mẫu', accent: SOFA16_COLORS.oliveDeep },
];

export const SOFA16_PAGE_PROJECTS = [
  { id: '1', name: 'Villa Amalfi', type: 'biet-thu', typeLabel: 'Dự án biệt thự', location: 'Đà Nẵng', image: SOFA16_PAGE_IMAGES.project1, year: '2024', description: 'Terracotta Riviera Sofa cho biệt thự Amalfi. Cảm hứng Địa Trung Hải.' },
  { id: '2', name: 'Coastal Resort', type: 'resort', typeLabel: 'Dự án resort', location: 'Phú Quốc', image: SOFA16_PAGE_IMAGES.project2, year: '2024', description: 'Olive Garden Sofa cho resort 5 sao. Tươi mát vườn Địa Trung Hải.' },
  { id: '3', name: 'Azure Hotel', type: 'khach-san', typeLabel: 'Dự án khách sạn', location: 'Nha Trang', image: SOFA16_PAGE_IMAGES.project3, year: '2023', description: 'Azure Coast Sofa cho khách sạn biển. Cảm hứng Riviera.' },
  { id: '4', name: 'Cream Office', type: 'van-phong', typeLabel: 'Dự án văn phòng', location: 'Hà Nội', image: SOFA16_PAGE_IMAGES.project4, year: '2024', description: 'Cream Linen Sofa cho văn phòng. Thanh lịch biển cả.' },
  { id: '5', name: 'Sand Restaurant', type: 'nha-hang', typeLabel: 'Dự án nhà hàng', location: 'TP.HCM', image: SOFA16_PAGE_IMAGES.project5, year: '2023', description: 'Sand Dune Sofa cho nhà hàng fine dining. Ấm áp bãi biển.' },
  { id: '6', name: 'Riviera Showroom', type: 'showroom', typeLabel: 'Dự án showroom', location: 'TP.HCM', image: SOFA16_PAGE_IMAGES.project6, year: '2025', description: 'Terracotta Riviera Sofa cho showroom cao cấp. Tuyệt tác Riviera.' },
];

export const SOFA16_PAGE_PROJECT_TYPES = [
  { slug: 'can-ho', label: 'Dự án căn hộ' },
  { slug: 'biet-thu', label: 'Dự án biệt thự' },
  { slug: 'khach-san', label: 'Dự án khách sạn' },
  { slug: 'resort', label: 'Dự án resort' },
  { slug: 'van-phong', label: 'Dự án văn phòng' },
  { slug: 'showroom', label: 'Dự án showroom' },
];

export const SOFA16_PAGE_BLOG_POSTS = [
  { id: '1', title: 'Mediterranean Riviera: Phong cách sống', slug: 'mediterranean-riviera-phong-cach-song', category: 'xu-huong-noi-that', categoryLabel: 'Xu hướng nội thất', excerpt: 'Terracotta, cream, olive — cảm hứng Địa Trung Hải.', content: 'Mediterranean Riviera là phong cách nội thất lấy cảm hứng từ vùng biển Ý...', image: SOFA16_PAGE_IMAGES.blog1, author: 'Lê Hà', date: '15/01/2025', readTime: '5 phút' },
  { id: '2', title: 'Chọn linen cho sofa: Hướng dẫn', slug: 'chon-linen-cho-sofa-huong-dan', category: 'kinh-nghiem-chon-sofa', categoryLabel: 'Kinh nghiệm chọn sofa', excerpt: 'Linen — vật liệu chủ đạo của Sofa16.', content: 'Linen là vật liệu chủ đạo của Sofa16...', image: SOFA16_PAGE_IMAGES.blog2, author: 'Minh Khôi', date: '10/01/2025', readTime: '4 phút' },
  { id: '3', title: 'Bảo quản linen terracotta', slug: 'bao-quan-linen-terracotta', category: 'huong-dan-bao-quan', categoryLabel: 'Hướng dẫn bảo quản', excerpt: 'Linen terracotta — cách chăm sóc.', content: 'Linen terracotta cần chăm sóc đặc biệt...', image: SOFA16_PAGE_IMAGES.blog3, author: 'Lê Hà', date: '05/01/2025', readTime: '4 phút' },
  { id: '4', title: 'Phong thủy phòng khách Riviera', slug: 'phong-thuy-phong-khach-riviera', category: 'phong-thuy-noi-that', categoryLabel: 'Phong thủy nội thất', excerpt: 'Mediterranean và phong thủy — có hợp không?', content: 'Mediterranean thuộc thổ và mộc...', image: SOFA16_PAGE_IMAGES.blog4, author: 'Nghiêm Tuấn', date: '28/12/2024', readTime: '6 phút' },
  { id: '5', title: 'Olive green: Màu của vườn Địa Trung Hải', slug: 'olive-green-mau-cua-vuon-dia-trung-hai', category: 'kien-thuc-vat-lieu', categoryLabel: 'Kiến thức vật liệu', excerpt: 'Olive green — cảm giác Riviera.', content: 'Olive green mang cảm giác vườn Địa Trung Hải...', image: SOFA16_PAGE_IMAGES.blog5, author: 'Minh Khôi', date: '20/12/2024', readTime: '5 phút' },
  { id: '6', title: 'Thiết kế phòng khách Mediterranean', slug: 'thiet-ke-phong-khach-mediterranean', category: 'thiet-ke-phong-khach', categoryLabel: 'Thiết kế phòng khách', excerpt: 'Bí quyết tạo không gian Riviera.', content: 'Terracotta, cream, olive — Địa Trung Hải...', image: SOFA16_PAGE_IMAGES.blog6, author: 'Lê Hà', date: '15/12/2024', readTime: '5 phút' },
];

export const SOFA16_PAGE_BLOG_CATEGORIES = [
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

export const SOFA16_PAGE_SHOWROOMS = [
  { id: '1', name: 'Sofa16 Riviera Hà Nội', address: '88 Nguyễn Văn Huyên, Cầu Giấy, Hà Nội', phone: '024 3555 8888', hours: '9:00 - 21:00', image: SOFA16_PAGE_IMAGES.showroom1, lat: 21.0289, lng: 105.7877 },
  { id: '2', name: 'Sofa16 Coast TP.HCM', address: '120 Lý Chính Thắng, Quận 11, TP.HCM', phone: '028 3838 9999', hours: '9:00 - 21:00', image: SOFA16_PAGE_IMAGES.showroom2, lat: 10.7726, lng: 106.7069 },
  { id: '3', name: 'Sofa16 Garden Đà Nẵng', address: '40 Bạch Đằng, Hải Châu, Đà Nẵng', phone: '0236 3999 222', hours: '9:00 - 20:00', image: SOFA16_PAGE_IMAGES.showroom3, lat: 16.0544, lng: 108.2022 },
  { id: '4', name: 'Sofa16 Sand Cần Thơ', address: '60 Hòa Bình, Ninh Kiều, Cần Thơ', phone: '0292 3888 333', hours: '9:00 - 20:00', image: SOFA16_PAGE_IMAGES.showroom4, lat: 10.0451, lng: 105.7469 },
];

export const SOFA16_PAGE_CAREERS = [
  { id: '1', title: 'Thợ may linen cao cấp', location: 'Hà Nội', type: 'Toàn thời gian', salary: '12-20 triệu', description: 'Tìm thợ có kinh nghiệm may linen cao cấp.', requirements: ['3+ năm kinh nghiệm may linen', 'Biết xử lý linen', 'Tỉ mỉ, cẩn thận'] },
  { id: '2', title: 'Stylist nội thất Riviera', location: 'TP.HCM', type: 'Toàn thời gian', salary: '10-18 triệu', description: 'Tư vấn khách hàng về sofa Mediterranean.', requirements: ['2+ năm kinh nghiệm sales nội thất', 'Am hiểu Mediterranean', 'Giao tiếp tốt'] },
  { id: '3', title: 'Thợ bọc linen', location: 'Đà Nẵng', type: 'Toàn thời gian', salary: '12-20 triệu', description: 'Phụ trách bọc linen terracotta, olive.', requirements: ['Kinh nghiệm bọc linen', 'Am hiểu linen cao cấp', 'Tỉ mỉ'] },
  { id: '4', title: 'Thiết kế 3D Mediterranean', location: 'Hà Nội', type: 'Toàn thời gian', salary: '15-25 triệu', description: 'Thiết kế bản vẽ 3D cho khách đặt sofa Riviera.', requirements: ['Thành thạo Sketchup, 3ds Max', '3+ năm kinh nghiệm thiết kế', 'Am hiểu Mediterranean'] },
];

export const SOFA16_PAGE_PRODUCT_CATEGORIES = {
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

export const SOFA16_PAGE_COMPANY_INFO = {
  name: 'Sofa16',
  tagline: 'MEDITERRANEAN RIVIERA — Sun-drenched Italian coastal luxury, terracotta, cream linen, olive green.',
  phone: '024 3555 8888',
  email: 'ciao@sofa16.vn',
  address: '88 Nguyễn Văn Huyên, Cầu Giấy, Hà Nội',
  founded: '2016',
  stats: [
    { value: '15', label: 'Bộ sưu tập' },
    { value: '10+', label: 'Năm thủ công' },
    { value: '2800+', label: 'Tác phẩm đã giao' },
    { value: '98%', label: 'Khách hài lòng' },
  ],
};

export const SOFA16_PAGE_PROMOTION_SERVICES = [
  { slug: 'warranty', title: 'Bảo hành', icon: 'solar:shield-check-bold-duotone', description: 'Bảo hành 10 năm cho khung và đệm. Hỗ trợ sửa chữa miễn phí.' },
  { slug: 'maintenance', title: 'Bảo trì', icon: 'solar:settings-bold-duotone', description: 'Thay áo bọc linen, làm mới sofa với chi phí ưu đãi.' },
  { slug: 'repair', title: 'Sửa chữa', icon: 'solar:hammer-bold-duotone', description: 'Sửa chữa sofa: thay đệm, bọc lại, sửa khung.' },
  { slug: 'cleaning', title: 'Vệ sinh sofa', icon: 'solar:water-bold-duotone', description: 'Giặt khô, làm sạch sâu linen.' },
  { slug: 'returns', title: 'Đổi trả hàng', icon: 'solar:refresh-circle-bold-duotone', description: '30 ngày đổi trả. Hỗ trợ sửa chữa miễn phí.' },
];

export const SOFA16_PAGE_FAQS = [
  { question: 'Linen có dễ bẩn không?', answer: 'Linen của Sofa16 phủ lớp chống thấm, lau sạch trong 30 giây.' },
  { question: 'Terracotta có hợp không gian nhỏ?', answer: 'Dòng Riviera Accent phù hợp không gian nhỏ.' },
  { question: 'Tôi có thể đặt màu riêng?', answer: 'Có. Terracotta, olive, cream, azure — phối theo ý. Render 3D 24h.' },
  { question: 'Sofa Mediterranean có hợp khí hậu Việt Nam?', answer: 'Linen thoáng khí, phù hợp khí hậu nhiệt đới.' },
  { question: 'Chính sách giao hàng?', answer: 'Giao lắp miễn phí nội thành. Ngoại thành 2-4 ngày.' },
  { question: 'Bảo hành bao lâu?', answer: 'Bảo hành 10 năm khung & đệm. Hỗ trợ sửa chữa miễn phí.' },
];
