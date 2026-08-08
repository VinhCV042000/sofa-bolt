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

import { SOFA15_COLORS } from 'src/sections/sofa15/sofa15-data';
import { Sofa15PageHero, Sofa15Section } from 'src/sections/sofa15-pages/sofa15-page-hero';
import { SOFA15_PAGE_PRODUCTS, SOFA15_PAGE_IMAGES, SOFA15_PAGE_PRODUCT_CATEGORIES, sofa15FormatPrice } from 'src/sections/sofa15-pages/sofa15-pages-data';

export default function Page() {
  const theme = useTheme();
  return (
    <>
      <Helmet><title>Sản phẩm — Sofa15</title></Helmet>
      <Sofa15PageHero overline="SẢN PHẨM" title={<>SOFA15 <span>TÁC PHẨM</span></>} subtitle="Da thật, velvet emerald, burgundy. Mỗi tác phẩm là một tuyệt tác Gatsby." image={SOFA15_PAGE_IMAGES.prod1} />

      <Sofa15Section bg="black">
        <Grid container spacing={4}>
          <Grid xs={12} md={3}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inLeft} sx={{ position: 'sticky', top: 80 }}>
              {Object.entries(SOFA15_PAGE_PRODUCT_CATEGORIES).map(([key, items]) => (
                <Stack key={key} spacing={1.5}>
                  <Typography variant="overline" sx={{ color: varAlpha(SOFA15_COLORS.gold, 0.6), letterSpacing: 2, fontWeight: 'fontWeightMedium' }}>
                    {key === 'types' ? 'LOẠI SOFA' : key === 'styles' ? 'PHONG CÁCH' : key === 'spaces' ? 'KHÔNG GIAN' : key === 'sizes' ? 'KÍCH THƯỚC' : 'GIÁ'}
                  </Typography>
                  {items.map((item: any) => (
                    <RouterLink key={item.slug} href={`/sofa15/products/category/${item.slug}`} sx={{ textDecoration: 'none', '&:hover .MuiTypography-root': { color: SOFA15_COLORS.gold } }}>
                      <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5), transition: 'color 0.2s', fontWeight: 'fontWeightLight' }}>{item.label}</Typography>
                    </RouterLink>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
          <Grid xs={12} md={9}>
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
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightMedium', ...textGradient(`90deg, ${SOFA15_COLORS.goldLight} 0%, ${SOFA15_COLORS.gold} 50%, ${SOFA15_COLORS.goldDark} 100%`) }}>{sofa15FormatPrice(product.price)}</Typography>
                        {product.oldPrice && <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.2), textDecoration: 'line-through' }}>{sofa15FormatPrice(product.oldPrice)}</Typography>}
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Sofa15Section>
    </>
  );
}
