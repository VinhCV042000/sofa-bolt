import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA9_COLORS, SOFA9_COLLECTIONS } from './sofa9-data';

// ----------------------------------------------------------------------

const SHAPES = [
  { color: SOFA9_COLORS.pink, radius: '50%' },
  { color: SOFA9_COLORS.teal, radius: '0' },
  { color: SOFA9_COLORS.yellow, radius: '16px' },
  { color: SOFA9_COLORS.purple, radius: '50%' },
];

export function Sofa9Collections({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="collections"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: SOFA9_COLORS.cream,
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, maxWidth: 620 }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box sx={{ width: 10, height: 10, bgcolor: SOFA9_COLORS.pink, borderRadius: '50%' }} />
              <Box sx={{ width: 10, height: 10, bgcolor: SOFA9_COLORS.teal, transform: 'rotate(45deg)' }} />
              <Box sx={{ width: 10, height: 10, bgcolor: SOFA9_COLORS.yellow }} />
              <Typography variant="overline" sx={{ color: SOFA9_COLORS.pink, letterSpacing: 3, fontWeight: 'fontWeightBold', ml: 1 }}>
                BỘ SƯU TẬP
              </Typography>
            </Stack>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ color: SOFA9_COLORS.black }}>
              Bốn vibe retro,{' '}
              <Box component="span" sx={{ color: SOFA9_COLORS.pink }}>
                vô vàn niềm vui
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={3}>
          {SOFA9_COLLECTIONS.map((col, index) => (
            <Grid key={col.title} xs={12} sm={6} md={3}>
              <Box
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.08 }}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '24px',
                  height: { xs: 340, md: 440 },
                  cursor: 'pointer',
                  boxShadow: `8px 8px 0 ${SOFA9_COLORS.black}`,
                  border: `3px solid ${SOFA9_COLORS.black}`,
                  transition: (theme) => theme.transitions.create(['transform', 'box-shadow'], { duration: 200 }),
                  '&:hover': { transform: 'translate(-4px, -4px)', boxShadow: `12px 12px 0 ${SOFA9_COLORS.black}` },
                }}
              >
                <Box
                  component="img"
                  alt={col.title}
                  src={col.image}
                  sx={{
                    width: 1,
                    height: 1,
                    objectFit: 'cover',
                    transition: (theme) => theme.transitions.create('transform', { duration: 600 }),
                    '&:hover': { transform: 'scale(1.08)' },
                  }}
                />
                <Box
                  sx={{
                    inset: 0,
                    position: 'absolute',
                    background: `linear-gradient(to top, ${varAlpha(SOFA9_COLORS.black, 0.92)}, ${varAlpha(SOFA9_COLORS.black, 0.15)} 55%, transparent)`,
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    width: 28,
                    height: 28,
                    bgcolor: SHAPES[index].color,
                    borderRadius: SHAPES[index].radius,
                  }}
                />
                <Stack
                  spacing={1}
                  sx={{
                    left: 0,
                    bottom: 0,
                    width: 1,
                    p: 3,
                    position: 'absolute',
                    color: 'common.white',
                  }}
                >
                  <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography
                      variant="overline"
                      sx={{ color: SHAPES[index].color, letterSpacing: 1.5, fontWeight: 'fontWeightBold' }}
                    >
                      {col.tagline}
                    </Typography>
                    <Typography variant="caption" sx={{ color: varAlpha('#FFFFFF', 0.5) }}>
                      {col.count}
                    </Typography>
                  </Stack>
                  <Typography variant="h5" sx={{ fontWeight: 'fontWeightBold' }}>
                    {col.title}
                  </Typography>
                  <Typography variant="caption" sx={{ color: varAlpha('#FFFFFF', 0.7), lineHeight: 1.5 }}>
                    {col.description}
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mt: 0.5, color: SHAPES[index].color }}>
                    <Typography variant="button" sx={{ fontWeight: 'fontWeightBold' }}>
                      Khám phá
                    </Typography>
                    <Iconify icon="eva:arrow-forward-fill" width={16} />
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
