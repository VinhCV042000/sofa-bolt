import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import { alpha, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';
import { Sofa2Section, Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';

// ----------------------------------------------------------------------

const metadata = { title: 'Đại lý phân phối — LUXE Sofa' };

const DEALERS = [
  { name: 'Nội thất Việt', level: 'Cấp 1', region: 'Miền Bắc', city: 'Hà Nội', phone: '024 3xxx 123', address: '123 Nguyễn Trãi, Thanh Xuân, Hà Nội' },
  { name: 'Decor Home HCM', level: 'Cấp 1', region: 'Miền Nam', city: 'TP.HCM', phone: '028 3xxx 456', address: '45 Lê Lợi, Q1, TP.HCM' },
  { name: 'Living Space ĐN', level: 'Cấp 2', region: 'Miền Trung', city: 'Đà Nẵng', phone: '0236 3xxx 789', address: '78 Bạch Đằng, Hải Châu, Đà Nẵng' },
  { name: 'Home Mart Hà Nội', level: 'Cấp 2', region: 'Miền Bắc', city: 'Hà Nội', phone: '024 3xxx 012', address: '200 Hoàng Quốc Việt, Cầu Giấy, Hà Nội' },
  { name: 'Sofa Plus Cần Thơ', level: 'Cấp 2', region: 'Tây Nam Bộ', city: 'Cần Thơ', phone: '0292 3xxx 345', address: '15 Nguyễn Văn Cừ, Ninh Kiều, Cần Thơ' },
  { name: 'Blue Interior', level: 'Cấp 3', region: 'Miền Nam', city: 'Bình Dương', phone: '0274 3xxx 678', address: '88 Đại lộ Bình Dương, Thuận An, Bình Dương' },
];

const levelColor: Record<string, 'error' | 'warning' | 'info' | 'default'> = {
  'Cấp 1': 'error',
  'Cấp 2': 'warning',
  'Cấp 3': 'info',
};

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa2PageHero
        title="Đại lý phân phối"
        subtitle="Mạng lưới đối tác phân phối LUXE Sofa trên toàn quốc — tìm đại lý gần bạn nhất."
        image={SOFA2_PAGE_IMAGES.b2b}
        overline="Mạng lưới đối tác"
      />

      <Sofa2Section>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center', maxWidth: 600, mx: 'auto' }} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>Mạng lưới</Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2">{DEALERS.length} đại lý trên cả nước</Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: 'text.secondary' }}>Phủ sóng 38 tỉnh/thành — từ Hà Nội đến Cần Thơ.</Typography>
          </Box>
        </Stack>

        <Grid container spacing={3}>
          {DEALERS.map((d, index) => (
            <Grid key={d.name} xs={12} sm={6} md={4}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.06 }}
                spacing={2}
                sx={{ p: 3, height: 1, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
              >
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                  <Box sx={{ width: 48, height: 48, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: 'primary.main' }}>
                    <Iconify icon="solar:shop-bold-duotone" width={24} />
                  </Box>
                  <Chip label={d.level} size="small" color={levelColor[d.level] ?? 'default'} variant="soft" />
                </Stack>
                <Typography variant="h6">{d.name}</Typography>
                <Stack spacing={0.5}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Iconify icon="solar:map-point-bold-duotone" width={16} sx={{ color: 'text.disabled' }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{d.address}</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Iconify icon="solar:phone-bold-duotone" width={16} sx={{ color: 'text.disabled' }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{d.phone}</Typography>
                  </Stack>
                </Stack>
                <Divider sx={{ borderStyle: 'dashed' }} />
                <Stack direction="row" spacing={1}>
                  <Chip label={d.region} size="small" variant="outlined" />
                  <Chip label={d.city} size="small" variant="outlined" />
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa2Section>

      <Sofa2Section bg="grey">
        <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h3" sx={{ ...theme.typography, color: 'text.primary' }}>Muốn trở thành đại lý?</Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: 'text.secondary' }}>Đăng ký ngay để gia nhập mạng lưới đối tác LUXE Sofa.</Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Button component={RouterLink} href="/sofa2/b2b/register" size="large" variant="contained" startIcon={<Iconify icon="solar:hand-shake-bold-duotone" />}>
              Đăng ký đại lý
            </Button>
          </Box>
        </Stack>
      </Sofa2Section>
    </>
  );
}
