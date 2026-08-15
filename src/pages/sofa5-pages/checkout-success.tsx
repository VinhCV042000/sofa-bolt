import { Helmet } from 'react-helmet-async';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { SOFA5_COLORS } from 'src/sections/sofa5/sofa5-data';
import { SOFA5_PAGE_IMAGES } from 'src/sections/sofa5-pages/sofa5-pages-data';
import { Sofa5Section, Sofa5PageHero } from 'src/sections/sofa5-pages/sofa5-page-hero';
import { sofa5ButtonSx } from 'src/sections/sofa5-pages/sofa5-shop-ui';

export default function Page() {
  return (
    <>
      <Helmet><title>Thanh toán thành công — Sofa5</title></Helmet>

      <Sofa5PageHero overline="HOÀN TẤT" title={<>ĐẶT HÀNG <span>THÀNH CÔNG</span></>} subtitle="Cảm ơn bạn đã tin chọn Sofa5 Riviera." image={SOFA5_PAGE_IMAGES.showroom1} />

      <Sofa5Section bg="cream">
        <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 6 }}>
          <Iconify icon="solar:check-circle-bold-duotone" width={96} sx={{ color: SOFA5_COLORS.vàng đồng }} />
          <Typography variant="h4" sx={{ color: SOFA5_COLORS.ink, fontWeight: 'fontWeightLight' }}>Mã đơn hàng: SF16-2026-0912</Typography>
          <Typography variant="body1" sx={{ color: SOFA5_COLORS.inkSoft, maxWidth: 520, lineHeight: 2 }}>
            Chúng tôi đã gửi email xác nhận. Tư vấn viên sẽ liên hệ trong vòng 24 giờ để xác nhận lịch giao lắp.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button component={RouterLink} href="/sofa5/orders/tracking" size="large" variant="contained" sx={sofa5ButtonSx}>Theo dõi đơn hàng</Button>
            <Button component={RouterLink} href="/sofa5/products" size="large" variant="outlined" sx={{ borderRadius: 2, color: SOFA5_COLORS.clayDeep, borderColor: SOFA5_COLORS.clay }}>Tiếp tục mua sắm</Button>
          </Stack>
        </Stack>
      </Sofa5Section>
    </>
  );
}
