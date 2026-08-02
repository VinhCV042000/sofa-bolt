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

import { useSofa20Content } from './sofa20-i18n';
import { SOFA20_COLORS, SOFA20_IMAGES } from './sofa20-data';

// ----------------------------------------------------------------------

const COLLECTION_IMAGES = [SOFA20_IMAGES.cat1, SOFA20_IMAGES.cat2, SOFA20_IMAGES.cat3, SOFA20_IMAGES.cat4];

export function Sofa20Collections({ sx, ...other }: BoxProps) {
  const content = useSofa20Content();

  return (
    <Box
      component="section"
      id="collections"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: SOFA20_COLORS.creamLight,
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={3} sx={{ mb: { xs: 6, md: 10 }, maxWidth: 580 }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box sx={{ width: 36, height: 3, bgcolor: SOFA20_COLORS.copper, borderRadius: 0 }} />
              <Typography variant="overline" sx={{ color: SOFA20_COLORS.copper, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 'fontWeightBold' }}>
                {content.collections.kicker}
              </Typography>
            </Stack>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ color: SOFA20_COLORS.ink, fontWeight: 'fontWeightBold', letterSpacing: -0.5, lineHeight: 1.2, textTransform: 'uppercase' }}>
              {content.collections.title.split(' ').slice(0, -2).join(' ')}{' '}
              <Box component="span" sx={{ color: SOFA20_COLORS.copper }}>
                {content.collections.title.split(' ').slice(-2).join(' ')}
              </Box>
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: SOFA20_COLORS.inkSoft, maxWidth: 480, lineHeight: 2, fontWeight: 'fontWeightLight' }}>
              {content.collections.subtitle}
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={3}>
          {content.collections.items.map((col, index) => (
            <Grid key={col.title} xs={12} sm={6} md={3}>
              <Box
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.1 }}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  height: { xs: 360, md: 460 },
                  cursor: 'pointer',
                  borderRadius: 0,
                }}
              >
                <Box
                  component="img"
                  alt={col.title}
                  src={COLLECTION_IMAGES[index]}
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
                    background: `linear-gradient(to top, ${varAlpha(SOFA20_COLORS.espressoDeep, 0.9)}, ${varAlpha(SOFA20_COLORS.burntOrange, 0.15)} 55%, transparent)`,
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
                    sx={{ color: SOFA20_COLORS.brassLight, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 'fontWeightBold' }}
                  >
                    {col.tagline}
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 'fontWeightBold', letterSpacing: 0.5, color: SOFA20_COLORS.cream, textTransform: 'uppercase' }}>
                    {col.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: varAlpha(SOFA20_COLORS.cream, 0.6), lineHeight: 1.7, fontWeight: 'fontWeightLight' }}>
                    {col.description}
                  </Typography>
                  <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mt: 1 }}>
                    <Typography variant="caption" sx={{ color: varAlpha(SOFA20_COLORS.cream, 0.4), letterSpacing: 1, textTransform: 'uppercase' }}>
                      {content.collections.countSuffix}
                    </Typography>
                    <Iconify icon="eva:arrow-forward-outline" width={18} sx={{ color: SOFA20_COLORS.copper }} />
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
