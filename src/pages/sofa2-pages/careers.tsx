import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa2PageHero, Sofa2Section } from 'src/sections/sofa2/sofa2-page-hero';
import { SOFA2_CAREERS, SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Tuyển dụng - LUXE Sofa' };

const BENEFITS = [
  { icon: 'solar:palette-bold-duotone', title: 'Môi trường sáng tạo', desc: 'Không gian làm việc truyền cảm hứng, khuyến khích sáng tạo và đổi mới.' },
  { icon: 'solar:wallet-bold-duotone', title: 'Lương thưởng hấp dẫn', desc: 'Lương cạnh tranh cùng thưởng KPI, thưởng dự án và thưởng cuối năm.' },
  { icon: 'solar:book-bold-duotone', title: 'Đào tạo liên tục', desc: 'Đào tạo nghề và nâng cao tay nghề bởi nghệ nhân trưởng.' },
  { icon: 'solar:case-bold-duotone', title: 'Cơ hội thăng tiến', desc: 'Lộ trình phát triển rõ ràng, môi trường công bằng minh bạch.' },
];

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa2PageHero
        overline="Tuyển dụng"
        title="Tuyển Dụng LUXE Sofa"
        subtitle="Gia nhập đội ngũ LUXE Sofa — nơi nghệ nhân được trân trọng và mỗi sản phẩm là một kiệt tác."
        image={SOFA2_PAGE_IMAGES.careers}
      />

      {/* Benefits */}
      <Sofa2Section>
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>Vì sao chọn</Typography>
          <Typography variant="h2">
            Lợi ích khi
            <Box component="span" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.main}, ${theme.vars.palette.warning.main}`) }}> làm việc cùng chúng tôi</Box>
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          {BENEFITS.map((item) => (
            <Grid key={item.title} xs={12} sm={6} md={3}>
              <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: 'primary.main' }}>
                  <Iconify icon={item.icon} width={28} />
                </Box>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa2Section>

      {/* Job listings */}
      <Sofa2Section bg="grey">
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>Vị trí tuyển dụng</Typography>
          <Typography variant="h2">Việc làm mở</Typography>
        </Stack>
        <Stack spacing={2}>
          {SOFA2_CAREERS.map((job) => (
            <Stack
              key={job.id}
              component={m.div}
              variants={varFade({ distance: 24 }).inUp}
              direction={{ xs: 'column', md: 'row' }}
              spacing={3}
              alignItems={{ md: 'center' }}
              justifyContent="space-between"
              sx={{ p: 4, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
            >
              <Stack spacing={1} sx={{ flex: 1 }}>
                <Typography variant="h6">{job.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{job.description}</Typography>
              </Stack>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Stack direction="row" spacing={0.5} alignItems="center" sx={{ px: 1.5, py: 0.5, borderRadius: 1, bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08) }}>
                  <Iconify icon="solar:map-point-bold-duotone" width={16} sx={{ color: 'primary.main' }} />
                  <Typography variant="caption" sx={{ color: 'primary.main' }}>{job.location}</Typography>
                </Stack>
                <Stack direction="row" spacing={0.5} alignItems="center" sx={{ px: 1.5, py: 0.5, borderRadius: 1, bgcolor: (t) => varAlpha(t.vars.palette.warning.mainChannel, 0.08) }}>
                  <Iconify icon="solar:clock-circle-bold-duotone" width={16} sx={{ color: 'warning.main' }} />
                  <Typography variant="caption" sx={{ color: 'warning.main' }}>{job.type}</Typography>
                </Stack>
                <Stack direction="row" spacing={0.5} alignItems="center" sx={{ px: 1.5, py: 0.5, borderRadius: 1, bgcolor: (t) => varAlpha(t.vars.palette.success.mainChannel, 0.08) }}>
                  <Iconify icon="solar:wallet-bold-duotone" width={16} sx={{ color: 'success.main' }} />
                  <Typography variant="caption" sx={{ color: 'success.main' }}>{job.salary}</Typography>
                </Stack>
              </Stack>
              <Button component={RouterLink} href="/sofa2/careers/apply" variant="contained" color="primary" startIcon={<Iconify icon="solar:letter-bold-duotone" />}>
                Ứng tuyển
              </Button>
            </Stack>
          ))}
        </Stack>
      </Sofa2Section>

      {/* Tracking CTA */}
      <Sofa2Section>
        <Stack component={MotionViewport} spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
          <Typography variant="h3">Đã nộp hồ sơ?</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Tra cứu tình trạng ứng tuyển của bạn bằng số điện thoại hoặc email.</Typography>
          <Button component={RouterLink} href="/sofa2/careers/tracking" size="large" variant="contained" color="primary" startIcon={<Iconify icon="solar:search-bold-duotone" />}>
            Tra cứu hồ sơ
          </Button>
        </Stack>
      </Sofa2Section>
    </>
  );
}
