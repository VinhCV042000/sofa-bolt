import { Helmet } from 'react-helmet-async';

import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { SOFA18_COLORS } from 'src/sections/sofa18/sofa18-data';
import { Sofa18Section, Sofa18PageHero } from 'src/sections/sofa18-pages/sofa18-page-hero';
import { SOFA18_PAGE_FAQS, SOFA18_PAGE_IMAGES } from 'src/sections/sofa18-pages/sofa18-pages-data';

export default function Page() {
  return (
    <>
      <Helmet><title>FAQ — Sofa18</title></Helmet>

      <Sofa18PageHero overline="HỖ TRỢ" title={<>CÂU HỎI <span>THƯỜNG GẶP</span></>} subtitle="Giải đáp nhanh về sản phẩm, giao hàng và bảo hành." image={SOFA18_PAGE_IMAGES.service2} />

      <Sofa18Section bg="cream">
        <Stack spacing={2} sx={{ maxWidth: 860, mx: 'auto' }}>
          {SOFA18_PAGE_FAQS.map((faq) => (
            <Accordion key={faq.question} sx={{ borderRadius: 3, bgcolor: SOFA18_COLORS.creamLight, border: `1px solid ${varAlpha(SOFA18_COLORS.clay, 0.2)}`, '&:before': { display: 'none' } }}>
              <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" sx={{ color: SOFA18_COLORS.clay }} />}>
                <Typography variant="subtitle1" sx={{ color: SOFA18_COLORS.ink, fontWeight: 'fontWeightMedium' }}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ color: SOFA18_COLORS.inkSoft, lineHeight: 2 }}>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Sofa18Section>
    </>
  );
}
