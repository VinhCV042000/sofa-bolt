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

import { SOFA6_COLORS } from 'src/sections/sofa6/sofa6-data';
import { Sofa6Section, Sofa6PageHero } from 'src/sections/sofa6-pages/sofa6-page-hero';
import { SOFA6_PAGE_IMAGES, SOFA6_PROMOTION_SERVICES } from 'src/sections/sofa6-pages/sofa6-pages-data';

// ----------------------------------------------------------------------

const hexToRgb = (hex: string) => `rgb(${hex.slice(1).match(/.{2}/g)?.map((h) => parseInt(h, 16)).join(',')})`;

const FEATURES: Record<string, string[]> = {
  warranty: ['Bảo hành 5 năm khung gỗ & đệm', 'Bảo trì làm mới bọc trọn đời', 'Chi phí ưu đãi cho khách hàng cũ', 'Cấp phiếu bảo hành điện tử'],
  maintenance: ['Làm mới bọc linen/wool', 'Thay đệm memory foam', 'Xử lý xẹp lún', 'Chi phí ưu đãi trọn đời'],
  repair: ['Thay đệm, bọc lại sofa', 'Sửa khung gỗ sồi', 'Thay vải tự nhiên', 'Sửa cơ chế recliner'],
  cleaning: ['Giặt khô & giặt nước', 'Làm sạch sâu linen/wool', 'Khử mùi, diệt khuẩn', 'Không hóa chất độc hại'],
  returns: ['45 ngày đổi trả', 'Hoàn tiền 100%', 'Miễn phí vận chuyển đổi', 'Điều kiện minh bạch'],
};

// ----------------------------------------------------------------------

export default function Page() {
  const { service } = useParams();
  const item = SOFA6_PROMOTION_SERVICES.find((s) => s.slug === service);

  if (!item) {
    return (
      <>
        <Helmet><title>Không tìm thấy dịch vụ · Sofa Earth</title></Helmet>
        <Sofa6Section>
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 10 }}>
            <Iconify icon="solar:file-remove-bold-duotone" width={64} sx={{ color: 'text.disabled' }} />
            <Typography variant="h4">Không tìm thấy dịch vụ</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Dịch vụ bạn tìm không tồn tại.</Typography>
            <Button component={RouterLink} href="/sofa6/promotions" variant="contained" sx={{ bgcolor: SOFA6_COLORS.terracotta, '&:hover': { bgcolor: SOFA6_COLORS.clay } }}>Về trang khuyến mãi</Button>
          </Stack>
        </Sofa6Section>
      </>
    );
  }

  const features = FEATURES[item.slug] ?? [];

  return (
    <>
      <Helmet><title>{`${item.title} · Sofa Earth`}</title></Helmet>

      <Sofa6PageHero
        overline="Dịch vụ hậu mãi"
        title={item.title}
        subtitle={item.description}
        image={SOFA6_PAGE_IMAGES.service3}
      />

      <Sofa6Section>
        <Grid container spacing={{ xs: 4, md: 6 }} component={MotionViewport}>
          <Grid xs={12} md={6}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box sx={{ width: 64, height: 64, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(hexToRgb(SOFA6_COLORS.terracottaLight), 0.12), color: SOFA6_COLORS.terracotta }}>
                  <Iconify icon={item.icon} width={32} />
                </Box>
                <Typography variant="h3">{item.title}</Typography>
              </Stack>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{item.description}</Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Tại Sofa Earth, chúng tôi cam kết đồng hành cùng chiếc sofa của bạn suốt vòng đời. Dịch vụ hậu mãi được thực hiện bởi nghệ nhân với vật liệu tự nhiên, đảm bảo sofa luôn như mới.
              </Typography>
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inRight} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
              <Typography variant="h5">Đặc điểm dịch vụ</Typography>
              <Stack spacing={2}>
                {features.map((f) => (
                  <Stack key={f} direction="row" spacing={1.5} alignItems="flex-start">
                    <Iconify icon="solar:check-circle-bold-duotone" width={22} sx={{ color: SOFA6_COLORS.sage, mt: 0.2 }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{f}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Sofa6Section>

      <Sofa6Section bg="grey">
        <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }} component={MotionViewport}>
          <Typography variant="h3">Đặt dịch vụ {item.title.toLowerCase()} ngay</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Liên hệ Sofa Earth để được tư vấn và đặt lịch dịch vụ miễn phí.</Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            <Button component={RouterLink} href="/sofa6/contact" size="large" variant="contained" startIcon={<Iconify icon="solar:phone-bold-duotone" />} sx={{ bgcolor: SOFA6_COLORS.terracotta, '&:hover': { bgcolor: SOFA6_COLORS.clay } }}>
              Liên hệ đặt lịch
            </Button>
            <Button component={RouterLink} href="/sofa6/promotions" variant="outlined">Quay lại</Button>
          </Stack>
        </Stack>
      </Sofa6Section>
    </>
  );
}
