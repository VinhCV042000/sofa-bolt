import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { SOFA18_COLORS } from 'src/sections/sofa18/sofa18-data';
import { SOFA18_CART_ITEMS } from 'src/sections/sofa18-pages/sofa18-shop-data';
import { Sofa18Panel, sofa18ButtonSx } from 'src/sections/sofa18-pages/sofa18-shop-ui';
import { Sofa18Section, Sofa18PageHero } from 'src/sections/sofa18-pages/sofa18-page-hero';
import { sofa18FormatPrice, SOFA18_PAGE_IMAGES } from 'src/sections/sofa18-pages/sofa18-pages-data';

export default function Page() {
  const subtotal = SOFA18_CART_ITEMS.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <>
      <Helmet><title>Giỏ hàng — Sofa18</title></Helmet>

      <Sofa18PageHero overline="GIỎ HÀNG" title={<>GIỎ <span>HÀNG</span></>} subtitle="Kiểm tra sản phẩm trước khi thanh toán." image={SOFA18_PAGE_IMAGES.product1} />

      <Sofa18Section bg="cream">
        <Grid container spacing={4}>
          <Grid xs={12} md={8}>
            <Sofa18Panel title={`${SOFA18_CART_ITEMS.length} sản phẩm`}>
              <Stack spacing={3} divider={<Divider sx={{ borderStyle: 'dashed' }} />}>
                {SOFA18_CART_ITEMS.map((item) => (
                  <Stack key={item.id} direction="row" spacing={2.5} alignItems="center">
                    <Box component="img" src={item.image} alt={item.name} sx={{ width: 96, height: 96, borderRadius: 2, objectFit: 'cover' }} />
                    <Stack spacing={0.5} sx={{ flexGrow: 1 }}>
                      <Typography variant="subtitle1" sx={{ color: SOFA18_COLORS.ink }}>{item.name}</Typography>
                      <Typography variant="body2" sx={{ color: SOFA18_COLORS.inkSoft }}>{item.material}</Typography>
                      <Typography variant="body2" sx={{ color: SOFA18_COLORS.inkSoft }}>Số lượng: {item.qty}</Typography>
                    </Stack>
                    <Typography variant="subtitle1" sx={{ color: SOFA18_COLORS.clayDeep }}>{sofa18FormatPrice(item.price * item.qty)}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Sofa18Panel>
          </Grid>
          <Grid xs={12} md={4}>
            <Sofa18Panel title="Tóm tắt đơn hàng">
              <Stack spacing={2}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2" sx={{ color: SOFA18_COLORS.inkSoft }}>Tạm tính</Typography>
                  <Typography variant="subtitle2" sx={{ color: SOFA18_COLORS.ink }}>{sofa18FormatPrice(subtotal)}</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2" sx={{ color: SOFA18_COLORS.inkSoft }}>Giao lắp</Typography>
                  <Typography variant="subtitle2" sx={{ color: SOFA18_COLORS.sageDeep }}>Miễn phí</Typography>
                </Stack>
                <Divider sx={{ borderStyle: 'dashed' }} />
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="subtitle1" sx={{ color: SOFA18_COLORS.ink }}>Tổng cộng</Typography>
                  <Typography variant="h6" sx={{ color: SOFA18_COLORS.clayDeep }}>{sofa18FormatPrice(subtotal)}</Typography>
                </Stack>
                <Button component={RouterLink} href="/sofa18/checkout" size="large" variant="contained" sx={sofa18ButtonSx}>Tiến hành thanh toán</Button>
                <Button component={RouterLink} href="/sofa18/products" size="large" variant="outlined" sx={{ borderRadius: 2, color: SOFA18_COLORS.clayDeep, borderColor: SOFA18_COLORS.clay }}>Tiếp tục mua sắm</Button>
              </Stack>
            </Sofa18Panel>
          </Grid>
        </Grid>
      </Sofa18Section>
    </>
  );
}
