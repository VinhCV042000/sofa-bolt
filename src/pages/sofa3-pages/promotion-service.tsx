import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa3PageHero, Sofa3Section } from 'src/sections/sofa3-pages/sofa3-page-hero';
import { SOFA3_PROMOTION_SERVICES, SOFA3_PAGE_IMAGES } from 'src/sections/sofa3-pages/sofa3-pages-data';

const metadata = { title: 'Dịch vụ khuyến mãi - Sofa Terra' };

export default function Page() {
  const { service } = useParams();
  const svc = SOFA3_PROMOTION_SERVICES.find((s) => s.slug === service) || SOFA3_PROMOTION_SERVICES[0];

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa3PageHero overline="Khuyến mãi" title={svc.title} subtitle={svc.description} image={SOFA3_PAGE_IMAGES.cta} />

      <Sofa3Section>
        <Stack spacing={4} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => t.palette.mode === 'dark' ? 'success.dark' : 'success.lighter', color: 'success.main' }}>
                <Iconify icon={svc.icon} width={28} />
              </Box>
              <Typography variant="h4">{svc.title}</Typography>
            </Stack>
          </Box>

          <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{svc.description}</Typography>

          <Stack spacing={2} direction="row">
            <Button variant="contained" color="success" size="large" startIcon={<Iconify icon="solar:phone-bold-duotone" />}>Liên hệ đăng ký</Button>
            <Button variant="outlined" color="success" size="large" component="a" href="/sofa3/support">Hỗ trợ</Button>
          </Stack>
        </Stack>
      </Sofa3Section>
    </>
  );
}
