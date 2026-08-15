import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA20_COLORS } from 'src/sections/sofa20/sofa20-data';
import { Sofa20Card, Sofa20Section, Sofa20PageHero } from 'src/sections/sofa20-pages/sofa20-page-hero';
import { SOFA20_PAGE_IMAGES, SOFA20_PAGE_COMPANY_INFO } from 'src/sections/sofa20-pages/sofa20-pages-data';

export default function Page() {
  const theme = useTheme();
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Helmet><title>Liên hệ — Sofa20</title></Helmet>
      <Sofa20PageHero overline="LIÊN HỆ" title={<>LIÊN <span>HỆ</span></>} subtitle="Liên hệ Sofa20 — Riad công nghiệp." image={SOFA20_PAGE_IMAGES.contact} />

      <Sofa20Section bg="black">
        <Grid container spacing={5}>
          <Grid xs={12} md={5}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Typography variant="h4" sx={{ fontWeight: 'fontWeightLight', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily }}>Thông tin liên hệ</Typography>
              <Sofa20Card accent={SOFA20_COLORS.gold}>
                <Stack spacing={2}>
                  <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={20} sx={{ color: SOFA20_COLORS.gold }} /><Typography variant="body1" sx={{ color: varAlpha('#FFFFFF', 0.5), fontWeight: 'fontWeightLight' }}>{SOFA20_PAGE_COMPANY_INFO.address}</Typography></Stack>
                  <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:phone-bold-duotone" width={20} sx={{ color: SOFA20_COLORS.gold }} /><Typography variant="body1" sx={{ color: varAlpha('#FFFFFF', 0.5), fontWeight: 'fontWeightLight' }}>{SOFA20_PAGE_COMPANY_INFO.phone}</Typography></Stack>
                  <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:letter-bold-duotone" width={20} sx={{ color: SOFA20_COLORS.gold }} /><Typography variant="body1" sx={{ color: varAlpha('#FFFFFF', 0.5), fontWeight: 'fontWeightLight' }}>{SOFA20_PAGE_COMPANY_INFO.email}</Typography></Stack>
                </Stack>
              </Sofa20Card>
            </Stack>
          </Grid>
          <Grid xs={12} md={7}>
            {submitted ? (
              <Sofa20Card accent={SOFA20_COLORS.gold} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 8 }}>
                  <Iconify icon="solar:check-circle-bold-duotone" width={80} sx={{ color: SOFA20_COLORS.gold }} />
                  <Typography variant="h4" sx={{ fontWeight: 'fontWeightLight', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily }}>Gửi thành công!</Typography>
                  <Typography sx={{ color: varAlpha('#FFFFFF', 0.4) }}>Chúng tôi sẽ liên hệ trong 24h.</Typography>
                </Stack>
              </Sofa20Card>
            ) : (
              <Sofa20Card accent={SOFA20_COLORS.gold} component={m.div} variants={varFade({ distance: 24 }).inRight}>
                <Stack spacing={3}>
                  <Typography variant="h4" sx={{ fontWeight: 'fontWeightLight', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily }}>Gửi tin nhắn</Typography>
                  <Grid container spacing={2}>
                    <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" /></Grid>
                    <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" /></Grid>
                    <Grid xs={12}><TextField fullWidth label="Email" /></Grid>
                    <Grid xs={12}><TextField fullWidth multiline rows={4} label="Nội dung" /></Grid>
                  </Grid>
                  <Button onClick={() => setSubmitted(true)} size="large" variant="contained" startIcon={<Iconify icon="solar:letter-bold-duotone" />} sx={{ alignSelf: 'flex-start', borderRadius: 0, px: 4, py: 1.75, fontWeight: 'fontWeightMedium', color: SOFA20_COLORS.black, bgcolor: SOFA20_COLORS.gold, border: `1px solid ${SOFA20_COLORS.gold}`, '&:hover': { bgcolor: SOFA20_COLORS.goldLight } }}>Gửi tin nhắn</Button>
                </Stack>
              </Sofa20Card>
            )}
          </Grid>
        </Grid>
      </Sofa20Section>
    </>
  );
}
