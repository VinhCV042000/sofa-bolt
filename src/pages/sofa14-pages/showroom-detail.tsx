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

import { sofa14Alpha, SOFA14_COLORS } from 'src/sections/sofa14/sofa14-data';
import { Sofa14Card, Sofa14Section, Sofa14PageHero } from 'src/sections/sofa14-pages/sofa14-page-hero';
import { SOFA14_PAGE_IMAGES, SOFA14_PAGE_SHOWROOMS } from 'src/sections/sofa14-pages/sofa14-pages-data';

export default function Page() {
  const params = useParams();
  const id = params.id || '';
  const showroom = SOFA14_PAGE_SHOWROOMS.find((s) => s.id === id) || SOFA14_PAGE_SHOWROOMS[0];

  return (
    <>
      <Helmet><title>{showroom.name} — Sofa14</title></Helmet>
      <Sofa14PageHero overline="SHOWROOM" title={<span>{showroom.name.toUpperCase()}</span>} subtitle={showroom.address} image={showroom.image} />

      <Sofa14Section>
        <Grid container spacing={5}>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Box sx={{ overflow: 'hidden', aspectRatio: '4/3', borderRadius: '32px', border: `8px solid ${SOFA14_COLORS.white}`, boxShadow: `0 16px 0 -6px ${sofa14Alpha(SOFA14_COLORS.sky, 0.4)}` }}>
                <Box component="img" src={showroom.image} alt={showroom.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
              </Box>
              <Grid container spacing={2}>
                {[SOFA14_PAGE_IMAGES.showroom1, SOFA14_PAGE_IMAGES.showroom2, SOFA14_PAGE_IMAGES.showroom3, SOFA14_PAGE_IMAGES.showroom4].map((img, i) => (
                  <Grid key={i} xs={6} md={3}><Box sx={{ overflow: 'hidden', aspectRatio: '1/1', borderRadius: '20px', border: `5px solid ${SOFA14_COLORS.white}`, boxShadow: `3px 3px 0 ${sofa14Alpha(SOFA14_COLORS.coral, 0.4)}` }}><Box component="img" src={img} alt={`Gallery ${i}`} sx={{ width: 1, height: 1, objectFit: 'cover' }} /></Box></Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Typography variant="h4" sx={{ fontWeight: 800, color: SOFA14_COLORS.ink }}>Thông tin showroom</Typography>
              <Sofa14Card accent={SOFA14_COLORS.mint}>
                <Stack spacing={2}>
                  <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={20} sx={{ color: SOFA14_COLORS.coralDeep }} /><Typography variant="body1" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.8) }}>{showroom.address}</Typography></Stack>
                  <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:phone-bold-duotone" width={20} sx={{ color: SOFA14_COLORS.coralDeep }} /><Typography variant="body1" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.8) }}>{showroom.phone}</Typography></Stack>
                  <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:clock-circle-bold-duotone" width={20} sx={{ color: SOFA14_COLORS.coralDeep }} /><Typography variant="body1" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.8) }}>{showroom.hours}</Typography></Stack>
                </Stack>
              </Sofa14Card>
              <Box sx={{ height: 300, borderRadius: '24px', bgcolor: sofa14Alpha(SOFA14_COLORS.sky, 0.15), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Stack spacing={1} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={48} sx={{ color: SOFA14_COLORS.coralDeep }} /><Typography variant="body2" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.7) }}>Bản đồ: {showroom.lat}, {showroom.lng}</Typography></Stack>
              </Box>
              <Stack direction="row" spacing={2}>
                <Button component={RouterLink} href="/sofa14/showrooms/visit" size="large" variant="contained" startIcon={<Iconify icon="solar:calendar-bold-duotone" />} sx={{ borderRadius: 99, fontWeight: 800, color: SOFA14_COLORS.ink, bgcolor: SOFA14_COLORS.mint, boxShadow: `0 8px 0 ${SOFA14_COLORS.mintDeep}`, '&:hover': { bgcolor: SOFA14_COLORS.mint, transform: 'translateY(2px)', boxShadow: `0 6px 0 ${SOFA14_COLORS.mintDeep}` } }}>Đặt lịch tham quan</Button>
                <Button component={RouterLink} href="/sofa14/showrooms/consult" size="large" variant="outlined" startIcon={<Iconify icon="solar:chat-square-bold-duotone" />} sx={{ borderRadius: 99, fontWeight: 800, color: SOFA14_COLORS.ink, bgcolor: SOFA14_COLORS.white, border: `2px solid ${sofa14Alpha(SOFA14_COLORS.ink, 0.1)}`, '&:hover': { borderColor: SOFA14_COLORS.coral, color: SOFA14_COLORS.coralDeep } }}>Tư vấn</Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Sofa14Section>
    </>
  );
}
