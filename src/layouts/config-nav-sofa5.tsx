import { Iconify } from 'src/components/iconify';

import { sofa5PagesNavData } from './config-nav-sofa5-pages';

// ----------------------------------------------------------------------

export const sofa5NavData = [
  { title: 'Trang chủ', path: '/sofa5', icon: <Iconify width={22} icon="solar:home-2-bold-duotone" /> },
  {
    title: 'Giới thiệu',
    path: '/sofa5/about',
    icon: <Iconify width={22} icon="solar:info-circle-bold-duotone" />,
  },
  {
    title: 'Tất cả sản phẩm',
    path: '/sofa5/products',
    icon: <Iconify width={22} icon="solar:bag-check-bold-duotone" />,
  },
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
  ...sofa5PagesNavData.filter((item) => !['/sofa5', '/sofa5/about', '/sofa5/products'].includes(item.path)),
];
