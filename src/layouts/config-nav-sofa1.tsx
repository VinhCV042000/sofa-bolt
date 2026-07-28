import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const sofa1NavData = [
  { title: 'Trang chủ', path: '/sofa1', icon: <Iconify width={22} icon="solar:home-2-bold-duotone" /> },
  {
    title: 'Bộ sưu tập',
    path: '/sofa1#categories',
    icon: <Iconify width={22} icon="solar:archive-bold-duotone" />,
  },
  {
    title: 'Sản phẩm',
    path: '/sofa1#products',
    icon: <Iconify width={22} icon="solar:armchair-bold-duotone" />,
  },
  {
    title: 'Showroom',
    path: '/sofa1#gallery',
    icon: <Iconify width={22} icon="solar:gallery-bold-duotone" />,
  },
  {
    title: 'Đánh giá',
    path: '/sofa1#testimonials',
    icon: <Iconify width={22} icon="solar:star-bold-duotone" />,
  },
  {
    title: 'Liên hệ',
    path: paths.contact,
    icon: <Iconify width={22} icon="solar:phone-bold-duotone" />,
  },
];
