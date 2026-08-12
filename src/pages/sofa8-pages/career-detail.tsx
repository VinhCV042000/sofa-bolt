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

import { SOFA8_COLORS } from 'src/sections/sofa8/sofa8-data';
import { Sofa8Section, Sofa8PageHero } from 'src/sections/sofa8-pages/sofa8-page-hero';
import { SOFA8_PAGE_IMAGES, SOFA8_PAGE_CAREERS } from 'src/sections/sofa8-pages/sofa8-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const id = params.id || '';
  const job = SOFA8_PAGE_CAREERS.find((j) => j.id === id) || SOFA8_PAGE_CAREERS[0];

  return (
    <>
      <Helmet>
        <title>{job.title} — Sofa8 Tuyển dụng</title>
      </Helmet>

      <Sofa8PageHero overline="TUYỂN DỤNG" title={<span>{job.title.toUpperCase()}</span>} subtitle={`${job.location} · ${job.type} · ${job.salary}`} image={SOFA8_PAGE_IMAGES.careers} />

      <Sofa8Section>
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
                    <Box sx={{ width: 6, height: 6, mt: 1.5, borderRadius: '50%', bgcolor: SOFA8_COLORS.coral, flexShrink: 0 }} />
                    <Typography sx={{ color: 'text.secondary' }}>{req}</Typography>
                  </Stack>
                ))}
              </Stack>
              <Button component={RouterLink} href={`/sofa8/careers/apply/${job.id}`} size="large" variant="contained" startIcon={<Iconify icon="solar:document-bold-duotone" />} sx={{ alignSelf: 'flex-start', bgcolor: SOFA8_COLORS.coral, color: 'common.white', fontWeight: 'fontWeightBold', '&:hover': { bgcolor: SOFA8_COLORS.coralLight } }}>
                Ứng tuyển ngay
              </Button>
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
      </Sofa8Section>
    </>
  );
}
