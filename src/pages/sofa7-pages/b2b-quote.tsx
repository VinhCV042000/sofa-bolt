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
import { SOFA7_PAGE_IMAGES, SOFA7_PAGE_PROJECT_TYPES } from 'src/sections/sofa7-pages/sofa7-pages-data';
import { SOFA7_COLORS } from 'src/sections/sofa7/sofa7-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Báo giá dự án — Sofa7' };

export default function Page() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa7PageHero
        title="BÁO GIÁ DỰ ÁN"
        subtitle="Nhận báo giá chi tiết cho dự án industrial loft của bạn — từ căn hộ, biệt thự đến khách sạn, resort, văn phòng và showroom."
        image={SOFA7_PAGE_IMAGES.project1}
        overline="Báo giá"
      />

      {/* Intro */}
      <Sofa7Section>
        <Stack spacing={3} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>BÁO GIÁ DỰ ÁN</Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ textTransform: 'uppercase' }}>
              <Box component="span" sx={{ ...textGradient(`90deg, ${SOFA7_COLORS.electric} 0%, ${SOFA7_COLORS.cyan} 100%`) }}>
                Báo giá nhanh
              </Box>
              {' '}trong 24h
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Điền thông tin dự án below. Đội ngũ dự án Sofa7 sẽ liên hệ và gửi báo giá chi tiết trong
              vòng 24h. Chiết khấu đặc biệt cho dự án số lượng lớn và khách sạn, resort.
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
                <Iconify icon="solar:document-bold-duotone" width={28} sx={{ color: SOFA7_COLORS.electric }} />
                <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>Thông tin dự án</Typography>
              </Stack>
              <Grid container spacing={2}>
                <Grid xs={12} sm={6}><TextField fullWidth label="Tên dự án" placeholder="VD: Loft District 7" /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Khách hàng" placeholder="Tên khách hàng / công ty" /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Email" type="email" placeholder="email@company.vn" /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="SĐT" placeholder="0xx xxx xxxx" /></Grid>
                <Grid xs={12} sm={6}>
                  <TextField fullWidth select label="Loại dự án" defaultValue="">
                    {SOFA7_PAGE_PROJECT_TYPES.map((t) => <MenuItem key={t.slug} value={t.slug}>{t.label}</MenuItem>)}
                  </TextField>
                </Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Số lượng" type="number" placeholder="VD: 10" /></Grid>
                <Grid xs={12}><TextField fullWidth label="Yêu cầu chi tiết" multiline rows={4} placeholder="Mô tả yêu cầu: chất liệu, màu sắc, kích thước, thời gian..." /></Grid>
              </Grid>
              <Button variant="contained" size="large" startIcon={<Iconify icon="solar:letter-bold-duotone" />} sx={{ width: 'fit-content', bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, borderRadius: 0, '&:hover': { bgcolor: SOFA7_COLORS.electric } }} onClick={() => setSent(true)}>
                {sent ? 'Đã gửi yêu cầu' : 'Gửi yêu cầu báo giá'}
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa7Section>

      {/* CTA */}
      <Sofa7Section>
        <Stack spacing={2} alignItems="center" sx={{ textAlign: 'center' }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>Muốn sản xuất sofa theo thương hiệu riêng?</Typography>
          <Button component={RouterLink} href="/sofa7/b2b/oem" variant="outlined" sx={{ borderRadius: 0, borderColor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.concrete, '&:hover': { borderColor: SOFA7_COLORS.electric, color: SOFA7_COLORS.electric } }} startIcon={<Iconify icon="solar:hammer-bold-duotone" />}>
            Yêu cầu sản xuất OEM
          </Button>
        </Stack>
      </Sofa7Section>
    </>
  );
}
