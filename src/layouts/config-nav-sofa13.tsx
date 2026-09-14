import { Iconify } from 'src/components/iconify';
import { useSofa13PagesContent } from 'src/sections/sofa13-pages/sofa13-pages-i18n';

// ----------------------------------------------------------------------

export function useSofa13NavData() {
  const t = useSofa13PagesContent();
  return [
    { title: t.nav.home, path: '/sofa13', icon: <Iconify width={22} icon="solar:home-2-bold-duotone" /> },
    {
      title: t.nav.about,
      path: '/sofa13/about',
      icon: <Iconify width={22} icon="solar:info-circle-bold-duotone" />,
    },
    {
      title: t.nav.shop,
      path: '/sofa13/products',
      icon: <Iconify width={22} icon="solar:bag-check-bold-duotone" />,
    },
    {
      title: t.nav.heritage,
      path: '/sofa13#story',
      icon: <Iconify width={22} icon="solar:book-2-bold-duotone" />,
    },
    {
      title: t.nav.collections,
      path: '/sofa13#collections',
      icon: <Iconify width={22} icon="solar:crown-star-bold-duotone" />,
    },
    {
      title: t.nav.salonPieces,
      path: '/sofa13#products',
      icon: <Iconify width={22} icon="solar:armchair-bold-duotone" />,
    },
    {
      title: t.nav.materials,
      path: '/sofa13#materials',
      icon: <Iconify width={22} icon="solar:pallete-2-bold-duotone" />,
    },
    {
      title: t.nav.interiors,
      path: '/sofa13#gallery',
      icon: <Iconify width={22} icon="solar:gallery-bold-duotone" />,
    },
    {
      title: t.nav.contact,
      path: '/sofa13/contact',
      icon: <Iconify width={22} icon="solar:phone-bold-duotone" />,
    },
    {
      title: t.nav.admin,
      path: '/sofa13/admin',
      icon: <Iconify width={22} icon="solar:shield-check-bold-duotone" />,
    },
  ];
}

// Static fallback (English) for route-level usage
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
    path: '/sofa13/contact',
    icon: <Iconify width={22} icon="solar:phone-bold-duotone" />,
  },
  {
    title: 'Admin',
    path: '/sofa13/admin',
    icon: <Iconify width={22} icon="solar:shield-check-bold-duotone" />,
  },
];
