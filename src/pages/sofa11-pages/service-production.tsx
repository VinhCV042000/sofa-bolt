import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useParams } from 'react-router-dom';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

import { sofa11Alpha, SOFA11_COLORS } from 'src/sections/sofa11/sofa11-data';
import { Sofa11PageHero, Sofa11Section } from 'src/sections/sofa11-pages/sofa11-page-hero';
import { SOFA11_PAGE_IMAGES } from 'src/sections/sofa11-pages/sofa11-pages-data';

const PRODUCTION_SERVICES: Record<string, { title: string; subtitle: string; content: { heading: string; body: string }[] }> = {
  default: { title: 'DỊCH VỤ SẢN XUẤT', subtitle: 'Gia công sofa pop chuyên nghiệp — OEM, ODM, dự án.', content: [{ heading: 'Gia công sofa', body: 'Gia công theo bản vẽ, vật liệu pop.' }, { heading: 'OEM', body: 'Sản xuất theo thương hiệu riêng.' }, { heading: 'ODM', body: 'Thiết kế và sản xuất ODM.' }, { heading: 'Dự án', body: 'Sản xuất số lượng lớn cho dự án.' }] },
  crafting: { title: 'GIA CÔNG SOFA', subtitle: 'Gia công sofa theo bản vẽ, vật liệu pop.', content: [{ heading: 'Bản vẽ', body: 'Nhận bản vẽ, tư vấn vật liệu pop.' }, { heading: 'Sản xuất', body: 'Gia công 7-14 ngày.' }] },
  oem: { title: 'SOFA OEM', subtitle: 'Sản xuất sofa theo thương hiệu riêng.', content: [{ heading: 'Thương hiệu', body: 'Sản xuất theo brand khách hàng.' }, { heading: 'Số lượng', body: 'MOQ 10+ sản phẩm.' }] },
  odm: { title: 'SOFA ODM', subtitle: 'Thiết kế và sản xuất sofa ODM.', content: [{ heading: 'Thiết kế', body: 'Thiết kế sản phẩm mới.' }, { heading: 'Sản xuất', body: 'Sản xuất độc quyền.' }] },
  project: { title: 'ĐẶT HÀNG THEO DỰ ÁN', subtitle: 'Sản xuất sofa cho dự án lớn.', content: [{ heading: 'Dự án', body: 'Sản xuất số lượng lớn cho cafe, studio.' }, { heading: 'Lắp đặt', body: 'Lắp đặt tại dự án, bảo hành 10 năm.' }] },
};

export default function Page() {
  const params = useParams();
  const sub = params.sub || 'default';
  const data = PRODUCTION_SERVICES[sub] || PRODUCTION_SERVICES.default;

  return (
    <>
      <Helmet><title>{data.title} — Sofa11</title></Helmet>
      <Sofa11PageHero overline="DỊCH VỤ" title={<><span>{data.title}</span></>} subtitle={data.subtitle} image={SOFA11_PAGE_IMAGES.service2} />

      <Sofa11Section>
        <Grid container spacing={5} alignItems="center">
          <Grid xs={12} md={6}>
            <Box sx={{ overflow: 'hidden', borderRadius: '24px 24px 24px 0', aspectRatio: '4/3', border: `3px solid ${sofa11Alpha(SOFA11_COLORS.cyan, 0.3)}` }}>
              <Box component="img" src={SOFA11_PAGE_IMAGES.service2} alt={data.title} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3}>
              {data.content.map((item, i) => (
                <Stack key={i} direction="row" spacing={2} alignItems="flex-start">
                  <Box sx={{ width: 8, height: 8, mt: 1.5, borderRadius: '50%', bgcolor: SOFA11_COLORS.lime, flexShrink: 0, boxShadow: `0 0 12px ${sofa11Alpha(SOFA11_COLORS.lime, 0.6)}` }} />
                  <Stack spacing={1}>
                    <Typography variant="h6" sx={{ fontWeight: 900, color: SOFA11_COLORS.magenta, textTransform: 'uppercase' }}>{item.heading}</Typography>
                    <Typography sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.6), lineHeight: 1.8 }}>{item.body}</Typography>
                  </Stack>
                </Stack>
              ))}
              <Button component={RouterLink} href="/sofa11/b2b/quote" size="large" variant="contained" startIcon={<Iconify icon="solar:document-bold-duotone" />} sx={{ alignSelf: 'flex-start', borderRadius: 99, px: 4, py: 1.75, fontWeight: 900, textTransform: 'uppercase', color: SOFA11_COLORS.void, bgcolor: SOFA11_COLORS.lime, boxShadow: `0 0 32px ${sofa11Alpha(SOFA11_COLORS.lime, 0.5)}`, '&:hover': { bgcolor: SOFA11_COLORS.cyan, transform: 'translateY(-2px)' }, transition: 'all .25s' }}>Yêu cầu báo giá</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa11Section>
    </>
  );
}
