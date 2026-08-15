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

import { sofa19Alpha, SOFA19_COLORS } from 'src/sections/sofa19/sofa19-data';
import { Sofa19Card, Sofa19Section, Sofa19PageHero } from 'src/sections/sofa19-pages/sofa19-page-hero';
import { sofa19FormatPrice, SOFA19_PAGE_PROJECTS, SOFA19_PAGE_PRODUCTS } from 'src/sections/sofa19-pages/sofa19-pages-data';

export default function Page() {
  const params = useParams();
  const id = params.id || '';
  const project = SOFA19_PAGE_PROJECTS.find((p) => p.id === id) || SOFA19_PAGE_PROJECTS[0];

  return (
    <>
      <Helmet><title>{project.name} — Sofa19</title></Helmet>
      <Sofa19PageHero overline="CHI TIẾT DỰ ÁN" title={<span>{project.name.toUpperCase()}</span>} subtitle={`${project.typeLabel} · ${project.location} · ${project.year}`} image={project.image} />

      <Sofa19Section>
        <Grid container spacing={5}>
          <Grid xs={12} md={8}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Box sx={{ overflow: 'hidden', aspectRatio: '16/9', borderRadius: '32px', border: `8px solid ${SOFA19_COLORS.white}`, boxShadow: `0 16px 0 -6px ${sofa19Alpha(SOFA19_COLORS.coral, 0.4)}` }}>
                <Box component="img" src={project.image} alt={project.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
              </Box>
              <Stack spacing={2}>
                <Typography variant="h4" sx={{ fontWeight: 800, color: SOFA19_COLORS.ink }}>Mô tả dự án</Typography>
                <Typography sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.8), lineHeight: 1.9 }}>{project.description}</Typography>
                <Typography sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.8), lineHeight: 1.9 }}>Dự án {project.name} là minh chứng cho chất lượng và thẩm mỹ pastel pop của Sofa19. Mint, sky, coral, butter — claymorphism!</Typography>
              </Stack>
              <Stack spacing={2}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: SOFA19_COLORS.coralDeep }}>Album ảnh</Typography>
                <Grid container spacing={2}>
                  {[SOFA19_PAGE_PROJECTS[0].image, SOFA19_PAGE_PROJECTS[1].image, SOFA19_PAGE_PROJECTS[2].image, SOFA19_PAGE_PROJECTS[3].image].map((img, i) => (
                    <Grid key={i} xs={6} md={3}><Box sx={{ overflow: 'hidden', aspectRatio: '1/1', borderRadius: '20px', border: `5px solid ${SOFA19_COLORS.white}`, boxShadow: `3px 3px 0 ${sofa19Alpha(SOFA19_COLORS.jungleLight, 0.4)}` }}><Box component="img" src={img} alt={`Album ${i}`} sx={{ width: 1, height: 1, objectFit: 'cover' }} /></Box></Grid>
                  ))}
                </Grid>
              </Stack>
              <Sofa19Card accent={SOFA19_COLORS.coral}>
                <Stack spacing={2}>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: SOFA19_COLORS.coralDeep }}>Đánh giá khách hàng</Typography>
                  <Rating value={5} readOnly sx={{ '& .MuiRating-iconFilled': { color: SOFA19_COLORS.coralDeep } }} />
                  <Typography sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.8), lineHeight: 1.9 }}>&ldquo;Sofa19 đã biến không gian của chúng tôi thành một nơi tươi sáng. Cotton pastel, nỉ êm — tuyệt đẹp!&rdquo;</Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: SOFA19_COLORS.ink }}>— Chủ dự án {project.name}</Typography>
                </Stack>
              </Sofa19Card>
            </Stack>
          </Grid>
          <Grid xs={12} md={4}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Sofa19Card accent={SOFA19_COLORS.jungleLight}>
                <Stack spacing={2}>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: SOFA19_COLORS.coralDeep }}>Thông tin dự án</Typography>
                  <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.7) }}>Loại</Typography><Typography sx={{ fontWeight: 800, color: SOFA19_COLORS.ink }}>{project.typeLabel}</Typography></Stack>
                  <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.7) }}>Địa điểm</Typography><Typography sx={{ fontWeight: 800, color: SOFA19_COLORS.ink }}>{project.location}</Typography></Stack>
                  <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.7) }}>Năm</Typography><Typography sx={{ fontWeight: 800, color: SOFA19_COLORS.ink }}>{project.year}</Typography></Stack>
                </Stack>
              </Sofa19Card>
              <Stack spacing={2}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: SOFA19_COLORS.coralDeep }}>Sản phẩm sử dụng</Typography>
                {SOFA19_PAGE_PRODUCTS.slice(0, 3).map((p) => (
                  <Stack key={p.id} component={RouterLink} href={`/sofa19/products/${p.slug}`} direction="row" spacing={2} sx={{ textDecoration: 'none', '&:hover .p-name': { color: SOFA19_COLORS.coralDeep } }}>
                    <Box sx={{ width: 50, height: 50, overflow: 'hidden', flexShrink: 0, borderRadius: '14px', border: `3px solid ${SOFA19_COLORS.white}`, boxShadow: `2px 2px 0 ${sofa19Alpha(p.colors[0], 0.4)}` }}><Box component="img" src={p.image} alt={p.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} /></Box>
                    <Stack spacing={0.5} justifyContent="center">
                      <Typography className="p-name" variant="body2" sx={{ fontWeight: 800, color: SOFA19_COLORS.ink, transition: 'color 0.2s' }}>{p.name}</Typography>
                      <Typography variant="caption" sx={{ color: SOFA19_COLORS.jungle, fontWeight: 800 }}>{sofa19FormatPrice(p.price)}</Typography>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
              <Button component={RouterLink} href="/sofa19/showrooms/visit" size="large" variant="contained" fullWidth startIcon={<Iconify icon="solar:phone-bold-duotone" />} sx={{ borderRadius: 99, fontWeight: 800, color: SOFA19_COLORS.ink, bgcolor: SOFA19_COLORS.jungleLight, boxShadow: `0 8px 0 ${SOFA19_COLORS.jungle}`, '&:hover': { bgcolor: SOFA19_COLORS.jungleLight, transform: 'translateY(2px)', boxShadow: `0 6px 0 ${SOFA19_COLORS.jungle}` } }}>Tư vấn dự án tương tự</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa19Section>
    </>
  );
}
