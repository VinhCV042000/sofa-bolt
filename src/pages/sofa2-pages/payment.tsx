import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { useTranslate } from 'src/locales';
import { Sofa2Section, Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';
import { formatSofa2Price, SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';

// ----------------------------------------------------------------------

export default function Page() {
  const { t } = useTranslate('sofa2');
  const theme = useTheme();
  const [price, setPrice] = useState(20000000);
  const [months, setMonths] = useState(12);

  const MONTHS = [6, 12, 24, 36];
  const monthly = Math.round(price / months);

  const METHODS = [
    { icon: 'solar:hand-money-bold-duotone', title: t('payment.cod'), desc: t('payment.codDesc') },
    { icon: 'solar:card-bold-duotone', title: t('payment.bank'), desc: t('payment.bankDesc') },
    { icon: 'solar:wallet-bold-duotone', title: t('payment.credit'), desc: t('payment.creditDesc') },
    { icon: 'solar:calendar-bold-duotone', title: t('payment.installment'), desc: t('payment.installmentDesc') },
  ];

  return (
    <>
      <Helmet><title>{t('payment.metaTitle')}</title></Helmet>
      <Sofa2PageHero title={t('payment.title')} subtitle={t('payment.subtitle')} image={SOFA2_PAGE_IMAGES.service3} overline={t('payment.overline')} />

      {/* Payment methods */}
      <Sofa2Section>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <Typography variant="h3">{t('payment.methodsTitle')}</Typography>
        </Stack>
        <Grid container spacing={3}>
          {METHODS.map((method, index) => (
            <Grid key={method.title} xs={12} sm={6} md={3}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.08 }}
                spacing={2}
                alignItems="center"
                sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t2) => t2.customShadows.card, textAlign: 'center' }}
              >
                <Box sx={{ width: 64, height: 64, display: 'flex', borderRadius: 2, alignItems: 'center', justifyContent: 'center', bgcolor: (t2) => varAlpha(t2.vars.palette.primary.mainChannel, 0.08), color: 'primary.main' }}>
                  <Iconify icon={method.icon} width={32} />
                </Box>
                <Typography variant="h6">{method.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{method.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa2Section>

      {/* Payment partner placeholders */}
      <Sofa2Section bg="grey">
        <Stack spacing={2} sx={{ mb: 5, textAlign: 'center' }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>{t('payment.partners')}</Typography>
        </Stack>
        <Stack direction="row" spacing={3} flexWrap="wrap" justifyContent="center" component={m.div} variants={varFade({ distance: 24 }).inUp}>
          {['Visa', 'Mastercard', 'JCB', 'VNPAY', 'Momo', 'ZaloPay'].map((p) => (
            <Box key={p} sx={{ width: 120, height: 64, borderRadius: 2, bgcolor: (t2) => varAlpha(t2.vars.palette.grey['500Channel'], 0.16), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>{p}</Typography>
            </Box>
          ))}
        </Stack>
      </Sofa2Section>

      {/* Installment calculator */}
      <Sofa2Section>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Typography variant="overline" sx={{ color: 'text.disabled' }}>{t('payment.installmentOverline')}</Typography>
              <Typography variant="h2" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.main}, ${theme.vars.palette.warning.light}`) }}>
                {t('payment.installmentTitle')}
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>{t('payment.installmentText')}</Typography>
            </Stack>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack component={m.div} variants={varFade({ distance: 24 }).inRight} spacing={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t2) => t2.customShadows.card }}>
              <TextField
                fullWidth
                label={t('payment.priceLabel')}
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
              <TextField fullWidth select label={t('payment.monthsLabel')} value={months} onChange={(e) => setMonths(Number(e.target.value))}>
                {MONTHS.map((mo) => <MenuItem key={mo} value={mo}>{t('payment.monthsUnit', { count: mo })}</MenuItem>)}
              </TextField>
              <Box sx={{ p: 3, borderRadius: 2, bgcolor: (t2) => varAlpha(t2.vars.palette.primary.mainChannel, 0.06) }}>
                <Typography variant="overline" sx={{ color: 'text.disabled' }}>{t('payment.monthlyLabel')}</Typography>
                <Typography variant="h3" sx={{ color: 'primary.main', mt: 1 }}>{formatSofa2Price(monthly)}</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>{t('payment.note')}</Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Sofa2Section>
    </>
  );
}
