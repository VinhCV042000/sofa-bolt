import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { SOFA20_COLORS } from 'src/sections/sofa20/sofa20-data';
import { Sofa20Section } from 'src/sections/sofa20-pages/sofa20-page-hero';
import { sofa20GoldButtonSx } from 'src/sections/sofa20-pages/sofa20-shop-ui';

export default function Page() {
  return (
    <>
      <Helmet><title>Thanh toán thành công — Sofa20</title></Helmet>

      <Sofa20Section bg="black" py={{ xs: 12, md: 20 }}>
        <Stack spacing={4} alignItems="center" sx={{ textAlign: 'center', maxWidth: 560, mx: 'auto' }}>
          <Box sx={{ width: 96, height: 96, display: 'flex', alignItems: 'center', justifyContent: 'center', color: SOFA20_COLORS.gold, border: `1px solid ${SOFA20_COLORS.gold}` }}>
            <Iconify icon="solar:check-circle-bold-duotone" width={52} />
          </Box>
          <Typography variant="h3" sx={{ color: 'common.white', fontWeight: 'fontWeightLight' }}>Đặt hàng thành công</Typography>
          <Typography sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 2 }}>
            Cảm ơn bạn. Mã đơn hàng của bạn là <Box component="span" sx={{ color: SOFA20_COLORS.gold }}>SOFA20-ORD001</Box>. Chúng tôi sẽ liên hệ xác nhận trong 24 giờ.
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
            <Button component={RouterLink} href="/sofa20/orders/tracking" size="large" variant="contained" sx={sofa20GoldButtonSx}>Theo dõi đơn hàng</Button>
            <Button component={RouterLink} href="/sofa20/products" size="large" variant="outlined" sx={{ borderRadius: 0, color: SOFA20_COLORS.gold, borderColor: varAlpha(SOFA20_COLORS.gold, 0.4) }}>Tiếp tục mua sắm</Button>
          </Stack>
        </Stack>
      </Sofa20Section>
    </>
  );
}
