import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { SOFA8_COLORS } from 'src/sections/sofa8/sofa8-data';
import { Sofa8Section, Sofa8PageHero } from 'src/sections/sofa8-pages/sofa8-page-hero';
import { SOFA8_PAGE_IMAGES, SOFA8_PAGE_BLOG_POSTS, SOFA8_PAGE_BLOG_CATEGORIES } from 'src/sections/sofa8-pages/sofa8-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const slug = params.slug || '';
  const category = SOFA8_PAGE_BLOG_CATEGORIES.find((c) => c.slug === slug);
  const label = category?.label || 'Tất cả bài viết';
  const filtered = SOFA8_PAGE_BLOG_POSTS.filter((p) => p.category === slug);

  return (
    <>
      <Helmet>
        <title>{label} — Sofa8 Blog</title>
      </Helmet>

      <Sofa8PageHero overline="BLOG" title={<span>{label.toUpperCase()}</span>} subtitle={`${filtered.length} bài viết trong chuyên mục ${label.toLowerCase()}.`} image={SOFA8_PAGE_IMAGES.blog1} />

      <Sofa8Section>
        {filtered.length === 0 ? (
          <Stack spacing={2} alignItems="center" sx={{ py: 10, textAlign: 'center' }}>
            <Iconify icon="solar:document-bold-duotone" width={80} sx={{ color: 'text.disabled' }} />
            <Typography variant="h5" sx={{ color: 'text.secondary' }}>Chưa có bài viết trong chuyên mục này</Typography>
          </Stack>
        ) : (
          <Grid container spacing={4}>
            {filtered.map((post) => (
              <Grid key={post.id} xs={12} sm={6}>
                <Stack component={RouterLink} href={`/sofa8/blog/${post.slug}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .blog-img': { transform: 'scale(1.05)' }, '&:hover .blog-title': { color: SOFA8_COLORS.coral } }}>
                  <Box sx={{ overflow: 'hidden', borderRadius: 3, aspectRatio: '16/10' }}>
                    <Box className="blog-img" component="img" src={post.image} alt={post.title} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                  </Box>
                  <Chip label={post.categoryLabel} size="small" sx={{ alignSelf: 'flex-start', bgcolor: varAlpha(SOFA8_COLORS.ocean, 0.08), color: SOFA8_COLORS.ocean, fontWeight: 'fontWeightBold' }} />
                  <Typography className="blog-title" variant="h6" sx={{ fontWeight: 'fontWeightBold', color: 'text.primary', transition: 'color 0.2s' }}>{post.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{post.excerpt}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        )}
      </Sofa8Section>
    </>
  );
}
