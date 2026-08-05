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

import { Sofa4PageHero } from 'src/sections/sofa4-pages/sofa4-page-hero';
import { SOFA4_PAGE_IMAGES, SOFA4_PAGE_PRODUCTS, formatSofa4PagePrice, SOFA4_PAGE_PRODUCT_CATEGORIES } from 'src/sections/sofa4-pages/sofa4-pages-data';

const metadata = { title: 'Danh mục sản phẩm - Sofa Pop' };

export default function Page() {
  const { slug } = useParams();

  let categoryLabel = 'Tất cả sản phẩm';
  Object.values(SOFA4_PAGE_PRODUCT_CATEGORIES).forEach((group) => {
    const found = group.find((item) => item.slug === slug);
    if (found) categoryLabel = found.label;
  });

  const filtered = slug ? SOFA4_PAGE_PRODUCTS.filter((p) => p.category === slug || p.style === slug) : SOFA4_PAGE_PRODUCTS;

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa4PageHero overline="Danh mục" title={categoryLabel} subtitle={`${filtered.length} mẫu sofa trong danh mục`} image={SOFA4_PAGE_IMAGES.aboutHero} />

      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          {filtered.length === 0 ? (
            <Stack spacing={2} alignItems="center" sx={{ py: 8, textAlign: 'center' }}>
              <Iconify icon="solar:cart-large-2-minimalistic-bold-duotone" width={64} sx={{ color: 'text.disabled' }} />
              <Typography variant="h6" sx={{ color: 'text.secondary' }}>Không tìm thấy sản phẩm trong danh mục này</Typography>
              <Button component={RouterLink} href="/sofa4/products" variant="outlined" color="warning">Xem tất cả sản phẩm</Button>
            </Stack>
          ) : (
            <Grid container spacing={3}>
              {filtered.map((product) => (
                <Grid key={product.id} xs={12} sm={6} md={4}>
                  <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ height: 1, borderRadius: 2, overflow: 'hidden', bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                    <Box sx={{ position: 'relative' }}>
                      <Box component="img" src={product.image} alt={product.name} sx={{ width: 1, aspectRatio: '4/3', objectFit: 'cover' }} />
                      {product.badge && (
                        <Box sx={{ position: 'absolute', top: 12, left: 12, px: 1.5, py: 0.5, borderRadius: 1, bgcolor: 'warning.main', color: 'common.white' }}>
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
                      <Typography variant="subtitle1" sx={{ color: 'warning.main', fontWeight: 'fontWeightBold' }}>{formatSofa4PagePrice(product.price)}</Typography>
                      <Button component={RouterLink} href={`/sofa4/products/${product.id}`} variant="outlined" color="warning" size="small">Xem chi tiết</Button>
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Box>
    </>
  );
}
