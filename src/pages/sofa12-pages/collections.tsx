import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa12PageHero } from 'src/sections/sofa12-pages/sofa12-page-hero';
import { SOFA12_PAGE_IMAGES, SOFA12_PAGE_COLLECTIONS } from 'src/sections/sofa12-pages/sofa12-pages-data';

export default function Page() {
  return (
    <>
      <Helmet><title>Bộ sưu tập - TERRA ARCH</title></Helmet>
      <Sofa12PageHero overline="Bộ sưu tập" title="Bộ sưu tập sofa TERRA" subtitle="Terra · Dune · Olive Grove — vòm cong đất nung thủ công." image={SOFA12_PAGE_IMAGES.aboutHero} />
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={4}>
            {SOFA12_PAGE_COLLECTIONS.map((col) => (
              <Grid key={col.id} xs={12} sm={6} md={4}>
                <Stack component={RouterLink} href={`/sofa12/collections/${col.slug}`} sx={{ textDecoration: 'none', color: 'inherit' }}>
                  <Box component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ borderRadius: 2, overflow: 'hidden', bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, '&:hover': { transform: 'translateY(-4px)', transition: 'transform 0.3s' } }}>
                    <Box component="img" src={col.image} alt={col.name} sx={{ width: 1, aspectRatio: '4/3', objectFit: 'cover' }} />
                    <Stack spacing={1} sx={{ p: 3 }}>
                      <Typography variant="h6">{col.name}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{col.description}</Typography>
                      <Typography variant="caption" sx={{ color: 'warning.main', fontWeight: 'fontWeightBold' }}>{col.count}</Typography>
                    </Stack>
                  </Box>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
