// SOFA14 PAGES — data for all sub-pages scoped under /sofa14/
// Brand: SOFT CLAY / PASTEL POP — claymorphism, candy pastels, chunky blobs, playful & toy-like
// ----------------------------------------------------------------------

import { sofa14Alpha, SOFA14_IMAGES, SOFA14_COLORS } from '../sofa14/sofa14-data';

export { sofa14Alpha };

export function sofa14FormatPrice(value: number) {
  return `${value.toLocaleString('vi-VN')}₫`;
}

export const SOFA14_PAGE_IMAGES = {
  ...SOFA14_IMAGES,
  aboutHero: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920',
  historyHero: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=1920',
  workshop: 'https://images.pexels.com/photos/6316515/pexels-photo-6316515.jpeg?auto=compress&cs=tinysrgb&w=1200',
  factory: 'https://images.pexels.com/photos/6489121/pexels-photo-6489121.jpeg?auto=compress&cs=tinysrgb&w=1200',
  technology: 'https://images.pexels.com/photos/6444368/pexels-photo-6444368.jpeg?auto=compress&cs=tinysrgb&w=1200',
  team: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200',
  product7: 'https://images.pexels.com/photos/6580227/pexels-photo-6580227.jpeg?auto=compress&cs=tinysrgb&w=600',
  product8: 'https://images.pexels.com/photos/6899431/pexels-photo-6899431.jpeg?auto=compress&cs=tinysrgb&w=600',
  product9: 'https://images.pexels.com/photos/6970071/pexels-photo-6970071.jpeg?auto=compress&cs=tinysrgb&w=600',
  product10: 'https://images.pexels.com/photos/6316515/pexels-photo-6316515.jpeg?auto=compress&cs=tinysrgb&w=600',
  project1: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
  project2: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=800',
  project3: 'https://images.pexels.com/photos/6489121/pexels-photo-6489121.jpeg?auto=compress&cs=tinysrgb&w=800',
  project4: 'https://images.pexels.com/photos/6444368/pexels-photo-6444368.jpeg?auto=compress&cs=tinysrgb&w=800',
  project5: 'https://images.pexels.com/photos/6580227/pexels-photo-6580227.jpeg?auto=compress&cs=tinysrgb&w=800',
  project6: 'https://images.pexels.com/photos/6899431/pexels-photo-6899431.jpeg?auto=compress&cs=tinysrgb&w=800',
  blog1: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
  blog2: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=800',
  blog3: 'https://images.pexels.com/photos/6316515/pexels-photo-6316515.jpeg?auto=compress&cs=tinysrgb&w=800',
  blog4: 'https://images.pexels.com/photos/6489121/pexels-photo-6489121.jpeg?auto=compress&cs=tinysrgb&w=800',
  blog5: 'https://images.pexels.com/photos/6580227/pexels-photo-6580227.jpeg?auto=compress&cs=tinysrgb&w=800',
  blog6: 'https://images.pexels.com/photos/6970071/pexels-photo-6970071.jpeg?auto=compress&cs=tinysrgb&w=800',
  showroom1: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
  showroom2: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=600',
  showroom3: 'https://images.pexels.com/photos/6489121/pexels-photo-6489121.jpeg?auto=compress&cs=tinysrgb&w=600',
  showroom4: 'https://images.pexels.com/photos/6444368/pexels-photo-6444368.jpeg?auto=compress&cs=tinysrgb&w=600',
  service1: 'https://images.pexels.com/photos/6316515/pexels-photo-6316515.jpeg?auto=compress&cs=tinysrgb&w=800',
  service2: 'https://images.pexels.com/photos/6489121/pexels-photo-6489121.jpeg?auto=compress&cs=tinysrgb&w=800',
  service3: 'https://images.pexels.com/photos/6444368/pexels-photo-6444368.jpeg?auto=compress&cs=tinysrgb&w=800',
  service4: 'https://images.pexels.com/photos/6580227/pexels-photo-6580227.jpeg?auto=compress&cs=tinysrgb&w=800',
  careers: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920',
  b2b: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920',
  contact: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920',
};

