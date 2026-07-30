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

import { sofa11Alpha, SOFA11_COLORS, SOFA11_IMAGES, SOFA11_PROMOS } from './sofa11-data';

// ----------------------------------------------------------------------

export function Sofa11Hero({ sx, ...other }: BoxProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

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
        bgcolor: SOFA11_COLORS.void,
        ...sx,
      }}
      {...other}
    >
      {/* Grid floor */}
      <Box
        sx={{
          inset: 0,
          position: 'absolute',
          backgroundImage: `linear-gradient(${sofa11Alpha(SOFA11_COLORS.cyan, 0.16)} 1px, transparent 1px), linear-gradient(90deg, ${sofa11Alpha(SOFA11_COLORS.cyan, 0.16)} 1px, transparent 1px)`,
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at 50% 60%, #000 0%, transparent 75%)',
        }}
      />

      {/* Neon blobs */}
      <Box
        sx={{
          position: 'absolute',
          top: '-12%',
          left: '-8%',
          width: 520,
          height: 520,
          borderRadius: '50%',
          filter: 'blur(120px)',
          background: sofa11Alpha(SOFA11_COLORS.magenta, 0.45),
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-18%',
          right: '-6%',
          width: 460,
          height: 460,
          borderRadius: '50%',
          filter: 'blur(130px)',
          background: sofa11Alpha(SOFA11_COLORS.cyan, 0.35),
        }}
      />

      <Container
        component={MotionContainer}
        sx={{ position: 'relative', zIndex: 9, py: { xs: 8, md: 10 } }}
      >
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems="center"
          spacing={{ xs: 6, md: 4 }}
        >
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
                  borderRadius: 99,
                  border: `2px solid ${SOFA11_COLORS.lime}`,
                  boxShadow: `0 0 24px ${sofa11Alpha(SOFA11_COLORS.lime, 0.5)}`,
                }}
              >
                <Iconify icon="solar:bolt-circle-bold" width={18} sx={{ color: SOFA11_COLORS.lime }} />
                <Typography
                  variant="overline"
                  sx={{ color: SOFA11_COLORS.lime, letterSpacing: 2, fontSize: 12 }}
                >
                  Sofa Pop · No beige allowed
                </Typography>
              </Stack>
            </Box>

            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography
                component="h1"
                sx={{
                  color: SOFA11_COLORS.cream,
                  fontSize: { xs: 46, md: 86 },
                  lineHeight: 0.95,
                  fontWeight: 900,
                  letterSpacing: -2,
                  textTransform: 'uppercase',
                }}
              >
                Phòng khách
                <br />
                <Box
                  component="span"
                  sx={{
                    color: SOFA11_COLORS.magenta,
                    textShadow: `4px 4px 0 ${SOFA11_COLORS.cyan}, 8px 8px 0 ${sofa11Alpha(SOFA11_COLORS.lime, 0.6)}`,
                  }}
                >
                  bật màu
                </Box>{' '}
                <Box component="span" sx={{ WebkitTextStroke: `2px ${SOFA11_COLORS.lime}`, color: 'transparent' }}>
                  lên!
                </Box>
              </Typography>
            </Box>

            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography
                sx={{
                  color: sofa11Alpha(SOFA11_COLORS.cream, 0.72),
                  fontSize: { xs: 16, md: 18 },
                  maxWidth: 480,
                  lineHeight: 1.8,
                }}
              >
                Sofa thủ công màu chói, dáng cong, module ghép tự do. Hơn 200 mã vải để bạn tự phối —
                vì phòng khách của bạn không nên giống catalogue của ai cả.
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
                  fontSize: 16,
                  fontWeight: 900,
                  borderRadius: 99,
                  textTransform: 'uppercase',
                  color: SOFA11_COLORS.void,
                  bgcolor: SOFA11_COLORS.lime,
                  boxShadow: `0 0 32px ${sofa11Alpha(SOFA11_COLORS.lime, 0.55)}`,
                  '&:hover': { bgcolor: SOFA11_COLORS.cyan, transform: 'translateY(-2px)' },
                  transition: 'all .25s',
                }}
              >
                Xem bộ sưu tập
              </Button>
              <Button
                component="a"
                href="#playground"
                size="large"
                sx={{
                  px: 4,
                  py: 1.75,
                  fontSize: 16,
                  fontWeight: 700,
                  borderRadius: 99,
                  textTransform: 'uppercase',
                  color: SOFA11_COLORS.cream,
                  border: `2px solid ${sofa11Alpha(SOFA11_COLORS.cream, 0.4)}`,
                  '&:hover': { borderColor: SOFA11_COLORS.magenta, color: SOFA11_COLORS.magenta },
                }}
              >
                Phối màu thử
              </Button>
            </Box>

            <Box
              component={m.div}
              variants={varFade({ distance: 24 }).inUp}
              sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, pt: 2 }}
            >
              {SOFA11_PROMOS.map((promo) => (
                <Stack key={promo.label} direction="row" alignItems="center" spacing={1.25}>
                  <Iconify icon={promo.icon} width={22} sx={{ color: SOFA11_COLORS.cyan }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: SOFA11_COLORS.cream, fontWeight: 800 }}>
                      {promo.label}
                    </Typography>
                    <Typography variant="caption" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.5) }}>
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
                position: 'relative',
                borderRadius: '48% 52% 46% 54% / 52% 46% 54% 48%',
                overflow: 'hidden',
                border: `3px solid ${SOFA11_COLORS.magenta}`,
                boxShadow: `0 0 60px ${sofa11Alpha(SOFA11_COLORS.magenta, 0.5)}`,
                animation: 'sofa11-morph 12s ease-in-out infinite',
              }}
            >
              <Box
                component="img"
                alt="Sofa neon pop"
                src={SOFA11_IMAGES.hero}
                sx={{ width: 1, height: { xs: 320, md: 520 }, objectFit: 'cover' }}
              />
            </Box>

            <Box
              sx={{
                position: 'absolute',
                top: -18,
                right: { xs: 8, md: 24 },
                px: 2.5,
                py: 1.25,
                borderRadius: 99,
                transform: 'rotate(-8deg)',
                bgcolor: SOFA11_COLORS.tangerine,
                color: SOFA11_COLORS.void,
                fontWeight: 900,
                fontSize: 14,
                textTransform: 'uppercase',
                boxShadow: `0 0 28px ${sofa11Alpha(SOFA11_COLORS.tangerine, 0.6)}`,
              }}
            >
              -30% tháng này
            </Box>
          </Box>
        </Stack>
      </Container>

      <style>{`
        @keyframes sofa11-morph {
          0%,100% { border-radius: 48% 52% 46% 54% / 52% 46% 54% 48%; }
          50% { border-radius: 56% 44% 58% 42% / 44% 58% 42% 56%; }
        }
      `}</style>
    </Box>
  );
}
