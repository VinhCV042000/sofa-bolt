import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { SOFA15_COLORS } from 'src/sections/sofa15/sofa15-data';
import { Sofa15Section, Sofa15PageHero } from 'src/sections/sofa15-pages/sofa15-page-hero';
import { SOFA15_PAGE_IMAGES, SOFA15_PAGE_SHOWROOMS } from 'src/sections/sofa15-pages/sofa15-pages-data';

export default function Page() {
  const theme = useTheme();
  return (
    <>
      <Helmet><title>Showroom — Sofa15</title></Helmet>
      <Sofa15PageHero overline="SHOWROOM" title={<>SHOW<span>ROOM</span></>} subtitle="Trải nghiệm sofa Art Deco trực tiếp tại 4 showroom trên toàn quốc." image={SOFA15_PAGE_IMAGES.showroom1} />

      <Sofa15Section bg="black">
        <Grid container spacing={4}>
          {SOFA15_PAGE_SHOWROOMS.map((sr) => (
            <Grid key={sr.id} xs={12} sm={6} md={3}>
              <Stack component={RouterLink} href={`/sofa15/showrooms/${sr.id}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .sr-img': { transform: 'scale(1.05)' }, '&:hover .sr-name': { color: SOFA15_COLORS.gold } }}>
                <Box sx={{ overflow: 'hidden', aspectRatio: '4/3', border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.2)}` }}>
                  <Box className="sr-img" component="img" src={sr.image} alt={sr.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                </Box>
                <Typography className="sr-name" variant="h6" sx={{ fontWeight: 'fontWeightLight', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily, transition: 'color 0.2s' }}>{sr.name}</Typography>
                <Stack spacing={1}>
                  <Stack direction="row" spacing={1} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={16} sx={{ color: SOFA15_COLORS.gold }} /><Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4) }}>{sr.address}</Typography></Stack>
                  <Stack direction="row" spacing={1} alignItems="center"><Iconify icon="solar:phone-bold-duotone" width={16} sx={{ color: SOFA15_COLORS.gold }} /><Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4) }}>{sr.phone}</Typography></Stack>
                  <Stack direction="row" spacing={1} alignItems="center"><Iconify icon="solar:clock-circle-bold-duotone" width={16} sx={{ color: SOFA15_COLORS.gold }} /><Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4) }}>{sr.hours}</Typography></Stack>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 6 }}>
          <Button component={RouterLink} href="/sofa15/showrooms/visit" size="large" variant="contained" startIcon={<Iconify icon="solar:calendar-bold-duotone" />} sx={{ borderRadius: 0, px: 4, py: 1.75, fontWeight: 'fontWeightMedium', color: SOFA15_COLORS.black, bgcolor: SOFA15_COLORS.gold, border: `1px solid ${SOFA15_COLORS.gold}`, '&:hover': { bgcolor: SOFA15_COLORS.goldLight } }}>Đặt lịch tham quan</Button>
          <Button component={RouterLink} href="/sofa15/showrooms/consult" size="large" variant="outlined" startIcon={<Iconify icon="solar:chat-square-bold-duotone" />} sx={{ borderRadius: 0, px: 4, py: 1.75, fontWeight: 'fontWeightMedium', color: SOFA15_COLORS.gold, bgcolor: 'transparent', border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.4)}`, '&:hover': { border: `1px solid ${SOFA15_COLORS.gold}`, bgcolor: varAlpha(SOFA15_COLORS.gold, 0.08) } }}>Đặt lịch tư vấn</Button>
        </Stack>
      </Sofa15Section>
    </>
  );
}
