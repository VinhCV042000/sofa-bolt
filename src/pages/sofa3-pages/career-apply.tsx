import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa3PageHero, Sofa3Section } from 'src/sections/sofa3-pages/sofa3-page-hero';
import { SOFA3_CAREERS, SOFA3_PAGE_IMAGES } from 'src/sections/sofa3-pages/sofa3-pages-data';

const metadata = { title: 'Nộp CV - Sofa Terra' };

export default function Page() {
  const { id } = useParams();
  const job = SOFA3_CAREERS.find((j) => j.id === id) || SOFA3_CAREERS[0];

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa3PageHero overline="Tuyển dụng" title={`Nộp CV - ${job.title}`} subtitle="Điền thông tin và tải lên CV để ứng tuyển." image={SOFA3_PAGE_IMAGES.careers} />

      <Sofa3Section>
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
                <Iconify icon="solar:upload-bold-duotone" width={40} sx={{ color: 'success.main' }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Kéo thả file PDF hoặc click để chọn</Typography>
              </Stack>
            </Box>
          </Box>

          <Button variant="contained" color="success" size="large" startIcon={<Iconify icon="solar:document-add-bold-duotone" />}>Gửi hồ sơ</Button>
        </Stack>
      </Sofa3Section>
    </>
  );
}
