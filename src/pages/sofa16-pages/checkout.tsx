import { Helmet } from 'react-helmet-async';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { SOFA16_COLORS } from 'src/sections/sofa16/sofa16-data';
import { SOFA16_CART_ITEMS } from 'src/sections/sofa16-pages/sofa16-shop-data';
import { Sofa16Section, Sofa16PageHero } from 'src/sections/sofa16-pages/sofa16-page-hero';
import { sofa16FormatPrice, SOFA16_PAGE_IMAGES } from 'src/sections/sofa16-pages/sofa16-pages-data';
import { Sofa16Panel, sofa16FieldSx, sofa16ButtonSx } from 'src/sections/sofa16-pages/sofa16-shop-ui';

export default function Page() {
  const total = SOFA16_CART_ITEMS.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <>
      <Helmet><title>Thanh toán — Sofa16</title></Helmet>

      <Sofa16PageHero overline="THANH TOÁN" title={<>THANH <span>TOÁN</span></>} subtitle="Hoàn tất thông tin giao hàng và phương thức thanh toán." image={SOFA16_PAGE_IMAGES.prod2} />

      <Sofa16Section bg="cream">
        <Grid container spacing={4}>
          <Grid xs={12} md={7}>
            <Stack spacing={3}>
              <Sofa16Panel title="Thông tin giao hàng">
                <Stack spacing={2.5}>
                  <TextField fullWidth label="Họ và tên" sx={sofa16FieldSx} />
                  <TextField fullWidth label="Số điện thoại" sx={sofa16FieldSx} />
                  <TextField fullWidth label="Email" type="email" sx={sofa16FieldSx} />
                  <TextField fullWidth label="Địa chỉ giao hàng" sx={sofa16FieldSx} />
                  <TextField fullWidth multiline rows={3} label="Ghi chú" sx={sofa16FieldSx} />
                </Stack>
              </Sofa16Panel>
              <Sofa16Panel title="Phương thức thanh toán">
                <Typography variant="body2" sx={{ color: SOFA16_COLORS.inkSoft, lineHeight: 2 }}>
                  Chuyển khoản ngân hàng · Thẻ tín dụng · Trả góp 0% · Thanh toán khi nhận hàng (COD).
                </Typography>
              </Sofa16Panel>
            </Stack>
          </Grid>
          <Grid xs={12} md={5}>
            <Sofa16Panel title="Đơn hàng">
              <Stack spacing={2}>
                {SOFA16_CART_ITEMS.map((item) => (
                  <Stack key={item.id} direction="row" justifyContent="space-between">
                    <Typography variant="body2" sx={{ color: SOFA16_COLORS.inkSoft }}>{item.name} × {item.qty}</Typography>
                    <Typography variant="body2" sx={{ color: SOFA16_COLORS.ink }}>{sofa16FormatPrice(item.price * item.qty)}</Typography>
                  </Stack>
                ))}
                <Divider sx={{ borderStyle: 'dashed' }} />
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="subtitle1" sx={{ color: SOFA16_COLORS.ink }}>Tổng cộng</Typography>
                  <Typography variant="h6" sx={{ color: SOFA16_COLORS.terracottaDeep }}>{sofa16FormatPrice(total)}</Typography>
                </Stack>
                <Button component={RouterLink} href="/sofa16/checkout/success" size="large" variant="contained" sx={sofa16ButtonSx}>Đặt hàng</Button>
              </Stack>
            </Sofa16Panel>
          </Grid>
        </Grid>
      </Sofa16Section>
    </>
  );
}
