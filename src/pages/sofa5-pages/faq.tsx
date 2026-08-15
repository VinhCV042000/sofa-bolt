import { Helmet } from 'react-helmet-async';

import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { SOFA5_COLORS } from 'src/sections/sofa5/sofa5-data';
import { Sofa5Section, Sofa5PageHero } from 'src/sections/sofa5-pages/sofa5-page-hero';
import { SOFA5_PAGE_FAQS, SOFA5_PAGE_IMAGES } from 'src/sections/sofa5-pages/sofa5-pages-data';

export default function Page() {
  return (
    <>
      <Helmet><title>FAQ — Sofa Royale</title></Helmet>

      <Sofa5PageHero overline="HỖ TRỢ" title={<>CÂU HỎI <span>THƯỜNG GẶP</span></>} subtitle="Giải đáp nhanh về sản phẩm, giao hàng và bảo hành." image={SOFA5_PAGE_IMAGES.service2} />

      <Sofa5Section bg="cream">
        <Stack spacing={2} sx={{ maxWidth: 860, mx: 'auto' }}>
          {SOFA5_PAGE_FAQS.map((faq) => (
            <Accordion key={faq.question} sx={{ borderRadius: 3, bgcolor: SOFA5_COLORS.creamLight, border: `1px solid ${varAlpha(SOFA5_COLORS.clay, 0.2)}`, '&:before': { display: 'none' } }}>
              <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" sx={{ color: SOFA5_COLORS.clay }} />}>
                <Typography variant="subtitle1" sx={{ color: SOFA5_COLORS.ink, fontWeight: 'fontWeightMedium' }}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ color: SOFA5_COLORS.inkSoft, lineHeight: 2 }}>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Sofa5Section>
    </>
  );
}
