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

import { SOFA10_COLORS, SOFA10_IMAGES, SOFA10_PROMOS } from './sofa10-data';

// ----------------------------------------------------------------------

export function Sofa10Hero({ sx, ...other }: BoxProps) {
  const theme = useTheme();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

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
        bgcolor: SOFA10_COLORS.warmWhite,
        ...sx,
      }}
      {...other}
    >
      <m.div style={{ y }} className="sofa10-hero-bg">
        <Box
          sx={{
            inset: 0,
            position: 'absolute',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `linear-gradient(110deg, ${varAlpha(SOFA10_COLORS.charcoal, 0.65)} 0%, ${varAlpha(SOFA10_COLORS.charcoal, 0.3)} 55%, ${varAlpha(SOFA10_COLORS.charcoal, 0.1)} 100%), url(${SOFA10_IMAGES.hero})`,
          }}
        />
      </m.div>

      {/* Organic ink stroke accent */}
      <Box
        sx={{
          position: 'absolute',
          top: '18%',
          right: '10%',
          width: 200,
          height: 200,
          borderRadius: '48% 52% 55% 45% / 60% 40% 50% 50%',
          background: `radial-gradient(circle at 45% 40%, ${varAlpha(SOFA10_COLORS.wood, 0.15)} 0%, transparent 70%)`,
          filter: 'blur(40px)',
          zIndex: 1,
        }}
      />

      <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9, py: { xs: 8, md: 10 } }}>
        <Stack spacing={6} sx={{ maxWidth: 640 }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box sx={{ width: 40, height: 1.5, bgcolor: SOFA10_COLORS.wood, opacity: 0.6 }} />
              <Typography
                variant="overline"
                sx={{ color: varAlpha('#FFFFFF', 0.7), letterSpacing: 6, fontWeight: 'fontWeightLight', textTransform: 'uppercase' }}
              >
                Sofa Wabi · 侘寂
              </Typography>
            </Stack>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              component="h1"
              sx={{
                color: 'common.white',
                fontFamily: theme.typography.fontSecondaryFamily,
                fontSize: { xs: 38, md: 68 },
                lineHeight: { xs: 1.2, md: 1.1 },
                fontWeight: 'fontWeightLight',
                letterSpacing: -0.5,
              }}
            >
              Vẻ đẹp trong{' '}
              <Box
                component="span"
                sx={{
                  ...textGradient(
                    `120deg, ${SOFA10_COLORS.sandLight} 0%, ${SOFA10_COLORS.woodLight} 100%`
                  ),
                  fontStyle: 'italic',
                }}
              >
                sự không hoàn hảo
              </Box>
            </Typography>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              sx={{
                color: varAlpha(theme.vars.palette.common.whiteChannel, 0.6),
                fontSize: { xs: 15, md: 17 },
                maxWidth: 460,
                lineHeight: 2,
                fontWeight: 'fontWeightLight',
              }}
            >
              Linen thô, gỗ mộc, bouclé tự nhiên. Sofa Wabi-sabi tôn vinh sự mộc mạc, khiêm nhường,
              và vẻ đẹp chậm rãi của thời gian.
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
              startIcon={<Iconify icon="solar:leaf-bold-duotone" />}
              sx={{
                borderRadius: 2,
                px: 4,
                py: 1.5,
                fontSize: 15,
                bgcolor: SOFA10_COLORS.charcoal,
                fontWeight: 'fontWeightLight',
                textTransform: 'none',
                letterSpacing: 0.5,
                '&:hover': { bgcolor: SOFA10_COLORS.ink },
              }}
            >
              Khám phá bộ sưu tập
            </Button>
            <Button
              component="a"
              href="#gallery"
              size="large"
              variant="text"
              sx={{
                color: 'common.white',
                borderRadius: 2,
                px: 3,
                py: 1.5,
                fontSize: 15,
                fontWeight: 'fontWeightLight',
                textTransform: 'none',
                letterSpacing: 0.5,
                '&:hover': { bgcolor: varAlpha('#FFFFFF', 0.08) },
              }}
            >
              Xem không gian tĩnh →
            </Button>
          </Box>

          <Box
            component={m.div}
            variants={varFade({ distance: 24 }).inUp}
            sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, mt: 3 }}
          >
            {SOFA10_PROMOS.map((promo) => (
              <Stack key={promo.label} direction="row" alignItems="center" spacing={1}>
                <Iconify icon={promo.icon} width={20} sx={{ color: SOFA10_COLORS.woodLight, opacity: 0.8 }} />
                <Box>
                  <Typography variant="subtitle2" sx={{ color: varAlpha('#FFFFFF', 0.85), fontWeight: 'fontWeightNormal' }}>
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

      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 100,
          background: (t) => `linear-gradient(to top, ${SOFA10_COLORS.warmWhite}, transparent)`,
          zIndex: 5,
        }}
      />
    </Box>
  );
}
