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

import { useSofa20Content } from './sofa20-i18n';
import { SOFA20_COLORS, SOFA20_IMAGES, SOFA20_PROMO_ICONS } from './sofa20-data';

// ----------------------------------------------------------------------

// Steampunk gear/cog ornament
function GearCog({ color, size = 160, sx }: { color: string; size?: number; sx?: object }) {
  const teeth = 12;
  const innerR = 28;
  const outerR = 42;
  const toothH = 8;

  return (
    <Box
      component="svg"
      viewBox="0 0 100 100"
      sx={{ width: size, height: size, color, position: 'absolute', ...sx }}
    >
      <g stroke="currentColor" strokeWidth="1.2" fill="none">
        {/* Outer toothed ring */}
        {Array.from({ length: teeth }).map((_, i) => {
          const angle = (i * 360) / teeth;
          const rad = (angle * Math.PI) / 180;
          const x1 = 50 + innerR * Math.cos(rad);
          const y1 = 50 + innerR * Math.sin(rad);
          const x2 = 50 + (outerR + toothH) * Math.cos(rad);
          const y2 = 50 + (outerR + toothH) * Math.sin(rad);
          return <line key={`t-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
        <circle cx="50" cy="50" r={outerR} />
        <circle cx="50" cy="50" r={innerR} />
        {/* Inner hub */}
        <circle cx="50" cy="50" r="14" />
        {/* Spokes */}
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i * 360) / 6;
          const rad = (angle * Math.PI) / 180;
          return (
            <line
              key={`s-${i}`}
              x1={50 + 14 * Math.cos(rad)}
              y1={50 + 14 * Math.sin(rad)}
              x2={50 + innerR * Math.cos(rad)}
              y2={50 + innerR * Math.sin(rad)}
            />
          );
        })}
        {/* Center hole */}
        <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.2" />
      </g>
    </Box>
  );
}

export function Sofa20Hero({ sx, ...other }: BoxProps) {
  const theme = useTheme();
  const content = useSofa20Content();
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
        bgcolor: SOFA20_COLORS.espressoDeep,
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
            backgroundImage: `linear-gradient(115deg, ${varAlpha(SOFA20_COLORS.espressoDeep, 0.94)} 0%, ${varAlpha(SOFA20_COLORS.espressoDeep, 0.72)} 50%, ${varAlpha(SOFA20_COLORS.copper, 0.25)} 100%), url(${SOFA20_IMAGES.hero})`,
          }}
        />
      </m.div>

      {/* Gear cog ornaments */}
      <GearCog color={varAlpha(SOFA20_COLORS.brass, 0.1)} size={400} sx={{ top: '-8%', right: '-6%', zIndex: 1 }} />
      <GearCog color={varAlpha(SOFA20_COLORS.copper, 0.08)} size={280} sx={{ bottom: '4%', left: '-7%', zIndex: 1 }} />

      {/* Riveted border accents */}
      <Box sx={{ position: 'absolute', top: 32, left: 32, right: 32, bottom: 32, border: `2px solid ${varAlpha(SOFA20_COLORS.copper, 0.25)}`, borderRadius: 0, zIndex: 1, pointerEvents: 'none' }} />
      {/* Corner rivets */}
      {[
        { top: 28, left: 28 },
        { top: 28, right: 28 },
        { bottom: 28, left: 28 },
        { bottom: 28, right: 28 },
      ].map((pos, i) => (
        <Box key={i} sx={{ position: 'absolute', ...pos, width: 10, height: 10, borderRadius: '50%', bgcolor: varAlpha(SOFA20_COLORS.copper, 0.4), zIndex: 2, pointerEvents: 'none' }} />
      ))}

      <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9, py: { xs: 8, md: 10 } }}>
        <Stack spacing={5} sx={{ maxWidth: 620 }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box sx={{ width: 36, height: 3, bgcolor: SOFA20_COLORS.copper, borderRadius: 0 }} />
              <Typography variant="overline" sx={{ color: SOFA20_COLORS.copperLight, letterSpacing: 3, fontWeight: 'fontWeightMedium', textTransform: 'uppercase' }}>
                {content.hero.badge}
              </Typography>
            </Stack>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              component="h1"
              sx={{
                color: SOFA20_COLORS.cream,
                fontFamily: theme.typography.fontSecondaryFamily,
                fontSize: { xs: 40, md: 72 },
                lineHeight: { xs: 1.15, md: 1.05 },
                fontWeight: 'fontWeightMedium',
                letterSpacing: -0.5,
                textTransform: 'uppercase',
              }}
            >
              {content.hero.title1}{' '}
              <Box
                component="span"
                sx={{
                  ...textGradient(`90deg, ${SOFA20_COLORS.copper} 0%, ${SOFA20_COLORS.brassLight} 100%`),
                  fontStyle: 'italic',
                  textTransform: 'lowercase',
                }}
              >
                {content.hero.titleHighlight}
              </Box>
              <br />
              {content.hero.title2}
            </Typography>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: varAlpha(SOFA20_COLORS.cream, 0.65), fontSize: { xs: 15, md: 17 }, maxWidth: 480, lineHeight: 2, fontWeight: 'fontWeightLight' }}>
              {content.hero.subtitle}
            </Typography>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            <Button component="a" href="#collections" size="large" startIcon={<Iconify icon="solar:fire-bold-duotone" />}
              sx={{ px: 4, py: 1.75, fontSize: 15, fontWeight: 'fontWeightBold', borderRadius: 0, color: SOFA20_COLORS.espressoDeep, bgcolor: SOFA20_COLORS.copper, textTransform: 'uppercase', letterSpacing: 1, boxShadow: `0 8px 24px -8px ${varAlpha(SOFA20_COLORS.copper, 0.6)}`, '&:hover': { bgcolor: SOFA20_COLORS.copperDeep } }}>
              {content.hero.ctaPrimary}
            </Button>
            <Button component="a" href="#contact" size="large"
              sx={{ px: 4, py: 1.75, fontSize: 15, fontWeight: 'fontWeightBold', borderRadius: 0, color: SOFA20_COLORS.copperLight, bgcolor: 'transparent', textTransform: 'uppercase', letterSpacing: 1, border: `2px solid ${varAlpha(SOFA20_COLORS.copper, 0.4)}`, '&:hover': { border: `2px solid ${SOFA20_COLORS.copper}`, bgcolor: varAlpha(SOFA20_COLORS.copper, 0.06) } }}>
              {content.hero.ctaSecondary}
            </Button>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, pt: 1 }}>
            {content.hero.promos.map((promo, index) => (
              <Stack key={promo.label} direction="row" alignItems="center" spacing={1.25}>
                <Iconify icon={SOFA20_PROMO_ICONS[index]} width={22} sx={{ color: SOFA20_COLORS.brass }} />
                <Box>
                  <Typography variant="subtitle2" sx={{ color: SOFA20_COLORS.cream, fontWeight: 'fontWeightMedium', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                    {promo.label}
                  </Typography>
                  <Typography variant="caption" sx={{ color: varAlpha(SOFA20_COLORS.cream, 0.5), fontWeight: 'fontWeightLight' }}>
                    {promo.text}
                  </Typography>
                </Box>
              </Stack>
            ))}
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ pt: 2 }}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box sx={{ px: 2.5, py: 1.25, bgcolor: SOFA20_COLORS.copper, color: SOFA20_COLORS.espressoDeep, borderRadius: 0, textAlign: 'center', border: `2px solid ${SOFA20_COLORS.brass}` }}>
                <Typography sx={{ fontSize: 22, fontWeight: 'fontWeightBold', lineHeight: 1, fontFamily: (t) => t.typography.fontSecondaryFamily }}>
                  {content.hero.badgeNumber}
                </Typography>
              </Box>
              <Typography variant="caption" sx={{ color: varAlpha(SOFA20_COLORS.cream, 0.5), maxWidth: 180, lineHeight: 1.5, fontWeight: 'fontWeightLight' }}>
                {content.hero.badgeLabel}
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
