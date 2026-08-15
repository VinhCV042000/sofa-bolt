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

import { SOFA5_COLORS } from 'src/sections/sofa5/sofa5-data';
import { SOFA5_PAGE_IMAGES } from 'src/sections/sofa5-pages/sofa5-pages-data';
import { Sofa5Card, Sofa5Section, Sofa5PageHero } from 'src/sections/sofa5-pages/sofa5-page-hero';

const PRODUCTION_SERVICES: Record<string, { title: string; subtitle: string; content: { heading: string; body: string }[] }> = {
  default: { title: 'DỊCH VỤ SẢN XUẤT', subtitle: 'Gia công sofa Riviera chuyên nghiệp — OEM, ODM, dự án.', content: [{ heading: 'Gia công sofa', body: 'Gia công theo bản vẽ, vật liệu Mediterranean.' }, { heading: 'OEM', body: 'Sản xuất theo thương hiệu riêng.' }, { heading: 'ODM', body: 'Thiết kế và sản xuất ODM.' }, { heading: 'Dự án', body: 'Sản xuất số lượng lớn cho dự án.' }] },
  crafting: { title: 'GIA CÔNG SOFA', subtitle: 'Gia công sofa theo bản vẽ, vật liệu Riviera.', content: [{ heading: 'Bản vẽ', body: 'Nhận bản vẽ, tư vấn vật liệu.' }, { heading: 'Sản xuất', body: 'Gia công 14-21 ngày.' }] },
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
      <Helmet><title>{data.title} — Sofa Royale</title></Helmet>
      <Sofa5PageHero overline="DỊCH VỤ" title={<span>{data.title}</span>} subtitle={data.subtitle} image={SOFA5_PAGE_IMAGES.service2} />

      <Sofa5Section bg="cream">
        <Grid container spacing={5} alignItems="center">
          <Grid xs={12} md={6}>
            <Box sx={{ overflow: 'hidden', aspectRatio: '4/3', borderRadius: 3 }}>
              <Box component="img" src={SOFA5_PAGE_IMAGES.service2} alt={data.title} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3}>
              {data.content.map((item, i) => (
                <Sofa5Card key={i} accent={[SOFA5_COLORS.clay, SOFA5_COLORS.sage, SOFA5_COLORS.rust, SOFA5_COLORS.clayDeep][i % 4]}>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box sx={{ width: 10, height: 10, mt: 1.5, bgcolor: SOFA5_COLORS.clay, borderRadius: '50%', flexShrink: 0 }} />
                    <Stack spacing={1}>
                      <Typography variant="h6" sx={{ fontWeight: 'fontWeightMedium', color: SOFA5_COLORS.ink, fontFamily: theme.typography.fontSecondaryFamily }}>{item.heading}</Typography>
                      <Typography sx={{ color: SOFA5_COLORS.inkSoft, lineHeight: 1.9, fontWeight: 'fontWeightLight' }}>{item.body}</Typography>
                    </Stack>
                  </Stack>
                </Sofa5Card>
              ))}
              <Button component={RouterLink} href="/sofa5/b2b/quote" size="large" variant="contained" startIcon={<Iconify icon="solar:document-bold-duotone" />} sx={{ alignSelf: 'flex-start', borderRadius: 2, px: 4, py: 1.75, fontWeight: 'fontWeightMedium', color: 'common.white', bgcolor: SOFA5_COLORS.clay, boxShadow: `0 8px 24px -8px ${varAlpha(SOFA5_COLORS.clay, 0.6)}`, '&:hover': { bgcolor: SOFA5_COLORS.clayDeep } }}>Yêu cầu báo giá</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa5Section>
    </>
  );
}
