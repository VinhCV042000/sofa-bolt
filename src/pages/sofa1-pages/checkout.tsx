import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { Sofa1PageHero, Sofa1Section } from 'src/sections/sofa1-pages/sofa1-page-hero';
import { SOFA1_PAGE_IMAGES, SOFA1_PRODUCTS, formatSofa1Price } from 'src/sections/sofa1-pages/sofa1-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Thanh toán — Casa Sofa' };

const PAYMENTS = [
  { value: 'cod', label: 'Thanh toán khi nhận hàng (COD)', icon: 'solar:hand-money-bold-duotone' },
  { value: 'bank', label: 'Chuyển khoản ngân hàng', icon: 'solar:card-bold-duotone' },
  { value: 'credit', label: 'Thẻ tín dụng / Ghi nợ', icon: 'solar:wallet-bold-duotone' },
];

export default function Page() {
  const [payment, setPayment] = useState('cod');

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
      <Sofa1PageHero title="Thanh toán" subtitle="Hoàn tất thông tin giao hàng và phương thức thanh toán." image={SOFA1_PAGE_IMAGES.cta} overline="Thanh toán" />

      <Sofa1Section>
        <Grid container spacing={{ xs: 4, md: 5 }}>
          {/* Left: address + payment */}
          <Grid xs={12} md={8}>
            <Stack spacing={4}>
              {/* Shipping address */}
              <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={3} sx={{ p: { xs: 3, md: 4 }, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Iconify icon="solar:map-point-bold-duotone" width={24} sx={{ color: 'primary.main' }} />
                  <Typography variant="h6">Thông tin giao hàng</Typography>
                </Stack>
                <Grid container spacing={2}>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Họ tên" /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label="SĐT" /></Grid>
                  <Grid xs={12}><TextField fullWidth label="Email" type="email" /></Grid>
                  <Grid xs={12}><TextField fullWidth label="Địa chỉ" /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Tỉnh/Thành" /></Grid>
                </Grid>
              </Stack>

              {/* Payment method */}
              <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={3} sx={{ p: { xs: 3, md: 4 }, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Iconify icon="solar:card-bold-duotone" width={24} sx={{ color: 'primary.main' }} />
                  <Typography variant="h6">Phương thức thanh toán</Typography>
                </Stack>
                <RadioGroup value={payment} onChange={(e) => setPayment(e.target.value)}>
                  <Stack spacing={1.5}>
                    {PAYMENTS.map((p) => (
                      <Box key={p.value} sx={{ p: 2, borderRadius: 1.5, border: (t) => `1px solid ${payment === p.value ? t.vars.palette.primary.main : varAlpha(t.vars.palette.grey['500Channel'], 0.2)}`, bgcolor: payment === p.value ? (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.04) : 'transparent' }}>
                        <FormControlLabel value={p.value} control={<Radio />} label={
                          <Stack direction="row" spacing={1.5} alignItems="center">
                            <Iconify icon={p.icon} width={22} sx={{ color: 'primary.main' }} />
                            <Typography variant="body2">{p.label}</Typography>
                          </Stack>
                        } />
                      </Box>
                    ))}
                  </Stack>
                </RadioGroup>
              </Stack>
            </Stack>
          </Grid>

          {/* Right: order summary */}
          <Grid xs={12} md={4}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inLeft} sx={{ p: { xs: 3, md: 4 }, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, position: 'sticky', top: 100 }}>
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
              <Button component={RouterLink} href="/sofa1/checkout/success" size="large" variant="contained" fullWidth startIcon={<Iconify icon="solar:check-circle-bold-duotone" />}>
                Đặt hàng
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa1Section>
    </>
  );
}
