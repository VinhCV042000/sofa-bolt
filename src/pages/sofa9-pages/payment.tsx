import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { SOFA9_COLORS } from 'src/sections/sofa9/sofa9-data';
import { SOFA9_PAGE_IMAGES } from 'src/sections/sofa9-pages/sofa9-pages-data';
import { Sofa9Section, Sofa9PageHero } from 'src/sections/sofa9-pages/sofa9-page-hero';

const METHODS = [
  { title: 'Chuyển khoản', desc: 'Vietcombank, Techcombank, BIDV', icon: 'solar:card-bold-duotone' },
  { title: 'COD', desc: 'Thanh toán khi nhận hàng', icon: 'solar:delivery-bold-duotone' },
  { title: 'VNPay', desc: 'Thanh toán online', icon: 'solar:wallet-bold-duotone' },
  { title: 'Momo', desc: 'Ví điện tử MoMo', icon: 'solar:smartphone-bold-duotone' },
  { title: 'Trả góp', desc: '0% APR trong 6 tháng', icon: 'solar:money-bag-bold-duotone' },
  { title: 'Tiền mặt', desc: 'Tại showroom', icon: 'solar:dollar-bold-duotone' },
];

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Thanh toán — Sofa9</title>
      </Helmet>

      <Sofa9PageHero overline="THANH TOÁN" title={<>PHƯƠNG THỨC <span>THANH TOÁN</span></>} subtitle="Đa dạng phương thức thanh toán an toàn, tiện lợi." image={SOFA9_PAGE_IMAGES.cta} />

      <Sofa9Section>
        <Grid container spacing={3}>
          {METHODS.map((m) => (
            <Grid key={m.title} xs={12} sm={6} md={4}>
              <Stack spacing={2} sx={{ p: 4, height: 1, borderRadius: 3, bgcolor: 'background.paper', border: `2px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` }}>
                <Box sx={{ width: 48, height: 48, display: 'flex', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', bgcolor: SOFA9_COLORS.cream, color: SOFA9_COLORS.pink }}>
                  <Iconify icon={m.icon} width={24} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold' }}>{m.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{m.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa9Section>
    </>
  );
}
