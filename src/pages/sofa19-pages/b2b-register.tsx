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

import { SOFA19_COLORS } from 'src/sections/sofa19/sofa19-data';
import { SOFA19_PAGE_IMAGES } from 'src/sections/sofa19-pages/sofa19-pages-data';
import { Sofa19Section, Sofa19PageHero } from 'src/sections/sofa19-pages/sofa19-page-hero';

export default function Page() {
  const theme = useTheme();
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Helmet>
        <title>Đăng ký đại lý — Sofa19</title>
      </Helmet>

      <Sofa19PageHero overline="B2B" title={<>ĐĂNG KÝ <span>ĐẠI LÝ</span></>} subtitle="Trở thành đại lý phân phối sofa retro Sofa19." image={SOFA19_PAGE_IMAGES.b2b} />

      <Sofa19Section>
        <Grid container spacing={5} justifyContent="center">
          <Grid xs={12} md={6}>
            {submitted ? (
              <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 8 }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Iconify icon="solar:check-circle-bold-duotone" width={80} sx={{ color: SOFA19_COLORS.jungleLight }} />
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
                <Button onClick={() => setSubmitted(true)} size="large" variant="contained" startIcon={<Iconify icon="solar:document-bold-duotone" />} sx={{ borderRadius: 30, bgcolor: SOFA19_COLORS.coral, color: 'common.white', fontWeight: 'fontWeightBold', boxShadow: `0 4px 0 ${SOFA19_COLORS.ink}`, '&:hover': { bgcolor: SOFA19_COLORS.golden, boxShadow: `0 6px 0 ${SOFA19_COLORS.ink}` } }}>Gửi đăng ký</Button>
              </Stack>
            )}
          </Grid>
        </Grid>
      </Sofa19Section>
    </>
  );
}
