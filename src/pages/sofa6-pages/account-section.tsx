import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA6_COLORS } from 'src/sections/sofa6/sofa6-data';
import { Sofa6Section, Sofa6PageHero } from 'src/sections/sofa6-pages/sofa6-page-hero';
import { SOFA6_PRODUCTS, formatSofa6Price, SOFA6_PAGE_IMAGES } from 'src/sections/sofa6-pages/sofa6-pages-data';

// ----------------------------------------------------------------------

const hexToRgb = (hex: string) => `rgb(${hex.slice(1).match(/.{2}/g)?.map((h) => parseInt(h, 16)).join(',')})`;

const TITLES: Record<string, string> = {
  login: 'Đăng nhập',
  register: 'Đăng ký tài khoản',
  forgot: 'Quên mật khẩu',
  profile: 'Hồ sơ cá nhân',
  orders: 'Đơn hàng của tôi',
  addresses: 'Địa chỉ giao hàng',
  wishlist: 'Sản phẩm yêu thích',
  history: 'Lịch sử giao dịch',
  warranty: 'Phiếu bảo hành',
};

// ----------------------------------------------------------------------

export default function Page() {
  const { section } = useParams();
  const title = TITLES[section ?? ''] ?? 'Tài khoản khách hàng';

  if (section && !TITLES[section]) {
    return (
      <>
        <Helmet><title>Tài khoản · Sofa Earth</title></Helmet>
        <Sofa6Section>
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 10 }}>
            <Iconify icon="solar:file-remove-bold-duotone" width={64} sx={{ color: 'text.disabled' }} />
            <Typography variant="h4">Mục không tồn tại</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Mục tài khoản bạn tìm không tồn tại.</Typography>
            <Button component={RouterLink} href="/sofa6/account" variant="contained" sx={{ bgcolor: SOFA6_COLORS.terracotta, '&:hover': { bgcolor: SOFA6_COLORS.clay } }}>Về tài khoản</Button>
          </Stack>
        </Sofa6Section>
      </>
    );
  }

  return (
    <>
      <Helmet><title>{`${title} · Sofa Earth`}</title></Helmet>

      <Sofa6PageHero
        overline="Tài khoản"
        title={title}
        subtitle="Quản lý tài khoản khách hàng Sofa Earth."
        image={SOFA6_PAGE_IMAGES.cta}
      />

      <Sofa6Section>
        <Stack maxWidth={680} mx="auto" component={MotionViewport}>
          {section === 'login' && (
            <AuthCard title="Đăng nhập" subtitle="Chào mừng bạn quay lại Sofa Earth.">
              <Grid container spacing={2}>
                <Grid xs={12}><TextField fullWidth label="Email" type="email" required /></Grid>
                <Grid xs={12}><TextField fullWidth label="Mật khẩu" type="password" required /></Grid>
              </Grid>
              <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap" useFlexGap spacing={1}>
                <Button variant="contained" size="large" startIcon={<Iconify icon="solar:user-bold-duotone" />} sx={{ bgcolor: SOFA6_COLORS.terracotta, '&:hover': { bgcolor: SOFA6_COLORS.clay } }}>Đăng nhập</Button>
                <Button component={RouterLink} href="/sofa6/account/forgot" variant="text">Quên mật khẩu?</Button>
              </Stack>
              <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                Chưa có tài khoản? <Button component={RouterLink} href="/sofa6/account/register" sx={{ color: SOFA6_COLORS.terracotta }}>Đăng ký</Button>
              </Typography>
            </AuthCard>
          )}

          {section === 'register' && (
            <AuthCard title="Đăng ký tài khoản" subtitle="Tạo tài khoản để mua sắm và theo dõi đơn hàng.">
              <Grid container spacing={2}>
                <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" required /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" /></Grid>
                <Grid xs={12}><TextField fullWidth label="Email" type="email" required /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Mật khẩu" type="password" required /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Nhập lại mật khẩu" type="password" required /></Grid>
              </Grid>
              <Button variant="contained" size="large" fullWidth startIcon={<Iconify icon="solar:user-plus-bold-duotone" />} sx={{ bgcolor: SOFA6_COLORS.terracotta, '&:hover': { bgcolor: SOFA6_COLORS.clay } }}>Đăng ký</Button>
              <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                Đã có tài khoản? <Button component={RouterLink} href="/sofa6/account/login" sx={{ color: SOFA6_COLORS.terracotta }}>Đăng nhập</Button>
              </Typography>
            </AuthCard>
          )}

          {section === 'forgot' && (
            <AuthCard title="Quên mật khẩu" subtitle="Nhập email để nhận liên kết đặt lại mật khẩu.">
              <Grid container spacing={2}>
                <Grid xs={12}><TextField fullWidth label="Email đăng ký" type="email" required /></Grid>
              </Grid>
              <Button variant="contained" size="large" fullWidth startIcon={<Iconify icon="solar:password-bold-duotone" />} sx={{ bgcolor: SOFA6_COLORS.terracotta, '&:hover': { bgcolor: SOFA6_COLORS.clay } }}>Gửi liên kết</Button>
              <Button component={RouterLink} href="/sofa6/account/login" variant="text" fullWidth>Quay lại đăng nhập</Button>
            </AuthCard>
          )}

          {section === 'profile' && (
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ width: 56, height: 56, bgcolor: SOFA6_COLORS.terracotta, fontSize: 20 }}>NA</Avatar>
                <Stack>
                  <Typography variant="h6">Nguyễn Minh Anh</Typography>
                  <Typography variant="caption" sx={{ color: SOFA6_COLORS.sage }}>Thành viên Eco</Typography>
                </Stack>
              </Stack>
              <Grid container spacing={2}>
                <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" defaultValue="Nguyễn Minh Anh" /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" defaultValue="0901 234 567" /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Email" defaultValue="anh.nguyen@email.com" /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Ngày sinh" type="date" defaultValue="1990-05-12" InputLabelProps={{ shrink: true }} /></Grid>
              </Grid>
              <Button variant="contained" sx={{ width: 'fit-content', bgcolor: SOFA6_COLORS.terracotta, '&:hover': { bgcolor: SOFA6_COLORS.clay } }}>Lưu thay đổi</Button>
            </Stack>
          )}

          {section === 'orders' && (
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
              <Typography variant="h5">Lịch sử đơn hàng</Typography>
              {[
                { id: '#SE001', date: '10/02/2025', item: 'Sofa Terra Lounge', status: 'Đã giao', total: formatSofa6Price(18900000) },
                { id: '#SE002', date: '05/01/2025', item: 'Sofa Sage Comfort', status: 'Đang giao', total: formatSofa6Price(15500000) },
              ].map((o) => (
                <Stack key={o.id} direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="space-between" sx={{ p: 2, borderRadius: 1, bgcolor: varAlpha(hexToRgb('#9e9e9e'), 0.04) }}>
                  <Stack>
                    <Typography variant="subtitle2">{o.id} · {o.date}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{o.item}</Typography>
                  </Stack>
                  <Stack alignItems="flex-end" spacing={0.5}>
                    <Typography variant="subtitle2" sx={{ color: SOFA6_COLORS.terracotta }}>{o.total}</Typography>
                    <Typography variant="caption" sx={{ color: o.status === 'Đã giao' ? SOFA6_COLORS.sage : 'warning.main' }}>{o.status}</Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          )}

          {section === 'addresses' && (
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
              <Typography variant="h5">Địa chỉ giao hàng</Typography>
              <Stack spacing={2} sx={{ p: 3, borderRadius: 1.5, bgcolor: varAlpha(hexToRgb(SOFA6_COLORS.terracottaLight), 0.06) }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Chip label="Mặc định" size="small" sx={{ bgcolor: SOFA6_COLORS.terracotta, color: 'common.white' }} />
                  <Typography variant="subtitle2">Nhà riêng</Typography>
                </Stack>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Nguyễn Minh Anh · 0901 234 567</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>123 Nguyễn Trãi, Thanh Xuân, Hà Nội</Typography>
                <Stack direction="row" spacing={1}>
                  <Button variant="outlined" size="small">Chỉnh sửa</Button>
                  <Button variant="text" size="small" sx={{ color: 'error.main' }}>Xóa</Button>
                </Stack>
              </Stack>
              <Button variant="outlined" startIcon={<Iconify icon="solar:add-circle-bold-duotone" />} sx={{ width: 'fit-content' }}>Thêm địa chỉ mới</Button>
            </Stack>
          )}

          {section === 'wishlist' && (
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="h5">Sản phẩm yêu thích</Typography>
              <Grid container spacing={3}>
                {SOFA6_PRODUCTS.slice(0, 4).map((product) => (
                  <Grid key={product.id} xs={12} sm={6} md={3}>
                    <Stack spacing={2} sx={{ height: 1, borderRadius: 2, bgcolor: 'background.paper', overflow: 'hidden', boxShadow: (t) => t.customShadows.card, transition: (t) => t.transitions.create(['transform'], { duration: 300 }), '&:hover': { transform: 'translateY(-6px)' } }}>
                      <Box component="img" src={product.image} alt={product.name} sx={{ width: 1, aspectRatio: '1/1', objectFit: 'cover' }} />
                      <Stack spacing={1} sx={{ p: 2 }}>
                        <Typography variant="subtitle2" sx={{ lineHeight: 1.3 }}>{product.name}</Typography>
                        <Stack direction="row" spacing={0.5} alignItems="center">
                          <Rating value={product.rating} precision={0.1} size="small" readOnly />
                          <Typography variant="caption" sx={{ color: 'text.disabled' }}>({product.reviews})</Typography>
                        </Stack>
                        <Typography variant="subtitle2" sx={{ color: SOFA6_COLORS.terracotta }}>{formatSofa6Price(product.price)}</Typography>
                        <Button size="small" variant="contained" fullWidth sx={{ bgcolor: SOFA6_COLORS.terracotta, '&:hover': { bgcolor: SOFA6_COLORS.clay } }}>Thêm vào giỏ</Button>
                      </Stack>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          )}

          {section === 'history' && (
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
              <Typography variant="h5">Lịch sử giao dịch</Typography>
              {[
                { id: 'TXN001', date: '10/02/2025', desc: 'Thanh toán Sofa Terra Lounge', amount: '-18.900.000đ' },
                { id: 'TXN002', date: '12/01/2025', desc: 'Dịch vụ vệ sinh sofa', amount: '-850.000đ' },
                { id: 'TXN003', date: '05/01/2025', desc: 'Hoàn tiền đổi trả', amount: '+1.500.000đ' },
              ].map((t) => (
                <Stack key={t.id} direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="space-between" sx={{ p: 2, borderRadius: 1, bgcolor: varAlpha(hexToRgb('#9e9e9e'), 0.04) }}>
                  <Stack>
                    <Typography variant="subtitle2">{t.id} · {t.date}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{t.desc}</Typography>
                  </Stack>
                  <Typography variant="subtitle2" sx={{ color: t.amount.startsWith('+') ? SOFA6_COLORS.sage : SOFA6_COLORS.terracotta }}>{t.amount}</Typography>
                </Stack>
              ))}
            </Stack>
          )}

          {section === 'warranty' && (
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
              <Typography variant="h5">Phiếu bảo hành</Typography>
              {[
                { code: 'BH-2025-001', product: 'Sofa Terra Lounge', date: '10/02/2025', expiry: '10/02/2030' },
                { code: 'BH-2024-008', product: 'Sofa Sage Comfort', date: '15/06/2024', expiry: '15/06/2029' },
              ].map((w) => (
                <Stack key={w.code} spacing={1} sx={{ p: 2.5, borderRadius: 1.5, bgcolor: varAlpha(hexToRgb(SOFA6_COLORS.sageLight), 0.08) }}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Iconify icon="solar:shield-check-bold-duotone" width={22} sx={{ color: SOFA6_COLORS.sage }} />
                    <Typography variant="subtitle2" sx={{ color: SOFA6_COLORS.sage }}>{w.code}</Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{w.product}</Typography>
                  <Typography variant="caption" sx={{ color: 'text.disabled' }}>Ngày mua: {w.date} · Hết hạn: {w.expiry}</Typography>
                </Stack>
              ))}
            </Stack>
          )}

          {/* Back link */}
          <Stack direction="row" justifyContent="center" sx={{ mt: 4 }}>
            <Button component={RouterLink} href="/sofa6/account" variant="text" startIcon={<Iconify icon="eva:arrow-back-fill" />}>Về trang tài khoản</Button>
          </Stack>
        </Stack>
      </Sofa6Section>
    </>
  );
}

// ----------------------------------------------------------------------

function AuthCard({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
      <Stack spacing={1}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>{subtitle}</Typography>
      </Stack>
      {children}
    </Stack>
  );
}
