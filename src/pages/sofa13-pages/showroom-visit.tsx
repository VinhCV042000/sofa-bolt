import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { sofa13Alpha, SOFA13_COLORS } from 'src/sections/sofa13/sofa13-data';
import { Sofa13Section, Sofa13PageHero } from 'src/sections/sofa13-pages/sofa13-page-hero';
import { SOFA13_PAGE_IMAGES, SOFA13_PAGE_SHOWROOMS } from 'src/sections/sofa13-pages/sofa13-pages-data';

export default function Page() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Helmet><title>Đặt lịch — Sofa13</title></Helmet>
      <Sofa13PageHero overline="ĐẶT LỊCH" title={<>ĐẶT <span>LỊCH</span></>} subtitle="Đặt lịch tham quan salon hoặc tư vấn art deco miễn phí." image={SOFA13_PAGE_IMAGES.showroom1} />

      <Sofa13Section>
        <Grid container spacing={5} justifyContent="center">
          <Grid xs={12} md={6}>
            {submitted ? (
              <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 8 }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Iconify icon="solar:check-circle-bold-duotone" width={80} sx={{ color: SOFA13_COLORS.gold }} />
                <Typography variant="h4" sx={{ fontWeight: 400, letterSpacing: 1, color: SOFA13_COLORS.ivory }}>Đặt lịch thành công!</Typography>
                <Typography sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) }}>Chúng tôi sẽ liên hệ với bạn trong vòng 24h.</Typography>
                <Button onClick={() => setSubmitted(false)} variant="outlined" sx={{ borderRadius: 0, color: SOFA13_COLORS.ivory, border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.5)}` }}>Đặt lịch khác</Button>
              </Stack>
            ) : (
              <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography variant="h4" sx={{ fontWeight: 400, letterSpacing: 1, color: SOFA13_COLORS.ivory }}>Thông tin đặt lịch</Typography>
                <Grid container spacing={2}>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" placeholder="Nguyễn Văn A" sx={{ '& .MuiOutlinedInput-root': { color: SOFA13_COLORS.ivory }, '& .MuiInputLabel-root': { color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) } }} /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" placeholder="0901 234 567" sx={{ '& .MuiOutlinedInput-root': { color: SOFA13_COLORS.ivory }, '& .MuiInputLabel-root': { color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) } }} /></Grid>
                  <Grid xs={12}><TextField fullWidth label="Email" placeholder="email@example.com" sx={{ '& .MuiOutlinedInput-root': { color: SOFA13_COLORS.ivory }, '& .MuiInputLabel-root': { color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) } }} /></Grid>
                  <Grid xs={12} sm={6}>
                    <TextField fullWidth select label="Showroom" defaultValue={SOFA13_PAGE_SHOWROOMS[0].id} sx={{ '& .MuiOutlinedInput-root': { color: SOFA13_COLORS.ivory }, '& .MuiInputLabel-root': { color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) } }}>
                      {SOFA13_PAGE_SHOWROOMS.map((sr) => <MenuItem key={sr.id} value={sr.id}>{sr.name}</MenuItem>)}
                    </TextField>
                  </Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth type="date" label="Ngày tham quan" InputLabelProps={{ shrink: true }} sx={{ '& .MuiOutlinedInput-root': { color: SOFA13_COLORS.ivory }, '& .MuiInputLabel-root': { color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) } }} /></Grid>
                  <Grid xs={12}><TextField fullWidth multiline rows={3} label="Ghi chú" placeholder="Nội dung cần tư vấn..." sx={{ '& .MuiOutlinedInput-root': { color: SOFA13_COLORS.ivory }, '& .MuiInputLabel-root': { color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) } }} /></Grid>
                </Grid>
                <Button onClick={() => setSubmitted(true)} size="large" variant="contained" startIcon={<Iconify icon="solar:calendar-bold-duotone" />} sx={{ borderRadius: 0, px: 4, py: 1.75, fontWeight: 700, letterSpacing: 1.5, color: SOFA13_COLORS.noir, bgcolor: SOFA13_COLORS.gold, '&:hover': { bgcolor: SOFA13_COLORS.goldPale } }}>Xác nhận đặt lịch</Button>
              </Stack>
            )}
          </Grid>
        </Grid>
      </Sofa13Section>
    </>
  );
}
