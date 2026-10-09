import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
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

const metadata = { title: 'Lịch sử giao dịch — LUXE Sofa' };

const TXNS = [
  { id: 'TXN-26091501', order: 'LX-26091502', method: 'VNPay QR', amount: '25.900.000₫', date: '15/09/2026', status: 'Thành công' },
  { id: 'TXN-26091002', order: 'LX-26091011', method: 'Chuyển khoản', amount: '11.550.000₫', date: '10/09/2026', status: 'Thành công' },
  { id: 'TXN-26090403', order: 'LX-26090403', method: 'COD', amount: '18.900.000₫', date: '08/09/2026', status: 'Thành công' },
  { id: 'TXN-26090201', order: 'LX-26090201', method: 'VNPay QR', amount: '42.000.000₫', date: '02/09/2026', status: 'Thất bại' },
  { id: 'TXN-26090101', order: 'LX-26090101', method: 'Trả góp', amount: '32.000.000₫', date: '01/09/2026', status: 'Hoàn tiền' },
];

const statusColor: Record<string, 'success' | 'error' | 'warning' | 'default'> = {
  'Thành công': 'success',
  'Thất bại': 'error',
  'Hoàn tiền': 'warning',
};

const methodIcon: Record<string, string> = {
  'VNPay QR': 'solar:card-bold-duotone',
  'Chuyển khoản': 'solar:bank-bold-duotone',
  'COD': 'solar:hand-money-bold-duotone',
  'Trả góp': 'solar:card-send-bold-duotone',
};

export default function Page() {
  const totalSuccess = TXNS.filter((t) => t.status === 'Thành công').length;

  return (
    <>
      <Helmet><title>{metadata.title}</title></Helmet>

      <Sofa2PageHero
        title="Lịch sử giao dịch"
        subtitle="Tất cả giao dịch thanh toán của bạn — phương thức, số tiền và trạng thái."
        image={SOFA2_PAGE_IMAGES.cta}
        overline="Tài khoản"
      />

      <Sofa2Section>
        <Stack spacing={2} sx={{ mb: 4 }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <Typography variant="h4">Giao dịch thanh toán</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>{TXNS.length} giao dịch — {totalSuccess} thành công.</Typography>
        </Stack>

        <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: (t) => t.customShadows.card, overflow: 'hidden' }}>
            <Table>
              <TableHead sx={{ bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08) }}>
                <TableRow>
                  <TableCell>Mã giao dịch</TableCell>
                  <TableCell>Mã đơn</TableCell>
                  <TableCell>Phương thức</TableCell>
                  <TableCell align="right">Số tiền</TableCell>
                  <TableCell>Ngày</TableCell>
                  <TableCell align="center">Trạng thái</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {TXNS.map((t) => (
                  <TableRow key={t.id} sx={{ '&:last-of-type td': { borderBottom: 0 } }}>
                    <TableCell>
                      <Typography variant="subtitle2">{t.id}</Typography>
                    </TableCell>
                    <TableCell>{t.order}</TableCell>
                    <TableCell>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Iconify icon={methodIcon[t.method] ?? 'solar:card-bold-duotone'} width={18} sx={{ color: 'text.disabled' }} />
                        <Typography variant="body2">{t.method}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="subtitle2" sx={{ color: 'primary.main' }}>{t.amount}</Typography>
                    </TableCell>
                    <TableCell>{t.date}</TableCell>
                    <TableCell align="center">
                      <Chip label={t.status} size="small" color={statusColor[t.status] ?? 'default'} variant="soft" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Sofa2Section>
    </>
  );
}
