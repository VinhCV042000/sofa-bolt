import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const sofa17NavData = [
  { title: 'Trang chủ', path: '/sofa17', icon: <Iconify width={22} icon="solar:home-2-bold-duotone" /> },
  {
    title: 'Di sản',
    path: '/sofa17#story',
    icon: <Iconify width={22} icon="solar:map-point-bold-duotone" />,
  },
  {
    title: 'Bộ sưu tập',
    path: '/sofa17#collections',
    icon: <Iconify width={22} icon="solar:palmtree2-bold-duotone" />,
  },
  {
    title: 'Tác phẩm',
    path: '/sofa17#products',
    icon: <Iconify width={22} icon="solar:armchair-bold-duotone" />,
  },
  {
    title: 'Riad',
    path: '/sofa17#gallery',
    icon: <Iconify width={22} icon="solar:gallery-bold-duotone" />,
  },
  {
    title: 'Khách hàng',
    path: '/sofa17#testimonials',
    icon: <Iconify width={22} icon="solar:star-bold-duotone" />,
  },
  {
    title: 'Liên hệ',
    path: paths.contact,
    icon: <Iconify width={22} icon="solar:phone-bold-duotone" />,
  },
];
