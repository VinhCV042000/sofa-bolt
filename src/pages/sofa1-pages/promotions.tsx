import { useState } from 'react';
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

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa1PageHero, Sofa1Section } from 'src/sections/sofa1-pages/sofa1-page-hero';
import { SOFA1_PROMOTION_SERVICES, SOFA1_PAGE_IMAGES } from 'src/sections/sofa1-pages/sofa1-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Khuyến mãi & Dịch vụ hậu mãi - Casa Sofa' };

export default function Page() {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) setSubscribed(true);
  };

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa1PageHero
        overline="Khuyến mãi & Hậu mãi"
        title="Khuyến Mãi & Dịch Vụ Hậu Mãi"
        subtitle="Bảo hành, bảo trì, sửa chữa, vệ sinh và đổi trả — chăm sóc sofa trọn đời cùng Casa Sofa."
        image={SOFA1_PAGE_IMAGES.service4}
      />

      {/* Service cards */}
      <Sofa1Section>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>Dịch vụ</Typography>
          <Typography variant="h2">
            Năm dịch vụ
            <Box component="span" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.main}, ${theme.vars.palette.warning.main}`) }}> hậu mãi</Box>
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          {SOFA1_PROMOTION_SERVICES.map((service) => (
            <Grid key={service.slug} xs={12} sm={6} md={4}>
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
                <Typography variant="body2" sx={{ color: 'text.secondary', flex: 1 }}>{service.description}</Typography>
                <Button component={RouterLink} href={`/sofa1/promotions/${service.slug}`} size="small" endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>
                  Tìm hiểu
                </Button>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa1Section>

      {/* Current promotions banner */}
      <Sofa1Section bg="grey">
        <Stack
          component={m.div}
          variants={varFade({ distance: 24 }).inUp}
          spacing={3}
          sx={{ p: { xs: 4, md: 6 }, borderRadius: 3, color: 'common.white', backgroundImage: `linear-gradient(135deg, ${theme.vars.palette.primary.main}, ${theme.vars.palette.primary.dark})` }}
        >
          <Typography variant="overline" sx={{ color: 'common.white', opacity: 0.8 }}>Ưu đãi hiện tại</Typography>
          <Typography variant="h3" sx={{ color: 'common.white' }}>Giảm 20% dịch vụ bảo trì năm đầu</Typography>
          <Typography sx={{ color: 'common.white', opacity: 0.85, maxWidth: 560 }}>Áp dụng cho khách hàng mua sofa mới tại Casa Sofa. Bảo trì định kỳ miễn phí năm đầu, ưu đãi 20% các năm tiếp theo.</Typography>
          <Button component={RouterLink} href="/sofa1/promotions/maintenance" variant="contained" color="warning" sx={{ width: 'fit-content' }} endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>
            Xem ưu đãi
          </Button>
        </Stack>
      </Sofa1Section>

      {/* Newsletter */}
      <Sofa1Section>
        <Stack component={MotionViewport} spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 560, mx: 'auto' }}>
          <Iconify icon="solar:letter-bold-duotone" width={48} sx={{ color: 'primary.main' }} />
          <Typography variant="h3">Đăng ký nhận khuyến mãi</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Nhận thông tin ưu đãi sớm nhất gửi ngay đến hộp thư của bạn.</Typography>
          {subscribed ? (
            <Stack direction="row" spacing={1} alignItems="center" sx={{ p: 2, borderRadius: 1.5, bgcolor: (t) => varAlpha(t.vars.palette.success.mainChannel, 0.08), color: 'success.main' }}>
              <Iconify icon="eva:checkmark-circle-2-fill" width={24} />
              <Typography>Cảm ơn bạn đã đăng ký! Chúng tôi sẽ gửi ưu đãi sớm nhất.</Typography>
            </Stack>
          ) : (
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ width: 1 }}>
              <TextField fullWidth label="Email của bạn" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Button variant="contained" size="large" onClick={handleSubscribe} startIcon={<Iconify icon="solar:letter-bold-duotone" />}>Đăng ký</Button>
            </Stack>
          )}
        </Stack>
      </Sofa1Section>
    </>
  );
}
