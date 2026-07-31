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

import { useSofa16Content } from './sofa16-i18n';
import { SOFA16_COLORS, SOFA16_IMAGES, SOFA16_PROMO_ICONS } from './sofa16-data';

// ----------------------------------------------------------------------

// Mediterranean sun SVG ornament
function RivieraSun({ color, size = 160, sx }: { color: string; size?: number; sx?: object }) {
  return (
    <Box
      component="svg"
      viewBox="0 0 100 100"
      sx={{ width: size, height: size, color, position: 'absolute', ...sx }}
    >
      <g stroke="currentColor" strokeWidth="1" fill="none">
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 360) / 16;
          return (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={50 + 38 * Math.cos((angle * Math.PI) / 180)}
              y2={50 + 38 * Math.sin((angle * Math.PI) / 180)}
            />
          );
        })}
        <circle cx="50" cy="50" r="18" fill="currentColor" opacity="0.3" />
        <circle cx="50" cy="50" r="30" />
      </g>
    </Box>
  );
}

export function Sofa16Hero({ sx, ...other }: BoxProps) {
  const theme = useTheme();
  const content = useSofa16Content();
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
        bgcolor: SOFA16_COLORS.creamLight,
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
            backgroundImage: `linear-gradient(115deg, ${varAlpha(SOFA16_COLORS.creamLight, 0.96)} 0%, ${varAlpha(SOFA16_COLORS.creamLight, 0.7)} 50%, ${varAlpha(SOFA16_COLORS.terracotta, 0.25)} 100%), url(${SOFA16_IMAGES.hero})`,
          }}
        />
      </m.div>

      {/* Mediterranean sun ornaments */}
      <RivieraSun color={varAlpha(SOFA16_COLORS.terracotta, 0.18)} size={360} sx={{ top: '-8%', right: '-6%', zIndex: 1 }} />
      <RivieraSun color={varAlpha(SOFA16_COLORS.olive, 0.12)} size={220} sx={{ bottom: '5%', left: '-4%', zIndex: 1 }} />

      {/* Warm border accents */}
      <Box sx={{ position: 'absolute', top: 32, left: 32, right: 32, bottom: 32, border: `1px solid ${varAlpha(SOFA16_COLORS.terracotta, 0.15)}`, borderRadius: 3, zIndex: 1, pointerEvents: 'none' }} />

      <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9, py: { xs: 8, md: 10 } }}>
        <Stack spacing={5} sx={{ maxWidth: 620 }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box sx={{ width: 36, height: 2, bgcolor: SOFA16_COLORS.terracotta, borderRadius: 1 }} />
              <Typography
                variant="overline"
                sx={{ color: SOFA16_COLORS.terracottaDeep, letterSpacing: 3, fontWeight: 'fontWeightMedium', textTransform: 'uppercase' }}
              >
                {content.hero.badge}
              </Typography>
            </Stack>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              component="h1"
              sx={{
                color: SOFA16_COLORS.ink,
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
                  ...textGradient(`90deg, ${SOFA16_COLORS.terracotta} 0%, ${SOFA16_COLORS.terracottaDeep} 100%`),
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
                color: SOFA16_COLORS.inkSoft,
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
              startIcon={<Iconify icon="solar:sun-bold-duotone" />}
              sx={{
                px: 4,
                py: 1.75,
                fontSize: 15,
                fontWeight: 'fontWeightMedium',
                borderRadius: 2,
                color: 'common.white',
                bgcolor: SOFA16_COLORS.terracotta,
                textTransform: 'none',
                letterSpacing: 0.5,
                boxShadow: `0 8px 24px -8px ${varAlpha(SOFA16_COLORS.terracotta, 0.6)}`,
                '&:hover': { bgcolor: SOFA16_COLORS.terracottaDeep },
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
                color: SOFA16_COLORS.terracottaDeep,
                bgcolor: 'transparent',
                textTransform: 'none',
                letterSpacing: 0.5,
                border: `1px solid ${varAlpha(SOFA16_COLORS.terracotta, 0.4)}`,
                '&:hover': { border: `1px solid ${SOFA16_COLORS.terracotta}`, bgcolor: varAlpha(SOFA16_COLORS.terracotta, 0.06) },
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
                <Iconify icon={SOFA16_PROMO_ICONS[index]} width={22} sx={{ color: SOFA16_COLORS.olive }} />
                <Box>
                  <Typography variant="subtitle2" sx={{ color: SOFA16_COLORS.ink, fontWeight: 'fontWeightMedium' }}>
                    {promo.label}
                  </Typography>
                  <Typography variant="caption" sx={{ color: SOFA16_COLORS.inkSoft, fontWeight: 'fontWeightLight' }}>
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
                  bgcolor: SOFA16_COLORS.olive,
                  color: 'common.white',
                  borderRadius: 2,
                  textAlign: 'center',
                }}
              >
                <Typography sx={{ fontSize: 22, fontWeight: 'fontWeightMedium', lineHeight: 1, fontFamily: (t) => t.typography.fontSecondaryFamily }}>
                  {content.hero.badgeNumber}
                </Typography>
              </Box>
              <Typography variant="caption" sx={{ color: SOFA16_COLORS.inkSoft, maxWidth: 160, lineHeight: 1.5, fontWeight: 'fontWeightLight' }}>
                {content.hero.badgeLabel}
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
