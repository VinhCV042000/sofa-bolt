import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA11_COLORS } from 'src/sections/sofa11/sofa11-data';
import { SOFA11_PAGE_IMAGES } from 'src/sections/sofa11-pages/sofa11-pages-data';
import { Sofa11Section, Sofa11PageHero } from 'src/sections/sofa11-pages/sofa11-page-hero';

export default function Page() {
  const theme = useTheme();
  const [tracking, setTracking] = useState(false);

  return (
    <>
      <Helmet>
        <title>Theo dõi tuyển dụng — Sofa11</title>
      </Helmet>

      <Sofa11PageHero overline="TUYỂN DỤNG" title={<>THEO DÕI <span>HỒ SƠ</span></>} subtitle="Tra cứu trạng thái hồ sơ ứng tuyển của bạn." image={SOFA11_PAGE_IMAGES.careers} />

      <Sofa11Section>
        <Grid container spacing={5} justifyContent="center">
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Stack spacing={2}>
                <TextField fullWidth label="Mã hồ sơ" placeholder="SF9-2025-XXXX" />
                <Button onClick={() => setTracking(true)} size="large" variant="contained" startIcon={<Iconify icon="solar:track-bold-duotone" />} sx={{ borderRadius: 30, bgcolor: SOFA11_COLORS.magenta, color: 'common.white', fontWeight: 'fontWeightBold', boxShadow: `0 4px 0 ${SOFA11_COLORS.void}`, '&:hover': { bgcolor: SOFA11_COLORS.magentaSoft, boxShadow: `0 6px 0 ${SOFA11_COLORS.void}` } }}>Tra cứu</Button>
              </Stack>
              {tracking && (
                <Stack spacing={2} sx={{ p: 3, borderRadius: 3, bgcolor: 'background.paper', border: `1px solid ${SOFA11_COLORS.cyan}` }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold' }}>Hồ sơ SF9-2025-0001</Typography>
                    <Chip label="Đang xét duyệt" color="warning" size="small" />
                  </Stack>
                  <Stack spacing={1}>
                    {['Nộp hồ sơ', 'Sàng lọc', 'Phỏng vấn', 'Kết quả'].map((step, i) => (
                      <Stack key={i} direction="row" spacing={2} alignItems="center">
                        <Box sx={{ width: 24, height: 24, borderRadius: '50%', bgcolor: i < 2 ? SOFA11_COLORS.cyan : 'grey.300', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Iconify icon={i < 2 ? 'solar:check-bold' : 'solar:clock-bold'} width={14} sx={{ color: i < 2 ? 'common.white' : 'text.disabled' }} />
                        </Box>
                        <Typography variant="body2" sx={{ color: i < 2 ? 'text.primary' : 'text.disabled' }}>{step}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              )}
            </Stack>
          </Grid>
        </Grid>
      </Sofa11Section>
    </>
  );
}
