import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { sofa13Alpha, SOFA13_COLORS } from 'src/sections/sofa13/sofa13-data';
import { Sofa13Section, Sofa13PageHero } from 'src/sections/sofa13-pages/sofa13-page-hero';
import { SOFA13_PAGE_IMAGES, SOFA13_PAGE_SHOWROOMS } from 'src/sections/sofa13-pages/sofa13-pages-data';

export default function Page() {
  const params = useParams();
  const id = params.id || '';
  const showroom = SOFA13_PAGE_SHOWROOMS.find((s) => s.id === id) || SOFA13_PAGE_SHOWROOMS[0];

  return (
    <>
      <Helmet><title>{showroom.name} — Sofa13</title></Helmet>
      <Sofa13PageHero overline="SHOWROOM" title={<span>{showroom.name.toUpperCase()}</span>} subtitle={showroom.address} image={showroom.image} />

      <Sofa13Section>
        <Grid container spacing={5}>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Box sx={{ overflow: 'hidden', aspectRatio: '4/3', border: `2px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.3)}`, p: '8px', bgcolor: SOFA13_COLORS.charcoal }}>
                <Box component="img" src={showroom.image} alt={showroom.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
              </Box>
              <Grid container spacing={2}>
                {[SOFA13_PAGE_IMAGES.showroom1, SOFA13_PAGE_IMAGES.showroom2, SOFA13_PAGE_IMAGES.showroom3, SOFA13_PAGE_IMAGES.showroom4].map((img, i) => (
                  <Grid key={i} xs={6} md={3}><Box sx={{ overflow: 'hidden', aspectRatio: '1/1', border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.2)}` }}><Box component="img" src={img} alt={`Gallery ${i}`} sx={{ width: 1, height: 1, objectFit: 'cover' }} /></Box></Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Typography variant="h4" sx={{ fontWeight: 400, letterSpacing: 1, color: SOFA13_COLORS.ivory }}>Thông tin showroom</Typography>
              <Stack spacing={2} sx={{ p: 3, border: `1px solid ${sofa13Alpha(SOFA13_COLORS.ivory, 0.08)}`, bgcolor: sofa13Alpha(SOFA13_COLORS.charcoal, 0.5) }}>
                <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={20} sx={{ color: SOFA13_COLORS.goldPale }} /><Typography variant="body1" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.7) }}>{showroom.address}</Typography></Stack>
                <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:phone-bold-duotone" width={20} sx={{ color: SOFA13_COLORS.goldPale }} /><Typography variant="body1" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.7) }}>{showroom.phone}</Typography></Stack>
                <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:clock-circle-bold-duotone" width={20} sx={{ color: SOFA13_COLORS.goldPale }} /><Typography variant="body1" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.7) }}>{showroom.hours}</Typography></Stack>
              </Stack>
              <Box sx={{ height: 300, border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.2)}`, bgcolor: sofa13Alpha(SOFA13_COLORS.charcoal, 0.5), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Stack spacing={1} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={48} sx={{ color: SOFA13_COLORS.goldPale }} /><Typography variant="body2" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) }}>Bản đồ: {showroom.lat}, {showroom.lng}</Typography></Stack>
              </Box>
              <Stack direction="row" spacing={2}>
                <Button component={RouterLink} href="/sofa13/showrooms/visit" size="large" variant="contained" startIcon={<Iconify icon="solar:calendar-bold-duotone" />} sx={{ borderRadius: 0, fontWeight: 700, letterSpacing: 1.5, color: SOFA13_COLORS.noir, bgcolor: SOFA13_COLORS.gold, '&:hover': { bgcolor: SOFA13_COLORS.goldPale } }}>Đặt lịch tham quan</Button>
                <Button component={RouterLink} href="/sofa13/showrooms/consult" size="large" variant="outlined" startIcon={<Iconify icon="solar:chat-square-bold-duotone" />} sx={{ borderRadius: 0, fontWeight: 700, letterSpacing: 1.5, color: SOFA13_COLORS.ivory, border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.5)}`, '&:hover': { borderColor: SOFA13_COLORS.gold, color: SOFA13_COLORS.gold } }}>Tư vấn</Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Sofa13Section>
    </>
  );
}
