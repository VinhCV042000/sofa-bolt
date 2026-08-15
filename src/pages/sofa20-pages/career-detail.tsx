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

import { SOFA20_COLORS } from 'src/sections/sofa20/sofa20-data';
import { SOFA20_PAGE_IMAGES, SOFA20_PAGE_CAREERS } from 'src/sections/sofa20-pages/sofa20-pages-data';
import { Sofa20Card, Sofa20Section, Sofa20PageHero } from 'src/sections/sofa20-pages/sofa20-page-hero';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const id = params.id || '';
  const job = SOFA20_PAGE_CAREERS.find((j) => j.id === id) || SOFA20_PAGE_CAREERS[0];

  return (
    <>
      <Helmet><title>{job.title} — Sofa20 Tuyển dụng</title></Helmet>
      <Sofa20PageHero overline="TUYỂN DỤNG" title={<span>{job.title.toUpperCase()}</span>} subtitle={`${job.location} · ${job.type} · ${job.salary}`} image={SOFA20_PAGE_IMAGES.careers} />

      <Sofa20Section bg="black">
        <Grid container spacing={5}>
          <Grid xs={12} md={8}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="h4" sx={{ fontWeight: 'fontWeightLight', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily }}>Mô tả công việc</Typography>
              <Typography sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 1.9, fontWeight: 'fontWeightLight' }}>{job.description}</Typography>
              <Typography variant="h5" sx={{ fontWeight: 'fontWeightMedium', color: SOFA20_COLORS.gold }}>Yêu cầu</Typography>
              <Stack spacing={2}>
                {job.requirements.map((req, i) => (
                  <Stack key={i} direction="row" spacing={2} alignItems="flex-start">
                    <Box sx={{ width: 8, height: 8, mt: 1.5, bgcolor: SOFA20_COLORS.gold, flexShrink: 0 }} />
                    <Typography sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 1.9, fontWeight: 'fontWeightLight' }}>{req}</Typography>
                  </Stack>
                ))}
              </Stack>
              <Button component={RouterLink} href={`/sofa20/careers/apply/${job.id}`} size="large" variant="contained" startIcon={<Iconify icon="solar:upload-bold-duotone" />} sx={{ alignSelf: 'flex-start', borderRadius: 0, px: 4, py: 1.75, fontWeight: 'fontWeightMedium', color: SOFA20_COLORS.black, bgcolor: SOFA20_COLORS.gold, border: `1px solid ${SOFA20_COLORS.gold}`, '&:hover': { bgcolor: SOFA20_COLORS.goldLight } }}>Nộp CV</Button>
            </Stack>
          </Grid>
          <Grid xs={12} md={4}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight} sx={{ position: 'sticky', top: 80 }}>
              <Sofa20Card accent={SOFA20_COLORS.gold}>
                <Stack spacing={2}>
                  <Typography variant="h6" sx={{ fontWeight: 'fontWeightMedium', color: SOFA20_COLORS.gold }}>Thông tin</Typography>
                  <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: varAlpha('#FFFFFF', 0.4) }}>Địa điểm</Typography><Typography sx={{ fontWeight: 'fontWeightMedium', color: 'common.white' }}>{job.location}</Typography></Stack>
                  <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: varAlpha('#FFFFFF', 0.4) }}>Loại</Typography><Typography sx={{ fontWeight: 'fontWeightMedium', color: 'common.white' }}>{job.type}</Typography></Stack>
                  <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: varAlpha('#FFFFFF', 0.4) }}>Lương</Typography><Typography sx={{ fontWeight: 'fontWeightMedium', color: 'common.white' }}>{job.salary}</Typography></Stack>
                </Stack>
              </Sofa20Card>
              <Button component={RouterLink} href="/sofa20/careers/tracking" size="large" variant="outlined" fullWidth startIcon={<Iconify icon="solar:clipboard-list-bold-duotone" />} sx={{ borderRadius: 0, fontWeight: 'fontWeightMedium', color: SOFA20_COLORS.gold, bgcolor: 'transparent', border: `1px solid ${varAlpha(SOFA20_COLORS.gold, 0.4)}`, '&:hover': { border: `1px solid ${SOFA20_COLORS.gold}`, bgcolor: varAlpha(SOFA20_COLORS.gold, 0.08) } }}>Theo dõi hồ sơ</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa20Section>
    </>
  );
}
