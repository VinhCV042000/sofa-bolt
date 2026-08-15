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

import { SOFA18_COLORS } from 'src/sections/sofa18/sofa18-data';
import { Sofa18Card, Sofa18Section, Sofa18PageHero } from 'src/sections/sofa18-pages/sofa18-page-hero';
import { SOFA18_PAGE_IMAGES, SOFA18_PAGE_SHOWROOMS } from 'src/sections/sofa18-pages/sofa18-pages-data';

export default function Page() {
  const theme = useTheme();
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Helmet><title>Đặt lịch — Sofa18</title></Helmet>
      <Sofa18PageHero overline="ĐẶT LỊCH" title={<>ĐẶT <span>LỊCH</span></>} subtitle="Đặt lịch tham quan showroom hoặc tư vấn Mediterranean miễn phí." image={SOFA18_PAGE_IMAGES.showroom1} />

      <Sofa18Section bg="cream">
        <Grid container spacing={5} justifyContent="center">
          <Grid xs={12} md={6}>
            {submitted ? (
              <Sofa18Card accent={SOFA18_COLORS.clay} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 8 }}>
                  <Iconify icon="solar:check-circle-bold-duotone" width={80} sx={{ color: SOFA18_COLORS.clay }} />
                  <Typography variant="h4" sx={{ fontWeight: 'fontWeightLight', color: SOFA18_COLORS.ink, fontFamily: theme.typography.fontSecondaryFamily }}>Đặt lịch thành công!</Typography>
                  <Typography sx={{ color: SOFA18_COLORS.inkSoft }}>Chúng tôi sẽ liên hệ với bạn trong vòng 24h.</Typography>
                  <Button onClick={() => setSubmitted(false)} variant="outlined" sx={{ borderRadius: 2, color: SOFA18_COLORS.clayDeep, bgcolor: 'transparent', border: `1px solid ${varAlpha(SOFA18_COLORS.clay, 0.4)}` }}>Đặt lịch khác</Button>
                </Stack>
              </Sofa18Card>
            ) : (
              <Sofa18Card accent={SOFA18_COLORS.clay} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Stack spacing={3}>
                  <Typography variant="h4" sx={{ fontWeight: 'fontWeightLight', color: SOFA18_COLORS.ink, fontFamily: theme.typography.fontSecondaryFamily }}>Thông tin đặt lịch</Typography>
                  <Grid container spacing={2}>
                    <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" placeholder="Nguyễn Văn A" /></Grid>
                    <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" placeholder="0901 234 567" /></Grid>
                    <Grid xs={12}><TextField fullWidth label="Email" placeholder="email@example.com" /></Grid>
                    <Grid xs={12} sm={6}>
                      <TextField fullWidth select label="Showroom" defaultValue={SOFA18_PAGE_SHOWROOMS[0].id}>
                        {SOFA18_PAGE_SHOWROOMS.map((sr) => <MenuItem key={sr.id} value={sr.id}>{sr.name}</MenuItem>)}
                      </TextField>
                    </Grid>
                    <Grid xs={12} sm={6}><TextField fullWidth type="date" label="Ngày tham quan" InputLabelProps={{ shrink: true }} /></Grid>
                    <Grid xs={12}><TextField fullWidth multiline rows={3} label="Ghi chú" placeholder="Nội dung cần tư vấn..." /></Grid>
                  </Grid>
                  <Button onClick={() => setSubmitted(true)} size="large" variant="contained" startIcon={<Iconify icon="solar:calendar-bold-duotone" />} sx={{ borderRadius: 2, px: 4, py: 1.75, fontWeight: 'fontWeightMedium', color: 'common.white', bgcolor: SOFA18_COLORS.clay, boxShadow: `0 8px 24px -8px ${varAlpha(SOFA18_COLORS.clay, 0.6)}`, '&:hover': { bgcolor: SOFA18_COLORS.clayDeep } }}>Xác nhận đặt lịch</Button>
                </Stack>
              </Sofa18Card>
            )}
          </Grid>
        </Grid>
      </Sofa18Section>
    </>
  );
}
