import { Helmet } from 'react-helmet-async';

import { useState } from 'react';
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

import { SOFA10_COLORS } from 'src/sections/sofa10/sofa10-data';
import { Sofa10PageHero, Sofa10Section } from 'src/sections/sofa10-pages/sofa10-page-hero';
import {
  SOFA10_PAGE_PROJECTS,
  SOFA10_PAGE_PROJECT_TYPES,
  SOFA10_PAGE_IMAGES,
} from 'src/sections/sofa10-pages/sofa10-pages-data';

export default function Page() {
  const theme = useTheme();
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? SOFA10_PAGE_PROJECTS : SOFA10_PAGE_PROJECTS.filter((p) => p.type === filter);

  return (
    <>
      <Helmet><title>Dự án — Sofa10</title></Helmet>
      <Sofa10PageHero overline="DỰ ÁN" title={<>PORT<span>FOLIO</span></>} subtitle="Cafe, resort, khách sạn, showroom — sofa wabi-sabi cho mọi không gian tĩnh." image={SOFA10_PAGE_IMAGES.project1} />
      <Sofa10Section>
        <Tabs value={filter} onChange={(e, v) => setFilter(v)} sx={{ mb: 4, borderBottom: 1, borderColor: 'divider' }}>
          <Tab label="Tất cả" value="all" />
          {SOFA10_PAGE_PROJECT_TYPES.map((t) => <Tab key={t.slug} label={t.label} value={t.slug} />)}
        </Tabs>
        <Grid container spacing={4}>
          {filtered.map((project) => (
            <Grid key={project.id} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={`/sofa10/projects/${project.id}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .proj-img': { transform: 'scale(1.03)' }, '&:hover .proj-name': { color: SOFA10_COLORS.wood } }}>
                <Box sx={{ overflow: 'hidden', borderRadius: 2, aspectRatio: '4/3', position: 'relative' }}>
                  <Box className="proj-img" component="img" src={project.image} alt={project.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                  <Chip label={project.typeLabel} size="small" sx={{ position: 'absolute', bottom: 12, left: 12, bgcolor: SOFA10_COLORS.charcoal, color: 'common.white', fontWeight: 'fontWeightLight' }} />
                </Box>
                <Typography className="proj-name" variant="h6" sx={{ fontWeight: 'fontWeightNormal', color: 'text.primary', transition: 'color 0.2s' }}>{project.name}</Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Stack direction="row" spacing={0.5} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={16} sx={{ color: SOFA10_COLORS.wood }} /><Typography variant="body2" sx={{ color: 'text.secondary' }}>{project.location}</Typography></Stack>
                  <Stack direction="row" spacing={0.5} alignItems="center"><Iconify icon="solar:calendar-bold-duotone" width={16} sx={{ color: SOFA10_COLORS.wood }} /><Typography variant="body2" sx={{ color: 'text.secondary' }}>{project.year}</Typography></Stack>
                </Stack>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 2, fontWeight: 'fontWeightLight' }}>{project.description}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa10Section>
    </>
  );
}
