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

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { sofa11Alpha, SOFA11_COLORS } from 'src/sections/sofa11/sofa11-data';
import { Sofa11PageHero, Sofa11Section } from 'src/sections/sofa11-pages/sofa11-page-hero';
import { SOFA11_PAGE_SHOWROOMS, SOFA11_PAGE_IMAGES } from 'src/sections/sofa11-pages/sofa11-pages-data';

export default function Page() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Helmet><title>Đặt lịch — Sofa11</title></Helmet>
      <Sofa11PageHero overline="ĐẶT LỊCH" title={<>ĐẶT <span>LỊCH</span></>} subtitle="Đặt lịch tham quan showroom hoặc tư vấn pop miễn phí." image={SOFA11_PAGE_IMAGES.showroom1} />

      <Sofa11Section>
        <Grid container spacing={5} justifyContent="center">
          <Grid xs={12} md={6}>
            {submitted ? (
              <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 8 }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Iconify icon="solar:check-circle-bold-duotone" width={80} sx={{ color: SOFA11_COLORS.lime }} />
                <Typography variant="h4" sx={{ fontWeight: 900, color: SOFA11_COLORS.cream, textTransform: 'uppercase' }}>Đặt lịch thành công!</Typography>
                <Typography sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.5) }}>Chúng tôi sẽ liên hệ với bạn trong vòng 24h.</Typography>
                <Button onClick={() => setSubmitted(false)} variant="outlined" sx={{ borderRadius: 99, color: SOFA11_COLORS.cream, border: `2px solid ${sofa11Alpha(SOFA11_COLORS.cream, 0.4)}` }}>Đặt lịch khác</Button>
              </Stack>
            ) : (
              <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography variant="h4" sx={{ fontWeight: 900, color: SOFA11_COLORS.cream, textTransform: 'uppercase' }}>Thông tin đặt lịch</Typography>
                <Grid container spacing={2}>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" placeholder="Nguyễn Văn A" sx={{ '& .MuiOutlinedInput-root': { color: SOFA11_COLORS.cream }, '& .MuiInputLabel-root': { color: sofa11Alpha(SOFA11_COLORS.cream, 0.5) } }} /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" placeholder="0901 234 567" sx={{ '& .MuiOutlinedInput-root': { color: SOFA11_COLORS.cream }, '& .MuiInputLabel-root': { color: sofa11Alpha(SOFA11_COLORS.cream, 0.5) } }} /></Grid>
                  <Grid xs={12}><TextField fullWidth label="Email" placeholder="email@example.com" sx={{ '& .MuiOutlinedInput-root': { color: SOFA11_COLORS.cream }, '& .MuiInputLabel-root': { color: sofa11Alpha(SOFA11_COLORS.cream, 0.5) } }} /></Grid>
                  <Grid xs={12} sm={6}>
                    <TextField fullWidth select label="Showroom" defaultValue={SOFA11_PAGE_SHOWROOMS[0].id} sx={{ '& .MuiOutlinedInput-root': { color: SOFA11_COLORS.cream }, '& .MuiInputLabel-root': { color: sofa11Alpha(SOFA11_COLORS.cream, 0.5) } }}>
                      {SOFA11_PAGE_SHOWROOMS.map((sr) => <MenuItem key={sr.id} value={sr.id}>{sr.name}</MenuItem>)}
                    </TextField>
                  </Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth type="date" label="Ngày tham quan" InputLabelProps={{ shrink: true }} sx={{ '& .MuiOutlinedInput-root': { color: SOFA11_COLORS.cream }, '& .MuiInputLabel-root': { color: sofa11Alpha(SOFA11_COLORS.cream, 0.5) } }} /></Grid>
                  <Grid xs={12}><TextField fullWidth multiline rows={3} label="Ghi chú" placeholder="Nội dung cần tư vấn..." sx={{ '& .MuiOutlinedInput-root': { color: SOFA11_COLORS.cream }, '& .MuiInputLabel-root': { color: sofa11Alpha(SOFA11_COLORS.cream, 0.5) } }} /></Grid>
                </Grid>
                <Button onClick={() => setSubmitted(true)} size="large" variant="contained" startIcon={<Iconify icon="solar:calendar-bold-duotone" />} sx={{ borderRadius: 99, px: 4, py: 1.75, fontWeight: 900, textTransform: 'uppercase', color: SOFA11_COLORS.void, bgcolor: SOFA11_COLORS.lime, boxShadow: `0 0 32px ${sofa11Alpha(SOFA11_COLORS.lime, 0.5)}`, '&:hover': { bgcolor: SOFA11_COLORS.cyan, transform: 'translateY(-2px)' }, transition: 'all .25s' }}>Xác nhận đặt lịch</Button>
              </Stack>
            )}
          </Grid>
        </Grid>
      </Sofa11Section>
    </>
  );
}
