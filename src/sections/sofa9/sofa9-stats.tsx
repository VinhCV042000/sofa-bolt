import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { varFade, AnimateCountUp, MotionViewport } from 'src/components/animate';

import { SOFA9_STATS, SOFA9_COLORS } from './sofa9-data';

// ----------------------------------------------------------------------

const STAT_COLORS = [SOFA9_COLORS.pink, SOFA9_COLORS.teal, SOFA9_COLORS.yellow, SOFA9_COLORS.purple];

export function Sofa9Stats({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 9 },
        bgcolor: SOFA9_COLORS.cream,
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Grid container spacing={4}>
          {SOFA9_STATS.map((stat, index) => (
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
                    color: STAT_COLORS[index],
                    fontWeight: 'fontWeightBold',
                    fontFamily: (t) => t.typography.fontSecondaryFamily,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: varAlpha(SOFA9_COLORS.black, 0.6), mt: 1, lineHeight: 1.4, fontWeight: 'fontWeightMedium' }}
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
