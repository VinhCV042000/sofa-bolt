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

import { SOFA11_COLORS } from 'src/sections/sofa11/sofa11-data';
import { Sofa11Section, Sofa11PageHero } from 'src/sections/sofa11-pages/sofa11-page-hero';
import { SOFA11_PAGE_IMAGES, SOFA11_PAGE_CAREERS } from 'src/sections/sofa11-pages/sofa11-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const id = params.id || '';
  const job = SOFA11_PAGE_CAREERS.find((j) => j.id === id) || SOFA11_PAGE_CAREERS[0];

  return (
    <>
      <Helmet>
        <title>{job.title} — Sofa11 Tuyển dụng</title>
      </Helmet>

      <Sofa11PageHero overline="TUYỂN DỤNG" title={<span>{job.title.toUpperCase()}</span>} subtitle={`${job.location} · ${job.type} · ${job.salary}`} image={SOFA11_PAGE_IMAGES.careers} />

      <Sofa11Section>
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
                    <Box sx={{ width: 8, height: 8, mt: 1.5, borderRadius: '50%', bgcolor: SOFA11_COLORS.magenta, flexShrink: 0 }} />
                    <Typography sx={{ color: 'text.secondary' }}>{req}</Typography>
                  </Stack>
                ))}
              </Stack>
              <Button component={RouterLink} href={`/sofa11/careers/apply/${job.id}`} size="large" variant="contained" startIcon={<Iconify icon="solar:document-bold-duotone" />} sx={{ alignSelf: 'flex-start', borderRadius: 30, bgcolor: SOFA11_COLORS.magenta, color: 'common.white', fontWeight: 'fontWeightBold', boxShadow: `0 4px 0 ${SOFA11_COLORS.void}`, '&:hover': { bgcolor: SOFA11_COLORS.magentaSoft, boxShadow: `0 6px 0 ${SOFA11_COLORS.void}` } }}>Ứng tuyển ngay</Button>
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
      </Sofa11Section>
    </>
  );
}