export const SOFA14_PAGE_PRODUCTS = [
  { id: '1', name: 'Sofa Cloud Mint', slug: 'sofa-cloud-mint', category: 'sofa-vai', style: 'hien-dai', price: 19900000, oldPrice: 23500000, image: SOFA14_PAGE_IMAGES.prod1, images: [SOFA14_PAGE_IMAGES.prod1, SOFA14_PAGE_IMAGES.gallery1], material: 'Cotton pastel · Khung gỗ', size: '220x90cm', colors: [SOFA14_COLORS.mint, SOFA14_COLORS.sky, SOFA14_COLORS.coral], colorNames: ['Mint', 'Sky', 'Coral'], rating: 4.9, reviews: 132, badge: 'bestseller', description: 'Sofa Cloud Mint — cotton pastel, êm như mây. Dành cho không gian tươi sáng.' },
  { id: '2', name: 'Sofa Sky Dream', slug: 'sofa-sky-dream', category: 'sofa-vai', style: 'hien-dai', price: 15900000, image: SOFA14_PAGE_IMAGES.prod2, images: [SOFA14_PAGE_IMAGES.prod2, SOFA14_PAGE_IMAGES.gallery2], material: 'Linen pastel · Khung gỗ', size: '200x85cm', colors: [SOFA14_COLORS.sky, SOFA14_COLORS.mint, SOFA14_COLORS.butter], colorNames: ['Sky', 'Mint', 'Butter'], rating: 4.8, reviews: 98, description: 'Sofa Sky Dream — linen xanh bầu trời, mơ mộng và êm ái.' },
  { id: '3', name: 'Sofa Coral Pop', slug: 'sofa-coral-pop', category: 'sofa-vai', style: 'hien-dai', price: 22500000, image: SOFA14_PAGE_IMAGES.prod3, images: [SOFA14_PAGE_IMAGES.prod3, SOFA14_PAGE_IMAGES.gallery3], material: 'Velvet pastel · Khung gỗ', size: '230x92cm', colors: [SOFA14_COLORS.coral, SOFA14_COLORS.butter, SOFA14_COLORS.mint], colorNames: ['Coral', 'Butter', 'Mint'], rating: 4.9, reviews: 71, badge: 'new', description: 'Sofa Coral Pop — velvet san hô, vui tươi và ấm áp.' },
  { id: '4', name: 'Sofa Butter Soft', slug: 'sofa-butter-soft', category: 'sofa-ni', style: 'hien-dai', price: 27900000, oldPrice: 31900000, image: SOFA14_PAGE_IMAGES.prod4, images: [SOFA14_PAGE_IMAGES.prod4, SOFA14_PAGE_IMAGES.gallery4], material: 'Nỉ pastel · Khung gỗ', size: '240x95cm', colors: [SOFA14_COLORS.butter, SOFA14_COLORS.mint, SOFA14_COLORS.coral], colorNames: ['Butter', 'Mint', 'Coral'], rating: 5.0, reviews: 45, description: 'Sofa Butter Soft — nỉ vàng bơ, mềm mại và ấm áp.' },
  { id: '5', name: 'Sofa Mint Breeze', slug: 'sofa-mint-breeze', category: 'sofa-vai', style: 'bac-au', price: 13500000, image: SOFA14_PAGE_IMAGES.prod5, images: [SOFA14_PAGE_IMAGES.prod5, SOFA14_PAGE_IMAGES.gallery5], material: 'Cotton · Khung gỗ', size: '190x82cm', colors: [SOFA14_COLORS.mint, SOFA14_COLORS.sky], colorNames: ['Mint', 'Sky'], rating: 4.7, reviews: 88, description: 'Sofa Mint Breeze — cotton xanh mint, mát mẻ và tươi mới.' },
  { id: '6', name: 'Sofa Bubble Pop', slug: 'sofa-bubble-pop', category: 'sofa-vai', style: 'hien-dai', price: 9900000, image: SOFA14_PAGE_IMAGES.prod6, images: [SOFA14_PAGE_IMAGES.prod6], material: 'Cotton · Khung gỗ', size: '180x80cm', colors: [SOFA14_COLORS.coral, SOFA14_COLORS.butter, SOFA14_COLORS.sky], colorNames: ['Coral', 'Butter', 'Sky'], rating: 4.8, reviews: 62, badge: 'limited', description: 'Sofa Bubble Pop — cotton pastel, vui tươi như kẹo bông.' },
  { id: '7', name: 'Sofa Cloud L-Shape', slug: 'sofa-cloud-l-shape', category: 'sofa-goc-chu-l', style: 'hien-dai', price: 29900000, image: SOFA14_PAGE_IMAGES.product7, images: [SOFA14_PAGE_IMAGES.product7], material: 'Cotton · Module góc', size: '280x180cm', colors: [SOFA14_COLORS.mint, SOFA14_COLORS.sky, SOFA14_COLORS.coral], colorNames: ['Mint', 'Sky', 'Coral'], rating: 4.9, reviews: 34, badge: 'new', description: 'Sofa góc Cloud — module pastel, êm như mây cho căn hộ.' },
  { id: '8', name: 'Sofa Squish Recliner', slug: 'sofa-squish-recliner', category: 'sofa-recliner', style: 'hien-dai', price: 18900000, image: SOFA14_PAGE_IMAGES.product8, images: [SOFA14_PAGE_IMAGES.product8], material: 'Nỉ · Cơ chế recliner', size: '200x88cm', colors: [SOFA14_COLORS.sky, SOFA14_COLORS.coral], colorNames: ['Sky', 'Coral'], rating: 4.7, reviews: 41, description: 'Sofa recliner Squish — ngả điện, nỉ pastel êm ái.' },
  { id: '9', name: 'Sofa Bounce Bed', slug: 'sofa-bounce-bed', category: 'sofa-giuong', style: 'hien-dai', price: 17500000, image: SOFA14_PAGE_IMAGES.product9, images: [SOFA14_PAGE_IMAGES.product9], material: 'Cotton · Gỗ', size: '200x90cm (giường 200x140cm)', colors: [SOFA14_COLORS.coral, SOFA14_COLORS.butter], colorNames: ['Coral', 'Butter'], rating: 4.8, reviews: 56, description: 'Sofa giường Bounce — 2 chức năng, cotton pastel vui tươi.' },
  { id: '10', name: 'Sofa Pop Accent', slug: 'sofa-pop-accent', category: 'sofa-don', style: 'bac-au', price: 6500000, oldPrice: 8500000, image: SOFA14_PAGE_IMAGES.product10, images: [SOFA14_PAGE_IMAGES.product10], material: 'Cotton · Thép sơn', size: '85x80cm', colors: [SOFA14_COLORS.butter, SOFA14_COLORS.mint, SOFA14_COLORS.coral], colorNames: ['Butter', 'Mint', 'Coral'], rating: 4.9, reviews: 77, badge: 'bestseller', description: 'Ghế sofa đơn Pop — cotton pastel, chân sơn tông. Vui tươi cho góc phòng.' },
];

