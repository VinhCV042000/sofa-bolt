import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const sofa20NavData = [
  { title: 'Trang chủ', path: '/sofa20', icon: <Iconify width={22} icon="solar:home-2-bold-duotone" /> },
  {
    title: 'Xưởng đúc',
    path: '/sofa20#story',
    icon: <Iconify width={22} icon="solar:fire-bold-duotone" />,
  },
  {
    title: 'Bộ sưu tập',
    path: '/sofa20#collections',
    icon: <Iconify width={22} icon="solar:settings-bold-duotone" />,
  },
  {
    title: 'Tác phẩm',
    path: '/sofa20#products',
    icon: <Iconify width={22} icon="solar:armchair-bold-duotone" />,
  },
  {
    title: 'Loft',
    path: '/sofa20#gallery',
    icon: <Iconify width={22} icon="solar:gallery-bold-duotone" />,
  },
  {
    title: 'Khách hàng',
    path: '/sofa20#testimonials',
    icon: <Iconify width={22} icon="solar:star-bold-duotone" />,
  },
  {
    title: 'Liên hệ',
    path: paths.contact,
    icon: <Iconify width={22} icon="solar:phone-bold-duotone" />,
  },
];
