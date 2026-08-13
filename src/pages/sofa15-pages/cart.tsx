import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { SOFA15_COLORS } from 'src/sections/sofa15/sofa15-data';
import { SOFA15_CART_ITEMS } from 'src/sections/sofa15-pages/sofa15-shop-data';
import { SOFA15_PAGE_IMAGES } from 'src/sections/sofa15-pages/sofa15-pages-data';
import { Sofa15Section, Sofa15PageHero } from 'src/sections/sofa15-pages/sofa15-page-hero';
import { Sofa15Panel, sofa15Price, sofa15GoldButtonSx } from 'src/sections/sofa15-pages/sofa15-shop-ui';

export default function Page() {
  const subtotal = SOFA15_CART_ITEMS.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <>
      <Helmet><title>Giỏ hàng — Sofa15</title></Helmet>

      <Sofa15PageHero overline="GIỎ HÀNG" title={<>GIỎ <span>HÀNG</span></>} subtitle="Xem lại các tác phẩm bạn đã chọn trước khi thanh toán." image={SOFA15_PAGE_IMAGES.product7} />

      <Sofa15Section bg="black">
        <Grid container spacing={4}>
          <Grid xs={12} md={8}>
            <Stack spacing={2}>
              {SOFA15_CART_ITEMS.map((item) => (
                <Stack key={item.id} direction="row" spacing={3} sx={{ p: 2.5, bgcolor: SOFA15_COLORS.charcoal, border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.25)}` }}>
                  <Box component="img" src={item.image} alt={item.name} sx={{ width: 120, height: 96, objectFit: 'cover' }} />
                  <Stack spacing={0.5} sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle1" sx={{ color: 'common.white', fontWeight: 'fontWeightLight' }}>{item.name}</Typography>
                    <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4) }}>{item.variant}</Typography>
                    <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4) }}>Số lượng: {item.qty}</Typography>
                  </Stack>
                  <Typography sx={{ color: SOFA15_COLORS.gold, fontWeight: 'fontWeightMedium' }}>{sofa15Price(item.price * item.qty)}</Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>

          <Grid xs={12} md={4}>
            <Sofa15Panel title="Tóm tắt đơn hàng">
              <Stack spacing={1.5}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5) }}>Tạm tính</Typography>
                  <Typography variant="body2" sx={{ color: 'common.white' }}>{sofa15Price(subtotal)}</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5) }}>Giao hàng white-glove</Typography>
                  <Typography variant="body2" sx={{ color: 'common.white' }}>Miễn phí</Typography>
                </Stack>
                <Divider sx={{ borderColor: varAlpha(SOFA15_COLORS.gold, 0.2) }} />
                <Stack direction="row" justifyContent="space-between">
                  <Typography sx={{ color: 'common.white' }}>Tổng cộng</Typography>
                  <Typography sx={{ color: SOFA15_COLORS.gold, fontWeight: 'fontWeightBold' }}>{sofa15Price(subtotal)}</Typography>
                </Stack>
                <Button component={RouterLink} href="/sofa15/checkout" size="large" variant="contained" sx={sofa15GoldButtonSx}>Thanh toán</Button>
                <Button component={RouterLink} href="/sofa15/products" size="large" variant="outlined" sx={{ borderRadius: 0, color: SOFA15_COLORS.gold, borderColor: varAlpha(SOFA15_COLORS.gold, 0.4) }}>Tiếp tục mua sắm</Button>
              </Stack>
            </Sofa15Panel>
          </Grid>
        </Grid>
      </Sofa15Section>
    </>
  );
}
