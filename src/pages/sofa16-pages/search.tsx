import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { SOFA16_COLORS } from 'src/sections/sofa16/sofa16-data';
import { Sofa16Section, Sofa16PageHero } from 'src/sections/sofa16-pages/sofa16-page-hero';
import { sofa16FieldSx } from 'src/sections/sofa16-pages/sofa16-shop-ui';
import { sofa16FormatPrice, SOFA16_PAGE_IMAGES, SOFA16_PAGE_PRODUCTS } from 'src/sections/sofa16-pages/sofa16-pages-data';

export default function Page() {
  const [query, setQuery] = useState('');
  const results = SOFA16_PAGE_PRODUCTS.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <Helmet><title>Tìm kiếm sản phẩm — Sofa16</title></Helmet>

      <Sofa16PageHero overline="TÌM KIẾM" title={<>TÌM KIẾM <span>SẢN PHẨM</span></>} subtitle="Tìm nhanh mẫu sofa theo tên hoặc bộ sưu tập." image={SOFA16_PAGE_IMAGES.prod3} />

      <Sofa16Section bg="cream">
        <Stack spacing={4}>
          <TextField
            fullWidth
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            label="Nhập tên sản phẩm"
            sx={{ ...sofa16FieldSx, maxWidth: 560 }}
          />
          <Typography variant="body2" sx={{ color: SOFA16_COLORS.inkSoft }}>{results.length} kết quả</Typography>
          <Grid container spacing={3}>
            {results.map((p) => (
              <Grid key={p.id} xs={12} sm={6} md={3}>
                <Stack component={RouterLink} href={`/sofa16/products/${p.slug}`} spacing={1.5} sx={{ textDecoration: 'none' }}>
                  <Box sx={{ overflow: 'hidden', borderRadius: 3, aspectRatio: '4/5' }}>
                    <Box component="img" src={p.image} alt={p.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
                  </Box>
                  <Typography variant="subtitle1" sx={{ color: SOFA16_COLORS.ink }}>{p.name}</Typography>
                  <Typography variant="subtitle2" sx={{ color: SOFA16_COLORS.terracottaDeep }}>{sofa16FormatPrice(p.price)}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Sofa16Section>
    </>
  );
}
