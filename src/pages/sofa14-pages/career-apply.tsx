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

import { sofa14Alpha, SOFA14_COLORS } from 'src/sections/sofa14/sofa14-data';
import { SOFA14_PAGE_IMAGES, SOFA14_PAGE_CAREERS } from 'src/sections/sofa14-pages/sofa14-pages-data';
import { Sofa14Card, Sofa14Section, Sofa14PageHero } from 'src/sections/sofa14-pages/sofa14-page-hero';

export default function Page() {
  const params = useParams();
  const id = params.id || '';
  const job = SOFA14_PAGE_CAREERS.find((j) => j.id === id) || SOFA14_PAGE_CAREERS[0];
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Helmet><title>Nộp CV — Sofa14</title></Helmet>
      <Sofa14PageHero overline="NỘP CV" title={<>NỘP <span>CV</span></>} subtitle={`Ứng tuyển vị trí ${job.title}`} image={SOFA14_PAGE_IMAGES.careers} />

      <Sofa14Section>
        <Grid container spacing={5} justifyContent="center">
          <Grid xs={12} md={6}>
            {submitted ? (
              <Sofa14Card accent={SOFA14_COLORS.mint} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 8 }}>
                  <Iconify icon="solar:check-circle-bold-duotone" width={80} sx={{ color: SOFA14_COLORS.mintDeep }} />
                  <Typography variant="h4" sx={{ fontWeight: 800, color: SOFA14_COLORS.ink }}>Nộp CV thành công!</Typography>
                  <Typography sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.7) }}>Chúng tôi sẽ liên hệ với bạn trong vòng 48h.</Typography>
                </Stack>
              </Sofa14Card>
            ) : (
              <Sofa14Card accent={SOFA14_COLORS.coral} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Stack spacing={3}>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: SOFA14_COLORS.ink }}>Thông tin ứng tuyển</Typography>
                  <Grid container spacing={2}>
                    <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" /></Grid>
                    <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" /></Grid>
                    <Grid xs={12}><TextField fullWidth label="Email" /></Grid>
                    <Grid xs={12}><TextField fullWidth label="Link CV / Portfolio" placeholder="https://..." /></Grid>
                    <Grid xs={12}><TextField fullWidth multiline rows={4} label="Giới thiệu bản thân" /></Grid>
                  </Grid>
                  <Button onClick={() => setSubmitted(true)} size="large" variant="contained" startIcon={<Iconify icon="solar:upload-bold-duotone" />} sx={{ borderRadius: 99, px: 4, py: 1.75, fontWeight: 800, color: SOFA14_COLORS.ink, bgcolor: SOFA14_COLORS.mint, boxShadow: `0 8px 0 ${SOFA14_COLORS.mintDeep}`, '&:hover': { bgcolor: SOFA14_COLORS.mint, transform: 'translateY(2px)', boxShadow: `0 6px 0 ${SOFA14_COLORS.mintDeep}` } }}>Gửi hồ sơ</Button>
                </Stack>
              </Sofa14Card>
            )}
          </Grid>
        </Grid>
      </Sofa14Section>
    </>
  );
}
