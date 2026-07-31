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

import { useSofa15Content } from './sofa15-i18n';
import { SOFA15_COLORS, SOFA15_IMAGES } from './sofa15-data';

// ----------------------------------------------------------------------

const COLLECTION_IMAGES = [SOFA15_IMAGES.cat1, SOFA15_IMAGES.cat2, SOFA15_IMAGES.cat3, SOFA15_IMAGES.cat4];

export function Sofa15Collections({ sx, ...other }: BoxProps) {
  const content = useSofa15Content();

  return (
    <Box
      component="section"
      id="collections"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: SOFA15_COLORS.black,
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={3} sx={{ mb: { xs: 6, md: 10 }, maxWidth: 580 }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box sx={{ width: 32, height: 1.5, bgcolor: SOFA15_COLORS.gold }} />
              <Typography variant="overline" sx={{ color: SOFA15_COLORS.gold, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 'fontWeightLight' }}>
                {content.collections.kicker}
              </Typography>
            </Stack>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ color: 'common.white', fontWeight: 'fontWeightLight', letterSpacing: -0.5, lineHeight: 1.2 }}>
              {content.collections.title.split(',')[0]},
              <Box component="span" sx={{ color: SOFA15_COLORS.gold, fontStyle: 'italic' }}>
                {content.collections.title.split(',')[1]}
              </Box>
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: varAlpha('#FFFFFF', 0.5), maxWidth: 480, lineHeight: 2, fontWeight: 'fontWeightLight' }}>
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
                    background: `linear-gradient(to top, ${varAlpha(SOFA15_COLORS.black, 0.92)}, ${varAlpha(SOFA15_COLORS.black, 0.2)} 55%, transparent)`,
                  }}
                />
                {/* Gold top border */}
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, bgcolor: varAlpha(SOFA15_COLORS.gold, 0.6) }} />
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
                    sx={{ color: SOFA15_COLORS.gold, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 'fontWeightLight' }}
                  >
                    {col.tagline}
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 'fontWeightLight', letterSpacing: 0.5 }}>
                    {col.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 1.7, fontWeight: 'fontWeightLight' }}>
                    {col.description}
                  </Typography>
                  <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mt: 1 }}>
                    <Typography variant="caption" sx={{ color: varAlpha('#FFFFFF', 0.3), letterSpacing: 1, textTransform: 'uppercase' }}>
                      {content.collections.countSuffix}
                    </Typography>
                    <Iconify icon="eva:arrow-forward-outline" width={18} sx={{ color: SOFA15_COLORS.gold }} />
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
