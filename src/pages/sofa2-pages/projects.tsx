import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';
import { SOFA2_PROJECTS, SOFA2_PROJECT_TYPES } from 'src/sections/sofa2/sofa2-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Dự án - LUXE Sofa' };

export default function Page() {
  const theme = useTheme();
  const [activeType, setActiveType] = useState('all');

  const filtered = activeType === 'all' ? SOFA2_PROJECTS : SOFA2_PROJECTS.filter((p) => p.type === activeType);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa2PageHero
        overline="Dự án"
        title={(
          <>
            Dự án nội thất
            <Box component="span" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.light}, ${theme.vars.palette.warning.light}`) }}>
              {' '}đã thực hiện
            </Box>
          </>
        )}
        subtitle="Hơn 50 dự án lớn từ căn hộ cao cấp đến khách sạn 5 sao — nơi sofa LUXE đồng hành cùng không gian sống sang trọng."
        image="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          {/* Filter tabs */}
          <Stack sx={{ mb: 5, borderBottom: (t) => `1px solid ${t.vars.palette.divider}` }}>
            <Tabs value={activeType} onChange={(e, v) => setActiveType(v)} variant="scrollable" scrollButtons="auto">
              <Tab value="all" label="Tất cả" />
              {SOFA2_PROJECT_TYPES.map((t) => (
                <Tab key={t.slug} value={t.slug} label={t.label} />
              ))}
            </Tabs>
          </Stack>

          <Grid container spacing={4}>
            {filtered.map((project) => (
              <Grid key={project.id} xs={12} sm={6} md={4}>
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ height: 340, borderRadius: 3, overflow: 'hidden' }}>
                  <Stack
                    component={RouterLink}
                    href={`/sofa2/projects/${project.id}`}
                    sx={{ position: 'relative', height: 1, borderRadius: 3, overflow: 'hidden', cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
                  >
                    <Box component="img" src={project.image} alt={project.name} sx={{ position: 'absolute', inset: 0, width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s', '&:hover': { transform: 'scale(1.05)' } }} />
                    <Box sx={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${varAlpha(theme.vars.palette.common.blackChannel, 0.85)}, transparent 55%)` }} />
                    <Stack spacing={1} sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: 3, color: 'common.white' }}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Iconify icon="solar:map-point-bold-duotone" width={16} sx={{ color: 'primary.light' }} />
                        <Typography variant="caption" sx={{ color: 'primary.light' }}>{project.typeLabel}</Typography>
                      </Stack>
                      <Typography variant="h6">{project.name}</Typography>
                      <Stack direction="row" spacing={2}>
                        <Typography variant="body2" sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.8) }}>{project.location}</Typography>
                        <Typography variant="body2" sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.8) }}>• {project.year}</Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
