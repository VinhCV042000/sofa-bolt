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

import { SOFA18_COLORS } from 'src/sections/sofa18/sofa18-data';
import { Sofa18Card, Sofa18Section, Sofa18PageHero } from 'src/sections/sofa18-pages/sofa18-page-hero';
import { SOFA18_PAGE_IMAGES, SOFA18_PAGE_SHOWROOMS } from 'src/sections/sofa18-pages/sofa18-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const id = params.id || '';
  const showroom = SOFA18_PAGE_SHOWROOMS.find((s) => s.id === id) || SOFA18_PAGE_SHOWROOMS[0];

  return (
    <>
      <Helmet><title>{showroom.name} — Sofa18</title></Helmet>
      <Sofa18PageHero overline="SHOWROOM" title={<span>{showroom.name.toUpperCase()}</span>} subtitle={showroom.address} image={showroom.image} />

      <Sofa18Section bg="cream">
        <Grid container spacing={5}>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Box sx={{ overflow: 'hidden', aspectRatio: '4/3', borderRadius: 3 }}>
                <Box component="img" src={showroom.image} alt={showroom.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
              </Box>
              <Grid container spacing={2}>
                {[SOFA18_PAGE_IMAGES.showroom1, SOFA18_PAGE_IMAGES.showroom2, SOFA18_PAGE_IMAGES.showroom3, SOFA18_PAGE_IMAGES.showroom4].map((img, i) => (
                  <Grid key={i} xs={6} md={3}><Box sx={{ overflow: 'hidden', aspectRatio: '1/1', borderRadius: 2 }}><Box component="img" src={img} alt={`Gallery ${i}`} sx={{ width: 1, height: 1, objectFit: 'cover' }} /></Box></Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Typography variant="h4" sx={{ fontWeight: 'fontWeightLight', color: SOFA18_COLORS.ink, fontFamily: theme.typography.fontSecondaryFamily }}>Thông tin showroom</Typography>
              <Sofa18Card accent={SOFA18_COLORS.clay}>
                <Stack spacing={2}>
                  <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={20} sx={{ color: SOFA18_COLORS.clay }} /><Typography variant="body1" sx={{ color: SOFA18_COLORS.inkSoft, fontWeight: 'fontWeightLight' }}>{showroom.address}</Typography></Stack>
                  <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:phone-bold-duotone" width={20} sx={{ color: SOFA18_COLORS.clay }} /><Typography variant="body1" sx={{ color: SOFA18_COLORS.inkSoft, fontWeight: 'fontWeightLight' }}>{showroom.phone}</Typography></Stack>
                  <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:clock-circle-bold-duotone" width={20} sx={{ color: SOFA18_COLORS.clay }} /><Typography variant="body1" sx={{ color: SOFA18_COLORS.inkSoft, fontWeight: 'fontWeightLight' }}>{showroom.hours}</Typography></Stack>
                </Stack>
              </Sofa18Card>
              <Box sx={{ height: 300, border: `1px solid ${varAlpha(SOFA18_COLORS.clay, 0.2)}`, borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Stack spacing={1} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={48} sx={{ color: SOFA18_COLORS.clay }} /><Typography variant="body2" sx={{ color: SOFA18_COLORS.inkSoft }}>Bản đồ: {showroom.lat}, {showroom.lng}</Typography></Stack>
              </Box>
              <Stack direction="row" spacing={2}>
                <Button component={RouterLink} href="/sofa18/showrooms/visit" size="large" variant="contained" startIcon={<Iconify icon="solar:calendar-bold-duotone" />} sx={{ borderRadius: 2, fontWeight: 'fontWeightMedium', color: 'common.white', bgcolor: SOFA18_COLORS.clay, '&:hover': { bgcolor: SOFA18_COLORS.clayDeep } }}>Đặt lịch tham quan</Button>
                <Button component={RouterLink} href="/sofa18/showrooms/consult" size="large" variant="outlined" startIcon={<Iconify icon="solar:chat-square-bold-duotone" />} sx={{ borderRadius: 2, fontWeight: 'fontWeightMedium', color: SOFA18_COLORS.clayDeep, bgcolor: 'transparent', border: `1px solid ${varAlpha(SOFA18_COLORS.clay, 0.4)}`, '&:hover': { border: `1px solid ${SOFA18_COLORS.clay}`, bgcolor: varAlpha(SOFA18_COLORS.clay, 0.06) } }}>Tư vấn</Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Sofa18Section>
    </>
  );
}
