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

import { SOFA9_COLORS, SOFA9_IMAGES } from './sofa9-data';

// ----------------------------------------------------------------------

export function Sofa9Cta({ sx, ...other }: BoxProps) {
  return (
    <Box component="section" id="contact" sx={{ py: { xs: 8, md: 12 }, bgcolor: SOFA9_COLORS.cream, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Box
          sx={{
            overflow: 'hidden',
            position: 'relative',
            bgcolor: SOFA9_COLORS.black,
            borderRadius: '28px',
            border: `4px solid ${SOFA9_COLORS.black}`,
            boxShadow: `10px 10px 0 ${SOFA9_COLORS.pink}`,
          }}
        >
          <Box
            component={m.img}
            variants={varFade({ distance: 24 }).inLeft}
            alt="Showroom"
            src={SOFA9_IMAGES.cta}
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
              background: `linear-gradient(90deg, ${varAlpha(SOFA9_COLORS.black, 0.95)}, ${varAlpha(SOFA9_COLORS.black, 0.65)})`,
            }}
          />
          <Box sx={{ position: 'absolute', top: 0, right: 0, width: 70, height: 70, bgcolor: SOFA9_COLORS.yellow, borderRadius: '0 24px 0 70px' }} />
          <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: 50, height: 50, bgcolor: SOFA9_COLORS.teal, borderRadius: '0 70px 0 0' }} />

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
                    <Box sx={{ width: 10, height: 10, bgcolor: SOFA9_COLORS.pink, borderRadius: '50%' }} />
                    <Box sx={{ width: 10, height: 10, bgcolor: SOFA9_COLORS.teal, transform: 'rotate(45deg)' }} />
                    <Box sx={{ width: 10, height: 10, bgcolor: SOFA9_COLORS.yellow }} />
                    <Typography variant="overline" sx={{ color: SOFA9_COLORS.yellow, letterSpacing: 4, fontWeight: 'fontWeightBold', ml: 1 }}>
                      GHÉ SHOWROOM
                    </Typography>
                  </Stack>
                  <Typography variant="h3" sx={{ color: 'common.white' }}>
                    Ngồi thử, cười thử!
                  </Typography>
                  <Typography sx={{ color: varAlpha('#FFFFFF', 0.7), lineHeight: 1.8 }}>
                    Trải nghiệm velvet neon, họa tiết hình học, và vibe 80s tại showroom. Đặt hẹn
                    trước — giảm 20% cho đơn đầu tiên. Đừng chỉ ngồi, hãy vui!
                  </Typography>
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    size="large"
                    variant="contained"
                    startIcon={<Iconify icon="solar:calendar-bold-duotone" />}
                    sx={{
                      borderRadius: 30,
                      px: 4,
                      bgcolor: SOFA9_COLORS.pink,
                      fontWeight: 'fontWeightBold',
                      boxShadow: `0 5px 0 ${SOFA9_COLORS.black}`,
                      '&:hover': { bgcolor: SOFA9_COLORS.pinkLight, transform: 'translateY(-2px)', boxShadow: `0 7px 0 ${SOFA9_COLORS.black}` },
                      transition: 'all 0.2s',
                    }}
                  >
                    Đặt hẹn ngay
                  </Button>
                  <Button
                    component={RouterLink}
                    href={paths.contact}
                    size="large"
                    variant="contained"
                    sx={{
                      color: SOFA9_COLORS.black,
                      borderRadius: 30,
                      px: 4,
                      bgcolor: SOFA9_COLORS.teal,
                      fontWeight: 'fontWeightBold',
                      boxShadow: `0 5px 0 ${SOFA9_COLORS.black}`,
                      '&:hover': { bgcolor: SOFA9_COLORS.tealLight, transform: 'translateY(-2px)', boxShadow: `0 7px 0 ${SOFA9_COLORS.black}` },
                      transition: 'all 0.2s',
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
                  { icon: 'solar:phone-bold-duotone', label: 'HOTLINE', value: '1900 7788', color: SOFA9_COLORS.pink },
                  { icon: 'solar:map-point-bold-duotone', label: 'SHOWROOM', value: '12 Bùi Viện, Q1, TP.HCM', color: SOFA9_COLORS.teal },
                  { icon: 'solar:clock-circle-bold-duotone', label: 'GIỜ MỞ CỬA', value: '10:00 - 23:00 (T2 - CN)', color: SOFA9_COLORS.yellow },
                ].map((item) => (
                  <Stack key={item.label} direction="row" spacing={2} alignItems="center" sx={{ color: 'common.white' }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'common.white',
                        border: `3px solid ${item.color}`,
                        borderRadius: '14px',
                      }}
                    >
                      <Iconify icon={item.icon} width={22} sx={{ color: SOFA9_COLORS.black }} />
                    </Box>
                    <Stack>
                      <Typography variant="caption" sx={{ color: item.color, fontWeight: 'fontWeightBold' }}>
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
