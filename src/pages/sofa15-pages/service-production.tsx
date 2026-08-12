import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { SOFA15_COLORS } from 'src/sections/sofa15/sofa15-data';
import { SOFA15_PAGE_IMAGES } from 'src/sections/sofa15-pages/sofa15-pages-data';
import { Sofa15Card, Sofa15Section, Sofa15PageHero } from 'src/sections/sofa15-pages/sofa15-page-hero';

const PRODUCTION_SERVICES: Record<string, { title: string; subtitle: string; content: { heading: string; body: string }[] }> = {
  default: { title: 'DỊCH VỤ SẢN XUẤT', subtitle: 'Gia công sofa Art Deco chuyên nghiệp — OEM, ODM, dự án.', content: [{ heading: 'Gia công sofa', body: 'Gia công theo bản vẽ, vật liệu Art Deco.' }, { heading: 'OEM', body: 'Sản xuất theo thương hiệu riêng.' }, { heading: 'ODM', body: 'Thiết kế và sản xuất ODM.' }, { heading: 'Dự án', body: 'Sản xuất số lượng lớn cho dự án.' }] },
  crafting: { title: 'GIA CÔNG SOFA', subtitle: 'Gia công sofa theo bản vẽ, vật liệu Art Deco.', content: [{ heading: 'Bản vẽ', body: 'Nhận bản vẽ, tư vấn vật liệu.' }, { heading: 'Sản xuất', body: 'Gia công 14-21 ngày.' }] },
  oem: { title: 'SOFA OEM', subtitle: 'Sản xuất sofa theo thương hiệu riêng.', content: [{ heading: 'Thương hiệu', body: 'Sản xuất theo brand khách hàng.' }, { heading: 'Số lượng', body: 'MOQ 10+ sản phẩm.' }] },
  odm: { title: 'SOFA ODM', subtitle: 'Thiết kế và sản xuất sofa ODM.', content: [{ heading: 'Thiết kế', body: 'Thiết kế sản phẩm mới.' }, { heading: 'Sản xuất', body: 'Sản xuất độc quyền.' }] },
  project: { title: 'ĐẶT HÀNG THEO DỰ ÁN', subtitle: 'Sản xuất sofa cho dự án lớn.', content: [{ heading: 'Dự án', body: 'Sản xuất số lượng lớn cho hotel, resort.' }, { heading: 'Lắp đặt', body: 'Lắp đặt tại dự án, bảo hành 10 năm.' }] },
};

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const sub = params.sub || 'default';
  const data = PRODUCTION_SERVICES[sub] || PRODUCTION_SERVICES.default;

  return (
    <>
      <Helmet><title>{data.title} — Sofa15</title></Helmet>
      <Sofa15PageHero overline="DỊCH VỤ" title={<span>{data.title}</span>} subtitle={data.subtitle} image={SOFA15_PAGE_IMAGES.service2} />

      <Sofa15Section bg="black">
        <Grid container spacing={5} alignItems="center">
          <Grid xs={12} md={6}>
            <Box sx={{ overflow: 'hidden', aspectRatio: '4/3', border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.3)}` }}>
              <Box component="img" src={SOFA15_PAGE_IMAGES.service2} alt={data.title} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3}>
              {data.content.map((item, i) => (
                <Sofa15Card key={i} accent={[SOFA15_COLORS.gold, SOFA15_COLORS.emerald, SOFA15_COLORS.burgundy, SOFA15_COLORS.goldLight][i % 4]}>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box sx={{ width: 10, height: 10, mt: 1.5, bgcolor: SOFA15_COLORS.gold, flexShrink: 0 }} />
                    <Stack spacing={1}>
                      <Typography variant="h6" sx={{ fontWeight: 'fontWeightMedium', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily }}>{item.heading}</Typography>
                      <Typography sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 1.9, fontWeight: 'fontWeightLight' }}>{item.body}</Typography>
                    </Stack>
                  </Stack>
                </Sofa15Card>
              ))}
              <Button component={RouterLink} href="/sofa15/b2b/quote" size="large" variant="contained" startIcon={<Iconify icon="solar:document-bold-duotone" />} sx={{ alignSelf: 'flex-start', borderRadius: 0, px: 4, py: 1.75, fontWeight: 'fontWeightMedium', color: SOFA15_COLORS.black, bgcolor: SOFA15_COLORS.gold, border: `1px solid ${SOFA15_COLORS.gold}`, '&:hover': { bgcolor: SOFA15_COLORS.goldLight } }}>Yêu cầu báo giá</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa15Section>
    </>
  );
}
