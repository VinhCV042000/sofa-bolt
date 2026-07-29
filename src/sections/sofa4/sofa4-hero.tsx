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

import { SOFA4_IMAGES, SOFA4_PROMOS } from './sofa4-data';

// ----------------------------------------------------------------------

export function Sofa4Hero({ sx, ...other }: BoxProps) {
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
        minHeight: { xs: 600, md: '100vh' },
        maxHeight: { md: 960 },
        display: 'flex',
        alignItems: 'center',
        mt: 'calc(var(--layout-header-desktop-height) * -1)',
        pt: 'var(--layout-header-desktop-height)',
        ...sx,
      }}
      {...other}
    >
      <m.div style={{ y, opacity }} className="sofa4-hero-bg">
        <Box
          sx={{
            inset: 0,
            position: 'absolute',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `linear-gradient(135deg, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.88)} 0%, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.5)} 50%, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.3)} 100%), url(${SOFA4_IMAGES.hero})`,
          }}
        />
      </m.div>

      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          right: '8%',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${varAlpha(theme.vars.palette.warning.mainChannel, 0.3)} 0%, transparent 70%)`,
          filter: 'blur(40px)',
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: 180,
          height: 180,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.25)} 0%, transparent 70%)`,
          filter: 'blur(40px)',
          zIndex: 1,
        }}
      />

      <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9, py: { xs: 8, md: 10 } }}>
        <Stack spacing={5} sx={{ maxWidth: 680 }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box sx={{ width: 40, height: 2, bgcolor: 'warning.main' }} />
              <Typography variant="overline" sx={{ color: 'warning.light', letterSpacing: 4, fontWeight: 'fontWeightBold' }}>
                SOFA POP — Màu Sắc Là Cá Tính
              </Typography>
            </Stack>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              component="h1"
              sx={{
                color: 'common.white',
                fontFamily: theme.typography.fontSecondaryFamily,
                fontSize: { xs: 44, md: 80 },
                lineHeight: { xs: 1.1, md: 1.0 },
                fontWeight: 'fontWeightBold',
              }}
            >
              Sofa không chỉ để ngồi,{' '}
              <Box
                component="span"
                sx={{
                  ...textGradient(
                    `135deg, ${theme.vars.palette.warning.main} 0%, ${theme.vars.palette.primary.main} 100%`
                  ),
                }}
              >
                mà là tuyên ngôn
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
              20+ bảng màu độc quyền, modular linh hoạt, vật liệu bền vững. Sofa Pop mang năng lượng
              và cá tính vào từng không gian sống.
            </Typography>
          </Box>

          <Box
            component={m.div}
            variants={varFade({ distance: 24 }).inUp}
            sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}
          >
            <Button
              component="a"
              href="#products"
              size="large"
              variant="contained"
              color="warning"
              startIcon={<Iconify icon="solar:armchair-2-bold-duotone" />}
              sx={{ borderRadius: 3, px: 4, py: 1.5, fontSize: 16 }}
            >
              Khám phá màu sắc
            </Button>
            <Button
              component="a"
              href="#gallery"
              size="large"
              variant="outlined"
              sx={{
                color: 'common.white',
                borderRadius: 3,
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
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 3,
              mt: 2,
            }}
          >
            {SOFA4_PROMOS.map((promo) => (
              <Stack key={promo.label} direction="row" alignItems="center" spacing={1}>
                <Iconify icon={promo.icon} width={24} sx={{ color: 'warning.light' }} />
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
          background: (t) =>
            `linear-gradient(to top, ${t.vars.palette.background.default}, transparent)`,
          zIndex: 5,
        }}
      />
    </Box>
  );
}
