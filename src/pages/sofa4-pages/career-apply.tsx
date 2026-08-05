import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa4Section, Sofa4PageHero } from 'src/sections/sofa4-pages/sofa4-page-hero';
import { SOFA4_PAGE_IMAGES, SOFA4_PAGE_CAREERS } from 'src/sections/sofa4-pages/sofa4-pages-data';

const metadata = { title: 'Nộp CV - Sofa Pop' };

export default function Page() {
  const { id } = useParams();
  const job = SOFA4_PAGE_CAREERS.find((j) => j.id === id) || SOFA4_PAGE_CAREERS[0];

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa4PageHero overline="Tuyển dụng" title={`Nộp CV - ${job.title}`} subtitle="Điền thông tin và tải lên CV để ứng tuyển." image={SOFA4_PAGE_IMAGES.careers} />

      <Sofa4Section>
        <Stack spacing={4} component={MotionViewport} sx={{ maxWidth: 640, mx: 'auto' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h6" sx={{ mb: 3 }}>Thông tin ứng viên</Typography>
            <Stack spacing={2}>
              <TextField label="Họ và tên" fullWidth />
              <TextField label="Email" fullWidth />
              <TextField label="Số điện thoại" fullWidth />
              <TextField label="Vị trí ứng tuyển" defaultValue={job.title} fullWidth />
            </Stack>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h6" sx={{ mb: 2 }}>Tải lên CV</Typography>
            <Box sx={{ p: 4, borderRadius: 3, border: '2px dashed', borderColor: 'divider', textAlign: 'center', cursor: 'pointer' }}>
              <Stack spacing={1} alignItems="center">
                <Iconify icon="solar:upload-bold-duotone" width={40} sx={{ color: 'warning.main' }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Kéo thả file PDF hoặc click để chọn</Typography>
              </Stack>
            </Box>
          </Box>

          <Button variant="contained" color="warning" size="large" startIcon={<Iconify icon="solar:document-add-bold-duotone" />}>Gửi hồ sơ</Button>
        </Stack>
      </Sofa4Section>
    </>
  );
}
