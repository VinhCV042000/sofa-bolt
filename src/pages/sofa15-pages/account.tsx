import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { SOFA15_COLORS } from 'src/sections/sofa15/sofa15-data';
import { Sofa15Section, Sofa15PageHero } from 'src/sections/sofa15-pages/sofa15-page-hero';
import {
  SOFA15_PAGE_IMAGES,
  SOFA15_PAGE_PRODUCTS,
  sofa15FormatPrice,
} from 'src/sections/sofa15-pages/sofa15-pages-data';

const AUTH_SECTIONS = ['login', 'register', 'forgot'];

const MENU = [
  { slug: 'profile', label: 'Hồ sơ cá nhân', icon: 'solar:user-bold-duotone' },
  { slug: 'addresses', label: 'Địa chỉ giao hàng', icon: 'solar:map-point-bold-duotone' },
  { slug: 'orders', label: 'Đơn hàng của tôi', icon: 'solar:bag-bold-duotone' },
  { slug: 'wishlist', label: 'Yêu thích', icon: 'solar:heart-bold-duotone' },
  { slug: 'history', label: 'Lịch sử giao dịch', icon: 'solar:clock-circle-bold-duotone' },
  { slug: 'warranty', label: 'Phiếu bảo hành', icon: 'solar:shield-check-bold-duotone' },
];

const goldField = {
  '& .MuiOutlinedInput-root': { borderRadius: 0, color: '#FFF' },
  '& .MuiOutlinedInput-notchedOutline': { borderColor: varAlpha(SOFA15_COLORS.gold, 0.3) },
  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: SOFA15_COLORS.gold },
  '& .MuiInputLabel-root': { color: varAlpha('#FFFFFF', 0.5) },
};

