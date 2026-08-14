import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { SOFA17_COLORS } from 'src/sections/sofa17/sofa17-data';
import { SOFA17_ORDER_STEPS } from 'src/sections/sofa17-pages/sofa17-shop-data';
import { SOFA17_PAGE_IMAGES } from 'src/sections/sofa17-pages/sofa17-pages-data';
import { Sofa17Section, Sofa17PageHero } from 'src/sections/sofa17-pages/sofa17-page-hero';
import { Sofa17Panel, sofa17FieldSx, sofa17GoldButtonSx } from 'src/sections/sofa17-pages/sofa17-shop-ui';

export default function Page() {
  return (
    <>
      <Helmet><title>Theo dõi đơn hàng — Sofa17</title></Helmet>

      <Sofa17PageHero overline="ĐƠN HÀNG" title={<>THEO DÕI <span>ĐƠN HÀNG</span></>} subtitle="Nhập mã đơn hàng để xem tiến độ chế tác và giao nhận." image={SOFA17_PAGE_IMAGES.workshop} />

      <Sofa17Section bg="black">
        <Stack spacing={4} sx={{ maxWidth: 720, mx: 'auto' }}>
          <Sofa17Panel title="Tra cứu đơn hàng">
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField fullWidth label="Mã đơn hàng" defaultValue="SOFA17-ORD001" sx={sofa17FieldSx} />
              <Button size="large" variant="contained" sx={{ ...sofa17GoldButtonSx, flexShrink: 0 }}>Tra cứu</Button>
            </Stack>
          </Sofa17Panel>

          <Sofa17Panel title="Tiến độ đơn hàng SOFA17-ORD001">
            <Stack spacing={2.5}>
              {SOFA17_ORDER_STEPS.map((step) => (
                <Stack key={step.label} direction="row" spacing={2} alignItems="center">
                  <Box sx={{ width: 40, height: 40, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: step.done ? SOFA17_COLORS.black : SOFA17_COLORS.gold, bgcolor: step.done ? SOFA17_COLORS.gold : 'transparent', border: `1px solid ${varAlpha(SOFA17_COLORS.gold, 0.5)}` }}>
                    <Iconify icon={step.done ? 'solar:check-circle-bold' : 'solar:clock-circle-bold-duotone'} width={20} />
                  </Box>
                  <Stack>
                    <Typography sx={{ color: 'common.white', fontWeight: 'fontWeightLight' }}>{step.label}</Typography>
                    <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4) }}>{step.desc}</Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Sofa17Panel>
        </Stack>
      </Sofa17Section>
    </>
  );
}
