import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';
import { Iconify } from 'src/components/iconify';
import { Sofa12PageHero } from 'src/sections/sofa12-pages/sofa12-page-hero';
import { SOFA12_PAGE_IMAGES, SOFA12_PAGE_CAREERS } from 'src/sections/sofa12-pages/sofa12-pages-data';

export default function Page() {
  const { id } = useParams();
  const job = SOFA12_PAGE_CAREERS.find((j) => j.id === id) || SOFA12_PAGE_CAREERS[0];

  return (
    <>
      <Helmet><title>{job.title} - TERRA ARCH</title></Helmet>
      <Sofa12PageHero overline="Tuyển dụng" title={job.title} subtitle={`${job.location} · ${job.type} · ${job.salary}`} image={SOFA12_PAGE_IMAGES.careers} />
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <Stack spacing={4}>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{job.description}</Typography>
            <Stack spacing={1}>
              <Typography variant="h6">Yêu cầu</Typography>
              {job.requirements.map((r, i) => (
                <Stack key={i} direction="row" spacing={1} alignItems="center">
                  <Iconify icon="solar:check-circle-bold-duotone" width={18} sx={{ color: 'warning.main' }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{r}</Typography>
                </Stack>
              ))}
            </Stack>
            <Button component={RouterLink} href={`/sofa12/careers/${job.id}/apply`} variant="contained" color="warning" size="large" startIcon={<Iconify icon="solar:file-bold-duotone" />}>Nộp CV</Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
