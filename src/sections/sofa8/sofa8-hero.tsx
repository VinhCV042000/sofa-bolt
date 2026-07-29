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

import { SOFA8_COLORS, SOFA8_IMAGES, SOFA8_PROMOS } from './sofa8-data';

// ----------------------------------------------------------------------

export function Sofa8Hero({ sx, ...other }: BoxProps) {
  const theme = useTheme();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

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
      <m.div style={{ y, scale }} className="sofa8-hero-bg">
        <Box
          sx={{
            inset: 0,
            position: 'absolute',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `linear-gradient(105deg, ${varAlpha(SOFA8_COLORS.oceanDeep, 0.75)} 0%, ${varAlpha(SOFA8_COLORS.oceanDeep, 0.35)} 55%, ${varAlpha(SOFA8_COLORS.oceanDeep, 0.1)} 100%), url(${SOFA8_IMAGES.hero})`,
          }}
        />
      </m.div>

      {/* Wave-like accent shapes */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: `radial-gradient(circle at 40% 40%, ${varAlpha(SOFA8_COLORS.sky, 0.25)} 0%, transparent 70%)`,
          filter: 'blur(50px)',
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '18%',
          left: '6%',
          width: 240,
          height: 240,
          borderRadius: '50%',
          background: `radial-gradient(circle at 50% 50%, ${varAlpha(SOFA8_COLORS.coral, 0.2)} 0%, transparent 70%)`,
          filter: 'blur(50px)',
          zIndex: 1,
        }}
      />

      <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9, py: { xs: 8, md: 10 } }}>
        <Stack spacing={5} sx={{ maxWidth: 680 }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box sx={{ width: 48, height: 3, bgcolor: SOFA8_COLORS.coral, borderRadius: 2 }} />
              <Typography
                variant="overline"
                sx={{ color: SOFA8_COLORS.coralLight, letterSpacing: 4, fontWeight: 'fontWeightBold' }}
              >
                SOFA BREEZE — COASTAL LIVING
              </Typography>
            </Stack>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              component="h1"
              sx={{
                color: 'common.white',
                fontFamily: theme.typography.fontSecondaryFamily,
                fontSize: { xs: 42, md: 76 },
                lineHeight: { xs: 1.15, md: 1.05 },
                fontWeight: 'fontWeightBold',
              }}
            >
              Mang biển cả{' '}
              <Box
                component="span"
                sx={{
                  ...textGradient(
                    `120deg, ${SOFA8_COLORS.sky} 0%, ${SOFA8_COLORS.coralLight} 100%`
                  ),
                }}
              >
                vào ngôi nhà
              </Box>
            </Typography>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              sx={{
                color: varAlpha(theme.vars.palette.common.whiteChannel, 0.8),
                fontSize: { xs: 16, md: 18 },
                maxWidth: 520,
                lineHeight: 1.7,
              }}
            >
              Linen thoáng mát, bouclé êm ái, tone biển dịu dàng. Sofa Breeze mang cảm giác nghỉ
              dưỡng vào không gian sống hàng ngày.
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
              startIcon={<Iconify icon="solar:water-bold-duotone" />}
              sx={{
                borderRadius: 30,
                px: 4,
                py: 1.5,
                fontSize: 16,
                bgcolor: SOFA8_COLORS.ocean,
                '&:hover': { bgcolor: SOFA8_COLORS.oceanDeep },
              }}
            >
              Khám phá bộ sưu tập
            </Button>
            <Button
              component="a"
              href="#gallery"
              size="large"
              variant="outlined"
              sx={{
                color: 'common.white',
                borderRadius: 30,
                px: 4,
                py: 1.5,
                fontSize: 16,
                borderColor: varAlpha(theme.vars.palette.common.whiteChannel, 0.4),
                '&:hover': {
                  borderColor: 'common.white',
                  bgcolor: varAlpha(theme.vars.palette.common.whiteChannel, 0.08),
                },
              }}
            >
              Xem không gian biển
            </Button>
          </Box>

          <Box
            component={m.div}
            variants={varFade({ distance: 24 }).inUp}
            sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mt: 2 }}
          >
            {SOFA8_PROMOS.map((promo) => (
              <Stack key={promo.label} direction="row" alignItems="center" spacing={1}>
                <Iconify icon={promo.icon} width={22} sx={{ color: SOFA8_COLORS.sky }} />
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
          height: 120,
          background: (t) => `linear-gradient(to top, ${t.vars.palette.background.default}, transparent)`,
          zIndex: 5,
        }}
      />
    </Box>
  );
}
