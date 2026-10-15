import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa2Section, Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';
import { useSofa2AdminRows } from 'src/sections/sofa2-admin/sofa2-admin-store';
import { sofa2Visible, SOFA2_SUPPORT_ARTICLE_TABS } from 'src/sections/sofa2-admin/sofa2-support';
import { SOFA2_PAGE_IMAGES, SOFA2_COMPANY_INFO } from 'src/sections/sofa2/sofa2-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Hỗ trợ khách hàng' };

const OPTIONS = [
  { icon: 'solar:phone-bold-duotone', title: 'Hotline', value: SOFA2_COMPANY_INFO.phone, sub: 'Gọi ngay 8:00 - 20:00' },
  { icon: 'solar:letter-bold-duotone', title: 'Email', value: SOFA2_COMPANY_INFO.email, sub: 'Phản hồi trong 24h' },
  { icon: 'solar:chat-bold-duotone', title: 'Chat trực tuyến', value: 'Chat với tư vấn viên', sub: 'Hỗ trợ trực tiếp trên web' },
];

const CATEGORIES = [
  { icon: 'solar:cart-bold-duotone', label: 'Đặt hàng & thanh toán' },
  { icon: 'solar:delivery-bold-duotone', label: 'Giao hàng & lắp đặt' },
  { icon: 'solar:shield-check-bold-duotone', label: 'Bảo hành & sửa chữa' },
  { icon: 'solar:water-bold-duotone', label: 'Vệ sinh sofa' },
  { icon: 'solar:refresh-circle-bold-duotone', label: 'Đổi trả hàng' },
  { icon: 'solar:card-bold-duotone', label: 'Trả góp' },
];

