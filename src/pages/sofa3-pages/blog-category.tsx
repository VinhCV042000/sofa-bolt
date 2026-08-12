import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa3PageHero } from 'src/sections/sofa3-pages/sofa3-page-hero';
import { SOFA3_BLOG_POSTS, SOFA3_BLOG_CATEGORIES } from 'src/sections/sofa3-pages/sofa3-pages-data';

const metadata = { title: 'Chuyên mục blog - Sofa Terra' };

export default function Page() {
  const { slug } = useParams();
  const category = SOFA3_BLOG_CATEGORIES.find((c) => c.slug === slug);
  const posts = slug ? SOFA3_BLOG_POSTS.filter((p) => p.category === slug) : SOFA3_BLOG_POSTS;

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa3PageHero overline="Blog" title={category ? category.label : 'Tất cả bài viết'} subtitle={`${posts.length} bài viết`} image={SOFA3_BLOG_POSTS[0].image} />

      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          {posts.length === 0 ? (
            <Stack spacing={2} alignItems="center" sx={{ py: 8, textAlign: 'center' }}>
              <Typography variant="h6" sx={{ color: 'text.secondary' }}>Chưa có bài viết trong chuyên mục này</Typography>
            </Stack>
          ) : (
            <Grid container spacing={3}>
              {posts.map((post, index) => (
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
          )}
        </Container>
      </Box>
    </>
  );
}
