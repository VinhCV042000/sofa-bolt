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
      <Helmet><title>Nộp CV - TERRA ARCH</title></Helmet>
      <Sofa12PageHero overline="Tuyển dụng" title="Nộp hồ sơ ứng viên" subtitle="Điền thông tin và tải lên CV của bạn." image={SOFA12_PAGE_IMAGES.careers} />
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="sm">
          <Stack spacing={3}>
            <TextField label="Họ và tên" fullWidth />
            <TextField label="Email" fullWidth />
            <TextField label="Số điện thoại" fullWidth />
            <TextField label="Vị trí ứng tuyển" fullWidth />
            <Button variant="contained" color="warning" size="large" startIcon={<Iconify icon="solar:upload-bold-duotone" />}>Tải lên CV</Button>
            <Button variant="outlined" color="warning" size="large">Gửi hồ sơ</Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
