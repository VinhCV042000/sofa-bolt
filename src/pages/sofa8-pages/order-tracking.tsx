import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA8_COLORS } from 'src/sections/sofa8/sofa8-data';
import { SOFA8_PAGE_IMAGES } from 'src/sections/sofa8-pages/sofa8-pages-data';
import { Sofa8Section, Sofa8PageHero } from 'src/sections/sofa8-pages/sofa8-page-hero';

export default function Page() {
  const theme = useTheme();
  const [tracking, setTracking] = useState(false);

  return (
    <>
      <Helmet>
        <title>Theo dõi đơn hàng — Sofa8</title>
      </Helmet>

      <Sofa8PageHero overline="THEO DÕI" title={<>THEO DÕI <span>ĐƠN HÀNG</span></>} subtitle="Tra cứu trạng thái đơn hàng của bạn." image={SOFA8_PAGE_IMAGES.cta} />

      <Sofa8Section>
        <Stack spacing={4} sx={{ maxWidth: 600, mx: 'auto' }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <Stack spacing={2}>
            <TextField fullWidth label="Mã đơn hàng" placeholder="SF8-2025-0001" />
            <Button onClick={() => setTracking(true)} size="large" variant="contained" startIcon={<Iconify icon="solar:track-bold-duotone" />} sx={{ bgcolor: SOFA8_COLORS.coral, color: 'common.white', fontWeight: 'fontWeightBold', '&:hover': { bgcolor: SOFA8_COLORS.coralLight } }}>
              Tra cứu
            </Button>
          </Stack>
          {tracking && (
            <Stack spacing={3} sx={{ p: 3, borderRadius: 3, bgcolor: 'background.paper', border: `1px solid ${SOFA8_COLORS.seafoam}` }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold' }}>Đơn hàng #SF8-2025-0001</Typography>
                <Chip label="Đang giao" color="warning" size="small" />
              </Stack>
              <Stack spacing={2}>
                {['Đặt hàng', 'Xác nhận', 'Đang sản xuất', 'Đang giao', 'Giao thành công'].map((step, i) => (
                  <Stack key={i} direction="row" spacing={2} alignItems="center">
                    <Box sx={{ width: 32, height: 32, borderRadius: '50%', bgcolor: i < 3 ? SOFA8_COLORS.seafoam : 'grey.300', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Iconify icon={i < 3 ? 'solar:check-bold' : 'solar:clock-bold'} width={16} sx={{ color: i < 3 ? 'common.white' : 'text.disabled' }} />
                    </Box>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: i < 3 ? 'fontWeightBold' : 'fontWeightMedium', color: i < 3 ? 'text.primary' : 'text.disabled' }}>{step}</Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          )}
        </Stack>
      </Sofa8Section>
    </>
  );
}
