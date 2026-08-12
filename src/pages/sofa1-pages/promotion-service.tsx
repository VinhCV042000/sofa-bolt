import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa1Section, Sofa1PageHero } from 'src/sections/sofa1-pages/sofa1-page-hero';
import { SOFA1_PAGE_IMAGES, SOFA1_PROMOTION_SERVICES } from 'src/sections/sofa1-pages/sofa1-pages-data';

// ----------------------------------------------------------------------

const FEATURES: Record<string, string[]> = {
  warranty: [
    'Bảo hành khung gỗ & cơ cấu 7 năm',
    'Bảo hành đệm & bọc 5 năm',
    'Lưu hồ sơ bảo hành điện tử',
    'Hỗ trợ kỹ thuật tận nhà miễn phí',
  ],
  maintenance: [
    'Làm mới bọc trọn đời',
    'Chi phí ưu đãi cho khách VIP',
    'Định kỳ kiểm tra 6 tháng/lần',
    'Vật tư chính hãng, an toàn',
  ],
  repair: [
    'Thay đệm, bọc lại sofa',
    'Sửa khung gỗ cong vênh',
    'Xử lý cơ cấu recliner',
    'Báo giá minh bạch trước làm',
  ],
  cleaning: [
    'Giặt khô & giặt nước chuyên dụng',
    'Làm sạch sâu, khử mùi',
    'Diệt khuẩn an toàn cho da bò',
    'Không làm hỏng màu da',
  ],
  returns: [
    '30 ngày đổi trả sản phẩm tiêu chuẩn',
    'Hoàn tiền 100% nếu lỗi nhà sản xuất',
    'Hỗ trợ đổi size, màu, chất liệu',
    'Sofa đóng theo yêu cầu xem chính sách riêng',
  ],
};

const SERVICE_IMAGES: Record<string, string> = {
  warranty: SOFA1_PAGE_IMAGES.service4,
  maintenance: SOFA1_PAGE_IMAGES.service2,
  repair: SOFA1_PAGE_IMAGES.factory,
  cleaning: SOFA1_PAGE_IMAGES.service3,
  returns: SOFA1_PAGE_IMAGES.service1,
};

export default function Page() {
  const theme = useTheme();
  const { service } = useParams();
  const item = SOFA1_PROMOTION_SERVICES.find((s) => s.slug === service);
  const features = item ? FEATURES[item.slug] ?? [] : [];

  if (!item) {
    return (
      <>
        <Helmet><title>Không tìm thấy dịch vụ - Casa Sofa</title></Helmet>
        <Container sx={{ py: { xs: 10, md: 16 }, textAlign: 'center' }}>
          <Stack spacing={3} alignItems="center">
            <Iconify icon="solar:question-circle-bold-duotone" width={80} sx={{ color: 'text.disabled' }} />
            <Typography variant="h3">Không tìm thấy dịch vụ</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Dịch vụ bạn tìm kiếm không tồn tại.</Typography>
            <Button component={RouterLink} href="/sofa1/promotions" variant="contained" startIcon={<Iconify icon="eva:arrow-back-fill" />}>
              Quay lại danh sách
            </Button>
          </Stack>
        </Container>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${item.title} - Casa Sofa`}</title>
      </Helmet>

      <Sofa1PageHero
        overline="Dịch vụ hậu mãi"
        title={item.title}
        subtitle={item.description}
        image={SERVICE_IMAGES[item.slug] ?? SOFA1_PAGE_IMAGES.service1}
      />

      {/* Description + features */}
      <Sofa1Section>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid xs={12} md={7}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="overline" sx={{ color: 'text.disabled' }}>Mô tả chi tiết</Typography>
              <Typography variant="h3">{item.title}</Typography>
              <Typography sx={{ color: 'text.secondary' }}>{item.description}</Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Đội ngũ nghệ nhân của Casa Sofa cam kết mang đến chất lượng dịch vụ tốt nhất. Mọi quy
                trình đều tuân thủ tiêu chuẩn khắt khe để đảm bảo sự hài lòng tuyệt đối của khách hàng.
              </Typography>
            </Stack>
          </Grid>
          <Grid xs={12} md={5}>
            <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: 4, borderRadius: 2, bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.04) }}>
              <Typography variant="h6">Dịch vụ bao gồm</Typography>
              {features.map((c) => (
                <Stack key={c} direction="row" spacing={1.5} alignItems="flex-start">
                  <Iconify icon="eva:checkmark-circle-2-fill" sx={{ color: 'primary.main', mt: 0.25 }} width={20} />
                  <Typography variant="body2">{c}</Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Sofa1Section>

      {/* Why Casa Sofa */}
      <Sofa1Section bg="grey">
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>Vì sao chọn Casa Sofa</Typography>
          <Typography variant="h2">
            Chế tác bằng
            <Box component="span" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.main}, ${theme.vars.palette.warning.main}`) }}> tâm & tay nghề</Box>
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          {[
            { icon: 'solar:hammer-bold-duotone', title: 'Nghệ nhân lành nghề', desc: 'Đội ngũ nghệ nhân hơn 12 năm kinh nghiệm chế tác sofa.' },
            { icon: 'solar:shield-check-bold-duotone', title: 'Vật tư chính hãng', desc: 'Dùng vật tư an toàn, chính hãng, thân thiện với da bò.' },
            { icon: 'solar:medal-ribbons-star-bold-duotone', title: 'Cam kết chất lượng', desc: 'Kiểm tra chất lượng sau khi hoàn thành & cấp phiếu bảo hành.' },
          ].map((b) => (
            <Grid key={b.title} xs={12} md={4}>
              <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: 'primary.main' }}>
                  <Iconify icon={b.icon} width={28} />
                </Box>
                <Typography variant="h6">{b.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{b.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa1Section>

      {/* CTA */}
      <Sofa1Section>
        <Stack component={MotionViewport} spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
          <Typography variant="h3">Đặt lịch dịch vụ ngay</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Liên hệ để được tư vấn và đặt lịch dịch vụ {item.title.toLowerCase()} từ Casa Sofa.</Typography>
          <Button component={RouterLink} href="/sofa1/contact" size="large" variant="contained" color="primary" startIcon={<Iconify icon="solar:calendar-bold-duotone" />}>
            Đặt lịch ngay
          </Button>
        </Stack>
      </Sofa1Section>
    </>
  );
}
