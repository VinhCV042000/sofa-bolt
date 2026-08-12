import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA16_COLORS } from 'src/sections/sofa16/sofa16-data';
import { Sofa16Card, Sofa16Section, Sofa16PageHero } from 'src/sections/sofa16-pages/sofa16-page-hero';
import { sofa16FormatPrice, SOFA16_PAGE_PROJECTS, SOFA16_PAGE_PRODUCTS } from 'src/sections/sofa16-pages/sofa16-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const id = params.id || '';
  const project = SOFA16_PAGE_PROJECTS.find((p) => p.id === id) || SOFA16_PAGE_PROJECTS[0];

  return (
    <>
      <Helmet><title>{project.name} — Sofa16</title></Helmet>
      <Sofa16PageHero overline="CHI TIẾT DỰ ÁN" title={<span>{project.name.toUpperCase()}</span>} subtitle={`${project.typeLabel} · ${project.location} · ${project.year}`} image={project.image} />

      <Sofa16Section bg="cream">
        <Grid container spacing={5}>
          <Grid xs={12} md={8}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Box sx={{ overflow: 'hidden', aspectRatio: '16/9', borderRadius: 3 }}>
                <Box component="img" src={project.image} alt={project.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
              </Box>
              <Stack spacing={2}>
                <Typography variant="h4" sx={{ fontWeight: 'fontWeightLight', color: SOFA16_COLORS.ink, fontFamily: theme.typography.fontSecondaryFamily }}>Mô tả dự án</Typography>
                <Typography sx={{ color: SOFA16_COLORS.inkSoft, lineHeight: 1.9, fontWeight: 'fontWeightLight' }}>{project.description}</Typography>
                <Typography sx={{ color: SOFA16_COLORS.inkSoft, lineHeight: 1.9, fontWeight: 'fontWeightLight' }}>Dự án {project.name} là minh chứng cho chất lượng và thẩm mỹ Mediterranean của Sofa16. Terracotta, cream, olive — Riviera!</Typography>
              </Stack>
              <Stack spacing={2}>
                <Typography variant="h5" sx={{ fontWeight: 'fontWeightMedium', color: SOFA16_COLORS.terracottaDeep }}>Album ảnh</Typography>
                <Grid container spacing={2}>
                  {[SOFA16_PAGE_PROJECTS[0].image, SOFA16_PAGE_PROJECTS[1].image, SOFA16_PAGE_PROJECTS[2].image, SOFA16_PAGE_PROJECTS[3].image].map((img, i) => (
                    <Grid key={i} xs={6} md={3}><Box sx={{ overflow: 'hidden', aspectRatio: '1/1', borderRadius: 2 }}><Box component="img" src={img} alt={`Album ${i}`} sx={{ width: 1, height: 1, objectFit: 'cover' }} /></Box></Grid>
                  ))}
                </Grid>
              </Stack>
              <Sofa16Card accent={SOFA16_COLORS.terracotta}>
                <Stack spacing={2}>
                  <Typography variant="h5" sx={{ fontWeight: 'fontWeightMedium', color: SOFA16_COLORS.terracottaDeep }}>Đánh giá khách hàng</Typography>
                  <Rating value={5} readOnly sx={{ '& .MuiRating-iconFilled': { color: SOFA16_COLORS.terracotta } }} />
                  <Typography sx={{ color: SOFA16_COLORS.inkSoft, lineHeight: 1.9, fontWeight: 'fontWeightLight' }}>&ldquo;Sofa16 đã biến không gian của chúng tôi thành một nơi ấm áp. Linen terracotta, olive — tuyệt tác Riviera!&rdquo;</Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightMedium', color: SOFA16_COLORS.ink }}>— Chủ dự án {project.name}</Typography>
                </Stack>
              </Sofa16Card>
            </Stack>
          </Grid>
          <Grid xs={12} md={4}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Sofa16Card accent={SOFA16_COLORS.terracotta}>
                <Stack spacing={2}>
                  <Typography variant="h6" sx={{ fontWeight: 'fontWeightMedium', color: SOFA16_COLORS.terracottaDeep }}>Thông tin dự án</Typography>
                  <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: SOFA16_COLORS.inkSoft }}>Loại</Typography><Typography sx={{ fontWeight: 'fontWeightMedium', color: SOFA16_COLORS.ink }}>{project.typeLabel}</Typography></Stack>
                  <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: SOFA16_COLORS.inkSoft }}>Địa điểm</Typography><Typography sx={{ fontWeight: 'fontWeightMedium', color: SOFA16_COLORS.ink }}>{project.location}</Typography></Stack>
                  <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: SOFA16_COLORS.inkSoft }}>Năm</Typography><Typography sx={{ fontWeight: 'fontWeightMedium', color: SOFA16_COLORS.ink }}>{project.year}</Typography></Stack>
                </Stack>
              </Sofa16Card>
              <Stack spacing={2}>
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightMedium', color: SOFA16_COLORS.terracottaDeep }}>Sản phẩm sử dụng</Typography>
                {SOFA16_PAGE_PRODUCTS.slice(0, 3).map((p) => (
                  <Stack key={p.id} component={RouterLink} href={`/sofa16/products/${p.slug}`} direction="row" spacing={2} sx={{ textDecoration: 'none', '&:hover .p-name': { color: SOFA16_COLORS.terracotta } }}>
                    <Box sx={{ width: 50, height: 50, overflow: 'hidden', flexShrink: 0, borderRadius: 1 }}><Box component="img" src={p.image} alt={p.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} /></Box>
                    <Stack spacing={0.5} justifyContent="center">
                      <Typography className="p-name" variant="body2" sx={{ fontWeight: 'fontWeightMedium', color: SOFA16_COLORS.ink, transition: 'color 0.2s' }}>{p.name}</Typography>
                      <Typography variant="caption" sx={{ fontWeight: 'fontWeightMedium', ...textGradient(`90deg, ${SOFA16_COLORS.terracotta} 0%, ${SOFA16_COLORS.terracottaDeep} 100%`) }}>{sofa16FormatPrice(p.price)}</Typography>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
              <Button component={RouterLink} href="/sofa16/showrooms/visit" size="large" variant="contained" fullWidth startIcon={<Iconify icon="solar:phone-bold-duotone" />} sx={{ borderRadius: 2, fontWeight: 'fontWeightMedium', color: 'common.white', bgcolor: SOFA16_COLORS.terracotta, '&:hover': { bgcolor: SOFA16_COLORS.terracottaDeep } }}>Tư vấn dự án tương tự</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa16Section>
    </>
  );
}
