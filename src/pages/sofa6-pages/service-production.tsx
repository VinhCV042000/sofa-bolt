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

const metadata = { title: 'Dịch vụ sản xuất · Sofa Earth' };

const SERVICES = [
  {
    sub: 'gia-cong',
    icon: 'solar:hammer-bold-duotone',
    title: 'Gia công sofa',
    short: 'Gia công sofa theo bản vẽ, kích thước và vật liệu riêng.',
    points: ['Đóng theo bản vẽ', 'Vật liệu tự nhiên', 'Nghệ nhân 15+ năm', 'Giao 5-10 ngày'],
  },
  {
    sub: 'oem',
    icon: 'solar:factory-bold-duotone',
    title: 'Gia công OEM',
    short: 'Sản xuất sofa theo thương hiệu của bạn, full-service.',
    points: ['In thương hiệu riêng', 'Đóng gói chuẩn xuất khẩu', 'Số lượng lớn', 'Báo giá sỉ'],
  },
  {
    sub: 'odm',
    icon: 'solar:customize-bold-duotone',
    title: 'Thiết kế ODM',
    short: 'Thiết kế và sản xuất mẫu sofa mới theo ý tưởng của bạn.',
    points: ['Thiết kế mẫu mới', 'Bản quyền thiết kế', 'Sản xuất hàng loạt', 'Hỗ trợ marketing'],
  },
  {
    sub: 'du-an',
    icon: 'solar:buildings-bold-duotone',
    title: 'Sản xuất dự án',
    short: 'Sản xuất sofa cho dự án căn hộ, resort, khách sạn.',
    points: ['Số lượng lớn', 'Đồng bộ thiết kế', 'Lắp đặt tận nơi', 'Bảo hành dự án'],
  },
];

const SUB_DETAIL: Record<string, { title: string; description: string }> = {
  'gia-cong': { title: 'Gia công sofa theo yêu cầu', description: 'Sofa Earth nhận gia công sofa theo bản vẽ, kích thước và vật liệu riêng. Mỗi sản phẩm được làm bởi nghệ nhân Việt với 15+ năm kinh nghiệm, sử dụng vật liệu tự nhiên bền vững.' },
  oem: { title: 'Gia công OEM', description: 'Chúng tôi sản xuất sofa mang thương hiệu của bạn — full-service từ nguyên liệu, đóng gói chuẩn xuất khẩu đến in logo. Phù hợp cho thương hiệu nội thất muốn mở rộng danh mục sản phẩm.' },
  odm: { title: 'Thiết kế & sản xuất ODM', description: 'Bạn có ý tưởng, chúng tôi thiết kế và sản xuất. Sofa Earth hỗ trợ từ bản vẽ, nguyên mẫu đến sản xuất hàng loạt với bản quyền thiết kế thuộc về bạn.' },
  'du-an': { title: 'Sản xuất sofa dự án', description: 'Sản xuất sofa đồng bộ cho dự án căn hộ, resort, khách sạn, văn phòng. Đảm bảo số lượng lớn, thiết kế đồng bộ, lắp đặt tận nơi và bảo hành dự án.' },
};

// ----------------------------------------------------------------------

export default function Page() {
  const { sub } = useParams();
  const active = sub ? SERVICES.find((s) => s.sub === sub) : null;

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa6PageHero
        overline="Dịch vụ sản xuất"
        title={<>Dịch vụ <span>sản xuất</span></>}
        subtitle="Sofa Earth sản xuất sofa từ vật liệu thiên nhiên — gia công theo yêu cầu, OEM, ODM và sản xuất dự án với chất lượng thủ công Việt."
        image={SOFA6_PAGE_IMAGES.factory}
      />

      <Sofa6Section>
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }} component={MotionViewport}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>Dịch vụ sản xuất</Typography>
          <Typography variant="h2">
            Bốn mảng
            <Box component="span" sx={{ ...textGradient(`135deg, ${SOFA6_COLORS.terracottaLight}, ${SOFA6_COLORS.sageLight}`) }}> sản xuất</Box>
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Từ gia công riêng đến OEM/ODM và dự án lớn — xưởng thủ công Việt của Sofa Earth.</Typography>
        </Stack>

        <Grid container spacing={3} component={MotionViewport}>
          {SERVICES.map((service) => {
            const isActive = sub === service.sub;
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
                  <Button component={RouterLink} href={`/sofa6/services/production/${service.sub}`} size="small" endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>
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
                Nhận báo giá
              </Button>
              <Button component={RouterLink} href="/sofa6/services/production" variant="outlined">Quay lại</Button>
            </Stack>
          </Stack>
        )}
      </Sofa6Section>

      <Sofa6Section bg="grey">
        <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }} component={MotionViewport}>
          <Typography variant="h3">Cần sản xuất sofa số lượng lớn?</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Xưởng thủ công Sofa Earth sẵn sàng nhận gia công, OEM/ODM và dự án lớn.</Typography>
          <Button component={RouterLink} href="/sofa6/contact" size="large" variant="contained" startIcon={<Iconify icon="solar:chat-round-like-bold-duotone" />} sx={{ bgcolor: SOFA6_COLORS.terracotta, '&:hover': { bgcolor: SOFA6_COLORS.clay } }}>
            Liên hệ xưởng
          </Button>
        </Stack>
      </Sofa6Section>
    </>
  );
}
