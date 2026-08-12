import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA6_COLORS } from 'src/sections/sofa6/sofa6-data';
import { Sofa6PageHero } from 'src/sections/sofa6-pages/sofa6-page-hero';
import { SOFA6_SHOWROOMS, SOFA6_PAGE_IMAGES } from 'src/sections/sofa6-pages/sofa6-pages-data';

const metadata = { title: 'Showroom - Sofa Earth' };

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa6PageHero overline="Showroom" title="Hệ thống showroom" subtitle="Trải nghiệm sofa tự nhiên tại 4 showroom trên toàn quốc." image={SOFA6_PAGE_IMAGES.contact} />

      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={3}>
            {SOFA6_SHOWROOMS.map((showroom, index) => (
              <Grid key={showroom.id} xs={12} sm={6} md={3}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: index * 0.08 }} sx={{ height: 1, borderRadius: 2, overflow: 'hidden', bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                  <Box component="img" src={showroom.image} alt={showroom.name} sx={{ width: 1, aspectRatio: '4/3', objectFit: 'cover' }} />
                  <Stack spacing={1.5} sx={{ p: 2.5 }}>
                    <Typography variant="subtitle1">{showroom.name}</Typography>
                    <Stack direction="row" spacing={1} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={18} sx={{ color: SOFA6_COLORS.terracotta }} /><Typography variant="body2" sx={{ color: 'text.secondary' }}>{showroom.address}</Typography></Stack>
                    <Stack direction="row" spacing={1} alignItems="center"><Iconify icon="solar:phone-bold-duotone" width={18} sx={{ color: SOFA6_COLORS.terracotta }} /><Typography variant="body2" sx={{ color: 'text.secondary' }}>{showroom.phone}</Typography></Stack>
                    <Stack direction="row" spacing={1} alignItems="center"><Iconify icon="solar:clock-circle-bold-duotone" width={18} sx={{ color: SOFA6_COLORS.terracotta }} /><Typography variant="body2" sx={{ color: 'text.secondary' }}>{showroom.hours}</Typography></Stack>
                    <Box component={RouterLink} href={`/sofa6/showrooms/${showroom.id}`} sx={{ textDecoration: 'none' }}>
                      <Typography variant="button" sx={{ color: SOFA6_COLORS.terracotta }}>Xem chi tiết →</Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
        <Container component={MotionViewport}>
          <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: 5 }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>Bản đồ showroom</Typography>
            <Typography variant="h4">Tìm showroom gần bạn nhất</Typography>
          </Stack>
          <Box sx={{ borderRadius: 3, overflow: 'hidden', height: 400, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.08), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Stack spacing={2} alignItems="center">
              <Iconify icon="solar:map-point-bold-duotone" width={64} sx={{ color: SOFA6_COLORS.terracotta }} />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>Bản đồ Google Maps tích hợp</Typography>
            </Stack>
          </Box>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ mt: 6, justifyContent: 'center' }}>
            <Button component={RouterLink} href="/sofa6/showrooms/visit" size="large" variant="contained" startIcon={<Iconify icon="solar:calendar-bold-duotone" />} sx={{ bgcolor: SOFA6_COLORS.terracotta, color: 'common.white', '&:hover': { bgcolor: SOFA6_COLORS.clay } }}>
              Đặt lịch tham quan
            </Button>
            <Button component={RouterLink} href="/sofa6/showrooms/consult" size="large" variant="outlined" startIcon={<Iconify icon="solar:phone-bold-duotone" />} sx={{ color: SOFA6_COLORS.sage, borderColor: SOFA6_COLORS.sage, '&:hover': { borderColor: SOFA6_COLORS.forest, bgcolor: varAlpha(SOFA6_COLORS.sage, 0.08) } }}>
              Đặt lịch tư vấn
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
