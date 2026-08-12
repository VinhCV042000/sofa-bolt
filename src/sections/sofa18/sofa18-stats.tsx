import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { varFade, AnimateCountUp, MotionViewport } from 'src/components/animate';

import { SOFA18_COLORS } from './sofa18-data';
import { useSofa18Content } from './sofa18-i18n';

// ----------------------------------------------------------------------

const STAT_VALUES = [50, 8000, 2, 1500];

export function Sofa18Stats({ sx, ...other }: BoxProps) {
  const content = useSofa18Content();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: SOFA18_COLORS.charcoal,
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
                    color: SOFA18_COLORS.cream,
                    fontWeight: 'fontWeightLight',
                    fontFamily: (t) => t.typography.fontSecondaryFamily,
                    letterSpacing: -0.5,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: varAlpha(SOFA18_COLORS.cream, 0.5), mt: 1.5, lineHeight: 1.6, fontWeight: 'fontWeightLight', letterSpacing: 0.5 }}
                >
                  {stat.label}
                </Typography>
                <Box sx={{ width: 28, height: 2, bgcolor: varAlpha(SOFA18_COLORS.rust, 0.5), borderRadius: 1, mx: 'auto', mt: 2 }} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
