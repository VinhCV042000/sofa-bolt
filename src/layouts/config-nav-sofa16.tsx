import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const sofa16NavData = [
  { title: 'Trang chủ', path: '/sofa16', icon: <Iconify width={22} icon="solar:home-2-bold-duotone" /> },
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
  {
    title: 'Liên hệ',
    path: paths.contact,
    icon: <Iconify width={22} icon="solar:phone-bold-duotone" />,
  },
];
