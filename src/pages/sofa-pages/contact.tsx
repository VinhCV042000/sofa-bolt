import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport, MotionContainer } from 'src/components/animate';

import {
  SOFA_PAGE_IMAGES,
} from 'src/sections/sofa/pages/sofa-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Liên hệ Casa Sofa' };

const INFO = [
  { icon: 'solar:phone-bold-duotone', label: 'Hotline', value: '1900 6789', sub: 'Hỗ trợ 8:00 - 20:00' },
  { icon: 'solar:letter-bold-duotone', label: 'Email', value: 'lienhe@casasofa.vn', sub: 'Phản hồi trong 24h' },
  { icon: 'solar:map-point-bold-duotone', label: 'Showroom', value: '88 Lê Lợi, Quận 1, TP.HCM', sub: 'Mở cửa cả tuần' },
  { icon: 'solar:clock-circle-bold-duotone', label: 'Giờ làm việc', value: '8:00 - 20:00', sub: 'Thứ 2 - Chủ nhật' },
];

const SOCIALS = [
  { icon: 'solar:facebook-bold-duotone', label: 'Facebook' },
  { icon: 'solar:instagram-bold-duotone', label: 'Instagram' },
  { icon: 'solar:youtube-bold-duotone', label: 'YouTube' },
  { icon: 'solar:chat-bold-duotone', label: 'Zalo' },
];

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      {/* Hero */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          py: { xs: 10, md: 16 },
          color: 'common.white',
          mt: 'calc(var(--layout-header-desktop-height) * -1)',
          pt: 'calc(var(--layout-header-desktop-height) + 40px)',
        }}
      >
        <Box
          sx={{
            inset: 0,
            position: 'absolute',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.78)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.56)}), url(${SOFA_PAGE_IMAGES.cta})`,
          }}
        />
        <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9 }}>
          <Stack spacing={3} sx={{ maxWidth: 720 }}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="overline" sx={{ color: 'primary.light', letterSpacing: 3 }}>Liên hệ</Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="h1" sx={{ fontSize: { xs: 36, md: 56 }, lineHeight: 1.15 }}>
                Liên Hệ
                <Box component="span" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.light}, ${theme.vars.palette.warning.light}`) }}> Casa Sofa</Box>
              </Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.72), maxWidth: 560 }}>
                Chúng tôi luôn sẵn sàng lắng nghe — liên hệ qua hotline, email hoặc đến trực tiếp
                showroom để được tư vấn tận tâm.
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Info cards */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={3}>
            {INFO.map((item) => (
              <Grid key={item.label} xs={12} sm={6} md={3}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                  <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: 'primary.main' }}>
                    <Iconify icon={item.icon} width={28} />
                  </Box>
                  <Typography variant="overline" sx={{ color: 'text.disabled' }}>{item.label}</Typography>
                  <Typography variant="h6">{item.value}</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>{item.sub}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Form + Map */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
        <Container component={MotionViewport}>
          <Grid container spacing={{ xs: 4, md: 6 }}>
            <Grid xs={12} md={6}>
              <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inLeft} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                <Typography variant="h5">Gửi tin nhắn cho chúng tôi</Typography>
                <Grid container spacing={2}>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Email" type="email" /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Chủ đề" /></Grid>
                  <Grid xs={12}><TextField fullWidth label="Nội dung" multiline rows={4} /></Grid>
                </Grid>
                <Button variant="contained" size="large" startIcon={<Iconify icon="solar:letter-bold-duotone" />} sx={{ width: 'fit-content' }}>
                  Gửi tin nhắn
                </Button>
              </Stack>
            </Grid>
            <Grid xs={12} md={6}>
              <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
                <Box
                  sx={{
                    borderRadius: 2,
                    overflow: 'hidden',
                    aspectRatio: '4/5',
                    bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.12),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: 2,
                  }}
                >
                  <Iconify icon="solar:map-point-bold-duotone" width={64} sx={{ color: 'primary.main' }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Bản đồ Google Maps</Typography>
                  <Typography variant="caption" sx={{ color: 'text.disabled' }}>88 Lê Lợi, Quận 1, TP.HCM</Typography>
                </Box>
                <Stack direction="row" spacing={2}>
                  {SOCIALS.map((s) => (
                    <Button key={s.label} variant="soft" color="primary" sx={{ minWidth: 'auto', px: 1.5 }}>
                      <Iconify icon={s.icon} width={24} />
                    </Button>
                  ))}
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
            <Typography variant="h3">Đặt lịch tư vấn miễn phí</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Chuyên gia Casa Sofa sẽ đến tận nhà đo đạc và tư vấn.</Typography>
            <Button component={RouterLink} href={paths.sofaBooking} size="large" variant="contained" color="primary" startIcon={<Iconify icon="solar:calendar-bold-duotone" />}>
              Đặt lịch ngay
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
