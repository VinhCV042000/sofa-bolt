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
  SOFA_CAREERS,
  SOFA_PAGE_IMAGES,
} from 'src/sections/sofa/pages/sofa-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Tuyển dụng Casa Sofa' };

const BENEFITS = [
  { icon: 'solar:wallet-bold-duotone', title: 'Lương thưởng hấp dẫn', desc: 'Lương cạnh tranh cùng thưởng KPI, thưởng dự án và thưởng cuối năm.' },
  { icon: 'solar:book-bold-duotone', title: 'Đào tạo liên tục', desc: 'Được đào tạo nghề và nâng cao tay nghề bởi nghệ nhân trưởng.' },
  { icon: 'solar:health-bold-duotone', title: 'Phúc lợi toàn diện', desc: 'Bảo hiểm sức khỏe, khám định kỳ và chế độ nghỉ phép đầy đủ.' },
  { icon: 'solar:case-bold-duotone', title: 'Cơ hội thăng tiến', desc: 'Lộ trình phát triển rõ ràng, môi trường công bằng và minh bạch.' },
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
            backgroundImage: `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.78)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.56)}), url(${SOFA_PAGE_IMAGES.team})`,
          }}
        />
        <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9 }}>
          <Stack spacing={3} sx={{ maxWidth: 720 }}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="overline" sx={{ color: 'primary.light', letterSpacing: 3 }}>Tuyển dụng</Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="h1" sx={{ fontSize: { xs: 36, md: 56 }, lineHeight: 1.15 }}>
                Tuyển Dụng
                <Box component="span" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.light}, ${theme.vars.palette.warning.light}`) }}> Casa Sofa</Box>
              </Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.72), maxWidth: 560 }}>
                Gia nhập đội ngũ Casa Sofa — nơi nghệ nhân được trân trọng và mỗi sản phẩm là một
                kiệt tác. Chúng tôi luôn tìm kiếm những người yêu nghề.
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Benefits */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>Vì sao chọn</Typography>
            <Typography variant="h2">
              Lợi ích khi
              <Box component="span" sx={{ opacity: 0.4 }}> làm việc cùng chúng tôi</Box>
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

      {/* Job listings */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
        <Container component={MotionViewport}>
          <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 } }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>Vị trí tuyển dụng</Typography>
            <Typography variant="h2">Việc làm mở</Typography>
          </Stack>
          <Stack spacing={2}>
            {SOFA_CAREERS.map((job) => (
              <Stack
                key={job.id}
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                direction={{ xs: 'column', md: 'row' }}
                spacing={3}
                alignItems={{ md: 'center' }}
                justifyContent="space-between"
                sx={{ p: 4, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
              >
                <Stack spacing={1} sx={{ flex: 1 }}>
                  <Typography variant="h6">{job.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{job.description}</Typography>
                </Stack>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  <Stack direction="row" spacing={0.5} alignItems="center" sx={{ px: 1.5, py: 0.5, borderRadius: 1, bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08) }}>
                    <Iconify icon="solar:map-point-bold-duotone" width={16} sx={{ color: 'primary.main' }} />
                    <Typography variant="caption" sx={{ color: 'primary.main' }}>{job.location}</Typography>
                  </Stack>
                  <Stack direction="row" spacing={0.5} alignItems="center" sx={{ px: 1.5, py: 0.5, borderRadius: 1, bgcolor: (t) => varAlpha(t.vars.palette.warning.mainChannel, 0.08) }}>
                    <Iconify icon="solar:clock-circle-bold-duotone" width={16} sx={{ color: 'warning.main' }} />
                    <Typography variant="caption" sx={{ color: 'warning.main' }}>{job.type}</Typography>
                  </Stack>
                  <Stack direction="row" spacing={0.5} alignItems="center" sx={{ px: 1.5, py: 0.5, borderRadius: 1, bgcolor: (t) => varAlpha(t.vars.palette.success.mainChannel, 0.08) }}>
                    <Iconify icon="solar:wallet-bold-duotone" width={16} sx={{ color: 'success.main' }} />
                    <Typography variant="caption" sx={{ color: 'success.main' }}>{job.salary}</Typography>
                  </Stack>
                </Stack>
                <Button variant="contained" color="primary" startIcon={<Iconify icon="solar:letter-bold-duotone" />} href="#apply">Ứng tuyển</Button>
              </Stack>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Application form */}
      <Box component="section" id="apply" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport} maxWidth="md">
          <Stack spacing={3} sx={{ mb: { xs: 4, md: 6 } }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>Ứng tuyển</Typography>
            <Typography variant="h2">Gửi hồ sơ của bạn</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Điền thông tin bên dưới, chúng tôi sẽ liên hệ trong 3-5 ngày làm việc.</Typography>
          </Stack>
          <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
            <Grid container spacing={2}>
              <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" /></Grid>
              <Grid xs={12} sm={6}><TextField fullWidth label="Email" type="email" /></Grid>
              <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" /></Grid>
              <Grid xs={12} sm={6}>
                <TextField select fullWidth label="Vị trí ứng tuyển" defaultValue="">
                  {SOFA_CAREERS.map((job) => (
                    <MenuItem key={job.id} value={job.title}>{job.title}</MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid xs={12}><TextField fullWidth label="Thư ứng tuyển" multiline rows={4} /></Grid>
              <Grid xs={12}>
                <Button variant="outlined" component="label" startIcon={<Iconify icon="solar:upload-bold-duotone" />}>
                  Tải lên CV (PDF)
                  <input type="file" hidden accept=".pdf,.doc,.docx" />
                </Button>
              </Grid>
            </Grid>
            <Button variant="contained" size="large" startIcon={<Iconify icon="solar:letter-bold-duotone" />} sx={{ width: 'fit-content' }}>
              Gửi hồ sơ
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