export default function Page() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', contact: '', subject: '', category: '', message: '' });
  const faqRows = useSofa2AdminRows('support', 'faq').rows;
  const channelRows = useSofa2AdminRows('support', 'channels').rows;
  const tickets = useSofa2AdminRows('support', 'tickets');
  const a1 = useSofa2AdminRows('support', 'guide-buying').rows;
  const a2 = useSofa2AdminRows('support', 'guide-payment').rows;
  const a3 = useSofa2AdminRows('support', 'policy-shipping').rows;
  const a4 = useSofa2AdminRows('support', 'policy-warranty').rows;
  const a5 = useSofa2AdminRows('support', 'policy-return').rows;
  const articleRows = [a1, a2, a3, a4, a5];
  const [tab, setTab] = useState(0);
  const faqs = sofa2Visible(faqRows).map((r) => ({ question: String(r.question), answer: String(r.answer) }));
  const channels = sofa2Visible(channelRows, 'Đang bật');
  const options = channels.length
    ? channels.map((c) => ({ icon: String(c.icon || 'solar:chat-bold-duotone'), title: String(c.title), value: String(c.value), sub: String(c.sub ?? '') }))
    : OPTIONS;
  const articles = sofa2Visible(articleRows[tab] ?? []);
  const submit = () => {
    if (!form.subject.trim() || !form.contact.trim()) return;
    const code = `TK-${Date.now().toString().slice(-5)}`;
    tickets.createRow({
      code,
      customer: form.name || 'Khách vãng lai',
      contact: form.contact,
      subject: form.subject,
      category: form.category,
      message: form.message,
      reply: '',
      priority: 'Trung bình',
      agent: 'Chưa phân công',
      created: new Date().toLocaleDateString('vi-VN'),
      status: 'Mới',
    });
    setSent(true);
    setForm({ name: '', contact: '', subject: '', category: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa2PageHero
        title="Hỗ trợ khách hàng"
        subtitle="Đội ngũ chăm sóc khách hàng LUXE Sofa luôn sẵn sàng giúp bạn giải đáp mọi thắc mắc."
        image={SOFA2_PAGE_IMAGES.service1}
        overline="Hỗ trợ"
      />

      {/* Contact options */}
      <Sofa2Section>
        <Grid container spacing={3}>
          {options.map((opt, index) => (
            <Grid key={opt.title} xs={12} md={4}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.08 }}
                spacing={2}
                alignItems="center"
                sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, textAlign: 'center' }}
              >
                <Box sx={{ width: 64, height: 64, display: 'flex', borderRadius: 2, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: 'primary.main' }}>
                  <Iconify icon={opt.icon} width={32} />
                </Box>
                <Typography variant="overline" sx={{ color: 'text.disabled' }}>{opt.title}</Typography>
                <Typography variant="h6">{opt.value}</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>{opt.sub}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa2Section>

      {/* FAQ */}
      <Sofa2Section bg="grey">
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center', maxWidth: 600, mx: 'auto' }} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>FAQ</Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2">Câu hỏi thường gặp</Typography>
          </Box>
        </Stack>
        <Box component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ maxWidth: 720, mx: 'auto' }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={faq.question}
              defaultExpanded={index === 0}
              sx={{ bgcolor: 'background.paper', '&:before': { display: 'none' }, '& + &': { mt: 1.5 }, borderRadius: 2, overflow: 'hidden', boxShadow: (t) => t.customShadows.card }}
            >
              <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightBold' }}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Sofa2Section>

      {/* Guides & policies */}
      <Sofa2Section>
        <Stack spacing={2} sx={{ mb: 4, textAlign: 'center' }}>
          <Typography variant="h3">Hướng dẫn & chính sách</Typography>
        </Stack>
        <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={1} sx={{ mb: 4 }}>
          {SOFA2_SUPPORT_ARTICLE_TABS.map((t, i) => (
            <Button key={t.slug} variant={tab === i ? 'contained' : 'outlined'} onClick={() => setTab(i)}>
              {t.label}
            </Button>
          ))}
        </Stack>
        <Box sx={{ maxWidth: 720, mx: 'auto' }}>
          {articles.map((a) => (
            <Accordion key={String(a.title)} sx={{ '&:before': { display: 'none' }, '& + &': { mt: 1.5 }, borderRadius: 2, boxShadow: (t) => t.customShadows.card }}>
              <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}>
                <Typography variant="subtitle1">{a.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{a.body}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Sofa2Section>

      {/* Support categories */}
      <Sofa2Section>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }}>
          <Typography variant="h3">Danh mục hỗ trợ</Typography>
        </Stack>
        <Grid container spacing={3}>
          {CATEGORIES.map((cat, index) => (
            <Grid key={cat.label} xs={12} sm={6} md={4}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.06 }}
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{ p: 3, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, cursor: 'pointer', '&:hover': { transform: 'translateY(-4px)', transition: (t) => t.transitions.create(['transform'], { duration: 300 }) } }}
              >
                <Box sx={{ width: 48, height: 48, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: 'primary.main' }}>
                  <Iconify icon={cat.icon} width={24} />
                </Box>
                <Typography variant="subtitle1">{cat.label}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa2Section>

      {/* Ticket form */}
      <Sofa2Section bg="grey">
        <Grid container justifyContent="center">
          <Grid xs={12} md={7}>
            <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
              <Typography variant="h5">Gửi yêu cầu hỗ trợ</Typography>
              <Grid container spacing={2}>
                <Grid xs={12} sm={6}><TextField fullWidth label="Họ tên" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth required label="Điện thoại / Email" value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} /></Grid>
                <Grid xs={12}><TextField fullWidth required label="Chủ đề" value={form.subject} onChange={(e) => { setSent(false); setForm({ ...form, subject: e.target.value }); }} /></Grid>
                <Grid xs={12}>
                  <TextField fullWidth select label="Danh mục" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
                    {CATEGORIES.map((c) => <MenuItem key={c.label} value={c.label}>{c.label}</MenuItem>)}
                  </TextField>
                </Grid>
                <Grid xs={12}><TextField fullWidth label="Mô tả chi tiết" multiline rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /></Grid>
              </Grid>
              <Button variant="contained" size="large" startIcon={<Iconify icon="solar:letter-bold-duotone" />} sx={{ width: 'fit-content' }} onClick={submit}>
                {sent ? 'Đã gửi yêu cầu' : 'Gửi yêu cầu'}
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa2Section>
    </>
  );
}
