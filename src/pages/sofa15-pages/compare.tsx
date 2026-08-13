import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { SOFA15_COLORS } from 'src/sections/sofa15/sofa15-data';
import { sofa15Price } from 'src/sections/sofa15-pages/sofa15-shop-ui';
import { Sofa15Section, Sofa15PageHero } from 'src/sections/sofa15-pages/sofa15-page-hero';
import { SOFA15_PAGE_IMAGES, SOFA15_PAGE_PRODUCTS } from 'src/sections/sofa15-pages/sofa15-pages-data';

const SPECS = [
  { label: 'Chất liệu', value: 'Nhung Italia / Da bò Ý' },
  { label: 'Khung', value: 'Gỗ sồi nguyên khối' },
  { label: 'Kích thước', value: '240 × 95 × 78 cm' },
  { label: 'Bảo hành', value: 'Trọn đời khung' },
  { label: 'Thời gian chế tác', value: '30–45 ngày' },
];

export default function Page() {
  const items = (SOFA15_PAGE_PRODUCTS as any[]).slice(0, 3);

  return (
    <>
      <Helmet><title>So sánh sản phẩm — Sofa15</title></Helmet>

      <Sofa15PageHero overline="SO SÁNH" title={<>SO SÁNH <span>SẢN PHẨM</span></>} subtitle="Đặt cạnh nhau các tác phẩm để chọn lựa chính xác." image={SOFA15_PAGE_IMAGES.product10} />

      <Sofa15Section bg="black">
        <Grid container spacing={3}>
          {items.map((p) => (
            <Grid key={p.id} xs={12} md={4}>
              <Stack sx={{ height: 1, bgcolor: SOFA15_COLORS.charcoal, border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.25)}` }}>
                <Box component="img" src={p.image} alt={p.name} sx={{ width: 1, aspectRatio: '4/3', objectFit: 'cover' }} />
                <Stack spacing={1.5} sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ color: 'common.white', fontWeight: 'fontWeightLight' }}>{p.name}</Typography>
                  <Typography sx={{ color: SOFA15_COLORS.gold }}>{typeof p.price === 'number' ? sofa15Price(p.price) : p.price}</Typography>
                  {SPECS.map((s) => (
                    <Stack key={s.label} direction="row" justifyContent="space-between" sx={{ py: 1, borderBottom: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.12)}` }}>
                      <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4) }}>{s.label}</Typography>
                      <Typography variant="body2" sx={{ color: 'common.white' }}>{s.value}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa15Section>
    </>
  );
}
