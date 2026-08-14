import { Iconify } from 'src/components/iconify';

import { sofa15PagesNavData } from './config-nav-sofa15-pages';

// ----------------------------------------------------------------------

export const sofa15NavData = [
  { title: 'Trang chủ', path: '/sofa15', icon: <Iconify width={22} icon="solar:home-2-bold-duotone" /> },
  {
    title: 'Di sản',
    path: '/sofa15#story',
    icon: <Iconify width={22} icon="solar:crown-bold-duotone" />,
  },
  {
    title: 'Bộ sưu tập',
    path: '/sofa15#collections',
    icon: <Iconify width={22} icon="solar:widget-bold-duotone" />,
  },
  {
    title: 'Tác phẩm',
    path: '/sofa15#products',
    icon: <Iconify width={22} icon="solar:armchair-bold-duotone" />,
  },
  {
    title: 'Không gian',
    path: '/sofa15#gallery',
    icon: <Iconify width={22} icon="solar:gallery-bold-duotone" />,
  },
  {
    title: 'Khách hàng',
    path: '/sofa15#testimonials',
    icon: <Iconify width={22} icon="solar:star-bold-duotone" />,
  },
  ...sofa15PagesNavData.filter((item) => item.path !== '/sofa15'),
];
