import Stack from '@mui/material/Stack';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { SofaHero } from '../sofa-hero';
import { SofaAbout } from '../sofa-about';
import { SofaFaqs } from '../sofa-faqs';
import { SofaCta } from '../sofa-cta';
import { SofaSteps } from '../sofa-steps';
import { SofaProducts } from '../sofa-products';
import { SofaFeatures } from '../sofa-features';
import { SofaCollections } from '../sofa-collections';
import { SofaTestimonials } from '../sofa-testimonials';

// ----------------------------------------------------------------------

export function SofaView() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={{ position: 'fixed' }}
      />

      <BackToTop />

      <SofaHero />

      <Stack sx={{ position: 'relative', bgcolor: 'background.default' }}>
        <SofaAbout />

        <SofaCollections />

        <SofaProducts />

        <SofaFeatures />

        <SofaSteps />

        <SofaTestimonials />

        <SofaFaqs />

        <SofaCta />
      </Stack>
    </>
  );
}
