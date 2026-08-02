import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport, MotionContainer } from 'src/components/animate';

import {
  SOFA_BLOG_POSTS,
  SOFA_PAGE_IMAGES,
} from 'src/sections/sofa/pages/sofa-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Blog nội thất sofa' };

const CATEGORIES = ['Tất cả', 'Hướng dẫn', 'Bảo dưỡng', 'Xu hướng', 'Chất liệu'];

export default function Page() {
  const theme = useTheme();
  const [category, setCategory] = useState('Tất cả');

  const featured = SOFA_BLOG_POSTS[0];
  const rest = SOFA_BLOG_POSTS.slice(1);
  const filtered = category === 'Tất cả' ? rest : rest.filter((p) => p.category === category);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      {/* Hero */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          py: { xs: 10, md: 16 },
          color: 'common.white',
          mt: 'calc(var(--layout-header-desktop-height) * -1)',
          pt: 'calc(var(--layout-header-desktop-height) + 40px)',
        }}
      >
        <Box
          sx={{
            inset: 0,
            position: 'absolute',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.78)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.56)}), url(${SOFA_PAGE_IMAGES.blog1})`,
          }}
        />
        <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9 }}>
          <Stack spacing={3} sx={{ maxWidth: 720 }}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="overline" sx={{ color: 'primary.light', letterSpacing: 3 }}>Blog</Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="h1" sx={{ fontSize: { xs: 36, md: 56 }, lineHeight: 1.15 }}>
                Blog
                <Box component="span" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.light}, ${theme.vars.palette.warning.light}`) }}> Casa Sofa</Box>
              </Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.72), maxWidth: 560 }}>
                Cẩm nang nội thất, mẹo bảo dưỡng sofa và xu hướng thiết kế — chia sẻ từ đội ngũ chuyên
                gia của Casa Sofa.
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Featured */}
      <Box component="section" sx={{ py: { xs: 8, md: 10 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid xs={12} md={7}>
              <Box
                component={m.img}
                variants={varFade({ distance: 24 }).inLeft}
                src={featured.image}
                alt={featured.title}
                sx={{ width: 1, borderRadius: 2, aspectRatio: '16/10', objectFit: 'cover' }}
              />
            </Grid>
            <Grid xs={12} md={5}>
              <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inRight}>
                <Chip label={featured.category} size="small" color="primary" sx={{ width: 'fit-content' }} />
                <Typography variant="h3">{featured.title}</Typography>
                <Typography sx={{ color: 'text.secondary' }}>{featured.excerpt}</Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>{featured.author.charAt(0)}</Avatar>
                    <Typography variant="caption">{featured.author}</Typography>
                  </Stack>
                  <Typography variant="caption" sx={{ color: 'text.disabled' }}>· {featured.date} · {featured.readTime}</Typography>
                </Stack>
                <Button component={RouterLink} href={`/blog/${featured.id}`} variant="contained" sx={{ width: 'fit-content' }} endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>
                  Đọc tiếp
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Filter + Grid */}
      <Box component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
        <Container component={MotionViewport}>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: { xs: 4, md: 6 } }}>
            {CATEGORIES.map((cat) => (
              <Chip
                key={cat}
                label={cat}
                onClick={() => setCategory(cat)}
                color={category === cat ? 'primary' : 'default'}
                variant={category === cat ? 'filled' : 'soft'}
              />
            ))}
          </Stack>
          <Grid container spacing={3}>
            {filtered.map((post) => (
              <Grid key={post.id} xs={12} sm={6} md={4}>
                <Stack
                  component={m.div}
                  variants={varFade({ distance: 24 }).inUp}
                  spacing={2}
                  sx={{ height: 1, borderRadius: 2, bgcolor: 'background.paper', overflow: 'hidden', boxShadow: (t) => t.customShadows.card, transition: (t) => t.transitions.create(['transform'], { duration: 300 }), '&:hover': { transform: 'translateY(-6px)' } }}
                >
                  <Box component="img" src={post.image} alt={post.title} sx={{ width: 1, aspectRatio: '16/10', objectFit: 'cover' }} />
                  <Stack spacing={1.5} sx={{ p: 3 }}>
                    <Chip label={post.category} size="small" color="primary" variant="soft" sx={{ width: 'fit-content' }} />
                    <Typography variant="h6">{post.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{post.excerpt}</Typography>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ color: 'text.disabled' }}>
                      <Iconify icon="solar:calendar-bold-duotone" width={16} />
                      <Typography variant="caption">{post.date}</Typography>
                      <Typography variant="caption">· {post.readTime}</Typography>
                    </Stack>
                    <Button component={RouterLink} href={`/blog/${post.id}`} size="small" sx={{ width: 'fit-content' }} endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>Đọc tiếp</Button>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
            <Typography variant="h3">Cần tư vấn nội thất?</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Đội ngũ chuyên gia Casa Sofa sẵn sàng hỗ trợ bạn miễn phí.</Typography>
            <Button component={RouterLink} href={paths.sofaBooking} size="large" variant="contained" color="primary" startIcon={<Iconify icon="solar:calendar-bold-duotone" />}>
              Đặt lịch tư vấn
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
