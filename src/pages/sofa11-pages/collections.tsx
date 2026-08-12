import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { sofa11Alpha, SOFA11_COLORS } from 'src/sections/sofa11/sofa11-data';
import { Sofa11Section, Sofa11PageHero } from 'src/sections/sofa11-pages/sofa11-page-hero';
import { SOFA11_PAGE_IMAGES, SOFA11_PAGE_COLLECTIONS } from 'src/sections/sofa11-pages/sofa11-pages-data';

export default function Page() {
  return (
    <>
      <Helmet><title>Bộ sưu tập — Sofa11</title></Helmet>
      <Sofa11PageHero overline="BỘ SƯU TẬP" title={<>BỘ SƯU <span>TẬP</span></>} subtitle="Bubblegum, Acid Lime, Cyber Blue, Sunset Orange — mỗi bộ sưu tập một tone pop." image={SOFA11_PAGE_IMAGES.prod3} />

      <Sofa11Section>
        <Grid container spacing={4}>
          {SOFA11_PAGE_COLLECTIONS.map((col) => (
            <Grid key={col.id} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={`/sofa11/collections/${col.slug}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .col-img': { transform: 'scale(1.05)' }, '&:hover .col-title': { color: col.accent } }}>
                <Box sx={{ overflow: 'hidden', borderRadius: '20px 20px 20px 0', aspectRatio: '4/3', position: 'relative', border: `2px solid ${sofa11Alpha(col.accent, 0.4)}` }}>
                  <Box className="col-img" component="img" src={col.image} alt={col.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                  <Box sx={{ position: 'absolute', bottom: 12, right: 12, bgcolor: col.accent, color: SOFA11_COLORS.void, px: 1.5, py: 0.5, borderRadius: 99, fontWeight: 900, fontSize: 12 }}>{col.count}</Box>
                </Box>
                <Typography className="col-title" variant="h5" sx={{ fontWeight: 900, color: SOFA11_COLORS.cream, textTransform: 'uppercase', transition: 'color 0.2s' }}>{col.name}</Typography>
                <Typography variant="body2" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.5), fontWeight: 700 }}>{col.description}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa11Section>
    </>
  );
}
