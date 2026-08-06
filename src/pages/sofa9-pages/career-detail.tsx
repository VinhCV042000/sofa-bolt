import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { useParams } from 'react-router-dom';

import { varAlpha } from 'src/theme/styles';
import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

import { SOFA9_COLORS } from 'src/sections/sofa9/sofa9-data';
import { Sofa9PageHero, Sofa9Section } from 'src/sections/sofa9-pages/sofa9-page-hero';
import { SOFA9_PAGE_CAREERS, SOFA9_PAGE_IMAGES } from 'src/sections/sofa9-pages/sofa9-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const id = params.id || '';
  const job = SOFA9_PAGE_CAREERS.find((j) => j.id === id) || SOFA9_PAGE_CAREERS[0];

  return (
    <>
      <Helmet>
        <title>{job.title} — Sofa9 Tuyển dụng</title>
      </Helmet>

      <Sofa9PageHero overline="TUYỂN DỤNG" title={<><span>{job.title.toUpperCase()}</span></>} subtitle={`${job.location} · ${job.type} · ${job.salary}`} image={SOFA9_PAGE_IMAGES.careers} />

      <Sofa9Section>
        <Grid container spacing={5}>
          <Grid xs={12} md={8}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Stack spacing={2}>
                <Typography variant="h5" sx={{ fontWeight: 'fontWeightBold' }}>Mô tả công việc</Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{job.description}</Typography>
              </Stack>
              <Stack spacing={2}>
                <Typography variant="h5" sx={{ fontWeight: 'fontWeightBold' }}>Yêu cầu</Typography>
                {job.requirements.map((req, i) => (
                  <Stack key={i} direction="row" spacing={2} alignItems="flex-start">
                    <Box sx={{ width: 8, height: 8, mt: 1.5, borderRadius: '50%', bgcolor: SOFA9_COLORS.pink, flexShrink: 0 }} />
                    <Typography sx={{ color: 'text.secondary' }}>{req}</Typography>
                  </Stack>
                ))}
              </Stack>
              <Button component={RouterLink} href={`/sofa9/careers/apply/${job.id}`} size="large" variant="contained" startIcon={<Iconify icon="solar:document-bold-duotone" />} sx={{ alignSelf: 'flex-start', borderRadius: 30, bgcolor: SOFA9_COLORS.pink, color: 'common.white', fontWeight: 'fontWeightBold', boxShadow: `0 4px 0 ${SOFA9_COLORS.black}`, '&:hover': { bgcolor: SOFA9_COLORS.pinkLight, boxShadow: `0 6px 0 ${SOFA9_COLORS.black}` } }}>Ứng tuyển ngay</Button>
            </Stack>
          </Grid>
          <Grid xs={12} md={4}>
            <Stack spacing={2} sx={{ p: 3, borderRadius: 3, bgcolor: 'background.paper', border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` }}>
              <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold' }}>Thông tin</Typography>
              <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Địa điểm</Typography><Typography sx={{ fontWeight: 'fontWeightBold' }}>{job.location}</Typography></Stack>
              <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Loại</Typography><Typography sx={{ fontWeight: 'fontWeightBold' }}>{job.type}</Typography></Stack>
              <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Lương</Typography><Typography sx={{ fontWeight: 'fontWeightBold' }}>{job.salary}</Typography></Stack>
            </Stack>
          </Grid>
        </Grid>
      </Sofa9Section>
    </>
  );
}
