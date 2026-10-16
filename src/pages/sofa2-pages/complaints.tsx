import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';

import { useSofa2AdminRows } from 'src/sections/sofa2-admin/sofa2-admin-store';
import { SOFA2_DEMO_CUSTOMER_ID } from 'src/sections/sofa2-admin/sofa2-customer';
import { Sofa2CustomerPortalNav, formatSofa2Date } from 'src/sections/sofa2/sofa2-customer-portal';
import { Sofa2PageHero, Sofa2Section } from 'src/sections/sofa2/sofa2-page-hero';
import { SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';

const TYPES = ['Sản phẩm', 'Giao hàng', 'Lắp đặt', 'Dịch vụ', 'Thanh toán', 'Khác'];

export default function Page() {
  const complaintStore = useSofa2AdminRows('customer', 'complaints');
  const profileStore = useSofa2AdminRows('customer', 'profiles');
  const customer = profileStore.rows.find((row) => String(row.customerId) === SOFA2_DEMO_CUSTOMER_ID);
  const customerName = String(customer?.name || 'Nguyễn Minh Anh');
  const complaints = complaintStore.rows
    .map((row, index) => ({ row, index }))
    .filter(({ row }) => String(row.customerId) === SOFA2_DEMO_CUSTOMER_ID);
  const [form, setForm] = useState({ type: TYPES[0], orderCode: '', subject: '', content: '' });
  const [toast, setToast] = useState('');

  const submit = () => {
    if (!form.subject.trim() || !form.content.trim()) {
      setToast('Vui lòng nhập tiêu đề và mô tả vấn đề.');
      return;
    }
    complaintStore.createRow({
      code: `KN-${Date.now().toString().slice(-6)}`,
      customerId: SOFA2_DEMO_CUSTOMER_ID,
      customer: customerName,
      type: form.type,
      orderCode: form.orderCode.trim(),
      subject: form.subject.trim(),
      content: form.content.trim(),
      resolution: '',
      priority: 'Trung bình',
      owner: 'Chưa gán',
      deadline: '',
      compensate: 'Không',
      created: new Date().toISOString().slice(0, 10),
      status: 'Mới',
    });
    setForm({ type: TYPES[0], orderCode: '', subject: '', content: '' });
    setToast('Đã gửi khiếu nại. Bộ phận chăm sóc khách hàng sẽ liên hệ bạn.');
  };

  return (
    <>
      <Helmet><title>Khiếu nại & yêu cầu hỗ trợ — LUXE Sofa</title></Helmet>
      <Sofa2PageHero
        title="Khiếu nại & hỗ trợ"
        subtitle="Gửi yêu cầu và theo dõi tiến trình xử lý trực tiếp từ tài khoản của bạn."
        image={SOFA2_PAGE_IMAGES.service1}
        overline="Tài khoản"
      />
      <Sofa2Section>
        <Sofa2CustomerPortalNav active="/sofa2/complaints" />
        <Grid container spacing={3}>
          <Grid xs={12} md={7}>
            <Stack spacing={2}>
              <Typography variant="h4">Yêu cầu của bạn</Typography>
              {complaints.map(({ row }) => (
                <Card key={String(row.code)} sx={{ p: 2.5 }}>
                  <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" spacing={1}>
                    <Box>
                      <Typography variant="subtitle1">{row.subject || row.content}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {row.code} · {row.type} · {formatSofa2Date(row.created)}
                      </Typography>
                    </Box>
                    <Chip size="small" label={String(row.status)} color={String(row.status) === 'Đã giải quyết' ? 'success' : String(row.status) === 'Mới' ? 'warning' : 'info'} />
                  </Stack>
                  <Typography variant="body2" sx={{ mt: 1.5 }}>{row.content}</Typography>
                  {row.resolution && (
                    <Typography variant="body2" color="primary.main" sx={{ mt: 1 }}>
                      Phản hồi: {row.resolution}
                    </Typography>
                  )}
                  {row.orderCode && <Typography variant="caption" color="text.secondary">Đơn liên quan: {row.orderCode}</Typography>}
                </Card>
              ))}
              {!complaints.length && <Card sx={{ p: 3 }}><Typography color="text.secondary">Bạn chưa gửi yêu cầu nào.</Typography></Card>}
            </Stack>
          </Grid>
          <Grid xs={12} md={5}>
            <Card sx={{ p: { xs: 2.5, md: 3 } }}>
              <Stack spacing={2}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Iconify icon="solar:chat-round-dots-bold-duotone" width={25} />
                  <Typography variant="h5">Tạo khiếu nại</Typography>
                </Stack>
                <TextField select fullWidth label="Loại vấn đề" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
                  {TYPES.map((type) => <MenuItem key={type} value={type}>{type}</MenuItem>)}
                </TextField>
                <TextField fullWidth label="Mã đơn hàng (nếu có)" value={form.orderCode} onChange={(e) => setForm({ ...form, orderCode: e.target.value })} />
                <TextField required fullWidth label="Tiêu đề" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
                <TextField required fullWidth multiline minRows={4} label="Mô tả chi tiết" value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} />
                <Button variant="contained" onClick={submit} startIcon={<Iconify icon="solar:plain-2-bold-duotone" />}>Gửi yêu cầu</Button>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Sofa2Section>
      <Snackbar open={!!toast} message={toast} autoHideDuration={2800} onClose={() => setToast('')} />
    </>
  );
}
