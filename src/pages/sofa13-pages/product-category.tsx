import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { sofa13Alpha, SOFA13_COLORS } from 'src/sections/sofa13/sofa13-data';
import { Sofa13Section, Sofa13PageHero } from 'src/sections/sofa13-pages/sofa13-page-hero';
import { sofa13FormatPrice, SOFA13_PAGE_IMAGES, SOFA13_PAGE_PRODUCTS, SOFA13_PAGE_PRODUCT_CATEGORIES } from 'src/sections/sofa13-pages/sofa13-pages-data';

export default function Page() {
  const params = useParams();
  const slug = params.slug || '';
  const allCategories = [...SOFA13_PAGE_PRODUCT_CATEGORIES.types, ...SOFA13_PAGE_PRODUCT_CATEGORIES.styles, ...SOFA13_PAGE_PRODUCT_CATEGORIES.spaces, ...SOFA13_PAGE_PRODUCT_CATEGORIES.sizes, ...SOFA13_PAGE_PRODUCT_CATEGORIES.prices];
  const category = allCategories.find((c) => c.slug === slug);
  const label = category?.label || 'Tất cả sản phẩm';
  const filtered = SOFA13_PAGE_PRODUCTS.filter((p) => p.category === slug || p.style === slug);

  return (
    <>
      <Helmet><title>{label} — Sofa13</title></Helmet>
      <Sofa13PageHero overline="DANH MỤC" title={<span>{label.toUpperCase()}</span>} subtitle={`${filtered.length} sản phẩm trong danh mục ${label.toLowerCase()}.`} image={SOFA13_PAGE_IMAGES.prod1} />

      <Sofa13Section>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 4, flexWrap: 'wrap' }}>
          <Link component={RouterLink} href="/sofa13/products" sx={{ textDecoration: 'none' }}><Typography variant="body2" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5), fontWeight: 700, '&:hover': { color: SOFA13_COLORS.gold } }}>Sản phẩm</Typography></Link>
          <Iconify icon="solar:alt-arrow-right-linear" width={16} sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.3) }} />
          <Typography variant="body2" sx={{ color: SOFA13_COLORS.gold, fontWeight: 700 }}>{label}</Typography>
        </Stack>

        {filtered.length === 0 ? (
          <Stack spacing={2} alignItems="center" sx={{ py: 10, textAlign: 'center' }}>
            <Iconify icon="solar:cart-large-2-minimalistic-bold-duotone" width={80} sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.2) }} />
            <Typography variant="h5" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.4), fontWeight: 700 }}>Chưa có sản phẩm trong danh mục này</Typography>
          </Stack>
        ) : (
          <Grid container spacing={3}>
            {filtered.map((product) => (
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
        )}
      </Sofa13Section>
    </>
  );
}
