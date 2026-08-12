import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, AnimateCountUp, MotionViewport } from 'src/components/animate';

import { sofa12Alpha, SOFA12_STATS, SOFA12_COLORS } from './sofa12-data';

// ----------------------------------------------------------------------

export function Sofa12Stats({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={{ py: { xs: 6, md: 10 }, bgcolor: SOFA12_COLORS.sand, ...sx }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Grid container spacing={4}>
          {SOFA12_STATS.map((stat, index) => (
            <Grid key={stat.label} xs={6} md={3}>
              <Box
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.08 }}
                sx={{
                  textAlign: 'center',
                  px: 1,
                  borderLeft: {
                    md: index === 0 ? 'none' : `1px solid ${sofa12Alpha(SOFA12_COLORS.ink, 0.14)}`,
                  },
                }}
              >
                <AnimateCountUp
                  to={stat.value}
                  unit={stat.suffix}
                  variant="h2"
                  sx={{
                    color: SOFA12_COLORS.clay,
                    fontWeight: 400,
                    fontFamily: (t) => t.typography.fontSecondaryFamily,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: sofa12Alpha(SOFA12_COLORS.inkSoft, 0.75), mt: 1, lineHeight: 1.5 }}
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
