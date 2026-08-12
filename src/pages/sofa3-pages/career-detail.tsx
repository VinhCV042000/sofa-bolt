import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa3Section, Sofa3PageHero } from 'src/sections/sofa3-pages/sofa3-page-hero';
import { SOFA3_CAREERS, SOFA3_PAGE_IMAGES } from 'src/sections/sofa3-pages/sofa3-pages-data';

const metadata = { title: 'Chi tiết tuyển dụng - Sofa Terra' };

export default function Page() {
  const { id } = useParams();
  const job = SOFA3_CAREERS.find((j) => j.id === id) || SOFA3_CAREERS[0];

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa3PageHero overline="Tuyển dụng" title={job.title} subtitle={job.description} image={SOFA3_PAGE_IMAGES.careers} />

      <Sofa3Section>
        <Stack spacing={4} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" spacing={4} sx={{ flexWrap: 'wrap', gap: 2 }}>
              <Stack direction="row" spacing={1} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={20} sx={{ color: 'success.main' }} /><Typography variant="body2" sx={{ color: 'text.secondary' }}>{job.location}</Typography></Stack>
              <Stack direction="row" spacing={1} alignItems="center"><Iconify icon="solar:clock-circle-bold-duotone" width={20} sx={{ color: 'success.main' }} /><Typography variant="body2" sx={{ color: 'text.secondary' }}>{job.type}</Typography></Stack>
              <Stack direction="row" spacing={1} alignItems="center"><Iconify icon="solar:wallet-bold-duotone" width={20} sx={{ color: 'success.main' }} /><Typography variant="body2" sx={{ color: 'text.secondary' }}>{job.salary}</Typography></Stack>
            </Stack>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>Mô tả công việc</Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{job.description}</Typography>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>Yêu cầu</Typography>
            <Stack spacing={1}>
              {job.requirements.map((req, i) => (
                <Stack key={i} direction="row" spacing={1} alignItems="center">
                  <Iconify icon="solar:check-circle-bold-duotone" width={20} sx={{ color: 'success.main' }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{req}</Typography>
                </Stack>
              ))}
            </Stack>
          </Box>

          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="success" size="large" component={RouterLink} href={`/sofa3/careers/apply/${job.id}`} startIcon={<Iconify icon="solar:document-add-bold-duotone" />}>Nộp CV</Button>
            <Button variant="outlined" color="success" size="large" component={RouterLink} href="/sofa3/careers/tracking">Theo dõi hồ sơ</Button>
          </Stack>
        </Stack>
      </Sofa3Section>
    </>
  );
}
