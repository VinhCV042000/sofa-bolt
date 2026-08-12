import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa3Section, Sofa3PageHero } from 'src/sections/sofa3-pages/sofa3-page-hero';
import { SOFA3_SHOWROOMS, SOFA3_PAGE_IMAGES } from 'src/sections/sofa3-pages/sofa3-pages-data';

const metadata = { title: 'Chi tiết showroom - Sofa Terra' };

export default function Page() {
  const { id } = useParams();
  const showroom = SOFA3_SHOWROOMS.find((s) => s.id === id) || SOFA3_SHOWROOMS[0];

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa3PageHero overline="Showroom" title={showroom.name} subtitle={showroom.address} image={showroom.image} />

      <Sofa3Section>
        <Grid container spacing={{ xs: 4, md: 6 }} component={MotionViewport}>
          <Grid xs={12} md={6}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inLeft} sx={{ overflow: 'hidden', borderRadius: 3 }}>
              <Box component="img" src={showroom.image} alt={showroom.name} sx={{ width: 1, aspectRatio: '4/3', objectFit: 'cover' }} />
            </Box>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              {[SOFA3_PAGE_IMAGES.showroom2, SOFA3_PAGE_IMAGES.showroom3, SOFA3_PAGE_IMAGES.showroom4].map((img, i) => (
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
                <Stack direction="row" spacing={1} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={20} sx={{ color: 'success.main' }} /><Typography variant="body2" sx={{ color: 'text.secondary' }}>{showroom.address}</Typography></Stack>
                <Stack direction="row" spacing={1} alignItems="center"><Iconify icon="solar:phone-bold-duotone" width={20} sx={{ color: 'success.main' }} /><Typography variant="body2" sx={{ color: 'text.secondary' }}>{showroom.phone}</Typography></Stack>
                <Stack direction="row" spacing={1} alignItems="center"><Iconify icon="solar:clock-circle-bold-duotone" width={20} sx={{ color: 'success.main' }} /><Typography variant="body2" sx={{ color: 'text.secondary' }}>Lịch mở cửa: {showroom.hours}</Typography></Stack>
              </Stack>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Showroom {showroom.name} trưng bày hơn 60 mẫu sofa eco-living. Đội ngũ tư vấn chuyên nghiệp
                sẵn sàng hỗ trợ bạn chọn sofa phù hợp với không gian sống xanh.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Sofa3Section>
    </>
  );
}
