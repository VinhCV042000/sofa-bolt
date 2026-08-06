import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';
import { Iconify } from 'src/components/iconify';
import { Sofa12PageHero } from 'src/sections/sofa12-pages/sofa12-page-hero';
import { SOFA12_PAGE_SHOWROOMS } from 'src/sections/sofa12-pages/sofa12-pages-data';

export default function Page() {
  const { id } = useParams();
  const showroom = SOFA12_PAGE_SHOWROOMS.find((s) => s.id === id) || SOFA12_PAGE_SHOWROOMS[0];

  return (
    <>
      <Helmet><title>{showroom.name} - TERRA ARCH</title></Helmet>
      <Sofa12PageHero overline="Showroom" title={showroom.name} subtitle={showroom.address} image={showroom.image} />
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <Stack spacing={3}>
            <Box component="img" src={showroom.image} alt={showroom.name} sx={{ width: 1, borderRadius: 2, aspectRatio: '16/9', objectFit: 'cover' }} />
            <Stack spacing={1}>
              <Typography variant="h5">{showroom.name}</Typography>
              <Stack direction="row" spacing={0.5} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={18} sx={{ color: 'warning.main' }} /><Typography sx={{ color: 'text.secondary' }}>{showroom.address}</Typography></Stack>
              <Stack direction="row" spacing={0.5} alignItems="center"><Iconify icon="solar:phone-bold-duotone" width={18} sx={{ color: 'warning.main' }} /><Typography sx={{ color: 'text.secondary' }}>{showroom.phone}</Typography></Stack>
              <Stack direction="row" spacing={0.5} alignItems="center"><Iconify icon="solar:clock-circle-bold-duotone" width={18} sx={{ color: 'warning.main' }} /><Typography sx={{ color: 'text.secondary' }}>{showroom.hours}</Typography></Stack>
            </Stack>
            <Button component={RouterLink} href="/sofa12/showrooms/visit" variant="contained" color="warning" size="large" startIcon={<Iconify icon="solar:calendar-bold-duotone" />}>Đặt lịch tham quan</Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
