import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { sofa14Alpha, SOFA14_COLORS } from 'src/sections/sofa14/sofa14-data';
import { Sofa14Section, Sofa14PageHero } from 'src/sections/sofa14-pages/sofa14-page-hero';
import { SOFA14_PAGE_IMAGES, SOFA14_PAGE_COLLECTIONS } from 'src/sections/sofa14-pages/sofa14-pages-data';

export default function Page() {
  return (
    <>
      <Helmet><title>Bộ sưu tập — Sofa14</title></Helmet>
      <Sofa14PageHero overline="BỘ SƯU TẬP" title={<>BỘ SƯU <span>TẬP</span></>} subtitle="Cloud Mint, Sky Dream, Coral Pop — mỗi bộ sưu tập một tone pastel." image={SOFA14_PAGE_IMAGES.prod3} />

      <Sofa14Section>
        <Grid container spacing={4}>
          {SOFA14_PAGE_COLLECTIONS.map((col) => (
            <Grid key={col.id} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={`/sofa14/collections/${col.slug}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .col-img': { transform: 'scale(1.05)' }, '&:hover .col-title': { color: col.accent } }}>
                <Box sx={{ overflow: 'hidden', position: 'relative', aspectRatio: '4/3', borderRadius: '28px', border: `6px solid ${SOFA14_COLORS.white}`, boxShadow: `4px 4px 0 ${sofa14Alpha(col.accent, 0.4)}` }}>
                  <Box className="col-img" component="img" src={col.image} alt={col.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                  <Box sx={{ position: 'absolute', bottom: 12, right: 12, bgcolor: col.accent, color: SOFA14_COLORS.ink, px: 1.5, py: 0.5, fontWeight: 800, fontSize: 12, borderRadius: 99 }}>{col.count}</Box>
                </Box>
                <Typography className="col-title" variant="h5" sx={{ fontWeight: 800, color: SOFA14_COLORS.ink, transition: 'color 0.2s' }}>{col.name}</Typography>
                <Typography variant="body2" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.7), fontWeight: 700 }}>{col.description}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa14Section>
    </>
  );
}
