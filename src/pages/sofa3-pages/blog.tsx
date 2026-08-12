import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa3PageHero } from 'src/sections/sofa3-pages/sofa3-page-hero';
import { SOFA3_BLOG_POSTS, SOFA3_PAGE_IMAGES, SOFA3_BLOG_CATEGORIES } from 'src/sections/sofa3-pages/sofa3-pages-data';

const metadata = { title: 'Blog - Sofa Terra' };

export default function Page() {
  const featured = SOFA3_BLOG_POSTS[0];
  const rest = SOFA3_BLOG_POSTS.slice(1);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa3PageHero overline="Blog" title="Tin tức & kiến thức eco" subtitle="Kinh nghiệm chọn sofa, xu hướng nội thất, kiến thức vật liệu xanh." image={SOFA3_PAGE_IMAGES.blog1} />

      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Stack spacing={4}>
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
              {SOFA3_BLOG_CATEGORIES.map((cat) => (
                <Box key={cat.slug} component={RouterLink} href={`/sofa3/blog/category/${cat.slug}`} sx={{ px: 2, py: 1, borderRadius: 2, textDecoration: 'none', bgcolor: (t) => t.palette.mode === 'dark' ? 'background.paper' : 'grey.100', color: 'text.secondary', fontSize: 14, fontWeight: 'fontWeightMedium', '&:hover': { color: 'success.main' } }}>
                  {cat.label}
                </Box>
              ))}
            </Stack>

            <Box component={RouterLink} href={`/sofa3/blog/${featured.slug}`} sx={{ position: 'relative', overflow: 'hidden', borderRadius: 3, textDecoration: 'none', display: 'block' }}>
              <Box component="img" src={featured.image} alt={featured.title} sx={{ width: 1, height: { xs: 240, md: 400 }, objectFit: 'cover' }} />
              <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)' }} />
              <Stack spacing={1} sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: { xs: 3, md: 5 }, color: 'common.white' }}>
                <Typography variant="overline" sx={{ color: 'success.light' }}>{featured.categoryLabel} · {featured.date}</Typography>
                <Typography variant="h4">{featured.title}</Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', maxWidth: 600 }}>{featured.excerpt}</Typography>
              </Stack>
            </Box>

            <Grid container spacing={3}>
              {rest.map((post, index) => (
                <Grid key={post.id} xs={12} sm={6} md={4}>
                  <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: index * 0.06 }} sx={{ height: 1, borderRadius: 2, overflow: 'hidden', bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                    <Box component={RouterLink} href={`/sofa3/blog/${post.slug}`} sx={{ textDecoration: 'none' }}>
                      <Box component="img" src={post.image} alt={post.title} sx={{ width: 1, aspectRatio: '16/9', objectFit: 'cover' }} />
                    </Box>
                    <Stack spacing={1.5} sx={{ p: 2.5 }}>
                      <Typography variant="overline" sx={{ color: 'success.main' }}>{post.categoryLabel}</Typography>
                      <Box component={RouterLink} href={`/sofa3/blog/${post.slug}`} sx={{ textDecoration: 'none' }}>
                        <Typography variant="subtitle1" sx={{ color: 'text.primary' }}>{post.title}</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{post.excerpt}</Typography>
                      <Typography variant="caption" sx={{ color: 'text.disabled' }}>{post.author} · {post.date} · {post.readTime}</Typography>
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
