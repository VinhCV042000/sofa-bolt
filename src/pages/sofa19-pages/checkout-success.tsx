import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA19_COLORS } from 'src/sections/sofa19/sofa19-data';
import { SOFA19_PAGE_IMAGES } from 'src/sections/sofa19-pages/sofa19-pages-data';
import { Sofa19Section, Sofa19PageHero } from 'src/sections/sofa19-pages/sofa19-page-hero';

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Thanh toán thành công — Sofa19</title>
      </Helmet>

      <Sofa19PageHero overline="THÀNH CÔNG" title={<>THANH TOÁN <span>THÀNH CÔNG</span></>} subtitle="Cảm ơn bạn đã đặt hàng tại Sofa19!" image={SOFA19_PAGE_IMAGES.cta} />

      <Sofa19Section>
        <Stack spacing={4} alignItems="center" sx={{ textAlign: 'center', maxWidth: 600, mx: 'auto' }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <Iconify icon="solar:check-circle-bold-duotone" width={100} sx={{ color: SOFA19_COLORS.jungleLight }} />
          <Typography variant="h3" sx={{ fontWeight: 'fontWeightBold' }}>Đặt hàng thành công!</Typography>
          <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>Đơn hàng #SF9-2025-0001 đã được ghi nhận. Chúng tôi sẽ giao hàng trong 24h và liên hệ để xác nhận.</Typography>
          <Stack direction="row" spacing={2}>
            <Button component={RouterLink} href="/sofa19/orders/tracking" size="large" variant="contained" startIcon={<Iconify icon="solar:track-bold-duotone" />} sx={{ borderRadius: 30, bgcolor: SOFA19_COLORS.coral, color: 'common.white', fontWeight: 'fontWeightBold', boxShadow: `0 4px 0 ${SOFA19_COLORS.ink}`, '&:hover': { bgcolor: SOFA19_COLORS.golden, boxShadow: `0 6px 0 ${SOFA19_COLORS.ink}` } }}>Theo dõi đơn hàng</Button>
            <Button component={RouterLink} href="/sofa19/products" size="large" variant="outlined" sx={{ borderRadius: 30, borderColor: SOFA19_COLORS.jungleLight, color: SOFA19_COLORS.jungleLight, fontWeight: 'fontWeightBold' }}>Tiếp tục mua sắm</Button>
          </Stack>
        </Stack>
      </Sofa19Section>
    </>
  );
}
