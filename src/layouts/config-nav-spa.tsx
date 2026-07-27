import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const spaNavData = [
  { title: 'Trang chủ', path: '/', icon: <Iconify width={22} icon="solar:home-2-bold-duotone" /> },
  {
    title: 'Dịch vụ',
    path: '/#services',
    icon: <Iconify width={22} icon="solar:leaf-bold-duotone" />,
  },
  {
    title: 'Gói ưu đãi',
    path: '/#packages',
    icon: <Iconify width={22} icon="solar:tag-price-bold-duotone" />,
  },
  {
    title: 'Đánh giá',
    path: '/#testimonials',
    icon: <Iconify width={22} icon="solar:star-bold-duotone" />,
  },
  {
    title: 'Liên hệ',
    path: paths.contact,
    icon: <Iconify width={22} icon="solar:phone-bold-duotone" />,
  },
];
