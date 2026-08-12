import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa12PageHero } from 'src/sections/sofa12-pages/sofa12-page-hero';
import { SOFA12_PAGE_IMAGES, SOFA12_PAGE_CAREERS } from 'src/sections/sofa12-pages/sofa12-pages-data';

export default function Page() {
  return (
    <>
      <Helmet><title>Tuyển dụng - TERRA ARCH</title></Helmet>
      <Sofa12PageHero overline="Tuyển dụng" title="Cơ hội nghề nghiệp TERRA" subtitle="Gia nhập đội ngũ thủ công TERRA ARCH." image={SOFA12_PAGE_IMAGES.careers} />
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={4}>
            {SOFA12_PAGE_CAREERS.map((job) => (
              <Grid key={job.id} xs={12} sm={6} md={6}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                  <Typography variant="h6">{job.title}</Typography>
                  <Stack direction="row" spacing={2}>
                    <Stack direction="row" spacing={0.5} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={16} sx={{ color: 'warning.main' }} /><Typography variant="body2" sx={{ color: 'text.secondary' }}>{job.location}</Typography></Stack>
                    <Stack direction="row" spacing={0.5} alignItems="center"><Iconify icon="solar:clock-circle-bold-duotone" width={16} sx={{ color: 'warning.main' }} /><Typography variant="body2" sx={{ color: 'text.secondary' }}>{job.type}</Typography></Stack>
                  </Stack>
                  <Typography variant="subtitle2" sx={{ color: 'warning.main' }}>{job.salary}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{job.description}</Typography>
                  <Button component={RouterLink} href={`/sofa12/careers/${job.id}`} variant="outlined" color="warning" size="small" startIcon={<Iconify icon="solar:eye-bold-duotone" />}>Chi tiết</Button>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
