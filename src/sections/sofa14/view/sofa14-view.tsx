import Stack from '@mui/material/Stack';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { Sofa14Cta } from '../sofa14-cta';
import { Sofa14Hero } from '../sofa14-hero';
import { Sofa14Faqs } from '../sofa14-faqs';
import { Sofa14Story } from '../sofa14-story';
import { Sofa14Stats } from '../sofa14-stats';
import { Sofa14Steps } from '../sofa14-steps';
import { Sofa14Gallery } from '../sofa14-gallery';
import { Sofa14Marquee } from '../sofa14-marquee';
import { Sofa14Products } from '../sofa14-products';
import { Sofa14Playground } from '../sofa14-playground';
import { Sofa14Collections } from '../sofa14-collections';
import { Sofa14Testimonials } from '../sofa14-testimonials';

// ----------------------------------------------------------------------

export function Sofa14View() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress variant="linear" progress={pageProgress.scrollYProgress} sx={{ position: 'fixed' }} />

      <BackToTop />

      <Sofa14Hero />

      <Stack sx={{ position: 'relative', overflow: 'hidden' }}>
        <Sofa14Marquee />
        <Sofa14Story />
        <Sofa14Collections />
        <Sofa14Products />
        <Sofa14Playground />
        <Sofa14Stats />
        <Sofa14Steps />
        <Sofa14Gallery />
        <Sofa14Testimonials />
        <Sofa14Faqs />
        <Sofa14Cta />
      </Stack>
    </>
  );
}
