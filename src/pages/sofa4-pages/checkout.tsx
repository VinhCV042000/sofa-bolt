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

import { Sofa4Section, Sofa4PageHero } from 'src/sections/sofa4-pages/sofa4-page-hero';
import { SOFA4_PAGE_IMAGES, SOFA4_PAGE_PRODUCTS, formatSofa4PagePrice } from 'src/sections/sofa4-pages/sofa4-pages-data';

const metadata = { title: 'Thanh toán - Sofa Pop' };

export default function Page() {
  const items = SOFA4_PAGE_PRODUCTS.slice(0, 2);
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa4PageHero overline="Giỏ hàng" title="Thanh toán" subtitle="Hoàn tất đơn hàng của bạn." image={SOFA4_PAGE_IMAGES.cta} />

      <Sofa4Section>
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
                    <Stack key={method} direction="row" spacing={2} alignItems="center" sx={{ p: 2, borderRadius: 2, border: '1px solid', borderColor: 'divider', cursor: 'pointer', '&:hover': { borderColor: 'warning.main' } }}>
                      <Iconify icon="solar:check-circle-bold-duotone" width={20} sx={{ color: 'warning.main' }} />
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
                    <Typography variant="subtitle2" sx={{ color: 'warning.main' }}>{formatSofa4PagePrice(item.price)}</Typography>
                  </Stack>
                </Stack>
              ))}
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="h6">Tổng cộng:</Typography>
                <Typography variant="h5" sx={{ color: 'warning.main', fontWeight: 'fontWeightBold' }}>{formatSofa4PagePrice(total)}</Typography>
              </Stack>
              <Button variant="contained" color="warning" size="large" fullWidth component={RouterLink} href="/sofa4/checkout/success" startIcon={<Iconify icon="solar:check-circle-bold-duotone" />}>Đặt hàng</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa4Section>
    </>
  );
}
