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

import { useSofa18Content } from './sofa18-i18n';
import { SOFA18_COLORS, SOFA18_IMAGES, SOFA18_PROMO_ICONS } from './sofa18-data';

// ----------------------------------------------------------------------

// Enso circle ornament — zen brushstroke
function EnsoCircle({ color, size = 200, sx }: { color: string; size?: number; sx?: object }) {
  return (
    <Box
      component="svg"
      viewBox="0 0 100 100"
      sx={{ width: size, height: size, color, position: 'absolute', ...sx }}
    >
      <path
        d="M50 15 C75 15 85 35 82 55 C79 75 62 85 45 82 C28 79 18 62 20 45 C22 30 35 18 50 15"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
    </Box>
  );
}

export function Sofa18Hero({ sx, ...other }: BoxProps) {
  const theme = useTheme();
  const content = useSofa18Content();
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
        bgcolor: SOFA18_COLORS.paper,
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
            backgroundImage: `linear-gradient(110deg, ${varAlpha(SOFA18_COLORS.paper, 0.95)} 0%, ${varAlpha(SOFA18_COLORS.paper, 0.75)} 45%, ${varAlpha(SOFA18_COLORS.sage, 0.2)} 100%), url(${SOFA18_IMAGES.hero})`,
          }}
        />
      </m.div>

      <EnsoCircle color={varAlpha(SOFA18_COLORS.charcoal, 0.08)} size={400} sx={{ top: '-12%', right: '-10%', zIndex: 1 }} />
      <EnsoCircle color={varAlpha(SOFA18_COLORS.sage, 0.1)} size={240} sx={{ bottom: '3%', left: '-5%', zIndex: 1 }} />

      <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9, py: { xs: 8, md: 10 } }}>
        <Stack spacing={5} sx={{ maxWidth: 620 }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box sx={{ width: 36, height: 2, bgcolor: SOFA18_COLORS.rust, borderRadius: 1 }} />
              <Typography variant="overline" sx={{ color: SOFA18_COLORS.rust, letterSpacing: 3, fontWeight: 'fontWeightMedium', textTransform: 'uppercase' }}>
                {content.hero.badge}
              </Typography>
            </Stack>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              component="h1"
              sx={{
                color: SOFA18_COLORS.ink,
                fontFamily: theme.typography.fontSecondaryFamily,
                fontSize: { xs: 40, md: 72 },
                lineHeight: { xs: 1.15, md: 1.05 },
                fontWeight: 'fontWeightLight',
                letterSpacing: -0.5,
              }}
            >
              {content.hero.title1}{' '}
              <Box component="span" sx={{ ...textGradient(`90deg, ${SOFA18_COLORS.sageDeep} 0%, ${SOFA18_COLORS.rust} 100%`), fontStyle: 'italic' }}>
                {content.hero.titleHighlight}
              </Box>
              <br />
              {content.hero.title2}
            </Typography>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: SOFA18_COLORS.inkSoft, fontSize: { xs: 15, md: 17 }, maxWidth: 480, lineHeight: 2, fontWeight: 'fontWeightLight' }}>
              {content.hero.subtitle}
            </Typography>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            <Button component="a" href="#collections" size="large" startIcon={<Iconify icon="solar:leaf-bold-duotone" />}
              sx={{ px: 4, py: 1.75, fontSize: 15, fontWeight: 'fontWeightMedium', borderRadius: 2, color: 'common.white', bgcolor: SOFA18_COLORS.charcoal, textTransform: 'none', letterSpacing: 0.5, boxShadow: `0 8px 24px -8px ${varAlpha(SOFA18_COLORS.charcoal, 0.5)}`, '&:hover': { bgcolor: SOFA18_COLORS.charcoalDeep } }}>
              {content.hero.ctaPrimary}
            </Button>
            <Button component="a" href="#contact" size="large"
              sx={{ px: 4, py: 1.75, fontSize: 15, fontWeight: 'fontWeightMedium', borderRadius: 2, color: SOFA18_COLORS.charcoal, bgcolor: 'transparent', textTransform: 'none', letterSpacing: 0.5, border: `1px solid ${varAlpha(SOFA18_COLORS.charcoal, 0.3)}`, '&:hover': { border: `1px solid ${SOFA18_COLORS.charcoal}`, bgcolor: varAlpha(SOFA18_COLORS.charcoal, 0.04) } }}>
              {content.hero.ctaSecondary}
            </Button>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, pt: 1 }}>
            {content.hero.promos.map((promo, index) => (
              <Stack key={promo.label} direction="row" alignItems="center" spacing={1.25}>
                <Iconify icon={SOFA18_PROMO_ICONS[index]} width={22} sx={{ color: SOFA18_COLORS.sageDeep }} />
                <Box>
                  <Typography variant="subtitle2" sx={{ color: SOFA18_COLORS.ink, fontWeight: 'fontWeightMedium' }}>{promo.label}</Typography>
                  <Typography variant="caption" sx={{ color: SOFA18_COLORS.inkSoft, fontWeight: 'fontWeightLight' }}>{promo.text}</Typography>
                </Box>
              </Stack>
            ))}
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ pt: 2 }}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box sx={{ px: 2.5, py: 1.25, bgcolor: SOFA18_COLORS.rust, color: 'common.white', borderRadius: 2, textAlign: 'center' }}>
                <Typography sx={{ fontSize: 22, fontWeight: 'fontWeightMedium', lineHeight: 1, fontFamily: (t) => t.typography.fontSecondaryFamily }}>{content.hero.badgeNumber}</Typography>
              </Box>
              <Typography variant="caption" sx={{ color: SOFA18_COLORS.inkSoft, maxWidth: 180, lineHeight: 1.5, fontWeight: 'fontWeightLight' }}>{content.hero.badgeLabel}</Typography>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
