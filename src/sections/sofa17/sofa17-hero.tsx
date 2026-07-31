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

import { useSofa17Content } from './sofa17-i18n';
import { SOFA17_COLORS, SOFA17_IMAGES, SOFA17_PROMO_ICONS } from './sofa17-data';

// ----------------------------------------------------------------------

// Moroccan zellige 8-point star ornament
function ZelligeStar({ color, size = 160, sx }: { color: string; size?: number; sx?: object }) {
  return (
    <Box
      component="svg"
      viewBox="0 0 100 100"
      sx={{ width: size, height: size, color, position: 'absolute', ...sx }}
    >
      <g stroke="currentColor" strokeWidth="0.8" fill="none">
        {/* 8-point star (two overlapping squares) */}
        <rect x="25" y="25" width="50" height="50" transform="rotate(0 50 50)" />
        <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" />
        {/* Inner circle */}
        <circle cx="50" cy="50" r="22" />
        {/* Outer radiating lines */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 360) / 8;
          return (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={50 + 42 * Math.cos((angle * Math.PI) / 180)}
              y2={50 + 42 * Math.sin((angle * Math.PI) / 180)}
            />
          );
        })}
        {/* Center star fill */}
        <path
          d="M50 30 L55 45 L70 45 L58 55 L63 70 L50 60 L37 70 L42 55 L30 45 L45 45 Z"
          fill="currentColor"
          opacity="0.15"
        />
      </g>
    </Box>
  );
}

