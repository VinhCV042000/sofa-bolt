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

import { SOFA_COLLECTIONS } from './sofa-data';

// ----------------------------------------------------------------------

export function SofaCollections({ sx, ...other }: BoxProps) {
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
        <Stack spacing={3} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              Bộ sưu tập
            </Typography>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2">
              Phong cách
              <Box component="span" sx={{ opacity: 0.4 }}>
                {' '}
                cho mọi không gian
              </Box>
            </Typography>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: 'text.secondary' }}>
              Khám phá ba dòng sofa đặc trưng, mỗi dòng mang một cá tính riêng — từ tinh tế hiện đại
              đến sang trọng vương giả.
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={3}>
          {SOFA_COLLECTIONS.map((collection) => (
            <Grid key={collection.title} xs={12} md={4}>
              <Box
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 3,
                  cursor: 'pointer',
                  height: { xs: 320, md: 440 },
                  transition: (theme) => theme.transitions.create(['box-shadow'], { duration: 300 }),
                  '&:hover': { boxShadow: (theme) => theme.customShadows.z24 },
                }}
              >
                <Box
                  component="img"
                  alt={collection.title}
                  src={collection.image}
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
                    background: (theme) =>
                      `linear-gradient(to top, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.88)} 0%, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.24)} 60%, transparent 100%)`,
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
                  <Typography variant="overline" sx={{ color: 'primary.light' }}>
                    {collection.count}
                  </Typography>
                  <Typography variant="h4">{collection.title}</Typography>
                  <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.72), maxWidth: 280 }}>
                    {collection.description}
                  </Typography>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={0.5}
                    sx={{ mt: 1, color: 'primary.light' }}
                  >
                    <Typography variant="button" sx={{ fontWeight: 'fontWeightBold' }}>
                      Xem ngay
                    </Typography>
                    <Iconify icon="eva:arrow-forward-fill" width={18} />
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
