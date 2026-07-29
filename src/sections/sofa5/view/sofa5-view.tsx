import Stack from '@mui/material/Stack';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { Sofa5Cta } from '../sofa5-cta';
import { Sofa5Faqs } from '../sofa5-faqs';
import { Sofa5Hero } from '../sofa5-hero';
import { Sofa5Craft } from '../sofa5-craft';
import { Sofa5Stats } from '../sofa5-stats';
import { Sofa5Products } from '../sofa5-products';
import { Sofa5Showcase } from '../sofa5-showcase';
import { Sofa5Privileges } from '../sofa5-privileges';
import { Sofa5Collections } from '../sofa5-collections';
import { Sofa5Testimonials } from '../sofa5-testimonials';

// ----------------------------------------------------------------------

export function Sofa5View() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={{ position: 'fixed' }}
      />

      <BackToTop />

      <Sofa5Hero />

      <Stack sx={{ position: 'relative', bgcolor: 'background.default' }}>
        <Sofa5Collections />
        <Sofa5Products />
        <Sofa5Craft />
        <Sofa5Showcase />
        <Sofa5Privileges />
        <Sofa5Stats />
        <Sofa5Testimonials />
        <Sofa5Faqs />
        <Sofa5Cta />
      </Stack>
    </>
  );
}
