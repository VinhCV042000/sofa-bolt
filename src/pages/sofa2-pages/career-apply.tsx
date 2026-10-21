import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa2Section, Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';
import { useSofa2AdminRows } from 'src/sections/sofa2-admin/sofa2-admin-store';
import { SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';
import { isSofa2JobOpen } from 'src/sections/sofa2/sofa2-recruitment';

// ----------------------------------------------------------------------

const metadata = { title: 'Ứng tuyển - LUXE Sofa' };

export default function Page() {
  const { id } = useParams();
  const { rows: jobs, createRow } = useSofa2AdminRows('hr', 'recruitment');
  const { rows: applications } = useSofa2AdminRows('hr', 'submit-cv');
  const openJobs = jobs.filter(isSofa2JobOpen);
  const [applicationId, setApplicationId] = useState('');
  const [fileError, setFileError] = useState('');
  const [formError, setFormError] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    coverLetter: '',
    cvUrl: '',
    cvFileName: '',
    expectedSalary: '',
    availableDate: '',
  });
  const selectedJob = jobs.find((job) => isSofa2JobOpen(job) && String(job.jobId) === form.position);
  const isGeneralApplication = form.position === 'GENERAL';

  useEffect(() => {
    if (!id) return;
    const matched = jobs.find((job) => isSofa2JobOpen(job) && (String(job.jobId) === id || String(job.legacyId) === id));
    if (matched) {
      const jobId = String(matched.jobId);
      setForm((previous) => previous.position === jobId ? previous : { ...previous, position: jobId });
    }
  }, [id, jobs]);

  const handleChange = (field: keyof typeof form, value: string) => {
    setFormError('');
    setForm((prev) => ({ ...prev, [field]: value }));
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if ((!selectedJob && !isGeneralApplication) || !form.name.trim() || !form.email.trim() || !form.phone.trim() || fileError) return;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setFormError('Vui lòng kiểm tra lại địa chỉ email.');
      return;
    }
    const phoneDigits = form.phone.replace(/\D/g, '');
    if (phoneDigits.length < 9 || phoneDigits.length > 15) {
      setFormError('Vui lòng nhập số điện thoại hợp lệ.');
      return;
    }
    if (form.cvUrl.trim()) {
      try {
        const parsed = new URL(form.cvUrl.trim());
        if (!['http:', 'https:'].includes(parsed.protocol)) throw new Error('invalid protocol');
      } catch {
        setFormError('Link CV cần bắt đầu bằng http:// hoặc https://.');
        return;
      }
    }
    const email = form.email.trim().toLowerCase();
    const jobId = selectedJob ? String(selectedJob.jobId) : '';
    if (applications.some(
      (application) =>
        String(application.email ?? '').trim().toLowerCase() === email &&
        String(application.jobId ?? '') === jobId
    )) {
      setFormError('Email này đã có hồ sơ cho vị trí đã chọn. Vui lòng tra cứu hồ sơ hoặc liên hệ HR.');
      return;
    }
    const reference = `APP-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
    const submittedAt = new Date();
    const submittedDate = `${submittedAt.getFullYear()}-${String(submittedAt.getMonth() + 1).padStart(2, '0')}-${String(submittedAt.getDate()).padStart(2, '0')}`;
    createRow({
      applicationId: reference,
      jobId,
      applicant: form.name.trim(),
      email: form.email.trim().toLowerCase(),
      phone: form.phone.trim(),
      job: selectedJob ? String(selectedJob.title) : 'Ứng tuyển vị trí phù hợp',
      source: 'Website',
      cvUrl: form.cvUrl.trim(),
      cvFileName: form.cvFileName,
      coverLetter: form.coverLetter.trim(),
      expectedSalary: form.expectedSalary,
      availableDate: form.availableDate,
      submittedDate,
      screeningResult: 'Chưa sàng lọc',
      screenedBy: '',
      note: '',
      status: 'Mới',
    });
    setApplicationId(reference);
  };

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa2PageHero
        overline="Tuyển dụng"
        title="Ứng Tuyển LUXE Sofa"
        subtitle="Gửi hồ sơ của bạn — chúng tôi sẽ liên hệ trong 3-5 ngày làm việc."
        image={SOFA2_PAGE_IMAGES.careers}
      />

      {/* Form */}
      <Sofa2Section>
        <Container component={MotionViewport} maxWidth="md">
          {applicationId ? (
            <Stack
              component={m.div}
              variants={varFade({ distance: 24 }).inUp}
              spacing={3}
              alignItems="center"
              sx={{ textAlign: 'center', p: { xs: 4, md: 6 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
            >
              <Iconify icon="solar:check-circle-bold-duotone" width={72} sx={{ color: 'success.main' }} />
              <Typography variant="h4">Gửi hồ sơ thành công!</Typography>
              <Typography sx={{ color: 'text.secondary', maxWidth: 480 }}>
                Cảm ơn bạn đã ứng tuyển vào LUXE Sofa. Chúng tôi đã nhận được hồ sơ và sẽ liên hệ với bạn
                trong 3-5 ngày làm việc. Bạn có thể tra cứu tình trạng hồ sơ bất cứ lúc nào.
              </Typography>
              <Alert severity="success">Mã hồ sơ của bạn: <strong>{applicationId}</strong>. Hãy lưu mã này để tra cứu.</Alert>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button component={RouterLink} href="/sofa2/careers/tracking" variant="contained" startIcon={<Iconify icon="solar:search-bold-duotone" />}>
                  Tra cứu hồ sơ
                </Button>
                <Button component={RouterLink} href="/sofa2/careers" variant="outlined" startIcon={<Iconify icon="eva:arrow-back-fill" />}>
                  Vị trí khác
                </Button>
              </Stack>
            </Stack>
          ) : (
            <Stack
              component={m.form}
              onSubmit={handleSubmit}
              variants={varFade({ distance: 24 }).inUp}
              spacing={3}
              sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
            >
              <Stack spacing={1}>
                <Typography variant="overline" sx={{ color: 'text.disabled' }}>Form ứng tuyển</Typography>
                <Typography variant="h3">Gửi hồ sơ của bạn</Typography>
                <Typography sx={{ color: 'text.secondary' }}>Điền thông tin bên dưới. Các trường đánh * là bắt buộc.</Typography>
              </Stack>
              <Grid container spacing={2}>
                <Grid xs={12} sm={6}>
                  <TextField fullWidth required label="Họ và tên *" value={form.name} onChange={(e) => handleChange('name', e.target.value)} />
                </Grid>
                <Grid xs={12} sm={6}>
                  <TextField fullWidth required label="Email *" type="email" value={form.email} onChange={(e) => handleChange('email', e.target.value)} />
                </Grid>
                <Grid xs={12} sm={6}>
                  <TextField fullWidth required label="Số điện thoại *" value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} />
                </Grid>
                <Grid xs={12} sm={6}>
                  <TextField select fullWidth required label="Vị trí ứng tuyển *" value={form.position} onChange={(e) => handleChange('position', e.target.value)}>
                    <MenuItem value="GENERAL">Ứng tuyển vị trí phù hợp</MenuItem>
                    {openJobs.map((job) => (
                      <MenuItem key={String(job.jobId)} value={String(job.jobId)}>{job.title}</MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid xs={12} sm={6}>
                  <TextField fullWidth label="Mức lương mong muốn" value={form.expectedSalary} onChange={(e) => handleChange('expectedSalary', e.target.value)} />
                </Grid>
                <Grid xs={12} sm={6}>
                  <TextField fullWidth type="date" label="Ngày có thể nhận việc" InputLabelProps={{ shrink: true }} value={form.availableDate} onChange={(e) => handleChange('availableDate', e.target.value)} />
                </Grid>
                <Grid xs={12}>
                  <TextField fullWidth label="Thư ứng tuyển" multiline rows={4} value={form.coverLetter} onChange={(e) => handleChange('coverLetter', e.target.value)} />
                </Grid>
                <Grid xs={12}>
                  <Button variant="outlined" component="label" startIcon={<Iconify icon="solar:upload-bold-duotone" />}>
                    {form.cvFileName || 'Chọn tệp CV'}
                    <input
                      type="file"
                      hidden
                      accept=".pdf,.doc,.docx"
                      onChange={(event) => {
                        const file = event.target.files?.[0];
                          if (file && !/\.(pdf|doc|docx)$/i.test(file.name)) {
                            setFileError('Chỉ nhận tệp PDF, DOC hoặc DOCX.');
                            return;
                          }
                          if (file && file.size > 5 * 1024 * 1024) {
                          setFileError('Tệp CV phải nhỏ hơn 5MB.');
                          return;
                        }
                        setFileError('');
                        handleChange('cvFileName', file?.name ?? '');
                      }}
                    />
                  </Button>
                  <Typography variant="caption" sx={{ display: 'block', mt: 1, color: 'text.disabled' }}>Hỗ trợ PDF, DOC, DOCX; tối đa 5MB. Bản demo lưu tên tệp; để HR mở CV, hãy thêm đường dẫn bên dưới.</Typography>
                </Grid>
                {fileError && <Grid xs={12}><Alert severity="error">{fileError}</Alert></Grid>}
                {formError && <Grid xs={12}><Alert severity="error">{formError}</Alert></Grid>}
                <Grid xs={12}>
                  <TextField fullWidth label="Link CV / portfolio (khuyến nghị)" placeholder="https://..." value={form.cvUrl} onChange={(e) => handleChange('cvUrl', e.target.value)} />
                </Grid>
              </Grid>
              <Button type="submit" variant="contained" size="large" sx={{ width: 'fit-content' }} startIcon={<Iconify icon="solar:letter-bold-duotone" />}>
                Gửi hồ sơ
              </Button>
            </Stack>
          )}
        </Container>
      </Sofa2Section>
    </>
  );
}
