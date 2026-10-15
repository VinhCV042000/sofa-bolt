import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { useTranslate } from 'src/locales';

// ----------------------------------------------------------------------

const ORDER = '#LX20250218001';

export default function Page() {
  const theme = useTheme();
  const { t } = useTranslate('sofa2');

  return (
    <>
      <Helmet><title>{t('checkoutSuccess.metaTitle')}</title></Helmet>

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
              bgcolor: (t2) => varAlpha(t2.vars.palette.success.mainChannel, 0.12),
            }}
          >
            <Iconify icon="solar:check-circle-bold-duotone" width={72} sx={{ color: 'success.main' }} />
          </Box>

          <Stack spacing={2} alignItems="center" component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h3" sx={{ ...textGradient(`135deg, ${theme.vars.palette.success.main}, ${theme.vars.palette.primary.main}`) }}>
              {t('checkoutSuccess.title')}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              {t('checkoutSuccess.subtitle')}
            </Typography>
          </Stack>

          <Stack spacing={1} alignItems="center" component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t2) => t2.customShadows.card, width: 1 }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>{t('checkoutSuccess.orderCode')}</Typography>
            <Typography variant="h5" sx={{ color: 'primary.main' }}>{ORDER}</Typography>
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Button component={RouterLink} href="/sofa2/products" size="large" variant="contained" startIcon={<Iconify icon="solar:bag-bold-duotone" />}>
              {t('checkoutSuccess.continueShopping')}
            </Button>
            <Button component={RouterLink} href="/sofa2/orders/tracking" size="large" variant="outlined" startIcon={<Iconify icon="solar:delivery-bold-duotone" />}>
              {t('checkoutSuccess.trackOrder')}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
