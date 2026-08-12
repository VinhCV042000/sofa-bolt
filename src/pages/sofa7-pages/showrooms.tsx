import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA7_COLORS } from 'src/sections/sofa7/sofa7-data';
import { SOFA7_PAGE_SHOWROOMS } from 'src/sections/sofa7-pages/sofa7-pages-data';
import { Sofa7Section, Sofa7PageHero } from 'src/sections/sofa7-pages/sofa7-page-hero';

// ----------------------------------------------------------------------

const metadata = { title: 'Hệ thống showroom — Sofa7' };

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa7PageHero
        overline="SHOWROOM"
        title={
          <>
            HỆ THỐNG <span>SHOWROOM</span>
          </>
        }
        subtitle="4 showroom trên cả nước — Hà Nội, TP.HCM, Đà Nẵng, Cần Thơ. Trải nghiệm vibe loft nguyên bản."
        image="https://images.pexels.com/photos/8089275/pexels-photo-8089275.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <Sofa7Section>
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled', letterSpacing: 4 }}>GHÉ THĂM</Typography>
          <Typography variant="h3" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
            4 SHOWROOM <Box component="span" sx={{ ...textGradient(`90deg, ${SOFA7_COLORS.electric} 0%, ${SOFA7_COLORS.cyan} 100%`) }}>TOÀN QUỐC</Box>
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {SOFA7_PAGE_SHOWROOMS.map((showroom) => (
            <Grid key={showroom.id} xs={12} sm={6} md={3}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                sx={{
                  borderRadius: 0,
                  bgcolor: 'background.paper',
                  border: `2px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
                  '&:hover': { borderColor: SOFA7_COLORS.electric, transition: 'border-color 0.3s' },
                  overflow: 'hidden',
                  height: 1,
                }}
              >
                <Box sx={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                  <Box component="img" src={showroom.image} alt={showroom.name} sx={{ width: 1, height: 1, objectFit: 'cover', '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.4s' } }} />
                </Box>
                <Stack spacing={2} sx={{ p: 3, height: 1 }}>
                  <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
                    {showroom.name}
                  </Typography>
                  <Stack spacing={1}>
                    <Stack direction="row" spacing={1} alignItems="flex-start">
                      <Iconify icon="solar:map-point-bold-duotone" width={18} sx={{ color: SOFA7_COLORS.electric, flexShrink: 0, mt: 0.3 }} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{showroom.address}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Iconify icon="solar:phone-bold-duotone" width={18} sx={{ color: SOFA7_COLORS.electric, flexShrink: 0 }} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{showroom.phone}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Iconify icon="solar:clock-circle-bold-duotone" width={18} sx={{ color: SOFA7_COLORS.electric, flexShrink: 0 }} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{showroom.hours}</Typography>
                    </Stack>
                  </Stack>
                  <Stack spacing={1} sx={{ mt: 'auto' }}>
                    <Button component={RouterLink} href="/sofa7/showrooms/visit" variant="contained" fullWidth sx={{ borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, fontWeight: 'fontWeightBold', textTransform: 'uppercase', '&:hover': { bgcolor: SOFA7_COLORS.cyan, color: SOFA7_COLORS.concrete } }} startIcon={<Iconify icon="solar:calendar-bold-duotone" />}>
                      Đặt lịch tham quan
                    </Button>
                    <Button component={RouterLink} href="/sofa7/showrooms/consult" variant="outlined" fullWidth sx={{ borderRadius: 0, borderColor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.concrete, fontWeight: 'fontWeightBold', textTransform: 'uppercase', '&:hover': { borderColor: SOFA7_COLORS.electric, color: SOFA7_COLORS.electric, bgcolor: 'transparent' } }} startIcon={<Iconify icon="solar:chat-square-bold-duotone" />}>
                      Đặt lịch tư vấn
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa7Section>
    </>
  );
}
