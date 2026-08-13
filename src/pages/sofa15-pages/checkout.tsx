import { Helmet } from 'react-helmet-async';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { SOFA15_COLORS } from 'src/sections/sofa15/sofa15-data';
import { SOFA15_CART_ITEMS } from 'src/sections/sofa15-pages/sofa15-shop-data';
import { Sofa15Section, Sofa15PageHero } from 'src/sections/sofa15-pages/sofa15-page-hero';
import { SOFA15_PAGE_IMAGES } from 'src/sections/sofa15-pages/sofa15-pages-data';
import {
  Sofa15Panel,
  sofa15Price,
  sofa15FieldSx,
  sofa15GoldButtonSx,
} from 'src/sections/sofa15-pages/sofa15-shop-ui';

const PAYMENTS = ['Chuyển khoản ngân hàng', 'Thẻ tín dụng / ghi nợ', 'Trả góp 0%', 'Thanh toán khi nhận hàng'];

export default function Page() {
  const total = SOFA15_CART_ITEMS.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <>
      <Helmet><title>Thanh toán — Sofa15</title></Helmet>

      <Sofa15PageHero overline="THANH TOÁN" title={<>THANH <span>TOÁN</span></>} subtitle="Hoàn tất thông tin giao hàng và phương thức thanh toán." image={SOFA15_PAGE_IMAGES.product8} />

      <Sofa15Section bg="black">
        <Grid container spacing={4}>
          <Grid xs={12} md={7}>
            <Stack spacing={4}>
              <Sofa15Panel title="Thông tin giao hàng">
                <Stack spacing={2.5}>
                  <TextField fullWidth label="Họ và tên" sx={sofa15FieldSx} />
                  <TextField fullWidth label="Số điện thoại" sx={sofa15FieldSx} />
                  <TextField fullWidth label="Email" type="email" sx={sofa15FieldSx} />
                  <TextField fullWidth label="Địa chỉ giao hàng" sx={sofa15FieldSx} />
                  <TextField fullWidth multiline rows={3} label="Ghi chú" sx={sofa15FieldSx} />
                </Stack>
              </Sofa15Panel>

              <Sofa15Panel title="Phương thức thanh toán">
                <Stack spacing={1.5}>
                  {PAYMENTS.map((p) => (
                    <Stack key={p} sx={{ p: 2, border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.25)}` }}>
                      <Typography variant="body2" sx={{ color: 'common.white' }}>{p}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Sofa15Panel>
            </Stack>
          </Grid>

          <Grid xs={12} md={5}>
            <Sofa15Panel title="Đơn hàng">
              <Stack spacing={1.5}>
                {SOFA15_CART_ITEMS.map((item) => (
                  <Stack key={item.id} direction="row" justifyContent="space-between">
                    <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5) }}>{item.name} × {item.qty}</Typography>
                    <Typography variant="body2" sx={{ color: 'common.white' }}>{sofa15Price(item.price * item.qty)}</Typography>
                  </Stack>
                ))}
                <Divider sx={{ borderColor: varAlpha(SOFA15_COLORS.gold, 0.2) }} />
                <Stack direction="row" justifyContent="space-between">
                  <Typography sx={{ color: 'common.white' }}>Tổng cộng</Typography>
                  <Typography sx={{ color: SOFA15_COLORS.gold, fontWeight: 'fontWeightBold' }}>{sofa15Price(total)}</Typography>
                </Stack>
                <Button component={RouterLink} href="/sofa15/checkout/success" size="large" variant="contained" sx={sofa15GoldButtonSx}>Đặt hàng</Button>
              </Stack>
            </Sofa15Panel>
          </Grid>
        </Grid>
      </Sofa15Section>
    </>
  );
}
