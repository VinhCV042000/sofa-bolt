import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa6PageHero, Sofa6Section } from 'src/sections/sofa6-pages/sofa6-page-hero';
import { SOFA6_PAGE_IMAGES, SOFA6_PRODUCTS, formatSofa6Price } from 'src/sections/sofa6-pages/sofa6-pages-data';
import { SOFA6_COLORS } from 'src/sections/sofa6/sofa6-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Đặt hàng thành công — Sofa Earth' };

const ORDER = '#SE20250218001';

export default function Page() {
  const items = [
    { ...SOFA6_PRODUCTS[0], qty: 1 },
    { ...SOFA6_PRODUCTS[1], qty: 2 },
  ];
  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <>
      <Helmet><title>{metadata.title}</title></Helmet>

      <Sofa6PageHero title="Đặt hàng thành công" subtitle="Cảm ơn bạn đã chọn sofa thủ công từ vật liệu thiên nhiên." image={SOFA6_PAGE_IMAGES.cta} overline="Thành công" />

      <Sofa6Section>
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
              bgcolor: varAlpha(SOFA6_COLORS.sage, 0.12),
            }}
          >
            <Iconify icon="solar:check-circle-bold-duotone" width={72} sx={{ color: SOFA6_COLORS.sage }} />
          </Box>

          <Stack spacing={2} alignItems="center" component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h3" sx={{ ...textGradient(`135deg, ${SOFA6_COLORS.sage}, ${SOFA6_COLORS.terracotta}`) }}>
              Đặt hàng thành công!
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Cảm ơn bạn đã mua sắm tại Sofa Earth. Chúng tôi sẽ liên hệ xác nhận đơn hàng trong thời gian sớm nhất.
            </Typography>
          </Stack>

          <Stack spacing={1} alignItems="center" component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: 3, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, width: 1 }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>Mã đơn hàng</Typography>
            <Typography variant="h5" sx={{ color: SOFA6_COLORS.terracotta }}>{ORDER}</Typography>
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
                  <Typography variant="subtitle2">{formatSofa6Price(it.price * it.qty)}</Typography>
                </Stack>
              ))}
            </Stack>
            <Stack spacing={1.5}>
              <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Tạm tính</Typography><Typography>{formatSofa6Price(subtotal)}</Typography></Stack>
              <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Phí vận chuyển</Typography><Typography sx={{ color: SOFA6_COLORS.sage }}>Miễn phí</Typography></Stack>
            </Stack>
            <Divider />
            <Stack direction="row" justifyContent="space-between"><Typography variant="h6">Tổng cộng</Typography><Typography variant="h6" sx={{ color: SOFA6_COLORS.terracotta }}>{formatSofa6Price(total)}</Typography></Stack>
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Button component={RouterLink} href="/sofa6/products" size="large" variant="contained" startIcon={<Iconify icon="solar:bag-bold-duotone" />}>
              Tiếp tục mua sắm
            </Button>
            <Button component={RouterLink} href="/sofa6/orders/tracking" size="large" variant="outlined" startIcon={<Iconify icon="solar:delivery-bold-duotone" />}>
              Theo dõi đơn hàng
            </Button>
          </Stack>
        </Stack>
      </Sofa6Section>
    </>
  );
}
