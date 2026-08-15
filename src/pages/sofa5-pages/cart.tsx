import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { SOFA5_COLORS } from 'src/sections/sofa5/sofa5-data';
import { SOFA5_CART_ITEMS } from 'src/sections/sofa5-pages/sofa5-shop-data';
import { Sofa5Section, Sofa5PageHero } from 'src/sections/sofa5-pages/sofa5-page-hero';
import { sofa5FormatPrice, SOFA5_PAGE_IMAGES } from 'src/sections/sofa5-pages/sofa5-pages-data';
import { Sofa5Panel, sofa5ButtonSx } from 'src/sections/sofa5-pages/sofa5-shop-ui';

export default function Page() {
  const subtotal = SOFA5_CART_ITEMS.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <>
      <Helmet><title>Giỏ hàng — Sofa Royale</title></Helmet>

      <Sofa5PageHero overline="GIỎ HÀNG" title={<>GIỎ <span>HÀNG</span></>} subtitle="Kiểm tra sản phẩm trước khi thanh toán." image={SOFA5_PAGE_IMAGES.product1} />

      <Sofa5Section bg="cream">
        <Grid container spacing={4}>
          <Grid xs={12} md={8}>
            <Sofa5Panel title={`${SOFA5_CART_ITEMS.length} sản phẩm`}>
              <Stack spacing={3} divider={<Divider sx={{ borderStyle: 'dashed' }} />}>
                {SOFA5_CART_ITEMS.map((item) => (
                  <Stack key={item.id} direction="row" spacing={2.5} alignItems="center">
                    <Box component="img" src={item.image} alt={item.name} sx={{ width: 96, height: 96, borderRadius: 2, objectFit: 'cover' }} />
                    <Stack spacing={0.5} sx={{ flexGrow: 1 }}>
                      <Typography variant="subtitle1" sx={{ color: SOFA5_COLORS.ink }}>{item.name}</Typography>
                      <Typography variant="body2" sx={{ color: SOFA5_COLORS.inkSoft }}>{item.material}</Typography>
                      <Typography variant="body2" sx={{ color: SOFA5_COLORS.inkSoft }}>Số lượng: {item.qty}</Typography>
                    </Stack>
                    <Typography variant="subtitle1" sx={{ color: SOFA5_COLORS.clayDeep }}>{sofa5FormatPrice(item.price * item.qty)}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Sofa5Panel>
          </Grid>
          <Grid xs={12} md={4}>
            <Sofa5Panel title="Tóm tắt đơn hàng">
              <Stack spacing={2}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2" sx={{ color: SOFA5_COLORS.inkSoft }}>Tạm tính</Typography>
                  <Typography variant="subtitle2" sx={{ color: SOFA5_COLORS.ink }}>{sofa5FormatPrice(subtotal)}</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2" sx={{ color: SOFA5_COLORS.inkSoft }}>Giao lắp</Typography>
                  <Typography variant="subtitle2" sx={{ color: SOFA5_COLORS.sageDeep }}>Miễn phí</Typography>
                </Stack>
                <Divider sx={{ borderStyle: 'dashed' }} />
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="subtitle1" sx={{ color: SOFA5_COLORS.ink }}>Tổng cộng</Typography>
                  <Typography variant="h6" sx={{ color: SOFA5_COLORS.clayDeep }}>{sofa5FormatPrice(subtotal)}</Typography>
                </Stack>
                <Button component={RouterLink} href="/sofa5/checkout" size="large" variant="contained" sx={sofa5ButtonSx}>Tiến hành thanh toán</Button>
                <Button component={RouterLink} href="/sofa5/products" size="large" variant="outlined" sx={{ borderRadius: 2, color: SOFA5_COLORS.clayDeep, borderColor: SOFA5_COLORS.clay }}>Tiếp tục mua sắm</Button>
              </Stack>
            </Sofa5Panel>
          </Grid>
        </Grid>
      </Sofa5Section>
    </>
  );
}
