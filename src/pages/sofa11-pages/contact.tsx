import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA11_COLORS } from 'src/sections/sofa11/sofa11-data';
import { Sofa11Section, Sofa11PageHero } from 'src/sections/sofa11-pages/sofa11-page-hero';
import { SOFA11_PAGE_IMAGES, SOFA11_PAGE_COMPANY_INFO } from 'src/sections/sofa11-pages/sofa11-pages-data';

export default function Page() {
  const theme = useTheme();
  const [sent, setSent] = useState(false);

  return (
    <>
      <Helmet>
        <title>Liên hệ — Sofa11</title>
      </Helmet>

      <Sofa11PageHero overline="LIÊN HỆ" title={<>LIÊN <span>HỆ</span></>} subtitle="Liên hệ Sofa11 — chúng tôi luôn sẵn sàng hỗ trợ." image={SOFA11_PAGE_IMAGES.contact} />

      <Sofa11Section>
        <Grid container spacing={5}>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Typography variant="h4" sx={{ fontWeight: 'fontWeightBold' }}>Thông tin liên hệ</Typography>
              <Stack spacing={2}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Iconify icon="solar:phone-bold-duotone" width={24} sx={{ color: SOFA11_COLORS.magenta }} />
                  <Box><Typography variant="caption" sx={{ color: 'text.disabled' }}>Điện thoại</Typography><Typography variant="body1" sx={{ fontWeight: 'fontWeightBold' }}>{SOFA11_PAGE_COMPANY_INFO.phone}</Typography></Box>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Iconify icon="solar:letter-bold-duotone" width={24} sx={{ color: SOFA11_COLORS.magenta }} />
                  <Box><Typography variant="caption" sx={{ color: 'text.disabled' }}>Email</Typography><Typography variant="body1" sx={{ fontWeight: 'fontWeightBold' }}>{SOFA11_PAGE_COMPANY_INFO.email}</Typography></Box>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Iconify icon="solar:map-point-bold-duotone" width={24} sx={{ color: SOFA11_COLORS.magenta }} />
                  <Box><Typography variant="caption" sx={{ color: 'text.disabled' }}>Địa chỉ</Typography><Typography variant="body1" sx={{ fontWeight: 'fontWeightBold' }}>{SOFA11_PAGE_COMPANY_INFO.address}</Typography></Box>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} md={6}>
            {sent ? (
              <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 8 }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Iconify icon="solar:check-circle-bold-duotone" width={80} sx={{ color: SOFA11_COLORS.cyan }} />
                <Typography variant="h5" sx={{ fontWeight: 'fontWeightBold' }}>Gửi thành công!</Typography>
                <Typography sx={{ color: 'text.secondary' }}>Chúng tôi sẽ phản hồi trong vòng 24h.</Typography>
              </Stack>
            ) : (
              <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
                <Typography variant="h4" sx={{ fontWeight: 'fontWeightBold' }}>Gửi tin nhắn</Typography>
                <Grid container spacing={2}>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" /></Grid>
                  <Grid xs={12}><TextField fullWidth label="Email" /></Grid>
                  <Grid xs={12}><TextField fullWidth multiline rows={4} label="Nội dung" /></Grid>
                </Grid>
                <Button onClick={() => setSent(true)} size="large" variant="contained" startIcon={<Iconify icon="solar:letter-bold-duotone" />} sx={{ borderRadius: 30, bgcolor: SOFA11_COLORS.magenta, color: 'common.white', fontWeight: 'fontWeightBold', boxShadow: `0 4px 0 ${SOFA11_COLORS.void}`, '&:hover': { bgcolor: SOFA11_COLORS.magentaSoft, boxShadow: `0 6px 0 ${SOFA11_COLORS.void}` } }}>Gửi tin nhắn</Button>
              </Stack>
            )}
          </Grid>
        </Grid>
      </Sofa11Section>
    </>
  );
}
