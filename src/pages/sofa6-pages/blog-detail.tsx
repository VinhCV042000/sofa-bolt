import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA6_COLORS } from 'src/sections/sofa6/sofa6-data';
import { SOFA6_BLOG_POSTS } from 'src/sections/sofa6-pages/sofa6-pages-data';
import { Sofa6Section, Sofa6PageHero } from 'src/sections/sofa6-pages/sofa6-page-hero';

// ----------------------------------------------------------------------

const SHARE = [
  { icon: 'solar:facebook-bold-duotone', label: 'Facebook' },
  { icon: 'solar:instagram-bold-duotone', label: 'Instagram' },
  { icon: 'solar:chat-bold-duotone', label: 'Zalo' },
  { icon: 'solar:letter-bold-duotone', label: 'Email' },
];

// ----------------------------------------------------------------------

export default function Page() {
  const { id } = useParams();
  const post = SOFA6_BLOG_POSTS.find((p) => p.id === id);
  const [sent, setSent] = useState(false);

  if (!post) {
    return (
      <>
        <Helmet><title>Không tìm thấy bài viết · Sofa Earth</title></Helmet>
        <Sofa6Section>
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 10 }}>
            <Iconify icon="solar:file-remove-bold-duotone" width={64} sx={{ color: 'text.disabled' }} />
            <Typography variant="h4">Không tìm thấy bài viết</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Bài viết bạn tìm không tồn tại hoặc đã bị gỡ.</Typography>
            <Button component={RouterLink} href="/sofa6/blog" variant="contained" sx={{ bgcolor: SOFA6_COLORS.terracotta, '&:hover': { bgcolor: SOFA6_COLORS.clay } }}>Về blog</Button>
          </Stack>
        </Sofa6Section>
      </>
    );
  }

  const related = SOFA6_BLOG_POSTS.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3);

  return (
    <>
      <Helmet><title>{`${post.title} · Sofa Earth`}</title></Helmet>

      <Sofa6PageHero
        overline={post.categoryLabel}
        title={post.title}
        subtitle={post.excerpt}
        image={post.image}
      />

      <Sofa6Section>
        <Grid container spacing={{ xs: 4, md: 6 }} component={MotionViewport}>
          {/* Article */}
          <Grid xs={12} md={8}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Stack direction="row" spacing={1} alignItems="center">
                  <Avatar sx={{ bgcolor: SOFA6_COLORS.terracotta }}>{post.author.charAt(0)}</Avatar>
                  <Stack>
                    <Typography variant="subtitle2">{post.author}</Typography>
                    <Typography variant="caption" sx={{ color: 'text.disabled' }}>{post.date} · {post.readTime}</Typography>
                  </Stack>
                </Stack>
              </Stack>

              <Divider />

              <Box component="img" src={post.image} alt={post.title} sx={{ width: 1, borderRadius: 2, aspectRatio: '16/9', objectFit: 'cover' }} />

              <Typography variant="body1" sx={{ lineHeight: 1.9, color: 'text.secondary' }}>{post.content}</Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.9, color: 'text.secondary' }}>
                Tại Sofa Earth, chúng tôi tin rằng nội thất bền vững không chỉ là xu hướng mà là cách sống. Mỗi chiếc sofa thủ công là kết tinh của vật liệu thiên nhiên, thuốc nhuộm thực vật và đôi bàn tay nghệ nhân Việt.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.9, color: 'text.secondary' }}>
                Hãy để chúng tôi đồng hành cùng bạn kiến tạo không gian sống xanh, an lành và gần gũi thiên nhiên.
              </Typography>

              {/* Share */}
              <Divider />
              <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap>
                <Typography variant="subtitle2">Chia sẻ:</Typography>
                {SHARE.map((s) => (
                  <Button key={s.label} variant="soft" sx={{ minWidth: 'auto', px: 1.5, color: SOFA6_COLORS.terracotta }}>
                    <Iconify icon={s.icon} width={22} />
                  </Button>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* Sidebar */}
          <Grid xs={12} md={4}>
            <Stack spacing={4}>
              {/* Author */}
              <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                <Typography variant="overline" sx={{ color: 'text.disabled' }}>Tác giả</Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar sx={{ width: 48, height: 48, bgcolor: SOFA6_COLORS.terracotta, fontSize: 18 }}>{post.author.charAt(0)}</Avatar>
                  <Stack>
                    <Typography variant="subtitle1">{post.author}</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>Nghệ nhân Sofa Earth</Typography>
                  </Stack>
                </Stack>
              </Stack>

              {/* Related */}
              {related.length > 0 && (
                <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                  <Typography variant="overline" sx={{ color: 'text.disabled' }}>Bài liên quan</Typography>
                  {related.map((r) => (
                    <Button key={r.id} component={RouterLink} href={`/sofa6/blog/${r.id}`} fullWidth sx={{ textAlign: 'left', color: 'text.primary' }}>
                      <Stack spacing={1} alignItems="flex-start">
                        <Box component="img" src={r.image} alt={r.title} sx={{ width: 1, borderRadius: 1, aspectRatio: '16/9', objectFit: 'cover' }} />
                        <Typography variant="subtitle2">{r.title}</Typography>
                        <Typography variant="caption" sx={{ color: 'text.disabled' }}>{r.date}</Typography>
                      </Stack>
                    </Button>
                  ))}
                </Stack>
              )}
            </Stack>
          </Grid>
        </Grid>
      </Sofa6Section>

      {/* Comments */}
      <Sofa6Section bg="grey">
        <Stack spacing={4} sx={{ maxWidth: 720, mx: 'auto' }} component={MotionViewport}>
          <Typography variant="h4">Bình luận</Typography>

          {/* Comments placeholder */}
          <Stack spacing={2}>
            {[1, 2].map((i) => (
              <Stack key={i} direction="row" spacing={2} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                <Avatar sx={{ bgcolor: SOFA6_COLORS.sage }}>{i === 1 ? 'M' : 'T'}</Avatar>
                <Stack spacing={0.5}>
                  <Typography variant="subtitle2">{i === 1 ? 'Minh Trang' : 'Trần Hải'}</Typography>
                  <Typography variant="caption" sx={{ color: 'text.disabled' }}>2 ngày trước</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Bài viết rất hữu ích, mình đang tìm hiểu về sofa linen tự nhiên cho phòng khách.</Typography>
                </Stack>
              </Stack>
            ))}
          </Stack>

          {/* Comment form */}
          <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: { xs: 3, md: 4 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
            <Typography variant="h6">Để lại bình luận</Typography>
            <Grid container spacing={2}>
              <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" /></Grid>
              <Grid xs={12} sm={6}><TextField fullWidth label="Email" type="email" /></Grid>
              <Grid xs={12}><TextField fullWidth label="Bình luận của bạn" multiline rows={4} /></Grid>
            </Grid>
            <Button variant="contained" sx={{ width: 'fit-content', bgcolor: SOFA6_COLORS.terracotta, '&:hover': { bgcolor: SOFA6_COLORS.clay } }} startIcon={<Iconify icon="solar:chat-round-like-bold-duotone" />} onClick={() => setSent(true)}>
              Gửi bình luận
            </Button>
            {sent && (
              <Stack direction="row" spacing={1} alignItems="center" sx={{ color: SOFA6_COLORS.sage }}>
                <Iconify icon="solar:check-circle-bold-duotone" width={20} />
                <Typography variant="body2">Cảm ơn bạn! Bình luận sẽ hiển thị sau khi được duyệt.</Typography>
              </Stack>
            )}
          </Stack>
        </Stack>
      </Sofa6Section>
    </>
  );
}
