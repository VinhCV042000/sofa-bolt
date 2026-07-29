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

import { SOFA8_COLORS, SOFA8_IMAGES } from './sofa8-data';

// ----------------------------------------------------------------------

export function Sofa8Cta({ sx, ...other }: BoxProps) {
  return (
    <Box component="section" id="contact" sx={{ py: { xs: 8, md: 12 }, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Box
          sx={{
            overflow: 'hidden',
            borderRadius: '32px',
            position: 'relative',
            bgcolor: SOFA8_COLORS.oceanDeep,
          }}
        >
          <Box
            component={m.img}
            variants={varFade({ distance: 24 }).inLeft}
            alt="Showroom"
            src={SOFA8_IMAGES.cta}
            sx={{
              position: 'absolute',
              inset: 0,
              width: 1,
              height: 1,
              objectFit: 'cover',
              opacity: 0.28,
            }}
          />
          <Box
            sx={{
              inset: 0,
              position: 'absolute',
              background: `linear-gradient(90deg, ${varAlpha(SOFA8_COLORS.oceanDeep, 0.95)}, ${varAlpha(SOFA8_COLORS.oceanDeep, 0.65)})`,
            }}
          />

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
                    <Box sx={{ width: 48, height: 3, bgcolor: SOFA8_COLORS.coral, borderRadius: 2 }} />
                    <Typography variant="overline" sx={{ color: SOFA8_COLORS.coralLight, letterSpacing: 4 }}>
                      Trải nghiệm coastal
                    </Typography>
                  </Stack>
                  <Typography variant="h3" sx={{ color: 'common.white' }}>
                    Ghé showroom và cảm nhận sóng
                  </Typography>
                  <Typography sx={{ color: varAlpha('#FFFFFF', 0.7), lineHeight: 1.8 }}>
                    Trải nghiệm độ êm của bouclé, sự thoáng của linen, và tone biển dịu dàng. Đặt hẹn
                    trước để nhận tư vấn 1:1 và giảm 15% cho đơn đầu tiên.
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
                      bgcolor: SOFA8_COLORS.coral,
                      '&:hover': { bgcolor: SOFA8_COLORS.coralLight },
                    }}
                  >
                    Đặt hẹn tư vấn
                  </Button>
                  <Button
                    component={RouterLink}
                    href={paths.contact}
                    size="large"
                    variant="outlined"
                    sx={{
                      color: 'common.white',
                      borderRadius: 30,
                      px: 4,
                      borderColor: varAlpha('#FFFFFF', 0.35),
                      '&:hover': { borderColor: 'common.white', bgcolor: varAlpha('#FFFFFF', 0.08) },
                    }}
                  >
                    Liên hệ chúng tôi
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
                  { icon: 'solar:phone-bold-duotone', label: 'Hotline', value: '1900 9988' },
                  { icon: 'solar:map-point-bold-duotone', label: 'Showroom', value: '18 Võ Nguyên Giáp, Đà Nẵng' },
                  { icon: 'solar:clock-circle-bold-duotone', label: 'Giờ mở cửa', value: '8:30 - 21:00 (T2 - CN)' },
                ].map((item) => (
                  <Stack key={item.label} direction="row" spacing={2} alignItems="center" sx={{ color: 'common.white' }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        display: 'flex',
                        borderRadius: '16px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: varAlpha('#FFFFFF', 0.08),
                      }}
                    >
                      <Iconify icon={item.icon} width={24} sx={{ color: SOFA8_COLORS.sky }} />
                    </Box>
                    <Stack>
                      <Typography variant="caption" sx={{ color: varAlpha('#FFFFFF', 0.5) }}>
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
