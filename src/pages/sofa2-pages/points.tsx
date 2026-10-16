import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { useSofa2AdminRows } from 'src/sections/sofa2-admin/sofa2-admin-store';
import { Sofa2CustomerPortalNav, belongsToSofa2Customer, formatSofa2Date } from 'src/sections/sofa2/sofa2-customer-portal';
import { Sofa2PageHero, Sofa2Section } from 'src/sections/sofa2/sofa2-page-hero';
import { SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';

const formatPoints = (value: number) => value.toLocaleString('vi-VN');

export default function Page() {
  const { rows } = useSofa2AdminRows('customer', 'points');
  const transactions = rows.filter((row) => belongsToSofa2Customer(row));
  const effectiveTransactions = transactions.filter((row) => String(row.status) !== 'Đã huỷ');
  const balance = effectiveTransactions.reduce((sum, row) => sum + Number(row.points || 0), 0);
  const earned = effectiveTransactions.reduce((sum, row) => sum + Math.max(Number(row.points || 0), 0), 0);
  const redeemed = effectiveTransactions.reduce((sum, row) => sum + Math.abs(Math.min(Number(row.points || 0), 0)), 0);

  return (
    <>
      <Helmet><title>Điểm tích lũy — LUXE Sofa</title></Helmet>
      <Sofa2PageHero
        title="Điểm tích lũy"
        subtitle="Theo dõi điểm thưởng từ đơn hàng, đánh giá và các chương trình thành viên."
        image={SOFA2_PAGE_IMAGES.team}
        overline="Tài khoản"
      />
      <Sofa2Section>
        <Sofa2CustomerPortalNav active="/sofa2/points" />
        <Grid container spacing={3}>
          {[
            { label: 'Số dư khả dụng', value: balance, icon: 'solar:star-rings-bold-duotone' },
            { label: 'Tổng điểm đã nhận', value: earned, icon: 'solar:gift-bold-duotone' },
            { label: 'Tổng điểm đã đổi', value: redeemed, icon: 'solar:ticket-sale-bold-duotone' },
          ].map((item) => (
            <Grid key={item.label} xs={12} sm={4}>
              <Card sx={{ p: 3, height: 1 }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box sx={{ width: 48, height: 48, display: 'grid', placeItems: 'center', borderRadius: 1.5, bgcolor: 'primary.lighter', color: 'primary.main' }}>
                    <Iconify icon={item.icon} width={26} />
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">{item.label}</Typography>
                    <Typography variant="h4">{formatPoints(item.value)}</Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          ))}
          <Grid xs={12}>
            <Card sx={{ p: { xs: 2, md: 3 } }}>
              <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" spacing={2} sx={{ mb: 2 }}>
                <Box>
                  <Typography variant="h5">Lịch sử điểm</Typography>
                  <Typography variant="body2" color="text.secondary">Điểm được cập nhật đồng bộ từ hệ thống thành viên.</Typography>
                </Box>
                <Button component={RouterLink} href="/sofa2/vouchers" variant="contained" startIcon={<Iconify icon="solar:ticket-sale-bold-duotone" />}>
                  Đổi điểm lấy voucher
                </Button>
              </Stack>
              <Stack divider={<Box sx={{ borderBottom: 1, borderColor: 'divider' }} />}>
                {transactions.map((row, index) => {
                  const amount = Number(row.points || 0);
                  return (
                    <Stack key={`${row.date}-${row.reason}-${index}`} direction={{ xs: 'column', sm: 'row' }} spacing={1.5} justifyContent="space-between" sx={{ py: 2 }}>
                      <Box>
                        <Typography variant="subtitle2">{row.reason || 'Điều chỉnh điểm'}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          {formatSofa2Date(row.date)}{row.expiry ? ` · Hạn dùng ${formatSofa2Date(row.expiry)}` : ''}
                        </Typography>
                      </Box>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Chip size="small" label={String(row.status)} color={String(row.status) === 'Đã ghi nhận' ? 'success' : String(row.status) === 'Đã huỷ' ? 'default' : 'warning'} />
                        <Typography variant="subtitle1" color={amount < 0 ? 'text.secondary' : 'success.main'} sx={{ minWidth: 100, textAlign: 'right' }}>
                          {amount > 0 ? '+' : ''}{formatPoints(amount)} điểm
                        </Typography>
                      </Stack>
                    </Stack>
                  );
                })}
                {!transactions.length && <Typography sx={{ py: 4, textAlign: 'center' }} color="text.secondary">Chưa có giao dịch điểm.</Typography>}
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Sofa2Section>
    </>
  );
}
