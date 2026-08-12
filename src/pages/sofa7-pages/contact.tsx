import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA7_COLORS } from 'src/sections/sofa7/sofa7-data';
import { Sofa7Section, Sofa7PageHero } from 'src/sections/sofa7-pages/sofa7-page-hero';
import { SOFA7_PAGE_IMAGES, SOFA7_PAGE_COMPANY_INFO } from 'src/sections/sofa7-pages/sofa7-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Liên hệ Sofa7 · Industrial loft team' };

// ----------------------------------------------------------------------

export default function Page() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa7PageHero
        overline="Liên hệ"
        title={<>Liên hệ <span>Sofa7</span></>}
        subtitle="Kết nối với Sofa7 — đội ngũ industrial loft sẵn sàng tư vấn sofa cho không gian urban của bạn."
        image={SOFA7_PAGE_IMAGES.contact}
      />

      <Sofa7Section>
        <Grid container spacing={{ xs: 4, md: 6 }} component={MotionViewport}>
          {/* Company info */}
          <Grid xs={12} md={5}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Stack spacing={2}>
                <Typography variant="overline" sx={{ color: 'text.disabled', letterSpacing: 4 }}>Thông tin liên hệ</Typography>
                <Typography variant="h3" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold' }}>
                  <Box component="span" sx={{ ...textGradient(`90deg, ${SOFA7_COLORS.electric}, ${SOFA7_COLORS.cyan}`) }}>{SOFA7_PAGE_COMPANY_INFO.name}</Box>
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>{SOFA7_PAGE_COMPANY_INFO.tagline}</Typography>
              </Stack>

              <Stack spacing={2.5}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box sx={{ width: 44, height: 44, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA7_COLORS.electric, 0.12), color: SOFA7_COLORS.electric }}>
                    <Iconify icon="solar:phone-bold-duotone" width={22} />
                  </Box>
                  <Stack>
                    <Typography variant="caption" sx={{ color: 'text.disabled' }}>Điện thoại</Typography>
                    <Typography variant="subtitle2">{SOFA7_PAGE_COMPANY_INFO.phone}</Typography>
                  </Stack>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box sx={{ width: 44, height: 44, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA7_COLORS.cyan, 0.12), color: SOFA7_COLORS.cyan }}>
                    <Iconify icon="solar:letter-bold-duotone" width={22} />
                  </Box>
                  <Stack>
                    <Typography variant="caption" sx={{ color: 'text.disabled' }}>Email</Typography>
                    <Typography variant="subtitle2">{SOFA7_PAGE_COMPANY_INFO.email}</Typography>
                  </Stack>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box sx={{ width: 44, height: 44, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA7_COLORS.electric, 0.12), color: SOFA7_COLORS.electric }}>
                    <Iconify icon="solar:map-point-bold-duotone" width={22} />
                  </Box>
                  <Stack>
                    <Typography variant="caption" sx={{ color: 'text.disabled' }}>Địa chỉ</Typography>
                    <Typography variant="subtitle2">{SOFA7_PAGE_COMPANY_INFO.address}</Typography>
                  </Stack>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box sx={{ width: 44, height: 44, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA7_COLORS.cyan, 0.12), color: SOFA7_COLORS.cyan }}>
                    <Iconify icon="solar:calendar-bold-duotone" width={22} />
                  </Box>
                  <Stack>
                    <Typography variant="caption" sx={{ color: 'text.disabled' }}>Thành lập</Typography>
                    <Typography variant="subtitle2">{SOFA7_PAGE_COMPANY_INFO.founded}</Typography>
                  </Stack>
                </Stack>
              </Stack>

              {/* Stats */}
              <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap sx={{ pt: 2 }}>
                {SOFA7_PAGE_COMPANY_INFO.stats.map((stat) => (
                  <Stack key={stat.label} spacing={0.5}>
                    <Typography variant="h4" sx={{ color: SOFA7_COLORS.electric, fontWeight: 'fontWeightBold' }}>{stat.value}</Typography>
                    <Typography variant="caption" sx={{ color: 'text.disabled', textTransform: 'uppercase' }}>{stat.label}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* Contact form */}
          <Grid xs={12} md={7}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: { xs: 3, md: 5 }, borderRadius: 0, bgcolor: 'background.paper', border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}`, boxShadow: (t) => t.customShadows.card }}>
              {sent ? (
                <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 6 }}>
                  <Box sx={{ width: 72, height: 72, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA7_COLORS.electric, 0.2), color: SOFA7_COLORS.electric }}>
                    <Iconify icon="solar:check-circle-bold-duotone" width={40} />
                  </Box>
                  <Typography variant="h4" sx={{ textTransform: 'uppercase' }}>Tin nhắn đã gửi!</Typography>
                  <Typography sx={{ color: 'text.secondary', maxWidth: 420 }}>Cảm ơn bạn đã liên hệ Sofa7. Đội ngũ tư vấn sẽ phản hồi trong vòng 24 giờ.</Typography>
                  <Button onClick={() => setSent(false)} variant="outlined" sx={{ borderRadius: 0 }}>Gửi tin nhắn khác</Button>
                </Stack>
              ) : (
                <>
                  <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>Gửi tin nhắn cho chúng tôi</Typography>
                  <Grid container spacing={2}>
                    <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" required /></Grid>
                    <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" required /></Grid>
                    <Grid xs={12}><TextField fullWidth label="Email" type="email" required /></Grid>
                    <Grid xs={12}><TextField fullWidth label="Chủ đề" /></Grid>
                    <Grid xs={12}><TextField fullWidth label="Nội dung tin nhắn" multiline rows={5} /></Grid>
                  </Grid>
                  <Button variant="contained" size="large" sx={{ width: 'fit-content', borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, '&:hover': { bgcolor: SOFA7_COLORS.cyan } }} startIcon={<Iconify icon="solar:file-send-bold-duotone" />} onClick={() => setSent(true)}>
                    Gửi tin nhắn
                  </Button>
                </>
              )}
            </Stack>
          </Grid>
        </Grid>
      </Sofa7Section>

      {/* Map placeholder */}
      <Sofa7Section bg="grey">
        <Stack spacing={3} component={MotionViewport}>
          <Typography variant="h4" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold' }}>Bản đồ showroom</Typography>
          <Box
            component={m.div}
            variants={varFade({ distance: 24 }).inUp}
            sx={{
              width: 1,
              height: { xs: 280, md: 420 },
              borderRadius: 0,
              bgcolor: 'background.paper',
              border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `linear-gradient(135deg, ${varAlpha(SOFA7_COLORS.concrete, 0.04)} 25%, transparent 25%, transparent 50%, ${varAlpha(SOFA7_COLORS.concrete, 0.04)} 50%, ${varAlpha(SOFA7_COLORS.concrete, 0.04)} 75%, transparent 75%)`,
                backgroundSize: '24px 24px',
              }}
            />
            <Stack spacing={2} alignItems="center" sx={{ position: 'relative', textAlign: 'center' }}>
              <Iconify icon="solar:map-point-bold-duotone" width={56} sx={{ color: SOFA7_COLORS.electric }} />
              <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>{SOFA7_PAGE_COMPANY_INFO.address}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>Bản đồ Google Maps sẽ hiển thị tại đây.</Typography>
            </Stack>
          </Box>
        </Stack>
      </Sofa7Section>
    </>
  );
}
