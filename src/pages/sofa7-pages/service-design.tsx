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

import { SOFA7_COLORS } from 'src/sections/sofa7/sofa7-data';
import { SOFA7_PAGE_IMAGES } from 'src/sections/sofa7-pages/sofa7-pages-data';
import { Sofa7Section, Sofa7PageHero } from 'src/sections/sofa7-pages/sofa7-page-hero';

// ----------------------------------------------------------------------

const metadata = { title: 'Thiết kế nội thất · Sofa7' };

const SERVICES = [
  {
    sub: 'custom',
    icon: 'solar:pen-new-round-bold-duotone',
    title: 'Thiết kế theo yêu cầu',
    short: 'Sofa độc bản theo kích thước, vật liệu và vibe riêng cho loft của bạn.',
    points: ['Đo đạc tận nơi', 'Bản vẽ 2D/3D', 'Chọn da/velvet & màu', 'Báo giá minh bạch'],
  },
  {
    sub: '3d',
    icon: 'solar:cube-bold-duotone',
    title: 'Dự án 3D nội thất',
    short: 'Render 3D phòng khách với sofa thật trước khi sản xuất.',
    points: ['Render chất lượng cao', 'Góc nhìn đa chiều', 'Điều chỉnh thoải mái', 'Hoàn thiện trong 3 ngày'],
  },
  {
    sub: 'consult',
    icon: 'solar:chat-round-like-bold-duotone',
    title: 'Tư vấn nội thất industrial',
    short: 'Chuyên gia Sofa7 đồng hành chọn sofa industrial phù hợp.',
    points: ['Tư vấn vật liệu loft', 'Phối cảnh không gian', 'Tối ưu chi phí', 'Hỗ trợ trọn đời'],
  },
  {
    sub: 'overview',
    icon: 'solar:clipboard-list-bold-duotone',
    title: 'Tổng quan quy trình',
    short: 'Quy trình thiết kế 4 bước rõ ràng, minh bạch.',
    points: ['Tiếp nhận & khảo sát', 'Phương án thiết kế', 'Chốt bản vẽ', 'Bàn giao thiết kế'],
  },
];

const SUB_DETAIL: Record<string, { title: string; description: string }> = {
  custom: { title: 'Thiết kế sofa theo yêu cầu', description: 'Chúng tôi thiết kế sofa độc bản theo kích thước, chất liệu và phong cách industrial riêng cho loft của bạn. Mỗi mẫu sofa là một tác phẩm thủ công mang dấu ấn urban — khung thép đen, da thật, velvet neon.' },
  '3d': { title: 'Dự án 3D nội thất', description: 'Xem trước không gian sống của bạn với sofa Sofa7 qua bản render 3D chân thực trước khi sản xuất. Bạn có thể điều chỉnh góc nhìn, ánh sáng và màu sắc cho đến khi hoàn toàn hài lòng với vibe loft.' },
  consult: { title: 'Tư vấn nội thất industrial', description: 'Đội ngũ chuyên gia Sofa7 sẽ đồng hành cùng bạn chọn vật liệu industrial phù hợp — da thật, velvet neon, khung thép đen — tối ưu chi phí và không gian cho vibe urban loft.' },
  overview: { title: 'Quy trình thiết kế 4 bước', description: 'Từ tiếp nhận yêu cầu đến bàn giao bản thiết kế, quy trình 4 bước rõ ràng, minh bạch giúp bạn nắm bắt toàn bộ tiến độ dự án.' },
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

      <Sofa7PageHero
        overline="Dịch vụ thiết kế"
        title={<>Thiết kế <span>nội thất</span></>}
        subtitle="Sofa7 thiết kế nội thất industrial loft — khung thép đen, da thật, velvet neon 40+ màu. Độc bản cho từng không gian urban."
        image={SOFA7_PAGE_IMAGES.service1}
      />

      <Sofa7Section>
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }} component={MotionViewport}>
          <Typography variant="overline" sx={{ color: 'text.disabled', letterSpacing: 4 }}>Dịch vụ thiết kế</Typography>
          <Typography variant="h2" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold' }}>
            Bốn mảng
            <Box component="span" sx={{ ...textGradient(`90deg, ${SOFA7_COLORS.electric}, ${SOFA7_COLORS.cyan}`) }}> thiết kế</Box>
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Từ thiết kế riêng đến dự án 3D và tư vấn industrial — trọn gói cho loft của bạn.</Typography>
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
                    borderRadius: 0,
                    bgcolor: 'background.paper',
                    border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}`,
                    boxShadow: (t) => t.customShadows.card,
                    transition: (t) => t.transitions.create(['transform', 'box-shadow'], { duration: 300 }),
                    '&:hover': { transform: 'translateY(-6px)', border: `1px solid ${SOFA7_COLORS.electric}` },
                    ...(isActive && { outline: `2px solid ${SOFA7_COLORS.electric}`, outlineOffset: 2 }),
                  }}
                >
                  <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA7_COLORS.electric, 0.12), color: SOFA7_COLORS.electric }}>
                    <Iconify icon={service.icon} width={28} />
                  </Box>
                  <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>{service.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', flex: 1 }}>{service.short}</Typography>
                  <Stack spacing={1}>
                    {service.points.map((p) => (
                      <Stack key={p} direction="row" spacing={1} alignItems="center">
                        <Iconify icon="solar:check-circle-bold-duotone" width={16} sx={{ color: SOFA7_COLORS.cyan }} />
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>{p}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                  <Button component={RouterLink} href={`/sofa7/services/design/${service.sub}`} size="small" endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />} sx={{ color: SOFA7_COLORS.electric }}>
                    Xem chi tiết
                  </Button>
                </Stack>
              </Grid>
            );
          })}
        </Grid>

        {active && sub && SUB_DETAIL[sub] && (
          <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ mt: 6, p: { xs: 3, md: 5 }, borderRadius: 0, bgcolor: 'background.paper', border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}`, boxShadow: (t) => t.customShadows.card }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box sx={{ width: 48, height: 48, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA7_COLORS.cyan, 0.16), color: SOFA7_COLORS.cyan }}>
                <Iconify icon={active.icon} width={24} />
              </Box>
              <Typography variant="h4" sx={{ textTransform: 'uppercase' }}>{SUB_DETAIL[sub].title}</Typography>
            </Stack>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{SUB_DETAIL[sub].description}</Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <Button component={RouterLink} href="/sofa7/contact" variant="contained" startIcon={<Iconify icon="solar:chat-round-like-bold-duotone" />} sx={{ borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, '&:hover': { bgcolor: SOFA7_COLORS.cyan } }}>
                Đặt tư vấn
              </Button>
              <Button component={RouterLink} href="/sofa7/services/design" variant="outlined" sx={{ borderRadius: 0 }}>Quay lại</Button>
            </Stack>
          </Stack>
        )}
      </Sofa7Section>

      <Sofa7Section bg="grey">
        <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }} component={MotionViewport}>
          <Typography variant="h3" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold' }}>Sẵn sàng thiết kế sofa của riêng bạn?</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Đội ngũ thiết kế Sofa7 sẽ đồng hành từ ý tưởng đến bản vẽ hoàn chỉnh.</Typography>
          <Button component={RouterLink} href="/sofa7/contact" size="large" variant="contained" startIcon={<Iconify icon="solar:calendar-bold-duotone" />} sx={{ borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, '&:hover': { bgcolor: SOFA7_COLORS.cyan } }}>
            Liên hệ ngay
          </Button>
        </Stack>
      </Sofa7Section>
    </>
  );
}
