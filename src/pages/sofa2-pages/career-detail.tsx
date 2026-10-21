import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa2Section, Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';
import { useSofa2AdminRows } from 'src/sections/sofa2-admin/sofa2-admin-store';
import { SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';
import { isSofa2JobOpen } from 'src/sections/sofa2/sofa2-recruitment';

// ----------------------------------------------------------------------

export default function Page() {
  const { id } = useParams();
  const { rows: jobs } = useSofa2AdminRows('hr', 'job-detail');
  const job = jobs.find((item) => String(item.jobId) === id || String(item.legacyId) === id);
  const salaryMin = Number(job?.salaryMin || 0);
  const salaryMax = Number(job?.salaryMax || 0);
  const salary = salaryMin && salaryMax
    ? `${Math.round(salaryMin / 1000000)}–${Math.round(salaryMax / 1000000)} triệu`
    : salaryMin || salaryMax
      ? `${Math.round((salaryMin || salaryMax) / 1000000)} triệu`
      : 'Thỏa thuận';
  const parseLines = (value: unknown, fallback: string[]) =>
    String(value || '').split(/\r?\n/).map((line) => line.trim()).filter(Boolean).length
      ? String(value).split(/\r?\n/).map((line) => line.trim()).filter(Boolean)
      : fallback;
  const requirements = parseLines(job?.requirements, ['Đọc kỹ mô tả và chuẩn bị hồ sơ phù hợp với vị trí.']);
  const benefits = parseLines(job?.benefits, ['Chế độ lương thưởng cạnh tranh.', 'Được đào tạo và phát triển chuyên môn.']);
  const isOpen = job ? isSofa2JobOpen(job) : false;

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
        title={String(job.title)}
        subtitle={String(job.description || '')}
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
               <Typography variant="caption" sx={{ color: 'warning.main' }}>{job.type || 'Toàn thời gian'}</Typography>
              </Stack>
              <Stack direction="row" spacing={0.5} alignItems="center" sx={{ px: 1.5, py: 0.5, borderRadius: 1, bgcolor: (t) => varAlpha(t.vars.palette.success.mainChannel, 0.08) }}>
                <Iconify icon="solar:wallet-bold-duotone" width={16} sx={{ color: 'success.main' }} />
               <Typography variant="caption" sx={{ color: 'success.main' }}>{salary}</Typography>
              </Stack>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {[job.department, job.level, job.status].filter(Boolean).map((item) => (
                <Typography key={String(item)} variant="caption" sx={{ px: 1.5, py: 0.5, borderRadius: 1, bgcolor: 'action.hover' }}>
                  {item}
                </Typography>
              ))}
            </Stack>
            </Stack>

            {/* Description */}
            <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2}>
              <Typography variant="overline" sx={{ color: 'text.disabled' }}>Mô tả công việc</Typography>
              <Typography variant="h4">{job.title}</Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{job.description}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Hạn nhận hồ sơ: {String(job.deadline || 'Chưa cập nhật')}
                {job.quantity ? ` · Số lượng: ${job.quantity}` : ''}
              </Typography>
            </Stack>

            {/* Requirements */}
            <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: 4, borderRadius: 2, bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.04) }}>
              <Typography variant="h6">Yêu cầu công việc</Typography>
              {requirements.map((req) => (
                <Stack key={req} direction="row" spacing={1.5} alignItems="flex-start">
                  <Iconify icon="eva:checkmark-circle-2-fill" sx={{ color: 'primary.main', mt: 0.25 }} width={20} />
                  <Typography variant="body2">{req}</Typography>
                </Stack>
              ))}
            </Stack>

            <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: 4, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
              <Typography variant="h6">Quyền lợi</Typography>
              {benefits.map((benefit) => (
                <Stack key={benefit} direction="row" spacing={1.5} alignItems="flex-start">
                  <Iconify icon="solar:star-bold-duotone" sx={{ color: 'warning.main', mt: 0.25 }} width={20} />
                  <Typography variant="body2">{benefit}</Typography>
                </Stack>
              ))}
              {!!job.skills && <Typography variant="body2" sx={{ color: 'text.secondary' }}>Kỹ năng: {job.skills}</Typography>}
              {!!job.experience && <Typography variant="body2" sx={{ color: 'text.secondary' }}>Kinh nghiệm: {job.experience}</Typography>}
            </Stack>

            {/* Actions */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 2 }}>
              {isOpen ? (
                <Button component={RouterLink} href={`/sofa2/careers/apply/${encodeURIComponent(String(job.jobId))}`} variant="contained" size="large" color="primary" startIcon={<Iconify icon="solar:letter-bold-duotone" />}>
                  Ứng tuyển ngay
                </Button>
              ) : (
                <Button disabled variant="contained" size="large">Vị trí đã đóng</Button>
              )}
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
