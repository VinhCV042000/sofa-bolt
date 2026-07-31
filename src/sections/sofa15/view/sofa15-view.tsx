import Stack from '@mui/material/Stack';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { Sofa15Hero } from '../sofa15-hero';
import { Sofa15Marquee } from '../sofa15-marquee';
import { Sofa15Faqs } from '../sofa15-faqs';
import { Sofa15Cta } from '../sofa15-cta';
import { Sofa15Story } from '../sofa15-story';
import { Sofa15Stats } from '../sofa15-stats';
import { Sofa15Steps } from '../sofa15-steps';
import { Sofa15Gallery } from '../sofa15-gallery';
import { Sofa15Products } from '../sofa15-products';
import { Sofa15Collections } from '../sofa15-collections';
import { Sofa15Testimonials } from '../sofa15-testimonials';

// ----------------------------------------------------------------------

export function Sofa15View() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress variant="linear" progress={pageProgress.scrollYProgress} sx={{ position: 'fixed' }} />

      <BackToTop />

      <Sofa15Hero />

      <Stack sx={{ position: 'relative', overflow: 'hidden' }}>
        <Sofa15Marquee />
        <Sofa15Collections />
        <Sofa15Products />
        <Sofa15Story />
        <Sofa15Stats />
        <Sofa15Steps />
        <Sofa15Gallery />
        <Sofa15Testimonials />
        <Sofa15Faqs />
        <Sofa15Cta />
      </Stack>
    </>
  );
}
