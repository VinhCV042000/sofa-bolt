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

import { Sofa1Section, Sofa1PageHero } from 'src/sections/sofa1-pages/sofa1-page-hero';
import { SOFA1_PRODUCTS, formatSofa1Price, SOFA1_PAGE_IMAGES } from 'src/sections/sofa1-pages/sofa1-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Giỏ hàng — Casa Sofa' };

export default function Page() {
  const [items, setItems] = useState(() => [
    { ...SOFA1_PRODUCTS[0], qty: 1 },
    { ...SOFA1_PRODUCTS[1], qty: 2 },
    { ...SOFA1_PRODUCTS[2], qty: 1 },
  ]);

  const updateQty = (id: string, qty: number) => {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, qty: Math.max(1, qty) } : it)));
  };
  const removeItem = (id: string) => setItems((prev) => prev.filter((it) => it.id !== id));

  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);
  const shipping = subtotal > 0 ? 300000 : 0;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <>
        <Helmet><title>{metadata.title}</title></Helmet>
        <Sofa1PageHero title="Giỏ hàng" subtitle="Kiểm tra lại sản phẩm trước khi thanh toán." image={SOFA1_PAGE_IMAGES.cta} overline="Giỏ hàng" />
        <Sofa1Section>
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: { xs: 6, md: 10 } }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Iconify icon="solar:cart-large-2-bold-duotone" width={96} sx={{ color: 'text.disabled' }} />
            <Typography variant="h4">Giỏ hàng của bạn đang trống</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Hãy khám phá bộ sưu tập sofa Casa và chọn sản phẩm ưng ý.</Typography>
            <Button component={RouterLink} href="/sofa1/products" size="large" variant="contained" startIcon={<Iconify icon="solar:bag-bold-duotone" />}>
              Tiếp tục mua sắm
            </Button>
          </Stack>
        </Sofa1Section>
      </>
    );
  }

  return (
    <>
      <Helmet><title>{metadata.title}</title></Helmet>
      <Sofa1PageHero title="Giỏ hàng" subtitle="Kiểm tra lại sản phẩm trước khi thanh toán." image={SOFA1_PAGE_IMAGES.cta} overline="Giỏ hàng" />

      <Sofa1Section>
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
                    <Typography variant="subtitle2" sx={{ color: 'primary.main', mt: 1 }}>{formatSofa1Price(it.price)}</Typography>
                  </Stack>
                  <TextField
                    type="number"
                    size="small"
                    value={it.qty}
                    onChange={(e) => updateQty(it.id, Number(e.target.value))}
                    sx={{ width: 88 }}
                    inputProps={{ min: 1 }}
                  />
                  <Typography variant="subtitle2" sx={{ minWidth: 120, textAlign: 'right' }}>{formatSofa1Price(it.price * it.qty)}</Typography>
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
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Tạm tính</Typography><Typography>{formatSofa1Price(subtotal)}</Typography></Stack>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Phí vận chuyển</Typography><Typography>{formatSofa1Price(shipping)}</Typography></Stack>
              </Stack>
              <Divider />
              <Stack direction="row" justifyContent="space-between"><Typography variant="h6">Tổng cộng</Typography><Typography variant="h6" sx={{ color: 'primary.main' }}>{formatSofa1Price(total)}</Typography></Stack>
              <Button component={RouterLink} href="/sofa1/checkout" size="large" variant="contained" fullWidth startIcon={<Iconify icon="solar:card-bold-duotone" />}>
                Thanh toán
              </Button>
              <Button component={RouterLink} href="/sofa1/products" variant="outlined" fullWidth>
                Tiếp tục mua sắm
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa1Section>
    </>
  );
}
