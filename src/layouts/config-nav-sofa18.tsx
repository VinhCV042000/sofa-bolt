import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const sofa18NavData = [
  { title: 'Trang chủ', path: '/sofa18', icon: <Iconify width={22} icon="solar:home-2-bold-duotone" /> },
  {
    title: 'Giới thiệu công ty',
    path: '/sofa18/about',
    icon: <Iconify width={22} icon="solar:info-circle-bold-duotone" />,
  },
  {
    title: 'Tất cả sản phẩm',
    path: '/sofa18/products',
    icon: <Iconify width={22} icon="solar:bag-check-bold-duotone" />,
  },
  {
    title: 'Triết lý',
    path: '/sofa18#story',
    icon: <Iconify width={22} icon="solar:leaf-bold-duotone" />,
  },
  {
    title: 'Bộ sưu tập',
    path: '/sofa18#collections',
    icon: <Iconify width={22} icon="solar:moon-stars-bold-duotone" />,
  },
  {
    title: 'Tác phẩm',
    path: '/sofa18#products',
    icon: <Iconify width={22} icon="solar:armchair-bold-duotone" />,
  },
  {
    title: 'Không gian',
    path: '/sofa18#gallery',
    icon: <Iconify width={22} icon="solar:gallery-bold-duotone" />,
  },
  {
    title: 'Khách hàng',
    path: '/sofa18#testimonials',
    icon: <Iconify width={22} icon="solar:star-bold-duotone" />,
  },
  {
    title: 'Liên hệ',
    path: paths.contact,
    icon: <Iconify width={22} icon="solar:phone-bold-duotone" />,
  },
];
