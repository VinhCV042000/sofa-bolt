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

import { SOFA10_COLORS, SOFA10_COLLECTIONS } from './sofa10-data';

// ----------------------------------------------------------------------

export function Sofa10Collections({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="collections"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: SOFA10_COLORS.warmWhite,
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={3} sx={{ mb: { xs: 6, md: 10 }, maxWidth: 580 }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: SOFA10_COLORS.stone, letterSpacing: 6, textTransform: 'uppercase', fontWeight: 'fontWeightLight' }}>
              Series · 系列
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ color: SOFA10_COLORS.ink, fontWeight: 'fontWeightLight', letterSpacing: -0.5 }}>
              Bốn series,{' '}
              <Box component="span" sx={{ fontStyle: 'italic', color: SOFA10_COLORS.wood }}>
                một tĩnh tại
              </Box>
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: 'text.secondary', maxWidth: 440, lineHeight: 2, fontWeight: 'fontWeightLight' }}>
              Từ mực đen đến gỗ ấm — mỗi series là một khía cạnh của wabi-sabi, vẻ đẹp trong sự mộc
              mạc và khiêm nhường.
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={4}>
          {SOFA10_COLLECTIONS.map((col, index) => (
            <Grid key={col.title} xs={12} sm={6} md={3}>
              <Box
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.1 }}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '4px',
                  height: { xs: 360, md: 460 },
                  cursor: 'pointer',
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
                    transition: (theme) => theme.transitions.create('transform', { duration: 800 }),
                    '&:hover': { transform: 'scale(1.06)' },
                  }}
                />
                <Box
                  sx={{
                    inset: 0,
                    position: 'absolute',
                    background: `linear-gradient(to top, ${varAlpha(SOFA10_COLORS.ink, 0.85)}, transparent 65%)`,
                  }}
                />
                <Stack
                  spacing={1.5}
                  sx={{
                    left: 0,
                    bottom: 0,
                    width: 1,
                    p: 3,
                    position: 'absolute',
                    color: 'common.white',
                  }}
                >
                  <Typography
                    variant="overline"
                    sx={{ color: varAlpha('#FFFFFF', 0.5), letterSpacing: 2, textTransform: 'uppercase', fontWeight: 'fontWeightLight' }}
                  >
                    {col.tagline}
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 'fontWeightLight', letterSpacing: 0.5 }}>
                    {col.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.55), lineHeight: 1.7, fontWeight: 'fontWeightLight' }}>
                    {col.description}
                  </Typography>
                  <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mt: 1 }}>
                    <Typography variant="caption" sx={{ color: SOFA10_COLORS.woodLight, fontWeight: 'fontWeightNormal' }}>
                      {col.count}
                    </Typography>
                    <Iconify icon="eva:arrow-forward-outline" width={18} sx={{ color: varAlpha('#FFFFFF', 0.4) }} />
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
