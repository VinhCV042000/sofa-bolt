import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA10_COLORS } from 'src/sections/sofa10/sofa10-data';
import { Sofa10Section, Sofa10PageHero } from 'src/sections/sofa10-pages/sofa10-page-hero';
import { SOFA10_PAGE_IMAGES, SOFA10_PAGE_CAREERS } from 'src/sections/sofa10-pages/sofa10-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const id = params.id || '';
  const job = SOFA10_PAGE_CAREERS.find((j) => j.id === id) || SOFA10_PAGE_CAREERS[0];

  return (
    <>
      <Helmet>
        <title>{job.title} — Sofa10 Tuyển dụng</title>
      </Helmet>

      <Sofa10PageHero overline="TUYỂN DỤNG" title={<span>{job.title.toUpperCase()}</span>} subtitle={`${job.location} · ${job.type} · ${job.salary}`} image={SOFA10_PAGE_IMAGES.careers} />

      <Sofa10Section>
        <Grid container spacing={5}>
          <Grid xs={12} md={8}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Stack spacing={2}>
                <Typography variant="h5" sx={{ fontWeight: 'fontWeightNormal' }}>Mô tả công việc</Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{job.description}</Typography>
              </Stack>
              <Stack spacing={2}>
                <Typography variant="h5" sx={{ fontWeight: 'fontWeightNormal' }}>Yêu cầu</Typography>
                {job.requirements.map((req, i) => (
                  <Stack key={i} direction="row" spacing={2} alignItems="flex-start">
                    <Box sx={{ width: 8, height: 8, mt: 1.5, borderRadius: '50%', bgcolor: SOFA10_COLORS.wood, flexShrink: 0 }} />
                    <Typography sx={{ color: 'text.secondary' }}>{req}</Typography>
                  </Stack>
                ))}
              </Stack>
              <Button component={RouterLink} href={`/sofa10/careers/apply/${job.id}`} size="large" variant="contained" startIcon={<Iconify icon="solar:document-bold-duotone" />} sx={{ alignSelf: 'flex-start', borderRadius: 30, bgcolor: SOFA10_COLORS.wood, color: 'common.white', fontWeight: 'fontWeightNormal', boxShadow: `0 4px 0 ${SOFA10_COLORS.charcoal}`, '&:hover': { bgcolor: SOFA10_COLORS.woodLight, boxShadow: `0 6px 0 ${SOFA10_COLORS.charcoal}` } }}>Ứng tuyển ngay</Button>
            </Stack>
          </Grid>
          <Grid xs={12} md={4}>
            <Stack spacing={2} sx={{ p: 3, borderRadius: 3, bgcolor: 'background.paper', border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` }}>
              <Typography variant="h6" sx={{ fontWeight: 'fontWeightNormal' }}>Thông tin</Typography>
              <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Địa điểm</Typography><Typography sx={{ fontWeight: 'fontWeightNormal' }}>{job.location}</Typography></Stack>
              <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Loại</Typography><Typography sx={{ fontWeight: 'fontWeightNormal' }}>{job.type}</Typography></Stack>
              <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Lương</Typography><Typography sx={{ fontWeight: 'fontWeightNormal' }}>{job.salary}</Typography></Stack>
            </Stack>
          </Grid>
        </Grid>
      </Sofa10Section>
    </>
  );
}