const goldButton = {
  borderRadius: 0,
  bgcolor: SOFA15_COLORS.gold,
  color: SOFA15_COLORS.black,
  fontWeight: 'fontWeightMedium',
  '&:hover': { bgcolor: SOFA15_COLORS.goldLight },
};

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const section = params.section || 'profile';
  const isAuth = AUTH_SECTIONS.includes(section);

  const heading = (text: string) => (
    <Typography
      variant="h5"
      sx={{
        color: 'common.white',
        fontWeight: 'fontWeightLight',
        fontFamily: theme.typography.fontSecondaryFamily,
      }}
    >
      {text}
    </Typography>
  );

  const card = (children: React.ReactNode) => (
    <Stack
      spacing={2}
      sx={{
        p: 3,
        bgcolor: SOFA15_COLORS.charcoal,
        border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.2)}`,
      }}
    >
      {children}
    </Stack>
  );

  return (
    <>
      <Helmet>
        <title>Tài khoản khách hàng — Sofa15</title>
      </Helmet>

      <Sofa15PageHero
        overline="TÀI KHOẢN"
        title={
          <>
            TÀI <span>KHOẢN</span>
          </>
        }
        subtitle="Đăng nhập, quản lý hồ sơ, đơn hàng, bảo hành và ưu đãi riêng của bạn."
        image={SOFA15_PAGE_IMAGES.contact}
      />

      <Sofa15Section bg="black">
        {isAuth ? (
          <Stack
            spacing={3}
            sx={{
              p: { xs: 3, md: 5 },
              maxWidth: 460,
              mx: 'auto',
              bgcolor: SOFA15_COLORS.charcoal,
              border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.3)}`,
            }}
          >
            {heading(
              section === 'login' ? 'Đăng nhập' : section === 'register' ? 'Đăng ký' : 'Quên mật khẩu'
            )}

            {section === 'register' && <TextField fullWidth label="Họ và tên" sx={goldField} />}
            <TextField fullWidth label="Email" sx={goldField} />
            {section !== 'forgot' && (
              <TextField fullWidth type="password" label="Mật khẩu" sx={goldField} />
            )}
            {section === 'register' && (
              <TextField fullWidth type="password" label="Xác nhận mật khẩu" sx={goldField} />
            )}

            <Button size="large" variant="contained" sx={goldButton}>
              {section === 'login' ? 'Đăng nhập' : section === 'register' ? 'Tạo tài khoản' : 'Gửi liên kết khôi phục'}
            </Button>

            <Divider sx={{ borderColor: varAlpha(SOFA15_COLORS.gold, 0.15) }} />

            <Stack direction="row" spacing={2} justifyContent="center">
              {AUTH_SECTIONS.filter((s) => s !== section).map((s) => (
                <Typography
                  key={s}
                  component={RouterLink}
                  href={`/sofa15/account/${s}`}
                  variant="body2"
                  sx={{ color: SOFA15_COLORS.gold, textDecoration: 'none' }}
                >
                  {s === 'login' ? 'Đăng nhập' : s === 'register' ? 'Đăng ký' : 'Quên mật khẩu'}
                </Typography>
              ))}
            </Stack>
          </Stack>
        ) : (
          <Grid container spacing={4}>
            <Grid xs={12} md={3}>
              <Stack spacing={1} sx={{ position: 'sticky', top: 96 }}>
                {MENU.map((item) => {
                  const active = item.slug === section;
                  return (
                    <Stack
                      key={item.slug}
                      component={RouterLink}
                      href={`/sofa15/account/${item.slug}`}
                      direction="row"
                      spacing={1.5}
                      alignItems="center"
                      sx={{
                        p: 2,
                        textDecoration: 'none',
                        border: `1px solid ${varAlpha(SOFA15_COLORS.gold, active ? 0.6 : 0.15)}`,
                        bgcolor: active ? varAlpha(SOFA15_COLORS.gold, 0.1) : 'transparent',
                        '&:hover': { borderColor: SOFA15_COLORS.gold },
                      }}
                    >
                      <Iconify icon={item.icon} width={20} sx={{ color: SOFA15_COLORS.gold }} />
                      <Typography
                        variant="body2"
                        sx={{ color: active ? SOFA15_COLORS.gold : varAlpha('#FFFFFF', 0.6) }}
                      >
                        {item.label}
                      </Typography>
                    </Stack>
                  );
                })}
                <Button
                  component={RouterLink}
                  href="/sofa15/account/login"
                  variant="outlined"
                  sx={{ mt: 2, borderRadius: 0, color: SOFA15_COLORS.gold, borderColor: SOFA15_COLORS.gold }}
                >
                  Đăng nhập
                </Button>
              </Stack>
            </Grid>

            <Grid xs={12} md={9}>
              <Stack spacing={3}>
                {section === 'profile' && (
                  <>
                    {heading('Hồ sơ cá nhân')}
                    <Grid container spacing={2}>
                      <Grid xs={12} sm={6}>
                        <TextField fullWidth label="Họ và tên" defaultValue="Nguyễn Văn A" sx={goldField} />
                      </Grid>
                      <Grid xs={12} sm={6}>
                        <TextField fullWidth label="Số điện thoại" defaultValue="0901 234 567" sx={goldField} />
                      </Grid>
                      <Grid xs={12}>
                        <TextField fullWidth label="Email" defaultValue="email@example.com" sx={goldField} />
                      </Grid>
                    </Grid>
                    <Button variant="contained" sx={{ ...goldButton, alignSelf: 'flex-start' }}>
                      Cập nhật
                    </Button>
                  </>
                )}

                {section === 'addresses' && (
                  <>
                    {heading('Địa chỉ giao hàng')}
                    {['Nhà riêng — 123 Nguyễn Trãi, Hà Nội', 'Văn phòng — 45 Lê Lợi, TP.HCM'].map((a) => (
                      <Box key={a}>
                        {card(
                          <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.7) }}>
                              {a}
                            </Typography>
                            <Iconify icon="solar:pen-bold-duotone" width={18} sx={{ color: SOFA15_COLORS.gold }} />
                          </Stack>
                        )}
                      </Box>
                    ))}
                  </>
                )}

                {section === 'orders' && (
                  <>
                    {heading('Đơn hàng của tôi')}
                    {[1, 2, 3].map((i) => (
                      <Box key={i}>
                        {card(
                          <>
                            <Stack direction="row" justifyContent="space-between">
                              <Typography variant="subtitle2" sx={{ color: 'common.white' }}>
                                Đơn hàng #S15-{1200 + i}
                              </Typography>
                              <Typography variant="caption" sx={{ color: SOFA15_COLORS.gold }}>
                                {i === 1 ? 'Đang giao' : 'Đã giao'}
                              </Typography>
                            </Stack>
                            <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.45) }}>
                              {sofa15FormatPrice(28000000 + i * 5000000)}
                            </Typography>
                          </>
                        )}
                      </Box>
                    ))}
                  </>
                )}

                {section === 'wishlist' && (
                  <>
                    {heading('Sản phẩm yêu thích')}
                    <Grid container spacing={3}>
                      {SOFA15_PAGE_PRODUCTS.slice(0, 4).map((p) => (
                        <Grid key={p.id} xs={12} sm={6}>
                          <Stack
                            component={RouterLink}
                            href={`/sofa15/products/${p.id}`}
                            spacing={1.5}
                            sx={{ textDecoration: 'none' }}
                          >
                            <Box
                              component="img"
                              src={p.image}
                              alt={p.name}
                              sx={{
                                width: 1,
                                aspectRatio: '4/3',
                                objectFit: 'cover',
                                border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.2)}`,
                              }}
                            />
                            <Typography variant="subtitle2" sx={{ color: 'common.white' }}>
                              {p.name}
                            </Typography>
                            <Typography variant="body2" sx={{ color: SOFA15_COLORS.gold }}>
                              {sofa15FormatPrice(p.price)}
                            </Typography>
                          </Stack>
                        </Grid>
                      ))}
                    </Grid>
                  </>
                )}

                {section === 'history' && (
                  <>
                    {heading('Lịch sử giao dịch')}
                    {[1, 2, 3, 4].map((i) => (
                      <Box key={i}>
                        {card(
                          <Stack direction="row" justifyContent="space-between">
                            <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.7) }}>
                              12/0{i}/2025 — Thanh toán đơn #S15-{1200 + i}
                            </Typography>
                            <Typography variant="body2" sx={{ color: SOFA15_COLORS.gold }}>
                              {sofa15FormatPrice(15000000 * i)}
                            </Typography>
                          </Stack>
                        )}
                      </Box>
                    ))}
                  </>
                )}

                {section === 'warranty' && (
                  <>
                    {heading('Phiếu bảo hành')}
                    {SOFA15_PAGE_PRODUCTS.slice(0, 3).map((p) => (
                      <Box key={p.id}>
                        {card(
                          <>
                            <Typography variant="subtitle2" sx={{ color: 'common.white' }}>
                              {p.name}
                            </Typography>
                            <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.45) }}>
                              Mã bảo hành: BH-{p.id}0{p.id} · Hiệu lực đến 2035 · Bảo hành 10 năm
                            </Typography>
                          </>
                        )}
                      </Box>
                    ))}
                  </>
                )}
              </Stack>
            </Grid>
          </Grid>
        )}
      </Sofa15Section>
    </>
  );
}