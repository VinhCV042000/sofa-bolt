import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const sofa7NavData = [
  { title: 'Trang chủ', path: '/sofa7', icon: <Iconify width={22} icon="solar:home-2-bold-duotone" /> },
  {
    title: 'Giới thiệu công ty',
    path: '/sofa7/about',
    icon: <Iconify width={22} icon="solar:info-circle-bold-duotone" />,
  },
  {
    title: 'Tất cả sản phẩm',
    path: '/sofa7/products',
    icon: <Iconify width={22} icon="solar:bag-check-bold-duotone" />,
  },
  {
    title: 'Bộ sưu tập',
    path: '/sofa7#collections',
    icon: <Iconify width={22} icon="solar:widget-bold-duotone" />,
  },
  {
    title: 'Sản phẩm',
    path: '/sofa7#products',
    icon: <Iconify width={22} icon="solar:armchair-bold-duotone" />,
  },
  {
    title: 'Câu chuyện',
    path: '/sofa7#story',
    icon: <Iconify width={22} icon="solar:bolt-bold-duotone" />,
  },
  {
    title: 'Không gian',
    path: '/sofa7#gallery',
    icon: <Iconify width={22} icon="solar:gallery-bold-duotone" />,
  },
  {
    title: 'Đánh giá',
    path: '/sofa7#testimonials',
    icon: <Iconify width={22} icon="solar:star-bold-duotone" />,
  },
  {
    title: 'Liên hệ',
    path: paths.contact,
    icon: <Iconify width={22} icon="solar:phone-bold-duotone" />,
  },
  {
    title: 'Quản trị',
    path: '/sofa7/admin',
    icon: <Iconify width={22} icon="solar:widget-5-bold-duotone" />,
  },
];
