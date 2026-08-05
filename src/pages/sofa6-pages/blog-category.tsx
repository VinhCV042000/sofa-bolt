import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA6_COLORS } from 'src/sections/sofa6/sofa6-data';
import { Sofa6Section, Sofa6PageHero } from 'src/sections/sofa6-pages/sofa6-page-hero';
import { SOFA6_BLOG_POSTS, SOFA6_PAGE_IMAGES, SOFA6_BLOG_CATEGORIES } from 'src/sections/sofa6-pages/sofa6-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Chủ đề blog · Sofa Earth' };

const hexToRgb = (hex: string) => `rgb(${hex.slice(1).match(/.{2}/g)?.map((h) => parseInt(h, 16)).join(',')})`;

// ----------------------------------------------------------------------

export default function Page() {
  const { slug } = useParams();
  const category = SOFA6_BLOG_CATEGORIES.find((c) => c.slug === slug);
  const posts = SOFA6_BLOG_POSTS.filter((p) => p.category === slug);

  if (!category) {
    return (
      <>
        <Helmet><title>{metadata.title}</title></Helmet>
        <Sofa6Section>
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 10 }}>
            <Iconify icon="solar:file-remove-bold-duotone" width={64} sx={{ color: 'text.disabled' }} />
            <Typography variant="h4">Không tìm thấy chủ đề</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Chủ đề bạn tìm không tồn tại trong blog Sofa Earth.</Typography>
            <Button component={RouterLink} href="/sofa6/blog" variant="contained" sx={{ bgcolor: SOFA6_COLORS.terracotta, '&:hover': { bgcolor: SOFA6_COLORS.clay } }}>Về blog</Button>
          </Stack>
        </Sofa6Section>
      </>
    );
  }

  return (
    <>
      <Helmet><title>{`${category.label} · Sofa Earth`}</title></Helmet>

      <Sofa6PageHero
        overline="Chủ đề blog"
        title={<>Chủ đề <span>{category.label}</span></>}
        subtitle="Tổng hợp các bài viết thuộc chủ đề này từ blog Sofa Earth."
        image={SOFA6_PAGE_IMAGES.blog2}
      />

      <Sofa6Section>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 5 }} component={MotionViewport}>
          <Chip label="Tất cả" component={RouterLink} href="/sofa6/blog" clickable sx={{ color: 'text.secondary' }} />
          {SOFA6_BLOG_CATEGORIES.map((c) => (
            <Chip
              key={c.slug}
              label={c.label}
              component={RouterLink}
              href={`/sofa6/blog/category/${c.slug}`}
              clickable
              sx={c.slug === slug ? { bgcolor: SOFA6_COLORS.terracotta, color: 'common.white' } : { color: 'text.secondary' }}
            />
          ))}
        </Stack>

        {posts.length === 0 ? (
          <Stack spacing={2} alignItems="center" sx={{ textAlign: 'center', py: 8 }}>
            <Iconify icon="solar:file-bold-duotone" width={56} sx={{ color: 'text.disabled' }} />
            <Typography variant="h6">Chưa có bài viết trong chủ đề này</Typography>
            <Button component={RouterLink} href="/sofa6/blog" variant="outlined">Xem tất cả bài viết</Button>
          </Stack>
        ) : (
          <Grid container spacing={3} component={MotionViewport}>
            {posts.map((post) => (
              <Grid key={post.id} xs={12} sm={6} md={4}>
                <Stack
                  component={m.div}
                  variants={varFade({ distance: 24 }).inUp}
                  spacing={2}
                  sx={{ height: 1, borderRadius: 2, bgcolor: 'background.paper', overflow: 'hidden', boxShadow: (t) => t.customShadows.card, transition: (t) => t.transitions.create(['transform'], { duration: 300 }), '&:hover': { transform: 'translateY(-6px)' } }}
                >
                  <Box component="img" src={post.image} alt={post.title} sx={{ width: 1, aspectRatio: '16/10', objectFit: 'cover' }} />
                  <Stack spacing={1.5} sx={{ p: 3 }}>
                    <Chip label={post.categoryLabel} size="small" sx={{ width: 'fit-content', bgcolor: varAlpha(hexToRgb(SOFA6_COLORS.sageLight), 0.16), color: SOFA6_COLORS.sage }} />
                    <Typography variant="h6">{post.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{post.excerpt}</Typography>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ color: 'text.disabled' }}>
                      <Avatar sx={{ width: 24, height: 24, bgcolor: SOFA6_COLORS.terracotta, fontSize: 11 }}>{post.author.charAt(0)}</Avatar>
                      <Typography variant="caption">{post.author}</Typography>
                      <Typography variant="caption">· {post.date}</Typography>
                    </Stack>
                    <Button component={RouterLink} href={`/sofa6/blog/${post.id}`} size="small" sx={{ width: 'fit-content', color: SOFA6_COLORS.terracotta }} endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>Đọc tiếp</Button>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        )}
      </Sofa6Section>
    </>
  );
}
