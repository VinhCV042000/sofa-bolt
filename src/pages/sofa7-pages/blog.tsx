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

import { SOFA7_COLORS } from 'src/sections/sofa7/sofa7-data';
import { Sofa7Section, Sofa7PageHero } from 'src/sections/sofa7-pages/sofa7-page-hero';
import { SOFA7_PAGE_IMAGES, SOFA7_PAGE_BLOG_POSTS, SOFA7_PAGE_BLOG_CATEGORIES } from 'src/sections/sofa7-pages/sofa7-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Blog Sofa7 · Industrial loft & urban street' };

// ----------------------------------------------------------------------

export default function Page() {
  const featured = SOFA7_PAGE_BLOG_POSTS[0];
  const rest = SOFA7_PAGE_BLOG_POSTS.slice(1);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa7PageHero
        overline="Blog"
        title={<>Blog <span>Sofa7</span></>}
        subtitle="Cẩm nang industrial loft, kiến thức vật liệu và xu hướng urban street — chia sẻ từ nghệ nhân Sofa7."
        image={SOFA7_PAGE_IMAGES.blog1}
      />

      {/* Featured post */}
      <Sofa7Section>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center" component={MotionViewport}>
          <Grid xs={12} md={7}>
            <Box
              component={m.img}
              variants={varFade({ distance: 24 }).inLeft}
              src={featured.image}
              alt={featured.title}
              sx={{ width: 1, borderRadius: 0, aspectRatio: '16/10', objectFit: 'cover' }}
            />
          </Grid>
          <Grid xs={12} md={5}>
            <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Chip label={featured.categoryLabel} size="small" sx={{ width: 'fit-content', borderRadius: 0, bgcolor: varAlpha(SOFA7_COLORS.electric, 0.16), color: SOFA7_COLORS.concrete, fontWeight: 'fontWeightBold' }} />
              <Typography variant="h3" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold' }}>{featured.title}</Typography>
              <Typography sx={{ color: 'text.secondary' }}>{featured.excerpt}</Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Stack direction="row" spacing={1} alignItems="center">
                  <Avatar sx={{ width: 32, height: 32, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, fontSize: 14, borderRadius: 0 }}>{featured.author.charAt(0)}</Avatar>
                  <Typography variant="caption">{featured.author}</Typography>
                </Stack>
                <Typography variant="caption" sx={{ color: 'text.disabled' }}>· {featured.date} · {featured.readTime}</Typography>
              </Stack>
              <Button component={RouterLink} href={`/sofa7/blog/${featured.id}`} variant="contained" sx={{ width: 'fit-content', borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, '&:hover': { bgcolor: SOFA7_COLORS.cyan } }} endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>
                Đọc tiếp
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa7Section>

      {/* Sidebar + grid */}
      <Sofa7Section bg="grey">
        <Grid container spacing={{ xs: 4, md: 5 }} component={MotionViewport}>
          {/* Category sidebar */}
          <Grid xs={12} md={3}>
            <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: 3, borderRadius: 0, bgcolor: 'background.paper', border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}`, boxShadow: (t) => t.customShadows.card, position: 'sticky', top: 24 }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Iconify icon="solar:widget-bold-duotone" width={20} sx={{ color: SOFA7_COLORS.electric }} />
                <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>Chủ đề</Typography>
              </Stack>
              <Stack spacing={0.5}>
                {SOFA7_PAGE_BLOG_CATEGORIES.map((cat) => (
                  <Button
                    key={cat.slug}
                    component={RouterLink}
                    href={`/sofa7/blog/category/${cat.slug}`}
                    fullWidth
                    sx={{ justifyContent: 'flex-start', borderRadius: 0, color: 'text.secondary', '&:hover': { color: SOFA7_COLORS.electric, bgcolor: varAlpha(SOFA7_COLORS.electric, 0.08) } }}
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
                    sx={{ height: 1, borderRadius: 0, bgcolor: 'background.paper', overflow: 'hidden', border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}`, boxShadow: (t) => t.customShadows.card, transition: (t) => t.transitions.create(['transform'], { duration: 300 }), '&:hover': { transform: 'translateY(-6px)', border: `1px solid ${SOFA7_COLORS.electric}` } }}
                  >
                    <Box component="img" src={post.image} alt={post.title} sx={{ width: 1, aspectRatio: '16/10', objectFit: 'cover' }} />
                    <Stack spacing={1.5} sx={{ p: 3 }}>
                      <Chip label={post.categoryLabel} size="small" sx={{ width: 'fit-content', borderRadius: 0, bgcolor: varAlpha(SOFA7_COLORS.cyan, 0.16), color: SOFA7_COLORS.concrete, fontWeight: 'fontWeightBold' }} />
                      <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>{post.title}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{post.excerpt}</Typography>
                      <Stack direction="row" spacing={1} alignItems="center" sx={{ color: 'text.disabled' }}>
                        <Iconify icon="solar:calendar-bold-duotone" width={16} />
                        <Typography variant="caption">{post.date}</Typography>
                        <Typography variant="caption">· {post.readTime}</Typography>
                      </Stack>
                      <Button component={RouterLink} href={`/sofa7/blog/${post.id}`} size="small" sx={{ width: 'fit-content', borderRadius: 0, color: SOFA7_COLORS.electric }} endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>Đọc tiếp</Button>
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Sofa7Section>

      {/* CTA */}
      <Sofa7Section>
        <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }} component={MotionViewport}>
          <Typography variant="h3" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold' }}>
            Cần tư vấn <Box component="span" sx={{ ...textGradient(`90deg, ${SOFA7_COLORS.electric}, ${SOFA7_COLORS.cyan}`) }}>industrial loft?</Box>
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Đội ngũ Sofa7 sẵn sàng hỗ trợ bạn chọn sofa cho không gian urban.</Typography>
          <Button component={RouterLink} href="/sofa7/contact" size="large" variant="contained" startIcon={<Iconify icon="solar:chat-round-like-bold-duotone" />} sx={{ borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, '&:hover': { bgcolor: SOFA7_COLORS.cyan } }}>
            Liên hệ tư vấn
          </Button>
        </Stack>
      </Sofa7Section>
    </>
  );
}
