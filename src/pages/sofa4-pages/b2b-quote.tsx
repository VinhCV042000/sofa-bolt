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

const metadata = { title: 'Báo giá dự án - Sofa Pop' };

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa4PageHero overline="Đại lý B2B" title="Báo giá dự án" subtitle="Yêu cầu báo giá sofa số lượng lớn cho dự án." image={SOFA4_PAGE_IMAGES.b2b} />

      <Sofa4Section>
        <Stack spacing={4} component={MotionViewport} sx={{ maxWidth: 640, mx: 'auto' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h6" sx={{ mb: 3 }}>Thông tin dự án</Typography>
            <Stack spacing={2}>
              <TextField label="Tên dự án" fullWidth />
              <TextField label="Loại dự án" fullWidth />
              <TextField label="Số lượng sofa" type="number" fullWidth />
              <TextField label="Ngân sách dự kiến" fullWidth />
              <TextField label="Thời gian yêu cầu" fullWidth />
              <TextField label="Mô tả chi tiết" multiline rows={4} fullWidth />
            </Stack>
          </Box>
          <Button variant="contained" color="warning" size="large" startIcon={<Iconify icon="solar:document-text-bold-duotone" />}>Gửi yêu cầu báo giá</Button>
        </Stack>
      </Sofa4Section>
    </>
  );
}
