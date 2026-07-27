// ----------------------------------------------------------------------

export const SPA_IMAGES = {
  hero: 'https://images.unsplash.com/photo-1540555700479-4be289fbecef?w=1920&q=80',
  about: 'https://plus.unsplash.com/premium_photo-1690388930694-b8f5afb3c5d0?w=800&q=80',
  service1: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80',
  service2: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
  service3: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80',
  service4: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&q=80',
  gallery1: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&q=80',
  gallery2: 'https://plus.unsplash.com/premium_photo-1661723420804-00b2984d63d7?w=600&q=80',
  gallery3: 'https://plus.unsplash.com/premium_photo-1683133898135-e48e3c6743c5?w=600&q=80',
  gallery4: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80',
  booking: 'https://plus.unsplash.com/premium_photo-1664049362569-e65216ceb8ba?w=1200&q=80',
};

export const SPA_SERVICES = [
  {
    title: 'Massage Trị Liệu',
    description:
      'Massage Thái, Shiatsu và đá nóng giúp thư giãn cơ bắp, cải thiện tuần hoàn và giảm căng thẳng.',
    icon: 'solar:hand-stars-bold-duotone',
    image: SPA_IMAGES.service1,
    duration: '60 - 90 phút',
  },
  {
    title: 'Chăm Sóc Da Mặt',
    description:
      'Liệu trình facial chuyên sâu với mỹ phẩm organic, phù hợp mọi loại da và mang lại làn da rạng rỡ.',
    icon: 'solar:face-scan-circle-bold-duotone',
    image: SPA_IMAGES.service2,
    duration: '45 - 75 phút',
  },
  {
    title: 'Liệu Pháp Body',
    description:
      'Tẩy tế bào chết toàn thân, body wrap và detox giúp làn da mềm mại, săn chắc và tràn đầy năng lượng.',
    icon: 'solar:body-bold-duotone',
    image: SPA_IMAGES.service3,
    duration: '90 - 120 phút',
  },
  {
    title: 'Aromatherapy',
    description:
      'Tinh dầu thiên nhiên cao cấp kết hợp liệu pháp hương thơm, cân bằng cơ thể và tinh thần.',
    icon: 'solar:leaf-bold-duotone',
    image: SPA_IMAGES.service4,
    duration: '60 phút',
  },
];

export const SPA_AMENITIES = [
  {
    title: 'Phòng Xông Hơi',
    description: 'Xông hơi khô và ướt hiện đại, giúp thải độc và thư giãn sâu.',
    icon: 'solar:bath-bold-duotone',
  },
  {
    title: 'Bể Jacuzzi',
    description: 'Không gian thủy liệu riêng tư với nước ấm và tinh dầu thư giãn.',
    icon: 'solar:water-sun-bold-duotone',
  },
  {
    title: 'Yoga & Thiền',
    description: 'Lớp yoga và thiền định hàng ngày trong không gian yên tĩnh.',
    icon: 'solar:meditation-round-bold-duotone',
  },
  {
    title: 'Sản Phẩm Organic',
    description: '100% nguyên liệu tự nhiên, không paraben, thân thiện môi trường.',
    icon: 'solar:leaf-bold-duotone',
  },
];

export const SPA_PACKAGES = [
  {
    name: 'Gói Thư Giãn',
    price: 890000,
    caption: 'Dành cho người mới bắt đầu',
    popular: false,
    features: [
      'Massage body 60 phút',
      'Xông hơi 30 phút',
      'Trà thảo mộc miễn phí',
      'Khăn lạnh aromatherapy',
    ],
  },
  {
    name: 'Gói Tái Tạo',
    price: 1590000,
    caption: 'Lựa chọn phổ biến nhất',
    popular: true,
    features: [
      'Massage body 90 phút',
      'Facial chăm sóc da 60 phút',
      'Body scrub toàn thân',
      'Jacuzzi 45 phút',
      'Đồ uống detox miễn phí',
    ],
  },
  {
    name: 'Gói Premium',
    price: 2890000,
    caption: 'Trải nghiệm hoàn hảo',
    popular: false,
    features: [
      'Liệu trình body 120 phút',
      'Facial cao cấp 90 phút',
      'Aromatherapy riêng tư',
      'Phòng VIP riêng biệt',
      'Bữa trưa healthy',
      'Quà tặng sản phẩm organic',
    ],
  },
];

export const SPA_TESTIMONIALS = [
  {
    name: 'Nguyễn Minh Anh',
    role: 'Doanh nhân',
    rating: 5,
    content:
      'Serenity Spa là nơi tôi tìm thấy sự bình yên giữa cuộc sống bận rộn. Dịch vụ massage tuyệt vời, nhân viên chuyên nghiệp và không gian cực kỳ thư giãn.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    name: 'Trần Hoàng Long',
    role: 'Kỹ sư phần mềm',
    rating: 5,
    content:
      'Gói Tái Tạo thực sự đáng giá. Sau buổi trị liệu, cơ thể nhẹ nhõm và tinh thần sảng khoái. Chắc chắn sẽ quay lại!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    name: 'Lê Thu Hà',
    role: 'Giáo viên',
    rating: 5,
    content:
      'Facial organic ở đây làm da tôi sáng mịn rõ rệt. Không gian spa sang trọng, sạch sẽ và rất riêng tư. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
  {
    name: 'Phạm Quốc Bảo',
    role: 'Bác sĩ',
    rating: 5,
    content:
      'Tôi thường xuyên giới thiệu bệnh nhân đến Serenity Spa để giảm stress. Chất lượng dịch vụ luôn ổn định và đáng tin cậy.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  },
];

export const SPA_FAQS = [
  {
    question: 'Tôi cần đặt lịch trước bao lâu?',
    answer:
      'Chúng tôi khuyến khích đặt lịch trước ít nhất 24 giờ, đặc biệt vào cuối tuần và dịp lễ. Bạn có thể đặt online hoặc gọi hotline.',
  },
  {
    question: 'Spa có phù hợp cho phụ nữ mang thai không?',
    answer:
      'Có, chúng tôi có liệu trình massage riêng cho bà bầu từ tuần thứ 13 trở đi. Vui lòng thông báo khi đặt lịch để được tư vấn phù hợp.',
  },
  {
    question: 'Tôi nên đến trước giờ hẹn bao lâu?',
    answer:
      'Vui lòng đến trước 15 phút để làm thủ tục, thay đồ và thư giãn trong khu vực lounge trước khi bắt đầu liệu trình.',
  },
  {
    question: 'Chính sách hủy lịch như thế nào?',
    answer:
      'Hủy miễn phí trước 12 giờ. Hủy trong vòng 12 giờ sẽ tính phí 50%. Không đến mà không thông báo sẽ mất toàn bộ tiền cọc.',
  },
  {
    question: 'Spa có chỗ đậu xe không?',
    answer:
      'Có bãi đậu xe miễn phí cho khách hàng tại tầng hầm tòa nhà. Nhân viên lễ tân sẽ hướng dẫn chi tiết khi bạn đến.',
  },
];
