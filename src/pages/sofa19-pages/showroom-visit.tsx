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

import { sofa19Alpha, SOFA19_COLORS } from 'src/sections/sofa19/sofa19-data';
import { Sofa19Card, Sofa19Section, Sofa19PageHero } from 'src/sections/sofa19-pages/sofa19-page-hero';
import { SOFA19_PAGE_IMAGES, SOFA19_PAGE_SHOWROOMS } from 'src/sections/sofa19-pages/sofa19-pages-data';

export default function Page() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Helmet><title>Đặt lịch — Sofa19</title></Helmet>
      <Sofa19PageHero overline="ĐẶT LỊCH" title={<>ĐẶT <span>LỊCH</span></>} subtitle="Đặt lịch tham quan showroom hoặc tư vấn pastel pop miễn phí." image={SOFA19_PAGE_IMAGES.showroom1} />

      <Sofa19Section>
        <Grid container spacing={5} justifyContent="center">
          <Grid xs={12} md={6}>
            {submitted ? (
              <Sofa19Card accent={SOFA19_COLORS.jungleLight} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 8 }}>
                  <Iconify icon="solar:check-circle-bold-duotone" width={80} sx={{ color: SOFA19_COLORS.jungle }} />
                  <Typography variant="h4" sx={{ fontWeight: 800, color: SOFA19_COLORS.ink }}>Đặt lịch thành công!</Typography>
                  <Typography sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.7) }}>Chúng tôi sẽ liên hệ với bạn trong vòng 24h.</Typography>
                  <Button onClick={() => setSubmitted(false)} variant="outlined" sx={{ borderRadius: 99, color: SOFA19_COLORS.ink, bgcolor: SOFA19_COLORS.white, border: `2px solid ${sofa19Alpha(SOFA19_COLORS.ink, 0.1)}` }}>Đặt lịch khác</Button>
                </Stack>
              </Sofa19Card>
            ) : (
              <Sofa19Card accent={SOFA19_COLORS.coral} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Stack spacing={3}>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: SOFA19_COLORS.ink }}>Thông tin đặt lịch</Typography>
                  <Grid container spacing={2}>
                    <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" placeholder="Nguyễn Văn A" /></Grid>
                    <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" placeholder="0901 234 567" /></Grid>
                    <Grid xs={12}><TextField fullWidth label="Email" placeholder="email@example.com" /></Grid>
                    <Grid xs={12} sm={6}>
                      <TextField fullWidth select label="Showroom" defaultValue={SOFA19_PAGE_SHOWROOMS[0].id}>
                        {SOFA19_PAGE_SHOWROOMS.map((sr) => <MenuItem key={sr.id} value={sr.id}>{sr.name}</MenuItem>)}
                      </TextField>
                    </Grid>
                    <Grid xs={12} sm={6}><TextField fullWidth type="date" label="Ngày tham quan" InputLabelProps={{ shrink: true }} /></Grid>
                    <Grid xs={12}><TextField fullWidth multiline rows={3} label="Ghi chú" placeholder="Nội dung cần tư vấn..." /></Grid>
                  </Grid>
                  <Button onClick={() => setSubmitted(true)} size="large" variant="contained" startIcon={<Iconify icon="solar:calendar-bold-duotone" />} sx={{ borderRadius: 99, px: 4, py: 1.75, fontWeight: 800, color: SOFA19_COLORS.ink, bgcolor: SOFA19_COLORS.jungleLight, boxShadow: `0 8px 0 ${SOFA19_COLORS.jungle}`, '&:hover': { bgcolor: SOFA19_COLORS.jungleLight, transform: 'translateY(2px)', boxShadow: `0 6px 0 ${SOFA19_COLORS.jungle}` } }}>Xác nhận đặt lịch</Button>
                </Stack>
              </Sofa19Card>
            )}
          </Grid>
        </Grid>
      </Sofa19Section>
    </>
  );
}
