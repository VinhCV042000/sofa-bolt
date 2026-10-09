import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
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

const ORDERS = [
  { id: 'LX-26091502', date: '15/09/2026', items: 'Sofa Oslo 3 Chỗ', total: '25.900.000₫', status: 'Đang sản xuất' },
  { id: 'LX-26091011', date: '10/09/2026', items: 'Sofa Berlin Góc', total: '38.500.000₫', status: 'Đang giao' },
  { id: 'LX-26090403', date: '04/09/2026', items: 'Sofa Helsinki', total: '18.900.000₫', status: 'Đã giao' },
  { id: 'LX-26090201', date: '02/09/2026', items: 'Sofa Copenhagen', total: '42.000.000₫', status: 'Đã huỷ' },
  { id: 'LX-26090101', date: '01/09/2026', items: 'Sofa Munich 2C', total: '15.600.000₫', status: 'Đã giao' },
];

const statusColor: Record<string, 'success' | 'warning' | 'error' | 'info' | 'default'> = {
  'Đã giao': 'success',
  'Đang giao': 'info',
  'Đang sản xuất': 'warning',
  'Đã huỷ': 'error',
};

export default function Page() {
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
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>Bạn có {ORDERS.length} đơn hàng.</Typography>
        </Stack>

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
                {ORDERS.map((o) => (
                  <TableRow key={o.id} sx={{ '&:last-of-type td': { borderBottom: 0 } }}>
                    <TableCell>
                      <Typography variant="subtitle2">{o.id}</Typography>
                    </TableCell>
                    <TableCell>{o.date}</TableCell>
                    <TableCell>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{o.items}</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="subtitle2" sx={{ color: 'primary.main' }}>{o.total}</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Chip label={o.status} size="small" color={statusColor[o.status] ?? 'default'} variant="soft" />
                    </TableCell>
                    <TableCell align="center">
                      <Button component={RouterLink} href="/sofa2/orders/tracking" size="small" variant="outlined" startIcon={<Iconify icon="solar:delivery-bold-duotone" width={16} />}>
                        Theo dõi
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
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
