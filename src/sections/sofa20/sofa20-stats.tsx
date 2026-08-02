import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { AnimateCountUp, varFade, MotionViewport } from 'src/components/animate';

import { useSofa20Content } from './sofa20-i18n';
import { SOFA20_COLORS } from './sofa20-data';

// ----------------------------------------------------------------------

const STAT_VALUES = [125, 25000, 500000, 1800];

export function Sofa20Stats({ sx, ...other }: BoxProps) {
  const content = useSofa20Content();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: SOFA20_COLORS.espresso,
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Grid container spacing={4}>
          {content.stats.items.map((stat, index) => (
            <Grid key={stat.label} xs={6} md={3}>
              <Box
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.1 }}
                sx={{ textAlign: 'center', position: 'relative' }}
              >
                <AnimateCountUp
                  to={STAT_VALUES[index]}
                  unit="+"
                  variant="h3"
                  sx={{
                    color: SOFA20_COLORS.cream,
                    fontWeight: 'fontWeightBold',
                    fontFamily: (t) => t.typography.fontSecondaryFamily,
                    letterSpacing: -0.5,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: varAlpha(SOFA20_COLORS.cream, 0.5), mt: 1.5, lineHeight: 1.6, fontWeight: 'fontWeightLight', letterSpacing: 0.5, textTransform: 'uppercase' }}
                >
                  {stat.label}
                </Typography>
                <Box sx={{ width: 28, height: 3, bgcolor: varAlpha(SOFA20_COLORS.copper, 0.6), borderRadius: 0, mx: 'auto', mt: 2 }} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
