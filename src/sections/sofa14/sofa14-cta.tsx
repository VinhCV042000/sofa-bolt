import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { useSofa14Content } from './sofa14-i18n';
import { sofa14Alpha, SOFA14_COLORS, SOFA14_IMAGES } from './sofa14-data';

// ----------------------------------------------------------------------

export function Sofa14Cta({ sx, ...other }: BoxProps) {
  const content = useSofa14Content();

  return (
    <Box
      component="section"
      id="contact"
      sx={{ py: { xs: 10, md: 16 }, position: 'relative', overflow: 'hidden', bgcolor: SOFA14_COLORS.mintDeep, ...sx }}
      {...other}
    >
      <Box
        component="img"
        alt=""
        src={SOFA14_IMAGES.cta}
        sx={{ inset: 0, width: 1, height: 1, objectFit: 'cover', position: 'absolute', opacity: 0.2 }}
      />
      <Box
        sx={{
          inset: 0,
          position: 'absolute',
          background: `radial-gradient(circle at 30% 30%, ${sofa14Alpha(SOFA14_COLORS.butter, 0.4)}, transparent 60%)`,
        }}
      />

      <Container component={MotionViewport} sx={{ position: 'relative', zIndex: 9 }}>
        <Stack spacing={4} alignItems="center" sx={{ textAlign: 'center', maxWidth: 760, mx: 'auto' }}>
          <Typography component={m.p} variants={varFade({ distance: 24 }).inUp} variant="overline" sx={{ color: SOFA14_COLORS.ink, letterSpacing: 2 }}>
            {content.cta.kicker}
          </Typography>

          <Typography component={m.h2} variants={varFade({ distance: 24 }).inUp} sx={{ m: 0, fontSize: { xs: 32, md: 58 }, fontWeight: 800, lineHeight: 1.1, color: SOFA14_COLORS.ink }}>
            {content.cta.title}
          </Typography>

          <Typography component={m.p} variants={varFade({ distance: 24 }).inUp} sx={{ color: sofa14Alpha(SOFA14_COLORS.ink, 0.85), fontSize: 18, lineHeight: 1.9 }}>
            {content.cta.subtitle}
          </Typography>

          <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              size="large"
              startIcon={<Iconify icon="solar:box-bold" />}
              sx={{
                px: 4,
                py: 1.75,
                fontSize: 16,
                fontWeight: 800,
                borderRadius: 99,
                color: SOFA14_COLORS.ink,
                bgcolor: SOFA14_COLORS.white,
                boxShadow: `0 8px 0 ${sofa14Alpha(SOFA14_COLORS.ink, 0.2)}`,
                '&:hover': { bgcolor: SOFA14_COLORS.canvas },
              }}
            >
              {content.cta.primary}
            </Button>
            <Button
              size="large"
              startIcon={<Iconify icon="solar:phone-bold" />}
              sx={{
                px: 4,
                py: 1.75,
                fontSize: 16,
                fontWeight: 800,
                borderRadius: 99,
                color: SOFA14_COLORS.ink,
                border: `2px solid ${sofa14Alpha(SOFA14_COLORS.ink, 0.4)}`,
                '&:hover': { bgcolor: sofa14Alpha(SOFA14_COLORS.ink, 0.08) },
              }}
            >
              {content.cta.secondary}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
