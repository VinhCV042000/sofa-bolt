import { useState, useMemo } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
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

export default function Page() {
  const { t } = useTranslate('sofa2');
  const [query, setQuery] = useState('');

  const POPULAR_KEYWORDS = ['sofa góc', 'sofa da bò', 'sofa giường', 'ghế dài', 'sofa văng', 'sofa nhỏ'];
  const SUGGESTIONS = ['sofa góc da', 'sofa góc nhỏ', 'sofa da bò nhập khẩu', 'sofa giường đa năng', 'sofa văng cổ điển'];

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    return SOFA2_PRODUCTS.filter((p) =>
      p.name.toLowerCase().includes(q) ||
      (p.style ?? '').toLowerCase().includes(q) ||
      (p.badge ?? '').toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <>
      <Helmet><title>{t('search.metaTitle')}</title></Helmet>

      <Sofa2PageHero
        title={t('search.title')}
        subtitle={t('search.subtitle')}
        image={SOFA2_PAGE_IMAGES.cta}
        overline={t('search.overline')}
      />

      <Sofa2Section>
        <Stack spacing={4}>
          {/* Search bar */}
          <Stack
            component={m.div}
            variants={varFade({ distance: 24 }).inUp}
            spacing={2}
            sx={{ maxWidth: 720, mx: 'auto', width: 1 }}
          >
            <TextField
              fullWidth
              size="medium"
              placeholder={t('search.placeholder')}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Iconify icon="solar:magnifer-bold-duotone" width={24} sx={{ color: 'text.disabled' }} />
                  </InputAdornment>
                ),
                endAdornment: query && (
                  <InputAdornment position="end">
                    <Iconify icon="solar:close-circle-bold" width={20} sx={{ color: 'text.disabled', cursor: 'pointer' }} onClick={() => setQuery('')} />
                  </InputAdornment>
                ),
              }}
            />

            {/* Popular keywords */}
            <Stack direction="row" spacing={1} flexWrap="wrap" alignItems="center" sx={{ gap: 1 }}>
              <Typography variant="caption" sx={{ color: 'text.disabled' }}>{t('search.popular')}</Typography>
              {POPULAR_KEYWORDS.map((kw) => (
                <Chip
                  key={kw}
                  label={kw}
                  size="small"
                  variant="soft"
                  color="primary"
                  onClick={() => setQuery(kw)}
                  sx={{ cursor: 'pointer' }}
                />
              ))}
            </Stack>
          </Stack>

          {/* Suggestions when no query */}
          {!query && (
            <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="h6">{t('search.suggestions')}</Typography>
              <Grid container spacing={1.5}>
                {SUGGESTIONS.map((s) => (
                  <Grid key={s} xs={12} sm={6} md={4}>
                    <Stack
                      direction="row"
                      spacing={1.5}
                      alignItems="center"
                      onClick={() => setQuery(s)}
                      sx={{ p: 2, borderRadius: 1.5, cursor: 'pointer', bgcolor: (t2) => varAlpha(t2.vars.palette.grey['500Channel'], 0.04), '&:hover': { bgcolor: (t2) => varAlpha(t2.vars.palette.primary.mainChannel, 0.08) } }}
                    >
                      <Iconify icon="solar:magnifer-linear" width={18} sx={{ color: 'text.disabled' }} />
                      <Typography variant="body2">{s}</Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          )}

          {/* Results */}
          {query && (
            <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="h6">
                {results.length > 0
                  ? t('search.results', { count: results.length, query })
                  : t('search.noResults', { query })}
              </Typography>

              {results.length > 0 ? (
                <Grid container spacing={3}>
                  {results.map((p, index) => (
                    <Grid key={p.id} xs={12} sm={6} md={3}>
                      <Stack
                        component={m.div}
                        variants={varFade({ distance: 24 }).inUp}
                        transition={{ delay: index * 0.06 }}
                        spacing={1.5}
                        sx={{ p: 2, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t2) => t2.customShadows.card }}
                      >
                        <Box component="img" src={p.image} sx={{ width: 1, height: 160, borderRadius: 1.5, objectFit: 'cover' }} />
                        <Typography variant="subtitle2">{p.name}</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>{p.style}</Typography>
                        <Typography variant="subtitle1" sx={{ color: 'primary.main' }}>{formatSofa2Price(p.price)}</Typography>
                        <Button size="small" variant="outlined" fullWidth component={RouterLink} href="/sofa2/cart">
                          {t('search.viewProduct')}
                        </Button>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Stack spacing={2} alignItems="center" sx={{ textAlign: 'center', py: 6 }}>
                  <Iconify icon="solar:magnifer-linear" width={72} sx={{ color: 'text.disabled' }} />
                  <Typography variant="h6">{t('search.noResultsTitle')}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{t('search.noResultsText')}</Typography>
                  <Button component={RouterLink} href="/sofa2/products" variant="contained" startIcon={<Iconify icon="solar:bag-bold-duotone" />}>
                    {t('search.viewAll')}
                  </Button>
                </Stack>
              )}
            </Stack>
          )}
        </Stack>
      </Sofa2Section>
    </>
  );
}
