import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa4Section, Sofa4PageHero } from 'src/sections/sofa4-pages/sofa4-page-hero';
import { SOFA4_PAGE_PRODUCTS, formatSofa4PagePrice, SOFA4_PAGE_COLLECTIONS } from 'src/sections/sofa4-pages/sofa4-pages-data';

const metadata = { title: 'Chi tiết bộ sưu tập - Sofa Pop' };

export default function Page() {
  const { slug } = useParams();
  const collection = SOFA4_PAGE_COLLECTIONS.find((c) => c.slug === slug) || SOFA4_PAGE_COLLECTIONS[0];
  const products = SOFA4_PAGE_PRODUCTS.slice(0, 4);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa4PageHero overline="Bộ sưu tập" title={collection.name} subtitle={collection.description} image={collection.image} />

      <Sofa4Section>
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
                    <Typography variant="subtitle1" sx={{ color: 'warning.main', fontWeight: 'fontWeightBold' }}>{formatSofa4PagePrice(product.price)}</Typography>
                    <Button component={RouterLink} href={`/sofa4/products/${product.id}`} variant="outlined" color="warning" size="small">Xem chi tiết</Button>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Sofa4Section>
    </>
  );
}
