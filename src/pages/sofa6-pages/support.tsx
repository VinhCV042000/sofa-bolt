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

import { SOFA6_COLORS } from 'src/sections/sofa6/sofa6-data';
import { Sofa6Section, Sofa6PageHero } from 'src/sections/sofa6-pages/sofa6-page-hero';
import { SOFA6_FAQS, SOFA6_PAGE_IMAGES, SOFA6_COMPANY_INFO } from 'src/sections/sofa6-pages/sofa6-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Hỗ trợ Sofa Earth' };

const OPTIONS = [
  { icon: 'solar:phone-bold-duotone', title: 'Hotline', value: SOFA6_COMPANY_INFO.phone, sub: 'Gọi ngay 8:00 - 20:00' },
  { icon: 'solar:letter-bold-duotone', title: 'Email', value: SOFA6_COMPANY_INFO.email, sub: 'Phản hồi trong 24h' },
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

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa6PageHero
        title="Hỗ trợ Sofa Earth"
        subtitle="Đội ngũ chăm sóc khách hàng Sofa Earth luôn sẵn sàng giúp bạn giải đáp mọi thắc mắc về sản phẩm thủ công từ vật liệu thiên nhiên."
        image={SOFA6_PAGE_IMAGES.service1}
        overline="Hỗ trợ"
      />

      {/* Contact options */}
      <Sofa6Section>
        <Grid container spacing={3}>
          {OPTIONS.map((opt, index) => (
            <Grid key={opt.title} xs={12} md={4}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.08 }}
                spacing={2}
                alignItems="center"
                sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, textAlign: 'center' }}
              >
                <Box sx={{ width: 64, height: 64, display: 'flex', borderRadius: 2, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA6_COLORS.terracotta, 0.08), color: SOFA6_COLORS.terracotta }}>
                  <Iconify icon={opt.icon} width={32} />
                </Box>
                <Typography variant="overline" sx={{ color: 'text.disabled' }}>{opt.title}</Typography>
                <Typography variant="h6">{opt.value}</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>{opt.sub}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa6Section>

      {/* FAQ */}
      <Sofa6Section bg="grey">
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center', maxWidth: 600, mx: 'auto' }} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>FAQ</Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2">Câu hỏi thường gặp</Typography>
          </Box>
        </Stack>
        <Box component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ maxWidth: 720, mx: 'auto' }}>
          {SOFA6_FAQS.map((faq, index) => (
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
      </Sofa6Section>

      {/* Support categories */}
      <Sofa6Section>
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
                <Box sx={{ width: 48, height: 48, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA6_COLORS.terracotta, 0.08), color: SOFA6_COLORS.terracotta }}>
                  <Iconify icon={cat.icon} width={24} />
                </Box>
                <Typography variant="subtitle1">{cat.label}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa6Section>

      {/* Ticket form */}
      <Sofa6Section bg="grey">
        <Grid container justifyContent="center">
          <Grid xs={12} md={7}>
            <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
              <Typography variant="h5">Gửi yêu cầu hỗ trợ</Typography>
              <Grid container spacing={2}>
                <Grid xs={12}><TextField fullWidth label="Chủ đề" /></Grid>
                <Grid xs={12}>
                  <TextField fullWidth select label="Danh mục" defaultValue="">
                    {CATEGORIES.map((c) => <MenuItem key={c.label} value={c.label}>{c.label}</MenuItem>)}
                  </TextField>
                </Grid>
                <Grid xs={12}><TextField fullWidth label="Mô tả chi tiết" multiline rows={4} /></Grid>
              </Grid>
              <Button variant="contained" size="large" startIcon={<Iconify icon="solar:letter-bold-duotone" />} sx={{ width: 'fit-content' }} onClick={() => setSent(true)}>
                {sent ? 'Đã gửi yêu cầu' : 'Gửi yêu cầu'}
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa6Section>
    </>
  );
}
