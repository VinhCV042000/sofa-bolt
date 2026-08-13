import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
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
  const items = SOFA15_PAGE_PRODUCTS.slice(0, 3).map((p, i) => ({ ...p, qty: i === 0 ? 2 : 1 }));
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <>
      <Helmet>
        <title>Giỏ hàng — Sofa15</title>
      </Helmet>

      <Sofa15PageHero
        overline="GIỎ HÀNG"
        title={
          <>
            GIỎ <span>HÀNG</span>
          </>
        }
        subtitle="Kiểm tra tác phẩm bạn đã chọn trước khi hoàn tất đơn hàng."
        image={SOFA15_PAGE_IMAGES.prod3}
      />

      <Sofa15Section bg="black">
        <Grid container spacing={4}>
          <Grid xs={12} md={8}>
            <Stack spacing={2}>
              {items.map((item) => (
                <Stack
                  key={item.id}
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={3}
                  sx={{
                    p: 2,
                    bgcolor: SOFA15_COLORS.charcoal,
                    border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.2)}`,
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.name}
                    sx={{ width: { xs: 1, sm: 140 }, height: 110, objectFit: 'cover' }}
                  />
                  <Stack spacing={1} flexGrow={1}>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily }}
                    >
                      {item.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4) }}>
                      {item.material} · {item.size}
                    </Typography>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        sx={{ px: 1.5, py: 0.5, border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.3)}` }}
                      >
                        <Iconify icon="solar:minus-circle-bold-duotone" width={18} sx={{ color: SOFA15_COLORS.gold }} />
                        <Typography variant="body2" sx={{ color: 'common.white' }}>
                          {item.qty}
                        </Typography>
                        <Iconify icon="solar:add-circle-bold-duotone" width={18} sx={{ color: SOFA15_COLORS.gold }} />
                      </Stack>
                      <Typography variant="subtitle2" sx={{ color: SOFA15_COLORS.gold }}>
                        {sofa15FormatPrice(item.price * item.qty)}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Grid>

          <Grid xs={12} md={4}>
            <Stack
              spacing={2}
              sx={{
                p: 3,
                bgcolor: SOFA15_COLORS.charcoal,
                border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.3)}`,
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily }}
              >
                Tổng đơn hàng
              </Typography>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5) }}>
                  Tạm tính
                </Typography>
                <Typography variant="body2" sx={{ color: 'common.white' }}>
                  {sofa15FormatPrice(subtotal)}
                </Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5) }}>
                  Giao hàng & lắp đặt
                </Typography>
                <Typography variant="body2" sx={{ color: SOFA15_COLORS.gold }}>
                  Miễn phí
                </Typography>
              </Stack>
              <Divider sx={{ borderColor: varAlpha(SOFA15_COLORS.gold, 0.2) }} />
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="subtitle1" sx={{ color: 'common.white' }}>
                  Tổng cộng
                </Typography>
                <Typography variant="subtitle1" sx={{ color: SOFA15_COLORS.gold }}>
                  {sofa15FormatPrice(subtotal)}
                </Typography>
              </Stack>
              <Button
                component={RouterLink}
                href="/sofa15/checkout"
                size="large"
                variant="contained"
                sx={{
                  borderRadius: 0,
                  bgcolor: SOFA15_COLORS.gold,
                  color: SOFA15_COLORS.black,
                  '&:hover': { bgcolor: SOFA15_COLORS.goldLight },
                }}
              >
                Tiến hành thanh toán
              </Button>
              <Button
                component={RouterLink}
                href="/sofa15/products"
                variant="outlined"
                sx={{ borderRadius: 0, color: SOFA15_COLORS.gold, borderColor: varAlpha(SOFA15_COLORS.gold, 0.5) }}
              >
                Tiếp tục mua sắm
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa15Section>
    </>
  );
}