import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA6_COLORS } from 'src/sections/sofa6/sofa6-data';
import { SOFA6_PAGE_IMAGES } from 'src/sections/sofa6-pages/sofa6-pages-data';
import { Sofa6Section, Sofa6PageHero } from 'src/sections/sofa6-pages/sofa6-page-hero';

// ----------------------------------------------------------------------

const metadata = { title: 'Tài khoản khách hàng · Sofa Earth' };

const hexToRgb = (hex: string) => `rgb(${hex.slice(1).match(/.{2}/g)?.map((h) => parseInt(h, 16)).join(',')})`;

const CARDS = [
  { section: 'profile', icon: 'solar:user-bold-duotone', title: 'Hồ sơ cá nhân', desc: 'Cập nhật thông tin tài khoản' },
  { section: 'addresses', icon: 'solar:map-point-bold-duotone', title: 'Địa chỉ giao hàng', desc: 'Quản lý địa chỉ nhận hàng' },
  { section: 'orders', icon: 'solar:bag-bold-duotone', title: 'Đơn hàng', desc: 'Lịch sử & trạng thái đơn hàng' },
  { section: 'wishlist', icon: 'solar:heart-bold-duotone', title: 'Yêu thích', desc: 'Sản phẩm bạn đã lưu' },
  { section: 'history', icon: 'solar:history-bold-duotone', title: 'Lịch sử giao dịch', desc: 'Lịch sử thanh toán & dịch vụ' },
  { section: 'warranty', icon: 'solar:shield-check-bold-duotone', title: 'Phiếu bảo hành', desc: 'Quản lý phiếu bảo hành sofa' },
];

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet><title>{metadata.title}</title></Helmet>

      <Sofa6PageHero
        overline="Tài khoản"
        title={<>Tài khoản <span>khách hàng</span></>}
        subtitle="Quản lý hồ sơ, đơn hàng, địa chỉ, yêu thích, lịch sử giao dịch và phiếu bảo hành sofa từ Sofa Earth."
        image={SOFA6_PAGE_IMAGES.cta}
      />

      <Sofa6Section>
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }} component={MotionViewport}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>Bảng điều khiển</Typography>
          <Typography variant="h2">
            Trung tâm
            <Box component="span" sx={{ ...textGradient(`135deg, ${SOFA6_COLORS.terracottaLight}, ${SOFA6_COLORS.sageLight}`) }}> khách hàng</Box>
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Chọn một mục để quản lý tài khoản Sofa Earth của bạn.</Typography>
        </Stack>

        <Grid container spacing={3} component={MotionViewport}>
          {CARDS.map((card) => (
            <Grid key={card.section} xs={12} sm={6} md={4}>
              <Button component={RouterLink} href={`/sofa6/account/${card.section}`} fullWidth sx={{ textTransform: 'none', color: 'inherit', p: 0 }}>
                <Stack
                  component={m.div}
                  variants={varFade({ distance: 24 }).inUp}
                  spacing={2}
                  sx={{
                    width: 1,
                    p: 4,
                    height: 1,
                    borderRadius: 2,
                    textAlign: 'left',
                    bgcolor: 'background.paper',
                    boxShadow: (t) => t.customShadows.card,
                    transition: (t) => t.transitions.create(['transform', 'box-shadow'], { duration: 300 }),
                    '&:hover': { transform: 'translateY(-6px)' },
                  }}
                >
                  <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(hexToRgb(SOFA6_COLORS.terracottaLight), 0.12), color: SOFA6_COLORS.terracotta }}>
                    <Iconify icon={card.icon} width={28} />
                  </Box>
                  <Box>
                    <Typography variant="h6">{card.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>{card.desc}</Typography>
                  </Box>
                  <Stack direction="row" spacing={0.5} alignItems="center" sx={{ color: SOFA6_COLORS.terracotta }}>
                    <Typography variant="button">Quản lý</Typography>
                    <Iconify icon="eva:arrow-ios-forward-fill" width={18} />
                  </Stack>
                </Stack>
              </Button>
            </Grid>
          ))}
        </Grid>

        {/* Auth quick links */}
        <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap" useFlexGap sx={{ mt: 6 }} component={MotionViewport}>
          <Button component={RouterLink} href="/sofa6/account/login" variant="contained" startIcon={<Iconify icon="solar:user-bold-duotone" />} sx={{ bgcolor: SOFA6_COLORS.terracotta, '&:hover': { bgcolor: SOFA6_COLORS.clay } }}>Đăng nhập</Button>
          <Button component={RouterLink} href="/sofa6/account/register" variant="outlined" startIcon={<Iconify icon="solar:user-plus-bold-duotone" />}>Đăng ký</Button>
          <Button component={RouterLink} href="/sofa6/account/forgot" variant="text" startIcon={<Iconify icon="solar:password-bold-duotone" />}>Quên mật khẩu</Button>
        </Stack>
      </Sofa6Section>
    </>
  );
}
