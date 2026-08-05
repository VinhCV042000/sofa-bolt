import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa7PageHero, Sofa7Section } from 'src/sections/sofa7-pages/sofa7-page-hero';
import { SOFA7_PAGE_IMAGES } from 'src/sections/sofa7-pages/sofa7-pages-data';
import { SOFA7_COLORS } from 'src/sections/sofa7/sofa7-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Đăng ký đại lý — Sofa7' };

const BUSINESS_TYPES = [
  { value: 'showroom', label: 'Showroom nội thất' },
  { value: 'noi-that', label: 'Công ty nội thất' },
  { value: 'kien-truc-su', label: 'Kiến trúc sư / Thiết kế' },
  { value: 'nha-thau', label: 'Nhà thầu thi công' },
  { value: 'dien-may', label: 'Đại lý bán lẻ' },
  { value: 'khac', label: 'Khác' },
];

export default function Page() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa7PageHero
        title="ĐĂNG KÝ ĐẠI LÝ"
        subtitle="Trở thành đối tác phân phối Sofa7 — điền thông tin below để nhận chính sách chiết khấu và hỗ trợ tốt nhất."
        image={SOFA7_PAGE_IMAGES.b2b}
        overline="Đăng ký"
      />

      {/* Intro */}
      <Sofa7Section>
        <Stack spacing={3} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>QUY TRÌNH ĐĂNG KÝ</Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ textTransform: 'uppercase' }}>
              <Box component="span" sx={{ ...textGradient(`90deg, ${SOFA7_COLORS.electric} 0%, ${SOFA7_COLORS.cyan} 100%`) }}>
                Trở thành đối tác
              </Box>
              {' '}Sofa7
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Điền form đăng ký below. Đội ngũ B2B Sofa7 sẽ liên hệ trong 24h để đánh giá và ký kết
              hợp đồng phân phối. Quy trình minh bạch, nhanh chóng — join the urban movement.
            </Typography>
          </Box>
        </Stack>
      </Sofa7Section>

      {/* Form */}
      <Sofa7Section bg="grey">
        <Grid container justifyContent="center">
          <Grid xs={12} md={8}>
            <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 0, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}` }}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Iconify icon="solar:hand-shake-bold-duotone" width={28} sx={{ color: SOFA7_COLORS.electric }} />
                <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>Thông tin đăng ký</Typography>
              </Stack>
              <Grid container spacing={2}>
                <Grid xs={12} sm={6}><TextField fullWidth label="Tên công ty" placeholder="VD: Urban Loft JSC" /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Người liên hệ" placeholder="Họ và tên" /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Email" type="email" placeholder="email@company.vn" /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="SĐT" placeholder="0xx xxx xxxx" /></Grid>
                <Grid xs={12}><TextField fullWidth label="Địa chỉ" placeholder="Địa chỉ công ty" /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Tỉnh/Thành" placeholder="VD: Hà Nội" /></Grid>
                <Grid xs={12} sm={6}>
                  <TextField fullWidth select label="Loại hình kinh doanh" defaultValue="">
                    {BUSINESS_TYPES.map((t) => <MenuItem key={t.value} value={t.value}>{t.label}</MenuItem>)}
                  </TextField>
                </Grid>
                <Grid xs={12}><TextField fullWidth label="Mô tả" multiline rows={4} placeholder="Mô tả ngắn về quy mô, thị trường và mục tiêu kinh doanh..." /></Grid>
              </Grid>
              <Button variant="contained" size="large" startIcon={<Iconify icon="solar:letter-bold-duotone" />} sx={{ width: 'fit-content', bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, borderRadius: 0, '&:hover': { bgcolor: SOFA7_COLORS.electric } }} onClick={() => setSent(true)}>
                {sent ? 'Đã gửi đăng ký' : 'Gửi đăng ký'}
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa7Section>

      {/* CTA */}
      <Sofa7Section>
        <Stack spacing={2} alignItems="center" sx={{ textAlign: 'center' }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>Muốn tìm hiểu thêm về chính sách đại lý?</Typography>
          <Button component={RouterLink} href="/sofa7/b2b/policy" variant="outlined" sx={{ borderRadius: 0, borderColor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.concrete, '&:hover': { borderColor: SOFA7_COLORS.electric, color: SOFA7_COLORS.electric } }} startIcon={<Iconify icon="solar:scale-bold-duotone" />}>
            Xem chính sách đại lý
          </Button>
        </Stack>
      </Sofa7Section>
    </>
  );
}
