import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';
import { SOFA2_SHOWROOMS } from 'src/sections/sofa2/sofa2-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Showroom - LUXE Sofa' };

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa2PageHero
        overline="Showroom"
        title={(
          <>
            Hệ thống
            <Box component="span" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.light}, ${theme.vars.palette.warning.light}`) }}>
              {' '}showroom toàn quốc
            </Box>
          </>
        )}
        subtitle="Trải nghiệm trực tiếp chất lượng sofa LUXE tại 4 showroom lớn. Đặt lịch tham quan hoặc tư vấn miễn phí ngay hôm nay."
        image="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* Showroom grid */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={4}>
            {SOFA2_SHOWROOMS.map((sr) => (
              <Grid key={sr.id} xs={12} sm={6} md={3}>
                <Stack
                  component={m.div}
                  variants={varFade({ distance: 24 }).inUp}
                  sx={{ height: 1, borderRadius: 2, overflow: 'hidden', bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
                >
                  <Box component="img" src={sr.image} alt={sr.name} sx={{ width: 1, aspectRatio: '4/3', objectFit: 'cover' }} />
                  <Stack spacing={1.5} sx={{ p: 3 }}>
                    <Typography variant="h6">{sr.name}</Typography>
                    <Stack direction="row" spacing={1} alignItems="flex-start">
                      <Iconify icon="solar:map-point-bold-duotone" width={18} sx={{ color: 'primary.main', mt: 0.25 }} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{sr.address}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Iconify icon="solar:phone-bold-duotone" width={18} sx={{ color: 'primary.main' }} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{sr.phone}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Iconify icon="solar:clock-circle-bold-duotone" width={18} sx={{ color: 'primary.main' }} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{sr.hours}</Typography>
                    </Stack>
                    <Button component={RouterLink} href={`/sofa2/showrooms/${sr.id}`} variant="outlined" size="small" startIcon={<Iconify icon="solar:eye-bold-duotone" />} sx={{ mt: 1 }}>
                      Xem chi tiết
                    </Button>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Map placeholder */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
        <Container component={MotionViewport}>
          <Stack spacing={2} sx={{ mb: 5, textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>Bản đồ</Typography>
            <Typography variant="h3">
              Tìm showroom
              <Box component="span" sx={{ opacity: 0.4 }}> gần bạn nhất</Box>
            </Typography>
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
              <Typography sx={{ color: 'text.disabled' }}>Bản đồ hệ thống showroom</Typography>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Booking CTA */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} justifyContent="center">
            <Button component={RouterLink} href="/sofa2/showrooms/visit" size="large" variant="contained" startIcon={<Iconify icon="solar:calendar-bold-duotone" />}>
              Đặt lịch tham quan
            </Button>
            <Button component={RouterLink} href="/sofa2/showrooms/consult" size="large" variant="outlined" startIcon={<Iconify icon="solar:chat-square-bold-duotone" />}>
              Đặt lịch tư vấn
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
