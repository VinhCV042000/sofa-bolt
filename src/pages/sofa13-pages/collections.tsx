import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { sofa13Alpha, SOFA13_COLORS } from 'src/sections/sofa13/sofa13-data';
import { Sofa13PageHero, Sofa13Section } from 'src/sections/sofa13-pages/sofa13-page-hero';
import { SOFA13_PAGE_COLLECTIONS, SOFA13_PAGE_IMAGES } from 'src/sections/sofa13-pages/sofa13-pages-data';

export default function Page() {
  return (
    <>
      <Helmet><title>Bộ sưu tập — Sofa13</title></Helmet>
      <Sofa13PageHero overline="BỘ SƯU TẬP" title={<>BỘ SƯU <span>TẬP</span></>} subtitle="Gatsby Gold, Noir Emerald, Sunburst Ivory — mỗi bộ sưu tập một tone art deco." image={SOFA13_PAGE_IMAGES.prod3} />

      <Sofa13Section>
        <Grid container spacing={4}>
          {SOFA13_PAGE_COLLECTIONS.map((col) => (
            <Grid key={col.id} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={`/sofa13/collections/${col.slug}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .col-img': { transform: 'scale(1.05)' }, '&:hover .col-title': { color: col.accent } }}>
                <Box sx={{ overflow: 'hidden', position: 'relative', aspectRatio: '4/3', border: `1px solid ${sofa13Alpha(col.accent, 0.4)}` }}>
                  <Box className="col-img" component="img" src={col.image} alt={col.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                  <Box sx={{ position: 'absolute', bottom: 12, right: 12, bgcolor: col.accent, color: SOFA13_COLORS.noir, px: 1.5, py: 0.5, fontWeight: 700, fontSize: 12 }}>{col.count}</Box>
                </Box>
                <Typography className="col-title" variant="h5" sx={{ fontWeight: 700, color: SOFA13_COLORS.ivory, letterSpacing: 1, transition: 'color 0.2s' }}>{col.name}</Typography>
                <Typography variant="body2" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5), fontWeight: 700 }}>{col.description}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa13Section>
    </>
  );
}
