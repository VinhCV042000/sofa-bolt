import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

import { useSofa14Content } from './sofa14-i18n';
import { sofa14Alpha, SOFA14_COLORS, SOFA14_GALLERY_IMAGES } from './sofa14-data';

// ----------------------------------------------------------------------

export function Sofa14Gallery({ sx, ...other }: BoxProps) {
  const content = useSofa14Content();
  const heights = [420, 320, 320, 380, 380];

  return (
    <Box component="section" id="gallery" sx={{ py: { xs: 8, md: 14 }, bgcolor: SOFA14_COLORS.canvasDeep, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Stack spacing={1.5} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }}>
          <Typography component={m.p} variants={varFade({ distance: 24 }).inUp} variant="overline" sx={{ color: SOFA14_COLORS.coralDeep, letterSpacing: 2 }}>
            {content.gallery.kicker}
          </Typography>
          <Typography component={m.h2} variants={varFade({ distance: 24 }).inUp} sx={{ m: 0, fontSize: { xs: 30, md: 46 }, fontWeight: 800, lineHeight: 1.1, color: SOFA14_COLORS.ink }}>
            {content.gallery.title}
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {content.gallery.captions.map((caption, index) => (
            <Grid key={caption} xs={12} sm={6} md={index < 2 ? 6 : 4}>
              <Box
                component={m.div}
                variants={varFade({ distance: 28 }).inUp}
                transition={{ delay: (index % 3) * 0.08 }}
                whileHover={{ scale: 1.02 }}
                sx={{ position: 'relative', overflow: 'hidden', borderRadius: '32px', '&:hover img': { transform: 'scale(1.06)' } }}
              >
                <Box
                  component="img"
                  alt={caption}
                  src={SOFA14_GALLERY_IMAGES[index]}
                  loading="lazy"
                  sx={{ width: 1, display: 'block', objectFit: 'cover', height: { xs: 260, md: heights[index] }, transition: 'transform .7s ease' }}
                />
                <Box
                  sx={{
                    insetInline: 0,
                    bottom: 0,
                    p: 2.5,
                    position: 'absolute',
                    background: `linear-gradient(to top, ${sofa14Alpha(SOFA14_COLORS.ink, 0.85)}, transparent)`,
                  }}
                >
                  <Typography variant="subtitle2" sx={{ color: SOFA14_COLORS.canvas, fontWeight: 700 }}>
                    {caption}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
