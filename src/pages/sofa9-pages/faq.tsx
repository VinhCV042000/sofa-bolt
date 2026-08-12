import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA9_COLORS } from 'src/sections/sofa9/sofa9-data';
import { Sofa9Section, Sofa9PageHero } from 'src/sections/sofa9-pages/sofa9-page-hero';
import { SOFA9_PAGE_FAQS, SOFA9_PAGE_IMAGES } from 'src/sections/sofa9-pages/sofa9-pages-data';

export default function Page() {
  const theme = useTheme();
  const [expanded, setExpanded] = useState<string | false>(false);

  return (
    <>
      <Helmet>
        <title>FAQ — Sofa9</title>
      </Helmet>

      <Sofa9PageHero overline="FAQ" title={<>CÂU HỎI <span>THƯỜNG GẶP</span></>} subtitle="Tất cả câu hỏi về sofa retro được giải đáp." image={SOFA9_PAGE_IMAGES.contact} />

      <Sofa9Section>
        <Stack spacing={2} sx={{ maxWidth: 800, mx: 'auto' }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
          {SOFA9_PAGE_FAQS.map((faq, i) => (
            <Accordion key={i} expanded={expanded === `panel-${i}`} onChange={(e, isExpanded) => setExpanded(isExpanded ? `panel-${i}` : false)} sx={{ borderRadius: '16px !important', border: `1px solid rgba(145,158,171,0.12)`, '&:before': { display: 'none' } }}>
              <AccordionSummary expandIcon={<Iconify icon="solar:alt-arrow-down-linear" width={20} sx={{ color: SOFA9_COLORS.pink }} />}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightBold' }}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Sofa9Section>
    </>
  );
}
