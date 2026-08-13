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

import { SOFA11_COLORS } from 'src/sections/sofa11/sofa11-data';
import { Sofa11Section, Sofa11PageHero } from 'src/sections/sofa11-pages/sofa11-page-hero';
import { formatSofa11Price, SOFA11_PAGE_IMAGES, SOFA11_PAGE_PRODUCTS } from 'src/sections/sofa11-pages/sofa11-pages-data';

export default function Page() {
  const theme = useTheme();
  const cartItems = SOFA11_PAGE_PRODUCTS.slice(0, 3);
  const total = cartItems.reduce((sum, p) => sum + p.price, 0);

  return (
    <>
      <Helmet>
        <title>Giỏ hàng — Sofa11</title>
      </Helmet>

      <Sofa11PageHero overline="GIỎ HÀNG" title={<>GIỎ <span>HÀNG</span></>} subtitle={`${cartItems.length} sản phẩm trong giỏ hàng`} image={SOFA11_PAGE_IMAGES.product7} />

      <Sofa11Section>
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
                    <Typography variant="subtitle1" sx={{ color: SOFA11_COLORS.magenta, fontWeight: 'fontWeightBold' }}>{formatSofa11Price(item.price)}</Typography>
                  </Stack>
                  <IconButton><Iconify icon="solar:trash-bin-trash-bold-duotone" width={20} sx={{ color: 'text.disabled' }} /></IconButton>
                </Stack>
              ))}
            </Stack>
          </Grid>
          <Grid xs={12} md={4}>
            <Stack spacing={3} sx={{ p: 3, borderRadius: 3, bgcolor: 'background.paper', border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` }}>
              <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold' }}>Tổng cộng</Typography>
              <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Tạm tính</Typography><Typography sx={{ fontWeight: 'fontWeightBold' }}>{formatSofa11Price(total)}</Typography></Stack>
              <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Phí giao hàng</Typography><Typography sx={{ fontWeight: 'fontWeightBold' }}>Miễn phí</Typography></Stack>
              <Divider />
              <Stack direction="row" justifyContent="space-between"><Typography variant="h6" sx={{ fontWeight: 'fontWeightBold' }}>Tổng</Typography><Typography variant="h6" sx={{ fontWeight: 'fontWeightBold', color: SOFA11_COLORS.magenta }}>{formatSofa11Price(total)}</Typography></Stack>
              <Button component={RouterLink} href="/sofa11/checkout" size="large" variant="contained" fullWidth startIcon={<Iconify icon="solar:cart-large-bold-duotone" />} sx={{ borderRadius: 30, bgcolor: SOFA11_COLORS.magenta, color: 'common.white', fontWeight: 'fontWeightBold', boxShadow: `0 4px 0 ${SOFA11_COLORS.void}`, '&:hover': { bgcolor: SOFA11_COLORS.magentaSoft, boxShadow: `0 6px 0 ${SOFA11_COLORS.void}` } }}>Thanh toán</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa11Section>
    </>
  );
}
