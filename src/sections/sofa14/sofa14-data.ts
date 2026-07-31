// SOFA14 — SOFT CLAY / PASTEL POP — claymorphism, candy pastels, chunky blobs, playful & toy-like
// ----------------------------------------------------------------------

export const SOFA14_COLORS = {
  mint: '#7FE3C4',
  mintDeep: '#4CC9A6',
  sky: '#8FC7FF',
  skyDeep: '#5FA6EE',
  coral: '#FF9C8A',
  coralDeep: '#F4795F',
  butter: '#FFD98E',
  butterDeep: '#F5BE52',
  canvas: '#FFF9F1',
  canvasDeep: '#FCEFDE',
  ink: '#2B2440',
  inkSoft: '#5C5470',
  white: '#FFFFFF',
};

export function sofa14Alpha(hex: string, opacity: number) {
  const value = hex.replace('#', '');
  const r = parseInt(value.substring(0, 2), 16);
  const g = parseInt(value.substring(2, 4), 16);
  const b = parseInt(value.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export const SOFA14_IMAGES = {
  hero: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1400',
  story1:
    'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=900',
  story2:
    'https://images.pexels.com/photos/6316515/pexels-photo-6316515.jpeg?auto=compress&cs=tinysrgb&w=900',
  cat1: 'https://images.pexels.com/photos/6489121/pexels-photo-6489121.jpeg?auto=compress&cs=tinysrgb&w=800',
  cat2: 'https://images.pexels.com/photos/6444368/pexels-photo-6444368.jpeg?auto=compress&cs=tinysrgb&w=800',
  cat3: 'https://images.pexels.com/photos/6580227/pexels-photo-6580227.jpeg?auto=compress&cs=tinysrgb&w=800',
  prod1: 'https://images.pexels.com/photos/6970071/pexels-photo-6970071.jpeg?auto=compress&cs=tinysrgb&w=700',
  prod2: 'https://images.pexels.com/photos/6899431/pexels-photo-6899431.jpeg?auto=compress&cs=tinysrgb&w=700',
  prod3: 'https://images.pexels.com/photos/6580228/pexels-photo-6580228.jpeg?auto=compress&cs=tinysrgb&w=700',
  prod4: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=700',
  prod5: 'https://images.pexels.com/photos/6444368/pexels-photo-6444368.jpeg?auto=compress&cs=tinysrgb&w=700',
  prod6: 'https://images.pexels.com/photos/6489121/pexels-photo-6489121.jpeg?auto=compress&cs=tinysrgb&w=700',
  gallery1:
    'https://images.pexels.com/photos/6580227/pexels-photo-6580227.jpeg?auto=compress&cs=tinysrgb&w=800',
  gallery2:
    'https://images.pexels.com/photos/6899431/pexels-photo-6899431.jpeg?auto=compress&cs=tinysrgb&w=800',
  gallery3:
    'https://images.pexels.com/photos/6970071/pexels-photo-6970071.jpeg?auto=compress&cs=tinysrgb&w=800',
  gallery4:
    'https://images.pexels.com/photos/6316515/pexels-photo-6316515.jpeg?auto=compress&cs=tinysrgb&w=800',
  gallery5:
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
  cta: 'https://images.pexels.com/photos/6489121/pexels-photo-6489121.jpeg?auto=compress&cs=tinysrgb&w=1400',
};

export const SOFA14_PROMO_ICONS = [
  'solar:confetti-bold-duotone',
  'solar:magic-stick-3-bold-duotone',
  'solar:hearts-bold-duotone',
];

export const SOFA14_COLLECTION_META = [
  { image: SOFA14_IMAGES.cat1, count: 9, accent: SOFA14_COLORS.mint },
  { image: SOFA14_IMAGES.cat2, count: 7, accent: SOFA14_COLORS.sky },
  { image: SOFA14_IMAGES.cat3, count: 6, accent: SOFA14_COLORS.coral },
];

export const SOFA14_PRODUCT_META = [
  { image: SOFA14_IMAGES.prod1, price: 19900000, oldPrice: 23500000, rating: 4.9, accent: SOFA14_COLORS.mint },
  { image: SOFA14_IMAGES.prod2, price: 15900000, rating: 4.8, accent: SOFA14_COLORS.sky },
  { image: SOFA14_IMAGES.prod3, price: 22500000, rating: 4.9, accent: SOFA14_COLORS.coral },
  { image: SOFA14_IMAGES.prod4, price: 27900000, oldPrice: 31900000, rating: 5.0, accent: SOFA14_COLORS.butter },
  { image: SOFA14_IMAGES.prod5, price: 13500000, rating: 4.7, accent: SOFA14_COLORS.sky },
  { image: SOFA14_IMAGES.prod6, price: 9900000, rating: 4.8, accent: SOFA14_COLORS.coral },
];

export const SOFA14_COMFORT_LEVELS = [
  { key: 'cloud', accent: SOFA14_COLORS.mint, firmness: 20 },
  { key: 'squish', accent: SOFA14_COLORS.sky, firmness: 50 },
  { key: 'bounce', accent: SOFA14_COLORS.coral, firmness: 80 },
];

export const SOFA14_FABRIC_SWATCHES = [
  { key: 'mint', hex: SOFA14_COLORS.mint },
  { key: 'sky', hex: SOFA14_COLORS.sky },
  { key: 'coral', hex: SOFA14_COLORS.coral },
  { key: 'butter', hex: SOFA14_COLORS.butter },
];

export const SOFA14_STATS_META = [
  { value: 24, suffix: '', accent: SOFA14_COLORS.mint },
  { value: 10, suffix: '+', accent: SOFA14_COLORS.sky },
  { value: 8200, suffix: '+', accent: SOFA14_COLORS.coral },
  { value: 98, suffix: '%', accent: SOFA14_COLORS.butter },
];

export const SOFA14_STEP_ICONS = [
  'solar:pallete-2-bold-duotone',
  'solar:ruler-cross-pen-bold-duotone',
  'solar:box-bold-duotone',
  'solar:home-smile-angle-bold-duotone',
];

export const SOFA14_GALLERY_IMAGES = [
  SOFA14_IMAGES.gallery1,
  SOFA14_IMAGES.gallery2,
  SOFA14_IMAGES.gallery3,
  SOFA14_IMAGES.gallery4,
  SOFA14_IMAGES.gallery5,
];

export const SOFA14_TESTIMONIAL_ACCENTS = [SOFA14_COLORS.mint, SOFA14_COLORS.sky, SOFA14_COLORS.coral];
