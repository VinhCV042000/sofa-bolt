// SOFA12 — TERRA ARCH — sun-baked terracotta, organic arches, editorial serif, artisan warmth
// ----------------------------------------------------------------------

export const SOFA12_COLORS = {
  clay: '#B4552D',
  clayDeep: '#7A3318',
  ochre: '#D98E32',
  sand: '#F3E6D4',
  sandDeep: '#E5D2B8',
  ink: '#2B1B12',
  inkSoft: '#54382A',
  olive: '#6E7B4F',
  cream: '#FBF6EE',
  white: '#FFFFFF',
};

export function sofa12Alpha(hex: string, opacity: number) {
  const value = hex.replace('#', '');
  const r = parseInt(value.substring(0, 2), 16);
  const g = parseInt(value.substring(2, 4), 16);
  const b = parseInt(value.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export const SOFA12_IMAGES = {
  hero: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1400',
  story1:
    'https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&w=900',
  story2:
    'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=900',
  cat1: 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=800',
  cat2: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800',
  cat3: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
  prod1: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=700',
  prod2: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=700',
  prod3: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=700',
  prod4: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=700',
  prod5: 'https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&w=700',
  prod6: 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=700',
  gallery1:
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
  gallery2:
    'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
  gallery3:
    'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800',
  gallery4:
    'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800',
  gallery5:
    'https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&w=800',
  cta: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=1400',
};

export const SOFA12_PROMOS = [
  { icon: 'solar:hand-stars-bold-duotone', label: 'Đóng thủ công', text: '18 công đoạn tại xưởng' },
  { icon: 'solar:leaf-bold-duotone', label: 'Vật liệu tự nhiên', text: 'Gỗ FSC · vải lanh · len' },
  { icon: 'solar:calendar-mark-bold-duotone', label: 'Bảo hành 12 năm', text: 'Khung & đệm nệm' },
];

export const SOFA12_MARQUEE = [
  'ĐẤT NUNG',
  'THỦ CÔNG',
  'VẢI LANH THÔ',
  'GỖ TẦN BÌ',
  'ẤM & MỘC',
  'CHẬM MÀ CHẮC',
];

export const SOFA12_STORY = [
  {
    title: 'Bắt đầu từ đất',
    text: 'Bảng màu SOFA TERRA lấy từ đất nung Bát Tràng, cát sa mạc và nắng chiều — những sắc độ càng dùng càng đẹp.',
  },
  {
    title: 'Nắn theo vòm cong',
    text: 'Mỗi lưng ghế là một vòm cung được uốn tay, không góc cạnh, ôm trọn dáng ngồi và ánh sáng phòng khách.',
  },
  {
    title: 'Ở lại thật lâu',
    text: 'Khung gỗ tần bì mộng âm, đệm cao su thiên nhiên thay được từng lớp. Sofa để truyền lại, không để thay.',
  },
];

export const SOFA12_COLLECTIONS = [
  {
    title: 'Terra',
    tagline: 'Đất nung · Vải lanh thô',
    description: 'Vòm cong dày dặn, sắc đất nung ấm, hợp căn hộ nhiều nắng.',
    image: SOFA12_IMAGES.cat1,
    count: '8 mẫu',
    accent: SOFA12_COLORS.clay,
  },
  {
    title: 'Dune',
    tagline: 'Cát sáng · Bouclé',
    description: 'Bề mặt bouclé xoăn nhẹ, dáng thấp, dịu như đồi cát buổi sớm.',
    image: SOFA12_IMAGES.cat2,
    count: '6 mẫu',
    accent: SOFA12_COLORS.ochre,
  },
  {
    title: 'Olive Grove',
    tagline: 'Xanh ô liu · Nhung tăm',
    description: 'Tông xanh trầm cân bằng sắc đất, tay vịn tròn kiểu vườn Địa Trung Hải.',
    image: SOFA12_IMAGES.cat3,
    count: '5 mẫu',
    accent: SOFA12_COLORS.olive,
  },
];

export const SOFA12_PRODUCTS = [
  { name: 'Arco Terra 3 chỗ', fabric: 'Lanh thô · Đất nung', price: 28900000, oldPrice: 34500000, rating: 4.9, image: SOFA12_IMAGES.prod1, badge: 'Bán chạy' },
  { name: 'Dune Curve 2 chỗ', fabric: 'Bouclé · Cát sáng', price: 21500000, rating: 4.8, image: SOFA12_IMAGES.prod2 },
  { name: 'Olive Lounge', fabric: 'Nhung tăm · Ô liu', price: 24900000, rating: 4.9, image: SOFA12_IMAGES.prod3, badge: 'Mới' },
  { name: 'Adobe Modular L', fabric: 'Lanh pha · Nâu cháy', price: 39900000, oldPrice: 45000000, rating: 5.0, image: SOFA12_IMAGES.prod4 },
  { name: 'Sunset Daybed', fabric: 'Cotton dày · Hoàng thổ', price: 18900000, rating: 4.7, image: SOFA12_IMAGES.prod5 },
  { name: 'Clay Armchair', fabric: 'Len dệt · Gạch nung', price: 12500000, rating: 4.8, image: SOFA12_IMAGES.prod6, badge: 'Giới hạn' },
];

export const SOFA12_MATERIALS = [
  {
    name: 'Lanh thô Terra',
    swatch: SOFA12_COLORS.clay,
    detail: 'Sợi lanh Bỉ dệt thô, thoáng khí, lên màu đất nung ấm và bền dưới nắng.',
    specs: ['Chống mài mòn 40.000 vòng', 'Tháo giặt được', 'Kháng phai UV'],
  },
  {
    name: 'Bouclé Dune',
    swatch: SOFA12_COLORS.sandDeep,
    detail: 'Bề mặt xoăn mềm, giữ phom tốt, tông cát sáng làm rộng không gian nhỏ.',
    specs: ['Sợi tái chế 60%', 'Không xù lông', 'Ấm về mùa lạnh'],
  },
  {
    name: 'Nhung tăm Olive',
    swatch: SOFA12_COLORS.olive,
    detail: 'Nhung tăm dọc cổ điển, sắc ô liu trầm, phản sáng dịu vào buổi tối.',
    specs: ['Chống bám bụi', 'Dày 420gsm', 'Dễ vệ sinh khô'],
  },
  {
    name: 'Len dệt Ochre',
    swatch: SOFA12_COLORS.ochre,
    detail: 'Len pha cotton nhuộm thảo mộc, vân dệt nổi, càng dùng càng mềm.',
    specs: ['Nhuộm tự nhiên', 'Thoáng khí cao', 'Hợp nhà có trẻ nhỏ'],
  },
];

export const SOFA12_STATS = [
  { value: 18, suffix: '', label: 'Công đoạn thủ công mỗi ghế' },
  { value: 12, suffix: ' năm', label: 'Bảo hành khung & đệm' },
  { value: 6400, suffix: '+', label: 'Gia đình Việt đang dùng' },
  { value: 96, suffix: '%', label: 'Khách giới thiệu bạn bè' },
];

export const SOFA12_STEPS = [
  { no: '01', title: 'Đo & nghe', text: 'Kiến trúc sư tới nhà đo đạc, nghe thói quen ngồi của cả gia đình.' },
  { no: '02', title: 'Chọn chất', text: 'Bộ swatch 40 mã vải đất được gửi tận nơi để bạn xem dưới nắng nhà mình.' },
  { no: '03', title: 'Dựng phom', text: 'Khung gỗ tần bì mộng âm, thợ uốn vòm lưng bằng tay trong 9 ngày.' },
  { no: '04', title: 'Về nhà', text: 'Giao lắp trong 48h nội thành, kê dọn sạch sẽ, hướng dẫn bảo dưỡng.' },
];

export const SOFA12_GALLERY = [
  { image: SOFA12_IMAGES.gallery1, caption: 'Căn hộ Thảo Điền · Arco Terra' },
  { image: SOFA12_IMAGES.gallery2, caption: 'Nhà phố Đà Nẵng · Dune Curve' },
  { image: SOFA12_IMAGES.gallery3, caption: 'Studio Hà Nội · Olive Lounge' },
  { image: SOFA12_IMAGES.gallery4, caption: 'Villa Hội An · Adobe Modular' },
  { image: SOFA12_IMAGES.gallery5, caption: 'Penthouse Sài Gòn · Sunset Daybed' },
];

export const SOFA12_TESTIMONIALS = [
  {
    name: 'Nguyễn Hạ Vy',
    role: 'Kiến trúc sư · TP.HCM',
    quote:
      'Màu đất nung thật hơn ảnh rất nhiều. Vòm lưng ghế làm cả căn hộ mềm hẳn đi, khách tới ai cũng hỏi mua ở đâu.',
    accent: SOFA12_COLORS.clay,
  },
  {
    name: 'Trần Minh Quân',
    role: 'Chủ homestay · Hội An',
    quote:
      'Đặt 6 bộ cho homestay, sau 2 năm nắng gió miền Trung vải vẫn giữ màu. Đội thợ lắp đặt cực kỳ chỉn chu.',
    accent: SOFA12_COLORS.olive,
  },
  {
    name: 'Lê Thu Trang',
    role: 'Food stylist · Hà Nội',
    quote:
      'Bộ swatch gửi về nhà là điểm cộng lớn — tôi so màu dưới nắng ban công rồi mới chốt. Rất đáng tiền.',
    accent: SOFA12_COLORS.ochre,
  },
];

export const SOFA12_FAQS = [
  {
    question: 'Sofa màu đất có dễ bám bẩn không?',
    answer:
      'Tông đất nung và cát vốn giấu vết bẩn tốt hơn màu sáng. Toàn bộ vải đều phủ lớp chống thấm gốc nước, lau khăn ẩm là sạch, vỏ đệm tháo giặt được.',
  },
  {
    question: 'Tôi có thể đặt kích thước riêng không?',
    answer:
      'Có. Chiều dài, độ sâu lòng ghế và chiều cao tay vịn đều tuỳ chỉnh theo cm. Phụ phí đo may riêng khoảng 8–12% giá niêm yết.',
  },
  {
    question: 'Thời gian sản xuất bao lâu?',
    answer:
      'Mẫu có sẵn giao trong 48h nội thành. Hàng đặt riêng mất 18–24 ngày do khung gỗ cần thời gian ổn định và vòm lưng uốn tay.',
  },
  {
    question: 'Có xem thử tại showroom được không?',
    answer:
      'Showroom tại TP.HCM, Hà Nội và Đà Nẵng mở cửa 9h–20h. Bạn cũng có thể yêu cầu gửi bộ swatch 40 mã vải miễn phí về tận nhà.',
  },
  {
    question: 'Chính sách đổi trả thế nào?',
    answer:
      'Đổi trả trong 30 ngày nếu sofa lỗi kỹ thuật hoặc sai mô tả. Với hàng đặt riêng, chúng tôi hỗ trợ bọc lại vải miễn phí một lần trong năm đầu.',
  },
];
