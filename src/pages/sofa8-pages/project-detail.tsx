import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';
import { useTheme } from '@mui/material/styles';

import { useParams } from 'react-router-dom';

import { varAlpha } from 'src/theme/styles';
import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

import { SOFA8_COLORS } from 'src/sections/sofa8/sofa8-data';
import { Sofa8PageHero, Sofa8Section } from 'src/sections/sofa8-pages/sofa8-page-hero';
import {
  SOFA8_PAGE_PROJECTS,
  SOFA8_PAGE_PRODUCTS,
  SOFA8_PAGE_IMAGES,
  formatSofa8Price,
} from 'src/sections/sofa8-pages/sofa8-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const id = params.id || '';
  const project = SOFA8_PAGE_PROJECTS.find((p) => p.id === id) || SOFA8_PAGE_PROJECTS[0];

  return (
    <>
      <Helmet>
        <title>{project.name} — Sofa8</title>
      </Helmet>

      <Sofa8PageHero
        overline="CHI TIẾT DỰ ÁN"
        title={<><span>{project.name.toUpperCase()}</span></>}
        subtitle={`${project.typeLabel} · ${project.location} · ${project.year}`}
        image={project.image}
      />

      <Sofa8Section>
        <Grid container spacing={5}>
          <Grid xs={12} md={8}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Box sx={{ overflow: 'hidden', borderRadius: 3, aspectRatio: '16/9' }}>
                <Box component="img" src={project.image} alt={project.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
              </Box>
              <Stack spacing={2}>
                <Typography variant="h4" sx={{ fontWeight: 'fontWeightBold' }}>Mô tả dự án</Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{project.description}</Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  Dự án {project.name} là minh chứng cho chất lượng và thẩm mỹ coastal của Sofa8. Với tone biển, linen thoáng và bouclé êm, mỗi không gian đều mang lại cảm giác thư giãn tuyệt đối.
                </Typography>
              </Stack>

              <Stack spacing={2}>
                <Typography variant="h5" sx={{ fontWeight: 'fontWeightBold' }}>Album ảnh</Typography>
                <Grid container spacing={2}>
                  {[SOFA8_PAGE_IMAGES.project1, SOFA8_PAGE_IMAGES.project2, SOFA8_PAGE_IMAGES.project3, SOFA8_PAGE_IMAGES.project4].map((img, i) => (
                    <Grid key={i} xs={6} md={3}>
                      <Box sx={{ overflow: 'hidden', borderRadius: 2, aspectRatio: '1/1' }}>
                        <Box component="img" src={img} alt={`Album ${i}`} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Stack>

              <Stack spacing={2}>
                <Typography variant="h5" sx={{ fontWeight: 'fontWeightBold' }}>Đánh giá khách hàng</Typography>
                <Stack spacing={2} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` }}>
                  <Rating value={5} readOnly />
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>"Sofa8 đã biến không gian của chúng tôi thành một resort coastal thực sự. Linen mát, tone biển hoàn hảo. Khách hàng đều khen ngợi!"</Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightBold' }}>— Chủ dự án {project.name}</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>

          <Grid xs={12} md={4}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Stack spacing={2} sx={{ p: 3, borderRadius: 3, bgcolor: 'background.paper', border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` }}>
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold' }}>Thông tin dự án</Typography>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Loại</Typography><Typography sx={{ fontWeight: 'fontWeightBold' }}>{project.typeLabel}</Typography></Stack>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Địa điểm</Typography><Typography sx={{ fontWeight: 'fontWeightBold' }}>{project.location}</Typography></Stack>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Năm</Typography><Typography sx={{ fontWeight: 'fontWeightBold' }}>{project.year}</Typography></Stack>
              </Stack>

              <Stack spacing={2}>
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold' }}>Sản phẩm sử dụng</Typography>
                {SOFA8_PAGE_PRODUCTS.slice(0, 3).map((p) => (
                  <Stack key={p.id} component={RouterLink} href={`/sofa8/products/${p.slug}`} direction="row" spacing={2} sx={{ textDecoration: 'none', '&:hover .p-name': { color: SOFA8_COLORS.coral } }}>
                    <Box sx={{ width: 60, height: 60, borderRadius: 2, overflow: 'hidden', flexShrink: 0 }}>
                      <Box component="img" src={p.image} alt={p.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
                    </Box>
                    <Stack spacing={0.5} justifyContent="center">
                      <Typography className="p-name" variant="body2" sx={{ fontWeight: 'fontWeightBold', color: 'text.primary', transition: 'color 0.2s' }}>{p.name}</Typography>
                      <Typography variant="caption" sx={{ color: SOFA8_COLORS.ocean, fontWeight: 'fontWeightBold' }}>{formatSofa8Price(p.price)}</Typography>
                    </Stack>
                  </Stack>
                ))}
              </Stack>

              <Button component={RouterLink} href="/sofa8/showrooms/visit" size="large" variant="contained" fullWidth startIcon={<Iconify icon="solar:phone-bold-duotone" />} sx={{ bgcolor: SOFA8_COLORS.coral, color: 'common.white', fontWeight: 'fontWeightBold', '&:hover': { bgcolor: SOFA8_COLORS.coralLight } }}>
                Tư vấn dự án tương tự
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa8Section>
    </>
  );
}
