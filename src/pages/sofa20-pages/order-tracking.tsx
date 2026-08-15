import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { SOFA20_COLORS } from 'src/sections/sofa20/sofa20-data';
import { SOFA20_ORDER_STEPS } from 'src/sections/sofa20-pages/sofa20-shop-data';
import { SOFA20_PAGE_IMAGES } from 'src/sections/sofa20-pages/sofa20-pages-data';
import { Sofa20Section, Sofa20PageHero } from 'src/sections/sofa20-pages/sofa20-page-hero';
import { Sofa20Panel, sofa20FieldSx, sofa20GoldButtonSx } from 'src/sections/sofa20-pages/sofa20-shop-ui';

export default function Page() {
  return (
    <>
      <Helmet><title>Theo dõi đơn hàng — Sofa20</title></Helmet>

      <Sofa20PageHero overline="ĐƠN HÀNG" title={<>THEO DÕI <span>ĐƠN HÀNG</span></>} subtitle="Nhập mã đơn hàng để xem tiến độ chế tác và giao nhận." image={SOFA20_PAGE_IMAGES.workshop} />

      <Sofa20Section bg="black">
        <Stack spacing={4} sx={{ maxWidth: 720, mx: 'auto' }}>
          <Sofa20Panel title="Tra cứu đơn hàng">
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField fullWidth label="Mã đơn hàng" defaultValue="SOFA20-ORD001" sx={sofa20FieldSx} />
              <Button size="large" variant="contained" sx={{ ...sofa20GoldButtonSx, flexShrink: 0 }}>Tra cứu</Button>
            </Stack>
          </Sofa20Panel>

          <Sofa20Panel title="Tiến độ đơn hàng SOFA20-ORD001">
            <Stack spacing={2.5}>
              {SOFA20_ORDER_STEPS.map((step) => (
                <Stack key={step.label} direction="row" spacing={2} alignItems="center">
                  <Box sx={{ width: 40, height: 40, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: step.done ? SOFA20_COLORS.black : SOFA20_COLORS.gold, bgcolor: step.done ? SOFA20_COLORS.gold : 'transparent', border: `1px solid ${varAlpha(SOFA20_COLORS.gold, 0.5)}` }}>
                    <Iconify icon={step.done ? 'solar:check-circle-bold' : 'solar:clock-circle-bold-duotone'} width={20} />
                  </Box>
                  <Stack>
                    <Typography sx={{ color: 'common.white', fontWeight: 'fontWeightLight' }}>{step.label}</Typography>
                    <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4) }}>{step.desc}</Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Sofa20Panel>
        </Stack>
      </Sofa20Section>
    </>
  );
}
