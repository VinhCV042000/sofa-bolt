import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA14_COLORS } from 'src/sections/sofa14/sofa14-data';
import { Sofa14Section, Sofa14PageHero } from 'src/sections/sofa14-pages/sofa14-page-hero';
import { sofa14FormatPrice, SOFA14_PAGE_IMAGES, SOFA14_PAGE_PRODUCTS } from 'src/sections/sofa14-pages/sofa14-pages-data';

export default function Page() {
  const theme = useTheme();
  const cartItems = SOFA14_PAGE_PRODUCTS.slice(0, 3);
  const total = cartItems.reduce((sum, p) => sum + p.price, 0);

  return (
    <>
      <Helmet>
        <title>Giỏ hàng — Sofa14</title>
      </Helmet>

      <Sofa14PageHero overline="GIỎ HÀNG" title={<>GIỎ <span>HÀNG</span></>} subtitle={`${cartItems.length} sản phẩm trong giỏ hàng`} image={SOFA14_PAGE_IMAGES.product7} />

      <Sofa14Section>
        <Grid container spacing={4}>
          <Grid xs={12} md={8}>
            <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              {cartItems.map((item) => (
                <Stack key={item.id} direction="row" spacing={3} sx={{ p: 2, borderRadius: 3, bgcolor: 'background.paper', border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` }}>
                  <Box sx={{ width: 80, height: 80, borderRadius: 2, overflow: 'hidden', flexShrink: 0 }}>
                    <Box component="img" src={item.image} alt={item.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
                  </Box>
                  <Stack spacing={1} sx={{ flex: 1 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightBold' }}>{item.name}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.material}</Typography>
                    <Typography variant="subtitle1" sx={{ color: SOFA14_COLORS.coral, fontWeight: 'fontWeightBold' }}>{sofa14FormatPrice(item.price)}</Typography>
                  </Stack>
                  <IconButton><Iconify icon="solar:trash-bin-trash-bold-duotone" width={20} sx={{ color: 'text.disabled' }} /></IconButton>
                </Stack>
              ))}
            </Stack>
          </Grid>
          <Grid xs={12} md={4}>
            <Stack spacing={3} sx={{ p: 3, borderRadius: 3, bgcolor: 'background.paper', border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` }}>
              <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold' }}>Tổng cộng</Typography>
              <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Tạm tính</Typography><Typography sx={{ fontWeight: 'fontWeightBold' }}>{sofa14FormatPrice(total)}</Typography></Stack>
              <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Phí giao hàng</Typography><Typography sx={{ fontWeight: 'fontWeightBold' }}>Miễn phí</Typography></Stack>
              <Divider />
              <Stack direction="row" justifyContent="space-between"><Typography variant="h6" sx={{ fontWeight: 'fontWeightBold' }}>Tổng</Typography><Typography variant="h6" sx={{ fontWeight: 'fontWeightBold', color: SOFA14_COLORS.coral }}>{sofa14FormatPrice(total)}</Typography></Stack>
              <Button component={RouterLink} href="/sofa14/checkout" size="large" variant="contained" fullWidth startIcon={<Iconify icon="solar:cart-large-bold-duotone" />} sx={{ borderRadius: 30, bgcolor: SOFA14_COLORS.coral, color: 'common.white', fontWeight: 'fontWeightBold', boxShadow: `0 4px 0 ${SOFA14_COLORS.ink}`, '&:hover': { bgcolor: SOFA14_COLORS.butter, boxShadow: `0 6px 0 ${SOFA14_COLORS.ink}` } }}>Thanh toán</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa14Section>
    </>
  );
}
