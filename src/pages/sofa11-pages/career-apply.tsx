import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

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
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Helmet>
        <title>Ứng tuyển — Sofa11</title>
      </Helmet>

      <Sofa11PageHero overline="ỨNG TUYỂN" title={<>NỘP <span>CV</span></>} subtitle={`Ứng tuyển vị trí: ${job.title}`} image={SOFA11_PAGE_IMAGES.careers} />

      <Sofa11Section>
        <Grid container spacing={5} justifyContent="center">
          <Grid xs={12} md={6}>
            {submitted ? (
              <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 8 }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Iconify icon="solar:check-circle-bold-duotone" width={80} sx={{ color: SOFA11_COLORS.cyan }} />
                <Typography variant="h4" sx={{ fontWeight: 'fontWeightBold' }}>Nộp CV thành công!</Typography>
                <Typography sx={{ color: 'text.secondary' }}>Chúng tôi sẽ liên hệ với bạn trong vòng 7 ngày làm việc.</Typography>
              </Stack>
            ) : (
              <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography variant="h4" sx={{ fontWeight: 'fontWeightBold' }}>Thông tin ứng tuyển</Typography>
                <Grid container spacing={2}>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" /></Grid>
                  <Grid xs={12}><TextField fullWidth label="Email" /></Grid>
                  <Grid xs={12}><TextField fullWidth label="Link CV" placeholder="Google Drive, Dropbox..." /></Grid>
                  <Grid xs={12}><TextField fullWidth multiline rows={4} label="Giới thiệu bản thân" /></Grid>
                </Grid>
                <Button onClick={() => setSubmitted(true)} size="large" variant="contained" startIcon={<Iconify icon="solar:document-bold-duotone" />} sx={{ borderRadius: 30, bgcolor: SOFA11_COLORS.magenta, color: 'common.white', fontWeight: 'fontWeightBold', boxShadow: `0 4px 0 ${SOFA11_COLORS.void}`, '&:hover': { bgcolor: SOFA11_COLORS.magentaSoft, boxShadow: `0 6px 0 ${SOFA11_COLORS.void}` } }}>Gửi hồ sơ</Button>
              </Stack>
            )}
          </Grid>
        </Grid>
      </Sofa11Section>
    </>
  );
}
