import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

import { useSofa13Content } from './sofa13-i18n';
import { sofa13Alpha, SOFA13_IMAGES, SOFA13_COLORS } from './sofa13-data';

// ----------------------------------------------------------------------

const IMAGES = [
  SOFA13_IMAGES.gallery1,
  SOFA13_IMAGES.gallery2,
  SOFA13_IMAGES.gallery3,
  SOFA13_IMAGES.gallery4,
  SOFA13_IMAGES.gallery5,
];

export function Sofa13Gallery({ sx, ...other }: BoxProps) {
  const content = useSofa13Content();
  const heights = [420, 320, 320, 380, 380];

  return (
    <Box
      component="section"
      id="gallery"
      sx={{ py: { xs: 8, md: 14 }, bgcolor: SOFA13_COLORS.charcoal, ...sx }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={1.5} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }}>
          <Typography
            component={m.p}
            variants={varFade({ distance: 24 }).inUp}
            variant="overline"
            sx={{ color: SOFA13_COLORS.gold, letterSpacing: 3 }}
          >
            {content.gallery.overline}
          </Typography>
          <Typography
            component={m.h2}
            variants={varFade({ distance: 24 }).inUp}
            sx={{
              m: 0,
              fontSize: { xs: 30, md: 46 },
              lineHeight: 1.15,
              letterSpacing: 1,
              color: SOFA13_COLORS.ivory,
              fontFamily: (t) => t.typography.fontSecondaryFamily,
            }}
          >
            {content.gallery.title}
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {content.gallery.items.map((item, index) => (
            <Grid key={item.caption} xs={12} sm={6} md={index < 2 ? 6 : 4}>
              <Box
                component={m.div}
                variants={varFade({ distance: 28 }).inUp}
                transition={{ delay: (index % 3) * 0.08 }}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.24)}`,
                  '&:hover img': { transform: 'scale(1.06)' },
                }}
              >
                <Box
                  component="img"
                  alt={item.caption}
                  src={IMAGES[index]}
                  loading="lazy"
                  sx={{
                    width: 1,
                    display: 'block',
                    objectFit: 'cover',
                    height: { xs: 260, md: heights[index] },
                    transition: 'transform .7s ease',
                  }}
                />
                <Box
                  sx={{
                    left: 0,
                    right: 0,
                    bottom: 0,
                    p: 2.5,
                    position: 'absolute',
                    background: `linear-gradient(to top, ${sofa13Alpha(SOFA13_COLORS.noir, 0.9)}, transparent)`,
                  }}
                >
                  <Typography variant="subtitle2" sx={{ color: SOFA13_COLORS.goldPale }}>
                    {item.caption}
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
