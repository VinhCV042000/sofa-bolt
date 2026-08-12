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

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA7_COLORS } from 'src/sections/sofa7/sofa7-data';
import { Sofa7Section, Sofa7PageHero } from 'src/sections/sofa7-pages/sofa7-page-hero';
import { formatSofa7Price, SOFA7_PAGE_IMAGES, SOFA7_PAGE_PRODUCTS } from 'src/sections/sofa7-pages/sofa7-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Giỏ hàng — Sofa7' };

export default function Page() {
  const [items, setItems] = useState(() => [
    { ...SOFA7_PAGE_PRODUCTS[0], qty: 1 },
    { ...SOFA7_PAGE_PRODUCTS[1], qty: 2 },
    { ...SOFA7_PAGE_PRODUCTS[2], qty: 1 },
  ]);

  const updateQty = (id: string, qty: number) => {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, qty: Math.max(1, qty) } : it)));
  };
  const removeItem = (id: string) => setItems((prev) => prev.filter((it) => it.id !== id));

  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);
  const shipping = 0; // Sofa7 — freeship nội thành 24h
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <>
        <Helmet><title>{metadata.title}</title></Helmet>
        <Sofa7PageHero title="GIỎ HÀNG" subtitle="Kiểm tra lại sản phẩm trước khi thanh toán." image={SOFA7_PAGE_IMAGES.cta} overline="Giỏ hàng" />
        <Sofa7Section>
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: { xs: 6, md: 10 } }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Iconify icon="solar:cart-large-2-bold-duotone" width={96} sx={{ color: 'text.disabled' }} />
            <Typography variant="h4" sx={{ textTransform: 'uppercase' }}>Giỏ hàng trống</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Khám phá bộ sưu tập sofa industrial loft và chọn sản phẩm phá cách của bạn.</Typography>
            <Button component={RouterLink} href="/sofa7/products" size="large" variant="contained" sx={{ bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, borderRadius: 0, '&:hover': { bgcolor: SOFA7_COLORS.electric } }} startIcon={<Iconify icon="solar:bag-bold-duotone" />}>
              Tiếp tục mua sắm
            </Button>
          </Stack>
        </Sofa7Section>
      </>
    );
  }

  return (
    <>
      <Helmet><title>{metadata.title}</title></Helmet>
      <Sofa7PageHero title="GIỎ HÀNG" subtitle="Kiểm tra lại sản phẩm trước khi thanh toán." image={SOFA7_PAGE_IMAGES.cta} overline="Giỏ hàng" />

      <Sofa7Section>
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
                  sx={{ p: { xs: 2, sm: 3 }, borderRadius: 0, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}` }}
                >
                  <Box component="img" src={it.image} sx={{ width: 96, height: 96, borderRadius: 0, objectFit: 'cover' }} />
                  <Stack sx={{ flex: 1 }}>
                    <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>{it.name}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{it.material}</Typography>
                    <Typography variant="subtitle2" sx={{ color: SOFA7_COLORS.electric, mt: 1, fontWeight: 'fontWeightBold' }}>{formatSofa7Price(it.price)}</Typography>
                  </Stack>
                  <TextField
                    type="number"
                    size="small"
                    value={it.qty}
                    onChange={(e) => updateQty(it.id, Number(e.target.value))}
                    sx={{ width: 88, '& .MuiOutlinedInput-root': { borderRadius: 0 } }}
                    inputProps={{ min: 1 }}
                  />
                  <Typography variant="subtitle2" sx={{ minWidth: 120, textAlign: 'right', fontWeight: 'fontWeightBold' }}>{formatSofa7Price(it.price * it.qty)}</Typography>
                  <Button onClick={() => removeItem(it.id)} color="error" sx={{ minWidth: 'auto', px: 1, borderRadius: 0 }}>
                    <Iconify icon="solar:trash-bin-trash-bold-duotone" width={22} />
                  </Button>
                </Stack>
              ))}
            </Stack>
          </Grid>

          {/* Order summary */}
          <Grid xs={12} md={4}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inLeft} sx={{ p: { xs: 3, md: 4 }, borderRadius: 0, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}`, position: 'sticky', top: 100 }}>
              <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>Tóm tắt đơn hàng</Typography>
              <Stack spacing={1.5}>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Tạm tính</Typography><Typography>{formatSofa7Price(subtotal)}</Typography></Stack>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Phí vận chuyển</Typography><Typography sx={{ color: SOFA7_COLORS.cyan, fontWeight: 'fontWeightBold' }}>Miễn phí 24h</Typography></Stack>
              </Stack>
              <Divider />
              <Stack direction="row" justifyContent="space-between"><Typography variant="h6" sx={{ textTransform: 'uppercase' }}>Tổng cộng</Typography><Typography variant="h6" sx={{ color: SOFA7_COLORS.electric, fontWeight: 'fontWeightBold' }}>{formatSofa7Price(total)}</Typography></Stack>
              <Button component={RouterLink} href="/sofa7/checkout" size="large" variant="contained" fullWidth sx={{ borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, '&:hover': { bgcolor: SOFA7_COLORS.electric } }} startIcon={<Iconify icon="solar:card-bold-duotone" />}>
                Thanh toán
              </Button>
              <Button component={RouterLink} href="/sofa7/products" variant="outlined" fullWidth sx={{ borderRadius: 0, borderColor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.concrete, '&:hover': { borderColor: SOFA7_COLORS.electric, color: SOFA7_COLORS.electric } }}>
                Tiếp tục mua sắm
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa7Section>
    </>
  );
}
