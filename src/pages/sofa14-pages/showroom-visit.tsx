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

import { sofa14Alpha, SOFA14_COLORS } from 'src/sections/sofa14/sofa14-data';
import { Sofa14Card, Sofa14Section, Sofa14PageHero } from 'src/sections/sofa14-pages/sofa14-page-hero';
import { SOFA14_PAGE_IMAGES, SOFA14_PAGE_SHOWROOMS } from 'src/sections/sofa14-pages/sofa14-pages-data';

export default function Page() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Helmet><title>Đặt lịch — Sofa14</title></Helmet>
      <Sofa14PageHero overline="ĐẶT LỊCH" title={<>ĐẶT <span>LỊCH</span></>} subtitle="Đặt lịch tham quan showroom hoặc tư vấn pastel pop miễn phí." image={SOFA14_PAGE_IMAGES.showroom1} />

      <Sofa14Section>
        <Grid container spacing={5} justifyContent="center">
          <Grid xs={12} md={6}>
            {submitted ? (
              <Sofa14Card accent={SOFA14_COLORS.mint} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 8 }}>
                  <Iconify icon="solar:check-circle-bold-duotone" width={80} sx={{ color: SOFA14_COLORS.mintDeep }} />
                  <Typography variant="h4" sx={{ fontWeight: 800, color: SOFA14_COLORS.ink }}>Đặt lịch thành công!</Typography>
                  <Typography sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.7) }}>Chúng tôi sẽ liên hệ với bạn trong vòng 24h.</Typography>
                  <Button onClick={() => setSubmitted(false)} variant="outlined" sx={{ borderRadius: 99, color: SOFA14_COLORS.ink, bgcolor: SOFA14_COLORS.white, border: `2px solid ${sofa14Alpha(SOFA14_COLORS.ink, 0.1)}` }}>Đặt lịch khác</Button>
                </Stack>
              </Sofa14Card>
            ) : (
              <Sofa14Card accent={SOFA14_COLORS.coral} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Stack spacing={3}>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: SOFA14_COLORS.ink }}>Thông tin đặt lịch</Typography>
                  <Grid container spacing={2}>
                    <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" placeholder="Nguyễn Văn A" /></Grid>
                    <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" placeholder="0901 234 567" /></Grid>
                    <Grid xs={12}><TextField fullWidth label="Email" placeholder="email@example.com" /></Grid>
                    <Grid xs={12} sm={6}>
                      <TextField fullWidth select label="Showroom" defaultValue={SOFA14_PAGE_SHOWROOMS[0].id}>
                        {SOFA14_PAGE_SHOWROOMS.map((sr) => <MenuItem key={sr.id} value={sr.id}>{sr.name}</MenuItem>)}
                      </TextField>
                    </Grid>
                    <Grid xs={12} sm={6}><TextField fullWidth type="date" label="Ngày tham quan" InputLabelProps={{ shrink: true }} /></Grid>
                    <Grid xs={12}><TextField fullWidth multiline rows={3} label="Ghi chú" placeholder="Nội dung cần tư vấn..." /></Grid>
                  </Grid>
                  <Button onClick={() => setSubmitted(true)} size="large" variant="contained" startIcon={<Iconify icon="solar:calendar-bold-duotone" />} sx={{ borderRadius: 99, px: 4, py: 1.75, fontWeight: 800, color: SOFA14_COLORS.ink, bgcolor: SOFA14_COLORS.mint, boxShadow: `0 8px 0 ${SOFA14_COLORS.mintDeep}`, '&:hover': { bgcolor: SOFA14_COLORS.mint, transform: 'translateY(2px)', boxShadow: `0 6px 0 ${SOFA14_COLORS.mintDeep}` } }}>Xác nhận đặt lịch</Button>
                </Stack>
              </Sofa14Card>
            )}
          </Grid>
        </Grid>
      </Sofa14Section>
    </>
  );
}
