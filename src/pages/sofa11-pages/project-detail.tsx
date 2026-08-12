import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { sofa11Alpha, SOFA11_COLORS } from 'src/sections/sofa11/sofa11-data';
import { Sofa11Section, Sofa11PageHero } from 'src/sections/sofa11-pages/sofa11-page-hero';
import { formatSofa11Price, SOFA11_PAGE_PROJECTS, SOFA11_PAGE_PRODUCTS } from 'src/sections/sofa11-pages/sofa11-pages-data';

export default function Page() {
  const params = useParams();
  const id = params.id || '';
  const project = SOFA11_PAGE_PROJECTS.find((p) => p.id === id) || SOFA11_PAGE_PROJECTS[0];

  return (
    <>
      <Helmet><title>{project.name} — Sofa11</title></Helmet>
      <Sofa11PageHero overline="CHI TIẾT DỰ ÁN" title={<span>{project.name.toUpperCase()}</span>} subtitle={`${project.typeLabel} · ${project.location} · ${project.year}`} image={project.image} />

      <Sofa11Section>
        <Grid container spacing={5}>
          <Grid xs={12} md={8}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Box sx={{ overflow: 'hidden', borderRadius: '24px 24px 24px 0', aspectRatio: '16/9', border: `3px solid ${sofa11Alpha(SOFA11_COLORS.magenta, 0.3)}` }}>
                <Box component="img" src={project.image} alt={project.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
              </Box>
              <Stack spacing={2}>
                <Typography variant="h4" sx={{ fontWeight: 900, color: SOFA11_COLORS.cream, textTransform: 'uppercase' }}>Mô tả dự án</Typography>
                <Typography sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.6), lineHeight: 1.8 }}>{project.description}</Typography>
                <Typography sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.6), lineHeight: 1.8 }}>Dự án {project.name} là minh chứng cho chất lượng và thẩm mỹ neon pop của Sofa11. Màu chói, dáng cong, module ghép — bùng nổ!</Typography>
              </Stack>
              <Stack spacing={2}>
                <Typography variant="h5" sx={{ fontWeight: 900, color: SOFA11_COLORS.lime, textTransform: 'uppercase' }}>Album ảnh</Typography>
                <Grid container spacing={2}>
                  {[SOFA11_PAGE_PROJECTS[0].image, SOFA11_PAGE_PROJECTS[1].image, SOFA11_PAGE_PROJECTS[2].image, SOFA11_PAGE_PROJECTS[3].image].map((img, i) => (
                    <Grid key={i} xs={6} md={3}><Box sx={{ overflow: 'hidden', borderRadius: '12px 12px 12px 0', aspectRatio: '1/1', border: `2px solid ${sofa11Alpha(SOFA11_COLORS.cyan, 0.2)}` }}><Box component="img" src={img} alt={`Album ${i}`} sx={{ width: 1, height: 1, objectFit: 'cover' }} /></Box></Grid>
                  ))}
                </Grid>
              </Stack>
              <Stack spacing={2}>
                <Typography variant="h5" sx={{ fontWeight: 900, color: SOFA11_COLORS.lime, textTransform: 'uppercase' }}>Đánh giá khách hàng</Typography>
                <Stack spacing={2} sx={{ p: 3, borderRadius: '16px 16px 16px 0', bgcolor: sofa11Alpha(SOFA11_COLORS.grape, 0.5), border: `1px solid ${sofa11Alpha(SOFA11_COLORS.cream, 0.08)}` }}>
                  <Rating value={5} readOnly sx={{ '& .MuiRating-iconFilled': { color: SOFA11_COLORS.lime } }} />
                  <Typography sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.6), lineHeight: 1.8 }}>&ldquo;Sofa11 đã biến phòng khách của chúng tôi thành một không gian bùng nổ. Màu chói, dáng cong — khách đến chơi đều phải chụp ảnh!&rdquo;</Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 900, color: SOFA11_COLORS.cream }}>— Chủ dự án {project.name}</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} md={4}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Stack spacing={2} sx={{ p: 3, borderRadius: '16px 16px 16px 0', bgcolor: sofa11Alpha(SOFA11_COLORS.grape, 0.5), border: `1px solid ${sofa11Alpha(SOFA11_COLORS.cream, 0.08)}` }}>
                <Typography variant="h6" sx={{ fontWeight: 900, color: SOFA11_COLORS.lime, textTransform: 'uppercase' }}>Thông tin dự án</Typography>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.5) }}>Loại</Typography><Typography sx={{ fontWeight: 800, color: SOFA11_COLORS.cream }}>{project.typeLabel}</Typography></Stack>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.5) }}>Địa điểm</Typography><Typography sx={{ fontWeight: 800, color: SOFA11_COLORS.cream }}>{project.location}</Typography></Stack>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.5) }}>Năm</Typography><Typography sx={{ fontWeight: 800, color: SOFA11_COLORS.cream }}>{project.year}</Typography></Stack>
              </Stack>
              <Stack spacing={2}>
                <Typography variant="h6" sx={{ fontWeight: 900, color: SOFA11_COLORS.lime, textTransform: 'uppercase' }}>Sản phẩm sử dụng</Typography>
                {SOFA11_PAGE_PRODUCTS.slice(0, 3).map((p) => (
                  <Stack key={p.id} component={RouterLink} href={`/sofa11/products/${p.slug}`} direction="row" spacing={2} sx={{ textDecoration: 'none', '&:hover .p-name': { color: SOFA11_COLORS.lime } }}>
                    <Box sx={{ width: 50, height: 50, borderRadius: '8px 8px 8px 0', overflow: 'hidden', flexShrink: 0, border: `2px solid ${sofa11Alpha(p.colors[0], 0.3)}` }}><Box component="img" src={p.image} alt={p.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} /></Box>
                    <Stack spacing={0.5} justifyContent="center">
                      <Typography className="p-name" variant="body2" sx={{ fontWeight: 900, color: SOFA11_COLORS.cream, textTransform: 'uppercase', transition: 'color 0.2s' }}>{p.name}</Typography>
                      <Typography variant="caption" sx={{ color: SOFA11_COLORS.magenta, fontWeight: 900 }}>{formatSofa11Price(p.price)}</Typography>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
              <Button component={RouterLink} href="/sofa11/showrooms/visit" size="large" variant="contained" fullWidth startIcon={<Iconify icon="solar:phone-bold-duotone" />} sx={{ borderRadius: 99, fontWeight: 900, textTransform: 'uppercase', color: SOFA11_COLORS.void, bgcolor: SOFA11_COLORS.lime, boxShadow: `0 0 32px ${sofa11Alpha(SOFA11_COLORS.lime, 0.5)}`, '&:hover': { bgcolor: SOFA11_COLORS.cyan, transform: 'translateY(-2px)' }, transition: 'all .25s' }}>Tư vấn dự án tương tự</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa11Section>
    </>
  );
}
