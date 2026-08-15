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

import { sofa19Alpha, SOFA19_COLORS } from 'src/sections/sofa19/sofa19-data';
import { Sofa19Section, Sofa19PageHero } from 'src/sections/sofa19-pages/sofa19-page-hero';
import { SOFA19_PAGE_IMAGES, SOFA19_PAGE_PROJECTS, SOFA19_PAGE_PROJECT_TYPES } from 'src/sections/sofa19-pages/sofa19-pages-data';

export default function Page() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? SOFA19_PAGE_PROJECTS : SOFA19_PAGE_PROJECTS.filter((p) => p.type === filter);

  return (
    <>
      <Helmet><title>Dự án — Sofa19</title></Helmet>
      <Sofa19PageHero overline="DỰ ÁN" title={<>PORT<span>FOLIO</span></>} subtitle="Căn hộ, villa, hotel, resort — sofa pastel pop cho mọi không gian." image={SOFA19_PAGE_IMAGES.project1} />

      <Sofa19Section>
        <Tabs value={filter} onChange={(e, v) => setFilter(v)} sx={{ mb: 4, borderBottom: 2, borderColor: sofa19Alpha(SOFA19_COLORS.ink, 0.08), '& .MuiTab-root': { color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.5), fontWeight: 800 }, '& .Mui-selected': { color: SOFA19_COLORS.coralDeep }, '& .MuiTabs-indicator': { bgcolor: SOFA19_COLORS.coralDeep, height: 4, borderRadius: 99 } }}>
          <Tab label="Tất cả" value="all" />
          {SOFA19_PAGE_PROJECT_TYPES.map((t) => <Tab key={t.slug} label={t.label} value={t.slug} />)}
        </Tabs>
        <Grid container spacing={4}>
          {filtered.map((project) => (
            <Grid key={project.id} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={`/sofa19/projects/${project.id}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .proj-img': { transform: 'scale(1.05)' }, '&:hover .proj-name': { color: SOFA19_COLORS.coralDeep } }}>
                <Box sx={{ overflow: 'hidden', position: 'relative', aspectRatio: '4/3', borderRadius: '28px', border: `6px solid ${SOFA19_COLORS.white}`, boxShadow: `4px 4px 0 ${sofa19Alpha(SOFA19_COLORS.sand, 0.4)}` }}>
                  <Box className="proj-img" component="img" src={project.image} alt={project.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                  <Chip label={project.typeLabel} size="small" sx={{ position: 'absolute', bottom: 12, left: 12, bgcolor: SOFA19_COLORS.coral, color: SOFA19_COLORS.ink, fontWeight: 800, borderRadius: 99 }} />
                </Box>
                <Typography className="proj-name" variant="h6" sx={{ fontWeight: 800, color: SOFA19_COLORS.ink, transition: 'color 0.2s' }}>{project.name}</Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Stack direction="row" spacing={0.5} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={16} sx={{ color: SOFA19_COLORS.coralDeep }} /><Typography variant="body2" sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.7) }}>{project.location}</Typography></Stack>
                  <Stack direction="row" spacing={0.5} alignItems="center"><Iconify icon="solar:calendar-bold-duotone" width={16} sx={{ color: SOFA19_COLORS.coralDeep }} /><Typography variant="body2" sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.7) }}>{project.year}</Typography></Stack>
                </Stack>
                <Typography variant="body2" sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.7), lineHeight: 1.9 }}>{project.description}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa19Section>
    </>
  );
}
