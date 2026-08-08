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

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';
import { varAlpha, textGradient } from 'src/theme/styles';

import { SOFA15_COLORS } from 'src/sections/sofa15/sofa15-data';
import { Sofa15PageHero, Sofa15Section } from 'src/sections/sofa15-pages/sofa15-page-hero';
import { SOFA15_PAGE_PRODUCTS, SOFA15_PAGE_IMAGES, SOFA15_PAGE_PRODUCT_CATEGORIES, sofa15FormatPrice } from 'src/sections/sofa15-pages/sofa15-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const slug = params.slug || '';
  const allCategories = [...SOFA15_PAGE_PRODUCT_CATEGORIES.types, ...SOFA15_PAGE_PRODUCT_CATEGORIES.styles, ...SOFA15_PAGE_PRODUCT_CATEGORIES.spaces, ...SOFA15_PAGE_PRODUCT_CATEGORIES.sizes, ...SOFA15_PAGE_PRODUCT_CATEGORIES.prices];
  const category = allCategories.find((c) => c.slug === slug);
  const label = category?.label || 'Tất cả sản phẩm';
  const filtered = SOFA15_PAGE_PRODUCTS.filter((p) => p.category === slug || p.style === slug);

  return (
    <>
      <Helmet><title>{label} — Sofa15</title></Helmet>
      <Sofa15PageHero overline="DANH MỤC" title={<><span>{label.toUpperCase()}</span></>} subtitle={`${filtered.length} tác phẩm trong danh mục ${label.toLowerCase()}.`} image={SOFA15_PAGE_IMAGES.prod1} />

      <Sofa15Section bg="black">
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 4, flexWrap: 'wrap' }}>
          <RouterLink href="/sofa15/products" sx={{ textDecoration: 'none' }}><Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4), fontWeight: 'fontWeightLight', '&:hover': { color: SOFA15_COLORS.gold } }}>Sản phẩm</Typography></RouterLink>
          <Iconify icon="solar:alt-arrow-right-linear" width={16} sx={{ color: varAlpha('#FFFFFF', 0.2) }} />
          <Typography variant="body2" sx={{ color: SOFA15_COLORS.gold, fontWeight: 'fontWeightMedium' }}>{label}</Typography>
        </Stack>

        {filtered.length === 0 ? (
          <Stack spacing={2} alignItems="center" sx={{ py: 10, textAlign: 'center' }}>
            <Iconify icon="solar:cart-large-2-minimalistic-bold-duotone" width={80} sx={{ color: varAlpha('#FFFFFF', 0.2) }} />
            <Typography variant="h5" sx={{ color: varAlpha('#FFFFFF', 0.3), fontWeight: 'fontWeightLight', fontFamily: theme.typography.fontSecondaryFamily }}>Chưa có tác phẩm trong danh mục này</Typography>
          </Stack>
        ) : (
          <Grid container spacing={3}>
            {filtered.map((product) => (
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
                    <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightMedium', ...textGradient(`90deg, ${SOFA15_COLORS.goldLight} 0%, ${SOFA15_COLORS.gold} 50%, ${SOFA15_COLORS.goldDark} 100%`) }}>{sofa15FormatPrice(product.price)}</Typography>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        )}
      </Sofa15Section>
    </>
  );
}
