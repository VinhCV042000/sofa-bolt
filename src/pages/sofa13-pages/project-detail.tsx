import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

import { useParams } from 'react-router-dom';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

import { sofa13Alpha, SOFA13_COLORS } from 'src/sections/sofa13/sofa13-data';
import { Sofa13PageHero, Sofa13Section } from 'src/sections/sofa13-pages/sofa13-page-hero';
import { SOFA13_PAGE_PROJECTS, SOFA13_PAGE_PRODUCTS, sofa13FormatPrice } from 'src/sections/sofa13-pages/sofa13-pages-data';

export default function Page() {
  const params = useParams();
  const id = params.id || '';
  const project = SOFA13_PAGE_PROJECTS.find((p) => p.id === id) || SOFA13_PAGE_PROJECTS[0];

  return (
    <>
      <Helmet><title>{project.name} — Sofa13</title></Helmet>
      <Sofa13PageHero overline="CHI TIẾT DỰ ÁN" title={<><span>{project.name.toUpperCase()}</span></>} subtitle={`${project.typeLabel} · ${project.location} · ${project.year}`} image={project.image} />

      <Sofa13Section>
        <Grid container spacing={5}>
          <Grid xs={12} md={8}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Box sx={{ overflow: 'hidden', aspectRatio: '16/9', border: `2px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.3)}`, p: '8px', bgcolor: SOFA13_COLORS.charcoal }}>
                <Box component="img" src={project.image} alt={project.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
              </Box>
              <Stack spacing={2}>
                <Typography variant="h4" sx={{ fontWeight: 400, letterSpacing: 1, color: SOFA13_COLORS.ivory }}>Mô tả dự án</Typography>
                <Typography sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.6), lineHeight: 1.9 }}>{project.description}</Typography>
                <Typography sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.6), lineHeight: 1.9 }}>Dự án {project.name} là minh chứng cho chất lượng và thẩm mỹ art deco của Sofa13. Vàng trên noir, velvet và da Ý — jazz-age glamour!</Typography>
              </Stack>
              <Stack spacing={2}>
                <Typography variant="h5" sx={{ fontWeight: 700, color: SOFA13_COLORS.gold, letterSpacing: 1 }}>Album ảnh</Typography>
                <Grid container spacing={2}>
                  {[SOFA13_PAGE_PROJECTS[0].image, SOFA13_PAGE_PROJECTS[1].image, SOFA13_PAGE_PROJECTS[2].image, SOFA13_PAGE_PROJECTS[3].image].map((img, i) => (
                    <Grid key={i} xs={6} md={3}><Box sx={{ overflow: 'hidden', aspectRatio: '1/1', border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.2)}` }}><Box component="img" src={img} alt={`Album ${i}`} sx={{ width: 1, height: 1, objectFit: 'cover' }} /></Box></Grid>
                  ))}
                </Grid>
              </Stack>
              <Stack spacing={2}>
                <Typography variant="h5" sx={{ fontWeight: 700, color: SOFA13_COLORS.gold, letterSpacing: 1 }}>Đánh giá khách hàng</Typography>
                <Stack spacing={2} sx={{ p: 3, border: `1px solid ${sofa13Alpha(SOFA13_COLORS.ivory, 0.08)}`, bgcolor: sofa13Alpha(SOFA13_COLORS.charcoal, 0.5) }}>
                  <Rating value={5} readOnly sx={{ '& .MuiRating-iconFilled': { color: SOFA13_COLORS.gold } }} />
                  <Typography sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.6), lineHeight: 1.9 }}>"Sofa13 đã biến không gian của chúng tôi thành một salon art deco. Velvet vàng, da Ý — tuyệt đẹp!"</Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: SOFA13_COLORS.ivory }}>— Chủ dự án {project.name}</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} md={4}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Stack spacing={2} sx={{ p: 3, border: `1px solid ${sofa13Alpha(SOFA13_COLORS.ivory, 0.08)}`, bgcolor: sofa13Alpha(SOFA13_COLORS.charcoal, 0.5) }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: SOFA13_COLORS.gold, letterSpacing: 1 }}>Thông tin dự án</Typography>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) }}>Loại</Typography><Typography sx={{ fontWeight: 700, color: SOFA13_COLORS.ivory }}>{project.typeLabel}</Typography></Stack>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) }}>Địa điểm</Typography><Typography sx={{ fontWeight: 700, color: SOFA13_COLORS.ivory }}>{project.location}</Typography></Stack>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) }}>Năm</Typography><Typography sx={{ fontWeight: 700, color: SOFA13_COLORS.ivory }}>{project.year}</Typography></Stack>
              </Stack>
              <Stack spacing={2}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: SOFA13_COLORS.gold, letterSpacing: 1 }}>Sản phẩm sử dụng</Typography>
                {SOFA13_PAGE_PRODUCTS.slice(0, 3).map((p) => (
                  <Stack key={p.id} component={RouterLink} href={`/sofa13/products/${p.slug}`} direction="row" spacing={2} sx={{ textDecoration: 'none', '&:hover .p-name': { color: SOFA13_COLORS.gold } }}>
                    <Box sx={{ width: 50, height: 50, overflow: 'hidden', flexShrink: 0, border: `1px solid ${sofa13Alpha(p.colors[0], 0.3)}` }}><Box component="img" src={p.image} alt={p.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} /></Box>
                    <Stack spacing={0.5} justifyContent="center">
                      <Typography className="p-name" variant="body2" sx={{ fontWeight: 700, color: SOFA13_COLORS.ivory, letterSpacing: 1, transition: 'color 0.2s' }}>{p.name}</Typography>
                      <Typography variant="caption" sx={{ color: SOFA13_COLORS.gold, fontWeight: 700 }}>{sofa13FormatPrice(p.price)}</Typography>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
              <Button component={RouterLink} href="/sofa13/showrooms/visit" size="large" variant="contained" fullWidth startIcon={<Iconify icon="solar:phone-bold-duotone" />} sx={{ borderRadius: 0, fontWeight: 700, letterSpacing: 1.5, color: SOFA13_COLORS.noir, bgcolor: SOFA13_COLORS.gold, '&:hover': { bgcolor: SOFA13_COLORS.goldPale } }}>Tư vấn dự án tương tự</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa13Section>
    </>
  );
}
