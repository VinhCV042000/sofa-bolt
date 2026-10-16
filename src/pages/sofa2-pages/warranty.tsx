import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';
import { Sofa2Section, Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';
import { useSofa2AdminRows } from 'src/sections/sofa2-admin/sofa2-admin-store';
import { belongsToSofa2Customer, formatSofa2Date, Sofa2CustomerPortalNav } from 'src/sections/sofa2/sofa2-customer-portal';

// ----------------------------------------------------------------------

const metadata = { title: 'Phiếu bảo hành — LUXE Sofa' };

export default function Page() {
  const warrantyStore = useSofa2AdminRows('customer', 'warranties');
  const warranties = warrantyStore.rows
    .map((row, index) => ({ row, index }))
    .filter(({ row }) => belongsToSofa2Customer(row));
  const [claimIndex, setClaimIndex] = useState<number | null>(null);
  const [claimIssue, setClaimIssue] = useState('');
  const [toast, setToast] = useState('');
  const statusColor = (status: string): 'success' | 'warning' | 'error' | 'info' | 'default' => {
    if (status === 'Còn hiệu lực' || status === 'Hoàn tất') return 'success';
    if (status === 'Tiếp nhận' || status === 'Đang kiểm tra' || status === 'Đang sửa chữa') return 'info';
    if (status === 'Hết hạn' || status === 'Từ chối') return 'error';
    return 'warning';
  };
  const submitClaim = () => {
    if (claimIndex === null || !claimIssue.trim()) return;
    warrantyStore.updateRow(claimIndex, {
      ...warrantyStore.rows[claimIndex],
      issue: claimIssue.trim(),
      status: 'Tiếp nhận',
    });
    setClaimIndex(null);
    setClaimIssue('');
    setToast('Đã gửi yêu cầu bảo hành.');
  };

  return (
    <>
      <Helmet><title>{metadata.title}</title></Helmet>

      <Sofa2PageHero
        title="Phiếu bảo hành"
        subtitle="Quản lý phiếu bảo hành sản phẩm — thời hạn, yêu cầu bảo hành và tiến trình sửa chữa."
        image={SOFA2_PAGE_IMAGES.cta}
        overline="Tài khoản"
      />

      <Sofa2Section>
        <Stack spacing={2} sx={{ mb: 4 }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <Typography variant="h4">Phiếu bảo hành của bạn</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>{warranties.length} phiếu bảo hành.</Typography>
        </Stack>
        <Sofa2CustomerPortalNav active="/sofa2/warranty" />

        <Grid container spacing={3}>
          {warranties.map(({ row: w, index }) => (
            <Grid key={String(w.code)} xs={12} md={6}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.06 }}
                spacing={2}
                sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
              >
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box sx={{ width: 48, height: 48, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: 'primary.main' }}>
                      <Iconify icon="solar:shield-check-bold-duotone" width={24} />
                    </Box>
                    <Stack>
                      <Typography variant="subtitle1">{w.code}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{w.product}</Typography>
                    </Stack>
                  </Stack>
                  <Chip label={String(w.status)} size="small" color={statusColor(String(w.status))} variant="soft" />
                </Stack>

                <Divider sx={{ borderStyle: 'dashed' }} />

                <Grid container spacing={2}>
                  <Grid xs={6}>
                    <Stack spacing={0.5}>
                      <Typography variant="caption" sx={{ color: 'text.disabled' }}>Ngày phát hành</Typography>
                      <Typography variant="body2">{formatSofa2Date(w.purchaseDate)}</Typography>
                    </Stack>
                  </Grid>
                  <Grid xs={6}>
                    <Stack spacing={0.5}>
                      <Typography variant="caption" sx={{ color: 'text.disabled' }}>Hết hạn</Typography>
                      <Typography variant="body2">{formatSofa2Date(w.expiry)}</Typography>
                    </Stack>
                  </Grid>
                  <Grid xs={6}>
                    <Stack spacing={0.5}>
                      <Typography variant="caption" sx={{ color: 'text.disabled' }}>Đơn hàng</Typography>
                      <Typography variant="body2">{w.orderCode}</Typography>
                    </Stack>
                  </Grid>
                  <Grid xs={6}>
                    <Stack spacing={0.5}>
                      <Typography variant="caption" sx={{ color: 'text.disabled' }}>Yêu cầu BH</Typography>
                      <Typography variant="body2">{w.issue || 'Chưa có yêu cầu'}</Typography>
                    </Stack>
                  </Grid>
                </Grid>

                {String(w.status) !== 'Hết hạn' && String(w.status) !== 'Từ chối' && (
                  <Stack direction="row" spacing={1}>
                    <Button size="small" variant="outlined" fullWidth startIcon={<Iconify icon="solar:eye-bold-duotone" width={16} />}>
                      Xem chi tiết
                    </Button>
                    {!w.issue && String(w.status) === 'Còn hiệu lực' && (
                      <Button size="small" variant="contained" fullWidth onClick={() => setClaimIndex(index)} startIcon={<Iconify icon="solar:hand-stars-bold-duotone" width={16} />}>
                        Yêu cầu BH
                      </Button>
                    )}
                  </Stack>
                )}
              </Stack>
            </Grid>
          ))}
          {!warranties.length && <Grid xs={12}><Typography align="center">Chưa có phiếu bảo hành nào.</Typography></Grid>}
        </Grid>
      </Sofa2Section>
      <Dialog fullWidth maxWidth="sm" open={claimIndex !== null} onClose={() => setClaimIndex(null)}>
        <DialogTitle>Gửi yêu cầu bảo hành</DialogTitle>
        <DialogContent dividers>
          <TextField
            autoFocus
            fullWidth
            multiline
            minRows={4}
            label="Mô tả tình trạng sản phẩm"
            value={claimIssue}
            onChange={(event) => setClaimIssue(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={() => setClaimIndex(null)}>Đóng</Button>
          <Button variant="contained" disabled={!claimIssue.trim()} onClick={submitClaim}>Gửi yêu cầu</Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={!!toast} message={toast} autoHideDuration={2600} onClose={() => setToast('')} />
    </>
  );
}
