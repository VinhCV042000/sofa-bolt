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

import { sofa19Alpha, SOFA19_COLORS } from 'src/sections/sofa19/sofa19-data';
import { SOFA19_PAGE_IMAGES, SOFA19_PAGE_CAREERS } from 'src/sections/sofa19-pages/sofa19-pages-data';
import { Sofa19Card, Sofa19Section, Sofa19PageHero } from 'src/sections/sofa19-pages/sofa19-page-hero';

export default function Page() {
  const params = useParams();
  const id = params.id || '';
  const job = SOFA19_PAGE_CAREERS.find((j) => j.id === id) || SOFA19_PAGE_CAREERS[0];

  return (
    <>
      <Helmet><title>{job.title} — Sofa19 Tuyển dụng</title></Helmet>
      <Sofa19PageHero overline="TUYỂN DỤNG" title={<span>{job.title.toUpperCase()}</span>} subtitle={`${job.location} · ${job.type} · ${job.salary}`} image={SOFA19_PAGE_IMAGES.careers} />

      <Sofa19Section>
        <Grid container spacing={5}>
          <Grid xs={12} md={8}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="h4" sx={{ fontWeight: 800, color: SOFA19_COLORS.ink }}>Mô tả công việc</Typography>
              <Typography sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.8), lineHeight: 1.9 }}>{job.description}</Typography>
              <Typography variant="h5" sx={{ fontWeight: 800, color: SOFA19_COLORS.coralDeep }}>Yêu cầu</Typography>
              <Stack spacing={2}>
                {job.requirements.map((req, i) => (
                  <Stack key={i} direction="row" spacing={2} alignItems="flex-start">
                    <Box sx={{ width: 8, height: 8, mt: 1.5, borderRadius: '50%', bgcolor: SOFA19_COLORS.coralDeep, flexShrink: 0 }} />
                    <Typography sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.8), lineHeight: 1.9 }}>{req}</Typography>
                  </Stack>
                ))}
              </Stack>
              <Button component={RouterLink} href={`/sofa19/careers/apply/${job.id}`} size="large" variant="contained" startIcon={<Iconify icon="solar:upload-bold-duotone" />} sx={{ alignSelf: 'flex-start', borderRadius: 99, px: 4, py: 1.75, fontWeight: 800, color: SOFA19_COLORS.ink, bgcolor: SOFA19_COLORS.jungleLight, boxShadow: `0 8px 0 ${SOFA19_COLORS.jungle}`, '&:hover': { bgcolor: SOFA19_COLORS.jungleLight, transform: 'translateY(2px)', boxShadow: `0 6px 0 ${SOFA19_COLORS.jungle}` } }}>Nộp CV</Button>
            </Stack>
          </Grid>
          <Grid xs={12} md={4}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight} sx={{ position: 'sticky', top: 80 }}>
              <Sofa19Card accent={SOFA19_COLORS.jungleLight}>
                <Stack spacing={2}>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: SOFA19_COLORS.coralDeep }}>Thông tin</Typography>
                  <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.7) }}>Địa điểm</Typography><Typography sx={{ fontWeight: 800, color: SOFA19_COLORS.ink }}>{job.location}</Typography></Stack>
                  <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.7) }}>Loại</Typography><Typography sx={{ fontWeight: 800, color: SOFA19_COLORS.ink }}>{job.type}</Typography></Stack>
                  <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.7) }}>Lương</Typography><Typography sx={{ fontWeight: 800, color: SOFA19_COLORS.ink }}>{job.salary}</Typography></Stack>
                </Stack>
              </Sofa19Card>
              <Button component={RouterLink} href="/sofa19/careers/tracking" size="large" variant="outlined" fullWidth startIcon={<Iconify icon="solar:clipboard-list-bold-duotone" />} sx={{ borderRadius: 99, fontWeight: 800, color: SOFA19_COLORS.ink, bgcolor: SOFA19_COLORS.white, border: `2px solid ${sofa19Alpha(SOFA19_COLORS.ink, 0.1)}`, '&:hover': { borderColor: SOFA19_COLORS.coral, color: SOFA19_COLORS.coralDeep } }}>Theo dõi hồ sơ</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa19Section>
    </>
  );
}
