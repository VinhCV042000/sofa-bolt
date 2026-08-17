import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { SOFA16_COLORS } from 'src/sections/sofa16/sofa16-data';
import { SOFA16_CART_ITEMS } from 'src/sections/sofa16-pages/sofa16-shop-data';
import { Sofa16Panel, sofa16ButtonSx } from 'src/sections/sofa16-pages/sofa16-shop-ui';
import { Sofa16Section, Sofa16PageHero } from 'src/sections/sofa16-pages/sofa16-page-hero';
import { sofa16FormatPrice, SOFA16_PAGE_IMAGES } from 'src/sections/sofa16-pages/sofa16-pages-data';

export default function Page() {
  const subtotal = SOFA16_CART_ITEMS.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <>
      <Helmet><title>Giỏ hàng — Sofa16</title></Helmet>

      <Sofa16PageHero overline="GIỎ HÀNG" title={<>GIỎ <span>HÀNG</span></>} subtitle="Kiểm tra sản phẩm trước khi thanh toán." image={SOFA16_PAGE_IMAGES.prod1} />

      <Sofa16Section bg="cream">
        <Grid container spacing={4}>
          <Grid xs={12} md={8}>
            <Sofa16Panel title={`${SOFA16_CART_ITEMS.length} sản phẩm`}>
              <Stack spacing={3} divider={<Divider sx={{ borderStyle: 'dashed' }} />}>
                {SOFA16_CART_ITEMS.map((item) => (
                  <Stack key={item.id} direction="row" spacing={2.5} alignItems="center">
                    <Box component="img" src={item.image} alt={item.name} sx={{ width: 96, height: 96, borderRadius: 2, objectFit: 'cover' }} />
                    <Stack spacing={0.5} sx={{ flexGrow: 1 }}>
                      <Typography variant="subtitle1" sx={{ color: SOFA16_COLORS.ink }}>{item.name}</Typography>
                      <Typography variant="body2" sx={{ color: SOFA16_COLORS.inkSoft }}>{item.material}</Typography>
                      <Typography variant="body2" sx={{ color: SOFA16_COLORS.inkSoft }}>Số lượng: {item.qty}</Typography>
                    </Stack>
                    <Typography variant="subtitle1" sx={{ color: SOFA16_COLORS.terracottaDeep }}>{sofa16FormatPrice(item.price * item.qty)}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Sofa16Panel>
          </Grid>
          <Grid xs={12} md={4}>
            <Sofa16Panel title="Tóm tắt đơn hàng">
              <Stack spacing={2}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2" sx={{ color: SOFA16_COLORS.inkSoft }}>Tạm tính</Typography>
                  <Typography variant="subtitle2" sx={{ color: SOFA16_COLORS.ink }}>{sofa16FormatPrice(subtotal)}</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2" sx={{ color: SOFA16_COLORS.inkSoft }}>Giao lắp</Typography>
                  <Typography variant="subtitle2" sx={{ color: SOFA16_COLORS.oliveDeep }}>Miễn phí</Typography>
                </Stack>
                <Divider sx={{ borderStyle: 'dashed' }} />
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="subtitle1" sx={{ color: SOFA16_COLORS.ink }}>Tổng cộng</Typography>
                  <Typography variant="h6" sx={{ color: SOFA16_COLORS.terracottaDeep }}>{sofa16FormatPrice(subtotal)}</Typography>
                </Stack>
                <Button component={RouterLink} href="/sofa16/checkout" size="large" variant="contained" sx={sofa16ButtonSx}>Tiến hành thanh toán</Button>
                <Button component={RouterLink} href="/sofa16/products" size="large" variant="outlined" sx={{ borderRadius: 2, color: SOFA16_COLORS.terracottaDeep, borderColor: SOFA16_COLORS.terracotta }}>Tiếp tục mua sắm</Button>
              </Stack>
            </Sofa16Panel>
          </Grid>
        </Grid>
      </Sofa16Section>
    </>
  );
}
