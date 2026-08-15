import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { SOFA19_COLORS } from 'src/sections/sofa19/sofa19-data';
import { SOFA19_PAGE_IMAGES } from 'src/sections/sofa19-pages/sofa19-pages-data';
import { Sofa19Section, Sofa19PageHero } from 'src/sections/sofa19-pages/sofa19-page-hero';

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Yêu cầu OEM — Sofa19</title>
      </Helmet>

      <Sofa19PageHero overline="B2B" title={<>YÊU CẦU <span>OEM</span></>} subtitle="Sản xuất sofa retro theo thương hiệu riêng." image={SOFA19_PAGE_IMAGES.b2b} />

      <Sofa19Section>
        <Grid container spacing={5} alignItems="center">
          <Grid xs={12} md={6}>
            <Box sx={{ overflow: 'hidden', borderRadius: 3, aspectRatio: '4/3' }}>
              <Box component="img" src={SOFA19_PAGE_IMAGES.service2} alt="OEM" sx={{ width: 1, height: 1, objectFit: 'cover' }} />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3}>
              <Typography variant="h4" sx={{ fontWeight: 'fontWeightBold' }}>Sản xuất OEM</Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>Sofa19 cung cấp dịch vụ sản xuất OEM — sản xuất sofa retro theo thương hiệu riêng của bạn. MOQ 10+ sản phẩm.</Typography>
              <Stack spacing={2}>
                {['Sản xuất theo brand khách hàng', 'MOQ 10+ sản phẩm', 'Velvet 40+ màu neon', 'Giao hàng 14-21 ngày'].map((item, i) => (
                  <Stack key={i} direction="row" spacing={2} alignItems="center">
                    <Iconify icon="solar:check-circle-bold-duotone" width={20} sx={{ color: SOFA19_COLORS.jungleLight }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item}</Typography>
                  </Stack>
                ))}
              </Stack>
              <Button component={RouterLink} href="/sofa19/b2b/quote" size="large" variant="contained" startIcon={<Iconify icon="solar:document-bold-duotone" />} sx={{ alignSelf: 'flex-start', borderRadius: 30, bgcolor: SOFA19_COLORS.coral, color: 'common.white', fontWeight: 'fontWeightBold', boxShadow: `0 4px 0 ${SOFA19_COLORS.ink}`, '&:hover': { bgcolor: SOFA19_COLORS.golden, boxShadow: `0 6px 0 ${SOFA19_COLORS.ink}` } }}>Yêu cầu báo giá</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa19Section>
    </>
  );
}
