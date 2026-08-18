import type {
  ISofa1Order,
  ISofa1Career,
  ISofa1B2BLead,
  ISofa1Product,
  ISofa1Project,
  ISofa1Category,
  ISofa1Customer,
  ISofa1Showroom,
  ISofa1BlogPost,
  ISofa1Promotion,
  ISofa1Collection,
  ISofa1ContactMessage,
  ISofa1CareerApplication,
} from 'src/types/sofa1';

import { _mock } from './_mock';

// ----------------------------------------------------------------------
// Single source of truth for the "sofa1" (Casa Sofa) business.
//
// Both the public site (src/sections/sofa1/sofa1-data.ts and
// src/sections/sofa1-pages/sofa1-pages-data.ts re-export/derive from the
// arrays below) and the admin dashboard (src/sections/sofa1-admin/*) read
// from this file, so editing a record here is reflected everywhere.
// ----------------------------------------------------------------------

export const SOFA1_STATUS_OPTIONS = [
  { value: 'published', label: 'Published' },
  { value: 'draft', label: 'Draft' },
];

export const SOFA1_PRODUCT_STOCK_OPTIONS = [
  { value: 'in stock', label: 'In stock' },
  { value: 'low stock', label: 'Low stock' },
  { value: 'out of stock', label: 'Out of stock' },
];

export const SOFA1_ORDER_STATUS_OPTIONS = [
  { value: 'pending', label: 'Chờ xác nhận' },
  { value: 'confirmed', label: 'Đã xác nhận' },
  { value: 'shipping', label: 'Đang giao' },
  { value: 'delivered', label: 'Đã giao' },
  { value: 'cancelled', label: 'Đã hủy' },
];

export const SOFA1_CUSTOMER_STATUS_OPTIONS = [
  { value: 'active', label: 'Hoạt động' },
  { value: 'vip', label: 'VIP' },
  { value: 'blocked', label: 'Đã khóa' },
];

export const SOFA1_LEAD_STATUS_OPTIONS = [
  { value: 'new', label: 'Mới' },
  { value: 'contacted', label: 'Đã liên hệ' },
  { value: 'quoted', label: 'Đã báo giá' },
  { value: 'won', label: 'Thành công' },
  { value: 'lost', label: 'Không thành công' },
];

export const SOFA1_CONTACT_STATUS_OPTIONS = [
  { value: 'new', label: 'Mới' },
  { value: 'replied', label: 'Đã phản hồi' },
  { value: 'archived', label: 'Lưu trữ' },
];

export const SOFA1_APPLICATION_STATUS_OPTIONS = [
  { value: 'new', label: 'Mới nộp' },
  { value: 'reviewing', label: 'Đang xét duyệt' },
  { value: 'interview', label: 'Phỏng vấn' },
  { value: 'hired', label: 'Đã tuyển' },
  { value: 'rejected', label: 'Từ chối' },
];

export const SOFA1_CAREER_STATUS_OPTIONS = [
  { value: 'open', label: 'Đang tuyển' },
  { value: 'closed', label: 'Đã đóng' },
];

export const SOFA1_PROMOTION_STATUS_OPTIONS = [
  { value: 'active', label: 'Đang áp dụng' },
  { value: 'upcoming', label: 'Sắp diễn ra' },
  { value: 'expired', label: 'Đã hết hạn' },
];

// ----------------------------------------------------------------------
// Images (kept identical to the URLs already used across the public site
// so unifying the data source does not change any visuals).
// ----------------------------------------------------------------------

const IMG = {
  cat1: 'https://images.pexels.com/photos/276624/pexels-photo-276624.jpeg?auto=compress&cs=tinysrgb&w=700',
  cat2: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=700',
  cat3: 'https://images.pexels.com/photos/675849/pexels-photo-675849.jpeg?auto=compress&cs=tinysrgb&w=700',
  cat4: 'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=700',
  cat5: 'https://images.pexels.com/photos/691410/pexels-photo-691410.jpeg?auto=compress&cs=tinysrgb&w=700',
  cat6: 'https://images.pexels.com/photos/164877/pexels-photo-164877.jpeg?auto=compress&cs=tinysrgb&w=700',
  product1: 'https://images.pexels.com/photos/276624/pexels-photo-276624.jpeg?auto=compress&cs=tinysrgb&w=600',
  product2: 'https://images.pexels.com/photos/675849/pexels-photo-675849.jpeg?auto=compress&cs=tinysrgb&w=600',
  product3: 'https://images.pexels.com/photos/691410/pexels-photo-691410.jpeg?auto=compress&cs=tinysrgb&w=600',
  product4: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=600',
  product5: 'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=600',
  product6: 'https://images.pexels.com/photos/6444/pencil-typography-keys-plans.jpg?auto=compress&cs=tinysrgb&w=600',
  product7: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=600',
  product8: 'https://images.pexels.com/photos/1660797/pexels-photo-1660797.jpeg?auto=compress&cs=tinysrgb&w=600',
  product9: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
  product10: 'https://images.pexels.com/photos/164877/pexels-photo-164877.jpeg?auto=compress&cs=tinysrgb&w=600',
  project1: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=800',
  project2: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
  project3: 'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=800',
  project4: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800',
  project5: 'https://images.pexels.com/photos/675849/pexels-photo-675849.jpeg?auto=compress&cs=tinysrgb&w=800',
  project6: 'https://images.pexels.com/photos/164877/pexels-photo-164877.jpeg?auto=compress&cs=tinysrgb&w=800',
  blog1: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800',
  blog2: 'https://images.pexels.com/photos/164877/pexels-photo-164877.jpeg?auto=compress&cs=tinysrgb&w=800',
  blog3: 'https://images.pexels.com/photos/1660797/pexels-photo-1660797.jpeg?auto=compress&cs=tinysrgb&w=800',
  blog4: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=800',
  blog5: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
  blog6: 'https://images.pexels.com/photos/6444/pencil-typography-keys-plans.jpg?auto=compress&cs=tinysrgb&w=800',
  showroom1: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600',
  showroom2: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
  showroom3: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=600',
  showroom4: 'https://images.pexels.com/photos/164877/pexels-photo-164877.jpeg?auto=compress&cs=tinysrgb&w=600',
};

