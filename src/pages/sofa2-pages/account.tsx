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
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { Sofa2Section, Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';
import { SOFA2_PRODUCTS, SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Tài khoản khách hàng' };

const ORDERS = [
  { id: '#LX001', date: '10/02/2025', item: 'Sofa Oslo 3 Chỗ', status: 'Đã giao', total: '14.500.000đ' },
  { id: '#LX002', date: '05/01/2025', item: 'Sofa Copenhagen', status: 'Hoàn tất', total: '11.900.000đ' },
];

const TABS = [
  { value: 'profile', label: 'Hồ sơ', icon: 'solar:user-bold-duotone' },
  { value: 'orders', label: 'Đơn hàng', icon: 'solar:bag-bold-duotone' },
  { value: 'wishlist', label: 'Yêu thích', icon: 'solar:heart-bold-duotone' },
  { value: 'addresses', label: 'Địa chỉ', icon: 'solar:map-point-bold-duotone' },
  { value: 'warranty', label: 'Phiếu bảo hành', icon: 'solar:shield-check-bold-duotone' },
];

export default function Page() {
  const [tab, setTab] = useState('profile');
  const [authTab, setAuthTab] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa2PageHero
        title="Tài khoản khách hàng"
        subtitle="Quản lý hồ sơ, đơn hàng, danh sách yêu thích và phiếu bảo hành của bạn tại LUXE Sofa."
        image={SOFA2_PAGE_IMAGES.team}
        overline="Tài khoản"
      />

      <Sofa2Section>
        {!isLoggedIn ? (
          <Stack
            component={m.div}
            variants={varFade({ distance: 24 }).inUp}
            spacing={3}
            sx={{ maxWidth: 480, mx: 'auto', p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
          >
            <Tabs value={authTab} onChange={(_, v) => setAuthTab(v)} variant="fullWidth">
              <Tab value="login" label="Đăng nhập" />
              <Tab value="register" label="Đăng ký" />
            </Tabs>
            <Grid container spacing={2}>
              {authTab === 'register' && <Grid xs={12}><TextField fullWidth label="Họ và tên" /></Grid>}
              <Grid xs={12}><TextField fullWidth label="Email" type="email" /></Grid>
              <Grid xs={12}><TextField fullWidth label="Mật khẩu" type="password" /></Grid>
            </Grid>
            <Button variant="contained" size="large" fullWidth startIcon={<Iconify icon="solar:user-bold-duotone" />} onClick={() => setIsLoggedIn(true)}>
              {authTab === 'login' ? 'Đăng nhập' : 'Đăng ký'}
            </Button>
          </Stack>
        ) : (
          <Grid container spacing={{ xs: 4, md: 5 }}>
            <Grid xs={12} md={3}>
              <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar sx={{ bgcolor: 'primary.main' }}>NA</Avatar>
                  <Stack>
                    <Typography variant="subtitle1">Nguyễn Minh Anh</Typography>
                    <Typography variant="caption" sx={{ color: 'warning.main' }}>Thành viên Vàng</Typography>
                  </Stack>
                </Stack>
                <Divider />
                <Tabs value={tab} onChange={(_, v) => setTab(v)} orientation="vertical" sx={{ '& .MuiTabs-indicator': { left: 0 } }}>
                  {TABS.map((t) => (
                    <Tab key={t.value} value={t.value} icon={<Iconify icon={t.icon} width={20} />} iconPosition="start" label={t.label} sx={{ alignItems: 'center', justifyContent: 'flex-start', minHeight: 48 }} />
                  ))}
                </Tabs>
              </Stack>
            </Grid>

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

                {tab === 'wishlist' && (
                  <>
                    <Typography variant="h5">Danh sách yêu thích</Typography>
                    <Grid container spacing={2}>
                      {SOFA2_PRODUCTS.slice(0, 2).map((p) => (
                        <Grid key={p.id} xs={12} sm={6}>
                          <Stack direction="row" spacing={2} sx={{ p: 2, borderRadius: 1, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
                            <Box component="img" src={p.image} sx={{ width: 64, height: 64, borderRadius: 1, objectFit: 'cover' }} />
                            <Stack>
                              <Typography variant="subtitle2">{p.name}</Typography>
                              <Typography variant="body2" sx={{ color: 'primary.main' }}>{p.price.toLocaleString('vi-VN')}đ</Typography>
                            </Stack>
                          </Stack>
                        </Grid>
                      ))}
                    </Grid>
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

                {tab === 'warranty' && (
                  <>
                    <Typography variant="h5">Phiếu bảo hành</Typography>
                    {ORDERS.map((o) => (
                      <Stack key={o.id} direction="row" spacing={2} alignItems="center" sx={{ p: 2, borderRadius: 1, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
                        <Iconify icon="solar:shield-check-bold-duotone" width={32} sx={{ color: 'success.main' }} />
                        <Stack>
                          <Typography variant="subtitle2">{o.item}</Typography>
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>Bảo hành 10 năm · Còn hiệu lực đến 2035</Typography>
                        </Stack>
                      </Stack>
                    ))}
                  </>
                )}
              </Stack>
            </Grid>
          </Grid>
        )}
      </Sofa2Section>
    </>
  );
}
