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

import { sofa12Alpha, SOFA12_COLORS, SOFA12_IMAGES, SOFA12_PROMOS } from './sofa12-data';

// ----------------------------------------------------------------------

export function Sofa12Hero({ sx, ...other }: BoxProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        minHeight: { xs: 620, md: '100vh' },
        maxHeight: { md: 960 },
        mt: 'calc(var(--layout-header-desktop-height) * -1)',
        pt: 'var(--layout-header-desktop-height)',
        bgcolor: SOFA12_COLORS.cream,
        ...sx,
      }}
      {...other}
    >
      {/* Sun disc */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: -120, md: -160 },
          right: { xs: -140, md: '6%' },
          width: { xs: 420, md: 620 },
          height: { xs: 420, md: 620 },
          borderRadius: '50%',
          background: `radial-gradient(circle at 40% 40%, ${sofa12Alpha(SOFA12_COLORS.ochre, 0.55)}, ${sofa12Alpha(SOFA12_COLORS.clay, 0.12)} 65%, transparent 70%)`,
        }}
      />

      {/* Horizon stripes */}
      <Box
        sx={{
          left: 0,
          right: 0,
          bottom: 0,
          height: 140,
          position: 'absolute',
          background: `repeating-linear-gradient(180deg, ${sofa12Alpha(SOFA12_COLORS.clay, 0.14)} 0 3px, transparent 3px 16px)`,
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
                  px: 2,
                  py: 0.75,
                  width: 'fit-content',
                  borderRadius: 99,
                  border: `1px solid ${sofa12Alpha(SOFA12_COLORS.clay, 0.4)}`,
                  bgcolor: sofa12Alpha(SOFA12_COLORS.clay, 0.06),
                }}
              >
                <Iconify icon="solar:sun-bold" width={18} sx={{ color: SOFA12_COLORS.clay }} />
                <Typography
                  variant="overline"
                  sx={{ color: SOFA12_COLORS.clay, letterSpacing: 2, fontSize: 12 }}
                >
                  Sofa Terra · Xưởng thủ công từ 2009
                </Typography>
              </Stack>
            </Box>

            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography
                component="h1"
                sx={{
                  color: SOFA12_COLORS.ink,
                  fontSize: { xs: 44, md: 78 },
                  lineHeight: 1.06,
                  fontWeight: 400,
                  letterSpacing: -1.5,
                  fontFamily: (t) => t.typography.fontSecondaryFamily,
                }}
              >
                Sắc đất nung
                <br />
                <Box component="span" sx={{ fontStyle: 'italic', color: SOFA12_COLORS.clay }}>
                  ôm trọn
                </Box>{' '}
                nắng chiều
              </Typography>
            </Box>

            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography
                sx={{
                  color: sofa12Alpha(SOFA12_COLORS.inkSoft, 0.86),
                  fontSize: { xs: 16, md: 18 },
                  maxWidth: 480,
                  lineHeight: 1.9,
                }}
              >
                Sofa vòm cong đóng thủ công từ gỗ tần bì và vải lanh nhuộm màu đất. Mộc mạc, ấm áp,
                và làm để dùng suốt một đời nhà.
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
                  fontSize: 15,
                  fontWeight: 700,
                  borderRadius: '999px 999px 999px 999px',
                  color: SOFA12_COLORS.cream,
                  bgcolor: SOFA12_COLORS.clay,
                  '&:hover': { bgcolor: SOFA12_COLORS.clayDeep },
                }}
              >
                Khám phá bộ sưu tập
              </Button>
              <Button
                component="a"
                href="#materials"
                size="large"
                sx={{
                  px: 4,
                  py: 1.75,
                  fontSize: 15,
                  fontWeight: 700,
                  borderRadius: 99,
                  color: SOFA12_COLORS.ink,
                  border: `1px solid ${sofa12Alpha(SOFA12_COLORS.ink, 0.28)}`,
                  '&:hover': { borderColor: SOFA12_COLORS.clay, color: SOFA12_COLORS.clay },
                }}
              >
                Nhận bộ swatch vải
              </Button>
            </Box>

            <Box
              component={m.div}
              variants={varFade({ distance: 24 }).inUp}
              sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, pt: 1 }}
            >
              {SOFA12_PROMOS.map((promo) => (
                <Stack key={promo.label} direction="row" alignItems="center" spacing={1.25}>
                  <Iconify icon={promo.icon} width={24} sx={{ color: SOFA12_COLORS.olive }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: SOFA12_COLORS.ink, fontWeight: 700 }}>
                      {promo.label}
                    </Typography>
                    <Typography variant="caption" sx={{ color: sofa12Alpha(SOFA12_COLORS.inkSoft, 0.6) }}>
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
                overflow: 'hidden',
                position: 'relative',
                borderRadius: '260px 260px 24px 24px',
                border: `10px solid ${SOFA12_COLORS.sand}`,
                boxShadow: `0 40px 80px -40px ${sofa12Alpha(SOFA12_COLORS.clayDeep, 0.6)}`,
              }}
            >
              <Box
                component="img"
                alt="Sofa terracotta thủ công"
                src={SOFA12_IMAGES.hero}
                sx={{ width: 1, height: { xs: 380, md: 560 }, objectFit: 'cover', display: 'block' }}
              />
            </Box>

            <Stack
              spacing={0.25}
              sx={{
                position: 'absolute',
                bottom: { xs: -18, md: 32 },
                left: { xs: 8, md: -32 },
                px: 3,
                py: 2,
                borderRadius: 2,
                bgcolor: SOFA12_COLORS.ink,
                color: SOFA12_COLORS.cream,
                boxShadow: `0 24px 48px -24px ${sofa12Alpha(SOFA12_COLORS.ink, 0.8)}`,
              }}
            >
              <Typography sx={{ fontSize: 26, fontWeight: 800, lineHeight: 1 }}>18</Typography>
              <Typography variant="caption" sx={{ opacity: 0.7 }}>
                công đoạn làm tay
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
