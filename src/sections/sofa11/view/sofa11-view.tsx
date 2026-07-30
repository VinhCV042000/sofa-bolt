import Stack from '@mui/material/Stack';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { Sofa11Cta } from '../sofa11-cta';
import { Sofa11Hero } from '../sofa11-hero';
import { Sofa11Faqs } from '../sofa11-faqs';
import { Sofa11Stats } from '../sofa11-stats';
import { Sofa11Steps } from '../sofa11-steps';
import { Sofa11Gallery } from '../sofa11-gallery';
import { Sofa11Marquee } from '../sofa11-marquee';
import { Sofa11Products } from '../sofa11-products';
import { Sofa11Playground } from '../sofa11-playground';
import { Sofa11Collections } from '../sofa11-collections';
import { Sofa11Testimonials } from '../sofa11-testimonials';

// ----------------------------------------------------------------------

export function Sofa11View() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={{ position: 'fixed' }}
      />

      <BackToTop />

      <Sofa11Hero />

      <Stack sx={{ position: 'relative', bgcolor: '#12002E', overflow: 'hidden' }}>
        <Sofa11Marquee />
        <Sofa11Collections />
        <Sofa11Products />
        <Sofa11Playground />
        <Sofa11Stats />
        <Sofa11Steps />
        <Sofa11Gallery />
        <Sofa11Testimonials />
        <Sofa11Faqs />
        <Sofa11Cta />
      </Stack>
    </>
  );
}