export function Sofa17Hero({ sx, ...other }: BoxProps) {
  const theme = useTheme();
  const content = useSofa17Content();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        overflow: 'hidden',
        position: 'relative',
        minHeight: { xs: 640, md: '100vh' },
        maxHeight: { md: 980 },
        display: 'flex',
        alignItems: 'center',
        mt: 'calc(var(--layout-header-desktop-height) * -1)',
        pt: 'var(--layout-header-desktop-height)',
        bgcolor: SOFA17_COLORS.tealDeep,
        ...sx,
      }}
      {...other}
    >
      <m.div style={{ y }}>
        <Box
          sx={{
            inset: 0,
            position: 'absolute',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `linear-gradient(120deg, ${varAlpha(SOFA17_COLORS.tealDeep, 0.92)} 0%, ${varAlpha(SOFA17_COLORS.tealDeep, 0.7)} 50%, ${varAlpha(SOFA17_COLORS.ruby, 0.3)} 100%), url(${SOFA17_IMAGES.hero})`,
          }}
        />
      </m.div>

      {/* Zellige star ornaments */}
      <ZelligeStar color={varAlpha(SOFA17_COLORS.saffron, 0.12)} size={400} sx={{ top: '-10%', right: '-8%', zIndex: 1 }} />
      <ZelligeStar color={varAlpha(SOFA17_COLORS.saffronLight, 0.08)} size={260} sx={{ bottom: '5%', left: '-5%', zIndex: 1 }} />

      {/* Ornate border accents */}
      <Box sx={{ position: 'absolute', top: 32, left: 32, right: 32, bottom: 32, border: `1px solid ${varAlpha(SOFA17_COLORS.saffron, 0.2)}`, borderRadius: 2, zIndex: 1, pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', top: 40, left: 40, right: 40, bottom: 40, border: `1px solid ${varAlpha(SOFA17_COLORS.saffron, 0.08)}`, borderRadius: 1, zIndex: 1, pointerEvents: 'none' }} />

      <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9, py: { xs: 8, md: 10 } }}>
        <Stack spacing={5} sx={{ maxWidth: 620 }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box sx={{ width: 36, height: 2, bgcolor: SOFA17_COLORS.saffron, borderRadius: 1 }} />
              <Typography
                variant="overline"
                sx={{ color: SOFA17_COLORS.saffronLight, letterSpacing: 3, fontWeight: 'fontWeightMedium', textTransform: 'uppercase' }}
              >
                {content.hero.badge}
              </Typography>
            </Stack>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              component="h1"
              sx={{
                color: SOFA17_COLORS.cream,
                fontFamily: theme.typography.fontSecondaryFamily,
                fontSize: { xs: 40, md: 72 },
                lineHeight: { xs: 1.15, md: 1.05 },
                fontWeight: 'fontWeightLight',
                letterSpacing: -0.5,
              }}
            >
              {content.hero.title1}{' '}
              <Box
                component="span"
                sx={{
                  ...textGradient(`90deg, ${SOFA17_COLORS.saffron} 0%, ${SOFA17_COLORS.saffronLight} 100%`),
                  fontStyle: 'italic',
                }}
              >
                {content.hero.titleHighlight}
              </Box>
              <br />
              {content.hero.title2}
            </Typography>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              sx={{
                color: varAlpha(SOFA17_COLORS.cream, 0.7),
                fontSize: { xs: 15, md: 17 },
                maxWidth: 480,
                lineHeight: 2,
                fontWeight: 'fontWeightLight',
              }}
            >
              {content.hero.subtitle}
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
              startIcon={<Iconify icon="solar:palmtree2-bold-duotone" />}
              sx={{
                px: 4,
                py: 1.75,
                fontSize: 15,
                fontWeight: 'fontWeightMedium',
                borderRadius: 2,
                color: SOFA17_COLORS.tealDeep,
                bgcolor: SOFA17_COLORS.saffron,
                textTransform: 'none',
                letterSpacing: 0.5,
                boxShadow: `0 8px 24px -8px ${varAlpha(SOFA17_COLORS.saffron, 0.6)}`,
                '&:hover': { bgcolor: SOFA17_COLORS.saffronDeep },
              }}
            >
              {content.hero.ctaPrimary}
            </Button>
            <Button
              component="a"
              href="#contact"
              size="large"
              sx={{
                px: 4,
                py: 1.75,
                fontSize: 15,
                fontWeight: 'fontWeightMedium',
                borderRadius: 2,
                color: SOFA17_COLORS.saffronLight,
                bgcolor: 'transparent',
                textTransform: 'none',
                letterSpacing: 0.5,
                border: `1px solid ${varAlpha(SOFA17_COLORS.saffron, 0.4)}`,
                '&:hover': { border: `1px solid ${SOFA17_COLORS.saffron}`, bgcolor: varAlpha(SOFA17_COLORS.saffron, 0.06) },
              }}
            >
              {content.hero.ctaSecondary}
            </Button>
          </Box>

          <Box
            component={m.div}
            variants={varFade({ distance: 24 }).inUp}
            sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, pt: 1 }}
          >
            {content.hero.promos.map((promo, index) => (
              <Stack key={promo.label} direction="row" alignItems="center" spacing={1.25}>
                <Iconify icon={SOFA17_PROMO_ICONS[index]} width={22} sx={{ color: SOFA17_COLORS.saffron }} />
                <Box>
                  <Typography variant="subtitle2" sx={{ color: SOFA17_COLORS.cream, fontWeight: 'fontWeightMedium' }}>
                    {promo.label}
                  </Typography>
                  <Typography variant="caption" sx={{ color: varAlpha(SOFA17_COLORS.cream, 0.5), fontWeight: 'fontWeightLight' }}>
                    {promo.text}
                  </Typography>
                </Box>
              </Stack>
            ))}
          </Box>

          {/* Est. badge */}
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ pt: 2 }}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box
                sx={{
                  px: 2.5,
                  py: 1.25,
                  bgcolor: SOFA17_COLORS.saffron,
                  color: SOFA17_COLORS.tealDeep,
                  borderRadius: 2,
                  textAlign: 'center',
                }}
              >
                <Typography sx={{ fontSize: 22, fontWeight: 'fontWeightBold', lineHeight: 1, fontFamily: (t) => t.typography.fontSecondaryFamily }}>
                  {content.hero.badgeNumber}
                </Typography>
              </Box>
              <Typography variant="caption" sx={{ color: varAlpha(SOFA17_COLORS.cream, 0.5), maxWidth: 180, lineHeight: 1.5, fontWeight: 'fontWeightLight' }}>
                {content.hero.badgeLabel}
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
