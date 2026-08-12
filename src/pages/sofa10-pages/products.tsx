import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varFade } from 'src/components/animate';

import { SOFA10_COLORS } from 'src/sections/sofa10/sofa10-data';
import { Sofa10Section, Sofa10PageHero } from 'src/sections/sofa10-pages/sofa10-page-hero';
import {
  formatSofa10Price,
  SOFA10_PAGE_IMAGES,
  SOFA10_PAGE_PRODUCTS,
  SOFA10_PAGE_PRODUCT_CATEGORIES,
} from 'src/sections/sofa10-pages/sofa10-pages-data';

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Sản phẩm — Sofa10</title>
      </Helmet>

      <Sofa10PageHero overline="SẢN PHẨM" title={<>SOF<span>A10</span> SẢN PHẨM</>} subtitle="Bộ sưu tập sofa wabi-sabi — linen thô, gỗ mộc, bouclé. Mộc mạc và tĩnh tại." image={SOFA10_PAGE_IMAGES.product1} />

      <Sofa10Section>
        <Grid container spacing={4}>
          <Grid xs={12} md={3}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inLeft} sx={{ position: 'sticky', top: 80 }}>
              {Object.entries(SOFA10_PAGE_PRODUCT_CATEGORIES).map(([key, items]) => (
                <Stack key={key} spacing={1.5}>
                  <Typography variant="overline" sx={{ color: 'text.disabled', letterSpacing: 2 }}>
                    {key === 'types' ? 'Loại sofa' : key === 'styles' ? 'Phong cách' : key === 'spaces' ? 'Không gian' : key === 'sizes' ? 'Kích thước' : 'Giá'}
                  </Typography>
                  {items.map((item: any) => (
                    <Link component={RouterLink} key={item.slug} href={`/sofa10/products/category/${item.slug}`} sx={{ textDecoration: 'none', '&:hover .MuiTypography-root': { color: SOFA10_COLORS.wood } }}>
                      <Typography variant="body2" sx={{ color: 'text.secondary', transition: 'color 0.2s', fontWeight: 'fontWeightLight' }}>{item.label}</Typography>
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>

          <Grid xs={12} md={9}>
            <Grid container spacing={3}>
              {SOFA10_PAGE_PRODUCTS.map((product) => (
                <Grid key={product.id} xs={12} sm={6} md={4}>
                  <Stack component={RouterLink} href={`/sofa10/products/${product.slug}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .product-img': { transform: 'scale(1.03)' }, '&:hover .product-name': { color: SOFA10_COLORS.wood } }}>
                    <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: 2, aspectRatio: '4/5' }}>
                      {product.badge && <Chip label={product.badge} size="small" sx={{ position: 'absolute', top: 12, left: 12, zIndex: 1, bgcolor: SOFA10_COLORS.charcoal, color: 'common.white', fontWeight: 'fontWeightLight' }} />}
                      <Box className="product-img" component="img" src={product.image} alt={product.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                    </Box>
                    <Stack spacing={0.5}>
                      <Typography className="product-name" variant="subtitle1" sx={{ fontWeight: 'fontWeightNormal', color: 'text.primary', transition: 'color 0.2s' }}>{product.name}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 'fontWeightLight' }}>{product.material}</Typography>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Rating value={product.rating} readOnly size="small" />
                        <Typography variant="caption" sx={{ color: 'text.disabled' }}>({product.reviews})</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightNormal', color: SOFA10_COLORS.wood }}>{formatSofa10Price(product.price)}</Typography>
                        {product.oldPrice && <Typography variant="body2" sx={{ color: 'text.disabled', textDecoration: 'line-through' }}>{formatSofa10Price(product.oldPrice)}</Typography>}
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Sofa10Section>
    </>
  );
}
