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

import { SOFA14_COLORS } from 'src/sections/sofa14/sofa14-data';
import { SOFA14_PAGE_IMAGES } from 'src/sections/sofa14-pages/sofa14-pages-data';
import { Sofa14Section, Sofa14PageHero } from 'src/sections/sofa14-pages/sofa14-page-hero';

export default function Page() {
  const theme = useTheme();
  const [tracking, setTracking] = useState(false);

  return (
    <>
      <Helmet>
        <title>Theo dõi đơn hàng — Sofa14</title>
      </Helmet>

      <Sofa14PageHero overline="THEO DÕI" title={<>THEO DÕI <span>ĐƠN HÀNG</span></>} subtitle="Tra cứu trạng thái đơn hàng của bạn." image={SOFA14_PAGE_IMAGES.cta} />

      <Sofa14Section>
        <Stack spacing={4} sx={{ maxWidth: 600, mx: 'auto' }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <Stack spacing={2}>
            <TextField fullWidth label="Mã đơn hàng" placeholder="SF9-2025-0001" />
            <Button onClick={() => setTracking(true)} size="large" variant="contained" startIcon={<Iconify icon="solar:track-bold-duotone" />} sx={{ borderRadius: 30, bgcolor: SOFA14_COLORS.coral, color: 'common.white', fontWeight: 'fontWeightBold', boxShadow: `0 4px 0 ${SOFA14_COLORS.ink}`, '&:hover': { bgcolor: SOFA14_COLORS.butter, boxShadow: `0 6px 0 ${SOFA14_COLORS.ink}` } }}>Tra cứu</Button>
          </Stack>
          {tracking && (
            <Stack spacing={3} sx={{ p: 3, borderRadius: 3, bgcolor: 'background.paper', border: `1px solid ${SOFA14_COLORS.mint}` }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold' }}>Đơn hàng #SF9-2025-0001</Typography>
                <Chip label="Đang giao" color="warning" size="small" />
              </Stack>
              <Stack spacing={2}>
                {['Đặt hàng', 'Xác nhận', 'Đang sản xuất', 'Đang giao', 'Giao thành công'].map((step, i) => (
                  <Stack key={i} direction="row" spacing={2} alignItems="center">
                    <Box sx={{ width: 32, height: 32, borderRadius: '50%', bgcolor: i < 3 ? SOFA14_COLORS.mint : 'grey.300', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Iconify icon={i < 3 ? 'solar:check-bold' : 'solar:clock-bold'} width={16} sx={{ color: i < 3 ? 'common.white' : 'text.disabled' }} />
                    </Box>
                    <Typography variant="body2" sx={{ fontWeight: i < 3 ? 'fontWeightBold' : 'fontWeightMedium', color: i < 3 ? 'text.primary' : 'text.disabled' }}>{step}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          )}
        </Stack>
      </Sofa14Section>
    </>
  );
}
