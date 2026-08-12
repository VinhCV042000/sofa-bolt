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

import { SOFA6_STEPS, SOFA6_COLORS } from './sofa6-data';

// ----------------------------------------------------------------------

export function Sofa6Steps({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="steps"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: SOFA6_COLORS.warmWhite,
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: SOFA6_COLORS.clay, letterSpacing: 3 }}>
              Quy trình
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ color: SOFA6_COLORS.ink }}>
              Tự nhiên từ{' '}
              <Box component="span" sx={{ color: SOFA6_COLORS.terracotta }}>
                bước đầu tiên
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={3}>
          {SOFA6_STEPS.map((step, index) => (
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
                  bgcolor: SOFA6_COLORS.cream,
                  border: (theme) => `1px solid ${varAlpha(SOFA6_COLORS.sand, 0.5)}`,
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
                    top: 16,
                    right: 20,
                    fontSize: 56,
                    fontWeight: 'fontWeightBold',
                    color: varAlpha(SOFA6_COLORS.terracotta, 0.12),
                    fontFamily: (t) => t.typography.fontSecondaryFamily,
                    lineHeight: 1,
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
                      bgcolor: SOFA6_COLORS.terracotta,
                    }}
                  >
                    <Iconify icon={step.icon} width={28} sx={{ color: 'common.white' }} />
                  </Box>
                  <Stack spacing={1}>
                    <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold', color: SOFA6_COLORS.ink }}>
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
