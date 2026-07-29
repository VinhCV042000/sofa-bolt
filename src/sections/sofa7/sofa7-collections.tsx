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

import { SOFA7_COLORS, SOFA7_COLLECTIONS } from './sofa7-data';

// ----------------------------------------------------------------------

export function Sofa7Collections({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="collections"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: SOFA7_COLORS.ink,
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, maxWidth: 620 }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: SOFA7_COLORS.electric, letterSpacing: 3, fontWeight: 'fontWeightBold' }}>
              BỘ SƯU TẬP
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ color: 'common.white', textTransform: 'uppercase', letterSpacing: -1 }}>
              Bốn vibe,{' '}
              <Box component="span" sx={{ color: SOFA7_COLORS.electric }}>
                một thái độ
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={3}>
          {SOFA7_COLLECTIONS.map((col, index) => (
            <Grid key={col.title} xs={12} sm={6} md={3}>
              <Box
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.08 }}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  height: { xs: 340, md: 440 },
                  cursor: 'pointer',
                  clipPath: 'polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%)',
                  '&:hover .sofa7-col-img': { transform: 'scale(1.1)' },
                }}
              >
                <Box
                  className="sofa7-col-img"
                  component="img"
                  alt={col.title}
                  src={col.image}
                  sx={{
                    width: 1,
                    height: 1,
                    objectFit: 'cover',
                    transition: (theme) => theme.transitions.create('transform', { duration: 600 }),
                  }}
                />
                <Box
                  sx={{
                    inset: 0,
                    position: 'absolute',
                    background: `linear-gradient(to top, ${varAlpha(SOFA7_COLORS.ink, 0.95)}, ${varAlpha(SOFA7_COLORS.ink, 0.2)} 55%, transparent)`,
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
                      sx={{ color: index % 2 === 0 ? SOFA7_COLORS.electric : SOFA7_COLORS.cyan, letterSpacing: 1.5, fontWeight: 'fontWeightBold' }}
                    >
                      {col.tagline}
                    </Typography>
                    <Typography variant="caption" sx={{ color: varAlpha('#FFFFFF', 0.5) }}>
                      {col.count}
                    </Typography>
                  </Stack>
                  <Typography variant="h5" sx={{ fontWeight: 'fontWeightBold', textTransform: 'uppercase' }}>
                    {col.title}
                  </Typography>
                  <Typography variant="caption" sx={{ color: varAlpha('#FFFFFF', 0.6), lineHeight: 1.5 }}>
                    {col.description}
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mt: 0.5, color: SOFA7_COLORS.electric }}>
                    <Typography variant="button" sx={{ fontWeight: 'fontWeightBold', textTransform: 'uppercase' }}>
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
