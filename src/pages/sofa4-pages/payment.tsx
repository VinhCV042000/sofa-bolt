import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { Iconify } from 'src/components/iconify';
import { MotionViewport } from 'src/components/animate';

import { Sofa4Section, Sofa4PageHero } from 'src/sections/sofa4-pages/sofa4-page-hero';
import { SOFA4_PAGE_IMAGES, formatSofa4PagePrice } from 'src/sections/sofa4-pages/sofa4-pages-data';

const metadata = { title: 'Thanh toán - Sofa Pop' };

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa4PageHero overline="Thanh toán" title="Phương thức thanh toán" subtitle="Chọn phương thức thanh toán phù hợp." image={SOFA4_PAGE_IMAGES.cta} />

      <Sofa4Section>
        <Grid container spacing={{ xs: 4, md: 6 }} component={MotionViewport}>
          <Grid xs={12} md={7}>
            <Stack spacing={4}>
              <Box>
                <Typography variant="h6" sx={{ mb: 2 }}>Thông tin thẻ</Typography>
                <Stack spacing={2}>
                  <TextField label="Số thẻ" fullWidth />
                  <TextField label="Tên chủ thẻ" fullWidth />
                  <Grid container spacing={2}>
                    <Grid xs={6}><TextField label="Ngày hết hạn" fullWidth /></Grid>
                    <Grid xs={6}><TextField label="CVV" fullWidth /></Grid>
                  </Grid>
                </Stack>
              </Box>

              <Box>
                <Typography variant="h6" sx={{ mb: 2 }}>Trả góp</Typography>
                <ToggleButtonGroup exclusive color="warning" sx={{ flexWrap: 'wrap', gap: 1 }}>
                  {['6', '12', '24', '36'].map((month) => <ToggleButton key={month} value={month}>{month} tháng</ToggleButton>)}
                </ToggleButtonGroup>
                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>Lãi suất 0% cho kỳ hạn 6 tháng đầu.</Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid xs={12} md={5}>
            <Stack spacing={3} sx={{ p: 4, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
              <Typography variant="h6">Tóm tắt</Typography>
              <Stack spacing={1}>
                <Stack direction="row" justifyContent="space-between"><Typography variant="body2" sx={{ color: 'text.secondary' }}>Tạm tính</Typography><Typography variant="subtitle2">{formatSofa4PagePrice(25300000)}</Typography></Stack>
                <Stack direction="row" justifyContent="space-between"><Typography variant="body2" sx={{ color: 'text.secondary' }}>Phí vận chuyển</Typography><Typography variant="subtitle2" sx={{ color: 'warning.main' }}>Miễn phí</Typography></Stack>
                <Stack direction="row" justifyContent="space-between"><Typography variant="body2" sx={{ color: 'text.secondary' }}>VAT</Typography><Typography variant="subtitle2">Đã bao gồm</Typography></Stack>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="h6">Tổng cộng:</Typography>
                <Typography variant="h5" sx={{ color: 'warning.main', fontWeight: 'fontWeightBold' }}>{formatSofa4PagePrice(25300000)}</Typography>
              </Stack>
              <Button variant="contained" color="warning" size="large" fullWidth startIcon={<Iconify icon="solar:wallet-bold-duotone" />}>Thanh toán</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa4Section>
    </>
  );
}
