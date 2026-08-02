import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
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
  SOFA_BEFORE_AFTER,
  SOFA_PAGE_IMAGES,
} from 'src/sections/sofa/pages/sofa-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Kết quả trước sau sofa' };

const STATS = [
  { value: '500+', label: 'Dự án hoàn thành', icon: 'solar:check-circle-bold-duotone' },
  { value: '98%', label: 'Khách hài lòng', icon: 'solar:like-bold-duotone' },
  { value: '12 năm', label: 'Kinh nghiệm', icon: 'solar:medal-ribbon-star-bold-duotone' },
  { value: '4.9/5', label: 'Đánh giá', icon: 'solar:star-bold-duotone' },
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
            backgroundImage: `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.78)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.56)}), url(${SOFA_PAGE_IMAGES.after1})`,
          }}
        />
        <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9 }}>
          <Stack spacing={3} sx={{ maxWidth: 720 }}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="overline" sx={{ color: 'primary.light', letterSpacing: 3 }}>Trước & sau</Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="h1" sx={{ fontSize: { xs: 36, md: 56 }, lineHeight: 1.15 }}>
                Kết Quả
                <Box component="span" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.light}, ${theme.vars.palette.warning.light}`) }}> Trước &amp; Sau</Box>
              </Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.72), maxWidth: 560 }}>
                Những dự án phục hồi và làm mới sofa thực tế — chứng nhận chất lượng chế tác và khả
                năng biến đổi kỳ diệu của nghệ nhân Casa Sofa.
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Before/After gallery */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Stack spacing={5}>
            {SOFA_BEFORE_AFTER.map((item) => (
              <Stack key={item.id} component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={3}>
                <Grid container spacing={3}>
                  <Grid xs={12} md={6}>
                    <Stack spacing={1}>
                      <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden' }}>
                        <Box component="img" src={item.before} alt={`${item.title} trước`} sx={{ width: 1, aspectRatio: '4/3', objectFit: 'cover' }} />
                        <Box sx={{ position: 'absolute', top: 12, left: 12, px: 1.5, py: 0.5, borderRadius: 1, bgcolor: 'grey.900', color: 'common.white' }}>
                          <Typography variant="caption" fontWeight="fontWeightBold">TRƯỚC</Typography>
                        </Box>
                      </Box>
                    </Stack>
                  </Grid>
                  <Grid xs={12} md={6}>
                    <Stack spacing={1}>
                      <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden' }}>
                        <Box component="img" src={item.after} alt={`${item.title} sau`} sx={{ width: 1, aspectRatio: '4/3', objectFit: 'cover' }} />
                        <Box sx={{ position: 'absolute', top: 12, left: 12, px: 1.5, py: 0.5, borderRadius: 1, bgcolor: 'success.main', color: 'common.white' }}>
                          <Typography variant="caption" fontWeight="fontWeightBold">SAU</Typography>
                        </Box>
                      </Box>
                    </Stack>
                  </Grid>
                </Grid>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="space-between" alignItems={{ sm: 'center' }}>
                  <Stack spacing={1} sx={{ flex: 1 }}>
                    <Typography variant="h5">{item.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.description}</Typography>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <Stack alignItems="center" sx={{ px: 2, py: 1, borderRadius: 1, bgcolor: (t) => varAlpha(t.vars.palette.warning.mainChannel, 0.08) }}>
                      <Typography variant="caption" sx={{ color: 'text.disabled' }}>Thời gian</Typography>
                      <Typography variant="subtitle2" sx={{ color: 'warning.main' }}>{item.duration}</Typography>
                    </Stack>
                    <Stack alignItems="center" sx={{ px: 2, py: 1, borderRadius: 1, bgcolor: (t) => varAlpha(t.vars.palette.success.mainChannel, 0.08) }}>
                      <Typography variant="caption" sx={{ color: 'text.disabled' }}>Chi phí</Typography>
                      <Typography variant="subtitle2" sx={{ color: 'success.main' }}>{item.cost}</Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Stats */}
      <Box component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
        <Container component={MotionViewport}>
          <Grid container spacing={3}>
            {STATS.map((s) => (
              <Grid key={s.label} xs={6} md={3}>
                <Stack spacing={1} alignItems="center" component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Iconify icon={s.icon} width={32} sx={{ color: 'primary.main' }} />
                  <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 'fontWeightBold' }}>{s.value}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>{s.label}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', p: { xs: 5, md: 8 }, borderRadius: 3, bgcolor: 'primary.main', color: 'common.white' }}>
            <Typography variant="h3">Sofa của bạn cũng cần làm mới?</Typography>
            <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.8) }}>Đặt lịch dịch vụ phục hồi và để nghệ nhân Casa Sofa biến đổi chiếc sofa của bạn.</Typography>
            <Button component={RouterLink} href={paths.sofaBooking} size="large" variant="contained" color="warning" startIcon={<Iconify icon="solar:calendar-bold-duotone" />}>
              Đặt lịch ngay
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
