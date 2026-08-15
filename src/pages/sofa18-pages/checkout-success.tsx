import { Helmet } from 'react-helmet-async';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { SOFA18_COLORS } from 'src/sections/sofa18/sofa18-data';
import { SOFA18_PAGE_IMAGES } from 'src/sections/sofa18-pages/sofa18-pages-data';
import { Sofa18Section, Sofa18PageHero } from 'src/sections/sofa18-pages/sofa18-page-hero';
import { sofa18ButtonSx } from 'src/sections/sofa18-pages/sofa18-shop-ui';

export default function Page() {
  return (
    <>
      <Helmet><title>Thanh toán thành công — Sofa18</title></Helmet>

      <Sofa18PageHero overline="HOÀN TẤT" title={<>ĐẶT HÀNG <span>THÀNH CÔNG</span></>} subtitle="Cảm ơn bạn đã tin chọn Sofa18 Riviera." image={SOFA18_PAGE_IMAGES.showroom1} />

      <Sofa18Section bg="cream">
        <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 6 }}>
          <Iconify icon="solar:check-circle-bold-duotone" width={96} sx={{ color: SOFA18_COLORS.sage }} />
          <Typography variant="h4" sx={{ color: SOFA18_COLORS.ink, fontWeight: 'fontWeightLight' }}>Mã đơn hàng: SF16-2026-0912</Typography>
          <Typography variant="body1" sx={{ color: SOFA18_COLORS.inkSoft, maxWidth: 520, lineHeight: 2 }}>
            Chúng tôi đã gửi email xác nhận. Tư vấn viên sẽ liên hệ trong vòng 24 giờ để xác nhận lịch giao lắp.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button component={RouterLink} href="/sofa18/orders/tracking" size="large" variant="contained" sx={sofa18ButtonSx}>Theo dõi đơn hàng</Button>
            <Button component={RouterLink} href="/sofa18/products" size="large" variant="outlined" sx={{ borderRadius: 2, color: SOFA18_COLORS.clayDeep, borderColor: SOFA18_COLORS.clay }}>Tiếp tục mua sắm</Button>
          </Stack>
        </Stack>
      </Sofa18Section>
    </>
  );
}
