import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { sofa11Alpha, SOFA11_COLORS } from 'src/sections/sofa11/sofa11-data';
import { SOFA11_PAGE_IMAGES } from 'src/sections/sofa11-pages/sofa11-pages-data';
import { Sofa11Section, Sofa11PageHero } from 'src/sections/sofa11-pages/sofa11-page-hero';

const DESIGN_SERVICES: Record<string, { title: string; subtitle: string; content: { heading: string; body: string }[] }> = {
  default: { title: 'THIẾT KẾ NỘI THẤT', subtitle: 'Thiết kế không gian pop tổng thể — từ ý tưởng đến bùng nổ.', content: [{ heading: 'Tư vấn', body: 'Tư vấn phong cách pop, màu chói, vật liệu.' }, { heading: 'Thiết kế 3D', body: 'Bản vẽ 3D chi tiết trong 24h.' }, { heading: 'Sản xuất', body: 'Sản xuất sofa theo bản vẽ, 7-14 ngày.' }, { heading: 'Lắp đặt', body: 'Lắp đặt miễn phí, bảo hành 10 năm.' }] },
  custom: { title: 'THIẾT KẾ SOFA THEO YÊU CẦU', subtitle: 'Sofa pop theo kích thước, màu, vật liệu riêng.', content: [{ heading: 'Tư vấn', body: 'Tư vấn kích thước, màu chói, vật liệu.' }, { heading: 'Thiết kế', body: 'Thiết kế 3D riêng cho bạn.' }, { heading: 'Sản xuất', body: 'Sản xuất 7-14 ngày làm việc.' }] },
  '3d': { title: 'THIẾT KẾ 3D', subtitle: 'Bản vẽ 3D chi tiết trong 24h.', content: [{ heading: 'Thiết kế 3D', body: 'Bản vẽ 3D sofa pop, render chất lượng cao.' }, { heading: 'Sửa đổi', body: 'Sửa đổi bản vẽ đến khi hài lòng.' }] },
  consult: { title: 'TƯ VẤN BỐ TRÍ NỘI THẤT', subtitle: 'Tư vấn sắp xếp không gian pop tối ưu.', content: [{ heading: 'Khảo sát', body: 'Khảo sát không gian thực tế.' }, { heading: 'Tư vấn', body: 'Tư vấn bố trí sofa, phụ kiện pop.' }] },
};

export default function Page() {
  const params = useParams();
  const sub = params.sub || 'default';
  const data = DESIGN_SERVICES[sub] || DESIGN_SERVICES.default;

  return (
    <>
      <Helmet><title>{data.title} — Sofa11</title></Helmet>
      <Sofa11PageHero overline="DỊCH VỤ" title={<span>{data.title}</span>} subtitle={data.subtitle} image={SOFA11_PAGE_IMAGES.service1} />

      <Sofa11Section>
        <Grid container spacing={5} alignItems="center">
          <Grid xs={12} md={6}>
            <Box sx={{ overflow: 'hidden', borderRadius: '24px 24px 24px 0', aspectRatio: '4/3', border: `3px solid ${sofa11Alpha(SOFA11_COLORS.magenta, 0.3)}` }}>
              <Box component="img" src={SOFA11_PAGE_IMAGES.service1} alt={data.title} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
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
              <Button component={RouterLink} href="/sofa11/showrooms/visit" size="large" variant="contained" startIcon={<Iconify icon="solar:phone-bold-duotone" />} sx={{ alignSelf: 'flex-start', borderRadius: 99, px: 4, py: 1.75, fontWeight: 900, textTransform: 'uppercase', color: SOFA11_COLORS.void, bgcolor: SOFA11_COLORS.lime, boxShadow: `0 0 32px ${sofa11Alpha(SOFA11_COLORS.lime, 0.5)}`, '&:hover': { bgcolor: SOFA11_COLORS.cyan, transform: 'translateY(-2px)' }, transition: 'all .25s' }}>Đặt lịch tư vấn</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa11Section>
    </>
  );
}
