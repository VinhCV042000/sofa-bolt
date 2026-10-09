import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';
import { Sofa2Section, Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';

// ----------------------------------------------------------------------

const metadata = { title: 'Địa chỉ giao hàng — LUXE Sofa' };

const ADDRESSES = [
  { id: 1, label: 'Nhà', recipient: 'Nguyễn Minh Anh', phone: '0901 234 567', address: '123 Nguyễn Trãi, Thanh Xuân, Hà Nội', city: 'Hà Nội', isDefault: true },
  { id: 2, label: 'Văn phòng', recipient: 'Nguyễn Minh Anh', phone: '0901 234 567', address: '45 Tôn Thất Tùng, Đống Đa, Hà Nội', city: 'Hà Nội', isDefault: false },
];

export default function Page() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Helmet><title>{metadata.title}</title></Helmet>

      <Sofa2PageHero
        title="Địa chỉ giao hàng"
        subtitle="Quản lý sổ địa chỉ — đặt địa chỉ mặc định và thêm địa chỉ giao hàng mới."
        image={SOFA2_PAGE_IMAGES.cta}
        overline="Tài khoản"
      />

      <Sofa2Section>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <Typography variant="h4">Sổ địa chỉ</Typography>
          <Button variant="contained" startIcon={<Iconify icon="mingcute:add-line" />} onClick={() => setShowForm(!showForm)}>
            Thêm địa chỉ
          </Button>
        </Stack>

        {showForm && (
          <Stack
            component={m.div}
            variants={varFade({ distance: 24 }).inUp}
            spacing={2}
            sx={{ p: 3, mb: 3, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
          >
            <Typography variant="h6">Địa chỉ mới</Typography>
            <Grid container spacing={2}>
              <Grid xs={12} sm={6}><TextField fullWidth label="Người nhận" /></Grid>
              <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" /></Grid>
              <Grid xs={12}><TextField fullWidth label="Địa chỉ chi tiết" /></Grid>
              <Grid xs={12} sm={6}><TextField fullWidth label="Phường/Xã" /></Grid>
              <Grid xs={12} sm={6}><TextField fullWidth label="Quận/Huyện" /></Grid>
              <Grid xs={12} sm={6}><TextField fullWidth label="Tỉnh/Thành" /></Grid>
              <Grid xs={12} sm={6}><TextField fullWidth label="Mã bưu chính" /></Grid>
            </Grid>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" onClick={() => setShowForm(false)}>Lưu địa chỉ</Button>
              <Button variant="outlined" color="inherit" onClick={() => setShowForm(false)}>Huỷ</Button>
            </Stack>
          </Stack>
        )}

        <Grid container spacing={3}>
          {ADDRESSES.map((a, index) => (
            <Grid key={a.id} xs={12} md={6}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.06 }}
                spacing={2}
                sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, border: a.isDefault ? 2 : 0, borderColor: 'primary.main' }}
              >
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Box sx={{ width: 40, height: 40, display: 'flex', borderRadius: 1, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: 'primary.main' }}>
                      <Iconify icon="solar:map-point-bold-duotone" width={20} />
                    </Box>
                    <Typography variant="subtitle1">{a.label}</Typography>
                    {a.isDefault && <Chip label="Mặc định" size="small" color="primary" variant="soft" />}
                  </Stack>
                </Stack>

                <Divider sx={{ borderStyle: 'dashed' }} />

                <Stack spacing={1}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Iconify icon="solar:user-bold-duotone" width={16} sx={{ color: 'text.disabled' }} />
                    <Typography variant="body2">{a.recipient}</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Iconify icon="solar:phone-bold-duotone" width={16} sx={{ color: 'text.disabled' }} />
                    <Typography variant="body2">{a.phone}</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="flex-start">
                    <Iconify icon="solar:map-point-bold-duotone" width={16} sx={{ color: 'text.disabled', mt: 0.3 }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{a.address}</Typography>
                  </Stack>
                </Stack>

                <Stack direction="row" spacing={1}>
                  <Button size="small" variant="outlined" startIcon={<Iconify icon="solar:pen-bold-duotone" width={16} />}>Sửa</Button>
                  {!a.isDefault && <Button size="small" variant="outlined" startIcon={<Iconify icon="solar:check-circle-bold-duotone" width={16} />}>Đặt mặc định</Button>}
                  {!a.isDefault && <Button size="small" variant="outlined" color="error" startIcon={<Iconify icon="solar:trash-bin-trash-bold-duotone" width={16} />}>Xoá</Button>}
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa2Section>
    </>
  );
}
