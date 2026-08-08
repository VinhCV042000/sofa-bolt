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
import { useTheme } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { varAlpha } from 'src/theme/styles';

import { SOFA16_COLORS } from 'src/sections/sofa16/sofa16-data';
import { Sofa16PageHero, Sofa16Section, Sofa16Card } from 'src/sections/sofa16-pages/sofa16-page-hero';
import { SOFA16_PAGE_SHOWROOMS, SOFA16_PAGE_IMAGES } from 'src/sections/sofa16-pages/sofa16-pages-data';

export default function Page() {
  const theme = useTheme();
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Helmet><title>Đặt lịch — Sofa16</title></Helmet>
      <Sofa16PageHero overline="ĐẶT LỊCH" title={<>ĐẶT <span>LỊCH</span></>} subtitle="Đặt lịch tham quan showroom hoặc tư vấn Mediterranean miễn phí." image={SOFA16_PAGE_IMAGES.showroom1} />

      <Sofa16Section bg="cream">
        <Grid container spacing={5} justifyContent="center">
          <Grid xs={12} md={6}>
            {submitted ? (
              <Sofa16Card accent={SOFA16_COLORS.terracotta} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 8 }}>
                  <Iconify icon="solar:check-circle-bold-duotone" width={80} sx={{ color: SOFA16_COLORS.terracotta }} />
                  <Typography variant="h4" sx={{ fontWeight: 'fontWeightLight', color: SOFA16_COLORS.ink, fontFamily: theme.typography.fontSecondaryFamily }}>Đặt lịch thành công!</Typography>
                  <Typography sx={{ color: SOFA16_COLORS.inkSoft }}>Chúng tôi sẽ liên hệ với bạn trong vòng 24h.</Typography>
                  <Button onClick={() => setSubmitted(false)} variant="outlined" sx={{ borderRadius: 2, color: SOFA16_COLORS.terracottaDeep, bgcolor: 'transparent', border: `1px solid ${varAlpha(SOFA16_COLORS.terracotta, 0.4)}` }}>Đặt lịch khác</Button>
                </Stack>
              </Sofa16Card>
            ) : (
              <Sofa16Card accent={SOFA16_COLORS.terracotta} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Stack spacing={3}>
                  <Typography variant="h4" sx={{ fontWeight: 'fontWeightLight', color: SOFA16_COLORS.ink, fontFamily: theme.typography.fontSecondaryFamily }}>Thông tin đặt lịch</Typography>
                  <Grid container spacing={2}>
                    <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" placeholder="Nguyễn Văn A" /></Grid>
                    <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" placeholder="0901 234 567" /></Grid>
                    <Grid xs={12}><TextField fullWidth label="Email" placeholder="email@example.com" /></Grid>
                    <Grid xs={12} sm={6}>
                      <TextField fullWidth select label="Showroom" defaultValue={SOFA16_PAGE_SHOWROOMS[0].id}>
                        {SOFA16_PAGE_SHOWROOMS.map((sr) => <MenuItem key={sr.id} value={sr.id}>{sr.name}</MenuItem>)}
                      </TextField>
                    </Grid>
                    <Grid xs={12} sm={6}><TextField fullWidth type="date" label="Ngày tham quan" InputLabelProps={{ shrink: true }} /></Grid>
                    <Grid xs={12}><TextField fullWidth multiline rows={3} label="Ghi chú" placeholder="Nội dung cần tư vấn..." /></Grid>
                  </Grid>
                  <Button onClick={() => setSubmitted(true)} size="large" variant="contained" startIcon={<Iconify icon="solar:calendar-bold-duotone" />} sx={{ borderRadius: 2, px: 4, py: 1.75, fontWeight: 'fontWeightMedium', color: 'common.white', bgcolor: SOFA16_COLORS.terracotta, boxShadow: `0 8px 24px -8px ${varAlpha(SOFA16_COLORS.terracotta, 0.6)}`, '&:hover': { bgcolor: SOFA16_COLORS.terracottaDeep } }}>Xác nhận đặt lịch</Button>
                </Stack>
              </Sofa16Card>
            )}
          </Grid>
        </Grid>
      </Sofa16Section>
    </>
  );
}
