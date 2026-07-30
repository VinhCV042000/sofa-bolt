import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA11_COLORS, SOFA11_STEPS } from './sofa11-data';

// ----------------------------------------------------------------------

export function Sofa11Steps({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="steps"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: SOFA11_COLORS.voidDeep, ...sx }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: SOFA11_COLORS.tangerine, letterSpacing: 3 }}>
              Quy trình
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              variant="h2"
              sx={{ color: SOFA11_COLORS.cream, fontWeight: 900, textTransform: 'uppercase' }}
            >
              4 bước để{' '}
              <Box component="span" sx={{ color: SOFA11_COLORS.magenta }}>
                đổi tông
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={3}>
          {SOFA11_STEPS.map((step) => (
            <Grid key={step.step} xs={12} sm={6} md={3}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                spacing={2}
                sx={{
                  p: 3,
                  height: 1,
                  borderRadius: 4,
                  position: 'relative',
                  bgcolor: varAlpha(SOFA11_COLORS.cream, 0.03),
                  border: `2px dashed ${varAlpha(step.accent, 0.5)}`,
                  transition: 'all .3s',
                  '&:hover': {
                    borderStyle: 'solid',
                    borderColor: step.accent,
                    bgcolor: varAlpha(step.accent, 0.08),
                  },
                }}
              >
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      display: 'flex',
                      borderRadius: '50%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: step.accent,
                      color: SOFA11_COLORS.void,
                    }}
                  >
                    <Iconify icon={step.icon} width={26} />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: 40,
                      fontWeight: 900,
                      lineHeight: 1,
                      color: varAlpha(SOFA11_COLORS.cream, 0.12),
                    }}
                  >
                    {step.step}
                  </Typography>
                </Stack>

                <Typography variant="h6" sx={{ color: SOFA11_COLORS.cream, fontWeight: 900 }}>
                  {step.title}
                </Typography>
                <Typography variant="body2" sx={{ color: varAlpha(SOFA11_COLORS.cream, 0.6) }}>
                  {step.description}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
