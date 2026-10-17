import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';
import { Sofa2Section, Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';

// ----------------------------------------------------------------------

const metadata = { title: 'Yêu cầu báo giá dự án — LUXE Sofa' };

const PROJECT_TYPES = ['Căn hộ', 'Biệt thự', 'Khách sạn', 'Resort', 'Văn phòng', 'Showroom'];
const BUDGET_RANGES = ['Dưới 100 triệu', '100 - 500 triệu', '500 triệu - 1 tỷ', 'Trên 1 tỷ'];

const STEPS = [
  { icon: 'solar:document-bold-duotone', title: 'Tiếp nhận yêu cầu', desc: 'Tiếp nhận thông tin dự án trong 24h.' },
  { icon: 'solar:chat-round-bold-duotone', title: 'Tư vấn & khảo sát', desc: 'Đội ngũ đến khảo sát và tư vấn miễn phí.' },
  { icon: 'solar:document-text-bold-duotone', title: 'Báo giá chi tiết', desc: 'Báo giá từng hạng mục minh bạch.' },
  { icon: 'solar:delivery-bold-duotone', title: 'Sản xuất & giao hàng', desc: 'Thi công, lắp đặt đúng tiến độ.' },
];

export default function Page() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState('');
  const [form, setForm] = useState({
    project: '',
    projectType: '',
    items: '',
    budget: '',
    delivery: '',
    address: '',
    note: '',
    contactName: '',
    phone: '',
    email: '',
  });

  const setField = (key: keyof typeof form, value: string) =>
    setForm((previous) => ({ ...previous, [key]: value }));

  const submitQuote = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    setMessage('');
    try {
      const response = await fetch('/api/dealer/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          products: form.note,
          address: form.address,
        }),
      });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || 'Không gửi được yêu cầu báo giá.');
      setSent(true);
      setMessage(`Đã tiếp nhận yêu cầu ${body.quote?.code ?? ''}. Nhân viên sẽ liên hệ sớm.`);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Không gửi được yêu cầu báo giá.');
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa2PageHero
        title="Yêu cầu báo giá dự án"
        subtitle="Gửi thông tin dự án để nhận báo giá chi tiết từ đội ngũ dự án LUXE Sofa."
        image={SOFA2_PAGE_IMAGES.project1}
        overline="Báo giá dự án"
      />

      <Sofa2Section>
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Form */}
          <Grid xs={12} md={8}>
            <Stack
              component={m.form}
              variants={varFade({ distance: 24 }).inUp}
              spacing={3}
              sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
              onSubmit={submitQuote}
            >
              <Typography variant="h5">Thông tin dự án</Typography>
              <Grid container spacing={2}>
                <Grid xs={12} sm={6}><TextField required fullWidth label="Tên dự án" value={form.project} onChange={(event) => setField('project', event.target.value)} /></Grid>
                <Grid xs={12} sm={6}>
                  <TextField required fullWidth select label="Loại dự án" value={form.projectType} onChange={(event) => setField('projectType', event.target.value)}>
                    <MenuItem value="">Chọn loại dự án</MenuItem>
                    {PROJECT_TYPES.map((t) => <MenuItem key={t} value={t}>{t}</MenuItem>)}
                  </TextField>
                </Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Số lượng sofa" type="number" value={form.items} onChange={(event) => setField('items', event.target.value)} /></Grid>
                <Grid xs={12} sm={6}>
                  <TextField fullWidth select label="Ngân sách" value={form.budget} onChange={(event) => setField('budget', event.target.value)}>
                    <MenuItem value="">Chọn ngân sách</MenuItem>
                    {BUDGET_RANGES.map((b) => <MenuItem key={b} value={b}>{b}</MenuItem>)}
                  </TextField>
                </Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Tiến độ mong muốn" placeholder="VD: 30 ngày" value={form.delivery} onChange={(event) => setField('delivery', event.target.value)} /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Địa điểm dự án" value={form.address} onChange={(event) => setField('address', event.target.value)} /></Grid>
                <Grid xs={12}><TextField fullWidth label="Mô tả yêu cầu" multiline rows={4} value={form.note} onChange={(event) => setField('note', event.target.value)} /></Grid>
              </Grid>

              <Typography variant="h6" sx={{ mt: 1 }}>Thông tin liên hệ</Typography>
              <Grid container spacing={2}>
                <Grid xs={12} sm={6}><TextField required fullWidth label="Họ và tên" value={form.contactName} onChange={(event) => setField('contactName', event.target.value)} /></Grid>
                <Grid xs={12} sm={6}><TextField required fullWidth label="Số điện thoại" value={form.phone} onChange={(event) => setField('phone', event.target.value)} /></Grid>
                <Grid xs={12}><TextField required fullWidth label="Email" type="email" value={form.email} onChange={(event) => setField('email', event.target.value)} /></Grid>
              </Grid>
              {message && <Alert severity={sent ? 'success' : 'error'}>{message}</Alert>}
              <Button type="submit" variant="contained" size="large" disabled={sending || sent} startIcon={<Iconify icon="solar:document-bold-duotone" />} sx={{ width: 'fit-content' }}>
                {sending ? 'Đang gửi…' : sent ? 'Đã gửi yêu cầu' : 'Gửi yêu cầu báo giá'}
              </Button>
            </Stack>
          </Grid>

          {/* Process sidebar */}
          <Grid xs={12} md={4}>
            <Stack component={m.div} variants={varFade({ distance: 24 }).inLeft} spacing={3} sx={{ p: { xs: 3, md: 4 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, height: 1 }}>
              <Typography variant="h6">Quy trình 4 bước</Typography>
              {STEPS.map((s, i) => (
                <Stack key={s.title} spacing={1}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box sx={{ width: 40, height: 40, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: 'primary.main' }}>
                      <Iconify icon={s.icon} width={20} />
                    </Box>
                    <Typography variant="subtitle2">{i + 1}. {s.title}</Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ color: 'text.secondary', pl: 7 }}>{s.desc}</Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Sofa2Section>
    </>
  );
}
