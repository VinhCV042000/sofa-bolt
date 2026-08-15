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
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Helmet><title>Nộp CV — Sofa20</title></Helmet>
      <Sofa20PageHero overline="NỘP CV" title={<>NỘP <span>CV</span></>} subtitle={`Ứng tuyển vị trí ${job.title}`} image={SOFA20_PAGE_IMAGES.careers} />

      <Sofa20Section bg="black">
        <Grid container spacing={5} justifyContent="center">
          <Grid xs={12} md={6}>
            {submitted ? (
              <Sofa20Card accent={SOFA20_COLORS.gold} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 8 }}>
                  <Iconify icon="solar:check-circle-bold-duotone" width={80} sx={{ color: SOFA20_COLORS.gold }} />
                  <Typography variant="h4" sx={{ fontWeight: 'fontWeightLight', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily }}>Nộp CV thành công!</Typography>
                  <Typography sx={{ color: varAlpha('#FFFFFF', 0.4) }}>Chúng tôi sẽ liên hệ với bạn trong vòng 48h.</Typography>
                </Stack>
              </Sofa20Card>
            ) : (
              <Sofa20Card accent={SOFA20_COLORS.gold} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Stack spacing={3}>
                  <Typography variant="h4" sx={{ fontWeight: 'fontWeightLight', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily }}>Thông tin ứng tuyển</Typography>
                  <Grid container spacing={2}>
                    <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" /></Grid>
                    <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" /></Grid>
                    <Grid xs={12}><TextField fullWidth label="Email" /></Grid>
                    <Grid xs={12}><TextField fullWidth label="Link CV / Portfolio" placeholder="https://..." /></Grid>
                    <Grid xs={12}><TextField fullWidth multiline rows={4} label="Giới thiệu bản thân" /></Grid>
                  </Grid>
                  <Button onClick={() => setSubmitted(true)} size="large" variant="contained" startIcon={<Iconify icon="solar:upload-bold-duotone" />} sx={{ borderRadius: 0, px: 4, py: 1.75, fontWeight: 'fontWeightMedium', color: SOFA20_COLORS.black, bgcolor: SOFA20_COLORS.gold, border: `1px solid ${SOFA20_COLORS.gold}`, '&:hover': { bgcolor: SOFA20_COLORS.goldLight } }}>Gửi hồ sơ</Button>
                </Stack>
              </Sofa20Card>
            )}
          </Grid>
        </Grid>
      </Sofa20Section>
    </>
  );
}
