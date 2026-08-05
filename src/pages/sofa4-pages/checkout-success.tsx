import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa4Section } from 'src/sections/sofa4-pages/sofa4-page-hero';

const metadata = { title: 'Thanh toán thành công - Sofa Pop' };

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa4Section>
        <Stack spacing={4} alignItems="center" sx={{ textAlign: 'center', maxWidth: 560, mx: 'auto', py: { xs: 8, md: 16 } }} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Box sx={{ width: 100, height: 100, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'warning.lighter' }}>
              <Iconify icon="solar:check-circle-bold-duotone" width={56} sx={{ color: 'warning.main' }} />
            </Box>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h3">Đặt hàng thành công!</Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: 'text.secondary' }}>
              Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ liên hệ xác nhận trong vòng 24 giờ.
              Mã đơn hàng: <Typography component="span" sx={{ fontWeight: 'fontWeightBold', color: 'warning.main' }}>SOFA3-ORD001</Typography>
            </Typography>
          </Box>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="warning" size="large" component={RouterLink} href="/sofa4/orders/tracking" startIcon={<Iconify icon="solar:tracking-bold-duotone" />}>Theo dõi đơn hàng</Button>
            <Button variant="outlined" color="warning" size="large" component={RouterLink} href="/sofa4/products">Tiếp tục mua sắm</Button>
          </Stack>
        </Stack>
      </Sofa4Section>
    </>
  );
}
