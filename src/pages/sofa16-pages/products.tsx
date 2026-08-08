import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';
import { varAlpha, textGradient } from 'src/theme/styles';

import { SOFA16_COLORS } from 'src/sections/sofa16/sofa16-data';
import { Sofa16PageHero, Sofa16Section } from 'src/sections/sofa16-pages/sofa16-page-hero';
import { SOFA16_PAGE_PRODUCTS, SOFA16_PAGE_IMAGES, SOFA16_PAGE_PRODUCT_CATEGORIES, sofa16FormatPrice } from 'src/sections/sofa16-pages/sofa16-pages-data';

export default function Page() {
  const theme = useTheme();
  return (
    <>
      <Helmet><title>Sản phẩm — Sofa16</title></Helmet>
      <Sofa16PageHero overline="SẢN PHẨM" title={<>SOFA16 <span>TÁC PHẨM</span></>} subtitle="Linen terracotta, olive, cream. Mỗi tác phẩm là một tuyệt tác Riviera." image={SOFA16_PAGE_IMAGES.prod1} />

      <Sofa16Section bg="cream">
        <Grid container spacing={4}>
          <Grid xs={12} md={3}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inLeft} sx={{ position: 'sticky', top: 80 }}>
              {Object.entries(SOFA16_PAGE_PRODUCT_CATEGORIES).map(([key, items]) => (
                <Stack key={key} spacing={1.5}>
                  <Typography variant="overline" sx={{ color: SOFA16_COLORS.terracottaDeep, letterSpacing: 2, fontWeight: 'fontWeightMedium' }}>
                    {key === 'types' ? 'LOẠI SOFA' : key === 'styles' ? 'PHONG CÁCH' : key === 'spaces' ? 'KHÔNG GIAN' : key === 'sizes' ? 'KÍCH THƯỚC' : 'GIÁ'}
                  </Typography>
                  {items.map((item: any) => (
                    <RouterLink key={item.slug} href={`/sofa16/products/category/${item.slug}`} sx={{ textDecoration: 'none', '&:hover .MuiTypography-root': { color: SOFA16_COLORS.terracotta } }}>
                      <Typography variant="body2" sx={{ color: SOFA16_COLORS.inkSoft, transition: 'color 0.2s', fontWeight: 'fontWeightLight' }}>{item.label}</Typography>
                    </RouterLink>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
          <Grid xs={12} md={9}>
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
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightMedium', ...textGradient(`90deg, ${SOFA16_COLORS.terracotta} 0%, ${SOFA16_COLORS.terracottaDeep} 100%`) }}>{sofa16FormatPrice(product.price)}</Typography>
                        {product.oldPrice && <Typography variant="body2" sx={{ color: SOFA16_COLORS.inkSoft, textDecoration: 'line-through', opacity: 0.5 }}>{sofa16FormatPrice(product.oldPrice)}</Typography>}
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Sofa16Section>
    </>
  );
}
