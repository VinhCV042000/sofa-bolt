import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionContainer } from 'src/components/animate';

import { useSofa14Content } from './sofa14-i18n';
import { sofa14Alpha, SOFA14_COLORS, SOFA14_IMAGES, SOFA14_PROMO_ICONS } from './sofa14-data';

// ----------------------------------------------------------------------

export function Sofa14Hero({ sx, ...other }: BoxProps) {
  const content = useSofa14Content();

  return (
    <Box
      component="section"
      sx={{
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        minHeight: { xs: 640, md: '100vh' },
        maxHeight: { md: 980 },
        mt: 'calc(var(--layout-header-desktop-height) * -1)',
        pt: 'var(--layout-header-desktop-height)',
        bgcolor: SOFA14_COLORS.canvas,
        ...sx,
      }}
      {...other}
    >
      <Box
        component={m.div}
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        sx={{
          position: 'absolute',
          top: { xs: -80, md: -100 },
          right: { xs: -100, md: '4%' },
          width: { xs: 280, md: 380 },
          height: { xs: 280, md: 380 },
          borderRadius: '48% 52% 60% 40% / 50% 45% 55% 50%',
          bgcolor: sofa14Alpha(SOFA14_COLORS.butter, 0.85),
        }}
      />
      <Box
        component={m.div}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        sx={{
          position: 'absolute',
          bottom: { xs: -60, md: -80 },
          left: { xs: -80, md: '2%' },
          width: { xs: 220, md: 300 },
          height: { xs: 220, md: 300 },
          borderRadius: '60% 40% 45% 55% / 45% 55% 45% 55%',
          bgcolor: sofa14Alpha(SOFA14_COLORS.sky, 0.6),
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
                  px: 2.25,
                  py: 1,
                  width: 'fit-content',
                  borderRadius: 99,
                  bgcolor: SOFA14_COLORS.white,
                  boxShadow: `6px 6px 0 ${sofa14Alpha(SOFA14_COLORS.ink, 0.1)}`,
                  border: `2px solid ${sofa14Alpha(SOFA14_COLORS.ink, 0.06)}`,
                }}
              >
                <Iconify icon="solar:confetti-bold-duotone" width={18} sx={{ color: SOFA14_COLORS.coralDeep }} />
                <Typography variant="overline" sx={{ color: SOFA14_COLORS.inkSoft, letterSpacing: 1.5, fontSize: 12 }}>
                  {content.hero.badge}
                </Typography>
              </Stack>
            </Box>

            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography
                component="h1"
                sx={{
                  color: SOFA14_COLORS.ink,
                  fontSize: { xs: 42, md: 74 },
                  lineHeight: 1.05,
                  fontWeight: 800,
                  letterSpacing: -1,
                }}
              >
                {content.hero.title1}{' '}
                <Box component="span" sx={{ color: SOFA14_COLORS.mintDeep }}>
                  {content.hero.titleHighlight}
                </Box>
                <br />
                {content.hero.title2}
              </Typography>
            </Box>

            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.9), fontSize: { xs: 16, md: 18 }, maxWidth: 480, lineHeight: 1.9 }}>
                {content.hero.subtitle}
              </Typography>
            </Box>

            <Box component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              <Button
                component="a"
                href="#collections"
                size="large"
                sx={{
                  px: 4,
                  py: 1.75,
                  fontSize: 15,
                  fontWeight: 800,
                  borderRadius: 99,
                  color: SOFA14_COLORS.ink,
                  bgcolor: SOFA14_COLORS.mint,
                  boxShadow: `0 8px 0 ${SOFA14_COLORS.mintDeep}`,
                  transition: 'transform .15s',
                  '&:hover': { bgcolor: SOFA14_COLORS.mint, transform: 'translateY(2px)', boxShadow: `0 6px 0 ${SOFA14_COLORS.mintDeep}` },
                }}
              >
                {content.hero.ctaPrimary}
              </Button>
              <Button
                component="a"
                href="#playground"
                size="large"
                sx={{
                  px: 4,
                  py: 1.75,
                  fontSize: 15,
                  fontWeight: 800,
                  borderRadius: 99,
                  color: SOFA14_COLORS.ink,
                  bgcolor: SOFA14_COLORS.white,
                  border: `2px solid ${sofa14Alpha(SOFA14_COLORS.ink, 0.1)}`,
                  '&:hover': { borderColor: SOFA14_COLORS.coral, color: SOFA14_COLORS.coralDeep },
                }}
              >
                {content.hero.ctaSecondary}
              </Button>
            </Box>

            <Box component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, pt: 1 }}>
              {content.hero.promos.map((promo, index) => (
                <Stack key={promo.label} direction="row" alignItems="center" spacing={1.25}>
                  <Iconify icon={SOFA14_PROMO_ICONS[index]} width={24} sx={{ color: SOFA14_COLORS.coralDeep }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: SOFA14_COLORS.ink, fontWeight: 700 }}>
                      {promo.label}
                    </Typography>
                    <Typography variant="caption" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.7) }}>
                      {promo.text}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Box>
          </Stack>

          <Box
            component={m.div}
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            sx={{ flex: 1, width: 1, position: 'relative' }}
          >
            <Box
              sx={{
                overflow: 'hidden',
                position: 'relative',
                borderRadius: '48px',
                border: `10px solid ${SOFA14_COLORS.white}`,
                boxShadow: `0 40px 0 -14px ${sofa14Alpha(SOFA14_COLORS.sky, 0.5)}, 0 30px 60px -30px ${sofa14Alpha(SOFA14_COLORS.ink, 0.4)}`,
              }}
            >
              <Box
                component="img"
                alt="Sofa Bloom"
                src={SOFA14_IMAGES.hero}
                sx={{ width: 1, height: { xs: 380, md: 560 }, objectFit: 'cover', display: 'block' }}
              />
            </Box>

            <Stack
              spacing={0.25}
              sx={{
                position: 'absolute',
                bottom: { xs: -18, md: 28 },
                insetInlineStart: { xs: 8, md: -28 },
                px: 3,
                py: 2,
                borderRadius: '24px',
                bgcolor: SOFA14_COLORS.coral,
                color: SOFA14_COLORS.ink,
                boxShadow: `6px 6px 0 ${sofa14Alpha(SOFA14_COLORS.coralDeep, 0.8)}`,
              }}
            >
              <Typography sx={{ fontSize: 26, fontWeight: 800, lineHeight: 1 }}>{content.hero.badgeNumber}</Typography>
              <Typography variant="caption" sx={{ fontWeight: 700, opacity: 0.8 }}>
                {content.hero.badgeLabel}
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
