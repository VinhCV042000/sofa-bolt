import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


import { varFade, MotionViewport, AnimateCountUp } from 'src/components/animate';

import { sofa11Alpha, SOFA11_COLORS, SOFA11_STATS } from './sofa11-data';

// ----------------------------------------------------------------------

export function Sofa11Stats({ sx, ...other }: BoxProps) {
  const accents = [
    SOFA11_COLORS.magenta,
    SOFA11_COLORS.lime,
    SOFA11_COLORS.cyan,
    SOFA11_COLORS.tangerine,
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 7, md: 10 },
        bgcolor: SOFA11_COLORS.grape,
        borderTop: `3px solid ${sofa11Alpha(SOFA11_COLORS.cream, 0.1)}`,
        borderBottom: `3px solid ${sofa11Alpha(SOFA11_COLORS.cream, 0.1)}`,
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Grid container spacing={3}>
          {SOFA11_STATS.map((stat, index) => (
            <Grid key={stat.label} xs={6} md={3}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                spacing={1}
                sx={{ textAlign: 'center' }}
              >
                <Stack direction="row" justifyContent="center" alignItems="baseline">
                  <AnimateCountUp
                    to={stat.value}
                    sx={{
                      fontSize: { xs: 36, md: 54 },
                      fontWeight: 900,
                      lineHeight: 1,
                      color: accents[index % accents.length],
                    }}
                  />
                  <Box
                    component="span"
                    sx={{
                      fontSize: { xs: 20, md: 28 },
                      fontWeight: 900,
                      color: accents[index % accents.length],
                    }}
                  >
                    {stat.suffix}
                  </Box>
                </Stack>
                <Typography variant="body2" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.6) }}>
                  {stat.label}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
