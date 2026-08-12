import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { varFade } from 'src/components/animate';

import { SOFA18_COLORS } from 'src/sections/sofa18/sofa18-data';
import { Sofa18Section, Sofa18PageHero } from 'src/sections/sofa18-pages/sofa18-page-hero';
import { formatSofa18Price, SOFA18_PAGE_IMAGES, SOFA18_PAGE_PRODUCTS, SOFA18_PAGE_PRODUCT_CATEGORIES } from 'src/sections/sofa18-pages/sofa18-pages-data';

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Sản phẩm — Muji-An</title>
      </Helmet>

      <Sofa18PageHero overline="SẢN PHẨM" title={<>TÁC <span>PHẨM</span></>} subtitle="Sofa wabi-sabi thủ công — linen, hemp, hinoki cedar." image={SOFA18_PAGE_IMAGES.product1} />

      <Sofa18Section>
        <Stack spacing={6}>
          {(['types', 'styles', 'spaces', 'sizes', 'prices'] as const).map((groupKey) => (
            <Stack key={groupKey} spacing={2} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold', color: SOFA18_COLORS.charcoal }}>
                {groupKey === 'types' ? 'Sofa phòng khách' : groupKey === 'styles' ? 'Theo phong cách' : groupKey === 'spaces' ? 'Theo không gian' : groupKey === 'sizes' ? 'Theo kích thước' : 'Theo giá'}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {SOFA18_PAGE_PRODUCT_CATEGORIES[groupKey].map((cat) => (
                  <Chip key={cat.slug} label={cat.label} component={RouterLink} href={`/sofa18/products/category/${cat.slug}`} clickable sx={{ bgcolor: 'background.paper', border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`, '&:hover': { borderColor: SOFA18_COLORS.sage }, color: 'text.primary', fontWeight: 'fontWeightMedium' }} />
                ))}
              </Box>
            </Stack>
          ))}
        </Stack>
      </Sofa18Section>

      <Sofa18Section bg="paper">
        <Grid container spacing={3}>
          {SOFA18_PAGE_PRODUCTS.map((p) => (
            <Grid key={p.id} xs={12} sm={6} md={4} lg={3}>
              <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Stack component={RouterLink} href={`/sofa18/products/${p.slug}`} spacing={1.5} sx={{ textDecoration: 'none', height: 1 }}>
                  <Box sx={{ overflow: 'hidden', borderRadius: 2, aspectRatio: '4/5', position: 'relative' }}>
                    <Box component="img" src={p.image} alt={p.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s', '&:hover': { transform: 'scale(1.05)' } }} />
                    {p.badge && <Chip label={p.badge} size="small" sx={{ position: 'absolute', top: 12, left: 12, bgcolor: SOFA18_COLORS.sage, color: 'common.white', fontWeight: 'fontWeightBold' }} />}
                  </Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightBold', color: 'text.primary' }}>{p.name}</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>{p.material}</Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightBold', color: SOFA18_COLORS.sageDeep }}>{formatSofa18Price(p.price)}</Typography>
                    {p.oldPrice && <Typography variant="caption" sx={{ color: 'text.disabled', textDecoration: 'line-through' }}>{formatSofa18Price(p.oldPrice)}</Typography>}
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Sofa18Section>
    </>
  );
}
