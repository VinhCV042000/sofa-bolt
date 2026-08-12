import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa1Section, Sofa1PageHero } from 'src/sections/sofa1-pages/sofa1-page-hero';
import { SOFA1_CAREERS, SOFA1_PAGE_IMAGES } from 'src/sections/sofa1-pages/sofa1-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Tuyển dụng - Casa Sofa' };

const BENEFITS = [
  { icon: 'solar:palette-bold-duotone', title: 'Môi trường thủ công', desc: 'Không gian xưởng truyền cảm hứng, tôn vinh tay nghề và sự tỉ mỉ.' },
  { icon: 'solar:wallet-bold-duotone', title: 'Lương thưởng hấp dẫn', desc: 'Lương cạnh tranh cùng thưởng KPI, thưởng dự án và thưởng cuối năm.' },
  { icon: 'solar:book-bold-duotone', title: 'Đào tạo nghề', desc: 'Đào tạo nâng cao tay nghề bởi nghệ nhân trưởng với hơn 12 năm kinh nghiệm.' },
  { icon: 'solar:case-bold-duotone', title: 'Cơ hội thăng tiến', desc: 'Lộ trình phát triển rõ ràng, môi trường công bằng minh bạch.' },
];

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa1PageHero
        overline="Tuyển dụng"
        title="Tuyển dụng Casa Sofa"
        subtitle="Gia nhập đội ngũ Casa Sofa — nơi nghệ nhân được trân trọng và mỗi chiếc sofa là một kiệt tác chế tác thủ công."
        image={SOFA1_PAGE_IMAGES.careers}
      />

      {/* Benefits */}
      <Sofa1Section>
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
      </Sofa1Section>

      {/* Job listings */}
      <Sofa1Section bg="grey">
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>Vị trí tuyển dụng</Typography>
          <Typography variant="h2">Việc làm mở</Typography>
        </Stack>
        <Grid container spacing={3}>
          {SOFA1_CAREERS.map((job) => (
            <Grid key={job.id} xs={12} md={6}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                spacing={2}
                sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
              >
                <Typography variant="h6">{job.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{job.description}</Typography>
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
                <Button component={RouterLink} href={`/sofa1/careers/${job.id}`} variant="outlined" color="primary" endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>
                  Xem chi tiết
                </Button>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa1Section>

      {/* CTA */}
      <Sofa1Section>
        <Stack component={MotionViewport} spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
          <Typography variant="h3">Sẵn sàng gia nhập?</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Gửi hồ sơ ứng tuyển hoặc theo dõi tình trạng hồ sơ của bạn bất cứ lúc nào.</Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button component={RouterLink} href="/sofa1/careers/apply" size="large" variant="contained" color="primary" startIcon={<Iconify icon="solar:letter-bold-duotone" />}>
              Nộp CV
            </Button>
            <Button component={RouterLink} href="/sofa1/careers/tracking" size="large" variant="outlined" color="primary" startIcon={<Iconify icon="solar:search-bold-duotone" />}>
              Theo dõi tuyển dụng
            </Button>
          </Stack>
        </Stack>
      </Sofa1Section>
    </>
  );
}
