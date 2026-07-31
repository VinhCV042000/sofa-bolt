import Stack from '@mui/material/Stack';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { Sofa13Cta } from '../sofa13-cta';
import { Sofa13Hero } from '../sofa13-hero';
import { Sofa13Faqs } from '../sofa13-faqs';
import { Sofa13Story } from '../sofa13-story';
import { Sofa13Stats } from '../sofa13-stats';
import { Sofa13Steps } from '../sofa13-steps';
import { Sofa13Gallery } from '../sofa13-gallery';
import { Sofa13Marquee } from '../sofa13-marquee';
import { Sofa13Products } from '../sofa13-products';
import { Sofa13Materials } from '../sofa13-materials';
import { Sofa13Collections } from '../sofa13-collections';
import { Sofa13Testimonials } from '../sofa13-testimonials';

// ----------------------------------------------------------------------

export function Sofa13View() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={{ position: 'fixed' }}
      />

      <BackToTop />

      <Sofa13Hero />

      <Stack sx={{ position: 'relative', overflow: 'hidden' }}>
        <Sofa13Marquee />
        <Sofa13Story />
        <Sofa13Collections />
        <Sofa13Products />
        <Sofa13Materials />
        <Sofa13Stats />
        <Sofa13Steps />
        <Sofa13Gallery />
        <Sofa13Testimonials />
        <Sofa13Faqs />
        <Sofa13Cta />
      </Stack>
    </>
  );
}
