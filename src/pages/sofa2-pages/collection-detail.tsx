import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';
import {
  SOFA2_COLLECTIONS,
  SOFA2_PRODUCTS,
  formatSofa2Price,
} from 'src/sections/sofa2/sofa2-pages-data';

// ----------------------------------------------------------------------

export default function Page() {
  const { slug = '' } = useParams();

  const collection = SOFA2_COLLECTIONS.find((c) => c.slug === slug);
  // products for this collection: featured/luxury/etc — use first N as a representative set
  const products = collection
    ? SOFA2_PRODUCTS.filter((p) => (collection.slug === 'luxury' || collection.slug === 'featured' ? p.rating >= 4.8 : true)).slice(0, collection.slug === 'new' ? 6 : 8)
    : [];

  if (!collection) {
    return (
      <>
        <Helmet><title>Không tìm thấy bộ sưu tập - LUXE Sofa</title></Helmet>
        <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 20 }}>
          <Iconify icon="solar:file-remove-bold-duotone" width={72} sx={{ color: 'text.disabled' }} />
          <Typography variant="h4">Không tìm thấy bộ sưu tập</Typography>
          <Button component={RouterLink} href="/sofa2/collections" variant="contained">Quay lại bộ sưu tập</Button>
        </Stack>
      </>
    );
  }

  return (
    <>
      <Helmet><title>{collection.name} - LUXE Sofa</title></Helmet>

      <Sofa2PageHero overline="Bộ sưu tập" title={collection.name} subtitle={collection.description} image={collection.image} />

      {/* Intro */}
      <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
            <Grid xs={12} md={6}>
              <Box component={m.img} variants={varFade({ distance: 24 }).inLeft} src={collection.image} alt={collection.name} sx={{ width: 1, borderRadius: 2, aspectRatio: '4/3', objectFit: 'cover' }} />
            </Grid>
            <Grid xs={12} md={6}>
              <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
                <Typography variant="overline" sx={{ color: 'text.disabled' }}>{collection.count}</Typography>
                <Typography variant="h2">{collection.name}</Typography>
                <Typography sx={{ color: 'text.secondary' }}>{collection.description}</Typography>
                <Typography sx={{ color: 'text.secondary' }}>Mỗi mẫu trong bộ sưu tập được chế tác thủ công bởi nghệ nhân LUXE Sofa với vật liệu cao cấp, đảm bảo chất lượng và độ bền vượt thời gian.</Typography>
                <Button component={RouterLink} href="/sofa2/products" variant="contained" size="large" startIcon={<Iconify icon="solar:bag-bold-duotone" />}>
                  Xem tất cả sản phẩm
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Products */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
        <Container component={MotionViewport}>
          <Stack spacing={2} sx={{ mb: 5 }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>Sản phẩm trong bộ sưu tập</Typography>
            <Typography variant="h3">{products.length} mẫu sofa</Typography>
          </Stack>
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid key={product.id} xs={12} sm={6} md={3}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ height: 1, borderRadius: 2, overflow: 'hidden', bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                  <Box component="img" src={product.image} alt={product.name} sx={{ width: 1, aspectRatio: '4/3', objectFit: 'cover' }} />
                  <Stack spacing={1} sx={{ p: 2 }}>
                    <Typography variant="subtitle2">{product.name}</Typography>
                    <Stack direction="row" alignItems="center" spacing={0.5}>
                      <Rating value={product.rating} precision={0.1} size="small" readOnly />
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>({product.reviews})</Typography>
                    </Stack>
                    <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 'fontWeightBold' }}>{formatSofa2Price(product.price)}</Typography>
                    <Button component={RouterLink} href={`/sofa2/products/${product.id}`} size="small" variant="outlined">Xem chi tiết</Button>
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
