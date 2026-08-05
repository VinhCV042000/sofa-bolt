import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import { m } from 'framer-motion';

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

import { Sofa6PageHero, Sofa6Section } from 'src/sections/sofa6-pages/sofa6-page-hero';
import { SOFA6_SHOWROOMS, SOFA6_PAGE_IMAGES } from 'src/sections/sofa6-pages/sofa6-pages-data';
import { SOFA6_COLORS } from 'src/sections/sofa6/sofa6-data';

const metadata = { title: 'Chi tiết showroom - Sofa Earth' };

export default function Page() {
  const { id } = useParams();
  const showroom = SOFA6_SHOWROOMS.find((s) => s.id === id);

  if (!showroom) {
    return (
      <>
        <Helmet>
          <title>{metadata.title}</title>
        </Helmet>
        <Sofa6PageHero overline="Showroom" title="Không tìm thấy showroom" subtitle="Showroom bạn tìm không tồn tại." image={SOFA6_PAGE_IMAGES.contact} />
        <Sofa6Section>
          <Stack spacing={2} alignItems="center" sx={{ py: 8, textAlign: 'center' }} component={MotionViewport}>
            <Iconify icon="solar:map-point-bold-duotone" width={64} sx={{ color: 'text.disabled' }} />
            <Typography variant="h6" sx={{ color: 'text.secondary' }}>Showroom không tồn tại</Typography>
            <Button component={RouterLink} href="/sofa6/showrooms" variant="outlined" sx={{ color: SOFA6_COLORS.terracotta, borderColor: SOFA6_COLORS.terracotta }}>Xem tất cả showroom</Button>
          </Stack>
        </Sofa6Section>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa6PageHero overline="Showroom" title={showroom.name} subtitle={showroom.address} image={showroom.image} />

      <Sofa6Section>
        <Grid container spacing={{ xs: 4, md: 6 }} component={MotionViewport}>
          <Grid xs={12} md={6}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inLeft} sx={{ overflow: 'hidden', borderRadius: 3 }}>
              <Box component="img" src={showroom.image} alt={showroom.name} sx={{ width: 1, aspectRatio: '4/3', objectFit: 'cover' }} />
            </Box>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              {[SOFA6_PAGE_IMAGES.showroom2, SOFA6_PAGE_IMAGES.showroom3, SOFA6_PAGE_IMAGES.showroom4].map((img, i) => (
                <Grid key={i} xs={4}>
                  <Box component="img" src={img} alt={`${showroom.name} ${i + 1}`} sx={{ width: 1, borderRadius: 2, aspectRatio: '4/3', objectFit: 'cover' }} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Typography variant="h5">Thông tin showroom</Typography>
              <Stack spacing={1.5}>
                <Stack direction="row" spacing={1} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={20} sx={{ color: SOFA6_COLORS.terracotta }} /><Typography variant="body2" sx={{ color: 'text.secondary' }}>{showroom.address}</Typography></Stack>
                <Stack direction="row" spacing={1} alignItems="center"><Iconify icon="solar:phone-bold-duotone" width={20} sx={{ color: SOFA6_COLORS.terracotta }} /><Typography variant="body2" sx={{ color: 'text.secondary' }}>{showroom.phone}</Typography></Stack>
                <Stack direction="row" spacing={1} alignItems="center"><Iconify icon="solar:clock-circle-bold-duotone" width={20} sx={{ color: SOFA6_COLORS.terracotta }} /><Typography variant="body2" sx={{ color: 'text.secondary' }}>Lịch mở cửa: {showroom.hours}</Typography></Stack>
              </Stack>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Showroom {showroom.name} trưng bày các mẫu sofa tự nhiên từ linen, bông hữu cơ, wool.
                Đội ngũ tư vấn chuyên nghiệp sẵn sàng hỗ trợ bạn chọn sofa phù hợp với không gian sống xanh.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button component={RouterLink} href="/sofa6/showrooms/visit" variant="contained" startIcon={<Iconify icon="solar:calendar-bold-duotone" />} sx={{ bgcolor: SOFA6_COLORS.terracotta, color: 'common.white', '&:hover': { bgcolor: SOFA6_COLORS.clay } }}>
                  Đặt lịch tham quan
                </Button>
                <Button component={RouterLink} href="/sofa6/showrooms/consult" variant="outlined" startIcon={<Iconify icon="solar:phone-bold-duotone" />} sx={{ color: SOFA6_COLORS.sage, borderColor: SOFA6_COLORS.sage, '&:hover': { borderColor: SOFA6_COLORS.forest, bgcolor: varAlpha(SOFA6_COLORS.sage, 0.08) } }}>
                  Đặt lịch tư vấn
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Sofa6Section>

      <Sofa6Section bg="grey">
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: 5 }} component={MotionViewport}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>Bản đồ</Typography>
          <Typography variant="h4">Vị trí showroom</Typography>
        </Stack>
        <Box sx={{ borderRadius: 3, overflow: 'hidden', height: 400, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.08), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Stack spacing={2} alignItems="center">
            <Iconify icon="solar:map-point-bold-duotone" width={64} sx={{ color: SOFA6_COLORS.terracotta }} />
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Bản đồ Google Maps — {showroom.lat}, {showroom.lng}</Typography>
          </Stack>
        </Box>
      </Sofa6Section>
    </>
  );
}