export const SOFA1_MOCK_IMAGES = IMG;

// ----------------------------------------------------------------------
// Categories
// ----------------------------------------------------------------------

export const _sofa1Categories: ISofa1Category[] = [
  { id: 'sofa-goc-chu-l', name: 'Sofa góc chữ L', slug: 'sofa-goc-chu-l', subtitle: 'Tối ưu không gian phòng khách', image: IMG.cat3, itemCount: 18, publish: 'published', createdAt: _mock.time(1) },
  { id: 'sofa-chu-u', name: 'Sofa chữ U', slug: 'sofa-chu-u', subtitle: 'Không gian rộng, tiếp khách đông', image: IMG.cat5, itemCount: 9, publish: 'published', createdAt: _mock.time(2) },
  { id: 'sofa-vang', name: 'Sofa văng', slug: 'sofa-vang', subtitle: 'Gọn gàng, linh hoạt bố trí', image: IMG.cat4, itemCount: 14, publish: 'published', createdAt: _mock.time(3) },
  { id: 'sofa-don', name: 'Sofa đơn', slug: 'sofa-don', subtitle: 'Ghế thư giãn phòng đọc', image: IMG.cat4, itemCount: 16, publish: 'published', createdAt: _mock.time(4) },
  { id: 'sofa-bang-dai', name: 'Sofa băng dài', slug: 'sofa-bang-dai', subtitle: 'Phong cách minimalist', image: IMG.cat6, itemCount: 11, publish: 'published', createdAt: _mock.time(5) },
  { id: 'sofa-giuong', name: 'Sofa giường', slug: 'sofa-giuong', subtitle: '2 trong 1, tiện lợi', image: IMG.cat2, itemCount: 8, publish: 'published', createdAt: _mock.time(6) },
  { id: 'sofa-thong-minh', name: 'Sofa thông minh', slug: 'sofa-thong-minh', subtitle: 'Tích hợp công nghệ', image: IMG.cat5, itemCount: 6, publish: 'published', createdAt: _mock.time(7) },
  { id: 'sofa-thu-gian', name: 'Sofa thư giãn', slug: 'sofa-thu-gian', subtitle: 'Đệm memory foam êm ái', image: IMG.cat6, itemCount: 10, publish: 'published', createdAt: _mock.time(8) },
  { id: 'sofa-recliner', name: 'Sofa recliner', slug: 'sofa-recliner', subtitle: 'Ngả lưng, massage, sưởi ấm', image: IMG.cat2, itemCount: 5, publish: 'published', createdAt: _mock.time(9) },
  { id: 'sofa-da', name: 'Sofa da bò', slug: 'sofa-da', subtitle: 'Da bò thật nhập khẩu', image: IMG.cat1, itemCount: 24, publish: 'published', createdAt: _mock.time(10) },
  { id: 'sofa-ni', name: 'Sofa nỉ', slug: 'sofa-ni', subtitle: 'Mềm mại, ấm áp', image: IMG.cat3, itemCount: 13, publish: 'published', createdAt: _mock.time(11) },
  { id: 'sofa-vai', name: 'Sofa vải linen', slug: 'sofa-vai', subtitle: 'Vải linen cao cấp mềm mại', image: IMG.cat2, itemCount: 32, publish: 'published', createdAt: _mock.time(12) },
  { id: 'sofa-go', name: 'Sofa gỗ', slug: 'sofa-go', subtitle: 'Khung gỗ sồi nguyên khối', image: IMG.cat1, itemCount: 7, publish: 'published', createdAt: _mock.time(13) },
];

// ----------------------------------------------------------------------
// Collections
// ----------------------------------------------------------------------

export const _sofa1Collections: ISofa1Collection[] = [
  { id: 'new', name: 'Bộ sưu tập mới', slug: 'new', description: 'Những mẫu sofa mới nhất 2025 từ Casa Sofa', image: IMG.product1, displayCount: '24 mẫu', productIds: ['6', '8', '9', '10'], publish: 'published', createdAt: _mock.time(1) },
  { id: 'featured', name: 'Bộ sưu tập nổi bật', slug: 'featured', description: 'Các thiết kế được yêu thích nhất', image: IMG.product3, displayCount: '18 mẫu', productIds: ['2', '3'], publish: 'published', createdAt: _mock.time(2) },
  { id: 'seasonal', name: 'Bộ sưu tập theo mùa', slug: 'seasonal', description: 'Sofa phù hợp từng mùa trong năm', image: IMG.product2, displayCount: '12 mẫu', productIds: ['7'], publish: 'published', createdAt: _mock.time(3) },
  { id: 'luxury', name: 'Bộ sưu tập Luxury', slug: 'luxury', description: 'Sofa cao cấp nhất từ Casa Sofa', image: IMG.product5, displayCount: '8 mẫu', productIds: ['5'], publish: 'published', createdAt: _mock.time(4) },
  { id: 'bestseller', name: 'Bộ sưu tập Bestseller', slug: 'bestseller', description: 'Những mẫu sofa bán chạy nhất', image: IMG.product4, displayCount: '15 mẫu', productIds: ['1', '4'], publish: 'published', createdAt: _mock.time(5) },
];

