import Stack from '@mui/material/Stack';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { Sofa1Hero } from '../sofa1-hero';
import { Sofa1About } from '../sofa1-about';
import { Sofa1Faqs } from '../sofa1-faqs';
import { Sofa1Cta } from '../sofa1-cta';
import { Sofa1Steps } from '../sofa1-steps';
import { Sofa1Stats } from '../sofa1-stats';
import { Sofa1Products } from '../sofa1-products';
import { Sofa1Gallery } from '../sofa1-gallery';
import { Sofa1Features } from '../sofa1-features';
import { Sofa1Parallax } from '../sofa1-parallax';
import { Sofa1Categories } from '../sofa1-categories';
import { Sofa1Testimonials } from '../sofa1-testimonials';

// ----------------------------------------------------------------------

export function Sofa1View() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress variant="linear" progress={pageProgress.scrollYProgress} sx={{ position: 'fixed' }} />

      <BackToTop />

      <Sofa1Hero />

      <Stack sx={{ position: 'relative', bgcolor: 'background.default' }}>
        <Sofa1Categories />
        <Sofa1About />
        <Sofa1Parallax />
        <Sofa1Products />
        <Sofa1Features />
        <Sofa1Steps />
        <Sofa1Stats />
        <Sofa1Gallery />
        <Sofa1Testimonials />
        <Sofa1Faqs />
        <Sofa1Cta />
      </Stack>
    </>
  );
}
