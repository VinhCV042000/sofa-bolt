import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';

import { useParams } from 'react-router-dom';

import { RouterLink } from 'src/routes/components';

import { sofa11Alpha, SOFA11_COLORS } from 'src/sections/sofa11/sofa11-data';
import { Sofa11PageHero, Sofa11Section } from 'src/sections/sofa11-pages/sofa11-page-hero';
import { SOFA11_PAGE_PRODUCTS, SOFA11_PAGE_COLLECTIONS, formatSofa11Price } from 'src/sections/sofa11-pages/sofa11-pages-data';

export default function Page() {
  const params = useParams();
  const slug = params.slug || '';
  const collection = SOFA11_PAGE_COLLECTIONS.find((c) => c.slug === slug) || SOFA11_PAGE_COLLECTIONS[0];

  return (
    <>
      <Helmet><title>{collection.name} — Sofa11</title></Helmet>
      <Sofa11PageHero overline="BỘ SƯU TẬP" title={<><span>{collection.name.toUpperCase()}</span></>} subtitle={collection.description} image={collection.image} />

      <Sofa11Section>
        <Grid container spacing={3}>
          {SOFA11_PAGE_PRODUCTS.map((product) => (
            <Grid key={product.id} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={`/sofa11/products/${product.slug}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .product-img': { transform: 'scale(1.05)' }, '&:hover .product-name': { color: SOFA11_COLORS.lime } }}>
                <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: '16px 16px 16px 0', aspectRatio: '4/5', border: `2px solid ${sofa11Alpha(product.colors[0], 0.3)}` }}>
                  {product.badge && <Chip label={product.badge} size="small" sx={{ position: 'absolute', top: 12, left: 12, zIndex: 1, bgcolor: product.colors[0], color: SOFA11_COLORS.void, fontWeight: 900 }} />}
                  <Box className="product-img" component="img" src={product.image} alt={product.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                </Box>
                <Stack spacing={0.5}>
                  <Typography className="product-name" variant="subtitle1" sx={{ fontWeight: 900, color: SOFA11_COLORS.cream, textTransform: 'uppercase', transition: 'color 0.2s' }}>{product.name}</Typography>
                  <Typography variant="body2" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.5), fontWeight: 700 }}>{product.material}</Typography>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Rating value={product.rating} readOnly size="small" sx={{ '& .MuiRating-iconFilled': { color: SOFA11_COLORS.lime } }} />
                    <Typography variant="caption" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.3) }}>({product.reviews})</Typography>
                  </Stack>
                  <Typography variant="subtitle1" sx={{ fontWeight: 900, color: SOFA11_COLORS.magenta }}>{formatSofa11Price(product.price)}</Typography>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa11Section>
    </>
  );
}
