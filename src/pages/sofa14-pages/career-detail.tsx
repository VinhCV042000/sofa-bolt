import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { sofa14Alpha, SOFA14_COLORS } from 'src/sections/sofa14/sofa14-data';
import { SOFA14_PAGE_IMAGES, SOFA14_PAGE_CAREERS } from 'src/sections/sofa14-pages/sofa14-pages-data';
import { Sofa14Card, Sofa14Section, Sofa14PageHero } from 'src/sections/sofa14-pages/sofa14-page-hero';

export default function Page() {
  const params = useParams();
  const id = params.id || '';
  const job = SOFA14_PAGE_CAREERS.find((j) => j.id === id) || SOFA14_PAGE_CAREERS[0];

  return (
    <>
      <Helmet><title>{job.title} — Sofa14 Tuyển dụng</title></Helmet>
      <Sofa14PageHero overline="TUYỂN DỤNG" title={<span>{job.title.toUpperCase()}</span>} subtitle={`${job.location} · ${job.type} · ${job.salary}`} image={SOFA14_PAGE_IMAGES.careers} />

      <Sofa14Section>
        <Grid container spacing={5}>
          <Grid xs={12} md={8}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="h4" sx={{ fontWeight: 800, color: SOFA14_COLORS.ink }}>Mô tả công việc</Typography>
              <Typography sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.8), lineHeight: 1.9 }}>{job.description}</Typography>
              <Typography variant="h5" sx={{ fontWeight: 800, color: SOFA14_COLORS.coralDeep }}>Yêu cầu</Typography>
              <Stack spacing={2}>
                {job.requirements.map((req, i) => (
                  <Stack key={i} direction="row" spacing={2} alignItems="flex-start">
                    <Box sx={{ width: 8, height: 8, mt: 1.5, borderRadius: '50%', bgcolor: SOFA14_COLORS.coralDeep, flexShrink: 0 }} />
                    <Typography sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.8), lineHeight: 1.9 }}>{req}</Typography>
                  </Stack>
                ))}
              </Stack>
              <Button component={RouterLink} href={`/sofa14/careers/apply/${job.id}`} size="large" variant="contained" startIcon={<Iconify icon="solar:upload-bold-duotone" />} sx={{ alignSelf: 'flex-start', borderRadius: 99, px: 4, py: 1.75, fontWeight: 800, color: SOFA14_COLORS.ink, bgcolor: SOFA14_COLORS.mint, boxShadow: `0 8px 0 ${SOFA14_COLORS.mintDeep}`, '&:hover': { bgcolor: SOFA14_COLORS.mint, transform: 'translateY(2px)', boxShadow: `0 6px 0 ${SOFA14_COLORS.mintDeep}` } }}>Nộp CV</Button>
            </Stack>
          </Grid>
          <Grid xs={12} md={4}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight} sx={{ position: 'sticky', top: 80 }}>
              <Sofa14Card accent={SOFA14_COLORS.mint}>
                <Stack spacing={2}>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: SOFA14_COLORS.coralDeep }}>Thông tin</Typography>
                  <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.7) }}>Địa điểm</Typography><Typography sx={{ fontWeight: 800, color: SOFA14_COLORS.ink }}>{job.location}</Typography></Stack>
                  <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.7) }}>Loại</Typography><Typography sx={{ fontWeight: 800, color: SOFA14_COLORS.ink }}>{job.type}</Typography></Stack>
                  <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.7) }}>Lương</Typography><Typography sx={{ fontWeight: 800, color: SOFA14_COLORS.ink }}>{job.salary}</Typography></Stack>
                </Stack>
              </Sofa14Card>
              <Button component={RouterLink} href="/sofa14/careers/tracking" size="large" variant="outlined" fullWidth startIcon={<Iconify icon="solar:clipboard-list-bold-duotone" />} sx={{ borderRadius: 99, fontWeight: 800, color: SOFA14_COLORS.ink, bgcolor: SOFA14_COLORS.white, border: `2px solid ${sofa14Alpha(SOFA14_COLORS.ink, 0.1)}`, '&:hover': { borderColor: SOFA14_COLORS.coral, color: SOFA14_COLORS.coralDeep } }}>Theo dõi hồ sơ</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa14Section>
    </>
  );
}
