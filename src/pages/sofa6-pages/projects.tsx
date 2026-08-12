import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA6_COLORS } from 'src/sections/sofa6/sofa6-data';
import { Sofa6PageHero } from 'src/sections/sofa6-pages/sofa6-page-hero';
import { SOFA6_PROJECTS, SOFA6_PAGE_IMAGES, SOFA6_PROJECT_TYPES } from 'src/sections/sofa6-pages/sofa6-pages-data';

const metadata = { title: 'Dự án - Sofa Earth' };

export default function Page() {
  const [activeType, setActiveType] = useState('all');
  const filtered = activeType === 'all' ? SOFA6_PROJECTS : SOFA6_PROJECTS.filter((p) => p.type === activeType);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa6PageHero overline="Dự án" title="Dự án tiêu biểu" subtitle="Các dự án sofa tự nhiên từ căn hộ đến resort 5 sao — mang thiên nhiên vào mọi không gian." image={SOFA6_PAGE_IMAGES.aboutHero} />

      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Stack direction="row" spacing={2} sx={{ mb: 4, flexWrap: 'wrap', gap: 1 }}>
            <Box component="button" onClick={() => setActiveType('all')} sx={{ px: 3, py: 1, borderRadius: 2, border: 0, cursor: 'pointer', bgcolor: activeType === 'all' ? SOFA6_COLORS.terracotta : 'transparent', color: activeType === 'all' ? 'common.white' : 'text.secondary', fontWeight: 'fontWeightBold' }}>Tất cả</Box>
            {SOFA6_PROJECT_TYPES.map((t) => (
              <Box key={t.slug} component="button" onClick={() => setActiveType(t.slug)} sx={{ px: 3, py: 1, borderRadius: 2, border: 0, cursor: 'pointer', bgcolor: activeType === t.slug ? SOFA6_COLORS.terracotta : 'transparent', color: activeType === t.slug ? 'common.white' : 'text.secondary', fontWeight: 'fontWeightBold' }}>{t.label}</Box>
            ))}
          </Stack>

          <Grid container spacing={3}>
            {filtered.map((project, index) => (
              <Grid key={project.id} xs={12} sm={6} md={4}>
                <Box
                  component={RouterLink}
                  href={`/sofa6/projects/${project.id}`}
                  sx={{ position: 'relative', overflow: 'hidden', borderRadius: 3, aspectRatio: '4/3', cursor: 'pointer', display: 'block', textDecoration: 'none' }}
                >
                  <Box component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: index * 0.08 }} sx={{ height: 1 }}>
                    <Box component="img" src={project.image} alt={project.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: (t) => t.transitions.create('transform', { duration: 500 }), '&:hover': { transform: 'scale(1.08)' } }} />
                    <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)' }} />
                    <Stack spacing={0.5} sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: 3, color: 'common.white' }}>
                      <Typography variant="overline" sx={{ color: SOFA6_COLORS.terracottaLight }}>{project.typeLabel} · {project.year}</Typography>
                      <Typography variant="h5">{project.name}</Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>{project.location}</Typography>
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