// ----------------------------------------------------------------------
// Products
// ----------------------------------------------------------------------

export const _sofa1Products: ISofa1Product[] = [
  { id: '1', sku: 'CS-ROMA-01', name: 'Sofa Roma Da Bò Nâu', slug: 'sofa-roma-da-bo-nau', categoryId: 'sofa-da', collectionId: 'bestseller', style: 'tan-co-dien', price: 36000000, priceSale: 28500000, coverUrl: IMG.product1, images: [IMG.product1, IMG.product7], colors: ['#6D4C41', '#3E2723', '#8D6E63'], colorNames: ['Nâu', 'Đen', 'Be'], material: 'Da bò Ý, khung gỗ sồi', size: '220x95cm', rating: 4.9, totalReviews: 124, badge: 'Bestseller', description: 'Sofa Roma da bò thật nhập khẩu Ý, đường may thủ công, khung gỗ sồi nguyên khối.', subDescription: 'Da bò Ý, khung gỗ sồi · 220x95cm', quantity: 40, available: 18, inventoryType: 'in stock', publish: 'published', createdAt: _mock.time(1) },
  { id: '2', sku: 'CS-MILANO-02', name: 'Sofa Milano Linen Be', slug: 'sofa-milano-linen-be', categoryId: 'sofa-vai', collectionId: 'featured', style: 'hien-dai', price: 16800000, priceSale: 12500000, coverUrl: IMG.product2, images: [IMG.product2, IMG.product5], colors: ['#D7CCC8', '#BCAAA4', '#A1887F'], colorNames: ['Be', 'Xám', 'Nâu'], material: 'Vải linen, khung gỗ sồi', size: '180x90cm', rating: 4.8, totalReviews: 89, badge: '-25%', description: 'Sofa Milano vải linen cao cấp, thiết kế hiện đại thanh lịch.', subDescription: 'Vải linen, khung gỗ sồi · 180x90cm', quantity: 50, available: 27, inventoryType: 'in stock', publish: 'published', createdAt: _mock.time(2) },
  { id: '3', sku: 'CS-VERONA-03', name: 'Sofa Verona Góc Xám', slug: 'sofa-verona-goc-xam', categoryId: 'sofa-goc-chu-l', collectionId: 'featured', style: 'hien-dai', price: 24900000, priceSale: 19900000, coverUrl: IMG.product3, images: [IMG.product3], colors: ['#455A64', '#607D8B', '#90A4AE'], colorNames: ['Xám', 'Xanh navy'], material: 'Vải technical, khung gỗ sồi', size: '280x180cm', rating: 5.0, totalReviews: 156, badge: 'Mới', description: 'Sofa góc Verona tối ưu không gian, phong cách hiện đại.', subDescription: 'Vải technical, khung gỗ sồi · 280x180cm', quantity: 30, available: 6, inventoryType: 'low stock', publish: 'published', createdAt: _mock.time(3) },
  { id: '4', sku: 'CS-NAPOLI-04', name: 'Ghế Napoli Đơn', slug: 'ghe-napoli-don', categoryId: 'sofa-don', collectionId: 'bestseller', style: 'tan-co-dien', price: 8900000, priceSale: 6500000, coverUrl: IMG.product4, images: [IMG.product4], colors: ['#5D4037', '#8D6E63', '#A1887F'], colorNames: ['Nâu', 'Be', 'Đen'], material: 'Da bò, khung gỗ sồi', size: '95x90cm', rating: 4.7, totalReviews: 67, badge: 'Bestseller', description: 'Ghế sofa đơn Napoli tân cổ điển, da bò thật, chân gỗ chéo.', subDescription: 'Da bò, khung gỗ sồi · 95x90cm', quantity: 60, available: 33, inventoryType: 'in stock', publish: 'published', createdAt: _mock.time(4) },
  { id: '5', sku: 'CS-FIRENZE-05', name: 'Sofa Firenze Luxury', slug: 'sofa-firenze-luxury', categoryId: 'sofa-da', collectionId: 'luxury', style: 'luxury', price: 52000000, priceSale: null, coverUrl: IMG.product5, images: [IMG.product5, IMG.product2], colors: ['#4E342E', '#212121'], colorNames: ['Nâu đậm', 'Đen'], material: 'Da bò Ý premium, khung gỗ sồi', size: '240x100cm', rating: 5.0, totalReviews: 45, badge: 'Luxury', description: 'Sofa Firenze Luxury cao cấp nhất, da bò Ý premium, chế tác thủ công 100%.', subDescription: 'Da bò Ý premium, khung gỗ sồi · 240x100cm', quantity: 15, available: 4, inventoryType: 'low stock', publish: 'published', createdAt: _mock.time(5) },
  { id: '6', sku: 'CS-TORINO-06', name: 'Sofa Torino Recliner', slug: 'sofa-torino-recliner', categoryId: 'sofa-recliner', collectionId: 'new', style: 'hien-dai', price: 42000000, priceSale: 35000000, coverUrl: IMG.product6, images: [IMG.product6], colors: ['#212121', '#5D4037'], colorNames: ['Đen', 'Nâu'], material: 'Da bò, cơ chế recliner điện', size: '200x95cm', rating: 4.6, totalReviews: 65, badge: '-17%', description: 'Sofa recliner điện Torino với 3 tư thế ngả, massage và sưởi ấm.', subDescription: 'Da bò, cơ chế recliner điện · 200x95cm', quantity: 20, available: 9, inventoryType: 'in stock', publish: 'published', createdAt: _mock.time(6) },
  { id: '7', sku: 'CS-BOLOGNA-07', name: 'Sofa Bologna Băng Dài', slug: 'sofa-bologna-bang-dai', categoryId: 'sofa-bang-dai', collectionId: 'seasonal', style: 'minimalist', price: 15500000, priceSale: null, coverUrl: IMG.product7, images: [IMG.product7], colors: ['#D7CCC8', '#90A4AE'], colorNames: ['Be', 'Xám'], material: 'Vải linen, khung gỗ tần bì', size: '160x70cm', rating: 4.7, totalReviews: 54, badge: '', description: 'Sofa băng dài Bologna phong cách Minimalist, thanh lịch và tối giản.', subDescription: 'Vải linen, khung gỗ tần bì · 160x70cm', quantity: 35, available: 21, inventoryType: 'in stock', publish: 'published', createdAt: _mock.time(7) },
  { id: '8', sku: 'CS-SICILY-08', name: 'Sofa Sicily Thông Minh', slug: 'sofa-sicily-thong-minh', categoryId: 'sofa-thong-minh', collectionId: 'new', style: 'hien-dai', price: 38000000, priceSale: 32000000, coverUrl: IMG.product8, images: [IMG.product8], colors: ['#607D8B', '#1A237E'], colorNames: ['Xám', 'Xanh navy'], material: 'Vải technical, khung thép', size: '210x90cm', rating: 4.5, totalReviews: 43, badge: 'Mới', description: 'Sofa thông minh Sicily tích hợp USB, loa Bluetooth, ngăn chứa đồ.', subDescription: 'Vải technical, khung thép · 210x90cm', quantity: 18, available: 0, inventoryType: 'out of stock', publish: 'published', createdAt: _mock.time(8) },
  { id: '9', sku: 'CS-PISA-09', name: 'Sofa Pisa Giường', slug: 'sofa-pisa-giuong', categoryId: 'sofa-giuong', collectionId: 'new', style: 'hien-dai', price: 22000000, priceSale: null, coverUrl: IMG.product9, images: [IMG.product9], colors: ['#D7CCC8', '#90A4AE', '#8D6E63'], colorNames: ['Be', 'Xám', 'Nâu'], material: 'Vải linen, khung gỗ sồi', size: '200x90cm (giường 200x140cm)', rating: 4.8, totalReviews: 78, badge: '', description: 'Sofa giường Pisa 2 chức năng, kéo ra thành giường đôi trong 5 giây.', subDescription: 'Vải linen, khung gỗ sồi · 200x90cm (giường 200x140cm)', quantity: 22, available: 12, inventoryType: 'in stock', publish: 'published', createdAt: _mock.time(9) },
  { id: '10', sku: 'CS-CAPRI-10', name: 'Sofa Capri Thư Giãn', slug: 'sofa-capri-thu-gian', categoryId: 'sofa-thu-gian', collectionId: 'new', style: 'bac-au', price: 23000000, priceSale: 18000000, coverUrl: IMG.product10, images: [IMG.product10], colors: ['#8D6E63', '#D7CCC8'], colorNames: ['Nâu', 'Be'], material: 'Vải velvet, khung gỗ sồi', size: '120x85cm', rating: 4.9, totalReviews: 92, badge: '-22%', description: 'Sofa thư giãn Capri phong cách Bắc Âu, đệm memory foam êm ái.', subDescription: 'Vải velvet, khung gỗ sồi · 120x85cm', quantity: 28, available: 16, inventoryType: 'in stock', publish: 'draft', createdAt: _mock.time(10) },
];

