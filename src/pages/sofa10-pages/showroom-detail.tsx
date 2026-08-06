import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { useParams } from 'react-router-dom';

import { varAlpha } from 'src/theme/styles';
import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

import { SOFA10_COLORS } from 'src/sections/sofa10/sofa10-data';
import { Sofa10PageHero, Sofa10Section } from 'src/sections/sofa10-pages/sofa10-page-hero';
import { SOFA10_PAGE_SHOWROOMS, SOFA10_PAGE_IMAGES } from 'src/sections/sofa10-pages/sofa10-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const id = params.id || '';
  const showroom = SOFA10_PAGE_SHOWROOMS.find((s) => s.id === id) || SOFA10_PAGE_SHOWROOMS[0];

  return (
    <>
      <Helmet><title>{showroom.name} — Sofa10</title></Helmet>
      <Sofa10PageHero overline="SHOWROOM" title={<><span>{showroom.name.toUpperCase()}</span></>} subtitle={showroom.address} image={showroom.image} />
      <Sofa10Section>
        <Grid container spacing={5}>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Box sx={{ overflow: 'hidden', borderRadius: 2, aspectRatio: '4/3' }}>
                <Box component="img" src={showroom.image} alt={showroom.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
              </Box>
              <Grid container spacing={2}>
                {[SOFA10_PAGE_IMAGES.showroom1, SOFA10_PAGE_IMAGES.showroom2, SOFA10_PAGE_IMAGES.showroom3, SOFA10_PAGE_IMAGES.showroom4].map((img, i) => (
                  <Grid key={i} xs={6} md={3}><Box sx={{ overflow: 'hidden', borderRadius: 1, aspectRatio: '1/1' }}><Box component="img" src={img} alt={`Gallery ${i}`} sx={{ width: 1, height: 1, objectFit: 'cover' }} /></Box></Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Typography variant="h4" sx={{ fontWeight: 'fontWeightLight' }}>Thông tin showroom</Typography>
              <Stack spacing={2} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.08)}` }}>
                <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={20} sx={{ color: SOFA10_COLORS.wood }} /><Typography variant="body1" sx={{ color: 'text.secondary' }}>{showroom.address}</Typography></Stack>
                <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:phone-bold-duotone" width={20} sx={{ color: SOFA10_COLORS.wood }} /><Typography variant="body1" sx={{ color: 'text.secondary' }}>{showroom.phone}</Typography></Stack>
                <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:clock-circle-bold-duotone" width={20} sx={{ color: SOFA10_COLORS.wood }} /><Typography variant="body1" sx={{ color: 'text.secondary' }}>{showroom.hours}</Typography></Stack>
              </Stack>
              <Box sx={{ borderRadius: 2, overflow: 'hidden', height: 300, bgcolor: varAlpha(SOFA10_COLORS.wood, 0.08), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Stack spacing={1} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={48} sx={{ color: SOFA10_COLORS.wood }} /><Typography variant="body2" sx={{ color: 'text.secondary' }}>Bản đồ: {showroom.lat}, {showroom.lng}</Typography></Stack>
              </Box>
              <Stack direction="row" spacing={2}>
                <Button component={RouterLink} href="/sofa10/showrooms/visit" size="large" variant="contained" startIcon={<Iconify icon="solar:calendar-bold-duotone" />} sx={{ borderRadius: 2, bgcolor: SOFA10_COLORS.charcoal, color: 'common.white', fontWeight: 'fontWeightLight', textTransform: 'none', '&:hover': { bgcolor: SOFA10_COLORS.ink } }}>Đặt lịch tham quan</Button>
                <Button component={RouterLink} href="/sofa10/showrooms/consult" size="large" variant="outlined" startIcon={<Iconify icon="solar:chat-square-bold-duotone" />} sx={{ borderRadius: 2, borderColor: SOFA10_COLORS.wood, color: SOFA10_COLORS.wood, fontWeight: 'fontWeightLight', textTransform: 'none', '&:hover': { borderColor: SOFA10_COLORS.ink, color: SOFA10_COLORS.ink, bgcolor: 'transparent' } }}>Tư vấn</Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Sofa10Section>
    </>
  );
}
