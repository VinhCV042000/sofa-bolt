import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { SOFA18_COLORS } from 'src/sections/sofa18/sofa18-data';
import { sofa18FieldSx } from 'src/sections/sofa18-pages/sofa18-shop-ui';
import { Sofa18Section, Sofa18PageHero } from 'src/sections/sofa18-pages/sofa18-page-hero';
import { sofa18FormatPrice, SOFA18_PAGE_IMAGES, SOFA18_PAGE_PRODUCTS } from 'src/sections/sofa18-pages/sofa18-pages-data';

export default function Page() {
  const [query, setQuery] = useState('');
  const results = SOFA18_PAGE_PRODUCTS.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <Helmet><title>Tìm kiếm sản phẩm — Sofa18</title></Helmet>

      <Sofa18PageHero overline="TÌM KIẾM" title={<>TÌM KIẾM <span>SẢN PHẨM</span></>} subtitle="Tìm nhanh mẫu sofa theo tên hoặc bộ sưu tập." image={SOFA18_PAGE_IMAGES.product3} />

      <Sofa18Section bg="cream">
        <Stack spacing={4}>
          <TextField
            fullWidth
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            label="Nhập tên sản phẩm"
            sx={{ ...sofa18FieldSx, maxWidth: 560 }}
          />
          <Typography variant="body2" sx={{ color: SOFA18_COLORS.inkSoft }}>{results.length} kết quả</Typography>
          <Grid container spacing={3}>
            {results.map((p) => (
              <Grid key={p.id} xs={12} sm={6} md={3}>
                <Stack component={RouterLink} href={`/sofa18/products/${p.slug}`} spacing={1.5} sx={{ textDecoration: 'none' }}>
                  <Box sx={{ overflow: 'hidden', borderRadius: 3, aspectRatio: '4/5' }}>
                    <Box component="img" src={p.image} alt={p.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
                  </Box>
                  <Typography variant="subtitle1" sx={{ color: SOFA18_COLORS.ink }}>{p.name}</Typography>
                  <Typography variant="subtitle2" sx={{ color: SOFA18_COLORS.clayDeep }}>{sofa18FormatPrice(p.price)}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Sofa18Section>
    </>
  );
}
