import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { varFade } from 'src/components/animate';

import { SOFA16_COLORS } from 'src/sections/sofa16/sofa16-data';
import { Sofa16Section, Sofa16PageHero } from 'src/sections/sofa16-pages/sofa16-page-hero';
import { SOFA16_PAGE_IMAGES, SOFA16_PAGE_BLOG_POSTS, SOFA16_PAGE_BLOG_CATEGORIES } from 'src/sections/sofa16-pages/sofa16-pages-data';

export default function Page() {
  const theme = useTheme();
  return (
    <>
      <Helmet><title>Blog — Sofa16</title></Helmet>
      <Sofa16PageHero overline="BLOG" title={<>B<span>LOG</span></>} subtitle="Tin tức, kiến thức, triết lý Mediterranean và nội thất Riviera." image={SOFA16_PAGE_IMAGES.blog1} />

      <Sofa16Section bg="cream">
        <Grid container spacing={4}>
          <Grid xs={12} md={3}>
            <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inLeft} sx={{ position: 'sticky', top: 80 }}>
              <Typography variant="overline" sx={{ color: SOFA16_COLORS.terracottaDeep, letterSpacing: 2, fontWeight: 'fontWeightMedium' }}>CHUYÊN MỤC</Typography>
              {SOFA16_PAGE_BLOG_CATEGORIES.map((cat) => (
                <Link component={RouterLink} key={cat.slug} href={`/sofa16/blog/category/${cat.slug}`} sx={{ textDecoration: 'none', '&:hover .MuiTypography-root': { color: SOFA16_COLORS.terracotta } }}>
                  <Typography variant="body2" sx={{ color: SOFA16_COLORS.inkSoft, transition: 'color 0.2s', fontWeight: 'fontWeightLight' }}>{cat.label}</Typography>
                </Link>
              ))}
            </Stack>
          </Grid>
          <Grid xs={12} md={9}>
            <Grid container spacing={4}>
              {SOFA16_PAGE_BLOG_POSTS.map((post) => (
                <Grid key={post.id} xs={12} sm={6}>
                  <Stack component={RouterLink} href={`/sofa16/blog/${post.slug}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .blog-img': { transform: 'scale(1.05)' }, '&:hover .blog-title': { color: SOFA16_COLORS.terracotta } }}>
                    <Box sx={{ overflow: 'hidden', aspectRatio: '16/10', borderRadius: 3 }}>
                      <Box className="blog-img" component="img" src={post.image} alt={post.title} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                    </Box>
                    <Chip label={post.categoryLabel} size="small" sx={{ alignSelf: 'flex-start', bgcolor: varAlpha(SOFA16_COLORS.terracotta, 0.15), color: SOFA16_COLORS.terracottaDeep, fontWeight: 'fontWeightMedium', borderRadius: 1 }} />
                    <Typography className="blog-title" variant="h6" sx={{ fontWeight: 'fontWeightLight', color: SOFA16_COLORS.ink, fontFamily: theme.typography.fontSecondaryFamily, transition: 'color 0.2s' }}>{post.title}</Typography>
                    <Typography variant="body2" sx={{ color: SOFA16_COLORS.inkSoft, lineHeight: 1.9, fontWeight: 'fontWeightLight' }}>{post.excerpt}</Typography>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Typography variant="caption" sx={{ color: SOFA16_COLORS.inkSoft }}>{post.author}</Typography>
                      <Typography variant="caption" sx={{ color: SOFA16_COLORS.inkSoft, opacity: 0.5 }}>·</Typography>
                      <Typography variant="caption" sx={{ color: SOFA16_COLORS.inkSoft }}>{post.date}</Typography>
                      <Typography variant="caption" sx={{ color: SOFA16_COLORS.inkSoft, opacity: 0.5 }}>·</Typography>
                      <Typography variant="caption" sx={{ color: SOFA16_COLORS.inkSoft }}>{post.readTime}</Typography>
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Sofa16Section>
    </>
  );
}
