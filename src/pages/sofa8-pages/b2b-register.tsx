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

import { SOFA8_COLORS } from 'src/sections/sofa8/sofa8-data';
import { SOFA8_PAGE_IMAGES } from 'src/sections/sofa8-pages/sofa8-pages-data';
import { Sofa8Section, Sofa8PageHero } from 'src/sections/sofa8-pages/sofa8-page-hero';

export default function Page() {
  const theme = useTheme();
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Helmet>
        <title>Đăng ký đại lý — Sofa8</title>
      </Helmet>

      <Sofa8PageHero overline="B2B" title={<>ĐĂNG KÝ <span>ĐẠI LÝ</span></>} subtitle="Trở thành đại lý phân phối sofa coastal Sofa8." image={SOFA8_PAGE_IMAGES.b2b} />

      <Sofa8Section>
        <Grid container spacing={5} justifyContent="center">
          <Grid xs={12} md={6}>
            {submitted ? (
              <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 8 }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Iconify icon="solar:check-circle-bold-duotone" width={80} sx={{ color: SOFA8_COLORS.seafoam }} />
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
                <Button onClick={() => setSubmitted(true)} size="large" variant="contained" startIcon={<Iconify icon="solar:document-bold-duotone" />} sx={{ bgcolor: SOFA8_COLORS.coral, color: 'common.white', fontWeight: 'fontWeightBold', '&:hover': { bgcolor: SOFA8_COLORS.coralLight } }}>
                  Gửi đăng ký
                </Button>
              </Stack>
            )}
          </Grid>
        </Grid>
      </Sofa8Section>
    </>
  );
}
