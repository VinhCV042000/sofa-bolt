import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { SOFA16_COLORS } from 'src/sections/sofa16/sofa16-data';
import { Sofa16Section, Sofa16PageHero } from 'src/sections/sofa16-pages/sofa16-page-hero';
import { sofa16FormatPrice, SOFA16_PAGE_IMAGES, SOFA16_PAGE_PRODUCTS, SOFA16_PAGE_PRODUCT_CATEGORIES } from 'src/sections/sofa16-pages/sofa16-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const slug = params.slug || '';
  const allCategories = [...SOFA16_PAGE_PRODUCT_CATEGORIES.types, ...SOFA16_PAGE_PRODUCT_CATEGORIES.styles, ...SOFA16_PAGE_PRODUCT_CATEGORIES.spaces, ...SOFA16_PAGE_PRODUCT_CATEGORIES.sizes, ...SOFA16_PAGE_PRODUCT_CATEGORIES.prices];
  const category = allCategories.find((c) => c.slug === slug);
  const label = category?.label || 'Tất cả sản phẩm';
  const filtered = SOFA16_PAGE_PRODUCTS.filter((p) => p.category === slug || p.style === slug);

  return (
    <>
      <Helmet><title>{label} — Sofa16</title></Helmet>
      <Sofa16PageHero overline="DANH MỤC" title={<span>{label.toUpperCase()}</span>} subtitle={`${filtered.length} tác phẩm trong danh mục ${label.toLowerCase()}.`} image={SOFA16_PAGE_IMAGES.prod1} />

      <Sofa16Section bg="cream">
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 4, flexWrap: 'wrap' }}>
          <Link component={RouterLink} href="/sofa16/products" sx={{ textDecoration: 'none' }}><Typography variant="body2" sx={{ color: SOFA16_COLORS.inkSoft, fontWeight: 'fontWeightLight', '&:hover': { color: SOFA16_COLORS.terracotta } }}>Sản phẩm</Typography></Link>
          <Iconify icon="solar:alt-arrow-right-linear" width={16} sx={{ color: SOFA16_COLORS.inkSoft, opacity: 0.5 }} />
          <Typography variant="body2" sx={{ color: SOFA16_COLORS.terracotta, fontWeight: 'fontWeightMedium' }}>{label}</Typography>
        </Stack>

        {filtered.length === 0 ? (
          <Stack spacing={2} alignItems="center" sx={{ py: 10, textAlign: 'center' }}>
            <Iconify icon="solar:cart-large-2-minimalistic-bold-duotone" width={80} sx={{ color: varAlpha(SOFA16_COLORS.terracotta, 0.3) }} />
            <Typography variant="h5" sx={{ color: SOFA16_COLORS.inkSoft, fontWeight: 'fontWeightLight', fontFamily: theme.typography.fontSecondaryFamily }}>Chưa có tác phẩm trong danh mục này</Typography>
          </Stack>
        ) : (
          <Grid container spacing={3}>
            {filtered.map((product) => (
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
                    <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightMedium', ...textGradient(`90deg, ${SOFA16_COLORS.terracotta} 0%, ${SOFA16_COLORS.terracottaDeep} 100%`) }}>{sofa16FormatPrice(product.price)}</Typography>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        )}
      </Sofa16Section>
    </>
  );
}
