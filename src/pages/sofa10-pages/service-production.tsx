import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { useParams } from 'react-router-dom';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

import { SOFA10_COLORS } from 'src/sections/sofa10/sofa10-data';
import { Sofa10PageHero, Sofa10Section } from 'src/sections/sofa10-pages/sofa10-page-hero';
import { SOFA10_PAGE_IMAGES } from 'src/sections/sofa10-pages/sofa10-pages-data';

const PRODUCTION_SERVICES: Record<string, { title: string; subtitle: string; content: { heading: string; body: string }[] }> = {
  default: { title: 'DỊCH VỤ SẢN XUẤT', subtitle: 'Gia công sofa wabi-sabi chuyên nghiệp — OEM, ODM, dự án.', content: [{ heading: 'Gia công sofa', body: 'Gia công theo bản vẽ, vật liệu wabi-sabi.' }, { heading: 'OEM', body: 'Sản xuất theo thương hiệu riêng.' }, { heading: 'ODM', body: 'Thiết kế và sản xuất ODM.' }, { heading: 'Dự án', body: 'Sản xuất số lượng lớn cho dự án.' }] },
  crafting: { title: 'GIA CÔNG SOFA', subtitle: 'Gia công sofa theo bản vẽ, vật liệu wabi-sabi.', content: [{ heading: 'Bản vẽ', body: 'Nhận bản vẽ, tư vấn vật liệu mộc.' }, { heading: 'Sản xuất', body: 'Gia công 7-14 ngày.' }] },
  oem: { title: 'SOFA OEM', subtitle: 'Sản xuất sofa theo thương hiệu riêng.', content: [{ heading: 'Thương hiệu', body: 'Sản xuất theo brand khách hàng.' }, { heading: 'Số lượng', body: 'MOQ 10+ sản phẩm.' }] },
  odm: { title: 'SOFA ODM', subtitle: 'Thiết kế và sản xuất sofa ODM.', content: [{ heading: 'Thiết kế', body: 'Thiết kế sản phẩm mới.' }, { heading: 'Sản xuất', body: 'Sản xuất độc quyền.' }] },
  project: { title: 'ĐẶT HÀNG THEO DỰ ÁN', subtitle: 'Sản xuất sofa cho dự án lớn.', content: [{ heading: 'Dự án', body: 'Sản xuất số lượng lớn cho cafe, resort.' }, { heading: 'Lắp đặt', body: 'Lắp đặt tại dự án, bảo hành 12 năm.' }] },
};

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const sub = params.sub || 'default';
  const data = PRODUCTION_SERVICES[sub] || PRODUCTION_SERVICES.default;

  return (
    <>
      <Helmet><title>{data.title} — Sofa10</title></Helmet>
      <Sofa10PageHero overline="DỊCH VỤ" title={<><span>{data.title}</span></>} subtitle={data.subtitle} image={SOFA10_PAGE_IMAGES.service2} />
      <Sofa10Section>
        <Grid container spacing={5} alignItems="center">
          <Grid xs={12} md={6}>
            <Box sx={{ overflow: 'hidden', borderRadius: 2, aspectRatio: '4/3' }}>
              <Box component="img" src={SOFA10_PAGE_IMAGES.service2} alt={data.title} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3}>
              {data.content.map((item, i) => (
                <Stack key={i} direction="row" spacing={2} alignItems="flex-start">
                  <Box sx={{ width: 6, height: 6, mt: 1.5, borderRadius: '50%', bgcolor: SOFA10_COLORS.wood, flexShrink: 0 }} />
                  <Stack spacing={1}>
                    <Typography variant="h6" sx={{ fontWeight: 'fontWeightNormal', color: SOFA10_COLORS.wood }}>{item.heading}</Typography>
                    <Typography sx={{ color: 'text.secondary', lineHeight: 2, fontWeight: 'fontWeightLight' }}>{item.body}</Typography>
                  </Stack>
                </Stack>
              ))}
              <Button component={RouterLink} href="/sofa10/b2b/quote" size="large" variant="contained" startIcon={<Iconify icon="solar:document-bold-duotone" />} sx={{ alignSelf: 'flex-start', borderRadius: 2, bgcolor: SOFA10_COLORS.charcoal, color: 'common.white', fontWeight: 'fontWeightLight', textTransform: 'none', '&:hover': { bgcolor: SOFA10_COLORS.ink } }}>Yêu cầu báo giá</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa10Section>
    </>
  );
}
