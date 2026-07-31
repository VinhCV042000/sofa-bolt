import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const sofa14NavData = [
  { title: 'Home', path: '/sofa14', icon: <Iconify width={22} icon="solar:home-2-bold-duotone" /> },
  { title: 'Story', path: '/sofa14#story', icon: <Iconify width={22} icon="solar:hearts-bold-duotone" /> },
  { title: 'Collections', path: '/sofa14#collections', icon: <Iconify width={22} icon="solar:magic-stick-3-bold-duotone" /> },
  { title: 'Products', path: '/sofa14#products', icon: <Iconify width={22} icon="solar:armchair-bold-duotone" /> },
  { title: 'Playground', path: '/sofa14#playground', icon: <Iconify width={22} icon="solar:pallete-2-bold-duotone" /> },
  { title: 'Gallery', path: '/sofa14#gallery', icon: <Iconify width={22} icon="solar:gallery-bold-duotone" /> },
  { title: 'Contact', path: paths.contact, icon: <Iconify width={22} icon="solar:phone-bold-duotone" /> },
];
