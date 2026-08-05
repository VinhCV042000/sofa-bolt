import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { MotionViewport } from 'src/components/animate';

import { Sofa4Section, Sofa4PageHero } from 'src/sections/sofa4-pages/sofa4-page-hero';
import { SOFA4_PAGE_IMAGES, SOFA4_PAGE_COMPANY_INFO } from 'src/sections/sofa4-pages/sofa4-pages-data';

const metadata = { title: 'Liên hệ - Sofa Pop' };

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa4PageHero overline="Liên hệ" title="Liên hệ với Sofa Pop" subtitle="Chúng tôi sẵn sàng hỗ trợ bạn mọi lúc." image={SOFA4_PAGE_IMAGES.contact} />

      <Sofa4Section>
        <Grid container spacing={{ xs: 4, md: 6 }} component={MotionViewport}>
          <Grid xs={12} md={6}>
            <Stack spacing={3}>
              <Typography variant="h5">Gửi tin nhắn</Typography>
              <Stack spacing={2}>
                <TextField label="Họ và tên" fullWidth />
                <TextField label="Email" fullWidth />
                <TextField label="Số điện thoại" fullWidth />
                <TextField label="Nội dung" multiline rows={4} fullWidth />
                <Button variant="contained" color="warning" size="large" startIcon={<Iconify icon="solar:letter-bold-duotone" />}>Gửi tin nhắn</Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3}>
              <Typography variant="h5">Thông tin liên hệ</Typography>
              <Stack spacing={2}>
                <Stack direction="row" spacing={2} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={24} sx={{ color: 'warning.main' }} /><Typography variant="body2" sx={{ color: 'text.secondary' }}>{SOFA4_PAGE_COMPANY_INFO.address}</Typography></Stack>
                <Stack direction="row" spacing={2} alignItems="center"><Iconify icon="solar:phone-bold-duotone" width={24} sx={{ color: 'warning.main' }} /><Typography variant="body2" sx={{ color: 'text.secondary' }}>{SOFA4_PAGE_COMPANY_INFO.phone}</Typography></Stack>
                <Stack direction="row" spacing={2} alignItems="center"><Iconify icon="solar:letter-bold-duotone" width={24} sx={{ color: 'warning.main' }} /><Typography variant="body2" sx={{ color: 'text.secondary' }}>{SOFA4_PAGE_COMPANY_INFO.email}</Typography></Stack>
              </Stack>
              <Box sx={{ borderRadius: 3, overflow: 'hidden', height: 300, bgcolor: (t) => t.palette.mode === 'dark' ? 'background.paper' : 'grey.100', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Stack spacing={2} alignItems="center">
                  <Iconify icon="solar:map-point-bold-duotone" width={64} sx={{ color: 'warning.main' }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Bản đồ Google Maps</Typography>
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Sofa4Section>
    </>
  );
}
