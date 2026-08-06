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

import { SOFA8_COLORS } from 'src/sections/sofa8/sofa8-data';
import { Sofa8PageHero, Sofa8Section } from 'src/sections/sofa8-pages/sofa8-page-hero';
import { SOFA8_PAGE_SHOWROOMS, SOFA8_PAGE_IMAGES } from 'src/sections/sofa8-pages/sofa8-pages-data';

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Showroom — Sofa8</title>
      </Helmet>

      <Sofa8PageHero
        overline="SHOWROOM"
        title={<>SHOW<span>ROOM</span></>}
        subtitle="Trải nghiệm sofa coastal trực tiếp tại 4 showroom trên toàn quốc."
        image={SOFA8_PAGE_IMAGES.showroom1}
      />

      <Sofa8Section>
        <Grid container spacing={4}>
          {SOFA8_PAGE_SHOWROOMS.map((sr) => (
            <Grid key={sr.id} xs={12} sm={6} md={3}>
              <Stack component={RouterLink} href={`/sofa8/showrooms/${sr.id}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .sr-img': { transform: 'scale(1.05)' }, '&:hover .sr-name': { color: SOFA8_COLORS.coral } }}>
                <Box sx={{ overflow: 'hidden', borderRadius: 3, aspectRatio: '4/3' }}>
                  <Box className="sr-img" component="img" src={sr.image} alt={sr.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                </Box>
                <Typography className="sr-name" variant="h6" sx={{ fontWeight: 'fontWeightBold', color: 'text.primary', transition: 'color 0.2s' }}>{sr.name}</Typography>
                <Stack spacing={1}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Iconify icon="solar:map-point-bold-duotone" width={16} sx={{ color: SOFA8_COLORS.ocean }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{sr.address}</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Iconify icon="solar:phone-bold-duotone" width={16} sx={{ color: SOFA8_COLORS.ocean }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{sr.phone}</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Iconify icon="solar:clock-circle-bold-duotone" width={16} sx={{ color: SOFA8_COLORS.ocean }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{sr.hours}</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 6 }}>
          <Button component={RouterLink} href="/sofa8/showrooms/visit" size="large" variant="contained" startIcon={<Iconify icon="solar:calendar-bold-duotone" />} sx={{ bgcolor: SOFA8_COLORS.coral, color: 'common.white', fontWeight: 'fontWeightBold', '&:hover': { bgcolor: SOFA8_COLORS.coralLight } }}>
            Đặt lịch tham quan
          </Button>
          <Button component={RouterLink} href="/sofa8/showrooms/consult" size="large" variant="outlined" startIcon={<Iconify icon="solar:chat-square-bold-duotone" />} sx={{ borderColor: SOFA8_COLORS.ocean, color: SOFA8_COLORS.ocean, fontWeight: 'fontWeightBold', '&:hover': { borderColor: SOFA8_COLORS.coral, color: SOFA8_COLORS.coral, bgcolor: 'transparent' } }}>
            Đặt lịch tư vấn
          </Button>
        </Stack>
      </Sofa8Section>
    </>
  );
}
