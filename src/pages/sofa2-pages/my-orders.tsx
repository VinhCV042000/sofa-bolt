import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useSofa2AdminRows } from 'src/sections/sofa2-admin/sofa2-admin-store';
import { belongsToSofa2Customer, formatSofa2Date, Sofa2CustomerPortalNav } from 'src/sections/sofa2/sofa2-customer-portal';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';
import { Sofa2Section, Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';

// ----------------------------------------------------------------------

const metadata = { title: 'Đơn hàng của tôi — LUXE Sofa' };

const statusColor: Record<string, 'success' | 'warning' | 'error' | 'info' | 'default'> = {
  'Chờ xác nhận': 'warning',
  'Đang xử lý': 'warning',
  'Đã giao': 'success',
  'Hoàn thành': 'success',
  'Đang giao': 'info',
  'Đang sản xuất': 'warning',
  'Đã huỷ': 'error',
};

export default function Page() {
  const { rows } = useSofa2AdminRows('customer', 'customer-orders');
  const { rows: profiles } = useSofa2AdminRows('customer', 'profiles');
  const profile = profiles.find((row) => String(row.customerId) === 'KH-1001');
  const orders = rows.filter((row) => belongsToSofa2Customer(row, 'KH-1001'));

  return (
    <>
      <Helmet><title>{metadata.title}</title></Helmet>

      <Sofa2PageHero
        title="Đơn hàng của tôi"
        subtitle="Theo dõi lịch sử và trạng thái tất cả đơn hàng của bạn tại LUXE Sofa."
        image={SOFA2_PAGE_IMAGES.cta}
        overline="Tài khoản"
      />

      <Sofa2Section>
        <Stack spacing={2} sx={{ mb: 4 }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <Typography variant="h4">Lịch sử đơn hàng</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {profile?.name ? `Đơn hàng của ${profile.name}. ` : ''}Bạn có {orders.length} đơn hàng.
          </Typography>
        </Stack>
        <Sofa2CustomerPortalNav active="/sofa2/my-orders" />

        <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: (t) => t.customShadows.card, overflow: 'hidden' }}>
            <Table>
              <TableHead sx={{ bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08) }}>
                <TableRow>
                  <TableCell>Mã đơn</TableCell>
                  <TableCell>Ngày đặt</TableCell>
                  <TableCell>Sản phẩm</TableCell>
                  <TableCell align="right">Tổng tiền</TableCell>
                  <TableCell align="center">Trạng thái</TableCell>
                  <TableCell align="center">Thao tác</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((o) => (
                  <TableRow key={String(o.code)} sx={{ '&:last-of-type td': { borderBottom: 0 } }}>
                    <TableCell>
                      <Typography variant="subtitle2">{o.code}</Typography>
                    </TableCell>
                    <TableCell>{formatSofa2Date(o.orderDate)}</TableCell>
                    <TableCell>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{o.product}</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="subtitle2" sx={{ color: 'primary.main' }}>{Number(o.total).toLocaleString('vi-VN')}₫</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Chip label={String(o.status)} size="small" color={statusColor[String(o.status)] ?? 'default'} variant="soft" />
                    </TableCell>
                    <TableCell align="center">
                      <Button component={RouterLink} href="/sofa2/orders/tracking" size="small" variant="outlined" startIcon={<Iconify icon="solar:delivery-bold-duotone" width={16} />}>
                        Theo dõi
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                {!orders.length && (
                  <TableRow><TableCell colSpan={6} align="center">Chưa có đơn hàng phù hợp.</TableCell></TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Stack direction="row" justifyContent="center" sx={{ mt: 4 }}>
          <Button component={RouterLink} href="/sofa2/products" variant="outlined" startIcon={<Iconify icon="solar:bag-bold-duotone" />}>
            Tiếp tục mua sắm
          </Button>
        </Stack>
      </Sofa2Section>
    </>
  );
}
