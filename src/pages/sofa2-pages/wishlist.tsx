import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import IconButton from '@mui/material/IconButton';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { useTranslate } from 'src/locales';
import { SOFA2_PRODUCTS, formatSofa2Price, SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';
import { Sofa2Section, Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';
import { useSofa2AdminRows } from 'src/sections/sofa2-admin/sofa2-admin-store';
import {
  addSofa2CartLine,
  makeSofa2CartRow,
  parseSofa2CartItems,
} from 'src/sections/sofa2/sofa2-commerce-store';
import {
  SOFA2_PORTAL_CUSTOMER_ID,
  SOFA2_PORTAL_CUSTOMER_NAME,
} from 'src/sections/sofa2/sofa2-customer-portal';

// ----------------------------------------------------------------------

export default function Page() {
  const { t } = useTranslate('sofa2');
  const wishlistStore = useSofa2AdminRows('shop', 'wishlist');
  const cartStore = useSofa2AdminRows('shopping', 'cart');
  const profileStore = useSofa2AdminRows('customer', 'profiles');
  const profile = profileStore.rows.find(
    (row) => String(row.customerId) === SOFA2_PORTAL_CUSTOMER_ID
  );
  const customerName = String(profile?.name || SOFA2_PORTAL_CUSTOMER_NAME);
  const favorites = wishlistStore.rows
    .map((row, index) => ({
      row,
      index,
      product: SOFA2_PRODUCTS.find(
        (product) =>
          product.id === String(row.productId ?? row.product) ||
          product.name === String(row.product ?? '')
      ),
    }))
    .filter(
      ({ row, product }) =>
        Boolean(product) &&
        (String(row.customerId ?? '') === SOFA2_PORTAL_CUSTOMER_ID ||
          String(row.customer ?? '') === customerName) &&
        row.status !== 'Đã bỏ'
    );

  const addToCart = (product: (typeof SOFA2_PRODUCTS)[number]) => {
    const cartIndex = cartStore.rows.findIndex(
      (row) => String(row.customerId) === SOFA2_PORTAL_CUSTOMER_ID
    );
    const existing = cartIndex >= 0 ? cartStore.rows[cartIndex] : undefined;
    const currentItems = parseSofa2CartItems(existing?.items);
    const nextItems = addSofa2CartLine(currentItems, {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      material: product.material,
      qty: 1,
    });
    const nextRow = makeSofa2CartRow(
      nextItems,
      {
        customerId: SOFA2_PORTAL_CUSTOMER_ID,
        name: customerName,
        phone: String(profile?.phone ?? ''),
        email: String(profile?.email ?? ''),
      },
      existing
    );
    if (cartIndex < 0) cartStore.createRow(nextRow);
    else cartStore.updateRow(cartIndex, nextRow);
  };

  return (
    <>
      <Helmet><title>{t('wishlist.metaTitle')}</title></Helmet>

      <Sofa2PageHero
        title={t('wishlist.title')}
        subtitle={t('wishlist.subtitle')}
        image={SOFA2_PAGE_IMAGES.cta}
        overline={t('wishlist.overline')}
      />

      <Sofa2Section>
        <Stack spacing={2} sx={{ mb: 4 }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <Typography variant="h4">{t('wishlist.count', { count: favorites.length })}</Typography>
        </Stack>

        {favorites.length === 0 ? (
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: { xs: 6, md: 10 } }}>
            <Iconify icon="solar:heart-bold-duotone" width={96} sx={{ color: 'text.disabled' }} />
            <Typography variant="h5">{t('wishlist.emptyTitle')}</Typography>
            <Typography sx={{ color: 'text.secondary' }}>{t('wishlist.emptyText')}</Typography>
            <Button component={RouterLink} href="/sofa2/products" size="large" variant="contained" startIcon={<Iconify icon="solar:bag-bold-duotone" />}>
              {t('wishlist.browse')}
            </Button>
          </Stack>
        ) : (
          <Grid container spacing={3}>
            {favorites.map(({ row, index, product }, position) => product && (
              <Grid key={String(row.productId ?? `${product.id}-${index}`)} xs={12} sm={6} md={3}>
                <Stack
                  component={m.div}
                  variants={varFade({ distance: 24 }).inUp}
                  transition={{ delay: position * 0.06 }}
                  spacing={2}
                  sx={{ p: 2, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t2) => t2.customShadows.card }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <Box component="img" src={product.image} sx={{ width: 1, height: 180, borderRadius: 1.5, objectFit: 'cover' }} />
                    <IconButton
                      aria-label="Xoá khỏi yêu thích"
                      onClick={() => {
                        if (window.confirm('Xoá sản phẩm khỏi danh sách yêu thích?')) {
                          wishlistStore.deleteRow(index);
                        }
                      }}
                      sx={{ position: 'absolute', top: 8, right: 8, bgcolor: 'error.main', color: 'common.white', '&:hover': { bgcolor: 'error.dark' } }}
                    >
                      <Iconify icon="solar:heart-bold" width={18} />
                    </IconButton>
                  </Box>
                  <Stack spacing={0.5}>
                    <Typography variant="subtitle2">{product.name}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{product.material}</Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="subtitle1" sx={{ color: 'primary.main' }}>{formatSofa2Price(product.price)}</Typography>
                    <Chip label={t('wishlist.inStock')} size="small" color="success" variant="soft" />
                  </Stack>
                  <Divider sx={{ borderStyle: 'dashed' }} />
                  <Stack direction="row" spacing={1}>
                    <Button size="small" variant="contained" fullWidth startIcon={<Iconify icon="solar:cart-bold-duotone" />} component={RouterLink} href="/sofa2/cart" onClick={() => addToCart(product)}>
                      {t('wishlist.addToCart')}
                    </Button>
                    <Button size="small" variant="outlined" sx={{ minWidth: 'auto', px: 1 }} onClick={() => {
                      if (window.confirm('Xoá sản phẩm khỏi danh sách yêu thích?')) wishlistStore.deleteRow(index);
                    }}>
                      <Iconify icon="solar:trash-bin-trash-bold-duotone" width={18} />
                    </Button>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        )}
      </Sofa2Section>
    </>
  );
}
