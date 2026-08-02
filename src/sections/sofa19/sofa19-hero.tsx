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

import { useSofa19Content } from './sofa19-i18n';
import { SOFA19_COLORS, SOFA19_IMAGES, SOFA19_PROMO_ICONS } from './sofa19-data';

// ----------------------------------------------------------------------

// Brazilian monstera leaf ornament
function MonsteraLeaf({ color, size = 160, sx }: { color: string; size?: number; sx?: object }) {
  return (
    <Box
      component="svg"
      viewBox="0 0 100 100"
      sx={{ width: size, height: size, color, position: 'absolute', ...sx }}
    >
      <g stroke="currentColor" strokeWidth="0.8" fill="none">
        {/* Monstera leaf body — split heart shape */}
        <path d="M50 8 C72 8 86 26 86 50 C86 74 70 92 50 92 C30 92 14 74 14 50 C14 26 28 8 50 8 Z" />
        {/* Central stem */}
        <line x1="50" y1="10" x2="50" y2="92" />
        {/* Leaf lobes / splits on left */}
        <path d="M50 30 C40 28 30 30 24 38 C30 36 40 34 50 38" fill="currentColor" opacity="0.1" />
        <path d="M50 48 C38 46 28 48 20 56 C28 54 38 52 50 56" fill="currentColor" opacity="0.1" />
        <path d="M50 64 C40 62 32 64 26 72 C32 70 40 68 50 72" fill="currentColor" opacity="0.1" />
        {/* Leaf lobes / splits on right */}
        <path d="M50 30 C60 28 70 30 76 38 C70 36 60 34 50 38" fill="currentColor" opacity="0.1" />
        <path d="M50 48 C62 46 72 48 80 56 C72 54 62 52 50 56" fill="currentColor" opacity="0.1" />
        <path d="M50 64 C60 62 68 64 74 72 C68 70 60 68 50 72" fill="currentColor" opacity="0.1" />
        {/* Side veins */}
        <line x1="50" y1="22" x2="30" y2="26" />
        <line x1="50" y1="22" x2="70" y2="26" />
        <line x1="50" y1="80" x2="34" y2="82" />
        <line x1="50" y1="80" x2="66" y2="82" />
        {/* Center fill */}
        <path
          d="M50 8 C72 8 86 26 86 50 C86 74 70 92 50 92 C30 92 14 74 14 50 C14 26 28 8 50 8 Z"
          fill="currentColor"
          opacity="0.08"
        />
      </g>
    </Box>
  );
}

export function Sofa19Hero({ sx, ...other }: BoxProps) {
  const theme = useTheme();
  const content = useSofa19Content();
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
        bgcolor: SOFA19_COLORS.jungleDeep,
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
            backgroundImage: `linear-gradient(120deg, ${varAlpha(SOFA19_COLORS.jungleDeep, 0.92)} 0%, ${varAlpha(SOFA19_COLORS.jungleDeep, 0.7)} 50%, ${varAlpha(SOFA19_COLORS.coral, 0.3)} 100%), url(${SOFA19_IMAGES.hero})`,
          }}
        />
      </m.div>

      {/* Monstera leaf ornaments */}
      <MonsteraLeaf color={varAlpha(SOFA19_COLORS.golden, 0.12)} size={400} sx={{ top: '-10%', right: '-8%', zIndex: 1 }} />
      <MonsteraLeaf color={varAlpha(SOFA19_COLORS.goldenLight, 0.08)} size={260} sx={{ bottom: '5%', left: '-5%', zIndex: 1 }} />

      {/* Inner border accents */}
      <Box sx={{ position: 'absolute', top: 32, left: 32, right: 32, bottom: 32, border: `1px solid ${varAlpha(SOFA19_COLORS.golden, 0.2)}`, borderRadius: 2, zIndex: 1, pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', top: 40, left: 40, right: 40, bottom: 40, border: `1px solid ${varAlpha(SOFA19_COLORS.golden, 0.08)}`, borderRadius: 1, zIndex: 1, pointerEvents: 'none' }} />

      <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9, py: { xs: 8, md: 10 } }}>
        <Stack spacing={5} sx={{ maxWidth: 620 }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box sx={{ width: 36, height: 2, bgcolor: SOFA19_COLORS.golden, borderRadius: 1 }} />
              <Typography
                variant="overline"
                sx={{ color: SOFA19_COLORS.goldenLight, letterSpacing: 3, fontWeight: 'fontWeightMedium', textTransform: 'uppercase' }}
              >
                {content.hero.badge}
              </Typography>
            </Stack>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              component="h1"
              sx={{
                color: SOFA19_COLORS.cream,
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
                  ...textGradient(`90deg, ${SOFA19_COLORS.golden} 0%, ${SOFA19_COLORS.goldenLight} 100%`),
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
                color: varAlpha(SOFA19_COLORS.cream, 0.7),
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
                color: SOFA19_COLORS.jungleDeep,
                bgcolor: SOFA19_COLORS.golden,
                textTransform: 'none',
                letterSpacing: 0.5,
                boxShadow: `0 8px 24px -8px ${varAlpha(SOFA19_COLORS.golden, 0.6)}`,
                '&:hover': { bgcolor: SOFA19_COLORS.goldenDeep },
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
                color: SOFA19_COLORS.goldenLight,
                bgcolor: 'transparent',
                textTransform: 'none',
                letterSpacing: 0.5,
                border: `1px solid ${varAlpha(SOFA19_COLORS.golden, 0.4)}`,
                '&:hover': { border: `1px solid ${SOFA19_COLORS.golden}`, bgcolor: varAlpha(SOFA19_COLORS.golden, 0.06) },
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
                <Iconify icon={SOFA19_PROMO_ICONS[index]} width={22} sx={{ color: SOFA19_COLORS.golden }} />
                <Box>
                  <Typography variant="subtitle2" sx={{ color: SOFA19_COLORS.cream, fontWeight: 'fontWeightMedium' }}>
                    {promo.label}
                  </Typography>
                  <Typography variant="caption" sx={{ color: varAlpha(SOFA19_COLORS.cream, 0.5), fontWeight: 'fontWeightLight' }}>
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
                  bgcolor: SOFA19_COLORS.coral,
                  color: 'common.white',
                  borderRadius: 2,
                  textAlign: 'center',
                }}
              >
                <Typography sx={{ fontSize: 22, fontWeight: 'fontWeightBold', lineHeight: 1, fontFamily: (t) => t.typography.fontSecondaryFamily }}>
                  {content.hero.badgeNumber}
                </Typography>
              </Box>
              <Typography variant="caption" sx={{ color: varAlpha(SOFA19_COLORS.cream, 0.5), maxWidth: 180, lineHeight: 1.5, fontWeight: 'fontWeightLight' }}>
                {content.hero.badgeLabel}
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
