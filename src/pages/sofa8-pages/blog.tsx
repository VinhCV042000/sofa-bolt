import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';

import { varAlpha } from 'src/theme/styles';
import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

import { SOFA8_COLORS } from 'src/sections/sofa8/sofa8-data';
import { Sofa8PageHero, Sofa8Section } from 'src/sections/sofa8-pages/sofa8-page-hero';
import { SOFA8_PAGE_BLOG_POSTS, SOFA8_PAGE_BLOG_CATEGORIES, SOFA8_PAGE_IMAGES } from 'src/sections/sofa8-pages/sofa8-pages-data';

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Blog — Sofa8</title>
      </Helmet>

      <Sofa8PageHero overline="BLOG" title={<>B<span>LOG</span></>} subtitle="Tin tức, kinh nghiệm, xu hướng coastal và nội thất." image={SOFA8_PAGE_IMAGES.blog1} />

      <Sofa8Section>
        <Grid container spacing={4}>
          <Grid xs={12} md={3}>
            <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inLeft} sx={{ position: 'sticky', top: 80 }}>
              <Typography variant="overline" sx={{ color: 'text.disabled', letterSpacing: 2 }}>CHUYÊN MỤC</Typography>
              {SOFA8_PAGE_BLOG_CATEGORIES.map((cat) => (
                <RouterLink key={cat.slug} href={`/sofa8/blog/category/${cat.slug}`} sx={{ textDecoration: 'none', '&:hover .MuiTypography-root': { color: SOFA8_COLORS.coral } }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary', transition: 'color 0.2s' }}>{cat.label}</Typography>
                </RouterLink>
              ))}
            </Stack>
          </Grid>
          <Grid xs={12} md={9}>
            <Grid container spacing={4}>
              {SOFA8_PAGE_BLOG_POSTS.map((post) => (
                <Grid key={post.id} xs={12} sm={6}>
                  <Stack component={RouterLink} href={`/sofa8/blog/${post.slug}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .blog-img': { transform: 'scale(1.05)' }, '&:hover .blog-title': { color: SOFA8_COLORS.coral } }}>
                    <Box sx={{ overflow: 'hidden', borderRadius: 3, aspectRatio: '16/10' }}>
                      <Box className="blog-img" component="img" src={post.image} alt={post.title} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                    </Box>
                    <Chip label={post.categoryLabel} size="small" sx={{ alignSelf: 'flex-start', bgcolor: varAlpha(SOFA8_COLORS.ocean, 0.08), color: SOFA8_COLORS.ocean, fontWeight: 'fontWeightBold' }} />
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
      </Sofa8Section>
    </>
  );
}
