import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const sofa8NavData = [
  { title: 'Trang chủ', path: '/sofa8', icon: <Iconify width={22} icon="solar:home-2-bold-duotone" /> },
  {
    title: 'Giới thiệu công ty',
    path: '/sofa8/about',
    icon: <Iconify width={22} icon="solar:info-circle-bold-duotone" />,
  },
  {
    title: 'Tất cả sản phẩm',
    path: '/sofa8/products',
    icon: <Iconify width={22} icon="solar:bag-check-bold-duotone" />,
  },
  {
    title: 'Bộ sưu tập',
    path: '/sofa8#collections',
    icon: <Iconify width={22} icon="solar:water-bold-duotone" />,
  },
  {
    title: 'Sản phẩm',
    path: '/sofa8#products',
    icon: <Iconify width={22} icon="solar:armchair-bold-duotone" />,
  },
  {
    title: 'Câu chuyện',
    path: '/sofa8#story',
    icon: <Iconify width={22} icon="solar:wind-bold-duotone" />,
  },
  {
    title: 'Không gian',
    path: '/sofa8#gallery',
    icon: <Iconify width={22} icon="solar:gallery-bold-duotone" />,
  },
  {
    title: 'Đánh giá',
    path: '/sofa8#testimonials',
    icon: <Iconify width={22} icon="solar:star-bold-duotone" />,
  },
  {
    title: 'Liên hệ',
    path: paths.contact,
    icon: <Iconify width={22} icon="solar:phone-bold-duotone" />,
  },
  {
    title: 'Quản trị',
    path: '/sofa8/admin',
    icon: <Iconify width={22} icon="solar:widget-5-bold-duotone" />,
    children: [
      { title: 'Tổng quan', path: '/sofa8/admin' },
      { title: 'CMS', path: '/sofa8/admin/cms/home' },
      { title: 'Sản phẩm', path: '/sofa8/admin/catalog/products' },
      { title: 'Kho hàng', path: '/sofa8/admin/warehouse/overview' },
      { title: 'Đơn hàng', path: '/sofa8/admin/orders/orders' },
      { title: 'CRM', path: '/sofa8/admin/crm/customers' },
      { title: 'Marketing', path: '/sofa8/admin/marketing/email' },
      { title: 'Analytics', path: '/sofa8/admin/analytics/revenue' },
      { title: 'SEO', path: '/sofa8/admin/seo/sitemap' },
      { title: 'Phân quyền', path: '/sofa8/admin/access/users' },
      { title: 'Báo cáo tổng hợp', path: '/sofa8/admin/tools/reports' },
      { title: 'Cài đặt hệ thống', path: '/sofa8/admin/tools/settings' },
    ],
  },
];