export const SOFA14_PAGE_COLLECTIONS = [
  { id: 'new', name: 'Bộ sưu tập mới', slug: 'new', description: 'Những mẫu pastel mới nhất 2025', image: SOFA14_PAGE_IMAGES.prod1, count: '10 mẫu', accent: SOFA14_COLORS.mint },
  { id: 'featured', name: 'Bộ sưu tập nổi bật', slug: 'featured', description: 'Các thiết kế được yêu thích nhất', image: SOFA14_PAGE_IMAGES.prod3, count: '8 mẫu', accent: SOFA14_COLORS.coral },
  { id: 'seasonal', name: 'Bộ sưu tập theo mùa', slug: 'seasonal', description: 'Sofa phù hợp từng mùa — tone pastel', image: SOFA14_PAGE_IMAGES.prod4, count: '6 mẫu', accent: SOFA14_COLORS.butter },
  { id: 'luxury', name: 'Bộ sưu tập Luxury', slug: 'luxury', description: 'Velvet pastel cao cấp nhất', image: SOFA14_PAGE_IMAGES.prod5, count: '7 mẫu', accent: SOFA14_COLORS.sky },
  { id: 'bestseller', name: 'Bộ sưu tập Bestseller', slug: 'bestseller', description: 'Những mẫu sofa bán chạy nhất', image: SOFA14_PAGE_IMAGES.prod6, count: '9 mẫu', accent: SOFA14_COLORS.coral },
];

