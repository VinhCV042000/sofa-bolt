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
  {
    title: 'Quản trị',
    path: '/sofa17/admin',
    icon: <Iconify width={22} icon="solar:widget-5-bold-duotone" />,
    children: [
      { title: 'Tổng quan', path: '/sofa17/admin' },
      { title: 'CMS', path: '/sofa17/admin/cms/home' },
      { title: 'Sản phẩm', path: '/sofa17/admin/catalog/products' },
      { title: 'Kho hàng', path: '/sofa17/admin/warehouse/overview' },
      { title: 'Đơn hàng', path: '/sofa17/admin/orders/orders' },
      { title: 'CRM', path: '/sofa17/admin/crm/customers' },
      { title: 'Marketing', path: '/sofa17/admin/marketing/email' },
      { title: 'Analytics', path: '/sofa17/admin/analytics/revenue' },
      { title: 'SEO', path: '/sofa17/admin/seo/sitemap' },
      { title: 'Phân quyền', path: '/sofa17/admin/access/users' },
      { title: 'Báo cáo tổng hợp', path: '/sofa17/admin/tools/reports' },
      { title: 'Cài đặt hệ thống', path: '/sofa17/admin/tools/settings' },
      { title: 'Thông báo & Nhật ký', path: '/sofa17/admin/tools/notifications' },
      { title: 'Hồ sơ quản trị', path: '/sofa17/admin/tools/profile' },
    ],
  },
];
