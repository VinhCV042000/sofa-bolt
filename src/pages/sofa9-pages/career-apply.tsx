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

import { SOFA9_COLORS } from 'src/sections/sofa9/sofa9-data';
import { Sofa9Section, Sofa9PageHero } from 'src/sections/sofa9-pages/sofa9-page-hero';
import { SOFA9_PAGE_IMAGES, SOFA9_PAGE_CAREERS } from 'src/sections/sofa9-pages/sofa9-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const id = params.id || '';
  const job = SOFA9_PAGE_CAREERS.find((j) => j.id === id) || SOFA9_PAGE_CAREERS[0];
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Helmet>
        <title>Ứng tuyển — Sofa9</title>
      </Helmet>

      <Sofa9PageHero overline="ỨNG TUYỂN" title={<>NỘP <span>CV</span></>} subtitle={`Ứng tuyển vị trí: ${job.title}`} image={SOFA9_PAGE_IMAGES.careers} />

      <Sofa9Section>
        <Grid container spacing={5} justifyContent="center">
          <Grid xs={12} md={6}>
            {submitted ? (
              <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 8 }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Iconify icon="solar:check-circle-bold-duotone" width={80} sx={{ color: SOFA9_COLORS.teal }} />
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
                <Button onClick={() => setSubmitted(true)} size="large" variant="contained" startIcon={<Iconify icon="solar:document-bold-duotone" />} sx={{ borderRadius: 30, bgcolor: SOFA9_COLORS.pink, color: 'common.white', fontWeight: 'fontWeightBold', boxShadow: `0 4px 0 ${SOFA9_COLORS.black}`, '&:hover': { bgcolor: SOFA9_COLORS.pinkLight, boxShadow: `0 6px 0 ${SOFA9_COLORS.black}` } }}>Gửi hồ sơ</Button>
              </Stack>
            )}
          </Grid>
        </Grid>
      </Sofa9Section>
    </>
  );
}
