import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { AnimateCountUp, varFade, MotionViewport } from 'src/components/animate';

import { SOFA7_COLORS, SOFA7_STATS } from './sofa7-data';

// ----------------------------------------------------------------------

export function Sofa7Stats({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 9 },
        bgcolor: SOFA7_COLORS.ink,
        borderTop: `3px solid ${SOFA7_COLORS.electric}`,
        borderBottom: `3px solid ${SOFA7_COLORS.cyan}`,
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Grid container spacing={4}>
          {SOFA7_STATS.map((stat, index) => (
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
                    color: index % 2 === 0 ? SOFA7_COLORS.electric : SOFA7_COLORS.cyan,
                    fontWeight: 'fontWeightBold',
                    fontFamily: (t) => t.typography.fontSecondaryFamily,
                    textTransform: 'uppercase',
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: varAlpha('#FFFFFF', 0.6), mt: 1, lineHeight: 1.4, textTransform: 'uppercase', letterSpacing: 1 }}
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
