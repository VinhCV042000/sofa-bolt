import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { sofa19Alpha, SOFA19_COLORS } from 'src/sections/sofa19/sofa19-data';
import { SOFA19_PAGE_IMAGES, SOFA19_PAGE_CAREERS } from 'src/sections/sofa19-pages/sofa19-pages-data';
import { Sofa19Card, Sofa19Section, Sofa19PageHero } from 'src/sections/sofa19-pages/sofa19-page-hero';

export default function Page() {
  const params = useParams();
  const id = params.id || '';
  const job = SOFA19_PAGE_CAREERS.find((j) => j.id === id) || SOFA19_PAGE_CAREERS[0];
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Helmet><title>Nộp CV — Sofa19</title></Helmet>
      <Sofa19PageHero overline="NỘP CV" title={<>NỘP <span>CV</span></>} subtitle={`Ứng tuyển vị trí ${job.title}`} image={SOFA19_PAGE_IMAGES.careers} />

      <Sofa19Section>
        <Grid container spacing={5} justifyContent="center">
          <Grid xs={12} md={6}>
            {submitted ? (
              <Sofa19Card accent={SOFA19_COLORS.jungleLight} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 8 }}>
                  <Iconify icon="solar:check-circle-bold-duotone" width={80} sx={{ color: SOFA19_COLORS.jungle }} />
                  <Typography variant="h4" sx={{ fontWeight: 800, color: SOFA19_COLORS.ink }}>Nộp CV thành công!</Typography>
                  <Typography sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.7) }}>Chúng tôi sẽ liên hệ với bạn trong vòng 48h.</Typography>
                </Stack>
              </Sofa19Card>
            ) : (
              <Sofa19Card accent={SOFA19_COLORS.coral} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Stack spacing={3}>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: SOFA19_COLORS.ink }}>Thông tin ứng tuyển</Typography>
                  <Grid container spacing={2}>
                    <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" /></Grid>
                    <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" /></Grid>
                    <Grid xs={12}><TextField fullWidth label="Email" /></Grid>
                    <Grid xs={12}><TextField fullWidth label="Link CV / Portfolio" placeholder="https://..." /></Grid>
                    <Grid xs={12}><TextField fullWidth multiline rows={4} label="Giới thiệu bản thân" /></Grid>
                  </Grid>
                  <Button onClick={() => setSubmitted(true)} size="large" variant="contained" startIcon={<Iconify icon="solar:upload-bold-duotone" />} sx={{ borderRadius: 99, px: 4, py: 1.75, fontWeight: 800, color: SOFA19_COLORS.ink, bgcolor: SOFA19_COLORS.jungleLight, boxShadow: `0 8px 0 ${SOFA19_COLORS.jungle}`, '&:hover': { bgcolor: SOFA19_COLORS.jungleLight, transform: 'translateY(2px)', boxShadow: `0 6px 0 ${SOFA19_COLORS.jungle}` } }}>Gửi hồ sơ</Button>
                </Stack>
              </Sofa19Card>
            )}
          </Grid>
        </Grid>
      </Sofa19Section>
    </>
  );
}
