import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA6_COLORS } from 'src/sections/sofa6/sofa6-data';
import { Sofa6Section, Sofa6PageHero } from 'src/sections/sofa6-pages/sofa6-page-hero';
import { SOFA6_CAREERS, SOFA6_PAGE_IMAGES } from 'src/sections/sofa6-pages/sofa6-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Tuyển dụng Sofa Earth' };

const hexToRgb = (hex: string) => `rgb(${hex.slice(1).match(/.{2}/g)?.map((h) => parseInt(h, 16)).join(',')})`;

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet><title>{metadata.title}</title></Helmet>

      <Sofa6PageHero
        overline="Tuyển dụng"
        title={<>Tuyển dụng <span>Sofa Earth</span></>}
        subtitle="Sofa Earth tìm kiếm những người yêu thiên nhiên, đam mê thủ công Việt — cùng chúng tôi kiến tạo nội thất bền vững từ vật liệu thiên nhiên."
        image={SOFA6_PAGE_IMAGES.careers}
      />

      <Sofa6Section>
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }} component={MotionViewport}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>Cơ hội nghề nghiệp</Typography>
          <Typography variant="h2">
            Gia nhập đội ngũ
            <Box component="span" sx={{ ...textGradient(`135deg, ${SOFA6_COLORS.terracottaLight}, ${SOFA6_COLORS.sageLight}`) }}> Sofa Earth</Box>
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Chúng tôi luôn chào đón nghệ nhân, nhà thiết kế và những người yêu nội thất xanh gia nhập đội ngũ.</Typography>
        </Stack>

        <Grid container spacing={3} component={MotionViewport}>
          {SOFA6_CAREERS.map((career) => (
            <Grid key={career.id} xs={12} sm={6} md={6}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                spacing={2}
                sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, transition: (t) => t.transitions.create(['transform'], { duration: 300 }), '&:hover': { transform: 'translateY(-6px)' } }}
              >
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  <Stack direction="row" spacing={0.5} alignItems="center">
                    <Iconify icon="solar:map-point-bold-duotone" width={16} sx={{ color: SOFA6_COLORS.terracotta }} />
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>{career.location}</Typography>
                  </Stack>
                  <Stack direction="row" spacing={0.5} alignItems="center">
                    <Iconify icon="solar:clock-circle-bold-duotone" width={16} sx={{ color: SOFA6_COLORS.sage }} />
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>{career.type}</Typography>
                  </Stack>
                  <Stack direction="row" spacing={0.5} alignItems="center">
                    <Iconify icon="solar:wallet-bold-duotone" width={16} sx={{ color: 'text.disabled' }} />
                    <Typography variant="caption" sx={{ color: SOFA6_COLORS.terracotta, fontWeight: 'fontWeightBold' }}>{career.salary}</Typography>
                  </Stack>
                </Stack>
                <Typography variant="h6">{career.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', flex: 1 }}>{career.description}</Typography>
                <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                  <Button component={RouterLink} href={`/sofa6/careers/${career.id}`} size="small" sx={{ color: SOFA6_COLORS.terracotta }} endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>Chi tiết</Button>
                  <Button component={RouterLink} href="/sofa6/careers/apply" size="small" variant="contained" sx={{ bgcolor: SOFA6_COLORS.terracotta, '&:hover': { bgcolor: SOFA6_COLORS.clay } }} startIcon={<Iconify icon="solar:file-send-bold-duotone" />}>Nộp CV</Button>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa6Section>

      <Sofa6Section bg="grey">
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} justifyContent="center" alignItems="center" flexWrap="wrap" useFlexGap component={MotionViewport}>
          <Stack spacing={2} alignItems="center" sx={{ textAlign: 'center', maxWidth: 320 }}>
            <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(hexToRgb(SOFA6_COLORS.terracottaLight), 0.12), color: SOFA6_COLORS.terracotta }}>
              <Iconify icon="solar:file-send-bold-duotone" width={28} />
            </Box>
            <Typography variant="h6">Nộp hồ sơ ứng tuyển</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Gửi CV của bạn cho vị trí phù hợp.</Typography>
            <Button component={RouterLink} href="/sofa6/careers/apply" variant="contained" sx={{ bgcolor: SOFA6_COLORS.terracotta, '&:hover': { bgcolor: SOFA6_COLORS.clay } }}>Nộp CV ngay</Button>
          </Stack>
          <Stack spacing={2} alignItems="center" sx={{ textAlign: 'center', maxWidth: 320 }}>
            <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(hexToRgb(SOFA6_COLORS.sageLight), 0.16), color: SOFA6_COLORS.sage }}>
              <Iconify icon="solar:search-bold-duotone" width={28} />
            </Box>
            <Typography variant="h6">Theo dõi hồ sơ</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Kiểm tra trạng thái đơn ứng tuyển.</Typography>
            <Button component={RouterLink} href="/sofa6/careers/tracking" variant="outlined">Theo dõi hồ sơ</Button>
          </Stack>
        </Stack>
      </Sofa6Section>
    </>
  );
}
