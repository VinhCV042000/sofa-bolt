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

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA15_COLORS } from 'src/sections/sofa15/sofa15-data';
import { Sofa15Card, Sofa15Section, Sofa15PageHero } from 'src/sections/sofa15-pages/sofa15-page-hero';
import { sofa15FormatPrice, SOFA15_PAGE_PROJECTS, SOFA15_PAGE_PRODUCTS } from 'src/sections/sofa15-pages/sofa15-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const id = params.id || '';
  const project = SOFA15_PAGE_PROJECTS.find((p) => p.id === id) || SOFA15_PAGE_PROJECTS[0];

  return (
    <>
      <Helmet><title>{project.name} — Sofa15</title></Helmet>
      <Sofa15PageHero overline="CHI TIẾT DỰ ÁN" title={<span>{project.name.toUpperCase()}</span>} subtitle={`${project.typeLabel} · ${project.location} · ${project.year}`} image={project.image} />

      <Sofa15Section bg="black">
        <Grid container spacing={5}>
          <Grid xs={12} md={8}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Box sx={{ overflow: 'hidden', aspectRatio: '16/9', border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.3)}` }}>
                <Box component="img" src={project.image} alt={project.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
              </Box>
              <Stack spacing={2}>
                <Typography variant="h4" sx={{ fontWeight: 'fontWeightLight', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily }}>Mô tả dự án</Typography>
                <Typography sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 1.9, fontWeight: 'fontWeightLight' }}>{project.description}</Typography>
                <Typography sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 1.9, fontWeight: 'fontWeightLight' }}>Dự án {project.name} là minh chứng cho chất lượng và thẩm mỹ Art Deco của Sofa15. Vàng, đen, ngọc lục bảo — Gatsby 1920s!</Typography>
              </Stack>
              <Stack spacing={2}>
                <Typography variant="h5" sx={{ fontWeight: 'fontWeightMedium', color: SOFA15_COLORS.gold }}>Album ảnh</Typography>
                <Grid container spacing={2}>
                  {[SOFA15_PAGE_PROJECTS[0].image, SOFA15_PAGE_PROJECTS[1].image, SOFA15_PAGE_PROJECTS[2].image, SOFA15_PAGE_PROJECTS[3].image].map((img, i) => (
                    <Grid key={i} xs={6} md={3}><Box sx={{ overflow: 'hidden', aspectRatio: '1/1', border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.2)}` }}><Box component="img" src={img} alt={`Album ${i}`} sx={{ width: 1, height: 1, objectFit: 'cover' }} /></Box></Grid>
                  ))}
                </Grid>
              </Stack>
              <Sofa15Card accent={SOFA15_COLORS.gold}>
                <Stack spacing={2}>
                  <Typography variant="h5" sx={{ fontWeight: 'fontWeightMedium', color: SOFA15_COLORS.gold }}>Đánh giá khách hàng</Typography>
                  <Rating value={5} readOnly sx={{ '& .MuiRating-iconFilled': { color: SOFA15_COLORS.gold } }} />
                  <Typography sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 1.9, fontWeight: 'fontWeightLight' }}>&ldquo;Sofa15 đã biến không gian của chúng tôi thành một nơi sang trọng. Da thật, velvet emerald — tuyệt tác Gatsby!&rdquo;</Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightMedium', color: 'common.white' }}>— Chủ dự án {project.name}</Typography>
                </Stack>
              </Sofa15Card>
            </Stack>
          </Grid>
          <Grid xs={12} md={4}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Sofa15Card accent={SOFA15_COLORS.gold}>
                <Stack spacing={2}>
                  <Typography variant="h6" sx={{ fontWeight: 'fontWeightMedium', color: SOFA15_COLORS.gold }}>Thông tin dự án</Typography>
                  <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: varAlpha('#FFFFFF', 0.4) }}>Loại</Typography><Typography sx={{ fontWeight: 'fontWeightMedium', color: 'common.white' }}>{project.typeLabel}</Typography></Stack>
                  <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: varAlpha('#FFFFFF', 0.4) }}>Địa điểm</Typography><Typography sx={{ fontWeight: 'fontWeightMedium', color: 'common.white' }}>{project.location}</Typography></Stack>
                  <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: varAlpha('#FFFFFF', 0.4) }}>Năm</Typography><Typography sx={{ fontWeight: 'fontWeightMedium', color: 'common.white' }}>{project.year}</Typography></Stack>
                </Stack>
              </Sofa15Card>
              <Stack spacing={2}>
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightMedium', color: SOFA15_COLORS.gold }}>Sản phẩm sử dụng</Typography>
                {SOFA15_PAGE_PRODUCTS.slice(0, 3).map((p) => (
                  <Stack key={p.id} component={RouterLink} href={`/sofa15/products/${p.slug}`} direction="row" spacing={2} sx={{ textDecoration: 'none', '&:hover .p-name': { color: SOFA15_COLORS.gold } }}>
                    <Box sx={{ width: 50, height: 50, overflow: 'hidden', flexShrink: 0, border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.2)}` }}><Box component="img" src={p.image} alt={p.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} /></Box>
                    <Stack spacing={0.5} justifyContent="center">
                      <Typography className="p-name" variant="body2" sx={{ fontWeight: 'fontWeightMedium', color: 'common.white', transition: 'color 0.2s' }}>{p.name}</Typography>
                      <Typography variant="caption" sx={{ fontWeight: 'fontWeightMedium', ...textGradient(`90deg, ${SOFA15_COLORS.goldLight} 0%, ${SOFA15_COLORS.gold} 50%, ${SOFA15_COLORS.goldDark} 100%`) }}>{sofa15FormatPrice(p.price)}</Typography>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
              <Button component={RouterLink} href="/sofa15/showrooms/visit" size="large" variant="contained" fullWidth startIcon={<Iconify icon="solar:phone-bold-duotone" />} sx={{ borderRadius: 0, fontWeight: 'fontWeightMedium', color: SOFA15_COLORS.black, bgcolor: SOFA15_COLORS.gold, border: `1px solid ${SOFA15_COLORS.gold}`, '&:hover': { bgcolor: SOFA15_COLORS.goldLight } }}>Tư vấn dự án tương tự</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa15Section>
    </>
  );
}
