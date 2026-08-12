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

import { varAlpha, textGradient } from 'src/theme/styles';

import { SOFA15_COLORS } from 'src/sections/sofa15/sofa15-data';
import { Sofa15Section, Sofa15PageHero } from 'src/sections/sofa15-pages/sofa15-page-hero';
import { sofa15FormatPrice, SOFA15_PAGE_PRODUCTS, SOFA15_PAGE_COLLECTIONS } from 'src/sections/sofa15-pages/sofa15-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const slug = params.slug || '';
  const collection = SOFA15_PAGE_COLLECTIONS.find((c) => c.slug === slug) || SOFA15_PAGE_COLLECTIONS[0];

  return (
    <>
      <Helmet><title>{collection.name} — Sofa15</title></Helmet>
      <Sofa15PageHero overline="BỘ SƯU TẬP" title={<span>{collection.name.toUpperCase()}</span>} subtitle={collection.description} image={collection.image} />

      <Sofa15Section bg="black">
        <Grid container spacing={3}>
          {SOFA15_PAGE_PRODUCTS.map((product) => (
            <Grid key={product.id} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={`/sofa15/products/${product.slug}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .product-img': { transform: 'scale(1.05)' }, '&:hover .product-name': { color: SOFA15_COLORS.gold } }}>
                <Box sx={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/5', border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.2)}` }}>
                  {product.badge && <Chip label={product.badge === 'bestseller' ? 'BÁN CHẠY' : product.badge === 'new' ? 'MỚI' : 'LIMITED'} size="small" sx={{ position: 'absolute', top: 12, left: 12, zIndex: 1, bgcolor: SOFA15_COLORS.gold, color: SOFA15_COLORS.black, fontWeight: 'fontWeightMedium', borderRadius: 0 }} />}
                  <Box className="product-img" component="img" src={product.image} alt={product.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                </Box>
                <Stack spacing={0.5}>
                  <Typography className="product-name" variant="subtitle1" sx={{ fontWeight: 'fontWeightMedium', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily, transition: 'color 0.2s' }}>{product.name}</Typography>
                  <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4), fontWeight: 'fontWeightLight' }}>{product.material}</Typography>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Rating value={product.rating} readOnly size="small" sx={{ '& .MuiRating-iconFilled': { color: SOFA15_COLORS.gold } }} />
                    <Typography variant="caption" sx={{ color: varAlpha('#FFFFFF', 0.3) }}>({product.reviews})</Typography>
                  </Stack>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightMedium', ...textGradient(`90deg, ${SOFA15_COLORS.goldLight} 0%, ${SOFA15_COLORS.gold} 50%, ${SOFA15_COLORS.goldDark} 100%`) }}>{sofa15FormatPrice(product.price)}</Typography>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa15Section>
    </>
  );
}
