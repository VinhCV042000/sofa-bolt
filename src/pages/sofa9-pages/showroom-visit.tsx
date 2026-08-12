import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA9_COLORS } from 'src/sections/sofa9/sofa9-data';
import { Sofa9Section, Sofa9PageHero } from 'src/sections/sofa9-pages/sofa9-page-hero';
import { SOFA9_PAGE_IMAGES, SOFA9_PAGE_SHOWROOMS } from 'src/sections/sofa9-pages/sofa9-pages-data';

export default function Page() {
  const theme = useTheme();
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Helmet>
        <title>Đặt lịch — Sofa9</title>
      </Helmet>

      <Sofa9PageHero overline="ĐẶT LỊCH" title={<>ĐẶT <span>LỊCH</span></>} subtitle="Đặt lịch tham quan showroom hoặc tư vấn thiết kế retro miễn phí." image={SOFA9_PAGE_IMAGES.showroom1} />

      <Sofa9Section>
        <Grid container spacing={5} justifyContent="center">
          <Grid xs={12} md={6}>
            {submitted ? (
              <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 8 }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Iconify icon="solar:check-circle-bold-duotone" width={80} sx={{ color: SOFA9_COLORS.teal }} />
                <Typography variant="h4" sx={{ fontWeight: 'fontWeightBold' }}>Đặt lịch thành công!</Typography>
                <Typography sx={{ color: 'text.secondary' }}>Chúng tôi sẽ liên hệ với bạn trong vòng 24h để xác nhận lịch hẹn.</Typography>
                <Button onClick={() => setSubmitted(false)} variant="outlined" sx={{ borderColor: SOFA9_COLORS.teal, color: SOFA9_COLORS.teal }}>Đặt lịch khác</Button>
              </Stack>
            ) : (
              <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography variant="h4" sx={{ fontWeight: 'fontWeightBold' }}>Thông tin đặt lịch</Typography>
                <Grid container spacing={2}>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" placeholder="Nguyễn Văn A" /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" placeholder="0901 234 567" /></Grid>
                  <Grid xs={12}><TextField fullWidth label="Email" placeholder="email@example.com" /></Grid>
                  <Grid xs={12} sm={6}>
                    <TextField fullWidth select label="Showroom" defaultValue={SOFA9_PAGE_SHOWROOMS[0].id}>
                      {SOFA9_PAGE_SHOWROOMS.map((sr) => (
                        <MenuItem key={sr.id} value={sr.id}>{sr.name}</MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth type="date" label="Ngày tham quan" InputLabelProps={{ shrink: true }} /></Grid>
                  <Grid xs={12}><TextField fullWidth multiline rows={3} label="Ghi chú" placeholder="Nội dung cần tư vấn..." /></Grid>
                </Grid>
                <Button onClick={() => setSubmitted(true)} size="large" variant="contained" startIcon={<Iconify icon="solar:calendar-bold-duotone" />} sx={{ borderRadius: 30, bgcolor: SOFA9_COLORS.pink, color: 'common.white', fontWeight: 'fontWeightBold', boxShadow: `0 4px 0 ${SOFA9_COLORS.black}`, '&:hover': { bgcolor: SOFA9_COLORS.pinkLight, boxShadow: `0 6px 0 ${SOFA9_COLORS.black}` } }}>Xác nhận đặt lịch</Button>
              </Stack>
            )}
          </Grid>
        </Grid>
      </Sofa9Section>
    </>
  );
}
