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
import { Sofa7Section, Sofa7PageHero } from 'src/sections/sofa7-pages/sofa7-page-hero';
import { SOFA7_PAGE_IMAGES, SOFA7_PAGE_PROMOTION_SERVICES } from 'src/sections/sofa7-pages/sofa7-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Khuyến mãi & dịch vụ hậu mãi · Sofa7' };

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa7PageHero
        overline="Hậu mãi"
        title={<>Khuyến mãi & <span>dịch vụ hậu mãi</span></>}
        subtitle="Bảo hành 10 năm, bảo trì trọn đời, sửa chữa, vệ sinh và đổi trả 30 ngày — Sofa7 đồng hành cùng sofa của bạn."
        image={SOFA7_PAGE_IMAGES.cta}
      />

      <Sofa7Section>
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }} component={MotionViewport}>
          <Typography variant="overline" sx={{ color: 'text.disabled', letterSpacing: 4 }}>Dịch vụ hậu mãi</Typography>
          <Typography variant="h2" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold' }}>
            Năm <Box component="span" sx={{ ...textGradient(`90deg, ${SOFA7_COLORS.electric}, ${SOFA7_COLORS.cyan}`) }}>dịch vụ trọn đời</Box>
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Sofa7 cam kết đồng hành cùng sofa của bạn từ bảo hành, bảo trì đến sửa chữa và vệ sinh.</Typography>
        </Stack>

        <Grid container spacing={3} component={MotionViewport}>
          {SOFA7_PAGE_PROMOTION_SERVICES.map((service) => (
            <Grid key={service.slug} xs={12} sm={6} md={4}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                spacing={2}
                sx={{
                  p: 4,
                  height: 1,
                  borderRadius: 0,
                  bgcolor: 'background.paper',
                  border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}`,
                  boxShadow: (t) => t.customShadows.card,
                  transition: (t) => t.transitions.create(['transform', 'border-color'], { duration: 300 }),
                  '&:hover': { transform: 'translateY(-6px)', border: `1px solid ${SOFA7_COLORS.electric}` },
                }}
              >
                <Box sx={{ width: 64, height: 64, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA7_COLORS.electric, 0.12), color: SOFA7_COLORS.electric }}>
                  <Iconify icon={service.icon} width={32} />
                </Box>
                <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>{service.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', flex: 1 }}>{service.description}</Typography>
                <Button component={RouterLink} href={`/sofa7/promotions/${service.slug}`} size="small" endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />} sx={{ borderRadius: 0, color: SOFA7_COLORS.electric }}>
                  Xem chi tiết
                </Button>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa7Section>

      <Sofa7Section bg="grey">
        <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }} component={MotionViewport}>
          <Typography variant="h3" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold' }}>Cần hỗ trợ dịch vụ?</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Liên hệ đội hậu mãi Sofa7 để được tư vấn bảo hành, bảo trì và vệ sinh sofa.</Typography>
          <Button component={RouterLink} href="/sofa7/contact" size="large" variant="contained" startIcon={<Iconify icon="solar:chat-round-like-bold-duotone" />} sx={{ borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, '&:hover': { bgcolor: SOFA7_COLORS.cyan } }}>
            Liên hệ hậu mãi
          </Button>
        </Stack>
      </Sofa7Section>
    </>
  );
}
