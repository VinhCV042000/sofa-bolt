import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { sofa14Alpha, SOFA14_COLORS } from 'src/sections/sofa14/sofa14-data';
import { Sofa14Section, Sofa14PageHero } from 'src/sections/sofa14-pages/sofa14-page-hero';
import { SOFA14_PAGE_IMAGES, SOFA14_PAGE_PROJECTS, SOFA14_PAGE_PROJECT_TYPES } from 'src/sections/sofa14-pages/sofa14-pages-data';

export default function Page() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? SOFA14_PAGE_PROJECTS : SOFA14_PAGE_PROJECTS.filter((p) => p.type === filter);

  return (
    <>
      <Helmet><title>Dự án — Sofa14</title></Helmet>
      <Sofa14PageHero overline="DỰ ÁN" title={<>PORT<span>FOLIO</span></>} subtitle="Căn hộ, villa, hotel, resort — sofa pastel pop cho mọi không gian." image={SOFA14_PAGE_IMAGES.project1} />

      <Sofa14Section>
        <Tabs value={filter} onChange={(e, v) => setFilter(v)} sx={{ mb: 4, borderBottom: 2, borderColor: sofa14Alpha(SOFA14_COLORS.ink, 0.08), '& .MuiTab-root': { color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.5), fontWeight: 800 }, '& .Mui-selected': { color: SOFA14_COLORS.coralDeep }, '& .MuiTabs-indicator': { bgcolor: SOFA14_COLORS.coralDeep, height: 4, borderRadius: 99 } }}>
          <Tab label="Tất cả" value="all" />
          {SOFA14_PAGE_PROJECT_TYPES.map((t) => <Tab key={t.slug} label={t.label} value={t.slug} />)}
        </Tabs>
        <Grid container spacing={4}>
          {filtered.map((project) => (
            <Grid key={project.id} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={`/sofa14/projects/${project.id}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .proj-img': { transform: 'scale(1.05)' }, '&:hover .proj-name': { color: SOFA14_COLORS.coralDeep } }}>
                <Box sx={{ overflow: 'hidden', position: 'relative', aspectRatio: '4/3', borderRadius: '28px', border: `6px solid ${SOFA14_COLORS.white}`, boxShadow: `4px 4px 0 ${sofa14Alpha(SOFA14_COLORS.sky, 0.4)}` }}>
                  <Box className="proj-img" component="img" src={project.image} alt={project.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                  <Chip label={project.typeLabel} size="small" sx={{ position: 'absolute', bottom: 12, left: 12, bgcolor: SOFA14_COLORS.coral, color: SOFA14_COLORS.ink, fontWeight: 800, borderRadius: 99 }} />
                </Box>
                <Typography className="proj-name" variant="h6" sx={{ fontWeight: 800, color: SOFA14_COLORS.ink, transition: 'color 0.2s' }}>{project.name}</Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Stack direction="row" spacing={0.5} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={16} sx={{ color: SOFA14_COLORS.coralDeep }} /><Typography variant="body2" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.7) }}>{project.location}</Typography></Stack>
                  <Stack direction="row" spacing={0.5} alignItems="center"><Iconify icon="solar:calendar-bold-duotone" width={16} sx={{ color: SOFA14_COLORS.coralDeep }} /><Typography variant="body2" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.7) }}>{project.year}</Typography></Stack>
                </Stack>
                <Typography variant="body2" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.7), lineHeight: 1.9 }}>{project.description}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa14Section>
    </>
  );
}
