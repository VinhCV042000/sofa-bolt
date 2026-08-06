import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { useParams } from 'react-router-dom';

import { varAlpha } from 'src/theme/styles';
import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

import { SOFA9_COLORS } from 'src/sections/sofa9/sofa9-data';
import { Sofa9PageHero, Sofa9Section } from 'src/sections/sofa9-pages/sofa9-page-hero';
import { SOFA9_PAGE_IMAGES } from 'src/sections/sofa9-pages/sofa9-pages-data';

const DESIGN_SERVICES: Record<string, { title: string; subtitle: string; content: { heading: string; body: string }[] }> = {
  default: { title: 'THIẾT KẾ NỘI THẤT', subtitle: 'Thiết kế không gian retro tổng thể — từ ý tưởng đến hiện thực.', content: [{ heading: 'Tư vấn', body: 'Tư vấn phong cách retro, màu neon, họa tiết.' }, { heading: 'Thiết kế 3D', body: 'Bản vẽ 3D chi tiết trước khi sản xuất.' }, { heading: 'Sản xuất', body: 'Sản xuất sofa theo bản vẽ, 7-14 ngày.' }, { heading: 'Lắp đặt', body: 'Lắp đặt miễn phí, bảo hành 10 năm.' }] },
  custom: { title: 'THIẾT KẾ SOFA THEO YÊU CẦU', subtitle: 'Sofa retro theo kích thước, màu sắc, họa tiết riêng.', content: [{ heading: 'Tư vấn', body: 'Tư vấn kích thước, màu neon, pattern.' }, { heading: 'Thiết kế', body: 'Thiết kế 3D riêng cho bạn.' }, { heading: 'Sản xuất', body: 'Sản xuất 7-14 ngày làm việc.' }] },
  '3d': { title: 'THIẾT KẾ 3D', subtitle: 'Bản vẽ 3D chi tiết trước khi sản xuất.', content: [{ heading: 'Thiết kế 3D', body: 'Bản vẽ 3D sofa retro, render chất lượng cao.' }, { heading: 'Sửa đổi', body: 'Sửa đổi bản vẽ đến khi hài lòng.' }] },
  consult: { title: 'TƯ VẤN BỐ TRÍ NỘI THẤT', subtitle: 'Tư vấn sắp xếp không gian retro tối ưu.', content: [{ heading: 'Khảo sát', body: 'Khảo sát không gian thực tế.' }, { heading: 'Tư vấn', body: 'Tư vấn bố trí sofa, phụ kiện retro.' }] },
};

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const sub = params.sub || 'default';
  const data = DESIGN_SERVICES[sub] || DESIGN_SERVICES.default;

  return (
    <>
      <Helmet>
        <title>{data.title} — Sofa9</title>
      </Helmet>

      <Sofa9PageHero overline="DỊCH VỤ" title={<><span>{data.title}</span></>} subtitle={data.subtitle} image={SOFA9_PAGE_IMAGES.service1} />

      <Sofa9Section>
        <Grid container spacing={5} alignItems="center">
          <Grid xs={12} md={6}>
            <Box sx={{ overflow: 'hidden', borderRadius: 3, aspectRatio: '4/3' }}>
              <Box component="img" src={SOFA9_PAGE_IMAGES.service1} alt={data.title} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3}>
              {data.content.map((item, i) => (
                <Stack key={i} direction="row" spacing={2} alignItems="flex-start">
                  <Box sx={{ width: 8, height: 8, mt: 1.5, borderRadius: '50%', bgcolor: SOFA9_COLORS.pink, flexShrink: 0 }} />
                  <Stack spacing={1}>
                    <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold', color: SOFA9_COLORS.pink }}>{item.heading}</Typography>
                    <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{item.body}</Typography>
                  </Stack>
                </Stack>
              ))}
              <Button component={RouterLink} href="/sofa9/showrooms/visit" size="large" variant="contained" startIcon={<Iconify icon="solar:phone-bold-duotone" />} sx={{ alignSelf: 'flex-start', borderRadius: 30, bgcolor: SOFA9_COLORS.pink, color: 'common.white', fontWeight: 'fontWeightBold', boxShadow: `0 4px 0 ${SOFA9_COLORS.black}`, '&:hover': { bgcolor: SOFA9_COLORS.pinkLight, boxShadow: `0 6px 0 ${SOFA9_COLORS.black}` } }}>Đặt lịch tư vấn</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa9Section>
    </>
  );
}
