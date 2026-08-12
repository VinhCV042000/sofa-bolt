import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA9_STEPS, SOFA9_COLORS } from './sofa9-data';

// ----------------------------------------------------------------------

const STEP_COLORS = [SOFA9_COLORS.pink, SOFA9_COLORS.teal, SOFA9_COLORS.yellow, SOFA9_COLORS.purple];

export function Sofa9Steps({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="steps"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: SOFA9_COLORS.cream,
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: SOFA9_COLORS.pink, letterSpacing: 3, fontWeight: 'fontWeightBold' }}>
              QUY TRÌNH
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ color: SOFA9_COLORS.black }}>
              Từ ý tưởng vui{' '}
              <Box component="span" sx={{ color: SOFA9_COLORS.teal }}>
                đến sofa thật
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={3}>
          {SOFA9_STEPS.map((step, index) => (
            <Grid key={step.number} xs={12} sm={6} md={3}>
              <Box
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.08 }}
                sx={{
                  p: 4,
                  height: 1,
                  position: 'relative',
                  bgcolor: 'common.white',
                  border: `3px solid ${SOFA9_COLORS.black}`,
                  borderRadius: '20px',
                  boxShadow: `6px 6px 0 ${STEP_COLORS[index]}`,
                  transition: (theme) => theme.transitions.create(['transform', 'box-shadow'], { duration: 200 }),
                  '&:hover': { transform: 'translate(-3px, -3px)', boxShadow: `9px 9px 0 ${STEP_COLORS[index]}` },
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: -3,
                    right: -3,
                    width: 44,
                    height: 44,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: STEP_COLORS[index],
                    color: 'common.white',
                    fontWeight: 'fontWeightBold',
                    fontSize: 18,
                    fontFamily: (t) => t.typography.fontSecondaryFamily,
                    border: `3px solid ${SOFA9_COLORS.black}`,
                    borderRadius: '0 18px 0 18px',
                  }}
                >
                  {step.number}
                </Box>

                <Stack spacing={2.5} sx={{ mt: 2 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      display: 'flex',
                      borderRadius: '50%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: STEP_COLORS[index],
                      border: `3px solid ${SOFA9_COLORS.black}`,
                    }}
                  >
                    <Iconify icon={step.icon} width={26} sx={{ color: 'common.white' }} />
                  </Box>
                  <Stack spacing={1}>
                    <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold', color: SOFA9_COLORS.black }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                      {step.description}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