// ----------------------------------------------------------------------
// Projects
// ----------------------------------------------------------------------

export const _sofa1ProjectTypes = [
  { slug: 'can-ho', label: 'Dự án căn hộ' },
  { slug: 'biet-thu', label: 'Dự án biệt thự' },
  { slug: 'khach-san', label: 'Dự án khách sạn' },
  { slug: 'resort', label: 'Dự án resort' },
  { slug: 'van-phong', label: 'Dự án văn phòng' },
  { slug: 'showroom', label: 'Dự án showroom' },
];

export const _sofa1Projects: ISofa1Project[] = [
  { id: '1', name: 'Căn hộ The Manor Hanoi', slug: 'can-ho-the-manor-hanoi', type: 'can-ho', year: '2024', location: 'Hà Nội', coverUrl: IMG.project1, images: [IMG.project1], description: 'Trang bị sofa Roma và Napoli cho 80 căn hộ cao cấp tại The Manor.', productIds: ['1', '4'], publish: 'published', createdAt: _mock.time(1) },
  { id: '2', name: 'Biệt thự Flamingo Đại Lải', slug: 'biet-thu-flamingo-dai-lai', type: 'biet-thu', year: '2024', location: 'Đà Lạt', coverUrl: IMG.project2, images: [IMG.project2], description: 'Thiết kế và sản xuất sofa Luxury cho 12 biệt thự nghỉ dưỡng.', productIds: ['5'], publish: 'published', createdAt: _mock.time(2) },
  { id: '3', name: 'Khách sạn Sofitel Metropole', slug: 'khach-san-sofitel-metropole', type: 'khach-san', year: '2023', location: 'Hà Nội', coverUrl: IMG.project3, images: [IMG.project3], description: 'Cung cấp sofa tân cổ điển cho sảnh và phòng VIP khách sạn 5 sao.', productIds: ['1', '3'], publish: 'published', createdAt: _mock.time(3) },
  { id: '4', name: 'Resort Vinpearl Nha Trang', slug: 'resort-vinpearl-nha-trang', type: 'resort', year: '2023', location: 'Nha Trang', coverUrl: IMG.project4, images: [IMG.project4], description: 'Sofa ngoài trời và phòng nghỉ cho khu resort 5 sao.', productIds: ['9', '10'], publish: 'published', createdAt: _mock.time(4) },
  { id: '5', name: 'Văn phòng Samsung Vietnam', slug: 'van-phong-samsung-vietnam', type: 'van-phong', year: '2024', location: 'Bắc Ninh', coverUrl: IMG.project5, images: [IMG.project5], description: 'Sofa văn phòng hiện đại cho khu vực tiếp khách và lounge.', productIds: ['2', '7'], publish: 'published', createdAt: _mock.time(5) },
  { id: '6', name: 'Showroom Mercedes-Benz', slug: 'showroom-mercedes-benz', type: 'showroom', year: '2025', location: 'TP.HCM', coverUrl: IMG.project6, images: [IMG.project6], description: 'Thiết kế sofa lounge Luxury cho showroom xe hơi cao cấp.', productIds: ['5', '6'], publish: 'published', createdAt: _mock.time(6) },
];

