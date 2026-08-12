import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { MotionViewport } from 'src/components/animate';

import { Sofa3Section, Sofa3PageHero } from 'src/sections/sofa3-pages/sofa3-page-hero';
import { SOFA3_PRODUCTS, formatSofa3Price, SOFA3_PAGE_IMAGES } from 'src/sections/sofa3-pages/sofa3-pages-data';

const metadata = { title: 'Thanh toán - Sofa Terra' };

export default function Page() {
  const items = SOFA3_PRODUCTS.slice(0, 2);
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa3PageHero overline="Giỏ hàng" title="Thanh toán" subtitle="Hoàn tất đơn hàng của bạn." image={SOFA3_PAGE_IMAGES.cta} />

      <Sofa3Section>
        <Grid container spacing={{ xs: 4, md: 6 }} component={MotionViewport}>
          <Grid xs={12} md={7}>
            <Stack spacing={4}>
              <Box>
                <Typography variant="h6" sx={{ mb: 2 }}>Thông tin giao hàng</Typography>
                <Stack spacing={2}>
                  <TextField label="Họ và tên" fullWidth />
                  <TextField label="Số điện thoại" fullWidth />
                  <TextField label="Địa chỉ giao hàng" fullWidth />
                  <TextField label="Ghi chú" multiline rows={2} fullWidth />
                </Stack>
              </Box>

              <Box>
                <Typography variant="h6" sx={{ mb: 2 }}>Phương thức thanh toán</Typography>
                <Stack spacing={1}>
                  {['Chuyển khoản ngân hàng', 'Thanh toán khi nhận hàng (COD)', 'Trả góp 0% (6-24 tháng)'].map((method) => (
                    <Stack key={method} direction="row" spacing={2} alignItems="center" sx={{ p: 2, borderRadius: 2, border: '1px solid', borderColor: 'divider', cursor: 'pointer', '&:hover': { borderColor: 'success.main' } }}>
                      <Iconify icon="solar:check-circle-bold-duotone" width={20} sx={{ color: 'success.main' }} />
                      <Typography variant="body2">{method}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </Grid>

          <Grid xs={12} md={5}>
            <Stack spacing={3} sx={{ p: 4, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
              <Typography variant="h6">Đơn hàng</Typography>
              {items.map((item) => (
                <Stack key={item.id} direction="row" spacing={2} alignItems="center">
                  <Box component="img" src={item.image} alt={item.name} sx={{ width: 60, height: 60, borderRadius: 1.5, objectFit: 'cover' }} />
                  <Stack sx={{ flex: 1 }}>
                    <Typography variant="body2">{item.name}</Typography>
                    <Typography variant="subtitle2" sx={{ color: 'success.main' }}>{formatSofa3Price(item.price)}</Typography>
                  </Stack>
                </Stack>
              ))}
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="h6">Tổng cộng:</Typography>
                <Typography variant="h5" sx={{ color: 'success.main', fontWeight: 'fontWeightBold' }}>{formatSofa3Price(total)}</Typography>
              </Stack>
              <Button variant="contained" color="success" size="large" fullWidth component={RouterLink} href="/sofa3/checkout/success" startIcon={<Iconify icon="solar:check-circle-bold-duotone" />}>Đặt hàng</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa3Section>
    </>
  );
}
