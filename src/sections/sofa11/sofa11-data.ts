// SOFA11 — NEON POP — retro-futurism, Memphis 80s, bold, playful, high-contrast
// ----------------------------------------------------------------------

export const SOFA11_COLORS = {
  void: '#12002E',
  voidDeep: '#0A0018',
  grape: '#2A0A5E',
  magenta: '#FF2E88',
  magentaSoft: '#FF7AB8',
  lime: '#C6FF00',
  cyan: '#00E5FF',
  tangerine: '#FF8A00',
  cream: '#FFF6E9',
  white: '#FFFFFF',
};

export const SOFA11_IMAGES = {
  hero: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600',
  story: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=900',
  cat1: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=700',
  cat2: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=700',
  cat3: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=700',
  cat4: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=700',
  prod1: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=600',
  prod2: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600',
  prod3: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=600',
  prod4: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600',
  prod5: 'https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&w=600',
  prod6: 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=600',
  gallery1: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=700',
  gallery2: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=700',
  gallery3: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=700',
  gallery4: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=700',
  gallery5: 'https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&w=700',
  gallery6: 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=700',
  cta: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

export const SOFA11_PROMOS = [
  { icon: 'solar:bolt-circle-bold', label: 'Giao 48h', text: 'Nội thành miễn phí' },
  { icon: 'solar:magic-stick-3-bold', label: '200+ màu vải', text: 'Tự phối theo ý bạn' },
  { icon: 'solar:shield-star-bold', label: 'Bảo hành 10 năm', text: 'Khung & đệm' },
];

export const SOFA11_MARQUEE = [
  'POP IT',
  'MAKE IT LOUD',
  'COLOR THERAPY',
  'NO BEIGE ALLOWED',
  'SIT DIFFERENT',
  'RETRO FUTURE',
  'MAXIMALIST',
  'GOOD VIBES ONLY',
];

export const SOFA11_COLLECTIONS = [
  {
    title: 'Bubblegum',
    tagline: 'Hồng kẹo · Bo tròn · Velvet',
    description: 'Đường cong bong bóng, nhung hồng chói. Dành cho người không sợ nổi bật.',
    image: SOFA11_IMAGES.cat1,
    count: '9 mẫu',
    accent: SOFA11_COLORS.magenta,
  },
  {
    title: 'Acid Lime',
    tagline: 'Xanh chanh · Module · Corduroy',
    description: 'Module ghép tự do, vải nhung tăm xanh chanh cực cháy.',
    image: SOFA11_IMAGES.cat2,
    count: '7 mẫu',
    accent: SOFA11_COLORS.lime,
  },
  {
    title: 'Cyber Blue',
    tagline: 'Cyan · Low-seat · Leather',
    description: 'Da bóng phản quang, dáng thấp kiểu phi thuyền thập niên 80.',
    image: SOFA11_IMAGES.cat3,
    count: '6 mẫu',
    accent: SOFA11_COLORS.cyan,
  },
  {
    title: 'Sunset Orange',
    tagline: 'Cam hoàng hôn · Puffy · Bouclé',
    description: 'Phồng như mây, ấm như hoàng hôn Miami. Ôm trọn buổi tối.',
    image: SOFA11_IMAGES.cat4,
    count: '8 mẫu',
    accent: SOFA11_COLORS.tangerine,
  },
];

export const SOFA11_PRODUCTS = [
  {
    name: 'Sofa Bubble Pop',
    category: 'Bubblegum',
    price: 18900000,
    oldPrice: 24500000,
    rating: 4.9,
    reviews: 132,
    badge: 'HOT',
    image: SOFA11_IMAGES.prod1,
    material: 'Nhung Ý · Khung sồi',
    colors: ['#FF2E88', '#FF7AB8', '#FF8A00'],
    accent: SOFA11_COLORS.magenta,
  },
  {
    name: 'Sofa Acid Module',
    category: 'Acid Lime',
    price: 22500000,
    oldPrice: 27900000,
    rating: 4.8,
    reviews: 98,
    badge: '-19%',
    image: SOFA11_IMAGES.prod2,
    material: 'Corduroy · Module 4 khối',
    colors: ['#C6FF00', '#00E5FF', '#FFF6E9'],
    accent: SOFA11_COLORS.lime,
  },
  {
    name: 'Sofa Cyber Low',
    category: 'Cyber Blue',
    price: 26900000,
    oldPrice: 32000000,
    rating: 5.0,
    reviews: 71,
    badge: 'MỚI',
    image: SOFA11_IMAGES.prod3,
    material: 'Da bóng · Chân crôm',
    colors: ['#00E5FF', '#12002E', '#FFFFFF'],
    accent: SOFA11_COLORS.cyan,
  },
  {
    name: 'Sofa Sunset Puffy',
    category: 'Sunset Orange',
    price: 20500000,
    oldPrice: 25500000,
    rating: 4.9,
    reviews: 145,
    badge: 'BÁN CHẠY',
    image: SOFA11_IMAGES.prod4,
    material: 'Bouclé dày · Đệm mây',
    colors: ['#FF8A00', '#FF2E88', '#FFF6E9'],
    accent: SOFA11_COLORS.tangerine,
  },
  {
    name: 'Sofa Disco Curve',
    category: 'Bubblegum',
    price: 29900000,
    oldPrice: 36000000,
    rating: 4.9,
    reviews: 62,
    badge: 'LIMITED',
    image: SOFA11_IMAGES.prod5,
    material: 'Nhung ánh kim · Cong 180°',
    colors: ['#FF2E88', '#C6FF00', '#12002E'],
    accent: SOFA11_COLORS.magentaSoft,
  },
  {
    name: 'Sofa Arcade Loveseat',
    category: 'Cyber Blue',
    price: 15900000,
    oldPrice: 19900000,
    rating: 4.7,
    reviews: 187,
    badge: '-20%',
    image: SOFA11_IMAGES.prod6,
    material: 'Vải tweed · 2 chỗ',
    colors: ['#00E5FF', '#FF8A00', '#C6FF00'],
    accent: SOFA11_COLORS.cyan,
  },
];

export const SOFA11_PLAYGROUND = [
  { name: 'Hot Magenta', hex: '#FF2E88', mood: 'Táo bạo · Tiệc tùng' },
  { name: 'Acid Lime', hex: '#C6FF00', mood: 'Tươi trẻ · Năng lượng' },
  { name: 'Cyber Cyan', hex: '#00E5FF', mood: 'Tương lai · Mát lạnh' },
  { name: 'Sunset Orange', hex: '#FF8A00', mood: 'Ấm áp · Hoài niệm' },
  { name: 'Grape Void', hex: '#2A0A5E', mood: 'Bí ẩn · Sang trọng' },
  { name: 'Cream Pop', hex: '#FFF6E9', mood: 'Trung tính · Dễ phối' },
];

export const SOFA11_STATS = [
  { value: 12800, suffix: '+', label: 'Phòng khách đã "lên màu"' },
  { value: 200, suffix: '+', label: 'Mã vải & màu tuỳ chọn' },
  { value: 48, suffix: 'h', label: 'Giao hàng siêu tốc' },
  { value: 10, suffix: ' năm', label: 'Bảo hành khung & đệm' },
];

export const SOFA11_STEPS = [
  {
    step: '01',
    title: 'Chọn dáng',
    description: 'Bo tròn, module, dáng thấp hay cong 180° — chọn hình khối bạn mê.',
    icon: 'solar:armchair-2-bold',
    accent: SOFA11_COLORS.magenta,
  },
  {
    step: '02',
    title: 'Quẹt màu',
    description: 'Hơn 200 mã vải. Phối tối đa 3 màu trên cùng một chiếc sofa.',
    icon: 'solar:palette-bold',
    accent: SOFA11_COLORS.lime,
  },
  {
    step: '03',
    title: 'Xem 3D',
    description: 'Chúng tôi dựng bản render trong 24h để bạn duyệt trước khi may.',
    icon: 'solar:cube-bold',
    accent: SOFA11_COLORS.cyan,
  },
  {
    step: '04',
    title: 'Bùng nổ',
    description: 'Giao lắp tận nơi trong 48h. Phòng khách của bạn đổi tông ngay.',
    icon: 'solar:bolt-circle-bold',
    accent: SOFA11_COLORS.tangerine,
  },
];

export const SOFA11_TESTIMONIALS = [
  {
    name: 'Trâm Anh',
    role: 'Stylist · TP.HCM',
    avatar: 'https://i.pravatar.cc/120?img=47',
    rating: 5,
    content:
      'Cả nhà tôi từng toàn tông be. Chiếc Bubble Pop màu magenta khiến khách đến chơi lần nào cũng phải chụp ảnh.',
    accent: SOFA11_COLORS.magenta,
  },
  {
    name: 'Duy Khang',
    role: 'Founder studio game',
    avatar: 'https://i.pravatar.cc/120?img=12',
    rating: 5,
    content:
      'Sofa Cyber Low hợp không gian setup RGB của tôi đến khó tin. Da bóng, dáng thấp, ngồi họp cả ngày vẫn êm.',
    accent: SOFA11_COLORS.cyan,
  },
  {
    name: 'Mai Linh',
    role: 'Chủ quán cafe · Đà Nẵng',
    avatar: 'https://i.pravatar.cc/120?img=32',
    rating: 5,
    content:
      'Đặt 6 bộ Acid Module cho quán. Khách check-in liên tục, doanh thu cuối tuần tăng thấy rõ.',
    accent: SOFA11_COLORS.lime,
  },
  {
    name: 'Hoàng Nam',
    role: 'Kiến trúc sư',
    avatar: 'https://i.pravatar.cc/120?img=59',
    rating: 5,
    content:
      'Render 3D trước khi may là điểm cộng lớn. Khách hàng của tôi duyệt phương án nhanh gấp đôi.',
    accent: SOFA11_COLORS.tangerine,
  },
];

export const SOFA11_FAQS = [
  {
    question: 'Màu chói vậy có bị lỗi mốt sau vài năm không?',
    answer:
      'Chúng tôi thiết kế theo hệ màu pop bền vững và cho phép thay áo bọc rời. Khi muốn đổi tông, bạn chỉ cần đặt bộ vỏ mới thay vì thay cả sofa.',
  },
  {
    question: 'Vải màu sáng có dễ bẩn không?',
    answer:
      'Toàn bộ vải đều phủ lớp chống thấm gốc nước, lau sạch nước ngọt hay cà phê trong 30 giây. Bộ vỏ tháo rời giặt máy được ở 30°C.',
  },
  {
    question: 'Tôi có thể phối nhiều màu trên một chiếc sofa?',
    answer:
      'Có. Bạn phối tối đa 3 màu: thân, đệm ngồi và gối tựa. Đội thiết kế sẽ gửi bản render 3D trong 24h để bạn duyệt.',
  },
  {
    question: 'Sofa module ghép được bao nhiêu kiểu?',
    answer:
      'Dòng Acid Module gồm 4 khối cơ bản, ghép được hơn 20 bố cục khác nhau: chữ L, chữ U, đảo giữa phòng hay tách rời thành ghế đơn.',
  },
  {
    question: 'Chính sách đổi trả thế nào?',
    answer:
      'Đổi trả trong 14 ngày nếu sản phẩm chưa qua sử dụng và giữ nguyên tem. Với hàng đặt màu riêng, chúng tôi hỗ trợ sửa chữa miễn phí trọn đời khung.',
  },
];

export const SOFA11_GALLERY = [
  { image: SOFA11_IMAGES.gallery1, caption: 'Penthouse Q2 · Bubble Pop', tag: 'Magenta' },
  { image: SOFA11_IMAGES.gallery2, caption: 'Studio Thảo Điền · Acid Module', tag: 'Lime' },
  { image: SOFA11_IMAGES.gallery3, caption: 'Loft Hà Nội · Cyber Low', tag: 'Cyan' },
  { image: SOFA11_IMAGES.gallery4, caption: 'Villa Đà Nẵng · Sunset Puffy', tag: 'Orange' },
  { image: SOFA11_IMAGES.gallery5, caption: 'Cafe Đà Lạt · Disco Curve', tag: 'Pop' },
  { image: SOFA11_IMAGES.gallery6, caption: 'Căn hộ Q7 · Arcade Loveseat', tag: 'Retro' },
];

// ----------------------------------------------------------------------

export function sofa11Alpha(hex: string, opacity: number) {
  const value = hex.replace('#', '');
  const full = value.length === 3 ? value.split('').map((c) => c + c).join('') : value;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
