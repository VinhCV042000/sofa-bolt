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

import { SOFA9_COLORS } from 'src/sections/sofa9/sofa9-data';
import { Sofa9Section, Sofa9PageHero } from 'src/sections/sofa9-pages/sofa9-page-hero';
import { SOFA9_PAGE_IMAGES, SOFA9_PAGE_BLOG_POSTS, SOFA9_PAGE_BLOG_CATEGORIES } from 'src/sections/sofa9-pages/sofa9-pages-data';

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Blog — Sofa9</title>
      </Helmet>

      <Sofa9PageHero overline="BLOG" title={<>B<span>LOG</span></>} subtitle="Tin tức, kinh nghiệm, xu hướng retro và nội thất vui vẻ." image={SOFA9_PAGE_IMAGES.blog1} />

      <Sofa9Section>
        <Grid container spacing={4}>
          <Grid xs={12} md={3}>
            <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inLeft} sx={{ position: 'sticky', top: 80 }}>
              <Typography variant="overline" sx={{ color: 'text.disabled', letterSpacing: 2 }}>CHUYÊN MỤC</Typography>
              {SOFA9_PAGE_BLOG_CATEGORIES.map((cat) => (
                <Link component={RouterLink} key={cat.slug} href={`/sofa9/blog/category/${cat.slug}`} sx={{ textDecoration: 'none', '&:hover .MuiTypography-root': { color: SOFA9_COLORS.pink } }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary', transition: 'color 0.2s' }}>{cat.label}</Typography>
                </Link>
              ))}
            </Stack>
          </Grid>
          <Grid xs={12} md={9}>
            <Grid container spacing={4}>
              {SOFA9_PAGE_BLOG_POSTS.map((post) => (
                <Grid key={post.id} xs={12} sm={6}>
                  <Stack component={RouterLink} href={`/sofa9/blog/${post.slug}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .blog-img': { transform: 'scale(1.05)' }, '&:hover .blog-title': { color: SOFA9_COLORS.pink } }}>
                    <Box sx={{ overflow: 'hidden', borderRadius: 3, aspectRatio: '16/10' }}>
                      <Box className="blog-img" component="img" src={post.image} alt={post.title} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                    </Box>
                    <Chip label={post.categoryLabel} size="small" sx={{ alignSelf: 'flex-start', bgcolor: varAlpha(SOFA9_COLORS.pink, 0.08), color: SOFA9_COLORS.pink, fontWeight: 'fontWeightBold' }} />
                    <Typography className="blog-title" variant="h6" sx={{ fontWeight: 'fontWeightBold', color: 'text.primary', transition: 'color 0.2s' }}>{post.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{post.excerpt}</Typography>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Typography variant="caption" sx={{ color: 'text.disabled' }}>{post.author}</Typography>
                      <Typography variant="caption" sx={{ color: 'text.disabled' }}>·</Typography>
                      <Typography variant="caption" sx={{ color: 'text.disabled' }}>{post.date}</Typography>
                      <Typography variant="caption" sx={{ color: 'text.disabled' }}>·</Typography>
                      <Typography variant="caption" sx={{ color: 'text.disabled' }}>{post.readTime}</Typography>
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Sofa9Section>
    </>
  );
}
