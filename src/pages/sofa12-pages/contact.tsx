import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';

import { Sofa12PageHero } from 'src/sections/sofa12-pages/sofa12-page-hero';
import { SOFA12_PAGE_IMAGES, SOFA12_PAGE_COMPANY_INFO } from 'src/sections/sofa12-pages/sofa12-pages-data';

export default function Page() {
  return (
    <>
      <Helmet><title>Liên hệ - TERRA ARCH</title></Helmet>
      <Sofa12PageHero overline="Liên hệ" title="Liên hệ TERRA ARCH" subtitle="Chúng tôi sẵn sàng tư vấn và hỗ trợ bạn." image={SOFA12_PAGE_IMAGES.contact} />
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container>
          <Grid container spacing={{ xs: 4, md: 8 }}>
            <Grid xs={12} md={6}>
              <Stack spacing={3}>
                <Typography variant="h5">Thông tin liên hệ</Typography>
                <Stack direction="row" spacing={1} alignItems="center"><Iconify icon="solar:phone-bold-duotone" width={20} sx={{ color: 'warning.main' }} /><Typography sx={{ color: 'text.secondary' }}>{SOFA12_PAGE_COMPANY_INFO.phone}</Typography></Stack>
                <Stack direction="row" spacing={1} alignItems="center"><Iconify icon="solar:letter-bold-duotone" width={20} sx={{ color: 'warning.main' }} /><Typography sx={{ color: 'text.secondary' }}>{SOFA12_PAGE_COMPANY_INFO.email}</Typography></Stack>
                <Stack direction="row" spacing={1} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={20} sx={{ color: 'warning.main' }} /><Typography sx={{ color: 'text.secondary' }}>{SOFA12_PAGE_COMPANY_INFO.address}</Typography></Stack>
              </Stack>
            </Grid>
            <Grid xs={12} md={6}>
              <Stack spacing={3}>
                <Typography variant="h5">Gửi tin nhắn</Typography>
                <TextField label="Họ và tên" fullWidth />
                <TextField label="Email" fullWidth />
                <TextField label="Nội dung" multiline rows={4} fullWidth />
                <Button variant="contained" color="warning" size="large">Gửi tin nhắn</Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
