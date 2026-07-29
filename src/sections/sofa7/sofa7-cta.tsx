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

import { SOFA7_COLORS, SOFA7_IMAGES } from './sofa7-data';

// ----------------------------------------------------------------------

export function Sofa7Cta({ sx, ...other }: BoxProps) {
  return (
    <Box component="section" id="contact" sx={{ py: { xs: 8, md: 12 }, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Box
          sx={{
            overflow: 'hidden',
            position: 'relative',
            bgcolor: SOFA7_COLORS.ink,
          }}
        >
          <Box
            component={m.img}
            variants={varFade({ distance: 24 }).inLeft}
            alt="Showroom"
            src={SOFA7_IMAGES.cta}
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
              background: `linear-gradient(90deg, ${varAlpha(SOFA7_COLORS.ink, 0.95)}, ${varAlpha(SOFA7_COLORS.ink, 0.7)})`,
            }}
          />
          <Box sx={{ position: 'absolute', top: 0, right: 0, width: 80, height: 80, bgcolor: SOFA7_COLORS.electric }} />
          <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: 60, height: 60, bgcolor: SOFA7_COLORS.cyan }} />

          <Grid container>
            <Grid xs={12} md={7}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                spacing={4}
                sx={{ p: { xs: 5, md: 8 }, position: 'relative', zIndex: 9, maxWidth: 560 }}
              >
                <Stack spacing={2}>
                  <Stack direction="row" alignItems="center" spacing={1.5}>
                    <Box sx={{ width: 8, height: 40, bgcolor: SOFA7_COLORS.electric }} />
                    <Typography variant="overline" sx={{ color: SOFA7_COLORS.electric, letterSpacing: 4, fontWeight: 'fontWeightBold' }}>
                      GHÉ SHOWROOM
                    </Typography>
                  </Stack>
                  <Typography variant="h3" sx={{ color: 'common.white', textTransform: 'uppercase' }}>
                    Ngồi thử, cảm nhận
                  </Typography>
                  <Typography sx={{ color: varAlpha('#FFFFFF', 0.6), lineHeight: 1.8 }}>
                    Trải nghiệm da thật, velvet neon, và vibe loft tại showroom. Đặt hẹn trước — giảm
                    20% cho đơn đầu tiên. Không quy tắc, chỉ có bạn.
                  </Typography>
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    size="large"
                    variant="contained"
                    startIcon={<Iconify icon="solar:calendar-bold-duotone" />}
                    sx={{
                      borderRadius: 0,
                      px: 5,
                      bgcolor: SOFA7_COLORS.electric,
                      color: SOFA7_COLORS.ink,
                      fontWeight: 'fontWeightBold',
                      textTransform: 'uppercase',
                      '&:hover': { bgcolor: SOFA7_COLORS.cyan, color: SOFA7_COLORS.ink },
                    }}
                  >
                    Đặt hẹn ngay
                  </Button>
                  <Button
                    component={RouterLink}
                    href={paths.contact}
                    size="large"
                    variant="outlined"
                    sx={{
                      color: 'common.white',
                      borderRadius: 0,
                      px: 5,
                      fontWeight: 'fontWeightBold',
                      textTransform: 'uppercase',
                      borderColor: varAlpha('#FFFFFF', 0.3),
                      '&:hover': { borderColor: SOFA7_COLORS.electric, bgcolor: 'transparent', color: SOFA7_COLORS.electric },
                    }}
                  >
                    Liên hệ
                  </Button>
                </Stack>
              </Stack>
            </Grid>

            <Grid xs={12} md={5}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inRight}
                spacing={2.5}
                sx={{ p: { xs: 5, md: 8 }, height: 1, justifyContent: 'center' }}
              >
                {[
                  { icon: 'solar:phone-bold-duotone', label: 'HOTLINE', value: '1900 3344' },
                  { icon: 'solar:map-point-bold-duotone', label: 'SHOWROOM', value: '45 Nguyễn Huệ, Q1, TP.HCM' },
                  { icon: 'solar:clock-circle-bold-duotone', label: 'GIỜ MỞ CỬA', value: '10:00 - 22:00 (T2 - CN)' },
                ].map((item) => (
                  <Stack key={item.label} direction="row" spacing={2} alignItems="center" sx={{ color: 'common.white' }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: SOFA7_COLORS.ink,
                        border: `2px solid ${SOFA7_COLORS.electric}`,
                      }}
                    >
                      <Iconify icon={item.icon} width={22} sx={{ color: SOFA7_COLORS.electric }} />
                    </Box>
                    <Stack>
                      <Typography variant="caption" sx={{ color: SOFA7_COLORS.electric, fontWeight: 'fontWeightBold', textTransform: 'uppercase' }}>
                        {item.label}
                      </Typography>
                      <Typography variant="subtitle1">{item.value}</Typography>
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
