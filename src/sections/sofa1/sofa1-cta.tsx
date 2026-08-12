import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA1_IMAGES } from './sofa1-data';

// ----------------------------------------------------------------------

export function Sofa1Cta({ sx, ...other }: BoxProps) {
  return (
    <Box component="section" id="contact" sx={{ py: { xs: 8, md: 12 }, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Box
          sx={{
            overflow: 'hidden',
            borderRadius: 4,
            position: 'relative',
            bgcolor: 'grey.900',
          }}
        >
          <Box
            component={m.img}
            variants={varFade({ distance: 24 }).inLeft}
            alt="Casa Sofa showroom"
            src={SOFA1_IMAGES.cta}
            sx={{
              position: 'absolute',
              inset: 0,
              width: 1,
              height: 1,
              objectFit: 'cover',
              opacity: 0.4,
            }}
          />
          <Box
            sx={{
              inset: 0,
              position: 'absolute',
              background: (t) =>
                `linear-gradient(135deg, ${varAlpha(t.vars.palette.grey['900Channel'], 0.92)}, ${varAlpha(t.vars.palette.grey['900Channel'], 0.64)})`,
            }}
          />

          <Stack
            component={m.div}
            variants={varFade({ distance: 24 }).inUp}
            spacing={4}
            sx={{ p: { xs: 5, md: 8 }, position: 'relative', zIndex: 9, maxWidth: 560 }}
          >
            <Stack spacing={2}>
              <Typography variant="overline" sx={{ color: 'primary.light', letterSpacing: 4 }}>
                Trải nghiệm trực tiếp
              </Typography>
              <Typography variant="h3" sx={{ color: 'common.white' }}>
                Ghé showroom và ngồi thử
              </Typography>
              <Typography sx={{ color: varAlpha('#FFFFFF', 0.64), lineHeight: 1.8 }}>
                Trải nghiệm độ êm, chất liệu thật và nhận tư vấn 1:1. Đặt hẹn trước để giảm 10% cho
                đơn đầu tiên.
              </Typography>
            </Stack>

            <Stack spacing={2}>
              {[
                { icon: 'solar:phone-bold-duotone', label: 'Hotline', value: '1900 6789' },
                { icon: 'solar:map-point-bold-duotone', label: 'Showroom', value: '88 Lê Lợi, Quận 1, TP.HCM' },
                { icon: 'solar:clock-circle-bold-duotone', label: 'Giờ mở cửa', value: '9:00 - 20:00 (T2 - CN)' },
              ].map((item) => (
                <Stack key={item.label} direction="row" spacing={2} alignItems="center" sx={{ color: 'common.white' }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      display: 'flex',
                      borderRadius: 1.5,
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: varAlpha('#FFFFFF', 0.08),
                    }}
                  >
                    <Iconify icon={item.icon} width={24} sx={{ color: 'primary.light' }} />
                  </Box>
                  <Stack>
                    <Typography variant="caption" sx={{ color: varAlpha('#FFFFFF', 0.48) }}>
                      {item.label}
                    </Typography>
                    <Typography variant="subtitle1">{item.value}</Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                size="large"
                variant="contained"
                color="primary"
                startIcon={<Iconify icon="solar:calendar-bold-duotone" />}
                sx={{ borderRadius: 2, px: 4 }}
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
                  borderRadius: 2,
                  px: 4,
                  borderColor: varAlpha('#FFFFFF', 0.32),
                  '&:hover': { borderColor: 'common.white', bgcolor: varAlpha('#FFFFFF', 0.08) },
                }}
              >
                Liên hệ chúng tôi
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
