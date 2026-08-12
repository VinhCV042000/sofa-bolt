import Stack from '@mui/material/Stack';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { Sofa20Cta } from '../sofa20-cta';
import { Sofa20Hero } from '../sofa20-hero';
import { Sofa20Faqs } from '../sofa20-faqs';
import { Sofa20Story } from '../sofa20-story';
import { Sofa20Stats } from '../sofa20-stats';
import { Sofa20Steps } from '../sofa20-steps';
import { Sofa20Marquee } from '../sofa20-marquee';
import { Sofa20Gallery } from '../sofa20-gallery';
import { Sofa20Products } from '../sofa20-products';
import { Sofa20Collections } from '../sofa20-collections';
import { Sofa20Testimonials } from '../sofa20-testimonials';

// ----------------------------------------------------------------------

export function Sofa20View() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress variant="linear" progress={pageProgress.scrollYProgress} sx={{ position: 'fixed' }} />

      <BackToTop />

      <Sofa20Hero />

      <Stack sx={{ position: 'relative', overflow: 'hidden' }}>
        <Sofa20Marquee />
        <Sofa20Story />
        <Sofa20Collections />
        <Sofa20Products />
        <Sofa20Stats />
        <Sofa20Steps />
        <Sofa20Gallery />
        <Sofa20Testimonials />
        <Sofa20Faqs />
        <Sofa20Cta />
      </Stack>
    </>
  );
}
