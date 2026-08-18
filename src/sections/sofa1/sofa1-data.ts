// SOFA1 — Warm, earthy, artisan luxury style
// ----------------------------------------------------------------------
// This file is a thin adapter: all real content lives in
// src/_mock/_sofa1.ts (shared with the admin dashboard). Editing a
// product/category/etc. in the admin at /dashboard/sofa1/* updates what
// renders here automatically — nothing below should hardcode content.

import {
  _sofa1Products,
  _sofa1Categories,
  SOFA1_MOCK_IMAGES,
} from 'src/_mock/_sofa1';

export const SOFA1_IMAGES = {
  hero: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920',
  about: 'https://images.pexels.com/photos/276624/pexels-photo-276624.jpeg?auto=compress&cs=tinysrgb&w=900',
  parallax: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1600',
  mat1: SOFA1_MOCK_IMAGES.product1,
  mat2: SOFA1_MOCK_IMAGES.product2,
  mat3: SOFA1_MOCK_IMAGES.product3,
  mat4: SOFA1_MOCK_IMAGES.product4,
  cat1: SOFA1_MOCK_IMAGES.cat1,
  cat2: SOFA1_MOCK_IMAGES.cat2,
  cat3: SOFA1_MOCK_IMAGES.cat3,
  cat4: SOFA1_MOCK_IMAGES.cat4,
  gallery1: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=700',
  gallery2: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=700',
  gallery3: 'https://images.pexels.com/photos/164877/pexels-photo-164877.jpeg?auto=compress&cs=tinysrgb&w=700',
  gallery4: 'https://images.pexels.com/photos/6444/pencil-typography-keys-plans.jpg?auto=compress&cs=tinysrgb&w=700',
  cta: 'https://images.pexels.com/photos/1660797/pexels-photo-1660797.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

// The homepage only ever showcased 4 curated categories — keep that curation,
// but source the fields from the single admin-managed category list.
const HOMEPAGE_CATEGORY_IDS = ['sofa-da', 'sofa-vai', 'sofa-goc-chu-l', 'sofa-don'];

export const SOFA1_CATEGORIES = HOMEPAGE_CATEGORY_IDS.map((id) => {
  const category = _sofa1Categories.find((item) => item.id === id)!;
  return {
    title: category.name,
    subtitle: category.subtitle || '',
    image: category.image,
    items: category.itemCount,
  };
});

// The homepage only ever showcased 4 hero products — keep that curation,
// but source the fields (price, rating, stock...) from the admin-managed
// product catalog so editing a product updates the homepage too.
const HOMEPAGE_PRODUCT_IDS = ['1', '2', '3', '4'];

export const SOFA1_PRODUCTS = HOMEPAGE_PRODUCT_IDS.map((id) => {
  const product = _sofa1Products.find((item) => item.id === id)!;
  const category = _sofa1Categories.find((item) => item.id === product.categoryId);
  return {
    name: product.name,
    category: category?.name || '',
    price: product.priceSale || product.price,
    oldPrice: product.priceSale ? product.price : undefined,
    rating: product.rating,
    reviews: product.totalReviews,
    badge: product.badge,
    image: product.coverUrl,
    colors: product.colors,
  };
});

export const SOFA1_FEATURES = [
  {
    title: 'Da Bò Thật 100%',
    description: 'Da bò nhập khẩu Ý, thuộc thủ công, mềm mại và bền đẹp hàng chục năm.',
    icon: 'solar:shield-check-bold-duotone',
  },
  {
    title: 'Khung Gỗ Sồi',
    description: 'Khung gỗ sồi nguyên khối, chịu lực cao, không cong vênh theo thời gian.',
    icon: 'solar:tree-bold-duotone',
  },
  {
    title: 'Đóng Tay Từng Đường May',
    description: 'Mỗi đường kim được may thủ công bởi nghệ nhân 20+ năm kinh nghiệm.',
    icon: 'solar:hand-stars-bold-duotone',
  },
  {
    title: 'Bảo Hành 7 Năm',
    description: 'Bảo hành chính hãng 7 năm, bảo trì làm mới bọc trọn đời.',
    icon: 'solar:medal-ribbon-star-bold-duotone',
  },
];

export const SOFA1_GALLERY = [
  { image: SOFA1_IMAGES.gallery1, title: 'Showroom Hà Nội', size: 'large' },
  { image: SOFA1_IMAGES.gallery2, title: 'Xưởng chế tác', size: 'small' },
  { image: SOFA1_IMAGES.gallery3, title: 'Showroom Sài Gòn', size: 'small' },
  { image: SOFA1_IMAGES.gallery4, title: 'Phòng trưng bày', size: 'small' },
];

export const SOFA1_STATS = [
  { value: 12, suffix: '+', label: 'Năm chế tác thủ công' },
  { value: 80, suffix: '+', label: 'Mẫu sofa thiết kế' },
  { value: 25, suffix: 'k+', label: 'Gia đình tin chọn' },
  { value: 4.9, suffix: '/5', label: 'Điểm hài lòng khách hàng' },
];

export const SOFA1_STEPS = [
  {
    number: '01',
    title: 'Tham Quan Showroom',
    description: 'Trải nghiệm trực tiếp độ êm và chất liệu thật tại showroom.',
    icon: 'solar:map-point-bold-duotone',
  },
  {
    number: '02',
    title: 'Tư Vấn Tận Nhà',
    description: 'Chuyên gia đến đo đạc và tư vấn miễn phí tại nhà bạn.',
    icon: 'solar:chat-round-dots-bold-duotone',
  },
  {
    number: '03',
    title: 'Chế Tác Thủ Công',
    description: 'Sofa được đóng thủ công trong 7-14 ngày làm việc.',
    icon: 'solar:hammer-bold-duotone',
  },
  {
    number: '04',
    title: 'Giao Lắp Tận Nơi',
    description: 'Giao hàng và lắp đặt miễn phí, kiểm tra trước khi bàn giao.',
    icon: 'solar:delivery-bold-duotone',
  },
];

export const SOFA1_TESTIMONIALS = [
  {
    name: 'Vũ Thu Trang',
    role: 'Nội thất gia đình',
    rating: 5,
    content:
      'Sofa Roma da bò đẹp không tì vết. Đường may đều tay, da mềm mại. Cả nhà đều thích khoang ngồi cực êm.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    name: 'Đặng Minh Quân',
    role: 'Kiến trúc sư',
    rating: 5,
    content:
      'Tôi đã giới thiệu Casa Sofa cho hơn 30 khách hàng. Chất lượng ổn định, đúng tiến độ, dịch vụ hậu mãi tuyệt vời.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    name: 'Bùi Khánh Linh',
    role: 'Khách hàng VIP',
    rating: 5,
    content:
      'Sofa góc Verona hoàn hảo cho phòng khách 40m². Lắp đặt nhanh, nhân viên chuyên nghiệp. Đáng từng đồng!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
];

export const SOFA1_FAQS = [
  {
    question: 'Sofa có đóng theo kích thước riêng không?',
    answer:
      'Có. Chúng tôi nhận đóng sofa theo kích thước, màu sắc và chất liệu theo yêu cầu. Thời gian hoàn thành 7-14 ngày làm việc.',
  },
  {
    question: 'Da bò thật và da công nghiệp khác nhau thế nào?',
    answer:
      'Da bò thật có vân tự nhiên, mềm mại, thoáng khí và bền đẹp theo năm tháng. Da công nghiệp đồng nhất nhưng kém bền và không thoáng.',
  },
  {
    question: 'Có thể đổi trả nếu không ưng ý?',
    answer:
      'Bạn có 30 ngày đổi trả với sản phẩm tiêu chuẩn. Sofa đóng theo yêu cầu không áp dụng đổi trả trừ lỗi sản xuất.',
  },
  {
    question: 'Bảo hành bao gồm những gì?',
    answer:
      'Bảo hành 7 năm cho khung gỗ và cơ cấu, 5 năm cho đệm và bọc. Bảo trì làm mới bọc trọn đời với chi phí ưu đãi.',
  },
  {
    question: 'Giao hàng mất bao lâu?',
    answer:
      'Sản phẩm có sẵn: 2-5 ngày. Sofa đóng theo yêu cầu: 7-14 ngày. Miễn phí giao hàng lắp đặt nội thành, ngoại thành tính phí theo khoảng cách.',
  },
];
