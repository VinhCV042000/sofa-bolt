import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { sofa12Alpha, SOFA12_COLORS, SOFA12_IMAGES } from './sofa12-data';

// ----------------------------------------------------------------------

export function Sofa12Cta({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 10, md: 16 },
        position: 'relative',
        overflow: 'hidden',
        bgcolor: SOFA12_COLORS.clayDeep,
        ...sx,
      }}
      {...other}
    >
      <Box
        component="img"
        alt=""
        src={SOFA12_IMAGES.cta}
        sx={{
          inset: 0,
          width: 1,
          height: 1,
          objectFit: 'cover',
          position: 'absolute',
          opacity: 0.28,
        }}
      />
      <Box
        sx={{
          inset: 0,
          position: 'absolute',
          background: `radial-gradient(circle at 30% 30%, ${sofa12Alpha(SOFA12_COLORS.ochre, 0.35)}, transparent 60%)`,
        }}
      />

      <Container component={MotionViewport} sx={{ position: 'relative', zIndex: 9 }}>
        <Stack spacing={4} alignItems="center" sx={{ textAlign: 'center', maxWidth: 760, mx: 'auto' }}>
          <Typography
            component={m.p}
            variants={varFade({ distance: 24 }).inUp}
            variant="overline"
            sx={{ color: SOFA12_COLORS.sand, letterSpacing: 3 }}
          >
            Bắt đầu bằng một bộ swatch
          </Typography>

          <Typography
            component={m.h2}
            variants={varFade({ distance: 24 }).inUp}
            sx={{
              m: 0,
              fontSize: { xs: 34, md: 60 },
              fontWeight: 400,
              lineHeight: 1.1,
              color: SOFA12_COLORS.cream,
              fontFamily: (t) => t.typography.fontSecondaryFamily,
            }}
          >
            Để nắng nhà bạn chọn màu giúp
          </Typography>

          <Typography
            component={m.p}
            variants={varFade({ distance: 24 }).inUp}
            sx={{ color: sofa12Alpha(SOFA12_COLORS.sand, 0.85), fontSize: 18, lineHeight: 1.9 }}
          >
            Nhận miễn phí 40 mã vải đất, đặt cạnh cửa sổ nhà bạn và cảm nhận. Không mua cũng không sao —
            chúng tôi vẫn vui.
          </Typography>

          <Stack
            component={m.div}
            variants={varFade({ distance: 24 }).inUp}
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
          >
            <Button
              size="large"
              startIcon={<Iconify icon="solar:box-bold" />}
              sx={{
                px: 4,
                py: 1.75,
                fontSize: 16,
                fontWeight: 700,
                borderRadius: 99,
                color: SOFA12_COLORS.ink,
                bgcolor: SOFA12_COLORS.sand,
                '&:hover': { bgcolor: SOFA12_COLORS.cream },
              }}
            >
              Nhận swatch miễn phí
            </Button>
            <Button
              size="large"
              startIcon={<Iconify icon="solar:phone-bold" />}
              sx={{
                px: 4,
                py: 1.75,
                fontSize: 16,
                fontWeight: 700,
                borderRadius: 99,
                color: SOFA12_COLORS.cream,
                border: `1px solid ${sofa12Alpha(SOFA12_COLORS.cream, 0.5)}`,
                '&:hover': { bgcolor: sofa12Alpha(SOFA12_COLORS.cream, 0.1) },
              }}
            >
              Gọi 1900 6868
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
