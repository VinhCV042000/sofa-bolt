import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA4_IMAGES } from './sofa4-data';

// ----------------------------------------------------------------------

export function Sofa4Cta({ sx, ...other }: BoxProps) {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Box
          component={m.div}
          variants={varFade({ distance: 24 }).inUp}
          sx={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 4,
            minHeight: { xs: 360, md: 420 },
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              inset: 0,
              position: 'absolute',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundImage: `url(${SOFA4_IMAGES.cta})`,
            }}
          />
          <Box
            sx={{
              inset: 0,
              position: 'absolute',
              background: 'linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 100%)',
            }}
          />

          <Stack spacing={4} sx={{ position: 'relative', zIndex: 9, p: { xs: 4, md: 8 }, maxWidth: 640 }}>
            <Typography
              variant="overline"
              sx={{ color: 'warning.light', letterSpacing: 4, fontWeight: 'fontWeightBold' }}
            >
              Bắt đầu ngay
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: 'common.white',
                fontFamily: (theme) => theme.typography.fontSecondaryFamily,
              }}
            >
              Tạo không gian{' '}
              <Box
                component="span"
                sx={{
                  ...textGradient(
                    `135deg, ${'#FFD93D'} 0%, ${'#FF6B6B'} 100%`
                  ),
                }}
              >
                mang dấu ấn
              </Box>{' '}
              của bạn
            </Typography>
            <Typography sx={{ color: varAlpha('#FFFFFF', 0.7), fontSize: 17, maxWidth: 480, lineHeight: 1.7 }}>
              Giảm 20% cho đơn hàng đầu tiên. Trả góp 0% trong 6 tháng. Giao hàng 48 giờ.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap' }}>
              <Button
                component="a"
                href="#products"
                size="large"
                variant="contained"
                color="warning"
                startIcon={<Iconify icon="solar:armchair-2-bold-duotone" />}
                sx={{ borderRadius: 3, px: 4, py: 1.5, fontSize: 16 }}
              >
                Mua ngay — Giảm 20%
              </Button>
              <Button
                component="a"
                href="#faqs"
                size="large"
                variant="outlined"
                sx={{
                  color: 'common.white',
                  borderRadius: 3,
                  px: 4,
                  py: 1.5,
                  fontSize: 16,
                  borderColor: varAlpha('#FFFFFF', 0.4),
                  '&:hover': {
                    borderColor: 'common.white',
                    bgcolor: varAlpha('#FFFFFF', 0.08),
                  },
                }}
              >
                Tìm hiểu thêm
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
