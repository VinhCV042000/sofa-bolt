import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA7_COLORS } from 'src/sections/sofa7/sofa7-data';
import { Sofa7PageHero, Sofa7Section } from 'src/sections/sofa7-pages/sofa7-page-hero';
import { SOFA7_PAGE_PROMOTION_SERVICES, SOFA7_PAGE_IMAGES } from 'src/sections/sofa7-pages/sofa7-pages-data';

// ----------------------------------------------------------------------

const SERVICE_FEATURES: Record<string, string[]> = {
  warranty: ['Bảo hành 10 năm khung thép', 'Bảo hành 5 năm da/velvet', 'Bảo trì trọn đời miễn phí', 'Đổi mới nếu lỗi nhà sản xuất'],
  maintenance: ['Làm mới bọc da/velvet', 'Chi phí ưu đãi khách hàng cũ', 'Định kỳ 6-12 tháng', 'Đặt lịch tận nhà'],
  repair: ['Thay đệm, bọc lại', 'Sửa khung thép, hàn Mig', 'Sửa cơ chế recliner', 'Báo giá trước khi làm'],
  cleaning: ['Giặt khô, giặt nước', 'Làm sạch sâu, khử mùi', 'Diệt khuẩn da/velvet', 'Tận nhà toàn quốc'],
  returns: ['30 ngày đổi trả không lý do', 'Hoàn tiền 100% sản phẩm tiêu chuẩn', 'Đổi size/màu miễn phí', 'Hỗ trợ vận chuyển'],
};

// ----------------------------------------------------------------------

export default function Page() {
  const { service } = useParams();
  const item = SOFA7_PAGE_PROMOTION_SERVICES.find((s) => s.slug === service);

  if (!item) {
    return (
      <>
        <Helmet><title>Không tìm thấy dịch vụ · Sofa7</title></Helmet>
        <Sofa7PageHero overline="Hậu mãi" title={<>Dịch vụ <span>không tồn tại</span></>} image={SOFA7_PAGE_IMAGES.cta} />
        <Sofa7Section>
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 10 }}>
            <Iconify icon="solar:file-remove-bold-duotone" width={64} sx={{ color: 'text.disabled' }} />
            <Typography variant="h4" sx={{ textTransform: 'uppercase' }}>Không tìm thấy dịch vụ</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Dịch vụ bạn tìm không tồn tại hoặc đã bị gỡ.</Typography>
            <Button component={RouterLink} href="/sofa7/promotions" variant="contained" sx={{ borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, '&:hover': { bgcolor: SOFA7_COLORS.cyan } }}>Về danh sách dịch vụ</Button>
          </Stack>
        </Sofa7Section>
      </>
    );
  }

  const features = SERVICE_FEATURES[item.slug] ?? [];

  return (
    <>
      <Helmet><title>{`${item.title} · Sofa7`}</title></Helmet>

      <Sofa7PageHero
        overline="Dịch vụ hậu mãi"
        title={item.title}
        subtitle={item.description}
        image={SOFA7_PAGE_IMAGES.cta}
      />

      <Sofa7Section>
        <Grid container spacing={{ xs: 4, md: 6 }} component={MotionViewport}>
          <Grid xs={12} md={7}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Box sx={{ width: 80, height: 80, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA7_COLORS.electric, 0.12), color: SOFA7_COLORS.electric }}>
                <Iconify icon={item.icon} width={40} />
              </Box>
              <Typography variant="h3" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold' }}>{item.title}</Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{item.description}</Typography>

              <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>Những gì bạn nhận được</Typography>
              <Stack spacing={1.5}>
                {features.map((f) => (
                  <Stack key={f} direction="row" spacing={1.5} alignItems="center">
                    <Iconify icon="solar:check-circle-bold-duotone" width={20} sx={{ color: SOFA7_COLORS.cyan }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{f}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid xs={12} md={5}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: { xs: 3, md: 4 }, borderRadius: 0, bgcolor: 'background.paper', border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}`, boxShadow: (t) => t.customShadows.card, position: 'sticky', top: 24 }}>
              <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>Đăng ký dịch vụ</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>Liên hệ đội hậu mãi Sofa7 để đặt lịch hoặc tư vấn chi tiết về dịch vụ "{item.title}".</Typography>
              <Stack spacing={2}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Iconify icon="solar:phone-bold-duotone" width={20} sx={{ color: SOFA7_COLORS.electric }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>024 3855 1234</Typography>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Iconify icon="solar:letter-bold-duotone" width={20} sx={{ color: SOFA7_COLORS.electric }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>info@sofa7.vn</Typography>
                </Stack>
              </Stack>
              <Button component={RouterLink} href="/sofa7/contact" variant="contained" size="large" startIcon={<Iconify icon="solar:chat-round-like-bold-duotone" />} sx={{ borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, '&:hover': { bgcolor: SOFA7_COLORS.cyan } }}>
                Đặt dịch vụ
              </Button>
              <Button component={RouterLink} href="/sofa7/promotions" variant="outlined" sx={{ borderRadius: 0 }}>Xem dịch vụ khác</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa7Section>
    </>
  );
}
