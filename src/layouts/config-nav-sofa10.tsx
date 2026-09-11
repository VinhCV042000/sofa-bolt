import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const sofa10NavData = [
  { title: 'Trang chủ', path: '/sofa10', icon: <Iconify width={22} icon="solar:home-2-bold-duotone" /> },
  {
    title: 'Giới thiệu công ty',
    path: '/sofa10/about',
    icon: <Iconify width={22} icon="solar:info-circle-bold-duotone" />,
  },
  {
    title: 'Tất cả sản phẩm',
    path: '/sofa10/products',
    icon: <Iconify width={22} icon="solar:bag-check-bold-duotone" />,
  },
  {
    title: 'Bộ sưu tập',
    path: '/sofa10#collections',
    icon: <Iconify width={22} icon="solar:leaf-bold-duotone" />,
  },
  {
    title: 'Sản phẩm',
    path: '/sofa10#products',
    icon: <Iconify width={22} icon="solar:armchair-bold-duotone" />,
  },
  {
    title: 'Triết lý',
    path: '/sofa10#story',
    icon: <Iconify width={22} icon="solar:water-bold-duotone" />,
  },
  {
    title: 'Không gian',
    path: '/sofa10#gallery',
    icon: <Iconify width={22} icon="solar:gallery-bold-duotone" />,
  },
  {
    title: 'Đánh giá',
    path: '/sofa10#testimonials',
    icon: <Iconify width={22} icon="solar:star-bold-duotone" />,
  },
  {
    title: 'Liên hệ',
    path: paths.contact,
    icon: <Iconify width={22} icon="solar:phone-bold-duotone" />,
  },
  {
    title: 'Quản trị',
    path: '/sofa10/admin',
    icon: <Iconify width={22} icon="solar:widget-5-bold-duotone" />,
    children: [
      { title: 'Tổng quan', path: '/sofa10/admin' },
      { title: 'CMS', path: '/sofa10/admin/cms/home' },
      { title: 'Sản phẩm', path: '/sofa10/admin/products/products' },
      { title: 'Kho hàng', path: '/sofa10/admin/warehouse/overview' },
      { title: 'Đơn hàng', path: '/sofa10/admin/orders/orders' },
      { title: 'CRM', path: '/sofa10/admin/crm/customers' },
      { title: 'Marketing', path: '/sofa10/admin/marketing/email' },
      { title: 'Analytics', path: '/sofa10/admin/analytics/revenue' },
      { title: 'SEO', path: '/sofa10/admin/seo/category' },
      { title: 'Phân quyền', path: '/sofa10/admin/permissions/users' },
    ],
  },
];
