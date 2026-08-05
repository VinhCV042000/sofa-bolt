import { Helmet } from 'react-helmet-async';

import { useState } from 'react';
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA8_COLORS } from 'src/sections/sofa8/sofa8-data';
import { Sofa8PageHero, Sofa8Section } from 'src/sections/sofa8-pages/sofa8-page-hero';
import { SOFA8_PAGE_IMAGES } from 'src/sections/sofa8-pages/sofa8-pages-data';

export default function Page() {
  const theme = useTheme();
  const [tracking, setTracking] = useState(false);

  return (
    <>
      <Helmet>
        <title>Theo dõi tuyển dụng — Sofa8</title>
      </Helmet>

      <Sofa8PageHero overline="TUYỂN DỤNG" title={<>THEO DÕI <span>HỒ SƠ</span></>} subtitle="Tra cứu trạng thái hồ sơ ứng tuyển của bạn." image={SOFA8_PAGE_IMAGES.careers} />

      <Sofa8Section>
        <Grid container spacing={5} justifyContent="center">
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Stack spacing={2}>
                <TextField fullWidth label="Mã hồ sơ" placeholder="SF8-2025-XXXX" />
                <Button onClick={() => setTracking(true)} size="large" variant="contained" startIcon={<Iconify icon="solar:track-bold-duotone" />} sx={{ bgcolor: SOFA8_COLORS.coral, color: 'common.white', fontWeight: 'fontWeightBold', '&:hover': { bgcolor: SOFA8_COLORS.coralLight } }}>
                  Tra cứu
                </Button>
              </Stack>
              {tracking && (
                <Stack spacing={2} sx={{ p: 3, borderRadius: 3, bgcolor: 'background.paper', border: `1px solid ${SOFA8_COLORS.seafoam}` }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold' }}>Hồ sơ SF8-2025-0001</Typography>
                    <Chip label="Đang xét duyệt" color="warning" size="small" />
                  </Stack>
                  <Stack spacing={1}>
                    {['Nộp hồ sơ', 'Sàng lọc', 'Phỏng vấn', 'Kết quả'].map((step, i) => (
                      <Stack key={i} direction="row" spacing={2} alignItems="center">
                        <Box sx={{ width: 24, height: 24, borderRadius: '50%', bgcolor: i < 2 ? SOFA8_COLORS.seafoam : 'grey.300', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
      </Sofa8Section>
    </>
  );
}
