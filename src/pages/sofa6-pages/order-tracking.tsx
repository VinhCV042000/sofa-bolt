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

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA6_COLORS } from 'src/sections/sofa6/sofa6-data';
import { Sofa6Section, Sofa6PageHero } from 'src/sections/sofa6-pages/sofa6-page-hero';
import { formatSofa6Price, SOFA6_PAGE_IMAGES } from 'src/sections/sofa6-pages/sofa6-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Theo dõi đơn hàng — Sofa Earth' };

const STEPS = [
  { icon: 'solar:cart-bold-duotone', label: 'Đặt hàng', desc: 'Đơn hàng đã được tạo' },
  { icon: 'solar:check-circle-bold-duotone', label: 'Xác nhận', desc: 'Đã xác nhận thông tin' },
  { icon: 'solar:hammer-bold-duotone', label: 'Sản xuất', desc: 'Đang đóng sofa thủ công' },
  { icon: 'solar:delivery-bold-duotone', label: 'Giao hàng', desc: 'Đang giao đến bạn' },
];

export default function Page() {
  const [searched, setSearched] = useState(false);

  return (
    <>
      <Helmet><title>{metadata.title}</title></Helmet>
      <Sofa6PageHero title="Theo dõi đơn hàng" subtitle="Nhập mã đơn hàng và email để xem trạng thái giao hàng." image={SOFA6_PAGE_IMAGES.service2} overline="Theo dõi" />

      <Sofa6Section>
        {!searched ? (
          <Grid container justifyContent="center">
            <Grid xs={12} md={7}>
              <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                <Typography variant="h5">Tra cứu đơn hàng</Typography>
                <Grid container spacing={2}>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Mã đơn hàng" placeholder="VD: #SE20250218001" /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Email" type="email" /></Grid>
                </Grid>
                <Button variant="contained" size="large" startIcon={<Iconify icon="solar:minimalistic-magnifer-bold-duotone" />} sx={{ width: 'fit-content' }} onClick={() => setSearched(true)}>
                  Tra cứu
                </Button>
              </Stack>
            </Grid>
          </Grid>
        ) : (
          <Stack spacing={5}>
            {/* Status timeline */}
            <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ mb: 2 }}>
              <Typography variant="h5">Trạng thái đơn hàng #SE20250218001</Typography>
              <Typography sx={{ color: 'text.secondary' }}>Dự kiến giao: 20/02/2025</Typography>
            </Stack>
            <Grid container spacing={2} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              {STEPS.map((s, index) => {
                const active = index <= 2;
                return (
                  <Grid key={s.label} xs={12} sm={6} md={3}>
                    <Stack spacing={2} sx={{ p: 3, height: 1, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, opacity: active ? 1 : 0.5, border: active ? `1px solid ${varAlpha(SOFA6_COLORS.terracotta, 0.24)}` : 'none' }}>
                      <Box sx={{ width: 48, height: 48, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: active ? SOFA6_COLORS.terracotta : (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.12), color: active ? 'common.white' : 'text.disabled' }}>
                        <Iconify icon={s.icon} width={24} />
                      </Box>
                      <Stack>
                        <Typography variant="subtitle1">{index + 1}. {s.label}</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>{s.desc}</Typography>
                      </Stack>
                      {active && <Typography variant="caption" sx={{ color: SOFA6_COLORS.sage }}>✓ Hoàn tất</Typography>}
                    </Stack>
                  </Grid>
                );
              })}
            </Grid>

            {/* Order details */}
            <Grid container spacing={{ xs: 4, md: 5 }}>
              <Grid xs={12} md={8}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: { xs: 3, md: 4 }, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                  <Typography variant="h6">Chi tiết đơn hàng</Typography>
                  {[
                    { name: 'Sofa Terra Lounge', qty: 1, price: 18900000 },
                    { name: 'Sofa Sage Comfort', qty: 2, price: 15500000 },
                  ].map((it) => (
                    <Stack key={it.name} direction="row" justifyContent="space-between" sx={{ py: 1 }}>
                      <Typography variant="body2">{it.name} (SL: {it.qty})</Typography>
                      <Typography variant="subtitle2">{formatSofa6Price(it.price * it.qty)}</Typography>
                    </Stack>
                  ))}
                  <Divider />
                  <Stack direction="row" justifyContent="space-between"><Typography variant="subtitle2">Tổng cộng</Typography><Typography variant="h6" sx={{ color: SOFA6_COLORS.terracotta }}>{formatSofa6Price(18900000 + 15500000 * 2)}</Typography></Stack>
                </Stack>
              </Grid>
              <Grid xs={12} md={4}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inLeft} spacing={2} sx={{ p: { xs: 3, md: 4 }, borderRadius: 3, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
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
      </Sofa6Section>
    </>
  );
}
