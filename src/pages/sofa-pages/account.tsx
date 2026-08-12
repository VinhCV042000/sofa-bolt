import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
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
  SOFA_PAGE_IMAGES,
} from 'src/sections/sofa/pages/sofa-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Tài khoản khách hàng' };

const ORDERS = [
  { id: '#CS001', date: '10/02/2025', item: 'Sofa Milano 3 Chỗ', status: 'Đã giao', total: '12.900.000đ' },
  { id: '#CS002', date: '05/01/2025', item: 'Giặt sofa góc', status: 'Hoàn tất', total: '850.000đ' },
];

const APPOINTMENTS = [
  { id: '#AP01', date: '20/02/2025', service: 'Tư vấn nội thất', branch: 'Casa Sofa TP.HCM', status: 'Sắp tới' },
  { id: '#AP02', date: '15/01/2025', service: 'Bảo trì định kỳ', branch: 'Casa Sofa TP.HCM', status: 'Hoàn tất' },
];

export default function Page() {
  const theme = useTheme();
  const [tab, setTab] = useState('profile');
  const [authTab, setAuthTab] = useState('login');
  const [isLoggedIn] = useState(true);

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
            backgroundImage: `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.78)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.56)}), url(${SOFA_PAGE_IMAGES.cta})`,
          }}
        />
        <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9 }}>
          <Stack spacing={3} sx={{ maxWidth: 720 }}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="overline" sx={{ color: 'primary.light', letterSpacing: 3 }}>Tài khoản</Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="h1" sx={{ fontSize: { xs: 36, md: 56 }, lineHeight: 1.15 }}>
                Tài Khoản
                <Box component="span" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.light}, ${theme.vars.palette.warning.light}`) }}> Khách Hàng</Box>
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          {!isLoggedIn ? (
            /* Auth tabs */
            <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={3} sx={{ maxWidth: 480, mx: 'auto', p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
              <Tabs value={authTab} onChange={(_, v) => setAuthTab(v)} variant="fullWidth">
                <Tab value="login" label="Đăng nhập" />
                <Tab value="register" label="Đăng ký" />
              </Tabs>
              <Grid container spacing={2}>
                {authTab === 'register' && <Grid xs={12}><TextField fullWidth label="Họ và tên" /></Grid>}
                <Grid xs={12}><TextField fullWidth label="Email" type="email" /></Grid>
                <Grid xs={12}><TextField fullWidth label="Mật khẩu" type="password" /></Grid>
              </Grid>
              <Button variant="contained" size="large" fullWidth startIcon={<Iconify icon="solar:user-bold-duotone" />}>
                {authTab === 'login' ? 'Đăng nhập' : 'Đăng ký'}
              </Button>
            </Stack>
          ) : (
            /* Dashboard */
            <Grid container spacing={{ xs: 4, md: 5 }}>
              {/* Sidebar */}
              <Grid xs={12} md={3}>
                <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar sx={{ bgcolor: 'primary.main' }}>NA</Avatar>
                    <Stack>
                      <Typography variant="subtitle1">Nguyễn Anh</Typography>
                      <Typography variant="caption" sx={{ color: 'warning.main' }}>Thành viên Vàng</Typography>
                    </Stack>
                  </Stack>
                  <Divider />
                  <Tabs value={tab} onChange={(_, v) => setTab(v)} orientation="vertical" sx={{ '& .MuiTabs-indicator': { left: 0 } }}>
                    {[
                      { value: 'profile', label: 'Hồ sơ', icon: 'solar:user-bold-duotone' },
                      { value: 'orders', label: 'Đơn hàng', icon: 'solar:bag-bold-duotone' },
                      { value: 'appointments', label: 'Lịch hẹn', icon: 'solar:calendar-bold-duotone' },
                      { value: 'membership', label: 'Thành viên', icon: 'solar:medal-ribbon-star-bold-duotone' },
                      { value: 'addresses', label: 'Địa chỉ', icon: 'solar:map-point-bold-duotone' },
                    ].map((t) => (
                      <Tab key={t.value} value={t.value} icon={<Iconify icon={t.icon} width={20} />} iconPosition="start" label={t.label} sx={{ alignItems: 'center', justifyContent: 'flex-start', minHeight: 48 }} />
                    ))}
                  </Tabs>
                </Stack>
              </Grid>

              {/* Content */}
              <Grid xs={12} md={9}>
                <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                  {tab === 'profile' && (
                    <>
                      <Typography variant="h5">Hồ sơ cá nhân</Typography>
                      <Grid container spacing={2}>
                        <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" defaultValue="Nguyễn Minh Anh" /></Grid>
                        <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" defaultValue="0901 234 567" /></Grid>
                        <Grid xs={12} sm={6}><TextField fullWidth label="Email" defaultValue="anh.nguyen@email.com" /></Grid>
                        <Grid xs={12} sm={6}><TextField fullWidth label="Ngày sinh" type="date" defaultValue="1990-05-12" InputLabelProps={{ shrink: true }} /></Grid>
                      </Grid>
                      <Button variant="contained" sx={{ width: 'fit-content' }}>Lưu thay đổi</Button>
                    </>
                  )}

                  {tab === 'orders' && (
                    <>
                      <Typography variant="h5">Lịch sử đơn hàng</Typography>
                      {ORDERS.map((o) => (
                        <Stack key={o.id} direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="space-between" sx={{ p: 2, borderRadius: 1, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
                          <Stack>
                            <Typography variant="subtitle2">{o.id} · {o.date}</Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>{o.item}</Typography>
                          </Stack>
                          <Stack alignItems="flex-end" spacing={0.5}>
                            <Typography variant="subtitle2" sx={{ color: 'primary.main' }}>{o.total}</Typography>
                            <Typography variant="caption" sx={{ color: 'success.main' }}>{o.status}</Typography>
                          </Stack>
                        </Stack>
                      ))}
                    </>
                  )}

                  {tab === 'appointments' && (
                    <>
                      <Typography variant="h5">Lịch hẹn dịch vụ</Typography>
                      {APPOINTMENTS.map((a) => (
                        <Stack key={a.id} direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="space-between" sx={{ p: 2, borderRadius: 1, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
                          <Stack>
                            <Typography variant="subtitle2">{a.date} · {a.service}</Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>{a.branch}</Typography>
                          </Stack>
                          <Typography variant="caption" sx={{ color: a.status === 'Sắp tới' ? 'warning.main' : 'success.main' }}>{a.status}</Typography>
                        </Stack>
                      ))}
                      <Button component={RouterLink} href={paths.sofaBooking} variant="contained" startIcon={<Iconify icon="solar:calendar-bold-duotone" />} sx={{ width: 'fit-content' }}>Đặt lịch mới</Button>
                    </>
                  )}

                  {tab === 'membership' && (
                    <>
                      <Typography variant="h5">Thành viên Vàng</Typography>
                      <Stack spacing={2} sx={{ p: 3, borderRadius: 2, bgcolor: (t) => varAlpha(t.vars.palette.warning.mainChannel, 0.08) }}>
                        <Stack direction="row" spacing={2} alignItems="center">
                          <Iconify icon="solar:winner-medal-bold-duotone" width={40} sx={{ color: 'warning.main' }} />
                          <Typography variant="h6" sx={{ color: 'warning.main' }}>Gói Thành Viên Vàng</Typography>
                        </Stack>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>Giảm 20% dịch vụ · 4 lần giặt miễn phí/năm · 6 lần bảo trì/năm</Typography>
                        <Button component={RouterLink} href={paths.sofaOffers} variant="outlined" sx={{ width: 'fit-content' }}>Xem tất cả gói</Button>
                      </Stack>
                    </>
                  )}

                  {tab === 'addresses' && (
                    <>
                      <Typography variant="h5">Địa chỉ của tôi</Typography>
                      <Stack spacing={2} sx={{ p: 3, borderRadius: 1, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
                        <Typography variant="subtitle2">Địa chỉ mặc định</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>123 Nguyễn Trãi, Thanh Xuân, Hà Nội</Typography>
                        <Button variant="outlined" sx={{ width: 'fit-content' }}>Cập nhật địa chỉ</Button>
                      </Stack>
                    </>
                  )}
                </Stack>
              </Grid>
            </Grid>
          )}
        </Container>
      </Box>
    </>
  );
}
