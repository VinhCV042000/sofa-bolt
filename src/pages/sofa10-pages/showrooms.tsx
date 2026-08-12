import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { SOFA10_COLORS } from 'src/sections/sofa10/sofa10-data';
import { Sofa10Section, Sofa10PageHero } from 'src/sections/sofa10-pages/sofa10-page-hero';
import { SOFA10_PAGE_IMAGES, SOFA10_PAGE_SHOWROOMS } from 'src/sections/sofa10-pages/sofa10-pages-data';

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet><title>Showroom — Sofa10</title></Helmet>
      <Sofa10PageHero overline="SHOWROOM" title={<>SHOW<span>ROOM</span></>} subtitle="Trải nghiệm sofa wabi-sabi trực tiếp tại 4 showroom trên toàn quốc." image={SOFA10_PAGE_IMAGES.showroom1} />
      <Sofa10Section>
        <Grid container spacing={4}>
          {SOFA10_PAGE_SHOWROOMS.map((sr) => (
            <Grid key={sr.id} xs={12} sm={6} md={3}>
              <Stack component={RouterLink} href={`/sofa10/showrooms/${sr.id}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .sr-img': { transform: 'scale(1.03)' }, '&:hover .sr-name': { color: SOFA10_COLORS.wood } }}>
                <Box sx={{ overflow: 'hidden', borderRadius: 2, aspectRatio: '4/3' }}>
                  <Box className="sr-img" component="img" src={sr.image} alt={sr.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                </Box>
                <Typography className="sr-name" variant="h6" sx={{ fontWeight: 'fontWeightNormal', color: 'text.primary', transition: 'color 0.2s' }}>{sr.name}</Typography>
                <Stack spacing={1}>
                  <Stack direction="row" spacing={1} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={16} sx={{ color: SOFA10_COLORS.wood }} /><Typography variant="body2" sx={{ color: 'text.secondary' }}>{sr.address}</Typography></Stack>
                  <Stack direction="row" spacing={1} alignItems="center"><Iconify icon="solar:phone-bold-duotone" width={16} sx={{ color: SOFA10_COLORS.wood }} /><Typography variant="body2" sx={{ color: 'text.secondary' }}>{sr.phone}</Typography></Stack>
                  <Stack direction="row" spacing={1} alignItems="center"><Iconify icon="solar:clock-circle-bold-duotone" width={16} sx={{ color: SOFA10_COLORS.wood }} /><Typography variant="body2" sx={{ color: 'text.secondary' }}>{sr.hours}</Typography></Stack>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 6 }}>
          <Button component={RouterLink} href="/sofa10/showrooms/visit" size="large" variant="contained" startIcon={<Iconify icon="solar:calendar-bold-duotone" />} sx={{ borderRadius: 2, bgcolor: SOFA10_COLORS.charcoal, color: 'common.white', fontWeight: 'fontWeightLight', textTransform: 'none', '&:hover': { bgcolor: SOFA10_COLORS.ink } }}>Đặt lịch tham quan</Button>
          <Button component={RouterLink} href="/sofa10/showrooms/consult" size="large" variant="outlined" startIcon={<Iconify icon="solar:chat-square-bold-duotone" />} sx={{ borderRadius: 2, borderColor: SOFA10_COLORS.wood, color: SOFA10_COLORS.wood, fontWeight: 'fontWeightLight', textTransform: 'none', '&:hover': { borderColor: SOFA10_COLORS.ink, color: SOFA10_COLORS.ink, bgcolor: 'transparent' } }}>Đặt lịch tư vấn</Button>
        </Stack>
      </Sofa10Section>
    </>
  );
}
