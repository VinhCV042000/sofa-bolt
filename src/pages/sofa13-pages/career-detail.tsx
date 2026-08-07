import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useParams } from 'react-router-dom';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

import { sofa13Alpha, SOFA13_COLORS } from 'src/sections/sofa13/sofa13-data';
import { Sofa13PageHero, Sofa13Section } from 'src/sections/sofa13-pages/sofa13-page-hero';
import { SOFA13_PAGE_CAREERS, SOFA13_PAGE_IMAGES } from 'src/sections/sofa13-pages/sofa13-pages-data';

export default function Page() {
  const params = useParams();
  const id = params.id || '';
  const job = SOFA13_PAGE_CAREERS.find((j) => j.id === id) || SOFA13_PAGE_CAREERS[0];

  return (
    <>
      <Helmet><title>{job.title} — Sofa13 Tuyển dụng</title></Helmet>
      <Sofa13PageHero overline="TUYỂN DỤNG" title={<><span>{job.title.toUpperCase()}</span></>} subtitle={`${job.location} · ${job.type} · ${job.salary}`} image={SOFA13_PAGE_IMAGES.careers} />

      <Sofa13Section>
        <Grid container spacing={5}>
          <Grid xs={12} md={8}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="h4" sx={{ fontWeight: 400, letterSpacing: 1, color: SOFA13_COLORS.ivory }}>Mô tả công việc</Typography>
              <Typography sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.6), lineHeight: 1.9 }}>{job.description}</Typography>
              <Typography variant="h5" sx={{ fontWeight: 700, color: SOFA13_COLORS.gold, letterSpacing: 1 }}>Yêu cầu</Typography>
              <Stack spacing={2}>
                {job.requirements.map((req, i) => (
                  <Stack key={i} direction="row" spacing={2} alignItems="flex-start">
                    <Box sx={{ width: 6, height: 6, mt: 1.5, borderRadius: '50%', bgcolor: SOFA13_COLORS.gold, flexShrink: 0 }} />
                    <Typography sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.6), lineHeight: 1.9 }}>{req}</Typography>
                  </Stack>
                ))}
              </Stack>
              <Button component={RouterLink} href={`/sofa13/careers/apply/${job.id}`} size="large" variant="contained" startIcon={<Iconify icon="solar:upload-bold-duotone" />} sx={{ alignSelf: 'flex-start', borderRadius: 0, px: 4, py: 1.75, fontWeight: 700, letterSpacing: 1.5, color: SOFA13_COLORS.noir, bgcolor: SOFA13_COLORS.gold, '&:hover': { bgcolor: SOFA13_COLORS.goldPale } }}>Nộp CV</Button>
            </Stack>
          </Grid>
          <Grid xs={12} md={4}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight} sx={{ position: 'sticky', top: 80 }}>
              <Stack spacing={2} sx={{ p: 3, border: `1px solid ${sofa13Alpha(SOFA13_COLORS.ivory, 0.08)}`, bgcolor: sofa13Alpha(SOFA13_COLORS.charcoal, 0.5) }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: SOFA13_COLORS.gold, letterSpacing: 1 }}>Thông tin</Typography>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) }}>Địa điểm</Typography><Typography sx={{ fontWeight: 700, color: SOFA13_COLORS.ivory }}>{job.location}</Typography></Stack>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) }}>Loại</Typography><Typography sx={{ fontWeight: 700, color: SOFA13_COLORS.ivory }}>{job.type}</Typography></Stack>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) }}>Lương</Typography><Typography sx={{ fontWeight: 700, color: SOFA13_COLORS.ivory }}>{job.salary}</Typography></Stack>
              </Stack>
              <Button component={RouterLink} href="/sofa13/careers/tracking" size="large" variant="outlined" fullWidth startIcon={<Iconify icon="solar:clipboard-list-bold-duotone" />} sx={{ borderRadius: 0, fontWeight: 700, letterSpacing: 1.5, color: SOFA13_COLORS.ivory, border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.5)}`, '&:hover': { borderColor: SOFA13_COLORS.gold, color: SOFA13_COLORS.gold } }}>Theo dõi hồ sơ</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa13Section>
    </>
  );
}
