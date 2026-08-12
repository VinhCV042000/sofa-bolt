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

import { SOFA9_COLORS } from 'src/sections/sofa9/sofa9-data';
import { Sofa9Section, Sofa9PageHero } from 'src/sections/sofa9-pages/sofa9-page-hero';
import {
  formatSofa9Price,
  SOFA9_PAGE_IMAGES,
  SOFA9_PAGE_PRODUCTS,
  SOFA9_PAGE_PRODUCT_CATEGORIES,
} from 'src/sections/sofa9-pages/sofa9-pages-data';

const metadata = { title: 'Sản phẩm — Sofa9' };

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa9PageHero overline="SẢN PHẨM" title={<>SOF<span>A9</span> SẢN PHẨM</>} subtitle="Bộ sưu tập sofa retro — velvet neon, họa tiết hình học. Vui vẻ không chán." image={SOFA9_PAGE_IMAGES.product1} />

      <Sofa9Section>
        <Grid container spacing={4}>
          <Grid xs={12} md={3}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inLeft} sx={{ position: 'sticky', top: 80 }}>
              {Object.entries(SOFA9_PAGE_PRODUCT_CATEGORIES).map(([key, items]) => (
                <Stack key={key} spacing={1.5}>
                  <Typography variant="overline" sx={{ color: 'text.disabled', letterSpacing: 2 }}>
                    {key === 'types' ? 'Loại sofa' : key === 'styles' ? 'Phong cách' : key === 'spaces' ? 'Không gian' : key === 'sizes' ? 'Kích thước' : 'Giá'}
                  </Typography>
                  {items.map((item: any) => (
                    <Link component={RouterLink} key={item.slug} href={`/sofa9/products/category/${item.slug}`} sx={{ textDecoration: 'none', '&:hover .MuiTypography-root': { color: SOFA9_COLORS.pink } }}>
                      <Typography variant="body2" sx={{ color: 'text.secondary', transition: 'color 0.2s' }}>{item.label}</Typography>
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>

          <Grid xs={12} md={9}>
            <Grid container spacing={3}>
              {SOFA9_PAGE_PRODUCTS.map((product) => (
                <Grid key={product.id} xs={12} sm={6} md={4}>
                  <Stack component={RouterLink} href={`/sofa9/products/${product.slug}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .product-img': { transform: 'scale(1.05)' }, '&:hover .product-name': { color: SOFA9_COLORS.pink } }}>
                    <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: 3, aspectRatio: '4/5' }}>
                      {product.badge && <Chip label={product.badge} size="small" sx={{ position: 'absolute', top: 12, left: 12, zIndex: 1, bgcolor: SOFA9_COLORS.pink, color: 'common.white', fontWeight: 'fontWeightBold' }} />}
                      <Box className="product-img" component="img" src={product.image} alt={product.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                    </Box>
                    <Stack spacing={0.5}>
                      <Typography className="product-name" variant="subtitle1" sx={{ fontWeight: 'fontWeightBold', color: 'text.primary', transition: 'color 0.2s' }}>{product.name}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{product.material}</Typography>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Rating value={product.rating} readOnly size="small" />
                        <Typography variant="caption" sx={{ color: 'text.disabled' }}>({product.reviews})</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightBold', color: SOFA9_COLORS.pink }}>{formatSofa9Price(product.price)}</Typography>
                        {product.oldPrice && <Typography variant="body2" sx={{ color: 'text.disabled', textDecoration: 'line-through' }}>{formatSofa9Price(product.oldPrice)}</Typography>}
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Sofa9Section>
    </>
  );
}
