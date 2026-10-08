import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const sofa2NavData = [
  { title: 'Trang chủ', path: '/sofa2', icon: <Iconify width={22} icon="solar:home-2-bold-duotone" /> },
  {
    title: 'Giới thiệu công ty',
    path: '/sofa2/about',
    icon: <Iconify width={22} icon="solar:info-circle-bold-duotone" />,
  },
  {
    title: 'Tất cả sản phẩm',
    path: '/sofa2/products',
    icon: <Iconify width={22} icon="solar:bag-check-bold-duotone" />,
  },
  {
    title: 'Bộ sưu tập',
    path: '/sofa2#collections',
    icon: <Iconify width={22} icon="solar:archive-bold-duotone" />,
  },
  {
    title: 'Sản phẩm',
    path: '/sofa2#products',
    icon: <Iconify width={22} icon="solar:armchair-bold-duotone" />,
  },
  {
    title: 'Không gian',
    path: '/sofa2#looks',
    icon: <Iconify width={22} icon="solar:gallery-bold-duotone" />,
  },
  {
    title: 'Đánh giá',
    path: '/sofa2#testimonials',
    icon: <Iconify width={22} icon="solar:star-bold-duotone" />,
  },
  {
    title: 'Liên hệ',
    path: paths.contact,
    icon: <Iconify width={22} icon="solar:phone-bold-duotone" />,
  },
  {
    title: 'Quản trị',
    path: '/sofa2/admin',
    icon: <Iconify width={22} icon="solar:widget-5-bold-duotone" />,
    children: [
      { title: 'Tổng quan', path: '/sofa2/admin' },
      { title: 'CMS', path: '/sofa2/admin/cms/home' },
      { title: 'Sản phẩm', path: '/sofa2/admin/catalog/products' },
      { title: 'Danh mục', path: '/sofa2/admin/catalog/categories' },
      { title: 'Biến thể & tồn kho', path: '/sofa2/admin/catalog/variants' },
      { title: 'Giá bán', path: '/sofa2/admin/catalog/pricing' },
      { title: 'Đơn hàng', path: '/sofa2/admin/orders/orders' },
      { title: 'Đại lý', path: '/sofa2/admin/dealer/dashboard' },
      { title: 'SEO', path: '/sofa2/admin/seo/sitemap' },
      { title: 'Phân quyền', path: '/sofa2/admin/access/users' },
    ],
  },
];
