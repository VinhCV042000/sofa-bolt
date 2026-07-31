import Stack from '@mui/material/Stack';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { Sofa16Hero } from '../sofa16-hero';
import { Sofa16Marquee } from '../sofa16-marquee';
import { Sofa16Faqs } from '../sofa16-faqs';
import { Sofa16Cta } from '../sofa16-cta';
import { Sofa16Story } from '../sofa16-story';
import { Sofa16Stats } from '../sofa16-stats';
import { Sofa16Steps } from '../sofa16-steps';
import { Sofa16Gallery } from '../sofa16-gallery';
import { Sofa16Products } from '../sofa16-products';
import { Sofa16Collections } from '../sofa16-collections';
import { Sofa16Testimonials } from '../sofa16-testimonials';

// ----------------------------------------------------------------------

export function Sofa16View() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress variant="linear" progress={pageProgress.scrollYProgress} sx={{ position: 'fixed' }} />

      <BackToTop />

      <Sofa16Hero />

      <Stack sx={{ position: 'relative', overflow: 'hidden' }}>
        <Sofa16Marquee />
        <Sofa16Story />
        <Sofa16Collections />
        <Sofa16Products />
        <Sofa16Stats />
        <Sofa16Steps />
        <Sofa16Gallery />
        <Sofa16Testimonials />
        <Sofa16Faqs />
        <Sofa16Cta />
      </Stack>
    </>
  );
}
