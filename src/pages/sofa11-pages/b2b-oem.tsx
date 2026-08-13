import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { SOFA11_COLORS } from 'src/sections/sofa11/sofa11-data';
import { SOFA11_PAGE_IMAGES } from 'src/sections/sofa11-pages/sofa11-pages-data';
import { Sofa11Section, Sofa11PageHero } from 'src/sections/sofa11-pages/sofa11-page-hero';

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Yêu cầu OEM — Sofa11</title>
      </Helmet>

      <Sofa11PageHero overline="B2B" title={<>YÊU CẦU <span>OEM</span></>} subtitle="Sản xuất sofa retro theo thương hiệu riêng." image={SOFA11_PAGE_IMAGES.b2b} />

      <Sofa11Section>
        <Grid container spacing={5} alignItems="center">
          <Grid xs={12} md={6}>
            <Box sx={{ overflow: 'hidden', borderRadius: 3, aspectRatio: '4/3' }}>
              <Box component="img" src={SOFA11_PAGE_IMAGES.service2} alt="OEM" sx={{ width: 1, height: 1, objectFit: 'cover' }} />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3}>
              <Typography variant="h4" sx={{ fontWeight: 'fontWeightBold' }}>Sản xuất OEM</Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>Sofa11 cung cấp dịch vụ sản xuất OEM — sản xuất sofa retro theo thương hiệu riêng của bạn. MOQ 10+ sản phẩm.</Typography>
              <Stack spacing={2}>
                {['Sản xuất theo brand khách hàng', 'MOQ 10+ sản phẩm', 'Velvet 40+ màu neon', 'Giao hàng 14-21 ngày'].map((item, i) => (
                  <Stack key={i} direction="row" spacing={2} alignItems="center">
                    <Iconify icon="solar:check-circle-bold-duotone" width={20} sx={{ color: SOFA11_COLORS.cyan }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item}</Typography>
                  </Stack>
                ))}
              </Stack>
              <Button component={RouterLink} href="/sofa11/b2b/quote" size="large" variant="contained" startIcon={<Iconify icon="solar:document-bold-duotone" />} sx={{ alignSelf: 'flex-start', borderRadius: 30, bgcolor: SOFA11_COLORS.magenta, color: 'common.white', fontWeight: 'fontWeightBold', boxShadow: `0 4px 0 ${SOFA11_COLORS.void}`, '&:hover': { bgcolor: SOFA11_COLORS.magentaSoft, boxShadow: `0 6px 0 ${SOFA11_COLORS.void}` } }}>Yêu cầu báo giá</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa11Section>
    </>
  );
}
