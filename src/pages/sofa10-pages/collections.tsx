import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

import { SOFA10_COLORS } from 'src/sections/sofa10/sofa10-data';
import { Sofa10PageHero, Sofa10Section } from 'src/sections/sofa10-pages/sofa10-page-hero';
import { SOFA10_PAGE_COLLECTIONS, SOFA10_PAGE_IMAGES } from 'src/sections/sofa10-pages/sofa10-pages-data';

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Bộ sưu tập — Sofa10</title>
      </Helmet>

      <Sofa10PageHero overline="BỘ SƯU TẬP" title={<>BỘ SƯU <span>TẬP</span></>} subtitle="Sumi, Tsuchi, Kami, Ki — mỗi bộ sưu tập một tone trầm." image={SOFA10_PAGE_IMAGES.product3} />

      <Sofa10Section>
        <Grid container spacing={4}>
          {SOFA10_PAGE_COLLECTIONS.map((col) => (
            <Grid key={col.id} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={`/sofa10/collections/${col.slug}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .col-img': { transform: 'scale(1.03)' }, '&:hover .col-title': { color: SOFA10_COLORS.wood } }}>
                <Box sx={{ overflow: 'hidden', borderRadius: 2, aspectRatio: '4/3', position: 'relative' }}>
                  <Box className="col-img" component="img" src={col.image} alt={col.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                  <Box sx={{ position: 'absolute', bottom: 12, right: 12, bgcolor: SOFA10_COLORS.charcoal, color: 'common.white', px: 1.5, py: 0.5, borderRadius: 1 }}>
                    <Typography variant="caption" sx={{ fontWeight: 'fontWeightLight' }}>{col.count}</Typography>
                  </Box>
                </Box>
                <Typography className="col-title" variant="h5" sx={{ fontWeight: 'fontWeightNormal', color: 'text.primary', transition: 'color 0.2s' }}>{col.name}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 'fontWeightLight' }}>{col.description}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa10Section>
    </>
  );
}
