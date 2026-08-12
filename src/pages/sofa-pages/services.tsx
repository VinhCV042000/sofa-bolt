import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport, MotionContainer } from 'src/components/animate';

import {
  SOFA_SERVICES,
  SOFA_PAGE_IMAGES,
} from 'src/sections/sofa/pages/sofa-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Dịch vụ sofa chuyên nghiệp' };

const PROCESS = [
  { icon: 'solar:phone-bold-duotone', title: 'Tiếp nhận yêu cầu', desc: 'Liên hệ qua hotline hoặc đặt lịch online.' },
  { icon: 'solar:clipboard-check-bold-duotone', title: 'Khảo sát & báo giá', desc: 'Chuyên gia đến tận nơi đánh giá.' },
  { icon: 'solar:hammer-bold-duotone', title: 'Thực hiện dịch vụ', desc: 'Nghệ nhân xử lý với máy móc chuyên dụng.' },
  { icon: 'solar:check-circle-bold-duotone', title: 'Bàn giao & bảo hành', desc: 'Kiểm tra chất lượng, cấp phiếu bảo hành.' },
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
            backgroundImage: `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.78)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.56)}), url(${SOFA_PAGE_IMAGES.service1})`,
          }}
        />
        <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9 }}>
          <Stack spacing={3} sx={{ maxWidth: 720 }}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="overline" sx={{ color: 'primary.light', letterSpacing: 3 }}>Dịch vụ</Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="h1" sx={{ fontSize: { xs: 36, md: 56 }, lineHeight: 1.15 }}>
                Dịch Vụ Của
                <Box component="span" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.light}, ${theme.vars.palette.warning.light}`) }}> Casa Sofa</Box>
              </Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.72), maxWidth: 560 }}>
                Trọn gói dịch vụ sofa từ thiết kế, sửa chữa đến giặt sạch và tư vấn nội thất — chăm
                sóc chiếc sofa của bạn như chăm sóc một tác phẩm nghệ thuật.
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Services grid */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={3}>
            {SOFA_SERVICES.map((service) => (
              <Grid key={service.id} xs={12} sm={6} md={3}>
                <Stack
                  component={m.div}
                  variants={varFade({ distance: 24 }).inUp}
                  spacing={2}
                  sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, transition: (t) => t.transitions.create(['transform'], { duration: 300 }), '&:hover': { transform: 'translateY(-6px)' } }}
                >
                  <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: 'primary.main' }}>
                    <Iconify icon={service.icon} width={28} />
                  </Box>
                  <Typography variant="h6">{service.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', flex: 1 }}>{service.short}</Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <Iconify icon="solar:wallet-bold-duotone" width={16} sx={{ color: 'text.disabled' }} />
                      <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 'fontWeightBold' }}>{service.price}</Typography>
                    </Stack>
                  </Stack>
                  <Stack direction="row" spacing={0.5} alignItems="center">
                    <Iconify icon="solar:clock-circle-bold-duotone" width={16} sx={{ color: 'text.disabled' }} />
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>{service.duration}</Typography>
                  </Stack>
                  <Button component={RouterLink} href={`/services/${service.id}`} size="small" endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>
                    Xem chi tiết
                  </Button>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Process */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
        <Container component={MotionViewport}>
          <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>Quy trình</Typography>
            <Typography variant="h2">
              Bốn bước
              <Box component="span" sx={{ opacity: 0.4 }}> đơn giản</Box>
            </Typography>
          </Stack>
          <Grid container spacing={3}>
            {PROCESS.map((step, index) => (
              <Grid key={step.title} xs={12} sm={6} md={3}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ position: 'relative', p: 3 }}>
                  <Box sx={{ width: 72, height: 72, display: 'flex', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: 'primary.main', position: 'relative' }}>
                    <Iconify icon={step.icon} width={32} />
                    <Box sx={{ top: -8, right: -8, width: 28, height: 28, display: 'flex', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', bgcolor: 'primary.main', color: 'common.white', fontSize: 14, fontWeight: 'fontWeightBold', position: 'absolute' }}>
                      {index + 1}
                    </Box>
                  </Box>
                  <Typography variant="h6">{step.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{step.desc}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
            <Typography variant="h3">Sẵn sàng sử dụng dịch vụ?</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Đặt lịch online hoặc gọi hotline để được tư vấn miễn phí ngay hôm nay.</Typography>
            <Button component={RouterLink} href={paths.sofaBooking} size="large" variant="contained" color="primary" startIcon={<Iconify icon="solar:calendar-bold-duotone" />}>
              Đặt lịch ngay
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
