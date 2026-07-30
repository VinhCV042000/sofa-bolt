import Stack from '@mui/material/Stack';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { Sofa12Cta } from '../sofa12-cta';
import { Sofa12Hero } from '../sofa12-hero';
import { Sofa12Faqs } from '../sofa12-faqs';
import { Sofa12Story } from '../sofa12-story';
import { Sofa12Stats } from '../sofa12-stats';
import { Sofa12Steps } from '../sofa12-steps';
import { Sofa12Gallery } from '../sofa12-gallery';
import { Sofa12Marquee } from '../sofa12-marquee';
import { Sofa12Products } from '../sofa12-products';
import { Sofa12Materials } from '../sofa12-materials';
import { Sofa12Collections } from '../sofa12-collections';
import { Sofa12Testimonials } from '../sofa12-testimonials';

// ----------------------------------------------------------------------

export function Sofa12View() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={{ position: 'fixed' }}
      />

      <BackToTop />

      <Sofa12Hero />

      <Stack sx={{ position: 'relative', overflow: 'hidden' }}>
        <Sofa12Marquee />
        <Sofa12Story />
        <Sofa12Collections />
        <Sofa12Products />
        <Sofa12Materials />
        <Sofa12Stats />
        <Sofa12Steps />
        <Sofa12Gallery />
        <Sofa12Testimonials />
        <Sofa12Faqs />
        <Sofa12Cta />
      </Stack>
    </>
  );
}
