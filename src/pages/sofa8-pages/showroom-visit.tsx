import { Helmet } from 'react-helmet-async';

import { useState } from 'react';
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Alert from '@mui/material/Alert';
import { useTheme } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA8_COLORS } from 'src/sections/sofa8/sofa8-data';
import { Sofa8PageHero, Sofa8Section } from 'src/sections/sofa8-pages/sofa8-page-hero';
import { SOFA8_PAGE_SHOWROOMS, SOFA8_PAGE_IMAGES } from 'src/sections/sofa8-pages/sofa8-pages-data';

export default function Page() {
  const theme = useTheme();
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Helmet>
        <title>Đặt lịch — Sofa8</title>
      </Helmet>

      <Sofa8PageHero
        overline="ĐẶT LỊCH"
        title={<>ĐẶT <span>LỊCH</span></>}
        subtitle="Đặt lịch tham quan showroom hoặc tư vấn thiết kế coastal miễn phí."
        image={SOFA8_PAGE_IMAGES.showroom1}
      />

      <Sofa8Section>
        <Grid container spacing={5} justifyContent="center">
          <Grid xs={12} md={6}>
            {submitted ? (
              <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 8 }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Iconify icon="solar:check-circle-bold-duotone" width={80} sx={{ color: SOFA8_COLORS.seafoam }} />
                <Typography variant="h4" sx={{ fontWeight: 'fontWeightBold' }}>Đặt lịch thành công!</Typography>
                <Typography sx={{ color: 'text.secondary' }}>Chúng tôi sẽ liên hệ với bạn trong vòng 24h để xác nhận lịch hẹn.</Typography>
                <Button onClick={() => setSubmitted(false)} variant="outlined" sx={{ borderColor: SOFA8_COLORS.ocean, color: SOFA8_COLORS.ocean }}>Đặt lịch khác</Button>
              </Stack>
            ) : (
              <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography variant="h4" sx={{ fontWeight: 'fontWeightBold' }}>Thông tin đặt lịch</Typography>
                <Grid container spacing={2}>
                  <Grid xs={12} sm={6}>
                    <TextField fullWidth label="Họ và tên" placeholder="Nguyễn Văn A" />
                  </Grid>
                  <Grid xs={12} sm={6}>
                    <TextField fullWidth label="Số điện thoại" placeholder="0901 234 567" />
                  </Grid>
                  <Grid xs={12}>
                    <TextField fullWidth label="Email" placeholder="email@example.com" />
                  </Grid>
                  <Grid xs={12} sm={6}>
                    <TextField fullWidth select label="Showroom" defaultValue={SOFA8_PAGE_SHOWROOMS[0].id}>
                      {SOFA8_PAGE_SHOWROOMS.map((sr) => (
                        <MenuItem key={sr.id} value={sr.id}>{sr.name}</MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid xs={12} sm={6}>
                    <TextField fullWidth type="date" label="Ngày tham quan" InputLabelProps={{ shrink: true }} />
                  </Grid>
                  <Grid xs={12}>
                    <TextField fullWidth multiline rows={3} label="Ghi chú" placeholder="Nội dung cần tư vấn..." />
                  </Grid>
                </Grid>
                <Button onClick={() => setSubmitted(true)} size="large" variant="contained" startIcon={<Iconify icon="solar:calendar-bold-duotone" />} sx={{ bgcolor: SOFA8_COLORS.coral, color: 'common.white', fontWeight: 'fontWeightBold', '&:hover': { bgcolor: SOFA8_COLORS.coralLight } }}>
                  Xác nhận đặt lịch
                </Button>
              </Stack>
            )}
          </Grid>
        </Grid>
      </Sofa8Section>
    </>
  );
}
