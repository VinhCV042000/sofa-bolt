import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { MotionViewport } from 'src/components/animate';

import { Sofa12PageHero } from 'src/sections/sofa12-pages/sofa12-page-hero';
import { SOFA12_PAGE_PROJECTS } from 'src/sections/sofa12-pages/sofa12-pages-data';

export default function Page() {
  const { id } = useParams();
  const project = SOFA12_PAGE_PROJECTS.find((p) => p.id === id) || SOFA12_PAGE_PROJECTS[0];

  return (
    <>
      <Helmet><title>{project.name} - TERRA ARCH</title></Helmet>
      <Sofa12PageHero overline="Chi tiết dự án" title={project.name} subtitle={project.description} image={project.image} />
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport} maxWidth="md">
          <Stack spacing={4}>
            <Box component="img" src={project.image} alt={project.name} sx={{ width: 1, borderRadius: 2, aspectRatio: '16/9', objectFit: 'cover' }} />
            <Grid container spacing={2}>
              <Grid xs={6}><Typography variant="subtitle2">Loại dự án</Typography><Typography sx={{ color: 'text.secondary' }}>{project.typeLabel}</Typography></Grid>
              <Grid xs={6}><Typography variant="subtitle2">Địa điểm</Typography><Typography sx={{ color: 'text.secondary' }}>{project.location}</Typography></Grid>
              <Grid xs={6}><Typography variant="subtitle2">Năm</Typography><Typography sx={{ color: 'text.secondary' }}>{project.year}</Typography></Grid>
              <Grid xs={6}><Typography variant="subtitle2">Mã dự án</Typography><Typography sx={{ color: 'text.secondary' }}>#{project.id}</Typography></Grid>
            </Grid>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{project.description}</Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