export const SOFA14_PAGE_PROJECTS = [
  { id: '1', name: 'Sunshine Apartment', type: 'can-ho', typeLabel: 'Dự án căn hộ', location: 'TP.HCM', image: SOFA14_PAGE_IMAGES.project1, year: '2024', description: 'Sofa Cloud Mint cho căn hộ Sunshine. Pastel và tươi sáng.' },
  { id: '2', name: 'Pastel Villa', type: 'biet-thu', typeLabel: 'Dự án biệt thự', location: 'Đà Nẵng', image: SOFA14_PAGE_IMAGES.project2, year: '2024', description: 'Sofa Sky Dream cho villa Pastel. Mơ mộng và êm ái.' },
  { id: '3', name: 'Candy Hotel', type: 'khach-san', typeLabel: 'Dự án khách sạn', location: 'Hà Nội', image: SOFA14_PAGE_IMAGES.project3, year: '2023', description: 'Sofa Coral Pop cho hotel Candy. Vui tươi và ấm áp.' },
  { id: '4', name: 'Mint Resort', type: 'resort', typeLabel: 'Dự án resort', location: 'Phú Quốc', image: SOFA14_PAGE_IMAGES.project4, year: '2023', description: 'Sofa Butter Soft cho resort Mint. Mềm mại và thư giãn.' },
  { id: '5', name: 'Bloom Office', type: 'van-phong', typeLabel: 'Dự án văn phòng', location: 'Hà Nội', image: SOFA14_PAGE_IMAGES.project5, year: '2024', description: 'Sofa Mint Breeze cho office Bloom. Tươi mới và sáng tạo.' },
  { id: '6', name: 'Pop Showroom', type: 'showroom', typeLabel: 'Dự án showroom', location: 'TP.HCM', image: SOFA14_PAGE_IMAGES.project6, year: '2025', description: 'Sofa Bubble Pop cho showroom Pop. Vui tươi như kẹo bông.' },
];

export const SOFA14_PAGE_PROJECT_TYPES = [
  { slug: 'can-ho', label: 'Dự án căn hộ' },
  { slug: 'biet-thu', label: 'Dự án biệt thự' },
  { slug: 'khach-san', label: 'Dự án khách sạn' },
  { slug: 'resort', label: 'Dự án resort' },
  { slug: 'van-phong', label: 'Dự án văn phòng' },
  { slug: 'showroom', label: 'Dự án showroom' },
];

