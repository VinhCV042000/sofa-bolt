// SOFA13 — ART DECO NOIR & GOLD — jazz-age glamour, sunburst geometry, gold on noir
// ----------------------------------------------------------------------

export const SOFA13_COLORS = {
  noir: '#0B0B0D',
  noirDeep: '#050506',
  charcoal: '#17171B',
  charcoalSoft: '#222228',
  gold: '#C9A84C',
  goldPale: '#F0D78C',
  goldDeep: '#8C6E24',
  emerald: '#0E5C46',
  emeraldBright: '#1B9C77',
  ivory: '#F4EFE2',
  ivorySoft: 'rgba(244,239,226,0.72)',
  white: '#FFFFFF',
};

export function sofa13Alpha(hex: string, opacity: number) {
  const value = hex.replace('#', '');
  const r = parseInt(value.substring(0, 2), 16);
  const g = parseInt(value.substring(2, 4), 16);
  const b = parseInt(value.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export const SOFA13_IMAGES = {
  hero: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1400',
  story1: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=900',
  story2: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=900',
  cat1: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800',
  cat2: 'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=800',
  cat3: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=800',
  prod1: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=700',
  prod2: 'https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&w=700',
  prod3: 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=700',
  prod4: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=700',
  prod5: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=700',
  prod6: 'https://images.pexels.com/photos/2062432/pexels-photo-2062432.jpeg?auto=compress&cs=tinysrgb&w=700',
  gallery1: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
  gallery2: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800',
  gallery3: 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=800',
  gallery4: 'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=800',
  gallery5: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800',
  cta: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1400',
};

export const SOFA13_PROMO_ICONS = [
  'solar:crown-star-bold-duotone',
  'solar:medal-ribbons-star-bold-duotone',
  'solar:shield-star-bold-duotone',
];

export const SOFA13_COLLECTION_ACCENTS = [
  SOFA13_COLORS.gold,
  SOFA13_COLORS.emeraldBright,
  SOFA13_COLORS.goldPale,
];

export const SOFA13_PRODUCTS_META = [
  { price: 46900000, oldPrice: 54900000, rating: 4.9, image: SOFA13_IMAGES.prod1, badgeKey: 'bestseller' as const },
  { price: 32900000, rating: 4.8, image: SOFA13_IMAGES.prod2, badgeKey: null },
  { price: 38500000, rating: 4.9, image: SOFA13_IMAGES.prod3, badgeKey: 'new' as const },
  { price: 61900000, oldPrice: 68000000, rating: 5.0, image: SOFA13_IMAGES.prod4, badgeKey: null },
  { price: 27900000, rating: 4.7, image: SOFA13_IMAGES.prod5, badgeKey: null },
  { price: 21500000, rating: 4.8, image: SOFA13_IMAGES.prod6, badgeKey: 'limited' as const },
];

export const SOFA13_MATERIAL_SWATCHES = [
  SOFA13_COLORS.gold,
  SOFA13_COLORS.emerald,
  SOFA13_COLORS.charcoalSoft,
  SOFA13_COLORS.goldDeep,
];

export const SOFA13_STATS_META = [
  { value: 24, suffix: 'K' },
  { value: 14, suffix: '' },
  { value: 8200, suffix: '+' },
  { value: 98, suffix: '%' },
];

export const SOFA13_TESTIMONIAL_ACCENTS = [
  SOFA13_COLORS.gold,
  SOFA13_COLORS.emeraldBright,
  SOFA13_COLORS.goldPale,
];

function formatVnd(value: number) {
  return `${value.toLocaleString('vi-VN')}₫`;
}

export const sofa13FormatPrice = formatVnd;
