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

import { SOFA5_IMAGES } from './sofa5-data';

// ----------------------------------------------------------------------

export function Sofa5Cta({ sx, ...other }: BoxProps) {
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
            minHeight: { xs: 360, md: 440 },
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
              backgroundImage: `url(${SOFA5_IMAGES.cta})`,
            }}
          />
          <Box
            sx={{
              inset: 0,
              position: 'absolute',
              background: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 100%)',
            }}
          />

          <Stack spacing={4} sx={{ position: 'relative', zIndex: 9, p: { xs: 4, md: 8 }, maxWidth: 640 }}>
            <Typography
              variant="overline"
              sx={{ color: 'warning.main', letterSpacing: 4, fontWeight: 'fontWeightBold' }}
            >
              Trải nghiệm Royale
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: 'common.white',
                fontFamily: (theme) => theme.typography.fontSecondaryFamily,
              }}
            >
              Sở hữu{' '}
              <Box
                component="span"
                sx={{
                  ...textGradient(
                    `135deg, ${'#FFD93D'} 0%, ${'#FFA000'} 100%`
                  ),
                }}
              >
                di sản
              </Box>{' '}
              của riêng bạn
            </Typography>
            <Typography sx={{ color: varAlpha('#FFFFFF', 0.7), fontSize: 17, maxWidth: 480, lineHeight: 1.7 }}>
              Tư vấn tận nhà miễn phí. Bảo hành 15 năm. Đổi trả 90 ngày. Chế tác bespoke theo yêu cầu.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap' }}>
              <Button
                component="a"
                href="#collections"
                size="large"
                variant="contained"
                sx={{
                  borderRadius: 2,
                  px: 4,
                  py: 1.5,
                  fontSize: 16,
                  bgcolor: 'warning.dark',
                  '&:hover': { bgcolor: 'warning.main' },
                }}
                startIcon={<Iconify icon="solar:medal-ribbon-star-bold-duotone" />}
              >
                Đặt tư vấn miễn phí
              </Button>
              <Button
                component="a"
                href="#faqs"
                size="large"
                variant="outlined"
                sx={{
                  color: 'common.white',
                  borderRadius: 2,
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
