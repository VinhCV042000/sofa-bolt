import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';
import { useTheme } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa1PageHero, Sofa1Section } from 'src/sections/sofa1-pages/sofa1-page-hero';
import { SOFA1_PAGE_IMAGES, SOFA1_PRODUCTS, formatSofa1Price } from 'src/sections/sofa1-pages/sofa1-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Đặt hàng thành công — Casa Sofa' };

const ORDER = '#CS20250218001';

export default function Page() {
  const theme = useTheme();

  const items = [
    { ...SOFA1_PRODUCTS[0], qty: 1 },
    { ...SOFA1_PRODUCTS[1], qty: 2 },
  ];
  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);
  const shipping = 300000;
  const total = subtotal + shipping;

  return (
    <>
      <Helmet><title>{metadata.title}</title></Helmet>

      <Sofa1PageHero title="Đặt hàng thành công" subtitle="Cảm ơn bạn đã mua sắm tại Casa Sofa." image={SOFA1_PAGE_IMAGES.cta} overline="Thành công" />

      <Sofa1Section>
        <Stack spacing={5} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }} component={MotionViewport}>
          <Box
            component={m.div}
            variants={varFade({ distance: 24 }).inUp}
            sx={{
              width: 120,
              height: 120,
              display: 'flex',
              borderRadius: '50%',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: (t) => varAlpha(t.vars.palette.success.mainChannel, 0.12),
            }}
          >
            <Iconify icon="solar:check-circle-bold-duotone" width={72} sx={{ color: 'success.main' }} />
          </Box>

          <Stack spacing={2} alignItems="center" component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h3" sx={{ ...textGradient(`135deg, ${theme.vars.palette.success.main}, ${theme.vars.palette.primary.main}`) }}>
              Đặt hàng thành công!
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Cảm ơn bạn đã mua sắm tại Casa Sofa. Chúng tôi sẽ liên hệ xác nhận đơn hàng trong thời gian sớm nhất.
            </Typography>
          </Stack>

          <Stack spacing={1} alignItems="center" component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: 3, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, width: 1 }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>Mã đơn hàng</Typography>
            <Typography variant="h5" sx={{ color: 'primary.main' }}>{ORDER}</Typography>
          </Stack>

          {/* Order summary */}
          <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: { xs: 3, md: 4 }, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, width: 1, textAlign: 'left' }}>
            <Typography variant="h6">Tóm tắt đơn hàng</Typography>
            <Stack spacing={2} divider={<Divider flexItem />}>
              {items.map((it) => (
                <Stack key={it.id} direction="row" spacing={2} alignItems="center">
                  <Box component="img" src={it.image} sx={{ width: 56, height: 56, borderRadius: 1, objectFit: 'cover' }} />
                  <Stack sx={{ flex: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 'fontWeightMedium' }}>{it.name}</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>SL: {it.qty}</Typography>
                  </Stack>
                  <Typography variant="subtitle2">{formatSofa1Price(it.price * it.qty)}</Typography>
                </Stack>
              ))}
            </Stack>
            <Stack spacing={1.5}>
              <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Tạm tính</Typography><Typography>{formatSofa1Price(subtotal)}</Typography></Stack>
              <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Phí vận chuyển</Typography><Typography>{formatSofa1Price(shipping)}</Typography></Stack>
            </Stack>
            <Divider />
            <Stack direction="row" justifyContent="space-between"><Typography variant="h6">Tổng cộng</Typography><Typography variant="h6" sx={{ color: 'primary.main' }}>{formatSofa1Price(total)}</Typography></Stack>
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Button component={RouterLink} href="/sofa1/products" size="large" variant="contained" startIcon={<Iconify icon="solar:bag-bold-duotone" />}>
              Tiếp tục mua sắm
            </Button>
            <Button component={RouterLink} href="/sofa1/orders/tracking" size="large" variant="outlined" startIcon={<Iconify icon="solar:delivery-bold-duotone" />}>
              Theo dõi đơn hàng
            </Button>
          </Stack>
        </Stack>
      </Sofa1Section>
    </>
  );
}
