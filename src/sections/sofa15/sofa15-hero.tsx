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

import { useSofa15Content } from './sofa15-i18n';
import { SOFA15_COLORS, SOFA15_IMAGES, SOFA15_PROMO_ICONS } from './sofa15-data';

// ----------------------------------------------------------------------

// Art Deco sunburst SVG as a decorative element
function DecoSunburst({ color, size = 120, sx }: { color: string; size?: number; sx?: object }) {
  return (
    <Box
      component="svg"
      viewBox="0 0 100 100"
      sx={{ width: size, height: size, color, position: 'absolute', ...sx }}
    >
      <g stroke="currentColor" strokeWidth="1.5" fill="none">
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 360) / 12;
          return (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={50 + 45 * Math.cos((angle * Math.PI) / 180)}
              y2={50 + 45 * Math.sin((angle * Math.PI) / 180)}
            />
          );
        })}
        <circle cx="50" cy="50" r="20" />
        <circle cx="50" cy="50" r="35" />
      </g>
    </Box>
  );
}

export function Sofa15Hero({ sx, ...other }: BoxProps) {
  const theme = useTheme();
  const content = useSofa15Content();
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
        bgcolor: SOFA15_COLORS.black,
        ...sx,
      }}
      {...other}
    >
      <m.div style={{ y }} className="sofa15-hero-bg">
        <Box
          sx={{
            inset: 0,
            position: 'absolute',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `linear-gradient(110deg, ${varAlpha(SOFA15_COLORS.black, 0.88)} 0%, ${varAlpha(SOFA15_COLORS.black, 0.5)} 55%, ${varAlpha(SOFA15_COLORS.emerald, 0.3)} 100%), url(${SOFA15_IMAGES.hero})`,
          }}
        />
      </m.div>

      {/* Art Deco geometric ornaments */}
      <DecoSunburst color={varAlpha(SOFA15_COLORS.gold, 0.15)} size={300} sx={{ top: '5%', right: '-5%', zIndex: 1 }} />
      <DecoSunburst color={varAlpha(SOFA15_COLORS.gold, 0.1)} size={200} sx={{ bottom: '10%', left: '-3%', zIndex: 1 }} />

      {/* Geometric border frame */}
      <Box sx={{ position: 'absolute', top: 24, left: 24, right: 24, bottom: 24, border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.2)}`, borderRadius: 2, zIndex: 1, pointerEvents: 'none' }} />
      {/* Corner ornaments */}
      {[
        { top: 16, left: 16, borderTop: `2px solid ${SOFA15_COLORS.gold}`, borderLeft: `2px solid ${SOFA15_COLORS.gold}` },
        { top: 16, right: 16, borderTop: `2px solid ${SOFA15_COLORS.gold}`, borderRight: `2px solid ${SOFA15_COLORS.gold}` },
        { bottom: 16, left: 16, borderBottom: `2px solid ${SOFA15_COLORS.gold}`, borderLeft: `2px solid ${SOFA15_COLORS.gold}` },
        { bottom: 16, right: 16, borderBottom: `2px solid ${SOFA15_COLORS.gold}`, borderRight: `2px solid ${SOFA15_COLORS.gold}` },
      ].map((style, i) => (
        <Box key={i} sx={{ position: 'absolute', width: 24, height: 24, zIndex: 2, ...style }} />
      ))}

      <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9, py: { xs: 8, md: 10 } }}>
        <Stack spacing={5} sx={{ maxWidth: 640 }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box sx={{ width: 32, height: 1.5, bgcolor: SOFA15_COLORS.gold }} />
              <Typography
                variant="overline"
                sx={{ color: SOFA15_COLORS.gold, letterSpacing: 4, fontWeight: 'fontWeightMedium', textTransform: 'uppercase' }}
              >
                {content.hero.badge}
              </Typography>
            </Stack>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              component="h1"
              sx={{
                color: 'common.white',
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
                  ...textGradient(`90deg, ${SOFA15_COLORS.goldLight} 0%, ${SOFA15_COLORS.gold} 50%, ${SOFA15_COLORS.goldDark} 100%`),
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
                color: varAlpha(theme.vars.palette.common.whiteChannel, 0.6),
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
              startIcon={<Iconify icon="solar:crown-bold-duotone" />}
              sx={{
                px: 4,
                py: 1.75,
                fontSize: 15,
                fontWeight: 'fontWeightMedium',
                borderRadius: 0,
                color: SOFA15_COLORS.black,
                bgcolor: SOFA15_COLORS.gold,
                textTransform: 'none',
                letterSpacing: 0.5,
                border: `1px solid ${SOFA15_COLORS.gold}`,
                '&:hover': { bgcolor: SOFA15_COLORS.goldLight, border: `1px solid ${SOFA15_COLORS.goldLight}` },
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
                borderRadius: 0,
                color: SOFA15_COLORS.gold,
                bgcolor: 'transparent',
                textTransform: 'none',
                letterSpacing: 0.5,
                border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.4)}`,
                '&:hover': { border: `1px solid ${SOFA15_COLORS.gold}`, bgcolor: varAlpha(SOFA15_COLORS.gold, 0.08) },
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
                <Iconify icon={SOFA15_PROMO_ICONS[index]} width={22} sx={{ color: SOFA15_COLORS.gold }} />
                <Box>
                  <Typography variant="subtitle2" sx={{ color: 'common.white', fontWeight: 'fontWeightMedium' }}>
                    {promo.label}
                  </Typography>
                  <Typography variant="caption" sx={{ color: varAlpha('#FFFFFF', 0.45), fontWeight: 'fontWeightLight' }}>
                    {promo.text}
                  </Typography>
                </Box>
              </Stack>
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
