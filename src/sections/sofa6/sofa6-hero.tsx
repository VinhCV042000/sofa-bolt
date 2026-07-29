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

import { SOFA6_COLORS, SOFA6_IMAGES, SOFA6_PROMOS } from './sofa6-data';

// ----------------------------------------------------------------------

export function Sofa6Hero({ sx, ...other }: BoxProps) {
  const theme = useTheme();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        overflow: 'hidden',
        position: 'relative',
        minHeight: { xs: 620, md: '100vh' },
        maxHeight: { md: 980 },
        display: 'flex',
        alignItems: 'center',
        mt: 'calc(var(--layout-header-desktop-height) * -1)',
        pt: 'var(--layout-header-desktop-height)',
        ...sx,
      }}
      {...other}
    >
      <m.div style={{ y, scale }} className="sofa6-hero-bg">
        <Box
          sx={{
            inset: 0,
            position: 'absolute',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `linear-gradient(100deg, ${varAlpha(theme.vars.palette.common.blackChannel, 0.78)} 0%, ${varAlpha(theme.vars.palette.common.blackChannel, 0.4)} 55%, ${varAlpha(theme.vars.palette.common.blackChannel, 0.15)} 100%), url(${SOFA6_IMAGES.hero})`,
          }}
        />
      </m.div>

      {/* Organic blob shapes */}
      <Box
        sx={{
          position: 'absolute',
          top: '12%',
          right: '6%',
          width: 280,
          height: 280,
          borderRadius: '42% 58% 63% 37% / 41% 44% 56% 59%',
          background: `radial-gradient(circle at 35% 35%, ${varAlpha(SOFA6_COLORS.terracotta, 0.35)} 0%, transparent 70%)`,
          filter: 'blur(50px)',
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '15%',
          left: '4%',
          width: 220,
          height: 220,
          borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%',
          background: `radial-gradient(circle at 60% 40%, ${varAlpha(SOFA6_COLORS.sage, 0.3)} 0%, transparent 70%)`,
          filter: 'blur(45px)',
          zIndex: 1,
        }}
      />

      <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9, py: { xs: 8, md: 10 } }}>
        <Stack spacing={5} sx={{ maxWidth: 680 }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box sx={{ width: 44, height: 2, bgcolor: SOFA6_COLORS.terracottaLight, borderRadius: 1 }} />
              <Typography
                variant="overline"
                sx={{ color: SOFA6_COLORS.terracottaLight, letterSpacing: 4, fontWeight: 'fontWeightBold' }}
              >
                SOFA EARTH — Thủ Công Thiên Nhiên
              </Typography>
            </Stack>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              component="h1"
              sx={{
                color: 'common.white',
                fontFamily: theme.typography.fontSecondaryFamily,
                fontSize: { xs: 42, md: 78 },
                lineHeight: { xs: 1.15, md: 1.05 },
                fontWeight: 'fontWeightBold',
              }}
            >
              Sofa từ đất,{' '}
              <Box
                component="span"
                sx={{
                  ...textGradient(
                    `120deg, ${SOFA6_COLORS.terracottaLight} 0%, ${SOFA6_COLORS.sageLight} 100%`
                  ),
                }}
              >
                cho người yêu thiên nhiên
              </Box>
            </Typography>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              sx={{
                color: varAlpha(theme.vars.palette.common.whiteChannel, 0.78),
                fontSize: { xs: 16, md: 18 },
                maxWidth: 520,
                lineHeight: 1.7,
              }}
            >
              Linen tự nhiên, bông hữu cơ, thuốc nhuộm thực vật. Mỗi chiếc sofa là câu chuyện của
              đất, cây, và bàn tay nghệ nhân Việt.
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
                borderRadius: 28,
                px: 4,
                py: 1.5,
                fontSize: 16,
                bgcolor: SOFA6_COLORS.terracotta,
                '&:hover': { bgcolor: SOFA6_COLORS.terracottaLight },
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
                borderRadius: 28,
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
              Xem không gian sống
            </Button>
          </Box>

          <Box
            component={m.div}
            variants={varFade({ distance: 24 }).inUp}
            sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mt: 2 }}
          >
            {SOFA6_PROMOS.map((promo) => (
              <Stack key={promo.label} direction="row" alignItems="center" spacing={1}>
                <Iconify icon={promo.icon} width={22} sx={{ color: SOFA6_COLORS.sageLight }} />
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
