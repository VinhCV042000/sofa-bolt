import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

import { sofa12Alpha, SOFA12_COLORS, SOFA12_GALLERY } from './sofa12-data';

// ----------------------------------------------------------------------

export function Sofa12Gallery({ sx, ...other }: BoxProps) {
  const heights = [420, 320, 320, 380, 380];

  return (
    <Box
      component="section"
      id="gallery"
      sx={{ py: { xs: 8, md: 14 }, bgcolor: SOFA12_COLORS.sand, ...sx }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={1.5} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }}>
          <Typography
            component={m.p}
            variants={varFade({ distance: 24 }).inUp}
            variant="overline"
            sx={{ color: SOFA12_COLORS.clay, letterSpacing: 3 }}
          >
            Không gian thật
          </Typography>
          <Typography
            component={m.h2}
            variants={varFade({ distance: 24 }).inUp}
            sx={{
              m: 0,
              fontSize: { xs: 32, md: 48 },
              fontWeight: 400,
              lineHeight: 1.1,
              color: SOFA12_COLORS.ink,
              fontFamily: (t) => t.typography.fontSecondaryFamily,
            }}
          >
            Nhà của khách hàng Terra
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {SOFA12_GALLERY.map((item, index) => (
            <Grid key={item.caption} xs={12} sm={6} md={index < 2 ? 6 : 4}>
              <Box
                component={m.div}
                variants={varFade({ distance: 28 }).inUp}
                transition={{ delay: (index % 3) * 0.08 }}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 3,
                  '&:hover img': { transform: 'scale(1.06)' },
                }}
              >
                <Box
                  component="img"
                  alt={item.caption}
                  src={item.image}
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
                    background: `linear-gradient(to top, ${sofa12Alpha(SOFA12_COLORS.ink, 0.85)}, transparent)`,
                  }}
                >
                  <Typography variant="subtitle2" sx={{ color: SOFA12_COLORS.cream }}>
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
