import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa4PageHero } from 'src/sections/sofa4-pages/sofa4-page-hero';
import { SOFA4_PAGE_IMAGES, SOFA4_PAGE_PRODUCTS, formatSofa4PagePrice } from 'src/sections/sofa4-pages/sofa4-pages-data';

const metadata = { title: 'Giỏ hàng - Sofa Pop' };

const CART_ITEMS = SOFA4_PAGE_PRODUCTS.slice(0, 2);

export default function Page() {
  const total = CART_ITEMS.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa4PageHero overline="Giỏ hàng" title="Giỏ hàng của bạn" subtitle={`${CART_ITEMS.length} sản phẩm trong giỏ`} image={SOFA4_PAGE_IMAGES.cta} />

      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Stack spacing={3}>
            {CART_ITEMS.map((item, index) => (
              <Stack key={item.id} component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: index * 0.06 }} direction="row" spacing={3} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', border: (t) => `1px solid ${varAlpha(t.vars.palette.grey['500Channel'], 0.12)}` }}>
                <Box component="img" src={item.image} alt={item.name} sx={{ width: 100, height: 100, borderRadius: 2, objectFit: 'cover' }} />
                <Stack spacing={1} sx={{ flex: 1 }}>
                  <Typography variant="subtitle1">{item.name}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.material}</Typography>
                  <Typography variant="subtitle2" sx={{ color: 'warning.main' }}>{formatSofa4PagePrice(item.price)}</Typography>
                </Stack>
                <Button variant="text" color="error" startIcon={<Iconify icon="solar:trash-bin-trash-bold-duotone" />}>Xóa</Button>
              </Stack>
            ))}

            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', border: (t) => `1px solid ${varAlpha(t.vars.palette.grey['500Channel'], 0.12)}` }}>
              <Typography variant="h5">Tổng cộng: <Typography component="span" variant="h4" sx={{ color: 'warning.main', fontWeight: 'fontWeightBold' }}>{formatSofa4PagePrice(total)}</Typography></Typography>
              <Button variant="contained" color="warning" size="large" component={RouterLink} href="/sofa4/checkout" startIcon={<Iconify icon="solar:cart-bold-duotone" />}>Thanh toán</Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
