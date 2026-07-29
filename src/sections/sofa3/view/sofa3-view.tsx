import Stack from '@mui/material/Stack';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { Sofa3Cta } from '../sofa3-cta';
import { Sofa3Faqs } from '../sofa3-faqs';
import { Sofa3Hero } from '../sofa3-hero';
import { Sofa3Story } from '../sofa3-story';
import { Sofa3Impact } from '../sofa3-impact';
import { Sofa3Process } from '../sofa3-process';
import { Sofa3Features } from '../sofa3-features';
import { Sofa3Products } from '../sofa3-products';
import { Sofa3Materials } from '../sofa3-materials';
import { Sofa3Inspirations } from '../sofa3-inspirations';
import { Sofa3Testimonials } from '../sofa3-testimonials';

// ----------------------------------------------------------------------

export function Sofa3View() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={{ position: 'fixed' }}
      />

      <BackToTop />

      <Sofa3Hero />

      <Stack sx={{ position: 'relative', bgcolor: 'background.default' }}>
        <Sofa3Story />
        <Sofa3Products />
        <Sofa3Materials />
        <Sofa3Features />
        <Sofa3Process />
        <Sofa3Impact />
        <Sofa3Inspirations />
        <Sofa3Testimonials />
        <Sofa3Faqs />
        <Sofa3Cta />
      </Stack>
    </>
  );
}
