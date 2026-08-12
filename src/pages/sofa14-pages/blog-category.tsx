import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { sofa14Alpha, SOFA14_COLORS } from 'src/sections/sofa14/sofa14-data';
import { Sofa14Section, Sofa14PageHero } from 'src/sections/sofa14-pages/sofa14-page-hero';
import { SOFA14_PAGE_IMAGES, SOFA14_PAGE_BLOG_POSTS, SOFA14_PAGE_BLOG_CATEGORIES } from 'src/sections/sofa14-pages/sofa14-pages-data';

export default function Page() {
  const params = useParams();
  const slug = params.slug || '';
  const category = SOFA14_PAGE_BLOG_CATEGORIES.find((c) => c.slug === slug);
  const label = category?.label || 'Tất cả bài viết';
  const filtered = SOFA14_PAGE_BLOG_POSTS.filter((p) => p.category === slug);

  return (
    <>
      <Helmet><title>{label} — Sofa14 Blog</title></Helmet>
      <Sofa14PageHero overline="BLOG" title={<span>{label.toUpperCase()}</span>} subtitle={`${filtered.length} bài viết trong chuyên mục ${label.toLowerCase()}.`} image={SOFA14_PAGE_IMAGES.blog1} />

      <Sofa14Section>
        {filtered.length === 0 ? (
          <Stack spacing={2} alignItems="center" sx={{ py: 10, textAlign: 'center' }}>
            <Iconify icon="solar:document-bold-duotone" width={80} sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.3) }} />
            <Typography variant="h5" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.5), fontWeight: 800 }}>Chưa có bài viết trong chuyên mục này</Typography>
          </Stack>
        ) : (
          <Grid container spacing={4}>
            {filtered.map((post) => (
              <Grid key={post.id} xs={12} sm={6}>
                <Stack component={RouterLink} href={`/sofa14/blog/${post.slug}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .blog-img': { transform: 'scale(1.05)' }, '&:hover .blog-title': { color: SOFA14_COLORS.coralDeep } }}>
                  <Box sx={{ overflow: 'hidden', aspectRatio: '16/10', borderRadius: '24px', border: `6px solid ${SOFA14_COLORS.white}`, boxShadow: `4px 4px 0 ${sofa14Alpha(SOFA14_COLORS.mint, 0.4)}` }}>
                    <Box className="blog-img" component="img" src={post.image} alt={post.title} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                  </Box>
                  <Chip label={post.categoryLabel} size="small" sx={{ alignSelf: 'flex-start', bgcolor: sofa14Alpha(SOFA14_COLORS.coral, 0.2), color: SOFA14_COLORS.coralDeep, fontWeight: 800, borderRadius: 99 }} />
                  <Typography className="blog-title" variant="h6" sx={{ fontWeight: 800, color: SOFA14_COLORS.ink, transition: 'color 0.2s' }}>{post.title}</Typography>
                  <Typography variant="body2" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.7), lineHeight: 1.9, fontWeight: 700 }}>{post.excerpt}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        )}
      </Sofa14Section>
    </>
  );
}
