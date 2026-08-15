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

import { sofa19Alpha, SOFA19_COLORS } from 'src/sections/sofa19/sofa19-data';
import { Sofa19Card, Sofa19Section, Sofa19PageHero } from 'src/sections/sofa19-pages/sofa19-page-hero';
import { SOFA19_PAGE_IMAGES, SOFA19_PAGE_SHOWROOMS } from 'src/sections/sofa19-pages/sofa19-pages-data';

export default function Page() {
  const params = useParams();
  const id = params.id || '';
  const showroom = SOFA19_PAGE_SHOWROOMS.find((s) => s.id === id) || SOFA19_PAGE_SHOWROOMS[0];

  return (
    <>
      <Helmet><title>{showroom.name} — Sofa19</title></Helmet>
      <Sofa19PageHero overline="SHOWROOM" title={<span>{showroom.name.toUpperCase()}</span>} subtitle={showroom.address} image={showroom.image} />

      <Sofa19Section>
        <Grid container spacing={5}>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Box sx={{ overflow: 'hidden', aspectRatio: '4/3', borderRadius: '32px', border: `8px solid ${SOFA19_COLORS.white}`, boxShadow: `0 16px 0 -6px ${sofa19Alpha(SOFA19_COLORS.sand, 0.4)}` }}>
                <Box component="img" src={showroom.image} alt={showroom.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
              </Box>
              <Grid container spacing={2}>
                {[SOFA19_PAGE_IMAGES.showroom1, SOFA19_PAGE_IMAGES.showroom2, SOFA19_PAGE_IMAGES.showroom3, SOFA19_PAGE_IMAGES.showroom4].map((img, i) => (
                  <Grid key={i} xs={6} md={3}><Box sx={{ overflow: 'hidden', aspectRatio: '1/1', borderRadius: '20px', border: `5px solid ${SOFA19_COLORS.white}`, boxShadow: `3px 3px 0 ${sofa19Alpha(SOFA19_COLORS.coral, 0.4)}` }}><Box component="img" src={img} alt={`Gallery ${i}`} sx={{ width: 1, height: 1, objectFit: 'cover' }} /></Box></Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Typography variant="h4" sx={{ fontWeight: 800, color: SOFA19_COLORS.ink }}>Thông tin showroom</Typography>
              <Sofa19Card accent={SOFA19_COLORS.jungleLight}>
                <Stack spacing={2}>
                  <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={20} sx={{ color: SOFA19_COLORS.coralDeep }} /><Typography variant="body1" sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.8) }}>{showroom.address}</Typography></Stack>
                  <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:phone-bold-duotone" width={20} sx={{ color: SOFA19_COLORS.coralDeep }} /><Typography variant="body1" sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.8) }}>{showroom.phone}</Typography></Stack>
                  <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:clock-circle-bold-duotone" width={20} sx={{ color: SOFA19_COLORS.coralDeep }} /><Typography variant="body1" sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.8) }}>{showroom.hours}</Typography></Stack>
                </Stack>
              </Sofa19Card>
              <Box sx={{ height: 300, borderRadius: '24px', bgcolor: sofa19Alpha(SOFA19_COLORS.sand, 0.15), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Stack spacing={1} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={48} sx={{ color: SOFA19_COLORS.coralDeep }} /><Typography variant="body2" sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.7) }}>Bản đồ: {showroom.lat}, {showroom.lng}</Typography></Stack>
              </Box>
              <Stack direction="row" spacing={2}>
                <Button component={RouterLink} href="/sofa19/showrooms/visit" size="large" variant="contained" startIcon={<Iconify icon="solar:calendar-bold-duotone" />} sx={{ borderRadius: 99, fontWeight: 800, color: SOFA19_COLORS.ink, bgcolor: SOFA19_COLORS.jungleLight, boxShadow: `0 8px 0 ${SOFA19_COLORS.jungle}`, '&:hover': { bgcolor: SOFA19_COLORS.jungleLight, transform: 'translateY(2px)', boxShadow: `0 6px 0 ${SOFA19_COLORS.jungle}` } }}>Đặt lịch tham quan</Button>
                <Button component={RouterLink} href="/sofa19/showrooms/consult" size="large" variant="outlined" startIcon={<Iconify icon="solar:chat-square-bold-duotone" />} sx={{ borderRadius: 99, fontWeight: 800, color: SOFA19_COLORS.ink, bgcolor: SOFA19_COLORS.white, border: `2px solid ${sofa19Alpha(SOFA19_COLORS.ink, 0.1)}`, '&:hover': { borderColor: SOFA19_COLORS.coral, color: SOFA19_COLORS.coralDeep } }}>Tư vấn</Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Sofa19Section>
    </>
  );
}
