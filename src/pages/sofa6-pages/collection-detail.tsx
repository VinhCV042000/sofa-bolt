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

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa6PageHero, Sofa6Section } from 'src/sections/sofa6-pages/sofa6-page-hero';
import { SOFA6_COLLECTIONS, SOFA6_PRODUCTS, formatSofa6Price } from 'src/sections/sofa6-pages/sofa6-pages-data';
import { SOFA6_COLORS } from 'src/sections/sofa6/sofa6-data';

const metadata = { title: 'Chi tiết bộ sưu tập - Sofa Earth' };

export default function Page() {
  const { slug } = useParams();
  const collection = SOFA6_COLLECTIONS.find((c) => c.slug === slug);

  if (!collection) {
    return (
      <>
        <Helmet>
          <title>{metadata.title}</title>
        </Helmet>
        <Sofa6PageHero overline="Bộ sưu tập" title="Không tìm thấy bộ sưu tập" subtitle="Bộ sưu tập bạn tìm không tồn tại." image={SOFA6_COLLECTIONS[0].image} />
        <Sofa6Section>
          <Stack spacing={2} alignItems="center" sx={{ py: 8, textAlign: 'center' }} component={MotionViewport}>
            <Iconify icon="solar:gallery-bold-duotone" width={64} sx={{ color: 'text.disabled' }} />
            <Typography variant="h6" sx={{ color: 'text.secondary' }}>Bộ sưu tập không tồn tại</Typography>
            <Button component={RouterLink} href="/sofa6/collections" variant="outlined" sx={{ color: SOFA6_COLORS.terracotta, borderColor: SOFA6_COLORS.terracotta }}>Xem tất cả bộ sưu tập</Button>
          </Stack>
        </Sofa6Section>
      </>
    );
  }

  const products = SOFA6_PRODUCTS.slice(0, 4);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa6PageHero overline="Bộ sưu tập" title={collection.name} subtitle={collection.description} image={collection.image} />

      <Sofa6Section>
        <Stack spacing={4} component={MotionViewport}>
          <Grid container spacing={3}>
            {products.map((product, index) => (
              <Grid key={product.id} xs={12} sm={6} md={3}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: index * 0.06 }} sx={{ height: 1, borderRadius: 2, overflow: 'hidden', bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                  <Box component="img" src={product.image} alt={product.name} sx={{ width: 1, aspectRatio: '4/3', objectFit: 'cover' }} />
                  <Stack spacing={1} sx={{ p: 2.5 }}>
                    <Typography variant="subtitle1">{product.name}</Typography>
                    <Stack direction="row" alignItems="center" spacing={0.5}>
                      <Rating value={product.rating} precision={0.1} size="small" readOnly />
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>({product.reviews})</Typography>
                    </Stack>
                    <Typography variant="subtitle1" sx={{ color: SOFA6_COLORS.terracotta, fontWeight: 'fontWeightBold' }}>{formatSofa6Price(product.price)}</Typography>
                    <Button component={RouterLink} href={`/sofa6/products/${product.id}`} variant="outlined" size="small" sx={{ color: SOFA6_COLORS.terracotta, borderColor: SOFA6_COLORS.terracotta }}>Xem chi tiết</Button>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Sofa6Section>
    </>
  );
}
