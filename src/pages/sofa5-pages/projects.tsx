import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { SOFA5_COLORS } from 'src/sections/sofa5/sofa5-data';
import { Sofa5Section, Sofa5PageHero } from 'src/sections/sofa5-pages/sofa5-page-hero';
import { SOFA5_PAGE_IMAGES, SOFA5_PAGE_PROJECTS, SOFA5_PAGE_PROJECT_TYPES } from 'src/sections/sofa5-pages/sofa5-pages-data';

export default function Page() {
  const theme = useTheme();
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? SOFA5_PAGE_PROJECTS : SOFA5_PAGE_PROJECTS.filter((p) => p.type === filter);

  return (
    <>
      <Helmet><title>Dự án — Sofa5</title></Helmet>
      <Sofa5PageHero overline="DỰ ÁN" title={<>PORT<span>FOLIO</span></>} subtitle="Biệt thự, resort, khách sạn, nhà hàng — sofa Riviera cho mọi không gian." image={SOFA5_PAGE_IMAGES.project1} />

      <Sofa5Section bg="cream">
        <Tabs value={filter} onChange={(e, v) => setFilter(v)} sx={{ mb: 4, borderBottom: 1, borderColor: 'divider', '& .MuiTab-root': { color: SOFA5_COLORS.inkSoft, fontWeight: 'fontWeightMedium' }, '& .Mui-selected': { color: SOFA5_COLORS.clay }, '& .MuiTabs-indicator': { bgcolor: SOFA5_COLORS.clay } }}>
          <Tab label="Tất cả" value="all" />
          {SOFA5_PAGE_PROJECT_TYPES.map((t) => <Tab key={t.slug} label={t.label} value={t.slug} />)}
        </Tabs>
        <Grid container spacing={4}>
          {filtered.map((project) => (
            <Grid key={project.id} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={`/sofa5/projects/${project.id}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .proj-img': { transform: 'scale(1.05)' }, '&:hover .proj-name': { color: SOFA5_COLORS.clay } }}>
                <Box sx={{ overflow: 'hidden', position: 'relative', aspectRatio: '4/3', borderRadius: 3 }}>
                  <Box className="proj-img" component="img" src={project.image} alt={project.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                  <Chip label={project.typeLabel} size="small" sx={{ position: 'absolute', bottom: 12, left: 12, bgcolor: SOFA5_COLORS.clay, color: 'common.white', fontWeight: 'fontWeightMedium', borderRadius: 1 }} />
                </Box>
                <Typography className="proj-name" variant="h6" sx={{ fontWeight: 'fontWeightLight', color: SOFA5_COLORS.ink, fontFamily: theme.typography.fontSecondaryFamily, transition: 'color 0.2s' }}>{project.name}</Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Stack direction="row" spacing={0.5} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={16} sx={{ color: SOFA5_COLORS.clay }} /><Typography variant="body2" sx={{ color: SOFA5_COLORS.inkSoft }}>{project.location}</Typography></Stack>
                  <Stack direction="row" spacing={0.5} alignItems="center"><Iconify icon="solar:calendar-bold-duotone" width={16} sx={{ color: SOFA5_COLORS.clay }} /><Typography variant="body2" sx={{ color: SOFA5_COLORS.inkSoft }}>{project.year}</Typography></Stack>
                </Stack>
                <Typography variant="body2" sx={{ color: SOFA5_COLORS.inkSoft, lineHeight: 1.9, fontWeight: 'fontWeightLight' }}>{project.description}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa5Section>
    </>
  );
}
