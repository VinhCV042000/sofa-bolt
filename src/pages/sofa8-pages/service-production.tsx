import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

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

const PRODUCTION_SERVICES: Record<string, { title: string; subtitle: string; content: { heading: string; body: string }[] }> = {
  default: {
    title: 'DỊCH VỤ SẢN XUẤT',
    subtitle: 'Gia công sofa coastal chuyên nghiệp — OEM, ODM, dự án.',
    content: [
      { heading: 'Gia công sofa', body: 'Gia công theo bản vẽ, chất liệu coastal.' },
      { heading: 'OEM', body: 'Sản xuất theo thương hiệu riêng.' },
      { heading: 'ODM', body: 'Thiết kế và sản xuất ODM.' },
      { heading: 'Dự án', body: 'Sản xuất số lượng lớn cho dự án.' },
    ],
  },
  crafting: {
    title: 'GIA CÔNG SOFA',
    subtitle: 'Gia công sofa theo bản vẽ, chất liệu coastal.',
    content: [
      { heading: 'Bản vẽ', body: 'Nhận bản vẽ, tư vấn vật liệu.' },
      { heading: 'Sản xuất', body: 'Gia công 7-14 ngày.' },
    ],
  },
  oem: {
    title: 'SOFA OEM',
    subtitle: 'Sản xuất sofa theo thương hiệu riêng.',
    content: [
      { heading: 'Thương hiệu', body: 'Sản xuất theo brand khách hàng.' },
      { heading: 'Số lượng', body: 'MOQ 10+ sản phẩm.' },
    ],
  },
  odm: {
    title: 'SOFA ODM',
    subtitle: 'Thiết kế và sản xuất sofa ODM.',
    content: [
      { heading: 'Thiết kế', body: 'Thiết kế sản phẩm mới.' },
      { heading: 'Sản xuất', body: 'Sản xuất độc quyền.' },
    ],
  },
  project: {
    title: 'ĐẶT HÀNG THEO DỰ ÁN',
    subtitle: 'Sản xuất sofa cho dự án lớn.',
    content: [
      { heading: 'Dự án', body: 'Sản xuất số lượng lớn cho resort, khách sạn.' },
      { heading: 'Lắp đặt', body: 'Lắp đặt tại dự án, bảo hành 7 năm.' },
    ],
  },
};

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const sub = params.sub || 'default';
  const data = PRODUCTION_SERVICES[sub] || PRODUCTION_SERVICES.default;

  return (
    <>
      <Helmet>
        <title>{data.title} — Sofa8</title>
      </Helmet>

      <Sofa8PageHero overline="DỊCH VỤ" title={<span>{data.title}</span>} subtitle={data.subtitle} image={SOFA8_PAGE_IMAGES.service2} />

      <Sofa8Section>
        <Grid container spacing={5} alignItems="center">
          <Grid xs={12} md={6}>
            <Box sx={{ overflow: 'hidden', borderRadius: 3, aspectRatio: '4/3' }}>
              <Box component="img" src={SOFA8_PAGE_IMAGES.service2} alt={data.title} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3}>
              {data.content.map((item, i) => (
                <Stack key={i} direction="row" spacing={2} alignItems="flex-start">
                  <Box sx={{ width: 6, height: 6, mt: 1.5, borderRadius: '50%', bgcolor: SOFA8_COLORS.coral, flexShrink: 0 }} />
                  <Stack spacing={1}>
                    <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold', color: SOFA8_COLORS.ocean }}>{item.heading}</Typography>
                    <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{item.body}</Typography>
                  </Stack>
                </Stack>
              ))}
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
