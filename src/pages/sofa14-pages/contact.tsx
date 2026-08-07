import { Helmet } from 'react-helmet-async';

import { useState } from 'react';
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { sofa14Alpha, SOFA14_COLORS } from 'src/sections/sofa14/sofa14-data';
import { Sofa14PageHero, Sofa14Section, Sofa14Card } from 'src/sections/sofa14-pages/sofa14-page-hero';
import { SOFA14_PAGE_IMAGES, SOFA14_PAGE_COMPANY_INFO } from 'src/sections/sofa14-pages/sofa14-pages-data';

export default function Page() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Helmet><title>Liên hệ — Sofa14</title></Helmet>
      <Sofa14PageHero overline="LIÊN HỆ" title={<>LIÊN <span>HỆ</span></>} subtitle="Liên hệ Sofa14 — pastel pop." image={SOFA14_PAGE_IMAGES.contact} />

      <Sofa14Section>
        <Grid container spacing={5}>
          <Grid xs={12} md={5}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Typography variant="h4" sx={{ fontWeight: 800, color: SOFA14_COLORS.ink }}>Thông tin liên hệ</Typography>
              <Sofa14Card accent={SOFA14_COLORS.mint}>
                <Stack spacing={2}>
                  <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={20} sx={{ color: SOFA14_COLORS.coralDeep }} /><Typography variant="body1" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.8) }}>{SOFA14_PAGE_COMPANY_INFO.address}</Typography></Stack>
                  <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:phone-bold-duotone" width={20} sx={{ color: SOFA14_COLORS.coralDeep }} /><Typography variant="body1" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.8) }}>{SOFA14_PAGE_COMPANY_INFO.phone}</Typography></Stack>
                  <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:letter-bold-duotone" width={20} sx={{ color: SOFA14_COLORS.coralDeep }} /><Typography variant="body1" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.8) }}>{SOFA14_PAGE_COMPANY_INFO.email}</Typography></Stack>
                </Stack>
              </Sofa14Card>
            </Stack>
          </Grid>
          <Grid xs={12} md={7}>
            {submitted ? (
              <Sofa14Card accent={SOFA14_COLORS.mint} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 8 }}>
                  <Iconify icon="solar:check-circle-bold-duotone" width={80} sx={{ color: SOFA14_COLORS.mintDeep }} />
                  <Typography variant="h4" sx={{ fontWeight: 800, color: SOFA14_COLORS.ink }}>Gửi thành công!</Typography>
                  <Typography sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.7) }}>Chúng tôi sẽ liên hệ trong 24h.</Typography>
                </Stack>
              </Sofa14Card>
            ) : (
              <Sofa14Card accent={SOFA14_COLORS.coral} component={m.div} variants={varFade({ distance: 24 }).inRight}>
                <Stack spacing={3}>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: SOFA14_COLORS.ink }}>Gửi tin nhắn</Typography>
                  <Grid container spacing={2}>
                    <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" /></Grid>
                    <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" /></Grid>
                    <Grid xs={12}><TextField fullWidth label="Email" /></Grid>
                    <Grid xs={12}><TextField fullWidth multiline rows={4} label="Nội dung" /></Grid>
                  </Grid>
                  <Button onClick={() => setSubmitted(true)} size="large" variant="contained" startIcon={<Iconify icon="solar:letter-bold-duotone" />} sx={{ alignSelf: 'flex-start', borderRadius: 99, px: 4, py: 1.75, fontWeight: 800, color: SOFA14_COLORS.ink, bgcolor: SOFA14_COLORS.mint, boxShadow: `0 8px 0 ${SOFA14_COLORS.mintDeep}`, '&:hover': { bgcolor: SOFA14_COLORS.mint, transform: 'translateY(2px)', boxShadow: `0 6px 0 ${SOFA14_COLORS.mintDeep}` } }}>Gửi tin nhắn</Button>
                </Stack>
              </Sofa14Card>
            )}
          </Grid>
        </Grid>
      </Sofa14Section>
    </>
  );
}
