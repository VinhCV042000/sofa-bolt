import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { useSofa2AdminRows } from 'src/sections/sofa2-admin/sofa2-admin-store';
import {
  formatSofa2Date,
  SOFA2_PORTAL_CUSTOMER_ID,
  SOFA2_PORTAL_CUSTOMER_NAME,
} from 'src/sections/sofa2/sofa2-customer-portal';
import { formatSofa2Price, SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';
import { Sofa2Section, Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';

// ----------------------------------------------------------------------

const metadata = { title: 'Lịch sử giao dịch — LUXE Sofa' };

const statusColor: Record<string, 'success' | 'error' | 'warning' | 'default'> = {
  'Thành công': 'success',
  'Thất bại': 'error',
  'Hoàn tiền': 'warning',
  'Đang xử lý': 'warning',
  'Đã hoàn': 'warning',
};

const methodIcon: Record<string, string> = {
  'VNPay QR': 'solar:card-bold-duotone',
  'Chuyển khoản': 'solar:bank-bold-duotone',
  'COD': 'solar:hand-money-bold-duotone',
  'Trả góp': 'solar:card-send-bold-duotone',
};

export default function Page() {
  const { rows } = useSofa2AdminRows('shopping', 'transactions');
  const txns = rows.filter(
    (row) =>
      String(row.customerId ?? '') === SOFA2_PORTAL_CUSTOMER_ID ||
      String(row.customer ?? '') === SOFA2_PORTAL_CUSTOMER_NAME
  );
  const totalSuccess = txns.filter((transaction) => transaction.status === 'Thành công').length;

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
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>{txns.length} giao dịch — {totalSuccess} thành công.</Typography>
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
                {txns.map((t, index) => (
                  <TableRow key={String(t.txnId ?? `txn-${index}`)} sx={{ '&:last-of-type td': { borderBottom: 0 } }}>
                    <TableCell>
                      <Typography variant="subtitle2">{t.txnId}</Typography>
                    </TableCell>
                    <TableCell>{t.order}</TableCell>
                    <TableCell>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Iconify icon={methodIcon[String(t.method)] ?? 'solar:card-bold-duotone'} width={18} sx={{ color: 'text.disabled' }} />
                        <Typography variant="body2">{t.method}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="subtitle2" sx={{ color: 'primary.main' }}>{formatSofa2Price(Number(t.amount ?? 0))}</Typography>
                    </TableCell>
                    <TableCell>{formatSofa2Date(t.date)}</TableCell>
                    <TableCell align="center">
                      <Chip label={String(t.status)} size="small" color={statusColor[String(t.status)] ?? 'default'} variant="soft" />
                    </TableCell>
                  </TableRow>
                ))}
                {!txns.length && <TableRow><TableCell colSpan={6} align="center">Chưa có giao dịch nào.</TableCell></TableRow>}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Sofa2Section>
    </>
  );
}
