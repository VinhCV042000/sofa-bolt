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

import { SOFA7_COLORS } from 'src/sections/sofa7/sofa7-data';
import { Sofa7PageHero, Sofa7Section } from 'src/sections/sofa7-pages/sofa7-page-hero';
import { SOFA7_PAGE_PRODUCTS, SOFA7_PAGE_IMAGES, formatSofa7Price } from 'src/sections/sofa7-pages/sofa7-pages-data';

// ----------------------------------------------------------------------

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
        <Helmet><title>Tài khoản · Sofa7</title></Helmet>
        <Sofa7PageHero overline="Tài khoản" title={<>Mục <span>không tồn tại</span></>} image={SOFA7_PAGE_IMAGES.cta} />
        <Sofa7Section>
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 10 }}>
            <Iconify icon="solar:file-remove-bold-duotone" width={64} sx={{ color: 'text.disabled' }} />
            <Typography variant="h4" sx={{ textTransform: 'uppercase' }}>Mục không tồn tại</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Mục tài khoản bạn tìm không tồn tại.</Typography>
            <Button component={RouterLink} href="/sofa7/account" variant="contained" sx={{ borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, '&:hover': { bgcolor: SOFA7_COLORS.cyan } }}>Về tài khoản</Button>
          </Stack>
        </Sofa7Section>
      </>
    );
  }

  return (
    <>
      <Helmet><title>{`${title} · Sofa7`}</title></Helmet>

      <Sofa7PageHero
        overline="Tài khoản"
        title={title}
        subtitle="Quản lý tài khoản khách hàng Sofa7."
        image={SOFA7_PAGE_IMAGES.cta}
      />

      <Sofa7Section>
        <Stack maxWidth={680} mx="auto" component={MotionViewport}>
          {section === 'login' && (
            <AuthCard title="Đăng nhập" subtitle="Chào mừng bạn quay lại Sofa7.">
              <Grid container spacing={2}>
                <Grid xs={12}><TextField fullWidth label="Email" type="email" required /></Grid>
                <Grid xs={12}><TextField fullWidth label="Mật khẩu" type="password" required /></Grid>
              </Grid>
              <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap" useFlexGap spacing={1}>
                <Button variant="contained" size="large" startIcon={<Iconify icon="solar:user-bold-duotone" />} sx={{ borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, '&:hover': { bgcolor: SOFA7_COLORS.cyan } }}>Đăng nhập</Button>
                <Button component={RouterLink} href="/sofa7/account/forgot" variant="text">Quên mật khẩu?</Button>
              </Stack>
              <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                Chưa có tài khoản? <Button component={RouterLink} href="/sofa7/account/register" sx={{ color: SOFA7_COLORS.electric }}>Đăng ký</Button>
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
              <Button variant="contained" size="large" fullWidth startIcon={<Iconify icon="solar:user-plus-bold-duotone" />} sx={{ borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, '&:hover': { bgcolor: SOFA7_COLORS.cyan } }}>Đăng ký</Button>
              <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                Đã có tài khoản? <Button component={RouterLink} href="/sofa7/account/login" sx={{ color: SOFA7_COLORS.electric }}>Đăng nhập</Button>
              </Typography>
            </AuthCard>
          )}

          {section === 'forgot' && (
            <AuthCard title="Quên mật khẩu" subtitle="Nhập email để nhận liên kết đặt lại mật khẩu.">
              <Grid container spacing={2}>
                <Grid xs={12}><TextField fullWidth label="Email đăng ký" type="email" required /></Grid>
              </Grid>
              <Button variant="contained" size="large" fullWidth startIcon={<Iconify icon="solar:password-bold-duotone" />} sx={{ borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, '&:hover': { bgcolor: SOFA7_COLORS.cyan } }}>Gửi liên kết</Button>
              <Button component={RouterLink} href="/sofa7/account/login" variant="text" fullWidth>Quay lại đăng nhập</Button>
            </AuthCard>
          )}

          {section === 'profile' && (
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: { xs: 3, md: 5 }, borderRadius: 0, bgcolor: 'background.paper', border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}`, boxShadow: (t) => t.customShadows.card }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ width: 56, height: 56, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, fontSize: 20, borderRadius: 0 }}>NA</Avatar>
                <Stack>
                  <Typography variant="h6">Nguyễn Minh Anh</Typography>
                  <Typography variant="caption" sx={{ color: SOFA7_COLORS.cyan, textTransform: 'uppercase' }}>Thành viên Urban</Typography>
                </Stack>
              </Stack>
              <Grid container spacing={2}>
                <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" defaultValue="Nguyễn Minh Anh" /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" defaultValue="0901 234 567" /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Email" defaultValue="anh.nguyen@email.com" /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Ngày sinh" type="date" defaultValue="1990-05-12" InputLabelProps={{ shrink: true }} /></Grid>
              </Grid>
              <Button variant="contained" sx={{ width: 'fit-content', borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, '&:hover': { bgcolor: SOFA7_COLORS.cyan } }}>Lưu thay đổi</Button>
            </Stack>
          )}

          {section === 'orders' && (
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: { xs: 3, md: 5 }, borderRadius: 0, bgcolor: 'background.paper', border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}`, boxShadow: (t) => t.customShadows.card }}>
              <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>Lịch sử đơn hàng</Typography>
              {[
                { id: '#SF7001', date: '10/02/2025', item: 'Sofa Brick Leather', status: 'Đã giao', total: formatSofa7Price(22500000) },
                { id: '#SF7002', date: '05/01/2025', item: 'Sofa Neon Orange', status: 'Đang giao', total: formatSofa7Price(16500000) },
              ].map((o) => (
                <Stack key={o.id} direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="space-between" sx={{ p: 2, borderRadius: 0, bgcolor: varAlpha(SOFA7_COLORS.concrete, 0.04) }}>
                  <Stack>
                    <Typography variant="subtitle2">{o.id} · {o.date}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{o.item}</Typography>
                  </Stack>
                  <Stack alignItems="flex-end" spacing={0.5}>
                    <Typography variant="subtitle2" sx={{ color: SOFA7_COLORS.electric }}>{o.total}</Typography>
                    <Typography variant="caption" sx={{ color: o.status === 'Đã giao' ? SOFA7_COLORS.cyan : 'warning.main' }}>{o.status}</Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          )}

          {section === 'addresses' && (
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: { xs: 3, md: 5 }, borderRadius: 0, bgcolor: 'background.paper', border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}`, boxShadow: (t) => t.customShadows.card }}>
              <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>Địa chỉ giao hàng</Typography>
              <Stack spacing={2} sx={{ p: 3, borderRadius: 0, bgcolor: varAlpha(SOFA7_COLORS.electric, 0.06) }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Chip label="Mặc định" size="small" sx={{ borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, fontWeight: 'fontWeightBold' }} />
                  <Typography variant="subtitle2">Loft District 7</Typography>
                </Stack>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Nguyễn Minh Anh · 0901 234 567</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>123 Nguyễn Trãi, Thanh Xuân, Hà Nội</Typography>
                <Stack direction="row" spacing={1}>
                  <Button variant="outlined" size="small" sx={{ borderRadius: 0 }}>Chỉnh sửa</Button>
                  <Button variant="text" size="small" sx={{ borderRadius: 0, color: 'error.main' }}>Xóa</Button>
                </Stack>
              </Stack>
              <Button variant="outlined" startIcon={<Iconify icon="solar:add-circle-bold-duotone" />} sx={{ width: 'fit-content', borderRadius: 0 }}>Thêm địa chỉ mới</Button>
            </Stack>
          )}

          {section === 'wishlist' && (
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>Sản phẩm yêu thích</Typography>
              <Grid container spacing={3}>
                {SOFA7_PAGE_PRODUCTS.slice(0, 4).map((product) => (
                  <Grid key={product.id} xs={12} sm={6} md={3}>
                    <Stack spacing={2} sx={{ height: 1, borderRadius: 0, bgcolor: 'background.paper', overflow: 'hidden', border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}`, boxShadow: (t) => t.customShadows.card, transition: (t) => t.transitions.create(['transform'], { duration: 300 }), '&:hover': { transform: 'translateY(-6px)' } }}>
                      <Box component="img" src={product.image} alt={product.name} sx={{ width: 1, aspectRatio: '1/1', objectFit: 'cover' }} />
                      <Stack spacing={1} sx={{ p: 2 }}>
                        <Typography variant="subtitle2" sx={{ lineHeight: 1.3 }}>{product.name}</Typography>
                        <Stack direction="row" spacing={0.5} alignItems="center">
                          <Rating value={product.rating} precision={0.1} size="small" readOnly />
                          <Typography variant="caption" sx={{ color: 'text.disabled' }}>({product.reviews})</Typography>
                        </Stack>
                        <Typography variant="subtitle2" sx={{ color: SOFA7_COLORS.electric }}>{formatSofa7Price(product.price)}</Typography>
                        <Button size="small" variant="contained" fullWidth sx={{ borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, '&:hover': { bgcolor: SOFA7_COLORS.cyan } }}>Thêm vào giỏ</Button>
                      </Stack>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          )}

          {section === 'history' && (
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: { xs: 3, md: 5 }, borderRadius: 0, bgcolor: 'background.paper', border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}`, boxShadow: (t) => t.customShadows.card }}>
              <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>Lịch sử giao dịch</Typography>
              {[
                { id: 'TXN001', date: '10/02/2025', desc: 'Thanh toán Sofa Brick Leather', amount: '-22.500.000đ' },
                { id: 'TXN002', date: '12/01/2025', desc: 'Dịch vụ vệ sinh sofa', amount: '-850.000đ' },
                { id: 'TXN003', date: '05/01/2025', desc: 'Hoàn tiền đổi trả', amount: '+1.500.000đ' },
              ].map((t) => (
                <Stack key={t.id} direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="space-between" sx={{ p: 2, borderRadius: 0, bgcolor: varAlpha(SOFA7_COLORS.concrete, 0.04) }}>
                  <Stack>
                    <Typography variant="subtitle2">{t.id} · {t.date}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{t.desc}</Typography>
                  </Stack>
                  <Typography variant="subtitle2" sx={{ color: t.amount.startsWith('+') ? SOFA7_COLORS.cyan : SOFA7_COLORS.electric }}>{t.amount}</Typography>
                </Stack>
              ))}
            </Stack>
          )}

          {section === 'warranty' && (
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: { xs: 3, md: 5 }, borderRadius: 0, bgcolor: 'background.paper', border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}`, boxShadow: (t) => t.customShadows.card }}>
              <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>Phiếu bảo hành</Typography>
              {[
                { code: 'BH-2025-001', product: 'Sofa Brick Leather', date: '10/02/2025', expiry: '10/02/2035' },
                { code: 'BH-2024-008', product: 'Sofa Neon Orange', date: '15/06/2024', expiry: '15/06/2034' },
              ].map((w) => (
                <Stack key={w.code} spacing={1} sx={{ p: 2.5, borderRadius: 0, bgcolor: varAlpha(SOFA7_COLORS.cyan, 0.08) }}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Iconify icon="solar:shield-check-bold-duotone" width={22} sx={{ color: SOFA7_COLORS.cyan }} />
                    <Typography variant="subtitle2" sx={{ color: SOFA7_COLORS.cyan }}>{w.code}</Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{w.product}</Typography>
                  <Typography variant="caption" sx={{ color: 'text.disabled' }}>Ngày mua: {w.date} · Hết hạn: {w.expiry}</Typography>
                </Stack>
              ))}
            </Stack>
          )}

          {/* Back link */}
          <Stack direction="row" justifyContent="center" sx={{ mt: 4 }}>
            <Button component={RouterLink} href="/sofa7/account" variant="text" startIcon={<Iconify icon="eva:arrow-back-fill" />}>Về trang tài khoản</Button>
          </Stack>
        </Stack>
      </Sofa7Section>
    </>
  );
}

// ----------------------------------------------------------------------

function AuthCard({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: { xs: 3, md: 5 }, borderRadius: 0, bgcolor: 'background.paper', border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}`, boxShadow: (t) => t.customShadows.card }}>
      <Stack spacing={1}>
        <Typography variant="h4" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold' }}>{title}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>{subtitle}</Typography>
      </Stack>
      {children}
    </Stack>
  );
}
