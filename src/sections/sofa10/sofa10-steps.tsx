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

import { SOFA10_STEPS, SOFA10_COLORS } from './sofa10-data';

// ----------------------------------------------------------------------

export function Sofa10Steps({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="steps"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: SOFA10_COLORS.warmWhite,
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={3} sx={{ mb: { xs: 6, md: 10 }, textAlign: 'center', maxWidth: 540, mx: 'auto' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: SOFA10_COLORS.stone, letterSpacing: 6, textTransform: 'uppercase', fontWeight: 'fontWeightLight' }}>
              Process · 道程
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ color: SOFA10_COLORS.ink, fontWeight: 'fontWeightLight', letterSpacing: -0.5 }}>
              Từ vật liệu{' '}
              <Box component="span" sx={{ fontStyle: 'italic', color: SOFA10_COLORS.wood }}>
                đến tĩnh tại
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={4}>
          {SOFA10_STEPS.map((step, index) => (
            <Grid key={step.number} xs={12} sm={6} md={3}>
              <Box
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.1 }}
                sx={{
                  p: 4,
                  height: 1,
                  position: 'relative',
                  border: `1px solid ${varAlpha(SOFA10_COLORS.stoneLight, 0.3)}`,
                  borderRadius: '4px',
                  transition: (theme) => theme.transitions.create('border-color', { duration: 400 }),
                  '&:hover': { borderColor: SOFA10_COLORS.wood },
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 20,
                    right: 28,
                    fontSize: 48,
                    fontWeight: 'fontWeightLight',
                    color: varAlpha(SOFA10_COLORS.wood, 0.15),
                    fontFamily: (t) => t.typography.fontSecondaryFamily,
                    lineHeight: 1,
                  }}
                >
                  {step.number}
                </Box>

                <Stack spacing={3} sx={{ position: 'relative' }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      display: 'flex',
                      borderRadius: '50%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `1px solid ${varAlpha(SOFA10_COLORS.wood, 0.3)}`,
                    }}
                  >
                    <Iconify icon={step.icon} width={24} sx={{ color: SOFA10_COLORS.wood, opacity: 0.8 }} />
                  </Box>
                  <Stack spacing={1}>
                    <Typography variant="h6" sx={{ fontWeight: 'fontWeightNormal', color: SOFA10_COLORS.ink, letterSpacing: 0.3 }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8, fontWeight: 'fontWeightLight' }}>
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
