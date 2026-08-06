import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { Sofa12PageHero } from 'src/sections/sofa12-pages/sofa12-page-hero';
import { SOFA12_PAGE_IMAGES } from 'src/sections/sofa12-pages/sofa12-pages-data';

export default function Page() {
  return (
    <>
      <Helmet><title>Theo dõi tuyển dụng - TERRA ARCH</title></Helmet>
      <Sofa12PageHero overline="Tuyển dụng" title="Theo dõi hồ sơ tuyển dụng" subtitle="Nhập mã hồ sơ để tra cứu trạng thái." image={SOFA12_PAGE_IMAGES.careers} />
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="sm">
          <Stack spacing={3} alignItems="center">
            <TextField label="Mã hồ sơ" fullWidth />
            <Button variant="contained" color="warning" size="large" startIcon={<Iconify icon="solar:search-bold-duotone" />}>Tra cứu</Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
