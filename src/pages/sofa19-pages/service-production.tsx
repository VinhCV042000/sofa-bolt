import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { sofa19Alpha, SOFA19_COLORS } from 'src/sections/sofa19/sofa19-data';
import { SOFA19_PAGE_IMAGES } from 'src/sections/sofa19-pages/sofa19-pages-data';
import { Sofa19Card, Sofa19Section, Sofa19PageHero } from 'src/sections/sofa19-pages/sofa19-page-hero';

const PRODUCTION_SERVICES: Record<string, { title: string; subtitle: string; content: { heading: string; body: string }[] }> = {
  default: { title: 'DỊCH VỤ SẢN XUẤT', subtitle: 'Gia công sofa pastel pop chuyên nghiệp — OEM, ODM, dự án.', content: [{ heading: 'Gia công sofa', body: 'Gia công theo bản vẽ, vật liệu pastel.' }, { heading: 'OEM', body: 'Sản xuất theo thương hiệu riêng.' }, { heading: 'ODM', body: 'Thiết kế và sản xuất ODM.' }, { heading: 'Dự án', body: 'Sản xuất số lượng lớn cho dự án.' }] },
  crafting: { title: 'GIA CÔNG SOFA', subtitle: 'Gia công sofa theo bản vẽ, vật liệu pastel.', content: [{ heading: 'Bản vẽ', body: 'Nhận bản vẽ, tư vấn vật liệu.' }, { heading: 'Sản xuất', body: 'Gia công 7-14 ngày.' }] },
  oem: { title: 'SOFA OEM', subtitle: 'Sản xuất sofa theo thương hiệu riêng.', content: [{ heading: 'Thương hiệu', body: 'Sản xuất theo brand khách hàng.' }, { heading: 'Số lượng', body: 'MOQ 10+ sản phẩm.' }] },
  odm: { title: 'SOFA ODM', subtitle: 'Thiết kế và sản xuất sofa ODM.', content: [{ heading: 'Thiết kế', body: 'Thiết kế sản phẩm mới.' }, { heading: 'Sản xuất', body: 'Sản xuất độc quyền.' }] },
  project: { title: 'ĐẶT HÀNG THEO DỰ ÁN', subtitle: 'Sản xuất sofa cho dự án lớn.', content: [{ heading: 'Dự án', body: 'Sản xuất số lượng lớn cho hotel, resort.' }, { heading: 'Lắp đặt', body: 'Lắp đặt tại dự án, bảo hành 5 năm.' }] },
};

export default function Page() {
  const params = useParams();
  const sub = params.sub || 'default';
  const data = PRODUCTION_SERVICES[sub] || PRODUCTION_SERVICES.default;

  return (
    <>
      <Helmet><title>{data.title} — Sofa19</title></Helmet>
      <Sofa19PageHero overline="DỊCH VỤ" title={<span>{data.title}</span>} subtitle={data.subtitle} image={SOFA19_PAGE_IMAGES.service2} />

      <Sofa19Section>
        <Grid container spacing={5} alignItems="center">
          <Grid xs={12} md={6}>
            <Box sx={{ overflow: 'hidden', aspectRatio: '4/3', borderRadius: '32px', border: `8px solid ${SOFA19_COLORS.white}`, boxShadow: `0 16px 0 -6px ${sofa19Alpha(SOFA19_COLORS.coral, 0.4)}` }}>
              <Box component="img" src={SOFA19_PAGE_IMAGES.service2} alt={data.title} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3}>
              {data.content.map((item, i) => (
                <Sofa19Card key={i} accent={[SOFA19_COLORS.jungleLight, SOFA19_COLORS.sand, SOFA19_COLORS.coral, SOFA19_COLORS.golden][i % 4]}>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box sx={{ width: 10, height: 10, mt: 1.5, borderRadius: '50%', bgcolor: SOFA19_COLORS.coralDeep, flexShrink: 0 }} />
                    <Stack spacing={1}>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: SOFA19_COLORS.ink }}>{item.heading}</Typography>
                      <Typography sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.8), lineHeight: 1.9 }}>{item.body}</Typography>
                    </Stack>
                  </Stack>
                </Sofa19Card>
              ))}
              <Button component={RouterLink} href="/sofa19/b2b/quote" size="large" variant="contained" startIcon={<Iconify icon="solar:document-bold-duotone" />} sx={{ alignSelf: 'flex-start', borderRadius: 99, px: 4, py: 1.75, fontWeight: 800, color: SOFA19_COLORS.ink, bgcolor: SOFA19_COLORS.jungleLight, boxShadow: `0 8px 0 ${SOFA19_COLORS.jungle}`, '&:hover': { bgcolor: SOFA19_COLORS.jungleLight, transform: 'translateY(2px)', boxShadow: `0 6px 0 ${SOFA19_COLORS.jungle}` } }}>Yêu cầu báo giá</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa19Section>
    </>
  );
}
