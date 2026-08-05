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
import { Sofa7PageHero, Sofa7Section } from 'src/sections/sofa7-pages/sofa7-page-hero';

// ----------------------------------------------------------------------

const metadata = { title: 'Dịch vụ sản xuất · Sofa7' };

const SERVICES = [
  {
    sub: 'gia-cong',
    icon: 'solar:hammer-bold-duotone',
    title: 'Gia công sofa',
    short: 'Gia công sofa theo bản vẽ của khách hàng với xưởng thép + da.',
    points: ['Hàn Mig khung thép', 'Bọc da/velvet thủ công', 'Sơn tĩnh điện 3 lớp', 'QC từng công đoạn'],
  },
  {
    sub: 'oem',
    icon: 'solar:factory-bold-duotone',
    title: 'Sản xuất OEM',
    short: 'Sản xuất sofa theo thương hiệu của đối tác, full spec.',
    points: ['Theo thiết kế đối tác', 'In logo / nhãn mác', 'Đóng gói trắng', 'Xuất kho theo lô'],
  },
  {
    sub: 'odm',
    icon: 'solar:widget-bold-duotone',
    title: 'Thiết kế & sản xuất ODM',
    short: 'Sofa7 thiết kế + sản xuất mẫu sofa riêng cho thương hiệu bạn.',
    points: ['Thiết kế mẫu độc quyền', 'Prototype 1-2 tuần', 'Sản xuất hàng loạt', 'Bản quyền mẫu thuộc đối tác'],
  },
  {
    sub: 'du-an',
    icon: 'solar:buildings-bold-duotone',
    title: 'Sản xuất dự án',
    short: 'Sản xuất sofa số lượng lớn cho dự án căn hộ, KS, resort.',
    points: ['Số lượng 10-500 bộ', 'Đồng bộ chất lượng', 'Lắp đặt tại hiện trường', 'Bảo hành theo dự án'],
  },
];

const SUB_DETAIL: Record<string, { title: string; description: string }> = {
  'gia-cong': { title: 'Gia công sofa theo bản vẽ', description: 'Xưởng Sofa7 nhận gia công sofa theo bản vẽ kỹ thuật của khách hàng. Đội thợ hàn Mig khung thép đen, thợ bọc da/velvet thủ công với hơn 10 năm kinh nghiệm. Đảm bảo chất lượng từng công đoạn.' },
  oem: { title: 'Sản xuất OEM', description: 'Sản xuất sofa theo đúng thiết kế, spec và thương hiệu của đối tác. Hỗ trợ in logo, nhãn mác, đóng gói trắng (white label) và xuất kho theo lô. Phù hợp thương hiệu nội thất cần nguồn sản xuất uy tín.' },
  odm: { title: 'Thiết kế & sản xuất ODM', description: 'Sofa7 thiết kế và sản xuất mẫu sofa độc quyền cho thương hiệu của bạn. Từ ý tưởng đến prototype trong 1-2 tuần, sau đó sản xuất hàng loạt. Bản quyền mẫu thuộc về đối tác.' },
  'du-an': { title: 'Sản xuất sofa dự án', description: 'Sản xuất sofa số lượng lớn cho dự án căn hộ, khách sạn, resort, văn phòng. Đồng bộ chất lượng, lắp đặt tại hiện trường, bảo hành theo gói dự án. Đã đồng hành 40+ dự án trên toàn quốc.' },
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
        overline="Dịch vụ sản xuất"
        title={<>Dịch vụ <span>sản xuất</span></>}
        subtitle="Xưởng Sofa7 — hàn Mig khung thép đen, bọc da/velvet thủ công. Sản xuất OEM, ODM và dự án số lượng lớn."
        image={SOFA7_PAGE_IMAGES.factory}
      />

      <Sofa7Section>
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }} component={MotionViewport}>
          <Typography variant="overline" sx={{ color: 'text.disabled', letterSpacing: 4 }}>Dịch vụ sản xuất</Typography>
          <Typography variant="h2" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold' }}>
            Bốn mảng
            <Box component="span" sx={{ ...textGradient(`90deg, ${SOFA7_COLORS.electric}, ${SOFA7_COLORS.cyan}`) }}> sản xuất</Box>
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Từ gia công theo bản vẽ đến OEM, ODM và dự án số lượng lớn — xưởng Sofa7 sẵn sàng.</Typography>
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
                  <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA7_COLORS.cyan, 0.12), color: SOFA7_COLORS.cyan }}>
                    <Iconify icon={service.icon} width={28} />
                  </Box>
                  <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>{service.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', flex: 1 }}>{service.short}</Typography>
                  <Stack spacing={1}>
                    {service.points.map((p) => (
                      <Stack key={p} direction="row" spacing={1} alignItems="center">
                        <Iconify icon="solar:check-circle-bold-duotone" width={16} sx={{ color: SOFA7_COLORS.electric }} />
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>{p}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                  <Button component={RouterLink} href={`/sofa7/services/production/${service.sub}`} size="small" endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />} sx={{ color: SOFA7_COLORS.cyan }}>
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
              <Box sx={{ width: 48, height: 48, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA7_COLORS.electric, 0.16), color: SOFA7_COLORS.electric }}>
                <Iconify icon={active.icon} width={24} />
              </Box>
              <Typography variant="h4" sx={{ textTransform: 'uppercase' }}>{SUB_DETAIL[sub].title}</Typography>
            </Stack>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{SUB_DETAIL[sub].description}</Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <Button component={RouterLink} href="/sofa7/contact" variant="contained" startIcon={<Iconify icon="solar:chat-round-like-bold-duotone" />} sx={{ borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, '&:hover': { bgcolor: SOFA7_COLORS.cyan } }}>
                Yêu cầu báo giá
              </Button>
              <Button component={RouterLink} href="/sofa7/services/production" variant="outlined" sx={{ borderRadius: 0 }}>Quay lại</Button>
            </Stack>
          </Stack>
        )}
      </Sofa7Section>

      <Sofa7Section bg="grey">
        <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }} component={MotionViewport}>
          <Typography variant="h3" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold' }}>Cần sản xuất số lượng lớn?</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Xưởng Sofa7 đồng hành từ prototype đến sản xuất hàng loạt.</Typography>
          <Button component={RouterLink} href="/sofa7/contact" size="large" variant="contained" startIcon={<Iconify icon="solar:chat-round-like-bold-duotone" />} sx={{ borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, '&:hover': { bgcolor: SOFA7_COLORS.cyan } }}>
            Liên hệ xưởng
          </Button>
        </Stack>
      </Sofa7Section>
    </>
  );
}
