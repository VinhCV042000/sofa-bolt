import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, AnimateCountUp, MotionViewport } from 'src/components/animate';

import { useSofa14Content } from './sofa14-i18n';
import { sofa14Alpha, SOFA14_COLORS, SOFA14_STATS_META } from './sofa14-data';

// ----------------------------------------------------------------------

export function Sofa14Stats({ sx, ...other }: BoxProps) {
  const content = useSofa14Content();

  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: SOFA14_COLORS.canvasDeep, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Grid container spacing={4}>
          {content.stats.items.map((stat, index) => {
            const meta = SOFA14_STATS_META[index];
            return (
              <Grid key={stat.label} xs={6} md={3}>
                <Box
                  component={m.div}
                  variants={varFade({ distance: 24 }).inUp}
                  transition={{ delay: index * 0.08 }}
                  sx={{
                    textAlign: 'center',
                    p: 2,
                    borderRadius: '28px',
                    bgcolor: SOFA14_COLORS.white,
                    boxShadow: `0 6px 0 -2px ${sofa14Alpha(meta.accent, 0.7)}`,
                  }}
                >
                  <AnimateCountUp
                    to={meta.value}
                    unit={meta.suffix}
                    variant="h2"
                    sx={{ color: meta.accent === SOFA14_COLORS.butter ? SOFA14_COLORS.butterDeep : meta.accent, fontWeight: 800 }}
                  />
                  <Typography variant="body2" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.8), mt: 1, lineHeight: 1.5, fontWeight: 600 }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
