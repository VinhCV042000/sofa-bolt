import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { SOFA15_COLORS } from 'src/sections/sofa15/sofa15-data';
import { Sofa15Section } from 'src/sections/sofa15-pages/sofa15-page-hero';

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Đặt hàng thành công — Sofa15</title>
      </Helmet>

      <Sofa15Section bg="black" py={{ xs: 14, md: 20 }}>
        <Stack spacing={4} alignItems="center" sx={{ textAlign: 'center' }}>
          <Box
            sx={{
              width: 110,
              height: 110,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: SOFA15_COLORS.gold,
              border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.5)}`,
            }}
          >
            <Iconify icon="solar:check-circle-bold-duotone" width={60} />
          </Box>
          <Typography
            variant="h3"
            sx={{ color: 'common.white', fontWeight: 'fontWeightLight', fontFamily: theme.typography.fontSecondaryFamily }}
          >
            Đặt hàng thành công
          </Typography>
          <Typography sx={{ color: varAlpha('#FFFFFF', 0.5), maxWidth: 520, lineHeight: 2 }}>
            Cảm ơn bạn đã tin chọn Maison Gatsby. Mã đơn hàng của bạn là{' '}
            <Box component="span" sx={{ color: SOFA15_COLORS.gold }}>
              #S15-2048
            </Box>
            . Đội ngũ tư vấn sẽ liên hệ trong vòng 24 giờ để xác nhận lịch giao và lắp đặt.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              component={RouterLink}
              href="/sofa15/orders/tracking"
              size="large"
              variant="contained"
              sx={{ borderRadius: 0, bgcolor: SOFA15_COLORS.gold, color: SOFA15_COLORS.black, '&:hover': { bgcolor: SOFA15_COLORS.goldLight } }}
            >
              Theo dõi đơn hàng
            </Button>
            <Button
              component={RouterLink}
              href="/sofa15/products"
              size="large"
              variant="outlined"
              sx={{ borderRadius: 0, color: SOFA15_COLORS.gold, borderColor: varAlpha(SOFA15_COLORS.gold, 0.5) }}
            >
              Tiếp tục mua sắm
            </Button>
          </Stack>
        </Stack>
      </Sofa15Section>
    </>
  );
}