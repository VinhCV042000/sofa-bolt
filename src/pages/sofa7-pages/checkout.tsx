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

import { SOFA7_COLORS } from 'src/sections/sofa7/sofa7-data';
import { Sofa7Section, Sofa7PageHero } from 'src/sections/sofa7-pages/sofa7-page-hero';
import { formatSofa7Price, SOFA7_PAGE_IMAGES, SOFA7_PAGE_PRODUCTS } from 'src/sections/sofa7-pages/sofa7-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Thanh toán — Sofa7' };

const PAYMENTS = [
  { value: 'cod', label: 'Thanh toán khi nhận hàng (COD)', icon: 'solar:hand-money-bold-duotone' },
  { value: 'bank', label: 'Chuyển khoản ngân hàng', icon: 'solar:card-bold-duotone' },
  { value: 'credit', label: 'Thẻ tín dụng / Ghi nợ', icon: 'solar:wallet-bold-duotone' },
];

export default function Page() {
  const [payment, setPayment] = useState('cod');

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
      <Sofa7PageHero title="THANH TOÁN" subtitle="Hoàn tất thông tin giao hàng và phương thức thanh toán cho đơn hàng industrial loft của bạn." image={SOFA7_PAGE_IMAGES.cta} overline="Thanh toán" />

      <Sofa7Section>
        <Grid container spacing={{ xs: 4, md: 5 }}>
          {/* Left: address + payment */}
          <Grid xs={12} md={8}>
            <Stack spacing={4}>
              {/* Shipping address */}
              <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={3} sx={{ p: { xs: 3, md: 4 }, borderRadius: 0, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}` }}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Iconify icon="solar:map-point-bold-duotone" width={24} sx={{ color: SOFA7_COLORS.electric }} />
                  <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>Thông tin giao hàng</Typography>
                </Stack>
                <Grid container spacing={2}>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Họ tên" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 0 } }} /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label="SĐT" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 0 } }} /></Grid>
                  <Grid xs={12}><TextField fullWidth label="Email" type="email" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 0 } }} /></Grid>
                  <Grid xs={12}><TextField fullWidth label="Địa chỉ" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 0 } }} /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Tỉnh/Thành" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 0 } }} /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Quận/Huyện" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 0 } }} /></Grid>
                </Grid>
              </Stack>

              {/* Payment method */}
              <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={3} sx={{ p: { xs: 3, md: 4 }, borderRadius: 0, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}` }}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Iconify icon="solar:card-bold-duotone" width={24} sx={{ color: SOFA7_COLORS.electric }} />
                  <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>Phương thức thanh toán</Typography>
                </Stack>
                <RadioGroup value={payment} onChange={(e) => setPayment(e.target.value)}>
                  <Stack spacing={1.5}>
                    {PAYMENTS.map((p) => (
                      <Box key={p.value} sx={{ p: 2, borderRadius: 0, border: (t) => `1px solid ${payment === p.value ? SOFA7_COLORS.electric : varAlpha(t.vars.palette.grey['500Channel'], 0.2)}`, bgcolor: payment === p.value ? varAlpha(SOFA7_COLORS.electric, 0.06) : 'transparent' }}>
                        <FormControlLabel value={p.value} control={<Radio sx={{ color: SOFA7_COLORS.concrete, '&.Mui-checked': { color: SOFA7_COLORS.electric } }} />} label={
                          <Stack direction="row" spacing={1.5} alignItems="center">
                            <Iconify icon={p.icon} width={22} sx={{ color: SOFA7_COLORS.concrete }} />
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
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inLeft} sx={{ p: { xs: 3, md: 4 }, borderRadius: 0, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}`, position: 'sticky', top: 100 }}>
              <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>Tóm tắt đơn hàng</Typography>
              <Stack spacing={2} divider={<Divider flexItem />}>
                {items.map((it) => (
                  <Stack key={it.id} direction="row" spacing={2} alignItems="center">
                    <Box component="img" src={it.image} sx={{ width: 56, height: 56, borderRadius: 0, objectFit: 'cover' }} />
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
              <Button component={RouterLink} href="/sofa7/checkout/success" size="large" variant="contained" fullWidth sx={{ borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, '&:hover': { bgcolor: SOFA7_COLORS.electric } }} startIcon={<Iconify icon="solar:check-circle-bold-duotone" />}>
                Đặt hàng
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa7Section>
    </>
  );
}
