import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varFade } from 'src/components/animate';

import { sofa11Alpha, SOFA11_COLORS } from 'src/sections/sofa11/sofa11-data';
import { Sofa11Section, Sofa11PageHero } from 'src/sections/sofa11-pages/sofa11-page-hero';
import { formatSofa11Price, SOFA11_PAGE_IMAGES, SOFA11_PAGE_PRODUCTS, SOFA11_PAGE_PRODUCT_CATEGORIES } from 'src/sections/sofa11-pages/sofa11-pages-data';

export default function Page() {
  return (
    <>
      <Helmet><title>Sản phẩm — Sofa11</title></Helmet>
      <Sofa11PageHero overline="SẢN PHẨM" title={<>SOFA11 <span>SẢN PHẨM</span></>} subtitle="Sofa pop màu chói, dáng cong, module ghép tự do. Hơn 200 mã vải để bạn tự phối." image={SOFA11_PAGE_IMAGES.prod1} />

      <Sofa11Section>
        <Grid container spacing={4}>
          <Grid xs={12} md={3}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inLeft} sx={{ position: 'sticky', top: 80 }}>
              {Object.entries(SOFA11_PAGE_PRODUCT_CATEGORIES).map(([key, items]) => (
                <Stack key={key} spacing={1.5}>
                  <Typography variant="overline" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.4), letterSpacing: 2, fontWeight: 800 }}>
                    {key === 'types' ? 'LOẠI SOFA' : key === 'styles' ? 'PHONG CÁCH' : key === 'spaces' ? 'KHÔNG GIAN' : key === 'sizes' ? 'KÍCH THƯỚC' : 'GIÁ'}
                  </Typography>
                  {items.map((item: any) => (
                    <Link component={RouterLink} key={item.slug} href={`/sofa11/products/category/${item.slug}`} sx={{ textDecoration: 'none', '&:hover .MuiTypography-root': { color: SOFA11_COLORS.lime } }}>
                      <Typography variant="body2" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.6), transition: 'color 0.2s', fontWeight: 700 }}>{item.label}</Typography>
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
          <Grid xs={12} md={9}>
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
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Typography variant="subtitle1" sx={{ fontWeight: 900, color: SOFA11_COLORS.magenta }}>{formatSofa11Price(product.price)}</Typography>
                        {product.oldPrice && <Typography variant="body2" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.3), textDecoration: 'line-through' }}>{formatSofa11Price(product.oldPrice)}</Typography>}
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Sofa11Section>
    </>
  );
}
