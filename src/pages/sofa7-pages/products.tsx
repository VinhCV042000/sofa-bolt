import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA7_COLORS } from 'src/sections/sofa7/sofa7-data';
import { Sofa7PageHero, Sofa7Section } from 'src/sections/sofa7-pages/sofa7-page-hero';
import {
  SOFA7_PAGE_PRODUCTS,
  SOFA7_PAGE_PRODUCT_CATEGORIES,
  formatSofa7Price,
} from 'src/sections/sofa7-pages/sofa7-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Bộ sưu tập Sofa Urban — Sofa7' };

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa7PageHero
        overline="SẢN PHẨM"
        title={
          <>
            BỘ SƯU TẬP <span>SOFA URBAN</span>
          </>
        }
        subtitle="40+ mẫu loft design. Da thật, velvet neon, khung thép đen. Chọn vibe, chọn size, chọn color."
        image="https://images.pexels.com/photos/17264274/pexels-photo-17264274.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <Sofa7Section>
        <Grid container spacing={4}>
          {/* Sidebar filters */}
          <Grid xs={12} md={3}>
            <Stack spacing={3} sx={{ position: { md: 'sticky' }, top: { md: 100 } }}>
              <Typography variant="h5" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily, borderBottom: `3px solid ${SOFA7_COLORS.electric}`, pb: 1 }}>
                BỘ LỌC
              </Typography>
              {Object.entries(SOFA7_PAGE_PRODUCT_CATEGORIES).map(([key, items]) => (
                <Stack key={key} spacing={1.5}>
                  <Typography variant="overline" sx={{ color: SOFA7_COLORS.electric, letterSpacing: 2, fontWeight: 'fontWeightBold', textTransform: 'uppercase' }}>
                    {key === 'types' ? 'LOẠI SOFA' : key === 'styles' ? 'PHONG CÁCH' : key === 'spaces' ? 'KHÔNG GIAN' : key === 'sizes' ? 'KÍCH THƯỚC' : 'MỨC GIÁ'}
                  </Typography>
                  {items.map((item) => (
                    <Stack key={item.slug} direction="row" alignItems="center" spacing={1}>
                      <Box sx={{ width: 12, height: 12, border: `2px solid ${SOFA7_COLORS.concrete}`, borderRadius: 0, flexShrink: 0 }} />
                      <Typography variant="body2" sx={{ cursor: 'pointer', '&:hover': { color: SOFA7_COLORS.electric } }}>
                        {item.label}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              ))}
              <Button variant="contained" sx={{ borderRadius: 0, bgcolor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.electric, fontWeight: 'fontWeightBold', '&:hover': { bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete } }} startIcon={<Iconify icon="solar:filter-bold-duotone" />}>
                ÁP DỤNG
              </Button>
            </Stack>
          </Grid>

          {/* Product grid */}
          <Grid xs={12} md={9}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
                {SOFA7_PAGE_PRODUCTS.length} SẢN PHẨM
              </Typography>
              <Button endIcon={<Iconify icon="solar:sort-bold-duotone" />} sx={{ borderRadius: 0, textTransform: 'uppercase', fontWeight: 'fontWeightBold' }}>
                Sắp xếp
              </Button>
            </Stack>
            <Grid container spacing={3}>
              {SOFA7_PAGE_PRODUCTS.map((product) => (
                <Grid key={product.id} xs={12} sm={6} lg={4}>
                  <Stack
                    component={m.div}
                    variants={varFade({ distance: 24 }).inUp}
                    spacing={0}
                    sx={{
                      borderRadius: 0,
                      bgcolor: 'background.paper',
                      border: `2px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
                      '&:hover': { borderColor: SOFA7_COLORS.electric, transition: 'border-color 0.3s' },
                      overflow: 'hidden',
                    }}
                  >
                    <Box sx={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                      <Box component="img" src={product.image} alt={product.name} sx={{ width: 1, height: 1, objectFit: 'cover', '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.4s' } }} />
                      {product.badge && (
                        <Box sx={{ position: 'absolute', top: 12, left: 12, px: 1.5, py: 0.5, bgcolor: product.badge.includes('%') ? SOFA7_COLORS.red : SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, borderRadius: 0, typography: 'caption', fontWeight: 'fontWeightBold', textTransform: 'uppercase' }}>
                          {product.badge}
                        </Box>
                      )}
                    </Box>
                    <Stack spacing={1.5} sx={{ p: 2.5 }}>
                      <Typography variant="body2" sx={{ color: 'text.disabled', textTransform: 'uppercase', letterSpacing: 1, fontSize: 11 }}>
                        {product.material}
                      </Typography>
                      <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily, minHeight: 48 }}>
                        {product.name}
                      </Typography>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Rating value={product.rating} readOnly precision={0.1} size="small" sx={{ '& .MuiRating-iconFilled': { color: SOFA7_COLORS.electric } }} />
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>({product.reviews})</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        {product.colors.slice(0, 4).map((c, idx) => (
                          <Box key={idx} sx={{ width: 16, height: 16, bgcolor: c, borderRadius: 0, border: '1px solid', borderColor: 'divider' }} />
                        ))}
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="h6" sx={{ color: SOFA7_COLORS.electric, fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
                          {formatSofa7Price(product.price)}
                        </Typography>
                        {product.oldPrice && (
                          <Typography variant="body2" sx={{ color: 'text.disabled', textDecoration: 'line-through' }}>
                            {formatSofa7Price(product.oldPrice)}
                          </Typography>
                        )}
                      </Stack>
                      <Button component={RouterLink} href={`/sofa7/products/${product.id}`} variant="contained" fullWidth sx={{ borderRadius: 0, bgcolor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.electric, fontWeight: 'fontWeightBold', textTransform: 'uppercase', '&:hover': { bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete } }} startIcon={<Iconify icon="solar:eye-bold-duotone" />}>
                        Xem chi tiết
                      </Button>
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Sofa7Section>
    </>
  );
}
