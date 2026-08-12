import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';
import {
  SOFA2_PROJECTS,
  SOFA2_PRODUCTS,
  formatSofa2Price,
} from 'src/sections/sofa2/sofa2-pages-data';

// ----------------------------------------------------------------------

const GALLERY = [
  'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/164877/pexels-photo-164877.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800',
];

export default function Page() {
  const theme = useTheme();
  const { id = '' } = useParams();

  const project = SOFA2_PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <>
        <Helmet>
          <title>Không tìm thấy dự án - LUXE Sofa</title>
        </Helmet>
        <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 20 }}>
          <Iconify
            icon="solar:file-remove-bold-duotone"
            width={72}
            sx={{ color: 'text.disabled' }}
          />
          <Typography variant="h4">Không tìm thấy dự án</Typography>
          <Button component={RouterLink} href="/sofa2/projects" variant="contained">
            Quay lại danh sách dự án
          </Button>
        </Stack>
      </>
    );
  }

  const usedProducts = SOFA2_PRODUCTS.slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{project.name} - LUXE Sofa</title>
      </Helmet>

      <Sofa2PageHero
        overline={project.typeLabel}
        title={project.name}
        subtitle={`${project.location} • ${project.year}`}
        image={project.image}
      />

      {/* Overview */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={{ xs: 5, md: 8 }}>
            <Grid xs={12} md={7}>
              <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
                <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                  Giới thiệu dự án
                </Typography>
                <Typography variant="h2">{project.name}</Typography>
                <Typography sx={{ color: 'text.secondary' }}>{project.description}</Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  LUXE Sofa tự hào đồng hành cùng dự án với các giải pháp nội thất sofa được thiết
                  kế riêng, tối ưu không gian và phong cách cho từng khu vực. Mỗi sản phẩm đều trải
                  qua quy trình chế tác thủ công nghiêm ngặt để đảm bảo chất lượng cao cấp.
                </Typography>
              </Stack>
            </Grid>
            <Grid xs={12} md={5}>
              <Stack
                spacing={2}
                component={m.div}
                variants={varFade({ distance: 24 }).inRight}
                sx={{
                  p: 4,
                  borderRadius: 2,
                  bgcolor: 'background.paper',
                  boxShadow: (t) => t.customShadows.card,
                }}
              >
                <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                  Thông tin dự án
                </Typography>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Iconify icon="solar:bill-list-bold-duotone" sx={{ color: 'primary.main' }} />
                  <Box>
                    <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                      Loại hình
                    </Typography>
                    <Typography variant="body2">{project.typeLabel}</Typography>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Iconify icon="solar:map-point-bold-duotone" sx={{ color: 'primary.main' }} />
                  <Box>
                    <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                      Địa điểm
                    </Typography>
                    <Typography variant="body2">{project.location}</Typography>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Iconify icon="solar:calendar-bold-duotone" sx={{ color: 'primary.main' }} />
                  <Box>
                    <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                      Năm hoàn thành
                    </Typography>
                    <Typography variant="body2">{project.year}</Typography>
                  </Box>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Gallery */}
      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04),
        }}
      >
        <Container component={MotionViewport}>
          <Stack spacing={2} sx={{ mb: 5 }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              Hình ảnh
            </Typography>
            <Typography variant="h3">
              Gallery
              <Box component="span" sx={{ opacity: 0.4 }}>
                {' '}
                dự án
              </Box>
            </Typography>
          </Stack>
          <Grid container spacing={2}>
            {GALLERY.map((src, idx) => (
              <Grid key={idx} xs={12} sm={6} md={3}>
                <Box
                  component={m.img}
                  variants={varFade({ distance: 24 }).inUp}
                  src={src}
                  alt={`Dự án ${idx + 1}`}
                  sx={{ width: 1, borderRadius: 2, aspectRatio: '1/1', objectFit: 'cover' }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Products used */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Stack spacing={2} sx={{ mb: 5 }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              Sản phẩm sử dụng
            </Typography>
            <Typography variant="h3">
              Sofa
              <Box
                component="span"
                sx={{
                  ...textGradient(
                    `135deg, ${theme.vars.palette.primary.light}, ${theme.vars.palette.warning.light}`
                  ),
                }}
              >
                {' '}
                trong dự án
              </Box>
            </Typography>
          </Stack>
          <Grid container spacing={3}>
            {usedProducts.map((p) => (
              <Grid key={p.id} xs={12} sm={6} md={4}>
                <Stack
                  component={m.div}
                  variants={varFade({ distance: 24 }).inUp}
                  sx={{
                    height: 1,
                    borderRadius: 2,
                    overflow: 'hidden',
                    bgcolor: 'background.paper',
                    boxShadow: (t) => t.customShadows.card,
                  }}
                >
                  <Box
                    component="img"
                    src={p.image}
                    alt={p.name}
                    sx={{ width: 1, aspectRatio: '4/3', objectFit: 'cover' }}
                  />
                  <Stack spacing={1} sx={{ p: 2 }}>
                    <Typography variant="subtitle1">{p.name}</Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: 'primary.main', fontWeight: 'fontWeightBold' }}
                    >
                      {formatSofa2Price(p.price)}
                    </Typography>
                    <Button
                      component={RouterLink}
                      href={`/sofa2/products/${p.id}`}
                      size="small"
                      variant="outlined"
                    >
                      Xem chi tiết
                    </Button>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Customer review placeholder */}
      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04),
        }}
      >
        <Container component={MotionViewport}>
          <Stack
            spacing={3}
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 3,
              bgcolor: 'background.paper',
              boxShadow: (t) => t.customShadows.card,
              textAlign: 'center',
              maxWidth: 720,
              mx: 'auto',
            }}
            component={m.div}
            variants={varFade({ distance: 24 }).inUp}
          >
            <Avatar
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
              sx={{ width: 64, height: 64, mx: 'auto' }}
            />
            <Rating value={5} readOnly sx={{ mx: 'auto' }} />
            <Typography variant="h6">
              &ldquo;LUXE Sofa đã vượt mong đợi của chúng tôi về chất lượng và dịch vụ.&rdquo;
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              &ldquo;Đội ngũ thiết kế chuyên nghiệp, sofa chế tác tinh xảo và đúng tiến độ. Chúng
              tôi rất hài lòng với kết quả.&rdquo;
            </Typography>
            <Typography variant="subtitle2">— Đại diện dự án {project.name}</Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
