import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA8_COLORS } from 'src/sections/sofa8/sofa8-data';
import { SOFA8_PAGE_IMAGES } from 'src/sections/sofa8-pages/sofa8-pages-data';
import { Sofa8Section, Sofa8PageHero } from 'src/sections/sofa8-pages/sofa8-page-hero';

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Thanh toán thành công — Sofa8</title>
      </Helmet>

      <Sofa8PageHero overline="THÀNH CÔNG" title={<>THANH TOÁN <span>THÀNH CÔNG</span></>} subtitle="Cảm ơn bạn đã đặt hàng tại Sofa8!" image={SOFA8_PAGE_IMAGES.cta} />

      <Sofa8Section>
        <Stack spacing={4} alignItems="center" sx={{ textAlign: 'center', maxWidth: 600, mx: 'auto' }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <Iconify icon="solar:check-circle-bold-duotone" width={100} sx={{ color: SOFA8_COLORS.seafoam }} />
          <Typography variant="h3" sx={{ fontWeight: 'fontWeightBold' }}>Đặt hàng thành công!</Typography>
          <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>Đơn hàng #SF8-2025-0001 đã được ghi nhận. Chúng tôi sẽ giao hàng trong 48h và liên hệ để xác nhận.</Typography>
          <Stack direction="row" spacing={2}>
            <Button component={RouterLink} href="/sofa8/orders/tracking" size="large" variant="contained" startIcon={<Iconify icon="solar:track-bold-duotone" />} sx={{ bgcolor: SOFA8_COLORS.coral, color: 'common.white', fontWeight: 'fontWeightBold', '&:hover': { bgcolor: SOFA8_COLORS.coralLight } }}>
              Theo dõi đơn hàng
            </Button>
            <Button component={RouterLink} href="/sofa8/products" size="large" variant="outlined" sx={{ borderColor: SOFA8_COLORS.ocean, color: SOFA8_COLORS.ocean, fontWeight: 'fontWeightBold' }}>
              Tiếp tục mua sắm
            </Button>
          </Stack>
        </Stack>
      </Sofa8Section>
    </>
  );
}
