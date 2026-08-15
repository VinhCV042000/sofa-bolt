import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { SOFA18_COLORS } from 'src/sections/sofa18/sofa18-data';
import { Sofa18Section, Sofa18PageHero } from 'src/sections/sofa18-pages/sofa18-page-hero';
import { SOFA18_PAGE_IMAGES, SOFA18_PAGE_COLLECTIONS } from 'src/sections/sofa18-pages/sofa18-pages-data';

export default function Page() {
  const theme = useTheme();
  return (
    <>
      <Helmet><title>Bộ sưu tập — Sofa18</title></Helmet>
      <Sofa18PageHero overline="BỘ SƯU TẬP" title={<>BỘ SƯU <span>TẬP</span></>} subtitle="Terracotta, Olive, Azure — mỗi bộ sưu tập một tone Riviera." image={SOFA18_PAGE_IMAGES.product2} />

      <Sofa18Section bg="cream">
        <Grid container spacing={4}>
          {SOFA18_PAGE_COLLECTIONS.map((col) => (
            <Grid key={col.id} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={`/sofa18/collections/${col.slug}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .col-img': { transform: 'scale(1.05)' }, '&:hover .col-title': { color: col.accent } }}>
                <Box sx={{ overflow: 'hidden', position: 'relative', aspectRatio: '4/3', borderRadius: 3 }}>
                  <Box className="col-img" component="img" src={col.image} alt={col.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                  <Box sx={{ position: 'absolute', bottom: 0, right: 0, bgcolor: col.accent, color: 'common.white', px: 1.5, py: 0.5, fontWeight: 'fontWeightMedium', fontSize: 12, borderRadius: '8px 0 0 0' }}>{col.count}</Box>
                </Box>
                <Typography className="col-title" variant="h5" sx={{ fontWeight: 'fontWeightLight', color: SOFA18_COLORS.ink, fontFamily: theme.typography.fontSecondaryFamily, transition: 'color 0.2s' }}>{col.name}</Typography>
                <Typography variant="body2" sx={{ color: SOFA18_COLORS.inkSoft, fontWeight: 'fontWeightLight' }}>{col.description}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa18Section>
    </>
  );
}
