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

import { SOFA18_COLORS } from 'src/sections/sofa18/sofa18-data';
import { Sofa18Section, Sofa18PageHero } from 'src/sections/sofa18-pages/sofa18-page-hero';
import { sofa18FormatPrice, SOFA18_PAGE_PRODUCTS, SOFA18_PAGE_COLLECTIONS } from 'src/sections/sofa18-pages/sofa18-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const slug = params.slug || '';
  const collection = SOFA18_PAGE_COLLECTIONS.find((c) => c.slug === slug) || SOFA18_PAGE_COLLECTIONS[0];

  return (
    <>
      <Helmet><title>{collection.name} — Sofa18</title></Helmet>
      <Sofa18PageHero overline="BỘ SƯU TẬP" title={<span>{collection.name.toUpperCase()}</span>} subtitle={collection.description} image={collection.image} />

      <Sofa18Section bg="cream">
        <Grid container spacing={3}>
          {SOFA18_PAGE_PRODUCTS.map((product) => (
            <Grid key={product.id} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={`/sofa18/products/${product.slug}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .product-img': { transform: 'scale(1.05)' }, '&:hover .product-name': { color: SOFA18_COLORS.clay } }}>
                <Box sx={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/5', borderRadius: 3 }}>
                  {product.badge && <Chip label={product.badge === 'bestseller' ? 'BÁN CHẠY' : product.badge === 'new' ? 'MỚI' : 'LIMITED'} size="small" sx={{ position: 'absolute', top: 12, left: 12, zIndex: 1, bgcolor: SOFA18_COLORS.clay, color: 'common.white', fontWeight: 'fontWeightMedium', borderRadius: 1 }} />}
                  <Box className="product-img" component="img" src={product.image} alt={product.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                </Box>
                <Stack spacing={0.5}>
                  <Typography className="product-name" variant="subtitle1" sx={{ fontWeight: 'fontWeightMedium', color: SOFA18_COLORS.ink, fontFamily: theme.typography.fontSecondaryFamily, transition: 'color 0.2s' }}>{product.name}</Typography>
                  <Typography variant="body2" sx={{ color: SOFA18_COLORS.inkSoft, fontWeight: 'fontWeightLight' }}>{product.material}</Typography>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Rating value={product.rating} readOnly size="small" sx={{ '& .MuiRating-iconFilled': { color: SOFA18_COLORS.clay } }} />
                    <Typography variant="caption" sx={{ color: SOFA18_COLORS.inkSoft }}>({product.reviews})</Typography>
                  </Stack>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightMedium', ...textGradient(`90deg, ${SOFA18_COLORS.clay} 0%, ${SOFA18_COLORS.clayDeep} 100%`) }}>{sofa18FormatPrice(product.price)}</Typography>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa18Section>
    </>
  );
}
