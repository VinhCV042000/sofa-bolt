import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa12PageHero } from 'src/sections/sofa12-pages/sofa12-page-hero';
import { SOFA12_PAGE_IMAGES, SOFA12_PAGE_SHOWROOMS } from 'src/sections/sofa12-pages/sofa12-pages-data';

export default function Page() {
  return (
    <>
      <Helmet><title>Showroom - TERRA ARCH</title></Helmet>
      <Sofa12PageHero overline="Showroom" title="Hệ thống showroom TERRA" subtitle="TP.HCM · Hà Nội · Đà Nẵng · Hội An — mở cửa 9h-20h." image={SOFA12_PAGE_IMAGES.showroom1} />
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={4}>
            {SOFA12_PAGE_SHOWROOMS.map((sr) => (
              <Grid key={sr.id} xs={12} sm={6} md={3}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ height: 1, borderRadius: 2, overflow: 'hidden', bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                  <Box component="img" src={sr.image} alt={sr.name} sx={{ width: 1, aspectRatio: '4/3', objectFit: 'cover' }} />
                  <Stack spacing={1} sx={{ p: 2.5 }}>
                    <Typography variant="h6">{sr.name}</Typography>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <Iconify icon="solar:map-point-bold-duotone" width={16} sx={{ color: 'warning.main' }} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{sr.address}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <Iconify icon="solar:phone-bold-duotone" width={16} sx={{ color: 'warning.main' }} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{sr.phone}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <Iconify icon="solar:clock-circle-bold-duotone" width={16} sx={{ color: 'warning.main' }} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{sr.hours}</Typography>
                    </Stack>
                    <Button component={RouterLink} href={`/sofa12/showrooms/${sr.id}`} size="small" color="warning" startIcon={<Iconify icon="solar:eye-bold-duotone" />}>Chi tiết</Button>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
