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

import { SOFA10_COLORS } from 'src/sections/sofa10/sofa10-data';
import { Sofa10Section, Sofa10PageHero } from 'src/sections/sofa10-pages/sofa10-page-hero';
import { formatSofa10Price, SOFA10_PAGE_IMAGES, SOFA10_PAGE_PRODUCTS } from 'src/sections/sofa10-pages/sofa10-pages-data';

export default function Page() {
  const theme = useTheme();
  const cartItems = SOFA10_PAGE_PRODUCTS.slice(0, 3);
  const total = cartItems.reduce((sum, p) => sum + p.price, 0);

  return (
    <>
      <Helmet>
        <title>Giỏ hàng — Sofa10</title>
      </Helmet>

      <Sofa10PageHero overline="GIỎ HÀNG" title={<>GIỎ <span>HÀNG</span></>} subtitle={`${cartItems.length} sản phẩm trong giỏ hàng`} image={SOFA10_PAGE_IMAGES.product1} />

      <Sofa10Section>
        <Grid container spacing={4}>
          <Grid xs={12} md={8}>
            <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              {cartItems.map((item) => (
                <Stack key={item.id} direction="row" spacing={3} sx={{ p: 2, borderRadius: 3, bgcolor: 'background.paper', border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` }}>
                  <Box sx={{ width: 80, height: 80, borderRadius: 2, overflow: 'hidden', flexShrink: 0 }}>
                    <Box component="img" src={item.image} alt={item.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
                  </Box>
                  <Stack spacing={1} sx={{ flex: 1 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightNormal' }}>{item.name}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.material}</Typography>
                    <Typography variant="subtitle1" sx={{ color: SOFA10_COLORS.wood, fontWeight: 'fontWeightNormal' }}>{formatSofa10Price(item.price)}</Typography>
                  </Stack>
                  <IconButton><Iconify icon="solar:trash-bin-trash-bold-duotone" width={20} sx={{ color: 'text.disabled' }} /></IconButton>
                </Stack>
              ))}
            </Stack>
          </Grid>
          <Grid xs={12} md={4}>
            <Stack spacing={3} sx={{ p: 3, borderRadius: 3, bgcolor: 'background.paper', border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` }}>
              <Typography variant="h6" sx={{ fontWeight: 'fontWeightNormal' }}>Tổng cộng</Typography>
              <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Tạm tính</Typography><Typography sx={{ fontWeight: 'fontWeightNormal' }}>{formatSofa10Price(total)}</Typography></Stack>
              <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Phí giao hàng</Typography><Typography sx={{ fontWeight: 'fontWeightNormal' }}>Miễn phí</Typography></Stack>
              <Divider />
              <Stack direction="row" justifyContent="space-between"><Typography variant="h6" sx={{ fontWeight: 'fontWeightNormal' }}>Tổng</Typography><Typography variant="h6" sx={{ fontWeight: 'fontWeightNormal', color: SOFA10_COLORS.wood }}>{formatSofa10Price(total)}</Typography></Stack>
              <Button component={RouterLink} href="/sofa10/checkout" size="large" variant="contained" fullWidth startIcon={<Iconify icon="solar:cart-large-bold-duotone" />} sx={{ borderRadius: 30, bgcolor: SOFA10_COLORS.wood, color: 'common.white', fontWeight: 'fontWeightNormal', boxShadow: `0 4px 0 ${SOFA10_COLORS.charcoal}`, '&:hover': { bgcolor: SOFA10_COLORS.woodLight, boxShadow: `0 6px 0 ${SOFA10_COLORS.charcoal}` } }}>Thanh toán</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa10Section>
    </>
  );
}
