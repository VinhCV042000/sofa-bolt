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

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { SOFA15_COLORS } from 'src/sections/sofa15/sofa15-data';
import { Sofa15Section, Sofa15PageHero } from 'src/sections/sofa15-pages/sofa15-page-hero';
import { SOFA15_PAGE_IMAGES, SOFA15_PAGE_PROJECTS, SOFA15_PAGE_PROJECT_TYPES } from 'src/sections/sofa15-pages/sofa15-pages-data';

export default function Page() {
  const theme = useTheme();
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? SOFA15_PAGE_PROJECTS : SOFA15_PAGE_PROJECTS.filter((p) => p.type === filter);

  return (
    <>
      <Helmet><title>Dự án — Sofa15</title></Helmet>
      <Sofa15PageHero overline="DỰ ÁN" title={<>PORT<span>FOLIO</span></>} subtitle="Khách sạn, biệt thự, resort, nhà hàng — sofa Art Deco cho mọi không gian." image={SOFA15_PAGE_IMAGES.project1} />

      <Sofa15Section bg="black">
        <Tabs value={filter} onChange={(e, v) => setFilter(v)} sx={{ mb: 4, borderBottom: 1, borderColor: varAlpha(SOFA15_COLORS.gold, 0.1), '& .MuiTab-root': { color: varAlpha('#FFFFFF', 0.3), fontWeight: 'fontWeightMedium' }, '& .Mui-selected': { color: SOFA15_COLORS.gold }, '& .MuiTabs-indicator': { bgcolor: SOFA15_COLORS.gold } }}>
          <Tab label="Tất cả" value="all" />
          {SOFA15_PAGE_PROJECT_TYPES.map((t) => <Tab key={t.slug} label={t.label} value={t.slug} />)}
        </Tabs>
        <Grid container spacing={4}>
          {filtered.map((project) => (
            <Grid key={project.id} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={`/sofa15/projects/${project.id}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .proj-img': { transform: 'scale(1.05)' }, '&:hover .proj-name': { color: SOFA15_COLORS.gold } }}>
                <Box sx={{ overflow: 'hidden', position: 'relative', aspectRatio: '4/3', border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.2)}` }}>
                  <Box className="proj-img" component="img" src={project.image} alt={project.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                  <Chip label={project.typeLabel} size="small" sx={{ position: 'absolute', bottom: 12, left: 12, bgcolor: SOFA15_COLORS.gold, color: SOFA15_COLORS.black, fontWeight: 'fontWeightMedium', borderRadius: 0 }} />
                </Box>
                <Typography className="proj-name" variant="h6" sx={{ fontWeight: 'fontWeightLight', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily, transition: 'color 0.2s' }}>{project.name}</Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Stack direction="row" spacing={0.5} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={16} sx={{ color: SOFA15_COLORS.gold }} /><Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4) }}>{project.location}</Typography></Stack>
                  <Stack direction="row" spacing={0.5} alignItems="center"><Iconify icon="solar:calendar-bold-duotone" width={16} sx={{ color: SOFA15_COLORS.gold }} /><Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4) }}>{project.year}</Typography></Stack>
                </Stack>
                <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4), lineHeight: 1.9, fontWeight: 'fontWeightLight' }}>{project.description}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa15Section>
    </>
  );
}
