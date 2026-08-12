import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { SOFA15_COLORS } from 'src/sections/sofa15/sofa15-data';
import { Sofa15Section, Sofa15PageHero } from 'src/sections/sofa15-pages/sofa15-page-hero';
import { SOFA15_PAGE_IMAGES, SOFA15_PAGE_COLLECTIONS } from 'src/sections/sofa15-pages/sofa15-pages-data';

export default function Page() {
  const theme = useTheme();
  return (
    <>
      <Helmet><title>Bộ sưu tập — Sofa15</title></Helmet>
      <Sofa15PageHero overline="BỘ SƯU TẬP" title={<>BỘ SƯU <span>TẬP</span></>} subtitle="Gatsby Gold, Emerald Deco, Black Pearl — mỗi bộ sưu tập một tone Art Deco." image={SOFA15_PAGE_IMAGES.prod2} />

      <Sofa15Section bg="black">
        <Grid container spacing={4}>
          {SOFA15_PAGE_COLLECTIONS.map((col) => (
            <Grid key={col.id} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={`/sofa15/collections/${col.slug}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .col-img': { transform: 'scale(1.05)' }, '&:hover .col-title': { color: col.accent } }}>
                <Box sx={{ overflow: 'hidden', position: 'relative', aspectRatio: '4/3', border: `1px solid ${varAlpha(col.accent, 0.3)}` }}>
                  <Box className="col-img" component="img" src={col.image} alt={col.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                  <Box sx={{ position: 'absolute', bottom: 0, right: 0, bgcolor: col.accent, color: SOFA15_COLORS.black, px: 1.5, py: 0.5, fontWeight: 'fontWeightMedium', fontSize: 12 }}>{col.count}</Box>
                </Box>
                <Typography className="col-title" variant="h5" sx={{ fontWeight: 'fontWeightLight', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily, transition: 'color 0.2s' }}>{col.name}</Typography>
                <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4), fontWeight: 'fontWeightLight' }}>{col.description}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa15Section>
    </>
  );
}
