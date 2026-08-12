import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { SOFA8_COLORS } from 'src/sections/sofa8/sofa8-data';
import { Sofa8Section, Sofa8PageHero } from 'src/sections/sofa8-pages/sofa8-page-hero';
import {
  formatSofa8Price,
  SOFA8_PAGE_PRODUCTS,
  SOFA8_PAGE_COLLECTIONS,
} from 'src/sections/sofa8-pages/sofa8-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const slug = params.slug || '';
  const collection = SOFA8_PAGE_COLLECTIONS.find((c) => c.slug === slug) || SOFA8_PAGE_COLLECTIONS[0];

  return (
    <>
      <Helmet>
        <title>{collection.name} — Sofa8</title>
      </Helmet>

      <Sofa8PageHero
        overline="BỘ SƯU TẬP"
        title={<span>{collection.name.toUpperCase()}</span>}
        subtitle={collection.description}
        image={collection.image}
      />

      <Sofa8Section>
        <Grid container spacing={3}>
          {SOFA8_PAGE_PRODUCTS.map((product) => (
            <Grid key={product.id} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={`/sofa8/products/${product.slug}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .product-img': { transform: 'scale(1.05)' }, '&:hover .product-name': { color: SOFA8_COLORS.coral } }}>
                <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: 3, aspectRatio: '4/5' }}>
                  {product.badge && <Chip label={product.badge} size="small" sx={{ position: 'absolute', top: 12, left: 12, zIndex: 1, bgcolor: SOFA8_COLORS.coral, color: 'common.white', fontWeight: 'fontWeightBold' }} />}
                  <Box className="product-img" component="img" src={product.image} alt={product.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                </Box>
                <Stack spacing={0.5}>
                  <Typography className="product-name" variant="subtitle1" sx={{ fontWeight: 'fontWeightBold', color: 'text.primary', transition: 'color 0.2s' }}>{product.name}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{product.material}</Typography>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Rating value={product.rating} readOnly size="small" />
                    <Typography variant="caption" sx={{ color: 'text.disabled' }}>({product.reviews})</Typography>
                  </Stack>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightBold', color: SOFA8_COLORS.ocean }}>{formatSofa8Price(product.price)}</Typography>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa8Section>
    </>
  );
}
