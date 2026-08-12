import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { sofa13Alpha, SOFA13_COLORS } from 'src/sections/sofa13/sofa13-data';
import { SOFA13_PAGE_IMAGES } from 'src/sections/sofa13-pages/sofa13-pages-data';
import { Sofa13Section, Sofa13PageHero } from 'src/sections/sofa13-pages/sofa13-page-hero';

const DESIGN_SERVICES: Record<string, { title: string; subtitle: string; content: { heading: string; body: string }[] }> = {
  default: { title: 'THIẾT KẾ NỘI THẤT', subtitle: 'Thiết kế không gian art deco tổng thể — từ ý tưởng đến jazz-age glamour.', content: [{ heading: 'Tư vấn', body: 'Tư vấn phong cách art deco, màu, vật liệu.' }, { heading: 'Thiết kế 3D', body: 'Bản vẽ 3D chi tiết trong 24h.' }, { heading: 'Sản xuất', body: 'Sản xuất sofa theo bản vẽ, 7-14 ngày.' }, { heading: 'Lắp đặt', body: 'Lắp đặt miễn phí, bảo hành 10 năm.' }] },
  custom: { title: 'THIẾT KẾ SOFA THEO YÊU CẦU', subtitle: 'Sofa art deco theo kích thước, màu, vật liệu riêng.', content: [{ heading: 'Tư vấn', body: 'Tư vấn kích thước, màu, vật liệu.' }, { heading: 'Thiết kế', body: 'Thiết kế 3D riêng cho bạn.' }, { heading: 'Sản xuất', body: 'Sản xuất 7-14 ngày làm việc.' }] },
  '3d': { title: 'THIẾT KẾ 3D', subtitle: 'Bản vẽ 3D chi tiết trong 24h.', content: [{ heading: 'Thiết kế 3D', body: 'Bản vẽ 3D sofa art deco, render chất lượng cao.' }, { heading: 'Sửa đổi', body: 'Sửa đổi bản vẽ đến khi hài lòng.' }] },
  consult: { title: 'TƯ VẤN BỐ TRÍ NỘI THẤT', subtitle: 'Tư vấn sắp xếp không gian art deco tối ưu.', content: [{ heading: 'Khảo sát', body: 'Khảo sát không gian thực tế.' }, { heading: 'Tư vấn', body: 'Tư vấn bố trí sofa, phụ kiện art deco.' }] },
};

export default function Page() {
  const params = useParams();
  const sub = params.sub || 'default';
  const data = DESIGN_SERVICES[sub] || DESIGN_SERVICES.default;

  return (
    <>
      <Helmet><title>{data.title} — Sofa13</title></Helmet>
      <Sofa13PageHero overline="DỊCH VỤ" title={<span>{data.title}</span>} subtitle={data.subtitle} image={SOFA13_PAGE_IMAGES.service1} />

      <Sofa13Section>
        <Grid container spacing={5} alignItems="center">
          <Grid xs={12} md={6}>
            <Box sx={{ overflow: 'hidden', aspectRatio: '4/3', border: `2px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.3)}`, p: '8px', bgcolor: SOFA13_COLORS.charcoal }}>
              <Box component="img" src={SOFA13_PAGE_IMAGES.service1} alt={data.title} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3}>
              {data.content.map((item, i) => (
                <Stack key={i} direction="row" spacing={2} alignItems="flex-start">
                  <Box sx={{ width: 8, height: 8, mt: 1.5, borderRadius: '50%', bgcolor: SOFA13_COLORS.gold, flexShrink: 0 }} />
                  <Stack spacing={1}>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: SOFA13_COLORS.gold, letterSpacing: 1 }}>{item.heading}</Typography>
                    <Typography sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.6), lineHeight: 1.9 }}>{item.body}</Typography>
                  </Stack>
                </Stack>
              ))}
              <Button component={RouterLink} href="/sofa13/showrooms/visit" size="large" variant="contained" startIcon={<Iconify icon="solar:phone-bold-duotone" />} sx={{ alignSelf: 'flex-start', borderRadius: 0, px: 4, py: 1.75, fontWeight: 700, letterSpacing: 1.5, color: SOFA13_COLORS.noir, bgcolor: SOFA13_COLORS.gold, '&:hover': { bgcolor: SOFA13_COLORS.goldPale } }}>Đặt lịch tư vấn</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa13Section>
    </>
  );
}
