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

import { SOFA17_COLORS } from 'src/sections/sofa17/sofa17-data';
import { SOFA17_PAGE_IMAGES } from 'src/sections/sofa17-pages/sofa17-pages-data';
import { Sofa17Card, Sofa17Section, Sofa17PageHero } from 'src/sections/sofa17-pages/sofa17-page-hero';

const DESIGN_SERVICES: Record<string, { title: string; subtitle: string; content: { heading: string; body: string }[] }> = {
  default: { title: 'THIẾT KẾ NỘI THẤT', subtitle: 'Thiết kế không gian Riad Ma-rốc tổng thể — từ ý tưởng đến Riad.', content: [{ heading: 'Tư vấn', body: 'Tư vấn phong cách Riad Ma-rốc, màu, vật liệu.' }, { heading: 'Thiết kế 3D', body: 'Bản vẽ 3D chi tiết trong 24h.' }, { heading: 'Sản xuất', body: 'Sản xuất sofa theo bản vẽ, 14-21 ngày.' }, { heading: 'Lắp đặt', body: 'Lắp đặt miễn phí, bảo hành 10 năm.' }] },
  custom: { title: 'THIẾT KẾ SOFA THEO YÊU CẦU', subtitle: 'Sofa Riad Ma-rốc theo kích thước, màu, vật liệu riêng.', content: [{ heading: 'Tư vấn', body: 'Tư vấn kích thước, màu, vật liệu.' }, { heading: 'Thiết kế', body: 'Thiết kế 3D riêng cho bạn.' }, { heading: 'Sản xuất', body: 'Sản xuất 14-21 ngày làm việc.' }] },
  '3d': { title: 'THIẾT KẾ 3D', subtitle: 'Bản vẽ 3D chi tiết trong 24h.', content: [{ heading: 'Thiết kế 3D', body: 'Bản vẽ 3D sofa Riad Ma-rốc, render chất lượng cao.' }, { heading: 'Sửa đổi', body: 'Sửa đổi bản vẽ đến khi hài lòng.' }] },
  consult: { title: 'TƯ VẤN BỐ TRÍ NỘI THẤT', subtitle: 'Tư vấn sắp xếp không gian Riad Ma-rốc tối ưu.', content: [{ heading: 'Khảo sát', body: 'Khảo sát không gian thực tế.' }, { heading: 'Tư vấn', body: 'Tư vấn bố trí sofa, phụ kiện Riad Ma-rốc.' }] },
};

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const sub = params.sub || 'default';
  const data = DESIGN_SERVICES[sub] || DESIGN_SERVICES.default;

  return (
    <>
      <Helmet><title>{data.title} — Sofa17</title></Helmet>
      <Sofa17PageHero overline="DỊCH VỤ" title={<span>{data.title}</span>} subtitle={data.subtitle} image={SOFA17_PAGE_IMAGES.service1} />

      <Sofa17Section bg="black">
        <Grid container spacing={5} alignItems="center">
          <Grid xs={12} md={6}>
            <Box sx={{ overflow: 'hidden', aspectRatio: '4/3', border: `1px solid ${varAlpha(SOFA17_COLORS.gold, 0.3)}` }}>
              <Box component="img" src={SOFA17_PAGE_IMAGES.service1} alt={data.title} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3}>
              {data.content.map((item, i) => (
                <Sofa17Card key={i} accent={[SOFA17_COLORS.gold, SOFA17_COLORS.emerald, SOFA17_COLORS.burgundy, SOFA17_COLORS.goldLight][i % 4]}>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box sx={{ width: 10, height: 10, mt: 1.5, bgcolor: SOFA17_COLORS.gold, flexShrink: 0 }} />
                    <Stack spacing={1}>
                      <Typography variant="h6" sx={{ fontWeight: 'fontWeightMedium', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily }}>{item.heading}</Typography>
                      <Typography sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 1.9, fontWeight: 'fontWeightLight' }}>{item.body}</Typography>
                    </Stack>
                  </Stack>
                </Sofa17Card>
              ))}
              <Button component={RouterLink} href="/sofa17/showrooms/visit" size="large" variant="contained" startIcon={<Iconify icon="solar:phone-bold-duotone" />} sx={{ alignSelf: 'flex-start', borderRadius: 0, px: 4, py: 1.75, fontWeight: 'fontWeightMedium', color: SOFA17_COLORS.black, bgcolor: SOFA17_COLORS.gold, border: `1px solid ${SOFA17_COLORS.gold}`, '&:hover': { bgcolor: SOFA17_COLORS.goldLight } }}>Đặt lịch tư vấn</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa17Section>
    </>
  );
}
