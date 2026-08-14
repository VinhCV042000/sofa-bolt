import { Helmet } from 'react-helmet-async';

import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { SOFA16_COLORS } from 'src/sections/sofa16/sofa16-data';
import { Sofa16Section, Sofa16PageHero } from 'src/sections/sofa16-pages/sofa16-page-hero';
import { SOFA16_PAGE_FAQS, SOFA16_PAGE_IMAGES } from 'src/sections/sofa16-pages/sofa16-pages-data';

export default function Page() {
  return (
    <>
      <Helmet><title>FAQ — Sofa16</title></Helmet>

      <Sofa16PageHero overline="HỖ TRỢ" title={<>CÂU HỎI <span>THƯỜNG GẶP</span></>} subtitle="Giải đáp nhanh về sản phẩm, giao hàng và bảo hành." image={SOFA16_PAGE_IMAGES.service2} />

      <Sofa16Section bg="cream">
        <Stack spacing={2} sx={{ maxWidth: 860, mx: 'auto' }}>
          {SOFA16_PAGE_FAQS.map((faq) => (
            <Accordion key={faq.question} sx={{ borderRadius: 3, bgcolor: SOFA16_COLORS.creamLight, border: `1px solid ${varAlpha(SOFA16_COLORS.terracotta, 0.2)}`, '&:before': { display: 'none' } }}>
              <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" sx={{ color: SOFA16_COLORS.terracotta }} />}>
                <Typography variant="subtitle1" sx={{ color: SOFA16_COLORS.ink, fontWeight: 'fontWeightMedium' }}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ color: SOFA16_COLORS.inkSoft, lineHeight: 2 }}>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Sofa16Section>
    </>
  );
}
