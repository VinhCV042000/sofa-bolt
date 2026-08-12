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

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA15_COLORS } from 'src/sections/sofa15/sofa15-data';
import { Sofa15Card, Sofa15Section, Sofa15PageHero } from 'src/sections/sofa15-pages/sofa15-page-hero';
import { SOFA15_PAGE_IMAGES, SOFA15_PAGE_SHOWROOMS } from 'src/sections/sofa15-pages/sofa15-pages-data';

export default function Page() {
  const theme = useTheme();
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Helmet><title>Đặt lịch — Sofa15</title></Helmet>
      <Sofa15PageHero overline="ĐẶT LỊCH" title={<>ĐẶT <span>LỊCH</span></>} subtitle="Đặt lịch tham quan showroom hoặc tư vấn Art Deco miễn phí." image={SOFA15_PAGE_IMAGES.showroom1} />

      <Sofa15Section bg="black">
        <Grid container spacing={5} justifyContent="center">
          <Grid xs={12} md={6}>
            {submitted ? (
              <Sofa15Card accent={SOFA15_COLORS.gold} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 8 }}>
                  <Iconify icon="solar:check-circle-bold-duotone" width={80} sx={{ color: SOFA15_COLORS.gold }} />
                  <Typography variant="h4" sx={{ fontWeight: 'fontWeightLight', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily }}>Đặt lịch thành công!</Typography>
                  <Typography sx={{ color: varAlpha('#FFFFFF', 0.4) }}>Chúng tôi sẽ liên hệ với bạn trong vòng 24h.</Typography>
                  <Button onClick={() => setSubmitted(false)} variant="outlined" sx={{ borderRadius: 0, color: SOFA15_COLORS.gold, bgcolor: 'transparent', border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.4)}` }}>Đặt lịch khác</Button>
                </Stack>
              </Sofa15Card>
            ) : (
              <Sofa15Card accent={SOFA15_COLORS.gold} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Stack spacing={3}>
                  <Typography variant="h4" sx={{ fontWeight: 'fontWeightLight', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily }}>Thông tin đặt lịch</Typography>
                  <Grid container spacing={2}>
                    <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" placeholder="Nguyễn Văn A" sx={{ '& .MuiOutlinedInput-root': { color: 'common.white' } }} /></Grid>
                    <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" placeholder="0901 234 567" /></Grid>
                    <Grid xs={12}><TextField fullWidth label="Email" placeholder="email@example.com" /></Grid>
                    <Grid xs={12} sm={6}>
                      <TextField fullWidth select label="Showroom" defaultValue={SOFA15_PAGE_SHOWROOMS[0].id}>
                        {SOFA15_PAGE_SHOWROOMS.map((sr) => <MenuItem key={sr.id} value={sr.id}>{sr.name}</MenuItem>)}
                      </TextField>
                    </Grid>
                    <Grid xs={12} sm={6}><TextField fullWidth type="date" label="Ngày tham quan" InputLabelProps={{ shrink: true }} /></Grid>
                    <Grid xs={12}><TextField fullWidth multiline rows={3} label="Ghi chú" placeholder="Nội dung cần tư vấn..." /></Grid>
                  </Grid>
                  <Button onClick={() => setSubmitted(true)} size="large" variant="contained" startIcon={<Iconify icon="solar:calendar-bold-duotone" />} sx={{ borderRadius: 0, px: 4, py: 1.75, fontWeight: 'fontWeightMedium', color: SOFA15_COLORS.black, bgcolor: SOFA15_COLORS.gold, border: `1px solid ${SOFA15_COLORS.gold}`, '&:hover': { bgcolor: SOFA15_COLORS.goldLight } }}>Xác nhận đặt lịch</Button>
                </Stack>
              </Sofa15Card>
            )}
          </Grid>
        </Grid>
      </Sofa15Section>
    </>
  );
}
