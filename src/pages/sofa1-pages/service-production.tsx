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

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA1_PAGE_IMAGES } from 'src/sections/sofa1-pages/sofa1-pages-data';
import { Sofa1Section, Sofa1PageHero } from 'src/sections/sofa1-pages/sofa1-page-hero';

// ----------------------------------------------------------------------

const metadata = { title: 'Dịch vụ sản xuất - Casa Sofa' };

const SERVICES = [
  { key: 'custom', icon: 'solar:hammer-bold-duotone', title: 'Gia công sofa', description: 'Gia công sofa theo yêu cầu với độ chính xác cao và nguyên liệu chọn lọc.' },
  { key: 'oem', icon: 'solar:factory-bold-duotone', title: 'Sofa OEM', description: 'Sản xuất sofa theo thiết kế và thương hiệu của đối tác.' },
  { key: 'odm', icon: 'solar:lightbulb-bold-duotone', title: 'Sofa ODM', description: 'Thiết kế và sản xuất sản phẩm độc quyền cho đối tác.' },
  { key: 'project', icon: 'solar:buildings-bold-duotone', title: 'Đặt hàng theo dự án', description: 'Cung cấp sofa số lượng lớn cho dự án căn hộ, khách sạn, resort.' },
];

const CAPABILITIES = [
  { value: '500m²', label: 'Diện tích xưởng', icon: 'solar:factory-bold-duotone' },
  { value: '50+', label: 'Nghệ nhân lành nghề', icon: 'solar:users-group-rounded-bold-duotone' },
  { value: '7 năm', label: 'Bảo hành chính hãng', icon: 'solar:shield-check-bold-duotone' },
];

const QUALITY_STEPS = [
  { title: 'Chọn nguyên liệu', desc: 'Gỗ sồi FSC, da bò Ý, vải linen nhập khẩu — kiểm định chất lượng đầu vào.' },
  { title: 'Chế tác khung', desc: 'Khung gỗ được gia công CNC, ghép mộng đảm bảo độ vững chắc.' },
  { title: 'May bọc & đệm', desc: 'Đệm memory foam Đức, may bọc thủ công từng đường kim.' },
  { title: 'Kiểm định cuối', desc: 'Kiểm tra 200+ tiêu chí trước khi đóng gói và bàn giao.' },
];

export default function Page() {
  const theme = useTheme();
  const { pathname } = useLocation();
  const activeKey = pathname.includes('/oem') ? 'oem' : pathname.includes('/odm') ? 'odm' : pathname.includes('/project') ? 'project' : 'custom';

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa1PageHero
        overline="Dịch vụ sản xuất"
        title="Dịch Vụ Sản Xuất"
        subtitle="Xưởng chế tác thủ công quy mô lớn với nghệ nhân lành nghề — biến ý tưởng thành sản phẩm chất lượng."
        image={SOFA1_PAGE_IMAGES.factory}
      />

      {/* Service cards */}
      <Sofa1Section>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>Sản xuất</Typography>
          <Typography variant="h2">
            Bốn dịch vụ
            <Box component="span" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.main}, ${theme.vars.palette.warning.main}`) }}> sản xuất</Box>
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          {SERVICES.map((service) => {
            const isActive = service.key === activeKey;
            return (
              <Grid key={service.key} xs={12} sm={6} md={3}>
                <Stack
                  component={m.div}
                  variants={varFade({ distance: 24 }).inUp}
                  spacing={2}
                  sx={{
                    p: 4,
                    height: 1,
                    borderRadius: 2,
                    bgcolor: 'background.paper',
                    boxShadow: (t) => t.customShadows.card,
                    outline: isActive ? (t) => `2px solid ${t.vars.palette.primary.main}` : 'none',
                  }}
                >
                  <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: 'primary.main' }}>
                    <Iconify icon={service.icon} width={28} />
                  </Box>
                  <Typography variant="h6">{service.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{service.description}</Typography>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </Sofa1Section>

      {/* Capabilities */}
      <Sofa1Section bg="grey">
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>Năng lực</Typography>
          <Typography variant="h2">Cơ sở chế tác</Typography>
        </Stack>
        <Grid container spacing={3}>
          {CAPABILITIES.map((cap) => (
            <Grid key={cap.label} xs={12} md={4}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                spacing={2}
                alignItems="center"
                sx={{ p: 5, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, textAlign: 'center' }}
              >
                <Iconify icon={cap.icon} width={48} sx={{ color: 'primary.main' }} />
                <Typography variant="h3" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.main}, ${theme.vars.palette.warning.main}`) }}>{cap.value}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{cap.label}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa1Section>

      {/* Quality process */}
      <Sofa1Section>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>Kiểm soát chất lượng</Typography>
          <Typography variant="h2">Quy trình chế tác</Typography>
        </Stack>
        <Grid container spacing={3}>
          {QUALITY_STEPS.map((step, index) => (
            <Grid key={step.title} xs={12} sm={6} md={3}>
              <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ position: 'relative', p: 3 }}>
                <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', bgcolor: 'primary.main', color: 'common.white', fontWeight: 'fontWeightBold', fontSize: 22 }}>
                  {index + 1}
                </Box>
                <Typography variant="h6">{step.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{step.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa1Section>

      {/* CTA */}
      <Sofa1Section bg="grey">
        <Stack component={MotionViewport} spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
          <Typography variant="h3">Cần sản xuất số lượng lớn?</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Liên hệ để nhận báo giá dự án và hợp tác OEM/ODM từ Casa Sofa.</Typography>
          <Button component={RouterLink} href="/sofa1/contact" size="large" variant="contained" color="primary" startIcon={<Iconify icon="solar:phone-bold-duotone" />}>
            Liên hệ hợp tác
          </Button>
        </Stack>
      </Sofa1Section>
    </>
  );
}
