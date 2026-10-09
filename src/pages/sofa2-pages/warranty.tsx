import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';
import { Sofa2Section, Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';

// ----------------------------------------------------------------------

const metadata = { title: 'Phiếu bảo hành — LUXE Sofa' };

const WARRANTIES = [
  { id: 'BH-24001', product: 'Sofa Oslo 3 Chỗ', order: 'LX-26091502', issued: '15/09/2026', expires: '15/09/2031', status: 'Còn hiệu lực', claim: 'Chưa' },
  { id: 'BH-23102', product: 'Sofa Munich 2C', order: 'LX-26090101', issued: '01/09/2026', expires: '01/09/2031', status: 'Đang xử lý', claim: 'Bảo hành khung' },
  { id: 'BH-22020', product: 'Sofa Berlin Góc', order: 'LX-26090201', issued: '02/09/2021', expires: '02/09/2026', status: 'Sắp hết hạn', claim: 'Chưa' },
  { id: 'BH-21088', product: 'Sofa Helsinki', order: 'LX-26090403', issued: '04/09/2020', expires: '04/09/2025', status: 'Đã hết hạn', claim: 'Thay vải đệm' },
];

const statusColor: Record<string, 'success' | 'warning' | 'error' | 'info'> = {
  'Còn hiệu lực': 'success',
  'Đang xử lý': 'info',
  'Sắp hết hạn': 'warning',
  'Đã hết hạn': 'error',
};

export default function Page() {
  return (
    <>
      <Helmet><title>{metadata.title}</title></Helmet>

      <Sofa2PageHero
        title="Phiếu bảo hành"
        subtitle="Quản lý phiếu bảo hành sản phẩm — thời hạn, yêu cầu bảo hành và tiến trình sửa chữa."
        image={SOFA2_PAGE_IMAGES.cta}
        overline="Tài khoản"
      />

      <Sofa2Section>
        <Stack spacing={2} sx={{ mb: 4 }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <Typography variant="h4">Phiếu bảo hành của bạn</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>{WARRANTIES.length} phiếu bảo hành.</Typography>
        </Stack>

        <Grid container spacing={3}>
          {WARRANTIES.map((w, index) => (
            <Grid key={w.id} xs={12} md={6}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.06 }}
                spacing={2}
                sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
              >
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box sx={{ width: 48, height: 48, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: 'primary.main' }}>
                      <Iconify icon="solar:shield-check-bold-duotone" width={24} />
                    </Box>
                    <Stack>
                      <Typography variant="subtitle1">{w.id}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{w.product}</Typography>
                    </Stack>
                  </Stack>
                  <Chip label={w.status} size="small" color={statusColor[w.status] ?? 'default'} variant="soft" />
                </Stack>

                <Divider sx={{ borderStyle: 'dashed' }} />

                <Grid container spacing={2}>
                  <Grid xs={6}>
                    <Stack spacing={0.5}>
                      <Typography variant="caption" sx={{ color: 'text.disabled' }}>Ngày phát hành</Typography>
                      <Typography variant="body2">{w.issued}</Typography>
                    </Stack>
                  </Grid>
                  <Grid xs={6}>
                    <Stack spacing={0.5}>
                      <Typography variant="caption" sx={{ color: 'text.disabled' }}>Hết hạn</Typography>
                      <Typography variant="body2">{w.expires}</Typography>
                    </Stack>
                  </Grid>
                  <Grid xs={6}>
                    <Stack spacing={0.5}>
                      <Typography variant="caption" sx={{ color: 'text.disabled' }}>Đơn hàng</Typography>
                      <Typography variant="body2">{w.order}</Typography>
                    </Stack>
                  </Grid>
                  <Grid xs={6}>
                    <Stack spacing={0.5}>
                      <Typography variant="caption" sx={{ color: 'text.disabled' }}>Yêu cầu BH</Typography>
                      <Typography variant="body2">{w.claim}</Typography>
                    </Stack>
                  </Grid>
                </Grid>

                {w.status !== 'Đã hết hạn' && (
                  <Stack direction="row" spacing={1}>
                    <Button size="small" variant="outlined" fullWidth startIcon={<Iconify icon="solar:eye-bold-duotone" width={16} />}>
                      Xem chi tiết
                    </Button>
                    {w.claim === 'Chưa' && (
                      <Button size="small" variant="contained" fullWidth startIcon={<Iconify icon="solar:hand-stars-bold-duotone" width={16} />}>
                        Yêu cầu BH
                      </Button>
                    )}
                  </Stack>
                )}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa2Section>
    </>
  );
}
