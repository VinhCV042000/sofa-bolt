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

import { Sofa2Section, Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';
import { useSofa2AdminRows } from 'src/sections/sofa2-admin/sofa2-admin-store';
import { SOFA2_TRACKING_STEPS } from 'src/sections/sofa2-admin/sofa2-shop';
import { formatSofa2Price, SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';

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
  const [code, setCode] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const { rows } = useSofa2AdminRows('shop', 'tracking');
  const norm = (v: unknown) => String(v ?? '').replace(/[#\s.]/g, '').toUpperCase();
  const order = rows.find((r) => norm(r.code) === norm(code) && norm(r.phone) === norm(phone));
  const stepIndex = Math.max(0, SOFA2_TRACKING_STEPS.indexOf(String(order?.step ?? '')));
  const items = String(order?.items ?? '').split(';').map((x) => x.trim()).filter(Boolean).map((x) => {
    const mm = x.match(/^(.*?)\s*x\s*(\d+)$/i);
    return { name: mm ? mm[1] : x, qty: mm ? Number(mm[2]) : 1 };
  });
  const search = () => {
    if (!order) { setError('Không tìm thấy đơn hàng. Kiểm tra lại mã đơn và số điện thoại.'); return; }
    setError(''); setSearched(true);
  };

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
                  <Grid xs={12} sm={6}><TextField fullWidth label="Mã đơn hàng" placeholder="VD: #LX20250218001" value={code} onChange={(e) => setCode(e.target.value)} /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" placeholder="VD: 0901234567" value={phone} onChange={(e) => setPhone(e.target.value)} error={!!error} helperText={error} /></Grid>
                </Grid>
                <Button variant="contained" size="large" startIcon={<Iconify icon="solar:minimalistic-magnifer-bold-duotone" />} sx={{ width: 'fit-content' }} onClick={search}>
                  Tìm đơn hàng
                </Button>
              </Stack>
            </Grid>
          </Grid>
        ) : (
          <Stack spacing={5}>
            {/* Status timeline */}
            <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ mb: 2 }}>
              <Typography variant="h5">Trạng thái đơn hàng #{order?.code}</Typography>
              <Typography sx={{ color: 'text.secondary' }}>Dự kiến giao: {order?.eta} · {order?.carrier} · {order?.status}</Typography>
            </Stack>
            <Grid container spacing={2} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              {STEPS.map((s, index) => {
                const active = index <= stepIndex;
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
                  {items.map((it) => (
                    <Stack key={it.name} direction="row" justifyContent="space-between" sx={{ py: 1 }}>
                      <Typography variant="body2">{it.name} (SL: {it.qty})</Typography>
                      <Typography variant="subtitle2">x{it.qty}</Typography>
                    </Stack>
                  ))}
                  <Divider />
                  <Stack direction="row" justifyContent="space-between"><Typography variant="subtitle2">Tổng cộng</Typography><Typography variant="h6" sx={{ color: 'primary.main' }}>{formatSofa2Price(Number(order?.total ?? 0))}</Typography></Stack>
                </Stack>
              </Grid>
              <Grid xs={12} md={4}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inLeft} spacing={2} sx={{ p: { xs: 3, md: 4 }, borderRadius: 2, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
                  <Typography variant="h6">Địa chỉ giao hàng</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{order?.customer}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{order?.phone}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{order?.address}</Typography>
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
