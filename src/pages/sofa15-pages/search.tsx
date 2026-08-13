import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { SOFA15_COLORS } from 'src/sections/sofa15/sofa15-data';
import { Sofa15Section, Sofa15PageHero } from 'src/sections/sofa15-pages/sofa15-page-hero';
import { sofa15Price, sofa15FieldSx, sofa15GoldButtonSx } from 'src/sections/sofa15-pages/sofa15-shop-ui';
import { SOFA15_PAGE_IMAGES, SOFA15_PAGE_PRODUCTS } from 'src/sections/sofa15-pages/sofa15-pages-data';

export default function Page() {
  return (
    <>
      <Helmet><title>Tìm kiếm sản phẩm — Sofa15</title></Helmet>

      <Sofa15PageHero overline="TÌM KIẾM" title={<>TÌM KIẾM <span>SẢN PHẨM</span></>} subtitle="Tìm theo tên, chất liệu, phong cách hoặc kích thước." image={SOFA15_PAGE_IMAGES.product9} />

      <Sofa15Section bg="black">
        <Stack spacing={4}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField fullWidth label="Nhập từ khóa..." sx={sofa15FieldSx} />
            <Button size="large" variant="contained" sx={{ ...sofa15GoldButtonSx, flexShrink: 0 }}>Tìm kiếm</Button>
            <Button component={RouterLink} href="/sofa15/compare" size="large" variant="outlined" sx={{ flexShrink: 0, borderRadius: 0, color: SOFA15_COLORS.gold, borderColor: varAlpha(SOFA15_COLORS.gold, 0.4) }}>So sánh</Button>
          </Stack>

          <Grid container spacing={3}>
            {SOFA15_PAGE_PRODUCTS.map((p: any) => (
              <Grid key={p.id} xs={12} sm={6} md={3}>
                <Stack component={RouterLink} href={`/sofa15/products/${p.id}`} spacing={1.5} sx={{ textDecoration: 'none', border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.25)}`, bgcolor: SOFA15_COLORS.charcoal, '&:hover': { borderColor: SOFA15_COLORS.gold } }}>
                  <Box component="img" src={p.image} alt={p.name} sx={{ width: 1, aspectRatio: '4/3', objectFit: 'cover' }} />
                  <Stack spacing={0.5} sx={{ p: 2 }}>
                    <Typography sx={{ color: 'common.white', fontWeight: 'fontWeightLight' }}>{p.name}</Typography>
                    <Typography variant="body2" sx={{ color: SOFA15_COLORS.gold }}>{typeof p.price === 'number' ? sofa15Price(p.price) : p.price}</Typography>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Sofa15Section>
    </>
  );
}
