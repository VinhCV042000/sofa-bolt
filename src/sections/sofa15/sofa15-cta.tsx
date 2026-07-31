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

import { useSofa15Content } from './sofa15-i18n';
import { SOFA15_COLORS, SOFA15_IMAGES } from './sofa15-data';

// ----------------------------------------------------------------------

export function Sofa15Cta({ sx, ...other }: BoxProps) {
  const content = useSofa15Content();

  return (
    <Box component="section" id="contact" sx={{ py: { xs: 8, md: 12 }, bgcolor: SOFA15_COLORS.black, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Box
          sx={{
            overflow: 'hidden',
            position: 'relative',
            bgcolor: SOFA15_COLORS.emerald,
          }}
        >
          <Box
            component={m.img}
            variants={varFade({ distance: 24 }).inLeft}
            alt="Atelier"
            src={SOFA15_IMAGES.cta}
            sx={{
              position: 'absolute',
              inset: 0,
              width: 1,
              height: 1,
              objectFit: 'cover',
              opacity: 0.15,
            }}
          />
          <Box
            sx={{
              inset: 0,
              position: 'absolute',
              background: `linear-gradient(95deg, ${varAlpha(SOFA15_COLORS.emerald, 0.95)}, ${varAlpha(SOFA15_COLORS.emeraldLight, 0.7)})`,
            }}
          />
          {/* Gold border frame */}
          <Box sx={{ position: 'absolute', top: 16, left: 16, right: 16, bottom: 16, border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.3)}`, zIndex: 5, pointerEvents: 'none' }} />

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
                    <Box sx={{ width: 32, height: 1.5, bgcolor: SOFA15_COLORS.gold }} />
                    <Typography variant="overline" sx={{ color: SOFA15_COLORS.gold, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 'fontWeightLight' }}>
                      {content.cta.kicker}
                    </Typography>
                  </Stack>
                  <Typography variant="h3" sx={{ color: 'common.white', fontWeight: 'fontWeightLight', letterSpacing: -0.3, lineHeight: 1.3 }}>
                    {content.cta.title.split(' ').slice(0, -2).join(' ')}{' '}
                    <Box component="span" sx={{ fontStyle: 'italic', color: SOFA15_COLORS.gold }}>
                      {content.cta.title.split(' ').slice(-2).join(' ')}
                    </Box>
                  </Typography>
                  <Typography sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 2, fontWeight: 'fontWeightLight' }}>
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
                      borderRadius: 0,
                      color: SOFA15_COLORS.black,
                      bgcolor: SOFA15_COLORS.gold,
                      textTransform: 'none',
                      letterSpacing: 0.5,
                      border: `1px solid ${SOFA15_COLORS.gold}`,
                      '&:hover': { bgcolor: SOFA15_COLORS.goldLight, border: `1px solid ${SOFA15_COLORS.goldLight}` },
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
                      borderRadius: 0,
                      color: SOFA15_COLORS.gold,
                      bgcolor: 'transparent',
                      textTransform: 'none',
                      letterSpacing: 0.5,
                      border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.4)}`,
                      '&:hover': { border: `1px solid ${SOFA15_COLORS.gold}`, bgcolor: varAlpha(SOFA15_COLORS.gold, 0.08) },
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
                  { icon: 'solar:phone-bold-duotone', label: 'ATELIER', value: '+33 1 42 86 25 25' },
                  { icon: 'solar:map-point-bold-duotone', label: 'SHOWROOM', value: '12 Rue Saint-Honoré, 75001 Paris' },
                  { icon: 'solar:clock-circle-bold-duotone', label: 'HOURS', value: 'Mon-Sat · 10:00 - 19:00' },
                ].map((item) => (
                  <Stack key={item.label} direction="row" spacing={2} alignItems="center" sx={{ color: 'common.white' }}>
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.3)}`,
                        borderRadius: '50%',
                      }}
                    >
                      <Iconify icon={item.icon} width={20} sx={{ color: SOFA15_COLORS.gold, opacity: 0.7 }} />
                    </Box>
                    <Stack>
                      <Typography variant="caption" sx={{ color: varAlpha(SOFA15_COLORS.gold, 0.6), letterSpacing: 2, textTransform: 'uppercase', fontWeight: 'fontWeightLight' }}>
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
