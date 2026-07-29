import Stack from '@mui/material/Stack';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { Sofa8Hero } from '../sofa8-hero';
import { Sofa8Marquee } from '../sofa8-marquee';
import { Sofa8Faqs } from '../sofa8-faqs';
import { Sofa8Cta } from '../sofa8-cta';
import { Sofa8Story } from '../sofa8-story';
import { Sofa8Stats } from '../sofa8-stats';
import { Sofa8Steps } from '../sofa8-steps';
import { Sofa8Gallery } from '../sofa8-gallery';
import { Sofa8Products } from '../sofa8-products';
import { Sofa8Collections } from '../sofa8-collections';
import { Sofa8Testimonials } from '../sofa8-testimonials';

// ----------------------------------------------------------------------

export function Sofa8View() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress variant="linear" progress={pageProgress.scrollYProgress} sx={{ position: 'fixed' }} />

      <BackToTop />

      <Sofa8Hero />

      <Stack sx={{ position: 'relative', bgcolor: 'background.default' }}>
        <Sofa8Marquee />
        <Sofa8Collections />
        <Sofa8Products />
        <Sofa8Story />
        <Sofa8Stats />
        <Sofa8Steps />
        <Sofa8Gallery />
        <Sofa8Testimonials />
        <Sofa8Faqs />
        <Sofa8Cta />
      </Stack>
    </>
  );
}
