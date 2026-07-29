import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const sofa6NavData = [
  { title: 'Trang chủ', path: '/sofa6', icon: <Iconify width={22} icon="solar:home-2-bold-duotone" /> },
  {
    title: 'Bộ sưu tập',
    path: '/sofa6#collections',
    icon: <Iconify width={22} icon="solar:leaf-bold-duotone" />,
  },
  {
    title: 'Sản phẩm',
    path: '/sofa6#products',
    icon: <Iconify width={22} icon="solar:armchair-bold-duotone" />,
  },
  {
    title: 'Chế tác',
    path: '/sofa6#craft',
    icon: <Iconify width={22} icon="solar:hand-stars-bold-duotone" />,
  },
  {
    title: 'Không gian',
    path: '/sofa6#gallery',
    icon: <Iconify width={22} icon="solar:gallery-bold-duotone" />,
  },
  {
    title: 'Đánh giá',
    path: '/sofa6#testimonials',
    icon: <Iconify width={22} icon="solar:star-bold-duotone" />,
  },
  {
    title: 'Liên hệ',
    path: paths.contact,
    icon: <Iconify width={22} icon="solar:phone-bold-duotone" />,
  },
];
