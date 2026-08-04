import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
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

export default function Page() {
  const theme = useTheme();
  const { id } = useParams();
  const job = SOFA2_CAREERS.find((item) => item.id === id);

  if (!job) {
    return (
      <>
        <Helmet><title>Không tìm thấy vị trí - LUXE Sofa</title></Helmet>
        <Container sx={{ py: { xs: 10, md: 16 }, textAlign: 'center' }}>
          <Stack spacing={3} alignItems="center">
            <Iconify icon="solar:question-circle-bold-duotone" width={80} sx={{ color: 'text.disabled' }} />
            <Typography variant="h3">Không tìm thấy vị trí</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Vị trí bạn tìm kiếm không tồn tại hoặc đã đóng tuyển.</Typography>
            <Button component={RouterLink} href="/sofa2/careers" variant="contained" startIcon={<Iconify icon="eva:arrow-back-fill" />}>
              Quay lại danh sách
            </Button>
          </Stack>
        </Container>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${job.title} - LUXE Sofa`}</title>
      </Helmet>

      <Sofa2PageHero
        overline="Chi tiết vị trí"
        title={job.title}
        subtitle={job.description}
        image={SOFA2_PAGE_IMAGES.careers}
      />

      {/* Job detail */}
      <Sofa2Section>
        <Container component={MotionViewport} maxWidth="md">
          <Stack spacing={4}>
            {/* Meta chips */}
            <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} direction="row" spacing={1} flexWrap="wrap" useFlexGap>
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

            {/* Description */}
            <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2}>
              <Typography variant="overline" sx={{ color: 'text.disabled' }}>Mô tả công việc</Typography>
              <Typography variant="h4">{job.title}</Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{job.description}</Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Tại LUXE Sofa, chúng tôi tìm kiếm những người yêu nghề, tỉ mỉ và tận tâm với sản phẩm.
                Bạn sẽ làm việc trong môi trường chuyên nghiệp cùng nghệ nhân lành nghề với hơn 12 năm
                kinh nghiệm chế tác sofa.
              </Typography>
            </Stack>

            {/* Requirements */}
            <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: 4, borderRadius: 2, bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.04) }}>
              <Typography variant="h6">Yêu cầu công việc</Typography>
              {job.requirements.map((req) => (
                <Stack key={req} direction="row" spacing={1.5} alignItems="flex-start">
                  <Iconify icon="eva:checkmark-circle-2-fill" sx={{ color: 'primary.main', mt: 0.25 }} width={20} />
                  <Typography variant="body2">{req}</Typography>
                </Stack>
              ))}
            </Stack>

            {/* Actions */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 2 }}>
              <Button component={RouterLink} href="/sofa2/careers/apply" variant="contained" size="large" color="primary" startIcon={<Iconify icon="solar:letter-bold-duotone" />}>
                Ứng tuyển ngay
              </Button>
              <Button component={RouterLink} href="/sofa2/careers" variant="outlined" size="large" startIcon={<Iconify icon="eva:arrow-back-fill" />}>
                Vị trí khác
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Sofa2Section>
    </>
  );
}
