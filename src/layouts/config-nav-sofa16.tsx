import { Iconify } from 'src/components/iconify';

import { sofa16PagesNavData } from './config-nav-sofa16-pages';

// ----------------------------------------------------------------------

export const sofa16NavData = [
  { title: 'Trang chủ', path: '/sofa16', icon: <Iconify width={22} icon="solar:home-2-bold-duotone" /> },
  {
    title: 'Giới thiệu công ty',
    path: '/sofa16/about',
    icon: <Iconify width={22} icon="solar:info-circle-bold-duotone" />,
  },
  {
    title: 'Tất cả sản phẩm',
    path: '/sofa16/products',
    icon: <Iconify width={22} icon="solar:bag-check-bold-duotone" />,
  },
  {
    title: 'Nguồn gốc',
    path: '/sofa16#story',
    icon: <Iconify width={22} icon="solar:water-bold-duotone" />,
  },
  {
    title: 'Bộ sưu tập',
    path: '/sofa16#collections',
    icon: <Iconify width={22} icon="solar:sun-bold-duotone" />,
  },
  {
    title: 'Tác phẩm',
    path: '/sofa16#products',
    icon: <Iconify width={22} icon="solar:armchair-bold-duotone" />,
  },
  {
    title: 'Biệt thự',
    path: '/sofa16#gallery',
    icon: <Iconify width={22} icon="solar:gallery-bold-duotone" />,
  },
  {
    title: 'Khách hàng',
    path: '/sofa16#testimonials',
    icon: <Iconify width={22} icon="solar:star-bold-duotone" />,
  },
  ...sofa16PagesNavData.filter((item) => !['/sofa16', '/sofa16/about', '/sofa16/products'].includes(item.path)),
];
