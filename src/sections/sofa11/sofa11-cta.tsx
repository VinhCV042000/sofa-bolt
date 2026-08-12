import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { sofa11Alpha, SOFA11_COLORS, SOFA11_IMAGES } from './sofa11-data';

// ----------------------------------------------------------------------

export function Sofa11Cta({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="cta"
      sx={{
        py: { xs: 10, md: 14 },
        position: 'relative',
        overflow: 'hidden',
        bgcolor: SOFA11_COLORS.void,
        ...sx,
      }}
      {...other}
    >
      <Box
        sx={{
          inset: 0,
          position: 'absolute',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `linear-gradient(120deg, ${sofa11Alpha(SOFA11_COLORS.void, 0.94)} 0%, ${sofa11Alpha(SOFA11_COLORS.magenta, 0.5)} 100%), url(${SOFA11_IMAGES.cta})`,
        }}
      />

      <Container component={MotionViewport} sx={{ position: 'relative', zIndex: 9 }}>
        <Stack spacing={4} sx={{ textAlign: 'center', maxWidth: 760, mx: 'auto' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              variant="h1"
              sx={{
                color: SOFA11_COLORS.cream,
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: -1.5,
                fontSize: { xs: 38, md: 64 },
                lineHeight: 1,
              }}
            >
              Đừng để phòng khách{' '}
              <Box
                component="span"
                sx={{
                  color: SOFA11_COLORS.lime,
                  textShadow: `4px 4px 0 ${SOFA11_COLORS.cyan}`,
                }}
              >
                nhạt nhoà
              </Box>
            </Typography>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.75), fontSize: 18 }}>
              Đặt lịch tư vấn màu miễn phí — nhận ngay bộ 6 mã vải mẫu và bản render 3D phòng khách
              của bạn trong 24h.
            </Typography>
          </Box>

          <Box
            component={m.div}
            variants={varFade({ distance: 24 }).inUp}
            sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}
          >
            <Button
              component="a"
              href={paths.contact}
              size="large"
              startIcon={<Iconify icon="solar:bolt-circle-bold" />}
              sx={{
                px: 4.5,
                py: 1.75,
                fontSize: 16,
                fontWeight: 900,
                borderRadius: 99,
                textTransform: 'uppercase',
                color: SOFA11_COLORS.void,
                bgcolor: SOFA11_COLORS.lime,
                boxShadow: `0 0 36px ${sofa11Alpha(SOFA11_COLORS.lime, 0.6)}`,
                '&:hover': { bgcolor: SOFA11_COLORS.cyan },
              }}
            >
              Đặt lịch tư vấn màu
            </Button>
            <Button
              component="a"
              href="tel:19001234"
              size="large"
              startIcon={<Iconify icon="solar:phone-bold" />}
              sx={{
                px: 4,
                py: 1.75,
                fontSize: 16,
                fontWeight: 800,
                borderRadius: 99,
                textTransform: 'uppercase',
                color: SOFA11_COLORS.cream,
                border: `2px solid ${sofa11Alpha(SOFA11_COLORS.cream, 0.45)}`,
                '&:hover': { borderColor: SOFA11_COLORS.lime, color: SOFA11_COLORS.lime },
              }}
            >
              1900 1234
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
