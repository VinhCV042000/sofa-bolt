import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionContainer } from 'src/components/animate';

import { SPA_IMAGES } from './spa-data';

// ----------------------------------------------------------------------

export function SpaHero({ sx, ...other }: BoxProps) {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        overflow: 'hidden',
        position: 'relative',
        minHeight: { xs: 560, md: '100vh' },
        maxHeight: { md: 900 },
        display: 'flex',
        alignItems: 'center',
        mt: 'calc(var(--layout-header-desktop-height) * -1)',
        pt: 'var(--layout-header-desktop-height)',
        ...sx,
      }}
      {...other}
    >
      <Box
        sx={{
          inset: 0,
          position: 'absolute',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.72)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.48)}), url(${SPA_IMAGES.hero})`,
        }}
      />

      <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9, py: { xs: 8, md: 10 } }}>
        <Stack
          spacing={4}
          alignItems="center"
          sx={{ textAlign: 'center', maxWidth: 720, mx: 'auto' }}
        >
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              variant="overline"
              sx={{
                color: 'primary.light',
                letterSpacing: 3,
                fontWeight: 'fontWeightBold',
              }}
            >
              Serenity Spa
            </Typography>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              component="h1"
              variant="h1"
              sx={{
                color: 'common.white',
                fontFamily: theme.typography.fontSecondaryFamily,
                fontSize: { xs: 40, md: 64 },
                lineHeight: { xs: 1.2, md: 1.15 },
              }}
            >
              Tái tạo năng lượng,{' '}
              <Box
                component="span"
                sx={{
                  ...textGradient(
                    `135deg, ${theme.vars.palette.primary.light} 0%, ${theme.vars.palette.warning.light} 100%`
                  ),
                }}
              >
                nuôi dưỡng tâm hồn
              </Box>
            </Typography>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              variant="h6"
              sx={{
                color: varAlpha(theme.vars.palette.common.whiteChannel, 0.72),
                fontWeight: 'fontWeightRegular',
                maxWidth: 560,
              }}
            >
              Trải nghiệm spa cao cấp với liệu pháp trị liệu chuyên nghiệp, không gian thiên nhiên
              và sản phẩm organic 100% tại trung tâm thành phố.
            </Typography>
          </Box>

          <Box
            component={m.div}
            variants={varFade({ distance: 24 }).inUp}
            sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}
          >
            <Button
              component="a"
              href="#booking"
              size="large"
              variant="contained"
              color="primary"
              startIcon={<Iconify icon="solar:calendar-bold-duotone" />}
            >
              Đặt lịch ngay
            </Button>

            <Button
              component="a"
              href="#services"
              size="large"
              variant="outlined"
              sx={{
                color: 'common.white',
                borderColor: varAlpha(theme.vars.palette.common.whiteChannel, 0.48),
                '&:hover': {
                  borderColor: 'common.white',
                  bgcolor: varAlpha(theme.vars.palette.common.whiteChannel, 0.08),
                },
              }}
            >
              Khám phá dịch vụ
            </Button>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack
              direction="row"
              spacing={4}
              divider={<Divider orientation="vertical" flexItem sx={{ borderColor: 'rgba(255,255,255,0.24)' }} />}
              sx={{ color: 'common.white' }}
            >
              {[
                { value: '15+', label: 'Năm kinh nghiệm' },
                { value: '50+', label: 'Liệu trình' },
                { value: '10k+', label: 'Khách hàng' },
              ].map((stat) => (
                <Stack key={stat.label} spacing={0.5} alignItems="center">
                  <Typography variant="h3" sx={{ fontWeight: 'fontWeightBold' }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.72 }}>
                    {stat.label}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
