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

import { sofa11Alpha, SOFA11_COLORS } from 'src/sections/sofa11/sofa11-data';
import { Sofa11PageHero, Sofa11Section } from 'src/sections/sofa11-pages/sofa11-page-hero';
import { SOFA11_PAGE_PROJECTS, SOFA11_PAGE_PROJECT_TYPES, SOFA11_PAGE_IMAGES } from 'src/sections/sofa11-pages/sofa11-pages-data';

export default function Page() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? SOFA11_PAGE_PROJECTS : SOFA11_PAGE_PROJECTS.filter((p) => p.type === filter);

  return (
    <>
      <Helmet><title>Dự án — Sofa11</title></Helmet>
      <Sofa11PageHero overline="DỰ ÁN" title={<>PORT<span>FOLIO</span></>} subtitle="Căn hộ, studio, cafe, villa — sofa pop cho mọi không gian bùng nổ." image={SOFA11_PAGE_IMAGES.project1} />

      <Sofa11Section>
        <Tabs value={filter} onChange={(e, v) => setFilter(v)} sx={{ mb: 4, borderBottom: 1, borderColor: sofa11Alpha(SOFA11_COLORS.cream, 0.1), '& .MuiTab-root': { color: sofa11Alpha(SOFA11_COLORS.cream, 0.4), fontWeight: 800 }, '& .Mui-selected': { color: SOFA11_COLORS.lime }, '& .MuiTabs-indicator': { bgcolor: SOFA11_COLORS.lime } }}>
          <Tab label="Tất cả" value="all" />
          {SOFA11_PAGE_PROJECT_TYPES.map((t) => <Tab key={t.slug} label={t.label} value={t.slug} />)}
        </Tabs>
        <Grid container spacing={4}>
          {filtered.map((project) => (
            <Grid key={project.id} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={`/sofa11/projects/${project.id}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .proj-img': { transform: 'scale(1.05)' }, '&:hover .proj-name': { color: SOFA11_COLORS.lime } }}>
                <Box sx={{ overflow: 'hidden', borderRadius: '20px 20px 20px 0', aspectRatio: '4/3', position: 'relative', border: `2px solid ${sofa11Alpha(SOFA11_COLORS.magenta, 0.3)}` }}>
                  <Box className="proj-img" component="img" src={project.image} alt={project.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                  <Chip label={project.typeLabel} size="small" sx={{ position: 'absolute', bottom: 12, left: 12, bgcolor: SOFA11_COLORS.magenta, color: SOFA11_COLORS.void, fontWeight: 900 }} />
                </Box>
                <Typography className="proj-name" variant="h6" sx={{ fontWeight: 900, color: SOFA11_COLORS.cream, textTransform: 'uppercase', transition: 'color 0.2s' }}>{project.name}</Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Stack direction="row" spacing={0.5} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={16} sx={{ color: SOFA11_COLORS.cyan }} /><Typography variant="body2" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.5) }}>{project.location}</Typography></Stack>
                  <Stack direction="row" spacing={0.5} alignItems="center"><Iconify icon="solar:calendar-bold-duotone" width={16} sx={{ color: SOFA11_COLORS.cyan }} /><Typography variant="body2" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.5) }}>{project.year}</Typography></Stack>
                </Stack>
                <Typography variant="body2" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.5), lineHeight: 1.8 }}>{project.description}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa11Section>
    </>
  );
}
