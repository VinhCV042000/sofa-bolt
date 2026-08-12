import Stack from '@mui/material/Stack';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { Sofa10Cta } from '../sofa10-cta';
import { Sofa10Hero } from '../sofa10-hero';
import { Sofa10Faqs } from '../sofa10-faqs';
import { Sofa10Story } from '../sofa10-story';
import { Sofa10Stats } from '../sofa10-stats';
import { Sofa10Steps } from '../sofa10-steps';
import { Sofa10Marquee } from '../sofa10-marquee';
import { Sofa10Gallery } from '../sofa10-gallery';
import { Sofa10Products } from '../sofa10-products';
import { Sofa10Collections } from '../sofa10-collections';
import { Sofa10Testimonials } from '../sofa10-testimonials';

// ----------------------------------------------------------------------

export function Sofa10View() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress variant="linear" progress={pageProgress.scrollYProgress} sx={{ position: 'fixed' }} />

      <BackToTop />

      <Sofa10Hero />

      <Stack sx={{ position: 'relative', bgcolor: 'background.default' }}>
        <Sofa10Marquee />
        <Sofa10Collections />
        <Sofa10Products />
        <Sofa10Story />
        <Sofa10Stats />
        <Sofa10Steps />
        <Sofa10Gallery />
        <Sofa10Testimonials />
        <Sofa10Faqs />
        <Sofa10Cta />
      </Stack>
    </>
  );
}
