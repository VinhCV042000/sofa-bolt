import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA7_COLORS } from 'src/sections/sofa7/sofa7-data';
import { Sofa7Section, Sofa7PageHero } from 'src/sections/sofa7-pages/sofa7-page-hero';
import { formatSofa7Price, SOFA7_PAGE_IMAGES, SOFA7_PAGE_PRODUCTS } from 'src/sections/sofa7-pages/sofa7-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Đặt hàng thành công — Sofa7' };

export default function Page() {
  const orderNo = `#SF7-${  Math.floor(100000 + Math.random() * 900000)}`;
  const items = [
    { ...SOFA7_PAGE_PRODUCTS[0], qty: 1 },
    { ...SOFA7_PAGE_PRODUCTS[1], qty: 2 },
  ];
  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <>
      <Helmet><title>{metadata.title}</title></Helmet>
      <Sofa7PageHero title="ĐẶT HÀNG THÀNH CÔNG" subtitle="Cảm ơn bạn đã đặt hàng. Sofa7 sẽ giao hàng trong 24h nội thành." image={SOFA7_PAGE_IMAGES.cta} overline="Thành công" />

      {/* Success message */}
      <Sofa7Section>
        <Stack spacing={4} alignItems="center" sx={{ textAlign: 'center', maxWidth: 720, mx: 'auto' }} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ width: 120, height: 120, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete }}>
            <Iconify icon="solar:check-circle-bold-duotone" width={64} />
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ ...textGradient(`90deg, ${SOFA7_COLORS.electric} 0%, ${SOFA7_COLORS.cyan} 100%`), textTransform: 'uppercase' }}>
              Đặt hàng thành công!
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Đơn hàng của bạn đã được xác nhận. Chúng tôi sẽ liên hệ trong thời gian sớm nhất
              để sắp xếp giao hàng và lắp đặt miễn phí.
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: 2, borderRadius: 0, border: `2px solid ${SOFA7_COLORS.electric}` }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>MÃ ĐƠN HÀNG</Typography>
            <Typography variant="h4" sx={{ fontWeight: 'fontWeightBold', textTransform: 'uppercase' }}>{orderNo}</Typography>
          </Box>
        </Stack>
      </Sofa7Section>

      {/* Order summary */}
      <Sofa7Section bg="grey">
        <Grid container justifyContent="center">
          <Grid xs={12} md={8}>
            <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 0, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}` }}>
              <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>Tóm tắt đơn hàng</Typography>
              <Stack spacing={2} divider={<Divider flexItem />}>
                {items.map((it) => (
                  <Stack key={it.id} direction="row" spacing={2} alignItems="center">
                    <Box component="img" src={it.image} sx={{ width: 64, height: 64, borderRadius: 0, objectFit: 'cover' }} />
                    <Stack sx={{ flex: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 'fontWeightMedium', textTransform: 'uppercase' }}>{it.name}</Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>SL: {it.qty}</Typography>
                    </Stack>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightBold' }}>{formatSofa7Price(it.price * it.qty)}</Typography>
                  </Stack>
                ))}
              </Stack>
              <Stack spacing={1.5}>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Tạm tính</Typography><Typography>{formatSofa7Price(subtotal)}</Typography></Stack>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Phí vận chuyển</Typography><Typography sx={{ color: SOFA7_COLORS.cyan, fontWeight: 'fontWeightBold' }}>Miễn phí 24h</Typography></Stack>
              </Stack>
              <Divider />
              <Stack direction="row" justifyContent="space-between"><Typography variant="h6" sx={{ textTransform: 'uppercase' }}>Tổng cộng</Typography><Typography variant="h6" sx={{ color: SOFA7_COLORS.electric, fontWeight: 'fontWeightBold' }}>{formatSofa7Price(total)}</Typography></Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button component={RouterLink} href="/sofa7/products" size="large" variant="contained" sx={{ borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, '&:hover': { bgcolor: SOFA7_COLORS.electric } }} startIcon={<Iconify icon="solar:bag-bold-duotone" />}>
                  Tiếp tục mua sắm
                </Button>
                <Button component={RouterLink} href="/sofa7/orders/tracking" size="large" variant="outlined" sx={{ borderRadius: 0, borderColor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.concrete, '&:hover': { borderColor: SOFA7_COLORS.electric, color: SOFA7_COLORS.electric } }} startIcon={<Iconify icon="solar:delivery-bold-duotone" />}>
                  Theo dõi đơn hàng
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Sofa7Section>
    </>
  );
}
