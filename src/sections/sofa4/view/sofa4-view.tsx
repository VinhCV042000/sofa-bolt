import Stack from '@mui/material/Stack';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { Sofa4Cta } from '../sofa4-cta';
import { Sofa4Faqs } from '../sofa4-faqs';
import { Sofa4Hero } from '../sofa4-hero';
import { Sofa4About } from '../sofa4-about';
import { Sofa4Stats } from '../sofa4-stats';
import { Sofa4Steps } from '../sofa4-steps';
import { Sofa4Gallery } from '../sofa4-gallery';
import { Sofa4Features } from '../sofa4-features';
import { Sofa4Products } from '../sofa4-products';
import { Sofa4Testimonials } from '../sofa4-testimonials';

// ----------------------------------------------------------------------

export function Sofa4View() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={{ position: 'fixed' }}
      />

      <BackToTop />

      <Sofa4Hero />

      <Stack sx={{ position: 'relative', bgcolor: 'background.default' }}>
        <Sofa4About />
        <Sofa4Products />
        <Sofa4Features />
        <Sofa4Gallery />
        <Sofa4Stats />
        <Sofa4Steps />
        <Sofa4Testimonials />
        <Sofa4Faqs />
        <Sofa4Cta />
      </Stack>
    </>
  );
}
