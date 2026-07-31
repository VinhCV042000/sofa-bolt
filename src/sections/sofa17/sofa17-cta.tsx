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

import { useSofa17Content } from './sofa17-i18n';
import { SOFA17_COLORS, SOFA17_IMAGES } from './sofa17-data';

// ----------------------------------------------------------------------

export function Sofa17Cta({ sx, ...other }: BoxProps) {
  const content = useSofa17Content();

  return (
    <Box component="section" id="contact" sx={{ py: { xs: 8, md: 12 }, bgcolor: SOFA17_COLORS.creamLight, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Box
          sx={{
            overflow: 'hidden',
            position: 'relative',
            borderRadius: 4,
            bgcolor: SOFA17_COLORS.tealDeep,
          }}
        >
          <Box
            component={m.img}
            variants={varFade({ distance: 24 }).inLeft}
            alt="Atelier"
            src={SOFA17_IMAGES.cta}
            sx={{
              position: 'absolute',
              inset: 0,
              width: 1,
              height: 1,
              objectFit: 'cover',
              opacity: 0.25,
            }}
          />
          <Box
            sx={{
              inset: 0,
              position: 'absolute',
              background: `linear-gradient(95deg, ${varAlpha(SOFA17_COLORS.tealDeep, 0.93)}, ${varAlpha(SOFA17_COLORS.teal, 0.7)})`,
            }}
          />

          {/* Ornate border */}
          <Box sx={{ position: 'absolute', top: 16, left: 16, right: 16, bottom: 16, border: `1px solid ${varAlpha(SOFA17_COLORS.saffron, 0.2)}`, borderRadius: 2, zIndex: 2, pointerEvents: 'none' }} />

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
                    <Box sx={{ width: 36, height: 2, bgcolor: SOFA17_COLORS.saffron, borderRadius: 1 }} />
                    <Typography variant="overline" sx={{ color: SOFA17_COLORS.saffronLight, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 'fontWeightMedium' }}>
                      {content.cta.kicker}
                    </Typography>
                  </Stack>
                  <Typography variant="h3" sx={{ color: SOFA17_COLORS.cream, fontWeight: 'fontWeightLight', letterSpacing: -0.3, lineHeight: 1.3 }}>
                    {content.cta.title.split(' ').slice(0, -2).join(' ')}{' '}
                    <Box component="span" sx={{ fontStyle: 'italic', color: SOFA17_COLORS.saffron }}>
                      {content.cta.title.split(' ').slice(-2).join(' ')}
                    </Box>
                  </Typography>
                  <Typography sx={{ color: varAlpha(SOFA17_COLORS.cream, 0.6), lineHeight: 2, fontWeight: 'fontWeightLight' }}>
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
                      borderRadius: 2,
                      color: SOFA17_COLORS.tealDeep,
                      bgcolor: SOFA17_COLORS.saffron,
                      textTransform: 'none',
                      letterSpacing: 0.5,
                      boxShadow: `0 8px 24px -8px ${varAlpha(SOFA17_COLORS.saffron, 0.6)}`,
                      '&:hover': { bgcolor: SOFA17_COLORS.saffronDeep },
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
                      fontWeight: 'fontWeightMedium',
                      borderRadius: 2,
                      color: SOFA17_COLORS.saffronLight,
                      bgcolor: 'transparent',
                      textTransform: 'none',
                      letterSpacing: 0.5,
                      border: `1px solid ${varAlpha(SOFA17_COLORS.saffron, 0.4)}`,
                      '&:hover': { border: `1px solid ${SOFA17_COLORS.saffron}`, bgcolor: varAlpha(SOFA17_COLORS.saffron, 0.08) },
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
                  { icon: 'solar:phone-bold-duotone', label: 'ATELIER', value: '+212 524 38 39 40' },
                  { icon: 'solar:map-point-bold-duotone', label: 'SOUK', value: 'Rue Sidi Abdellah, Medina, Marrakech' },
                  { icon: 'solar:clock-circle-bold-duotone', label: 'HOURS', value: 'Sat-Thu · 9:00 - 19:00' },
                ].map((item) => (
                  <Stack key={item.label} direction="row" spacing={2} alignItems="center" sx={{ color: SOFA17_COLORS.cream }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `1px solid ${varAlpha(SOFA17_COLORS.saffron, 0.3)}`,
                        borderRadius: 2,
                      }}
                    >
                      <Iconify icon={item.icon} width={22} sx={{ color: SOFA17_COLORS.saffron }} />
                    </Box>
                    <Stack>
                      <Typography variant="caption" sx={{ color: varAlpha(SOFA17_COLORS.saffron, 0.7), letterSpacing: 2, textTransform: 'uppercase', fontWeight: 'fontWeightMedium' }}>
                        {item.label}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightLight', letterSpacing: 0.3 }}>
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
