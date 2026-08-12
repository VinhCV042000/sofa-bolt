import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA6_COLORS } from 'src/sections/sofa6/sofa6-data';
import { Sofa6Section, Sofa6PageHero } from 'src/sections/sofa6-pages/sofa6-page-hero';
import { SOFA6_PRODUCTS, formatSofa6Price, SOFA6_PAGE_IMAGES } from 'src/sections/sofa6-pages/sofa6-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Giỏ hàng — Sofa Earth' };

export default function Page() {
  const [items, setItems] = useState(() => [
    { ...SOFA6_PRODUCTS[0], qty: 1 },
    { ...SOFA6_PRODUCTS[1], qty: 2 },
    { ...SOFA6_PRODUCTS[2], qty: 1 },
  ]);

  const updateQty = (id: string, qty: number) => {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, qty: Math.max(1, qty) } : it)));
  };
  const removeItem = (id: string) => setItems((prev) => prev.filter((it) => it.id !== id));

  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);
  const shipping = subtotal > 0 ? 0 : 0; // Sofa Earth — freeship nội thành
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <>
        <Helmet><title>{metadata.title}</title></Helmet>
        <Sofa6PageHero title="Giỏ hàng" subtitle="Kiểm tra lại sản phẩm trước khi thanh toán." image={SOFA6_PAGE_IMAGES.cta} overline="Giỏ hàng" />
        <Sofa6Section>
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: { xs: 6, md: 10 } }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Iconify icon="solar:cart-large-2-bold-duotone" width={96} sx={{ color: 'text.disabled' }} />
            <Typography variant="h4">Giỏ hàng của bạn đang trống</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Hãy khám phá bộ sưu tập sofa thủ công từ vật liệu thiên nhiên và chọn sản phẩm ưng ý.</Typography>
            <Button component={RouterLink} href="/sofa6/products" size="large" variant="contained" startIcon={<Iconify icon="solar:bag-bold-duotone" />}>
              Tiếp tục mua sắm
            </Button>
          </Stack>
        </Sofa6Section>
      </>
    );
  }

  return (
    <>
      <Helmet><title>{metadata.title}</title></Helmet>
      <Sofa6PageHero title="Giỏ hàng" subtitle="Kiểm tra lại sản phẩm trước khi thanh toán." image={SOFA6_PAGE_IMAGES.cta} overline="Giỏ hàng" />

      <Sofa6Section>
        <Grid container spacing={{ xs: 4, md: 5 }}>
          {/* Cart items */}
          <Grid xs={12} md={8}>
            <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              {items.map((it) => (
                <Stack
                  key={it.id}
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={3}
                  alignItems={{ sm: 'center' }}
                  sx={{ p: { xs: 2, sm: 3 }, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
                >
                  <Box component="img" src={it.image} sx={{ width: 96, height: 96, borderRadius: 1.5, objectFit: 'cover' }} />
                  <Stack sx={{ flex: 1 }}>
                    <Typography variant="subtitle1">{it.name}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{it.material}</Typography>
                    <Typography variant="subtitle2" sx={{ color: SOFA6_COLORS.terracotta, mt: 1 }}>{formatSofa6Price(it.price)}</Typography>
                  </Stack>
                  <TextField
                    type="number"
                    size="small"
                    value={it.qty}
                    onChange={(e) => updateQty(it.id, Number(e.target.value))}
                    sx={{ width: 88 }}
                    inputProps={{ min: 1 }}
                  />
                  <Typography variant="subtitle2" sx={{ minWidth: 120, textAlign: 'right' }}>{formatSofa6Price(it.price * it.qty)}</Typography>
                  <Button onClick={() => removeItem(it.id)} color="error" sx={{ minWidth: 'auto', px: 1 }}>
                    <Iconify icon="solar:trash-bin-trash-bold-duotone" width={22} />
                  </Button>
                </Stack>
              ))}
            </Stack>
          </Grid>

          {/* Order summary */}
          <Grid xs={12} md={4}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inLeft} sx={{ p: { xs: 3, md: 4 }, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, position: 'sticky', top: 100 }}>
              <Typography variant="h6">Tóm tắt đơn hàng</Typography>
              <Stack spacing={1.5}>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Tạm tính</Typography><Typography>{formatSofa6Price(subtotal)}</Typography></Stack>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Phí vận chuyển</Typography><Typography sx={{ color: SOFA6_COLORS.sage }}>Miễn phí</Typography></Stack>
              </Stack>
              <Divider />
              <Stack direction="row" justifyContent="space-between"><Typography variant="h6">Tổng cộng</Typography><Typography variant="h6" sx={{ color: SOFA6_COLORS.terracotta }}>{formatSofa6Price(total)}</Typography></Stack>
              <Button component={RouterLink} href="/sofa6/checkout" size="large" variant="contained" fullWidth startIcon={<Iconify icon="solar:card-bold-duotone" />}>
                Thanh toán
              </Button>
              <Button component={RouterLink} href="/sofa6/products" variant="outlined" fullWidth>
                Tiếp tục mua sắm
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa6Section>
    </>
  );
}
