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

import { SOFA6_COLORS, SOFA6_GALLERY } from './sofa6-data';

// ----------------------------------------------------------------------

export function Sofa6Gallery({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="gallery"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: SOFA6_COLORS.cream,
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, maxWidth: 620 }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: SOFA6_COLORS.clay, letterSpacing: 3 }}>
              Không gian sống
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ color: SOFA6_COLORS.ink }}>
              Sofa Earth trong{' '}
              <Box component="span" sx={{ color: SOFA6_COLORS.terracotta }}>
                ngôi nhà của bạn
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={2.5}>
          {SOFA6_GALLERY.map((item, index) => (
            <Grid key={item.title} xs={12} sm={6} md={index === 0 || index === 5 ? 6 : 3}>
              <Box
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.06 }}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '24px',
                  height: { xs: 280, md: 320 },
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
                    background: `linear-gradient(to top, ${varAlpha(SOFA6_COLORS.ink, 0.82)}, transparent 60%)`,
                  }}
                />
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{
                    left: 0,
                    bottom: 0,
                    width: 1,
                    p: 2.5,
                    position: 'absolute',
                    color: 'common.white',
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightBold' }}>
                    {item.title}
                  </Typography>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={0.5}
                    sx={{
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 20,
                      bgcolor: varAlpha(SOFA6_COLORS.terracotta, 0.85),
                    }}
                  >
                    <Iconify icon="solar:leaf-bold-duotone" width={14} sx={{ color: 'common.white' }} />
                    <Typography variant="caption" sx={{ color: 'common.white', fontWeight: 'fontWeightBold' }}>
                      {item.tag}
                    </Typography>
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
