import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA7_COLORS } from 'src/sections/sofa7/sofa7-data';
import { Sofa7Section, Sofa7PageHero } from 'src/sections/sofa7-pages/sofa7-page-hero';
import {
  formatSofa7Price,
  SOFA7_PAGE_PRODUCTS,
  SOFA7_PAGE_PRODUCT_CATEGORIES,
} from 'src/sections/sofa7-pages/sofa7-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Danh mục Sofa — Sofa7' };

export default function Page() {
  const theme = useTheme();
  const { slug } = useParams();

  const allCategories = [
    ...SOFA7_PAGE_PRODUCT_CATEGORIES.types,
    ...SOFA7_PAGE_PRODUCT_CATEGORIES.styles,
  ];
  const category = allCategories.find((c) => c.slug === slug);

  if (!category) {
    return (
      <>
        <Helmet>
          <title>{metadata.title}</title>
        </Helmet>
        <Sofa7Section>
          <Stack spacing={4} alignItems="center" sx={{ textAlign: 'center', py: { xs: 10, md: 16 } }}>
            <Iconify icon="solar:danger-bold-duotone" width={64} sx={{ color: SOFA7_COLORS.red }} />
            <Typography variant="h3" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
              DANH MỤC KHÔNG TỒN TẠI
            </Typography>
            <Button component={RouterLink} href="/sofa7/products" size="large" variant="contained" sx={{ borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, fontWeight: 'fontWeightBold', '&:hover': { bgcolor: SOFA7_COLORS.cyan } }} startIcon={<Iconify icon="solar:arrow-left-bold-duotone" />}>
              VỀ TRANG SẢN PHẨM
            </Button>
          </Stack>
        </Sofa7Section>
      </>
    );
  }

  const isStyle = SOFA7_PAGE_PRODUCT_CATEGORIES.styles.some((s) => s.slug === slug);
  const filtered = SOFA7_PAGE_PRODUCTS.filter((p) =>
    isStyle ? p.style === slug : p.category === slug
  );

  return (
    <>
      <Helmet>
        <title>{`Sofa7 — ${category.label}`}</title>
      </Helmet>

      <Sofa7PageHero
        overline="DANH MỤC"
        title={
          <>
            {category.label.toUpperCase().split(' ').slice(0, -1).join(' ')}{' '}
            <span>{category.label.toUpperCase().split(' ').slice(-1)}</span>
          </>
        }
        subtitle={`${filtered.length} sản phẩm trong danh mục này. Vibe loft, industrial, urban.`}
        image="https://images.pexels.com/photos/4846097/pexels-photo-4846097.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <Sofa7Section>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
            {filtered.length} SẢN PHẨM
          </Typography>
          <Button component={RouterLink} href="/sofa7/products" endIcon={<Iconify icon="solar:arrow-left-bold-duotone" />} sx={{ borderRadius: 0, textTransform: 'uppercase', fontWeight: 'fontWeightBold' }}>
            Tất cả sản phẩm
          </Button>
        </Stack>

        {filtered.length === 0 ? (
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 10 }}>
            <Iconify icon="solar:box-bold-duotone" width={64} sx={{ color: 'text.disabled' }} />
            <Typography variant="h5" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
              CHƯA CÓ SẢN PHẨM
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Danh mục này hiện chưa có sản phẩm. Vui lòng quay lại sau.</Typography>
          </Stack>
        ) : (
          <Grid container spacing={3}>
            {filtered.map((product) => (
              <Grid key={product.id} xs={12} sm={6} md={4}>
                <Stack
                  component={m.div}
                  variants={varFade({ distance: 24 }).inUp}
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
                    <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
                      {product.name}
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Rating value={product.rating} readOnly precision={0.1} size="small" sx={{ '& .MuiRating-iconFilled': { color: SOFA7_COLORS.electric } }} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>({product.reviews})</Typography>
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
        )}
      </Sofa7Section>
    </>
  );
}
