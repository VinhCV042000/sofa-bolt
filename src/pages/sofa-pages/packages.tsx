import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport, MotionContainer } from 'src/components/animate';

import {
  SOFA_PACKAGES,
  SOFA_PAGE_IMAGES,
} from 'src/sections/sofa/pages/sofa-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Gói liệu trình sofa' };

const COMPARISON = [
  { feature: 'Hút bụi toàn bộ', basic: true, advanced: true, full: true },
  { feature: 'Giặt khô bề mặt', basic: true, advanced: true, full: true },
  { feature: 'Giặt nước sâu', basic: false, advanced: true, full: true },
  { feature: 'Xử lý vết bẩn cứng', basic: false, advanced: true, full: true },
  { feature: 'Khử mùi & diệt khuẩn', basic: false, advanced: true, full: true },
  { feature: 'Phủ lớp bảo vệ vải', basic: false, advanced: true, full: true },
  { feature: 'Thay đệm & bọc lại', basic: false, advanced: false, full: true },
  { feature: 'Sửa khung gỗ', basic: false, advanced: false, full: true },
];

const Check = ({ on }: { on: boolean }) => (
  <Iconify icon={on ? 'eva:checkmark-circle-2-fill' : 'eva:close-circle-fill'} sx={{ color: on ? 'primary.main' : 'text.disabled' }} width={20} />
);

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      {/* Hero */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          py: { xs: 10, md: 16 },
          color: 'common.white',
          mt: 'calc(var(--layout-header-desktop-height) * -1)',
          pt: 'calc(var(--layout-header-desktop-height) + 40px)',
        }}
      >
        <Box
          sx={{
            inset: 0,
            position: 'absolute',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.78)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.56)}), url(${SOFA_PAGE_IMAGES.service3})`,
          }}
        />
        <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9 }}>
          <Stack spacing={3} sx={{ maxWidth: 720 }}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="overline" sx={{ color: 'primary.light', letterSpacing: 3 }}>Gói liệu trình</Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="h1" sx={{ fontSize: { xs: 36, md: 56 }, lineHeight: 1.15 }}>
                Gói Liệu Trình
                <Box component="span" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.light}, ${theme.vars.palette.warning.light}`) }}> Chăm Sóc Sofa</Box>
              </Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.72), maxWidth: 560 }}>
                Ba gói chăm sóc sofa linh hoạt — từ làm sạch cơ bản đến phục hồi toàn diện. Chọn gói
                phù hợp nhu cầu và ngân sách.
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Package cards */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={3} alignItems="stretch">
            {SOFA_PACKAGES.map((pkg) => {
              const popular = (pkg as any).popular;
              return (
                <Grid key={pkg.id} xs={12} md={4}>
                  <Stack
                    component={m.div}
                    variants={varFade({ distance: 24 }).inUp}
                    spacing={3}
                    sx={{
                      p: 4,
                      height: 1,
                      borderRadius: 3,
                      position: 'relative',
                      bgcolor: popular ? 'primary.main' : 'background.paper',
                      color: popular ? 'common.white' : 'text.primary',
                      boxShadow: (t) => t.customShadows.card,
                      transform: popular ? 'scale(1.03)' : 'none',
                    }}
                  >
                    {popular && (
                      <Box sx={{ position: 'absolute', top: 16, right: 16, px: 1.5, py: 0.5, borderRadius: 1, bgcolor: 'warning.main', color: 'common.white' }}>
                        <Typography variant="caption" fontWeight="fontWeightBold">Phổ biến</Typography>
                      </Box>
                    )}
                    <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: popular ? varAlpha(theme.vars.palette.common.whiteChannel, 0.16) : (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: popular ? 'common.white' : 'primary.main' }}>
                      <Iconify icon={pkg.icon} width={28} />
                    </Box>
                    <Typography variant="h6">{pkg.title}</Typography>
                    <Stack direction="row" spacing={2}>
                      <Typography variant="h4" sx={{ fontWeight: 'fontWeightBold' }}>{pkg.price}</Typography>
                      <Typography variant="caption" sx={{ alignSelf: 'center', opacity: 0.7 }}>· {pkg.duration}</Typography>
                    </Stack>
                    <Stack spacing={1.5}>
                      {pkg.items.map((item) => (
                        <Stack key={item} direction="row" spacing={1} alignItems="flex-start">
                          <Iconify icon="eva:checkmark-circle-2-fill" sx={{ mt: 0.25, color: popular ? 'warning.light' : 'primary.main' }} width={18} />
                          <Typography variant="body2">{item}</Typography>
                        </Stack>
                      ))}
                    </Stack>
                    <Button component={RouterLink} href={paths.sofaBooking} variant={popular ? 'contained' : 'outlined'} color={popular ? 'warning' : 'primary'} fullWidth>
                      Đặt lịch gói này
                    </Button>
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Comparison */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
        <Container component={MotionViewport}>
          <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>So sánh</Typography>
            <Typography variant="h2">Bao gồm những gì?</Typography>
          </Stack>
          <Grid container spacing={2} component={m.div} variants={varFade({ distance: 24 }).inUp}>
            {COMPARISON.map((row) => (
              <Grid key={row.feature} xs={12}>
                <Grid container spacing={2} sx={{ p: 2, borderRadius: 1, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }} alignItems="center">
                  <Grid xs={12} sm={6}><Typography variant="body2" sx={{ fontWeight: 'fontWeightMedium' }}>{row.feature}</Typography></Grid>
                  <Grid xs={4} sm={2} sx={{ textAlign: 'center' }}><Check on={row.basic} /></Grid>
                  <Grid xs={4} sm={2} sx={{ textAlign: 'center' }}><Check on={row.advanced} /></Grid>
                  <Grid xs={4} sm={2} sx={{ textAlign: 'center' }}><Check on={row.full} /></Grid>
                </Grid>
              </Grid>
            ))}
            <Grid xs={12}>
              <Grid container spacing={2} sx={{ px: 2 }} alignItems="center">
                <Grid xs={12} sm={6} />
                <Grid xs={4} sm={2} sx={{ textAlign: 'center' }}><Typography variant="caption" sx={{ color: 'text.disabled' }}>Cơ bản</Typography></Grid>
                <Grid xs={4} sm={2} sx={{ textAlign: 'center' }}><Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 'fontWeightBold' }}>Nâng cao</Typography></Grid>
                <Grid xs={4} sm={2} sx={{ textAlign: 'center' }}><Typography variant="caption" sx={{ color: 'text.disabled' }}>Toàn diện</Typography></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
            <Typography variant="h3">Cần tư vấn chọn gói?</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Chuyên gia sẽ đánh giá tình trạng sofa và gợi ý gói phù hợp nhất.</Typography>
            <Button component={RouterLink} href={paths.sofaBooking} size="large" variant="contained" color="primary" startIcon={<Iconify icon="solar:calendar-bold-duotone" />}>
              Đặt lịch ngay
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
