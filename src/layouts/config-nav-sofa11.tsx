import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const sofa11NavData = [
  { title: 'Trang chủ', path: '/sofa11', icon: <Iconify width={22} icon="solar:home-2-bold-duotone" /> },
  {
    title: 'Giới thiệu công ty',
    path: '/sofa11/about',
    icon: <Iconify width={22} icon="solar:info-circle-bold-duotone" />,
  },
  {
    title: 'Tất cả sản phẩm',
    path: '/sofa11/products',
    icon: <Iconify width={22} icon="solar:bag-check-bold-duotone" />,
  },
  {
    title: 'Bộ sưu tập',
    path: '/sofa11#collections',
    icon: <Iconify width={22} icon="solar:bolt-circle-bold-duotone" />,
  },
  {
    title: 'Sản phẩm',
    path: '/sofa11#products',
    icon: <Iconify width={22} icon="solar:armchair-bold-duotone" />,
  },
  {
    title: 'Phối màu',
    path: '/sofa11#playground',
    icon: <Iconify width={22} icon="solar:palette-bold-duotone" />,
  },
  {
    title: 'Không gian',
    path: '/sofa11#gallery',
    icon: <Iconify width={22} icon="solar:gallery-bold-duotone" />,
  },
  {
    title: 'Đánh giá',
    path: '/sofa11#testimonials',
    icon: <Iconify width={22} icon="solar:star-bold-duotone" />,
  },
  {
    title: 'Liên hệ',
    path: paths.contact,
    icon: <Iconify width={22} icon="solar:phone-bold-duotone" />,
  },
];
