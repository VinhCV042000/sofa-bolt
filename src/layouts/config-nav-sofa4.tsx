import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const sofa4NavData = [
  { title: 'Trang chủ', path: '/sofa4', icon: <Iconify width={22} icon="solar:home-2-bold-duotone" /> },
  {
    title: 'Sản phẩm',
    path: '/sofa4#products',
    icon: <Iconify width={22} icon="solar:armchair-bold-duotone" />,
  },
  {
    title: 'Đặc điểm',
    path: '/sofa4#features',
    icon: <Iconify width={22} icon="solar:palette-bold-duotone" />,
  },
  {
    title: 'Không gian',
    path: '/sofa4#gallery',
    icon: <Iconify width={22} icon="solar:gallery-bold-duotone" />,
  },
  {
    title: 'Đánh giá',
    path: '/sofa4#testimonials',
    icon: <Iconify width={22} icon="solar:star-bold-duotone" />,
  },
  {
    title: 'Liên hệ',
    path: paths.contact,
    icon: <Iconify width={22} icon="solar:phone-bold-duotone" />,
  },
];
