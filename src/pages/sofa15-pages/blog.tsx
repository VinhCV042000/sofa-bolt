import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';

import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';
import { varAlpha } from 'src/theme/styles';

import { SOFA15_COLORS } from 'src/sections/sofa15/sofa15-data';
import { Sofa15PageHero, Sofa15Section } from 'src/sections/sofa15-pages/sofa15-page-hero';
import { SOFA15_PAGE_BLOG_POSTS, SOFA15_PAGE_BLOG_CATEGORIES, SOFA15_PAGE_IMAGES } from 'src/sections/sofa15-pages/sofa15-pages-data';

export default function Page() {
  const theme = useTheme();
  return (
    <>
      <Helmet><title>Blog — Sofa15</title></Helmet>
      <Sofa15PageHero overline="BLOG" title={<>B<span>LOG</span></>} subtitle="Tin tức, kiến thức, triết lý Art Deco và nội thất Gatsby." image={SOFA15_PAGE_IMAGES.blog1} />

      <Sofa15Section bg="black">
        <Grid container spacing={4}>
          <Grid xs={12} md={3}>
            <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inLeft} sx={{ position: 'sticky', top: 80 }}>
              <Typography variant="overline" sx={{ color: varAlpha(SOFA15_COLORS.gold, 0.6), letterSpacing: 2, fontWeight: 'fontWeightMedium' }}>CHUYÊN MỤC</Typography>
              {SOFA15_PAGE_BLOG_CATEGORIES.map((cat) => (
                <RouterLink key={cat.slug} href={`/sofa15/blog/category/${cat.slug}`} sx={{ textDecoration: 'none', '&:hover .MuiTypography-root': { color: SOFA15_COLORS.gold } }}>
                  <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5), transition: 'color 0.2s', fontWeight: 'fontWeightLight' }}>{cat.label}</Typography>
                </RouterLink>
              ))}
            </Stack>
          </Grid>
          <Grid xs={12} md={9}>
            <Grid container spacing={4}>
              {SOFA15_PAGE_BLOG_POSTS.map((post) => (
                <Grid key={post.id} xs={12} sm={6}>
                  <Stack component={RouterLink} href={`/sofa15/blog/${post.slug}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .blog-img': { transform: 'scale(1.05)' }, '&:hover .blog-title': { color: SOFA15_COLORS.gold } }}>
                    <Box sx={{ overflow: 'hidden', aspectRatio: '16/10', border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.2)}` }}>
                      <Box className="blog-img" component="img" src={post.image} alt={post.title} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                    </Box>
                    <Chip label={post.categoryLabel} size="small" sx={{ alignSelf: 'flex-start', bgcolor: varAlpha(SOFA15_COLORS.gold, 0.15), color: SOFA15_COLORS.gold, fontWeight: 'fontWeightMedium', borderRadius: 0 }} />
                    <Typography className="blog-title" variant="h6" sx={{ fontWeight: 'fontWeightLight', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily, transition: 'color 0.2s' }}>{post.title}</Typography>
                    <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4), lineHeight: 1.9, fontWeight: 'fontWeightLight' }}>{post.excerpt}</Typography>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Typography variant="caption" sx={{ color: varAlpha('#FFFFFF', 0.3) }}>{post.author}</Typography>
                      <Typography variant="caption" sx={{ color: varAlpha('#FFFFFF', 0.2) }}>·</Typography>
                      <Typography variant="caption" sx={{ color: varAlpha('#FFFFFF', 0.3) }}>{post.date}</Typography>
                      <Typography variant="caption" sx={{ color: varAlpha('#FFFFFF', 0.2) }}>·</Typography>
                      <Typography variant="caption" sx={{ color: varAlpha('#FFFFFF', 0.3) }}>{post.readTime}</Typography>
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Sofa15Section>
    </>
  );
}
