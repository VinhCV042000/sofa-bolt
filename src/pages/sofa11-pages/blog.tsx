import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varFade } from 'src/components/animate';

import { sofa11Alpha, SOFA11_COLORS } from 'src/sections/sofa11/sofa11-data';
import { Sofa11Section, Sofa11PageHero } from 'src/sections/sofa11-pages/sofa11-page-hero';
import { SOFA11_PAGE_IMAGES, SOFA11_PAGE_BLOG_POSTS, SOFA11_PAGE_BLOG_CATEGORIES } from 'src/sections/sofa11-pages/sofa11-pages-data';

export default function Page() {
  return (
    <>
      <Helmet><title>Blog — Sofa11</title></Helmet>
      <Sofa11PageHero overline="BLOG" title={<>B<span>LOG</span></>} subtitle="Tin tức, kiến thức, triết lý neon pop và nội thất bùng nổ." image={SOFA11_PAGE_IMAGES.blog1} />

      <Sofa11Section>
        <Grid container spacing={4}>
          <Grid xs={12} md={3}>
            <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inLeft} sx={{ position: 'sticky', top: 80 }}>
              <Typography variant="overline" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.4), letterSpacing: 2, fontWeight: 800 }}>CHUYÊN MỤC</Typography>
              {SOFA11_PAGE_BLOG_CATEGORIES.map((cat) => (
                <Link component={RouterLink} key={cat.slug} href={`/sofa11/blog/category/${cat.slug}`} sx={{ textDecoration: 'none', '&:hover .MuiTypography-root': { color: SOFA11_COLORS.lime } }}>
                  <Typography variant="body2" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.5), transition: 'color 0.2s', fontWeight: 700 }}>{cat.label}</Typography>
                </Link>
              ))}
            </Stack>
          </Grid>
          <Grid xs={12} md={9}>
            <Grid container spacing={4}>
              {SOFA11_PAGE_BLOG_POSTS.map((post) => (
                <Grid key={post.id} xs={12} sm={6}>
                  <Stack component={RouterLink} href={`/sofa11/blog/${post.slug}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .blog-img': { transform: 'scale(1.05)' }, '&:hover .blog-title': { color: SOFA11_COLORS.lime } }}>
                    <Box sx={{ overflow: 'hidden', borderRadius: '20px 20px 20px 0', aspectRatio: '16/10', border: `2px solid ${sofa11Alpha(SOFA11_COLORS.magenta, 0.2)}` }}>
                      <Box className="blog-img" component="img" src={post.image} alt={post.title} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                    </Box>
                    <Chip label={post.categoryLabel} size="small" sx={{ alignSelf: 'flex-start', bgcolor: sofa11Alpha(SOFA11_COLORS.lime, 0.15), color: SOFA11_COLORS.lime, fontWeight: 900 }} />
                    <Typography className="blog-title" variant="h6" sx={{ fontWeight: 900, color: SOFA11_COLORS.cream, textTransform: 'uppercase', transition: 'color 0.2s' }}>{post.title}</Typography>
                    <Typography variant="body2" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.5), lineHeight: 1.8, fontWeight: 700 }}>{post.excerpt}</Typography>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Typography variant="caption" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.3), fontWeight: 700 }}>{post.author}</Typography>
                      <Typography variant="caption" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.3) }}>·</Typography>
                      <Typography variant="caption" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.3), fontWeight: 700 }}>{post.date}</Typography>
                      <Typography variant="caption" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.3) }}>·</Typography>
                      <Typography variant="caption" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.3), fontWeight: 700 }}>{post.readTime}</Typography>
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Sofa11Section>
    </>
  );
}
