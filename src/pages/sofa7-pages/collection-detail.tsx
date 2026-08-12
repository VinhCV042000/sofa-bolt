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
  SOFA7_PAGE_COLLECTIONS,
} from 'src/sections/sofa7-pages/sofa7-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Bộ sưu tập — Sofa7' };

export default function Page() {
  const theme = useTheme();
  const { slug } = useParams();

  const collection = SOFA7_PAGE_COLLECTIONS.find((c) => c.slug === slug);

  if (!collection) {
    return (
      <>
        <Helmet>
          <title>{metadata.title}</title>
        </Helmet>
        <Sofa7Section>
          <Stack spacing={4} alignItems="center" sx={{ textAlign: 'center', py: { xs: 10, md: 16 } }}>
            <Iconify icon="solar:danger-bold-duotone" width={64} sx={{ color: SOFA7_COLORS.red }} />
            <Typography variant="h3" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
              BỘ SƯU TẬP KHÔNG TỒN TẠI
            </Typography>
            <Button component={RouterLink} href="/sofa7/collections" size="large" variant="contained" sx={{ borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, fontWeight: 'fontWeightBold', '&:hover': { bgcolor: SOFA7_COLORS.cyan } }} startIcon={<Iconify icon="solar:arrow-left-bold-duotone" />}>
              VỀ TRANG BỘ SƯU TẬP
            </Button>
          </Stack>
        </Sofa7Section>
      </>
    );
  }

  // Map collection to products — use slug-based filtering with fallbacks
  const collectionProductMap: Record<string, string[]> = {
    new: ['3', '5', '7', '9'],
    featured: ['1', '2', '4', '6'],
    seasonal: ['2', '5', '9', '10'],
    luxury: ['3', '6', '1', '8'],
    bestseller: ['2', '4', '10', '1'],
  };
  const filteredIds = collectionProductMap[collection.slug] ?? [];
  const filtered = filteredIds.length > 0
    ? SOFA7_PAGE_PRODUCTS.filter((p) => filteredIds.includes(p.id))
    : SOFA7_PAGE_PRODUCTS.slice(0, 6);

  return (
    <>
      <Helmet>
        <title>{`Sofa7 — ${collection.name}`}</title>
      </Helmet>

      <Sofa7PageHero
        overline="BỘ SƯU TẬP"
        title={
          <>
            {collection.name.toUpperCase().split(' ').slice(0, -1).join(' ')}{' '}
            <span>{collection.name.toUpperCase().split(' ').slice(-1)}</span>
          </>
        }
        subtitle={collection.description}
        image={collection.image}
      />

      <Sofa7Section>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
            {filtered.length} SẢN PHẨM · {collection.count}
          </Typography>
          <Button component={RouterLink} href="/sofa7/collections" endIcon={<Iconify icon="solar:arrow-left-bold-duotone" />} sx={{ borderRadius: 0, textTransform: 'uppercase', fontWeight: 'fontWeightBold' }}>
            Tất cả bộ sưu tập
          </Button>
        </Stack>

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
      </Sofa7Section>
    </>
  );
}
