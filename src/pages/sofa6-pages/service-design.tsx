import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

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
import { SOFA6_PAGE_IMAGES } from 'src/sections/sofa6-pages/sofa6-pages-data';
import { Sofa6Section, Sofa6PageHero } from 'src/sections/sofa6-pages/sofa6-page-hero';

// ----------------------------------------------------------------------

const metadata = { title: 'Thiết kế nội thất · Sofa Earth' };

const SERVICES = [
  {
    sub: 'custom',
    icon: 'solar:pen-new-round-bold-duotone',
    title: 'Thiết kế theo yêu cầu',
    short: 'Thiết kế sofa riêng cho không gian và phong cách của bạn.',
    points: ['Đo đạc tận nơi', 'Bản vẽ 2D/3D', 'Chọn vật liệu & màu', 'Báo giá minh bạch'],
  },
  {
    sub: '3d',
    icon: 'solar:cube-bold-duotone',
    title: 'Dự án 3D nội thất',
    short: 'Xem trước phòng khách của bạn với sofa thật trước khi sản xuất.',
    points: ['Render 3D chất lượng cao', 'Góc nhìn đa chiều', 'Điều chỉnh thoải mái', 'Hoàn thiện trong 3 ngày'],
  },
  {
    sub: 'consult',
    icon: 'solar:chat-round-like-bold-duotone',
    title: 'Tư vấn nội thất xanh',
    short: 'Chuyên gia Sofa Earth đồng hành cùng bạn chọn sofa phù hợp.',
    points: ['Tư vấn vật liệu tự nhiên', 'Phối cảnh phong thủy', 'Tối ưu chi phí', 'Hỗ trợ trọn đời'],
  },
  {
    sub: 'overview',
    icon: 'solar:clipboard-list-bold-duotone',
    title: 'Tổng quan quy trình',
    short: 'Quy trình thiết kế 4 bước rõ ràng, minh bạch.',
    points: ['Tiếp nhận & khảo sát', 'Phương án thiết kế', 'Chốt bản vẽ', 'Bàn giao bản thiết kế'],
  },
];

const SUB_DETAIL: Record<string, { title: string; description: string }> = {
  custom: { title: 'Thiết kế sofa theo yêu cầu', description: 'Chúng tôi thiết kế sofa độc bản theo kích thước, chất liệu và phong cách riêng cho ngôi nhà của bạn. Mỗi mẫu sofa là một tác phẩm thủ công mang dấu ấn cá nhân.' },
  '3d': { title: 'Dự án 3D nội thất', description: 'Xem trước không gian sống của bạn với sofa Sofa Earth qua bản render 3D chân thực trước khi bắt đầu sản xuất. Bạn có thể điều chỉnh góc nhìn, ánh sáng và màu sắc cho đến khi hoàn toàn hài lòng.' },
  consult: { title: 'Tư vấn nội thất xanh', description: 'Đội ngũ chuyên gia của Sofa Earth sẽ đồng hành cùng bạn để chọn vật liệu tự nhiên phù hợp, tối ưu phong thủy và chi phí cho không gian sống xanh.' },
  overview: { title: 'Quy trình thiết kế 4 bước', description: 'Từ tiếp nhận yêu cầu đến bàn giao bản thiết kế, quy trình 4 bước rõ ràng, minh bạch giúp bạn nắm bắt toàn bộ tiến độ.' },
};

// ----------------------------------------------------------------------

