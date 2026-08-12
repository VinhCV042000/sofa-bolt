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

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa12PageHero } from 'src/sections/sofa12-pages/sofa12-page-hero';
import { SOFA12_PAGE_IMAGES, SOFA12_PAGE_PRODUCTS, formatSofa12PagePrice, SOFA12_PAGE_PRODUCT_CATEGORIES } from 'src/sections/sofa12-pages/sofa12-pages-data';

const ALL_CATEGORIES = [
  ...SOFA12_PAGE_PRODUCT_CATEGORIES.types,
  ...SOFA12_PAGE_PRODUCT_CATEGORIES.styles,
  ...SOFA12_PAGE_PRODUCT_CATEGORIES.spaces,
  ...SOFA12_PAGE_PRODUCT_CATEGORIES.sizes,
  ...SOFA12_PAGE_PRODUCT_CATEGORIES.prices,
];

export default function Page() {
  const { slug } = useParams();
  const category = ALL_CATEGORIES.find((c) => c.slug === slug);
  const label = category?.label || 'Tất cả sản phẩm';
  const products = SOFA12_PAGE_PRODUCTS.filter((p) => p.category === slug || p.style === slug || slug === 'all');

  return (
    <>
      <Helmet><title>{label} - TERRA ARCH</title></Helmet>
      <Sofa12PageHero overline="Danh mục" title={label} subtitle="Sofa đất nung thủ công TERRA ARCH." image={SOFA12_PAGE_IMAGES.aboutHero} />
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={3}>
            {(products.length > 0 ? products : SOFA12_PAGE_PRODUCTS).map((product) => (
              <Grid key={product.id} xs={12} sm={6} md={4}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ height: 1, borderRadius: 2, overflow: 'hidden', bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                  <Box component="img" src={product.image} alt={product.name} sx={{ width: 1, aspectRatio: '4/3', objectFit: 'cover' }} />
                  <Stack spacing={1.5} sx={{ p: 2.5 }}>
                    <Typography variant="subtitle1">{product.name}</Typography>
                    <Stack direction="row" alignItems="center" spacing={0.5}>
                      <Rating value={product.rating} precision={0.1} size="small" readOnly />
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>({product.reviews})</Typography>
                    </Stack>
                    <Typography variant="subtitle1" sx={{ color: 'warning.main', fontWeight: 'fontWeightBold' }}>{formatSofa12PagePrice(product.price)}</Typography>
                    <Button component={RouterLink} href={`/sofa12/products/${product.id}`} variant="outlined" size="small" color="warning" startIcon={<Iconify icon="solar:eye-bold-duotone" />}>Xem chi tiết</Button>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
