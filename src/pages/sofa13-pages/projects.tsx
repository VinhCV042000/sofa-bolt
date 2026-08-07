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

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

import { sofa13Alpha, SOFA13_COLORS } from 'src/sections/sofa13/sofa13-data';
import { Sofa13PageHero, Sofa13Section } from 'src/sections/sofa13-pages/sofa13-page-hero';
import { SOFA13_PAGE_PROJECTS, SOFA13_PAGE_PROJECT_TYPES, SOFA13_PAGE_IMAGES } from 'src/sections/sofa13-pages/sofa13-pages-data';

export default function Page() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? SOFA13_PAGE_PROJECTS : SOFA13_PAGE_PROJECTS.filter((p) => p.type === filter);

  return (
    <>
      <Helmet><title>Dự án — Sofa13</title></Helmet>
      <Sofa13PageHero overline="DỰ ÁN" title={<>PORT<span>FOLIO</span></>} subtitle="Căn hộ, villa, hotel, resort — sofa art deco cho mọi không gian." image={SOFA13_PAGE_IMAGES.project1} />

      <Sofa13Section>
        <Tabs value={filter} onChange={(e, v) => setFilter(v)} sx={{ mb: 4, borderBottom: 1, borderColor: sofa13Alpha(SOFA13_COLORS.ivory, 0.1), '& .MuiTab-root': { color: sofa13Alpha(SOFA13_COLORS.ivory, 0.4), fontWeight: 700 }, '& .Mui-selected': { color: SOFA13_COLORS.gold }, '& .MuiTabs-indicator': { bgcolor: SOFA13_COLORS.gold } }}>
          <Tab label="Tất cả" value="all" />
          {SOFA13_PAGE_PROJECT_TYPES.map((t) => <Tab key={t.slug} label={t.label} value={t.slug} />)}
        </Tabs>
        <Grid container spacing={4}>
          {filtered.map((project) => (
            <Grid key={project.id} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={`/sofa13/projects/${project.id}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .proj-img': { transform: 'scale(1.05)' }, '&:hover .proj-name': { color: SOFA13_COLORS.gold } }}>
                <Box sx={{ overflow: 'hidden', position: 'relative', aspectRatio: '4/3', border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.3)}` }}>
                  <Box className="proj-img" component="img" src={project.image} alt={project.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                  <Chip label={project.typeLabel} size="small" sx={{ position: 'absolute', bottom: 12, left: 12, bgcolor: SOFA13_COLORS.gold, color: SOFA13_COLORS.noir, fontWeight: 700, borderRadius: 0 }} />
                </Box>
                <Typography className="proj-name" variant="h6" sx={{ fontWeight: 700, color: SOFA13_COLORS.ivory, letterSpacing: 1, transition: 'color 0.2s' }}>{project.name}</Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Stack direction="row" spacing={0.5} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={16} sx={{ color: SOFA13_COLORS.goldPale }} /><Typography variant="body2" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) }}>{project.location}</Typography></Stack>
                  <Stack direction="row" spacing={0.5} alignItems="center"><Iconify icon="solar:calendar-bold-duotone" width={16} sx={{ color: SOFA13_COLORS.goldPale }} /><Typography variant="body2" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) }}>{project.year}</Typography></Stack>
                </Stack>
                <Typography variant="body2" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5), lineHeight: 1.9 }}>{project.description}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa13Section>
    </>
  );
}
