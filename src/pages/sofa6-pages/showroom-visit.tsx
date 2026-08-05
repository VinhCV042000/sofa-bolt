import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

import { useState } from 'react';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa6PageHero, Sofa6Section } from 'src/sections/sofa6-pages/sofa6-page-hero';
import { SOFA6_SHOWROOMS, SOFA6_PAGE_IMAGES } from 'src/sections/sofa6-pages/sofa6-pages-data';
import { SOFA6_COLORS } from 'src/sections/sofa6/sofa6-data';

const metadata = { title: 'Đặt lịch - Sofa Earth' };

const TIME_SLOTS = ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];

export default function Page() {
  const location = useLocation();
  const isConsult = location.pathname.includes('consult');

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    showroom: '',
    date: '',
    time: '',
    content: '',
  });

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const title = isConsult ? 'Đặt lịch tư vấn' : 'Đặt lịch tham quan';
  const subtitle = isConsult
    ? 'Đặt lịch tư vấn miễn phí. Chuyên gia sẽ đến đo đạc, tư vấn và phác thảo 3D sơ bộ.'
    : 'Đặt lịch tham quan showroom để trải nghiệm trực tiếp sofa tự nhiên. Đội ngũ tư vấn sẽ đón tiếp bạn.';

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa6PageHero overline="Showroom" title={title} subtitle={subtitle} image={SOFA6_PAGE_IMAGES.contact} />

      <Sofa6Section>
        <Grid container spacing={{ xs: 4, md: 6 }} component={MotionViewport}>
          <Grid xs={12} md={5}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Typography variant="h4">{title}</Typography>
              <Typography sx={{ color: 'text.secondary' }}>{subtitle}</Typography>
              <Stack spacing={2}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Iconify icon="solar:calendar-bold-duotone" width={24} sx={{ color: SOFA6_COLORS.terracotta }} />
                  <Typography>Chọn ngày & giờ hẹn</Typography>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Iconify icon="solar:map-point-bold-duotone" width={24} sx={{ color: SOFA6_COLORS.terracotta }} />
                  <Typography>Showroom muốn {isConsult ? 'tư vấn' : 'tham quan'}</Typography>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Iconify icon="solar:document-add-bold-duotone" width={24} sx={{ color: SOFA6_COLORS.terracotta }} />
                  <Typography>Mô tả nhu cầu của bạn</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>

          <Grid xs={12} md={7}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <form onSubmit={handleSubmit}>
                <Stack spacing={3} sx={{ p: { xs: 3, md: 4 }, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                  <Grid container spacing={2}>
                    <Grid xs={12} sm={6}>
                      <TextField fullWidth label="Họ tên" value={form.name} onChange={handleChange('name')} required />
                    </Grid>
                    <Grid xs={12} sm={6}>
                      <TextField fullWidth label="SĐT" value={form.phone} onChange={handleChange('phone')} required />
                    </Grid>
                    <Grid xs={12}>
                      <TextField fullWidth label="Email" type="email" value={form.email} onChange={handleChange('email')} required />
                    </Grid>
                    <Grid xs={12}>
                      <TextField fullWidth select label="Showroom" value={form.showroom} onChange={handleChange('showroom')} required>
                        {SOFA6_SHOWROOMS.map((s) => (
                          <MenuItem key={s.id} value={s.name}>{s.name} — {s.address}</MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid xs={12} sm={6}>
                      <TextField fullWidth type="date" label="Ngày hẹn" value={form.date} onChange={handleChange('date')} required InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid xs={12} sm={6}>
                      <TextField fullWidth select label="Giờ hẹn" value={form.time} onChange={handleChange('time')} required>
                        {TIME_SLOTS.map((slot) => (
                          <MenuItem key={slot} value={slot}>{slot}</MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid xs={12}>
                      <TextField fullWidth multiline rows={4} label="Nội dung" value={form.content} onChange={handleChange('content')} placeholder="Mô tả nhu cầu, không gian, sở thích màu sắc..." />
                    </Grid>
                  </Grid>
                  <Button type="submit" size="large" variant="contained" startIcon={<Iconify icon="solar:calendar-add-bold-duotone" />} sx={{ bgcolor: SOFA6_COLORS.terracotta, color: 'common.white', '&:hover': { bgcolor: SOFA6_COLORS.clay }, alignSelf: 'flex-start' }}>
                    {isConsult ? 'Đặt lịch tư vấn' : 'Đặt lịch tham quan'}
                  </Button>
                </Stack>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Sofa6Section>
    </>
  );
}
