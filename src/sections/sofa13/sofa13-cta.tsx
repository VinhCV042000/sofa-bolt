import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { useSofa13Content } from './sofa13-i18n';
import { sofa13Alpha, SOFA13_COLORS, SOFA13_IMAGES } from './sofa13-data';

// ----------------------------------------------------------------------

export function Sofa13Cta({ sx, ...other }: BoxProps) {
  const content = useSofa13Content();

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 10, md: 16 },
        position: 'relative',
        overflow: 'hidden',
        bgcolor: SOFA13_COLORS.noirDeep,
        ...sx,
      }}
      {...other}
    >
      <Box
        component="img"
        alt=""
        src={SOFA13_IMAGES.cta}
        sx={{
          inset: 0,
          width: 1,
          height: 1,
          objectFit: 'cover',
          position: 'absolute',
          opacity: 0.22,
        }}
      />
      <Box
        sx={{
          inset: 0,
          position: 'absolute',
          background: `repeating-conic-gradient(from 0deg, ${sofa13Alpha(SOFA13_COLORS.gold, 0.1)} 0deg 3deg, transparent 3deg 12deg)`,
          maskImage: 'radial-gradient(circle at 50% 50%, black 0%, transparent 70%)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: { xs: 16, md: 28 },
          border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.35)}`,
          pointerEvents: 'none',
        }}
      />

      <Container component={MotionViewport} sx={{ position: 'relative', zIndex: 9 }}>
        <Stack spacing={4} alignItems="center" sx={{ textAlign: 'center', maxWidth: 760, mx: 'auto' }}>
          <Typography
            component={m.p}
            variants={varFade({ distance: 24 }).inUp}
            variant="overline"
            sx={{ color: SOFA13_COLORS.goldPale, letterSpacing: 3 }}
          >
            {content.cta.overline}
          </Typography>

          <Typography
            component={m.h2}
            variants={varFade({ distance: 24 }).inUp}
            sx={{
              m: 0,
              fontSize: { xs: 32, md: 58 },
              lineHeight: 1.15,
              letterSpacing: 1,
              color: SOFA13_COLORS.ivory,
              fontFamily: (t) => t.typography.fontSecondaryFamily,
            }}
          >
            {content.cta.title}
          </Typography>

          <Typography
            component={m.p}
            variants={varFade({ distance: 24 }).inUp}
            sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.75), fontSize: 18, lineHeight: 1.9 }}
          >
            {content.cta.description}
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
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: 1,
                borderRadius: 0,
                color: SOFA13_COLORS.noir,
                bgcolor: SOFA13_COLORS.gold,
                '&:hover': { bgcolor: SOFA13_COLORS.goldPale },
              }}
            >
              {content.cta.ctaPrimary}
            </Button>
            <Button
              size="large"
              startIcon={<Iconify icon="solar:phone-bold" />}
              sx={{
                px: 4,
                py: 1.75,
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: 1,
                borderRadius: 0,
                color: SOFA13_COLORS.ivory,
                border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.5)}`,
                '&:hover': { bgcolor: sofa13Alpha(SOFA13_COLORS.gold, 0.1) },
              }}
            >
              {content.cta.ctaSecondary} · {content.cta.phone}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
