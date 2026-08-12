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

import { SOFA8_COLORS } from 'src/sections/sofa8/sofa8-data';
import { Sofa8Section, Sofa8PageHero } from 'src/sections/sofa8-pages/sofa8-page-hero';
import { SOFA8_PAGE_IMAGES, SOFA8_PAGE_COMPANY_INFO } from 'src/sections/sofa8-pages/sofa8-pages-data';

export default function Page() {
  const theme = useTheme();
  const [sent, setSent] = useState(false);

  return (
    <>
      <Helmet>
        <title>Liên hệ — Sofa8</title>
      </Helmet>

      <Sofa8PageHero overline="LIÊN HỆ" title={<>LIÊN <span>HỆ</span></>} subtitle="Liên hệ Sofa8 — chúng tôi luôn sẵn sàng hỗ trợ." image={SOFA8_PAGE_IMAGES.contact} />

      <Sofa8Section>
        <Grid container spacing={5}>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Typography variant="h4" sx={{ fontWeight: 'fontWeightBold' }}>Thông tin liên hệ</Typography>
              <Stack spacing={2}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Iconify icon="solar:phone-bold-duotone" width={24} sx={{ color: SOFA8_COLORS.ocean }} />
                  <Box><Typography variant="caption" sx={{ color: 'text.disabled' }}>Điện thoại</Typography><Typography variant="body1" sx={{ fontWeight: 'fontWeightBold' }}>{SOFA8_PAGE_COMPANY_INFO.phone}</Typography></Box>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Iconify icon="solar:letter-bold-duotone" width={24} sx={{ color: SOFA8_COLORS.ocean }} />
                  <Box><Typography variant="caption" sx={{ color: 'text.disabled' }}>Email</Typography><Typography variant="body1" sx={{ fontWeight: 'fontWeightBold' }}>{SOFA8_PAGE_COMPANY_INFO.email}</Typography></Box>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Iconify icon="solar:map-point-bold-duotone" width={24} sx={{ color: SOFA8_COLORS.ocean }} />
                  <Box><Typography variant="caption" sx={{ color: 'text.disabled' }}>Địa chỉ</Typography><Typography variant="body1" sx={{ fontWeight: 'fontWeightBold' }}>{SOFA8_PAGE_COMPANY_INFO.address}</Typography></Box>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} md={6}>
            {sent ? (
              <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 8 }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Iconify icon="solar:check-circle-bold-duotone" width={80} sx={{ color: SOFA8_COLORS.seafoam }} />
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
                <Button onClick={() => setSent(true)} size="large" variant="contained" startIcon={<Iconify icon="solar:letter-bold-duotone" />} sx={{ bgcolor: SOFA8_COLORS.coral, color: 'common.white', fontWeight: 'fontWeightBold', '&:hover': { bgcolor: SOFA8_COLORS.coralLight } }}>
                  Gửi tin nhắn
                </Button>
              </Stack>
            )}
          </Grid>
        </Grid>
      </Sofa8Section>
    </>
  );
}
