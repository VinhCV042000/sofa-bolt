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

import { SOFA1_CATEGORIES } from './sofa1-data';

// ----------------------------------------------------------------------

export function Sofa1Categories({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="categories"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.04),
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 } }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              Bộ sưu tập
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ maxWidth: 560 }}>
              Chọn phong cách{' '}
              <Box component="span" sx={{ opacity: 0.4 }}>
                phù hợp nhà bạn
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={3}>
          {SOFA1_CATEGORIES.map((cat, index) => (
            <Grid key={cat.title} xs={12} sm={6} md={3}>
              <Box
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.08 }}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 3,
                  height: { xs: 300, md: 380 },
                  cursor: 'pointer',
                }}
              >
                <Box
                  component="img"
                  alt={cat.title}
                  src={cat.image}
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
                      `linear-gradient(to top, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.92)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.2)} 60%, transparent)`,
                  }}
                />
                <Stack
                  spacing={0.5}
                  sx={{
                    left: 0,
                    bottom: 0,
                    width: 1,
                    p: 2.5,
                    position: 'absolute',
                    color: 'common.white',
                  }}
                >
                  <Typography variant="overline" sx={{ color: 'primary.light' }}>
                    {cat.items} mẫu
                  </Typography>
                  <Typography variant="h5">{cat.title}</Typography>
                  <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.64) }}>
                    {cat.subtitle}
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mt: 1, color: 'primary.light' }}>
                    <Typography variant="button" sx={{ fontWeight: 'fontWeightBold' }}>
                      Xem
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
