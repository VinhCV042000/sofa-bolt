import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';
import { useTheme } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const metadata = { title: 'Đặt hàng thành công — LUXE Sofa' };

const ORDER = '#LX20250218001';

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet><title>{metadata.title}</title></Helmet>

      <Container component={MotionViewport} sx={{ py: { xs: 10, md: 16 }, minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
        <Stack spacing={5} alignItems="center" sx={{ textAlign: 'center', maxWidth: 560, mx: 'auto' }}>
          <Box
            component={m.div}
            variants={varFade({ distance: 24 }).inUp}
            sx={{
              width: 120,
              height: 120,
              display: 'flex',
              borderRadius: '50%',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: (t) => varAlpha(t.vars.palette.success.mainChannel, 0.12),
            }}
          >
            <Iconify icon="solar:check-circle-bold-duotone" width={72} sx={{ color: 'success.main' }} />
          </Box>

          <Stack spacing={2} alignItems="center" component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h3" sx={{ ...textGradient(`135deg, ${theme.vars.palette.success.main}, ${theme.vars.palette.primary.main}`) }}>
              Đặt hàng thành công!
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Cảm ơn bạn đã mua sắm tại LUXE Sofa. Chúng tôi sẽ liên hệ xác nhận đơn hàng trong thời gian sớm nhất.
            </Typography>
          </Stack>

          <Stack spacing={1} alignItems="center" component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, width: 1 }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>Mã đơn hàng</Typography>
            <Typography variant="h5" sx={{ color: 'primary.main' }}>{ORDER}</Typography>
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Button component={RouterLink} href="/sofa2/products" size="large" variant="contained" startIcon={<Iconify icon="solar:bag-bold-duotone" />}>
              Tiếp tục mua sắm
            </Button>
            <Button component={RouterLink} href="/sofa2/orders/tracking" size="large" variant="outlined" startIcon={<Iconify icon="solar:delivery-bold-duotone" />}>
              Theo dõi đơn hàng
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
