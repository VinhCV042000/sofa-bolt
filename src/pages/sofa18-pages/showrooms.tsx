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

import { SOFA18_COLORS } from 'src/sections/sofa18/sofa18-data';
import { Sofa18Section, Sofa18PageHero } from 'src/sections/sofa18-pages/sofa18-page-hero';
import { SOFA18_PAGE_IMAGES, SOFA18_PAGE_SHOWROOMS } from 'src/sections/sofa18-pages/sofa18-pages-data';

export default function Page() {
  const theme = useTheme();
  return (
    <>
      <Helmet><title>Showroom — Sofa18</title></Helmet>
      <Sofa18PageHero overline="SHOWROOM" title={<>SHOW<span>ROOM</span></>} subtitle="Trải nghiệm sofa Mediterranean trực tiếp tại 4 showroom trên toàn quốc." image={SOFA18_PAGE_IMAGES.showroom1} />

      <Sofa18Section bg="cream">
        <Grid container spacing={4}>
          {SOFA18_PAGE_SHOWROOMS.map((sr) => (
            <Grid key={sr.id} xs={12} sm={6} md={3}>
              <Stack component={RouterLink} href={`/sofa18/showrooms/${sr.id}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .sr-img': { transform: 'scale(1.05)' }, '&:hover .sr-name': { color: SOFA18_COLORS.clay } }}>
                <Box sx={{ overflow: 'hidden', aspectRatio: '4/3', borderRadius: 3 }}>
                  <Box className="sr-img" component="img" src={sr.image} alt={sr.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                </Box>
                <Typography className="sr-name" variant="h6" sx={{ fontWeight: 'fontWeightLight', color: SOFA18_COLORS.ink, fontFamily: theme.typography.fontSecondaryFamily, transition: 'color 0.2s' }}>{sr.name}</Typography>
                <Stack spacing={1}>
                  <Stack direction="row" spacing={1} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={16} sx={{ color: SOFA18_COLORS.clay }} /><Typography variant="body2" sx={{ color: SOFA18_COLORS.inkSoft }}>{sr.address}</Typography></Stack>
                  <Stack direction="row" spacing={1} alignItems="center"><Iconify icon="solar:phone-bold-duotone" width={16} sx={{ color: SOFA18_COLORS.clay }} /><Typography variant="body2" sx={{ color: SOFA18_COLORS.inkSoft }}>{sr.phone}</Typography></Stack>
                  <Stack direction="row" spacing={1} alignItems="center"><Iconify icon="solar:clock-circle-bold-duotone" width={16} sx={{ color: SOFA18_COLORS.clay }} /><Typography variant="body2" sx={{ color: SOFA18_COLORS.inkSoft }}>{sr.hours}</Typography></Stack>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 6 }}>
          <Button component={RouterLink} href="/sofa18/showrooms/visit" size="large" variant="contained" startIcon={<Iconify icon="solar:calendar-bold-duotone" />} sx={{ borderRadius: 2, px: 4, py: 1.75, fontWeight: 'fontWeightMedium', color: 'common.white', bgcolor: SOFA18_COLORS.clay, '&:hover': { bgcolor: SOFA18_COLORS.clayDeep } }}>Đặt lịch tham quan</Button>
          <Button component={RouterLink} href="/sofa18/showrooms/consult" size="large" variant="outlined" startIcon={<Iconify icon="solar:chat-square-bold-duotone" />} sx={{ borderRadius: 2, px: 4, py: 1.75, fontWeight: 'fontWeightMedium', color: SOFA18_COLORS.clayDeep, bgcolor: 'transparent', border: `1px solid ${varAlpha(SOFA18_COLORS.clay, 0.4)}`, '&:hover': { border: `1px solid ${SOFA18_COLORS.clay}`, bgcolor: varAlpha(SOFA18_COLORS.clay, 0.06) } }}>Đặt lịch tư vấn</Button>
        </Stack>
      </Sofa18Section>
    </>
  );
}
