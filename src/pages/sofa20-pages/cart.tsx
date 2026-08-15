import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { SOFA20_COLORS } from 'src/sections/sofa20/sofa20-data';
import { SOFA20_CART_ITEMS } from 'src/sections/sofa20-pages/sofa20-shop-data';
import { SOFA20_PAGE_IMAGES } from 'src/sections/sofa20-pages/sofa20-pages-data';
import { Sofa20Section, Sofa20PageHero } from 'src/sections/sofa20-pages/sofa20-page-hero';
import { Sofa20Panel, sofa20Price, sofa20GoldButtonSx } from 'src/sections/sofa20-pages/sofa20-shop-ui';

export default function Page() {
  const subtotal = SOFA20_CART_ITEMS.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <>
      <Helmet><title>Giỏ hàng — Sofa20</title></Helmet>

      <Sofa20PageHero overline="GIỎ HÀNG" title={<>GIỎ <span>HÀNG</span></>} subtitle="Xem lại các tác phẩm bạn đã chọn trước khi thanh toán." image={SOFA20_PAGE_IMAGES.product7} />

      <Sofa20Section bg="black">
        <Grid container spacing={4}>
          <Grid xs={12} md={8}>
            <Stack spacing={2}>
              {SOFA20_CART_ITEMS.map((item) => (
                <Stack key={item.id} direction="row" spacing={3} sx={{ p: 2.5, bgcolor: SOFA20_COLORS.charcoal, border: `1px solid ${varAlpha(SOFA20_COLORS.gold, 0.25)}` }}>
                  <Box component="img" src={item.image} alt={item.name} sx={{ width: 120, height: 96, objectFit: 'cover' }} />
                  <Stack spacing={0.5} sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle1" sx={{ color: 'common.white', fontWeight: 'fontWeightLight' }}>{item.name}</Typography>
                    <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4) }}>{item.variant}</Typography>
                    <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4) }}>Số lượng: {item.qty}</Typography>
                  </Stack>
                  <Typography sx={{ color: SOFA20_COLORS.gold, fontWeight: 'fontWeightMedium' }}>{sofa20Price(item.price * item.qty)}</Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>

          <Grid xs={12} md={4}>
            <Sofa20Panel title="Tóm tắt đơn hàng">
              <Stack spacing={1.5}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5) }}>Tạm tính</Typography>
                  <Typography variant="body2" sx={{ color: 'common.white' }}>{sofa20Price(subtotal)}</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5) }}>Giao hàng white-glove</Typography>
                  <Typography variant="body2" sx={{ color: 'common.white' }}>Miễn phí</Typography>
                </Stack>
                <Divider sx={{ borderColor: varAlpha(SOFA20_COLORS.gold, 0.2) }} />
                <Stack direction="row" justifyContent="space-between">
                  <Typography sx={{ color: 'common.white' }}>Tổng cộng</Typography>
                  <Typography sx={{ color: SOFA20_COLORS.gold, fontWeight: 'fontWeightBold' }}>{sofa20Price(subtotal)}</Typography>
                </Stack>
                <Button component={RouterLink} href="/sofa20/checkout" size="large" variant="contained" sx={sofa20GoldButtonSx}>Thanh toán</Button>
                <Button component={RouterLink} href="/sofa20/products" size="large" variant="outlined" sx={{ borderRadius: 0, color: SOFA20_COLORS.gold, borderColor: varAlpha(SOFA20_COLORS.gold, 0.4) }}>Tiếp tục mua sắm</Button>
              </Stack>
            </Sofa20Panel>
          </Grid>
        </Grid>
      </Sofa20Section>
    </>
  );
}
