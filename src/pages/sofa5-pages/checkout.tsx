import { Helmet } from 'react-helmet-async';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { SOFA5_COLORS } from 'src/sections/sofa5/sofa5-data';
import { SOFA5_CART_ITEMS } from 'src/sections/sofa5-pages/sofa5-shop-data';
import { Sofa5Section, Sofa5PageHero } from 'src/sections/sofa5-pages/sofa5-page-hero';
import { sofa5FormatPrice, SOFA5_PAGE_IMAGES } from 'src/sections/sofa5-pages/sofa5-pages-data';
import { Sofa5Panel, sofa5FieldSx, sofa5ButtonSx } from 'src/sections/sofa5-pages/sofa5-shop-ui';

export default function Page() {
  const total = SOFA5_CART_ITEMS.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <>
      <Helmet><title>Thanh toán — Sofa Royale</title></Helmet>

      <Sofa5PageHero overline="THANH TOÁN" title={<>THANH <span>TOÁN</span></>} subtitle="Hoàn tất thông tin giao hàng và phương thức thanh toán." image={SOFA5_PAGE_IMAGES.product2} />

      <Sofa5Section bg="cream">
        <Grid container spacing={4}>
          <Grid xs={12} md={7}>
            <Stack spacing={3}>
              <Sofa5Panel title="Thông tin giao hàng">
                <Stack spacing={2.5}>
                  <TextField fullWidth label="Họ và tên" sx={sofa5FieldSx} />
                  <TextField fullWidth label="Số điện thoại" sx={sofa5FieldSx} />
                  <TextField fullWidth label="Email" type="email" sx={sofa5FieldSx} />
                  <TextField fullWidth label="Địa chỉ giao hàng" sx={sofa5FieldSx} />
                  <TextField fullWidth multiline rows={3} label="Ghi chú" sx={sofa5FieldSx} />
                </Stack>
              </Sofa5Panel>
              <Sofa5Panel title="Phương thức thanh toán">
                <Typography variant="body2" sx={{ color: SOFA5_COLORS.inkSoft, lineHeight: 2 }}>
                  Chuyển khoản ngân hàng · Thẻ tín dụng · Trả góp 0% · Thanh toán khi nhận hàng (COD).
                </Typography>
              </Sofa5Panel>
            </Stack>
          </Grid>
          <Grid xs={12} md={5}>
            <Sofa5Panel title="Đơn hàng">
              <Stack spacing={2}>
                {SOFA5_CART_ITEMS.map((item) => (
                  <Stack key={item.id} direction="row" justifyContent="space-between">
                    <Typography variant="body2" sx={{ color: SOFA5_COLORS.inkSoft }}>{item.name} × {item.qty}</Typography>
                    <Typography variant="body2" sx={{ color: SOFA5_COLORS.ink }}>{sofa5FormatPrice(item.price * item.qty)}</Typography>
                  </Stack>
                ))}
                <Divider sx={{ borderStyle: 'dashed' }} />
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="subtitle1" sx={{ color: SOFA5_COLORS.ink }}>Tổng cộng</Typography>
                  <Typography variant="h6" sx={{ color: SOFA5_COLORS.clayDeep }}>{sofa5FormatPrice(total)}</Typography>
                </Stack>
                <Button component={RouterLink} href="/sofa5/checkout/success" size="large" variant="contained" sx={sofa5ButtonSx}>Đặt hàng</Button>
              </Stack>
            </Sofa5Panel>
          </Grid>
        </Grid>
      </Sofa5Section>
    </>
  );
}
