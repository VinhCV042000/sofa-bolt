import { Helmet } from 'react-helmet-async';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { SOFA17_COLORS } from 'src/sections/sofa17/sofa17-data';
import { SOFA17_CART_ITEMS } from 'src/sections/sofa17-pages/sofa17-shop-data';
import { SOFA17_PAGE_IMAGES } from 'src/sections/sofa17-pages/sofa17-pages-data';
import { Sofa17Section, Sofa17PageHero } from 'src/sections/sofa17-pages/sofa17-page-hero';
import {
  Sofa17Panel,
  sofa17Price,
  sofa17FieldSx,
  sofa17GoldButtonSx,
} from 'src/sections/sofa17-pages/sofa17-shop-ui';

const PAYMENTS = ['Chuyển khoản ngân hàng', 'Thẻ tín dụng / ghi nợ', 'Trả góp 0%', 'Thanh toán khi nhận hàng'];

export default function Page() {
  const total = SOFA17_CART_ITEMS.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <>
      <Helmet><title>Thanh toán — Sofa17</title></Helmet>

      <Sofa17PageHero overline="THANH TOÁN" title={<>THANH <span>TOÁN</span></>} subtitle="Hoàn tất thông tin giao hàng và phương thức thanh toán." image={SOFA17_PAGE_IMAGES.product8} />

      <Sofa17Section bg="black">
        <Grid container spacing={4}>
          <Grid xs={12} md={7}>
            <Stack spacing={4}>
              <Sofa17Panel title="Thông tin giao hàng">
                <Stack spacing={2.5}>
                  <TextField fullWidth label="Họ và tên" sx={sofa17FieldSx} />
                  <TextField fullWidth label="Số điện thoại" sx={sofa17FieldSx} />
                  <TextField fullWidth label="Email" type="email" sx={sofa17FieldSx} />
                  <TextField fullWidth label="Địa chỉ giao hàng" sx={sofa17FieldSx} />
                  <TextField fullWidth multiline rows={3} label="Ghi chú" sx={sofa17FieldSx} />
                </Stack>
              </Sofa17Panel>

              <Sofa17Panel title="Phương thức thanh toán">
                <Stack spacing={1.5}>
                  {PAYMENTS.map((p) => (
                    <Stack key={p} sx={{ p: 2, border: `1px solid ${varAlpha(SOFA17_COLORS.gold, 0.25)}` }}>
                      <Typography variant="body2" sx={{ color: 'common.white' }}>{p}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Sofa17Panel>
            </Stack>
          </Grid>

          <Grid xs={12} md={5}>
            <Sofa17Panel title="Đơn hàng">
              <Stack spacing={1.5}>
                {SOFA17_CART_ITEMS.map((item) => (
                  <Stack key={item.id} direction="row" justifyContent="space-between">
                    <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5) }}>{item.name} × {item.qty}</Typography>
                    <Typography variant="body2" sx={{ color: 'common.white' }}>{sofa17Price(item.price * item.qty)}</Typography>
                  </Stack>
                ))}
                <Divider sx={{ borderColor: varAlpha(SOFA17_COLORS.gold, 0.2) }} />
                <Stack direction="row" justifyContent="space-between">
                  <Typography sx={{ color: 'common.white' }}>Tổng cộng</Typography>
                  <Typography sx={{ color: SOFA17_COLORS.gold, fontWeight: 'fontWeightBold' }}>{sofa17Price(total)}</Typography>
                </Stack>
                <Button component={RouterLink} href="/sofa17/checkout/success" size="large" variant="contained" sx={sofa17GoldButtonSx}>Đặt hàng</Button>
              </Stack>
            </Sofa17Panel>
          </Grid>
        </Grid>
      </Sofa17Section>
    </>
  );
}
