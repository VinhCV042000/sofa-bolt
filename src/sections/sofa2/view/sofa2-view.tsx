import Stack from '@mui/material/Stack';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { Sofa2Hero } from '../sofa2-hero';
import { Sofa2Split } from '../sofa2-split';
import { Sofa2Faqs } from '../sofa2-faqs';
import { Sofa2Cta } from '../sofa2-cta';
import { Sofa2Banner } from '../sofa2-banner';
import { Sofa2Looks } from '../sofa2-looks';
import { Sofa2Values } from '../sofa2-values';
import { Sofa2Timeline } from '../sofa2-timeline';
import { Sofa2Products } from '../sofa2-products';
import { Sofa2Collections } from '../sofa2-collections';
import { Sofa2Testimonials } from '../sofa2-testimonials';

// ----------------------------------------------------------------------

export function Sofa2View() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress variant="linear" progress={pageProgress.scrollYProgress} sx={{ position: 'fixed' }} />

      <BackToTop />

      <Sofa2Hero />

      <Stack sx={{ position: 'relative', bgcolor: 'background.default' }}>
        <Sofa2Split />
        <Sofa2Collections />
        <Sofa2Products />
        <Sofa2Banner />
        <Sofa2Values />
        <Sofa2Timeline />
        <Sofa2Looks />
        <Sofa2Testimonials />
        <Sofa2Faqs />
        <Sofa2Cta />
      </Stack>
    </>
  );
}
