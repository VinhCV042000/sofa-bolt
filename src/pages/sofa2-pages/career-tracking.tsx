import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { Sofa2Section, Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';
import { useSofa2AdminRows } from 'src/sections/sofa2-admin/sofa2-admin-store';
import { SOFA2_PAGE_IMAGES, SOFA2_COMPANY_INFO } from 'src/sections/sofa2/sofa2-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Tra cứu hồ sơ - LUXE Sofa' };

const TIMELINE = [
  { step: 1, title: 'Nộp hồ sơ', desc: 'Hồ sơ đã được tiếp nhận.', icon: 'solar:letter-bold-duotone' },
  { step: 2, title: 'Đang xem xét', desc: 'Hồ sơ đang được HR đánh giá.', icon: 'solar:eye-bold-duotone' },
  { step: 3, title: 'Phỏng vấn', desc: 'Mời phỏng vấn trực tiếp hoặc online.', icon: 'solar:chat-square-bold-duotone' },
  { step: 4, title: 'Kết quả', desc: 'Thông báo kết quả ứng tuyển.', icon: 'solar:check-circle-bold-duotone' },
];

export default function Page() {
  const { rows: applications } = useSofa2AdminRows('hr', 'submit-cv');
  const [query, setQuery] = useState('');
  const [searched, setSearched] = useState(false);
  const [result, setResult] = useState<(typeof applications)[number] | null>(null);

  const handleSearch = () => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return;
    const digits = normalized.replace(/\D/g, '');
    const match = applications.find((application) => {
      const applicationId = String(application.applicationId || '').toLowerCase();
      const email = String(application.email || '').trim().toLowerCase();
      const phone = String(application.phone || '').replace(/\D/g, '');
      return applicationId === normalized || email === normalized || (!!digits && phone === digits);
    });
    setResult(match ?? null);
    setSearched(true);
  };
  const currentStep = (status: string) => {
    if (status === 'Mới') return 1;
    if (status === 'Đang sàng lọc') return 2;
    if (status === 'Phỏng vấn') return 3;
    return 4;
  };
  const activeStep = result ? currentStep(String(result.status || 'Mới')) : 0;
  const terminalStatus = !!result && ['Trúng tuyển', 'Không đạt', 'Tự rút', 'Thử việc'].includes(String(result.status));

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa2PageHero
        overline="Tuyển dụng"
        title="Tra Cứu Hồ Sơ"
        subtitle="Kiểm tra tình trạng ứng tuyển của bạn bằng số điện thoại hoặc email."
        image={SOFA2_PAGE_IMAGES.careers}
      />

      {/* Tracking */}
      <Sofa2Section>
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Form + results */}
          <Grid xs={12} md={8}>
            <Stack
              component={m.div}
              variants={varFade({ distance: 24 }).inUp}
              spacing={3}
              sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
            >
              <Stack spacing={1}>
                <Typography variant="overline" sx={{ color: 'text.disabled' }}>Tra cứu</Typography>
                <Typography variant="h4">Nhập thông tin ứng tuyển</Typography>
                <Typography sx={{ color: 'text.secondary' }}>Nhập email, số điện thoại hoặc mã hồ sơ đã được cấp sau khi nộp.</Typography>
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <TextField fullWidth label="Email, số điện thoại hoặc mã hồ sơ" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(event) => { if (event.key === 'Enter') handleSearch(); }} />
                <Button onClick={handleSearch} variant="contained" size="large" startIcon={<Iconify icon="solar:search-bold-duotone" />}>
                  Tra cứu
                </Button>
              </Stack>

              {searched && (
                result ? <Stack spacing={3} sx={{ mt: 2 }}>
                  <Stack direction="row" spacing={1.5} alignItems="center" sx={{ p: 2, borderRadius: 1.5, bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.04) }}>
                    <Iconify icon="solar:user-bold-duotone" width={24} sx={{ color: 'primary.main' }} />
                    <Box>
                      <Typography variant="subtitle2">{result.applicant || 'Hồ sơ ứng tuyển'} · {result.job || 'Vị trí tuyển dụng'}</Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>Mã hồ sơ: {result.applicationId} · Nộp ngày: {result.submittedDate || '—'}</Typography>
                    </Box>
                  </Stack>
                  <Alert severity={terminalStatus ? (result.status === 'Trúng tuyển' || result.status === 'Thử việc' ? 'success' : 'info') : 'info'}>
                    Trạng thái hiện tại: <strong>{result.status}</strong>
                  </Alert>

                  <Typography variant="h6">Tiến trình hồ sơ</Typography>
                  <Stack spacing={2}>
                    {TIMELINE.map((item, index) => {
                      const stepNumber = index + 1;
                      const current = stepNumber === activeStep;
                      const complete = stepNumber < activeStep;
                      return (
                        <Stack key={item.step} direction="row" spacing={2} alignItems="flex-start">
                          <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Box sx={{ width: 44, height: 44, display: 'flex', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', bgcolor: current || complete ? 'primary.main' : (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.12), color: current || complete ? 'common.white' : 'text.disabled' }}>
                              <Iconify icon={item.icon} width={22} />
                            </Box>
                            {index < TIMELINE.length - 1 && (
                              <Box sx={{ position: 'absolute', top: 44, left: '50%', transform: 'translateX(-50%)', width: 2, height: 24, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.16) }} />
                            )}
                          </Box>
                          <Stack spacing={0.5} sx={{ pt: 1 }}>
                            <Typography variant="subtitle2" sx={{ color: current ? 'primary.main' : 'text.primary' }}>{item.step}. {item.title}</Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.desc}</Typography>
                            {current && (
                              <Typography variant="caption" sx={{ color: 'primary.main' }}>● Trạng thái hiện tại</Typography>
                            )}
                          </Stack>
                        </Stack>
                      );
                    })}
                  </Stack>
                </Stack> : <Alert severity="warning">Không tìm thấy hồ sơ phù hợp. Hãy kiểm tra lại email, số điện thoại hoặc mã hồ sơ.</Alert>
              )}
            </Stack>
          </Grid>

          {/* Support sidebar */}
          <Grid xs={12} md={4}>
            <Stack
              component={m.div}
              variants={varFade({ distance: 24 }).inUp}
              spacing={3}
              sx={{ p: 4, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, height: 1 }}
            >
              <Typography variant="h6">Cần hỗ trợ?</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>Nếu bạn gặp khó khăn khi tra cứu, vui lòng liên hệ bộ phận HR.</Typography>
              <Stack spacing={2}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Iconify icon="solar:phone-bold-duotone" width={20} sx={{ color: 'primary.main' }} />
                  <Typography variant="body2">{SOFA2_COMPANY_INFO.phone}</Typography>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Iconify icon="solar:letter-bold-duotone" width={20} sx={{ color: 'primary.main' }} />
                  <Typography variant="body2">{SOFA2_COMPANY_INFO.email}</Typography>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <Iconify icon="solar:map-point-bold-duotone" width={20} sx={{ color: 'primary.main', mt: 0.25 }} />
                  <Typography variant="body2">{SOFA2_COMPANY_INFO.address}</Typography>
                </Stack>
              </Stack>
              <Box sx={{ flex: 1 }} />
              <Stack spacing={1} sx={{ p: 2.5, borderRadius: 1.5, bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.04) }}>
                <Typography variant="subtitle2">Giờ làm việc</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Thứ 2 - Thứ 6: 8:00 - 17:30</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Thứ 7: 8:00 - 12:00</Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Sofa2Section>
    </>
  );
}
