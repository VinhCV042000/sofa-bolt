import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA7_COLORS } from 'src/sections/sofa7/sofa7-data';
import { Sofa7PageHero, Sofa7Section } from 'src/sections/sofa7-pages/sofa7-page-hero';
import { SOFA7_PAGE_CAREERS, SOFA7_PAGE_IMAGES } from 'src/sections/sofa7-pages/sofa7-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Tuyển dụng Sofa7 · Industrial loft team' };

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa7PageHero
        overline="Tuyển dụng"
        title={<>Tuyển dụng <span>Sofa7</span></>}
        subtitle="Gia nhập đội ngũ Sofa7 — nơi những tâm hồn phá cách tạo ra sofa industrial cho urban dwellers."
        image={SOFA7_PAGE_IMAGES.careers}
      />

      <Sofa7Section>
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }} component={MotionViewport}>
          <Typography variant="overline" sx={{ color: 'text.disabled', letterSpacing: 4 }}>Cơ hội nghề nghiệp</Typography>
          <Typography variant="h2" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold' }}>
            Vị trí <Box component="span" sx={{ ...textGradient(`90deg, ${SOFA7_COLORS.electric}, ${SOFA7_COLORS.cyan}`) }}>đang tuyển</Box>
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Sofa7 tìm kiếm những người yêu industrial design, đam mê chất liệu thật và khát khao phá cách.</Typography>
        </Stack>

        <Grid container spacing={3} component={MotionViewport}>
          {SOFA7_PAGE_CAREERS.map((career) => (
            <Grid key={career.id} xs={12} sm={6} md={6}>
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
                  transition: (t) => t.transitions.create(['transform', 'border-color'], { duration: 300 }),
                  '&:hover': { transform: 'translateY(-6px)', border: `1px solid ${SOFA7_COLORS.electric}` },
                }}
              >
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  <Chip label={career.type} size="small" sx={{ borderRadius: 0, bgcolor: varAlpha(SOFA7_COLORS.electric, 0.16), color: SOFA7_COLORS.concrete, fontWeight: 'fontWeightBold' }} />
                  <Chip label={career.location} size="small" sx={{ borderRadius: 0, bgcolor: varAlpha(SOFA7_COLORS.cyan, 0.16), color: SOFA7_COLORS.concrete, fontWeight: 'fontWeightBold' }} />
                </Stack>
                <Typography variant="h5" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold' }}>{career.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{career.description}</Typography>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Iconify icon="solar:money-bag-bold-duotone" width={20} sx={{ color: SOFA7_COLORS.electric }} />
                  <Typography variant="subtitle2" sx={{ color: SOFA7_COLORS.electric }}>{career.salary}</Typography>
                </Stack>
                <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap sx={{ pt: 1 }}>
                  <Button component={RouterLink} href={`/sofa7/careers/${career.id}`} variant="contained" sx={{ borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, '&:hover': { bgcolor: SOFA7_COLORS.cyan } }} endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>
                    Xem chi tiết
                  </Button>
                  <Button component={RouterLink} href="/sofa7/careers/apply" variant="outlined" sx={{ borderRadius: 0 }}>
                    Nộp CV
                  </Button>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa7Section>

      <Sofa7Section bg="grey">
        <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }} component={MotionViewport}>
          <Typography variant="h3" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold' }}>Đã nộp hồ sơ?</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Theo dõi trạng thái hồ sơ ứng tuyển của bạn tại Sofa7.</Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap justifyContent="center">
            <Button component={RouterLink} href="/sofa7/careers/apply" size="large" variant="contained" startIcon={<Iconify icon="solar:file-send-bold-duotone" />} sx={{ borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, '&:hover': { bgcolor: SOFA7_COLORS.cyan } }}>
              Nộp CV
            </Button>
            <Button component={RouterLink} href="/sofa7/careers/tracking" size="large" variant="outlined" startIcon={<Iconify icon="solar:search-bold-duotone" />} sx={{ borderRadius: 0 }}>
              Theo dõi hồ sơ
            </Button>
          </Stack>
        </Stack>
      </Sofa7Section>
    </>
  );
}
