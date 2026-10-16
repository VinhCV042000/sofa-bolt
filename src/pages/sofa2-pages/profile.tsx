import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';
import { Sofa2Section, Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';
import { useSofa2AdminRows, type AdminRow } from 'src/sections/sofa2-admin/sofa2-admin-store';
import { Sofa2CustomerPortalNav, SOFA2_PORTAL_CUSTOMER_ID, SOFA2_PORTAL_CUSTOMER_NAME } from 'src/sections/sofa2/sofa2-customer-portal';

// ----------------------------------------------------------------------

const metadata = { title: 'Hồ sơ cá nhân — LUXE Sofa' };

export default function Page() {
  const profileStore = useSofa2AdminRows('customer', 'profiles');
  const profileIndex = profileStore.rows.findIndex((row) => String(row.customerId) === SOFA2_PORTAL_CUSTOMER_ID);
  const profile = profileStore.rows[profileIndex] ?? {
    customerId: SOFA2_PORTAL_CUSTOMER_ID,
    name: SOFA2_PORTAL_CUSTOMER_NAME,
    phone: '',
    email: '',
    birthday: '',
    gender: '',
    address: '',
    city: '',
    status: 'Đã xác minh',
  };
  const [draft, setDraft] = useState<AdminRow | null>(null);
  const [toast, setToast] = useState('');
  const values = draft ?? profile;
  const setField = (key: string, value: string) =>
    setDraft((current) => ({ ...profile, ...(current ?? {}), [key]: value }));
  const saveProfile = () => {
    if (profileIndex < 0) profileStore.createRow({ ...profile, ...(draft ?? {}) });
    else profileStore.updateRow(profileIndex, { ...profile, ...(draft ?? {}) });
    setDraft(null);
    setToast('Đã lưu thông tin hồ sơ.');
  };

  return (
    <>
      <Helmet><title>{metadata.title}</title></Helmet>

      <Sofa2PageHero
        title="Hồ sơ cá nhân"
        subtitle="Cập nhật thông tin cá nhân, mật khẩu và tùy chọn tài khoản của bạn."
        image={SOFA2_PAGE_IMAGES.team}
        overline="Tài khoản"
      />

      <Sofa2Section>
        <Sofa2CustomerPortalNav active="/sofa2/profile" />
        <Grid container spacing={{ xs: 4, md: 5 }}>
          {/* Sidebar */}
          <Grid xs={12} md={3}>
            <Stack
              component={m.div}
              variants={varFade({ distance: 24 }).inUp}
              spacing={2}
              sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, textAlign: 'center' }}
            >
              <Avatar sx={{ width: 80, height: 80, mx: 'auto', bgcolor: 'primary.main', fontSize: 28 }}>NA</Avatar>
              <Box>
                <Typography variant="subtitle1">{String(values.name || SOFA2_PORTAL_CUSTOMER_NAME)}</Typography>
                <Typography variant="caption" sx={{ color: 'warning.main' }}>Thành viên Vàng</Typography>
              </Box>
              <Divider />
              <Stack spacing={1}>
                <Button component={RouterLink} href="/sofa2/account" size="small" variant="outlined" fullWidth startIcon={<Iconify icon="solar:user-bold-duotone" width={16} />}>Tài khoản</Button>
                <Button component={RouterLink} href="/sofa2/my-orders" size="small" variant="outlined" fullWidth startIcon={<Iconify icon="solar:bag-bold-duotone" width={16} />}>Đơn hàng</Button>
                <Button component={RouterLink} href="/sofa2/points" size="small" variant="outlined" fullWidth startIcon={<Iconify icon="solar:star-rings-bold-duotone" width={16} />}>Điểm tích lũy</Button>
                <Button component={RouterLink} href="/sofa2/vouchers" size="small" variant="outlined" fullWidth startIcon={<Iconify icon="solar:ticket-sale-bold-duotone" width={16} />}>Voucher</Button>
                <Button component={RouterLink} href="/sofa2/complaints" size="small" variant="outlined" fullWidth startIcon={<Iconify icon="solar:chat-round-dots-bold-duotone" width={16} />}>Khiếu nại</Button>
                <Button component={RouterLink} href="/sofa2/wishlist" size="small" variant="outlined" fullWidth startIcon={<Iconify icon="solar:heart-bold-duotone" width={16} />}>Yêu thích</Button>
                <Button component={RouterLink} href="/sofa2/addresses" size="small" variant="outlined" fullWidth startIcon={<Iconify icon="solar:map-point-bold-duotone" width={16} />}>Địa chỉ</Button>
                <Button component={RouterLink} href="/sofa2/transactions" size="small" variant="outlined" fullWidth startIcon={<Iconify icon="solar:card-send-bold-duotone" width={16} />}>Giao dịch</Button>
                <Button component={RouterLink} href="/sofa2/warranty" size="small" variant="outlined" fullWidth startIcon={<Iconify icon="solar:shield-check-bold-duotone" width={16} />}>Bảo hành</Button>
              </Stack>
            </Stack>
          </Grid>

          {/* Main content */}
          <Grid xs={12} md={9}>
            <Stack
              component={m.div}
              variants={varFade({ distance: 24 }).inUp}
              spacing={3}
              sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
            >
              <Typography variant="h5">Thông tin cá nhân</Typography>
              <Grid container spacing={2}>
                <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" value={String(values.name ?? '')} onChange={(e) => setField('name', e.target.value)} /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" value={String(values.phone ?? '')} onChange={(e) => setField('phone', e.target.value)} /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Email" type="email" value={String(values.email ?? '')} onChange={(e) => setField('email', e.target.value)} /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Ngày sinh" type="date" value={String(values.birthday ?? '')} onChange={(e) => setField('birthday', e.target.value)} InputLabelProps={{ shrink: true }} /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth select label="Giới tính" value={String(values.gender ?? '')} onChange={(e) => setField('gender', e.target.value)} SelectProps={{ native: true }}><option value="">Chọn giới tính</option><option>Nam</option><option>Nữ</option><option>Khác</option></TextField></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Tỉnh/thành" value={String(values.city ?? '')} onChange={(e) => setField('city', e.target.value)} /></Grid>
                <Grid xs={12}><TextField fullWidth label="Địa chỉ giao hàng" value={String(values.address ?? '')} onChange={(e) => setField('address', e.target.value)} /></Grid>
              </Grid>
              <Button variant="contained" sx={{ width: 'fit-content' }} onClick={saveProfile} startIcon={<Iconify icon="solar:diskette-bold-duotone" />}>Lưu thay đổi</Button>

              <Divider sx={{ my: 2 }} />

              <Typography variant="h5">Đổi mật khẩu</Typography>
              <Grid container spacing={2}>
                <Grid xs={12}><TextField fullWidth label="Mật khẩu hiện tại" type="password" /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Mật khẩu mới" type="password" /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Xác nhận mật khẩu mới" type="password" /></Grid>
              </Grid>
              <Button variant="outlined" sx={{ width: 'fit-content' }} startIcon={<Iconify icon="solar:lock-keyhole-bold-duotone" />}>Cập nhật mật khẩu</Button>

              <Divider sx={{ my: 2 }} />

              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography variant="subtitle2" sx={{ color: 'error.main' }}>Xoá tài khoản</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Xoá vĩnh viễn tài khoản và tất cả dữ liệu liên quan.</Typography>
                </Box>
                <Button variant="outlined" color="error" startIcon={<Iconify icon="solar:trash-bin-trash-bold-duotone" />}>Xoá tài khoản</Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Sofa2Section>
      <Snackbar open={!!toast} message={toast} autoHideDuration={2400} onClose={() => setToast('')} />
    </>
  );
}
