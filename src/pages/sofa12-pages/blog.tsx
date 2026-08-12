import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

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
  return (
    <>
      <Helmet><title>Blog - TERRA ARCH</title></Helmet>
      <Sofa12PageHero overline="Blog" title="Blog TERRA ARCH" subtitle="Tin công ty, kinh nghiệm chọn sofa, xu hướng nội thất, phong thủy." image={SOFA12_PAGE_IMAGES.blog1} />
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Stack direction="row" spacing={1} sx={{ mb: 4, flexWrap: 'wrap', gap: 1 }}>
            {SOFA12_PAGE_BLOG_CATEGORIES.map((c) => (
              <Box key={c.slug} component={RouterLink} href={`/sofa12/blog/category/${c.slug}`} sx={{ px: 2, py: 1, borderRadius: 2, bgcolor: 'background.paper', color: 'text.secondary', fontSize: 13, textDecoration: 'none', fontWeight: 'fontWeightMedium', '&:hover': { color: 'warning.main' } }}>{c.label}</Box>
            ))}
          </Stack>
          <Grid container spacing={4}>
            {SOFA12_PAGE_BLOG_POSTS.map((post) => (
              <Grid key={post.id} xs={12} sm={6} md={4}>
                <Stack component={RouterLink} href={`/sofa12/blog/${post.slug}`} sx={{ textDecoration: 'none', color: 'inherit' }}>
                  <Box component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ borderRadius: 2, overflow: 'hidden', bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, '&:hover': { transform: 'translateY(-4px)', transition: 'transform 0.3s' } }}>
                    <Box component="img" src={post.image} alt={post.title} sx={{ width: 1, aspectRatio: '4/3', objectFit: 'cover' }} />
                    <Stack spacing={1} sx={{ p: 2.5 }}>
                      <Typography variant="overline" sx={{ color: 'warning.main' }}>{post.categoryLabel}</Typography>
                      <Typography variant="h6">{post.title}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{post.excerpt}</Typography>
                      <Typography variant="caption" sx={{ color: 'text.disabled' }}>{post.author} · {post.date} · {post.readTime}</Typography>
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
