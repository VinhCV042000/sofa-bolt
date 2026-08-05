import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa6PageHero, Sofa6Section } from 'src/sections/sofa6-pages/sofa6-page-hero';
import { SOFA6_PROJECTS, SOFA6_PRODUCTS, SOFA6_PAGE_IMAGES } from 'src/sections/sofa6-pages/sofa6-pages-data';
import { SOFA6_COLORS } from 'src/sections/sofa6/sofa6-data';

const metadata = { title: 'Chi tiết dự án - Sofa Earth' };

export default function Page() {
  const { id } = useParams();
  const project = SOFA6_PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <>
        <Helmet>
          <title>{metadata.title}</title>
        </Helmet>
        <Sofa6PageHero overline="Dự án" title="Không tìm thấy dự án" subtitle="Dự án bạn tìm không tồn tại." image={SOFA6_PAGE_IMAGES.aboutHero} />
        <Sofa6Section>
          <Stack spacing={2} alignItems="center" sx={{ py: 8, textAlign: 'center' }} component={MotionViewport}>
            <Iconify icon="solar:gallery-bold-duotone" width={64} sx={{ color: 'text.disabled' }} />
            <Typography variant="h6" sx={{ color: 'text.secondary' }}>Dự án không tồn tại</Typography>
            <Button component={RouterLink} href="/sofa6/projects" variant="outlined" sx={{ color: SOFA6_COLORS.terracotta, borderColor: SOFA6_COLORS.terracotta }}>Xem tất cả dự án</Button>
          </Stack>
        </Sofa6Section>
      </>
    );
  }

  const usedProducts = SOFA6_PRODUCTS.slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa6PageHero overline="Dự án" title={project.name} subtitle={project.description} image={project.image} />

      <Sofa6Section>
        <Stack spacing={4} component={MotionViewport}>
          <Grid container spacing={{ xs: 4, md: 6 }}>
            <Grid xs={12} md={8}>
              <Box component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ overflow: 'hidden', borderRadius: 3 }}>
                <Box component="img" src={project.image} alt={project.name} sx={{ width: 1, aspectRatio: '16/9', objectFit: 'cover' }} />
              </Box>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                {[SOFA6_PAGE_IMAGES.project2, SOFA6_PAGE_IMAGES.project3, SOFA6_PAGE_IMAGES.project4].map((img, i) => (
                  <Grid key={i} xs={4}>
                    <Box component="img" src={img} alt={`${project.name} ${i + 1}`} sx={{ width: 1, borderRadius: 2, aspectRatio: '4/3', objectFit: 'cover' }} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid xs={12} md={4}>
              <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
                <Typography variant="h5">Thông tin dự án</Typography>
                <Stack spacing={1.5}>
                  <Stack direction="row" spacing={1} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={20} sx={{ color: SOFA6_COLORS.terracotta }} /><Typography variant="body2" sx={{ color: 'text.secondary' }}>{project.location}</Typography></Stack>
                  <Stack direction="row" spacing={1} alignItems="center"><Iconify icon="solar:calendar-bold-duotone" width={20} sx={{ color: SOFA6_COLORS.terracotta }} /><Typography variant="body2" sx={{ color: 'text.secondary' }}>{project.year}</Typography></Stack>
                  <Stack direction="row" spacing={1} alignItems="center"><Iconify icon="solar:buildings-bold-duotone" width={20} sx={{ color: SOFA6_COLORS.terracotta }} /><Typography variant="body2" sx={{ color: 'text.secondary' }}>{project.typeLabel}</Typography></Stack>
                </Stack>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{project.description}</Typography>
              </Stack>
            </Grid>
          </Grid>

          <Box>
            <Typography variant="h5" sx={{ mb: 3 }}>Sản phẩm sử dụng</Typography>
            <Grid container spacing={3}>
              {usedProducts.map((p, i) => (
                <Grid key={p.id} xs={12} sm={4}>
                  <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: i * 0.08 }} spacing={2} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', border: (t) => `1px solid ${varAlpha(t.vars.palette.grey['500Channel'], 0.12)}` }}>
                    <Box component="img" src={p.image} alt={p.name} sx={{ width: 1, borderRadius: 2, aspectRatio: '4/3', objectFit: 'cover' }} />
                    <Typography variant="subtitle2">{p.name}</Typography>
                    <Rating value={p.rating} size="small" readOnly />
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ mb: 3 }}>Đánh giá khách hàng</Typography>
            <Stack spacing={2}>
              {[{ name: 'Chủ đầu tư dự án', rating: 5, content: 'Sofa Earth hoàn toàn phù hợp với dự án xanh của chúng tôi. Khách hàng khen không gian tự nhiên, ấm áp, vật liệu an toàn.' }].map((r) => (
                <Stack key={r.name} spacing={1} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', border: (t) => `1px solid ${varAlpha(t.vars.palette.grey['500Channel'], 0.12)}` }}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Rating value={r.rating} size="small" readOnly />
                    <Typography variant="subtitle2">{r.name}</Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{r.content}</Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Sofa6Section>
    </>
  );
}
