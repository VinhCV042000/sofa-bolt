import Stack from '@mui/material/Stack';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { Sofa19Hero } from '../sofa19-hero';
import { Sofa19Marquee } from '../sofa19-marquee';
import { Sofa19Faqs } from '../sofa19-faqs';
import { Sofa19Cta } from '../sofa19-cta';
import { Sofa19Story } from '../sofa19-story';
import { Sofa19Stats } from '../sofa19-stats';
import { Sofa19Steps } from '../sofa19-steps';
import { Sofa19Gallery } from '../sofa19-gallery';
import { Sofa19Products } from '../sofa19-products';
import { Sofa19Collections } from '../sofa19-collections';
import { Sofa19Testimonials } from '../sofa19-testimonials';

// ----------------------------------------------------------------------

export function Sofa19View() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress variant="linear" progress={pageProgress.scrollYProgress} sx={{ position: 'fixed' }} />

      <BackToTop />

      <Sofa19Hero />

      <Stack sx={{ position: 'relative', overflow: 'hidden' }}>
        <Sofa19Marquee />
        <Sofa19Story />
        <Sofa19Collections />
        <Sofa19Products />
        <Sofa19Stats />
        <Sofa19Steps />
        <Sofa19Gallery />
        <Sofa19Testimonials />
        <Sofa19Faqs />
        <Sofa19Cta />
      </Stack>
    </>
  );
}
