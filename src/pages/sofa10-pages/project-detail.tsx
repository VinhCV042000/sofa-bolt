import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { useTheme } from '@mui/material/styles';

import { useParams } from 'react-router-dom';

import { varAlpha } from 'src/theme/styles';
import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

import { SOFA10_COLORS } from 'src/sections/sofa10/sofa10-data';
import { Sofa10PageHero, Sofa10Section } from 'src/sections/sofa10-pages/sofa10-page-hero';
import {
  SOFA10_PAGE_PROJECTS,
  SOFA10_PAGE_PRODUCTS,
  SOFA10_PAGE_IMAGES,
  formatSofa10Price,
} from 'src/sections/sofa10-pages/sofa10-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const id = params.id || '';
  const project = SOFA10_PAGE_PROJECTS.find((p) => p.id === id) || SOFA10_PAGE_PROJECTS[0];

  return (
    <>
      <Helmet><title>{project.name} — Sofa10</title></Helmet>
      <Sofa10PageHero overline="CHI TIẾT DỰ ÁN" title={<><span>{project.name.toUpperCase()}</span></>} subtitle={`${project.typeLabel} · ${project.location} · ${project.year}`} image={project.image} />
      <Sofa10Section>
        <Grid container spacing={5}>
          <Grid xs={12} md={8}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Box sx={{ overflow: 'hidden', borderRadius: 2, aspectRatio: '16/9' }}>
                <Box component="img" src={project.image} alt={project.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
              </Box>
              <Stack spacing={2}>
                <Typography variant="h4" sx={{ fontWeight: 'fontWeightLight' }}>Mô tả dự án</Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 2, fontWeight: 'fontWeightLight' }}>{project.description}</Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 2, fontWeight: 'fontWeightLight' }}>Dự án {project.name} là minh chứng cho chất lượng và thẩm mỹ wabi-sabi của Sofa10. Vật liệu mộc, tone trầm, sự tĩnh tại tuyệt đối.</Typography>
              </Stack>
              <Stack spacing={2}>
                <Typography variant="h5" sx={{ fontWeight: 'fontWeightNormal' }}>Album ảnh</Typography>
                <Grid container spacing={2}>
                  {[SOFA10_PAGE_IMAGES.project1, SOFA10_PAGE_IMAGES.project2, SOFA10_PAGE_IMAGES.project3, SOFA10_PAGE_IMAGES.project4].map((img, i) => (
                    <Grid key={i} xs={6} md={3}><Box sx={{ overflow: 'hidden', borderRadius: 1, aspectRatio: '1/1' }}><Box component="img" src={img} alt={`Album ${i}`} sx={{ width: 1, height: 1, objectFit: 'cover' }} /></Box></Grid>
                  ))}
                </Grid>
              </Stack>
              <Stack spacing={2}>
                <Typography variant="h5" sx={{ fontWeight: 'fontWeightNormal' }}>Đánh giá khách hàng</Typography>
                <Stack spacing={2} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.08)}` }}>
                  <Rating value={5} readOnly />
                  <Typography sx={{ color: 'text.secondary', lineHeight: 2, fontWeight: 'fontWeightLight' }}>"Sofa10 đã biến không gian của chúng tôi thành một nơi tĩnh tại tuyệt đối. Vật liệu mộc, tone trầm — khách hàng đều cảm thấy bình an."</Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightNormal' }}>— Chủ dự án {project.name}</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} md={4}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Stack spacing={2} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.08)}` }}>
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightNormal' }}>Thông tin dự án</Typography>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Loại</Typography><Typography sx={{ fontWeight: 'fontWeightNormal' }}>{project.typeLabel}</Typography></Stack>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Địa điểm</Typography><Typography sx={{ fontWeight: 'fontWeightNormal' }}>{project.location}</Typography></Stack>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Năm</Typography><Typography sx={{ fontWeight: 'fontWeightNormal' }}>{project.year}</Typography></Stack>
              </Stack>
              <Stack spacing={2}>
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightNormal' }}>Sản phẩm sử dụng</Typography>
                {SOFA10_PAGE_PRODUCTS.slice(0, 3).map((p) => (
                  <Stack key={p.id} component={RouterLink} href={`/sofa10/products/${p.slug}`} direction="row" spacing={2} sx={{ textDecoration: 'none', '&:hover .p-name': { color: SOFA10_COLORS.wood } }}>
                    <Box sx={{ width: 50, height: 50, borderRadius: 1, overflow: 'hidden', flexShrink: 0 }}><Box component="img" src={p.image} alt={p.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} /></Box>
                    <Stack spacing={0.5} justifyContent="center">
                      <Typography className="p-name" variant="body2" sx={{ fontWeight: 'fontWeightNormal', color: 'text.primary', transition: 'color 0.2s' }}>{p.name}</Typography>
                      <Typography variant="caption" sx={{ color: SOFA10_COLORS.wood, fontWeight: 'fontWeightNormal' }}>{formatSofa10Price(p.price)}</Typography>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
              <Button component={RouterLink} href="/sofa10/showrooms/visit" size="large" variant="contained" fullWidth startIcon={<Iconify icon="solar:phone-bold-duotone" />} sx={{ borderRadius: 2, bgcolor: SOFA10_COLORS.charcoal, color: 'common.white', fontWeight: 'fontWeightLight', textTransform: 'none', '&:hover': { bgcolor: SOFA10_COLORS.ink } }}>Tư vấn dự án tương tự</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa10Section>
    </>
  );
}
