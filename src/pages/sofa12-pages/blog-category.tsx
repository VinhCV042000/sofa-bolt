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

import { Sofa12PageHero } from 'src/sections/sofa12-pages/sofa12-page-hero';
import { SOFA12_PAGE_IMAGES, SOFA12_PAGE_BLOG_POSTS, SOFA12_PAGE_BLOG_CATEGORIES } from 'src/sections/sofa12-pages/sofa12-pages-data';

export default function Page() {
  const { slug } = useParams();
  const category = SOFA12_PAGE_BLOG_CATEGORIES.find((c) => c.slug === slug);
  const posts = SOFA12_PAGE_BLOG_POSTS.filter((p) => p.category === slug);

  return (
    <>
      <Helmet><title>{category?.label || 'Blog'} - TERRA ARCH</title></Helmet>
      <Sofa12PageHero overline="Blog" title={category?.label || 'Tất cả bài viết'} subtitle="TERRA ARCH Blog" image={SOFA12_PAGE_IMAGES.blog1} />
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={4}>
            {(posts.length > 0 ? posts : SOFA12_PAGE_BLOG_POSTS).map((post) => (
              <Grid key={post.id} xs={12} sm={6} md={4}>
                <Stack component={RouterLink} href={`/sofa12/blog/${post.slug}`} sx={{ textDecoration: 'none', color: 'inherit' }}>
                  <Box component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ borderRadius: 2, overflow: 'hidden', bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                    <Box component="img" src={post.image} alt={post.title} sx={{ width: 1, aspectRatio: '4/3', objectFit: 'cover' }} />
                    <Stack spacing={1} sx={{ p: 2.5 }}>
                      <Typography variant="overline" sx={{ color: 'warning.main' }}>{post.categoryLabel}</Typography>
                      <Typography variant="h6">{post.title}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{post.excerpt}</Typography>
                    </Stack>
                  </Box>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
