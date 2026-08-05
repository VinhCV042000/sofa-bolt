import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa6PageHero } from 'src/sections/sofa6-pages/sofa6-page-hero';
import { SOFA6_COLLECTIONS, SOFA6_PAGE_IMAGES } from 'src/sections/sofa6-pages/sofa6-pages-data';
import { SOFA6_COLORS } from 'src/sections/sofa6/sofa6-data';

const metadata = { title: 'Bộ sưu tập - Sofa Earth' };

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa6PageHero overline="Bộ sưu tập" title="Bộ sưu tập Sofa Earth" subtitle="Khám phá các bộ sưu tập sofa tự nhiên — từ mới nhất đến bestseller." image={SOFA6_PAGE_IMAGES.aboutHero} />

      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={4}>
            {SOFA6_COLLECTIONS.map((col) => (
              <Grid key={col.id} xs={12} sm={6}>
                <Box
                  component={RouterLink}
                  href={`/sofa6/collections/${col.slug}`}
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 3,
                    aspectRatio: '4/5',
                    cursor: 'pointer',
                    display: 'block',
                    textDecoration: 'none',
                  }}
                >
                  <Box component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ height: 1 }}>
                    <Box component="img" src={col.image} alt={col.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: (t) => t.transitions.create('transform', { duration: 500 }), '&:hover': { transform: 'scale(1.08)' } }} />
                    <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)' }} />
                    <Stack spacing={1} sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: 4, color: 'common.white' }}>
                      <Typography variant="overline" sx={{ color: SOFA6_COLORS.terracottaLight }}>{col.count}</Typography>
                      <Typography variant="h4">{col.name}</Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>{col.description}</Typography>
                    </Stack>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
