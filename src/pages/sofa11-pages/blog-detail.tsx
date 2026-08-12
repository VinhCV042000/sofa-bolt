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

import { sofa11Alpha, SOFA11_COLORS } from 'src/sections/sofa11/sofa11-data';
import { SOFA11_PAGE_BLOG_POSTS } from 'src/sections/sofa11-pages/sofa11-pages-data';
import { Sofa11Section, Sofa11PageHero } from 'src/sections/sofa11-pages/sofa11-page-hero';

export default function Page() {
  const params = useParams();
  const slug = params.id || '';
  const post = SOFA11_PAGE_BLOG_POSTS.find((p) => p.slug === slug) || SOFA11_PAGE_BLOG_POSTS[0];
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);

  return (
    <>
      <Helmet><title>{post.title} — Sofa11 Blog</title></Helmet>
      <Sofa11PageHero overline="BLOG" title={<span>{post.title.toUpperCase()}</span>} subtitle={post.excerpt} image={post.image} />

      <Sofa11Section>
        <Grid container spacing={5}>
          <Grid xs={12} md={8}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Box sx={{ overflow: 'hidden', borderRadius: '24px 24px 24px 0', aspectRatio: '16/9', border: `3px solid ${sofa11Alpha(SOFA11_COLORS.magenta, 0.3)}` }}>
                <Box component="img" src={post.image} alt={post.title} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
              </Box>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ bgcolor: SOFA11_COLORS.magenta, color: SOFA11_COLORS.void, fontWeight: 900 }}>{post.author.charAt(0)}</Avatar>
                <Stack>
                  <Typography variant="subtitle2" sx={{ fontWeight: 900, color: SOFA11_COLORS.cream }}>{post.author}</Typography>
                  <Typography variant="caption" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.3), fontWeight: 700 }}>{post.date} · {post.readTime} đọc</Typography>
                </Stack>
              </Stack>
              <Divider sx={{ borderColor: sofa11Alpha(SOFA11_COLORS.cream, 0.1) }} />
              <Typography variant="body1" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.7), lineHeight: 1.8 }}>{post.content}</Typography>
              <Chip label={post.categoryLabel} size="small" sx={{ alignSelf: 'flex-start', bgcolor: sofa11Alpha(SOFA11_COLORS.lime, 0.15), color: SOFA11_COLORS.lime, fontWeight: 900 }} />
              <Divider sx={{ borderColor: sofa11Alpha(SOFA11_COLORS.cream, 0.1) }} />
              <Stack spacing={3}>
                <Typography variant="h5" sx={{ fontWeight: 900, color: SOFA11_COLORS.cream, textTransform: 'uppercase' }}>Bình luận ({comments.length})</Typography>
                {comments.map((c, i) => (
                  <Stack key={i} direction="row" spacing={2} sx={{ p: 2, borderRadius: '12px 12px 12px 0', bgcolor: sofa11Alpha(SOFA11_COLORS.grape, 0.5), border: `1px solid ${sofa11Alpha(SOFA11_COLORS.cream, 0.08)}` }}>
                    <Avatar sx={{ bgcolor: '#8C8275', color: SOFA11_COLORS.cream }}>K{i + 1}</Avatar>
                    <Typography variant="body2" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.6) }}>{c}</Typography>
                  </Stack>
                ))}
                <Stack spacing={2}>
                  <TextField fullWidth multiline rows={3} label="Viết bình luận" value={comment} onChange={(e) => setComment(e.target.value)} sx={{ '& .MuiOutlinedInput-root': { color: SOFA11_COLORS.cream }, '& .MuiInputLabel-root': { color: sofa11Alpha(SOFA11_COLORS.cream, 0.5) } }} />
                  <Button onClick={() => { if (comment.trim()) { setComments([...comments, comment]); setComment(''); } }} variant="contained" sx={{ alignSelf: 'flex-start', borderRadius: 99, fontWeight: 900, textTransform: 'uppercase', color: SOFA11_COLORS.void, bgcolor: SOFA11_COLORS.lime, '&:hover': { bgcolor: SOFA11_COLORS.cyan } }}>Gửi bình luận</Button>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} md={4}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight} sx={{ position: 'sticky', top: 80 }}>
              <Typography variant="h6" sx={{ fontWeight: 900, color: SOFA11_COLORS.lime, textTransform: 'uppercase' }}>Chia sẻ</Typography>
              <Stack direction="row" spacing={2}>
                <Iconify icon="solar:facebook-bold-duotone" width={32} sx={{ color: '#1877F2', cursor: 'pointer' }} />
                <Iconify icon="solar:gallery-bold-duotone" width={32} sx={{ color: '#E4405F', cursor: 'pointer' }} />
                <Iconify icon="solar:letter-bold-duotone" width={32} sx={{ color: SOFA11_COLORS.lime, cursor: 'pointer' }} />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Sofa11Section>
    </>
  );
}
