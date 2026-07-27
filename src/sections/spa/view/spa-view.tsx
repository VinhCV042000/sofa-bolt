import Stack from '@mui/material/Stack';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { SpaHero } from '../spa-hero';
import { SpaAbout } from '../spa-about';
import { SpaFaqs } from '../spa-faqs';
import { SpaBooking } from '../spa-booking';
import { SpaServices } from '../spa-services';
import { SpaPackages } from '../spa-packages';
import { SpaAmenities } from '../spa-amenities';
import { SpaTestimonials } from '../spa-testimonials';

// ----------------------------------------------------------------------

export function SpaView() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={{ position: 'fixed' }}
      />

      <BackToTop />

      <SpaHero />

      <Stack sx={{ position: 'relative', bgcolor: 'background.default' }}>
        <SpaAbout />
        <SpaServices />
        <SpaAmenities />
        <SpaPackages />
        <SpaTestimonials />
        <SpaFaqs />
        <SpaBooking />
      </Stack>
    </>
  );
}
