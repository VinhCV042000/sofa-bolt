import type { BoxProps } from '@mui/material/Box';

import { useRef } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionContainer } from 'src/components/animate';

import { SOFA9_COLORS, SOFA9_IMAGES, SOFA9_PROMOS } from './sofa9-data';

// ----------------------------------------------------------------------

export function Sofa9Hero({ sx, ...other }: BoxProps) {
  const theme = useTheme();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        overflow: 'hidden',
        position: 'relative',
        minHeight: { xs: 620, md: '100vh' },
        maxHeight: { md: 960 },
        display: 'flex',
        alignItems: 'center',
        mt: 'calc(var(--layout-header-desktop-height) * -1)',
        pt: 'var(--layout-header-desktop-height)',
        bgcolor: SOFA9_COLORS.cream,
        ...sx,
      }}
      {...other}
    >
      <m.div style={{ y }} className="sofa9-hero-bg">
        <Box
          sx={{
            inset: 0,
            position: 'absolute',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `linear-gradient(100deg, ${varAlpha(SOFA9_COLORS.black, 0.8)} 0%, ${varAlpha(SOFA9_COLORS.black, 0.4)} 55%, ${varAlpha(SOFA9_COLORS.black, 0.15)} 100%), url(${SOFA9_IMAGES.hero})`,
          }}
        />
      </m.div>

      {/* Memphis geometric shapes */}
      <Box sx={{ position: 'absolute', top: '10%', right: '8%', width: 120, height: 120, bgcolor: SOFA9_COLORS.pink, borderRadius: '50%', opacity: 0.9, zIndex: 1 }} />
      <Box sx={{ position: 'absolute', top: '25%', right: '25%', width: 80, height: 80, bgcolor: SOFA9_COLORS.teal, transform: 'rotate(45deg)', opacity: 0.85, zIndex: 1 }} />
      <Box sx={{ position: 'absolute', bottom: '20%', left: '5%', width: 140, height: 60, bgcolor: SOFA9_COLORS.yellow, borderRadius: 30, opacity: 0.9, zIndex: 1 }} />
      <Box sx={{ position: 'absolute', top: '15%', left: '3%', width: 50, height: 50, border: `4px solid ${SOFA9_COLORS.purple}`, borderRadius: '50%', opacity: 0.8, zIndex: 1 }} />
      {/* Zigzag line */}
      <Box
        component="svg"
        sx={{ position: 'absolute', bottom: '30%', right: '12%', width: 100, height: 30, zIndex: 1, opacity: 0.8 }}
        viewBox="0 0 100 30"
      >
        <polyline points="0,15 15,0 30,15 45,0 60,15 75,0 90,15 100,5" fill="none" stroke={SOFA9_COLORS.teal} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </Box>

      <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9, py: { xs: 8, md: 10 } }}>
        <Stack spacing={5} sx={{ maxWidth: 680 }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box sx={{ width: 12, height: 12, bgcolor: SOFA9_COLORS.pink, borderRadius: '50%' }} />
              <Box sx={{ width: 12, height: 12, bgcolor: SOFA9_COLORS.teal, borderRadius: '50%' }} />
              <Box sx={{ width: 12, height: 12, bgcolor: SOFA9_COLORS.yellow, borderRadius: '50%' }} />
              <Typography
                variant="overline"
                sx={{ color: SOFA9_COLORS.pink, letterSpacing: 4, fontWeight: 'fontWeightBold', ml: 1 }}
              >
                SOFA RETRO — MEMPHIS VIBES
              </Typography>
            </Stack>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              component="h1"
              sx={{
                color: 'common.white',
                fontFamily: theme.typography.fontSecondaryFamily,
                fontSize: { xs: 42, md: 80 },
                lineHeight: { xs: 1.1, md: 1.0 },
                fontWeight: 'fontWeightBold',
              }}
            >
              Sofa vui vẻ,{' '}
              <Box
                component="span"
                sx={{
                  ...textGradient(
                    `90deg, ${SOFA9_COLORS.pink} 0%, ${SOFA9_COLORS.yellow} 50%, ${SOFA9_COLORS.teal} 100%`
                  ),
                }}
              >
                không bao giờ chán
              </Box>
            </Typography>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              sx={{
                color: varAlpha(theme.vars.palette.common.whiteChannel, 0.78),
                fontSize: { xs: 16, md: 18 },
                maxWidth: 520,
                lineHeight: 1.7,
              }}
            >
              Velvet màu neon, họa tiết hình học, cảm giác 80s. Sofa Retro biến phòng khách thành
              sân khấu — ngồi xuống là muốn nhảy!
            </Typography>
          </Box>

          <Box
            component={m.div}
            variants={varFade({ distance: 24 }).inUp}
            sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}
          >
            <Button
              component="a"
              href="#collections"
              size="large"
              variant="contained"
              startIcon={<Iconify icon="solar:palette-bold-duotone" />}
              sx={{
                borderRadius: 30,
                px: 4,
                py: 1.5,
                fontSize: 16,
                bgcolor: SOFA9_COLORS.pink,
                boxShadow: `0 6px 0 ${SOFA9_COLORS.black}`,
                '&:hover': { bgcolor: SOFA9_COLORS.pinkLight, transform: 'translateY(-2px)', boxShadow: `0 8px 0 ${SOFA9_COLORS.black}` },
                transition: 'all 0.2s',
              }}
            >
              Xem bộ sưu tập
            </Button>
            <Button
              component="a"
              href="#gallery"
              size="large"
              variant="contained"
              sx={{
                borderRadius: 30,
                px: 4,
                py: 1.5,
                fontSize: 16,
                bgcolor: SOFA9_COLORS.teal,
                color: SOFA9_COLORS.black,
                fontWeight: 'fontWeightBold',
                boxShadow: `0 6px 0 ${SOFA9_COLORS.black}`,
                '&:hover': { bgcolor: SOFA9_COLORS.tealLight, transform: 'translateY(-2px)', boxShadow: `0 8px 0 ${SOFA9_COLORS.black}` },
                transition: 'all 0.2s',
              }}
            >
              Xem không gian vui
            </Button>
          </Box>

          <Box
            component={m.div}
            variants={varFade({ distance: 24 }).inUp}
            sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mt: 2 }}
          >
            {SOFA9_PROMOS.map((promo) => (
              <Stack key={promo.label} direction="row" alignItems="center" spacing={1}>
                <Iconify icon={promo.icon} width={22} sx={{ color: SOFA9_COLORS.yellow }} />
                <Box>
                  <Typography variant="subtitle2" sx={{ color: 'common.white', fontWeight: 'fontWeightBold' }}>
                    {promo.label}
                  </Typography>
                  <Typography variant="caption" sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.6) }}>
                    {promo.text}
                  </Typography>
                </Box>
              </Stack>
            ))}
          </Box>
        </Stack>
      </Container>

      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 100,
          background: (t) => `linear-gradient(to top, ${SOFA9_COLORS.cream}, transparent)`,
          zIndex: 5,
        }}
      />
    </Box>
  );
}
