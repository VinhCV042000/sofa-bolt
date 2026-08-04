import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa3PageHero, Sofa3Section } from 'src/sections/sofa3-pages/sofa3-page-hero';
import { SOFA3_COMPANY_INFO, SOFA3_PAGE_IMAGES } from 'src/sections/sofa3-pages/sofa3-pages-data';

const metadata = { title: 'Liên hệ - Sofa Terra' };

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa3PageHero overline="Liên hệ" title="Liên hệ với Sofa Terra" subtitle="Chúng tôi sẵn sàng hỗ trợ bạn mọi lúc." image={SOFA3_PAGE_IMAGES.contact} />

      <Sofa3Section>
        <Grid container spacing={{ xs: 4, md: 6 }} component={MotionViewport}>
          <Grid xs={12} md={6}>
            <Stack spacing={3}>
              <Typography variant="h5">Gửi tin nhắn</Typography>
              <Stack spacing={2}>
                <TextField label="Họ và tên" fullWidth />
                <TextField label="Email" fullWidth />
                <TextField label="Số điện thoại" fullWidth />
                <TextField label="Nội dung" multiline rows={4} fullWidth />
                <Button variant="contained" color="success" size="large" startIcon={<Iconify icon="solar:letter-bold-duotone" />}>Gửi tin nhắn</Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3}>
              <Typography variant="h5">Thông tin liên hệ</Typography>
              <Stack spacing={2}>
                <Stack direction="row" spacing={2} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={24} sx={{ color: 'success.main' }} /><Typography variant="body2" sx={{ color: 'text.secondary' }}>{SOFA3_COMPANY_INFO.address}</Typography></Stack>
                <Stack direction="row" spacing={2} alignItems="center"><Iconify icon="solar:phone-bold-duotone" width={24} sx={{ color: 'success.main' }} /><Typography variant="body2" sx={{ color: 'text.secondary' }}>{SOFA3_COMPANY_INFO.phone}</Typography></Stack>
                <Stack direction="row" spacing={2} alignItems="center"><Iconify icon="solar:letter-bold-duotone" width={24} sx={{ color: 'success.main' }} /><Typography variant="body2" sx={{ color: 'text.secondary' }}>{SOFA3_COMPANY_INFO.email}</Typography></Stack>
              </Stack>
              <Box sx={{ borderRadius: 3, overflow: 'hidden', height: 300, bgcolor: (t) => t.palette.mode === 'dark' ? 'background.paper' : 'grey.100', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Stack spacing={2} alignItems="center">
                  <Iconify icon="solar:map-point-bold-duotone" width={64} sx={{ color: 'success.main' }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Bản đồ Google Maps</Typography>
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Sofa3Section>
    </>
  );
}
