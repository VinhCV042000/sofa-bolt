import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { SOFA15_COLORS } from 'src/sections/sofa15/sofa15-data';
import { Sofa15Section, Sofa15PageHero } from 'src/sections/sofa15-pages/sofa15-page-hero';
import {
  SOFA15_PAGE_IMAGES,
  SOFA15_PAGE_PRODUCTS,
  sofa15FormatPrice,
} from 'src/sections/sofa15-pages/sofa15-pages-data';

export default function Page() {
  const theme = useTheme();
  const [query, setQuery] = useState('');

  const results = SOFA15_PAGE_PRODUCTS.filter((p) =>
    `${p.name} ${p.material} ${p.category}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Tìm kiếm sản phẩm — Sofa15</title>
      </Helmet>

      <Sofa15PageHero
        overline="TÌM KIẾM"
        title={
          <>
            TÌM KIẾM <span>SẢN PHẨM</span>
          </>
        }
        subtitle="Tìm nhanh theo tên, chất liệu hoặc dòng sofa Art Deco."
        image={SOFA15_PAGE_IMAGES.prod6}
      />

      <Sofa15Section bg="black">
        <Stack spacing={5}>
          <TextField
            fullWidth
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Nhập tên sofa, chất liệu..."
            InputProps={{
              startAdornment: (
                <Iconify icon="solar:magnifer-bold-duotone" width={22} sx={{ mr: 1.5, color: SOFA15_COLORS.gold }} />
              ),
            }}
            sx={{
              maxWidth: 640,
              '& .MuiOutlinedInput-root': { borderRadius: 0, color: '#FFF' },
              '& .MuiOutlinedInput-notchedOutline': { borderColor: varAlpha(SOFA15_COLORS.gold, 0.3) },
            }}
          />

          <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4) }}>
            {results.length} kết quả
          </Typography>

          <Grid container spacing={4}>
            {results.map((p) => (
              <Grid key={p.id} xs={12} sm={6} md={3}>
                <Stack
                  component={RouterLink}
                  href={`/sofa15/products/${p.id}`}
                  spacing={1.5}
                  sx={{ textDecoration: 'none', '&:hover img': { transform: 'scale(1.05)' } }}
                >
                  <Box sx={{ overflow: 'hidden', border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.2)}` }}>
                    <Box
                      component="img"
                      src={p.image}
                      alt={p.name}
                      sx={{ width: 1, aspectRatio: '4/3', objectFit: 'cover', transition: 'transform 0.4s' }}
                    />
                  </Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily }}
                  >
                    {p.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: SOFA15_COLORS.gold }}>
                    {sofa15FormatPrice(p.price)}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Sofa15Section>
    </>
  );
}