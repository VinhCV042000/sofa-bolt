import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

import { sofa13Alpha, SOFA13_COLORS } from 'src/sections/sofa13/sofa13-data';
import { Sofa13PageHero, Sofa13Section } from 'src/sections/sofa13-pages/sofa13-page-hero';
import { SOFA13_PAGE_BLOG_POSTS, SOFA13_PAGE_BLOG_CATEGORIES, SOFA13_PAGE_IMAGES } from 'src/sections/sofa13-pages/sofa13-pages-data';

export default function Page() {
  return (
    <>
      <Helmet><title>Blog — Sofa13</title></Helmet>
      <Sofa13PageHero overline="BLOG" title={<>B<span>LOG</span></>} subtitle="Tin tức, kiến thức, triết lý art deco và nội thất jazz-age glamour." image={SOFA13_PAGE_IMAGES.blog1} />

      <Sofa13Section>
        <Grid container spacing={4}>
          <Grid xs={12} md={3}>
            <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inLeft} sx={{ position: 'sticky', top: 80 }}>
              <Typography variant="overline" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.4), letterSpacing: 2, fontWeight: 700 }}>CHUYÊN MỤC</Typography>
              {SOFA13_PAGE_BLOG_CATEGORIES.map((cat) => (
                <RouterLink key={cat.slug} href={`/sofa13/blog/category/${cat.slug}`} sx={{ textDecoration: 'none', '&:hover .MuiTypography-root': { color: SOFA13_COLORS.gold } }}>
                  <Typography variant="body2" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5), transition: 'color 0.2s', fontWeight: 700 }}>{cat.label}</Typography>
                </RouterLink>
              ))}
            </Stack>
          </Grid>
          <Grid xs={12} md={9}>
            <Grid container spacing={4}>
              {SOFA13_PAGE_BLOG_POSTS.map((post) => (
                <Grid key={post.id} xs={12} sm={6}>
                  <Stack component={RouterLink} href={`/sofa13/blog/${post.slug}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .blog-img': { transform: 'scale(1.05)' }, '&:hover .blog-title': { color: SOFA13_COLORS.gold } }}>
                    <Box sx={{ overflow: 'hidden', aspectRatio: '16/10', border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.2)}` }}>
                      <Box className="blog-img" component="img" src={post.image} alt={post.title} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                    </Box>
                    <Chip label={post.categoryLabel} size="small" sx={{ alignSelf: 'flex-start', bgcolor: sofa13Alpha(SOFA13_COLORS.gold, 0.15), color: SOFA13_COLORS.gold, fontWeight: 700, borderRadius: 0 }} />
                    <Typography className="blog-title" variant="h6" sx={{ fontWeight: 700, color: SOFA13_COLORS.ivory, letterSpacing: 1, transition: 'color 0.2s' }}>{post.title}</Typography>
                    <Typography variant="body2" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5), lineHeight: 1.9, fontWeight: 700 }}>{post.excerpt}</Typography>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Typography variant="caption" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.3), fontWeight: 700 }}>{post.author}</Typography>
                      <Typography variant="caption" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.3) }}>·</Typography>
                      <Typography variant="caption" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.3), fontWeight: 700 }}>{post.date}</Typography>
                      <Typography variant="caption" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.3) }}>·</Typography>
                      <Typography variant="caption" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.3), fontWeight: 700 }}>{post.readTime}</Typography>
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Sofa13Section>
    </>
  );
}
