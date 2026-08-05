import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA7_COLORS } from 'src/sections/sofa7/sofa7-data';
import { Sofa7PageHero, Sofa7Section } from 'src/sections/sofa7-pages/sofa7-page-hero';
import { SOFA7_PAGE_IMAGES } from 'src/sections/sofa7-pages/sofa7-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Tài khoản khách hàng · Sofa7' };

const SECTIONS = [
  { slug: 'profile', icon: 'solar:user-bold-duotone', title: 'Hồ sơ cá nhân', desc: 'Cập nhật thông tin cá nhân và tài khoản.' },
  { slug: 'addresses', icon: 'solar:map-point-bold-duotone', title: 'Địa chỉ giao hàng', desc: 'Quản lý địa chỉ nhận hàng của bạn.' },
  { slug: 'orders', icon: 'solar:clipboard-list-bold-duotone', title: 'Đơn hàng', desc: 'Theo dõi lịch sử và trạng thái đơn hàng.' },
  { slug: 'wishlist', icon: 'solar:heart-bold-duotone', title: 'Yêu thích', desc: 'Sản phẩm bạn đã lưu để xem sau.' },
  { slug: 'history', icon: 'solar:wallet-money-bold-duotone', title: 'Lịch sử giao dịch', desc: 'Lịch sử thanh toán và giao dịch tài chính.' },
  { slug: 'warranty', icon: 'solar:shield-check-bold-duotone', title: 'Phiếu bảo hành', desc: 'Quản lý phiếu bảo hành sofa của bạn.' },
];

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa7PageHero
        overline="Tài khoản"
        title={<>Tài khoản <span>khách hàng</span></>}
        subtitle="Trung tâm quản lý tài khoản Sofa7 — hồ sơ, đơn hàng, yêu thích, lịch sử giao dịch và bảo hành."
        image={SOFA7_PAGE_IMAGES.cta}
      />

      <Sofa7Section>
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }} component={MotionViewport}>
          <Typography variant="overline" sx={{ color: 'text.disabled', letterSpacing: 4 }}>Dashboard</Typography>
          <Typography variant="h2" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold' }}>
            Quản lý <Box component="span" sx={{ ...textGradient(`90deg, ${SOFA7_COLORS.electric}, ${SOFA7_COLORS.cyan}`) }}>tài khoản</Box>
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Chọn một mục để quản lý thông tin tài khoản Sofa7 của bạn.</Typography>
        </Stack>

        <Grid container spacing={3} component={MotionViewport}>
          {SECTIONS.map((section) => (
            <Grid key={section.slug} xs={12} sm={6} md={4}>
              <Button
                component={RouterLink}
                href={`/sofa7/account/${section.slug}`}
                fullWidth
                sx={{
                  p: 0,
                  borderRadius: 0,
                  textAlign: 'left',
                  color: 'inherit',
                  '&:hover': { bgcolor: 'transparent' },
                }}
              >
                <Stack
                  component={m.div}
                  variants={varFade({ distance: 24 }).inUp}
                  spacing={2}
                  sx={{
                    p: 4,
                    height: 1,
                    width: 1,
                    borderRadius: 0,
                    bgcolor: 'background.paper',
                    border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}`,
                    boxShadow: (t) => t.customShadows.card,
                    transition: (t) => t.transitions.create(['transform', 'border-color'], { duration: 300 }),
                    '&:hover': { transform: 'translateY(-6px)', border: `1px solid ${SOFA7_COLORS.electric}` },
                  }}
                >
                  <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA7_COLORS.electric, 0.12), color: SOFA7_COLORS.electric }}>
                    <Iconify icon={section.icon} width={28} />
                  </Box>
                  <Stack spacing={1}>
                    <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>{section.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{section.desc}</Typography>
                  </Stack>
                  <Stack direction="row" spacing={0.5} alignItems="center" sx={{ color: SOFA7_COLORS.electric }}>
                    <Typography variant="subtitle2" sx={{ textTransform: 'uppercase' }}>Mở</Typography>
                    <Iconify icon="eva:arrow-ios-forward-fill" width={20} />
                  </Stack>
                </Stack>
              </Button>
            </Grid>
          ))}
        </Grid>

        <Stack direction="row" justifyContent="center" sx={{ mt: 6 }}>
          <Button component={RouterLink} href="/sofa7/account/login" variant="contained" startIcon={<Iconify icon="solar:user-bold-duotone" />} sx={{ borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, '&:hover': { bgcolor: SOFA7_COLORS.cyan } }}>
            Đăng nhập / Đăng ký
          </Button>
        </Stack>
      </Sofa7Section>
    </>
  );
}
