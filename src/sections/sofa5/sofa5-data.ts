// SOFA5 — Elegant, luxurious, dark gold — "Sofa Royale" style
// ----------------------------------------------------------------------

export const SOFA5_COLORS = {
  clay: '#C9A227',
  clayDeep: '#9B7B18',
  clayLight: '#E4C97E',
  sage: '#B08D57',
  sageDeep: '#8A6B3D',
  sageLight: '#D5B98A',
  charcoal: '#161310',
  charcoalDeep: '#0B0A08',
  charcoalLight: '#2C2823',
  cream: '#F1EADD',
  creamLight: '#FBF7EF',
  creamDeep: '#E3D9C6',
  ink: '#14110C',
  inkSoft: '#6B6357',
  paper: '#FFFDF8',
  rust: '#9B7B18',
  ruby: '#7A2E2E',
  white: '#FFFFFF',
};

export const SOFA5_IMAGES = {
  hero: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1920',
  about: 'https://images.pexels.com/photos/1660797/pexels-photo-1660797.jpeg?auto=compress&cs=tinysrgb&w=900',
  prod1: 'https://images.pexels.com/photos/276624/pexels-photo-276624.jpeg?auto=compress&cs=tinysrgb&w=600',
  prod2: 'https://images.pexels.com/photos/675849/pexels-photo-675849.jpeg?auto=compress&cs=tinysrgb&w=600',
  prod3: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=600',
  prod4: 'https://images.pexels.com/photos/164877/pexels-photo-164877.jpeg?auto=compress&cs=tinysrgb&w=600',
  prod5: 'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=600',
  prod6: 'https://images.pexels.com/photos/691410/pexels-photo-691410.jpeg?auto=compress&cs=tinysrgb&w=600',
  showcase1: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=900',
  showcase2: 'https://images.pexels.com/photos/1660797/pexels-photo-1660797.jpeg?auto=compress&cs=tinysrgb&w=900',
  showcase3: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=900',
  cta: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
  vip: 'https://images.pexels.com/photos/276624/pexels-photo-276624.jpeg?auto=compress&cs=tinysrgb&w=1000',
};

export const SOFA5_COLLECTIONS = [
  {
    title: 'Royale Gold',
    subtitle: 'Vàng · Da thật · Sang trọng',
    description: 'Sofa da thật Ý với chi tiết mạ vàng 24K — biểu tượng của sự quyền quý.',
    image: SOFA5_IMAGES.prod1,
    count: '8 mẫu',
  },
  {
    title: 'Royale Noir',
    subtitle: 'Đen · Velour · Huyền bí',
    description: 'Velour đen nhung mềm mại, khung gỗ óc chó — bí ẩn và đầy sức hút.',
    image: SOFA5_IMAGES.prod2,
    count: '6 mẫu',
  },
  {
    title: 'Royale Ivory',
    subtitle: 'Ngà · Linen Ý · Tinh khiết',
    description: 'Linen Ý nhập khẩu, tone ngà thanh lịch — tinh tế trong từng đường may.',
    image: SOFA5_IMAGES.prod3,
    count: '5 mẫu',
  },
];

