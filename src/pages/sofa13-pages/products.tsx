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

import { sofa13Alpha, SOFA13_COLORS } from 'src/sections/sofa13/sofa13-data';
import { Sofa13Section, Sofa13PageHero } from 'src/sections/sofa13-pages/sofa13-page-hero';
import { sofa13FormatPrice, SOFA13_PAGE_IMAGES, SOFA13_PAGE_PRODUCTS, SOFA13_PAGE_PRODUCT_CATEGORIES } from 'src/sections/sofa13-pages/sofa13-pages-data';

export default function Page() {
  return (
    <>
      <Helmet><title>Sản phẩm — Sofa13</title></Helmet>
      <Sofa13PageHero overline="SẢN PHẨM" title={<>SOFA13 <span>SẢN PHẨM</span></>} subtitle="Velvet, da Ý, art deco noir & gold. Mỗi sản phẩm là một tác phẩm." image={SOFA13_PAGE_IMAGES.prod1} />

      <Sofa13Section>
        <Grid container spacing={4}>
          <Grid xs={12} md={3}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inLeft} sx={{ position: 'sticky', top: 80 }}>
              {Object.entries(SOFA13_PAGE_PRODUCT_CATEGORIES).map(([key, items]) => (
                <Stack key={key} spacing={1.5}>
                  <Typography variant="overline" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.4), letterSpacing: 2, fontWeight: 700 }}>
                    {key === 'types' ? 'LOẠI SOFA' : key === 'styles' ? 'PHONG CÁCH' : key === 'spaces' ? 'KHÔNG GIAN' : key === 'sizes' ? 'KÍCH THƯỚC' : 'GIÁ'}
                  </Typography>
                  {items.map((item: any) => (
                    <Link component={RouterLink} key={item.slug} href={`/sofa13/products/category/${item.slug}`} sx={{ textDecoration: 'none', '&:hover .MuiTypography-root': { color: SOFA13_COLORS.gold } }}>
                      <Typography variant="body2" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5), transition: 'color 0.2s', fontWeight: 700 }}>{item.label}</Typography>
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
          <Grid xs={12} md={9}>
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
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: SOFA13_COLORS.gold }}>{sofa13FormatPrice(product.price)}</Typography>
                        {product.oldPrice && <Typography variant="body2" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.3), textDecoration: 'line-through' }}>{sofa13FormatPrice(product.oldPrice)}</Typography>}
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Sofa13Section>
    </>
  );
}
