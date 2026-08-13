import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA10_COLORS } from 'src/sections/sofa10/sofa10-data';
import { Sofa10Section, Sofa10PageHero } from 'src/sections/sofa10-pages/sofa10-page-hero';
import { formatSofa10Price, SOFA10_PAGE_IMAGES, SOFA10_PAGE_PRODUCTS } from 'src/sections/sofa10-pages/sofa10-pages-data';

export default function Page() {
  const theme = useTheme();
  const cartItems = SOFA10_PAGE_PRODUCTS.slice(0, 2);
  const total = cartItems.reduce((sum, p) => sum + p.price, 0);

  return (
    <>
      <Helmet>
        <title>Thanh toán — Sofa10</title>
      </Helmet>

      <Sofa10PageHero overline="THANH TOÁN" title={<>THANH <span>TOÁN</span></>} subtitle="Hoàn tất đơn hàng retro của bạn." image={SOFA10_PAGE_IMAGES.product1} />

      <Sofa10Section>
        <Grid container spacing={5}>
          <Grid xs={12} md={7}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Stack spacing={2}>
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightNormal' }}>Thông tin giao hàng</Typography>
                <Grid container spacing={2}>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" /></Grid>
                  <Grid xs={12}><TextField fullWidth label="Địa chỉ" /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Thành phố" /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Quận/Huyện" /></Grid>
                </Grid>
              </Stack>
              <Stack spacing={2}>
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightNormal' }}>Phương thức thanh toán</Typography>
                <Stack spacing={2}>
                  {['Chuyển khoản ngân hàng', 'Thanh toán khi nhận hàng (COD)', 'Thanh toán online (VNPay/Momo)'].map((method, i) => (
                    <Stack key={i} direction="row" spacing={2} alignItems="center" sx={{ p: 2, borderRadius: 3, border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` }}>
                      <Iconify icon={i === 0 ? 'solar:card-bold-duotone' : i === 1 ? 'solar:delivery-bold-duotone' : 'solar:wallet-bold-duotone'} width={24} sx={{ color: SOFA10_COLORS.wood }} />
                      <Typography variant="body2" sx={{ fontWeight: 'fontWeightMedium' }}>{method}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} md={5}>
            <Stack spacing={3} sx={{ p: 3, borderRadius: 3, bgcolor: 'background.paper', border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` }}>
              <Typography variant="h6" sx={{ fontWeight: 'fontWeightNormal' }}>Đơn hàng</Typography>
              {cartItems.map((item) => (
                <Stack key={item.id} direction="row" spacing={2} alignItems="center">
                  <Box sx={{ width: 50, height: 50, borderRadius: 2, overflow: 'hidden' }}>
                    <Box component="img" src={item.image} alt={item.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
                  </Box>
                  <Typography variant="body2" sx={{ flex: 1, fontWeight: 'fontWeightMedium' }}>{item.name}</Typography>
                  <Typography variant="body2" sx={{ color: SOFA10_COLORS.wood, fontWeight: 'fontWeightNormal' }}>{formatSofa10Price(item.price)}</Typography>
                </Stack>
              ))}
              <Divider />
              <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Tạm tính</Typography><Typography sx={{ fontWeight: 'fontWeightNormal' }}>{formatSofa10Price(total)}</Typography></Stack>
              <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Phí giao hàng</Typography><Typography sx={{ fontWeight: 'fontWeightNormal' }}>Miễn phí</Typography></Stack>
              <Divider />
              <Stack direction="row" justifyContent="space-between"><Typography variant="h6" sx={{ fontWeight: 'fontWeightNormal' }}>Tổng</Typography><Typography variant="h6" sx={{ fontWeight: 'fontWeightNormal', color: SOFA10_COLORS.wood }}>{formatSofa10Price(total)}</Typography></Stack>
              <Button component={RouterLink} href="/sofa10/checkout/success" size="large" variant="contained" fullWidth startIcon={<Iconify icon="solar:check-circle-bold-duotone" />} sx={{ borderRadius: 30, bgcolor: SOFA10_COLORS.wood, color: 'common.white', fontWeight: 'fontWeightNormal', boxShadow: `0 4px 0 ${SOFA10_COLORS.charcoal}`, '&:hover': { bgcolor: SOFA10_COLORS.woodLight, boxShadow: `0 6px 0 ${SOFA10_COLORS.charcoal}` } }}>Đặt hàng</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa10Section>
    </>
  );
}
