import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa1PageHero } from 'src/sections/sofa1-pages/sofa1-page-hero';
import {
  SOFA1_PRODUCTS,
  formatSofa1Price,
  SOFA1_PAGE_IMAGES,
  SOFA1_PRODUCT_CATEGORIES,
} from 'src/sections/sofa1-pages/sofa1-pages-data';

// ----------------------------------------------------------------------

const FILTER_GROUPS = [
  { key: 'types', label: 'Loại sofa' },
  { key: 'styles', label: 'Phong cách' },
  { key: 'spaces', label: 'Không gian' },
  { key: 'sizes', label: 'Kích cỡ' },
  { key: 'prices', label: 'Mức giá' },
] as const;

// price range matching helper
const matchPriceRange = (price: number, slug: string): boolean => {
  switch (slug) {
    case 'duoi-10-trieu':
      return price < 10000000;
    case '10-20-trieu':
      return price >= 10000000 && price <= 20000000;
    case '20-50-trieu':
      return price > 20000000 && price <= 50000000;
    case 'tren-50-trieu':
      return price > 50000000;
    default:
      return false;
  }
};

export default function Page() {
  const { slug = '' } = useParams();

  // find matching label across all filter groups
  const matchLabel = FILTER_GROUPS.reduce<string | null>((acc, group) => {
    if (acc) return acc;
    const found = SOFA1_PRODUCT_CATEGORIES[group.key].find((c) => c.slug === slug);
    return found ? found.label : null;
  }, null);

  // filter products by category, style, or price range matching slug
  const filtered = slug
    ? SOFA1_PRODUCTS.filter((p) => p.category === slug || p.style === slug || matchPriceRange(p.price, slug))
    : SOFA1_PRODUCTS;

  const products = filtered.length > 0 ? filtered : SOFA1_PRODUCTS;
  const label = matchLabel ?? 'Tất cả sản phẩm';

  return (
    <>
      <Helmet>
        <title>{label} - Casa Sofa</title>
      </Helmet>

      <Sofa1PageHero
        overline="Danh mục"
        title={label}
        subtitle={`${products.length} mẫu sofa trong danh mục này.`}
        image={products[0]?.image ?? SOFA1_PAGE_IMAGES.aboutHero}
      />

      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={{ xs: 4, md: 6 }}>
            {/* Sidebar */}
            <Grid xs={12} md={3}>
              <Stack spacing={3} sx={{ position: { md: 'sticky' }, top: { md: 88 }, p: 3, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                <Typography variant="overline" sx={{ color: 'text.disabled' }}>Bộ lọc</Typography>
                {FILTER_GROUPS.map((group) => (
                  <Stack key={group.key} spacing={1}>
                    <Typography variant="subtitle2">{group.label}</Typography>
                    <Stack spacing={0.5}>
                      {SOFA1_PRODUCT_CATEGORIES[group.key].map((item) => (
                        <Button
                          key={item.slug}
                          component={RouterLink}
                          href={`/sofa1/products/category/${item.slug}`}
                          size="small"
                          sx={{ justifyContent: 'flex-start', color: item.slug === slug ? 'primary.main' : 'text.secondary', fontWeight: item.slug === slug ? 'fontWeightBold' : 'fontWeightRegular', textTransform: 'none', '&:hover': { color: 'primary.main', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08) } }}
                        >
                          {item.label}
                        </Button>
                      ))}
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </Grid>

            {/* Products */}
            <Grid xs={12} md={9}>
              <Grid container spacing={3}>
                {products.map((product) => (
                  <Grid key={product.id} xs={12} sm={6} md={4}>
                    <Stack
                      component={m.div}
                      variants={varFade({ distance: 24 }).inUp}
                      sx={{ height: 1, borderRadius: 2, overflow: 'hidden', bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
                    >
                      <Box sx={{ position: 'relative' }}>
                        <Box component="img" src={product.image} alt={product.name} sx={{ width: 1, aspectRatio: '4/3', objectFit: 'cover' }} />
                        {product.badge && (
                          <Box sx={{ position: 'absolute', top: 12, left: 12, px: 1.5, py: 0.5, borderRadius: 1, bgcolor: 'primary.main', color: 'common.white' }}>
                            <Typography variant="caption" sx={{ fontWeight: 'fontWeightBold' }}>{product.badge}</Typography>
                          </Box>
                        )}
                      </Box>
                      <Stack spacing={1.5} sx={{ p: 2.5 }}>
                        <Typography variant="subtitle1">{product.name}</Typography>
                        <Stack direction="row" alignItems="center" spacing={0.5}>
                          <Rating value={product.rating} precision={0.1} size="small" readOnly />
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>({product.reviews})</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 'fontWeightBold' }}>{formatSofa1Price(product.price)}</Typography>
                          {product.oldPrice && (
                            <Typography variant="body2" sx={{ color: 'text.disabled', textDecoration: 'line-through' }}>{formatSofa1Price(product.oldPrice)}</Typography>
                          )}
                        </Stack>
                        <Button component={RouterLink} href={`/sofa1/products/${product.id}`} variant="outlined" size="small" startIcon={<Iconify icon="solar:eye-bold-duotone" />}>
                          Xem chi tiết
                        </Button>
                      </Stack>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
