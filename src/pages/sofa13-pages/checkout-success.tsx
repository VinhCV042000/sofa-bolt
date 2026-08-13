import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA13_COLORS } from 'src/sections/sofa13/sofa13-data';
import { SOFA13_PAGE_IMAGES } from 'src/sections/sofa13-pages/sofa13-pages-data';
import { Sofa13Section, Sofa13PageHero } from 'src/sections/sofa13-pages/sofa13-page-hero';

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Thanh toán thành công — Sofa13</title>
      </Helmet>

      <Sofa13PageHero overline="THÀNH CÔNG" title={<>THANH TOÁN <span>THÀNH CÔNG</span></>} subtitle="Cảm ơn bạn đã đặt hàng tại Sofa13!" image={SOFA13_PAGE_IMAGES.cta} />

      <Sofa13Section>
        <Stack spacing={4} alignItems="center" sx={{ textAlign: 'center', maxWidth: 600, mx: 'auto' }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <Iconify icon="solar:check-circle-bold-duotone" width={100} sx={{ color: SOFA13_COLORS.emeraldBright }} />
          <Typography variant="h3" sx={{ fontWeight: 'fontWeightBold' }}>Đặt hàng thành công!</Typography>
          <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>Đơn hàng #SF9-2025-0001 đã được ghi nhận. Chúng tôi sẽ giao hàng trong 24h và liên hệ để xác nhận.</Typography>
          <Stack direction="row" spacing={2}>
            <Button component={RouterLink} href="/sofa13/orders/tracking" size="large" variant="contained" startIcon={<Iconify icon="solar:track-bold-duotone" />} sx={{ borderRadius: 30, bgcolor: SOFA13_COLORS.gold, color: 'common.white', fontWeight: 'fontWeightBold', boxShadow: `0 4px 0 ${SOFA13_COLORS.noir}`, '&:hover': { bgcolor: SOFA13_COLORS.goldPale, boxShadow: `0 6px 0 ${SOFA13_COLORS.noir}` } }}>Theo dõi đơn hàng</Button>
            <Button component={RouterLink} href="/sofa13/products" size="large" variant="outlined" sx={{ borderRadius: 30, borderColor: SOFA13_COLORS.emeraldBright, color: SOFA13_COLORS.emeraldBright, fontWeight: 'fontWeightBold' }}>Tiếp tục mua sắm</Button>
          </Stack>
        </Stack>
      </Sofa13Section>
    </>
  );
}
