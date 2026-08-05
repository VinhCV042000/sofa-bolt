import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA4_PAGE_IMAGES } from 'src/sections/sofa4-pages/sofa4-pages-data';
import { Sofa4Section, Sofa4PageHero } from 'src/sections/sofa4-pages/sofa4-page-hero';

const metadata = { title: 'Đăng ký đại lý - Sofa Pop' };

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa4PageHero overline="Đại lý B2B" title="Đăng ký đại lý phân phối" subtitle="Điền thông tin để trở thành đại lý phân phối sofa Pop." image={SOFA4_PAGE_IMAGES.b2b} />

      <Sofa4Section>
        <Stack spacing={4} component={MotionViewport} sx={{ maxWidth: 640, mx: 'auto' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h6" sx={{ mb: 3 }}>Thông tin doanh nghiệp</Typography>
            <Stack spacing={2}>
              <TextField label="Tên công ty" fullWidth />
              <TextField label="Mã số thuế" fullWidth />
              <TextField label="Người đại diện" fullWidth />
              <TextField label="Số điện thoại" fullWidth />
              <TextField label="Email" fullWidth />
              <TextField label="Địa chỉ" fullWidth />
              <TextField label="Khu vực muốn phân phối" fullWidth />
            </Stack>
          </Box>
          <Button variant="contained" color="warning" size="large" startIcon={<Iconify icon="solar:document-add-bold-duotone" />}>Gửi đăng ký</Button>
        </Stack>
      </Sofa4Section>
    </>
  );
}
