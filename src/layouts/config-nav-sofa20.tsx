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
  {
    title: 'Quản trị',
    path: '/sofa20/admin',
    icon: <Iconify width={22} icon="solar:shield-user-bold-duotone" />,
    children: [
      {
        subheader: 'Trung tâm quản trị',
        items: [
          { title: 'Tổng quan', path: '/sofa20/admin' },
          { title: 'CMS', path: '/sofa20/admin/cms' },
          { title: 'Sản phẩm', path: '/sofa20/admin/catalog' },
          { title: 'Kho hàng', path: '/sofa20/admin/warehouse' },
          { title: 'Đơn hàng', path: '/sofa20/admin/orders' },
          { title: 'CRM', path: '/sofa20/admin/crm' },
          { title: 'Marketing', path: '/sofa20/admin/marketing' },
          { title: 'Analytics', path: '/sofa20/admin/analytics' },
          { title: 'SEO', path: '/sofa20/admin/seo' },
          { title: 'Phân quyền', path: '/sofa20/admin/access' },
          { title: 'Báo cáo tổng hợp', path: '/sofa20/admin/tools/reports' },
          { title: 'Cài đặt hệ thống', path: '/sofa20/admin/tools/settings' },
        ],
      },
    ],
  },
];
