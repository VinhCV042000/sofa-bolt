import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { Sofa7PageHero, Sofa7Section } from 'src/sections/sofa7-pages/sofa7-page-hero';
import { SOFA7_PAGE_IMAGES, formatSofa7Price } from 'src/sections/sofa7-pages/sofa7-pages-data';
import { SOFA7_COLORS } from 'src/sections/sofa7/sofa7-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Theo dõi đơn hàng — Sofa7' };

const STEPS = [
  { icon: 'solar:cart-bold-duotone', label: 'Đặt hàng', desc: 'Đơn hàng đã được tạo' },
  { icon: 'solar:check-circle-bold-duotone', label: 'Xác nhận', desc: 'Đã xác nhận thông tin' },
  { icon: 'solar:hammer-bold-duotone', label: 'Sản xuất', desc: 'Đang đóng sofa industrial' },
  { icon: 'solar:delivery-bold-duotone', label: 'Giao hàng', desc: 'Đang giao 24h đến bạn' },
];

export default function Page() {
  const [searched, setSearched] = useState(false);

  return (
    <>
      <Helmet><title>{metadata.title}</title></Helmet>
      <Sofa7PageHero title="THEO DÕI ĐƠN HÀNG" subtitle="Nhập mã đơn hàng và email để xem trạng thái giao hàng." image={SOFA7_PAGE_IMAGES.service2} overline="Theo dõi" />

      <Sofa7Section>
        {!searched ? (
          <Grid container justifyContent="center">
            <Grid xs={12} md={7}>
              <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 0, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}` }}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Iconify icon="solar:minimalistic-magnifer-bold-duotone" width={28} sx={{ color: SOFA7_COLORS.electric }} />
                  <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>Tra cứu đơn hàng</Typography>
                </Stack>
                <Grid container spacing={2}>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Mã đơn hàng" placeholder="VD: #SF7-20250218001" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 0 } }} /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Email" type="email" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 0 } }} /></Grid>
                </Grid>
                <Button variant="contained" size="large" startIcon={<Iconify icon="solar:minimalistic-magnifer-bold-duotone" />} sx={{ width: 'fit-content', bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, borderRadius: 0, '&:hover': { bgcolor: SOFA7_COLORS.electric } }} onClick={() => setSearched(true)}>
                  Tra cứu
                </Button>
              </Stack>
            </Grid>
          </Grid>
        ) : (
          <Stack spacing={5}>
            {/* Status timeline */}
            <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ mb: 2 }}>
              <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>Trạng thái đơn hàng #SF7-20250218001</Typography>
              <Typography sx={{ color: 'text.secondary' }}>Dự kiến giao: 20/02/2025 · Giao 24h nội thành</Typography>
            </Stack>
            <Grid container spacing={2} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              {STEPS.map((s, index) => {
                const active = index <= 2;
                return (
                  <Grid key={s.label} xs={12} sm={6} md={3}>
                    <Stack spacing={2} sx={{ p: 3, height: 1, borderRadius: 0, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, border: active ? `1px solid ${varAlpha(SOFA7_COLORS.electric, 0.4)}` : `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}`, opacity: active ? 1 : 0.5 }}>
                      <Box sx={{ width: 48, height: 48, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: active ? SOFA7_COLORS.electric : (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.12), color: active ? SOFA7_COLORS.concrete : 'text.disabled' }}>
                        <Iconify icon={s.icon} width={24} />
                      </Box>
                      <Stack>
                        <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>{index + 1}. {s.label}</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>{s.desc}</Typography>
                      </Stack>
                      {active && <Typography variant="caption" sx={{ color: SOFA7_COLORS.cyan, fontWeight: 'fontWeightBold' }}>✓ HOÀN TẤT</Typography>}
                    </Stack>
                  </Grid>
                );
              })}
            </Grid>

            {/* Order details */}
            <Grid container spacing={{ xs: 4, md: 5 }}>
              <Grid xs={12} md={8}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: { xs: 3, md: 4 }, borderRadius: 0, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}` }}>
                  <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>Chi tiết đơn hàng</Typography>
                  {[
                    { name: 'Sofa Brick Leather', qty: 1, price: 22500000 },
                    { name: 'Sofa Street Red', qty: 2, price: 13900000 },
                  ].map((it) => (
                    <Stack key={it.name} direction="row" justifyContent="space-between" sx={{ py: 1 }}>
                      <Typography variant="body2" sx={{ textTransform: 'uppercase' }}>{it.name} (SL: {it.qty})</Typography>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightBold' }}>{formatSofa7Price(it.price * it.qty)}</Typography>
                    </Stack>
                  ))}
                  <Divider />
                  <Stack direction="row" justifyContent="space-between"><Typography variant="subtitle2" sx={{ textTransform: 'uppercase' }}>Tổng cộng</Typography><Typography variant="h6" sx={{ color: SOFA7_COLORS.electric, fontWeight: 'fontWeightBold' }}>{formatSofa7Price(22500000 + 13900000 * 2)}</Typography></Stack>
                </Stack>
              </Grid>
              <Grid xs={12} md={4}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inLeft} spacing={2} sx={{ p: { xs: 3, md: 4 }, borderRadius: 0, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04), border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}` }}>
                  <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>Địa chỉ giao hàng</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Nguyễn Minh Anh</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>0901 234 567</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>123 Nguyễn Trãi, Thanh Xuân, Hà Nội</Typography>
                </Stack>
              </Grid>
            </Grid>

            <Button onClick={() => setSearched(false)} variant="outlined" sx={{ width: 'fit-content', borderRadius: 0, borderColor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.concrete, '&:hover': { borderColor: SOFA7_COLORS.electric, color: SOFA7_COLORS.electric } }} startIcon={<Iconify icon="solar:undo-left-round-bold-duotone" />}>
              Tra cứu đơn khác
            </Button>
          </Stack>
        )}
      </Sofa7Section>
    </>
  );
}
