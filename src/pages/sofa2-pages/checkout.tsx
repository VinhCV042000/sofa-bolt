import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { useTranslate } from 'src/locales';
import { Sofa2Section, Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';
import { useSofa2AdminRows } from 'src/sections/sofa2-admin/sofa2-admin-store';
import {
  makeSofa2CartRow,
  makeSofa2OrderCode,
  parseSofa2CartItems,
} from 'src/sections/sofa2/sofa2-commerce-store';
import {
  SOFA2_PORTAL_CUSTOMER_ID,
  SOFA2_PORTAL_CUSTOMER_NAME,
} from 'src/sections/sofa2/sofa2-customer-portal';
import { formatSofa2Price, SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';

type CheckoutDetails = {
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  district: string;
  note: string;
};

const paymentIcon = (type: string) => {
  if (/tiền mặt|cod/i.test(type)) return 'solar:hand-money-bold-duotone';
  if (/ví/i.test(type)) return 'solar:wallet-bold-duotone';
  if (/chuyển khoản/i.test(type)) return 'solar:bank-bold-duotone';
  return 'solar:card-bold-duotone';
};

export default function Page() {
  const { t } = useTranslate('sofa2');
  const navigate = useNavigate();
  const cartStore = useSofa2AdminRows('shopping', 'cart');
  const orderStore = useSofa2AdminRows('customer', 'customer-orders');
  const trackingStore = useSofa2AdminRows('shop', 'tracking');
  const transactionStore = useSofa2AdminRows('shopping', 'transactions');
  const checkoutSettings = useSofa2AdminRows('shopping', 'checkout');
  const addressStore = useSofa2AdminRows('shopping', 'addresses');
  const { rows: profiles } = useSofa2AdminRows('customer', 'profiles');

  const profile = profiles.find((row) => String(row.customerId) === SOFA2_PORTAL_CUSTOMER_ID);
  const customerName = String(profile?.name || SOFA2_PORTAL_CUSTOMER_NAME);
  const ownedAddresses = addressStore.rows
    .map((row, index) => ({ row, index }))
    .filter(
      ({ row }) =>
        String(row.customerId ?? '') === SOFA2_PORTAL_CUSTOMER_ID ||
        String(row.customer ?? '') === customerName
    );
  const defaultAddress =
    ownedAddresses.find(
      ({ row }) =>
        String(row.isDefault ?? '').toLowerCase() === 'true' ||
        String(row.isDefault ?? '') === 'Có' ||
        row.status === 'Mặc định'
    ) ??
    ownedAddresses[0];
  const addressKey = (row: (typeof ownedAddresses)[number]['row'], index: number) =>
    String(row.addressId ?? row.address ?? index);
  const [savedAddressKey, setSavedAddressKey] = useState(() =>
    defaultAddress ? addressKey(defaultAddress.row, defaultAddress.index) : 'custom'
  );
  const [details, setDetails] = useState<CheckoutDetails>(() => ({
    name: customerName,
    phone: String(defaultAddress?.row.phone ?? profile?.phone ?? ''),
    email: String(profile?.email ?? ''),
    address: String(defaultAddress?.row.address ?? profile?.address ?? ''),
    city: String(defaultAddress?.row.city ?? profile?.city ?? ''),
    district: String(defaultAddress?.row.district ?? ''),
    note: '',
  }));

  const cartIndex = cartStore.rows.findIndex(
    (row) => String(row.customerId) === SOFA2_PORTAL_CUSTOMER_ID
  );
  const cartRow = cartIndex >= 0 ? cartStore.rows[cartIndex] : undefined;
  const items = parseSofa2CartItems(cartRow?.items);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shippingRule = checkoutSettings.rows.find(
    (row) => row.status === 'Đang bật' && row.type === 'Phí giao hàng'
  );
  const shipping = subtotal > 0 ? Number(shippingRule?.fee ?? 300000) : 0;
  const paymentOptions = checkoutSettings.rows
    .filter((row) => row.status === 'Đang bật' && row.type !== 'Phí giao hàng')
    .sort((a, b) => Number(a.order ?? 0) - Number(b.order ?? 0))
    .map((row) => ({
      value: String(row.method ?? row.label ?? ''),
      label: String(row.label ?? row.method ?? ''),
      type: String(row.type ?? ''),
      fee: Math.max(0, Number(row.fee ?? 0)),
      minOrder: Math.max(0, Number(row.minOrder ?? 0)),
      maxOrder: Math.max(0, Number(row.maxOrder ?? 0)),
    }))
    .filter((row) => row.value && row.label);
  const [payment, setPayment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const selectedPayment =
    paymentOptions.find((option) => option.value === payment) ?? paymentOptions[0];
  const paymentFee = selectedPayment ? Math.round((subtotal * selectedPayment.fee) / 100) : 0;
  const total = subtotal + shipping + paymentFee;
  const [error, setError] = useState('');

  const setField = (field: keyof CheckoutDetails, value: string) => {
    setDetails((current) => ({ ...current, [field]: value }));
  };

  const placeOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (submitting) return;
    if (!items.length) {
      setError('Giỏ hàng đang trống. Hãy thêm sản phẩm trước khi thanh toán.');
      return;
    }
    if (!selectedPayment) {
      setError('Chưa có phương thức thanh toán đang bật. Vui lòng liên hệ cửa hàng.');
      return;
    }
    if (selectedPayment.minOrder > 0 && subtotal < selectedPayment.minOrder) {
      setError(`Phương thức này yêu cầu đơn tối thiểu ${formatSofa2Price(selectedPayment.minOrder)}.`);
      return;
    }
    if (selectedPayment.maxOrder > 0 && subtotal > selectedPayment.maxOrder) {
      setError(`Phương thức này chỉ áp dụng cho đơn tối đa ${formatSofa2Price(selectedPayment.maxOrder)}.`);
      return;
    }

    setSubmitting(true);
    const orderCode = makeSofa2OrderCode();
    const productSummary = items.map((item) => `${item.name} x${item.qty}`).join('; ');
    const orderDate = new Date().toISOString().slice(0, 10);
    const transactionId = `GD-${Date.now().toString(36).toUpperCase()}`;

    orderStore.createRow({
      code: orderCode,
      customerId: SOFA2_PORTAL_CUSTOMER_ID,
      customer: details.name.trim(),
      phone: details.phone.trim(),
      email: details.email.trim(),
      product: productSummary,
      items: JSON.stringify(items),
      address: [details.address, details.district, details.city].filter(Boolean).join(', '),
      total,
      payment: selectedPayment.value,
      orderDate,
      points: Math.floor(subtotal / 100000),
      voucher: '',
      status: 'Chờ xác nhận',
      note: details.note.trim(),
    });

    trackingStore.createRow({
      code: orderCode,
      customer: details.name.trim(),
      phone: details.phone.trim(),
      address: [details.address, details.district, details.city].filter(Boolean).join(', '),
      items: productSummary,
      total,
      step: 'Đặt hàng',
      carrier: 'Chưa phân công',
      trackingNo: '',
      eta: 'Đang cập nhật',
      status: 'Chờ xác nhận',
      updated: orderDate,
    });

    transactionStore.createRow({
      txnId: transactionId,
      order: orderCode,
      customerId: SOFA2_PORTAL_CUSTOMER_ID,
      customer: details.name.trim(),
      method: selectedPayment.value,
      amount: total,
      fee: paymentFee,
      date: orderDate,
      ref: '',
      gateway: selectedPayment.type,
      status: 'Đang xử lý',
    });

    if (cartIndex >= 0) {
      cartStore.updateRow(
        cartIndex,
        makeSofa2CartRow(
          [],
          {
            customerId: SOFA2_PORTAL_CUSTOMER_ID,
            name: customerName,
            phone: details.phone,
            email: details.email,
          },
          cartRow,
          'Đã đặt hàng'
        )
      );
    }

    navigate(`/sofa2/checkout/success?order=${encodeURIComponent(orderCode)}`);
  };

  return (
    <>
      <Helmet><title>{t('checkout.metaTitle')}</title></Helmet>
      <Sofa2PageHero title={t('checkout.title')} subtitle={t('checkout.subtitle')} image={SOFA2_PAGE_IMAGES.cta} overline={t('checkout.overline')} />

      <Sofa2Section>
        <Grid container spacing={{ xs: 4, md: 5 }}>
          <Grid xs={12} md={8}>
            <Stack id="checkout-form" component="form" onSubmit={placeOrder} spacing={4}>
              {error && <Alert severity="error">{error}</Alert>}
              <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={3} sx={{ p: { xs: 3, md: 4 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (theme) => theme.customShadows.card }}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Iconify icon="solar:map-point-bold-duotone" width={24} sx={{ color: 'primary.main' }} />
                  <Typography variant="h6">{t('checkout.shippingAddress')}</Typography>
                </Stack>
                <Grid container spacing={2}>
                  <Grid xs={12}>
                    <TextField
                      select
                      fullWidth
                      label="Địa chỉ đã lưu"
                      value={savedAddressKey}
                      onChange={(event) => {
                        const selectedKey = event.target.value;
                        setSavedAddressKey(selectedKey);
                        const selectedAddress = ownedAddresses.find(
                          ({ row, index }) => addressKey(row, index) === selectedKey
                        )?.row;
                        if (selectedAddress) {
                          setDetails((current) => ({
                            ...current,
                            name: String(selectedAddress.recipient ?? current.name),
                            phone: String(selectedAddress.phone ?? current.phone),
                            address: String(selectedAddress.address ?? ''),
                            city: String(selectedAddress.city ?? ''),
                            district: String(selectedAddress.district ?? ''),
                          }));
                        }
                      }}
                    >
                      <MenuItem value="custom">Nhập địa chỉ khác</MenuItem>
                      {ownedAddresses.map(({ row, index }) => (
                        <MenuItem key={addressKey(row, index)} value={addressKey(row, index)}>
                          {String(row.label || row.recipient || 'Địa chỉ')} — {String(row.address || '')}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid xs={12} sm={6}><TextField required fullWidth label={t('checkout.fullName')} value={details.name} onChange={(event) => setField('name', event.target.value)} /></Grid>
                  <Grid xs={12} sm={6}><TextField required fullWidth label={t('checkout.phone')} value={details.phone} onChange={(event) => setField('phone', event.target.value)} /></Grid>
                  <Grid xs={12}><TextField required fullWidth label={t('checkout.email')} type="email" value={details.email} onChange={(event) => setField('email', event.target.value)} /></Grid>
                  <Grid xs={12}><TextField required fullWidth label={t('checkout.address')} value={details.address} onChange={(event) => setField('address', event.target.value)} /></Grid>
                  <Grid xs={12} sm={6}><TextField required fullWidth label={t('checkout.city')} value={details.city} onChange={(event) => setField('city', event.target.value)} /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label={t('checkout.district')} value={details.district} onChange={(event) => setField('district', event.target.value)} /></Grid>
                  <Grid xs={12}><TextField fullWidth label={t('checkout.note')} multiline rows={2} value={details.note} onChange={(event) => setField('note', event.target.value)} /></Grid>
                </Grid>
              </Stack>

              <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={3} sx={{ p: { xs: 3, md: 4 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (theme) => theme.customShadows.card }}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Iconify icon="solar:card-bold-duotone" width={24} sx={{ color: 'primary.main' }} />
                  <Typography variant="h6">{t('checkout.paymentMethod')}</Typography>
                </Stack>
                {!paymentOptions.length ? (
                  <Alert severity="warning">Chưa có phương thức thanh toán đang bật trong phần quản trị.</Alert>
                ) : (
                  <RadioGroup value={selectedPayment?.value ?? ''} onChange={(event) => setPayment(event.target.value)}>
                    <Stack spacing={1.5}>
                      {paymentOptions.map((option) => (
                        <Box key={option.value} sx={{ p: 2, borderRadius: 1.5, border: (theme) => `1px solid ${selectedPayment?.value === option.value ? theme.vars.palette.primary.main : varAlpha(theme.vars.palette.grey['500Channel'], 0.2)}`, bgcolor: selectedPayment?.value === option.value ? (theme) => varAlpha(theme.vars.palette.primary.mainChannel, 0.04) : 'transparent' }}>
                          <FormControlLabel value={option.value} control={<Radio />} label={
                            <Stack direction="row" spacing={1.5} alignItems="center">
                              <Iconify icon={paymentIcon(option.type)} width={22} sx={{ color: 'primary.main' }} />
                              <Typography variant="body2">{option.label}</Typography>
                            </Stack>
                          } />
                        </Box>
                      ))}
                    </Stack>
                  </RadioGroup>
                )}
              </Stack>
            </Stack>
          </Grid>

          <Grid xs={12} md={4}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inLeft} sx={{ p: { xs: 3, md: 4 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (theme) => theme.customShadows.card, position: 'sticky', top: 100 }}>
              <Typography variant="h6">{t('checkout.yourOrder')}</Typography>
              <Stack spacing={2} divider={<Divider flexItem />}>
                {items.map((item) => (
                  <Stack key={item.id} direction="row" spacing={2} alignItems="center">
                    <Box component="img" src={item.image} sx={{ width: 56, height: 56, borderRadius: 1, objectFit: 'cover' }} />
                    <Stack sx={{ flex: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 'fontWeightMedium' }}>{item.name}</Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>{t('checkout.qty')}: {item.qty}</Typography>
                    </Stack>
                    <Typography variant="subtitle2">{formatSofa2Price(item.price * item.qty)}</Typography>
                  </Stack>
                ))}
                {!items.length && <Typography variant="body2" color="text.secondary">Giỏ hàng đang trống.</Typography>}
              </Stack>
              <Stack spacing={1.5}>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>{t('checkout.subtotal')}</Typography><Typography>{formatSofa2Price(subtotal)}</Typography></Stack>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>{t('checkout.shipping')}</Typography><Typography>{formatSofa2Price(shipping)}</Typography></Stack>
                {paymentFee > 0 && <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Phí thanh toán</Typography><Typography>{formatSofa2Price(paymentFee)}</Typography></Stack>}
              </Stack>
              <Divider />
              <Stack direction="row" justifyContent="space-between"><Typography variant="h6">{t('checkout.total')}</Typography><Typography variant="h6" sx={{ color: 'primary.main' }}>{formatSofa2Price(total)}</Typography></Stack>
              <Button type="submit" form="checkout-form" size="large" variant="contained" fullWidth startIcon={<Iconify icon="solar:check-circle-bold-duotone" />} disabled={!items.length || !paymentOptions.length || submitting}>
                {t('checkout.placeOrder')}
              </Button>
              <Button component={RouterLink} href="/sofa2/cart" variant="outlined" fullWidth>Quay lại giỏ hàng</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa2Section>
    </>
  );
}
