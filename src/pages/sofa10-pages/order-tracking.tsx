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

import { SOFA10_COLORS } from 'src/sections/sofa10/sofa10-data';
import { SOFA10_PAGE_IMAGES } from 'src/sections/sofa10-pages/sofa10-pages-data';
import { Sofa10Section, Sofa10PageHero } from 'src/sections/sofa10-pages/sofa10-page-hero';

export default function Page() {
  const theme = useTheme();
  const [tracking, setTracking] = useState(false);

  return (
    <>
      <Helmet>
        <title>Theo dõi đơn hàng — Sofa10</title>
      </Helmet>

      <Sofa10PageHero overline="THEO DÕI" title={<>THEO DÕI <span>ĐƠN HÀNG</span></>} subtitle="Tra cứu trạng thái đơn hàng của bạn." image={SOFA10_PAGE_IMAGES.cta} />

      <Sofa10Section>
        <Stack spacing={4} sx={{ maxWidth: 600, mx: 'auto' }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <Stack spacing={2}>
            <TextField fullWidth label="Mã đơn hàng" placeholder="SF9-2025-0001" />
            <Button onClick={() => setTracking(true)} size="large" variant="contained" startIcon={<Iconify icon="solar:track-bold-duotone" />} sx={{ borderRadius: 30, bgcolor: SOFA10_COLORS.wood, color: 'common.white', fontWeight: 'fontWeightNormal', boxShadow: `0 4px 0 ${SOFA10_COLORS.charcoal}`, '&:hover': { bgcolor: SOFA10_COLORS.woodLight, boxShadow: `0 6px 0 ${SOFA10_COLORS.charcoal}` } }}>Tra cứu</Button>
          </Stack>
          {tracking && (
            <Stack spacing={3} sx={{ p: 3, borderRadius: 3, bgcolor: 'background.paper', border: `1px solid ${SOFA10_COLORS.moss}` }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightNormal' }}>Đơn hàng #SF9-2025-0001</Typography>
                <Chip label="Đang giao" color="warning" size="small" />
              </Stack>
              <Stack spacing={2}>
                {['Đặt hàng', 'Xác nhận', 'Đang sản xuất', 'Đang giao', 'Giao thành công'].map((step, i) => (
                  <Stack key={i} direction="row" spacing={2} alignItems="center">
                    <Box sx={{ width: 32, height: 32, borderRadius: '50%', bgcolor: i < 3 ? SOFA10_COLORS.moss : 'grey.300', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Iconify icon={i < 3 ? 'solar:check-bold' : 'solar:clock-bold'} width={16} sx={{ color: i < 3 ? 'common.white' : 'text.disabled' }} />
                    </Box>
                    <Typography variant="body2" sx={{ fontWeight: i < 3 ? 'fontWeightNormal' : 'fontWeightMedium', color: i < 3 ? 'text.primary' : 'text.disabled' }}>{step}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          )}
        </Stack>
      </Sofa10Section>
    </>
  );
}
