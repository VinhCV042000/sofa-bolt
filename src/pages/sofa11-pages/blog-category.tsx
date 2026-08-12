import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { sofa11Alpha, SOFA11_COLORS } from 'src/sections/sofa11/sofa11-data';
import { Sofa11Section, Sofa11PageHero } from 'src/sections/sofa11-pages/sofa11-page-hero';
import { SOFA11_PAGE_IMAGES, SOFA11_PAGE_BLOG_POSTS, SOFA11_PAGE_BLOG_CATEGORIES } from 'src/sections/sofa11-pages/sofa11-pages-data';

export default function Page() {
  const params = useParams();
  const slug = params.slug || '';
  const category = SOFA11_PAGE_BLOG_CATEGORIES.find((c) => c.slug === slug);
  const label = category?.label || 'Tất cả bài viết';
  const filtered = SOFA11_PAGE_BLOG_POSTS.filter((p) => p.category === slug);

  return (
    <>
      <Helmet><title>{label} — Sofa11 Blog</title></Helmet>
      <Sofa11PageHero overline="BLOG" title={<span>{label.toUpperCase()}</span>} subtitle={`${filtered.length} bài viết trong chuyên mục ${label.toLowerCase()}.`} image={SOFA11_PAGE_IMAGES.blog1} />

      <Sofa11Section>
        {filtered.length === 0 ? (
          <Stack spacing={2} alignItems="center" sx={{ py: 10, textAlign: 'center' }}>
            <Iconify icon="solar:document-bold-duotone" width={80} sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.2) }} />
            <Typography variant="h5" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.4), fontWeight: 700 }}>Chưa có bài viết trong chuyên mục này</Typography>
          </Stack>
        ) : (
          <Grid container spacing={4}>
            {filtered.map((post) => (
              <Grid key={post.id} xs={12} sm={6}>
                <Stack component={RouterLink} href={`/sofa11/blog/${post.slug}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .blog-img': { transform: 'scale(1.05)' }, '&:hover .blog-title': { color: SOFA11_COLORS.lime } }}>
                  <Box sx={{ overflow: 'hidden', borderRadius: '20px 20px 20px 0', aspectRatio: '16/10', border: `2px solid ${sofa11Alpha(SOFA11_COLORS.magenta, 0.2)}` }}>
                    <Box className="blog-img" component="img" src={post.image} alt={post.title} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                  </Box>
                  <Chip label={post.categoryLabel} size="small" sx={{ alignSelf: 'flex-start', bgcolor: sofa11Alpha(SOFA11_COLORS.lime, 0.15), color: SOFA11_COLORS.lime, fontWeight: 900 }} />
                  <Typography className="blog-title" variant="h6" sx={{ fontWeight: 900, color: SOFA11_COLORS.cream, textTransform: 'uppercase', transition: 'color 0.2s' }}>{post.title}</Typography>
                  <Typography variant="body2" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.5), lineHeight: 1.8, fontWeight: 700 }}>{post.excerpt}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        )}
      </Sofa11Section>
    </>
  );
}
