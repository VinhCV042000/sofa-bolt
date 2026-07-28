import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { varFade, MotionViewport } from 'src/components/animate';
import { AnimateCountUp } from 'src/components/animate/animate-count-up';

import { SOFA1_STATS } from './sofa1-data';

// ----------------------------------------------------------------------

export function Sofa1Stats({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: 'grey.900',
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Grid container spacing={3}>
          {SOFA1_STATS.map((stat, index) => (
            <Grid key={stat.label} xs={6} md={3}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.08 }}
                spacing={0.5}
                alignItems="center"
                sx={{ textAlign: 'center' }}
              >
                <Stack direction="row" alignItems="baseline" spacing={0}>
                  <AnimateCountUp
                    to={stat.value}
                    duration={2}
                    toFixed={stat.value % 1 !== 0 ? 1 : 0}
                    variant="h2"
                    sx={{
                      color: 'common.white',
                      fontWeight: 'fontWeightBold',
                      fontFamily: (theme) => theme.typography.fontSecondaryFamily,
                    }}
                  />
                  <Typography
                    variant="h4"
                    sx={{ color: 'primary.light', fontWeight: 'fontWeightBold', ml: 0.5 }}
                  >
                    {stat.suffix}
                  </Typography>
                </Stack>
                <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.56) }}>
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
