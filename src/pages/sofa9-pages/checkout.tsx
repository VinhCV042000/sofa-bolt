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

import { SOFA9_COLORS } from 'src/sections/sofa9/sofa9-data';
import { Sofa9Section, Sofa9PageHero } from 'src/sections/sofa9-pages/sofa9-page-hero';
import { formatSofa9Price, SOFA9_PAGE_IMAGES, SOFA9_PAGE_PRODUCTS } from 'src/sections/sofa9-pages/sofa9-pages-data';

export default function Page() {
  const theme = useTheme();
  const cartItems = SOFA9_PAGE_PRODUCTS.slice(0, 2);
  const total = cartItems.reduce((sum, p) => sum + p.price, 0);

  return (
    <>
      <Helmet>
        <title>Thanh toán — Sofa9</title>
      </Helmet>

      <Sofa9PageHero overline="THANH TOÁN" title={<>THANH <span>TOÁN</span></>} subtitle="Hoàn tất đơn hàng retro của bạn." image={SOFA9_PAGE_IMAGES.product1} />

      <Sofa9Section>
        <Grid container spacing={5}>
          <Grid xs={12} md={7}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Stack spacing={2}>
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold' }}>Thông tin giao hàng</Typography>
                <Grid container spacing={2}>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" /></Grid>
                  <Grid xs={12}><TextField fullWidth label="Địa chỉ" /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Thành phố" /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Quận/Huyện" /></Grid>
                </Grid>
              </Stack>
              <Stack spacing={2}>
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold' }}>Phương thức thanh toán</Typography>
                <Stack spacing={2}>
                  {['Chuyển khoản ngân hàng', 'Thanh toán khi nhận hàng (COD)', 'Thanh toán online (VNPay/Momo)'].map((method, i) => (
                    <Stack key={i} direction="row" spacing={2} alignItems="center" sx={{ p: 2, borderRadius: 3, border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` }}>
                      <Iconify icon={i === 0 ? 'solar:card-bold-duotone' : i === 1 ? 'solar:delivery-bold-duotone' : 'solar:wallet-bold-duotone'} width={24} sx={{ color: SOFA9_COLORS.pink }} />
                      <Typography variant="body2" sx={{ fontWeight: 'fontWeightMedium' }}>{method}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} md={5}>
            <Stack spacing={3} sx={{ p: 3, borderRadius: 3, bgcolor: 'background.paper', border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` }}>
              <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold' }}>Đơn hàng</Typography>
              {cartItems.map((item) => (
                <Stack key={item.id} direction="row" spacing={2} alignItems="center">
                  <Box sx={{ width: 50, height: 50, borderRadius: 2, overflow: 'hidden' }}>
                    <Box component="img" src={item.image} alt={item.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
                  </Box>
                  <Typography variant="body2" sx={{ flex: 1, fontWeight: 'fontWeightMedium' }}>{item.name}</Typography>
                  <Typography variant="body2" sx={{ color: SOFA9_COLORS.pink, fontWeight: 'fontWeightBold' }}>{formatSofa9Price(item.price)}</Typography>
                </Stack>
              ))}
              <Divider />
              <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Tạm tính</Typography><Typography sx={{ fontWeight: 'fontWeightBold' }}>{formatSofa9Price(total)}</Typography></Stack>
              <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Phí giao hàng</Typography><Typography sx={{ fontWeight: 'fontWeightBold' }}>Miễn phí</Typography></Stack>
              <Divider />
              <Stack direction="row" justifyContent="space-between"><Typography variant="h6" sx={{ fontWeight: 'fontWeightBold' }}>Tổng</Typography><Typography variant="h6" sx={{ fontWeight: 'fontWeightBold', color: SOFA9_COLORS.pink }}>{formatSofa9Price(total)}</Typography></Stack>
              <Button component={RouterLink} href="/sofa9/checkout/success" size="large" variant="contained" fullWidth startIcon={<Iconify icon="solar:check-circle-bold-duotone" />} sx={{ borderRadius: 30, bgcolor: SOFA9_COLORS.pink, color: 'common.white', fontWeight: 'fontWeightBold', boxShadow: `0 4px 0 ${SOFA9_COLORS.black}`, '&:hover': { bgcolor: SOFA9_COLORS.pinkLight, boxShadow: `0 6px 0 ${SOFA9_COLORS.black}` } }}>Đặt hàng</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa9Section>
    </>
  );
}
