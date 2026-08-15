import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA20_COLORS } from 'src/sections/sofa20/sofa20-data';
import { Sofa20Card, Sofa20Section, Sofa20PageHero } from 'src/sections/sofa20-pages/sofa20-page-hero';
import { SOFA20_PAGE_IMAGES, SOFA20_PAGE_SHOWROOMS } from 'src/sections/sofa20-pages/sofa20-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const id = params.id || '';
  const showroom = SOFA20_PAGE_SHOWROOMS.find((s) => s.id === id) || SOFA20_PAGE_SHOWROOMS[0];

  return (
    <>
      <Helmet><title>{showroom.name} — Sofa20</title></Helmet>
      <Sofa20PageHero overline="SHOWROOM" title={<span>{showroom.name.toUpperCase()}</span>} subtitle={showroom.address} image={showroom.image} />

      <Sofa20Section bg="black">
        <Grid container spacing={5}>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Box sx={{ overflow: 'hidden', aspectRatio: '4/3', border: `1px solid ${varAlpha(SOFA20_COLORS.gold, 0.3)}` }}>
                <Box component="img" src={showroom.image} alt={showroom.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
              </Box>
              <Grid container spacing={2}>
                {[SOFA20_PAGE_IMAGES.showroom1, SOFA20_PAGE_IMAGES.showroom2, SOFA20_PAGE_IMAGES.showroom3, SOFA20_PAGE_IMAGES.showroom4].map((img, i) => (
                  <Grid key={i} xs={6} md={3}><Box sx={{ overflow: 'hidden', aspectRatio: '1/1', border: `1px solid ${varAlpha(SOFA20_COLORS.gold, 0.2)}` }}><Box component="img" src={img} alt={`Gallery ${i}`} sx={{ width: 1, height: 1, objectFit: 'cover' }} /></Box></Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Typography variant="h4" sx={{ fontWeight: 'fontWeightLight', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily }}>Thông tin showroom</Typography>
              <Sofa20Card accent={SOFA20_COLORS.gold}>
                <Stack spacing={2}>
                  <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={20} sx={{ color: SOFA20_COLORS.gold }} /><Typography variant="body1" sx={{ color: varAlpha('#FFFFFF', 0.5), fontWeight: 'fontWeightLight' }}>{showroom.address}</Typography></Stack>
                  <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:phone-bold-duotone" width={20} sx={{ color: SOFA20_COLORS.gold }} /><Typography variant="body1" sx={{ color: varAlpha('#FFFFFF', 0.5), fontWeight: 'fontWeightLight' }}>{showroom.phone}</Typography></Stack>
                  <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:clock-circle-bold-duotone" width={20} sx={{ color: SOFA20_COLORS.gold }} /><Typography variant="body1" sx={{ color: varAlpha('#FFFFFF', 0.5), fontWeight: 'fontWeightLight' }}>{showroom.hours}</Typography></Stack>
                </Stack>
              </Sofa20Card>
              <Box sx={{ height: 300, border: `1px solid ${varAlpha(SOFA20_COLORS.gold, 0.2)}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Stack spacing={1} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={48} sx={{ color: SOFA20_COLORS.gold }} /><Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4) }}>Bản đồ: {showroom.lat}, {showroom.lng}</Typography></Stack>
              </Box>
              <Stack direction="row" spacing={2}>
                <Button component={RouterLink} href="/sofa20/showrooms/visit" size="large" variant="contained" startIcon={<Iconify icon="solar:calendar-bold-duotone" />} sx={{ borderRadius: 0, fontWeight: 'fontWeightMedium', color: SOFA20_COLORS.black, bgcolor: SOFA20_COLORS.gold, border: `1px solid ${SOFA20_COLORS.gold}`, '&:hover': { bgcolor: SOFA20_COLORS.goldLight } }}>Đặt lịch tham quan</Button>
                <Button component={RouterLink} href="/sofa20/showrooms/consult" size="large" variant="outlined" startIcon={<Iconify icon="solar:chat-square-bold-duotone" />} sx={{ borderRadius: 0, fontWeight: 'fontWeightMedium', color: SOFA20_COLORS.gold, bgcolor: 'transparent', border: `1px solid ${varAlpha(SOFA20_COLORS.gold, 0.4)}`, '&:hover': { border: `1px solid ${SOFA20_COLORS.gold}`, bgcolor: varAlpha(SOFA20_COLORS.gold, 0.08) } }}>Tư vấn</Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Sofa20Section>
    </>
  );
}
