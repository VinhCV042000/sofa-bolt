import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { sofa13Alpha, SOFA13_COLORS } from 'src/sections/sofa13/sofa13-data';
import { Sofa13Section, Sofa13PageHero } from 'src/sections/sofa13-pages/sofa13-page-hero';
import { sofa13FormatPrice, SOFA13_PAGE_PRODUCTS, SOFA13_PAGE_COLLECTIONS } from 'src/sections/sofa13-pages/sofa13-pages-data';

export default function Page() {
  const params = useParams();
  const slug = params.slug || '';
  const collection = SOFA13_PAGE_COLLECTIONS.find((c) => c.slug === slug) || SOFA13_PAGE_COLLECTIONS[0];

  return (
    <>
      <Helmet><title>{collection.name} — Sofa13</title></Helmet>
      <Sofa13PageHero overline="BỘ SƯU TẬP" title={<span>{collection.name.toUpperCase()}</span>} subtitle={collection.description} image={collection.image} />

      <Sofa13Section>
        <Grid container spacing={3}>
          {SOFA13_PAGE_PRODUCTS.map((product) => (
            <Grid key={product.id} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={`/sofa13/products/${product.slug}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .product-img': { transform: 'scale(1.05)' }, '&:hover .product-name': { color: SOFA13_COLORS.gold } }}>
                <Box sx={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/5', border: `1px solid ${sofa13Alpha(product.colors[0], 0.3)}` }}>
                  {product.badge && <Chip label={product.badge === 'bestseller' ? 'BÁN CHẠY' : product.badge === 'new' ? 'MỚI' : 'LIMITED'} size="small" sx={{ position: 'absolute', top: 12, left: 12, zIndex: 1, bgcolor: SOFA13_COLORS.gold, color: SOFA13_COLORS.noir, fontWeight: 700, borderRadius: 0 }} />}
                  <Box className="product-img" component="img" src={product.image} alt={product.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                </Box>
                <Stack spacing={0.5}>
                  <Typography className="product-name" variant="subtitle1" sx={{ fontWeight: 700, color: SOFA13_COLORS.ivory, letterSpacing: 1, transition: 'color 0.2s' }}>{product.name}</Typography>
                  <Typography variant="body2" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5), fontWeight: 700 }}>{product.material}</Typography>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Rating value={product.rating} readOnly size="small" sx={{ '& .MuiRating-iconFilled': { color: SOFA13_COLORS.gold } }} />
                    <Typography variant="caption" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.3) }}>({product.reviews})</Typography>
                  </Stack>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: SOFA13_COLORS.gold }}>{sofa13FormatPrice(product.price)}</Typography>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa13Section>
    </>
  );
}