export const SOFA5_PRODUCTS = [
  {
    name: 'Sofa Royale Louis',
    collection: 'Royale Gold',
    price: 45000000,
    oldPrice: 58000000,
    rating: 5.0,
    reviews: 45,
    badge: 'Limited',
    image: SOFA5_IMAGES.prod1,
    material: 'Da bò Ý · Mạ vàng 24K',
    description: 'Phiên bản giới hạn 50 chiếc — da bò Ý nguyên tấm, chân mạ vàng 24K.',
  },
  {
    name: 'Sofa Royale Velvet',
    collection: 'Royale Noir',
    price: 38000000,
    oldPrice: 49000000,
    rating: 4.9,
    reviews: 62,
    badge: 'Bestseller',
    image: SOFA5_IMAGES.prod2,
    material: 'Velour Ý · Gỗ óc chó',
    description: 'Velour Ý nhung đen, khung gỗ óc chó Bắc Mỹ — huyền bí và sang trọng.',
  },
  {
    name: 'Sofa Royale Pearl',
    collection: 'Royale Ivory',
    price: 32000000,
    oldPrice: 42000000,
    rating: 4.9,
    reviews: 38,
    badge: 'Mới',
    image: SOFA5_IMAGES.prod3,
    material: 'Linen Ý · Gỗ sồi',
    description: 'Linen Ý tone ngà, khung gỗ sồi FSC — tinh khiết và thanh lịch.',
  },
  {
    name: 'Sofa Royale Empire',
    collection: 'Royale Gold',
    price: 52000000,
    oldPrice: 65000000,
    rating: 5.0,
    reviews: 28,
    badge: 'Premium',
    image: SOFA5_IMAGES.prod4,
    material: 'Da bò Ý · Thạch anh',
    description: 'Đỉnh cao nghệ thuật chế tác — da bò Ý, đế thạch anh tự nhiên.',
  },
  {
    name: 'Sofa Royale Onyx',
    collection: 'Royale Noir',
    price: 41000000,
    oldPrice: 53000000,
    rating: 5.0,
    reviews: 51,
    badge: '-22%',
    image: SOFA5_IMAGES.prod5,
    material: 'Velour Ý · Đá onyx',
    description: 'Velour Ý đen, chi tiết đá onyx — quyền lực và đầy cá tính.',
  },
  {
    name: 'Sofa Royale Silk',
    collection: 'Royale Ivory',
    price: 36000000,
    oldPrice: 46000000,
    rating: 4.8,
    reviews: 34,
    badge: 'Mới',
    image: SOFA5_IMAGES.prod6,
    material: 'Linen Ý · Khung đồng',
    description: 'Linen Ý tone ngà, khung đồng thau chế tác thủ công.',
  },
];

export const SOFA5_PRIVILEGES = [
  {
    title: 'Tư Vấn Tận Nhà',
    description: 'Chuyên gia nội thất đến tận nhà, đo đạc và tư vấn 1:1 — hoàn toàn miễn phí.',
    icon: 'solar:home-bold-duotone',
  },
  {
    title: 'Giao Hàng Trắng',
    description: 'Đóng gói trắng, giao hàng bằng xe chuyên dụng, lắp đặt bằng đội ngũ chuyên nghiệp.',
    icon: 'solar:delivery-bold-duotone',
  },
  {
    title: 'Bảo Hành 15 Năm',
    description: 'Bảo hành chính hãng 15 năm — cam kết dài hạn nhất thị trường sofa cao cấp.',
    icon: 'solar:shield-check-bold-duotone',
  },
  {
    title: 'Đổi Trả 90 Ngày',
    description: '90 ngày đổi trả — thời gian thử nghiệm dài nhất để bạn chắc chắn lựa chọn.',
    icon: 'solar:hand-stars-bold-duotone',
  },
];

export const SOFA5_SHOWCASE = [
  {
    image: SOFA5_IMAGES.showcase1,
    title: 'Penthouse Royale',
    description: 'Sofa Royale Louis trong penthouse view toàn cảnh — đỉnh cao không gian sống.',
  },
  {
    image: SOFA5_IMAGES.showcase2,
    title: 'Villa Mediterranean',
    description: 'Sofa Royale Pearl trong biệt thự Địa Trung Hải — thanh lịch và tinh khiết.',
  },
  {
    image: SOFA5_IMAGES.showcase3,
    title: 'Mansion Noir',
    description: 'Sofa Royale Onyx trong dinh thự phong cách noir — quyền lực và bí ẩn.',
  },
];

export const SOFA5_CRAFT = [
  {
    title: 'Da Bò Ý Nguyên Tấm',
    description: 'Da bò Ý nhập khẩu, thuộc da thủ công 90 ngày — mềm mại, bền bỉ, đẹp hơn theo thời gian.',
    icon: 'solar:armchair-bold-duotone',
  },
  {
    title: 'Mạ Vàng 24K',
    description: 'Chi tiết kim loại mạ vàng 24K thật — chế tác bởi thợ kim hoàn với 30 năm kinh nghiệm.',
    icon: 'solar:medal-ribbon-star-bold-duotone',
  },
  {
    title: 'Gỗ Óc Chó Bắc Mỹ',
    description: 'Gỗ óc chó nhập khẩu Bắc Mỹ, sấy khô 6 tháng — độ bền 50+ năm.',
    icon: 'solar:tree-bold-duotone',
  },
  {
    title: 'May Thủ Công',
    description: 'Mỗi đường may hoàn thiện thủ công bởi thợ may 20+ năm kinh nghiệm — hoàn hảo từng milimet.',
    icon: 'solar:pen-new-round-bold-duotone',
  },
];

