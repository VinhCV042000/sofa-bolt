import Stack from '@mui/material/Stack';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { Sofa17Hero } from '../sofa17-hero';
import { Sofa17Marquee } from '../sofa17-marquee';
import { Sofa17Faqs } from '../sofa17-faqs';
import { Sofa17Cta } from '../sofa17-cta';
import { Sofa17Story } from '../sofa17-story';
import { Sofa17Stats } from '../sofa17-stats';
import { Sofa17Steps } from '../sofa17-steps';
import { Sofa17Gallery } from '../sofa17-gallery';
import { Sofa17Products } from '../sofa17-products';
import { Sofa17Collections } from '../sofa17-collections';
import { Sofa17Testimonials } from '../sofa17-testimonials';

// ----------------------------------------------------------------------

export function Sofa17View() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress variant="linear" progress={pageProgress.scrollYProgress} sx={{ position: 'fixed' }} />

      <BackToTop />

      <Sofa17Hero />

      <Stack sx={{ position: 'relative', overflow: 'hidden' }}>
        <Sofa17Marquee />
        <Sofa17Story />
        <Sofa17Collections />
        <Sofa17Products />
        <Sofa17Stats />
        <Sofa17Steps />
        <Sofa17Gallery />
        <Sofa17Testimonials />
        <Sofa17Faqs />
        <Sofa17Cta />
      </Stack>
    </>
  );
}
