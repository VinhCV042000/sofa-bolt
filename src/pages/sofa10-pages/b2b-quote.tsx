import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA10_COLORS } from 'src/sections/sofa10/sofa10-data';
import { SOFA10_PAGE_IMAGES } from 'src/sections/sofa10-pages/sofa10-pages-data';
import { Sofa10Section, Sofa10PageHero } from 'src/sections/sofa10-pages/sofa10-page-hero';

export default function Page() {
  const theme = useTheme();
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Helmet>
        <title>Báo giá dự án — Sofa10</title>
      </Helmet>

      <Sofa10PageHero overline="B2B" title={<>BÁO GIÁ <span>DỰ ÁN</span></>} subtitle="Yêu cầu báo giá sofa retro cho dự án lớn." image={SOFA10_PAGE_IMAGES.b2b} />

      <Sofa10Section>
        <Grid container spacing={5} justifyContent="center">
          <Grid xs={12} md={6}>
            {submitted ? (
              <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 8 }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Iconify icon="solar:check-circle-bold-duotone" width={80} sx={{ color: SOFA10_COLORS.moss }} />
                <Typography variant="h4" sx={{ fontWeight: 'fontWeightNormal' }}>Gửi báo giá thành công!</Typography>
                <Typography sx={{ color: 'text.secondary' }}>Chúng tôi sẽ gửi báo giá chi tiết trong 48h.</Typography>
              </Stack>
            ) : (
              <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography variant="h4" sx={{ fontWeight: 'fontWeightNormal' }}>Thông tin dự án</Typography>
                <Grid container spacing={2}>
                  <Grid xs={12}><TextField fullWidth label="Tên dự án" /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Loại dự án" placeholder="Cafe, khách sạn..." /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Số lượng" placeholder="50" /></Grid>
                  <Grid xs={12}><TextField fullWidth label="Yêu cầu chi tiết" multiline rows={4} /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Người liên hệ" /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" /></Grid>
                </Grid>
                <Button onClick={() => setSubmitted(true)} size="large" variant="contained" startIcon={<Iconify icon="solar:document-bold-duotone" />} sx={{ borderRadius: 30, bgcolor: SOFA10_COLORS.wood, color: 'common.white', fontWeight: 'fontWeightNormal', boxShadow: `0 4px 0 ${SOFA10_COLORS.charcoal}`, '&:hover': { bgcolor: SOFA10_COLORS.woodLight, boxShadow: `0 6px 0 ${SOFA10_COLORS.charcoal}` } }}>Gửi yêu cầu</Button>
              </Stack>
            )}
          </Grid>
        </Grid>
      </Sofa10Section>
    </>
  );
}
