import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { sofa11Alpha, SOFA11_COLORS } from 'src/sections/sofa11/sofa11-data';
import { Sofa11Section, Sofa11PageHero } from 'src/sections/sofa11-pages/sofa11-page-hero';
import { SOFA11_PAGE_IMAGES, SOFA11_PAGE_SHOWROOMS } from 'src/sections/sofa11-pages/sofa11-pages-data';

export default function Page() {
  return (
    <>
      <Helmet><title>Showroom — Sofa11</title></Helmet>
      <Sofa11PageHero overline="SHOWROOM" title={<>SHOW<span>ROOM</span></>} subtitle="Trải nghiệm sofa pop trực tiếp tại 4 showroom trên toàn quốc." image={SOFA11_PAGE_IMAGES.showroom1} />

      <Sofa11Section>
        <Grid container spacing={4}>
          {SOFA11_PAGE_SHOWROOMS.map((sr) => (
            <Grid key={sr.id} xs={12} sm={6} md={3}>
              <Stack component={RouterLink} href={`/sofa11/showrooms/${sr.id}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .sr-img': { transform: 'scale(1.05)' }, '&:hover .sr-name': { color: SOFA11_COLORS.lime } }}>
                <Box sx={{ overflow: 'hidden', borderRadius: '20px 20px 20px 0', aspectRatio: '4/3', border: `2px solid ${sofa11Alpha(SOFA11_COLORS.magenta, 0.3)}` }}>
                  <Box className="sr-img" component="img" src={sr.image} alt={sr.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                </Box>
                <Typography className="sr-name" variant="h6" sx={{ fontWeight: 900, color: SOFA11_COLORS.cream, textTransform: 'uppercase', transition: 'color 0.2s' }}>{sr.name}</Typography>
                <Stack spacing={1}>
                  <Stack direction="row" spacing={1} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={16} sx={{ color: SOFA11_COLORS.cyan }} /><Typography variant="body2" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.5) }}>{sr.address}</Typography></Stack>
                  <Stack direction="row" spacing={1} alignItems="center"><Iconify icon="solar:phone-bold-duotone" width={16} sx={{ color: SOFA11_COLORS.cyan }} /><Typography variant="body2" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.5) }}>{sr.phone}</Typography></Stack>
                  <Stack direction="row" spacing={1} alignItems="center"><Iconify icon="solar:clock-circle-bold-duotone" width={16} sx={{ color: SOFA11_COLORS.cyan }} /><Typography variant="body2" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.5) }}>{sr.hours}</Typography></Stack>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 6 }}>
          <Button component={RouterLink} href="/sofa11/showrooms/visit" size="large" variant="contained" startIcon={<Iconify icon="solar:calendar-bold-duotone" />} sx={{ borderRadius: 99, px: 4, py: 1.75, fontWeight: 900, textTransform: 'uppercase', color: SOFA11_COLORS.void, bgcolor: SOFA11_COLORS.lime, boxShadow: `0 0 32px ${sofa11Alpha(SOFA11_COLORS.lime, 0.5)}`, '&:hover': { bgcolor: SOFA11_COLORS.cyan, transform: 'translateY(-2px)' }, transition: 'all .25s' }}>Đặt lịch tham quan</Button>
          <Button component={RouterLink} href="/sofa11/showrooms/consult" size="large" variant="outlined" startIcon={<Iconify icon="solar:chat-square-bold-duotone" />} sx={{ borderRadius: 99, px: 4, py: 1.75, fontWeight: 700, textTransform: 'uppercase', color: SOFA11_COLORS.cream, border: `2px solid ${sofa11Alpha(SOFA11_COLORS.cream, 0.4)}`, '&:hover': { borderColor: SOFA11_COLORS.magenta, color: SOFA11_COLORS.magenta } }}>Đặt lịch tư vấn</Button>
        </Stack>
      </Sofa11Section>
    </>
  );
}
