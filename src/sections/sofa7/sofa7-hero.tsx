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

import { SOFA7_COLORS, SOFA7_IMAGES, SOFA7_PROMOS } from './sofa7-data';

// ----------------------------------------------------------------------

export function Sofa7Hero({ sx, ...other }: BoxProps) {
  const theme = useTheme();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

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
        ...sx,
      }}
      {...other}
    >
      <m.div style={{ y, opacity }} className="sofa7-hero-bg">
        <Box
          sx={{
            inset: 0,
            position: 'absolute',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `linear-gradient(110deg, ${varAlpha(SOFA7_COLORS.concrete, 0.92)} 0%, ${varAlpha(SOFA7_COLORS.concrete, 0.5)} 50%, ${varAlpha(SOFA7_COLORS.concrete, 0.2)} 100%), url(${SOFA7_IMAGES.hero})`,
          }}
        />
      </m.div>

      {/* Geometric accents */}
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          right: '8%',
          width: 180,
          height: 180,
          bgcolor: SOFA7_COLORS.electric,
          clipPath: 'polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)',
          opacity: 0.9,
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '18%',
          right: '22%',
          width: 60,
          height: 60,
          bgcolor: SOFA7_COLORS.cyan,
          borderRadius: '50%',
          opacity: 0.8,
          zIndex: 1,
        }}
      />

      <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9, py: { xs: 8, md: 10 } }}>
        <Stack spacing={5} sx={{ maxWidth: 680 }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box sx={{ width: 8, height: 40, bgcolor: SOFA7_COLORS.electric }} />
              <Typography
                variant="overline"
                sx={{ color: SOFA7_COLORS.electric, letterSpacing: 4, fontWeight: 'fontWeightBold' }}
              >
                SOFA LOFT — URBAN INDUSTRIAL
              </Typography>
            </Stack>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              component="h1"
              sx={{
                color: 'common.white',
                fontFamily: theme.typography.fontSecondaryFamily,
                fontSize: { xs: 44, md: 82 },
                lineHeight: { xs: 1.1, md: 1.0 },
                fontWeight: 'fontWeightBold',
                textTransform: 'uppercase',
                letterSpacing: -1,
              }}
            >
              Không gian{' '}
              <Box
                component="span"
                sx={{
                  ...textGradient(
                    `90deg, ${SOFA7_COLORS.electric} 0%, ${SOFA7_COLORS.cyan} 100%`
                  ),
                }}
              >
                không giới hạn
              </Box>
            </Typography>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              sx={{
                color: varAlpha(theme.vars.palette.common.whiteChannel, 0.72),
                fontSize: { xs: 16, md: 18 },
                maxWidth: 520,
                lineHeight: 1.7,
              }}
            >
              Da thật, khung thép đen, velvet neon. Sofa cho lofts, studio, và những tâm hồn phá
              cách. Đừng chỉ ngồi — hãy tuyên bố.
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
              startIcon={<Iconify icon="solar:armchair-2-bold-duotone" />}
              sx={{
                borderRadius: 0,
                px: 5,
                py: 1.5,
                fontSize: 16,
                bgcolor: SOFA7_COLORS.electric,
                color: SOFA7_COLORS.ink,
                fontWeight: 'fontWeightBold',
                textTransform: 'uppercase',
                '&:hover': { bgcolor: SOFA7_COLORS.cyan, color: SOFA7_COLORS.ink },
              }}
            >
              Xem bộ sưu tập
            </Button>
            <Button
              component="a"
              href="#gallery"
              size="large"
              variant="outlined"
              sx={{
                color: 'common.white',
                borderRadius: 0,
                px: 5,
                py: 1.5,
                fontSize: 16,
                textTransform: 'uppercase',
                fontWeight: 'fontWeightBold',
                borderColor: varAlpha(theme.vars.palette.common.whiteChannel, 0.4),
                '&:hover': {
                  borderColor: SOFA7_COLORS.electric,
                  bgcolor: 'transparent',
                  color: SOFA7_COLORS.electric,
                },
              }}
            >
              Xem lofts thực tế
            </Button>
          </Box>

          <Box
            component={m.div}
            variants={varFade({ distance: 24 }).inUp}
            sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mt: 2 }}
          >
            {SOFA7_PROMOS.map((promo) => (
              <Stack key={promo.label} direction="row" alignItems="center" spacing={1}>
                <Iconify icon={promo.icon} width={22} sx={{ color: SOFA7_COLORS.electric }} />
                <Box>
                  <Typography variant="subtitle2" sx={{ color: 'common.white', fontWeight: 'fontWeightBold', textTransform: 'uppercase' }}>
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
          height: 120,
          background: (t) => `linear-gradient(to top, ${t.vars.palette.background.default}, transparent)`,
          zIndex: 5,
        }}
      />
    </Box>
  );
}
