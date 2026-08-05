import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA7_COLORS } from 'src/sections/sofa7/sofa7-data';
import { Sofa7PageHero, Sofa7Section } from 'src/sections/sofa7-pages/sofa7-page-hero';
import {
  SOFA7_PAGE_PROJECTS,
  SOFA7_PAGE_PROJECT_TYPES,
} from 'src/sections/sofa7-pages/sofa7-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Dự án tiêu biểu — Sofa7' };

export default function Page() {
  const theme = useTheme();
  const [activeType, setActiveType] = useState<string>('all');

  const filtered = activeType === 'all'
    ? SOFA7_PAGE_PROJECTS
    : SOFA7_PAGE_PROJECTS.filter((p) => p.type === activeType);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa7PageHero
        overline="DỰ ÁN"
        title={
          <>
            DỰ ÁN <span>TIÊU BIỂU</span>
          </>
        }
        subtitle="Căn hộ, biệt thự, khách sạn, resort, văn phòng, showroom. Sofa7 đồng hành cùng mọi không gian urban."
        image="https://images.pexels.com/photos/8089275/pexels-photo-8089275.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <Sofa7Section>
        {/* Filter tabs */}
        <Stack direction="row" spacing={1.5} sx={{ mb: 5, flexWrap: 'wrap', gap: 1.5 }}>
          <Box
            onClick={() => setActiveType('all')}
            sx={{
              px: 3,
              py: 1.5,
              borderRadius: 0,
              cursor: 'pointer',
              fontWeight: 'fontWeightBold',
              textTransform: 'uppercase',
              typography: 'button',
              fontFamily: theme.typography.fontSecondaryFamily,
              bgcolor: activeType === 'all' ? SOFA7_COLORS.electric : 'background.paper',
              color: activeType === 'all' ? SOFA7_COLORS.concrete : 'text.primary',
              border: `2px solid ${activeType === 'all' ? SOFA7_COLORS.electric : varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
              '&:hover': { borderColor: SOFA7_COLORS.electric },
            }}
          >
            Tất cả
          </Box>
          {SOFA7_PAGE_PROJECT_TYPES.map((type) => (
            <Box
              key={type.slug}
              onClick={() => setActiveType(type.slug)}
              sx={{
                px: 3,
                py: 1.5,
                borderRadius: 0,
                cursor: 'pointer',
                fontWeight: 'fontWeightBold',
                textTransform: 'uppercase',
                typography: 'button',
                fontFamily: theme.typography.fontSecondaryFamily,
                bgcolor: activeType === type.slug ? SOFA7_COLORS.electric : 'background.paper',
                color: activeType === type.slug ? SOFA7_COLORS.concrete : 'text.primary',
                border: `2px solid ${activeType === type.slug ? SOFA7_COLORS.electric : varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
                '&:hover': { borderColor: SOFA7_COLORS.electric },
              }}
            >
              {type.label}
            </Box>
          ))}
        </Stack>

        <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily, mb: 4 }}>
          {filtered.length} DỰ ÁN
        </Typography>

        <Grid container spacing={3}>
          {filtered.map((project) => (
            <Grid key={project.id} xs={12} sm={6} md={4}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                sx={{
                  position: 'relative',
                  height: 400,
                  borderRadius: 0,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: `2px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
                  '&:hover': { borderColor: SOFA7_COLORS.electric, transition: 'border-color 0.3s' },
                }}
              >
                <Box component="img" src={project.image} alt={project.name} sx={{ position: 'absolute', inset: 0, width: 1, height: 1, objectFit: 'cover', '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.4s' } }} />
                <Box sx={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${SOFA7_COLORS.concrete} 0%, ${varAlpha(SOFA7_COLORS.concrete, 0.2)} 60%, transparent 100%)` }} />
                <Stack spacing={1} sx={{ position: 'absolute', top: 16, left: 16 }}>
                  <Box sx={{ px: 1.5, py: 0.5, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, borderRadius: 0, typography: 'caption', fontWeight: 'fontWeightBold', textTransform: 'uppercase' }}>
                    {project.typeLabel}
                  </Box>
                </Stack>
                <Stack spacing={1.5} sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: 3, color: 'common.white' }}>
                  <Typography variant="h5" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
                    {project.name}
                  </Typography>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <Iconify icon="solar:map-point-bold-duotone" width={16} sx={{ color: SOFA7_COLORS.electric }} />
                      <Typography variant="caption" sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.72) }}>{project.location}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <Iconify icon="solar:calendar-bold-duotone" width={16} sx={{ color: SOFA7_COLORS.cyan }} />
                      <Typography variant="caption" sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.72) }}>{project.year}</Typography>
                    </Stack>
                  </Stack>
                  <Typography variant="body2" sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.72) }}>
                    {project.description}
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 0.5 }}>
                    <Typography variant="button" sx={{ color: SOFA7_COLORS.electric, textTransform: 'uppercase', fontWeight: 'fontWeightBold' }}>
                      Xem chi tiết
                    </Typography>
                    <Iconify icon="solar:arrow-right-bold-duotone" width={16} sx={{ color: SOFA7_COLORS.electric }} />
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa7Section>
    </>
  );
}