// ----------------------------------------------------------------------
// Showrooms
// ----------------------------------------------------------------------

export const _sofa1Showrooms: ISofa1Showroom[] = [
  { id: '1', name: 'Casa Sofa Hà Nội', address: '123 Nguyễn Trãi, Thanh Xuân, Hà Nội', city: 'Hà Nội', phone: '024 3855 1234', openHours: '8:00 - 20:00', coverUrl: IMG.showroom1, mapUrl: 'https://maps.google.com/?q=21.0137,105.8258', publish: 'published', createdAt: _mock.time(1) },
  { id: '2', name: 'Casa Sofa TP.HCM', address: '456 Lê Lợi, Quận 1, TP.HCM', city: 'TP.HCM', phone: '028 3930 5678', openHours: '8:00 - 20:00', coverUrl: IMG.showroom2, mapUrl: 'https://maps.google.com/?q=10.7726,106.7069', publish: 'published', createdAt: _mock.time(2) },
  { id: '3', name: 'Casa Sofa Đà Nẵng', address: '78 Bạch Đằng, Hải Châu, Đà Nẵng', city: 'Đà Nẵng', phone: '0236 3888 901', openHours: '8:00 - 19:00', coverUrl: IMG.showroom3, mapUrl: 'https://maps.google.com/?q=16.0544,108.2022', publish: 'published', createdAt: _mock.time(3) },
  { id: '4', name: 'Casa Sofa Cần Thơ', address: '12 Hòa Bình, Ninh Kiều, Cần Thơ', city: 'Cần Thơ', phone: '0292 3765 432', openHours: '8:00 - 19:00', coverUrl: IMG.showroom4, mapUrl: 'https://maps.google.com/?q=10.0451,105.7469', publish: 'published', createdAt: _mock.time(4) },
];

// ----------------------------------------------------------------------
// Blog
// ----------------------------------------------------------------------

