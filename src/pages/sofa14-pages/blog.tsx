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

import { sofa14Alpha, SOFA14_COLORS } from 'src/sections/sofa14/sofa14-data';
import { Sofa14PageHero, Sofa14Section } from 'src/sections/sofa14-pages/sofa14-page-hero';
import { SOFA14_PAGE_BLOG_POSTS, SOFA14_PAGE_BLOG_CATEGORIES, SOFA14_PAGE_IMAGES } from 'src/sections/sofa14-pages/sofa14-pages-data';

export default function Page() {
  return (
    <>
      <Helmet><title>Blog — Sofa14</title></Helmet>
      <Sofa14PageHero overline="BLOG" title={<>B<span>LOG</span></>} subtitle="Tin tức, kiến thức, triết lý pastel pop và nội thất claymorphism." image={SOFA14_PAGE_IMAGES.blog1} />

      <Sofa14Section>
        <Grid container spacing={4}>
          <Grid xs={12} md={3}>
            <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inLeft} sx={{ position: 'sticky', top: 80 }}>
              <Typography variant="overline" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.6), letterSpacing: 2, fontWeight: 800 }}>CHUYÊN MỤC</Typography>
              {SOFA14_PAGE_BLOG_CATEGORIES.map((cat) => (
                <RouterLink key={cat.slug} href={`/sofa14/blog/category/${cat.slug}`} sx={{ textDecoration: 'none', '&:hover .MuiTypography-root': { color: SOFA14_COLORS.coralDeep } }}>
                  <Typography variant="body2" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.8), transition: 'color 0.2s', fontWeight: 700 }}>{cat.label}</Typography>
                </RouterLink>
              ))}
            </Stack>
          </Grid>
          <Grid xs={12} md={9}>
            <Grid container spacing={4}>
              {SOFA14_PAGE_BLOG_POSTS.map((post) => (
                <Grid key={post.id} xs={12} sm={6}>
                  <Stack component={RouterLink} href={`/sofa14/blog/${post.slug}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .blog-img': { transform: 'scale(1.05)' }, '&:hover .blog-title': { color: SOFA14_COLORS.coralDeep } }}>
                    <Box sx={{ overflow: 'hidden', aspectRatio: '16/10', borderRadius: '24px', border: `6px solid ${SOFA14_COLORS.white}`, boxShadow: `4px 4px 0 ${sofa14Alpha(SOFA14_COLORS.mint, 0.4)}` }}>
                      <Box className="blog-img" component="img" src={post.image} alt={post.title} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                    </Box>
                    <Chip label={post.categoryLabel} size="small" sx={{ alignSelf: 'flex-start', bgcolor: sofa14Alpha(SOFA14_COLORS.coral, 0.2), color: SOFA14_COLORS.coralDeep, fontWeight: 800, borderRadius: 99 }} />
                    <Typography className="blog-title" variant="h6" sx={{ fontWeight: 800, color: SOFA14_COLORS.ink, transition: 'color 0.2s' }}>{post.title}</Typography>
                    <Typography variant="body2" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.7), lineHeight: 1.9, fontWeight: 700 }}>{post.excerpt}</Typography>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Typography variant="caption" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.5), fontWeight: 700 }}>{post.author}</Typography>
                      <Typography variant="caption" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.5) }}>·</Typography>
                      <Typography variant="caption" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.5), fontWeight: 700 }}>{post.date}</Typography>
                      <Typography variant="caption" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.5) }}>·</Typography>
                      <Typography variant="caption" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.5), fontWeight: 700 }}>{post.readTime}</Typography>
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Sofa14Section>
    </>
  );
}
