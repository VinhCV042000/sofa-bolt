// SOFA1 — Warm, earthy, artisan luxury style
// ----------------------------------------------------------------------

export const SOFA1_IMAGES = {
  hero: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920',
  about: 'https://images.pexels.com/photos/276624/pexels-photo-276624.jpeg?auto=compress&cs=tinysrgb&w=900',
  parallax: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1600',
  mat1: 'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=600',
  mat2: 'https://images.pexels.com/photos/675849/pexels-photo-675849.jpeg?auto=compress&cs=tinysrgb&w=600',
  mat3: 'https://images.pexels.com/photos/691410/pexels-photo-691410.jpeg?auto=compress&cs=tinysrgb&w=600',
  mat4: 'https://images.pexels.com/photos/164877/pexels-photo-164877.jpeg?auto=compress&cs=tinysrgb&w=600',
  cat1: 'https://images.pexels.com/photos/276624/pexels-photo-276624.jpeg?auto=compress&cs=tinysrgb&w=700',
  cat2: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=700',
  cat3: 'https://images.pexels.com/photos/675849/pexels-photo-675849.jpeg?auto=compress&cs=tinysrgb&w=700',
  cat4: 'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=700',
  gallery1: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=700',
  gallery2: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=700',
  gallery3: 'https://images.pexels.com/photos/164877/pexels-photo-164877.jpeg?auto=compress&cs=tinysrgb&w=700',
  gallery4: 'https://images.pexels.com/photos/6444/pencil-typography-keys-plans.jpg?auto=compress&cs=tinysrgb&w=700',
  cta: 'https://images.pexels.com/photos/1660797/pexels-photo-1660797.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

export const SOFA1_CATEGORIES = [
  {
    title: 'Sofa Da Bò',
    subtitle: 'Da bò thật nhập khẩu',
    image: SOFA1_IMAGES.cat1,
    items: 24,
  },
  {
    title: 'Sofa Vải Linen',
    subtitle: 'Vải linen cao cấp mềm mại',
    image: SOFA1_IMAGES.cat2,
    items: 32,
  },
  {
    title: 'Sofa Góc L',
    subtitle: 'Tối ưu không gian phòng khách',
    image: SOFA1_IMAGES.cat3,
    items: 18,
  },
  {
    title: 'Sofa Đơn',
    subtitle: 'Ghế thư giãn phòng đọc',
    image: SOFA1_IMAGES.cat4,
    items: 16,
  },
];

export const SOFA1_PRODUCTS = [
  {
    name: 'Sofa Roma Da Bò Nâu',
    category: 'Sofa Da Bò',
    price: 28500000,
    oldPrice: 36000000,
    rating: 4.9,
    reviews: 124,
    badge: 'Bestseller',
    image: SOFA1_IMAGES.mat1,
    colors: ['#6D4C41', '#3E2723', '#8D6E63'],
  },
  {
    name: 'Sofa Milano Linen Be',
    category: 'Sofa Vải Linen',
    price: 12500000,
    oldPrice: 16800000,
    rating: 4.8,
    reviews: 89,
    badge: '-25%',
    image: SOFA1_IMAGES.mat2,
    colors: ['#D7CCC8', '#BCAAA4', '#A1887F'],
  },
  {
    name: 'Sofa Góc Verona Xám',
    category: 'Sofa Góc L',
    price: 19900000,
    oldPrice: 24900000,
    rating: 5.0,
    reviews: 156,
    badge: 'Mới',
    image: SOFA1_IMAGES.mat3,
    colors: ['#455A64', '#607D8B', '#90A4AE'],
  },
  {
    name: 'Ghế Napoli Đơn',
    category: 'Sofa Đơn',
    price: 6500000,
    oldPrice: 8900000,
    rating: 4.7,
    reviews: 67,
    badge: 'Bestseller',
    image: SOFA1_IMAGES.mat4,
    colors: ['#5D4037', '#8D6E63', '#A1887F'],
  },
];

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
