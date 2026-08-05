import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa4Section, Sofa4PageHero } from 'src/sections/sofa4-pages/sofa4-page-hero';
import { SOFA4_PAGE_IMAGES, SOFA4_PAGE_PROMOTION_SERVICES } from 'src/sections/sofa4-pages/sofa4-pages-data';

const metadata = { title: 'Dịch vụ khuyến mãi - Sofa Pop' };

export default function Page() {
  const { service } = useParams();
  const svc = SOFA4_PAGE_PROMOTION_SERVICES.find((s) => s.slug === service) || SOFA4_PAGE_PROMOTION_SERVICES[0];

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa4PageHero overline="Khuyến mãi" title={svc.title} subtitle={svc.description} image={SOFA4_PAGE_IMAGES.cta} />

      <Sofa4Section>
        <Stack spacing={4} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => t.palette.mode === 'dark' ? 'warning.dark' : 'warning.lighter', color: 'warning.main' }}>
                <Iconify icon={svc.icon} width={28} />
              </Box>
              <Typography variant="h4">{svc.title}</Typography>
            </Stack>
          </Box>

          <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{svc.description}</Typography>

          <Stack spacing={2} direction="row">
            <Button variant="contained" color="warning" size="large" startIcon={<Iconify icon="solar:phone-bold-duotone" />}>Liên hệ đăng ký</Button>
            <Button variant="outlined" color="warning" size="large" component="a" href="/sofa4/support">Hỗ trợ</Button>
          </Stack>
        </Stack>
      </Sofa4Section>
    </>
  );
}
