// SOFA8 — Coastal Mediterranean — breezy, airy, ocean-inspired, relaxed elegance
// ----------------------------------------------------------------------

export const SOFA8_COLORS = {
  ocean: '#2E7D9B',
  oceanDeep: '#1A5670',
  oceanLight: '#6BAFC7',
  sand: '#E8D5BC',
  sandLight: '#F2E6D6',
  sky: '#A8D5E2',
  white: '#FFFFFF',
  cream: '#FAF7F2',
  coral: '#E8826B',
  coralLight: '#F0A99A',
  navy: '#1A3A4A',
  seafoam: '#7FC4B0',
};

export const SOFA8_IMAGES = {
  hero: 'https://images.pexels.com/photos/276508/pexels-photo-276508.jpeg?auto=compress&cs=tinysrgb&w=1920',
  story: 'https://images.pexels.com/photos/18946624/pexels-photo-18946624.jpeg?auto=compress&cs=tinysrgb&w=900',
  cat1: 'https://images.pexels.com/photos/29012619/pexels-photo-29012619.jpeg?auto=compress&cs=tinysrgb&w=700',
  cat2: 'https://images.pexels.com/photos/8583599/pexels-photo-8583599.jpeg?auto=compress&cs=tinysrgb&w=700',
  cat3: 'https://images.pexels.com/photos/23119651/pexels-photo-23119651.jpeg?auto=compress&cs=tinysrgb&w=700',
  cat4: 'https://images.pexels.com/photos/10032378/pexels-photo-10032378.jpeg?auto=compress&cs=tinysrgb&w=700',
  prod1: 'https://images.pexels.com/photos/29012619/pexels-photo-29012619.jpeg?auto=compress&cs=tinysrgb&w=600',
  prod2: 'https://images.pexels.com/photos/8583599/pexels-photo-8583599.jpeg?auto=compress&cs=tinysrgb&w=600',
  prod3: 'https://images.pexels.com/photos/23119651/pexels-photo-23119651.jpeg?auto=compress&cs=tinysrgb&w=600',
  prod4: 'https://images.pexels.com/photos/10032378/pexels-photo-10032378.jpeg?auto=compress&cs=tinysrgb&w=600',
  prod5: 'https://images.pexels.com/photos/28905874/pexels-photo-28905874.jpeg?auto=compress&cs=tinysrgb&w=600',
  prod6: 'https://images.pexels.com/photos/14746022/pexels-photo-14746022.jpeg?auto=compress&cs=tinysrgb&w=600',
  gallery1: 'https://images.pexels.com/photos/276508/pexels-photo-276508.jpeg?auto=compress&cs=tinysrgb&w=700',
  gallery2: 'https://images.pexels.com/photos/18946624/pexels-photo-18946624.jpeg?auto=compress&cs=tinysrgb&w=700',
  gallery3: 'https://images.pexels.com/photos/10032378/pexels-photo-10032378.jpeg?auto=compress&cs=tinysrgb&w=700',
  gallery4: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=700',
  gallery5: 'https://images.pexels.com/photos/23119651/pexels-photo-23119651.jpeg?auto=compress&cs=tinysrgb&w=700',
  gallery6: 'https://images.pexels.com/photos/28905874/pexels-photo-28905874.jpeg?auto=compress&cs=tinysrgb&w=700',
  cta: 'https://images.pexels.com/photos/276508/pexels-photo-276508.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

export const SOFA8_MARQUEE = [
  'Biển Cả',
  'Gió Mát',
  'Nắng Vàng',
  'Cát Trắng',
  'Sóng Xanh',
  'Thư Giãn',
  'Nghỉ Dưỡng',
  'Tự Nhiên',
  'Yên Bình',
  'Thanh Lịch',
];

export const SOFA8_COLLECTIONS = [
  {
    title: 'Azure Bay',
    tagline: 'Xanh biển · Linen',
    description: 'Xanh đại dương, linen thoáng mát — mang biển vào phòng khách.',
    image: SOFA8_IMAGES.cat1,
    count: '12 mẫu',
  },
  {
    title: 'Sandy Shore',
    tagline: 'Cát · Cotton',
    description: 'Tone cát ấm áp, cotton mềm mại — thư giãn như trên bãi biển.',
    image: SOFA8_IMAGES.cat2,
    count: '10 mẫu',
  },
  {
    title: 'White Wave',
    tagline: 'Trắng · Bouclé',
    description: 'Trắng sóng bọt, bouclé êm ái — thanh lịch và tinh khiết.',
    image: SOFA8_IMAGES.cat3,
    count: '8 mẫu',
  },
  {
    title: 'Coral Reef',
    tagline: 'San hô · Velvet',
    description: 'Cam san hô, velvet mịn — điểm nhấn ấm cho không gian biển.',
    image: SOFA8_IMAGES.cat4,
    count: '7 mẫu',
  },
];

export const SOFA8_PRODUCTS = [
  {
    name: 'Sofa Azure Lounge',
    category: 'Azure Bay',
    price: 18500000,
    oldPrice: 23500000,
    rating: 4.9,
    reviews: 88,
    badge: 'Bestseller',
    image: SOFA8_IMAGES.prod1,
    material: 'Linen · Gỗ sồi trắng',
    colors: ['#2E7D9B', '#6BAFC7', '#A8D5E2'],
  },
  {
    name: 'Sofa Sandy Daybed',
    category: 'Sandy Shore',
    price: 14200000,
    oldPrice: 18000000,
    rating: 4.8,
    reviews: 72,
    badge: '-21%',
    image: SOFA8_IMAGES.prod2,
    material: 'Cotton · Gỗ keo',
    colors: ['#E8D5BC', '#F2E6D6', '#D4C4A8'],
  },
  {
    name: 'Sofa White Wave',
    category: 'White Wave',
    price: 16900000,
    oldPrice: 21500000,
    rating: 5.0,
    reviews: 95,
    badge: 'Mới',
    image: SOFA8_IMAGES.prod3,
    material: 'Bouclé · Gỗ sồi',
    colors: ['#FFFFFF', '#FAF7F2', '#F0EBE3'],
  },
  {
    name: 'Sofa Coral Breeze',
    category: 'Coral Reef',
    price: 15500000,
    oldPrice: 19800000,
    rating: 4.9,
    reviews: 63,
    badge: 'Bestseller',
    image: SOFA8_IMAGES.prod4,
    material: 'Velvet · Gỗ óc chó',
    colors: ['#E8826B', '#F0A99A', '#D66B53'],
  },
  {
    name: 'Sofa Seaview Nest',
    category: 'Azure Bay',
    price: 19900000,
    oldPrice: 25500000,
    rating: 5.0,
    reviews: 81,
    badge: 'Mới',
    image: SOFA8_IMAGES.prod5,
    material: 'Linen · Gỗ tần bì',
    colors: ['#1A5670', '#2E7D9B', '#6BAFC7'],
  },
  {
    name: 'Sofa Coastal Dream',
    category: 'Sandy Shore',
    price: 17500000,
    oldPrice: 22000000,
    rating: 4.8,
    reviews: 70,
    badge: 'Premium',
    image: SOFA8_IMAGES.prod6,
    material: 'Cotton blend · Gỗ sồi',
    colors: ['#7FC4B0', '#A8D5E2', '#E8D5BC'],
  },
];

export const SOFA8_FEATURES = [
  {
    title: 'Linen Thoáng Mát',
    description: 'Linen nhập khẩu, thoáng khí mùa hè, ấm áp mùa đông. Hoàn hảo cho khí hậu biển.',
    icon: 'solar:wind-bold-duotone',
  },
  {
    title: 'Bouclé Êm Ái',
    description: 'Bouclé手感 mềm như mây, bền bỉ và dễ vệ sinh. Trải nghiệm ngồi thư giãn tuyệt đối.',
    icon: 'solar:cloud-bold-duotone',
  },
  {
    title: 'Gỗ Sồi Trắng',
    description: 'Gỗ sồi sấy tự nhiên, tone sáng, bền 30+ năm. Khung sofa nhẹ mà chắc.',
    icon: 'solar:tree-bold-duotone',
  },
  {
    title: 'Giao Hàng 48h',
    description: 'Sản phẩm có sẵn giao 48h. Lắp đặt miễn phí, đổi trả 45 ngày.',
    icon: 'solar:delivery-bold-duotone',
  },
];

export const SOFA8_STATS = [
  { value: 35, suffix: '+', label: 'Mẫu coastal design' },
  { value: 40, suffix: 'k+', label: 'Biệt thự nghỉ dưỡng' },
  { value: 48, suffix: 'h', label: 'Giao hàng nhanh' },
  { value: 7, suffix: ' năm', label: 'Bảo hành dài hạn' },
];

export const SOFA8_STEPS = [
  {
    number: '01',
    title: 'Chọn Bộ Sưu Tập',
    description: 'Azure, Sandy, White Wave, hay Coral? Chọn tone biển phù hợp không gian.',
    icon: 'solar:water-bold-duotone',
  },
  {
    number: '02',
    title: 'Chọn Kích Thước',
    description: 'Từ apartment đến villa. Đóng theo kích thước riêng nếu cần.',
    icon: 'solar:scale-bold-duotone',
  },
  {
    number: '03',
    title: 'Chọn Chất Liệu',
    description: 'Linen thoáng, bouclé êm, cotton mềm, hay velvet mịn. Mỗi một cảm giác.',
    icon: 'solar:layers-bold-duotone',
  },
  {
    number: '04',
    title: 'Giao & Lắp Đặt',
    description: 'Giao 48h, lắp đặt miễn phí. Đổi trả 45 ngày nếu chưa hài lòng.',
    icon: 'solar:delivery-bold-duotone',
  },
];

export const SOFA8_GALLERY = [
  { image: SOFA8_IMAGES.gallery1, title: 'Oceanview Penthouse', tag: 'Azure' },
  { image: SOFA8_IMAGES.gallery2, title: 'Seaside Studio', tag: 'Sandy' },
  { image: SOFA8_IMAGES.gallery3, title: 'Beach House', tag: 'Coral' },
  { image: SOFA8_IMAGES.gallery4, title: 'Coastal Villa', tag: 'White Wave' },
  { image: SOFA8_IMAGES.gallery5, title: 'Breeze Apartment', tag: 'Azure' },
  { image: SOFA8_IMAGES.gallery6, title: 'Mediterranean Home', tag: 'Sandy' },
];

export const SOFA8_TESTIMONIALS = [
  {
    name: 'Nguyễn Bảo',
    role: 'Resort owner',
    rating: 5,
    content:
      'Sofa Azure Lounge cho resort biển Đà Nẵng. Khách nước ngoài khen không ngớt — linen mát, màu biển hoàn hảo, vibe Mediterranean!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    name: 'Trang Đinh',
    role: 'Interior designer',
    rating: 5,
    content:
      'Tôi chọn sofa8 cho mọi dự án coastal. Tone biển, chất liệu linen, bouclé — thanh lịch và thư giãn. Khách hàng luôn hài lòng.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    name: 'Lê Hoàng',
    role: 'Beach house owner',
    rating: 5,
    content:
      'Sofa White Wave trong phòng khách view biển. Bouclé êm như mây, trắng tinh khiết. Cảm giác như ngồi trên sóng bọt!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  },
  {
    name: 'Mai Phương',
    role: 'Lifestyle blogger',
    rating: 5,
    content:
      'Sofa Coral Breeze cho góc ban công biển. Cam san hô ấm áp, velvet mịn — chụp ảnh mỗi sáng đều artwork. 10/10 recommend!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
];

export const SOFA8_FAQS = [
  {
    question: 'Sofa coastal có phù hợp khí hậu nóng ẩm Việt Nam không?',
    answer:
      'Hoàn toàn. Linen và cotton thoáng khí, chống ẩm mốc. Bouclé có lớp phủ bảo vệ. Đây là chất liệu lý tưởng cho khí hậu biển nhiệt đới.',
  },
  {
    question: 'Linen và bouclé khác nhau thế nào?',
    answer:
      'Linen mát, thoáng, có vân tự nhiên — hoàn hảo mùa hè. Bouclé êm dày, ấm áp — hoàn hảo mùa đông. Cả hai đều bền và đẹp theo thời gian.',
  },
  {
    question: 'Sofa có chống nước biển không?',
    answer:
      'Linen và cotton có lớp phủ nano chống thấm nhẹ. Không ngâm nước trực tiếp nhưng chịu được hơi ẩm biển. Khuyên dùng trong nhà hoặc ban công có mái che.',
  },
  {
    question: 'Bảo hành và đổi trả thế nào?',
    answer:
      'Bảo hành 7 năm cho khung và đệm. Đổi trả 45 ngày. Bảo trì làm mới bọc với chi phí ưu đãi trọn đời.',
  },
  {
    question: 'Có đóng theo kích thước riêng không?',
    answer:
      'Có. Đóng sofa theo kích thước, màu sắc, chất liệu theo yêu cầu. Thời gian hoàn thành 7-14 ngày làm việc.',
  },
];

export const SOFA8_PROMOS = [
  { label: '48h Ship', text: 'Giao nhanh', icon: 'solar:delivery-bold-duotone' },
  { label: '7 năm', text: 'Bảo hành', icon: 'solar:shield-check-bold-duotone' },
  { label: '45 ngày', text: 'Đổi trả', icon: 'solar:hand-stars-bold-duotone' },
  { label: '0% APR', text: 'Trả góp 6 tháng', icon: 'solar:wallet-bold-duotone' },
];
