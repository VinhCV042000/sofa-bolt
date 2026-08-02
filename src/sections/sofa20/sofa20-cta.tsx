import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { useSofa20Content } from './sofa20-i18n';
import { SOFA20_COLORS, SOFA20_IMAGES } from './sofa20-data';

// ----------------------------------------------------------------------

export function Sofa20Cta({ sx, ...other }: BoxProps) {
  const content = useSofa20Content();

  return (
    <Box component="section" id="contact" sx={{ py: { xs: 8, md: 12 }, bgcolor: SOFA20_COLORS.creamLight, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Box
          sx={{
            overflow: 'hidden',
            position: 'relative',
            borderRadius: 0,
            bgcolor: SOFA20_COLORS.espressoDeep,
          }}
        >
          <Box
            component={m.img}
            variants={varFade({ distance: 24 }).inLeft}
            alt="Foundry"
            src={SOFA20_IMAGES.cta}
            sx={{
              position: 'absolute',
              inset: 0,
              width: 1,
              height: 1,
              objectFit: 'cover',
              opacity: 0.2,
            }}
          />
          <Box
            sx={{
              inset: 0,
              position: 'absolute',
              background: `linear-gradient(95deg, ${varAlpha(SOFA20_COLORS.espressoDeep, 0.93)}, ${varAlpha(SOFA20_COLORS.espresso, 0.7)})`,
            }}
          />

          {/* Riveted border accent */}
          <Box sx={{ position: 'absolute', top: 16, left: 16, right: 16, bottom: 16, border: `2px solid ${varAlpha(SOFA20_COLORS.copper, 0.2)}`, borderRadius: 0, zIndex: 2, pointerEvents: 'none' }} />

          <Grid container>
            <Grid xs={12} md={7}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                spacing={5}
                sx={{ p: { xs: 5, md: 8 }, position: 'relative', zIndex: 9, maxWidth: 540 }}
              >
                <Stack spacing={3}>
                  <Stack direction="row" alignItems="center" spacing={1.5}>
                    <Box sx={{ width: 36, height: 3, bgcolor: SOFA20_COLORS.copper, borderRadius: 0 }} />
                    <Typography variant="overline" sx={{ color: SOFA20_COLORS.copperLight, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 'fontWeightBold' }}>
                      {content.cta.kicker}
                    </Typography>
                  </Stack>
                  <Typography variant="h3" sx={{ color: SOFA20_COLORS.cream, fontWeight: 'fontWeightBold', letterSpacing: -0.3, lineHeight: 1.3, textTransform: 'uppercase' }}>
                    {content.cta.title.split(' ').slice(0, -2).join(' ')}{' '}
                    <Box component="span" sx={{ color: SOFA20_COLORS.copper }}>
                      {content.cta.title.split(' ').slice(-2).join(' ')}
                    </Box>
                  </Typography>
                  <Typography sx={{ color: varAlpha(SOFA20_COLORS.cream, 0.6), lineHeight: 2, fontWeight: 'fontWeightLight' }}>
                    {content.cta.subtitle}
                  </Typography>
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    size="large"
                    startIcon={<Iconify icon="solar:calendar-bold-duotone" />}
                    sx={{
                      px: 4,
                      py: 1.75,
                      fontSize: 15,
                      fontWeight: 'fontWeightBold',
                      borderRadius: 0,
                      color: SOFA20_COLORS.espressoDeep,
                      bgcolor: SOFA20_COLORS.copper,
                      textTransform: 'uppercase',
                      letterSpacing: 0.5,
                      border: `2px solid ${SOFA20_COLORS.brass}`,
                      boxShadow: `0 8px 24px -8px ${varAlpha(SOFA20_COLORS.copper, 0.6)}`,
                      '&:hover': { bgcolor: SOFA20_COLORS.copperDeep },
                    }}
                  >
                    {content.cta.primary}
                  </Button>
                  <Button
                    component={RouterLink}
                    href={paths.contact}
                    size="large"
                    sx={{
                      px: 3,
                      py: 1.75,
                      fontSize: 15,
                      fontWeight: 'fontWeightBold',
                      borderRadius: 0,
                      color: SOFA20_COLORS.copperLight,
                      bgcolor: 'transparent',
                      textTransform: 'uppercase',
                      letterSpacing: 0.5,
                      border: `2px solid ${SOFA20_COLORS.copperLight}`,
                      '&:hover': { border: `2px solid ${SOFA20_COLORS.copper}`, bgcolor: varAlpha(SOFA20_COLORS.copper, 0.08) },
                    }}
                  >
                    {content.cta.secondary}
                  </Button>
                </Stack>
              </Stack>
            </Grid>

            <Grid xs={12} md={5}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inRight}
                spacing={3}
                sx={{ p: { xs: 5, md: 8 }, height: 1, justifyContent: 'center' }}
              >
                {[
                  { icon: 'solar:phone-bold-duotone', label: 'FOUNDRY', value: '+44 161 839 1898' },
                  { icon: 'solar:map-point-bold-duotone', label: 'WORKS', value: 'Holt Ironworks, Castlefield, Manchester' },
                  { icon: 'solar:clock-circle-bold-duotone', label: 'HOURS', value: 'Mon-Fri · 8:00 - 18:00' },
                ].map((item) => (
                  <Stack key={item.label} direction="row" spacing={2} alignItems="center" sx={{ color: SOFA20_COLORS.cream }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `2px solid ${varAlpha(SOFA20_COLORS.copper, 0.3)}`,
                        borderRadius: 0,
                      }}
                    >
                      <Iconify icon={item.icon} width={22} sx={{ color: SOFA20_COLORS.copper }} />
                    </Box>
                    <Stack>
                      <Typography variant="caption" sx={{ color: varAlpha(SOFA20_COLORS.copper, 0.7), letterSpacing: 2, textTransform: 'uppercase', fontWeight: 'fontWeightBold' }}>
                        {item.label}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightBold', letterSpacing: 0.3 }}>
                        {item.value}
                      </Typography>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
