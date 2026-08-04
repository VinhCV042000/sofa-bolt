import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa1PageHero, Sofa1Section } from 'src/sections/sofa1-pages/sofa1-page-hero';
import { SOFA1_PAGE_IMAGES } from 'src/sections/sofa1-pages/sofa1-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Tài khoản khách hàng - Casa Sofa' };

const SECTIONS = [
  { icon: 'solar:user-bold-duotone', title: 'Hồ sơ cá nhân', desc: 'Cập nhật thông tin tài khoản và mật khẩu.', href: '#', count: '' },
  { icon: 'solar:map-point-bold-duotone', title: 'Địa chỉ giao hàng', desc: 'Quản lý sổ địa chỉ giao hàng của bạn.', href: '#', count: '2 địa chỉ' },
  { icon: 'solar:bag-bold-duotone', title: 'Đơn hàng của tôi', desc: 'Theo dõi và xem lịch sử đơn hàng.', href: '#', count: '3 đơn' },
  { icon: 'solar:heart-bold-duotone', title: 'Yêu thích', desc: 'Danh sách sofa bạn đã lưu.', href: '#', count: '8 mục' },
  { icon: 'solar:wallet-bold-duotone', title: 'Lịch sử giao dịch', desc: 'Lịch sử thanh toán và trả góp.', href: '#', count: '' },
  { icon: 'solar:shield-check-bold-duotone', title: 'Phiếu bảo hành', desc: 'Quản lý phiếu bảo hành sofa.', href: '#', count: '2 phiếu' },
];

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa1PageHero
        title="Tài khoản khách hàng"
        subtitle="Quản lý hồ sơ, đơn hàng, danh sách yêu thích và phiếu bảo hành của bạn tại Casa Sofa."
        image={SOFA1_PAGE_IMAGES.team}
        overline="Tài khoản"
      />

      {/* Welcome banner */}
      <Sofa1Section>
        <Stack
          component={m.div}
          variants={varFade({ distance: 24 }).inUp}
          direction={{ xs: 'column', sm: 'row' }}
          spacing={3}
          alignItems="center"
          justifyContent="space-between"
          sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Box sx={{ width: 64, height: 64, display: 'flex', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: 'primary.main', fontWeight: 'fontWeightBold', fontSize: 22 }}>
              NA
            </Box>
            <Stack>
              <Typography variant="h5">Xin chào, Nguyễn Minh Anh</Typography>
              <Typography variant="body2" sx={{ color: 'warning.main' }}>Thành viên Vàng · Casa Sofa</Typography>
            </Stack>
          </Stack>
          <Button variant="outlined" startIcon={<Iconify icon="solar:settings-bold-duotone" />}>
            Cài đặt tài khoản
          </Button>
        </Stack>
      </Sofa1Section>

      {/* Dashboard cards */}
      <Sofa1Section bg="grey">
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>Bảng điều khiển</Typography>
          <Typography variant="h2">Quản lý tài khoản</Typography>
        </Stack>
        <Grid container spacing={3}>
          {SECTIONS.map((item, index) => (
            <Grid key={item.title} xs={12} sm={6} md={4}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.06 }}
                spacing={2}
                sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, cursor: 'pointer', '&:hover': { transform: 'translateY(-4px)', transition: (t) => t.transitions.create(['transform'], { duration: 300 }) } }}
              >
                <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
                  <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: 'primary.main' }}>
                    <Iconify icon={item.icon} width={28} />
                  </Box>
                  {item.count && (
                    <Box sx={{ px: 1.5, py: 0.5, borderRadius: 1, bgcolor: (t) => varAlpha(t.vars.palette.warning.mainChannel, 0.08) }}>
                      <Typography variant="caption" sx={{ color: 'warning.main', fontWeight: 'fontWeightBold' }}>{item.count}</Typography>
                    </Box>
                  )}
                </Stack>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.desc}</Typography>
                <Stack direction="row" spacing={0.5} alignItems="center" sx={{ color: 'primary.main' }}>
                  <Typography variant="subtitle2" sx={{ color: 'primary.main' }}>Xem chi tiết</Typography>
                  <Iconify icon="eva:arrow-ios-forward-fill" width={16} sx={{ color: 'primary.main' }} />
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa1Section>

      {/* CTA */}
      <Sofa1Section>
        <Stack component={MotionViewport} spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
          <Typography variant="h3">Cần hỗ trợ tài khoản?</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Liên hệ đội ngũ chăm sóc khách hàng Casa Sofa để được hỗ trợ nhanh chóng.</Typography>
          <Button component={RouterLink} href="/sofa1/support" size="large" variant="contained" color="primary" startIcon={<Iconify icon="solar:chat-square-bold-duotone" />}>
            Trung tâm hỗ trợ
          </Button>
        </Stack>
      </Sofa1Section>
    </>
  );
}
