import { Helmet } from 'react-helmet-async';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
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

const goldField = {
  '& .MuiOutlinedInput-root': { borderRadius: 0, color: '#FFF' },
  '& .MuiOutlinedInput-notchedOutline': { borderColor: varAlpha(SOFA15_COLORS.gold, 0.3) },
  '& .MuiInputLabel-root': { color: varAlpha('#FFFFFF', 0.5) },
};

const PAYMENTS = [
  { label: 'Chuyển khoản ngân hàng', icon: 'solar:card-transfer-bold-duotone' },
  { label: 'Thẻ tín dụng / ghi nợ', icon: 'solar:card-bold-duotone' },
  { label: 'Trả góp 0% qua thẻ', icon: 'solar:calendar-bold-duotone' },
  { label: 'Thanh toán khi nhận hàng', icon: 'solar:wallet-bold-duotone' },
];

export default function Page() {
  const theme = useTheme();
  const items = SOFA15_PAGE_PRODUCTS.slice(0, 3);
  const total = items.reduce((sum, i) => sum + i.price, 0);

  return (
    <>
      <Helmet>
        <title>Thanh toán — Sofa15</title>
      </Helmet>

      <Sofa15PageHero
        overline="THANH TOÁN"
        title={
          <>
            THANH <span>TOÁN</span>
          </>
        }
        subtitle="Hoàn tất thông tin giao hàng và phương thức thanh toán."
        image={SOFA15_PAGE_IMAGES.prod2}
      />

      <Sofa15Section bg="black">
        <Grid container spacing={4}>
          <Grid xs={12} md={7}>
            <Stack spacing={3}>
              <Typography
                variant="h5"
                sx={{ color: 'common.white', fontWeight: 'fontWeightLight', fontFamily: theme.typography.fontSecondaryFamily }}
              >
                Thông tin giao hàng
              </Typography>
              <Grid container spacing={2}>
                <Grid xs={12} sm={6}>
                  <TextField fullWidth label="Họ và tên" sx={goldField} />
                </Grid>
                <Grid xs={12} sm={6}>
                  <TextField fullWidth label="Số điện thoại" sx={goldField} />
                </Grid>
                <Grid xs={12}>
                  <TextField fullWidth label="Email" sx={goldField} />
                </Grid>
                <Grid xs={12}>
                  <TextField fullWidth label="Địa chỉ giao hàng" sx={goldField} />
                </Grid>
                <Grid xs={12}>
                  <TextField fullWidth multiline rows={3} label="Ghi chú đơn hàng" sx={goldField} />
                </Grid>
              </Grid>

              <Typography
                variant="h5"
                sx={{ color: 'common.white', fontWeight: 'fontWeightLight', fontFamily: theme.typography.fontSecondaryFamily }}
              >
                Phương thức thanh toán
              </Typography>
              <Stack spacing={1.5}>
                {PAYMENTS.map((p) => (
                  <Stack
                    key={p.label}
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    sx={{ p: 2, border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.25)}`, bgcolor: SOFA15_COLORS.charcoal }}
                  >
                    <Iconify icon={p.icon} width={22} sx={{ color: SOFA15_COLORS.gold }} />
                    <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.7) }}>
                      {p.label}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid xs={12} md={5}>
            <Stack
              spacing={2}
              sx={{ p: 3, bgcolor: SOFA15_COLORS.charcoal, border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.3)}` }}
            >
              <Typography variant="h6" sx={{ color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily }}>
                Đơn hàng
              </Typography>
              {items.map((item) => (
                <Stack key={item.id} direction="row" justifyContent="space-between">
                  <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.6) }}>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'common.white' }}>
                    {sofa15FormatPrice(item.price)}
                  </Typography>
                </Stack>
              ))}
              <Divider sx={{ borderColor: varAlpha(SOFA15_COLORS.gold, 0.2) }} />
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="subtitle1" sx={{ color: 'common.white' }}>
                  Tổng cộng
                </Typography>
                <Typography variant="subtitle1" sx={{ color: SOFA15_COLORS.gold }}>
                  {sofa15FormatPrice(total)}
                </Typography>
              </Stack>
              <Button
                component={RouterLink}
                href="/sofa15/checkout/success"
                size="large"
                variant="contained"
                sx={{ borderRadius: 0, bgcolor: SOFA15_COLORS.gold, color: SOFA15_COLORS.black, '&:hover': { bgcolor: SOFA15_COLORS.goldLight } }}
              >
                Đặt hàng
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa15Section>
    </>
  );
}