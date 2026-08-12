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

import { textGradient } from 'src/theme/styles';

import { SOFA16_COLORS } from 'src/sections/sofa16/sofa16-data';
import { Sofa16Section, Sofa16PageHero } from 'src/sections/sofa16-pages/sofa16-page-hero';
import { sofa16FormatPrice, SOFA16_PAGE_PRODUCTS, SOFA16_PAGE_COLLECTIONS } from 'src/sections/sofa16-pages/sofa16-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const slug = params.slug || '';
  const collection = SOFA16_PAGE_COLLECTIONS.find((c) => c.slug === slug) || SOFA16_PAGE_COLLECTIONS[0];

  return (
    <>
      <Helmet><title>{collection.name} — Sofa16</title></Helmet>
      <Sofa16PageHero overline="BỘ SƯU TẬP" title={<span>{collection.name.toUpperCase()}</span>} subtitle={collection.description} image={collection.image} />

      <Sofa16Section bg="cream">
        <Grid container spacing={3}>
          {SOFA16_PAGE_PRODUCTS.map((product) => (
            <Grid key={product.id} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={`/sofa16/products/${product.slug}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .product-img': { transform: 'scale(1.05)' }, '&:hover .product-name': { color: SOFA16_COLORS.terracotta } }}>
                <Box sx={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/5', borderRadius: 3 }}>
                  {product.badge && <Chip label={product.badge === 'bestseller' ? 'BÁN CHẠY' : product.badge === 'new' ? 'MỚI' : 'LIMITED'} size="small" sx={{ position: 'absolute', top: 12, left: 12, zIndex: 1, bgcolor: SOFA16_COLORS.terracotta, color: 'common.white', fontWeight: 'fontWeightMedium', borderRadius: 1 }} />}
                  <Box className="product-img" component="img" src={product.image} alt={product.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                </Box>
                <Stack spacing={0.5}>
                  <Typography className="product-name" variant="subtitle1" sx={{ fontWeight: 'fontWeightMedium', color: SOFA16_COLORS.ink, fontFamily: theme.typography.fontSecondaryFamily, transition: 'color 0.2s' }}>{product.name}</Typography>
                  <Typography variant="body2" sx={{ color: SOFA16_COLORS.inkSoft, fontWeight: 'fontWeightLight' }}>{product.material}</Typography>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Rating value={product.rating} readOnly size="small" sx={{ '& .MuiRating-iconFilled': { color: SOFA16_COLORS.terracotta } }} />
                    <Typography variant="caption" sx={{ color: SOFA16_COLORS.inkSoft }}>({product.reviews})</Typography>
                  </Stack>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightMedium', ...textGradient(`90deg, ${SOFA16_COLORS.terracotta} 0%, ${SOFA16_COLORS.terracottaDeep} 100%`) }}>{sofa16FormatPrice(product.price)}</Typography>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa16Section>
    </>
  );
}
