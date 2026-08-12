import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varFade } from 'src/components/animate';

import { SOFA18_COLORS } from 'src/sections/sofa18/sofa18-data';
import { Sofa18Section, Sofa18PageHero } from 'src/sections/sofa18-pages/sofa18-page-hero';
import { formatSofa18Price, SOFA18_PAGE_IMAGES, SOFA18_PAGE_PRODUCTS, SOFA18_PAGE_PRODUCT_CATEGORIES } from 'src/sections/sofa18-pages/sofa18-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const cat = params.cat || '';

  const allCats = [
    ...SOFA18_PAGE_PRODUCT_CATEGORIES.types,
    ...SOFA18_PAGE_PRODUCT_CATEGORIES.styles,
    ...SOFA18_PAGE_PRODUCT_CATEGORIES.spaces,
    ...SOFA18_PAGE_PRODUCT_CATEGORIES.sizes,
    ...SOFA18_PAGE_PRODUCT_CATEGORIES.prices,
  ];
  const catLabel = allCats.find((c) => c.slug === cat)?.label || 'Tất cả';

  const filtered = cat
    ? SOFA18_PAGE_PRODUCTS.filter((p) => p.category === cat || p.style === cat)
    : SOFA18_PAGE_PRODUCTS;

  return (
    <>
      <Helmet>
        <title>{catLabel} — Muji-An</title>
      </Helmet>

      <Sofa18PageHero overline="DANH MỤC" title={<>{catLabel.toUpperCase()}</>} subtitle="Sofa wabi-sabi theo danh mục." image={SOFA18_PAGE_IMAGES.product1} />

      <Sofa18Section>
        <Grid container spacing={3}>
          {filtered.map((p) => (
            <Grid key={p.id} xs={12} sm={6} md={4} lg={3}>
              <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Stack component={RouterLink} href={`/sofa18/products/${p.slug}`} spacing={1.5} sx={{ textDecoration: 'none', height: 1 }}>
                  <Box sx={{ overflow: 'hidden', borderRadius: 2, aspectRatio: '4/5', position: 'relative' }}>
                    <Box component="img" src={p.image} alt={p.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s', '&:hover': { transform: 'scale(1.05)' } }} />
                    {p.badge && <Chip label={p.badge} size="small" sx={{ position: 'absolute', top: 12, left: 12, bgcolor: SOFA18_COLORS.sage, color: 'common.white', fontWeight: 'fontWeightBold' }} />}
                  </Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightBold', color: 'text.primary' }}>{p.name}</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>{p.material}</Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightBold', color: SOFA18_COLORS.sageDeep }}>{formatSofa18Price(p.price)}</Typography>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Sofa18Section>
    </>
  );
}
