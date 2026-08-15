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

import { SOFA18_COLORS } from 'src/sections/sofa18/sofa18-data';
import { Sofa18Section, Sofa18PageHero } from 'src/sections/sofa18-pages/sofa18-page-hero';
import { SOFA18_PAGE_IMAGES, SOFA18_PAGE_BLOG_POSTS, SOFA18_PAGE_BLOG_CATEGORIES } from 'src/sections/sofa18-pages/sofa18-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const slug = params.slug || '';
  const category = SOFA18_PAGE_BLOG_CATEGORIES.find((c) => c.slug === slug);
  const label = category?.label || 'Tất cả bài viết';
  const filtered = SOFA18_PAGE_BLOG_POSTS.filter((p) => p.category === slug);

  return (
    <>
      <Helmet><title>{label} — Sofa18 Blog</title></Helmet>
      <Sofa18PageHero overline="BLOG" title={<span>{label.toUpperCase()}</span>} subtitle={`${filtered.length} bài viết trong chuyên mục ${label.toLowerCase()}.`} image={SOFA18_PAGE_IMAGES.blog1} />

      <Sofa18Section bg="cream">
        {filtered.length === 0 ? (
          <Stack spacing={2} alignItems="center" sx={{ py: 10, textAlign: 'center' }}>
            <Iconify icon="solar:document-bold-duotone" width={80} sx={{ color: varAlpha(SOFA18_COLORS.clay, 0.3) }} />
            <Typography variant="h5" sx={{ color: SOFA18_COLORS.inkSoft, fontWeight: 'fontWeightLight', fontFamily: theme.typography.fontSecondaryFamily }}>Chưa có bài viết trong chuyên mục này</Typography>
          </Stack>
        ) : (
          <Grid container spacing={4}>
            {filtered.map((post) => (
              <Grid key={post.id} xs={12} sm={6}>
                <Stack component={RouterLink} href={`/sofa18/blog/${post.slug}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .blog-img': { transform: 'scale(1.05)' }, '&:hover .blog-title': { color: SOFA18_COLORS.clay } }}>
                  <Box sx={{ overflow: 'hidden', aspectRatio: '16/10', borderRadius: 3 }}>
                    <Box className="blog-img" component="img" src={post.image} alt={post.title} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                  </Box>
                  <Chip label={post.categoryLabel} size="small" sx={{ alignSelf: 'flex-start', bgcolor: varAlpha(SOFA18_COLORS.clay, 0.15), color: SOFA18_COLORS.clayDeep, fontWeight: 'fontWeightMedium', borderRadius: 1 }} />
                  <Typography className="blog-title" variant="h6" sx={{ fontWeight: 'fontWeightLight', color: SOFA18_COLORS.ink, fontFamily: theme.typography.fontSecondaryFamily, transition: 'color 0.2s' }}>{post.title}</Typography>
                  <Typography variant="body2" sx={{ color: SOFA18_COLORS.inkSoft, lineHeight: 1.9, fontWeight: 'fontWeightLight' }}>{post.excerpt}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        )}
      </Sofa18Section>
    </>
  );
}
