import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';

import { useParams } from 'react-router-dom';

import { varAlpha } from 'src/theme/styles';
import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

import { SOFA9_COLORS } from 'src/sections/sofa9/sofa9-data';
import { Sofa9PageHero, Sofa9Section } from 'src/sections/sofa9-pages/sofa9-page-hero';
import {
  SOFA9_PAGE_PRODUCTS,
  SOFA9_PAGE_COLLECTIONS,
  SOFA9_PAGE_IMAGES,
  formatSofa9Price,
} from 'src/sections/sofa9-pages/sofa9-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const slug = params.slug || '';
  const collection = SOFA9_PAGE_COLLECTIONS.find((c) => c.slug === slug) || SOFA9_PAGE_COLLECTIONS[0];

  return (
    <>
      <Helmet>
        <title>{collection.name} — Sofa9</title>
      </Helmet>

      <Sofa9PageHero overline="BỘ SƯU TẬP" title={<><span>{collection.name.toUpperCase()}</span></>} subtitle={collection.description} image={collection.image} />

      <Sofa9Section>
        <Grid container spacing={3}>
          {SOFA9_PAGE_PRODUCTS.map((product) => (
            <Grid key={product.id} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={`/sofa9/products/${product.slug}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .product-img': { transform: 'scale(1.05)' }, '&:hover .product-name': { color: SOFA9_COLORS.pink } }}>
                <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: 3, aspectRatio: '4/5' }}>
                  {product.badge && <Chip label={product.badge} size="small" sx={{ position: 'absolute', top: 12, left: 12, zIndex: 1, bgcolor: SOFA9_COLORS.pink, color: 'common.white', fontWeight: 'fontWeightBold' }} />}
                  <Box className="product-img" component="img" src={product.image} alt={product.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                </Box>
                <Stack spacing={0.5}>
                  <Typography className="product-name" variant="subtitle1" sx={{ fontWeight: 'fontWeightBold', color: 'text.primary', transition: 'color 0.2s' }}>{product.name}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{product.material}</Typography>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Rating value={product.rating} readOnly size="small" />
                    <Typography variant="caption" sx={{ color: 'text.disabled' }}>({product.reviews})</Typography>
                  </Stack>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightBold', color: SOFA9_COLORS.pink }}>{formatSofa9Price(product.price)}</Typography>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa9Section>
    </>
  );
}
