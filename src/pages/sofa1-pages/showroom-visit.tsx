import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa1PageHero } from 'src/sections/sofa1-pages/sofa1-page-hero';
import { SOFA1_SHOWROOMS } from 'src/sections/sofa1-pages/sofa1-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Đặt lịch - Casa Sofa' };

const TIME_SLOTS = ['08:00 - 10:00', '10:00 - 12:00', '13:00 - 15:00', '15:00 - 17:00', '17:00 - 19:00'];

export default function Page() {
  const theme = useTheme();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    showroom: '',
    date: '',
    time: '',
    note: '',
  });

  const handleChange = (field: keyof typeof form) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa1PageHero
        overline="Đặt lịch"
        title={(
          <>
            Đặt lịch
            <Box
              component="span"
              sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.light}, ${theme.vars.palette.warning.light}`) }}
            >
              {' '}
              tham quan & tư vấn
            </Box>
          </>
        )}
        subtitle="Điền thông tin để đặt lịch tham quan showroom hoặc tư vấn nội thất miễn phí với chuyên gia Casa Sofa."
        image="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport} maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }}>
            {/* Form */}
            <Grid xs={12} md={8}>
              {submitted ? (
                <Stack
                  spacing={3}
                  alignItems="center"
                  sx={{
                    textAlign: 'center',
                    p: { xs: 5, md: 8 },
                    borderRadius: 3,
                    bgcolor: 'background.paper',
                    boxShadow: (t) => t.customShadows.card,
                  }}
                  component={m.div}
                  variants={varFade({ distance: 24 }).inUp}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      display: 'flex',
                      borderRadius: '50%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: (t) => varAlpha(t.vars.palette.success.mainChannel, 0.12),
                      color: 'success.main',
                    }}
                  >
                    <Iconify icon="solar:check-circle-bold-duotone" width={44} />
                  </Box>
                  <Typography variant="h3">Đặt lịch thành công!</Typography>
                  <Typography sx={{ color: 'text.secondary', maxWidth: 480 }}>
                    Cảm ơn bạn đã đặt lịch. Đội ngũ Casa Sofa sẽ liên hệ trong vòng 2 giờ để xác nhận
                    lịch hẹn. Vui lòng kiểm tra điện thoại và email.
                  </Typography>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outlined"
                    startIcon={<Iconify icon="solar:refresh-bold-duotone" />}
                  >
                    Đặt lịch khác
                  </Button>
                </Stack>
              ) : (
                <Stack
                  spacing={4}
                  sx={{ p: { xs: 4, md: 6 }, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
                  component={m.form}
                  variants={varFade({ distance: 24 }).inUp}
                  onSubmit={handleSubmit}
                >
                  <Stack spacing={1}>
                    <Typography variant="h3">Thông tin đặt lịch</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                      Vui lòng điền đầy đủ thông tin để chúng tôi phục vụ bạn tốt nhất.
                    </Typography>
                  </Stack>

                  {/* Personal info */}
                  <Grid container spacing={3}>
                    <Grid xs={12} sm={6}>
                      <TextField
                        fullWidth
                        required
                        label="Họ tên"
                        placeholder="Nguyễn Văn A"
                        value={form.name}
                        onChange={handleChange('name')}
                      />
                    </Grid>
                    <Grid xs={12} sm={6}>
                      <TextField
                        fullWidth
                        required
                        label="SĐT"
                        placeholder="09xx xxx xxx"
                        value={form.phone}
                        onChange={handleChange('phone')}
                      />
                    </Grid>
                    <Grid xs={12}>
                      <TextField
                        fullWidth
                        type="email"
                        label="Email"
                        placeholder="email@example.com"
                        value={form.email}
                        onChange={handleChange('email')}
                      />
                    </Grid>
                  </Grid>

                  {/* Booking info */}
                  <Grid container spacing={3}>
                    <Grid xs={12} sm={6}>
                      <TextField
                        fullWidth
                        select
                        required
                        label="Showroom"
                        value={form.showroom}
                        onChange={handleChange('showroom')}
                      >
                        {SOFA1_SHOWROOMS.map((sr) => (
                          <MenuItem key={sr.id} value={sr.id}>
                            {sr.name}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid xs={12} sm={6}>
                      <TextField
                        fullWidth
                        required
                        type="date"
                        label="Ngày hẹn"
                        InputLabelProps={{ shrink: true }}
                        value={form.date}
                        onChange={handleChange('date')}
                      />
                    </Grid>
                    <Grid xs={12} sm={6}>
                      <TextField
                        fullWidth
                        select
                        required
                        label="Giờ hẹn"
                        value={form.time}
                        onChange={handleChange('time')}
                      >
                        {TIME_SLOTS.map((slot) => (
                          <MenuItem key={slot} value={slot}>
                            {slot}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid xs={12}>
                      <TextField
                        fullWidth
                        multiline
                        rows={3}
                        label="Nội dung"
                        placeholder="Nội dung bạn muốn tư vấn..."
                        value={form.note}
                        onChange={handleChange('note')}
                      />
                    </Grid>
                  </Grid>

                  <Button
                    type="submit"
                    size="large"
                    variant="contained"
                    fullWidth
                    startIcon={<Iconify icon="solar:calendar-bold-duotone" />}
                  >
                    Xác nhận đặt lịch
                  </Button>
                </Stack>
              )}
            </Grid>

            {/* Showroom sidebar */}
            <Grid xs={12} md={4}>
              <Stack
                spacing={3}
                sx={{ p: { xs: 3, md: 4 }, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
                component={m.div}
                variants={varFade({ distance: 24 }).inLeft}
              >
                <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                  Chọn showroom
                </Typography>
                {SOFA1_SHOWROOMS.map((sr) => (
                  <Stack key={sr.id} spacing={1}>
                    <Typography variant="subtitle2">{sr.name}</Typography>
                    <Stack direction="row" spacing={1} alignItems="flex-start">
                      <Iconify icon="solar:map-point-bold-duotone" width={16} sx={{ color: 'primary.main', mt: 0.25 }} />
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {sr.address}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Iconify icon="solar:phone-bold-duotone" width={16} sx={{ color: 'primary.main' }} />
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {sr.phone}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Iconify icon="solar:clock-circle-bold-duotone" width={16} sx={{ color: 'primary.main' }} />
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {sr.hours}
                      </Typography>
                    </Stack>
                    <Button
                      component={RouterLink}
                      href={`/sofa1/showrooms/${sr.id}`}
                      size="small"
                      variant="text"
                      startIcon={<Iconify icon="solar:eye-bold-duotone" />}
                      sx={{ alignSelf: 'flex-start' }}
                    >
                      Xem chi tiết
                    </Button>
                  </Stack>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
