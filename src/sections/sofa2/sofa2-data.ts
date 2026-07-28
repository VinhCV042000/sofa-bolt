// SOFA2 — Bold, dark, modern editorial style
// ----------------------------------------------------------------------

export const SOFA2_IMAGES = {
  hero: 'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=1920',
  split1: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=900',
  split2: 'https://images.pexels.com/photos/164877/pexels-photo-164877.jpeg?auto=compress&cs=tinysrgb&w=900',
  banner: 'https://images.pexels.com/photos/1660797/pexels-photo-1660797.jpeg?auto=compress&cs=tinysrgb&w=1600',
  prod1: 'https://images.pexels.com/photos/276624/pexels-photo-276624.jpeg?auto=compress&cs=tinysrgb&w=600',
  prod2: 'https://images.pexels.com/photos/675849/pexels-photo-675849.jpeg?auto=compress&cs=tinysrgb&w=600',
  prod3: 'https://images.pexels.com/photos/691410/pexels-photo-691410.jpeg?auto=compress&cs=tinysrgb&w=600',
  prod4: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=600',
  prod5: 'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=600',
  prod6: 'https://images.pexels.com/photos/6444/pencil-typography-keys-plans.jpg?auto=compress&cs=tinysrgb&w=600',
  look1: 'https://images.pexels.com/photos/276624/pexels-photo-276624.jpeg?auto=compress&cs=tinysrgb&w=700',
  look2: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=700',
  look3: 'https://images.pexels.com/photos/164877/pexels-photo-164877.jpeg?auto=compress&cs=tinysrgb&w=700',
  look4: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=700',
  cta: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

export const SOFA2_COLLECTIONS = [
  {
    title: 'Scandinavian',
    tagline: 'Tối giản · ấm áp',
    description: 'Phong cách Bắc Âu với đường nét tinh tế, màu trung tính và gỗ tự nhiên.',
    image: SOFA2_IMAGES.look1,
    count: '24 mẫu',
  },
  {
    title: 'Industrial Loft',
    tagline: 'Mạnh mẽ · cá tính',
    description: 'Kim loại, da và bê tông — sofa cho không gian loft đô thị hiện đại.',
    image: SOFA2_IMAGES.look2,
    count: '18 mẫu',
  },
  {
    title: 'Mid-Century',
    tagline: 'Hoài cổ · thanh lịch',
    description: 'Thiết kế thập niên 60 với chân gỗ chéo, form dáng thấp và màu sắc retro.',
    image: SOFA2_IMAGES.look3,
    count: '16 mẫu',
  },
];

export const SOFA2_PRODUCTS = [
  {
    name: 'Sofa Oslo 3 Chỗ',
    style: 'Scandinavian',
    price: 14500000,
    oldPrice: 18900000,
    rating: 4.8,
    reviews: 92,
    badge: 'Mới',
    image: SOFA2_IMAGES.prod1,
    colors: ['#E8E0D8', '#A1887F', '#5D4037'],
  },
  {
    name: 'Sofa Berlin Góc',
    style: 'Industrial Loft',
    price: 22000000,
    oldPrice: 28000000,
    rating: 4.9,
    reviews: 134,
    badge: 'Bestseller',
    image: SOFA2_IMAGES.prod2,
    colors: ['#37474F', '#455A64', '#607D8B'],
  },
  {
    name: 'Sofa Copenhagen',
    style: 'Scandinavian',
    price: 11900000,
    oldPrice: 15500000,
    rating: 4.7,
    reviews: 78,
    badge: '-23%',
    image: SOFA2_IMAGES.prod3,
    colors: ['#D7CCC8', '#BCAAA4', '#8D6E63'],
  },
  {
    name: 'Sofa Tokyo Đơn',
    style: 'Mid-Century',
    price: 7500000,
    oldPrice: 9900000,
    rating: 4.9,
    reviews: 56,
    badge: 'Mới',
    image: SOFA2_IMAGES.prod4,
    colors: ['#5D4037', '#8D6E63', '#A1887F'],
  },
  {
    name: 'Sofa Munich 2 Chỗ',
    style: 'Industrial Loft',
    price: 16800000,
    oldPrice: 21000000,
    rating: 5.0,
    reviews: 101,
    badge: 'Bestseller',
    image: SOFA2_IMAGES.prod5,
    colors: ['#263238', '#37474F', '#455A64'],
  },
  {
    name: 'Sofa Helsinki Tròn',
    style: 'Mid-Century',
    price: 13200000,
    oldPrice: 17500000,
    rating: 4.8,
    reviews: 87,
    badge: '-24%',
    image: SOFA2_IMAGES.prod6,
    colors: ['#A1887F', '#BCAAA4', '#D7CCC8'],
  },
];

export const SOFA2_LOOKS = [
  {
    title: 'Phòng Khách Nordic',
    image: SOFA2_IMAGES.look1,
    description: 'Sofa Oslo kết hợp gối linen và thảm len — ấm áp cho mùa đông Bắc Âu.',
  },
  {
    title: 'Loft Sài Gòn',
    image: SOFA2_IMAGES.look2,
    description: 'Sofa Berlin góc xám trong không gian bê tông trần — cá tính mạnh mẽ.',
  },
  {
    title: 'Phòng Đọc Retro',
    image: SOFA2_IMAGES.look3,
    description: 'Ghế Tokyo đơn cạnh cửa sổ lớn — góc đọc sách hoàn hảo phong cách mid-century.',
  },
  {
    title: 'Penthouse View',
    image: SOFA2_IMAGES.look4,
    description: 'Sofa Munich 2 chỗ trên ban công cao tầng — ngắm hoàng hôn thành phố.',
  },
];

export const SOFA2_VALUES = [
  {
    title: 'Thiết Kế Độc Quyền',
    description: 'Mỗi mẫu sofa được thiết kế bởi đội ngũ R&D riêng, không trùng lặp trên thị trường.',
    icon: 'solar:pen-new-round-bold-duotone',
  },
  {
    title: 'Gỗ FSC Certificated',
    description: 'Khung gỗ sồi có chứng chỉ FSC — khai thác bền vững, thân thiện môi trường.',
    icon: 'solar:tree-bold-duotone',
  },
  {
    title: 'Đệm Memory Foam',
    description: 'Lớp đệm memory foam công nghệ Đức, ôm eo và giữ form sau 50,000 lần ngồi.',
    icon: 'solar:bed-bold-duotone',
  },
  {
    title: 'Bảo Hành 10 Năm',
    description: 'Bảo hành chính hãng 10 năm — cam kết dài hạn nhất thị trường sofa Việt Nam.',
    icon: 'solar:shield-check-bold-duotone',
  },
];

export const SOFA2_MILESTONES = [
  { year: '2012', title: 'Khởi nghiệp', description: 'Xưởng đầu tiên 200m² tại Bình Dương.' },
  { year: '2016', title: '100+ mẫu', description: 'Vượt mốc 100 mẫu sofa thiết kế độc quyền.' },
  { year: '2019', title: 'Showroom', description: 'Mở showroom 1000m² tại TP.HCM và Hà Nội.' },
  { year: '2024', title: '25k+ khách', description: 'Phục vụ hơn 25,000 gia đình Việt Nam.' },
];

export const SOFA2_TESTIMONIALS = [
  {
    name: 'Hoàng Thị Mai',
    role: 'Blogger nội thất',
    rating: 5,
    content:
      'Sofa Oslo là tâm điểm phòng khách nhà tôi. Thiết kế Scandinavian tối giản nhưng cực kỳ êm. Review trên blog đã nhận 500+ lượt thích!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    name: 'Lê Đức Anh',
    role: 'Founder startup',
    rating: 5,
    content:
      'Sofa Berlin góc cho văn phòng công ty. Phong cách industrial mạnh mẽ, khách đến họp đều khen. Rất đáng đầu tư.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    name: 'Nguyễn Thanh Duyên',
    role: 'Khách hàng thân thiết',
    rating: 5,
    content:
      'Mình đã mua 3 chiếc sofa từ LUXE — Oslo, Copenhagen và Helsinki. Chất lượng luôn ổn định, dịch vụ hậu mãi xuất sắc.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
  {
    name: 'Trần Việt Cường',
    role: 'Nhà đầu tư BĐS',
    rating: 5,
    content:
      'Trang bị sofa LUXE cho 20 căn hộ cho thuê cao cấp. Khách thuê đều hài lòng — nâng tầm giá trị bất động sản.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  },
];

export const SOFA2_FAQS = [
  {
    question: 'Sofa có thể thiết kế theo phong cách riêng không?',
    answer:
      'Có. Đội ngũ thiết kế của chúng tôi sẽ làm việc 1:1 với bạn để tạo sofa độc quyền theo không gian và gu thẩm mỹ riêng. Phí thiết kế miễn phí cho đơn hàng trên 15 triệu.',
  },
  {
    question: 'Memory foam có ưu điểm gì so với mút thường?',
    answer:
      'Memory foam ôm theo cơ thể, giảm áp lực lên cột sống, giữ form sau 50,000 lần ngồi. Mút thường xẹp nhanh sau 1-2 năm sử dụng.',
  },
  {
    question: 'Thời gian giao hàng bao lâu?',
    answer:
      'Sản phẩm có sẵn: 2-5 ngày. Sofa thiết kế riêng: 10-20 ngày. Miễn phí giao hàng lắp đặt toàn quốc.',
  },
  {
    question: 'Chính sách đổi trả thế nào?',
    answer:
      '30 ngày đổi trả với sản phẩm tiêu chuẩn. Sofa thiết kế riêng chỉ đổi trả khi có lỗi sản xuất, được bảo hành sửa chữa miễn phí.',
  },
  {
    question: 'Có trả góp không?',
    answer:
      'Có. Hỗ trợ trả góp 0% qua thẻ tín dụng trong 6 tháng, hoặc trả góp qua ngân hàng trong 12-24 tháng với lãi suất ưu đãi.',
  },
];
