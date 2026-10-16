import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useMemo, useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { useSofa2AdminRows } from 'src/sections/sofa2-admin/sofa2-admin-store';
import { Sofa2Section, Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';
import { SOFA2_PAGE_IMAGES, SOFA2_COMPANY_INFO } from 'src/sections/sofa2/sofa2-pages-data';
import { sofa2Visible, SOFA2_SUPPORT_ARTICLE_TABS } from 'src/sections/sofa2-admin/sofa2-support';

// ----------------------------------------------------------------------

const metadata = { title: 'Hỗ trợ khách hàng' };

const OPTIONS = [
  { icon: 'solar:phone-bold-duotone', title: 'Hotline', value: SOFA2_COMPANY_INFO.phone, href: 'tel:19006868', sub: 'Gọi ngay 8:00 - 20:00' },
  { icon: 'solar:letter-bold-duotone', title: 'Email', value: SOFA2_COMPANY_INFO.email, href: 'mailto:support@sofa2.vn', sub: 'Phản hồi trong 24h' },
  { icon: 'solar:chat-round-dots-bold-duotone', title: 'Chat trực tuyến', value: 'Chat với tư vấn viên', href: '#chat', sub: 'Hỗ trợ trực tiếp trên web' },
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
  const [ticketError, setTicketError] = useState(false);
  const [ticketCode, setTicketCode] = useState('');
  const [form, setForm] = useState({ name: '', contact: '', subject: '', category: '', message: '' });
  const [helpSearch, setHelpSearch] = useState('');
  const [chatOpen, setChatOpen] = useState(false);
  const [chatName, setChatName] = useState('');
  const [chatContact, setChatContact] = useState('');
  const [chatMessage, setChatMessage] = useState('');
  const [activeChatId, setActiveChatId] = useState('');
  const faqRows = useSofa2AdminRows('support', 'faq').rows;
  const channelRows = useSofa2AdminRows('support', 'channels').rows;
  const tickets = useSofa2AdminRows('support', 'tickets');
  const helpCenter = useSofa2AdminRows('support', 'help-center');
  const liveChat = useSofa2AdminRows('support', 'live-chat');
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
    ? channels.map((c) => ({ icon: String(c.icon || 'solar:chat-bold-duotone'), title: String(c.title), value: String(c.value), href: String(c.href ?? ''), sub: String(c.sub ?? '') }))
    : OPTIONS;
  const chatChannelIndex = options.findIndex(
    (option) => option.href === '#chat' || option.title.toLowerCase().includes('chat')
  );
  const articles = sofa2Visible(articleRows[tab] ?? []);
  const helpArticles = useMemo(
    () =>
      sofa2Visible(helpCenter.rows).filter((row) =>
        `${row.title ?? ''} ${row.summary ?? ''} ${row.body ?? ''} ${row.category ?? ''} ${row.tags ?? ''}`
          .toLowerCase()
          .includes(helpSearch.trim().toLowerCase())
      ),
    [helpCenter.rows, helpSearch]
  );
  const activeChatIndex = activeChatId
    ? liveChat.rows.findIndex((row) => String(row.chatId ?? '') === activeChatId)
    : -1;
  const activeChat = activeChatIndex >= 0 ? liveChat.rows[activeChatIndex] : undefined;
  const chatMessages = String(activeChat?.transcript ?? '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
  const chatConversation = [
    ...chatMessages,
    ...String(activeChat?.reply ?? '')
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => `Tư vấn viên: ${line}`),
  ];

  useEffect(() => {
    const targetId = window.location.hash.slice(1);
    if (!targetId) return undefined;
    const timer = window.setTimeout(() => {
      document.getElementById(decodeURIComponent(targetId))?.scrollIntoView({ block: 'start' });
    }, 120);
    return () => window.clearTimeout(timer);
  }, []);

  const submit = () => {
    if (!form.subject.trim() || !form.contact.trim()) {
      setTicketError(true);
      return;
    }
    const code = `TK-${Date.now()}`;
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
    setTicketError(false);
    setTicketCode(code);
    setForm({ name: '', contact: '', subject: '', category: '', message: '' });
  };

  const sendChatMessage = () => {
    const message = chatMessage.trim();
    if (!message) return;

    const nextTranscript = [...chatMessages, `Khách: ${message}`].join('\n');
    if (activeChatIndex >= 0 && activeChat) {
      liveChat.updateRow(activeChatIndex, {
        ...activeChat,
        transcript: nextTranscript,
        reply: '',
        status: activeChat.status === 'Chờ' ? 'Đang chat' : activeChat.status,
      });
    } else {
      const chatId = `CHAT-${Date.now()}`;
      liveChat.createRow({
        chatId,
        customer: chatName.trim() || 'Khách website',
        contact: chatContact.trim(),
        topic: 'Tư vấn trực tuyến',
        agent: 'Chưa phân công',
        started: new Date().toLocaleString('vi-VN'),
        transcript: `Khách: ${message}`,
        reply: '',
        status: 'Chờ',
      });
      setActiveChatId(chatId);
    }
    setChatMessage('');
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
      <Box id="contact-options">
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
                {opt.href === '#chat' || opt.title.toLowerCase().includes('chat') ? (
                  <Button
                    id={index === chatChannelIndex ? 'chat' : undefined}
                    variant="outlined"
                    onClick={() => setChatOpen(true)}
                    startIcon={<Iconify icon="solar:chat-round-dots-bold-duotone" />}
                    sx={{ scrollMarginTop: 100 }}
                  >
                    Bắt đầu chat
                  </Button>
                ) : !!opt.href && (
                  <Button
                    component="a"
                    href={opt.href}
                    target={opt.href.startsWith('http') ? '_blank' : undefined}
                    rel={opt.href.startsWith('http') ? 'noreferrer' : undefined}
                    variant="outlined"
                  >
                    {opt.href.startsWith('tel:') ? 'Gọi ngay' : opt.href.startsWith('mailto:') ? 'Gửi email' : 'Liên hệ'}
                  </Button>
                )}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa2Section>
      </Box>

      {/* FAQ */}
      <Sofa2Section bg="grey">
        <Stack id="faq" spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center', maxWidth: 600, mx: 'auto', scrollMarginTop: 100 }} component={MotionViewport}>
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

      {/* Help center articles managed from the Sofa2 admin */}
      <Sofa2Section>
        <Stack id="help-center" spacing={2} sx={{ mb: 4, textAlign: 'center', maxWidth: 700, mx: 'auto', scrollMarginTop: 100 }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>TRUNG TÂM TRỢ GIÚP</Typography>
          <Typography variant="h3">Tìm hướng dẫn phù hợp</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Bài viết được cập nhật từ khu vực quản trị hỗ trợ khách hàng.
          </Typography>
        </Stack>
        <TextField
          fullWidth
          value={helpSearch}
          onChange={(event) => setHelpSearch(event.target.value)}
          placeholder="Tìm theo tiêu đề, danh mục hoặc từ khóa..."
          sx={{ maxWidth: 720, display: 'flex', mx: 'auto', mb: 3 }}
          InputProps={{ startAdornment: <Iconify icon="eva:search-fill" width={20} sx={{ mr: 1, color: 'text.disabled' }} /> }}
        />
        <Box sx={{ maxWidth: 720, mx: 'auto' }}>
          {helpArticles.map((article) => (
            <Accordion key={String(article.title)} sx={{ '&:before': { display: 'none' }, '& + &': { mt: 1.5 }, borderRadius: 2, boxShadow: (t) => t.customShadows.card }}>
              <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}>
                <Stack spacing={0.5}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightBold' }}>{String(article.title)}</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>{String(article.category ?? 'Hỗ trợ')} · {String(article.updated ?? '')}</Typography>
                  {!!article.summary && <Typography variant="body2" sx={{ color: 'text.secondary' }}>{String(article.summary)}</Typography>}
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                  {String(article.body ?? article.summary ?? '')}
                </Typography>
                {!!article.tags && <Typography variant="caption" sx={{ display: 'block', mt: 2, color: 'text.disabled' }}>Từ khóa: {String(article.tags)}</Typography>}
              </AccordionDetails>
            </Accordion>
          ))}
          {!helpArticles.length && (
            <Typography align="center" sx={{ py: 4, color: 'text.secondary' }}>
              Không tìm thấy bài viết phù hợp.
            </Typography>
          )}
        </Box>
      </Sofa2Section>

      {/* Guides & policies */}
      <Sofa2Section>
        <Stack id="guides" spacing={2} sx={{ mb: 4, textAlign: 'center', scrollMarginTop: 100 }}>
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
            <Stack id="ticket" component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, scrollMarginTop: 100 }}>
              <Typography variant="h5">Gửi yêu cầu hỗ trợ</Typography>
              {sent && <Alert severity="success">Đã nhận yêu cầu {ticketCode}. Bộ phận hỗ trợ sẽ liên hệ theo thông tin bạn cung cấp.</Alert>}
              {ticketError && <Alert severity="error">Vui lòng nhập thông tin liên hệ và chủ đề yêu cầu.</Alert>}
              <Grid container spacing={2}>
                <Grid xs={12} sm={6}><TextField fullWidth label="Họ tên" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth required error={ticketError && !form.contact.trim()} label="Điện thoại / Email" value={form.contact} onChange={(e) => { setSent(false); setTicketError(false); setForm({ ...form, contact: e.target.value }); }} /></Grid>
                <Grid xs={12}><TextField fullWidth required error={ticketError && !form.subject.trim()} label="Chủ đề" value={form.subject} onChange={(e) => { setSent(false); setTicketError(false); setForm({ ...form, subject: e.target.value }); }} /></Grid>
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

      <Dialog fullWidth maxWidth="sm" open={chatOpen} onClose={() => setChatOpen(false)}>
        <DialogTitle>Chat trực tuyến với Sofa2</DialogTitle>
        <DialogContent dividers>
          <Stack spacing={2}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Gửi câu hỏi tại đây. Nhân viên hỗ trợ sẽ tiếp tục trao đổi trong cuộc hội thoại này.
              {activeChat?.status ? ` Trạng thái: ${String(activeChat.status)}.` : ''}
            </Typography>
            {!activeChatId && (
              <>
                <TextField
                  fullWidth
                  label="Tên của bạn"
                  value={chatName}
                  onChange={(event) => setChatName(event.target.value)}
                />
                <TextField
                  fullWidth
                  label="Số điện thoại hoặc email (không bắt buộc)"
                  value={chatContact}
                  onChange={(event) => setChatContact(event.target.value)}
                />
              </>
            )}
            {!!chatConversation.length && (
              <Stack spacing={1} sx={{ maxHeight: 300, overflow: 'auto', p: 1.5, bgcolor: 'background.neutral', borderRadius: 1 }}>
                {chatConversation.map((message, index) => (
                  <Box key={`${index}-${message}`} sx={{ alignSelf: message.startsWith('Khách:') ? 'flex-end' : 'flex-start', maxWidth: '90%', px: 1.5, py: 1, bgcolor: message.startsWith('Khách:') ? 'primary.main' : 'background.paper', color: message.startsWith('Khách:') ? 'primary.contrastText' : 'text.primary', borderRadius: 1 }}>
                    <Typography variant="body2">{message.replace(/^(Khách|Tư vấn viên):\s*/, '')}</Typography>
                    <Typography variant="caption" sx={{ opacity: 0.7 }}>{message.startsWith('Khách:') ? 'Bạn' : 'Sofa2'}</Typography>
                  </Box>
                ))}
              </Stack>
            )}
            {activeChat && ['Đã kết thúc', 'Bỏ lỡ'].includes(String(activeChat.status)) && (
              <Alert severity="info">Cuộc trò chuyện đã kết thúc. Bạn có thể gửi ticket để được hỗ trợ tiếp.</Alert>
            )}
            <TextField
              fullWidth
              multiline
              minRows={3}
              label="Tin nhắn"
              value={chatMessage}
              disabled={!!activeChat && ['Đã kết thúc', 'Bỏ lỡ'].includes(String(activeChat.status))}
              onChange={(event) => setChatMessage(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' && !event.shiftKey) {
                  event.preventDefault();
                  sendChatMessage();
                }
              }}
              helperText="Enter để gửi · Shift + Enter để xuống dòng"
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={() => setChatOpen(false)}>Đóng</Button>
          <Button variant="contained" onClick={sendChatMessage} disabled={!chatMessage.trim() || (!!activeChat && ['Đã kết thúc', 'Bỏ lỡ'].includes(String(activeChat.status)))} startIcon={<Iconify icon="solar:plain-bold-duotone" />}>Gửi tin nhắn</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
