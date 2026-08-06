import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useParams } from 'react-router-dom';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

import { sofa11Alpha, SOFA11_COLORS } from 'src/sections/sofa11/sofa11-data';
import { Sofa11PageHero, Sofa11Section } from 'src/sections/sofa11-pages/sofa11-page-hero';
import { SOFA11_PAGE_SHOWROOMS, SOFA11_PAGE_IMAGES } from 'src/sections/sofa11-pages/sofa11-pages-data';

export default function Page() {
  const params = useParams();
  const id = params.id || '';
  const showroom = SOFA11_PAGE_SHOWROOMS.find((s) => s.id === id) || SOFA11_PAGE_SHOWROOMS[0];

  return (
    <>
      <Helmet><title>{showroom.name} — Sofa11</title></Helmet>
      <Sofa11PageHero overline="SHOWROOM" title={<><span>{showroom.name.toUpperCase()}</span></>} subtitle={showroom.address} image={showroom.image} />

      <Sofa11Section>
        <Grid container spacing={5}>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Box sx={{ overflow: 'hidden', borderRadius: '24px 24px 24px 0', aspectRatio: '4/3', border: `3px solid ${sofa11Alpha(SOFA11_COLORS.magenta, 0.3)}` }}>
                <Box component="img" src={showroom.image} alt={showroom.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
              </Box>
              <Grid container spacing={2}>
                {[SOFA11_PAGE_IMAGES.showroom1, SOFA11_PAGE_IMAGES.showroom2, SOFA11_PAGE_IMAGES.showroom3, SOFA11_PAGE_IMAGES.showroom4].map((img, i) => (
                  <Grid key={i} xs={6} md={3}><Box sx={{ overflow: 'hidden', borderRadius: '12px 12px 12px 0', aspectRatio: '1/1', border: `2px solid ${sofa11Alpha(SOFA11_COLORS.cyan, 0.2)}` }}><Box component="img" src={img} alt={`Gallery ${i}`} sx={{ width: 1, height: 1, objectFit: 'cover' }} /></Box></Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Typography variant="h4" sx={{ fontWeight: 900, color: SOFA11_COLORS.cream, textTransform: 'uppercase' }}>Thông tin showroom</Typography>
              <Stack spacing={2} sx={{ p: 3, borderRadius: '16px 16px 16px 0', bgcolor: sofa11Alpha(SOFA11_COLORS.grape, 0.5), border: `1px solid ${sofa11Alpha(SOFA11_COLORS.cream, 0.08)}` }}>
                <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={20} sx={{ color: SOFA11_COLORS.cyan }} /><Typography variant="body1" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.7) }}>{showroom.address}</Typography></Stack>
                <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:phone-bold-duotone" width={20} sx={{ color: SOFA11_COLORS.cyan }} /><Typography variant="body1" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.7) }}>{showroom.phone}</Typography></Stack>
                <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:clock-circle-bold-duotone" width={20} sx={{ color: SOFA11_COLORS.cyan }} /><Typography variant="body1" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.7) }}>{showroom.hours}</Typography></Stack>
              </Stack>
              <Box sx={{ borderRadius: '16px 16px 16px 0', overflow: 'hidden', height: 300, bgcolor: sofa11Alpha(SOFA11_COLORS.grape, 0.5), display: 'flex', alignItems: 'center', justifyContent: 'center', border: `2px solid ${sofa11Alpha(SOFA11_COLORS.cyan, 0.2)}` }}>
                <Stack spacing={1} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={48} sx={{ color: SOFA11_COLORS.cyan }} /><Typography variant="body2" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.5) }}>Bản đồ: {showroom.lat}, {showroom.lng}</Typography></Stack>
              </Box>
              <Stack direction="row" spacing={2}>
                <Button component={RouterLink} href="/sofa11/showrooms/visit" size="large" variant="contained" startIcon={<Iconify icon="solar:calendar-bold-duotone" />} sx={{ borderRadius: 99, fontWeight: 900, textTransform: 'uppercase', color: SOFA11_COLORS.void, bgcolor: SOFA11_COLORS.lime, '&:hover': { bgcolor: SOFA11_COLORS.cyan } }}>Đặt lịch tham quan</Button>
                <Button component={RouterLink} href="/sofa11/showrooms/consult" size="large" variant="outlined" startIcon={<Iconify icon="solar:chat-square-bold-duotone" />} sx={{ borderRadius: 99, fontWeight: 700, textTransform: 'uppercase', color: SOFA11_COLORS.cream, border: `2px solid ${sofa11Alpha(SOFA11_COLORS.cream, 0.4)}`, '&:hover': { borderColor: SOFA11_COLORS.magenta, color: SOFA11_COLORS.magenta } }}>Tư vấn</Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Sofa11Section>
    </>
  );
}
