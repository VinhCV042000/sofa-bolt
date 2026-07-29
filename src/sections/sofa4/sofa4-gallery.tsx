import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA4_GALLERY } from './sofa4-data';

// ----------------------------------------------------------------------

export function Sofa4Gallery({ sx, ...other }: BoxProps) {
  return (
    <Box component="section" id="gallery" sx={{ py: { xs: 8, md: 12 }, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'warning.main' }}>
              Không gian sống
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2">
              Sofa Pop trong{' '}
              <Box component="span" sx={{ color: 'warning.main' }}>
                thực tế
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={3}>
          {SOFA4_GALLERY.map((item, index) => (
            <Grid key={item.title} xs={12} sm={6} md={3}>
              <Box
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.08 }}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 3,
                  cursor: 'pointer',
                  aspectRatio: '3/4',
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: 1,
                    height: 1,
                    objectFit: 'cover',
                    transition: (theme) => theme.transitions.create('transform', { duration: 500 }),
                    '&:hover': { transform: 'scale(1.08)' },
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
                  }}
                />
                <Stack
                  spacing={0.5}
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    p: 3,
                    color: 'common.white',
                  }}
                >
                  <Typography variant="overline" sx={{ color: 'warning.light', letterSpacing: 2 }}>
                    {item.tag}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold' }}>
                    {item.title}
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
