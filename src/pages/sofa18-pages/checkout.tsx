import { Helmet } from 'react-helmet-async';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { SOFA18_COLORS } from 'src/sections/sofa18/sofa18-data';
import { SOFA18_CART_ITEMS } from 'src/sections/sofa18-pages/sofa18-shop-data';
import { Sofa18Section, Sofa18PageHero } from 'src/sections/sofa18-pages/sofa18-page-hero';
import { sofa18FormatPrice, SOFA18_PAGE_IMAGES } from 'src/sections/sofa18-pages/sofa18-pages-data';
import { Sofa18Panel, sofa18FieldSx, sofa18ButtonSx } from 'src/sections/sofa18-pages/sofa18-shop-ui';

export default function Page() {
  const total = SOFA18_CART_ITEMS.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <>
      <Helmet><title>Thanh toán — Sofa18</title></Helmet>

      <Sofa18PageHero overline="THANH TOÁN" title={<>THANH <span>TOÁN</span></>} subtitle="Hoàn tất thông tin giao hàng và phương thức thanh toán." image={SOFA18_PAGE_IMAGES.prod2} />

      <Sofa18Section bg="cream">
        <Grid container spacing={4}>
          <Grid xs={12} md={7}>
            <Stack spacing={3}>
              <Sofa18Panel title="Thông tin giao hàng">
                <Stack spacing={2.5}>
                  <TextField fullWidth label="Họ và tên" sx={sofa18FieldSx} />
                  <TextField fullWidth label="Số điện thoại" sx={sofa18FieldSx} />
                  <TextField fullWidth label="Email" type="email" sx={sofa18FieldSx} />
                  <TextField fullWidth label="Địa chỉ giao hàng" sx={sofa18FieldSx} />
                  <TextField fullWidth multiline rows={3} label="Ghi chú" sx={sofa18FieldSx} />
                </Stack>
              </Sofa18Panel>
              <Sofa18Panel title="Phương thức thanh toán">
                <Typography variant="body2" sx={{ color: SOFA18_COLORS.inkSoft, lineHeight: 2 }}>
                  Chuyển khoản ngân hàng · Thẻ tín dụng · Trả góp 0% · Thanh toán khi nhận hàng (COD).
                </Typography>
              </Sofa18Panel>
            </Stack>
          </Grid>
          <Grid xs={12} md={5}>
            <Sofa18Panel title="Đơn hàng">
              <Stack spacing={2}>
                {SOFA18_CART_ITEMS.map((item) => (
                  <Stack key={item.id} direction="row" justifyContent="space-between">
                    <Typography variant="body2" sx={{ color: SOFA18_COLORS.inkSoft }}>{item.name} × {item.qty}</Typography>
                    <Typography variant="body2" sx={{ color: SOFA18_COLORS.ink }}>{sofa18FormatPrice(item.price * item.qty)}</Typography>
                  </Stack>
                ))}
                <Divider sx={{ borderStyle: 'dashed' }} />
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="subtitle1" sx={{ color: SOFA18_COLORS.ink }}>Tổng cộng</Typography>
                  <Typography variant="h6" sx={{ color: SOFA18_COLORS.clayDeep }}>{sofa18FormatPrice(total)}</Typography>
                </Stack>
                <Button component={RouterLink} href="/sofa18/checkout/success" size="large" variant="contained" sx={sofa18ButtonSx}>Đặt hàng</Button>
              </Stack>
            </Sofa18Panel>
          </Grid>
        </Grid>
      </Sofa18Section>
    </>
  );
}
