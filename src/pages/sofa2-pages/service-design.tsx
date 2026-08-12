import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa2Section, Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';
import { SOFA2_PROJECTS, SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Thiết kế nội thất - LUXE Sofa' };

const SERVICES = [
  {
    key: 'custom',
    icon: 'solar:pen-new-round-bold-duotone',
    title: 'Thiết kế custom',
    description: 'Sofa thiết kế riêng theo không gian, phong cách và nhu cầu sử dụng của từng gia đình.',
    features: ['Tư vấn 1:1 với nhà thiết kế', 'Đo đạc tận nơi miễn phí', 'Chọn chất liệu và màu sắc độc bản', 'Bản vẽ kỹ thuật chi tiết'],
    image: SOFA2_PAGE_IMAGES.service1,
  },
  {
    key: '3d',
    icon: 'solar:3d-cube-bold-duotone',
    title: 'Diễn họa 3D',
    description: 'Hình ảnh 3D chân thực giúp bạn hình dung trọn vẹn sofa trong không gian thực tế.',
    features: ['Render 3D độ phân giải cao', 'Xem nhiều góc nhìn khác nhau', 'Thay đổi chất liệu trực tiếp', 'Báo giá kèm theo bản vẽ'],
    image: SOFA2_PAGE_IMAGES.service2,
  },
  {
    key: 'consult',
    icon: 'solar:chat-square-bold-duotone',
    title: 'Tư vấn nội thất',
    description: 'Đội ngũ chuyên gia tư vấn phong cách, màu sắc và bố trí sofa phù hợp phong thủy.',
    features: ['Tư vấn phong cách phù hợp', 'Phối màu sofa với tường, sàn', 'Bố trí phong thủy hút tài lộc', 'Tư vấn ngân sách tối ưu'],
    image: SOFA2_PAGE_IMAGES.service3,
  },
];

export default function Page() {
  const theme = useTheme();
  const { pathname } = useLocation();
  const activeKey = pathname.includes('/3d') ? '3d' : pathname.includes('/consult') ? 'consult' : 'custom';

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa2PageHero
        overline="Dịch vụ thiết kế"
        title="Thiết Kế Nội Thất"
        subtitle="Từ ý tưởng đến bản vẽ — chúng tôi kiến tạo không gian sống mang dấu ấn riêng của bạn."
        image={SOFA2_PAGE_IMAGES.service1}
      />

      {/* Service cards */}
      <Sofa2Section>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>Dịch vụ</Typography>
          <Typography variant="h2">
            Ba dịch vụ
            <Box component="span" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.main}, ${theme.vars.palette.warning.main}`) }}> thiết kế</Box>
          </Typography>
        </Stack>
        <Grid container spacing={4}>
          {SERVICES.map((service) => {
            const isActive = service.key === activeKey;
            return (
              <Grid key={service.key} xs={12} md={4}>
                <Stack
                  component={m.div}
                  variants={varFade({ distance: 24 }).inUp}
                  spacing={2}
                  sx={{
                    p: 3,
                    height: 1,
                    borderRadius: 2,
                    bgcolor: 'background.paper',
                    overflow: 'hidden',
                    boxShadow: (t) => t.customShadows.card,
                    outline: isActive ? (t) => `2px solid ${t.vars.palette.primary.main}` : 'none',
                  }}
                >
                  <Box component="img" src={service.image} alt={service.title} sx={{ width: 1, borderRadius: 1.5, aspectRatio: '16/10', objectFit: 'cover' }} />
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Iconify icon={service.icon} width={28} sx={{ color: 'primary.main' }} />
                    <Typography variant="h5">{service.title}</Typography>
                    {isActive && <Iconify icon="eva:checkmark-circle-2-fill" sx={{ color: 'primary.main' }} />}
                  </Stack>
                  <Typography sx={{ color: 'text.secondary' }}>{service.description}</Typography>
                  <Stack spacing={1}>
                    {service.features.map((f) => (
                      <Stack key={f} direction="row" spacing={1.5} alignItems="flex-start">
                        <Iconify icon="eva:checkmark-circle-2-fill" sx={{ color: 'primary.main', mt: 0.25 }} width={18} />
                        <Typography variant="body2">{f}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </Sofa2Section>

      {/* Portfolio samples */}
      <Sofa2Section bg="grey">
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>Dự án tiêu biểu</Typography>
          <Typography variant="h2">Mẫu thiết kế đã thực hiện</Typography>
        </Stack>
        <Grid container spacing={3}>
          {SOFA2_PROJECTS.slice(0, 6).map((project) => (
            <Grid key={project.id} xs={12} sm={6} md={4}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                spacing={2}
                sx={{ borderRadius: 2, overflow: 'hidden', bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
              >
                <Box component="img" src={project.image} alt={project.name} sx={{ width: 1, aspectRatio: '4/3', objectFit: 'cover' }} />
                <Stack spacing={1} sx={{ p: 3 }}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Iconify icon="solar:map-point-bold-duotone" width={16} sx={{ color: 'primary.main' }} />
                    <Typography variant="caption" sx={{ color: 'primary.main' }}>{project.location} · {project.year}</Typography>
                  </Stack>
                  <Typography variant="h6">{project.name}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{project.description}</Typography>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa2Section>

      {/* CTA */}
      <Sofa2Section>
        <Stack component={MotionViewport} spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
          <Typography variant="h3">Sẵn sàng thiết kế sofa của riêng bạn?</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Liên hệ ngay để được tư vấn miễn phí từ đội ngũ thiết kế LUXE Sofa.</Typography>
          <Button component={RouterLink} href="/sofa2/contact" size="large" variant="contained" color="primary" startIcon={<Iconify icon="solar:phone-bold-duotone" />}>
            Liên hệ tư vấn
          </Button>
        </Stack>
      </Sofa2Section>
    </>
  );
}
