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

import { SOFA5_VIP, SOFA5_IMAGES } from './sofa5-data';

// ----------------------------------------------------------------------

export function Sofa5Hero({ sx, ...other }: BoxProps) {
  const theme = useTheme();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        overflow: 'hidden',
        position: 'relative',
        minHeight: { xs: 600, md: '100vh' },
        maxHeight: { md: 980 },
        display: 'flex',
        alignItems: 'center',
        mt: 'calc(var(--layout-header-desktop-height) * -1)',
        pt: 'var(--layout-header-desktop-height)',
        ...sx,
      }}
      {...other}
    >
      <m.div style={{ scale, y }} className="sofa5-hero-bg">
        <Box
          sx={{
            inset: 0,
            position: 'absolute',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `linear-gradient(90deg, ${varAlpha(theme.vars.palette.common.blackChannel, 0.92)} 0%, ${varAlpha(theme.vars.palette.common.blackChannel, 0.6)} 50%, ${varAlpha(theme.vars.palette.common.blackChannel, 0.3)} 100%), url(${SOFA5_IMAGES.hero})`,
          }}
        />
      </m.div>

      <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9, py: { xs: 8, md: 10 } }}>
        <Stack spacing={5} sx={{ maxWidth: 680 }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box sx={{ width: 40, height: 2, bgcolor: 'warning.dark' }} />
              <Typography variant="overline" sx={{ color: 'warning.dark', letterSpacing: 4, fontWeight: 'fontWeightBold' }}>
                SOFA ROYALE — Nghệ Thuật Chế Tác
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
              Đỉnh cao{' '}
              <Box
                component="span"
                sx={{
                  ...textGradient(
                    `135deg, ${theme.vars.palette.warning.dark} 0%, ${theme.vars.palette.warning.main} 100%`
                  ),
                }}
              >
                chế tác thủ công
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
              Da bò Ý nguyên tấm, mạ vàng 24K, gỗ óc chó Bắc Mỹ. Mỗi chiếc Sofa Royale là duy nhất —
              mang số serial riêng và ký tên nghệ nhân.
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
              sx={{
                borderRadius: 2,
                px: 4,
                py: 1.5,
                bgcolor: 'warning.dark',
                '&:hover': { bgcolor: 'warning.main' },
              }}
              startIcon={<Iconify icon="solar:medal-ribbon-star-bold-duotone" />}
            >
              Khám phá bộ sưu tập
            </Button>
            <Button
              component="a"
              href="#showcase"
              size="large"
              variant="outlined"
              sx={{
                color: 'common.white',
                borderRadius: 2,
                px: 4,
                py: 1.5,
                borderColor: varAlpha(theme.vars.palette.common.whiteChannel, 0.4),
                '&:hover': {
                  borderColor: 'common.white',
                  bgcolor: varAlpha(theme.vars.palette.common.whiteChannel, 0.08),
                },
              }}
            >
              Xem không gian thượng lưu
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
            {SOFA5_VIP.map((vip) => (
              <Stack key={vip.label} direction="row" alignItems="center" spacing={1}>
                <Iconify icon={vip.icon} width={24} sx={{ color: 'warning.dark' }} />
                <Box>
                  <Typography variant="subtitle2" sx={{ color: 'common.white', fontWeight: 'fontWeightBold' }}>
                    {vip.label}
                  </Typography>
                  <Typography variant="caption" sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.6) }}>
                    {vip.text}
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
