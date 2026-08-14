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

import { SOFA17_COLORS } from 'src/sections/sofa17/sofa17-data';
import { Sofa17Card, Sofa17Section, Sofa17PageHero } from 'src/sections/sofa17-pages/sofa17-page-hero';
import { sofa17FormatPrice, SOFA17_PAGE_PROJECTS, SOFA17_PAGE_PRODUCTS } from 'src/sections/sofa17-pages/sofa17-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const id = params.id || '';
  const project = SOFA17_PAGE_PROJECTS.find((p) => p.id === id) || SOFA17_PAGE_PROJECTS[0];

  return (
    <>
      <Helmet><title>{project.name} — Sofa17</title></Helmet>
      <Sofa17PageHero overline="CHI TIẾT DỰ ÁN" title={<span>{project.name.toUpperCase()}</span>} subtitle={`${project.typeLabel} · ${project.location} · ${project.year}`} image={project.image} />

      <Sofa17Section bg="black">
        <Grid container spacing={5}>
          <Grid xs={12} md={8}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Box sx={{ overflow: 'hidden', aspectRatio: '16/9', border: `1px solid ${varAlpha(SOFA17_COLORS.gold, 0.3)}` }}>
                <Box component="img" src={project.image} alt={project.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
              </Box>
              <Stack spacing={2}>
                <Typography variant="h4" sx={{ fontWeight: 'fontWeightLight', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily }}>Mô tả dự án</Typography>
                <Typography sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 1.9, fontWeight: 'fontWeightLight' }}>{project.description}</Typography>
                <Typography sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 1.9, fontWeight: 'fontWeightLight' }}>Dự án {project.name} là minh chứng cho chất lượng và thẩm mỹ Riad Ma-rốc của Sofa17. Vàng, đen, xanh ngọc riad — Riad Marrakech!</Typography>
              </Stack>
              <Stack spacing={2}>
                <Typography variant="h5" sx={{ fontWeight: 'fontWeightMedium', color: SOFA17_COLORS.gold }}>Album ảnh</Typography>
                <Grid container spacing={2}>
                  {[SOFA17_PAGE_PROJECTS[0].image, SOFA17_PAGE_PROJECTS[1].image, SOFA17_PAGE_PROJECTS[2].image, SOFA17_PAGE_PROJECTS[3].image].map((img, i) => (
                    <Grid key={i} xs={6} md={3}><Box sx={{ overflow: 'hidden', aspectRatio: '1/1', border: `1px solid ${varAlpha(SOFA17_COLORS.gold, 0.2)}` }}><Box component="img" src={img} alt={`Album ${i}`} sx={{ width: 1, height: 1, objectFit: 'cover' }} /></Box></Grid>
                  ))}
                </Grid>
              </Stack>
              <Sofa17Card accent={SOFA17_COLORS.gold}>
                <Stack spacing={2}>
                  <Typography variant="h5" sx={{ fontWeight: 'fontWeightMedium', color: SOFA17_COLORS.gold }}>Đánh giá khách hàng</Typography>
                  <Rating value={5} readOnly sx={{ '& .MuiRating-iconFilled': { color: SOFA17_COLORS.gold } }} />
                  <Typography sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 1.9, fontWeight: 'fontWeightLight' }}>&ldquo;Sofa17 đã biến không gian của chúng tôi thành một nơi sang trọng. Da thật, dệt tay souk — tuyệt tác Riad!&rdquo;</Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightMedium', color: 'common.white' }}>— Chủ dự án {project.name}</Typography>
                </Stack>
              </Sofa17Card>
            </Stack>
          </Grid>
          <Grid xs={12} md={4}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Sofa17Card accent={SOFA17_COLORS.gold}>
                <Stack spacing={2}>
                  <Typography variant="h6" sx={{ fontWeight: 'fontWeightMedium', color: SOFA17_COLORS.gold }}>Thông tin dự án</Typography>
                  <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: varAlpha('#FFFFFF', 0.4) }}>Loại</Typography><Typography sx={{ fontWeight: 'fontWeightMedium', color: 'common.white' }}>{project.typeLabel}</Typography></Stack>
                  <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: varAlpha('#FFFFFF', 0.4) }}>Địa điểm</Typography><Typography sx={{ fontWeight: 'fontWeightMedium', color: 'common.white' }}>{project.location}</Typography></Stack>
                  <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: varAlpha('#FFFFFF', 0.4) }}>Năm</Typography><Typography sx={{ fontWeight: 'fontWeightMedium', color: 'common.white' }}>{project.year}</Typography></Stack>
                </Stack>
              </Sofa17Card>
              <Stack spacing={2}>
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightMedium', color: SOFA17_COLORS.gold }}>Sản phẩm sử dụng</Typography>
                {SOFA17_PAGE_PRODUCTS.slice(0, 3).map((p) => (
                  <Stack key={p.id} component={RouterLink} href={`/sofa17/products/${p.slug}`} direction="row" spacing={2} sx={{ textDecoration: 'none', '&:hover .p-name': { color: SOFA17_COLORS.gold } }}>
                    <Box sx={{ width: 50, height: 50, overflow: 'hidden', flexShrink: 0, border: `1px solid ${varAlpha(SOFA17_COLORS.gold, 0.2)}` }}><Box component="img" src={p.image} alt={p.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} /></Box>
                    <Stack spacing={0.5} justifyContent="center">
                      <Typography className="p-name" variant="body2" sx={{ fontWeight: 'fontWeightMedium', color: 'common.white', transition: 'color 0.2s' }}>{p.name}</Typography>
                      <Typography variant="caption" sx={{ fontWeight: 'fontWeightMedium', ...textGradient(`90deg, ${SOFA17_COLORS.goldLight} 0%, ${SOFA17_COLORS.gold} 50%, ${SOFA17_COLORS.goldDark} 100%`) }}>{sofa17FormatPrice(p.price)}</Typography>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
              <Button component={RouterLink} href="/sofa17/showrooms/visit" size="large" variant="contained" fullWidth startIcon={<Iconify icon="solar:phone-bold-duotone" />} sx={{ borderRadius: 0, fontWeight: 'fontWeightMedium', color: SOFA17_COLORS.black, bgcolor: SOFA17_COLORS.gold, border: `1px solid ${SOFA17_COLORS.gold}`, '&:hover': { bgcolor: SOFA17_COLORS.goldLight } }}>Tư vấn dự án tương tự</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa17Section>
    </>
  );
}
