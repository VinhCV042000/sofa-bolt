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

import { sofa14Alpha, SOFA14_COLORS } from 'src/sections/sofa14/sofa14-data';
import { Sofa14PageHero, Sofa14Section, Sofa14Card } from 'src/sections/sofa14-pages/sofa14-page-hero';
import { SOFA14_PAGE_IMAGES } from 'src/sections/sofa14-pages/sofa14-pages-data';

const DESIGN_SERVICES: Record<string, { title: string; subtitle: string; content: { heading: string; body: string }[] }> = {
  default: { title: 'THIẾT KẾ NỘI THẤT', subtitle: 'Thiết kế không gian pastel pop tổng thể — từ ý tưởng đến claymorphism.', content: [{ heading: 'Tư vấn', body: 'Tư vấn phong cách pastel pop, màu, vật liệu.' }, { heading: 'Thiết kế 3D', body: 'Bản vẽ 3D chi tiết trong 24h.' }, { heading: 'Sản xuất', body: 'Sản xuất sofa theo bản vẽ, 7-14 ngày.' }, { heading: 'Lắp đặt', body: 'Lắp đặt miễn phí, bảo hành 5 năm.' }] },
  custom: { title: 'THIẾT KẾ SOFA THEO YÊU CẦU', subtitle: 'Sofa pastel pop theo kích thước, màu, vật liệu riêng.', content: [{ heading: 'Tư vấn', body: 'Tư vấn kích thước, màu, vật liệu.' }, { heading: 'Thiết kế', body: 'Thiết kế 3D riêng cho bạn.' }, { heading: 'Sản xuất', body: 'Sản xuất 7-14 ngày làm việc.' }] },
  '3d': { title: 'THIẾT KẾ 3D', subtitle: 'Bản vẽ 3D chi tiết trong 24h.', content: [{ heading: 'Thiết kế 3D', body: 'Bản vẽ 3D sofa pastel pop, render chất lượng cao.' }, { heading: 'Sửa đổi', body: 'Sửa đổi bản vẽ đến khi hài lòng.' }] },
  consult: { title: 'TƯ VẤN BỐ TRÍ NỘI THẤT', subtitle: 'Tư vấn sắp xếp không gian pastel pop tối ưu.', content: [{ heading: 'Khảo sát', body: 'Khảo sát không gian thực tế.' }, { heading: 'Tư vấn', body: 'Tư vấn bố trí sofa, phụ kiện pastel pop.' }] },
};

export default function Page() {
  const params = useParams();
  const sub = params.sub || 'default';
  const data = DESIGN_SERVICES[sub] || DESIGN_SERVICES.default;

  return (
    <>
      <Helmet><title>{data.title} — Sofa14</title></Helmet>
      <Sofa14PageHero overline="DỊCH VỤ" title={<><span>{data.title}</span></>} subtitle={data.subtitle} image={SOFA14_PAGE_IMAGES.service1} />

      <Sofa14Section>
        <Grid container spacing={5} alignItems="center">
          <Grid xs={12} md={6}>
            <Box sx={{ overflow: 'hidden', aspectRatio: '4/3', borderRadius: '32px', border: `8px solid ${SOFA14_COLORS.white}`, boxShadow: `0 16px 0 -6px ${sofa14Alpha(SOFA14_COLORS.mint, 0.4)}` }}>
              <Box component="img" src={SOFA14_PAGE_IMAGES.service1} alt={data.title} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3}>
              {data.content.map((item, i) => (
                <Sofa14Card key={i} accent={[SOFA14_COLORS.mint, SOFA14_COLORS.sky, SOFA14_COLORS.coral, SOFA14_COLORS.butter][i % 4]}>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box sx={{ width: 10, height: 10, mt: 1.5, borderRadius: '50%', bgcolor: SOFA14_COLORS.coralDeep, flexShrink: 0 }} />
                    <Stack spacing={1}>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: SOFA14_COLORS.ink }}>{item.heading}</Typography>
                      <Typography sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.8), lineHeight: 1.9 }}>{item.body}</Typography>
                    </Stack>
                  </Stack>
                </Sofa14Card>
              ))}
              <Button component={RouterLink} href="/sofa14/showrooms/visit" size="large" variant="contained" startIcon={<Iconify icon="solar:phone-bold-duotone" />} sx={{ alignSelf: 'flex-start', borderRadius: 99, px: 4, py: 1.75, fontWeight: 800, color: SOFA14_COLORS.ink, bgcolor: SOFA14_COLORS.mint, boxShadow: `0 8px 0 ${SOFA14_COLORS.mintDeep}`, '&:hover': { bgcolor: SOFA14_COLORS.mint, transform: 'translateY(2px)', boxShadow: `0 6px 0 ${SOFA14_COLORS.mintDeep}` } }}>Đặt lịch tư vấn</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa14Section>
    </>
  );
}
