import { useSearchParams } from 'react-router-dom';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { useSofa2AdminRows } from 'src/sections/sofa2-admin/sofa2-admin-store';
import { formatSofa2Price, SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';
import { Sofa2Section, Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';

export default function Page() {
  const [searchParams] = useSearchParams();
  const orderCode = String(searchParams.get('order') ?? '');
  const { rows: orders } = useSofa2AdminRows('customer', 'customer-orders');
  const { rows: successSettings } = useSofa2AdminRows('shopping', 'success');
  const order = orders.find((row) => String(row.code) === orderCode);
  const successSetting = successSettings.find(
    (row) =>
      row.status === 'Đang áp dụng' &&
      (row.appliesTo === 'Tất cả' || row.appliesTo === order?.payment)
  );
  const heading = String(successSetting?.heading || 'Cảm ơn bạn đã đặt hàng!');
  const message = String(
    successSetting?.body ||
      'Đơn hàng của bạn đã được ghi nhận. Chúng tôi sẽ liên hệ để xác nhận thông tin giao hàng.'
  )
    .replaceAll('{{name}}', String(order?.customer ?? ''))
    .replaceAll('{{code}}', String(order?.code ?? ''));
  const trackingHref = order
    ? `/sofa2/orders/tracking?code=${encodeURIComponent(String(order.code))}&phone=${encodeURIComponent(String(order.phone ?? ''))}`
    : '/sofa2/orders/tracking';

  return (
    <>
      <Helmet><title>Đặt hàng thành công — LUXE Sofa</title></Helmet>
      <Sofa2PageHero
        title="Xác nhận đơn hàng"
        subtitle="Thông tin đơn hàng và bước tiếp theo."
        image={SOFA2_PAGE_IMAGES.cta}
        overline="Thanh toán"
      />
      <Sofa2Section>
        {!order ? (
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: { xs: 6, md: 10 } }}>
            <Alert severity="warning">Không tìm thấy đơn hàng. Vui lòng kiểm tra giỏ hàng hoặc tra cứu bằng mã đơn.</Alert>
            <Button component={RouterLink} href="/sofa2/cart" variant="contained">Quay lại giỏ hàng</Button>
          </Stack>
        ) : (
          <Stack
            component={m.div}
            variants={varFade({ distance: 24 }).inUp}
            spacing={3}
            alignItems="center"
            sx={{ maxWidth: 720, mx: 'auto', p: { xs: 3, md: 6 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (theme) => theme.customShadows.card, textAlign: 'center' }}
          >
            <Box sx={{ width: 80, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', bgcolor: 'success.lighter', color: 'success.main' }}>
              <Iconify icon="solar:check-circle-bold-duotone" width={48} />
            </Box>
            <Typography variant="h3">{heading}</Typography>
            <Typography sx={{ color: 'text.secondary' }}>{message}</Typography>
            <Divider flexItem sx={{ borderStyle: 'dashed' }} />
            <Stack spacing={1} sx={{ width: 1, textAlign: 'left' }}>
              <Stack direction="row" justifyContent="space-between" spacing={2}>
                <Typography color="text.secondary">Mã đơn hàng</Typography>
                <Typography fontWeight="fontWeightBold">{order.code}</Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between" spacing={2}>
                <Typography color="text.secondary">Người nhận</Typography>
                <Typography>{order.customer}</Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between" spacing={2}>
                <Typography color="text.secondary">Phương thức thanh toán</Typography>
                <Typography>{order.payment}</Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between" spacing={2}>
                <Typography color="text.secondary">Tổng thanh toán</Typography>
                <Typography color="primary.main" fontWeight="fontWeightBold">{formatSofa2Price(Number(order.total ?? 0))}</Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between" spacing={2}>
                <Typography color="text.secondary">Trạng thái</Typography>
                <Typography>{order.status}</Typography>
              </Stack>
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }}>
              <Button component={RouterLink} href={trackingHref} variant="contained" startIcon={<Iconify icon="solar:delivery-bold-duotone" />}>
                Theo dõi đơn hàng
              </Button>
              <Button component={RouterLink} href="/sofa2/my-orders" variant="outlined">
                Đơn hàng của tôi
              </Button>
            </Stack>
          </Stack>
        )}
      </Sofa2Section>
    </>
  );
}
