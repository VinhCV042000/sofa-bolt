import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { Sofa12PageHero } from 'src/sections/sofa12-pages/sofa12-page-hero';
import { SOFA12_PAGE_IMAGES, SOFA12_PAGE_PROMOTION_SERVICES } from 'src/sections/sofa12-pages/sofa12-pages-data';

export default function Page() {
  const { slug } = useParams();
  const service = SOFA12_PAGE_PROMOTION_SERVICES.find((s) => s.slug === slug) || SOFA12_PAGE_PROMOTION_SERVICES[0];

  return (
    <>
      <Helmet><title>{service.title} - TERRA ARCH</title></Helmet>
      <Sofa12PageHero overline="Khuyến mãi" title={service.title} subtitle={service.description} image={SOFA12_PAGE_IMAGES.cta} />
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center' }}>
            <Box sx={{ width: 72, height: 72, display: 'flex', borderRadius: 2, alignItems: 'center', justifyContent: 'center', bgcolor: 'warning.main', color: 'common.white' }}>
              <Iconify icon={service.icon} width={36} />
            </Box>
            <Typography variant="h4">{service.title}</Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{service.description}</Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
