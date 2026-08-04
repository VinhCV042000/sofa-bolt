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

import { Sofa2PageHero, Sofa2Section } from 'src/sections/sofa2/sofa2-page-hero';
import { SOFA2_PAGE_IMAGES, formatSofa2Price } from 'src/sections/sofa2/sofa2-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Theo dõi đơn hàng — LUXE Sofa' };

const STEPS = [
  { icon: 'solar:cart-bold-duotone', label: 'Đặt hàng', desc: 'Đơn hàng đã được tạo' },
  { icon: 'solar:check-circle-bold-duotone', label: 'Xác nhận', desc: 'Đã xác nhận thông tin' },
  { icon: 'solar:hammer-bold-duotone', label: 'Sản xuất', desc: 'Đang sản xuất / đóng gói' },
  { icon: 'solar:delivery-bold-duotone', label: 'Giao hàng', desc: 'Đang giao đến bạn' },
];

export default function Page() {
  const [searched, setSearched] = useState(false);

  return (
    <>
      <Helmet><title>{metadata.title}</title></Helmet>
      <Sofa2PageHero title="Theo dõi đơn hàng" subtitle="Nhập mã đơn hàng và số điện thoại để xem trạng thái giao hàng." image={SOFA2_PAGE_IMAGES.service2} overline="Theo dõi" />

      <Sofa2Section>
        {!searched ? (
          <Grid container justifyContent="center">
            <Grid xs={12} md={7}>
              <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                <Typography variant="h5">Tra cứu đơn hàng</Typography>
                <Grid container spacing={2}>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Mã đơn hàng" placeholder="VD: #LX20250218001" /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" /></Grid>
                </Grid>
                <Button variant="contained" size="large" startIcon={<Iconify icon="solar:minimalistic-magnifer-bold-duotone" />} sx={{ width: 'fit-content' }} onClick={() => setSearched(true)}>
                  Tìm đơn hàng
                </Button>
              </Stack>
            </Grid>
          </Grid>
        ) : (
          <Stack spacing={5}>
            {/* Status timeline */}
            <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ mb: 2 }}>
              <Typography variant="h5">Trạng thái đơn hàng #LX20250218001</Typography>
              <Typography sx={{ color: 'text.secondary' }}>Dự kiến giao: 20/02/2025</Typography>
            </Stack>
            <Grid container spacing={2} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              {STEPS.map((s, index) => {
                const active = index <= 2;
                return (
                  <Grid key={s.label} xs={12} sm={6} md={3}>
                    <Stack spacing={2} sx={{ p: 3, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, opacity: active ? 1 : 0.5, border: active ? (t) => `1px solid ${varAlpha(t.vars.palette.primary.mainChannel, 0.24)}` : 'none' }}>
                      <Box sx={{ width: 48, height: 48, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: active ? 'primary.main' : (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.12), color: active ? 'common.white' : 'text.disabled' }}>
                        <Iconify icon={s.icon} width={24} />
                      </Box>
                      <Stack>
                        <Typography variant="subtitle1">{index + 1}. {s.label}</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>{s.desc}</Typography>
                      </Stack>
                      {active && <Typography variant="caption" sx={{ color: 'success.main' }}>✓ Hoàn tất</Typography>}
                    </Stack>
                  </Grid>
                );
              })}
            </Grid>

            {/* Order details */}
            <Grid container spacing={{ xs: 4, md: 5 }}>
              <Grid xs={12} md={8}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: { xs: 3, md: 4 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                  <Typography variant="h6">Chi tiết đơn hàng</Typography>
                  {[
                    { name: 'Sofa Oslo 3 Chỗ', qty: 1, price: 14500000 },
                    { name: 'Sofa Berlin Góc', qty: 2, price: 22000000 },
                  ].map((it) => (
                    <Stack key={it.name} direction="row" justifyContent="space-between" sx={{ py: 1 }}>
                      <Typography variant="body2">{it.name} (SL: {it.qty})</Typography>
                      <Typography variant="subtitle2">{formatSofa2Price(it.price * it.qty)}</Typography>
                    </Stack>
                  ))}
                  <Divider />
                  <Stack direction="row" justifyContent="space-between"><Typography variant="subtitle2">Tổng cộng</Typography><Typography variant="h6" sx={{ color: 'primary.main' }}>{formatSofa2Price(14500000 + 22000000 * 2 + 300000)}</Typography></Stack>
                </Stack>
              </Grid>
              <Grid xs={12} md={4}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inLeft} spacing={2} sx={{ p: { xs: 3, md: 4 }, borderRadius: 2, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
                  <Typography variant="h6">Địa chỉ giao hàng</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Nguyễn Minh Anh</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>0901 234 567</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>123 Nguyễn Trãi, Thanh Xuân, Hà Nội</Typography>
                </Stack>
              </Grid>
            </Grid>

            <Button onClick={() => setSearched(false)} variant="outlined" sx={{ width: 'fit-content' }} startIcon={<Iconify icon="solar:undo-left-round-bold-duotone" />}>
              Tra cứu đơn khác
            </Button>
          </Stack>
        )}
      </Sofa2Section>
    </>
  );
}
