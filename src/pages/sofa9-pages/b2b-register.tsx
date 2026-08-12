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

import { SOFA9_COLORS } from 'src/sections/sofa9/sofa9-data';
import { SOFA9_PAGE_IMAGES } from 'src/sections/sofa9-pages/sofa9-pages-data';
import { Sofa9Section, Sofa9PageHero } from 'src/sections/sofa9-pages/sofa9-page-hero';

export default function Page() {
  const theme = useTheme();
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Helmet>
        <title>Đăng ký đại lý — Sofa9</title>
      </Helmet>

      <Sofa9PageHero overline="B2B" title={<>ĐĂNG KÝ <span>ĐẠI LÝ</span></>} subtitle="Trở thành đại lý phân phối sofa retro Sofa9." image={SOFA9_PAGE_IMAGES.b2b} />

      <Sofa9Section>
        <Grid container spacing={5} justifyContent="center">
          <Grid xs={12} md={6}>
            {submitted ? (
              <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 8 }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Iconify icon="solar:check-circle-bold-duotone" width={80} sx={{ color: SOFA9_COLORS.teal }} />
                <Typography variant="h4" sx={{ fontWeight: 'fontWeightBold' }}>Đăng ký thành công!</Typography>
                <Typography sx={{ color: 'text.secondary' }}>Chúng tôi sẽ liên hệ trong 48h để đánh giá hồ sơ.</Typography>
              </Stack>
            ) : (
              <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography variant="h4" sx={{ fontWeight: 'fontWeightBold' }}>Thông tin đăng ký</Typography>
                <Grid container spacing={2}>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Tên công ty" /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Mã số thuế" /></Grid>
                  <Grid xs={12}><TextField fullWidth label="Địa chỉ" /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Người liên hệ" /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" /></Grid>
                  <Grid xs={12}><TextField fullWidth label="Email" /></Grid>
                </Grid>
                <Button onClick={() => setSubmitted(true)} size="large" variant="contained" startIcon={<Iconify icon="solar:document-bold-duotone" />} sx={{ borderRadius: 30, bgcolor: SOFA9_COLORS.pink, color: 'common.white', fontWeight: 'fontWeightBold', boxShadow: `0 4px 0 ${SOFA9_COLORS.black}`, '&:hover': { bgcolor: SOFA9_COLORS.pinkLight, boxShadow: `0 6px 0 ${SOFA9_COLORS.black}` } }}>Gửi đăng ký</Button>
              </Stack>
            )}
          </Grid>
        </Grid>
      </Sofa9Section>
    </>
  );
}
