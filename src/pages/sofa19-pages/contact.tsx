import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { sofa19Alpha, SOFA19_COLORS } from 'src/sections/sofa19/sofa19-data';
import { Sofa19Card, Sofa19Section, Sofa19PageHero } from 'src/sections/sofa19-pages/sofa19-page-hero';
import { SOFA19_PAGE_IMAGES, SOFA19_PAGE_COMPANY_INFO } from 'src/sections/sofa19-pages/sofa19-pages-data';

export default function Page() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Helmet><title>Liên hệ — Sofa19</title></Helmet>
      <Sofa19PageHero overline="LIÊN HỆ" title={<>LIÊN <span>HỆ</span></>} subtitle="Liên hệ Sofa19 — pastel pop." image={SOFA19_PAGE_IMAGES.contact} />

      <Sofa19Section>
        <Grid container spacing={5}>
          <Grid xs={12} md={5}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Typography variant="h4" sx={{ fontWeight: 800, color: SOFA19_COLORS.ink }}>Thông tin liên hệ</Typography>
              <Sofa19Card accent={SOFA19_COLORS.jungleLight}>
                <Stack spacing={2}>
                  <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={20} sx={{ color: SOFA19_COLORS.coralDeep }} /><Typography variant="body1" sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.8) }}>{SOFA19_PAGE_COMPANY_INFO.address}</Typography></Stack>
                  <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:phone-bold-duotone" width={20} sx={{ color: SOFA19_COLORS.coralDeep }} /><Typography variant="body1" sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.8) }}>{SOFA19_PAGE_COMPANY_INFO.phone}</Typography></Stack>
                  <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:letter-bold-duotone" width={20} sx={{ color: SOFA19_COLORS.coralDeep }} /><Typography variant="body1" sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.8) }}>{SOFA19_PAGE_COMPANY_INFO.email}</Typography></Stack>
                </Stack>
              </Sofa19Card>
            </Stack>
          </Grid>
          <Grid xs={12} md={7}>
            {submitted ? (
              <Sofa19Card accent={SOFA19_COLORS.jungleLight} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 8 }}>
                  <Iconify icon="solar:check-circle-bold-duotone" width={80} sx={{ color: SOFA19_COLORS.jungle }} />
                  <Typography variant="h4" sx={{ fontWeight: 800, color: SOFA19_COLORS.ink }}>Gửi thành công!</Typography>
                  <Typography sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.7) }}>Chúng tôi sẽ liên hệ trong 24h.</Typography>
                </Stack>
              </Sofa19Card>
            ) : (
              <Sofa19Card accent={SOFA19_COLORS.coral} component={m.div} variants={varFade({ distance: 24 }).inRight}>
                <Stack spacing={3}>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: SOFA19_COLORS.ink }}>Gửi tin nhắn</Typography>
                  <Grid container spacing={2}>
                    <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" /></Grid>
                    <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" /></Grid>
                    <Grid xs={12}><TextField fullWidth label="Email" /></Grid>
                    <Grid xs={12}><TextField fullWidth multiline rows={4} label="Nội dung" /></Grid>
                  </Grid>
                  <Button onClick={() => setSubmitted(true)} size="large" variant="contained" startIcon={<Iconify icon="solar:letter-bold-duotone" />} sx={{ alignSelf: 'flex-start', borderRadius: 99, px: 4, py: 1.75, fontWeight: 800, color: SOFA19_COLORS.ink, bgcolor: SOFA19_COLORS.jungleLight, boxShadow: `0 8px 0 ${SOFA19_COLORS.jungle}`, '&:hover': { bgcolor: SOFA19_COLORS.jungleLight, transform: 'translateY(2px)', boxShadow: `0 6px 0 ${SOFA19_COLORS.jungle}` } }}>Gửi tin nhắn</Button>
                </Stack>
              </Sofa19Card>
            )}
          </Grid>
        </Grid>
      </Sofa19Section>
    </>
  );
}
