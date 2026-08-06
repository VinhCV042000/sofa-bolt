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

import { SOFA10_COLORS } from 'src/sections/sofa10/sofa10-data';
import { Sofa10PageHero, Sofa10Section } from 'src/sections/sofa10-pages/sofa10-page-hero';
import { SOFA10_PAGE_BLOG_POSTS, SOFA10_PAGE_BLOG_CATEGORIES, SOFA10_PAGE_IMAGES } from 'src/sections/sofa10-pages/sofa10-pages-data';

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet><title>Blog — Sofa10</title></Helmet>
      <Sofa10PageHero overline="BLOG" title={<>B<span>LOG</span></>} subtitle="Tin tức, kiến thức, triết lý wabi-sabi và nội thất tĩnh tại." image={SOFA10_PAGE_IMAGES.blog1} />
      <Sofa10Section>
        <Grid container spacing={4}>
          <Grid xs={12} md={3}>
            <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inLeft} sx={{ position: 'sticky', top: 80 }}>
              <Typography variant="overline" sx={{ color: 'text.disabled', letterSpacing: 2 }}>CHUYÊN MỤC</Typography>
              {SOFA10_PAGE_BLOG_CATEGORIES.map((cat) => (
                <RouterLink key={cat.slug} href={`/sofa10/blog/category/${cat.slug}`} sx={{ textDecoration: 'none', '&:hover .MuiTypography-root': { color: SOFA10_COLORS.wood } }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary', transition: 'color 0.2s', fontWeight: 'fontWeightLight' }}>{cat.label}</Typography>
                </RouterLink>
              ))}
            </Stack>
          </Grid>
          <Grid xs={12} md={9}>
            <Grid container spacing={4}>
              {SOFA10_PAGE_BLOG_POSTS.map((post) => (
                <Grid key={post.id} xs={12} sm={6}>
                  <Stack component={RouterLink} href={`/sofa10/blog/${post.slug}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .blog-img': { transform: 'scale(1.03)' }, '&:hover .blog-title': { color: SOFA10_COLORS.wood } }}>
                    <Box sx={{ overflow: 'hidden', borderRadius: 2, aspectRatio: '16/10' }}>
                      <Box className="blog-img" component="img" src={post.image} alt={post.title} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                    </Box>
                    <Chip label={post.categoryLabel} size="small" sx={{ alignSelf: 'flex-start', bgcolor: varAlpha(SOFA10_COLORS.wood, 0.08), color: SOFA10_COLORS.wood, fontWeight: 'fontWeightLight' }} />
                    <Typography className="blog-title" variant="h6" sx={{ fontWeight: 'fontWeightNormal', color: 'text.primary', transition: 'color 0.2s' }}>{post.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 2, fontWeight: 'fontWeightLight' }}>{post.excerpt}</Typography>
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
      </Sofa10Section>
    </>
  );
}
