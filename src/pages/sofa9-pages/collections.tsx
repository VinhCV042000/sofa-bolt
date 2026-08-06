import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { varAlpha, textGradient } from 'src/theme/styles';
import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

import { SOFA9_COLORS } from 'src/sections/sofa9/sofa9-data';
import { Sofa9PageHero, Sofa9Section } from 'src/sections/sofa9-pages/sofa9-page-hero';
import { SOFA9_PAGE_COLLECTIONS, SOFA9_PAGE_IMAGES } from 'src/sections/sofa9-pages/sofa9-pages-data';

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Bộ sưu tập — Sofa9</title>
      </Helmet>

      <Sofa9PageHero overline="BỘ SƯU TẬP" title={<>BỘ SƯU <span>TẬP</span></>} subtitle="Pop Art, Tropical Retro, Velvet Groove, Flower Power — mỗi bộ sưu tập một vibe." image={SOFA9_PAGE_IMAGES.product3} />

      <Sofa9Section>
        <Grid container spacing={4}>
          {SOFA9_PAGE_COLLECTIONS.map((col) => (
            <Grid key={col.id} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={`/sofa9/collections/${col.slug}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .col-img': { transform: 'scale(1.05)' }, '&:hover .col-title': { color: SOFA9_COLORS.pink } }}>
                <Box sx={{ overflow: 'hidden', borderRadius: 3, aspectRatio: '4/3', position: 'relative' }}>
                  <Box className="col-img" component="img" src={col.image} alt={col.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                  <Box sx={{ position: 'absolute', bottom: 12, right: 12, bgcolor: SOFA9_COLORS.black, color: 'common.white', px: 1.5, py: 0.5, borderRadius: 20 }}>
                    <Typography variant="caption" sx={{ fontWeight: 'fontWeightBold' }}>{col.count}</Typography>
                  </Box>
                </Box>
                <Typography className="col-title" variant="h5" sx={{ fontWeight: 'fontWeightBold', color: 'text.primary', transition: 'color 0.2s' }}>{col.name}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{col.description}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa9Section>
    </>
  );
}