export default function Page() {
  const { sub } = useParams();
  const [openSub] = useState(sub ?? null);

  const active = sub ? SERVICES.find((s) => s.sub === sub) : null;

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa6PageHero
        overline="Dịch vụ thiết kế"
        title={<>Thiết kế <span>nội thất</span></>}
        subtitle="Sofa Earth thiết kế nội thất xanh từ vật liệu thiên nhiên — linen, bông hữu cơ, wool và thuốc nhuộm thực vật, mang không gian sống gần gũi với thiên nhiên."
        image={SOFA6_PAGE_IMAGES.service1}
      />

      <Sofa6Section>
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }} component={MotionViewport}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>Dịch vụ thiết kế</Typography>
          <Typography variant="h2">
            Bốn mảng
            <Box component="span" sx={{ ...textGradient(`135deg, ${SOFA6_COLORS.terracottaLight}, ${SOFA6_COLORS.sageLight}`) }}> thiết kế</Box>
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Từ thiết kế riêng đến dự án 3D và tư vấn nội thất xanh — trọn gói cho ngôi nhà của bạn.</Typography>
        </Stack>

        <Grid container spacing={3} component={MotionViewport}>
          {SERVICES.map((service) => {
            const isActive = openSub === service.sub;
            return (
              <Grid key={service.sub} xs={12} sm={6} md={3}>
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
                    transition: (t) => t.transitions.create(['transform', 'box-shadow'], { duration: 300 }),
                    '&:hover': { transform: 'translateY(-6px)' },
                    ...(isActive && { outline: `2px solid ${SOFA6_COLORS.terracottaLight}` }),
                  }}
                >
                  <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(`rgb(${SOFA6_COLORS.terracottaLight.slice(1).match(/.{2}/g)?.map((h) => parseInt(h, 16)).join(',')})`, 0.12), color: SOFA6_COLORS.terracotta }}>
                    <Iconify icon={service.icon} width={28} />
                  </Box>
                  <Typography variant="h6">{service.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', flex: 1 }}>{service.short}</Typography>
                  <Stack spacing={1}>
                    {service.points.map((p) => (
                      <Stack key={p} direction="row" spacing={1} alignItems="center">
                        <Iconify icon="solar:check-circle-bold-duotone" width={16} sx={{ color: SOFA6_COLORS.sage }} />
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>{p}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                  <Button component={RouterLink} href={`/sofa6/services/design/${service.sub}`} size="small" endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>
                    Xem chi tiết
                  </Button>
                </Stack>
              </Grid>
            );
          })}
        </Grid>

        {active && sub && SUB_DETAIL[sub] && (
          <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ mt: 6, p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box sx={{ width: 48, height: 48, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(`rgb(${SOFA6_COLORS.sageLight.slice(1).match(/.{2}/g)?.map((h) => parseInt(h, 16)).join(',')})`, 0.16), color: SOFA6_COLORS.sage }}>
                <Iconify icon={active.icon} width={24} />
              </Box>
              <Typography variant="h4">{SUB_DETAIL[sub].title}</Typography>
            </Stack>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{SUB_DETAIL[sub].description}</Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <Button component={RouterLink} href="/sofa6/contact" variant="contained" startIcon={<Iconify icon="solar:chat-round-like-bold-duotone" />} sx={{ bgcolor: SOFA6_COLORS.terracotta, '&:hover': { bgcolor: SOFA6_COLORS.clay } }}>
                Đặt tư vấn
              </Button>
              <Button component={RouterLink} href="/sofa6/services/design" variant="outlined">Quay lại</Button>
            </Stack>
          </Stack>
        )}
      </Sofa6Section>

      <Sofa6Section bg="grey">
        <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }} component={MotionViewport}>
          <Typography variant="h3">Sẵn sàng thiết kế sofa của riêng bạn?</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Đội ngũ thiết kế Sofa Earth sẽ đồng hành từ ý tưởng đến bản vẽ hoàn chỉnh.</Typography>
          <Button component={RouterLink} href="/sofa6/contact" size="large" variant="contained" startIcon={<Iconify icon="solar:calendar-bold-duotone" />} sx={{ bgcolor: SOFA6_COLORS.terracotta, '&:hover': { bgcolor: SOFA6_COLORS.clay } }}>
            Liên hệ ngay
          </Button>
        </Stack>
      </Sofa6Section>
    </>
  );
}
