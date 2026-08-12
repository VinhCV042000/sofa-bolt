import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const sofa12NavData = [
  { title: 'Trang chủ', path: '/sofa12', icon: <Iconify width={22} icon="solar:home-2-bold-duotone" /> },
  {
    title: 'Giới thiệu công ty',
    path: '/sofa12/about',
    icon: <Iconify width={22} icon="solar:info-circle-bold-duotone" />,
  },
  {
    title: 'Tất cả sản phẩm',
    path: '/sofa12/products',
    icon: <Iconify width={22} icon="solar:bag-check-bold-duotone" />,
  },
  {
    title: 'Câu chuyện',
    path: '/sofa12#story',
    icon: <Iconify width={22} icon="solar:book-2-bold-duotone" />,
  },
  {
    title: 'Bộ sưu tập',
    path: '/sofa12#collections',
    icon: <Iconify width={22} icon="solar:sun-bold-duotone" />,
  },
  {
    title: 'Sản phẩm',
    path: '/sofa12#products',
    icon: <Iconify width={22} icon="solar:armchair-bold-duotone" />,
  },
  {
    title: 'Chất liệu',
    path: '/sofa12#materials',
    icon: <Iconify width={22} icon="solar:leaf-bold-duotone" />,
  },
  {
    title: 'Không gian',
    path: '/sofa12#gallery',
    icon: <Iconify width={22} icon="solar:gallery-bold-duotone" />,
  },
  {
    title: 'Liên hệ',
    path: paths.contact,
    icon: <Iconify width={22} icon="solar:phone-bold-duotone" />,
  },
];
