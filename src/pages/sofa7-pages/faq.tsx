import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA7_COLORS } from 'src/sections/sofa7/sofa7-data';
import { Sofa7Section, Sofa7PageHero } from 'src/sections/sofa7-pages/sofa7-page-hero';
import { SOFA7_PAGE_FAQS, SOFA7_PAGE_IMAGES } from 'src/sections/sofa7-pages/sofa7-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Câu hỏi thường gặp — Sofa7' };

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa7PageHero
        title="CÂU HỎI THƯỜNG GẶP"
        subtitle="Giải đáp mọi thắc mắc về sofa industrial loft — từ chất liệu, bảo hành, giao hàng đến đổi trả."
        image={SOFA7_PAGE_IMAGES.service1}
        overline="FAQ"
      />

      {/* Intro */}
      <Sofa7Section>
        <Stack spacing={3} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>FAQ SOFA7</Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ textTransform: 'uppercase' }}>
              <Box component="span" sx={{ ...textGradient(`90deg, ${SOFA7_COLORS.electric} 0%, ${SOFA7_COLORS.cyan} 100%`) }}>
                Giải đáp thắc mắc
              </Box>
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Tổng hợp các câu hỏi thường gặp về sản phẩm industrial loft của Sofa7. Không tìm thấy
              câu trả lời? Liên hệ đội ngũ hỗ trợ của chúng tôi.
            </Typography>
          </Box>
        </Stack>
      </Sofa7Section>

      {/* FAQ accordion */}
      <Sofa7Section bg="grey">
        <Box component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ maxWidth: 720, mx: 'auto' }}>
          {SOFA7_PAGE_FAQS.map((faq, index) => (
            <Accordion
              key={faq.question}
              defaultExpanded={index === 0}
              sx={{ bgcolor: 'background.paper', '&:before': { display: 'none' }, '& + &': { mt: 1.5 }, borderRadius: 0, overflow: 'hidden', boxShadow: (t) => t.customShadows.card, border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}` }}
            >
              <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightBold', textTransform: 'uppercase' }}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Sofa7Section>

      {/* CTA to contact */}
      <Sofa7Section>
        <Stack spacing={4} alignItems="center" sx={{ textAlign: 'center', maxWidth: 720, mx: 'auto' }} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ ...textGradient(`90deg, ${SOFA7_COLORS.electric} 0%, ${SOFA7_COLORS.cyan} 100%`), textTransform: 'uppercase' }}>
              Không tìm thấy câu trả lời?
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: 'text.secondary' }}>Liên hệ đội ngũ hỗ trợ Sofa7 — chúng tôi sẵn sàng giúp bạn.</Typography>
          </Box>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Button component={RouterLink} href="/sofa7/support" size="large" variant="contained" sx={{ bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, borderRadius: 0, '&:hover': { bgcolor: SOFA7_COLORS.electric } }} startIcon={<Iconify icon="solar:chat-bold-duotone" />}>
              Liên hệ hỗ trợ
            </Button>
            <Button component={RouterLink} href="/sofa7/contact" size="large" variant="outlined" sx={{ borderRadius: 0, borderColor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.concrete, '&:hover': { borderColor: SOFA7_COLORS.electric, color: SOFA7_COLORS.electric } }} startIcon={<Iconify icon="solar:phone-bold-duotone" />}>
              Liên hệ trực tiếp
            </Button>
          </Stack>
        </Stack>
      </Sofa7Section>
    </>
  );
}
