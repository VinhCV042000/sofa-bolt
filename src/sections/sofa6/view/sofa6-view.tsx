import Stack from '@mui/material/Stack';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { Sofa6Cta } from '../sofa6-cta';
import { Sofa6Hero } from '../sofa6-hero';
import { Sofa6Faqs } from '../sofa6-faqs';
import { Sofa6Craft } from '../sofa6-craft';
import { Sofa6Stats } from '../sofa6-stats';
import { Sofa6Steps } from '../sofa6-steps';
import { Sofa6Marquee } from '../sofa6-marquee';
import { Sofa6Gallery } from '../sofa6-gallery';
import { Sofa6Products } from '../sofa6-products';
import { Sofa6Collections } from '../sofa6-collections';
import { Sofa6Testimonials } from '../sofa6-testimonials';

// ----------------------------------------------------------------------

export function Sofa6View() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress variant="linear" progress={pageProgress.scrollYProgress} sx={{ position: 'fixed' }} />

      <BackToTop />

      <Sofa6Hero />

      <Stack sx={{ position: 'relative', bgcolor: 'background.default' }}>
        <Sofa6Marquee />
        <Sofa6Collections />
        <Sofa6Products />
        <Sofa6Craft />
        <Sofa6Stats />
        <Sofa6Steps />
        <Sofa6Gallery />
        <Sofa6Testimonials />
        <Sofa6Faqs />
        <Sofa6Cta />
      </Stack>
    </>
  );
}