export const SOFA14_PAGE_BLOG_POSTS = [
  { id: '1', title: 'Pastel: Xu hướng nội thất 2025', slug: 'pastel-xu-huong-noi-that-2025', category: 'xu-huong-noi-that', categoryLabel: 'Xu hướng nội thất', excerpt: 'Mint, sky, coral, butter — pastel pop đang lên.', content: 'Pastel pop là xu hướng nội thất 2025...', image: SOFA14_PAGE_IMAGES.blog1, author: 'Mai Lan', date: '15/01/2025', readTime: '5 phút' },
  { id: '2', title: 'Chọn cotton pastel: Hướng dẫn', slug: 'chon-cotton-pastel-huong-dan', category: 'kinh-nghiem-chon-sofa', categoryLabel: 'Kinh nghiệm chọn sofa', excerpt: 'Cotton pastel — cách chọn vải mềm mại.', content: 'Cotton pastel là vải chủ đạo...', image: SOFA14_PAGE_IMAGES.blog2, author: 'Minh Đức', date: '10/01/2025', readTime: '4 phút' },
  { id: '3', title: 'Bảo quản nỉ pastel', slug: 'bao-quan-ni-pastel', category: 'huong-dan-bao-quan', categoryLabel: 'Hướng dẫn bảo quản', excerpt: 'Nỉ pastel — cách chăm sóc mềm mại.', content: 'Nỉ pastel cần chăm sóc đặc biệt...', image: SOFA14_PAGE_IMAGES.blog3, author: 'Thu Trang', date: '05/01/2025', readTime: '4 phút' },
  { id: '4', title: 'Phong thủy phòng khách pastel', slug: 'phong-thuy-phong-khach-pastel', category: 'phong-thuy-noi-that', categoryLabel: 'Phong thủy nội thất', excerpt: 'Pastel và phong thủy — có hợp không?', content: 'Pastel thuộc thổ và kim...', image: SOFA14_PAGE_IMAGES.blog4, author: 'Minh Đức', date: '28/12/2024', readTime: '6 phút' },
  { id: '5', title: 'Velvet pastel: Vật liệu toy-like', slug: 'velvet-pastel-vat-lieu-toy-like', category: 'kien-thuc-vat-lieu', categoryLabel: 'Kiến thức vật liệu', excerpt: 'Velvet pastel — cảm giác claymorphism.', content: 'Velvet pastel mang cảm giác claymorphism...', image: SOFA14_PAGE_IMAGES.blog5, author: 'Mai Lan', date: '20/12/2024', readTime: '5 phút' },
  { id: '6', title: 'Thiết kế phòng khách pastel pop', slug: 'thiet-ke-phong-khach-pastel-pop', category: 'thiet-ke-phong-khach', categoryLabel: 'Thiết kế phòng khách', excerpt: 'Bí quyết tạo không gian claymorphism.', content: 'Claymorphism, candy pastels, chunky blobs...', image: SOFA14_PAGE_IMAGES.blog6, author: 'Thu Trang', date: '15/12/2024', readTime: '5 phút' },
];

