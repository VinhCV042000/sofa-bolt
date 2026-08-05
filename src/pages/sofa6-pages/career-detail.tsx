import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA6_COLORS } from 'src/sections/sofa6/sofa6-data';
import { Sofa6Section, Sofa6PageHero } from 'src/sections/sofa6-pages/sofa6-page-hero';
import { SOFA6_CAREERS, SOFA6_PAGE_IMAGES } from 'src/sections/sofa6-pages/sofa6-pages-data';

// ----------------------------------------------------------------------

const hexToRgb = (hex: string) => `rgb(${hex.slice(1).match(/.{2}/g)?.map((h) => parseInt(h, 16)).join(',')})`;

// ----------------------------------------------------------------------

export default function Page() {
  const { id } = useParams();
  const career = SOFA6_CAREERS.find((c) => c.id === id);

  if (!career) {
    return (
      <>
        <Helmet><title>Không tìm thấy vị trí · Sofa Earth</title></Helmet>
        <Sofa6Section>
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 10 }}>
            <Iconify icon="solar:file-remove-bold-duotone" width={64} sx={{ color: 'text.disabled' }} />
            <Typography variant="h4">Không tìm thấy vị trí</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Vị trí tuyển dụng bạn tìm không tồn tại hoặc đã đóng.</Typography>
            <Button component={RouterLink} href="/sofa6/careers" variant="contained" sx={{ bgcolor: SOFA6_COLORS.terracotta, '&:hover': { bgcolor: SOFA6_COLORS.clay } }}>Về trang tuyển dụng</Button>
          </Stack>
        </Sofa6Section>
      </>
    );
  }

  return (
    <>
      <Helmet><title>{`${career.title} · Sofa Earth`}</title></Helmet>

      <Sofa6PageHero
        overline="Tuyển dụng"
        title={career.title}
        subtitle={`${career.location} · ${career.type} · ${career.salary}`}
        image={SOFA6_PAGE_IMAGES.careers}
      />

      <Sofa6Section>
        <Grid container spacing={{ xs: 4, md: 6 }} component={MotionViewport}>
          <Grid xs={12} md={8}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inUp}>
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

              <Box>
                <Typography variant="overline" sx={{ color: 'text.disabled' }}>Mô tả công việc</Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mt: 1 }}>{career.description}</Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mt: 2 }}>
                  Tại Sofa Earth, bạn sẽ làm việc trong môi trường yêu thiên nhiên, tôn trọng thủ công Việt và cam kết bền vững. Cùng chúng tôi kiến tạo những chiếc sofa từ vật liệu thiên nhiên mang dấu ấn nghệ nhân.
                </Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid xs={12} md={4}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: { xs: 3, md: 4 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
              <Typography variant="h6">Yêu cầu công việc</Typography>
              <Stack spacing={2}>
                {career.requirements.map((req) => (
                  <Stack key={req} direction="row" spacing={1.5} alignItems="flex-start">
                    <Iconify icon="solar:check-circle-bold-duotone" width={22} sx={{ color: SOFA6_COLORS.sage, mt: 0.2 }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{req}</Typography>
                  </Stack>
                ))}
              </Stack>
              <Box sx={{ p: 2, borderRadius: 1.5, bgcolor: varAlpha(hexToRgb(SOFA6_COLORS.terracottaLight), 0.08) }}>
                <Typography variant="subtitle2" sx={{ color: SOFA6_COLORS.terracotta }}>Lương thưởng</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>{career.salary} + thưởng theo hiệu suất</Typography>
              </Box>
              <Button component={RouterLink} href="/sofa6/careers/apply" variant="contained" size="large" fullWidth startIcon={<Iconify icon="solar:file-send-bold-duotone" />} sx={{ bgcolor: SOFA6_COLORS.terracotta, '&:hover': { bgcolor: SOFA6_COLORS.clay } }}>
                Nộp CV ngay
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa6Section>
    </>
  );
}
