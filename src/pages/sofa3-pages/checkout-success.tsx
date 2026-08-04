import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa3Section } from 'src/sections/sofa3-pages/sofa3-page-hero';

const metadata = { title: 'Thanh toán thành công - Sofa Terra' };

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa3Section>
        <Stack spacing={4} alignItems="center" sx={{ textAlign: 'center', maxWidth: 560, mx: 'auto', py: { xs: 8, md: 16 } }} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Box sx={{ width: 100, height: 100, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'success.lighter' }}>
              <Iconify icon="solar:check-circle-bold-duotone" width={56} sx={{ color: 'success.main' }} />
            </Box>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h3">Đặt hàng thành công!</Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: 'text.secondary' }}>
              Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ liên hệ xác nhận trong vòng 24 giờ.
              Mã đơn hàng: <Typography component="span" sx={{ fontWeight: 'fontWeightBold', color: 'success.main' }}>SOFA3-ORD001</Typography>
            </Typography>
          </Box>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="success" size="large" component={RouterLink} href="/sofa3/orders/tracking" startIcon={<Iconify icon="solar:tracking-bold-duotone" />}>Theo dõi đơn hàng</Button>
            <Button variant="outlined" color="success" size="large" component={RouterLink} href="/sofa3/products">Tiếp tục mua sắm</Button>
          </Stack>
        </Stack>
      </Sofa3Section>
    </>
  );
}
