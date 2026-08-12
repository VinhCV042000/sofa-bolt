import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa2Section, Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';
import { SOFA2_BLOG_POSTS, SOFA2_PAGE_IMAGES, SOFA2_BLOG_CATEGORIES } from 'src/sections/sofa2/sofa2-pages-data';

// ----------------------------------------------------------------------

export default function Page() {
  const theme = useTheme();
  const { slug } = useParams();
  const category = SOFA2_BLOG_CATEGORIES.find((c) => c.slug === slug);
  const posts = SOFA2_BLOG_POSTS.filter((p) => p.category === slug);
  const label = category?.label ?? slug;

  return (
    <>
      <Helmet>
        <title>{`${label} - Blog LUXE Sofa`}</title>
      </Helmet>

      <Sofa2PageHero
        overline="Danh mục blog"
        title={label}
        subtitle="Tổng hợp các bài viết thuộc danh mục này — chia sẻ từ chuyên gia LUXE Sofa."
        image={SOFA2_PAGE_IMAGES.blog1}
      />

      {/* Category chips */}
      <Sofa2Section py={{ xs: 4, md: 5 }}>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Chip
            label="Tất cả"
            component={RouterLink}
            href="/sofa2/blog"
            clickable
            variant="soft"
          />
          {SOFA2_BLOG_CATEGORIES.map((cat) => (
            <Chip
              key={cat.slug}
              label={cat.label}
              component={RouterLink}
              href={`/sofa2/blog/category/${cat.slug}`}
              clickable
              color={cat.slug === slug ? 'primary' : 'default'}
              variant={cat.slug === slug ? 'filled' : 'soft'}
            />
          ))}
        </Stack>
      </Sofa2Section>

      {/* Posts grid */}
      <Sofa2Section bg="grey" py={{ xs: 4, md: 8 }}>
        {posts.length > 0 ? (
          <Grid container spacing={3}>
            {posts.map((post) => (
              <Grid key={post.id} xs={12} sm={6} md={4}>
                <Stack
                  component={m.div}
                  variants={varFade({ distance: 24 }).inUp}
                  spacing={0}
                  sx={{ height: 1, borderRadius: 2, bgcolor: 'background.paper', overflow: 'hidden', boxShadow: (t) => t.customShadows.card, transition: (t) => t.transitions.create(['transform'], { duration: 300 }), '&:hover': { transform: 'translateY(-6px)' } }}
                >
                  <Box component="img" src={post.image} alt={post.title} sx={{ width: 1, aspectRatio: '16/10', objectFit: 'cover' }} />
                  <Stack spacing={1.5} sx={{ p: 3 }}>
                    <Chip label={post.categoryLabel} size="small" color="primary" variant="soft" sx={{ width: 'fit-content' }} />
                    <Typography variant="h6">{post.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{post.excerpt}</Typography>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ color: 'text.disabled' }}>
                      <Iconify icon="solar:calendar-bold-duotone" width={16} />
                      <Typography variant="caption">{post.date}</Typography>
                      <Typography variant="caption">· {post.readTime}</Typography>
                    </Stack>
                    <Button component={RouterLink} href={`/sofa2/blog/${post.id}`} size="small" sx={{ width: 'fit-content' }} endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>Đọc tiếp</Button>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Stack component={MotionViewport} spacing={3} alignItems="center" sx={{ textAlign: 'center', py: { xs: 6, md: 10 } }}>
            <Iconify icon="solar:document-bold-duotone" width={80} sx={{ color: 'text.disabled' }} />
            <Typography variant="h4">Chưa có bài viết</Typography>
            <Typography sx={{ color: 'text.secondary', maxWidth: 480 }}>Danh mục &ldquo;{label}&rdquo; hiện chưa có bài viết nào. Quay lại sau hoặc khám phá các bài viết khác.</Typography>
            <Button component={RouterLink} href="/sofa2/blog" variant="contained" startIcon={<Iconify icon="eva:arrow-back-fill" />}>
              Xem tất cả bài viết
            </Button>
          </Stack>
        )}
      </Sofa2Section>
    </>
  );
}
