import { Helmet } from 'react-helmet-async';

import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { SOFA15_COLORS } from 'src/sections/sofa15/sofa15-data';
import { Sofa15Section, Sofa15PageHero } from 'src/sections/sofa15-pages/sofa15-page-hero';
import { SOFA15_PAGE_FAQS, SOFA15_PAGE_IMAGES } from 'src/sections/sofa15-pages/sofa15-pages-data';

export default function Page() {
  return (
    <>
      <Helmet><title>FAQ — Sofa15</title></Helmet>

      <Sofa15PageHero overline="FAQ" title={<>CÂU HỎI <span>THƯỜNG GẶP</span></>} subtitle="Những thắc mắc phổ biến về sản phẩm, đặt hàng và bảo hành." image={SOFA15_PAGE_IMAGES.aboutHero} />

      <Sofa15Section bg="black">
        <Stack spacing={1.5} sx={{ maxWidth: 860, mx: 'auto' }}>
          {(SOFA15_PAGE_FAQS as any[]).map((faq, i) => (
            <Accordion key={i} disableGutters sx={{ bgcolor: SOFA15_COLORS.charcoal, border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.25)}`, '&:before': { display: 'none' } }}>
              <AccordionSummary expandIcon={<Iconify icon="solar:alt-arrow-down-bold" sx={{ color: SOFA15_COLORS.gold }} />}>
                <Typography sx={{ color: 'common.white', fontWeight: 'fontWeightLight' }}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 2 }}>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Sofa15Section>
    </>
  );
}
