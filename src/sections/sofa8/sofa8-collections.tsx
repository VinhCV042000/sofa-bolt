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

import { SOFA8_COLORS, SOFA8_COLLECTIONS } from './sofa8-data';

// ----------------------------------------------------------------------

export function Sofa8Collections({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="collections"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: SOFA8_COLORS.cream,
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, maxWidth: 620 }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: SOFA8_COLORS.ocean, letterSpacing: 3 }}>
              Bộ sưu tập
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ color: SOFA8_COLORS.navy }}>
              Bốn tone biển,{' '}
              <Box component="span" sx={{ color: SOFA8_COLORS.ocean }}>
                một bầu không khí
              </Box>
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: 'text.secondary', maxWidth: 480, lineHeight: 1.8 }}>
              Từ xanh đại dương đến cam san hô — mỗi bộ sưu tập mang một mảnh ghép của biển cả vào
              ngôi nhà bạn.
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={3}>
          {SOFA8_COLLECTIONS.map((col, index) => (
            <Grid key={col.title} xs={12} sm={6} md={3}>
              <Box
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.08 }}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '28px',
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
                    background: `linear-gradient(to top, ${varAlpha(SOFA8_COLORS.navy, 0.88)}, ${varAlpha(SOFA8_COLORS.navy, 0.15)} 55%, transparent)`,
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
                      sx={{ color: index % 2 === 0 ? SOFA8_COLORS.sky : SOFA8_COLORS.coralLight, letterSpacing: 1.5 }}
                    >
                      {col.tagline}
                    </Typography>
                    <Typography variant="caption" sx={{ color: varAlpha('#FFFFFF', 0.55) }}>
                      {col.count}
                    </Typography>
                  </Stack>
                  <Typography variant="h5" sx={{ fontWeight: 'fontWeightBold' }}>
                    {col.title}
                  </Typography>
                  <Typography variant="caption" sx={{ color: varAlpha('#FFFFFF', 0.72), lineHeight: 1.5 }}>
                    {col.description}
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mt: 0.5, color: SOFA8_COLORS.sky }}>
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
