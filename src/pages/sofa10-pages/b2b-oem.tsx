import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { SOFA10_COLORS } from 'src/sections/sofa10/sofa10-data';
import { SOFA10_PAGE_IMAGES } from 'src/sections/sofa10-pages/sofa10-pages-data';
import { Sofa10Section, Sofa10PageHero } from 'src/sections/sofa10-pages/sofa10-page-hero';

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Yêu cầu OEM — Sofa10</title>
      </Helmet>

      <Sofa10PageHero overline="B2B" title={<>YÊU CẦU <span>OEM</span></>} subtitle="Sản xuất sofa retro theo thương hiệu riêng." image={SOFA10_PAGE_IMAGES.b2b} />

      <Sofa10Section>
        <Grid container spacing={5} alignItems="center">
          <Grid xs={12} md={6}>
            <Box sx={{ overflow: 'hidden', borderRadius: 3, aspectRatio: '4/3' }}>
              <Box component="img" src={SOFA10_PAGE_IMAGES.service2} alt="OEM" sx={{ width: 1, height: 1, objectFit: 'cover' }} />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3}>
              <Typography variant="h4" sx={{ fontWeight: 'fontWeightNormal' }}>Sản xuất OEM</Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>Sofa10 cung cấp dịch vụ sản xuất OEM — sản xuất sofa retro theo thương hiệu riêng của bạn. MOQ 10+ sản phẩm.</Typography>
              <Stack spacing={2}>
                {['Sản xuất theo brand khách hàng', 'MOQ 10+ sản phẩm', 'Velvet 40+ màu neon', 'Giao hàng 14-21 ngày'].map((item, i) => (
                  <Stack key={i} direction="row" spacing={2} alignItems="center">
                    <Iconify icon="solar:check-circle-bold-duotone" width={20} sx={{ color: SOFA10_COLORS.moss }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item}</Typography>
                  </Stack>
                ))}
              </Stack>
              <Button component={RouterLink} href="/sofa10/b2b/quote" size="large" variant="contained" startIcon={<Iconify icon="solar:document-bold-duotone" />} sx={{ alignSelf: 'flex-start', borderRadius: 30, bgcolor: SOFA10_COLORS.wood, color: 'common.white', fontWeight: 'fontWeightNormal', boxShadow: `0 4px 0 ${SOFA10_COLORS.charcoal}`, '&:hover': { bgcolor: SOFA10_COLORS.woodLight, boxShadow: `0 6px 0 ${SOFA10_COLORS.charcoal}` } }}>Yêu cầu báo giá</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa10Section>
    </>
  );
}
