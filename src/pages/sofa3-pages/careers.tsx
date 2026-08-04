import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa3PageHero } from 'src/sections/sofa3-pages/sofa3-page-hero';
import { SOFA3_CAREERS, SOFA3_PAGE_IMAGES } from 'src/sections/sofa3-pages/sofa3-pages-data';

const metadata = { title: 'Tuyển dụng - Sofa Terra' };

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa3PageHero overline="Tuyển dụng" title="Cơ hội nghề nghiệp eco" subtitle="Gia nhập đội ngũ Sofa Terra — cùng xây dựng tương lai xanh." image={SOFA3_PAGE_IMAGES.careers} />

      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={3}>
            {SOFA3_CAREERS.map((job, index) => (
              <Grid key={job.id} xs={12} sm={6} md={6}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: index * 0.08 }} spacing={2} sx={{ p: 4, borderRadius: 2, bgcolor: 'background.paper', border: (t) => `1px solid ${varAlpha(t.vars.palette.grey['500Channel'], 0.12)}` }}>
                  <Typography variant="h6">{job.title}</Typography>
                  <Stack direction="row" spacing={3}>
                    <Stack direction="row" spacing={1} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={18} sx={{ color: 'success.main' }} /><Typography variant="body2" sx={{ color: 'text.secondary' }}>{job.location}</Typography></Stack>
                    <Stack direction="row" spacing={1} alignItems="center"><Iconify icon="solar:clock-circle-bold-duotone" width={18} sx={{ color: 'success.main' }} /><Typography variant="body2" sx={{ color: 'text.secondary' }}>{job.type}</Typography></Stack>
                  </Stack>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{job.description}</Typography>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Typography variant="subtitle2" sx={{ color: 'success.main' }}>{job.salary}</Typography>
                    <Button component={RouterLink} href={`/sofa3/careers/${job.id}`} variant="outlined" color="success" size="small">Xem chi tiết</Button>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
