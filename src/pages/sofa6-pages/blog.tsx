import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA6_COLORS } from 'src/sections/sofa6/sofa6-data';
import { Sofa6Section, Sofa6PageHero } from 'src/sections/sofa6-pages/sofa6-page-hero';
import { SOFA6_BLOG_POSTS, SOFA6_PAGE_IMAGES, SOFA6_BLOG_CATEGORIES } from 'src/sections/sofa6-pages/sofa6-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Blog Sofa Earth · Nội thất thiên nhiên' };

// ----------------------------------------------------------------------

export default function Page() {
  const featured = SOFA6_BLOG_POSTS[0];
  const rest = SOFA6_BLOG_POSTS.slice(1);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa6PageHero
        overline="Blog"
        title={<>Blog <span>Sofa Earth</span></>}
        subtitle="Cẩm nang nội thất xanh, kiến thức vật liệu thiên nhiên và xu hướng thiết kế bền vững — chia sẻ từ nghệ nhân Sofa Earth."
        image={SOFA6_PAGE_IMAGES.blog1}
      />

      {/* Featured post */}
      <Sofa6Section>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center" component={MotionViewport}>
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
              <Chip label={featured.categoryLabel} size="small" sx={{ width: 'fit-content', bgcolor: varAlpha(`rgb(${SOFA6_COLORS.terracottaLight.slice(1).match(/.{2}/g)?.map((h) => parseInt(h, 16)).join(',')})`, 0.16), color: SOFA6_COLORS.terracotta }} />
              <Typography variant="h3">{featured.title}</Typography>
              <Typography sx={{ color: 'text.secondary' }}>{featured.excerpt}</Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Stack direction="row" spacing={1} alignItems="center">
                  <Avatar sx={{ width: 32, height: 32, bgcolor: SOFA6_COLORS.terracotta, fontSize: 14 }}>{featured.author.charAt(0)}</Avatar>
                  <Typography variant="caption">{featured.author}</Typography>
                </Stack>
                <Typography variant="caption" sx={{ color: 'text.disabled' }}>· {featured.date} · {featured.readTime}</Typography>
              </Stack>
              <Button component={RouterLink} href={`/sofa6/blog/${featured.id}`} variant="contained" sx={{ width: 'fit-content', bgcolor: SOFA6_COLORS.terracotta, '&:hover': { bgcolor: SOFA6_COLORS.clay } }} endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>
                Đọc tiếp
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa6Section>

      {/* Sidebar + grid */}
      <Sofa6Section bg="grey">
        <Grid container spacing={{ xs: 4, md: 5 }} component={MotionViewport}>
          {/* Category sidebar */}
          <Grid xs={12} md={3}>
            <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, position: 'sticky', top: 24 }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Iconify icon="solar:widget-bold-duotone" width={20} sx={{ color: SOFA6_COLORS.terracotta }} />
                <Typography variant="h6">Chủ đề</Typography>
              </Stack>
              <Stack spacing={0.5}>
                {SOFA6_BLOG_CATEGORIES.map((cat) => (
                  <Button
                    key={cat.slug}
                    component={RouterLink}
                    href={`/sofa6/blog/category/${cat.slug}`}
                    fullWidth
                    sx={{ justifyContent: 'flex-start', color: 'text.secondary', '&:hover': { color: SOFA6_COLORS.terracotta, bgcolor: varAlpha(`rgb(${SOFA6_COLORS.terracottaLight.slice(1).match(/.{2}/g)?.map((h) => parseInt(h, 16)).join(',')})`, 0.08) } }}
                  >
                    {cat.label}
                  </Button>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* Posts grid */}
          <Grid xs={12} md={9}>
            <Grid container spacing={3}>
              {rest.map((post) => (
                <Grid key={post.id} xs={12} sm={6} md={4}>
                  <Stack
                    component={m.div}
                    variants={varFade({ distance: 24 }).inUp}
                    spacing={2}
                    sx={{ height: 1, borderRadius: 2, bgcolor: 'background.paper', overflow: 'hidden', boxShadow: (t) => t.customShadows.card, transition: (t) => t.transitions.create(['transform'], { duration: 300 }), '&:hover': { transform: 'translateY(-6px)' } }}
                  >
                    <Box component="img" src={post.image} alt={post.title} sx={{ width: 1, aspectRatio: '16/10', objectFit: 'cover' }} />
                    <Stack spacing={1.5} sx={{ p: 3 }}>
                      <Chip label={post.categoryLabel} size="small" sx={{ width: 'fit-content', bgcolor: varAlpha(`rgb(${SOFA6_COLORS.sageLight.slice(1).match(/.{2}/g)?.map((h) => parseInt(h, 16)).join(',')})`, 0.16), color: SOFA6_COLORS.sage }} />
                      <Typography variant="h6">{post.title}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{post.excerpt}</Typography>
                      <Stack direction="row" spacing={1} alignItems="center" sx={{ color: 'text.disabled' }}>
                        <Iconify icon="solar:calendar-bold-duotone" width={16} />
                        <Typography variant="caption">{post.date}</Typography>
                        <Typography variant="caption">· {post.readTime}</Typography>
                      </Stack>
                      <Button component={RouterLink} href={`/sofa6/blog/${post.id}`} size="small" sx={{ width: 'fit-content', color: SOFA6_COLORS.terracotta }} endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>Đọc tiếp</Button>
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Sofa6Section>

      {/* CTA */}
      <Sofa6Section>
        <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }} component={MotionViewport}>
          <Typography variant="h3">
            Cần tư vấn <Box component="span" sx={{ ...textGradient(`135deg, ${SOFA6_COLORS.terracottaLight}, ${SOFA6_COLORS.sageLight}`) }}>nội thất xanh?</Box>
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Đội ngũ Sofa Earth sẵn sàng hỗ trợ bạn chọn sofa từ vật liệu thiên nhiên.</Typography>
          <Button component={RouterLink} href="/sofa6/contact" size="large" variant="contained" startIcon={<Iconify icon="solar:chat-round-like-bold-duotone" />} sx={{ bgcolor: SOFA6_COLORS.terracotta, '&:hover': { bgcolor: SOFA6_COLORS.clay } }}>
            Liên hệ tư vấn
          </Button>
        </Stack>
      </Sofa6Section>
    </>
  );
}
