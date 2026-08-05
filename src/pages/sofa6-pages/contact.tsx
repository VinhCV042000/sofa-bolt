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

import { SOFA6_COLORS } from 'src/sections/sofa6/sofa6-data';
import { Sofa6Section, Sofa6PageHero } from 'src/sections/sofa6-pages/sofa6-page-hero';
import { SOFA6_PAGE_IMAGES, SOFA6_COMPANY_INFO } from 'src/sections/sofa6-pages/sofa6-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Liên hệ Sofa Earth' };

const hexToRgb = (hex: string) => `rgb(${hex.slice(1).match(/.{2}/g)?.map((h) => parseInt(h, 16)).join(',')})`;

const INFO = [
  { icon: 'solar:phone-bold-duotone', label: 'Hotline', value: SOFA6_COMPANY_INFO.phone, sub: 'Hỗ trợ 8:00 - 20:00' },
  { icon: 'solar:letter-bold-duotone', label: 'Email', value: SOFA6_COMPANY_INFO.email, sub: 'Phản hồi trong 24h' },
  { icon: 'solar:map-point-bold-duotone', label: 'Showroom', value: SOFA6_COMPANY_INFO.address, sub: 'Mở cửa cả tuần' },
  { icon: 'solar:clock-circle-bold-duotone', label: 'Giờ làm việc', value: '8:00 - 20:00', sub: 'Thứ 2 - Chủ nhật' },
];

const SOCIALS = [
  { icon: 'solar:facebook-bold-duotone', label: 'Facebook' },
  { icon: 'solar:instagram-bold-duotone', label: 'Instagram' },
  { icon: 'solar:youtube-bold-duotone', label: 'YouTube' },
  { icon: 'solar:chat-bold-duotone', label: 'Zalo' },
];

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet><title>{metadata.title}</title></Helmet>

      <Sofa6PageHero
        overline="Liên hệ"
        title={<>Liên hệ <span>Sofa Earth</span></>}
        subtitle="Chúng tôi luôn sẵn sàng lắng nghe — liên hệ qua hotline, email hoặc đến trực tiếp showroom để được tư vấn tận tâm về nội thất xanh."
        image={SOFA6_PAGE_IMAGES.contact}
      />

      {/* Info cards */}
      <Sofa6Section>
        <Grid container spacing={3} component={MotionViewport}>
          {INFO.map((item) => (
            <Grid key={item.label} xs={12} sm={6} md={3}>
              <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(hexToRgb(SOFA6_COLORS.terracottaLight), 0.12), color: SOFA6_COLORS.terracotta }}>
                  <Iconify icon={item.icon} width={28} />
                </Box>
                <Typography variant="overline" sx={{ color: 'text.disabled' }}>{item.label}</Typography>
                <Typography variant="h6">{item.value}</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>{item.sub}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa6Section>

      {/* Form + Map */}
      <Sofa6Section bg="grey">
        <Grid container spacing={{ xs: 4, md: 6 }} component={MotionViewport}>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inLeft} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
              <Typography variant="h5">Gửi tin nhắn cho chúng tôi</Typography>
              <Grid container spacing={2}>
                <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Email" type="email" /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Chủ đề" /></Grid>
                <Grid xs={12}><TextField fullWidth label="Nội dung" multiline rows={4} /></Grid>
              </Grid>
              <Button variant="contained" size="large" startIcon={<Iconify icon="solar:letter-bold-duotone" />} sx={{ width: 'fit-content', bgcolor: SOFA6_COLORS.terracotta, '&:hover': { bgcolor: SOFA6_COLORS.clay } }}>
                Gửi tin nhắn
              </Button>
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Box
                sx={{
                  borderRadius: 2,
                  overflow: 'hidden',
                  aspectRatio: '4/5',
                  bgcolor: varAlpha(hexToRgb('#9e9e9e'), 0.12),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                <Iconify icon="solar:map-point-bold-duotone" width={64} sx={{ color: SOFA6_COLORS.terracotta }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Bản đồ Google Maps</Typography>
                <Typography variant="caption" sx={{ color: 'text.disabled' }}>{SOFA6_COMPANY_INFO.address}</Typography>
              </Box>
              <Stack direction="row" spacing={2}>
                {SOCIALS.map((s) => (
                  <Button key={s.label} variant="soft" sx={{ minWidth: 'auto', px: 1.5, color: SOFA6_COLORS.terracotta }}>
                    <Iconify icon={s.icon} width={24} />
                  </Button>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Sofa6Section>

      {/* CTA */}
      <Sofa6Section>
        <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }} component={MotionViewport}>
          <Typography variant="h3">
            Đến thăm showroom <Box component="span" sx={{ ...textGradient(`135deg, ${SOFA6_COLORS.terracottaLight}, ${SOFA6_COLORS.sageLight}`) }}>Sofa Earth</Box>
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Trải nghiệm sofa từ vật liệu thiên nhiên và gặp gỡ nghệ nhân thủ công Việt.</Typography>
          <Button component={RouterLink} href="/sofa6/promotions" size="large" variant="contained" startIcon={<Iconify icon="solar:shield-check-bold-duotone" />} sx={{ bgcolor: SOFA6_COLORS.terracotta, '&:hover': { bgcolor: SOFA6_COLORS.clay } }}>
            Xem dịch vụ hậu mãi
          </Button>
        </Stack>
      </Sofa6Section>
    </>
  );
}
