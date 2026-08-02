import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
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

const metadata = { title: 'Cộng sự Casa Sofa' };

const BENEFITS = [
  { icon: 'solar:percent-bold-duotone', title: 'Hoa hồng hấp dẫn', desc: 'Hoa hồng lên đến 25% cho mỗi đơn hàng giới thiệu thành công.' },
  { icon: 'solar:gift-bold-duotone', title: 'Quà tặng định kỳ', desc: 'Voucher, sản phẩm mẫu và gói đào tạo miễn phí cho đối tác.' },
  { icon: 'solar:headphones-round-sound-bold-duotone', title: 'Hỗ trợ chuyên sâu', desc: 'Đội ngũ riêng chăm sóc đối tác 24/7, xử lý nhanh chóng.' },
  { icon: 'solar:graph-up-bold-duotone', title: 'Phát triển cùng nhau', desc: 'Cơ hội mở rộng tệp khách hàng và đồng thương hiệu.' },
];

const PARTNER_TYPES = [
  { icon: 'solar:pen-nib-bold-duotone', title: 'Kiến trúc sư nội thất', desc: 'Giới thiệu khách và nhận hoa hồng.' },
  { icon: 'solar:hammer-bold-duotone', title: 'Nhà thầu thi công', desc: 'Hợp tác cung cấp sofa cho dự án.' },
  { icon: 'solar:shop-bold-duotone', title: 'Showroom nội thất', desc: 'Trưng bày và phân phối sản phẩm.' },
  { icon: 'solar:user-bold-duotone', title: 'Cộng tác viên tự do', desc: 'Kết nối khách hàng, linh hoạt thời gian.' },
];

const LOGOS = ['solar:building-bold-duotone', 'solar:shop-bold-duotone', 'solar:Pen-bold-duotone', 'solar:hammer-bold-duotone', 'solar:user-bold-duotone', 'solar:hand-stars-bold-duotone'];

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
            backgroundImage: `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.78)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.56)}), url(${SOFA_PAGE_IMAGES.workshop})`,
          }}
        />
        <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9 }}>
          <Stack spacing={3} sx={{ maxWidth: 720 }}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="overline" sx={{ color: 'primary.light', letterSpacing: 3 }}>Cộng sự</Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="h1" sx={{ fontSize: { xs: 36, md: 56 }, lineHeight: 1.15 }}>
                Trở Thành
                <Box component="span" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.light}, ${theme.vars.palette.warning.light}`) }}> Cộng Sự Casa Sofa</Box>
              </Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.72), maxWidth: 560 }}>
                Hợp tác cùng Casa Sofa — chia sẻ lợi ích, mở rộng mạng lưới và đồng phát triển. Chúng
                tôi trân trọng mọi đối tác.
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Benefits */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>Lợi ích</Typography>
            <Typography variant="h2">
              Vì sao
              <Box component="span" sx={{ opacity: 0.4 }}> hợp tác cùng chúng tôi</Box>
            </Typography>
          </Stack>
          <Grid container spacing={3}>
            {BENEFITS.map((item) => (
              <Grid key={item.title} xs={12} sm={6} md={3}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                  <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: 'primary.main' }}>
                    <Iconify icon={item.icon} width={28} />
                  </Box>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.desc}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Partner types */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
        <Container component={MotionViewport}>
          <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 } }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>Đối tượng</Typography>
            <Typography variant="h2">Các hình thức cộng tác</Typography>
          </Stack>
          <Grid container spacing={3}>
            {PARTNER_TYPES.map((item) => (
              <Grid key={item.title} xs={12} sm={6} md={3}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                  <Iconify icon={item.icon} width={36} sx={{ color: 'primary.main' }} />
                  <Typography variant="subtitle1">{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.desc}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Registration form */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport} maxWidth="md">
          <Stack spacing={3} sx={{ mb: { xs: 4, md: 6 } }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>Đăng ký</Typography>
            <Typography variant="h2">Trở thành đối tác</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Điền thông tin, chúng tôi liên hệ trong 3-5 ngày làm việc.</Typography>
          </Stack>
          <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
            <Grid container spacing={2}>
              <Grid xs={12} sm={6}><TextField fullWidth label="Tên công ty / Cá nhân" /></Grid>
              <Grid xs={12} sm={6}><TextField fullWidth label="Người liên hệ" /></Grid>
              <Grid xs={12} sm={6}><TextField fullWidth label="Email" type="email" /></Grid>
              <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" /></Grid>
              <Grid xs={12}>
                <TextField select fullWidth label="Hình thức cộng tác" defaultValue="">
                  {PARTNER_TYPES.map((p) => (
                    <MenuItem key={p.title} value={p.title}>{p.title}</MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid xs={12}><TextField fullWidth label="Lời giới thiệu" multiline rows={4} /></Grid>
            </Grid>
            <Button variant="contained" size="large" startIcon={<Iconify icon="solar:hand-bold-duotone" />} sx={{ width: 'fit-content' }}>
              Gửi đăng ký
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Partner logos */}
      <Box component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
        <Container component={MotionViewport}>
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center' }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>Đối tác hiện tại</Typography>
            <Typography variant="h4">Hơn 120 đối tác tin tưởng</Typography>
            <Grid container spacing={3} justifyContent="center" sx={{ mt: 2 }}>
              {LOGOS.map((icon) => (
                <Grid key={icon} xs={4} sm={2}>
                  <Stack alignItems="center" justifyContent="center" sx={{ height: 80, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                    <Iconify icon={icon} width={36} sx={{ color: 'text.disabled' }} />
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* CTA */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
            <Typography variant="h3">Câu hỏi về hợp tác?</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Liên hệ đội ngũ đối tác để được tư vấn chi tiết.</Typography>
            <Button component={RouterLink} href={paths.contact} size="large" variant="contained" color="primary" startIcon={<Iconify icon="solar:phone-bold-duotone" />}>
              Liên hệ ngay
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
