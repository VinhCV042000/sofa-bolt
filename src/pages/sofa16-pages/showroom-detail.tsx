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

import { SOFA16_COLORS } from 'src/sections/sofa16/sofa16-data';
import { Sofa16Card, Sofa16Section, Sofa16PageHero } from 'src/sections/sofa16-pages/sofa16-page-hero';
import { SOFA16_PAGE_IMAGES, SOFA16_PAGE_SHOWROOMS } from 'src/sections/sofa16-pages/sofa16-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const id = params.id || '';
  const showroom = SOFA16_PAGE_SHOWROOMS.find((s) => s.id === id) || SOFA16_PAGE_SHOWROOMS[0];

  return (
    <>
      <Helmet><title>{showroom.name} — Sofa16</title></Helmet>
      <Sofa16PageHero overline="SHOWROOM" title={<span>{showroom.name.toUpperCase()}</span>} subtitle={showroom.address} image={showroom.image} />

      <Sofa16Section bg="cream">
        <Grid container spacing={5}>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Box sx={{ overflow: 'hidden', aspectRatio: '4/3', borderRadius: 3 }}>
                <Box component="img" src={showroom.image} alt={showroom.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
              </Box>
              <Grid container spacing={2}>
                {[SOFA16_PAGE_IMAGES.showroom1, SOFA16_PAGE_IMAGES.showroom2, SOFA16_PAGE_IMAGES.showroom3, SOFA16_PAGE_IMAGES.showroom4].map((img, i) => (
                  <Grid key={i} xs={6} md={3}><Box sx={{ overflow: 'hidden', aspectRatio: '1/1', borderRadius: 2 }}><Box component="img" src={img} alt={`Gallery ${i}`} sx={{ width: 1, height: 1, objectFit: 'cover' }} /></Box></Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Typography variant="h4" sx={{ fontWeight: 'fontWeightLight', color: SOFA16_COLORS.ink, fontFamily: theme.typography.fontSecondaryFamily }}>Thông tin showroom</Typography>
              <Sofa16Card accent={SOFA16_COLORS.terracotta}>
                <Stack spacing={2}>
                  <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={20} sx={{ color: SOFA16_COLORS.terracotta }} /><Typography variant="body1" sx={{ color: SOFA16_COLORS.inkSoft, fontWeight: 'fontWeightLight' }}>{showroom.address}</Typography></Stack>
                  <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:phone-bold-duotone" width={20} sx={{ color: SOFA16_COLORS.terracotta }} /><Typography variant="body1" sx={{ color: SOFA16_COLORS.inkSoft, fontWeight: 'fontWeightLight' }}>{showroom.phone}</Typography></Stack>
                  <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:clock-circle-bold-duotone" width={20} sx={{ color: SOFA16_COLORS.terracotta }} /><Typography variant="body1" sx={{ color: SOFA16_COLORS.inkSoft, fontWeight: 'fontWeightLight' }}>{showroom.hours}</Typography></Stack>
                </Stack>
              </Sofa16Card>
              <Box sx={{ height: 300, border: `1px solid ${varAlpha(SOFA16_COLORS.terracotta, 0.2)}`, borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Stack spacing={1} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={48} sx={{ color: SOFA16_COLORS.terracotta }} /><Typography variant="body2" sx={{ color: SOFA16_COLORS.inkSoft }}>Bản đồ: {showroom.lat}, {showroom.lng}</Typography></Stack>
              </Box>
              <Stack direction="row" spacing={2}>
                <Button component={RouterLink} href="/sofa16/showrooms/visit" size="large" variant="contained" startIcon={<Iconify icon="solar:calendar-bold-duotone" />} sx={{ borderRadius: 2, fontWeight: 'fontWeightMedium', color: 'common.white', bgcolor: SOFA16_COLORS.terracotta, '&:hover': { bgcolor: SOFA16_COLORS.terracottaDeep } }}>Đặt lịch tham quan</Button>
                <Button component={RouterLink} href="/sofa16/showrooms/consult" size="large" variant="outlined" startIcon={<Iconify icon="solar:chat-square-bold-duotone" />} sx={{ borderRadius: 2, fontWeight: 'fontWeightMedium', color: SOFA16_COLORS.terracottaDeep, bgcolor: 'transparent', border: `1px solid ${varAlpha(SOFA16_COLORS.terracotta, 0.4)}`, '&:hover': { border: `1px solid ${SOFA16_COLORS.terracotta}`, bgcolor: varAlpha(SOFA16_COLORS.terracotta, 0.06) } }}>Tư vấn</Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Sofa16Section>
    </>
  );
}
