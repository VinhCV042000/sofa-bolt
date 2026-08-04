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

import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa3PageHero, Sofa3Section } from 'src/sections/sofa3-pages/sofa3-page-hero';
import { SOFA3_COLLECTIONS, SOFA3_PRODUCTS, formatSofa3Price } from 'src/sections/sofa3-pages/sofa3-pages-data';

const metadata = { title: 'Chi tiết bộ sưu tập - Sofa Terra' };

export default function Page() {
  const { slug } = useParams();
  const collection = SOFA3_COLLECTIONS.find((c) => c.slug === slug) || SOFA3_COLLECTIONS[0];
  const products = SOFA3_PRODUCTS.slice(0, 4);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa3PageHero overline="Bộ sưu tập" title={collection.name} subtitle={collection.description} image={collection.image} />

      <Sofa3Section>
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
                    <Typography variant="subtitle1" sx={{ color: 'success.main', fontWeight: 'fontWeightBold' }}>{formatSofa3Price(product.price)}</Typography>
                    <Button component={RouterLink} href={`/sofa3/products/${product.id}`} variant="outlined" color="success" size="small">Xem chi tiết</Button>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Sofa3Section>
    </>
  );
}
