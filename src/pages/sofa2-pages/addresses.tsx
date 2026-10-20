import { useState, type FormEvent } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { useSofa2AdminRows, getSofa2AdminRows } from 'src/sections/sofa2-admin/sofa2-admin-store';
import {
  SOFA2_PORTAL_CUSTOMER_ID,
  SOFA2_PORTAL_CUSTOMER_NAME,
} from 'src/sections/sofa2/sofa2-customer-portal';
import { SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';
import { Sofa2Section, Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';

type AddressForm = {
  label: string;
  recipient: string;
  phone: string;
  address: string;
  ward: string;
  district: string;
  city: string;
  zipCode: string;
  deliveryType: string;
  deliveryNote: string;
  isDefault: boolean;
};

const emptyForm = (name = SOFA2_PORTAL_CUSTOMER_NAME): AddressForm => ({
  label: '',
  recipient: name,
  phone: '',
  address: '',
  ward: '',
  district: '',
  city: '',
  zipCode: '',
  deliveryType: 'Giao tận nhà',
  deliveryNote: '',
  isDefault: false,
});

const isDefaultAddress = (row: Record<string, string | number>) => {
  const isDefault = String(row.isDefault ?? '').toLowerCase();
  return isDefault === 'true' || isDefault === '1' || isDefault === 'có' || row.status === 'Mặc định';
};

export default function Page() {
  const addressStore = useSofa2AdminRows('shopping', 'addresses');
  const profileStore = useSofa2AdminRows('customer', 'profiles');
  const profile = profileStore.rows.find(
    (row) => String(row.customerId) === SOFA2_PORTAL_CUSTOMER_ID
  );
  const customerName = String(profile?.name || SOFA2_PORTAL_CUSTOMER_NAME);
  const owned = addressStore.rows
    .map((row, index) => ({ row, index }))
    .filter(
      ({ row }) =>
        String(row.customerId ?? '') === SOFA2_PORTAL_CUSTOMER_ID ||
        String(row.customer ?? '') === customerName
    );

  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [form, setForm] = useState<AddressForm>(() => emptyForm(customerName));
  const [error, setError] = useState('');

  const startNew = () => {
    setEditingIndex(null);
    setForm({ ...emptyForm(customerName), phone: String(profile?.phone ?? '') });
    setError('');
    setShowForm(true);
  };

  const editAddress = (index: number, row: Record<string, string | number>) => {
    setEditingIndex(index);
    setForm({
      label: String(row.label ?? ''),
      recipient: String(row.recipient ?? ''),
      phone: String(row.phone ?? ''),
      address: String(row.address ?? ''),
      ward: String(row.ward ?? ''),
      district: String(row.district ?? ''),
      city: String(row.city ?? ''),
      zipCode: String(row.zipCode ?? ''),
      deliveryType: String(row.deliveryType ?? 'Giao tận nhà'),
      deliveryNote: String(row.deliveryNote ?? ''),
      isDefault: isDefaultAddress(row),
    });
    setError('');
    setShowForm(true);
  };

  const makeDefault = (targetIndex: number) => {
    const currentRows = getSofa2AdminRows('shopping', 'addresses');
    currentRows.forEach((row, index) => {
      const belongsToCustomer =
        String(row.customerId ?? '') === SOFA2_PORTAL_CUSTOMER_ID ||
        String(row.customer ?? '') === customerName;
      if (!belongsToCustomer) return;
      const selected = index === targetIndex;
      addressStore.updateRow(index, {
        ...row,
        isDefault: selected ? 'true' : 'false',
        status: selected ? 'Mặc định' : 'Phụ',
      });
    });
  };

  const saveAddress = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    const row = {
      ...(editingIndex !== null ? addressStore.rows[editingIndex] : {}),
      addressId:
        editingIndex !== null
          ? String(addressStore.rows[editingIndex]?.addressId ?? `ADDR-${Date.now()}`)
          : `ADDR-${Date.now()}`,
      customerId: SOFA2_PORTAL_CUSTOMER_ID,
      customer: customerName,
      ...form,
      isDefault: form.isDefault ? 'true' : 'false',
      status: form.isDefault ? 'Mặc định' : 'Phụ',
    };

    if (editingIndex === null) addressStore.createRow(row);
    else addressStore.updateRow(editingIndex, row);

    if (form.isDefault) {
      const savedRows = getSofa2AdminRows('shopping', 'addresses');
      const newIndex =
        editingIndex ??
        savedRows.findIndex((candidate) => String(candidate.addressId) === String(row.addressId));
      savedRows.forEach((candidate, index) => {
        if (
          index !== newIndex &&
          (String(candidate.customerId ?? '') === SOFA2_PORTAL_CUSTOMER_ID ||
            String(candidate.customer ?? '') === customerName) &&
          isDefaultAddress(candidate)
        ) {
          addressStore.updateRow(index, { ...candidate, isDefault: 'false', status: 'Phụ' });
        }
      });
    }

    setShowForm(false);
    setEditingIndex(null);
    setForm(emptyForm(customerName));
  };

  const deleteAddress = (index: number) => {
    if (!window.confirm('Xoá địa chỉ này khỏi sổ địa chỉ?')) return;
    const wasDefault = isDefaultAddress(addressStore.rows[index] ?? {});
    addressStore.deleteRow(index);
    if (wasDefault) {
      const remaining = getSofa2AdminRows('shopping', 'addresses')
        .map((row, rowIndex) => ({ row, rowIndex }))
        .find(
          ({ row }) =>
            String(row.customerId ?? '') === SOFA2_PORTAL_CUSTOMER_ID ||
            String(row.customer ?? '') === customerName
        );
      if (remaining) makeDefault(remaining.rowIndex);
    }
  };

  return (
    <>
      <Helmet><title>Địa chỉ giao hàng — LUXE Sofa</title></Helmet>
      <Sofa2PageHero
        title="Địa chỉ giao hàng"
        subtitle="Quản lý sổ địa chỉ — đặt địa chỉ mặc định và thêm địa chỉ giao hàng mới."
        image={SOFA2_PAGE_IMAGES.cta}
        overline="Tài khoản"
      />

      <Sofa2Section>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <Typography variant="h4">Sổ địa chỉ ({owned.length})</Typography>
          <Button variant="contained" startIcon={<Iconify icon="mingcute:add-line" />} onClick={startNew}>
            Thêm địa chỉ
          </Button>
        </Stack>

        {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}

        {showForm && (
          <Stack
            component="form"
            onSubmit={saveAddress}
            spacing={2}
            sx={{ p: 3, mb: 3, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (theme) => theme.customShadows.card }}
          >
            <Typography variant="h6">{editingIndex === null ? 'Địa chỉ mới' : 'Cập nhật địa chỉ'}</Typography>
            <Grid container spacing={2}>
              <Grid xs={12} sm={6}><TextField fullWidth label="Nhãn địa chỉ (Nhà, Văn phòng...)" value={form.label} onChange={(event) => setForm((current) => ({ ...current, label: event.target.value }))} /></Grid>
              <Grid xs={12} sm={6}><TextField required fullWidth label="Người nhận" value={form.recipient} onChange={(event) => setForm((current) => ({ ...current, recipient: event.target.value }))} /></Grid>
              <Grid xs={12} sm={6}><TextField required fullWidth label="Số điện thoại" value={form.phone} onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))} /></Grid>
              <Grid xs={12}><TextField required fullWidth label="Địa chỉ chi tiết" value={form.address} onChange={(event) => setForm((current) => ({ ...current, address: event.target.value }))} /></Grid>
              <Grid xs={12} sm={6}><TextField fullWidth label="Phường/Xã" value={form.ward} onChange={(event) => setForm((current) => ({ ...current, ward: event.target.value }))} /></Grid>
              <Grid xs={12} sm={6}><TextField fullWidth label="Quận/Huyện" value={form.district} onChange={(event) => setForm((current) => ({ ...current, district: event.target.value }))} /></Grid>
              <Grid xs={12} sm={6}><TextField required fullWidth label="Tỉnh/Thành" value={form.city} onChange={(event) => setForm((current) => ({ ...current, city: event.target.value }))} /></Grid>
              <Grid xs={12} sm={6}><TextField fullWidth label="Mã bưu chính" value={form.zipCode} onChange={(event) => setForm((current) => ({ ...current, zipCode: event.target.value }))} /></Grid>
              <Grid xs={12}><TextField fullWidth label="Ghi chú giao hàng" value={form.deliveryNote} onChange={(event) => setForm((current) => ({ ...current, deliveryNote: event.target.value }))} /></Grid>
              <Grid xs={12}><FormControlLabel control={<Checkbox checked={form.isDefault} onChange={(event) => setForm((current) => ({ ...current, isDefault: event.target.checked }))} />} label="Đặt làm địa chỉ mặc định" /></Grid>
            </Grid>
            <Stack direction="row" spacing={2}>
              <Button type="submit" variant="contained">Lưu địa chỉ</Button>
              <Button variant="outlined" color="inherit" onClick={() => setShowForm(false)}>Huỷ</Button>
            </Stack>
          </Stack>
        )}

        <Grid container spacing={3}>
          {owned.map(({ row, index }, position) => {
            const isDefault = isDefaultAddress(row);
            return (
              <Grid key={String(row.addressId ?? `${row.recipient}-${index}`)} xs={12} md={6}>
                <Stack
                  component={m.div}
                  variants={varFade({ distance: 24 }).inUp}
                  transition={{ delay: position * 0.06 }}
                  spacing={2}
                  sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (theme) => theme.customShadows.card, border: isDefault ? 2 : 0, borderColor: 'primary.main' }}
                >
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Box sx={{ width: 40, height: 40, display: 'flex', borderRadius: 1, alignItems: 'center', justifyContent: 'center', bgcolor: (theme) => varAlpha(theme.vars.palette.primary.mainChannel, 0.08), color: 'primary.main' }}>
                        <Iconify icon="solar:map-point-bold-duotone" width={20} />
                      </Box>
                      <Typography variant="subtitle1">{String(row.label || 'Địa chỉ')}</Typography>
                      {isDefault && <Chip label="Mặc định" size="small" color="primary" variant="soft" />}
                    </Stack>
                  </Stack>
                  <Divider sx={{ borderStyle: 'dashed' }} />
                  <Stack spacing={1}>
                    <Typography variant="body2">{row.recipient}</Typography>
                    <Typography variant="body2">{row.phone}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {[row.address, row.ward, row.district, row.city, row.zipCode].filter(Boolean).join(', ')}
                    </Typography>
                    {row.deliveryNote && <Typography variant="caption" color="text.secondary">Ghi chú: {row.deliveryNote}</Typography>}
                  </Stack>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    <Button size="small" variant="outlined" startIcon={<Iconify icon="solar:pen-bold-duotone" width={16} />} onClick={() => editAddress(index, row)}>Sửa</Button>
                    {!isDefault && <Button size="small" variant="outlined" startIcon={<Iconify icon="solar:check-circle-bold-duotone" width={16} />} onClick={() => makeDefault(index)}>Đặt mặc định</Button>}
                    <Button size="small" variant="outlined" color="error" startIcon={<Iconify icon="solar:trash-bin-trash-bold-duotone" width={16} />} onClick={() => deleteAddress(index)}>Xoá</Button>
                  </Stack>
                </Stack>
              </Grid>
            );
          })}
          {!owned.length && !showForm && <Grid xs={12}><Typography align="center">Bạn chưa lưu địa chỉ giao hàng nào.</Typography></Grid>}
        </Grid>

        <Stack direction="row" justifyContent="center" sx={{ mt: 4 }}>
          <Button component={RouterLink} href="/sofa2/account" variant="outlined">Về tài khoản</Button>
        </Stack>
      </Sofa2Section>
    </>
  );
}
