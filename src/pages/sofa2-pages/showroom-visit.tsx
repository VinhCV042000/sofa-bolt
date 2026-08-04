import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useTheme } from '@mui/material/styles';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';
import { SOFA2_SHOWROOMS } from 'src/sections/sofa2/sofa2-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Đặt lịch - LUXE Sofa' };

const TIME_SLOTS = ['08:00 - 10:00', '10:00 - 12:00', '13:00 - 15:00', '15:00 - 17:00', '17:00 - 19:00'];

export default function Page() {
  const theme = useTheme();
  const [submitted, setSubmitted] = useState(false);
  const [purpose, setPurpose] = useState('visit');

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa2PageHero
        overline="Đặt lịch"
        title={(
          <>
            Đặt lịch
            <Box component="span" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.light}, ${theme.vars.palette.warning.light}`) }}>
              {' '}tham quan & tư vấn
            </Box>
          </>
        )}
        subtitle="Điền thông tin để đặt lịch tham quan showroom hoặc tư vấn nội thất miễn phí với chuyên gia LUXE Sofa."
        image="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport} maxWidth="md">
          {submitted ? (
            <Stack
              spacing={3}
              alignItems="center"
              sx={{ textAlign: 'center', p: { xs: 5, md: 8 }, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
              component={m.div}
              variants={varFade({ distance: 24 }).inUp}
            >
              <Box sx={{ width: 80, height: 80, display: 'flex', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.success.mainChannel, 0.12), color: 'success.main' }}>
                <Iconify icon="solar:check-circle-bold-duotone" width={44} />
              </Box>
              <Typography variant="h3">Đặt lịch thành công!</Typography>
              <Typography sx={{ color: 'text.secondary', maxWidth: 480 }}>
                Cảm ơn bạn đã đặt lịch. Đội ngũ LUXE Sofa sẽ liên hệ trong vòng 2 giờ để xác nhận lịch hẹn. Vui lòng kiểm tra điện thoại và email.
              </Typography>
              <Button onClick={() => setSubmitted(false)} variant="outlined" startIcon={<Iconify icon="solar:refresh-bold-duotone" />}>
                Đặt lịch khác
              </Button>
            </Stack>
          ) : (
            <Stack
              spacing={4}
              sx={{ p: { xs: 4, md: 6 }, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
              component={m.form}
              variants={varFade({ distance: 24 }).inUp}
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            >
              <Stack spacing={1}>
                <Typography variant="h3">Thông tin đặt lịch</Typography>
                <Typography sx={{ color: 'text.secondary' }}>Vui lòng điền đầy đủ thông tin để chúng tôi phục vụ bạn tốt nhất.</Typography>
              </Stack>

              {/* Purpose */}
              <FormControl>
                <FormLabel sx={{ mb: 1 }}>Mục đích</FormLabel>
                <RadioGroup row value={purpose} onChange={(e) => setPurpose(e.target.value)}>
                  <FormControlLabel value="visit" control={<Radio />} label="Tham quan showroom" />
                  <FormControlLabel value="consult" control={<Radio />} label="Tư vấn nội thất" />
                </RadioGroup>
              </FormControl>

              {/* Personal info */}
              <Grid container spacing={3}>
                <Grid xs={12} sm={6}>
                  <TextField fullWidth required label="Họ và tên" placeholder="Nguyễn Văn A" />
                </Grid>
                <Grid xs={12} sm={6}>
                  <TextField fullWidth required label="Số điện thoại" placeholder="09xx xxx xxx" />
                </Grid>
                <Grid xs={12}>
                  <TextField fullWidth type="email" label="Email" placeholder="email@example.com" />
                </Grid>
              </Grid>

              {/* Booking info */}
              <Grid container spacing={3}>
                <Grid xs={12} sm={6}>
                  <TextField fullWidth select required label="Showroom" defaultValue="">
                    {SOFA2_SHOWROOMS.map((sr) => (
                      <MenuItem key={sr.id} value={sr.id}>{sr.name}</MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid xs={12} sm={6}>
                  <TextField fullWidth required type="date" label="Ngày tham quan" InputLabelProps={{ shrink: true }} />
                </Grid>
                <Grid xs={12}>
                  <TextField fullWidth select required label="Khung giờ" defaultValue="">
                    {TIME_SLOTS.map((slot) => (
                      <MenuItem key={slot} value={slot}>{slot}</MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid xs={12}>
                  <TextField fullWidth multiline rows={3} label="Ghi chú (tuỳ chọn)" placeholder="Nội dung bạn muốn tư vấn..." />
                </Grid>
              </Grid>

              <Button type="submit" size="large" variant="contained" fullWidth startIcon={<Iconify icon="solar:calendar-bold-duotone" />}>
                Xác nhận đặt lịch
              </Button>
            </Stack>
          )}
        </Container>
      </Box>
    </>
  );
}
