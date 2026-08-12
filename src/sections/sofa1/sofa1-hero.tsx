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

import { SOFA1_IMAGES } from './sofa1-data';

// ----------------------------------------------------------------------

export function Sofa1Hero({ sx, ...other }: BoxProps) {
  const theme = useTheme();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <Box
      ref={containerRef}
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
      <m.div style={{ y, opacity }} className="sofa1-hero-bg">
        <Box
          sx={{
            inset: 0,
            position: 'absolute',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `linear-gradient(135deg, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.8)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.4)}), url(${SOFA1_IMAGES.hero})`,
          }}
        />
      </m.div>

      <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9, py: { xs: 8, md: 10 } }}>
        <Stack spacing={5} sx={{ maxWidth: 680 }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box sx={{ width: 40, height: 2, bgcolor: 'primary.main' }} />
              <Typography variant="overline" sx={{ color: 'primary.light', letterSpacing: 4, fontWeight: 'fontWeightBold' }}>
                Casa Sofa — Bệ Phóng Sống Ảo
              </Typography>
            </Stack>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              component="h1"
              sx={{
                color: 'common.white',
                fontFamily: theme.typography.fontSecondaryFamily,
                fontSize: { xs: 42, md: 72 },
                lineHeight: { xs: 1.15, md: 1.05 },
                fontWeight: 'fontWeightBold',
              }}
            >
              Sofa cao cấp{' '}
              <Box
                component="span"
                sx={{
                  ...textGradient(
                    `135deg, ${theme.vars.palette.primary.light} 0%, ${theme.vars.palette.warning.light} 100%`
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
              Từ tấm da bò Ý nguyên bản đến khung gỗ sồi nguyên khối — mỗi chiếc sofa là một kiệt
              tác mang dấu ấn nghệ nhân, sinh ra để nâng tầm không gian sống của bạn.
            </Typography>
          </Box>

          <Box
            component={m.div}
            variants={varFade({ distance: 24 }).inUp}
            sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}
          >
            <Button
              component="a"
              href="#categories"
              size="large"
              variant="contained"
              color="primary"
              startIcon={<Iconify icon="solar:cart-large-2-bold-duotone" />}
              sx={{ borderRadius: 2, px: 4, py: 1.5 }}
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
              Xem showroom
            </Button>
          </Box>
        </Stack>
      </Container>

      <m.div
        style={{ opacity }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Stack
          direction="row"
          spacing={6}
          sx={{
            position: 'absolute',
            bottom: { xs: 24, md: 48 },
            left: { xs: 24, md: 48 },
            zIndex: 9,
            display: { xs: 'none', md: 'flex' },
          }}
        >
          {[
            { value: '12+', label: 'Năm kinh nghiệm' },
            { value: '80+', label: 'Mẫu sofa' },
            { value: '25k+', label: 'Khách hàng' },
          ].map((stat) => (
            <Stack key={stat.label} spacing={0.5}>
              <Typography variant="h4" sx={{ color: 'common.white', fontWeight: 'fontWeightBold' }}>
                {stat.value}
              </Typography>
              <Typography variant="caption" sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.56) }}>
                {stat.label}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </m.div>
    </Box>
  );
}
