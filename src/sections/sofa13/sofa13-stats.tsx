import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { AnimateCountUp, varFade, MotionViewport } from 'src/components/animate';

import { sofa13Alpha, SOFA13_COLORS, SOFA13_STATS_META } from './sofa13-data';
import { useSofa13Content } from './sofa13-i18n';

// ----------------------------------------------------------------------

export function Sofa13Stats({ sx, ...other }: BoxProps) {
  const content = useSofa13Content();

  return (
    <Box
      component="section"
      sx={{ py: { xs: 6, md: 10 }, bgcolor: SOFA13_COLORS.charcoal, ...sx }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Grid container spacing={4}>
          {content.stats.items.map((stat, index) => (
            <Grid key={stat.label} xs={6} md={3}>
              <Box
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.08 }}
                sx={{
                  textAlign: 'center',
                  px: 1,
                  borderInlineStart: {
                    md: index === 0 ? 'none' : `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.2)}`,
                  },
                }}
              >
                <AnimateCountUp
                  to={SOFA13_STATS_META[index].value}
                  unit={SOFA13_STATS_META[index].suffix}
                  variant="h2"
                  sx={{
                    color: SOFA13_COLORS.gold,
                    fontWeight: 400,
                    fontFamily: (t) => t.typography.fontSecondaryFamily,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.62), mt: 1, lineHeight: 1.5 }}
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
