import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport, MotionContainer } from 'src/components/animate';

import {
  SOFA_BRANCHES,
  SOFA_PAGE_IMAGES,
} from 'src/sections/sofa/pages/sofa-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Hệ thống chi nhánh' };

const STATS = [
  { value: '4', label: 'Chi nhánh toàn quốc', icon: 'solar:map-point-bold-duotone' },
  { value: '50+', label: 'Nhân sự chuyên nghiệp', icon: 'solar:users-group-rounded-bold-duotone' },
  { value: '12k+', label: 'Khách hàng phục vụ', icon: 'solar:heart-bold-duotone' },
  { value: '8:00', label: 'Mở cửa sớm', icon: 'solar:clock-circle-bold-duotone' },
];

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
            backgroundImage: `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.78)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.56)}), url(${SOFA_PAGE_IMAGES.branch2})`,
          }}
        />
        <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9 }}>
          <Stack spacing={3} sx={{ maxWidth: 720 }}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="overline" sx={{ color: 'primary.light', letterSpacing: 3 }}>Chi nhánh</Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="h1" sx={{ fontSize: { xs: 36, md: 56 }, lineHeight: 1.15 }}>
                Hệ Thống
                <Box component="span" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.light}, ${theme.vars.palette.warning.light}`) }}> Chi Nhánh</Box>
              </Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.72), maxWidth: 560 }}>
                Bốn chi nhánh tại các thành phố lớn — ghé showroom gần nhất để trải nghiệm sofa và
                nhận tư vấn trực tiếp từ chuyên gia.
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Branch grid */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={3}>
            {SOFA_BRANCHES.map((branch) => (
              <Grid key={branch.id} xs={12} sm={6} md={6}>
                <Stack
                  component={m.div}
                  variants={varFade({ distance: 24 }).inUp}
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ borderRadius: 2, overflow: 'hidden', bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, transition: (t) => t.transitions.create(['transform'], { duration: 300 }), '&:hover': { transform: 'translateY(-6px)' } }}
                >
                  <Box component="img" src={branch.image} alt={branch.name} sx={{ width: { xs: 1, sm: 240 }, height: { xs: 220, sm: 1 }, objectFit: 'cover', flexShrink: 0 }} />
                  <Stack spacing={2} sx={{ p: 4, flex: 1 }}>
                    <Typography variant="h6">{branch.name}</Typography>
                    <Stack direction="row" spacing={1.5} alignItems="flex-start">
                      <Iconify icon="solar:map-point-bold-duotone" sx={{ color: 'primary.main', mt: 0.25 }} width={20} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{branch.address}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Iconify icon="solar:phone-bold-duotone" sx={{ color: 'primary.main' }} width={20} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{branch.phone}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Iconify icon="solar:clock-circle-bold-duotone" sx={{ color: 'primary.main' }} width={20} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{branch.hours}</Typography>
                    </Stack>
                    <Button variant="outlined" color="primary" size="small" startIcon={<Iconify icon="solar:map-point-bold-duotone" />} sx={{ width: 'fit-content' }}>
                      Xem bản đồ
                    </Button>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Stats */}
      <Box component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
        <Container component={MotionViewport}>
          <Grid container spacing={3}>
            {STATS.map((s) => (
              <Grid key={s.label} xs={6} md={3}>
                <Stack spacing={1} alignItems="center" component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Iconify icon={s.icon} width={32} sx={{ color: 'primary.main' }} />
                  <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 'fontWeightBold' }}>{s.value}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>{s.label}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
            <Typography variant="h3">Ghé showroom gần nhất</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Đặt hẹn trước để nhận tư vấn 1:1 và ưu đãi giảm 10% cho đơn đầu tiên.</Typography>
            <Button component={RouterLink} href={paths.sofaBooking} size="large" variant="contained" color="primary" startIcon={<Iconify icon="solar:calendar-bold-duotone" />}>
              Đặt hẹn ngay
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
