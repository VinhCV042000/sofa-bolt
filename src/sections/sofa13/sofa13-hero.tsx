import type { BoxProps } from '@mui/material/Box';

import { useRef } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionContainer } from 'src/components/animate';

import { useSofa13Content } from './sofa13-i18n';
import { sofa13Alpha, SOFA13_COLORS, SOFA13_IMAGES, SOFA13_PROMO_ICONS } from './sofa13-data';

// ----------------------------------------------------------------------

export function Sofa13Hero({ sx, ...other }: BoxProps) {
  const content = useSofa13Content();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);

  return (
    <Box
      ref={ref}
      component="section"
      id="home"
      sx={{
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        minHeight: { xs: 660, md: '100vh' },
        maxHeight: { md: 980 },
        mt: 'calc(var(--layout-header-desktop-height) * -1)',
        pt: 'var(--layout-header-desktop-height)',
        bgcolor: SOFA13_COLORS.noir,
        ...sx,
      }}
      {...other}
    >
      {/* Sunburst ornament */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          insetInlineEnd: { xs: '-40%', md: '-8%' },
          width: { xs: 560, md: 880 },
          height: { xs: 560, md: 880 },
          transform: 'translateY(-50%)',
          borderRadius: '50%',
          opacity: 0.5,
          background: `repeating-conic-gradient(from 0deg, ${sofa13Alpha(SOFA13_COLORS.gold, 0.16)} 0deg 4deg, transparent 4deg 16deg)`,
          maskImage: `radial-gradient(circle, black 0%, black 55%, transparent 78%)`,
        }}
      />

      {/* hairline frame */}
      <Box
        sx={{
          position: 'absolute',
          inset: { xs: 16, md: 28 },
          border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.28)}`,
          pointerEvents: 'none',
        }}
      />

      <Container
        component={MotionContainer}
        sx={{ position: 'relative', zIndex: 9, py: { xs: 8, md: 10 } }}
      >
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 6, md: 6 }} alignItems="center">
          <Stack spacing={4} sx={{ flex: 1 }}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{
                  px: 2,
                  py: 0.75,
                  width: 'fit-content',
                  border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.5)}`,
                  bgcolor: sofa13Alpha(SOFA13_COLORS.gold, 0.06),
                }}
              >
                <Iconify icon="solar:crown-star-bold" width={16} sx={{ color: SOFA13_COLORS.gold }} />
                <Typography
                  variant="overline"
                  sx={{ color: SOFA13_COLORS.goldPale, letterSpacing: 3, fontSize: 12 }}
                >
                  {content.hero.badge}
                </Typography>
              </Stack>
            </Box>

            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography
                component="h1"
                sx={{
                  color: SOFA13_COLORS.ivory,
                  fontSize: { xs: 42, md: 72 },
                  lineHeight: 1.1,
                  fontWeight: 400,
                  letterSpacing: 1,
                  fontFamily: (t) => t.typography.fontSecondaryFamily,
                }}
              >
                {content.hero.titleLine1}
                <br />
                <Box component="span" sx={{ color: SOFA13_COLORS.gold, fontStyle: 'italic' }}>
                  {content.hero.titleEm}
                </Box>{' '}
                {content.hero.titleLine2}
              </Typography>
            </Box>

            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography
                sx={{
                  color: SOFA13_COLORS.ivorySoft,
                  fontSize: { xs: 16, md: 18 },
                  maxWidth: 480,
                  lineHeight: 1.9,
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
                sx={{
                  px: 4,
                  py: 1.75,
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  borderRadius: 0,
                  color: SOFA13_COLORS.noir,
                  bgcolor: SOFA13_COLORS.gold,
                  '&:hover': { bgcolor: SOFA13_COLORS.goldPale },
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
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  borderRadius: 0,
                  color: SOFA13_COLORS.ivory,
                  border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.5)}`,
                  '&:hover': { borderColor: SOFA13_COLORS.gold, color: SOFA13_COLORS.gold },
                }}
              >
                {content.hero.ctaSecondary}
              </Button>
            </Box>

            <Box
              component={m.div}
              variants={varFade({ distance: 24 }).inUp}
              sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, pt: 1 }}
            >
              {content.hero.promos.map((promo, index) => (
                <Stack key={promo.label} direction="row" alignItems="center" spacing={1.25}>
                  <Iconify
                    icon={SOFA13_PROMO_ICONS[index]}
                    width={22}
                    sx={{ color: SOFA13_COLORS.emeraldBright }}
                  />
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: SOFA13_COLORS.ivory, fontWeight: 700 }}>
                      {promo.label}
                    </Typography>
                    <Typography variant="caption" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.55) }}>
                      {promo.text}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Box>
          </Stack>

          <Box component={m.div} style={{ y }} sx={{ flex: 1, width: 1, position: 'relative' }}>
            <Box
              sx={{
                overflow: 'hidden',
                position: 'relative',
                border: `2px solid ${SOFA13_COLORS.gold}`,
                boxShadow: `0 40px 80px -40px ${sofa13Alpha(SOFA13_COLORS.noirDeep, 0.9)}`,
                p: '10px',
                bgcolor: SOFA13_COLORS.charcoal,
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  inset: 4,
                  border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.5)}`,
                  pointerEvents: 'none',
                  zIndex: 2,
                }}
              />
              <Box
                component="img"
                alt="Sofa noir art deco"
                src={SOFA13_IMAGES.hero}
                sx={{ width: 1, height: { xs: 380, md: 560 }, objectFit: 'cover', display: 'block' }}
              />
            </Box>

            <Stack
              spacing={0.25}
              sx={{
                position: 'absolute',
                bottom: { xs: -18, md: 32 },
                insetInlineStart: { xs: 8, md: -32 },
                px: 3,
                py: 2,
                border: `1px solid ${SOFA13_COLORS.gold}`,
                bgcolor: SOFA13_COLORS.noir,
                color: SOFA13_COLORS.gold,
              }}
            >
              <Typography sx={{ fontSize: 26, fontWeight: 800, lineHeight: 1 }}>
                {content.hero.statNumber}
              </Typography>
              <Typography variant="caption" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.7) }}>
                {content.hero.statLabel}
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
