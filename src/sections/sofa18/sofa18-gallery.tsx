import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { varFade, MotionViewport } from 'src/components/animate';

import { useSofa18Content } from './sofa18-i18n';
import { SOFA18_COLORS, SOFA18_IMAGES } from './sofa18-data';

// ----------------------------------------------------------------------

const GALLERY_IMAGES = [
  SOFA18_IMAGES.gallery1,
  SOFA18_IMAGES.gallery2,
  SOFA18_IMAGES.gallery3,
  SOFA18_IMAGES.gallery4,
  SOFA18_IMAGES.gallery5,
  SOFA18_IMAGES.gallery6,
];

export function Sofa18Gallery({ sx, ...other }: BoxProps) {
  const content = useSofa18Content();

  return (
    <Box
      component="section"
      id="gallery"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: SOFA18_COLORS.paper,
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={3} sx={{ mb: { xs: 6, md: 10 }, maxWidth: 580 }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box sx={{ width: 36, height: 2, bgcolor: SOFA18_COLORS.rust, borderRadius: 1 }} />
              <Typography variant="overline" sx={{ color: SOFA18_COLORS.rust, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 'fontWeightMedium' }}>
                {content.gallery.kicker}
              </Typography>
            </Stack>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ color: SOFA18_COLORS.ink, fontWeight: 'fontWeightLight', letterSpacing: -0.5 }}>
              {content.gallery.title.split(' ').slice(0, -2).join(' ')}{' '}
              <Box component="span" sx={{ fontStyle: 'italic', color: SOFA18_COLORS.rust }}>
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
                  borderRadius: 3,
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
                    background: `linear-gradient(to top, ${varAlpha(SOFA18_COLORS.charcoal, 0.75)}, transparent 60%)`,
                  }}
                />
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
                  <Typography variant="subtitle1" sx={{ color: SOFA18_COLORS.cream, fontWeight: 'fontWeightLight', letterSpacing: 0.3, fontStyle: 'italic' }}>
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
