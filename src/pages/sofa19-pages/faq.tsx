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

import { SOFA19_COLORS } from 'src/sections/sofa19/sofa19-data';
import { Sofa19Section, Sofa19PageHero } from 'src/sections/sofa19-pages/sofa19-page-hero';
import { SOFA19_PAGE_FAQS, SOFA19_PAGE_IMAGES } from 'src/sections/sofa19-pages/sofa19-pages-data';

export default function Page() {
  const theme = useTheme();
  const [expanded, setExpanded] = useState<string | false>(false);

  return (
    <>
      <Helmet>
        <title>FAQ — Sofa19</title>
      </Helmet>

      <Sofa19PageHero overline="FAQ" title={<>CÂU HỎI <span>THƯỜNG GẶP</span></>} subtitle="Tất cả câu hỏi về sofa retro được giải đáp." image={SOFA19_PAGE_IMAGES.contact} />

      <Sofa19Section>
        <Stack spacing={2} sx={{ maxWidth: 800, mx: 'auto' }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
          {SOFA19_PAGE_FAQS.map((faq, i) => (
            <Accordion key={i} expanded={expanded === `panel-${i}`} onChange={(e, isExpanded) => setExpanded(isExpanded ? `panel-${i}` : false)} sx={{ borderRadius: '16px !important', border: `1px solid rgba(145,158,171,0.12)`, '&:before': { display: 'none' } }}>
              <AccordionSummary expandIcon={<Iconify icon="solar:alt-arrow-down-linear" width={20} sx={{ color: SOFA19_COLORS.coral }} />}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightBold' }}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Sofa19Section>
    </>
  );
}
