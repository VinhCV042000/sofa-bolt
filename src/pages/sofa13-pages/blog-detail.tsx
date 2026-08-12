import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { sofa13Alpha, SOFA13_COLORS } from 'src/sections/sofa13/sofa13-data';
import { SOFA13_PAGE_BLOG_POSTS } from 'src/sections/sofa13-pages/sofa13-pages-data';
import { Sofa13Section, Sofa13PageHero } from 'src/sections/sofa13-pages/sofa13-page-hero';

export default function Page() {
  const params = useParams();
  const slug = params.id || '';
  const post = SOFA13_PAGE_BLOG_POSTS.find((p) => p.slug === slug) || SOFA13_PAGE_BLOG_POSTS[0];
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);

  return (
    <>
      <Helmet><title>{post.title} — Sofa13 Blog</title></Helmet>
      <Sofa13PageHero overline="BLOG" title={<span>{post.title.toUpperCase()}</span>} subtitle={post.excerpt} image={post.image} />

      <Sofa13Section>
        <Grid container spacing={5}>
          <Grid xs={12} md={8}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Box sx={{ overflow: 'hidden', aspectRatio: '16/9', border: `2px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.3)}`, p: '8px', bgcolor: SOFA13_COLORS.charcoal }}>
                <Box component="img" src={post.image} alt={post.title} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
              </Box>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ bgcolor: SOFA13_COLORS.gold, color: SOFA13_COLORS.noir, fontWeight: 700 }}>{post.author.charAt(0)}</Avatar>
                <Stack>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: SOFA13_COLORS.ivory }}>{post.author}</Typography>
                  <Typography variant="caption" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.3), fontWeight: 700 }}>{post.date} · {post.readTime} đọc</Typography>
                </Stack>
              </Stack>
              <Divider sx={{ borderColor: sofa13Alpha(SOFA13_COLORS.ivory, 0.1) }} />
              <Typography variant="body1" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.7), lineHeight: 1.9 }}>{post.content}</Typography>
              <Chip label={post.categoryLabel} size="small" sx={{ alignSelf: 'flex-start', bgcolor: sofa13Alpha(SOFA13_COLORS.gold, 0.15), color: SOFA13_COLORS.gold, fontWeight: 700, borderRadius: 0 }} />
              <Divider sx={{ borderColor: sofa13Alpha(SOFA13_COLORS.ivory, 0.1) }} />
              <Stack spacing={3}>
                <Typography variant="h5" sx={{ fontWeight: 700, color: SOFA13_COLORS.ivory, letterSpacing: 1 }}>Bình luận ({comments.length})</Typography>
                {comments.map((c, i) => (
                  <Stack key={i} direction="row" spacing={2} sx={{ p: 2, border: `1px solid ${sofa13Alpha(SOFA13_COLORS.ivory, 0.08)}`, bgcolor: sofa13Alpha(SOFA13_COLORS.charcoal, 0.5) }}>
                    <Avatar sx={{ bgcolor: SOFA13_COLORS.charcoalSoft, color: SOFA13_COLORS.ivory, border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.3)}` }}>{i + 1}</Avatar>
                    <Typography variant="body2" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.6) }}>{c}</Typography>
                  </Stack>
                ))}
                <Stack spacing={2}>
                  <TextField fullWidth multiline rows={3} label="Viết bình luận" value={comment} onChange={(e) => setComment(e.target.value)} sx={{ '& .MuiOutlinedInput-root': { color: SOFA13_COLORS.ivory }, '& .MuiInputLabel-root': { color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) } }} />
                  <Button onClick={() => { if (comment.trim()) { setComments([...comments, comment]); setComment(''); } }} variant="contained" sx={{ alignSelf: 'flex-start', borderRadius: 0, fontWeight: 700, letterSpacing: 1.5, color: SOFA13_COLORS.noir, bgcolor: SOFA13_COLORS.gold, '&:hover': { bgcolor: SOFA13_COLORS.goldPale } }}>Gửi bình luận</Button>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} md={4}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight} sx={{ position: 'sticky', top: 80 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: SOFA13_COLORS.gold, letterSpacing: 1 }}>Chia sẻ</Typography>
              <Stack direction="row" spacing={2}>
                <Iconify icon="solar:facebook-bold-duotone" width={32} sx={{ color: '#1877F2', cursor: 'pointer' }} />
                <Iconify icon="solar:gallery-bold-duotone" width={32} sx={{ color: '#E4405F', cursor: 'pointer' }} />
                <Iconify icon="solar:letter-bold-duotone" width={32} sx={{ color: SOFA13_COLORS.gold, cursor: 'pointer' }} />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Sofa13Section>
    </>
  );
}
