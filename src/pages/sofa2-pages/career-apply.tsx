import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa2Section, Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';
import { SOFA2_CAREERS, SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Ứng tuyển - LUXE Sofa' };

export default function Page() {
  const theme = useTheme();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', position: '', coverLetter: '' });

  const handleChange = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));
  const handleSubmit = () => setSubmitted(true);

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
          {submitted ? (
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
              component={m.div}
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
                    {SOFA2_CAREERS.map((job) => (
                      <MenuItem key={job.id} value={job.title}>{job.title}</MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid xs={12}>
                  <TextField fullWidth label="Thư ứng tuyển" multiline rows={4} value={form.coverLetter} onChange={(e) => handleChange('coverLetter', e.target.value)} />
                </Grid>
                <Grid xs={12}>
                  <Button variant="outlined" component="label" startIcon={<Iconify icon="solar:upload-bold-duotone" />}>
                    Tải lên CV (PDF)
                    <input type="file" hidden accept=".pdf,.doc,.docx" />
                  </Button>
                  <Typography variant="caption" sx={{ display: 'block', mt: 1, color: 'text.disabled' }}>Hỗ trợ định dạng PDF, DOC, DOCX. Tối đa 5MB.</Typography>
                </Grid>
              </Grid>
              <Button onClick={handleSubmit} variant="contained" size="large" sx={{ width: 'fit-content' }} startIcon={<Iconify icon="solar:letter-bold-duotone" />}>
                Gửi hồ sơ
              </Button>
            </Stack>
          )}
        </Container>
      </Sofa2Section>
    </>
  );
}
