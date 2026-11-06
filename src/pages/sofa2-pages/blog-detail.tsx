import { useEffect, useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA2_BLOG_POSTS } from 'src/sections/sofa2/sofa2-pages-data';
import { Sofa2Section, Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';
import { fetchBlogPostBySlug, type Sofa2CmsBlogPost } from 'src/sections/sofa2/sofa2-cms-client';

type UiPost = {
  id: string;
  title: string;
  slug: string;
  categoryLabel: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
};

const STATIC_POSTS: UiPost[] = SOFA2_BLOG_POSTS.map((p) => ({
  id: p.id,
  title: p.title,
  slug: p.slug,
  categoryLabel: p.categoryLabel,
  excerpt: p.excerpt,
  content: p.content,
  image: p.image,
  author: p.author,
  date: p.date,
  readTime: p.readTime,
}));

export default function Page() {
  const theme = useTheme();
  const { id } = useParams();
  const [post, setPost] = useState<UiPost | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let active = true;
    if (!id) return;

    const staticPost = STATIC_POSTS.find(
      (item) => item.id === id || item.slug === id
    );
    setPost(staticPost ?? null);
    setNotFound(false);

    fetchBlogPostBySlug(id)
      .then((cmsPost: Sofa2CmsBlogPost | null) => {
        if (!active || !cmsPost) return;
        setPost({
          id: cmsPost.slug || cmsPost.id,
          title: cmsPost.title,
          slug: cmsPost.slug,
          categoryLabel: cmsPost.category,
          excerpt: cmsPost.excerpt,
          content: cmsPost.content,
          image: cmsPost.cover,
          author: cmsPost.author || 'LUXE Sofa',
          date: cmsPost.publishedAt || '',
          readTime: `${Math.max(3, Math.ceil(cmsPost.content.length / 600))} phút`,
        });
      })
      .catch(() => {})
      .finally(() => {
        if (active) {
          setNotFound((prev) => !prev && !staticPost);
        }
      });

    return () => {
      active = false;
    };
  }, [id]);

  if (!post) {
    if (notFound) {
      return (
        <>
          <Helmet><title>Không tìm thấy bài viết - LUXE Sofa</title></Helmet>
          <Container sx={{ py: { xs: 10, md: 16 }, textAlign: 'center' }}>
            <Stack spacing={3} alignItems="center">
              <Iconify icon="solar:question-circle-bold-duotone" width={80} sx={{ color: 'text.disabled' }} />
              <Typography variant="h3">Không tìm thấy bài viết</Typography>
              <Typography sx={{ color: 'text.secondary' }}>Bài viết bạn tìm kiếm không tồn tại hoặc đã bị gỡ.</Typography>
              <Button component={RouterLink} href="/sofa2/blog" variant="contained" startIcon={<Iconify icon="eva:arrow-back-fill" />}>
                Quay lại blog
              </Button>
            </Stack>
          </Container>
        </>
      );
    }
    return null;
  }

  const related = STATIC_POSTS.filter((item) => item.id !== post.id).slice(0, 3);
  const paragraphs = post.content
    ? post.content.split('\n').filter((p) => p.trim())
    : ['Nội dung bài viết đang được cập nhật.'];

  return (
    <>
      <Helmet>
        <title>{`${post.title} - LUXE Sofa`}</title>
      </Helmet>

      <Sofa2PageHero
        overline={post.categoryLabel}
        title={post.title}
        image={post.image}
      />

      <Sofa2Section py={{ xs: 4, md: 5 }}>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>{post.author.charAt(0)}</Avatar>
            <Typography variant="subtitle2">{post.author}</Typography>
          </Stack>
          <Typography variant="caption" sx={{ color: 'text.disabled' }}>· {post.date} · {post.readTime} đọc</Typography>
        </Stack>
      </Sofa2Section>

      <Sofa2Section py={{ xs: 4, md: 8 }}>
        <Container component={MotionViewport} maxWidth="md">
          <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp}>
            {paragraphs.map((para, i) => (
              <Typography key={i} variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                {para}
              </Typography>
            ))}
          </Stack>

          <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ mt: 6, p: 4, borderRadius: 2, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
            <Divider />
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar sx={{ width: 56, height: 56, bgcolor: 'primary.main' }}>{post.author.charAt(0)}</Avatar>
              <Stack>
                <Typography variant="subtitle1">{post.author}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Chuyên gia nội thất tại LUXE Sofa</Typography>
              </Stack>
            </Stack>
            <Divider />
          </Stack>

          <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ mt: 6 }}>
            <Typography variant="h5">Bình luận</Typography>
            <Stack spacing={2} sx={{ p: 4, borderRadius: 2, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04), textAlign: 'center' }}>
              <Iconify icon="solar:chat-square-bold-duotone" width={40} sx={{ color: 'text.disabled', mx: 'auto' }} />
              <Typography sx={{ color: 'text.secondary' }}>Hệ thống bình luận đang được cập nhật. Vui lòng quay lại sau.</Typography>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mt: 4 }}>
            <Typography variant="subtitle2">Chia sẻ:</Typography>
            {[
              { icon: 'eva:facebook-fill', label: 'Facebook', color: '#1877F2' },
              { icon: 'logos:youtube-icon', label: 'YouTube', color: '#FF0000' },
              { icon: 'skill-icons:instagram', label: 'Instagram', color: '#E4405F' },
            ].map((s) => (
              <Button key={s.label} variant="outlined" size="small" startIcon={<Iconify icon={s.icon} />} sx={{ color: s.color, borderColor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.24) }}>
                {s.label}
              </Button>
            ))}
          </Stack>
        </Container>
      </Sofa2Section>

      <Sofa2Section bg="grey">
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>Bài viết liên quan</Typography>
          <Typography variant="h2">Tiếp tục đọc</Typography>
        </Stack>
        <Grid container spacing={3}>
          {related.map((item) => (
            <Grid key={item.id} xs={12} sm={6} md={4}>
              <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={0} sx={{ height: 1, borderRadius: 2, bgcolor: 'background.paper', overflow: 'hidden', boxShadow: (t) => t.customShadows.card }}>
                <Box component="img" src={item.image} alt={item.title} sx={{ width: 1, aspectRatio: '16/10', objectFit: 'cover' }} />
                <Stack spacing={1} sx={{ p: 3 }}>
                  <Typography variant="overline" sx={{ color: 'primary.main' }}>{item.categoryLabel}</Typography>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.excerpt}</Typography>
                  <Button component={RouterLink} href={`/sofa2/blog/${item.slug || item.id}`} size="small" sx={{ width: 'fit-content' }} endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>Đọc tiếp</Button>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa2Section>
    </>
  );
}
