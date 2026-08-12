import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { varFade, AnimateCountUp, MotionViewport } from 'src/components/animate';

import { SOFA17_COLORS } from './sofa17-data';
import { useSofa17Content } from './sofa17-i18n';

// ----------------------------------------------------------------------

const STAT_VALUES = [65, 15000, 4, 3200];

export function Sofa17Stats({ sx, ...other }: BoxProps) {
  const content = useSofa17Content();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: SOFA17_COLORS.ruby,
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
                    color: SOFA17_COLORS.cream,
                    fontWeight: 'fontWeightLight',
                    fontFamily: (t) => t.typography.fontSecondaryFamily,
                    letterSpacing: -0.5,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: varAlpha(SOFA17_COLORS.cream, 0.6), mt: 1.5, lineHeight: 1.6, fontWeight: 'fontWeightLight', letterSpacing: 0.5 }}
                >
                  {stat.label}
                </Typography>
                <Box sx={{ width: 28, height: 2, bgcolor: varAlpha(SOFA17_COLORS.saffron, 0.6), borderRadius: 1, mx: 'auto', mt: 2 }} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
