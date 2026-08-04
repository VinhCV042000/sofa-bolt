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

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa1PageHero } from 'src/sections/sofa1-pages/sofa1-page-hero';
import {
  SOFA1_PAGE_IMAGES,
  SOFA1_PRODUCTS,
  SOFA1_PRODUCT_CATEGORIES,
  formatSofa1Price,
} from 'src/sections/sofa1-pages/sofa1-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Sản phẩm - Casa Sofa' };

const FILTER_GROUPS = [
  { key: 'types', label: 'Loại sofa' },
  { key: 'styles', label: 'Phong cách' },
  { key: 'spaces', label: 'Không gian' },
  { key: 'sizes', label: 'Kích cỡ' },
  { key: 'prices', label: 'Mức giá' },
] as const;

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa1PageHero
        overline="Sản phẩm"
        title="Bộ sưu tập sofa cao cấp"
        subtitle="Khám phá hơn 80 mẫu sofa thiết kế độc quyền — từ Bắc Âu tối giản đến Tân cổ điển sang trọng."
        image={SOFA1_PAGE_IMAGES.aboutHero}
      />

      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={{ xs: 4, md: 6 }}>
            {/* Sidebar */}
            <Grid xs={12} md={3}>
              <Stack spacing={3} sx={{ position: { md: 'sticky' }, top: { md: 88 }, p: 3, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                <Typography variant="overline" sx={{ color: 'text.disabled' }}>Bộ lọc</Typography>
                {FILTER_GROUPS.map((group) => (
                  <Stack key={group.key} spacing={1}>
                    <Typography variant="subtitle2">{group.label}</Typography>
                    <Stack spacing={0.5}>
                      {SOFA1_PRODUCT_CATEGORIES[group.key].map((item) => (
                        <Button
                          key={item.slug}
                          component={RouterLink}
                          href={`/sofa1/products/category/${item.slug}`}
                          size="small"
                          sx={{ justifyContent: 'flex-start', color: 'text.secondary', textTransform: 'none', fontWeight: 'fontWeightRegular', '&:hover': { color: 'primary.main', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08) } }}
                        >
                          {item.label}
                        </Button>
                      ))}
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </Grid>

            {/* Products */}
            <Grid xs={12} md={9}>
              <Grid container spacing={3}>
                {SOFA1_PRODUCTS.map((product) => (
                  <Grid key={product.id} xs={12} sm={6} md={4}>
                    <Stack
                      component={m.div}
                      variants={varFade({ distance: 24 }).inUp}
                      sx={{ height: 1, borderRadius: 2, overflow: 'hidden', bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
                    >
                      <Box sx={{ position: 'relative' }}>
                        <Box component="img" src={product.image} alt={product.name} sx={{ width: 1, aspectRatio: '4/3', objectFit: 'cover' }} />
                        {product.badge && (
                          <Box sx={{ position: 'absolute', top: 12, left: 12, px: 1.5, py: 0.5, borderRadius: 1, bgcolor: 'primary.main', color: 'common.white' }}>
                            <Typography variant="caption" sx={{ fontWeight: 'fontWeightBold' }}>{product.badge}</Typography>
                          </Box>
                        )}
                      </Box>
                      <Stack spacing={1.5} sx={{ p: 2.5 }}>
                        <Typography variant="subtitle1">{product.name}</Typography>
                        <Stack direction="row" alignItems="center" spacing={0.5}>
                          <Rating value={product.rating} precision={0.1} size="small" readOnly />
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>({product.reviews})</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 'fontWeightBold' }}>{formatSofa1Price(product.price)}</Typography>
                          {product.oldPrice && (
                            <Typography variant="body2" sx={{ color: 'text.disabled', textDecoration: 'line-through' }}>{formatSofa1Price(product.oldPrice)}</Typography>
                          )}
                        </Stack>
                        <Button component={RouterLink} href={`/sofa1/products/${product.id}`} variant="outlined" size="small" startIcon={<Iconify icon="solar:eye-bold-duotone" />}>
                          Xem chi tiết
                        </Button>
                      </Stack>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
