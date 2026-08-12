import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { varFade, AnimateCountUp, MotionViewport } from 'src/components/animate';

import { SOFA10_STATS, SOFA10_COLORS } from './sofa10-data';

// ----------------------------------------------------------------------

export function Sofa10Stats({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: SOFA10_COLORS.charcoal,
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Grid container spacing={6}>
          {SOFA10_STATS.map((stat, index) => (
            <Grid key={stat.label} xs={6} md={3}>
              <Box
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.1 }}
                sx={{ textAlign: 'center' }}
              >
                <AnimateCountUp
                  to={stat.value}
                  unit={stat.suffix}
                  variant="h3"
                  sx={{
                    color: SOFA10_COLORS.sandLight,
                    fontWeight: 'fontWeightLight',
                    fontFamily: (t) => t.typography.fontSecondaryFamily,
                    letterSpacing: -0.5,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: varAlpha('#FFFFFF', 0.4), mt: 1.5, lineHeight: 1.6, fontWeight: 'fontWeightLight', letterSpacing: 0.5 }}
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
