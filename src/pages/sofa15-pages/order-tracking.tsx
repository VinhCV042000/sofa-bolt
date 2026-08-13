import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { SOFA15_COLORS } from 'src/sections/sofa15/sofa15-data';
import { Sofa15Section, Sofa15PageHero } from 'src/sections/sofa15-pages/sofa15-page-hero';
import { SOFA15_PAGE_IMAGES } from 'src/sections/sofa15-pages/sofa15-pages-data';

const STEPS = [
  { label: 'Đã tiếp nhận đơn hàng', date: '10/05/2025', icon: 'solar:clipboard-check-bold-duotone', done: true },
  { label: 'Đang chế tác thủ công', date: '14/05/2025', icon: 'solar:hammer-bold-duotone', done: true },
  { label: 'Kiểm tra chất lượng', date: '28/05/2025', icon: 'solar:shield-check-bold-duotone', done: true },
  { label: 'Đang vận chuyển', date: '02/06/2025', icon: 'solar:delivery-bold-duotone', done: false },
  { label: 'Giao & lắp đặt', date: 'Dự kiến 05/06/2025', icon: 'solar:home-2-bold-duotone', done: false },
];

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Theo dõi đơn hàng — Sofa15</title>
      </Helmet>

      <Sofa15PageHero
        overline="ĐƠN HÀNG"
        title={
          <>
            THEO DÕI <span>ĐƠN HÀNG</span>
          </>
        }
        subtitle="Nhập mã đơn hàng để xem tiến trình chế tác và giao nhận."
        image={SOFA15_PAGE_IMAGES.prod4}
      />

      <Sofa15Section bg="black">
        <Stack spacing={5} sx={{ maxWidth: 720, mx: 'auto' }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="Mã đơn hàng"
              defaultValue="S15-2048"
              sx={{
                '& .MuiOutlinedInput-root': { borderRadius: 0, color: '#FFF' },
                '& .MuiOutlinedInput-notchedOutline': { borderColor: varAlpha(SOFA15_COLORS.gold, 0.3) },
                '& .MuiInputLabel-root': { color: varAlpha('#FFFFFF', 0.5) },
              }}
            />
            <Button
              size="large"
              variant="contained"
              sx={{ px: 5, borderRadius: 0, bgcolor: SOFA15_COLORS.gold, color: SOFA15_COLORS.black, '&:hover': { bgcolor: SOFA15_COLORS.goldLight } }}
            >
              Tra cứu
            </Button>
          </Stack>

          <Stack spacing={0}>
            {STEPS.map((step, index) => (
              <Stack key={step.label} direction="row" spacing={3}>
                <Stack alignItems="center">
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: step.done ? SOFA15_COLORS.black : SOFA15_COLORS.gold,
                      bgcolor: step.done ? SOFA15_COLORS.gold : 'transparent',
                      border: `1px solid ${varAlpha(SOFA15_COLORS.gold, step.done ? 1 : 0.3)}`,
                    }}
                  >
                    <Iconify icon={step.icon} width={22} />
                  </Box>
                  {index < STEPS.length - 1 && (
                    <Box sx={{ width: '1px', flexGrow: 1, minHeight: 48, bgcolor: varAlpha(SOFA15_COLORS.gold, 0.25) }} />
                  )}
                </Stack>
                <Stack spacing={0.5} sx={{ pb: 4 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: step.done ? 'common.white' : varAlpha('#FFFFFF', 0.45), fontFamily: theme.typography.fontSecondaryFamily }}
                  >
                    {step.label}
                  </Typography>
                  <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.35) }}>
                    {step.date}
                  </Typography>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Sofa15Section>
    </>
  );
}