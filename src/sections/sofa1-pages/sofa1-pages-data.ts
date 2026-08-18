// SOFA1 PAGES — data for all sub-pages scoped under /sofa1/
// Distinct style: warm artisan luxury, Italian-inspired naming
// ----------------------------------------------------------------------
// This file is a thin adapter: all real content lives in
// src/_mock/_sofa1.ts (shared with the admin dashboard at
// /dashboard/sofa1/*). Editing a product/project/blog post/etc. in the
// admin updates what renders on every /sofa1/* page automatically —
// nothing below should hardcode content, only re-shape field names to
// match what the existing page components expect.

import { fDate } from 'src/utils/format-time';

import { _sofa1Faqs } from 'src/_mock/_sofa1-cms';
import {
  _sofa1Careers,
  _sofa1Projects,
  _sofa1Products,
  _sofa1Showrooms,
  _sofa1BlogPosts,
  _sofa1Collections,
  SOFA1_MOCK_IMAGES,
  _sofa1ProjectTypes,
  _sofa1BlogCategories,
  _sofa1Promotions as _sofa1PromotionRecords,
} from 'src/_mock/_sofa1';

export const SOFA1_PAGE_IMAGES = {
  aboutHero: 'https://images.pexels.com/photos/276624/pexels-photo-276624.jpeg?auto=compress&cs=tinysrgb&w=1920',
  historyHero: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1920',
  workshop: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1200',
  factory: 'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=1200',
  technology: 'https://images.pexels.com/photos/691410/pexels-photo-691410.jpeg?auto=compress&cs=tinysrgb&w=1200',
  team: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ...SOFA1_MOCK_IMAGES,
  cta: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
  contact: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1920',
  careers: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920',
  b2b: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920',
  service1: 'https://images.pexels.com/photos/276624/pexels-photo-276624.jpeg?auto=compress&cs=tinysrgb&w=800',
  service2: 'https://images.pexels.com/photos/675849/pexels-photo-675849.jpeg?auto=compress&cs=tinysrgb&w=800',
  service3: 'https://images.pexels.com/photos/691410/pexels-photo-691410.jpeg?auto=compress&cs=tinysrgb&w=800',
  service4: 'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=800',
};

export const SOFA1_PRODUCTS = _sofa1Products.map((product) => ({
  id: product.id,
  name: product.name,
  slug: product.slug,
  category: product.categoryId,
  style: product.style,
  price: product.priceSale || product.price,
  oldPrice: product.priceSale ? product.price : undefined,
  image: product.coverUrl,
  images: product.images,
  material: product.material,
  size: product.size,
  colors: product.colorNames,
  rating: product.rating,
  reviews: product.totalReviews,
  badge: product.badge,
  description: product.description,
}));

export const SOFA1_COLLECTIONS = _sofa1Collections.map((collection) => ({
  id: collection.id,
  name: collection.name,
  slug: collection.slug,
  description: collection.description,
  image: collection.image,
  count: collection.displayCount,
}));

export const SOFA1_PROJECTS = _sofa1Projects.map((project) => ({
  id: project.id,
  name: project.name,
  type: project.type,
  typeLabel: _sofa1ProjectTypes.find((t) => t.slug === project.type)?.label || project.type,
  location: project.location,
  image: project.coverUrl,
  year: project.year,
  description: project.description,
}));

export const SOFA1_PROJECT_TYPES = _sofa1ProjectTypes;

export const SOFA1_BLOG_POSTS = _sofa1BlogPosts.map((post) => ({
  id: post.id,
  title: post.title,
  slug: post.slug,
  category: post.category,
  categoryLabel: _sofa1BlogCategories.find((c) => c.slug === post.category)?.label || post.category,
  excerpt: post.excerpt,
  content: post.content,
  image: post.coverUrl,
  author: post.author,
  date: fDate(post.createdAt),
  readTime: post.readTime,
}));

export const SOFA1_BLOG_CATEGORIES = _sofa1BlogCategories;

export const SOFA1_SHOWROOMS = _sofa1Showrooms.map((showroom) => ({
  id: showroom.id,
  name: showroom.name,
  address: showroom.address,
  phone: showroom.phone,
  hours: showroom.openHours,
  image: showroom.coverUrl,
}));

export const SOFA1_CAREERS = _sofa1Careers.map((career) => ({
  id: career.id,
  title: career.title,
  location: career.location,
  type: career.type,
  salary: career.salary,
  description: career.description,
  requirements: career.requirements,
}));

export const SOFA1_PRODUCT_CATEGORIES = {
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

export const SOFA1_COMPANY_INFO = {
  name: 'Casa Sofa',
  tagline: 'Sofa cao cấp chế tác thủ công | Da bò & Gỗ sồi',
  phone: '024 3855 1234',
  email: 'info@casasofa.vn',
  address: '123 Nguyễn Trãi, Thanh Xuân, Hà Nội',
  founded: '2013',
  stats: [
    { value: '12+', label: 'Năm chế tác thủ công' },
    { value: '80+', label: 'Mẫu sofa thiết kế' },
    { value: '25k+', label: 'Gia đình tin chọn' },
    { value: '50+', label: 'Dự án lớn' },
  ],
};

export const SOFA1_PROMOTION_SERVICES = _sofa1PromotionRecords.map((promo) => ({
  slug: promo.service,
  title: promo.title,
  icon: promo.icon,
  description: promo.description,
}));

// Lấy trực tiếp từ src/_mock/_sofa1-cms.ts (cùng nguồn với module FAQ ở
// /sofa1/admin/cms/faq) — chỉ hiển thị câu hỏi đã "Đã xuất bản", sắp theo
// thứ tự ưu tiên. Sửa/thêm câu hỏi ở trang quản trị sẽ phản ánh ở đây.
export const SOFA1_FAQS = _sofa1Faqs
  .filter((faq) => faq.status === 'published')
  .sort((a, b) => a.order - b.order)
  .map((faq) => ({ question: faq.question, answer: faq.answer }));

export const formatSofa1Price = (price: number): string =>
  `${new Intl.NumberFormat('vi-VN').format(price)}đ`;
