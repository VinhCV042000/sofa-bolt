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

import { SOFA2_COLLECTIONS } from './sofa2-data';

// ----------------------------------------------------------------------

export function Sofa2Collections({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="collections"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.04),
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              Bộ sưu tập
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2">
              Ba phong cách{' '}
              <Box component="span" sx={{ opacity: 0.4 }}>
                một niềm đam mê
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={3}>
          {SOFA2_COLLECTIONS.map((col, index) => (
            <Grid key={col.title} xs={12} md={4}>
              <Box
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.1 }}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 3,
                  height: { xs: 360, md: 500 },
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
                    transition: (theme) => theme.transitions.create('transform', { duration: 600 }),
                    '&:hover': { transform: 'scale(1.1)' },
                  }}
                />
                <Box
                  sx={{
                    inset: 0,
                    position: 'absolute',
                    background: (theme) =>
                      `linear-gradient(to top, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.96)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.2)} 50%, transparent)`,
                  }}
                />
                <Stack
                  spacing={1.5}
                  sx={{
                    left: 0,
                    bottom: 0,
                    width: 1,
                    p: 3.5,
                    position: 'absolute',
                    color: 'common.white',
                  }}
                >
                  <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="overline" sx={{ color: 'primary.light' }}>
                      {col.tagline}
                    </Typography>
                    <Typography variant="caption" sx={{ color: varAlpha('#FFFFFF', 0.56) }}>
                      {col.count}
                    </Typography>
                  </Stack>
                  <Typography variant="h4">{col.title}</Typography>
                  <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.64), maxWidth: 280 }}>
                    {col.description}
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mt: 0.5, color: 'primary.light' }}>
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
