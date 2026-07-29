import Stack from '@mui/material/Stack';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { Sofa7Hero } from '../sofa7-hero';
import { Sofa7Marquee } from '../sofa7-marquee';
import { Sofa7Faqs } from '../sofa7-faqs';
import { Sofa7Cta } from '../sofa7-cta';
import { Sofa7Story } from '../sofa7-story';
import { Sofa7Stats } from '../sofa7-stats';
import { Sofa7Steps } from '../sofa7-steps';
import { Sofa7Gallery } from '../sofa7-gallery';
import { Sofa7Products } from '../sofa7-products';
import { Sofa7Collections } from '../sofa7-collections';
import { Sofa7Testimonials } from '../sofa7-testimonials';

// ----------------------------------------------------------------------

export function Sofa7View() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress variant="linear" progress={pageProgress.scrollYProgress} sx={{ position: 'fixed' }} />

      <BackToTop />

      <Sofa7Hero />

      <Stack sx={{ position: 'relative', bgcolor: 'background.default' }}>
        <Sofa7Marquee />
        <Sofa7Collections />
        <Sofa7Products />
        <Sofa7Story />
        <Sofa7Stats />
        <Sofa7Steps />
        <Sofa7Gallery />
        <Sofa7Testimonials />
        <Sofa7Faqs />
        <Sofa7Cta />
      </Stack>
    </>
  );
}
