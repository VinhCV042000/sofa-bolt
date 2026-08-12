import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA7_COLORS } from 'src/sections/sofa7/sofa7-data';
import { Sofa7Section, Sofa7PageHero } from 'src/sections/sofa7-pages/sofa7-page-hero';
import { SOFA7_PAGE_IMAGES, SOFA7_PAGE_BLOG_POSTS, SOFA7_PAGE_BLOG_CATEGORIES } from 'src/sections/sofa7-pages/sofa7-pages-data';

// ----------------------------------------------------------------------

export default function Page() {
  const { slug } = useParams();
  const category = SOFA7_PAGE_BLOG_CATEGORIES.find((c) => c.slug === slug);
  const posts = SOFA7_PAGE_BLOG_POSTS.filter((p) => p.category === slug);

  if (!category) {
    return (
      <>
        <Helmet><title>Không tìm thấy chủ đề · Sofa7</title></Helmet>
        <Sofa7PageHero overline="Blog" title={<>Chủ đề <span>không tồn tại</span></>} image={SOFA7_PAGE_IMAGES.blog1} />
        <Sofa7Section>
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 10 }}>
            <Iconify icon="solar:file-remove-bold-duotone" width={64} sx={{ color: 'text.disabled' }} />
            <Typography variant="h4" sx={{ textTransform: 'uppercase' }}>Không tìm thấy chủ đề</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Chủ đề bạn tìm không tồn tại hoặc đã bị gỡ.</Typography>
            <Button component={RouterLink} href="/sofa7/blog" variant="contained" sx={{ borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, '&:hover': { bgcolor: SOFA7_COLORS.cyan } }}>Về blog</Button>
          </Stack>
        </Sofa7Section>
      </>
    );
  }

  return (
    <>
      <Helmet><title>{`${category.label} · Blog Sofa7`}</title></Helmet>

      <Sofa7PageHero
        overline="Chủ đề"
        title={category.label}
        subtitle={`${posts.length} bài viết trong chủ đề "${category.label}" — industrial loft & urban street.`}
        image={SOFA7_PAGE_IMAGES.blog1}
      />

      <Sofa7Section>
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 4, md: 6 } }} component={MotionViewport}>
          <Typography variant="overline" sx={{ color: 'text.disabled', letterSpacing: 4 }}>Chủ đề</Typography>
          <Typography variant="h2" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold' }}>{category.label}</Typography>
        </Stack>

        {posts.length === 0 ? (
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 10 }} component={MotionViewport}>
            <Iconify icon="solar:file-remove-bold-duotone" width={64} sx={{ color: 'text.disabled' }} />
            <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>Chưa có bài viết</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Chủ đề này hiện chưa có bài viết. Vui lòng quay lại sau.</Typography>
            <Button component={RouterLink} href="/sofa7/blog" variant="contained" sx={{ borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, '&:hover': { bgcolor: SOFA7_COLORS.cyan } }}>Xem tất cả bài viết</Button>
          </Stack>
        ) : (
          <Grid container spacing={3} component={MotionViewport}>
            {posts.map((post) => (
              <Grid key={post.id} xs={12} sm={6} md={4}>
                <Stack
                  component={m.div}
                  variants={varFade({ distance: 24 }).inUp}
                  spacing={2}
                  sx={{ height: 1, borderRadius: 0, bgcolor: 'background.paper', overflow: 'hidden', border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}`, boxShadow: (t) => t.customShadows.card, transition: (t) => t.transitions.create(['transform'], { duration: 300 }), '&:hover': { transform: 'translateY(-6px)', border: `1px solid ${SOFA7_COLORS.electric}` } }}
                >
                  <Box component="img" src={post.image} alt={post.title} sx={{ width: 1, aspectRatio: '16/10', objectFit: 'cover' }} />
                  <Stack spacing={1.5} sx={{ p: 3 }}>
                    <Chip label={post.categoryLabel} size="small" sx={{ width: 'fit-content', borderRadius: 0, bgcolor: varAlpha(SOFA7_COLORS.cyan, 0.16), color: SOFA7_COLORS.concrete, fontWeight: 'fontWeightBold' }} />
                    <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>{post.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{post.excerpt}</Typography>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ color: 'text.disabled' }}>
                      <Iconify icon="solar:calendar-bold-duotone" width={16} />
                      <Typography variant="caption">{post.date}</Typography>
                      <Typography variant="caption">· {post.readTime}</Typography>
                    </Stack>
                    <Button component={RouterLink} href={`/sofa7/blog/${post.id}`} size="small" sx={{ width: 'fit-content', borderRadius: 0, color: SOFA7_COLORS.electric }} endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>Đọc tiếp</Button>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        )}
      </Sofa7Section>

      <Sofa7Section bg="grey">
        <Stack direction="row" justifyContent="center">
          <Button component={RouterLink} href="/sofa7/blog" variant="outlined" startIcon={<Iconify icon="eva:arrow-back-fill" />} sx={{ borderRadius: 0 }}>Tất cả chủ đề</Button>
        </Stack>
      </Sofa7Section>
    </>
  );
}
