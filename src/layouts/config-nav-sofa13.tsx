import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const sofa13NavData = [
  { title: 'Home', path: '/sofa13', icon: <Iconify width={22} icon="solar:home-2-bold-duotone" /> },
  {
    title: 'About Us',
    path: '/sofa13/about',
    icon: <Iconify width={22} icon="solar:info-circle-bold-duotone" />,
  },
  {
    title: 'Shop All',
    path: '/sofa13/products',
    icon: <Iconify width={22} icon="solar:bag-check-bold-duotone" />,
  },
  {
    title: 'Heritage',
    path: '/sofa13#story',
    icon: <Iconify width={22} icon="solar:book-2-bold-duotone" />,
  },
  {
    title: 'Collections',
    path: '/sofa13#collections',
    icon: <Iconify width={22} icon="solar:crown-star-bold-duotone" />,
  },
  {
    title: 'Salon Pieces',
    path: '/sofa13#products',
    icon: <Iconify width={22} icon="solar:armchair-bold-duotone" />,
  },
  {
    title: 'Materials',
    path: '/sofa13#materials',
    icon: <Iconify width={22} icon="solar:pallete-2-bold-duotone" />,
  },
  {
    title: 'Interiors',
    path: '/sofa13#gallery',
    icon: <Iconify width={22} icon="solar:gallery-bold-duotone" />,
  },
  {
    title: 'Contact',
    path: paths.contact,
    icon: <Iconify width={22} icon="solar:phone-bold-duotone" />,
  },
];
