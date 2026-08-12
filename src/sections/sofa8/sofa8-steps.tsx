import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA8_STEPS, SOFA8_COLORS } from './sofa8-data';

// ----------------------------------------------------------------------

export function Sofa8Steps({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="steps"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: SOFA8_COLORS.cream,
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: SOFA8_COLORS.ocean, letterSpacing: 3 }}>
              Quy trình
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ color: SOFA8_COLORS.navy }}>
              Từ biển cả{' '}
              <Box component="span" sx={{ color: SOFA8_COLORS.ocean }}>
                đến phòng khách
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={3}>
          {SOFA8_STEPS.map((step, index) => (
            <Grid key={step.number} xs={12} sm={6} md={3}>
              <Box
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.08 }}
                sx={{
                  p: 4,
                  height: 1,
                  position: 'relative',
                  borderRadius: '24px',
                  bgcolor: 'common.white',
                  border: `1px solid ${SOFA8_COLORS.sand}`,
                  transition: (theme) => theme.transitions.create(['transform', 'box-shadow'], { duration: 300 }),
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: (theme) => theme.customShadows.z16,
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 20,
                    right: 24,
                    fontSize: 52,
                    fontWeight: 'fontWeightBold',
                    color: SOFA8_COLORS.sky,
                    fontFamily: (t) => t.typography.fontSecondaryFamily,
                    lineHeight: 1,
                    opacity: 0.6,
                  }}
                >
                  {step.number}
                </Box>

                <Stack spacing={2.5} sx={{ position: 'relative' }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      display: 'flex',
                      borderRadius: '50%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: SOFA8_COLORS.ocean,
                    }}
                  >
                    <Iconify icon={step.icon} width={28} sx={{ color: 'common.white' }} />
                  </Box>
                  <Stack spacing={1}>
                    <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold', color: SOFA8_COLORS.navy }}>
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
