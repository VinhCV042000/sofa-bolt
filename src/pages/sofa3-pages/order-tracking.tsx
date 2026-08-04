import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa3PageHero, Sofa3Section } from 'src/sections/sofa3-pages/sofa3-page-hero';
import { SOFA3_PAGE_IMAGES } from 'src/sections/sofa3-pages/sofa3-pages-data';

const metadata = { title: 'Theo dõi đơn hàng - Sofa Terra' };

const ORDERS = [
  { id: 'SOFA3-ORD001', date: '15/01/2025', status: 'Đang giao', items: 2, total: '25.300.000đ' },
  { id: 'SOFA3-ORD002', date: '10/01/2025', status: 'Đã giao', items: 1, total: '13.500.000đ' },
];

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa3PageHero overline="Giỏ hàng" title="Theo dõi đơn hàng" subtitle="Kiểm tra trạng thái đơn hàng của bạn." image={SOFA3_PAGE_IMAGES.cta} />

      <Sofa3Section>
        <Stack spacing={3} component={MotionViewport} sx={{ maxWidth: 720, mx: 'auto' }}>
          {ORDERS.map((order, index) => (
            <Stack key={order.id} component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: index * 0.08 }} spacing={2} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', border: (t) => `1px solid ${varAlpha(t.vars.palette.grey['500Channel'], 0.12)}` }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Stack>
                  <Typography variant="subtitle1">{order.id}</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>Ngày đặt: {order.date} · {order.items} sản phẩm</Typography>
                </Stack>
                <Box sx={{ px: 2, py: 1, borderRadius: 1, bgcolor: order.status === 'Đã giao' ? 'success.main' : 'warning.main', color: 'common.white' }}>
                  <Typography variant="caption" sx={{ fontWeight: 'fontWeightBold' }}>{order.status}</Typography>
                </Box>
              </Stack>
              <Typography variant="subtitle2" sx={{ color: 'success.main' }}>{order.total}</Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <Iconify icon="solar:tracking-bold-duotone" width={20} sx={{ color: 'success.main' }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Xem chi tiết vận chuyển</Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Sofa3Section>
    </>
  );
}
