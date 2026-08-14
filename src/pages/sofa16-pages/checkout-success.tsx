import { Helmet } from 'react-helmet-async';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { SOFA16_COLORS } from 'src/sections/sofa16/sofa16-data';
import { SOFA16_PAGE_IMAGES } from 'src/sections/sofa16-pages/sofa16-pages-data';
import { Sofa16Section, Sofa16PageHero } from 'src/sections/sofa16-pages/sofa16-page-hero';
import { sofa16ButtonSx } from 'src/sections/sofa16-pages/sofa16-shop-ui';

export default function Page() {
  return (
    <>
      <Helmet><title>Thanh toán thành công — Sofa16</title></Helmet>

      <Sofa16PageHero overline="HOÀN TẤT" title={<>ĐẶT HÀNG <span>THÀNH CÔNG</span></>} subtitle="Cảm ơn bạn đã tin chọn Sofa16 Riviera." image={SOFA16_PAGE_IMAGES.gallery1} />

      <Sofa16Section bg="cream">
        <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 6 }}>
          <Iconify icon="solar:check-circle-bold-duotone" width={96} sx={{ color: SOFA16_COLORS.olive }} />
          <Typography variant="h4" sx={{ color: SOFA16_COLORS.ink, fontWeight: 'fontWeightLight' }}>Mã đơn hàng: SF16-2026-0912</Typography>
          <Typography variant="body1" sx={{ color: SOFA16_COLORS.inkSoft, maxWidth: 520, lineHeight: 2 }}>
            Chúng tôi đã gửi email xác nhận. Tư vấn viên sẽ liên hệ trong vòng 24 giờ để xác nhận lịch giao lắp.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button component={RouterLink} href="/sofa16/orders/tracking" size="large" variant="contained" sx={sofa16ButtonSx}>Theo dõi đơn hàng</Button>
            <Button component={RouterLink} href="/sofa16/products" size="large" variant="outlined" sx={{ borderRadius: 2, color: SOFA16_COLORS.terracottaDeep, borderColor: SOFA16_COLORS.terracotta }}>Tiếp tục mua sắm</Button>
          </Stack>
        </Stack>
      </Sofa16Section>
    </>
  );
}
