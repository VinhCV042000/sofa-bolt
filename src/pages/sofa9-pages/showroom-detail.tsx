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

import { SOFA9_COLORS } from 'src/sections/sofa9/sofa9-data';
import { Sofa9Section, Sofa9PageHero } from 'src/sections/sofa9-pages/sofa9-page-hero';
import { SOFA9_PAGE_IMAGES, SOFA9_PAGE_SHOWROOMS } from 'src/sections/sofa9-pages/sofa9-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const id = params.id || '';
  const showroom = SOFA9_PAGE_SHOWROOMS.find((s) => s.id === id) || SOFA9_PAGE_SHOWROOMS[0];

  return (
    <>
      <Helmet>
        <title>{showroom.name} — Sofa9</title>
      </Helmet>

      <Sofa9PageHero overline="SHOWROOM" title={<span>{showroom.name.toUpperCase()}</span>} subtitle={showroom.address} image={showroom.image} />

      <Sofa9Section>
        <Grid container spacing={5}>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Box sx={{ overflow: 'hidden', borderRadius: 3, aspectRatio: '4/3' }}>
                <Box component="img" src={showroom.image} alt={showroom.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
              </Box>
              <Grid container spacing={2}>
                {[SOFA9_PAGE_IMAGES.showroom1, SOFA9_PAGE_IMAGES.showroom2, SOFA9_PAGE_IMAGES.showroom3, SOFA9_PAGE_IMAGES.showroom4].map((img, i) => (
                  <Grid key={i} xs={6} md={3}>
                    <Box sx={{ overflow: 'hidden', borderRadius: 2, aspectRatio: '1/1' }}>
                      <Box component="img" src={img} alt={`Gallery ${i}`} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Typography variant="h4" sx={{ fontWeight: 'fontWeightBold' }}>Thông tin showroom</Typography>
              <Stack spacing={2} sx={{ p: 3, borderRadius: 3, bgcolor: 'background.paper', border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` }}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Iconify icon="solar:map-point-bold-duotone" width={20} sx={{ color: SOFA9_COLORS.pink }} />
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>{showroom.address}</Typography>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Iconify icon="solar:phone-bold-duotone" width={20} sx={{ color: SOFA9_COLORS.pink }} />
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>{showroom.phone}</Typography>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Iconify icon="solar:clock-circle-bold-duotone" width={20} sx={{ color: SOFA9_COLORS.pink }} />
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>{showroom.hours}</Typography>
                </Stack>
              </Stack>
              <Box sx={{ borderRadius: 3, overflow: 'hidden', height: 300, bgcolor: varAlpha(SOFA9_COLORS.pink, 0.1), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Stack spacing={1} alignItems="center">
                  <Iconify icon="solar:map-point-bold-duotone" width={48} sx={{ color: SOFA9_COLORS.pink }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Bản đồ: {showroom.lat}, {showroom.lng}</Typography>
                </Stack>
              </Box>
              <Stack direction="row" spacing={2}>
                <Button component={RouterLink} href="/sofa9/showrooms/visit" size="large" variant="contained" startIcon={<Iconify icon="solar:calendar-bold-duotone" />} sx={{ borderRadius: 30, bgcolor: SOFA9_COLORS.pink, color: 'common.white', fontWeight: 'fontWeightBold', boxShadow: `0 4px 0 ${SOFA9_COLORS.black}`, '&:hover': { bgcolor: SOFA9_COLORS.pinkLight, boxShadow: `0 6px 0 ${SOFA9_COLORS.black}` } }}>Đặt lịch tham quan</Button>
                <Button component={RouterLink} href="/sofa9/showrooms/consult" size="large" variant="outlined" startIcon={<Iconify icon="solar:chat-square-bold-duotone" />} sx={{ borderRadius: 30, borderColor: SOFA9_COLORS.teal, color: SOFA9_COLORS.teal, fontWeight: 'fontWeightBold', '&:hover': { borderColor: SOFA9_COLORS.pink, color: SOFA9_COLORS.pink, bgcolor: 'transparent' } }}>Tư vấn</Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Sofa9Section>
    </>
  );
}
