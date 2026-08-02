import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const sofa19NavData = [
  { title: 'Trang chủ', path: '/sofa19', icon: <Iconify width={22} icon="solar:home-2-bold-duotone" /> },
  {
    title: 'Gốc rễ',
    path: '/sofa19#story',
    icon: <Iconify width={22} icon="solar:plant-bold-duotone" />,
  },
  {
    title: 'Bộ sưu tập',
    path: '/sofa19#collections',
    icon: <Iconify width={22} icon="solar:sun-bold-duotone" />,
  },
  {
    title: 'Tác phẩm',
    path: '/sofa19#products',
    icon: <Iconify width={22} icon="solar:armchair-bold-duotone" />,
  },
  {
    title: 'Không gian',
    path: '/sofa19#gallery',
    icon: <Iconify width={22} icon="solar:gallery-bold-duotone" />,
  },
  {
    title: 'Khách hàng',
    path: '/sofa19#testimonials',
    icon: <Iconify width={22} icon="solar:star-bold-duotone" />,
  },
  {
    title: 'Liên hệ',
    path: paths.contact,
    icon: <Iconify width={22} icon="solar:phone-bold-duotone" />,
  },
];
