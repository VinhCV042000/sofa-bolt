import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const sofa3NavData = [
  { title: 'Trang chủ', path: '/sofa3', icon: <Iconify width={22} icon="solar:home-2-bold-duotone" /> },
  {
    title: 'Giới thiệu công ty',
    path: '/sofa3/about',
    icon: <Iconify width={22} icon="solar:info-circle-bold-duotone" />,
  },
  {
    title: 'Tất cả sản phẩm',
    path: '/sofa3/products',
    icon: <Iconify width={22} icon="solar:bag-check-bold-duotone" />,
  },
  {
    title: 'Sản phẩm',
    path: '/sofa3#products',
    icon: <Iconify width={22} icon="solar:armchair-bold-duotone" />,
  },
  {
    title: 'Vật liệu',
    path: '/sofa3#materials',
    icon: <Iconify width={22} icon="solar:leaf-bold-duotone" />,
  },
  {
    title: 'Không gian',
    path: '/sofa3#inspirations',
    icon: <Iconify width={22} icon="solar:gallery-bold-duotone" />,
  },
  {
    title: 'Đánh giá',
    path: '/sofa3#testimonials',
    icon: <Iconify width={22} icon="solar:star-bold-duotone" />,
  },
  {
    title: 'Liên hệ',
    path: paths.contact,
    icon: <Iconify width={22} icon="solar:phone-bold-duotone" />,
  },
];
