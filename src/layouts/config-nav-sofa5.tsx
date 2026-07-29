import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const sofa5NavData = [
  { title: 'Trang chủ', path: '/sofa5', icon: <Iconify width={22} icon="solar:home-2-bold-duotone" /> },
  {
    title: 'Bộ sưu tập',
    path: '/sofa5#collections',
    icon: <Iconify width={22} icon="solar:archive-bold-duotone" />,
  },
  {
    title: 'Sản phẩm',
    path: '/sofa5#products',
    icon: <Iconify width={22} icon="solar:armchair-bold-duotone" />,
  },
  {
    title: 'Không gian',
    path: '/sofa5#showcase',
    icon: <Iconify width={22} icon="solar:gallery-bold-duotone" />,
  },
  {
    title: 'Đánh giá',
    path: '/sofa5#testimonials',
    icon: <Iconify width={22} icon="solar:star-bold-duotone" />,
  },
  {
    title: 'Liên hệ',
    path: paths.contact,
    icon: <Iconify width={22} icon="solar:phone-bold-duotone" />,
  },
];
