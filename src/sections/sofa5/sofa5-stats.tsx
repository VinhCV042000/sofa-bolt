import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA5_STATS } from './sofa5-data';

// ----------------------------------------------------------------------

export function Sofa5Stats({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: 'common.black',
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Grid container spacing={4}>
          {SOFA5_STATS.map((stat, index) => (
            <Grid key={stat.label} xs={6} md={3}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.08 }}
                spacing={1}
                sx={{ textAlign: 'center' }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 36, md: 56 },
                    fontWeight: 'fontWeightBold',
                    color: 'warning.main',
                    lineHeight: 1,
                  }}
                >
                  {stat.value.toLocaleString()}{stat.suffix}
                </Typography>
                <Typography
                  sx={{
                    color: (theme) => varAlpha(theme.vars.palette.common.whiteChannel, 0.5),
                    fontSize: 14,
                  }}
                >
                  {stat.label}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
