import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { SOFA15_COLORS } from 'src/sections/sofa15/sofa15-data';
import { SOFA15_ORDER_STEPS } from 'src/sections/sofa15-pages/sofa15-shop-data';
import { SOFA15_PAGE_IMAGES } from 'src/sections/sofa15-pages/sofa15-pages-data';
import { Sofa15Section, Sofa15PageHero } from 'src/sections/sofa15-pages/sofa15-page-hero';
import { Sofa15Panel, sofa15FieldSx, sofa15GoldButtonSx } from 'src/sections/sofa15-pages/sofa15-shop-ui';

export default function Page() {
  return (
    <>
      <Helmet><title>Theo dõi đơn hàng — Sofa15</title></Helmet>

      <Sofa15PageHero overline="ĐƠN HÀNG" title={<>THEO DÕI <span>ĐƠN HÀNG</span></>} subtitle="Nhập mã đơn hàng để xem tiến độ chế tác và giao nhận." image={SOFA15_PAGE_IMAGES.workshop} />

      <Sofa15Section bg="black">
        <Stack spacing={4} sx={{ maxWidth: 720, mx: 'auto' }}>
          <Sofa15Panel title="Tra cứu đơn hàng">
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField fullWidth label="Mã đơn hàng" defaultValue="SOFA15-ORD001" sx={sofa15FieldSx} />
              <Button size="large" variant="contained" sx={{ ...sofa15GoldButtonSx, flexShrink: 0 }}>Tra cứu</Button>
            </Stack>
          </Sofa15Panel>

          <Sofa15Panel title="Tiến độ đơn hàng SOFA15-ORD001">
            <Stack spacing={2.5}>
              {SOFA15_ORDER_STEPS.map((step) => (
                <Stack key={step.label} direction="row" spacing={2} alignItems="center">
                  <Box sx={{ width: 40, height: 40, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: step.done ? SOFA15_COLORS.black : SOFA15_COLORS.gold, bgcolor: step.done ? SOFA15_COLORS.gold : 'transparent', border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.5)}` }}>
                    <Iconify icon={step.done ? 'solar:check-circle-bold' : 'solar:clock-circle-bold-duotone'} width={20} />
                  </Box>
                  <Stack>
                    <Typography sx={{ color: 'common.white', fontWeight: 'fontWeightLight' }}>{step.label}</Typography>
                    <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4) }}>{step.desc}</Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Sofa15Panel>
        </Stack>
      </Sofa15Section>
    </>
  );
}
