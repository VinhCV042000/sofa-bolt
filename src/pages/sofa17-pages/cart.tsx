import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { SOFA17_COLORS } from 'src/sections/sofa17/sofa17-data';
import { SOFA17_CART_ITEMS } from 'src/sections/sofa17-pages/sofa17-shop-data';
import { SOFA17_PAGE_IMAGES } from 'src/sections/sofa17-pages/sofa17-pages-data';
import { Sofa17Section, Sofa17PageHero } from 'src/sections/sofa17-pages/sofa17-page-hero';
import { Sofa17Panel, sofa17Price, sofa17GoldButtonSx } from 'src/sections/sofa17-pages/sofa17-shop-ui';

export default function Page() {
  const subtotal = SOFA17_CART_ITEMS.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <>
      <Helmet><title>Giỏ hàng — Sofa17</title></Helmet>

      <Sofa17PageHero overline="GIỎ HÀNG" title={<>GIỎ <span>HÀNG</span></>} subtitle="Xem lại các tác phẩm bạn đã chọn trước khi thanh toán." image={SOFA17_PAGE_IMAGES.product7} />

      <Sofa17Section bg="black">
        <Grid container spacing={4}>
          <Grid xs={12} md={8}>
            <Stack spacing={2}>
              {SOFA17_CART_ITEMS.map((item) => (
                <Stack key={item.id} direction="row" spacing={3} sx={{ p: 2.5, bgcolor: SOFA17_COLORS.charcoal, border: `1px solid ${varAlpha(SOFA17_COLORS.gold, 0.25)}` }}>
                  <Box component="img" src={item.image} alt={item.name} sx={{ width: 120, height: 96, objectFit: 'cover' }} />
                  <Stack spacing={0.5} sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle1" sx={{ color: 'common.white', fontWeight: 'fontWeightLight' }}>{item.name}</Typography>
                    <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4) }}>{item.variant}</Typography>
                    <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4) }}>Số lượng: {item.qty}</Typography>
                  </Stack>
                  <Typography sx={{ color: SOFA17_COLORS.gold, fontWeight: 'fontWeightMedium' }}>{sofa17Price(item.price * item.qty)}</Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>

          <Grid xs={12} md={4}>
            <Sofa17Panel title="Tóm tắt đơn hàng">
              <Stack spacing={1.5}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5) }}>Tạm tính</Typography>
                  <Typography variant="body2" sx={{ color: 'common.white' }}>{sofa17Price(subtotal)}</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5) }}>Giao hàng white-glove</Typography>
                  <Typography variant="body2" sx={{ color: 'common.white' }}>Miễn phí</Typography>
                </Stack>
                <Divider sx={{ borderColor: varAlpha(SOFA17_COLORS.gold, 0.2) }} />
                <Stack direction="row" justifyContent="space-between">
                  <Typography sx={{ color: 'common.white' }}>Tổng cộng</Typography>
                  <Typography sx={{ color: SOFA17_COLORS.gold, fontWeight: 'fontWeightBold' }}>{sofa17Price(subtotal)}</Typography>
                </Stack>
                <Button component={RouterLink} href="/sofa17/checkout" size="large" variant="contained" sx={sofa17GoldButtonSx}>Thanh toán</Button>
                <Button component={RouterLink} href="/sofa17/products" size="large" variant="outlined" sx={{ borderRadius: 0, color: SOFA17_COLORS.gold, borderColor: varAlpha(SOFA17_COLORS.gold, 0.4) }}>Tiếp tục mua sắm</Button>
              </Stack>
            </Sofa17Panel>
          </Grid>
        </Grid>
      </Sofa17Section>
    </>
  );
}
