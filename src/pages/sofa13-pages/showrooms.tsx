import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { sofa13Alpha, SOFA13_COLORS } from 'src/sections/sofa13/sofa13-data';
import { Sofa13Section, Sofa13PageHero } from 'src/sections/sofa13-pages/sofa13-page-hero';
import { SOFA13_PAGE_IMAGES, SOFA13_PAGE_SHOWROOMS } from 'src/sections/sofa13-pages/sofa13-pages-data';

export default function Page() {
  return (
    <>
      <Helmet><title>Showroom — Sofa13</title></Helmet>
      <Sofa13PageHero overline="SHOWROOM" title={<>SHOW<span>ROOM</span></>} subtitle="Trải nghiệm sofa art deco trực tiếp tại 4 salon trên toàn quốc." image={SOFA13_PAGE_IMAGES.showroom1} />

      <Sofa13Section>
        <Grid container spacing={4}>
          {SOFA13_PAGE_SHOWROOMS.map((sr) => (
            <Grid key={sr.id} xs={12} sm={6} md={3}>
              <Stack component={RouterLink} href={`/sofa13/showrooms/${sr.id}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .sr-img': { transform: 'scale(1.05)' }, '&:hover .sr-name': { color: SOFA13_COLORS.gold } }}>
                <Box sx={{ overflow: 'hidden', aspectRatio: '4/3', border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.3)}` }}>
                  <Box className="sr-img" component="img" src={sr.image} alt={sr.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                </Box>
                <Typography className="sr-name" variant="h6" sx={{ fontWeight: 700, color: SOFA13_COLORS.ivory, letterSpacing: 1, transition: 'color 0.2s' }}>{sr.name}</Typography>
                <Stack spacing={1}>
                  <Stack direction="row" spacing={1} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={16} sx={{ color: SOFA13_COLORS.goldPale }} /><Typography variant="body2" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) }}>{sr.address}</Typography></Stack>
                  <Stack direction="row" spacing={1} alignItems="center"><Iconify icon="solar:phone-bold-duotone" width={16} sx={{ color: SOFA13_COLORS.goldPale }} /><Typography variant="body2" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) }}>{sr.phone}</Typography></Stack>
                  <Stack direction="row" spacing={1} alignItems="center"><Iconify icon="solar:clock-circle-bold-duotone" width={16} sx={{ color: SOFA13_COLORS.goldPale }} /><Typography variant="body2" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) }}>{sr.hours}</Typography></Stack>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 6 }}>
          <Button component={RouterLink} href="/sofa13/showrooms/visit" size="large" variant="contained" startIcon={<Iconify icon="solar:calendar-bold-duotone" />} sx={{ borderRadius: 0, px: 4, py: 1.75, fontWeight: 700, letterSpacing: 1.5, color: SOFA13_COLORS.noir, bgcolor: SOFA13_COLORS.gold, '&:hover': { bgcolor: SOFA13_COLORS.goldPale } }}>Đặt lịch tham quan</Button>
          <Button component={RouterLink} href="/sofa13/showrooms/consult" size="large" variant="outlined" startIcon={<Iconify icon="solar:chat-square-bold-duotone" />} sx={{ borderRadius: 0, px: 4, py: 1.75, fontWeight: 700, letterSpacing: 1.5, color: SOFA13_COLORS.ivory, border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.5)}`, '&:hover': { borderColor: SOFA13_COLORS.gold, color: SOFA13_COLORS.gold } }}>Đặt lịch tư vấn</Button>
        </Stack>
      </Sofa13Section>
    </>
  );
}
