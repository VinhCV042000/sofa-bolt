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

import { sofa14Alpha, SOFA14_COLORS } from 'src/sections/sofa14/sofa14-data';
import { Sofa14PageHero, Sofa14Section } from 'src/sections/sofa14-pages/sofa14-page-hero';
import { SOFA14_PAGE_PRODUCTS, SOFA14_PAGE_COLLECTIONS, sofa14FormatPrice } from 'src/sections/sofa14-pages/sofa14-pages-data';

export default function Page() {
  const params = useParams();
  const slug = params.slug || '';
  const collection = SOFA14_PAGE_COLLECTIONS.find((c) => c.slug === slug) || SOFA14_PAGE_COLLECTIONS[0];

  return (
    <>
      <Helmet><title>{collection.name} — Sofa14</title></Helmet>
      <Sofa14PageHero overline="BỘ SƯU TẬP" title={<><span>{collection.name.toUpperCase()}</span></>} subtitle={collection.description} image={collection.image} />

      <Sofa14Section>
        <Grid container spacing={3}>
          {SOFA14_PAGE_PRODUCTS.map((product) => (
            <Grid key={product.id} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={`/sofa14/products/${product.slug}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .product-img': { transform: 'scale(1.05)' }, '&:hover .product-name': { color: SOFA14_COLORS.coralDeep } }}>
                <Box sx={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/5', borderRadius: '24px', border: `6px solid ${SOFA14_COLORS.white}`, boxShadow: `4px 4px 0 ${sofa14Alpha(product.colors[0], 0.4)}` }}>
                  {product.badge && <Chip label={product.badge === 'bestseller' ? 'BÁN CHẠY' : product.badge === 'new' ? 'MỚI' : 'LIMITED'} size="small" sx={{ position: 'absolute', top: 12, left: 12, zIndex: 1, bgcolor: SOFA14_COLORS.coral, color: SOFA14_COLORS.ink, fontWeight: 800, borderRadius: 99 }} />}
                  <Box className="product-img" component="img" src={product.image} alt={product.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                </Box>
                <Stack spacing={0.5}>
                  <Typography className="product-name" variant="subtitle1" sx={{ fontWeight: 800, color: SOFA14_COLORS.ink, transition: 'color 0.2s' }}>{product.name}</Typography>
                  <Typography variant="body2" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.7), fontWeight: 700 }}>{product.material}</Typography>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Rating value={product.rating} readOnly size="small" sx={{ '& .MuiRating-iconFilled': { color: SOFA14_COLORS.coralDeep } }} />
                    <Typography variant="caption" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.5) }}>({product.reviews})</Typography>
                  </Stack>
                  <Typography variant="subtitle1" sx={{ fontWeight: 800, color: SOFA14_COLORS.mintDeep }}>{sofa14FormatPrice(product.price)}</Typography>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa14Section>
    </>
  );
}
