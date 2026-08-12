import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport, MotionContainer } from 'src/components/animate';

import { SOFA_TESTIMONIALS } from 'src/sections/sofa/sofa-data';
import {
  SOFA_SERVICES,
  SOFA_PAGE_IMAGES,
} from 'src/sections/sofa/pages/sofa-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Phản hồi khách hàng' };

export default function Page() {
  const theme = useTheme();
  const [rating, setRating] = useState(5);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      {/* Hero */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          py: { xs: 10, md: 16 },
          color: 'common.white',
          mt: 'calc(var(--layout-header-desktop-height) * -1)',
          pt: 'calc(var(--layout-header-desktop-height) + 40px)',
        }}
      >
        <Box
          sx={{
            inset: 0,
            position: 'absolute',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.78)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.56)}), url(${SOFA_PAGE_IMAGES.cta})`,
          }}
        />
        <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9 }}>
          <Stack spacing={3} sx={{ maxWidth: 720 }}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="overline" sx={{ color: 'primary.light', letterSpacing: 3 }}>Phản hồi</Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="h1" sx={{ fontSize: { xs: 36, md: 56 }, lineHeight: 1.15 }}>
                Phản Hồi
                <Box component="span" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.light}, ${theme.vars.palette.warning.light}`) }}> Khách Hàng</Box>
              </Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.72), maxWidth: 560 }}>
                Mỗi lời nhận xét là động lực để chúng tôi hoàn thiện hơn. Hãy chia sẻ trải nghiệm
                của bạn với Casa Sofa.
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Overall rating */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={3} justifyContent="center">
            {[
              { value: '4.9', label: 'Điểm trung bình', icon: 'solar:star-bold-duotone' },
              { value: '8,500+', label: 'Lượt đánh giá', icon: 'solar:users-group-rounded-bold-duotone' },
              { value: '98%', label: 'Hài lòng', icon: 'solar:like-bold-duotone' },
              { value: '25k+', label: 'Khách hàng', icon: 'solar:heart-bold-duotone' },
            ].map((stat) => (
              <Grid key={stat.label} xs={6} md={3}>
                <Stack spacing={1} alignItems="center" component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                  <Iconify icon={stat.icon} width={32} sx={{ color: 'warning.main' }} />
                  <Typography variant="h3" sx={{ color: 'primary.main' }}>{stat.value}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{stat.label}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Feedback form */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
        <Container component={MotionViewport} maxWidth="md">
          <Stack spacing={3} sx={{ mb: { xs: 4, md: 6 } }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>Gửi phản hồi</Typography>
            <Typography variant="h2">Chia sẻ trải nghiệm của bạn</Typography>
          </Stack>
          <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
            <Stack spacing={1}>
              <Typography variant="subtitle2">Đánh giá của bạn</Typography>
              <Rating value={rating} onChange={(_, v) => setRating(v ?? 5)} size="large" />
            </Stack>
            <Grid container spacing={2}>
              <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" /></Grid>
              <Grid xs={12} sm={6}>
                <TextField select fullWidth label="Dịch vụ đã sử dụng" defaultValue="">
                  {SOFA_SERVICES.map((s) => (
                    <MenuItem key={s.id} value={s.id}>{s.title}</MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid xs={12}><TextField fullWidth label="Nội dung phản hồi" multiline rows={4} /></Grid>
            </Grid>
            <Button variant="contained" size="large" startIcon={<Iconify icon="solar:chat-bold-duotone" />} sx={{ width: 'fit-content' }}>
              Gửi phản hồi
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Recent feedback list */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 } }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>Gần đây</Typography>
            <Typography variant="h2">Phản hồi khách hàng</Typography>
          </Stack>
          <Grid container spacing={3}>
            {SOFA_TESTIMONIALS.map((item) => (
              <Grid key={item.name} xs={12} sm={6} md={3}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: 3, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                  <Rating value={item.rating} readOnly size="small" />
                  <Typography variant="body2" sx={{ color: 'text.secondary', flex: 1 }}>&ldquo;{item.content}&rdquo;</Typography>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar src={item.avatar} alt={item.name} />
                    <Stack spacing={0.25}>
                      <Typography variant="subtitle2">{item.name}</Typography>
                      <Typography variant="caption" sx={{ color: 'text.disabled' }}>{item.role}</Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
        <Container component={MotionViewport}>
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
            <Typography variant="h3">Trải nghiệm dịch vụ Casa Sofa</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Đặt lịch ngay để cảm nhận sự khác biệt.</Typography>
            <Button component={RouterLink} href={paths.sofaBooking} size="large" variant="contained" color="primary" startIcon={<Iconify icon="solar:calendar-bold-duotone" />}>
              Đặt lịch ngay
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
