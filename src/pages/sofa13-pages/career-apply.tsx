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

import { sofa13Alpha, SOFA13_COLORS } from 'src/sections/sofa13/sofa13-data';
import { Sofa13Section, Sofa13PageHero } from 'src/sections/sofa13-pages/sofa13-page-hero';
import { SOFA13_PAGE_IMAGES, SOFA13_PAGE_CAREERS } from 'src/sections/sofa13-pages/sofa13-pages-data';

export default function Page() {
  const params = useParams();
  const id = params.id || '';
  const job = SOFA13_PAGE_CAREERS.find((j) => j.id === id) || SOFA13_PAGE_CAREERS[0];
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Helmet><title>Nộp CV — Sofa13</title></Helmet>
      <Sofa13PageHero overline="NỘP CV" title={<>NỘP <span>CV</span></>} subtitle={`Ứng tuyển vị trí ${job.title}`} image={SOFA13_PAGE_IMAGES.careers} />

      <Sofa13Section>
        <Grid container spacing={5} justifyContent="center">
          <Grid xs={12} md={6}>
            {submitted ? (
              <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 8 }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Iconify icon="solar:check-circle-bold-duotone" width={80} sx={{ color: SOFA13_COLORS.gold }} />
                <Typography variant="h4" sx={{ fontWeight: 400, letterSpacing: 1, color: SOFA13_COLORS.ivory }}>Nộp CV thành công!</Typography>
                <Typography sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) }}>Chúng tôi sẽ liên hệ với bạn trong vòng 48h.</Typography>
              </Stack>
            ) : (
              <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography variant="h4" sx={{ fontWeight: 400, letterSpacing: 1, color: SOFA13_COLORS.ivory }}>Thông tin ứng tuyển</Typography>
                <Grid container spacing={2}>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" sx={{ '& .MuiOutlinedInput-root': { color: SOFA13_COLORS.ivory }, '& .MuiInputLabel-root': { color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) } }} /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" sx={{ '& .MuiOutlinedInput-root': { color: SOFA13_COLORS.ivory }, '& .MuiInputLabel-root': { color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) } }} /></Grid>
                  <Grid xs={12}><TextField fullWidth label="Email" sx={{ '& .MuiOutlinedInput-root': { color: SOFA13_COLORS.ivory }, '& .MuiInputLabel-root': { color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) } }} /></Grid>
                  <Grid xs={12}><TextField fullWidth label="Link CV / Portfolio" placeholder="https://..." sx={{ '& .MuiOutlinedInput-root': { color: SOFA13_COLORS.ivory }, '& .MuiInputLabel-root': { color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) } }} /></Grid>
                  <Grid xs={12}><TextField fullWidth multiline rows={4} label="Giới thiệu bản thân" sx={{ '& .MuiOutlinedInput-root': { color: SOFA13_COLORS.ivory }, '& .MuiInputLabel-root': { color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) } }} /></Grid>
                </Grid>
                <Button onClick={() => setSubmitted(true)} size="large" variant="contained" startIcon={<Iconify icon="solar:upload-bold-duotone" />} sx={{ borderRadius: 0, px: 4, py: 1.75, fontWeight: 700, letterSpacing: 1.5, color: SOFA13_COLORS.noir, bgcolor: SOFA13_COLORS.gold, '&:hover': { bgcolor: SOFA13_COLORS.goldPale } }}>Gửi hồ sơ</Button>
              </Stack>
            )}
          </Grid>
        </Grid>
      </Sofa13Section>
    </>
  );
}
