import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa6PageHero, Sofa6Section } from 'src/sections/sofa6-pages/sofa6-page-hero';
import { SOFA6_PAGE_IMAGES, SOFA6_PRODUCTS, formatSofa6Price } from 'src/sections/sofa6-pages/sofa6-pages-data';
import { SOFA6_COLORS } from 'src/sections/sofa6/sofa6-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Thanh toán — Sofa Earth' };

const METHODS = [
  { value: 'cod', icon: 'solar:hand-money-bold-duotone', title: 'COD', desc: 'Thanh toán tiền mặt khi nhận hàng.' },
  { value: 'bank', icon: 'solar:card-bold-duotone', title: 'Chuyển khoản', desc: 'Chuyển khoản ngân hàng an toàn.' },
  { value: 'credit', icon: 'solar:wallet-bold-duotone', title: 'Thẻ tín dụng', desc: 'Visa, Mastercard, JCB.' },
  { value: 'installment', icon: 'solar:calendar-bold-duotone', title: 'Trả góp', desc: 'Trả góp 0% qua thẻ hoặc ngân hàng.' },
];

const MONTHS = [6, 12, 24, 36];

export default function Page() {
  const [method, setMethod] = useState('credit');
  const [months, setMonths] = useState(12);

  const items = [
    { ...SOFA6_PRODUCTS[0], qty: 1 },
    { ...SOFA6_PRODUCTS[1], qty: 2 },
  ];
  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);
  const shipping = 0;
  const total = subtotal + shipping;
  const monthly = Math.round(total / months);

  return (
    <>
      <Helmet><title>{metadata.title}</title></Helmet>
      <Sofa6PageHero title="Thanh toán" subtitle="Lựa chọn hình thức thanh toán phù hợp và linh hoạt nhất cho bạn." image={SOFA6_PAGE_IMAGES.service3} overline="Thanh toán" />

      {/* Payment methods */}
      <Sofa6Section>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center', maxWidth: 600, mx: 'auto' }} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>Phương thức</Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2">Các hình thức thanh toán</Typography>
          </Box>
        </Stack>
        <Grid container spacing={3}>
          {METHODS.map((mt, index) => (
            <Grid key={mt.value} xs={12} sm={6} md={3}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.08 }}
                spacing={2}
                alignItems="center"
                sx={{ p: 4, height: 1, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, textAlign: 'center' }}
              >
                <Box sx={{ width: 64, height: 64, display: 'flex', borderRadius: 2, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA6_COLORS.terracotta, 0.08), color: SOFA6_COLORS.terracotta }}>
                  <Iconify icon={mt.icon} width={32} />
                </Box>
                <Typography variant="h6">{mt.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{mt.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa6Section>

      {/* Payment summary + card form */}
      <Sofa6Section bg="grey">
        <Grid container spacing={{ xs: 4, md: 5 }}>
          {/* Left: payment form */}
          <Grid xs={12} md={7}>
            <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
              <Typography variant="h5">Chọn phương thức thanh toán</Typography>
              <RadioGroup value={method} onChange={(e) => setMethod(e.target.value)}>
                <Stack spacing={1.5}>
                  {METHODS.map((mt) => (
                    <Box key={mt.value} sx={{ p: 2, borderRadius: 1.5, border: (t) => `1px solid ${method === mt.value ? SOFA6_COLORS.terracotta : varAlpha(t.vars.palette.grey['500Channel'], 0.2)}`, bgcolor: method === mt.value ? varAlpha(SOFA6_COLORS.terracotta, 0.04) : 'transparent' }}>
                      <FormControlLabel value={mt.value} control={<Radio sx={{ color: SOFA6_COLORS.terracotta, '&.Mui-checked': { color: SOFA6_COLORS.terracotta } }} />} label={
                        <Stack direction="row" spacing={1.5} alignItems="center">
                          <Iconify icon={mt.icon} width={22} sx={{ color: SOFA6_COLORS.terracotta }} />
                          <Box>
                            <Typography variant="subtitle2">{mt.title}</Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>{mt.desc}</Typography>
                          </Box>
                        </Stack>
                      } />
                    </Box>
                  ))}
                </Stack>
              </RadioGroup>

              {/* Card details */}
              {method === 'credit' && (
                <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Typography variant="h6">Thông tin thẻ</Typography>
                  <Grid container spacing={2}>
                    <Grid xs={12}><TextField fullWidth label="Số thẻ" placeholder="1234 5678 9012 3456" /></Grid>
                    <Grid xs={12}><TextField fullWidth label="Tên chủ thẻ" /></Grid>
                    <Grid xs={12} sm={6}><TextField fullWidth label="Ngày hết hạn" placeholder="MM/YY" /></Grid>
                    <Grid xs={12} sm={6}><TextField fullWidth label="CVV" type="password" /></Grid>
                  </Grid>
                </Stack>
              )}

              {/* Installment months */}
              {method === 'installment' && (
                <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Typography variant="h6">Trả góp 0%</Typography>
                  <TextField fullWidth select label="Số tháng trả góp" value={months} onChange={(e) => setMonths(Number(e.target.value))}>
                    {MONTHS.map((mo) => <MenuItem key={mo} value={mo}>{mo} tháng</MenuItem>)}
                  </TextField>
                  <Box sx={{ p: 3, borderRadius: 2, bgcolor: varAlpha(SOFA6_COLORS.terracotta, 0.06) }}>
                    <Typography variant="overline" sx={{ color: 'text.disabled' }}>Góp mỗi tháng</Typography>
                    <Typography variant="h4" sx={{ ...textGradient(`135deg, ${SOFA6_COLORS.terracottaLight}, ${SOFA6_COLORS.sageLight}`), mt: 1 }}>{formatSofa6Price(monthly)}</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>* Lãi suất 0% — áp dụng cho thẻ tín dụng</Typography>
                  </Box>
                </Stack>
              )}

              <Button variant="contained" size="large" startIcon={<Iconify icon="solar:check-circle-bold-duotone" />} sx={{ width: 'fit-content' }}>
                Xác nhận thanh toán
              </Button>
            </Stack>
          </Grid>

          {/* Right: payment summary */}
          <Grid xs={12} md={5}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inLeft} sx={{ p: { xs: 3, md: 4 }, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, position: 'sticky', top: 100 }}>
              <Typography variant="h6">Tóm tắt thanh toán</Typography>
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
              {method === 'installment' && (
                <Box sx={{ p: 2, borderRadius: 2, bgcolor: varAlpha(SOFA6_COLORS.terracotta, 0.06) }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>Góp mỗi tháng ({months} tháng)</Typography>
                  <Typography variant="h6" sx={{ color: SOFA6_COLORS.terracotta }}>{formatSofa6Price(monthly)}</Typography>
                </Box>
              )}
            </Stack>
          </Grid>
        </Grid>
      </Sofa6Section>
    </>
  );
}
