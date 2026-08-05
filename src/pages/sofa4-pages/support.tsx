import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa4Section, Sofa4PageHero } from 'src/sections/sofa4-pages/sofa4-page-hero';
import { SOFA4_PAGE_FAQS, SOFA4_PAGE_IMAGES } from 'src/sections/sofa4-pages/sofa4-pages-data';

const metadata = { title: 'Hỗ trợ - Sofa Pop' };

const CATEGORIES = [
  { icon: 'solar:cart-bold-duotone', title: 'Đặt hàng & Giao hàng', desc: 'Câu hỏi về đặt hàng, vận chuyển, giao hàng.' },
  { icon: 'solar:shield-check-bold-duotone', title: 'Bảo hành & Đổi trả', desc: 'Chính sách bảo hành, đổi trả hàng.' },
  { icon: 'solar:wallet-bold-duotone', title: 'Thanh toán & Trả góp', desc: 'Phương thức thanh toán, trả góp 0%.' },
  { icon: 'solar:armchair-bold-duotone', title: 'Sản phẩm & Vật liệu', desc: 'Câu hỏi về sản phẩm, vật liệu tự nhiên.' },
];

export default function Page() {
  const [expanded, setExpanded] = useState<string | false>(false);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa4PageHero overline="Hỗ trợ" title="Trung tâm hỗ trợ" subtitle="Tìm câu trả lời hoặc liên hệ đội ngũ hỗ trợ." image={SOFA4_PAGE_IMAGES.contact} />

      <Sofa4Section>
        <Stack spacing={6} component={MotionViewport}>
          <Box>
            <Typography variant="h5" sx={{ mb: 3 }}>Chủ đề hỗ trợ</Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
              {CATEGORIES.map((cat, index) => (
                <Stack key={cat.title} component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: index * 0.06 }} direction="row" spacing={2} alignItems="center" sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', border: (t) => `1px solid ${varAlpha(t.vars.palette.grey['500Channel'], 0.12)}` }}>
                  <Box sx={{ width: 44, height: 44, borderRadius: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'warning.lighter', color: 'warning.main' }}>
                    <Iconify icon={cat.icon} width={22} />
                  </Box>
                  <Stack spacing={0.5}>
                    <Typography variant="subtitle2">{cat.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{cat.desc}</Typography>
                  </Stack>
                </Stack>
              ))}
            </Box>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ mb: 3 }}>Câu hỏi thường gặp</Typography>
            <Stack spacing={1}>
              {SOFA4_PAGE_FAQS.map((faq) => (
                <Accordion key={faq.question} expanded={expanded === faq.question} onChange={(e, isExp) => setExpanded(isExp ? faq.question : false)}>
                  <AccordionSummary expandIcon={<Iconify icon="solar:alt-arrow-down-bold-duotone" width={20} />}>
                    <Typography variant="subtitle2">{faq.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{faq.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ mb: 3 }}>Liên hệ hỗ trợ</Typography>
            <Stack spacing={2} sx={{ maxWidth: 480 }}>
              <TextField label="Họ và tên" fullWidth />
              <TextField label="Email" fullWidth />
              <TextField label="Nội dung" multiline rows={3} fullWidth />
              <Button variant="contained" color="warning" size="large" startIcon={<Iconify icon="solar:letter-bold-duotone" />}>Gửi yêu cầu</Button>
            </Stack>
          </Box>
        </Stack>
      </Sofa4Section>
    </>
  );
}
