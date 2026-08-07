import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';

import { RouterLink } from 'src/routes/components';

import { sofa14Alpha, SOFA14_COLORS } from 'src/sections/sofa14/sofa14-data';
import { Sofa14PageHero, Sofa14Section } from 'src/sections/sofa14-pages/sofa14-page-hero';
import { SOFA14_PAGE_PRODUCTS, SOFA14_PAGE_IMAGES, SOFA14_PAGE_PRODUCT_CATEGORIES, sofa14FormatPrice } from 'src/sections/sofa14-pages/sofa14-pages-data';

export default function Page() {
  return (
    <>
      <Helmet><title>Sản phẩm — Sofa14</title></Helmet>
      <Sofa14PageHero overline="SẢN PHẨM" title={<>SOFA14 <span>SẢN PHẨM</span></>} subtitle="Cotton, nỉ, velvet pastel. Mỗi sản phẩm là một tác phẩm toy-like." image={SOFA14_PAGE_IMAGES.prod1} />

      <Sofa14Section>
        <Grid container spacing={4}>
          <Grid xs={12} md={3}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inLeft} sx={{ position: 'sticky', top: 80 }}>
              {Object.entries(SOFA14_PAGE_PRODUCT_CATEGORIES).map(([key, items]) => (
                <Stack key={key} spacing={1.5}>
                  <Typography variant="overline" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.6), letterSpacing: 2, fontWeight: 800 }}>
                    {key === 'types' ? 'LOẠI SOFA' : key === 'styles' ? 'PHONG CÁCH' : key === 'spaces' ? 'KHÔNG GIAN' : key === 'sizes' ? 'KÍCH THƯỚC' : 'GIÁ'}
                  </Typography>
                  {items.map((item: any) => (
                    <RouterLink key={item.slug} href={`/sofa14/products/category/${item.slug}`} sx={{ textDecoration: 'none', '&:hover .MuiTypography-root': { color: SOFA14_COLORS.coralDeep } }}>
                      <Typography variant="body2" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.8), transition: 'color 0.2s', fontWeight: 700 }}>{item.label}</Typography>
                    </RouterLink>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
          <Grid xs={12} md={9}>
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
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Typography variant="subtitle1" sx={{ fontWeight: 800, color: SOFA14_COLORS.mintDeep }}>{sofa14FormatPrice(product.price)}</Typography>
                        {product.oldPrice && <Typography variant="body2" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.4), textDecoration: 'line-through' }}>{sofa14FormatPrice(product.oldPrice)}</Typography>}
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Sofa14Section>
    </>
  );
}
