import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';
import { useForm } from 'react-hook-form';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport, MotionContainer } from 'src/components/animate';
import { Form, RHFTextField, RHFSelect } from 'src/components/hook-form';

import {
  SOFA_SERVICES,
  SOFA_BRANCHES,
  SOFA_PAGE_IMAGES,
} from 'src/sections/sofa/pages/sofa-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Đặt lịch dịch vụ sofa' };

const TIME_SLOTS = ['08:00 - 10:00', '10:00 - 12:00', '13:00 - 15:00', '15:00 - 17:00', '17:00 - 19:00'];

export default function Page() {
  const theme = useTheme();
  const methods = useForm({ defaultValues: { service: '', branch: '', date: '', slot: TIME_SLOTS[0], name: '', phone: '', email: '', address: '', notes: '' } });
  const { watch } = methods;
  const values = watch();

  const selectedService = SOFA_SERVICES.find((s) => s.id === values.service);
  const selectedBranch = SOFA_BRANCHES.find((b) => String(b.id) === values.branch);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      {/* Hero */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          py: { xs: 10, md: 16 },
          color: 'common.white',
          mt: 'calc(var(--layout-header-desktop-height) * -1)',
          pt: 'calc(var(--layout-header-desktop-height) + 40px)',
        }}
      >
        <Box
          sx={{
            inset: 0,
            position: 'absolute',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.78)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.56)}), url(${SOFA_PAGE_IMAGES.cta})`,
          }}
        />
        <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9 }}>
          <Stack spacing={3} sx={{ maxWidth: 720 }}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="overline" sx={{ color: 'primary.light', letterSpacing: 3 }}>Đặt lịch</Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="h1" sx={{ fontSize: { xs: 36, md: 56 }, lineHeight: 1.15 }}>
                Đặt Lịch
                <Box component="span" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.light}, ${theme.vars.palette.warning.light}`) }}> Dịch Vụ</Box>
              </Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.72), maxWidth: 560 }}>
                Đặt lịch online nhanh chóng — chọn dịch vụ, chi nhánh và khung giờ phù hợp. Chúng
                tôi xác nhận trong vòng 30 phút.
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Booking form */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Form methods={methods} onSubmit={() => {}}>
            <Grid container spacing={{ xs: 4, md: 6 }}>
              <Grid xs={12} md={8}>
                <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                  <Typography variant="h5">Thông tin đặt lịch</Typography>
                  <Grid container spacing={2}>
                    <Grid xs={12} sm={6}>
                      <RHFSelect name="service" label="Dịch vụ" native>
                        <option value="">Chọn dịch vụ</option>
                        {SOFA_SERVICES.map((s) => (
                          <option key={s.id} value={s.id}>{s.title}</option>
                        ))}
                      </RHFSelect>
                    </Grid>
                    <Grid xs={12} sm={6}>
                      <RHFSelect name="branch" label="Chi nhánh" native>
                        <option value="">Chọn chi nhánh</option>
                        {SOFA_BRANCHES.map((b) => (
                          <option key={b.id} value={b.id}>{b.name}</option>
                        ))}
                      </RHFSelect>
                    </Grid>
                    <Grid xs={12} sm={6}><RHFTextField name="date" label="Ngày hẹn" type="date" InputLabelProps={{ shrink: true }} /></Grid>
                    <Grid xs={12} sm={6}>
                      <Typography variant="subtitle2" sx={{ mb: 1 }}>Khung giờ</Typography>
                      <RadioGroup row name="slot" value={values.slot} onChange={(e) => methods.setValue('slot', e.target.value)}>
                        {TIME_SLOTS.map((slot) => (
                          <FormControlLabel key={slot} value={slot} control={<Radio size="small" />} label={<Typography variant="caption">{slot}</Typography>} />
                        ))}
                      </RadioGroup>
                    </Grid>
                  </Grid>
                  <Divider />
                  <Typography variant="h6">Thông tin liên hệ</Typography>
                  <Grid container spacing={2}>
                    <Grid xs={12} sm={6}><RHFTextField name="name" label="Họ và tên" /></Grid>
                    <Grid xs={12} sm={6}><RHFTextField name="phone" label="Số điện thoại" /></Grid>
                    <Grid xs={12} sm={6}><RHFTextField name="email" label="Email" type="email" /></Grid>
                    <Grid xs={12} sm={6}><RHFTextField name="address" label="Địa chỉ" /></Grid>
                    <Grid xs={12}><RHFTextField name="notes" label="Ghi chú thêm" multiline rows={3} /></Grid>
                  </Grid>
                  <Button type="submit" variant="contained" size="large" startIcon={<Iconify icon="solar:calendar-bold-duotone" />} sx={{ width: 'fit-content' }}>
                    Xác nhận đặt lịch
                  </Button>
                </Stack>
              </Grid>

              {/* Summary sidebar */}
              <Grid xs={12} md={4}>
                <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: 4, borderRadius: 2, bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.04), position: 'sticky', top: 100 }}>
                  <Typography variant="h6">Tóm tắt đặt lịch</Typography>
                  <Stack spacing={2}>
                    <Stack direction="row" spacing={1.5} alignItems="flex-start">
                      <Iconify icon="solar:tools-bold-duotone" sx={{ color: 'primary.main' }} />
                      <Stack>
                        <Typography variant="caption" sx={{ color: 'text.disabled' }}>Dịch vụ</Typography>
                        <Typography variant="body2">{selectedService?.title || 'Chưa chọn'}</Typography>
                        {selectedService && <Typography variant="caption" sx={{ color: 'primary.main' }}>{selectedService.price}</Typography>}
                      </Stack>
                    </Stack>
                    <Stack direction="row" spacing={1.5} alignItems="flex-start">
                      <Iconify icon="solar:map-point-bold-duotone" sx={{ color: 'primary.main' }} />
                      <Stack>
                        <Typography variant="caption" sx={{ color: 'text.disabled' }}>Chi nhánh</Typography>
                        <Typography variant="body2">{selectedBranch?.name || 'Chưa chọn'}</Typography>
                      </Stack>
                    </Stack>
                    <Stack direction="row" spacing={1.5} alignItems="flex-start">
                      <Iconify icon="solar:calendar-bold-duotone" sx={{ color: 'primary.main' }} />
                      <Stack>
                        <Typography variant="caption" sx={{ color: 'text.disabled' }}>Ngày & giờ</Typography>
                        <Typography variant="body2">{values.date || 'Chưa chọn'} · {values.slot}</Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Divider />
                  <Button component={RouterLink} href={paths.sofaServices} variant="outlined" fullWidth endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>Xem tất cả dịch vụ</Button>
                </Stack>
              </Grid>
            </Grid>
          </Form>
        </Container>
      </Box>
    </>
  );
}
