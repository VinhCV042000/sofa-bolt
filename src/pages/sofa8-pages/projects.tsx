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

import { SOFA8_COLORS } from 'src/sections/sofa8/sofa8-data';
import { Sofa8Section, Sofa8PageHero } from 'src/sections/sofa8-pages/sofa8-page-hero';
import {
  SOFA8_PAGE_IMAGES,
  SOFA8_PAGE_PROJECTS,
  SOFA8_PAGE_PROJECT_TYPES,
} from 'src/sections/sofa8-pages/sofa8-pages-data';

export default function Page() {
  const theme = useTheme();
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? SOFA8_PAGE_PROJECTS : SOFA8_PAGE_PROJECTS.filter((p) => p.type === filter);

  return (
    <>
      <Helmet>
        <title>Dự án — Sofa8</title>
      </Helmet>

      <Sofa8PageHero
        overline="DỰ ÁN"
        title={<>PORT<span>FOLIO</span></>}
        subtitle="Resort, biệt thự, khách sạn, cafe — sofa coastal cho mọi không gian."
        image={SOFA8_PAGE_IMAGES.project1}
      />

      <Sofa8Section>
        <Tabs value={filter} onChange={(e, v) => setFilter(v)} sx={{ mb: 4, borderBottom: 1, borderColor: 'divider' }}>
          <Tab label="Tất cả" value="all" />
          {SOFA8_PAGE_PROJECT_TYPES.map((t) => (
            <Tab key={t.slug} label={t.label} value={t.slug} />
          ))}
        </Tabs>

        <Grid container spacing={4}>
          {filtered.map((project) => (
            <Grid key={project.id} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={`/sofa8/projects/${project.id}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .proj-img': { transform: 'scale(1.05)' }, '&:hover .proj-name': { color: SOFA8_COLORS.coral } }}>
                <Box sx={{ overflow: 'hidden', borderRadius: 3, aspectRatio: '4/3', position: 'relative' }}>
                  <Box className="proj-img" component="img" src={project.image} alt={project.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                  <Chip label={project.typeLabel} size="small" sx={{ position: 'absolute', bottom: 12, left: 12, bgcolor: 'rgba(0,0,0,0.6)', color: 'common.white', fontWeight: 'fontWeightBold' }} />
                </Box>
                <Typography className="proj-name" variant="h6" sx={{ fontWeight: 'fontWeightBold', color: 'text.primary', transition: 'color 0.2s' }}>{project.name}</Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Stack direction="row" spacing={0.5} alignItems="center">
                    <Iconify icon="solar:map-point-bold-duotone" width={16} sx={{ color: SOFA8_COLORS.ocean }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{project.location}</Typography>
                  </Stack>
                  <Stack direction="row" spacing={0.5} alignItems="center">
                    <Iconify icon="solar:calendar-bold-duotone" width={16} sx={{ color: SOFA8_COLORS.ocean }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{project.year}</Typography>
                  </Stack>
                </Stack>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{project.description}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa8Section>
    </>
  );
}
