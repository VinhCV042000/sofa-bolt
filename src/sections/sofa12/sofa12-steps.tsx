import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

import { sofa12Alpha, SOFA12_COLORS, SOFA12_STEPS } from './sofa12-data';

// ----------------------------------------------------------------------

export function Sofa12Steps({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="process"
      sx={{ py: { xs: 8, md: 14 }, bgcolor: SOFA12_COLORS.cream, ...sx }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={1.5} sx={{ mb: { xs: 5, md: 8 }, maxWidth: 620 }}>
          <Typography
            component={m.p}
            variants={varFade({ distance: 24 }).inUp}
            variant="overline"
            sx={{ color: SOFA12_COLORS.clay, letterSpacing: 3 }}
          >
            Quy trình
          </Typography>
          <Typography
            component={m.h2}
            variants={varFade({ distance: 24 }).inUp}
            sx={{
              m: 0,
              fontSize: { xs: 32, md: 48 },
              fontWeight: 400,
              lineHeight: 1.1,
              color: SOFA12_COLORS.ink,
              fontFamily: (t) => t.typography.fontSecondaryFamily,
            }}
          >
            Từ bản vẽ tay tới phòng khách
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {SOFA12_STEPS.map((step, index) => (
            <Grid key={step.no} xs={12} sm={6} md={3}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 28 }).inUp}
                transition={{ delay: index * 0.08 }}
                spacing={2}
                sx={{
                  p: 3,
                  height: 1,
                  borderRadius: '120px 120px 16px 16px',
                  bgcolor: index % 2 === 0 ? SOFA12_COLORS.sand : SOFA12_COLORS.white,
                  border: `1px solid ${sofa12Alpha(SOFA12_COLORS.ink, 0.1)}`,
                  transition: 'transform .3s',
                  '&:hover': { transform: 'translateY(-8px)' },
                }}
              >
                <Box
                  sx={{
                    mx: 'auto',
                    width: 64,
                    height: 64,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    color: SOFA12_COLORS.cream,
                    bgcolor: SOFA12_COLORS.clay,
                    fontSize: 20,
                    fontFamily: (t) => t.typography.fontSecondaryFamily,
                  }}
                >
                  {step.no}
                </Box>
                <Typography variant="h6" sx={{ color: SOFA12_COLORS.ink, textAlign: 'center' }}>
                  {step.title}
                </Typography>
                <Typography
                  sx={{
                    textAlign: 'center',
                    lineHeight: 1.8,
                    color: sofa12Alpha(SOFA12_COLORS.inkSoft, 0.78),
                  }}
                >
                  {step.text}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
