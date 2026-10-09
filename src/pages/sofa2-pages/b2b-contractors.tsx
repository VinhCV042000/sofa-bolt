import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';
import { Sofa2Section, Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';

// ----------------------------------------------------------------------

const metadata = { title: 'Đối tác thi công — LUXE Sofa' };

const CONTRACTORS = [
  { name: 'Thi công Nội thất Hoàng Gia', specialty: 'Căn hộ & Biệt thự', projects: 3, rating: 4.8, region: 'Miền Nam' },
  { name: 'BuildPro Construction', specialty: 'Khách sạn & Resort', projects: 2, rating: 4.6, region: 'Toàn quốc' },
  { name: 'Vina Interior Team', specialty: 'Văn phòng & Showroom', projects: 1, rating: 4.4, region: 'Miền Bắc' },
  { name: 'Decor Install Pro', specialty: 'Toàn quốc — lắp đặt', projects: 0, rating: 4.2, region: 'Toàn quốc' },
  { name: 'Master Craft Team', specialty: 'Dự án cao cấp', projects: 2, rating: 4.9, region: 'Miền Nam' },
  { name: 'Blue Interior Co.', specialty: 'Căn hộ & Biệt thự', projects: 1, rating: 4.5, region: 'Miền Nam' },
];

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa2PageHero
        title="Đối tác thi công"
        subtitle="Mạng lưới đối tác thi công nội thất — lắp đặt chuyên nghiệp cho dự án căn hộ, khách sạn, văn phòng."
        image={SOFA2_PAGE_IMAGES.b2b}
        overline="Đối tác thi công"
      />

      <Sofa2Section>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center', maxWidth: 600, mx: 'auto' }} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>Mạng lưới</Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2">Đối tác thi công uy tín</Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: 'text.secondary' }}>Đội ngũ thi công, lắp đặt chuyên nghiệp — đánh giá và chọn lọc kỹ lưỡng.</Typography>
          </Box>
        </Stack>

        <Grid container spacing={3}>
          {CONTRACTORS.map((c, index) => (
            <Grid key={c.name} xs={12} sm={6} md={4}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.06 }}
                spacing={2}
                sx={{ p: 3, height: 1, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
              >
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                  <Box sx={{ width: 48, height: 48, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: 'primary.main' }}>
                    <Iconify icon="solar:hammer-bold-duotone" width={24} />
                  </Box>
                  <Rating value={c.rating} precision={0.1} readOnly size="small" />
                </Stack>
                <Typography variant="h6">{c.name}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{c.specialty}</Typography>
                <Divider sx={{ borderStyle: 'dashed' }} />
                <Stack direction="row" spacing={1}>
                  <Chip label={c.region} size="small" variant="outlined" />
                  <Chip label={`${c.projects} dự án đang chạy`} size="small" variant="soft" color={c.projects > 0 ? 'info' : 'default'} />
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa2Section>

      <Sofa2Section bg="grey">
        <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h3">Bạn là đơn vị thi công?</Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: 'text.secondary' }}>Đăng ký trở thành đối tác thi công của LUXE Sofa — nhận dự án phù hợp chuyên môn.</Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Button component={RouterLink} href="/sofa2/b2b/register" size="large" variant="contained" startIcon={<Iconify icon="solar:hand-shake-bold-duotone" />}>
              Đăng ký đối tác
            </Button>
          </Box>
        </Stack>
      </Sofa2Section>
    </>
  );
}
