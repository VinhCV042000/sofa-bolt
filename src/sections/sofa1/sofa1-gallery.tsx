import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA1_GALLERY } from './sofa1-data';

// ----------------------------------------------------------------------

export function Sofa1Gallery({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="gallery"
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
              Showroom
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2">
              Không gian{' '}
              <Box component="span" sx={{ opacity: 0.4 }}>
                trưng bày
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={2}>
          {SOFA1_GALLERY.map((item, index) => (
            <Grid
              key={item.title}
              xs={12}
              sm={6}
              md={item.size === 'large' ? 6 : 3}
              sx={item.size === 'large' ? { gridColumn: { md: 'span 2' } } : undefined}
            >
              <Box
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.06 }}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 3,
                  height: item.size === 'large' ? { xs: 280, md: 400 } : { xs: 200, md: 192 },
                  cursor: 'pointer',
                }}
              >
                <Box
                  component="img"
                  alt={item.title}
                  src={item.image}
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
                      `linear-gradient(to top, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.72)}, transparent 60%)`,
                  }}
                />
                <Typography
                  variant="subtitle2"
                  sx={{
                    left: 16,
                    bottom: 16,
                    position: 'absolute',
                    color: 'common.white',
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
