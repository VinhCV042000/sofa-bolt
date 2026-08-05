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

import { SOFA6_COLORS } from 'src/sections/sofa6/sofa6-data';
import { Sofa6Section, Sofa6PageHero } from 'src/sections/sofa6-pages/sofa6-page-hero';
import { SOFA6_PAGE_IMAGES, SOFA6_PROMOTION_SERVICES } from 'src/sections/sofa6-pages/sofa6-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Khuyến mãi & Dịch vụ hậu mãi · Sofa Earth' };

const hexToRgb = (hex: string) => `rgb(${hex.slice(1).match(/.{2}/g)?.map((h) => parseInt(h, 16)).join(',')})`;

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet><title>{metadata.title}</title></Helmet>

      <Sofa6PageHero
        overline="Khuyến mãi & Hậu mãi"
        title={<>Khuyến mãi & <span>hậu mãi</span></>}
        subtitle="Sofa Earth cam kết đồng hành trọn đời — bảo hành 5 năm, bảo trì làm mới bọc, sửa chữa và vệ sinh sofa từ vật liệu thiên nhiên."
        image={SOFA6_PAGE_IMAGES.service2}
      />

      <Sofa6Section>
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }} component={MotionViewport}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>Dịch vụ hậu mãi</Typography>
          <Typography variant="h2">
            Chăm sóc
            <Box component="span" sx={{ ...textGradient(`135deg, ${SOFA6_COLORS.terracottaLight}, ${SOFA6_COLORS.sageLight}`) }}> trọn đời</Box>
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Cam kết hậu mãi cho mọi khách hàng Sofa Earth — từ bảo hành đến bảo trì làm mới bọc linen và wool.</Typography>
        </Stack>

        <Grid container spacing={3} component={MotionViewport}>
          {SOFA6_PROMOTION_SERVICES.map((service) => (
            <Grid key={service.slug} xs={12} sm={6} md={4}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                spacing={2}
                sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, transition: (t) => t.transitions.create(['transform'], { duration: 300 }), '&:hover': { transform: 'translateY(-6px)' } }}
              >
                <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(hexToRgb(SOFA6_COLORS.terracottaLight), 0.12), color: SOFA6_COLORS.terracotta }}>
                  <Iconify icon={service.icon} width={28} />
                </Box>
                <Typography variant="h6">{service.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', flex: 1 }}>{service.description}</Typography>
                <Button component={RouterLink} href={`/sofa6/promotions/${service.slug}`} size="small" sx={{ width: 'fit-content', color: SOFA6_COLORS.terracotta }} endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>
                  Xem chi tiết
                </Button>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa6Section>

      <Sofa6Section bg="grey">
        <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }} component={MotionViewport}>
          <Typography variant="h3">Cần hỗ trợ dịch vụ?</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Liên hệ Sofa Earth để được tư vấn và đặt lịch dịch vụ hậu mãi miễn phí.</Typography>
          <Button component={RouterLink} href="/sofa6/contact" size="large" variant="contained" startIcon={<Iconify icon="solar:phone-bold-duotone" />} sx={{ bgcolor: SOFA6_COLORS.terracotta, '&:hover': { bgcolor: SOFA6_COLORS.clay } }}>
            Liên hệ ngay
          </Button>
        </Stack>
      </Sofa6Section>
    </>
  );
}
