import Stack from '@mui/material/Stack';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { Sofa9Cta } from '../sofa9-cta';
import { Sofa9Hero } from '../sofa9-hero';
import { Sofa9Faqs } from '../sofa9-faqs';
import { Sofa9Story } from '../sofa9-story';
import { Sofa9Stats } from '../sofa9-stats';
import { Sofa9Steps } from '../sofa9-steps';
import { Sofa9Marquee } from '../sofa9-marquee';
import { Sofa9Gallery } from '../sofa9-gallery';
import { Sofa9Products } from '../sofa9-products';
import { Sofa9Collections } from '../sofa9-collections';
import { Sofa9Testimonials } from '../sofa9-testimonials';

// ----------------------------------------------------------------------

export function Sofa9View() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress variant="linear" progress={pageProgress.scrollYProgress} sx={{ position: 'fixed' }} />

      <BackToTop />

      <Sofa9Hero />

      <Stack sx={{ position: 'relative', bgcolor: 'background.default' }}>
        <Sofa9Marquee />
        <Sofa9Collections />
        <Sofa9Products />
        <Sofa9Story />
        <Sofa9Stats />
        <Sofa9Steps />
        <Sofa9Gallery />
        <Sofa9Testimonials />
        <Sofa9Faqs />
        <Sofa9Cta />
      </Stack>
    </>
  );
}
