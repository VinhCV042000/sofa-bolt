import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA7_COLORS } from 'src/sections/sofa7/sofa7-data';
import { SOFA7_PAGE_SHOWROOMS } from 'src/sections/sofa7-pages/sofa7-pages-data';
import { Sofa7Section, Sofa7PageHero } from 'src/sections/sofa7-pages/sofa7-page-hero';

// ----------------------------------------------------------------------

const metadata = { title: 'Đặt lịch — Sofa7' };

const TIME_SLOTS = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];

export default function Page() {
  const theme = useTheme();
  const location = useLocation();
  const isConsult = location.pathname.includes('consult');

  const [submitted, setSubmitted] = useState(false);

  const pageTitle = isConsult ? 'ĐẶT LỊCH TƯ VẤN' : 'ĐẶT LỊCH THAM QUAN';
  const pageOverline = isConsult ? 'TƯ VẤN' : 'THAM QUAN';
  const pageImage = isConsult
    ? 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920'
    : 'https://images.pexels.com/photos/8089275/pexels-photo-8089275.jpeg?auto=compress&cs=tinysrgb&w=1920';
  const pageSubtitle = isConsult
    ? 'Đặt lịch tư vấn miễn phí với chuyên gia nội thất Sofa7. Chúng tôi sẽ giúp bạn chọn sofa phù hợp.'
    : 'Đặt lịch tham quan showroom Sofa7. Trải nghiệm vibe loft nguyên bản, sofa da thật, velvet neon.';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>{`Sofa7 — ${pageTitle}`}</title>
      </Helmet>

      <Sofa7PageHero
        overline={pageOverline}
        title={
          <>
            {pageTitle.split(' ').slice(0, 2).join(' ')}{' '}
            <span>{pageTitle.split(' ').slice(2).join(' ')}</span>
          </>
        }
        subtitle={pageSubtitle}
        image={pageImage}
      />

      <Sofa7Section>
        <Grid container spacing={{ xs: 5, md: 8 }} justifyContent="center">
          <Grid xs={12} md={8}>
            {submitted ? (
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                spacing={4}
                alignItems="center"
                sx={{ textAlign: 'center', p: { xs: 5, md: 8 }, borderRadius: 0, bgcolor: 'background.paper', border: `2px solid ${SOFA7_COLORS.electric}` }}
              >
                <Box sx={{ width: 80, height: 80, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete }}>
                  <Iconify icon="solar:check-circle-bold-duotone" width={40} />
                </Box>
                <Typography variant="h3" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
                  ĐẶT LỊCH <Box component="span" sx={{ ...textGradient(`90deg, ${SOFA7_COLORS.electric} 0%, ${SOFA7_COLORS.cyan} 100%`) }}>THÀNH CÔNG</Box>
                </Typography>
                <Typography sx={{ color: 'text.secondary', maxWidth: 480 }}>
                  Cảm ơn bạn đã đặt lịch. Đội ngũ Sofa7 sẽ liên hệ trong vòng 2 giờ để xác nhận lịch hẹn.
                  Vibe loft đang chờ bạn!
                </Typography>
                <Button onClick={() => setSubmitted(false)} variant="outlined" sx={{ borderRadius: 0, borderColor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.concrete, fontWeight: 'fontWeightBold', textTransform: 'uppercase', '&:hover': { borderColor: SOFA7_COLORS.electric, color: SOFA7_COLORS.electric, bgcolor: 'transparent' } }}>
                  Đặt lịch khác
                </Button>
              </Stack>
            ) : (
              <Stack
                component="form"
                onSubmit={handleSubmit}
                spacing={3}
                sx={{
                  p: { xs: 4, md: 6 },
                  borderRadius: 0,
                  bgcolor: 'background.paper',
                  border: `2px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1.5}>
                  <Box sx={{ width: 8, height: 40, bgcolor: SOFA7_COLORS.electric }} />
                  <Typography variant="overline" sx={{ color: SOFA7_COLORS.electric, letterSpacing: 4, fontWeight: 'fontWeightBold' }}>
                    THÔNG TIN ĐẶT LỊCH
                  </Typography>
                </Stack>

                <Typography variant="h4" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
                  {pageTitle}
                </Typography>

                <Grid container spacing={3}>
                  <Grid xs={12} sm={6}>
                    <TextField fullWidth required label="Họ tên" placeholder="Nguyễn Văn A" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 0 } }} />
                  </Grid>
                  <Grid xs={12} sm={6}>
                    <TextField fullWidth required label="SĐT" placeholder="0901 234 567" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 0 } }} />
                  </Grid>
                  <Grid xs={12} sm={6}>
                    <TextField fullWidth required type="email" label="Email" placeholder="email@example.com" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 0 } }} />
                  </Grid>
                  <Grid xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      select
                      label="Showroom"
                      defaultValue=""
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 0 } }}
                    >
                      {SOFA7_PAGE_SHOWROOMS.map((s) => (
                        <MenuItem key={s.id} value={s.id}>
                          {s.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid xs={12} sm={6}>
                    <TextField fullWidth required type="date" label="Ngày hẹn" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 0 } }} />
                  </Grid>
                  <Grid xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      select
                      label="Giờ hẹn"
                      defaultValue=""
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 0 } }}
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
                      rows={4}
                      label="Nội dung"
                      placeholder={isConsult ? 'Mô tả nhu cầu tư vấn của bạn...' : 'Mô tả nhu cầu của bạn...'}
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 0 } }}
                    />
                  </Grid>
                </Grid>

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    borderRadius: 0,
                    bgcolor: SOFA7_COLORS.electric,
                    color: SOFA7_COLORS.concrete,
                    fontWeight: 'fontWeightBold',
                    textTransform: 'uppercase',
                    py: 1.5,
                    '&:hover': { bgcolor: SOFA7_COLORS.cyan, color: SOFA7_COLORS.concrete },
                  }}
                  startIcon={<Iconify icon="solar:calendar-bold-duotone" />}
                >
                  {`ĐẶT LỊCH ${isConsult ? 'TƯ VẤN' : 'THAM QUAN'}`}
                </Button>
              </Stack>
            )}
          </Grid>
        </Grid>
      </Sofa7Section>
    </>
  );
}
