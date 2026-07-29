// SOFA10 — Japanese Wabi-Sabi — minimalist, muted, organic imperfection, zen
// ----------------------------------------------------------------------

export const SOFA10_COLORS = {
  charcoal: '#2B2B2B',
  charcoalLight: '#3E3E3E',
  ink: '#1A1A1A',
  stone: '#8C8275',
  stoneLight: '#B5AC9E',
  sand: '#D6CDB8',
  sandLight: '#E8E0D0',
  warmWhite: '#F5F1EA',
  paper: '#FAF7F2',
  wood: '#9B7B4F',
  woodLight: '#C4A878',
  moss: '#5C6B4A',
  rust: '#A0623E',
};

export const SOFA10_IMAGES = {
  hero: 'https://images.pexels.com/photos/271649/pexels-photo-271649.jpeg?auto=compress&cs=tinysrgb&w=1920',
  story: 'https://images.pexels.com/photos/38213860/pexels-photo-38213860.jpeg?auto=compress&cs=tinysrgb&w=900',
  cat1: 'https://images.pexels.com/photos/29383227/pexels-photo-29383227.jpeg?auto=compress&cs=tinysrgb&w=700',
  cat2: 'https://images.pexels.com/photos/35401721/pexels-photo-35401721.jpeg?auto=compress&cs=tinysrgb&w=700',
  cat3: 'https://images.pexels.com/photos/30183849/pexels-photo-30183849.jpeg?auto=compress&cs=tinysrgb&w=700',
  cat4: 'https://images.pexels.com/photos/37209161/pexels-photo-37209161.jpeg?auto=compress&cs=tinysrgb&w=700',
  prod1: 'https://images.pexels.com/photos/29383227/pexels-photo-29383227.jpeg?auto=compress&cs=tinysrgb&w=600',
  prod2: 'https://images.pexels.com/photos/35401721/pexels-photo-35401721.jpeg?auto=compress&cs=tinysrgb&w=600',
  prod3: 'https://images.pexels.com/photos/30183849/pexels-photo-30183849.jpeg?auto=compress&cs=tinysrgb&w=600',
  prod4: 'https://images.pexels.com/photos/37209161/pexels-photo-37209161.jpeg?auto=compress&cs=tinysrgb&w=600',
  prod5: 'https://images.pexels.com/photos/5461586/pexels-photo-5461586.jpeg?auto=compress&cs=tinysrgb&w=600',
  prod6: 'https://images.pexels.com/photos/36353283/pexels-photo-36353283.png?auto=compress&cs=tinysrgb&w=600',
  gallery1: 'https://images.pexels.com/photos/271649/pexels-photo-271649.jpeg?auto=compress&cs=tinysrgb&w=700',
  gallery2: 'https://images.pexels.com/photos/38213860/pexels-photo-38213860.jpeg?auto=compress&cs=tinysrgb&w=700',
  gallery3: 'https://images.pexels.com/photos/35680940/pexels-photo-35680940.jpeg?auto=compress&cs=tinysrgb&w=700',
  gallery4: 'https://images.pexels.com/photos/37252639/pexels-photo-37252639.jpeg?auto=compress&cs=tinysrgb&w=700',
  gallery5: 'https://images.pexels.com/photos/29350087/pexels-photo-29350087.jpeg?auto=compress&cs=tinysrgb&w=700',
  gallery6: 'https://images.pexels.com/photos/96418/pexels-photo-96418.jpeg?auto=compress&cs=tinysrgb&w=700',
  cta: 'https://images.pexels.com/photos/271649/pexels-photo-271649.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

export const SOFA10_MARQUEE = [
  '侘寂 Wabi-Sabi',
  '寂静 Stillness',
  '素朴 Simplicity',
  '自然 Natural',
  '不完全 Imperfect',
  '余白 Ma — Space',
  '材质 Material',
  '时光 Patina',
  '禅 Zen',
  '和 Wa — Harmony',
];

export const SOFA10_COLLECTIONS = [
  {
    title: 'Sumi Series',
    tagline: 'Mực · Charcoal · Linen',
    description: 'Đen mực, linen thô, sự tĩnh lặng. Cho không gian thiền định.',
    image: SOFA10_IMAGES.cat1,
    count: '8 mẫu',
  },
  {
    title: 'Tsuchi Series',
    tagline: 'Đất · Earth · Cotton',
    description: 'Tone đất ấm, cotton thô. Ấm áp và khiêm nhường.',
    image: SOFA10_IMAGES.cat2,
    count: '7 mẫu',
  },
  {
    title: 'Kami Series',
    tagline: 'Giấy · Paper · Bouclé',
    description: 'Trắng giấy, bouclé mộc. Tinh khiết và tối giản.',
    image: SOFA10_IMAGES.cat3,
    count: '6 mẫu',
  },
  {
    title: 'Ki Series',
    tagline: 'Gỗ · Wood · Wool',
    description: 'Gỗ tự nhiên, wool len. Ấm và bền như thời gian.',
    image: SOFA10_IMAGES.cat4,
    count: '5 mẫu',
  },
];

export const SOFA10_PRODUCTS = [
  {
    name: 'Sofa Sumi Zaisu',
    category: 'Sumi Series',
    price: 16500000,
    oldPrice: 21000000,
    rating: 4.9,
    reviews: 58,
    badge: 'Limited',
    image: SOFA10_IMAGES.prod1,
    material: 'Linen thô · Gỗ sồi đen',
    colors: ['#2B2B2B', '#3E3E3E', '#8C8275'],
  },
  {
    name: 'Sofa Tsuchi Low',
    category: 'Tsuchi Series',
    price: 12900000,
    oldPrice: 16500000,
    rating: 4.8,
    reviews: 72,
    badge: '-22%',
    image: SOFA10_IMAGES.prod2,
    material: 'Cotton thô · Gỗ keo',
    colors: ['#9B7B4F', '#C4A878', '#D6CDB8'],
  },
  {
    name: 'Sofa Kami Minimal',
    category: 'Kami Series',
    price: 14500000,
    oldPrice: 18500000,
    rating: 5.0,
    reviews: 64,
    badge: 'Mới',
    image: SOFA10_IMAGES.prod3,
    material: 'Bouclé mộc · Gỗ sồi',
    colors: ['#FAF7F2', '#F5F1EA', '#E8E0D0'],
  },
  {
    name: 'Sofa Ki Woody',
    category: 'Ki Series',
    price: 18900000,
    oldPrice: 24000000,
    rating: 4.9,
    reviews: 45,
    badge: 'Limited',
    image: SOFA10_IMAGES.prod4,
    material: 'Wool len · Gỗ óc chó',
    colors: ['#5C6B4A', '#9B7B4F', '#A0623E'],
  },
  {
    name: 'Sofa Tatami Modern',
    category: 'Sumi Series',
    price: 11500000,
    oldPrice: 14800000,
    rating: 4.8,
    reviews: 88,
    badge: 'Mới',
    image: SOFA10_IMAGES.prod5,
    material: 'Linen · Gỗ tần bì',
    colors: ['#D6CDB8', '#B5AC9E', '#8C8275'],
  },
  {
    name: 'Sofa Chashitsu',
    category: 'Tsuchi Series',
    price: 17500000,
    oldPrice: 22000000,
    rating: 5.0,
    reviews: 52,
    badge: 'Premium',
    image: SOFA10_IMAGES.prod6,
    material: 'Cotton blend · Gỗ sồi',
    colors: ['#9B7B4F', '#5C6B4A', '#2B2B2B'],
  },
];

export const SOFA10_FEATURES = [
  {
    title: 'Linen Thô Tự Nhiên',
    description: 'Linen dệt thô, vân không đều — vẻ đẹp của sự không hoàn hảo. Thoáng khí, bền bỉ.',
    icon: 'solar:leaf-bold-duotone',
  },
  {
    title: 'Gỗ Tự Nhiên Không Phủ',
    description: 'Gỗ sồi, óc chó, keo — giữ vân gỗ tự nhiên. Sơn dầu thực vật, không hóa chất.',
    icon: 'solar:tree-bold-duotone',
  },
  {
    title: 'Bouclé Mộc Mạc',
    description: 'Bouclé bề mặt gồ ghề tự nhiên — sờ vào là thấy thời gian. Dễ vệ sinh, bền bỉ.',
    icon: 'solar:cloud-bold-duotone',
  },
  {
    title: 'Giao Hàng 72h',
    description: 'Giao 72h, lắp đặt miễn phí. Đổi trả 60 ngày. Bảo trì làm mới trọn đời.',
    icon: 'solar:delivery-bold-duotone',
  },
];

export const SOFA10_STATS = [
  { value: 26, suffix: ' mẫu', label: 'Wabi-sabi design' },
  { value: 30, suffix: 'k+', label: 'Không gian tĩnh' },
  { value: 72, suffix: 'h', label: 'Giao hàng' },
  { value: 12, suffix: ' năm', label: 'Bảo hành gỗ' },
];

export const SOFA10_STEPS = [
  {
    number: '一',
    title: 'Chọn Vật Liệu',
    description: 'Linen thô, cotton, bouclé, wool. Mỗi chất liệu mang một cảm giác và patina riêng.',
    icon: 'solar:leaf-bold-duotone',
  },
  {
    number: '二',
    title: 'Chọn Màu',
    description: 'Mực, đất, giấy, gỗ. Tone trầm và khiêm nhường — đẹp hơn theo thời gian.',
    icon: 'solar:palette-bold-duotone',
  },
  {
    number: '三',
    title: 'Chọn Kích Thước',
    description: 'Thấp, vừa, hoặc đóng riêng. Sofa wabi-sabi thường thấp và rộng — gần đất.',
    icon: 'solar:scale-bold-duotone',
  },
  {
    number: '四',
    title: 'Giao & Lắp Đặt',
    description: 'Giao 72h, lắp đặt miễn phí. Đổi trả 60 ngày. Bảo trì làm mới trọn đời.',
    icon: 'solar:delivery-bold-duotone',
  },
];

export const SOFA10_GALLERY = [
  { image: SOFA10_IMAGES.gallery1, title: 'Tea Room Tokyo', tag: 'Sumi' },
  { image: SOFA10_IMAGES.gallery2, title: 'Tatami Suite', tag: 'Kami' },
  { image: SOFA10_IMAGES.gallery3, title: 'Zen Corner', tag: 'Tsuchi' },
  { image: SOFA10_IMAGES.gallery4, title: 'Chashitsu', tag: 'Ki' },
  { image: SOFA10_IMAGES.gallery5, title: 'Wabi Studio', tag: 'Sumi' },
  { image: SOFA10_IMAGES.gallery6, title: 'Ryokan Room', tag: 'Tsuchi' },
];

export const SOFA10_TESTIMONIALS = [
  {
    name: 'Yuki Tanaka',
    role: 'Tea master',
    rating: 5,
    content:
      'Sofa Sumi Zaisu trong phòng trà của tôi. Linen thô, đen mực, thấp và yên — hoàn hảo cho không gian chashitsu. Tĩnh tại.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    name: 'Linh Đỗ',
    role: 'Interior designer',
    rating: 5,
    content:
      'Tôi chọn sofa10 cho mọi dự án wabi-sabi. Vật liệu mộc, tone trầm, sự không hoàn hảo đẹp đẽ — khách hàng đều cảm động.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    name: 'Hiroshi Sato',
    role: 'Architect',
    rating: 5,
    content:
      'Sofa Kami Minimal cho căn hộ Tokyo. Bouclé mộc, trắng giấy, tối giản tuyệt đối — "ma" (khoảng trống) trong thiết kế.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  },
  {
    name: 'Ngọc Hân',
    role: 'Yoga studio owner',
    rating: 5,
    content:
      'Sofa Tsuchi Low cho studio yoga. Cotton thô, tone đất, ngồi sát sàn — học viên đều cảm thấy bình an hơn.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
];

export const SOFA10_FAQS = [
  {
    question: 'Wabi-sabi là gì?',
    answer:
      'Wabi-sabi (侘寂) là thẩm mỹ Nhật Bản tìm vẻ đẹp trong sự không hoàn hảo, mộc mạc, và tạm thời. Sofa wabi-sabi dùng vật liệu thô, tone trầm, và để lại dấu vết thời gian.',
  },
  {
    question: 'Linen thô có khó chăm sóc không?',
    answer:
      'Không. Linen thô càng giặt càng mềm và đẹp. Hơi nhăn là đặc tính được yêu thích — nó thể hiện "wabi" (vẻ đẹp mộc mạc). Giặt máy 30°C, phơi bóng râm.',
  },
  {
    question: 'Sofa thấp có thoải mái không?',
    answer:
      'Sofa wabi-sabi thường thấp (mặt ngồi 30-35cm) để gần sàn — tạo cảm giác ổn định và bình an. Nếu quen sofa cao, cần 1-2 tuần để thích nghi.',
  },
  {
    question: 'Gỗ không phủ có bị ố không?',
    answer:
      'Gỗ được sơn dầu thực vật bảo vệ nhưng vẫn để vân gỗ tự nhiên. Dấu vết sử dụng (patina) là đặc tính wabi-sabi — càng dùng càng đẹp.',
  },
  {
    question: 'Bảo hành và đổi trả thế nào?',
    answer:
      'Bảo hành 12 năm cho khung gỗ và đệm. Đổi trả 60 ngày. Bảo trì làm mới bọc và dầu gỗ với chi phí ưu đãi trọn đời.',
  },
];

export const SOFA10_PROMOS = [
  { label: '72h Ship', text: 'Giao hàng', icon: 'solar:delivery-bold-duotone' },
  { label: '12 năm', text: 'Bảo hành gỗ', icon: 'solar:shield-check-bold-duotone' },
  { label: '60 ngày', text: 'Đổi trả', icon: 'solar:hand-stars-bold-duotone' },
  { label: '0% APR', text: 'Trả góp 6 tháng', icon: 'solar:wallet-bold-duotone' },
];
