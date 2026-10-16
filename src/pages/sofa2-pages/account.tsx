import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { RouterLink } from 'src/routes/components';

import { type AdminRow, useSofa2AdminRows } from 'src/sections/sofa2-admin/sofa2-admin-store';
import { Sofa2Section, Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';
import { SOFA2_PRODUCTS, SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';
import { belongsToSofa2Customer, formatSofa2Date, Sofa2CustomerPortalNav, SOFA2_PORTAL_CUSTOMER_ID, SOFA2_PORTAL_CUSTOMER_NAME } from 'src/sections/sofa2/sofa2-customer-portal';

// ----------------------------------------------------------------------

const metadata = { title: 'Tài khoản khách hàng' };



const TABS = [
  { value: 'dashboard', label: 'Tổng quan', icon: 'solar:widget-2-bold-duotone' },
  { value: 'profile', label: 'Hồ sơ', icon: 'solar:user-bold-duotone' },
  { value: 'orders', label: 'Đơn hàng', icon: 'solar:bag-bold-duotone' },
  { value: 'warranty', label: 'Phiếu bảo hành', icon: 'solar:shield-check-bold-duotone' },
  { value: 'points', label: 'Điểm tích lũy', icon: 'solar:star-rings-bold-duotone' },
  { value: 'vouchers', label: 'Voucher', icon: 'solar:ticket-sale-bold-duotone' },
  { value: 'complaints', label: 'Khiếu nại', icon: 'solar:chat-round-dots-bold-duotone' },
  { value: 'wishlist', label: 'Yêu thích', icon: 'solar:heart-bold-duotone' },
  { value: 'addresses', label: 'Địa chỉ', icon: 'solar:map-point-bold-duotone' },
];

export default function Page() {
  const [tab, setTab] = useState('dashboard');
  const profileStore = useSofa2AdminRows('customer', 'profiles');
  const orderStore = useSofa2AdminRows('customer', 'customer-orders');
  const warrantyStore = useSofa2AdminRows('customer', 'warranties');
  const pointsStore = useSofa2AdminRows('customer', 'points');
  const voucherStore = useSofa2AdminRows('customer', 'vouchers');
  const complaintStore = useSofa2AdminRows('customer', 'complaints');
  const profileIndex = profileStore.rows.findIndex((row) => String(row.customerId) === SOFA2_PORTAL_CUSTOMER_ID);
  const profile = profileStore.rows[profileIndex] ?? { customerId: SOFA2_PORTAL_CUSTOMER_ID, name: SOFA2_PORTAL_CUSTOMER_NAME, tier: 'Vàng' };
  const [profileDraft, setProfileDraft] = useState<AdminRow | null>(null);
  const [toast, setToast] = useState('');
  const profileValues = { ...profile, ...(profileDraft ?? {}) };
  const ORDERS = orderStore.rows.filter((row) => belongsToSofa2Customer(row)).map((row) => ({
    id: String(row.code),
    date: formatSofa2Date(row.orderDate),
    item: String(row.product),
    status: String(row.status),
    total: `${Number(row.total).toLocaleString('vi-VN')}đ`,
  }));
  const WARRANTIES = warrantyStore.rows.filter((row) => belongsToSofa2Customer(row));
  const POINTS = pointsStore.rows.filter((row) => belongsToSofa2Customer(row));
  const VOUCHERS = voucherStore.rows.filter((row) =>
    ['Tất cả thành viên', SOFA2_PORTAL_CUSTOMER_ID].includes(String(row.customerId)) &&
    ['Đang phát hành', 'Đã nhận'].includes(String(row.status))
  );
  const COMPLAINTS = complaintStore.rows.filter((row) => belongsToSofa2Customer(row));
  const pointBalance = POINTS.filter((row) => String(row.status) !== 'Đã huỷ').reduce((sum, row) => sum + Number(row.points || 0), 0);
  const [authTab, setAuthTab] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const saveProfile = () => {
    if (profileIndex < 0) profileStore.createRow(profileValues);
    else profileStore.updateRow(profileIndex, profileValues);
    setProfileDraft(null);
    setToast('Đã lưu thông tin hồ sơ.');
  };

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
        <Sofa2CustomerPortalNav active="/sofa2/account" />
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
                    <Typography variant="subtitle1">{String(profileValues.name || SOFA2_PORTAL_CUSTOMER_NAME)}</Typography>
                    <Typography variant="caption" sx={{ color: 'warning.main' }}>Thành viên {String(profileValues.tier || 'Vàng')}</Typography>
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
                {tab === 'dashboard' && (
                  <>
                    <Typography variant="h5">Xin chào, {String(profileValues.name || SOFA2_PORTAL_CUSTOMER_NAME)}</Typography>
                    <Typography variant="body2" color="text.secondary">Tổng quan đơn hàng, bảo hành, điểm thưởng và yêu cầu hỗ trợ của bạn.</Typography>
                    <Grid container spacing={2}>
                      {[
                        { label: 'Đơn hàng', value: ORDERS.length, icon: 'solar:bag-4-bold-duotone' },
                        { label: 'Phiếu bảo hành', value: WARRANTIES.length, icon: 'solar:shield-check-bold-duotone' },
                        { label: 'Điểm khả dụng', value: pointBalance.toLocaleString('vi-VN'), icon: 'solar:star-rings-bold-duotone' },
                        { label: 'Khiếu nại đang mở', value: COMPLAINTS.filter((row) => !['Đã giải quyết', 'Đóng'].includes(String(row.status))).length, icon: 'solar:chat-round-dots-bold-duotone' },
                      ].map((item) => (
                        <Grid key={item.label} xs={6} md={3}>
                          <Card variant="outlined" sx={{ p: 2, height: 1 }}>
                            <Stack spacing={1}>
                              <Iconify icon={item.icon} width={24} sx={{ color: 'primary.main' }} />
                              <Typography variant="caption" color="text.secondary">{item.label}</Typography>
                              <Typography variant="h5">{item.value}</Typography>
                            </Stack>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                    <Stack direction="row" flexWrap="wrap" gap={1} useFlexGap>
                      <Button component={RouterLink} href="/sofa2/my-orders" variant="outlined">Theo dõi đơn hàng</Button>
                      <Button component={RouterLink} href="/sofa2/warranty" variant="outlined">Quản lý bảo hành</Button>
                      <Button component={RouterLink} href="/sofa2/vouchers" variant="outlined">Xem voucher</Button>
                      <Button component={RouterLink} href="/sofa2/complaints" variant="outlined">Gửi yêu cầu hỗ trợ</Button>
                    </Stack>
                  </>
                )}
                {tab === 'profile' && (
                  <>
                    <Typography variant="h5">Hồ sơ cá nhân</Typography>
                    <Grid container spacing={2}>
                      <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" value={String(profileValues.name ?? '')} onChange={(e) => setProfileDraft((prev) => ({ ...profile, ...(prev ?? {}), name: e.target.value }))} /></Grid>
                      <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" value={String(profileValues.phone ?? '')} onChange={(e) => setProfileDraft((prev) => ({ ...profile, ...(prev ?? {}), phone: e.target.value }))} /></Grid>
                      <Grid xs={12} sm={6}><TextField fullWidth label="Email" type="email" value={String(profileValues.email ?? '')} onChange={(e) => setProfileDraft((prev) => ({ ...profile, ...(prev ?? {}), email: e.target.value }))} /></Grid>
                      <Grid xs={12} sm={6}><TextField fullWidth label="Ngày sinh" type="date" value={String(profileValues.birthday ?? '')} onChange={(e) => setProfileDraft((prev) => ({ ...profile, ...(prev ?? {}), birthday: e.target.value }))} InputLabelProps={{ shrink: true }} /></Grid>
                      <Grid xs={12}><TextField fullWidth label="Địa chỉ giao hàng" value={String(profileValues.address ?? '')} onChange={(e) => setProfileDraft((prev) => ({ ...profile, ...(prev ?? {}), address: e.target.value }))} /></Grid>
                    </Grid>
                    <Button variant="contained" sx={{ width: 'fit-content' }} onClick={saveProfile}>Lưu thay đổi</Button>
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
                    {!ORDERS.length && <Typography color="text.secondary">Chưa có đơn hàng.</Typography>}
                    <Button component={RouterLink} href="/sofa2/my-orders" sx={{ width: 'fit-content' }}>Xem tất cả đơn hàng</Button>
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
                    {WARRANTIES.map((w) => (
                      <Stack key={String(w.code)} direction="row" spacing={2} alignItems="center" sx={{ p: 2, borderRadius: 1, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
                        <Iconify icon="solar:shield-check-bold-duotone" width={32} sx={{ color: 'success.main' }} />
                        <Stack>
                          <Typography variant="subtitle2">{w.product} · {w.code}</Typography>
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>{w.status} · Hết hạn {formatSofa2Date(w.expiry)}</Typography>
                        </Stack>
                      </Stack>
                    ))}
                    {!WARRANTIES.length && <Typography color="text.secondary">Chưa có phiếu bảo hành.</Typography>}
                    <Button component={RouterLink} href="/sofa2/warranty" sx={{ width: 'fit-content' }}>Xem chi tiết bảo hành</Button>
                  </>
                )}
                {tab === 'points' && (
                  <>
                    <Typography variant="h5">Điểm tích lũy</Typography>
                    <Typography variant="h3" color="primary.main">{pointBalance.toLocaleString('vi-VN')} điểm</Typography>
                    {POINTS.slice(0, 4).map((row, index) => (
                      <Stack key={`${row.date}-${index}`} direction="row" justifyContent="space-between">
                        <Typography variant="body2">{row.reason} · {formatSofa2Date(row.date)}</Typography>
                        <Typography color={Number(row.points) < 0 ? 'text.secondary' : 'success.main'}>{Number(row.points) > 0 ? '+' : ''}{Number(row.points).toLocaleString('vi-VN')}</Typography>
                      </Stack>
                    ))}
                    <Button component={RouterLink} href="/sofa2/points" sx={{ width: 'fit-content' }}>Xem lịch sử điểm</Button>
                  </>
                )}
                {tab === 'vouchers' && (
                  <>
                    <Typography variant="h5">Voucher của bạn</Typography>
                    {VOUCHERS.slice(0, 4).map((row, index) => (
                      <Stack key={`${row.code}-${index}`} direction="row" justifyContent="space-between">
                        <Typography variant="body2">{row.code} · {row.campaign}</Typography>
                        <Typography variant="subtitle2">{row.value}</Typography>
                      </Stack>
                    ))}
                    {!VOUCHERS.length && <Typography color="text.secondary">Chưa có voucher khả dụng.</Typography>}
                    <Button component={RouterLink} href="/sofa2/vouchers" sx={{ width: 'fit-content' }}>Mở ví voucher</Button>
                  </>
                )}
                {tab === 'complaints' && (
                  <>
                    <Typography variant="h5">Khiếu nại & hỗ trợ</Typography>
                    {COMPLAINTS.slice(0, 4).map((row) => (
                      <Stack key={String(row.code)} direction="row" justifyContent="space-between" spacing={2}>
                        <Typography variant="body2">{row.code} · {row.subject || row.content}</Typography>
                        <Typography variant="caption" color="text.secondary">{row.status}</Typography>
                      </Stack>
                    ))}
                    {!COMPLAINTS.length && <Typography color="text.secondary">Chưa có yêu cầu hỗ trợ.</Typography>}
                    <Button component={RouterLink} href="/sofa2/complaints" sx={{ width: 'fit-content' }}>Theo dõi / tạo yêu cầu</Button>
                  </>
                )}
              </Stack>
            </Grid>
          </Grid>
        )}
      </Sofa2Section>
      <Snackbar open={!!toast} message={toast} autoHideDuration={2400} onClose={() => setToast('')} />
    </>
  );
}
