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

import { SOFA18_COLORS } from 'src/sections/sofa18/sofa18-data';
import { SOFA18_PAGE_IMAGES } from 'src/sections/sofa18-pages/sofa18-pages-data';
import { Sofa18Card, Sofa18Section, Sofa18PageHero } from 'src/sections/sofa18-pages/sofa18-page-hero';

const DESIGN_SERVICES: Record<string, { title: string; subtitle: string; content: { heading: string; body: string }[] }> = {
  default: { title: 'THIẾT KẾ NỘI THẤT', subtitle: 'Thiết kế không gian Mediterranean tổng thể — từ ý tưởng đến Riviera.', content: [{ heading: 'Tư vấn', body: 'Tư vấn phong cách Mediterranean, màu, vật liệu.' }, { heading: 'Thiết kế 3D', body: 'Bản vẽ 3D chi tiết trong 24h.' }, { heading: 'Sản xuất', body: 'Sản xuất sofa theo bản vẽ, 14-21 ngày.' }, { heading: 'Lắp đặt', body: 'Lắp đặt miễn phí, bảo hành 10 năm.' }] },
  custom: { title: 'THIẾT KẾ SOFA THEO YÊU CẦU', subtitle: 'Sofa Riviera theo kích thước, màu, vật liệu riêng.', content: [{ heading: 'Tư vấn', body: 'Tư vấn kích thước, màu, vật liệu.' }, { heading: 'Thiết kế', body: 'Thiết kế 3D riêng cho bạn.' }, { heading: 'Sản xuất', body: 'Sản xuất 14-21 ngày làm việc.' }] },
  '3d': { title: 'THIẾT KẾ 3D', subtitle: 'Bản vẽ 3D chi tiết trong 24h.', content: [{ heading: 'Thiết kế 3D', body: 'Bản vẽ 3D sofa Riviera, render chất lượng cao.' }, { heading: 'Sửa đổi', body: 'Sửa đổi bản vẽ đến khi hài lòng.' }] },
  consult: { title: 'TƯ VẤN BỐ TRÍ NỘI THẤT', subtitle: 'Tư vấn sắp xếp không gian Riviera tối ưu.', content: [{ heading: 'Khảo sát', body: 'Khảo sát không gian thực tế.' }, { heading: 'Tư vấn', body: 'Tư vấn bố trí sofa, phụ kiện Mediterranean.' }] },
};

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const sub = params.sub || 'default';
  const data = DESIGN_SERVICES[sub] || DESIGN_SERVICES.default;

  return (
    <>
      <Helmet><title>{data.title} — Sofa18</title></Helmet>
      <Sofa18PageHero overline="DỊCH VỤ" title={<span>{data.title}</span>} subtitle={data.subtitle} image={SOFA18_PAGE_IMAGES.service1} />

      <Sofa18Section bg="cream">
        <Grid container spacing={5} alignItems="center">
          <Grid xs={12} md={6}>
            <Box sx={{ overflow: 'hidden', aspectRatio: '4/3', borderRadius: 3 }}>
              <Box component="img" src={SOFA18_PAGE_IMAGES.service1} alt={data.title} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3}>
              {data.content.map((item, i) => (
                <Sofa18Card key={i} accent={[SOFA18_COLORS.clay, SOFA18_COLORS.sage, SOFA18_COLORS.rust, SOFA18_COLORS.clayDeep][i % 4]}>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box sx={{ width: 10, height: 10, mt: 1.5, bgcolor: SOFA18_COLORS.clay, borderRadius: '50%', flexShrink: 0 }} />
                    <Stack spacing={1}>
                      <Typography variant="h6" sx={{ fontWeight: 'fontWeightMedium', color: SOFA18_COLORS.ink, fontFamily: theme.typography.fontSecondaryFamily }}>{item.heading}</Typography>
                      <Typography sx={{ color: SOFA18_COLORS.inkSoft, lineHeight: 1.9, fontWeight: 'fontWeightLight' }}>{item.body}</Typography>
                    </Stack>
                  </Stack>
                </Sofa18Card>
              ))}
              <Button component={RouterLink} href="/sofa18/showrooms/visit" size="large" variant="contained" startIcon={<Iconify icon="solar:phone-bold-duotone" />} sx={{ alignSelf: 'flex-start', borderRadius: 2, px: 4, py: 1.75, fontWeight: 'fontWeightMedium', color: 'common.white', bgcolor: SOFA18_COLORS.clay, boxShadow: `0 8px 24px -8px ${varAlpha(SOFA18_COLORS.clay, 0.6)}`, '&:hover': { bgcolor: SOFA18_COLORS.clayDeep } }}>Đặt lịch tư vấn</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa18Section>
    </>
  );
}
