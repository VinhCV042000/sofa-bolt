import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

import { useParams } from 'react-router-dom';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

import { sofa13Alpha, SOFA13_COLORS } from 'src/sections/sofa13/sofa13-data';
import { Sofa13PageHero, Sofa13Section } from 'src/sections/sofa13-pages/sofa13-page-hero';
import { SOFA13_PAGE_BLOG_POSTS, SOFA13_PAGE_BLOG_CATEGORIES, SOFA13_PAGE_IMAGES } from 'src/sections/sofa13-pages/sofa13-pages-data';

export default function Page() {
  const params = useParams();
  const slug = params.slug || '';
  const category = SOFA13_PAGE_BLOG_CATEGORIES.find((c) => c.slug === slug);
  const label = category?.label || 'Tất cả bài viết';
  const filtered = SOFA13_PAGE_BLOG_POSTS.filter((p) => p.category === slug);

  return (
    <>
      <Helmet><title>{label} — Sofa13 Blog</title></Helmet>
      <Sofa13PageHero overline="BLOG" title={<><span>{label.toUpperCase()}</span></>} subtitle={`${filtered.length} bài viết trong chuyên mục ${label.toLowerCase()}.`} image={SOFA13_PAGE_IMAGES.blog1} />

      <Sofa13Section>
        {filtered.length === 0 ? (
          <Stack spacing={2} alignItems="center" sx={{ py: 10, textAlign: 'center' }}>
            <Iconify icon="solar:document-bold-duotone" width={80} sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.2) }} />
            <Typography variant="h5" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.4), fontWeight: 700 }}>Chưa có bài viết trong chuyên mục này</Typography>
          </Stack>
        ) : (
          <Grid container spacing={4}>
            {filtered.map((post) => (
              <Grid key={post.id} xs={12} sm={6}>
                <Stack component={RouterLink} href={`/sofa13/blog/${post.slug}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .blog-img': { transform: 'scale(1.05)' }, '&:hover .blog-title': { color: SOFA13_COLORS.gold } }}>
                  <Box sx={{ overflow: 'hidden', aspectRatio: '16/10', border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.2)}` }}>
                    <Box className="blog-img" component="img" src={post.image} alt={post.title} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                  </Box>
                  <Chip label={post.categoryLabel} size="small" sx={{ alignSelf: 'flex-start', bgcolor: sofa13Alpha(SOFA13_COLORS.gold, 0.15), color: SOFA13_COLORS.gold, fontWeight: 700, borderRadius: 0 }} />
                  <Typography className="blog-title" variant="h6" sx={{ fontWeight: 700, color: SOFA13_COLORS.ivory, letterSpacing: 1, transition: 'color 0.2s' }}>{post.title}</Typography>
                  <Typography variant="body2" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5), lineHeight: 1.9, fontWeight: 700 }}>{post.excerpt}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        )}
      </Sofa13Section>
    </>
  );
}
