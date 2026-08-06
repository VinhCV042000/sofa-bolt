import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

import { SOFA9_COLORS } from 'src/sections/sofa9/sofa9-data';
import { Sofa9PageHero, Sofa9Section } from 'src/sections/sofa9-pages/sofa9-page-hero';
import { SOFA9_PAGE_IMAGES } from 'src/sections/sofa9-pages/sofa9-pages-data';

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Thanh toán thành công — Sofa9</title>
      </Helmet>

      <Sofa9PageHero overline="THÀNH CÔNG" title={<>THANH TOÁN <span>THÀNH CÔNG</span></>} subtitle="Cảm ơn bạn đã đặt hàng tại Sofa9!" image={SOFA9_PAGE_IMAGES.cta} />

      <Sofa9Section>
        <Stack spacing={4} alignItems="center" sx={{ textAlign: 'center', maxWidth: 600, mx: 'auto' }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <Iconify icon="solar:check-circle-bold-duotone" width={100} sx={{ color: SOFA9_COLORS.teal }} />
          <Typography variant="h3" sx={{ fontWeight: 'fontWeightBold' }}>Đặt hàng thành công!</Typography>
          <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>Đơn hàng #SF9-2025-0001 đã được ghi nhận. Chúng tôi sẽ giao hàng trong 24h và liên hệ để xác nhận.</Typography>
          <Stack direction="row" spacing={2}>
            <Button component={RouterLink} href="/sofa9/orders/tracking" size="large" variant="contained" startIcon={<Iconify icon="solar:track-bold-duotone" />} sx={{ borderRadius: 30, bgcolor: SOFA9_COLORS.pink, color: 'common.white', fontWeight: 'fontWeightBold', boxShadow: `0 4px 0 ${SOFA9_COLORS.black}`, '&:hover': { bgcolor: SOFA9_COLORS.pinkLight, boxShadow: `0 6px 0 ${SOFA9_COLORS.black}` } }}>Theo dõi đơn hàng</Button>
            <Button component={RouterLink} href="/sofa9/products" size="large" variant="outlined" sx={{ borderRadius: 30, borderColor: SOFA9_COLORS.teal, color: SOFA9_COLORS.teal, fontWeight: 'fontWeightBold' }}>Tiếp tục mua sắm</Button>
          </Stack>
        </Stack>
      </Sofa9Section>
    </>
  );
}
