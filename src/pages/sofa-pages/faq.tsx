import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport, MotionContainer } from 'src/components/animate';

import {
  SOFA_PAGE_FAQS,
  SOFA_PAGE_IMAGES,
} from 'src/sections/sofa/pages/sofa-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'FAQ sofa' };

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      {/* Hero */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          py: { xs: 10, md: 16 },
          color: 'common.white',
          mt: 'calc(var(--layout-header-desktop-height) * -1)',
          pt: 'calc(var(--layout-header-desktop-height) + 40px)',
        }}
      >
        <Box
          sx={{
            inset: 0,
            position: 'absolute',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.78)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.56)}), url(${SOFA_PAGE_IMAGES.cta})`,
          }}
        />
        <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9 }}>
          <Stack spacing={3} sx={{ maxWidth: 720, mx: 'auto', textAlign: 'center' }}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="overline" sx={{ color: 'primary.light', letterSpacing: 3 }}>FAQ</Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="h1" sx={{ fontSize: { xs: 36, md: 56 }, lineHeight: 1.15 }}>
                Câu Hỏi
                <Box component="span" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.light}, ${theme.vars.palette.warning.light}`) }}> Thường Gặp</Box>
              </Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.72), maxWidth: 560, mx: 'auto' }}>
                Tổng hợp những câu hỏi thường gặp về dịch vụ, đặt lịch, bảo hành và chính sách của
                Casa Sofa.
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* FAQ list */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport} maxWidth="md">
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            {SOFA_PAGE_FAQS.map((faq, index) => (
              <Accordion
                key={faq.question}
                defaultExpanded={index === 0}
                sx={{
                  bgcolor: 'background.paper',
                  '&:before': { display: 'none' },
                  '& + &': { mt: 1.5 },
                  borderRadius: 1,
                  overflow: 'hidden',
                  boxShadow: (t) => t.customShadows.card,
                }}
              >
                <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box sx={{ width: 32, height: 32, display: 'flex', borderRadius: 1, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: 'primary.main', flexShrink: 0 }}>
                      <Iconify icon="solar:question-circle-bold-duotone" width={18} />
                    </Box>
                    <Typography variant="subtitle1">{faq.question}</Typography>
                  </Stack>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Contact CTA */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
        <Container component={MotionViewport}>
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
            <Iconify icon="solar:chat-round-dots-bold-duotone" width={48} sx={{ color: 'primary.main' }} />
            <Typography variant="h3">Vẫn còn thắc mắc?</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Đội ngũ chăm sóc khách hàng luôn sẵn sàng hỗ trợ bạn 8:00 - 20:00 mỗi ngày.</Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button component={RouterLink} href={paths.contact} size="large" variant="contained" color="primary" startIcon={<Iconify icon="solar:phone-bold-duotone" />}>
                Liên hệ chúng tôi
              </Button>
              <Button component={RouterLink} href={paths.sofaBooking} size="large" variant="outlined" startIcon={<Iconify icon="solar:calendar-bold-duotone" />}>
                Đặt lịch dịch vụ
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
