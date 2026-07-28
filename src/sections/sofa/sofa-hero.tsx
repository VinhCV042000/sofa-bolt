import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionContainer } from 'src/components/animate';

import { SOFA_IMAGES } from './sofa-data';

// ----------------------------------------------------------------------

export function SofaHero({ sx, ...other }: BoxProps) {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        overflow: 'hidden',
        position: 'relative',
        minHeight: { xs: 560, md: '100vh' },
        maxHeight: { md: 920 },
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
          backgroundImage: `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.72)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.48)}), url(${SOFA_IMAGES.hero})`,
        }}
      />

      <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9, py: { xs: 8, md: 10 } }}>
        <Stack
          spacing={4}
          alignItems="center"
          sx={{ textAlign: 'center', maxWidth: 760, mx: 'auto' }}
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
              Casa Sofa
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
              Nghệ thuật thư giãn{' '}
              <Box
                component="span"
                sx={{
                  ...textGradient(
                    `135deg, ${theme.vars.palette.primary.light} 0%, ${theme.vars.palette.warning.light} 100%`
                  ),
                }}
              >
                trong từng khoang ngồi
              </Box>
            </Typography>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              variant="h6"
              sx={{
                color: varAlpha(theme.vars.palette.common.whiteChannel, 0.72),
                fontWeight: 'fontWeightRegular',
                maxWidth: 580,
              }}
            >
              Sofa cao cấp chế tác thủ công từ da bò thật và gỗ sồi nguyên khối — mang đến vẻ đẹp
              sang trọng và sự êm ái tuyệt đối cho phòng khách nhà bạn.
            </Typography>
          </Box>

          <Box
            component={m.div}
            variants={varFade({ distance: 24 }).inUp}
            sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}
          >
            <Button
              component="a"
              href="#collections"
              size="large"
              variant="contained"
              color="primary"
              startIcon={<Iconify icon="solar:cart-large-2-bold-duotone" />}
            >
              Khám phá bộ sưu tập
            </Button>

            <Button
              component="a"
              href="#about"
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
              Câu chuyện thương hiệu
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
                { value: '12+', label: 'Năm chế tác' },
                { value: '80+', label: 'Mẫu sofa' },
                { value: '25k+', label: 'Gia đình tin chọn' },
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
