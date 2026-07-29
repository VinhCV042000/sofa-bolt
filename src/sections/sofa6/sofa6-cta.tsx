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

import { SOFA6_COLORS, SOFA6_IMAGES } from './sofa6-data';

// ----------------------------------------------------------------------

export function Sofa6Cta({ sx, ...other }: BoxProps) {
  return (
    <Box component="section" id="contact" sx={{ py: { xs: 8, md: 12 }, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Box
          sx={{
            overflow: 'hidden',
            borderRadius: '32px',
            position: 'relative',
            bgcolor: SOFA6_COLORS.forest,
          }}
        >
          <Box
            component={m.img}
            variants={varFade({ distance: 24 }).inLeft}
            alt="Showroom"
            src={SOFA6_IMAGES.cta}
            sx={{
              position: 'absolute',
              inset: 0,
              width: 1,
              height: 1,
              objectFit: 'cover',
              opacity: 0.3,
            }}
          />
          <Box
            sx={{
              inset: 0,
              position: 'absolute',
              background: `linear-gradient(90deg, ${varAlpha(SOFA6_COLORS.forest, 0.95)}, ${varAlpha(SOFA6_COLORS.forest, 0.7)})`,
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
                    <Box sx={{ width: 40, height: 2, bgcolor: SOFA6_COLORS.terracottaLight, borderRadius: 1 }} />
                    <Typography variant="overline" sx={{ color: SOFA6_COLORS.terracottaLight, letterSpacing: 4 }}>
                      Trải nghiệm thiên nhiên
                    </Typography>
                  </Stack>
                  <Typography variant="h3" sx={{ color: SOFA6_COLORS.cream }}>
                    Ghé showroom và cảm nhận
                  </Typography>
                  <Typography sx={{ color: varAlpha(SOFA6_COLORS.cream, 0.7), lineHeight: 1.8 }}>
                    Trải nghiệm độ êm của linen, mùi thơm của gỗ sồi, và sắc màu nhuộm thực vật. Đặt hẹn
                    trước để nhận tư vấn 1:1 và giảm 15% cho đơn đầu tiên.
                  </Typography>
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    size="large"
                    variant="contained"
                    startIcon={<Iconify icon="solar:calendar-bold-duotone" />}
                    sx={{
                      borderRadius: 28,
                      px: 4,
                      bgcolor: SOFA6_COLORS.terracotta,
                      '&:hover': { bgcolor: SOFA6_COLORS.terracottaLight },
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
                      color: SOFA6_COLORS.cream,
                      borderRadius: 28,
                      px: 4,
                      borderColor: varAlpha(SOFA6_COLORS.cream, 0.35),
                      '&:hover': { borderColor: SOFA6_COLORS.cream, bgcolor: varAlpha(SOFA6_COLORS.cream, 0.08) },
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
                  { icon: 'solar:phone-bold-duotone', label: 'Hotline', value: '1900 6677' },
                  { icon: 'solar:map-point-bold-duotone', label: 'Showroom', value: '28 Tống hữu, Q1, TP.HCM' },
                  { icon: 'solar:clock-circle-bold-duotone', label: 'Giờ mở cửa', value: '8:00 - 20:00 (T2 - CN)' },
                ].map((item) => (
                  <Stack
                    key={item.label}
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    sx={{ color: SOFA6_COLORS.cream }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        display: 'flex',
                        borderRadius: '14px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: varAlpha(SOFA6_COLORS.cream, 0.08),
                      }}
                    >
                      <Iconify icon={item.icon} width={24} sx={{ color: SOFA6_COLORS.sageLight }} />
                    </Box>
                    <Stack>
                      <Typography variant="caption" sx={{ color: varAlpha(SOFA6_COLORS.cream, 0.5) }}>
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
