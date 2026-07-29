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

import { SOFA10_COLORS, SOFA10_IMAGES } from './sofa10-data';

// ----------------------------------------------------------------------

export function Sofa10Cta({ sx, ...other }: BoxProps) {
  return (
    <Box component="section" id="contact" sx={{ py: { xs: 8, md: 12 }, bgcolor: SOFA10_COLORS.warmWhite, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Box
          sx={{
            overflow: 'hidden',
            position: 'relative',
            bgcolor: SOFA10_COLORS.charcoal,
            borderRadius: '4px',
          }}
        >
          <Box
            component={m.img}
            variants={varFade({ distance: 24 }).inLeft}
            alt="Showroom"
            src={SOFA10_IMAGES.cta}
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
              background: `linear-gradient(95deg, ${varAlpha(SOFA10_COLORS.charcoal, 0.95)}, ${varAlpha(SOFA10_COLORS.charcoal, 0.7)})`,
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
                    <Box sx={{ width: 40, height: 1.5, bgcolor: SOFA10_COLORS.wood, opacity: 0.6 }} />
                    <Typography variant="overline" sx={{ color: varAlpha('#FFFFFF', 0.5), letterSpacing: 6, textTransform: 'uppercase', fontWeight: 'fontWeightLight' }}>
                      Visit · 訪問
                    </Typography>
                  </Stack>
                  <Typography variant="h3" sx={{ color: 'common.white', fontWeight: 'fontWeightLight', letterSpacing: -0.3 }}>
                    Ghé showroom,{' '}
                    <Box component="span" sx={{ fontStyle: 'italic', color: SOFA10_COLORS.woodLight }}>
                      cảm nhận tĩnh
                    </Box>
                  </Typography>
                  <Typography sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 2, fontWeight: 'fontWeightLight' }}>
                    Trải nghiệm linen thô, bouclé mộc, và vân gỗ tự nhiên. Đặt hẹn trước — giảm 15%
                    cho đơn đầu tiên. Không gian tĩnh đang chờ bạn.
                  </Typography>
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    size="large"
                    variant="contained"
                    startIcon={<Iconify icon="solar:calendar-bold-duotone" />}
                    sx={{
                      borderRadius: 2,
                      px: 4,
                      bgcolor: SOFA10_COLORS.wood,
                      color: 'common.white',
                      fontWeight: 'fontWeightLight',
                      textTransform: 'none',
                      letterSpacing: 0.5,
                      '&:hover': { bgcolor: SOFA10_COLORS.rust },
                    }}
                  >
                    Đặt hẹn tư vấn
                  </Button>
                  <Button
                    component={RouterLink}
                    href={paths.contact}
                    size="large"
                    variant="text"
                    sx={{
                      color: 'common.white',
                      borderRadius: 2,
                      px: 3,
                      fontWeight: 'fontWeightLight',
                      textTransform: 'none',
                      letterSpacing: 0.5,
                      '&:hover': { bgcolor: varAlpha('#FFFFFF', 0.08) },
                    }}
                  >
                    Liên hệ chúng tôi →
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
                  { icon: 'solar:phone-bold-duotone', label: 'HOTLINE', value: '1900 5566' },
                  { icon: 'solar:map-point-bold-duotone', label: 'SHOWROOM', value: '8 Nguyễn Du, Q1, TP.HCM' },
                  { icon: 'solar:clock-circle-bold-duotone', label: 'GIỜ MỞ CỬA', value: '9:00 - 20:00 (T2 - CN)' },
                ].map((item) => (
                  <Stack key={item.label} direction="row" spacing={2} alignItems="center" sx={{ color: 'common.white' }}>
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `1px solid ${varAlpha('#FFFFFF', 0.15)}`,
                        borderRadius: '4px',
                      }}
                    >
                      <Iconify icon={item.icon} width={20} sx={{ color: SOFA10_COLORS.woodLight, opacity: 0.7 }} />
                    </Box>
                    <Stack>
                      <Typography variant="caption" sx={{ color: varAlpha('#FFFFFF', 0.4), letterSpacing: 2, textTransform: 'uppercase', fontWeight: 'fontWeightLight' }}>
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
