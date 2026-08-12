import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { SOFA10_COLORS } from 'src/sections/sofa10/sofa10-data';
import { SOFA10_PAGE_IMAGES } from 'src/sections/sofa10-pages/sofa10-pages-data';
import { Sofa10Section, Sofa10PageHero } from 'src/sections/sofa10-pages/sofa10-page-hero';

const DESIGN_SERVICES: Record<
  string,
  { title: string; subtitle: string; content: { heading: string; body: string }[] }
> = {
  default: {
    title: 'THIẾT KẾ NỘI THẤT',
    subtitle: 'Thiết kế không gian wabi-sabi tổng thể — từ ý tưởng đến tĩnh tại.',
    content: [
      { heading: 'Tư vấn', body: 'Tư vấn phong cách wabi-sabi, tone trầm, vật liệu mộc.' },
      { heading: 'Thiết kế 3D', body: 'Bản vẽ 3D chi tiết trước khi sản xuất.' },
      { heading: 'Sản xuất', body: 'Sản xuất sofa theo bản vẽ, 7-14 ngày.' },
      { heading: 'Lắp đặt', body: 'Lắp đặt miễn phí, bảo hành 12 năm.' },
    ],
  },
  custom: {
    title: 'THIẾT KẾ SOFA THEO YÊU CẦU',
    subtitle: 'Sofa wabi-sabi theo kích thước, tone, vật liệu riêng.',
    content: [
      { heading: 'Tư vấn', body: 'Tư vấn kích thước, tone trầm, vật liệu mộc.' },
      { heading: 'Thiết kế', body: 'Thiết kế 3D riêng cho bạn.' },
      { heading: 'Sản xuất', body: 'Sản xuất 7-14 ngày làm việc.' },
    ],
  },
  '3d': {
    title: 'THIẾT KẾ 3D',
    subtitle: 'Bản vẽ 3D chi tiết trước khi sản xuất.',
    content: [
      { heading: 'Thiết kế 3D', body: 'Bản vẽ 3D sofa wabi-sabi, render chất lượng cao.' },
      { heading: 'Sửa đổi', body: 'Sửa đổi bản vẽ đến khi hài lòng.' },
    ],
  },
  consult: {
    title: 'TƯ VẤN BỐ TRÍ NỘI THẤT',
    subtitle: 'Tư vấn sắp xếp không gian wabi-sabi tối ưu.',
    content: [
      { heading: 'Khảo sát', body: 'Khảo sát không gian thực tế.' },
      { heading: 'Tư vấn', body: 'Tư vấn bố trí sofa, phụ kiện wabi-sabi.' },
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
        <title>{data.title} — Sofa10</title>
      </Helmet>
      <Sofa10PageHero
        overline="DỊCH VỤ"
        title={<span>{data.title}</span>}
        subtitle={data.subtitle}
        image={SOFA10_PAGE_IMAGES.service1}
      />
      <Sofa10Section>
        <Grid container spacing={5} alignItems="center">
          <Grid xs={12} md={6}>
            <Box sx={{ overflow: 'hidden', borderRadius: 2, aspectRatio: '4/3' }}>
              <Box
                component="img"
                src={SOFA10_PAGE_IMAGES.service1}
                alt={data.title}
                sx={{ width: 1, height: 1, objectFit: 'cover' }}
              />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3}>
              {data.content.map((item, i) => (
                <Stack key={i} direction="row" spacing={2} alignItems="flex-start">
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      mt: 1.5,
                      borderRadius: '50%',
                      bgcolor: SOFA10_COLORS.wood,
                      flexShrink: 0,
                    }}
                  />
                  <Stack spacing={1}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 'fontWeightNormal', color: SOFA10_COLORS.wood }}
                    >
                      {item.heading}
                    </Typography>
                    <Typography
                      sx={{ color: 'text.secondary', lineHeight: 2, fontWeight: 'fontWeightLight' }}
                    >
                      {item.body}
                    </Typography>
                  </Stack>
                </Stack>
              ))}
              <Button
                component={RouterLink}
                href="/sofa10/showrooms/visit"
                size="large"
                variant="contained"
                startIcon={<Iconify icon="solar:phone-bold-duotone" />}
                sx={{
                  alignSelf: 'flex-start',
                  borderRadius: 2,
                  bgcolor: SOFA10_COLORS.charcoal,
                  color: 'common.white',
                  fontWeight: 'fontWeightLight',
                  textTransform: 'none',
                  '&:hover': { bgcolor: SOFA10_COLORS.ink },
                }}
              >
                Đặt lịch tư vấn
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa10Section>
    </>
  );
}
