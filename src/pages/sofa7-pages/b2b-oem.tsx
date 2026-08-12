import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
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

const metadata = { title: 'Sản xuất OEM — Sofa7' };

const CAPABILITIES = [
  { icon: 'solar:hammer-bold-duotone', title: 'Hàn Mig khung thép', desc: 'Xưởng hàn Mig công suất 500+ khung/tháng, sơn tĩnh điện 3 lớp.' },
  { icon: 'solar:shield-check-bold-duotone', title: 'Da thật nguyên tấm', desc: 'Nhập da bò nguyên tấm Ý, Brazil — bọc thủ công bởi thợ 10+ năm.' },
  { icon: 'solar:palette-bold-duotone', title: '40+ màu velvet', desc: 'Velvet Ý nhập khẩu, 40+ màu neon, chống bẩn, chống tĩnh điện.' },
  { icon: 'solar:scale-bold-duotone', title: 'MOQ linh hoạt', desc: 'MOQ từ 10 bộ/ mẫu. Chiết khấu sâu cho đơn 50+ bộ.' },
  { icon: 'solar:delivery-bold-duotone', title: 'Lead time 15-30 ngày', desc: 'Sản xuất 15-30 ngày tùy quy mô. Giao hàng toàn quốc.' },
  { icon: 'solar:document-bold-duotone', title: 'Brand riêng', desc: 'Đóng sofa theo logo, tag, label và thiết kế riêng của bạn.' },
];

export default function Page() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa7PageHero
        title="YÊU CẦU SẢN XUẤT OEM"
        subtitle="Đóng sofa theo thương hiệu riêng của bạn — xưởng Sofa7 với 10+ năm kinh nghiệm industrial loft, công suất 500+ khung/tháng."
        image={SOFA7_PAGE_IMAGES.factory}
        overline="Sản xuất OEM"
      />

      {/* OEM description */}
      <Sofa7Section>
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Typography variant="overline" sx={{ color: 'text.disabled' }}>OEM SOFA7</Typography>
              <Typography variant="h2" sx={{ textTransform: 'uppercase' }}>
                <Box component="span" sx={{ ...textGradient(`90deg, ${SOFA7_COLORS.electric} 0%, ${SOFA7_COLORS.cyan} 100%`) }}>
                  Sofa theo thương hiệu
                </Box>
                {' '}của bạn
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Sofa7 cung cấp dịch vụ sản xuất OEM cho các thương hiệu nội thất, showroom và nhà thầu
                muốn có dòng sofa industrial loft riêng. Từ thiết kế, chọn chất liệu đến đóng gói — tất cả
                được tùy chỉnh theo yêu cầu của bạn.
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Xưởng Sofa7 diện tích 2000m² với đội ngũ thợ hàn Mig, thợ bọc da và thợ may velvet
                10+ năm kinh nghiệm. Công suất 500+ khung/tháng, lead time 15-30 ngày.
              </Typography>
            </Stack>
          </Grid>
          <Grid xs={12} md={6}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Box
                component="img"
                src={SOFA7_PAGE_IMAGES.factory}
                alt="Xưởng OEM Sofa7"
                sx={{ width: 1, borderRadius: 0, aspectRatio: '4/3', objectFit: 'cover' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Sofa7Section>

      {/* Capabilities */}
      <Sofa7Section bg="grey">
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center', maxWidth: 600, mx: 'auto' }} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>NĂNG LỰC SẢN XUẤT</Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ textTransform: 'uppercase' }}>Khả năng OEM</Typography>
          </Box>
        </Stack>
        <Grid container spacing={3}>
          {CAPABILITIES.map((c, index) => (
            <Grid key={c.title} xs={12} sm={6} md={4}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.06 }}
                spacing={2}
                sx={{ p: 4, height: 1, borderRadius: 0, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}` }}
              >
                <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA7_COLORS.cyan, 0.1), color: SOFA7_COLORS.cyan }}>
                  <Iconify icon={c.icon} width={28} />
                </Box>
                <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>{c.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{c.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa7Section>

      {/* OEM form */}
      <Sofa7Section>
        <Grid container justifyContent="center">
          <Grid xs={12} md={8}>
            <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 0, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}` }}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Iconify icon="solar:hammer-bold-duotone" width={28} sx={{ color: SOFA7_COLORS.electric }} />
                <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>Yêu cầu OEM</Typography>
              </Stack>
              <Grid container spacing={2}>
                <Grid xs={12} sm={6}><TextField fullWidth label="Tên công ty" placeholder="VD: Street Furniture Co." /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Sản phẩm" placeholder="VD: Sofa góc L industrial" /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Số lượng" type="number" placeholder="VD: 50" /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Chất liệu" placeholder="VD: Da thật + khung thép" /></Grid>
                <Grid xs={12}><TextField fullWidth label="Yêu cầu đặc biệt" multiline rows={4} placeholder="Logo, label, màu sắc, kích thước, thời gian giao..." /></Grid>
              </Grid>
              <Button variant="contained" size="large" startIcon={<Iconify icon="solar:letter-bold-duotone" />} sx={{ width: 'fit-content', bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, borderRadius: 0, '&:hover': { bgcolor: SOFA7_COLORS.electric } }} onClick={() => setSent(true)}>
                {sent ? 'Đã gửi yêu cầu' : 'Gửi yêu cầu OEM'}
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa7Section>

      {/* CTA */}
      <Sofa7Section bg="grey">
        <Stack spacing={2} alignItems="center" sx={{ textAlign: 'center' }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>Cần báo giá cho dự án nội thất?</Typography>
          <Button component={RouterLink} href="/sofa7/b2b/quote" variant="outlined" sx={{ borderRadius: 0, borderColor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.concrete, '&:hover': { borderColor: SOFA7_COLORS.electric, color: SOFA7_COLORS.electric } }} startIcon={<Iconify icon="solar:document-bold-duotone" />}>
            Báo giá dự án
          </Button>
        </Stack>
      </Sofa7Section>
    </>
  );
}
