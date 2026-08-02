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

import { useSofa18Content } from './sofa18-i18n';
import { SOFA18_COLORS, SOFA18_IMAGES } from './sofa18-data';

// ----------------------------------------------------------------------

export function Sofa18Cta({ sx, ...other }: BoxProps) {
  const content = useSofa18Content();

  return (
    <Box component="section" id="contact" sx={{ py: { xs: 8, md: 12 }, bgcolor: SOFA18_COLORS.creamLight, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Box
          sx={{
            overflow: 'hidden',
            position: 'relative',
            borderRadius: 4,
            bgcolor: SOFA18_COLORS.charcoal,
          }}
        >
          <Box
            component={m.img}
            variants={varFade({ distance: 24 }).inLeft}
            alt="Atelier"
            src={SOFA18_IMAGES.cta}
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
              background: `linear-gradient(95deg, ${varAlpha(SOFA18_COLORS.charcoal, 0.93)}, ${varAlpha(SOFA18_COLORS.charcoalLight, 0.7)})`,
            }}
          />

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
                    <Box sx={{ width: 36, height: 2, bgcolor: SOFA18_COLORS.rust, borderRadius: 1 }} />
                    <Typography variant="overline" sx={{ color: SOFA18_COLORS.rust, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 'fontWeightMedium' }}>
                      {content.cta.kicker}
                    </Typography>
                  </Stack>
                  <Typography variant="h3" sx={{ color: 'common.white', fontWeight: 'fontWeightLight', letterSpacing: -0.3, lineHeight: 1.3 }}>
                    {content.cta.title.split(' ').slice(0, -2).join(' ')}{' '}
                    <Box component="span" sx={{ fontStyle: 'italic', color: SOFA18_COLORS.rust }}>
                      {content.cta.title.split(' ').slice(-2).join(' ')}
                    </Box>
                  </Typography>
                  <Typography sx={{ color: varAlpha('#FFFFFF', 0.65), lineHeight: 2, fontWeight: 'fontWeightLight' }}>
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
                      fontWeight: 'fontWeightMedium',
                      borderRadius: 2,
                      color: 'common.white',
                      bgcolor: SOFA18_COLORS.rust,
                      textTransform: 'none',
                      letterSpacing: 0.5,
                      boxShadow: `0 8px 24px -8px ${varAlpha(SOFA18_COLORS.rust, 0.6)}`,
                      '&:hover': { bgcolor: SOFA18_COLORS.ruby },
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
                      color: SOFA18_COLORS.sageLight,
                      bgcolor: 'transparent',
                      textTransform: 'none',
                      letterSpacing: 0.5,
                      border: `1px solid ${varAlpha(SOFA18_COLORS.sageLight, 0.4)}`,
                      '&:hover': { border: `1px solid ${SOFA18_COLORS.sageLight}`, bgcolor: varAlpha(SOFA18_COLORS.sageLight, 0.08) },
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
                  { icon: 'solar:phone-bold-duotone', label: 'ATELIER', value: '+81 75 411 5555' },
                  { icon: 'solar:map-point-bold-duotone', label: 'SHOWROOM', value: 'Higashiyama-ku, Kyoto 605-0001' },
                  { icon: 'solar:clock-circle-bold-duotone', label: 'HOURS', value: 'Mon-Sat · 10:00 - 18:00' },
                ].map((item) => (
                  <Stack key={item.label} direction="row" spacing={2} alignItems="center" sx={{ color: 'common.white' }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `1px solid ${varAlpha(SOFA18_COLORS.rust, 0.2)}`,
                        borderRadius: 2,
                      }}
                    >
                      <Iconify icon={item.icon} width={22} sx={{ color: SOFA18_COLORS.sageLight }} />
                    </Box>
                    <Stack>
                      <Typography variant="caption" sx={{ color: varAlpha(SOFA18_COLORS.sageLight, 0.7), letterSpacing: 2, textTransform: 'uppercase', fontWeight: 'fontWeightMedium' }}>
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
