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

import { SOFA6_COLORS, SOFA6_COLLECTIONS } from './sofa6-data';

// ----------------------------------------------------------------------

export function Sofa6Collections({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="collections"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: SOFA6_COLORS.warmWhite,
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, maxWidth: 620 }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: SOFA6_COLORS.clay, letterSpacing: 3 }}>
              Bộ sưu tập
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ color: SOFA6_COLORS.ink }}>
              Bốn bộ sưu tập,{' '}
              <Box component="span" sx={{ color: SOFA6_COLORS.terracotta }}>
                một triết lý xanh
              </Box>
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: 'text.secondary', maxWidth: 480, lineHeight: 1.8 }}>
              Từ đất nung ấm đến xanh rừng thẫm — mỗi bộ sưu tập kể một câu chuyện về thiên nhiên và
              con người.
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={3}>
          {SOFA6_COLLECTIONS.map((col, index) => (
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
                  boxShadow: (theme) => theme.customShadows.z8,
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
                    background: `linear-gradient(to top, ${varAlpha(SOFA6_COLORS.ink, 0.92)}, ${varAlpha(SOFA6_COLORS.ink, 0.2)} 55%, transparent)`,
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
                      sx={{ color: SOFA6_COLORS.terracottaLight, letterSpacing: 1.5 }}
                    >
                      {col.tagline}
                    </Typography>
                    <Typography variant="caption" sx={{ color: varAlpha('#FFFFFF', 0.6) }}>
                      {col.count}
                    </Typography>
                  </Stack>
                  <Typography variant="h5" sx={{ fontWeight: 'fontWeightBold' }}>
                    {col.title}
                  </Typography>
                  <Typography variant="caption" sx={{ color: varAlpha('#FFFFFF', 0.7), lineHeight: 1.5 }}>
                    {col.description}
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mt: 0.5, color: SOFA6_COLORS.sageLight }}>
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
