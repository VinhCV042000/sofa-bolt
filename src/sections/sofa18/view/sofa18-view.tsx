import Stack from '@mui/material/Stack';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { Sofa18Cta } from '../sofa18-cta';
import { Sofa18Hero } from '../sofa18-hero';
import { Sofa18Faqs } from '../sofa18-faqs';
import { Sofa18Story } from '../sofa18-story';
import { Sofa18Stats } from '../sofa18-stats';
import { Sofa18Steps } from '../sofa18-steps';
import { Sofa18Marquee } from '../sofa18-marquee';
import { Sofa18Gallery } from '../sofa18-gallery';
import { Sofa18Products } from '../sofa18-products';
import { Sofa18Collections } from '../sofa18-collections';
import { Sofa18Testimonials } from '../sofa18-testimonials';

// ----------------------------------------------------------------------

export function Sofa18View() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress variant="linear" progress={pageProgress.scrollYProgress} sx={{ position: 'fixed' }} />

      <BackToTop />

      <Sofa18Hero />

      <Stack sx={{ position: 'relative', overflow: 'hidden' }}>
        <Sofa18Marquee />
        <Sofa18Story />
        <Sofa18Collections />
        <Sofa18Products />
        <Sofa18Stats />
        <Sofa18Steps />
        <Sofa18Gallery />
        <Sofa18Testimonials />
        <Sofa18Faqs />
        <Sofa18Cta />
      </Stack>
    </>
  );
}
