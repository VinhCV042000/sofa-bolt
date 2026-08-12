import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { Sofa2Section, Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';
import { SOFA2_PRODUCTS, formatSofa2Price, SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Thanh toán — LUXE Sofa' };

const PAYMENTS = [
  { value: 'cod', label: 'Thanh toán khi nhận hàng (COD)', icon: 'solar:hand-money-bold-duotone' },
  { value: 'bank', label: 'Chuyển khoản ngân hàng', icon: 'solar:card-bold-duotone' },
  { value: 'credit', label: 'Thẻ tín dụng / Ghi nợ', icon: 'solar:wallet-bold-duotone' },
];

export default function Page() {
  const [payment, setPayment] = useState('cod');

  const items = [
    { ...SOFA2_PRODUCTS[0], qty: 1 },
    { ...SOFA2_PRODUCTS[1], qty: 2 },
  ];
  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);
  const shipping = 300000;
  const total = subtotal + shipping;

  return (
    <>
      <Helmet><title>{metadata.title}</title></Helmet>
      <Sofa2PageHero title="Thanh toán" subtitle="Hoàn tất thông tin giao hàng và phương thức thanh toán." image={SOFA2_PAGE_IMAGES.cta} overline="Thanh toán" />

      <Sofa2Section>
        <Grid container spacing={{ xs: 4, md: 5 }}>
          {/* Left: address + payment */}
          <Grid xs={12} md={8}>
            <Stack spacing={4}>
              {/* Shipping address */}
              <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={3} sx={{ p: { xs: 3, md: 4 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Iconify icon="solar:map-point-bold-duotone" width={24} sx={{ color: 'primary.main' }} />
                  <Typography variant="h6">Địa chỉ giao hàng</Typography>
                </Stack>
                <Grid container spacing={2}>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" /></Grid>
                  <Grid xs={12}><TextField fullWidth label="Email" type="email" /></Grid>
                  <Grid xs={12}><TextField fullWidth label="Địa chỉ" /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Thành phố" /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Quận / Huyện" /></Grid>
                  <Grid xs={12}><TextField fullWidth label="Ghi chú giao hàng" multiline rows={2} /></Grid>
                </Grid>
              </Stack>

              {/* Payment method */}
              <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={3} sx={{ p: { xs: 3, md: 4 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
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
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inLeft} sx={{ p: { xs: 3, md: 4 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, position: 'sticky', top: 100 }}>
              <Typography variant="h6">Đơn hàng của bạn</Typography>
              <Stack spacing={2} divider={<Divider flexItem />}>
                {items.map((it) => (
                  <Stack key={it.id} direction="row" spacing={2} alignItems="center">
                    <Box component="img" src={it.image} sx={{ width: 56, height: 56, borderRadius: 1, objectFit: 'cover' }} />
                    <Stack sx={{ flex: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 'fontWeightMedium' }}>{it.name}</Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>SL: {it.qty}</Typography>
                    </Stack>
                    <Typography variant="subtitle2">{formatSofa2Price(it.price * it.qty)}</Typography>
                  </Stack>
                ))}
              </Stack>
              <Stack spacing={1.5}>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Tạm tính</Typography><Typography>{formatSofa2Price(subtotal)}</Typography></Stack>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Phí vận chuyển</Typography><Typography>{formatSofa2Price(shipping)}</Typography></Stack>
              </Stack>
              <Divider />
              <Stack direction="row" justifyContent="space-between"><Typography variant="h6">Tổng cộng</Typography><Typography variant="h6" sx={{ color: 'primary.main' }}>{formatSofa2Price(total)}</Typography></Stack>
              <Button component={RouterLink} href="/sofa2/checkout/success" size="large" variant="contained" fullWidth startIcon={<Iconify icon="solar:check-circle-bold-duotone" />}>
                Đặt hàng
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa2Section>
    </>
  );
}
