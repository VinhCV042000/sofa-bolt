import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

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
} from 'src/sections/sofa/pages/sofa-pages-data';

// ----------------------------------------------------------------------

const INCLUDED = [
  'Khảo sát và đo đạc miễn phí tận nơi',
  'Tư vấn chất liệu và phong cách phù hợp',
  'Báo giá chi tiết minh bạch',
  'Thực hiện dịch vụ bởi nghệ nhân lành nghề',
  'Kiểm tra chất lượng sau khi hoàn thành',
  'Phiếu bảo hành chính hãng',
];

export default function Page() {
  const theme = useTheme();
  const { id } = useParams();
  const service = SOFA_SERVICES.find((item) => item.id === id);

  if (!service) {
    return (
      <>
        <Helmet><title>Không tìm thấy dịch vụ - Casa Sofa</title></Helmet>
        <Container sx={{ py: { xs: 10, md: 16 }, textAlign: 'center' }}>
          <Stack spacing={3} alignItems="center">
            <Iconify icon="solar:question-circle-bold-duotone" width={80} sx={{ color: 'text.disabled' }} />
            <Typography variant="h3">Không tìm thấy dịch vụ</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Dịch vụ bạn tìm kiếm không tồn tại hoặc đã bị gỡ.</Typography>
            <Button component={RouterLink} href={paths.sofaServices} variant="contained" startIcon={<Iconify icon="eva:arrow-back-fill" />}>
              Quay lại danh sách dịch vụ
            </Button>
          </Stack>
        </Container>
      </>
    );
  }

  const related = SOFA_SERVICES.filter((item) => item.id !== service.id).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{`${service.title} - Casa Sofa`}</title>
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
            backgroundImage: `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.78)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.56)}), url(${service.image})`,
          }}
        />
        <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid xs={12} md={8}>
              <Stack spacing={3}>
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Typography variant="overline" sx={{ color: 'primary.light', letterSpacing: 3 }}>Chi tiết dịch vụ</Typography>
                </Box>
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Typography variant="h1" sx={{ fontSize: { xs: 34, md: 52 }, lineHeight: 1.15 }}>
                    <Box component="span" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.light}, ${theme.vars.palette.warning.light}`) }}>
                      {service.title}
                    </Box>
                  </Typography>
                </Box>
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.72), maxWidth: 560 }}>
                    {service.short}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid xs={12} md={4}>
              <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: 4, borderRadius: 2, bgcolor: varAlpha(theme.vars.palette.common.whiteChannel, 0.1), backdropFilter: 'blur(8px)' }}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="overline" sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.6) }}>Giá</Typography>
                  <Typography variant="h5" sx={{ color: 'warning.light', fontWeight: 'fontWeightBold' }}>{service.price}</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="overline" sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.6) }}>Thời gian</Typography>
                  <Typography variant="subtitle1">{service.duration}</Typography>
                </Stack>
                <Button component={RouterLink} href={paths.sofaBooking} variant="contained" color="warning" fullWidth startIcon={<Iconify icon="solar:calendar-bold-duotone" />}>
                  Đặt lịch ngay
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Description */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={{ xs: 5, md: 8 }}>
            <Grid xs={12} md={7}>
              <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography variant="overline" sx={{ color: 'text.disabled' }}>Mô tả chi tiết</Typography>
                <Typography variant="h3">{service.title}</Typography>
                <Typography sx={{ color: 'text.secondary' }}>{service.description}</Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  Đội ngũ nghệ nhân của Casa Sofa với hơn 12 năm kinh nghiệm cam kết mang đến chất
                  lượng dịch vụ tốt nhất. Mọi quy trình đều tuân thủ tiêu chuẩn khắt khe để đảm bảo
                  sự hài lòng tuyệt đối của khách hàng.
                </Typography>
              </Stack>
            </Grid>
            <Grid xs={12} md={5}>
              <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: 4, borderRadius: 2, bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.04) }}>
                <Typography variant="h6">Dịch vụ bao gồm</Typography>
                {INCLUDED.map((item) => (
                  <Stack key={item} direction="row" spacing={1.5} alignItems="flex-start">
                    <Iconify icon="eva:checkmark-circle-2-fill" sx={{ color: 'primary.main', mt: 0.25 }} width={20} />
                    <Typography variant="body2">{item}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Related */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
        <Container component={MotionViewport}>
          <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 } }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>Dịch vụ liên quan</Typography>
            <Typography variant="h2">Khám phá thêm</Typography>
          </Stack>
          <Grid container spacing={3}>
            {related.map((item) => (
              <Grid key={item.id} xs={12} sm={6} md={4}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                  <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: 'primary.main' }}>
                    <Iconify icon={item.icon} width={28} />
                  </Box>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', flex: 1 }}>{item.short}</Typography>
                  <Button component={RouterLink} href={`/services/${item.id}`} size="small" endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>Xem chi tiết</Button>
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
            <Typography variant="h3">Quan tâm đến dịch vụ này?</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Đặt lịch ngay hôm nay để nhận tư vấn miễn phí từ chuyên gia.</Typography>
            <Button component={RouterLink} href={paths.sofaBooking} size="large" variant="contained" color="primary" startIcon={<Iconify icon="solar:calendar-bold-duotone" />}>
              Đặt lịch dịch vụ
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
