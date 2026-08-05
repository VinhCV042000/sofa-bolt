import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA7_COLORS } from 'src/sections/sofa7/sofa7-data';
import { Sofa7PageHero, Sofa7Section } from 'src/sections/sofa7-pages/sofa7-page-hero';
import { SOFA7_PAGE_SHOWROOMS } from 'src/sections/sofa7-pages/sofa7-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Showroom — Sofa7' };

export default function Page() {
  const theme = useTheme();
  const { id } = useParams();

  const showroom = SOFA7_PAGE_SHOWROOMS.find((s) => s.id === id);

  if (!showroom) {
    return (
      <>
        <Helmet>
          <title>{metadata.title}</title>
        </Helmet>
        <Sofa7Section>
          <Stack spacing={4} alignItems="center" sx={{ textAlign: 'center', py: { xs: 10, md: 16 } }}>
            <Iconify icon="solar:danger-bold-duotone" width={64} sx={{ color: SOFA7_COLORS.red }} />
            <Typography variant="h3" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
              SHOWROOM KHÔNG TỒN TẠI
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Showroom bạn tìm kiếm không tồn tại.</Typography>
            <Button component={RouterLink} href="/sofa7/showrooms" size="large" variant="contained" sx={{ borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, fontWeight: 'fontWeightBold', '&:hover': { bgcolor: SOFA7_COLORS.cyan } }} startIcon={<Iconify icon="solar:arrow-left-bold-duotone" />}>
              VỀ TRANG SHOWROOM
            </Button>
          </Stack>
        </Sofa7Section>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`Sofa7 — ${showroom.name}`}</title>
      </Helmet>

      <Sofa7PageHero
        overline="SHOWROOM"
        title={
          <>
            {showroom.name.toUpperCase().split(' ').slice(0, -1).join(' ')}{' '}
            <span>{showroom.name.toUpperCase().split(' ').slice(-1)}</span>
          </>
        }
        subtitle={`${showroom.address} · ${showroom.phone}`}
        image={showroom.image}
      />

      <Sofa7Section>
        <Grid container spacing={{ xs: 5, md: 8 }}>
          {/* Info */}
          <Grid xs={12} md={6}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Box sx={{ width: 8, height: 40, bgcolor: SOFA7_COLORS.electric }} />
                <Typography variant="overline" sx={{ color: SOFA7_COLORS.electric, letterSpacing: 4, fontWeight: 'fontWeightBold' }}>
                  THÔNG TIN SHOWROOM
                </Typography>
              </Stack>
              <Typography variant="h3" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
                {showroom.name}
              </Typography>

              <Stack spacing={2.5}>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Box sx={{ width: 48, height: 48, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.electric, flexShrink: 0 }}>
                    <Iconify icon="solar:map-point-bold-duotone" width={24} />
                  </Box>
                  <Stack spacing={0.5}>
                    <Typography variant="overline" sx={{ color: 'text.disabled', letterSpacing: 2 }}>ĐỊA CHỈ</Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>{showroom.address}</Typography>
                  </Stack>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Box sx={{ width: 48, height: 48, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.electric, flexShrink: 0 }}>
                    <Iconify icon="solar:phone-bold-duotone" width={24} />
                  </Box>
                  <Stack spacing={0.5}>
                    <Typography variant="overline" sx={{ color: 'text.disabled', letterSpacing: 2 }}>ĐIỆN THOẠI</Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>{showroom.phone}</Typography>
                  </Stack>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Box sx={{ width: 48, height: 48, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.electric, flexShrink: 0 }}>
                    <Iconify icon="solar:clock-circle-bold-duotone" width={24} />
                  </Box>
                  <Stack spacing={0.5}>
                    <Typography variant="overline" sx={{ color: 'text.disabled', letterSpacing: 2 }}>GIỜ MỞ CỬA</Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>{showroom.hours}</Typography>
                  </Stack>
                </Stack>
              </Stack>

              <Stack direction="row" spacing={2} flexWrap="wrap">
                <Button component={RouterLink} href="/sofa7/showrooms/visit" variant="contained" size="large" sx={{ borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, fontWeight: 'fontWeightBold', textTransform: 'uppercase', '&:hover': { bgcolor: SOFA7_COLORS.cyan, color: SOFA7_COLORS.concrete } }} startIcon={<Iconify icon="solar:calendar-bold-duotone" />}>
                  Đặt lịch tham quan
                </Button>
                <Button component={RouterLink} href="/sofa7/showrooms/consult" variant="outlined" size="large" sx={{ borderRadius: 0, borderColor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.concrete, fontWeight: 'fontWeightBold', textTransform: 'uppercase', '&:hover': { borderColor: SOFA7_COLORS.electric, color: SOFA7_COLORS.electric, bgcolor: 'transparent' } }} startIcon={<Iconify icon="solar:chat-square-bold-duotone" />}>
                  Đặt lịch tư vấn
                </Button>
              </Stack>
            </Stack>
          </Grid>

          {/* Map placeholder */}
          <Grid xs={12} md={6}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Stack sx={{ height: 1, minHeight: 400, borderRadius: 0, bgcolor: SOFA7_COLORS.concrete, border: `2px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`, position: 'relative', overflow: 'hidden' }}>
                <Box sx={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: `repeating-linear-gradient(0deg, ${SOFA7_COLORS.electric} 0, ${SOFA7_COLORS.electric} 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, ${SOFA7_COLORS.electric} 0, ${SOFA7_COLORS.electric} 1px, transparent 1px, transparent 40px)` }} />
                <Stack spacing={3} alignItems="center" justifyContent="center" sx={{ position: 'relative', zIndex: 1, height: 1, textAlign: 'center', p: 4 }}>
                  <Box sx={{ width: 80, height: 80, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete }}>
                    <Iconify icon="solar:map-point-bold-duotone" width={40} />
                  </Box>
                  <Typography variant="h5" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily, color: 'common.white' }}>
                    BẢN ĐỒ
                  </Typography>
                  <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.6) }}>
                    {showroom.address}
                  </Typography>
                  <Typography variant="caption" sx={{ color: SOFA7_COLORS.electric, textTransform: 'uppercase', letterSpacing: 2 }}>
                    {showroom.lat}, {showroom.lng}
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Sofa7Section>

      {/* Back */}
      <Sofa7Section bg="grey" py={{ xs: 6, md: 8 }}>
        <Stack direction="row" justifyContent="center">
          <Button component={RouterLink} href="/sofa7/showrooms" size="large" variant="outlined" sx={{ borderRadius: 0, borderColor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.concrete, fontWeight: 'fontWeightBold', '&:hover': { borderColor: SOFA7_COLORS.electric, color: SOFA7_COLORS.electric, bgcolor: 'transparent' } }} startIcon={<Iconify icon="solar:arrow-left-bold-duotone" />}>
            VỀ TRANG SHOWROOM
          </Button>
        </Stack>
      </Sofa7Section>
    </>
  );
}
