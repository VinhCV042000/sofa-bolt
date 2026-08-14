import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { SOFA17_COLORS } from 'src/sections/sofa17/sofa17-data';
import { Sofa17Section, Sofa17PageHero } from 'src/sections/sofa17-pages/sofa17-page-hero';
import { SOFA17_PAGE_IMAGES, SOFA17_PAGE_PRODUCTS } from 'src/sections/sofa17-pages/sofa17-pages-data';
import { sofa17Price, sofa17FieldSx, sofa17GoldButtonSx } from 'src/sections/sofa17-pages/sofa17-shop-ui';

export default function Page() {
  return (
    <>
      <Helmet><title>Tìm kiếm sản phẩm — Sofa17</title></Helmet>

      <Sofa17PageHero overline="TÌM KIẾM" title={<>TÌM KIẾM <span>SẢN PHẨM</span></>} subtitle="Tìm theo tên, chất liệu, phong cách hoặc kích thước." image={SOFA17_PAGE_IMAGES.product9} />

      <Sofa17Section bg="black">
        <Stack spacing={4}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField fullWidth label="Nhập từ khóa..." sx={sofa17FieldSx} />
            <Button size="large" variant="contained" sx={{ ...sofa17GoldButtonSx, flexShrink: 0 }}>Tìm kiếm</Button>
            <Button component={RouterLink} href="/sofa17/compare" size="large" variant="outlined" sx={{ flexShrink: 0, borderRadius: 0, color: SOFA17_COLORS.gold, borderColor: varAlpha(SOFA17_COLORS.gold, 0.4) }}>So sánh</Button>
          </Stack>

          <Grid container spacing={3}>
            {SOFA17_PAGE_PRODUCTS.map((p: any) => (
              <Grid key={p.id} xs={12} sm={6} md={3}>
                <Stack component={RouterLink} href={`/sofa17/products/${p.id}`} spacing={1.5} sx={{ textDecoration: 'none', border: `1px solid ${varAlpha(SOFA17_COLORS.gold, 0.25)}`, bgcolor: SOFA17_COLORS.charcoal, '&:hover': { borderColor: SOFA17_COLORS.gold } }}>
                  <Box component="img" src={p.image} alt={p.name} sx={{ width: 1, aspectRatio: '4/3', objectFit: 'cover' }} />
                  <Stack spacing={0.5} sx={{ p: 2 }}>
                    <Typography sx={{ color: 'common.white', fontWeight: 'fontWeightLight' }}>{p.name}</Typography>
                    <Typography variant="body2" sx={{ color: SOFA17_COLORS.gold }}>{typeof p.price === 'number' ? sofa17Price(p.price) : p.price}</Typography>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Sofa17Section>
    </>
  );
}
