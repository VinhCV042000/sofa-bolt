import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { SOFA8_COLORS } from 'src/sections/sofa8/sofa8-data';
import { SOFA8_PAGE_IMAGES } from 'src/sections/sofa8-pages/sofa8-pages-data';
import { Sofa8Section, Sofa8PageHero } from 'src/sections/sofa8-pages/sofa8-page-hero';

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Yêu cầu OEM — Sofa8</title>
      </Helmet>

      <Sofa8PageHero overline="B2B" title={<>YÊU CẦU <span>OEM</span></>} subtitle="Sản xuất sofa coastal theo thương hiệu riêng." image={SOFA8_PAGE_IMAGES.b2b} />

      <Sofa8Section>
        <Grid container spacing={5} alignItems="center">
          <Grid xs={12} md={6}>
            <Box sx={{ overflow: 'hidden', borderRadius: 3, aspectRatio: '4/3' }}>
              <Box component="img" src={SOFA8_PAGE_IMAGES.service2} alt="OEM" sx={{ width: 1, height: 1, objectFit: 'cover' }} />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3}>
              <Typography variant="h4" sx={{ fontWeight: 'fontWeightBold' }}>Sản xuất OEM</Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>Sofa8 cung cấp dịch vụ sản xuất OEM — sản xuất sofa coastal theo thương hiệu riêng của bạn. MOQ 10+ sản phẩm.</Typography>
              <Stack spacing={2}>
                {['Sản xuất theo brand khách hàng', 'MOQ 10+ sản phẩm', 'Chất liệu coastal cao cấp', 'Giao hàng 14-21 ngày'].map((item, i) => (
                  <Stack key={i} direction="row" spacing={2} alignItems="center">
                    <Iconify icon="solar:check-circle-bold-duotone" width={20} sx={{ color: SOFA8_COLORS.seafoam }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item}</Typography>
                  </Stack>
                ))}
              </Stack>
              <Button component={RouterLink} href="/sofa8/b2b/quote" size="large" variant="contained" startIcon={<Iconify icon="solar:document-bold-duotone" />} sx={{ alignSelf: 'flex-start', bgcolor: SOFA8_COLORS.coral, color: 'common.white', fontWeight: 'fontWeightBold', '&:hover': { bgcolor: SOFA8_COLORS.coralLight } }}>
                Yêu cầu báo giá
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa8Section>
    </>
  );
}
