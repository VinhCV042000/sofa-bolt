import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA6_COLORS } from 'src/sections/sofa6/sofa6-data';
import { Sofa6Section, Sofa6PageHero } from 'src/sections/sofa6-pages/sofa6-page-hero';
import { SOFA6_FAQS, SOFA6_PAGE_IMAGES, SOFA6_COMPANY_INFO } from 'src/sections/sofa6-pages/sofa6-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Câu hỏi thường gặp — Sofa Earth' };

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa6PageHero
        title="Câu hỏi thường gặp"
        subtitle="Giải đáp những thắc mắc phổ biến nhất về sản phẩm thủ công, vật liệu thiên nhiên, bảo hành, giao hàng và thanh toán tại Sofa Earth."
        image={SOFA6_PAGE_IMAGES.service1}
        overline="FAQ"
      />

      {/* FAQ accordion */}
      <Sofa6Section>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center', maxWidth: 600, mx: 'auto' }} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>Hỗ trợ</Typography>
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

      {/* Contact CTA */}
      <Sofa6Section bg="grey">
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          <Grid xs={12} md={7}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Typography variant="overline" sx={{ color: 'text.disabled' }}>Vẫn cần hỗ trợ?</Typography>
              <Typography variant="h2">
                Liên hệ
                <Box component="span" sx={{ ...textGradient(`135deg, ${SOFA6_COLORS.terracottaLight}, ${SOFA6_COLORS.sageLight}`) }}>
                  {' '}đội ngũ Sofa Earth
                </Box>
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Nếu bạn không tìm thấy câu trả lời phù hợp, đội ngũ chăm sóc khách hàng Sofa Earth luôn
                sẵn sàng hỗ trợ qua hotline, email hoặc trực tiếp tại showroom.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button component={RouterLink} href="/sofa6/support" size="large" variant="contained" startIcon={<Iconify icon="solar:chat-round-bold-duotone" />}>
                  Liên hệ chúng tôi
                </Button>
                <Button component={RouterLink} href="/sofa6/showrooms" size="large" variant="outlined" startIcon={<Iconify icon="solar:map-point-bold-duotone" />}>
                  Tìm showroom
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} md={5}>
            <Stack component={m.div} variants={varFade({ distance: 24 }).inRight} spacing={2} sx={{ p: { xs: 3, md: 4 }, borderRadius: 3, bgcolor: varAlpha(SOFA6_COLORS.terracotta, 0.06) }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box sx={{ width: 48, height: 48, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: SOFA6_COLORS.terracotta, color: 'common.white' }}>
                  <Iconify icon="solar:phone-bold-duotone" width={24} />
                </Box>
                <Stack>
                  <Typography variant="overline" sx={{ color: 'text.disabled' }}>Hotline</Typography>
                  <Typography variant="h6">{SOFA6_COMPANY_INFO.phone}</Typography>
                </Stack>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box sx={{ width: 48, height: 48, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: SOFA6_COLORS.terracotta, color: 'common.white' }}>
                  <Iconify icon="solar:letter-bold-duotone" width={24} />
                </Box>
                <Stack>
                  <Typography variant="overline" sx={{ color: 'text.disabled' }}>Email</Typography>
                  <Typography variant="h6">{SOFA6_COMPANY_INFO.email}</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Sofa6Section>
    </>
  );
}
