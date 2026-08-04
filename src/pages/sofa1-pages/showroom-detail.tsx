import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

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

import { Sofa1PageHero } from 'src/sections/sofa1-pages/sofa1-page-hero';
import { SOFA1_SHOWROOMS, SOFA1_PAGE_IMAGES } from 'src/sections/sofa1-pages/sofa1-pages-data';

// ----------------------------------------------------------------------

const GALLERY = [
  SOFA1_PAGE_IMAGES.showroom1,
  SOFA1_PAGE_IMAGES.showroom2,
  SOFA1_PAGE_IMAGES.showroom3,
  SOFA1_PAGE_IMAGES.showroom4,
];

export default function Page() {
  const { id = '' } = useParams();

  const showroom = SOFA1_SHOWROOMS.find((s) => s.id === id);

  if (!showroom) {
    return (
      <>
        <Helmet>
          <title>Không tìm thấy showroom - Casa Sofa</title>
        </Helmet>
        <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 20 }}>
          <Iconify icon="solar:map-point-cross-bold-duotone" width={72} sx={{ color: 'text.disabled' }} />
          <Typography variant="h4">Không tìm thấy showroom</Typography>
          <Button component={RouterLink} href="/sofa1/showrooms" variant="contained">
            Quay lại danh sách
          </Button>
        </Stack>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{showroom.name} - Casa Sofa</title>
      </Helmet>

      <Sofa1PageHero overline="Showroom" title={showroom.name} subtitle={showroom.address} image={showroom.image} />

      {/* Info */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={{ xs: 5, md: 8 }}>
            <Grid xs={12} md={6}>
              <Box
                component={m.img}
                variants={varFade({ distance: 24 }).inLeft}
                src={showroom.image}
                alt={showroom.name}
                sx={{ width: 1, borderRadius: 2, aspectRatio: '4/3', objectFit: 'cover' }}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
                <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                  Thông tin showroom
                </Typography>
                <Typography variant="h2">{showroom.name}</Typography>
                <Stack spacing={2}>
                  <Stack direction="row" spacing={1.5} alignItems="flex-start">
                    <Iconify icon="solar:map-point-bold-duotone" width={22} sx={{ color: 'primary.main', mt: 0.25 }} />
                    <Box>
                      <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                        Địa chỉ
                      </Typography>
                      <Typography>{showroom.address}</Typography>
                    </Box>
                  </Stack>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Iconify icon="solar:phone-bold-duotone" width={22} sx={{ color: 'primary.main' }} />
                    <Box>
                      <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                        Điện thoại
                      </Typography>
                      <Typography>{showroom.phone}</Typography>
                    </Box>
                  </Stack>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Iconify icon="solar:clock-circle-bold-duotone" width={22} sx={{ color: 'primary.main' }} />
                    <Box>
                      <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                        Giờ mở cửa
                      </Typography>
                      <Typography>{showroom.hours}</Typography>
                    </Box>
                  </Stack>
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 2 }}>
                  <Button
                    component={RouterLink}
                    href="/sofa1/showrooms/visit"
                    variant="contained"
                    size="large"
                    startIcon={<Iconify icon="solar:calendar-bold-duotone" />}
                  >
                    Đặt lịch tham quan
                  </Button>
                  <Button
                    component={RouterLink}
                    href="/sofa1/showrooms/consult"
                    variant="outlined"
                    size="large"
                    startIcon={<Iconify icon="solar:chat-square-bold-duotone" />}
                  >
                    Đặt lịch tư vấn
                  </Button>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Map placeholder */}
      <Box
        component="section"
        sx={{ py: { xs: 8, md: 12 }, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}
      >
        <Container component={MotionViewport}>
          <Stack spacing={2} sx={{ mb: 4 }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              Vị trí
            </Typography>
            <Typography variant="h3">Bản đồ đến showroom</Typography>
          </Stack>
          <Box
            component={m.div}
            variants={varFade({ distance: 24 }).inUp}
            sx={{
              height: 360,
              borderRadius: 3,
              bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.16),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Stack spacing={1} alignItems="center">
              <Iconify icon="solar:map-bold-duotone" width={48} sx={{ color: 'text.disabled' }} />
              <Typography sx={{ color: 'text.disabled' }}>Bản đồ {showroom.name}</Typography>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Gallery */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Stack spacing={2} sx={{ mb: 4 }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              Không gian
            </Typography>
            <Typography variant="h3">Gallery showroom</Typography>
          </Stack>
          <Grid container spacing={2}>
            {GALLERY.map((src, idx) => (
              <Grid key={idx} xs={6} sm={3}>
                <Box
                  component={m.img}
                  variants={varFade({ distance: 24 }).inUp}
                  src={src}
                  alt={`${showroom.name} ${idx + 1}`}
                  sx={{ width: 1, borderRadius: 2, aspectRatio: '1/1', objectFit: 'cover' }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
