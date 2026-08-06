import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';

import { useParams } from 'react-router-dom';

import { varAlpha } from 'src/theme/styles';
import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

import { SOFA9_COLORS } from 'src/sections/sofa9/sofa9-data';
import { Sofa9PageHero, Sofa9Section } from 'src/sections/sofa9-pages/sofa9-page-hero';
import {
  SOFA9_PAGE_PRODUCTS,
  SOFA9_PAGE_IMAGES,
  SOFA9_PAGE_PRODUCT_CATEGORIES,
  formatSofa9Price,
} from 'src/sections/sofa9-pages/sofa9-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const slug = params.slug || '';

  const allCategories = [
    ...SOFA9_PAGE_PRODUCT_CATEGORIES.types,
    ...SOFA9_PAGE_PRODUCT_CATEGORIES.styles,
    ...SOFA9_PAGE_PRODUCT_CATEGORIES.spaces,
    ...SOFA9_PAGE_PRODUCT_CATEGORIES.sizes,
    ...SOFA9_PAGE_PRODUCT_CATEGORIES.prices,
  ];
  const category = allCategories.find((c) => c.slug === slug);
  const label = category?.label || 'Tất cả sản phẩm';
  const filtered = SOFA9_PAGE_PRODUCTS.filter((p) => p.category === slug || p.style === slug);

  return (
    <>
      <Helmet>
        <title>{label} — Sofa9</title>
      </Helmet>

      <Sofa9PageHero overline="DANH MỤC" title={<><span>{label.toUpperCase()}</span></>} subtitle={`${filtered.length} sản phẩm trong danh mục ${label.toLowerCase()}.`} image={SOFA9_PAGE_IMAGES.product1} />

      <Sofa9Section>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 4, flexWrap: 'wrap' }}>
          <RouterLink href="/sofa9/products" sx={{ textDecoration: 'none' }}>
            <Typography variant="body2" sx={{ color: 'text.secondary', '&:hover': { color: SOFA9_COLORS.pink } }}>Sản phẩm</Typography>
          </RouterLink>
          <Iconify icon="solar:alt-arrow-right-linear" width={16} sx={{ color: 'text.disabled' }} />
          <Typography variant="body2" sx={{ color: SOFA9_COLORS.pink, fontWeight: 'fontWeightBold' }}>{label}</Typography>
        </Stack>

        {filtered.length === 0 ? (
          <Stack spacing={2} alignItems="center" sx={{ py: 10, textAlign: 'center' }}>
            <Iconify icon="solar:cart-large-2-minimalistic-bold-duotone" width={80} sx={{ color: 'text.disabled' }} />
            <Typography variant="h5" sx={{ color: 'text.secondary' }}>Chưa có sản phẩm trong danh mục này</Typography>
          </Stack>
        ) : (
          <Grid container spacing={3}>
            {filtered.map((product) => (
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
        )}
      </Sofa9Section>
    </>
  );
}
