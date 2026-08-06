import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { Sofa12PageHero } from 'src/sections/sofa12-pages/sofa12-page-hero';
import { SOFA12_PAGE_IMAGES } from 'src/sections/sofa12-pages/sofa12-pages-data';

export default function Page() {
  return (
    <>
      <Helmet><title>Đặt lịch tham quan - TERRA ARCH</title></Helmet>
      <Sofa12PageHero overline="Showroom" title="Đặt lịch tham quan" subtitle="Đặt lịch tham quan showroom TERRA ARCH miễn phí." image={SOFA12_PAGE_IMAGES.showroom1} />
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="sm">
          <Stack spacing={3}>
            <Typography variant="h6">Thông tin đặt lịch</Typography>
            <TextField label="Họ và tên" fullWidth />
            <TextField label="Số điện thoại" fullWidth />
            <TextField label="Email" fullWidth />
            <TextField label="Ngày tham quan" type="date" fullWidth InputLabelProps={{ shrink: true }} />
            <TextField label="Showroom" select fullWidth SelectProps={{ native: true }}>
              <option value="hanoi">TERRA ARCH Hà Nội</option>
              <option value="hcm">TERRA ARCH TP.HCM</option>
              <option value="danang">TERRA ARCH Đà Nẵng</option>
              <option value="hoian">TERRA ARCH Hội An</option>
            </TextField>
            <Button variant="contained" color="warning" size="large" startIcon={<Iconify icon="solar:calendar-bold-duotone" />}>Đặt lịch</Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
