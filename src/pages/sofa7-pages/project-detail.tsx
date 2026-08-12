import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA7_COLORS } from 'src/sections/sofa7/sofa7-data';
import { Sofa7Section, Sofa7PageHero } from 'src/sections/sofa7-pages/sofa7-page-hero';
import {
  SOFA7_PAGE_IMAGES,
  SOFA7_PAGE_PROJECTS,
  SOFA7_PAGE_PRODUCTS,
} from 'src/sections/sofa7-pages/sofa7-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Dự án — Sofa7' };

const ALBUM_IMAGES = [
  SOFA7_PAGE_IMAGES.project1, SOFA7_PAGE_IMAGES.project2, SOFA7_PAGE_IMAGES.project3,
  SOFA7_PAGE_IMAGES.project4, SOFA7_PAGE_IMAGES.project5, SOFA7_PAGE_IMAGES.project6,
];

const CUSTOMER_REVIEW = {
  name: 'Đặng Việt',
  role: 'Chủ đầu tư',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  rating: 5,
  content: 'Sofa7 mang vibe loft nguyên bản vào dự án của chúng tôi. Chất lượng đỉnh, đội ngũ chuyên nghiệp, giao hàng đúng hạn. Sẽ hợp tác dài dài!',
};

export default function Page() {
  const theme = useTheme();
  const { id } = useParams();

  const project = SOFA7_PAGE_PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <>
        <Helmet>
          <title>{metadata.title}</title>
        </Helmet>
        <Sofa7Section>
          <Stack spacing={4} alignItems="center" sx={{ textAlign: 'center', py: { xs: 10, md: 16 } }}>
            <Iconify icon="solar:danger-bold-duotone" width={64} sx={{ color: SOFA7_COLORS.red }} />
            <Typography variant="h3" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
              DỰ ÁN KHÔNG TỒN TẠI
            </Typography>
            <Button component={RouterLink} href="/sofa7/projects" size="large" variant="contained" sx={{ borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, fontWeight: 'fontWeightBold', '&:hover': { bgcolor: SOFA7_COLORS.cyan } }} startIcon={<Iconify icon="solar:arrow-left-bold-duotone" />}>
              VỀ TRANG DỰ ÁN
            </Button>
          </Stack>
        </Sofa7Section>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`Sofa7 — ${project.name}`}</title>
      </Helmet>

      <Sofa7PageHero
        overline={project.typeLabel.toUpperCase()}
        title={
          <>
            {project.name.toUpperCase().split(' ').slice(0, -1).join(' ')}{' '}
            <span>{project.name.toUpperCase().split(' ').slice(-1)}</span>
          </>
        }
        subtitle={`${project.location} · ${project.year} — ${project.description}`}
        image={project.image}
      />

      {/* Description */}
      <Sofa7Section>
        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid xs={12} md={7}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Box sx={{ width: 8, height: 40, bgcolor: SOFA7_COLORS.electric }} />
                <Typography variant="overline" sx={{ color: SOFA7_COLORS.electric, letterSpacing: 4, fontWeight: 'fontWeightBold' }}>
                  CHI TIẾT DỰ ÁN
                </Typography>
              </Stack>
              <Typography variant="h3" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
                {project.name}
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{project.description}</Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                Sofa7 cung cấp toàn bộ nội thất sofa cho dự án, từ thiết kế đến lắp đặt. Khung thép
                đen hàn Mig, da thật nguyên tấm, velvet neon — mang vibe loft nguyên bản vào từng
                không gian.
              </Typography>
              <Stack direction="row" spacing={4}>
                <Stack spacing={0.5}>
                  <Typography variant="overline" sx={{ color: 'text.disabled', letterSpacing: 2 }}>ĐỊA ĐIỂM</Typography>
                  <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>{project.location}</Typography>
                </Stack>
                <Stack spacing={0.5}>
                  <Typography variant="overline" sx={{ color: 'text.disabled', letterSpacing: 2 }}>NĂM</Typography>
                  <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>{project.year}</Typography>
                </Stack>
                <Stack spacing={0.5}>
                  <Typography variant="overline" sx={{ color: 'text.disabled', letterSpacing: 2 }}>LOẠI</Typography>
                  <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>{project.typeLabel}</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} md={5}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Box component="img" src={project.image} alt={project.name} sx={{ width: 1, aspectRatio: '4/5', objectFit: 'cover', borderRadius: 0 }} />
            </Box>
          </Grid>
        </Grid>
      </Sofa7Section>

      {/* Album photos */}
      <Sofa7Section bg="grey">
        <Stack spacing={4}>
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Box sx={{ width: 8, height: 40, bgcolor: SOFA7_COLORS.electric }} />
            <Typography variant="h4" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
              ALBUM ẢNH
            </Typography>
          </Stack>
          <Grid container spacing={2}>
            {ALBUM_IMAGES.map((img, idx) => (
              <Grid key={idx} xs={6} md={4}>
                <Box component={m.img} src={img} alt={`Album ${idx + 1}`} variants={varFade({ distance: 24 }).inUp} sx={{ width: 1, aspectRatio: '4/3', objectFit: 'cover', borderRadius: 0, '&:hover': { opacity: 0.8, transition: 'opacity 0.3s' } }} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Sofa7Section>

      {/* Products used */}
      <Sofa7Section>
        <Stack spacing={4}>
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Box sx={{ width: 8, height: 40, bgcolor: SOFA7_COLORS.cyan }} />
            <Typography variant="h4" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
              SẢN PHẨM SỬ DỤNG
            </Typography>
          </Stack>
          <Grid container spacing={3}>
            {SOFA7_PAGE_PRODUCTS.slice(0, 4).map((product) => (
              <Grid key={product.id} xs={6} md={3}>
                <Stack component={RouterLink} href={`/sofa7/products/${product.id}`} spacing={1.5} sx={{ textDecoration: 'none', borderRadius: 0, bgcolor: 'background.paper', border: `2px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`, '&:hover': { borderColor: SOFA7_COLORS.electric }, overflow: 'hidden' }}>
                  <Box sx={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                    <Box component="img" src={product.image} alt={product.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
                  </Box>
                  <Stack spacing={1} sx={{ p: 2 }}>
                    <Typography variant="subtitle2" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily, color: 'text.primary' }}>{product.name}</Typography>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Sofa7Section>

      {/* Customer review */}
      <Sofa7Section bg="grey">
        <Stack
          component={m.div}
          variants={varFade({ distance: 24 }).inUp}
          spacing={3}
          sx={{
            maxWidth: 720,
            mx: 'auto',
            p: { xs: 5, md: 8 },
            borderRadius: 0,
            bgcolor: SOFA7_COLORS.concrete,
            color: 'common.white',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box sx={{ position: 'absolute', top: 20, right: 20, width: 60, height: 60, bgcolor: SOFA7_COLORS.electric, clipPath: 'polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)', opacity: 0.9 }} />
          <Iconify icon="solar:chat-square-quote-bold-duotone" width={40} sx={{ color: SOFA7_COLORS.electric }} />
          <Typography variant="h5" sx={{ lineHeight: 1.6, fontWeight: 'fontWeightMedium' }}>
            &ldquo;{CUSTOMER_REVIEW.content}&rdquo;
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar src={CUSTOMER_REVIEW.avatar} alt={CUSTOMER_REVIEW.name} sx={{ borderRadius: 0, width: 56, height: 56 }} />
            <Stack spacing={0.5}>
              <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>{CUSTOMER_REVIEW.name}</Typography>
              <Typography variant="body2" sx={{ color: SOFA7_COLORS.electric, textTransform: 'uppercase', letterSpacing: 1 }}>{CUSTOMER_REVIEW.role}</Typography>
            </Stack>
            <Box sx={{ flex: 1 }} />
            <Rating value={CUSTOMER_REVIEW.rating} readOnly size="small" sx={{ '& .MuiRating-iconFilled': { color: SOFA7_COLORS.electric } }} />
          </Stack>
        </Stack>
      </Sofa7Section>

      {/* Back */}
      <Sofa7Section py={{ xs: 6, md: 8 }}>
        <Stack direction="row" justifyContent="center">
          <Button component={RouterLink} href="/sofa7/projects" size="large" variant="outlined" sx={{ borderRadius: 0, borderColor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.concrete, fontWeight: 'fontWeightBold', '&:hover': { borderColor: SOFA7_COLORS.electric, color: SOFA7_COLORS.electric, bgcolor: 'transparent' } }} startIcon={<Iconify icon="solar:arrow-left-bold-duotone" />}>
            VỀ TRANG DỰ ÁN
          </Button>
        </Stack>
      </Sofa7Section>
    </>
  );
}
