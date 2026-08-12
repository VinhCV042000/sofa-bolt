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

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA9_COLORS } from 'src/sections/sofa9/sofa9-data';
import { Sofa9Section, Sofa9PageHero } from 'src/sections/sofa9-pages/sofa9-page-hero';
import {
  formatSofa9Price,
  SOFA9_PAGE_IMAGES,
  SOFA9_PAGE_PROJECTS,
  SOFA9_PAGE_PRODUCTS,
} from 'src/sections/sofa9-pages/sofa9-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const id = params.id || '';
  const project = SOFA9_PAGE_PROJECTS.find((p) => p.id === id) || SOFA9_PAGE_PROJECTS[0];

  return (
    <>
      <Helmet>
        <title>{project.name} — Sofa9</title>
      </Helmet>

      <Sofa9PageHero
        overline="CHI TIẾT DỰ ÁN"
        title={<span>{project.name.toUpperCase()}</span>}
        subtitle={`${project.typeLabel} · ${project.location} · ${project.year}`}
        image={project.image}
      />

      <Sofa9Section>
        <Grid container spacing={5}>
          <Grid xs={12} md={8}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Box sx={{ overflow: 'hidden', borderRadius: 3, aspectRatio: '16/9' }}>
                <Box
                  component="img"
                  src={project.image}
                  alt={project.name}
                  sx={{ width: 1, height: 1, objectFit: 'cover' }}
                />
              </Box>
              <Stack spacing={2}>
                <Typography variant="h4" sx={{ fontWeight: 'fontWeightBold' }}>
                  Mô tả dự án
                </Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  {project.description}
                </Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  Dự án {project.name} là minh chứng cho chất lượng và thẩm mỹ retro của Sofa9. Với
                  velvet neon, họa tiết bold, mỗi không gian đều mang lại cảm giác vui vẻ tuyệt đối.
                </Typography>
              </Stack>
              <Stack spacing={2}>
                <Typography variant="h5" sx={{ fontWeight: 'fontWeightBold' }}>
                  Album ảnh
                </Typography>
                <Grid container spacing={2}>
                  {[
                    SOFA9_PAGE_IMAGES.project1,
                    SOFA9_PAGE_IMAGES.project2,
                    SOFA9_PAGE_IMAGES.project3,
                    SOFA9_PAGE_IMAGES.project4,
                  ].map((img, i) => (
                    <Grid key={i} xs={6} md={3}>
                      <Box sx={{ overflow: 'hidden', borderRadius: 2, aspectRatio: '1/1' }}>
                        <Box
                          component="img"
                          src={img}
                          alt={`Album ${i}`}
                          sx={{ width: 1, height: 1, objectFit: 'cover' }}
                        />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
              <Stack spacing={2}>
                <Typography variant="h5" sx={{ fontWeight: 'fontWeightBold' }}>
                  Đánh giá khách hàng
                </Typography>
                <Stack
                  spacing={2}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    bgcolor: 'background.paper',
                    border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
                  }}
                >
                  <Rating value={5} readOnly />
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    &ldquo;Sofa9 đã biến không gian của chúng tôi thành một sân khấu retro thực sự.
                    Velvet neon bùng nổ, họa tiết bold. Khách hàng đều chụp ảnh không ngừng!&rdquo;
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightBold' }}>
                    — Chủ dự án {project.name}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} md={4}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Stack
                spacing={2}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor: 'background.paper',
                  border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold' }}>
                  Thông tin dự án
                </Typography>
                <Stack direction="row" justifyContent="space-between">
                  <Typography sx={{ color: 'text.secondary' }}>Loại</Typography>
                  <Typography sx={{ fontWeight: 'fontWeightBold' }}>{project.typeLabel}</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography sx={{ color: 'text.secondary' }}>Địa điểm</Typography>
                  <Typography sx={{ fontWeight: 'fontWeightBold' }}>{project.location}</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography sx={{ color: 'text.secondary' }}>Năm</Typography>
                  <Typography sx={{ fontWeight: 'fontWeightBold' }}>{project.year}</Typography>
                </Stack>
              </Stack>
              <Stack spacing={2}>
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold' }}>
                  Sản phẩm sử dụng
                </Typography>
                {SOFA9_PAGE_PRODUCTS.slice(0, 3).map((p) => (
                  <Stack
                    key={p.id}
                    component={RouterLink}
                    href={`/sofa9/products/${p.slug}`}
                    direction="row"
                    spacing={2}
                    sx={{ textDecoration: 'none', '&:hover .p-name': { color: SOFA9_COLORS.pink } }}
                  >
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: 2,
                        overflow: 'hidden',
                        flexShrink: 0,
                      }}
                    >
                      <Box
                        component="img"
                        src={p.image}
                        alt={p.name}
                        sx={{ width: 1, height: 1, objectFit: 'cover' }}
                      />
                    </Box>
                    <Stack spacing={0.5} justifyContent="center">
                      <Typography
                        className="p-name"
                        variant="body2"
                        sx={{
                          fontWeight: 'fontWeightBold',
                          color: 'text.primary',
                          transition: 'color 0.2s',
                        }}
                      >
                        {p.name}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: SOFA9_COLORS.pink, fontWeight: 'fontWeightBold' }}
                      >
                        {formatSofa9Price(p.price)}
                      </Typography>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
              <Button
                component={RouterLink}
                href="/sofa9/showrooms/visit"
                size="large"
                variant="contained"
                fullWidth
                startIcon={<Iconify icon="solar:phone-bold-duotone" />}
                sx={{
                  borderRadius: 30,
                  bgcolor: SOFA9_COLORS.pink,
                  color: 'common.white',
                  fontWeight: 'fontWeightBold',
                  boxShadow: `0 4px 0 ${SOFA9_COLORS.black}`,
                  '&:hover': {
                    bgcolor: SOFA9_COLORS.pinkLight,
                    boxShadow: `0 6px 0 ${SOFA9_COLORS.black}`,
                  },
                }}
              >
                Tư vấn dự án tương tự
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa9Section>
    </>
  );
}
