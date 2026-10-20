import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { useTranslate } from 'src/locales';
import { Sofa2Section, Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';
import { formatSofa2Price, SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';
import { useSofa2AdminRows } from 'src/sections/sofa2-admin/sofa2-admin-store';
import {
  makeSofa2CartRow,
  parseSofa2CartItems,
  type Sofa2CartLine,
} from 'src/sections/sofa2/sofa2-commerce-store';
import {
  SOFA2_PORTAL_CUSTOMER_ID,
  SOFA2_PORTAL_CUSTOMER_NAME,
} from 'src/sections/sofa2/sofa2-customer-portal';

// ----------------------------------------------------------------------

export default function Page() {
  const { t } = useTranslate('sofa2');
  const cartStore = useSofa2AdminRows('shopping', 'cart');
  const { rows: profiles } = useSofa2AdminRows('customer', 'profiles');
  const profile = profiles.find((row) => String(row.customerId) === SOFA2_PORTAL_CUSTOMER_ID);
  const customer = {
    customerId: SOFA2_PORTAL_CUSTOMER_ID,
    name: String(profile?.name || SOFA2_PORTAL_CUSTOMER_NAME),
    phone: String(profile?.phone ?? ''),
    email: String(profile?.email ?? ''),
  };
  const cartIndex = cartStore.rows.findIndex(
    (row) => String(row.customerId) === SOFA2_PORTAL_CUSTOMER_ID
  );
  const cartRow = cartIndex >= 0 ? cartStore.rows[cartIndex] : undefined;
  const items = parseSofa2CartItems(cartRow?.items);

  const saveItems = (nextItems: Sofa2CartLine[]) => {
    const latestIndex = cartStore.rows.findIndex(
      (row) => String(row.customerId) === SOFA2_PORTAL_CUSTOMER_ID
    );
    const latestRow = latestIndex >= 0 ? cartStore.rows[latestIndex] : undefined;
    const updated = makeSofa2CartRow(nextItems, customer, latestRow);
    if (latestIndex < 0) cartStore.createRow(updated);
    else cartStore.updateRow(latestIndex, updated);
  };

  const updateQty = (id: string, qty: number) => {
    saveItems(items.map((item) => (item.id === id ? { ...item, qty: Math.max(1, qty) } : item)));
  };
  const removeItem = (id: string) => saveItems(items.filter((item) => item.id !== id));

  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);
  const shipping = subtotal > 0 ? 300000 : 0;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <>
        <Helmet><title>{t('cart.metaTitle')}</title></Helmet>
        <Sofa2PageHero title={t('cart.title')} subtitle={t('cart.subtitle')} image={SOFA2_PAGE_IMAGES.cta} overline={t('cart.overline')} />
        <Sofa2Section>
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: { xs: 6, md: 10 } }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Iconify icon="solar:cart-large-2-bold-duotone" width={96} sx={{ color: 'text.disabled' }} />
            <Typography variant="h4">{t('cart.emptyTitle')}</Typography>
            <Typography sx={{ color: 'text.secondary' }}>{t('cart.emptyText')}</Typography>
            <Button component={RouterLink} href="/sofa2/products" size="large" variant="contained" startIcon={<Iconify icon="solar:bag-bold-duotone" />}>
              {t('cart.continueShopping')}
            </Button>
          </Stack>
        </Sofa2Section>
      </>
    );
  }

  return (
    <>
      <Helmet><title>{t('cart.metaTitle')}</title></Helmet>
      <Sofa2PageHero title={t('cart.title')} subtitle={t('cart.subtitle')} image={SOFA2_PAGE_IMAGES.cta} overline={t('cart.overline')} />

      <Sofa2Section>
        <Grid container spacing={{ xs: 4, md: 5 }}>
          {/* Cart items */}
          <Grid xs={12} md={8}>
            <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              {items.map((it) => (
                <Stack
                  key={it.id}
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={3}
                  alignItems={{ sm: 'center' }}
                  sx={{ p: { xs: 2, sm: 3 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t2) => t2.customShadows.card }}
                >
                  <Box component="img" src={it.image} sx={{ width: 96, height: 96, borderRadius: 1.5, objectFit: 'cover' }} />
                  <Stack sx={{ flex: 1 }}>
                    <Typography variant="subtitle1">{it.name}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{it.material}</Typography>
                    <Typography variant="subtitle2" sx={{ color: 'primary.main', mt: 1 }}>{formatSofa2Price(it.price)}</Typography>
                  </Stack>
                  <TextField
                    type="number"
                    size="small"
                    value={it.qty}
                    onChange={(e) => updateQty(it.id, Number(e.target.value))}
                    sx={{ width: 88 }}
                    inputProps={{ min: 1 }}
                  />
                  <Typography variant="subtitle2" sx={{ minWidth: 120, textAlign: 'right' }}>{formatSofa2Price(it.price * it.qty)}</Typography>
                  <Button onClick={() => removeItem(it.id)} color="error" sx={{ minWidth: 'auto', px: 1 }}>
                    <Iconify icon="solar:trash-bin-trash-bold-duotone" width={22} />
                  </Button>
                </Stack>
              ))}
            </Stack>
          </Grid>

          {/* Order summary */}
          <Grid xs={12} md={4}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inLeft} sx={{ p: { xs: 3, md: 4 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t2) => t2.customShadows.card, position: 'sticky', top: 100 }}>
              <Typography variant="h6">{t('cart.orderSummary')}</Typography>
              <Stack spacing={1.5}>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>{t('cart.subtotal')}</Typography><Typography>{formatSofa2Price(subtotal)}</Typography></Stack>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>{t('cart.shipping')}</Typography><Typography>{formatSofa2Price(shipping)}</Typography></Stack>
              </Stack>
              <Divider />
              <Stack direction="row" justifyContent="space-between"><Typography variant="h6">{t('cart.total')}</Typography><Typography variant="h6" sx={{ color: 'primary.main' }}>{formatSofa2Price(total)}</Typography></Stack>
              <Button component={RouterLink} href="/sofa2/checkout" size="large" variant="contained" fullWidth startIcon={<Iconify icon="solar:card-bold-duotone" />}>
                {t('cart.checkout')}
              </Button>
              <Button component={RouterLink} href="/sofa2/products" variant="outlined" fullWidth>
                {t('cart.continueShopping')}
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa2Section>
    </>
  );
}
