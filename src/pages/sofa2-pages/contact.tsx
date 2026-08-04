import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa2PageHero, Sofa2Section } from 'src/sections/sofa2/sofa2-page-hero';
import { SOFA2_PAGE_IMAGES, SOFA2_COMPANY_INFO } from 'src/sections/sofa2/sofa2-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Liên hệ LUXE Sofa' };

const INFO = [
  { icon: 'solar:phone-bold-duotone', label: 'Hotline', value: SOFA2_COMPANY_INFO.phone, sub: 'Hỗ trợ 8:00 - 20:00' },
  { icon: 'solar:letter-bold-duotone', label: 'Email', value: SOFA2_COMPANY_INFO.email, sub: 'Phản hồi trong 24h' },
  { icon: 'solar:map-point-bold-duotone', label: 'Địa chỉ', value: SOFA2_COMPANY_INFO.address, sub: 'Showroom Hà Nội' },
  { icon: 'solar:clock-circle-bold-duotone', label: 'Giờ làm việc', value: '8:00 - 20:00', sub: 'Thứ 2 - Chủ nhật' },
];

const SOCIALS = [
  { icon: 'solar:facebook-bold-duotone', label: 'Facebook' },
  { icon: 'solar:instagram-bold-duotone', label: 'Instagram' },
  { icon: 'solar:youtube-bold-duotone', label: 'YouTube' },
  { icon: 'solar:chat-bold-duotone', label: 'Zalo' },
];

export default function Page() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa2PageHero
        title="Liên hệ LUXE Sofa"
        subtitle="Chúng tôi luôn sẵn sàng lắng nghe — liên hệ qua hotline, email hoặc đến trực tiếp showroom để được tư vấn tận tâm."
        image={SOFA2_PAGE_IMAGES.contact}
        overline="Liên hệ"
      />

      {/* Info cards */}
      <Sofa2Section>
        <Grid container spacing={3}>
          {INFO.map((item, index) => (
            <Grid key={item.label} xs={12} sm={6} md={3}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.08 }}
                spacing={2}
                sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
              >
                <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: 'primary.main' }}>
                  <Iconify icon={item.icon} width={28} />
                </Box>
                <Typography variant="overline" sx={{ color: 'text.disabled' }}>{item.label}</Typography>
                <Typography variant="h6">{item.value}</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>{item.sub}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa2Section>

      {/* Form + Map */}
      <Sofa2Section bg="grey">
        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid xs={12} md={6}>
            <Stack
              spacing={3}
              component={m.div}
              variants={varFade({ distance: 24 }).inLeft}
              sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
            >
              <Typography variant="h5">Gửi tin nhắn cho chúng tôi</Typography>
              <Grid container spacing={2}>
                <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Email" type="email" /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Chủ đề" /></Grid>
                <Grid xs={12}><TextField fullWidth label="Nội dung tin nhắn" multiline rows={4} /></Grid>
              </Grid>
              <Button
                variant="contained"
                size="large"
                startIcon={<Iconify icon="solar:letter-bold-duotone" />}
                sx={{ width: 'fit-content' }}
                onClick={() => setSent(true)}
              >
                {sent ? 'Đã gửi thành công' : 'Gửi tin nhắn'}
              </Button>
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Box
                sx={{
                  height: 300,
                  borderRadius: 2,
                  overflow: 'hidden',
                  bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.16),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                <Iconify icon="solar:map-point-bold-duotone" width={64} sx={{ color: 'primary.main' }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Bản đồ Google Maps</Typography>
                <Typography variant="caption" sx={{ color: 'text.disabled' }}>{SOFA2_COMPANY_INFO.address}</Typography>
              </Box>
              <Stack direction="row" spacing={2}>
                {SOCIALS.map((s) => (
                  <Button key={s.label} variant="soft" color="primary" sx={{ minWidth: 'auto', px: 1.5 }}>
                    <Iconify icon={s.icon} width={24} />
                  </Button>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Sofa2Section>

      {/* CTA */}
      <Sofa2Section>
        <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }} component={MotionViewport}>
          <Typography variant="h3">Đến showroom trải nghiệm</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Ghé thăm showroom LUXE Sofa gần nhất để tận mắt nhìn thấy chất lượng chế tác thủ công.</Typography>
          <Button component={RouterLink} href="/sofa2/showrooms" size="large" variant="contained" color="primary" startIcon={<Iconify icon="solar:map-point-bold-duotone" />}>
            Xem showroom
          </Button>
        </Stack>
      </Sofa2Section>
    </>
  );
}
