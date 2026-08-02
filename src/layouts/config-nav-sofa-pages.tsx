import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

export const sofaPagesNavData = [
  { title: 'Trang chủ', path: '/', icon: <Iconify width={22} icon="solar:home-2-bold-duotone" /> },
  { title: 'Giới thiệu', path: paths.sofaAbout, icon: <Iconify width={22} icon="solar:info-circle-bold-duotone" /> },
  {
    title: 'Dịch vụ',
    path: paths.sofaServices,
    icon: <Iconify width={22} icon="solar:tools-bold-duotone" />,
    children: [
      { title: 'Tất cả dịch vụ', path: paths.sofaServices },
      { title: 'Thiết kế theo yêu cầu', path: '/services/custom-design' },
      { title: 'Sửa chữa & bảo trì', path: '/services/repair' },
      { title: 'Giặt & làm sạch', path: '/services/cleaning' },
      { title: 'Tư vấn nội thất', path: '/services/consultation' },
    ],
  },
  { title: 'Gói liệu trình', path: paths.sofaPackages, icon: <Iconify width={22} icon="solar:box-bold-duotone" /> },
  { title: 'Đào tạo', path: paths.sofaTraining, icon: <Iconify width={22} icon="solar:book-bold-duotone" /> },
  { title: 'Blog', path: paths.sofaBlog, icon: <Iconify width={22} icon="solar:pen-bold-duotone" /> },
  { title: 'Tuyển dụng', path: paths.sofaCareers, icon: <Iconify width={22} icon="solar:case-bold-duotone" /> },
  { title: 'Đặt lịch', path: paths.sofaBooking, icon: <Iconify width={22} icon="solar:calendar-bold-duotone" /> },
  {
    title: 'Ưu đãi',
    path: paths.sofaOffers,
    icon: <Iconify width={22} icon="solar:gift-bold-duotone" />,
    children: [
      { title: 'Gói ưu đãi', path: paths.sofaOffers },
      { title: 'Khuyến mãi', path: paths.sofaPromotions },
    ],
  },
  { title: 'Kết quả trước-sau', path: paths.sofaBeforeAfter, icon: <Iconify width={22} icon="solar:gallery-bold-duotone" /> },
  { title: 'Gallery', path: paths.sofaGallery, icon: <Iconify width={22} icon="solar:gallery-bold-duotone" /> },
  { title: 'Chi nhánh', path: paths.sofaBranches, icon: <Iconify width={22} icon="solar:map-point-bold-duotone" /> },
  { title: 'Cộng sự', path: paths.sofaPartners, icon: <Iconify width={22} icon="solar:hand-bold-duotone" /> },
  { title: 'FAQ', path: paths.sofaFaq, icon: <Iconify width={22} icon="solar:question-circle-bold-duotone" /> },
  { title: 'Feedback', path: paths.sofaFeedback, icon: <Iconify width={22} icon="solar:chat-bold-duotone" /> },
  { title: 'Chính sách', path: paths.sofaPolicy, icon: <Iconify width={22} icon="solar:document-bold-duotone" /> },
  { title: 'Tài khoản', path: paths.sofaAccount, icon: <Iconify width={22} icon="solar:user-bold-duotone" /> },
  { title: 'Liên hệ', path: '/sofa-contact', icon: <Iconify width={22} icon="solar:phone-bold-duotone" /> },
];
