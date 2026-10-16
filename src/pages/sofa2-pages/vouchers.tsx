import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';

import { useSofa2AdminRows } from 'src/sections/sofa2-admin/sofa2-admin-store';
import { SOFA2_DEMO_CUSTOMER_ID } from 'src/sections/sofa2-admin/sofa2-customer';
import { Sofa2CustomerPortalNav, formatSofa2Date } from 'src/sections/sofa2/sofa2-customer-portal';
import { Sofa2PageHero, Sofa2Section } from 'src/sections/sofa2/sofa2-page-hero';
import { SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';

export default function Page() {
  const voucherStore = useSofa2AdminRows('customer', 'vouchers');
  const pointStore = useSofa2AdminRows('customer', 'points');
  const profileStore = useSofa2AdminRows('customer', 'profiles');
  const customer = profileStore.rows.find((row) => String(row.customerId) === SOFA2_DEMO_CUSTOMER_ID);
  const customerName = String(customer?.name || 'Nguyễn Minh Anh');
  const [toast, setToast] = useState('');

  const pointBalance = pointStore.rows
    .filter((row) => String(row.customerId) === SOFA2_DEMO_CUSTOMER_ID && String(row.status) !== 'Đã huỷ')
    .reduce((sum, row) => sum + Number(row.points || 0), 0);
  const vouchers = voucherStore.rows
    .map((row, index) => ({ row, index }))
    .filter(({ row }) =>
      (String(row.customerId) === 'Tất cả thành viên' || String(row.customerId) === SOFA2_DEMO_CUSTOMER_ID) &&
      ['Đang phát hành', 'Đã nhận'].includes(String(row.status))
    );

  const claimVoucher = (index: number) => {
    const voucher = voucherStore.rows[index];
    if (!voucher) return;
    const alreadyClaimed = voucherStore.rows.some(
      (row) => String(row.code) === String(voucher.code) &&
        String(row.customerId) === SOFA2_DEMO_CUSTOMER_ID &&
        ['Đã nhận', 'Đã sử dụng'].includes(String(row.status))
    );
    if (alreadyClaimed) {
      setToast('Voucher này đã có trong ví của bạn.');
      return;
    }
    const pointCost = Number(voucher.pointsCost || 0);
    if (pointCost > pointBalance) {
      setToast(`Bạn cần ${pointCost.toLocaleString('vi-VN')} điểm để đổi voucher này.`);
      return;
    }
    voucherStore.createRow({
      ...voucher,
      customerId: SOFA2_DEMO_CUSTOMER_ID,
      customer: customerName,
      status: 'Đã nhận',
    });
    if (pointCost > 0) {
      pointStore.createRow({
        customerId: SOFA2_DEMO_CUSTOMER_ID,
        customer: customerName,
        reason: `Đổi voucher ${String(voucher.code)}`,
        points: -pointCost,
        date: new Date().toISOString().slice(0, 10),
        status: 'Đã ghi nhận',
      });
    }
    setToast(`Đã lưu voucher ${String(voucher.code)} vào ví.`);
  };

  return (
    <>
      <Helmet><title>Voucher của tôi — LUXE Sofa</title></Helmet>
      <Sofa2PageHero
        title="Voucher của tôi"
        subtitle="Lưu ưu đãi dành cho thành viên và theo dõi các mã đã nhận."
        image={SOFA2_PAGE_IMAGES.cta}
        overline="Tài khoản"
      />
      <Sofa2Section>
        <Sofa2CustomerPortalNav active="/sofa2/vouchers" />
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
          <Box>
            <Typography variant="h4">Ưu đãi dành cho bạn</Typography>
            <Typography variant="body2" color="text.secondary">Số dư hiện tại: {pointBalance.toLocaleString('vi-VN')} điểm</Typography>
          </Box>
          <Chip icon={<Iconify icon="solar:ticket-sale-bold-duotone" />} label={`${vouchers.length} voucher`} color="primary" variant="soft" />
        </Stack>
        <Grid container spacing={3}>
          {vouchers.map(({ row, index }) => {
            const isClaimed = String(row.customerId) === SOFA2_DEMO_CUSTOMER_ID;
            return (
              <Grid key={`${row.code}-${row.customerId}-${index}`} xs={12} sm={6} md={4}>
                <Card sx={{ p: 3, height: 1, display: 'flex', flexDirection: 'column' }}>
                  <Stack direction="row" justifyContent="space-between" spacing={1}>
                    <Chip size="small" label={String(row.campaign || 'Ưu đãi thành viên')} color="warning" variant="soft" />
                    {isClaimed && <Chip size="small" label={String(row.status)} color="success" />}
                  </Stack>
                  <Typography variant="h5" sx={{ mt: 2 }}>{String(row.code)}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1, flex: 1 }}>
                    Giảm {String(row.value)} · Đơn tối thiểu {Number(row.minOrder || 0).toLocaleString('vi-VN')}₫
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 2 }}>
                    Hạn dùng: {formatSofa2Date(row.endDate)}
                    {Number(row.pointsCost || 0) > 0 ? ` · ${Number(row.pointsCost).toLocaleString('vi-VN')} điểm` : ''}
                  </Typography>
                  <Button
                    fullWidth
                    sx={{ mt: 2 }}
                    variant={isClaimed ? 'outlined' : 'contained'}
                    disabled={isClaimed}
                    onClick={() => claimVoucher(index)}
                    startIcon={<Iconify icon={isClaimed ? 'eva:checkmark-fill' : 'solar:download-minimalistic-bold-duotone'} />}
                  >
                    {isClaimed ? 'Đã có trong ví' : 'Lưu voucher'}
                  </Button>
                </Card>
              </Grid>
            );
          })}
          {!vouchers.length && <Grid xs={12}><Typography align="center" color="text.secondary">Hiện chưa có voucher dành cho bạn.</Typography></Grid>}
        </Grid>
      </Sofa2Section>
      <Snackbar open={!!toast} message={toast} autoHideDuration={2600} onClose={() => setToast('')} />
    </>
  );
}
