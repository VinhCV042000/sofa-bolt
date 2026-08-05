import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';

import { varAlpha } from 'src/theme/styles';
import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

import { SOFA8_COLORS } from 'src/sections/sofa8/sofa8-data';
import { Sofa8PageHero, Sofa8Section } from 'src/sections/sofa8-pages/sofa8-page-hero';
import { SOFA8_PAGE_PRODUCTS, SOFA8_PAGE_IMAGES, formatSofa8Price } from 'src/sections/sofa8-pages/sofa8-pages-data';

export default function Page() {
  const theme = useTheme();
  const cartItems = SOFA8_PAGE_PRODUCTS.slice(0, 2);
  const total = cartItems.reduce((sum, p) => sum + p.price, 0);

  return (
    <>
      <Helmet>
        <title>Thanh toán — Sofa8</title>
      </Helmet>

      <Sofa8PageHero overline="THANH TOÁN" title={<>THANH <span>TOÁN</span></>} subtitle="Hoàn tất đơn hàng coastal của bạn." image={SOFA8_PAGE_IMAGES.product1} />

      <Sofa8Section>
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
                    <Stack key={i} direction="row" spacing={2} alignItems="center" sx={{ p: 2, borderRadius: 2, border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` }}>
                      <Iconify icon={i === 0 ? 'solar:card-bold-duotone' : i === 1 ? 'solar:delivery-bold-duotone' : 'solar:wallet-bold-duotone'} width={24} sx={{ color: SOFA8_COLORS.ocean }} />
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
                  <Box sx={{ width: 50, height: 50, borderRadius: 1, overflow: 'hidden' }}>
                    <Box component="img" src={item.image} alt={item.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
                  </Box>
                  <Typography variant="body2" sx={{ flex: 1, fontWeight: 'fontWeightMedium' }}>{item.name}</Typography>
                  <Typography variant="body2" sx={{ color: SOFA8_COLORS.ocean, fontWeight: 'fontWeightBold' }}>{formatSofa8Price(item.price)}</Typography>
                </Stack>
              ))}
              <Divider />
              <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Tạm tính</Typography><Typography sx={{ fontWeight: 'fontWeightBold' }}>{formatSofa8Price(total)}</Typography></Stack>
              <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Phí giao hàng</Typography><Typography sx={{ fontWeight: 'fontWeightBold' }}>Miễn phí</Typography></Stack>
              <Divider />
              <Stack direction="row" justifyContent="space-between"><Typography variant="h6" sx={{ fontWeight: 'fontWeightBold' }}>Tổng</Typography><Typography variant="h6" sx={{ fontWeight: 'fontWeightBold', color: SOFA8_COLORS.ocean }}>{formatSofa8Price(total)}</Typography></Stack>
              <Button component={RouterLink} href="/sofa8/checkout/success" size="large" variant="contained" fullWidth startIcon={<Iconify icon="solar:check-circle-bold-duotone" />} sx={{ bgcolor: SOFA8_COLORS.coral, color: 'common.white', fontWeight: 'fontWeightBold', '&:hover': { bgcolor: SOFA8_COLORS.coralLight } }}>
                Đặt hàng
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa8Section>
    </>
  );
}
