import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { useTranslate } from 'src/locales';
import { SOFA2_PRODUCTS, formatSofa2Price, SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';
import { Sofa2Section, Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';

// ----------------------------------------------------------------------

const COMPARISON_PRODUCTS = SOFA2_PRODUCTS.slice(0, 3);

export default function Page() {
  const { t } = useTranslate('sofa2');
  const [selected, setSelected] = useState(COMPARISON_PRODUCTS);

  const removeProduct = (id: string) =>
    setSelected((prev) => prev.filter((p) => p.id !== id));

  const COMPARISON_ROWS = [
    { label: t('compare.rowPrice'), key: 'price', format: 'money' as const },
    { label: t('compare.rowStyle'), key: 'style', format: 'text' as const },
    { label: t('compare.rowOldPrice'), key: 'oldPrice', format: 'money' as const },
    { label: t('compare.rowRating'), key: 'rating', format: 'text' as const },
    { label: t('compare.rowReviews'), key: 'reviews', format: 'text' as const },
    { label: t('compare.rowColors'), key: 'colors', format: 'colors' as const },
  ];

  return (
    <>
      <Helmet><title>{t('compare.metaTitle')}</title></Helmet>

      <Sofa2PageHero
        title={t('compare.title')}
        subtitle={t('compare.subtitle')}
        image={SOFA2_PAGE_IMAGES.cta}
        overline={t('compare.overline')}
      />

      <Sofa2Section>
        {selected.length === 0 ? (
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: { xs: 6, md: 10 } }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Iconify icon="solar:scale-bold-duotone" width={96} sx={{ color: 'text.disabled' }} />
            <Typography variant="h5">{t('compare.emptyTitle')}</Typography>
            <Typography sx={{ color: 'text.secondary' }}>{t('compare.emptyText')}</Typography>
            <Button component={RouterLink} href="/sofa2/products" size="large" variant="contained" startIcon={<Iconify icon="solar:bag-bold-duotone" />}>
              {t('compare.browse')}
            </Button>
          </Stack>
        ) : (
          <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="h5">{t('compare.compareCount', { count: selected.length })}</Typography>
              <Button component={RouterLink} href="/sofa2/products" variant="outlined" startIcon={<Iconify icon="solar:add-circle-bold-duotone" />}>
                {t('compare.addMore')}
              </Button>
            </Stack>

            <Box sx={{ overflowX: 'auto' }}>
              <Box sx={{ minWidth: 600 }}>
                {/* Product headers */}
                <Grid container spacing={2} sx={{ mb: 2 }}>
                  <Grid xs={3}>
                    <Typography variant="overline" sx={{ color: 'text.disabled' }}>{t('compare.criteria')}</Typography>
                  </Grid>
                  {selected.map((p) => (
                    <Grid key={p.id} xs={9 / selected.length}>
                      <Stack
                        spacing={1.5}
                        sx={{ p: 2, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t2) => t2.customShadows.card, position: 'relative' }}
                      >
                        <IconButton
                          size="small"
                          onClick={() => removeProduct(p.id)}
                          sx={{ position: 'absolute', top: 4, right: 4 }}
                        >
                          <Iconify icon="solar:close-circle-bold" width={18} />
                        </IconButton>
                        <Box component="img" src={p.image} sx={{ width: 1, height: 120, borderRadius: 1.5, objectFit: 'cover' }} />
                        <Typography variant="subtitle2" sx={{ textAlign: 'center' }}>{p.name}</Typography>
                        <Button size="small" variant="contained" fullWidth component={RouterLink} href="/sofa2/cart">
                          {t('compare.addToCart')}
                        </Button>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>

                <Divider sx={{ mb: 2 }} />

                {/* Comparison rows */}
                {COMPARISON_ROWS.map((row, idx) => (
                  <Box key={row.label}>
                    <Grid container spacing={2} sx={{
                      py: 2,
                      bgcolor: idx % 2 === 0 ? (t2) => varAlpha(t2.vars.palette.grey['500Channel'], 0.04) : 'transparent',
                      borderRadius: 1,
                    }}>
                      <Grid xs={3}>
                        <Typography variant="body2" sx={{ fontWeight: 600, pt: 0.5 }}>{row.label}</Typography>
                      </Grid>
                      {selected.map((p) => (
                        <Grid key={p.id} xs={9 / selected.length}>
                          <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                            {row.format === 'money'
                              ? formatSofa2Price(p[row.key as keyof typeof p] as number)
                              : row.format === 'colors'
                                ? t('compare.colorsUnit', { count: (p[row.key as keyof typeof p] as string[]).length })
                                : `${p[row.key as keyof typeof p] ?? '—'}`}
                          </Typography>
                        </Grid>
                      ))}
                    </Grid>
                    <Divider />
                  </Box>
                ))}
              </Box>
            </Box>
          </Stack>
        )}
      </Sofa2Section>
    </>
  );
}
