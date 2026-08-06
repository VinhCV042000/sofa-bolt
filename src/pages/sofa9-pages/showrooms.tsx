import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import { varAlpha } from 'src/theme/styles';
import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

import { SOFA9_COLORS } from 'src/sections/sofa9/sofa9-data';
import { Sofa9PageHero, Sofa9Section } from 'src/sections/sofa9-pages/sofa9-page-hero';
import { SOFA9_PAGE_SHOWROOMS, SOFA9_PAGE_IMAGES } from 'src/sections/sofa9-pages/sofa9-pages-data';

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Showroom — Sofa9</title>
      </Helmet>

      <Sofa9PageHero overline="SHOWROOM" title={<>SHOW<span>ROOM</span></>} subtitle="Trải nghiệm sofa retro trực tiếp tại 4 showroom trên toàn quốc." image={SOFA9_PAGE_IMAGES.showroom1} />

      <Sofa9Section>
        <Grid container spacing={4}>
          {SOFA9_PAGE_SHOWROOMS.map((sr) => (
            <Grid key={sr.id} xs={12} sm={6} md={3}>
              <Stack component={RouterLink} href={`/sofa9/showrooms/${sr.id}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .sr-img': { transform: 'scale(1.05)' }, '&:hover .sr-name': { color: SOFA9_COLORS.pink } }}>
                <Box sx={{ overflow: 'hidden', borderRadius: 3, aspectRatio: '4/3' }}>
                  <Box className="sr-img" component="img" src={sr.image} alt={sr.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                </Box>
                <Typography className="sr-name" variant="h6" sx={{ fontWeight: 'fontWeightBold', color: 'text.primary', transition: 'color 0.2s' }}>{sr.name}</Typography>
                <Stack spacing={1}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Iconify icon="solar:map-point-bold-duotone" width={16} sx={{ color: SOFA9_COLORS.pink }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{sr.address}</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Iconify icon="solar:phone-bold-duotone" width={16} sx={{ color: SOFA9_COLORS.pink }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{sr.phone}</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Iconify icon="solar:clock-circle-bold-duotone" width={16} sx={{ color: SOFA9_COLORS.pink }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{sr.hours}</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 6 }}>
          <Button component={RouterLink} href="/sofa9/showrooms/visit" size="large" variant="contained" startIcon={<Iconify icon="solar:calendar-bold-duotone" />} sx={{ borderRadius: 30, bgcolor: SOFA9_COLORS.pink, color: 'common.white', fontWeight: 'fontWeightBold', boxShadow: `0 4px 0 ${SOFA9_COLORS.black}`, '&:hover': { bgcolor: SOFA9_COLORS.pinkLight, boxShadow: `0 6px 0 ${SOFA9_COLORS.black}` } }}>Đặt lịch tham quan</Button>
          <Button component={RouterLink} href="/sofa9/showrooms/consult" size="large" variant="outlined" startIcon={<Iconify icon="solar:chat-square-bold-duotone" />} sx={{ borderRadius: 30, borderColor: SOFA9_COLORS.teal, color: SOFA9_COLORS.teal, fontWeight: 'fontWeightBold', '&:hover': { borderColor: SOFA9_COLORS.pink, color: SOFA9_COLORS.pink, bgcolor: 'transparent' } }}>Đặt lịch tư vấn</Button>
        </Stack>
      </Sofa9Section>
    </>
  );
}
