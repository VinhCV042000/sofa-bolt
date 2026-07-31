import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { varFade, MotionViewport } from 'src/components/animate';

import { useSofa15Content } from './sofa15-i18n';
import { SOFA15_COLORS, SOFA15_IMAGES } from './sofa15-data';

// ----------------------------------------------------------------------

const GALLERY_IMAGES = [
  SOFA15_IMAGES.gallery1,
  SOFA15_IMAGES.gallery2,
  SOFA15_IMAGES.gallery3,
  SOFA15_IMAGES.gallery4,
  SOFA15_IMAGES.gallery5,
  SOFA15_IMAGES.gallery6,
];

export function Sofa15Gallery({ sx, ...other }: BoxProps) {
  const content = useSofa15Content();

  return (
    <Box
      component="section"
      id="gallery"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: SOFA15_COLORS.charcoal,
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
                {content.gallery.kicker}
              </Typography>
            </Stack>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ color: 'common.white', fontWeight: 'fontWeightLight', letterSpacing: -0.5 }}>
              {content.gallery.title.split(' ').slice(0, -2).join(' ')}{' '}
              <Box component="span" sx={{ fontStyle: 'italic', color: SOFA15_COLORS.gold }}>
                {content.gallery.title.split(' ').slice(-2).join(' ')}
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={3}>
          {content.gallery.captions.map((caption, index) => (
            <Grid key={caption} xs={12} sm={6} md={index === 0 || index === 5 ? 6 : 3}>
              <Box
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.08 }}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  height: { xs: 280, md: 320 },
                  cursor: 'pointer',
                }}
              >
                <Box
                  component="img"
                  alt={caption}
                  src={GALLERY_IMAGES[index]}
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
                    background: `linear-gradient(to top, ${varAlpha(SOFA15_COLORS.black, 0.8)}, transparent 60%)`,
                  }}
                />
                {/* Gold bottom border */}
                <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, bgcolor: varAlpha(SOFA15_COLORS.gold, 0.5) }} />
                <Stack
                  sx={{
                    left: 0,
                    bottom: 0,
                    width: 1,
                    p: 2.5,
                    position: 'absolute',
                    color: 'common.white',
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightLight', letterSpacing: 0.3 }}>
                    {caption}
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
