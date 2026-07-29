import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { AnimateCountUp, varFade, MotionViewport } from 'src/components/animate';

import { SOFA8_COLORS, SOFA8_STATS } from './sofa8-data';

// ----------------------------------------------------------------------

export function Sofa8Stats({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 9 },
        bgcolor: SOFA8_COLORS.sky,
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Grid container spacing={4}>
          {SOFA8_STATS.map((stat, index) => (
            <Grid key={stat.label} xs={6} md={3}>
              <Box
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.08 }}
                sx={{ textAlign: 'center' }}
              >
                <AnimateCountUp
                  to={stat.value}
                  unit={stat.suffix}
                  variant="h2"
                  sx={{
                    color: SOFA8_COLORS.oceanDeep,
                    fontWeight: 'fontWeightBold',
                    fontFamily: (t) => t.typography.fontSecondaryFamily,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: SOFA8_COLORS.oceanDeep, mt: 1, lineHeight: 1.4, opacity: 0.7 }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
