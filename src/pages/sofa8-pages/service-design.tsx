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

import { SOFA8_COLORS } from 'src/sections/sofa8/sofa8-data';
import { Sofa8PageHero, Sofa8Section } from 'src/sections/sofa8-pages/sofa8-page-hero';
import { SOFA8_PAGE_IMAGES } from 'src/sections/sofa8-pages/sofa8-pages-data';

const DESIGN_SERVICES: Record<string, { title: string; subtitle: string; content: { heading: string; body: string }[] }> = {
  default: {
    title: 'THIẾT KẾ NỘI THẤT',
    subtitle: 'Thiết kế không gian coastal tổng thể — từ ý tưởng đến hiện thực.',
    content: [
      { heading: 'Tư vấn', body: 'Tư vấn phong cách coastal, tone biển, chất liệu phù hợp.' },
      { heading: 'Thiết kế 3D', body: 'Bản vẽ 3D chi tiết trước khi sản xuất.' },
      { heading: 'Sản xuất', body: 'Sản xuất sofa theo bản vẽ, 7-14 ngày.' },
      { heading: 'Lắp đặt', body: 'Lắp đặt miễn phí, bảo hành 7 năm.' },
    ],
  },
  custom: {
    title: 'THIẾT KẾ SOFA THEO YÊU CẦU',
    subtitle: 'Sofa coastal theo kích thước, màu sắc, chất liệu riêng.',
    content: [
      { heading: 'Tư vấn', body: 'Tư vấn kích thước, chất liệu, tone biển.' },
      { heading: 'Thiết kế', body: 'Thiết kế 3D riêng cho bạn.' },
      { heading: 'Sản xuất', body: 'Sản xuất 7-14 ngày làm việc.' },
    ],
  },
  '3d': {
    title: 'THIẾT KẾ 3D',
    subtitle: 'Bản vẽ 3D chi tiết trước khi sản xuất.',
    content: [
      { heading: 'Thiết kế 3D', body: 'Bản vẽ 3D sofa coastal, render chất lượng cao.' },
      { heading: 'Sửa đổi', body: 'Sửa đổi bản vẽ đến khi hài lòng.' },
    ],
  },
  consult: {
    title: 'TƯ VẤN BỐ TRÍ NỘI THẤT',
    subtitle: 'Tư vấn sắp xếp không gian coastal tối ưu.',
    content: [
      { heading: 'Khảo sát', body: 'Khảo sát không gian thực tế.' },
      { heading: 'Tư vấn', body: 'Tư vấn bố trí sofa, phụ kiện coastal.' },
    ],
  },
};

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const sub = params.sub || 'default';
  const data = DESIGN_SERVICES[sub] || DESIGN_SERVICES.default;

  return (
    <>
      <Helmet>
        <title>{data.title} — Sofa8</title>
      </Helmet>

      <Sofa8PageHero overline="DỊCH VỤ" title={<><span>{data.title}</span></>} subtitle={data.subtitle} image={SOFA8_PAGE_IMAGES.service1} />

      <Sofa8Section>
        <Grid container spacing={5} alignItems="center">
          <Grid xs={12} md={6}>
            <Box sx={{ overflow: 'hidden', borderRadius: 3, aspectRatio: '4/3' }}>
              <Box component="img" src={SOFA8_PAGE_IMAGES.service1} alt={data.title} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3}>
              {data.content.map((item, i) => (
                <Stack key={i} direction="row" spacing={2} alignItems="flex-start">
                  <Box sx={{ width: 6, height: 6, mt: 1.5, borderRadius: '50%', bgcolor: SOFA8_COLORS.coral, flexShrink: 0 }} />
                  <Stack spacing={1}>
                    <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold', color: SOFA8_COLORS.ocean }}>{item.heading}</Typography>
                    <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{item.body}</Typography>
                  </Stack>
                </Stack>
              ))}
              <Button component={RouterLink} href="/sofa8/showrooms/visit" size="large" variant="contained" startIcon={<Iconify icon="solar:phone-bold-duotone" />} sx={{ alignSelf: 'flex-start', bgcolor: SOFA8_COLORS.coral, color: 'common.white', fontWeight: 'fontWeightBold', '&:hover': { bgcolor: SOFA8_COLORS.coralLight } }}>
                Đặt lịch tư vấn
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa8Section>
    </>
  );
}