export const SOFA5_STATS = [
  { value: 15, suffix: ' năm', label: 'Kinh nghiệm chế tác' },
  { value: 3000, suffix: '+', label: 'Gia đình thượng lưu' },
  { value: 19, suffix: '', label: 'Bộ sưu tập độc quyền' },
  { value: 100, suffix: '%', label: 'Thủ công chế tác' },
];

export const SOFA5_TESTIMONIALS = [
  {
    name: 'Tôn Nữ Trang',
    role: 'Doanh nhân',
    rating: 5,
    content: 'Sofa Royale Louis là món quà kỷ niệm 20 năm cưới. Da Ý mềm mại, mạ vàng 24K sang trọng — xứng đáng mỗi đồng!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    name: 'Richard Chen',
    role: 'Nhà đầu tư',
    rating: 5,
    content: 'Trang bị Royale Onyx cho văn phòng giám đốc. Khách đối tác đều ấn tượng — nâng tầm đẳng cấp thương hiệu.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    name: 'Lý Phương Anh',
    role: 'Nghệ sĩ',
    rating: 5,
    content: 'Sofa Royale Velvet trong phòng sáng tác của tôi. Velour Ý êm ái, cảm hứng tuôn chảy — tác phẩm nghệ thuật thực sự.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
  {
    name: 'Ngô Bảo Trân',
    role: 'Kiến trúc sư',
    rating: 5,
    content: 'Tôi chỉ định Royale cho các dự án biệt thự cao cấp. Chất lượng đỉnh, dịch vụ white-glove — khách hàng luôn hài lòng.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  },
];

export const SOFA5_FAQS = [
  {
    question: 'Sofa Royale có gì khác biệt so với sofa thường?',
    answer: 'Da bò Ý nguyên tấm, mạ vàng 24K thật, gỗ óc chó Bắc Mỹ, may thủ công 100%. Mỗi chiếc sofa là duy nhất — có số serial riêng.',
  },
  {
    question: 'Phiên bản giới hạn là gì?',
    answer: 'Một số mẫu chỉ sản xuất 50-100 chiếc trên toàn thế giới, có chứng nhận độc quyền và ký tên bởi nghệ nhân chế tác.',
  },
  {
    question: 'Dịch vụ white-glove bao gồm những gì?',
    answer: 'Tư vấn tận nhà, giao hàng đóng gói trắng, lắp đặt chuyên nghiệp, dọn dẹp sau lắp đặt, và bảo dưỡng định kỳ 6 tháng/lần.',
  },
  {
    question: 'Bảo hành 15 năm có điều kiện gì?',
    answer: 'Bảo hành toàn diện: khung, đệm, bọc, và chi tiết kim loại. Bảo dưỡng định kỳ miễn phí. Không áp dụng cho hư hỏng do sử dụng sai.',
  },
  {
    question: 'Có thể thiết kế sofa độc quyền riêng không?',
    answer: 'Có. Dịch vụ Bespoke Royale — thiết kế 1:1 với nghệ nhân, vật liệu tùy chọn, số serial cá nhân. Thời gian chế tác 45-90 ngày.',
  },
];

export const SOFA5_VIP = [
  { label: 'Bespoke', text: 'Thiết kế độc quyền 1:1', icon: 'solar:pen-new-round-bold-duotone' },
  { label: 'White-Glove', text: 'Giao hàng & lắp đặt VIP', icon: 'solar:delivery-bold-duotone' },
  { label: '15 năm', text: 'Bảo hành dài nhất', icon: 'solar:shield-check-bold-duotone' },
  { label: '90 ngày', text: 'Đổi trả dài nhất', icon: 'solar:hand-stars-bold-duotone' },
];
