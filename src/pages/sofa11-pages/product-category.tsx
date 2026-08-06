import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';

import { useParams } from 'react-router-dom';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

import { sofa11Alpha, SOFA11_COLORS } from 'src/sections/sofa11/sofa11-data';
import { Sofa11PageHero, Sofa11Section } from 'src/sections/sofa11-pages/sofa11-page-hero';
import { SOFA11_PAGE_PRODUCTS, SOFA11_PAGE_IMAGES, SOFA11_PAGE_PRODUCT_CATEGORIES, formatSofa11Price } from 'src/sections/sofa11-pages/sofa11-pages-data';

export default function Page() {
  const params = useParams();
  const slug = params.slug || '';
  const allCategories = [...SOFA11_PAGE_PRODUCT_CATEGORIES.types, ...SOFA11_PAGE_PRODUCT_CATEGORIES.styles, ...SOFA11_PAGE_PRODUCT_CATEGORIES.spaces, ...SOFA11_PAGE_PRODUCT_CATEGORIES.sizes, ...SOFA11_PAGE_PRODUCT_CATEGORIES.prices];
  const category = allCategories.find((c) => c.slug === slug);
  const label = category?.label || 'Tất cả sản phẩm';
  const filtered = SOFA11_PAGE_PRODUCTS.filter((p) => p.category === slug || p.style === slug);

  return (
    <>
      <Helmet><title>{label} — Sofa11</title></Helmet>
      <Sofa11PageHero overline="DANH MỤC" title={<><span>{label.toUpperCase()}</span></>} subtitle={`${filtered.length} sản phẩm trong danh mục ${label.toLowerCase()}.`} image={SOFA11_PAGE_IMAGES.prod1} />

      <Sofa11Section>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 4, flexWrap: 'wrap' }}>
          <RouterLink href="/sofa11/products" sx={{ textDecoration: 'none' }}><Typography variant="body2" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.5), fontWeight: 700, '&:hover': { color: SOFA11_COLORS.lime } }}>Sản phẩm</Typography></RouterLink>
          <Iconify icon="solar:alt-arrow-right-linear" width={16} sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.3) }} />
          <Typography variant="body2" sx={{ color: SOFA11_COLORS.lime, fontWeight: 900 }}>{label}</Typography>
        </Stack>

        {filtered.length === 0 ? (
          <Stack spacing={2} alignItems="center" sx={{ py: 10, textAlign: 'center' }}>
            <Iconify icon="solar:cart-large-2-minimalistic-bold-duotone" width={80} sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.2) }} />
            <Typography variant="h5" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.4), fontWeight: 700 }}>Chưa có sản phẩm trong danh mục này</Typography>
          </Stack>
        ) : (
          <Grid container spacing={3}>
            {filtered.map((product) => (
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
        )}
      </Sofa11Section>
    </>
  );
}