export const _sofa1BlogCategories = [
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

export const _sofa1BlogPosts: ISofa1BlogPost[] = [
  { id: '1', title: 'Cách chọn sofa da bò thật cho phòng khách', slug: 'cach-chon-sofa-da-bo-that', category: 'kinh-nghiem-chon-sofa', coverUrl: IMG.blog1, excerpt: 'Phân biệt da bò thật và da công nghiệp, cách chọn sofa da chất lượng.', content: 'Da bò thật có vân tự nhiên, mềm mại, thoáng khí và bền đẹp theo năm tháng...', author: 'Vũ Thu Trang', readTime: '6 phút', publish: 'published', createdAt: _mock.time(1) },
  { id: '2', title: 'Bảo quản sofa da bò đúng cách', slug: 'bao-quan-sofa-da-bo', category: 'huong-dan-bao-quan', coverUrl: IMG.blog2, excerpt: 'Hướng dẫn chi tiết cách vệ sinh và bảo dưỡng sofa da bò.', content: 'Sofa da bò cần được bảo dưỡng định kỳ 6 tháng/lần với dung dịch chuyên dụng...', author: 'Đặng Minh Quân', readTime: '7 phút', publish: 'published', createdAt: _mock.time(2) },
  { id: '3', title: 'Xu hướng sofa 2025: Tân cổ điển lên ngôi', slug: 'xu-huong-sofa-2025-tan-co-dien', category: 'xu-huong-noi-that', coverUrl: IMG.blog3, excerpt: 'Sự trở lại của phong cách tân cổ điển trong thiết kế sofa 2025.', content: 'Năm 2025 chứng kiến sự trở lại mạnh mẽ của phong cách tân cổ điển...', author: 'Bùi Khánh Linh', readTime: '5 phút', publish: 'published', createdAt: _mock.time(3) },
  { id: '4', title: 'Phối màu sofa với rèm cửa phong cách Ý', slug: 'phoi-mau-sofa-rem-cua', category: 'thiet-ke-phong-khach', coverUrl: IMG.blog4, excerpt: 'Bí quyết phối màu sofa và rèm cửa theo phong cách Ý.', content: 'Phối màu là nghệ thuật khi thiết kế phòng khách phong cách Ý...', author: 'Vũ Thu Trang', readTime: '4 phút', publish: 'published', createdAt: _mock.time(4) },
  { id: '5', title: 'Gỗ sồi vs gỗ tần bì: Chọn gì cho khung sofa?', slug: 'go-soi-vs-go-tan-bi', category: 'kien-thuc-vat-lieu', coverUrl: IMG.blog5, excerpt: 'So sánh chi tiết giữa gỗ sồi và gỗ tần bì cho khung sofa.', content: 'Gỗ sồi cứng hơn, chịu lực tốt hơn, chống cong vênh tốt hơn gỗ tần bì...', author: 'Đặng Minh Quân', readTime: '8 phút', publish: 'published', createdAt: _mock.time(5) },
  { id: '6', title: 'Phong thủy bố trí sofa: Tựa sơn huy tài lộc', slug: 'phong-thuy-bo-tri-sofa', category: 'phong-thuy-noi-that', coverUrl: IMG.blog6, excerpt: 'Cách bố trí sofa theo phong thủy để thu hút tài lộc.', content: 'Theo phong thủy, sofa nên được đặt ở vị trí "tựa sơn"...', author: 'Bùi Khánh Linh', readTime: '5 phút', publish: 'draft', createdAt: _mock.time(6) },
];

// ----------------------------------------------------------------------
// Careers
// ----------------------------------------------------------------------

export const _sofa1Careers: ISofa1Career[] = [
  { id: '1', title: 'Nghệ nhân đóng sofa da', department: 'Sản xuất', location: 'Hà Nội', type: 'Toàn thời gian', salary: '15-30 triệu', description: 'Tìm nghệ nhân có kinh nghiệm đóng sofa da bò, biết may bọc và xử lý da.', requirements: ['5+ năm kinh nghiệm đóng sofa da', 'Biết may bọc, xử lý da bò', 'Tỉ mỉ, cẩn thận, có tâm'], status: 'open', createdAt: _mock.time(1) },
  { id: '2', title: 'Nhân viên tư vấn nội thất', department: 'Kinh doanh', location: 'TP.HCM', type: 'Toàn thời gian', salary: '10-18 triệu', description: 'Tư vấn khách hàng tại showroom về các dòng sofa cao cấp.', requirements: ['2+ năm kinh nghiệm sales nội thất cao cấp', 'Giao tiếp tốt, ngoại hình chỉn chu', 'Am hiểu sản phẩm sofa'], status: 'open', createdAt: _mock.time(2) },
  { id: '3', title: 'Thợ giặt và bảo dưỡng sofa', department: 'Dịch vụ khách hàng', location: 'Đà Nẵng', type: 'Bán thời gian', salary: '8-14 triệu', description: 'Phụ trách dịch vụ giặt và bảo dưỡng sofa tại nhà khách hàng.', requirements: ['Có xe máy', 'Sức khỏe tốt', 'Chăm chỉ, trung thực'], status: 'open', createdAt: _mock.time(3) },
  { id: '4', title: 'Thiết kế nội thất 3D', department: 'Thiết kế', location: 'Hà Nội', type: 'Toàn thời gian', salary: '15-25 triệu', description: 'Thiết kế bản vẽ 3D cho khách hàng đặt sofa theo yêu cầu.', requirements: ['Thành thạo 3ds Max, Sketchup, V-Ray', '3+ năm kinh nghiệm thiết kế nội thất', 'Có portfolio chất lượng'], status: 'closed', createdAt: _mock.time(4) },
];

// ----------------------------------------------------------------------
// Promotions / after-sales services
// ----------------------------------------------------------------------

export const _sofa1Promotions: ISofa1Promotion[] = [
  { id: 'warranty', title: 'Bảo hành chính hãng', service: 'warranty', icon: 'solar:shield-check-bold-duotone', description: 'Bảo hành chính hãng 7 năm cho khung gỗ và cơ cấu, 5 năm cho đệm và bọc.', discountPercent: 0, validFrom: _mock.time(20), validUntil: _mock.time(-40), status: 'active', createdAt: _mock.time(20) },
  { id: 'maintenance', title: 'Bảo trì trọn đời ưu đãi', service: 'maintenance', icon: 'solar:settings-bold-duotone', description: 'Bảo trì làm mới bọc trọn đời với chi phí ưu đãi cho khách hàng VIP.', discountPercent: 15, validFrom: _mock.time(15), validUntil: _mock.time(-30), status: 'active', createdAt: _mock.time(15) },
  { id: 'repair', title: 'Ưu đãi sửa chữa sofa', service: 'repair', icon: 'solar:hammer-bold-duotone', description: 'Sửa chữa sofa chuyên nghiệp: thay đệm, bọc lại, sửa khung gỗ.', discountPercent: 10, validFrom: _mock.time(10), validUntil: _mock.time(-20), status: 'active', createdAt: _mock.time(10) },
  { id: 'cleaning', title: 'Vệ sinh sofa định kỳ', service: 'cleaning', icon: 'solar:water-bold-duotone', description: 'Giặt khô, giặt nước, làm sạch sâu, khử mùi và diệt khuẩn sofa da.', discountPercent: 20, validFrom: _mock.time(5), validUntil: _mock.time(-10), status: 'active', createdAt: _mock.time(5) },
  { id: 'returns', title: 'Đổi trả trong 30 ngày', service: 'returns', icon: 'solar:refresh-circle-bold-duotone', description: '30 ngày đổi trả cho sản phẩm tiêu chuẩn, hoàn tiền 100%.', discountPercent: 0, validFrom: _mock.time(1), validUntil: _mock.time(-60), status: 'upcoming', createdAt: _mock.time(1) },
];

// ----------------------------------------------------------------------
// Orders
// ----------------------------------------------------------------------

const productById = (id: string) => _sofa1Products.find((p) => p.id === id);

function buildOrderItems(ids: string[], quantities: number[]) {
  return ids.map((id, index) => {
    const product = productById(id);
    return {
      productId: id,
      name: product?.name || '',
      coverUrl: product?.coverUrl || '',
      quantity: quantities[index] ?? 1,
      price: product?.priceSale || product?.price || 0,
    };
  });
}

function sumItems(items: { price: number; quantity: number }[]) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

const ORDER_SEEDS: {
  customerName: string;
  email: string;
  phone: string;
  productIds: string[];
  quantities: number[];
  status: string;
}[] = [
  { customerName: 'Vũ Thu Trang', email: 'thutrang.vu@gmail.com', phone: '0912 345 678', productIds: ['1'], quantities: [1], status: 'delivered' },
  { customerName: 'Đặng Minh Quân', email: 'minhquan.dang@gmail.com', phone: '0987 654 321', productIds: ['5'], quantities: [1], status: 'confirmed' },
  { customerName: 'Bùi Khánh Linh', email: 'khanhlinh.bui@gmail.com', phone: '0909 111 222', productIds: ['3'], quantities: [1], status: 'shipping' },
  { customerName: 'Nguyễn Văn An', email: 'van.an.nguyen@gmail.com', phone: '0977 888 999', productIds: ['2', '4'], quantities: [1, 2], status: 'pending' },
  { customerName: 'Lê Thị Hồng', email: 'hong.le@gmail.com', phone: '0933 222 111', productIds: ['9'], quantities: [1], status: 'delivered' },
  { customerName: 'Phạm Gia Huy', email: 'giahuy.pham@gmail.com', phone: '0944 555 666', productIds: ['10'], quantities: [1], status: 'cancelled' },
  { customerName: 'Trần Bảo Ngọc', email: 'baongoc.tran@gmail.com', phone: '0966 777 888', productIds: ['6'], quantities: [1], status: 'shipping' },
  { customerName: 'Hoàng Anh Tuấn', email: 'anhtuan.hoang@gmail.com', phone: '0988 333 444', productIds: ['7', '4'], quantities: [1, 1], status: 'confirmed' },
];

export const _sofa1Orders: ISofa1Order[] = ORDER_SEEDS.map((seed, index) => {
  const items = buildOrderItems(seed.productIds, seed.quantities);
  const subtotal = sumItems(items);
  return {
    id: `${index + 1}`,
    orderNumber: `CS-${String(2025010 + index)}`,
    customerName: seed.customerName,
    email: seed.email,
    phone: seed.phone,
    items,
    subtotal,
    total: subtotal,
    status: seed.status,
    createdAt: _mock.time(index),
  };
});

// ----------------------------------------------------------------------
// Customers
// ----------------------------------------------------------------------

const CUSTOMER_SEEDS: { name: string; email: string; phone: string; address: string; status: string }[] = [
  { name: 'Vũ Thu Trang', email: 'thutrang.vu@gmail.com', phone: '0912 345 678', address: 'Cầu Giấy, Hà Nội', status: 'vip' },
  { name: 'Đặng Minh Quân', email: 'minhquan.dang@gmail.com', phone: '0987 654 321', address: 'Quận 7, TP.HCM', status: 'vip' },
  { name: 'Bùi Khánh Linh', email: 'khanhlinh.bui@gmail.com', phone: '0909 111 222', address: 'Hải Châu, Đà Nẵng', status: 'active' },
  { name: 'Nguyễn Văn An', email: 'van.an.nguyen@gmail.com', phone: '0977 888 999', address: 'Thanh Xuân, Hà Nội', status: 'active' },
  { name: 'Lê Thị Hồng', email: 'hong.le@gmail.com', phone: '0933 222 111', address: 'Quận 1, TP.HCM', status: 'active' },
  { name: 'Phạm Gia Huy', email: 'giahuy.pham@gmail.com', phone: '0944 555 666', address: 'Ninh Kiều, Cần Thơ', status: 'blocked' },
  { name: 'Trần Bảo Ngọc', email: 'baongoc.tran@gmail.com', phone: '0966 777 888', address: 'Đống Đa, Hà Nội', status: 'active' },
  { name: 'Hoàng Anh Tuấn', email: 'anhtuan.hoang@gmail.com', phone: '0988 333 444', address: 'Bình Thạnh, TP.HCM', status: 'active' },
];

export const _sofa1Customers: ISofa1Customer[] = CUSTOMER_SEEDS.map((seed, index) => {
  const customerOrders = _sofa1Orders.filter((order) => order.email === seed.email);
  return {
    id: `${index + 1}`,
    name: seed.name,
    email: seed.email,
    phone: seed.phone,
    address: seed.address,
    avatarUrl: _mock.image.avatar(index),
    totalOrders: customerOrders.length,
    totalSpent: customerOrders.reduce((sum, order) => sum + order.total, 0),
    status: seed.status,
    createdAt: _mock.time(index + 2),
  };
});

// ----------------------------------------------------------------------
// B2B leads
// ----------------------------------------------------------------------

export const _sofa1B2BLeads: ISofa1B2BLead[] = [
  { id: '1', companyName: 'CTCP Bất động sản Ecoland', contactName: 'Nguyễn Thành Nam', email: 'nam.nguyen@ecoland.vn', phone: '0912 000 111', projectType: 'can-ho', message: 'Cần báo giá sofa cho 200 căn hộ dự án Ecoland Riverside.', status: 'quoted', createdAt: _mock.time(1) },
  { id: '2', companyName: 'Khu nghỉ dưỡng Sunrise Bay', contactName: 'Trần Thu Hà', email: 'ha.tran@sunrisebay.vn', phone: '0987 222 333', projectType: 'resort', message: 'Tìm nhà cung cấp sofa outdoor cho khu resort mới.', status: 'contacted', createdAt: _mock.time(2) },
  { id: '3', companyName: 'Khách sạn Silk Path', contactName: 'Lê Quang Huy', email: 'huy.le@silkpath.vn', phone: '0933 444 555', projectType: 'khach-san', message: 'Cần thay mới sofa sảnh và phòng VIP cho 3 chi nhánh.', status: 'won', createdAt: _mock.time(3) },
  { id: '4', companyName: 'Văn phòng FPT Software', contactName: 'Phạm Đức Anh', email: 'ducanh.pham@fpt.vn', phone: '0977 666 777', projectType: 'van-phong', message: 'Cần sofa khu vực lounge cho văn phòng mới 2000m².', status: 'new', createdAt: _mock.time(4) },
  { id: '5', companyName: 'Nhà hàng Gogi House', contactName: 'Đỗ Minh Trang', email: 'trang.do@gogihouse.vn', phone: '0966 888 999', projectType: 'showroom', message: 'Cần tư vấn sofa băng dài cho chuỗi 5 nhà hàng.', status: 'lost', createdAt: _mock.time(5) },
  { id: '6', companyName: 'Biệt thự Vinhomes Ocean Park', contactName: 'Ngô Bảo Châu', email: 'baochau.ngo@vinhomes.vn', phone: '0944 111 222', projectType: 'biet-thu', message: 'Cần báo giá trọn bộ nội thất phòng khách cho 15 biệt thự mẫu.', status: 'contacted', createdAt: _mock.time(6) },
];

// ----------------------------------------------------------------------
// Contact messages
// ----------------------------------------------------------------------

export const _sofa1ContactMessages: ISofa1ContactMessage[] = [
  { id: '1', name: 'Ngô Thanh Tùng', email: 'thanhtung.ngo@gmail.com', phone: '0912 121 212', subject: 'Hỏi về thời gian giao hàng', message: 'Cho tôi hỏi sofa Roma đặt hôm nay thì bao lâu nhận được hàng?', status: 'replied', createdAt: _mock.time(1) },
  { id: '2', name: 'Đinh Thị Mai', email: 'mai.dinh@gmail.com', phone: '0987 232 323', subject: 'Yêu cầu đổi màu sofa đã đặt', message: 'Tôi muốn đổi màu sofa Milano từ be sang xám, có được không?', status: 'new', createdAt: _mock.time(2) },
  { id: '3', name: 'Vương Đức Thịnh', email: 'thinh.vuong@gmail.com', phone: '0933 343 434', subject: 'Hỏi về chính sách bảo hành', message: 'Sofa da bò của tôi bị bong keo ở góc, có được bảo hành không?', status: 'replied', createdAt: _mock.time(3) },
  { id: '4', name: 'Chu Thảo Vy', email: 'thaovy.chu@gmail.com', phone: '0977 454 545', subject: 'Đặt lịch tư vấn tại nhà', message: 'Tôi muốn đặt lịch chuyên gia tư vấn đo đạc tại nhà vào tuần sau.', status: 'new', createdAt: _mock.time(4) },
  { id: '5', name: 'Lý Hoàng Nam', email: 'hoangnam.ly@gmail.com', phone: '0966 565 656', subject: 'Khiếu nại về đơn hàng', message: 'Đơn hàng của tôi giao trễ 3 ngày so với hẹn, mong shop phản hồi.', status: 'archived', createdAt: _mock.time(5) },
  { id: '6', name: 'Trịnh Yến Nhi', email: 'yennhi.trinh@gmail.com', phone: '0988 676 767', subject: 'Hỏi về sofa đóng theo yêu cầu', message: 'Tôi cần đóng sofa kích thước riêng 250x100cm, chi phí thế nào?', status: 'new', createdAt: _mock.time(6) },
];

// ----------------------------------------------------------------------
// Career applications
// ----------------------------------------------------------------------

export const _sofa1CareerApplications: ISofa1CareerApplication[] = [
  { id: '1', careerId: '1', careerTitle: 'Nghệ nhân đóng sofa da', candidateName: 'Nguyễn Hữu Phát', email: 'huuphat.nguyen@gmail.com', phone: '0912 787 878', coverLetter: '8 năm kinh nghiệm đóng sofa da tại Hà Nội.', status: 'interview', createdAt: _mock.time(1) },
  { id: '2', careerId: '2', careerTitle: 'Nhân viên tư vấn nội thất', candidateName: 'Lâm Thị Kim Anh', email: 'kimanh.lam@gmail.com', phone: '0987 898 989', coverLetter: '3 năm kinh nghiệm sales nội thất cao cấp tại TP.HCM.', status: 'reviewing', createdAt: _mock.time(2) },
  { id: '3', careerId: '3', careerTitle: 'Thợ giặt và bảo dưỡng sofa', candidateName: 'Đỗ Văn Khoa', email: 'vankhoa.do@gmail.com', phone: '0933 909 090', coverLetter: 'Có kinh nghiệm giặt sofa tại nhà 2 năm.', status: 'hired', createdAt: _mock.time(3) },
  { id: '4', careerId: '4', careerTitle: 'Thiết kế nội thất 3D', candidateName: 'Phan Thị Ngọc Hà', email: 'ngocha.phan@gmail.com', phone: '0977 101 011', coverLetter: 'Portfolio 20+ dự án thiết kế nội thất 3D.', status: 'new', createdAt: _mock.time(4) },
  { id: '5', careerId: '1', careerTitle: 'Nghệ nhân đóng sofa da', candidateName: 'Trương Công Hiếu', email: 'conghieu.truong@gmail.com', phone: '0966 121 213', coverLetter: '5 năm kinh nghiệm tại xưởng sofa da tại Bắc Ninh.', status: 'rejected', createdAt: _mock.time(5) },
  { id: '6', careerId: '2', careerTitle: 'Nhân viên tư vấn nội thất', candidateName: 'Võ Thị Bích Ngọc', email: 'bichngoc.vo@gmail.com', phone: '0988 232 324', coverLetter: 'Mới ra trường, đam mê ngành nội thất.', status: 'new', createdAt: _mock.time(6) },
];
