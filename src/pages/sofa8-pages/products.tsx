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

import { SOFA8_COLORS } from 'src/sections/sofa8/sofa8-data';
import { Sofa8Section, Sofa8PageHero } from 'src/sections/sofa8-pages/sofa8-page-hero';
import {
  formatSofa8Price,
  SOFA8_PAGE_IMAGES,
  SOFA8_PAGE_PRODUCTS,
  SOFA8_PAGE_PRODUCT_CATEGORIES,
} from 'src/sections/sofa8-pages/sofa8-pages-data';

const metadata = { title: 'Sản phẩm — Sofa8' };

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa8PageHero
        overline="SẢN PHẨM"
        title={<>SOF<span>A8</span> SẢN PHẨM</>}
        subtitle="Bộ sưu tập sofa coastal — linen, bouclé, cotton. Mang biển vào không gian sống."
        image={SOFA8_PAGE_IMAGES.product1}
      />

      <Sofa8Section>
        <Grid container spacing={4}>
          {/* Filter sidebar */}
          <Grid xs={12} md={3}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inLeft} sx={{ position: 'sticky', top: 80 }}>
              {Object.entries(SOFA8_PAGE_PRODUCT_CATEGORIES).map(([key, items]) => (
                <Stack key={key} spacing={1.5}>
                  <Typography variant="overline" sx={{ color: 'text.disabled', letterSpacing: 2 }}>
                    {key === 'types' ? 'Loại sofa' : key === 'styles' ? 'Phong cách' : key === 'spaces' ? 'Không gian' : key === 'sizes' ? 'Kích thước' : 'Giá'}
                  </Typography>
                  {items.map((item: any) => (
                    <Link component={RouterLink} key={item.slug} href={`/sofa8/products/category/${item.slug}`} sx={{ textDecoration: 'none', '&:hover .MuiTypography-root': { color: SOFA8_COLORS.coral } }}>
                      <Typography variant="body2" sx={{ color: 'text.secondary', transition: 'color 0.2s' }}>{item.label}</Typography>
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>

          {/* Product grid */}
          <Grid xs={12} md={9}>
            <Grid container spacing={3}>
              {SOFA8_PAGE_PRODUCTS.map((product) => (
                <Grid key={product.id} xs={12} sm={6} md={4}>
                  <Stack
                    component={RouterLink}
                    href={`/sofa8/products/${product.slug}`}
                    spacing={2}
                    sx={{
                      textDecoration: 'none',
                      '&:hover .product-img': { transform: 'scale(1.05)' },
                      '&:hover .product-name': { color: SOFA8_COLORS.coral },
                    }}
                  >
                    <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: 3, aspectRatio: '4/5' }}>
                      {product.badge && (
                        <Chip label={product.badge} size="small" sx={{ position: 'absolute', top: 12, left: 12, zIndex: 1, bgcolor: SOFA8_COLORS.coral, color: 'common.white', fontWeight: 'fontWeightBold' }} />
                      )}
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
                        <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightBold', color: SOFA8_COLORS.ocean }}>{formatSofa8Price(product.price)}</Typography>
                        {product.oldPrice && <Typography variant="body2" sx={{ color: 'text.disabled', textDecoration: 'line-through' }}>{formatSofa8Price(product.oldPrice)}</Typography>}
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Sofa8Section>
    </>
  );
}