export const SOFA14_PAGE_BLOG_CATEGORIES = [
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

export const SOFA14_PAGE_SHOWROOMS = [
  { id: '1', name: 'Sofa14 Bloom Hà Nội', address: '88 Trần Duy Hưng, Cầu Giấy, Hà Nội', phone: '024 3555 7777', hours: '9:00 - 21:00', image: SOFA14_PAGE_IMAGES.showroom1, lat: 21.0137, lng: 105.8258 },
  { id: '2', name: 'Sofa14 Pop TP.HCM', address: '120 Lý Chính Thắng, Quận 11, TP.HCM', phone: '028 3838 8888', hours: '9:00 - 21:00', image: SOFA14_PAGE_IMAGES.showroom2, lat: 10.7726, lng: 106.7069 },
  { id: '3', name: 'Sofa14 Mint Đà Nẵng', address: '40 Bạch Đằng, Hải Châu, Đà Nẵng', phone: '0236 3999 111', hours: '9:00 - 20:00', image: SOFA14_PAGE_IMAGES.showroom3, lat: 16.0544, lng: 108.2022 },
  { id: '4', name: 'Sofa14 Coral Cần Thơ', address: '60 Hòa Bình, Ninh Kiều, Cần Thơ', phone: '0292 3888 222', hours: '9:00 - 20:00', image: SOFA14_PAGE_IMAGES.showroom4, lat: 10.0451, lng: 105.7469 },
];

export const SOFA14_PAGE_CAREERS = [
  { id: '1', title: 'Thợ may cotton pastel', location: 'Hà Nội', type: 'Toàn thời gian', salary: '10-16 triệu', description: 'Tìm thợ có kinh nghiệm may cotton pastel.', requirements: ['2+ năm kinh nghiệm may cotton', 'Biết xử lý vải pastel', 'Tỉ mỉ, cẩn thận'] },
  { id: '2', title: 'Stylist nội thất pastel pop', location: 'TP.HCM', type: 'Toàn thời gian', salary: '8-14 triệu', description: 'Tư vấn khách hàng về sofa pastel pop.', requirements: ['1+ năm kinh nghiệm sales nội thất', 'Am hiểu pastel pop', 'Giao tiếp tốt'] },
  { id: '3', title: 'Thợ nỉ pastel', location: 'Đà Nẵng', type: 'Toàn thời gian', salary: '12-20 triệu', description: 'Phụ trách bọc nỉ pastel.', requirements: ['Kinh nghiệm bọc nỉ', 'Am hiểu nỉ pastel', 'Tỉ mỉ'] },
  { id: '4', title: 'Thiết kế 3D claymorphism', location: 'Hà Nội', type: 'Toàn thời gian', salary: '12-22 triệu', description: 'Thiết kế bản vẽ 3D cho khách hàng đặt sofa pastel.', requirements: ['Thành thạo Sketchup, 3ds Max', '2+ năm kinh nghiệm thiết kế', 'Am hiểu claymorphism'] },
];

export const SOFA14_PAGE_PRODUCT_CATEGORIES = {
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

export const SOFA14_PAGE_COMPANY_INFO = {
  name: 'Sofa14',
  tagline: 'SOFT CLAY / PASTEL POP — Claymorphism, candy pastels, chunky blobs, playful & toy-like.',
  phone: '024 3555 7777',
  email: 'hello@sofa14.vn',
  address: '88 Trần Duy Hưng, Cầu Giấy, Hà Nội',
  founded: '2018',
  stats: [
    { value: '24', label: 'Bộ sưu tập' },
    { value: '10+', label: 'Năm thủ công' },
    { value: '8200+', label: 'Sản phẩm đã giao' },
    { value: '98%', label: 'Khách hài lòng' },
  ],
};

export const SOFA14_PAGE_PROMOTION_SERVICES = [
  { slug: 'warranty', title: 'Bảo hành', icon: 'solar:shield-check-bold-duotone', description: 'Bảo hành 5 năm cho khung và đệm. Hỗ trợ sửa chữa miễn phí.' },
  { slug: 'maintenance', title: 'Bảo trì', icon: 'solar:settings-bold-duotone', description: 'Thay áo bọc, làm mới sofa với chi phí ưu đãi.' },
  { slug: 'repair', title: 'Sửa chữa', icon: 'solar:hammer-bold-duotone', description: 'Sửa chữa sofa: thay đệm, bọc lại, sửa khung.' },
  { slug: 'cleaning', title: 'Vệ sinh sofa', icon: 'solar:water-bold-duotone', description: 'Giặt khô, làm sạch sâu cotton và nỉ pastel.' },
  { slug: 'returns', title: 'Đổi trả hàng', icon: 'solar:refresh-circle-bold-duotone', description: '14 ngày đổi trả. Hỗ trợ sửa chữa miễn phí.' },
];

export const SOFA14_PAGE_FAQS = [
  { question: 'Cotton pastel có dễ bẩn không?', answer: 'Cotton của Sofa14 phủ lớp chống thấm, lau sạch trong 30 giây. Bộ vỏ tháo rời giặt máy.' },
  { question: 'Nỉ pastel có bền không?', answer: 'Nỉ pastel độ bền 5-8 năm. Cần chăm sóc định kỳ với dung dịch chuyên dụng.' },
  { question: 'Tôi có thể đặt màu riêng?', answer: 'Có. Mint, sky, coral, butter — phối theo ý. Đội thiết kế gửi render 3D trong 24h.' },
  { question: 'Sofa pastel có hợp không gian nhỏ?', answer: 'Có. Dòng Bubble Pop và Mint Breeze phù hợp căn hộ nhỏ.' },
  { question: 'Chính sách giao hàng?', answer: 'Giao lắp miễn phí nội thành. Ngoại thành 2-4 ngày. Lắp đặt tận nơi.' },
  { question: 'Bảo hành bao lâu?', answer: 'Bảo hành 5 năm khung & đệm. Hỗ trợ sửa chữa miễn phí.' },
];
