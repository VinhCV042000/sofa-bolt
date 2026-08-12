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

import { SOFA15_COLORS } from './sofa15-data';
import { useSofa15Content } from './sofa15-i18n';

// ----------------------------------------------------------------------

const STEP_ICONS = [
  'solar:chat-square-bold-duotone',
  'solar:hand-bold-duotone',
  'solar:crown-bold-duotone',
  'solar:delivery-bold-duotone',
];

export function Sofa15Steps({ sx, ...other }: BoxProps) {
  const content = useSofa15Content();

  return (
    <Box
      component="section"
      id="steps"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: SOFA15_COLORS.black,
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={3} sx={{ mb: { xs: 6, md: 10 }, textAlign: 'center', maxWidth: 540, mx: 'auto' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={1.5}>
              <Box sx={{ width: 24, height: 1, bgcolor: varAlpha(SOFA15_COLORS.gold, 0.5) }} />
              <Typography variant="overline" sx={{ color: SOFA15_COLORS.gold, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 'fontWeightLight' }}>
                {content.steps.kicker}
              </Typography>
              <Box sx={{ width: 24, height: 1, bgcolor: varAlpha(SOFA15_COLORS.gold, 0.5) }} />
            </Stack>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ color: 'common.white', fontWeight: 'fontWeightLight', letterSpacing: -0.5 }}>
              {content.steps.title.split(' ').slice(0, -2).join(' ')}{' '}
              <Box component="span" sx={{ fontStyle: 'italic', color: SOFA15_COLORS.gold }}>
                {content.steps.title.split(' ').slice(-2).join(' ')}
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={4}>
          {content.steps.items.map((step, index) => (
            <Grid key={step.title} xs={12} sm={6} md={3}>
              <Box
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.1 }}
                sx={{
                  p: 4,
                  height: 1,
                  position: 'relative',
                  border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.15)}`,
                  transition: (theme) => theme.transitions.create('border-color', { duration: 400 }),
                  '&:hover': { borderColor: varAlpha(SOFA15_COLORS.gold, 0.4) },
                }}
              >
                {/* Step number */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 20,
                    right: 24,
                    fontSize: 56,
                    fontWeight: 'fontWeightLight',
                    color: varAlpha(SOFA15_COLORS.gold, 0.1),
                    fontFamily: (t) => t.typography.fontSecondaryFamily,
                    lineHeight: 1,
                  }}
                >
                  0{index + 1}
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
                      border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.3)}`,
                    }}
                  >
                    <Iconify icon={STEP_ICONS[index]} width={24} sx={{ color: SOFA15_COLORS.gold, opacity: 0.8 }} />
                  </Box>
                  <Stack spacing={1}>
                    <Typography variant="h6" sx={{ fontWeight: 'fontWeightMedium', color: 'common.white', letterSpacing: 0.3 }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 1.8, fontWeight: 'fontWeightLight' }}>
                      {step.text}
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
