// ----------------------------------------------------------------------

export const SOFA_IMAGES = {
  hero: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1920',
  about: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=900',
  collection1:
    'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=700',
  collection2:
    'https://images.pexels.com/photos/6444/pencil-typography-keys-plans.jpg?auto=compress&cs=tinysrgb&w=700',
  collection3:
    'https://images.pexels.com/photos/164877/pexels-photo-164877.jpeg?auto=compress&cs=tinysrgb&w=700',
  product1:
    'https://images.pexels.com/photos/276624/pexels-photo-276624.jpeg?auto=compress&cs=tinysrgb&w=600',
  product2:
    'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=600',
  product3:
    'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=600',
  product4:
    'https://images.pexels.com/photos/675849/pexels-photo-675849.jpeg?auto=compress&cs=tinysrgb&w=600',
  product5:
    'https://images.pexels.com/photos/691410/pexels-photo-691410.jpeg?auto=compress&cs=tinysrgb&w=600',
  product6:
    'https://images.pexels.com/photos/164877/pexels-photo-164877.jpeg?auto=compress&cs=tinysrgb&w=600',
  gallery1:
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=700',
  gallery2:
    'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=700',
  gallery3:
    'https://images.pexels.com/photos/6444/pencil-typography-keys-plans.jpg?auto=compress&cs=tinysrgb&w=700',
  cta: 'https://images.pexels.com/photos/1660797/pexels-photo-1660797.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

export const SOFA_COLLECTIONS = [
  {
    title: 'Sofa Hiện Đại',
    description: 'Đường nét tinh tế, tối giản — dành cho không gian sống đương đại.',
    image: SOFA_IMAGES.collection1,
    count: '24+ mẫu',
  },
  {
    title: 'Sofa Cổ Điển',
    description: 'Hoạ tiết sang trọng, chất liệu da bò cao cấp — đẳng cấp vương giả.',
    image: SOFA_IMAGES.collection2,
    count: '18+ mẫu',
  },
  {
    title: 'Sofa Góc',
    description: 'Tiện dụng cho phòng khách rộng, tối ưu hoá góc ngồi gia đình.',
    image: SOFA_IMAGES.collection3,
    count: '32+ mẫu',
  },
];

export const SOFA_PRODUCTS = [
  {
    name: 'Sofa Milano 3 Chỗ',
    category: 'Sofa Hiện Đại',
    price: 12900000,
    oldPrice: 16900000,
    rating: 4.9,
    tag: 'Bán chạy',
    image: SOFA_IMAGES.product1,
    colors: ['#8D6E63', '#37474F', '#D7CCC8'],
  },
  {
    name: 'Sofa Toscana Da Bò',
    category: 'Sofa Cổ Điển',
    price: 24500000,
    oldPrice: 32000000,
    rating: 5.0,
    tag: 'Mới',
    image: SOFA_IMAGES.product2,
    colors: ['#3E2723', '#5D4037', '#8D6E63'],
  },
  {
    name: 'Sofa Góc Verona',
    category: 'Sofa Góc',
    price: 18900000,
    oldPrice: 23900000,
    rating: 4.8,
    tag: 'Giảm 20%',
    image: SOFA_IMAGES.product3,
    colors: ['#455A64', '#607D8B', '#90A4AE'],
  },
  {
    name: 'Sofa Napoli 2 Chỗ',
    category: 'Sofa Hiện Đại',
    price: 9800000,
    oldPrice: 12500000,
    rating: 4.7,
    tag: 'Bán chạy',
    image: SOFA_IMAGES.product4,
    colors: ['#A1887F', '#BCAAA4', '#D7CCC8'],
  },
  {
    name: 'Sofa Firenze Tròn',
    category: 'Sofa Cổ Điển',
    price: 21500000,
    oldPrice: 26800000,
    rating: 4.9,
    tag: 'Mới',
    image: SOFA_IMAGES.product5,
    colors: ['#4E342E', '#6D4C41', '#8D6E63'],
  },
  {
    name: 'Sofa Góc Capri',
    category: 'Sofa Góc',
    price: 22900000,
    oldPrice: 28900000,
    rating: 5.0,
    tag: 'Giảm 20%',
    image: SOFA_IMAGES.product6,
    colors: ['#37474F', '#546E7A', '#78909C'],
  },
];

export const SOFA_FEATURES = [
  {
    title: 'Chất Liệu Cao Cấp',
    description: 'Da bò thật nhập khẩu Ý, vải linen cao cấp và khung gỗ sồi nguyên khối.',
    icon: 'solar:shield-check-bold-duotone',
  },
  {
    title: 'Bảo Hành 5 Năm',
    description: 'Bảo hành chính hãng 5 năm, bảo trì trọn đời cho mọi sản phẩm sofa.',
    icon: 'solar:medal-ribbon-star-bold-duotone',
  },
  {
    title: 'Giao Hàng Toàn Quốc',
    description: 'Miễn phí giao hàng và lắp đặt tại nhà trên 63 tỉnh thành Việt Nam.',
    icon: 'solar:delivery-bold-duotone',
  },
  {
    title: 'Đổi Trả 30 Ngày',
    description: 'Không vừa ý? Đổi trả trong 30 ngày, hoàn tiền 100% — không lý do.',
    icon: 'solar:refresh-circle-bold-duotone',
  },
];

export const SOFA_TESTIMONIALS = [
  {
    name: 'Nguyễn Minh Anh',
    role: 'Nội thất gia đình',
    rating: 5,
    content:
      'Sofa Milano đẹp xuất sắc, màu sắc đúng như hình. Đệm ngồi êm, đường may tỉ mỉ. Phòng khách nhà tôi bỗng sang trọng hẳn!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    name: 'Trần Hoàng Long',
    role: 'Kiến trúc sư',
    rating: 5,
    content:
      'Tôi thường giới thiệu thương hiệu này cho khách hàng. Chất liệu da bò thật, độ bền cao và dịch vụ hậu mãi rất chuyên nghiệp.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    name: 'Lê Thu Hà',
    role: 'Khách hàng VIP',
    rating: 5,
    content:
      'Sofa góc Verona hoàn hảo cho phòng khách rộng. Lắp đặt nhanh gọn, nhân viên nhiệt tình. Đáng đồng tiền bát gạo!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
  {
    name: 'Phạm Quốc Bảo',
    role: 'Doanh nhân',
    rating: 5,
    content:
      'Sofa Toscana da bò mang lại vẻ đẹp sang trọng cho văn phòng công ty. Khách đến đều khen ngợi. Sẽ mua thêm cho phòng họp.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  },
];

export const SOFA_FAQS = [
  {
    question: 'Sofa có thể đặt kích thước theo yêu cầu không?',
    answer:
      'Có. Chúng tôi nhận đóng sofa theo kích thước, màu sắc và chất liệu theo yêu cầu riêng của bạn. Thời gian hoàn thành 7-14 ngày làm việc.',
  },
  {
    question: 'Chất liệu sofa có an toàn cho sức khoẻ không?',
    answer:
      'Tất cả sản phẩm sử dụng chất liệu đạt chuẩn quốc tế: da bò thật, vải linen không formaldehyde, mút bọc cao cấp chống cháy.',
  },
  {
    question: 'Chính sách giao hàng như thế nào?',
    answer:
      'Miễn phí giao hàng và lắp đặt trong nội thành. Ngoại thành và tỉnh xa tính phí theo khoảng cách, thời gian 2-5 ngày làm việc.',
  },
  {
    question: 'Tôi có thể đổi trả sofa nếu không ưng ý?',
    answer:
      'Bạn có 30 ngày để đổi trả sản phẩm (áp dụng sản phẩm tiêu chuẩn, không áp dụng sofa đặt riêng). Hoàn tiền 100% nếu sản phẩm còn nguyên trạng.',
  },
  {
    question: 'Bảo hành có bao gồm đệm và vải bọc không?',
    answer:
      'Bảo hành 5 năm cho khung gỗ và cơ cấu, 3 năm cho đệm và vải bọc. Bảo trì làm sạch, thay lớp bọc trọn đời với chi phí ưu đãi.',
  },
];

export const SOFA_STEPS = [
  {
    title: 'Chọn Mẫu',
    description: 'Duyệt bộ sưu tập và chọn sofa phù hợp phong cách nhà bạn.',
    icon: 'solar:gallery-bold-duotone',
  },
  {
    title: 'Tư Vấn',
    description: 'Chuyên gia nội thất đến tận nhà đo đạc và tư vấn miễn phí.',
    icon: 'solar:chat-round-dots-bold-duotone',
  },
  {
    title: 'Sản Xuất',
    description: 'Sofa được sản xuất thủ công bởi nghệ nhân lành nghề.',
    icon: 'solar:hammer-bold-duotone',
  },
  {
    title: 'Giao Lắp',
    description: 'Giao hàng và lắp đặt tận nhà, kiểm tra chất lượng trước khi bàn giao.',
    icon: 'solar:delivery-bold-duotone',
  },
];
